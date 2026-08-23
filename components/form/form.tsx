import type { ExtractPropTypes, PropType } from "vue";
import { defineComponent, nextTick, provide, reactive, ref, toRefs } from "vue";
import type { BooleanType, DirectionType, ShapeType, SizeType, ThemeType } from "../const/types";
import type { ColProps, FormRule, FormSubmitEvent } from "./types";

const formProps = {
  layout: {
    type: String as PropType<DirectionType>,
    default: "horizontal",
  },
  model: Object as PropType<Record<string, unknown>>,
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
  onReset: {
    type: Function as PropType<() => void>,
  },
};

export type FormProps = ExtractPropTypes<typeof formProps>;

const Form = defineComponent({
  name: "Form",
  props: formProps,
  setup(props, { emit, slots, expose }) {
    const formRef = ref(null);
    const model = props.model ?? {};
    interface RegisteredFormItem {
      prop: string;
      rules?: FormRule | FormRule[];
      valid: boolean;
      validate: (rules: FormRule | FormRule[]) => Promise<boolean>;
    }
    const formItems = ref<Record<string, RegisteredFormItem>>({});

    const { rules, size, shape, theme, disabled, layout, name, labelCol, wrapperCol } =
      toRefs(props);

    const updateModel = (prop: string, value = null) => {
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
        updateModel(prop);
        formItems.value[prop].valid = true;
      });
      nextTick(() => {
        form.cleaned = true;
      });
      emit("reset");
    };

    const test = (key: string) => {
      const item = formItems.value[key];
      // const item = formItems.value.get(key);
      if (item) {
        const rules = item.rules || (item.prop ? (props.rules || {})[item.prop] : undefined);
        if (rules) {
          return item.validate(rules);
        }
      }
    };

    const getPropByPath = (obj: Record<string, unknown>, path: string) => {
      // console.log("path", obj, path);
      let tempObj: Record<string, unknown> | undefined = obj;
      path = path.replace(/\[(\w+)\]/g, ".$1").replace(/^\./, "");
      const keyArr = path.split(".");
      let i = 0;
      for (let len = keyArr.length; i < len - 1; ++i) {
        if (!tempObj) break;
        const key = keyArr[i];
        const next: unknown = tempObj[key];
        tempObj =
          typeof next === "object" && next !== null ? (next as Record<string, unknown>) : undefined;
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
    const submit = async () => {
      const { valid } = await validate();
      emit("submit", { valid });
    };

    const validate = async (callback?: (result: FormSubmitEvent) => void) => {
      let valid = true;
      for (const key of Object.keys(formItems.value)) {
        const item = formItems.value[key];
        const rules = item.rules || (props.rules || {})[item.prop];
        if (rules && !(await item.validate(rules))) valid = false;
      }
      const result = { valid };

      if (typeof callback === "function") {
        callback(result);
      }
      return result;
    };

    const register = (item: RegisteredFormItem) => {
      // formItems.value.set(item.prop, item);
      if (item.prop) formItems.value[item.prop] = item;
    };
    const unregister = (item: RegisteredFormItem) => {
      if (item.prop) delete formItems.value[item.prop];
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
      updateModel,
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
