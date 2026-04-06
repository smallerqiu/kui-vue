import { cloneVNode, defineComponent, provide, reactive, ref, toRefs, watch } from "vue";
import { getChildren } from "../utils/vnode";

import type { ExtractPropTypes, PropType } from "vue";
import type { TypeSize } from "../const/var";
import type { ColProps, FormRule } from "./types";

const formProps = {
  layout: {
    type: String as PropType<"horizontal" | "vertical" | "inline">,
    default: "horizontal",
  },
  model: Object,
  name: String,
  labelCol: Object as PropType<ColProps>,
  wrapperCol: Object as PropType<ColProps>,
  rules: {
    type: Object as PropType<Record<string, FormRule[]>>,
    default: () => ({}),
  },
  size: {
    type: String as PropType<TypeSize>,
    default: "default",
  },
  theme: String,
  shape: String,
  disabled: Boolean,
};

export type FormProps = ExtractPropTypes<typeof formProps>;

const Form = defineComponent({
  name: "Form",
  props: formProps,
  emits: ["submit", "change"],
  setup(props, { emit, slots, expose }) {
    const formRef = ref(null);
    const formItems = ref<Map<string, any>>(new Map());

    const { model, rules, size, shape, theme, disabled, layout, name } = toRefs(props);

    const updateMode = (prop: string, value = null) => {
      const { o, k } = getPropByPath(model.value, prop);
      // console.log(o, k, value);
      if (o) {
        o[k] = value;
        emit("change", model.value);
      }
    };
    const getValueFromProp = (path: string) => {
      const { v } = getPropByPath(model.value, path);
      return v;
    };

    const reset = () => {
      Object.keys(formItems.value).forEach((prop) => {
        updateMode(prop);
        let item = formItems.value.get(prop);
        if (item) {
          item.valid = true;
          formItems.value.set(prop, item);
        }
      });
    };

    const test = (key: string) => {
      const item = formItems.value.get(key);
      if (item) {
        const rules = item.rules || (props.rules || {})[item.prop];
        if (rules) {
          return item.validate(rules);
        }
      }
    };

    const getPropByPath = (obj: any, path: string) => {
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
      e.stopPropagation();
      submit();
      return false;
    };
    const submit = () => {
      validate(({ valid }) => {
        emit("submit", valid);
      });
    };

    const validate = (callback?: (result: { valid: boolean }) => void) => {
      let result = true;
      Object.keys(formItems.value).forEach((key) => {
        let item = formItems.value.get(key);
        const rules = item.rules || (props.rules || {})[item.prop];
        if (rules) {
          const valid = item.validate(rules);
          if (!valid) result = false;
        }
      });

      if (typeof callback === "function") {
        callback({ valid: result });
      }
    };

    watch(model, () => {
      validate();
    });

    const register = (item: any) => {
      formItems.value.set(item.prop, item);
    };
    const unregister = (item: any) => {
      formItems.value.delete(item.prop);
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
    });
    provide("Form", form);

    return () => {
      const { layout, size, labelCol = {}, wrapperCol = {}, name } = props;

      const classes = [
        "k-form",
        {
          [`k-form-${layout}`]: layout,
          "k-form-lg": size === "large",
          "k-form-sm": size === "small",
        },
      ];

      const children = getChildren(slots.default?.());

      return (
        <form
          ref={formRef}
          class={classes}
          id={name}
          onSubmit={onSubmit}
          onReset={reset}
          autocomplete="off"
        >
          {children.map((child) => {
            const childLabelCol = child.props?.labelCol || labelCol;
            const childWrapperCol = child.props?.wrapperCol || wrapperCol;

            return cloneVNode(
              child,
              {
                labelCol: childLabelCol,
                wrapperCol: childWrapperCol,
              },
              true
            );
          })}
        </form>
      );
    };
  },
}) //as DefineComponent<FormProps>;

export default Form;
