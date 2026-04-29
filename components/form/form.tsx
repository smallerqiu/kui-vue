import type { ExtractPropTypes, PropType } from "vue";
import { defineComponent, nextTick, provide, reactive, ref } from "vue";
import type { BooleanType, DirectionType, ShapeType, SizeType, ThemeType } from "../const/types";
import type { ColProps, FormRule } from "./types";

export interface FormSubmitEvent {
  valid: boolean;
}

const formProps = {
  layout: {
    type: String as PropType<DirectionType>,
    default: "horizontal",
  },
  model: Object as PropType<Record<string, any>>,
  name: String,
  labelCol: Object as PropType<ColProps>,
  wrapperCol: Object as PropType<ColProps>,
  rules: {
    type: Object as PropType<Record<string, FormRule[]>>,
  },
  size: {
    type: String as PropType<SizeType>,
  },
  theme: String as PropType<ThemeType>,
  shape: String as PropType<ShapeType>,
  disabled: Boolean as BooleanType,
  onSubmit: {
    type: Function as PropType<(e: FormSubmitEvent) => void>,
  },
  // onChange: { //TODO
  //   type: Function as PropType<(e: FormChangeEvent) => void>,
  // },
};

export interface FormExpose {
  validate: (callback?: (result: { valid: boolean }) => void) => void;
  reset: () => void;
  test: (key: string) => void;
  submit: (e: FormSubmitEvent) => void;
}

export type FormProps = ExtractPropTypes<typeof formProps>;

const Form = defineComponent({
  name: "Form",
  props: formProps,
  setup(props, { emit, slots, expose }) {
    const formRef = ref(null);

    const formItems = ref<Record<string, any>>({});
    // const formItems = ref<Map<string, any>>(new Map());

    const { model, rules, size, shape, theme, disabled, layout, name, labelCol, wrapperCol } =
      props;

    const updateMode = (prop: string, value = null) => {
      const { o, k } = getPropByPath(model, prop);
      // console.log(o, k, value);
      if (o) {
        o[k] = value;
        emit("change", model);
      }
    };
    const getValueFromProp = (path: string) => {
      const { v } = getPropByPath(model, path);
      // console.log("v", v);
      return v;
    };

    const reset = () => {
      form.cleaned = false;
      Object.keys(formItems.value).forEach((prop) => {
        updateMode(prop);
        formItems.value[prop].valid = true;
      });
      nextTick(() => {
        form.cleaned = true;
      });
    };

    const test = (key: string) => {
      const item = formItems.value[key];
      // const item = formItems.value.get(key);
      if (item) {
        const rules = item.rules || (props.rules || {})[item.prop];
        if (rules) {
          return item.validate(rules);
        }
      }
    };

    const getPropByPath = (obj: any, path: string) => {
      // console.log("path", obj, path);
      let tempObj = obj;
      path = path.replace(/\[(\w+)\]/g, ".$1").replace(/^\./, "");
      const keyArr = path.split(".");
      let i = 0;
      for (let len = keyArr.length; i < len - 1; ++i) {
        if (!tempObj) break;
        let key = keyArr[i];
        tempObj = tempObj[key];
      }
      const lastKey = keyArr[keyArr.length - 1];
      return {
        o: tempObj,
        k: lastKey,
        v: tempObj ? tempObj[lastKey] : null,
      };
    };
    const onSubmit = (e: SubmitEvent) => {
      e.preventDefault();
      submit();
      return false;
    };
    const submit = () => {
      validate(({ valid }) => {
        emit("submit", { valid });
      });
    };

    const validate = (callback?: (result: { valid: boolean }) => void) => {
      let result = true;
      Object.keys(formItems.value).forEach((key) => {
        // let item = formItems.value.get(key);
        let item = formItems.value[key];
        const rules = item.rules || (props.rules || {})[item.prop];
        if (rules) {
          const valid = item.validate(rules);
          if (!valid) result = false;
        }
      });

      if (typeof callback === "function") {
        // const modelCopy = JSON.parse(JSON.stringify(model.value || "{}"));
        // callback({ valid: result, model: modelCopy });
        callback({ valid: result });
      }
    };

    const register = (item: any) => {
      // formItems.value.set(item.prop, item);
      formItems.value[item.prop] = item;
    };
    const unregister = (item: any) => {
      delete formItems.value[item.prop];
      // formItems.value.delete(item.prop);
    };

    expose({ validate, reset, test, submit });

    const form = reactive({
      model,
      layout,
      name,
      rules,
      disabled,
      size,
      shape,
      theme,
      getValueFromProp,
      updateMode,
      register,
      unregister,
      labelCol,
      wrapperCol,
      cleaned: ref(true),
    });
    provide("Form", form);

    return () => {
      const { layout, size, name } = props;

      const classes = [
        "k-form",
        {
          [`k-form-${layout}`]: layout,
          "k-form-lg": size === "large",
          "k-form-sm": size === "small",
        },
      ];

      return (
        <form
          ref={formRef}
          class={classes}
          id={name}
          onSubmit={onSubmit}
          onReset={reset}
          autocomplete="off"
        >
          {slots.default?.()}
        </form>
      );
    };
  },
});

export default Form;
