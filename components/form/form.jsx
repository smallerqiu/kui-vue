// form.vue 或 form.jsx
import { defineComponent, ref, provide, watch, toRefs, reactive } from "vue";
import { getChildren } from "../utils/element";
import { cloneVNode, withInstall } from "../utils/vue";

const Form = defineComponent({
  name: "Form",
  props: {
    layout: {
      type: String,
      default: "horizontal",
      validator(value) {
        return ["horizontal", "vertical", "inline"].includes(value);
      },
    },
    model: Object,
    name: String,
    labelCol: Object,
    wrapperCol: Object,
    rules: {
      type: Object,
      default: () => ({}),
    },
    size: {
      type: String,
      default: "default",
      validator(value) {
        return ["small", "large", "default"].includes(value);
      },
    },
    theme: String,
    shape: String,
    disabled: Boolean,
  },
  setup(props, { emit, slots, expose }) {
    const formRef = ref(null);
    const formItems = ref({});

    const { model, rules, size, shape, theme, disabled, layout, name } =
      toRefs(props);

    const updateMode = (prop, value = "") => {
      const keys = prop
        .replace(/\[(\w+)\]/g, ".$1")
        .replace(/^\./, "")
        .split(".");
      let currentModel = model.value || {};
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        if (key in currentModel) {
          if (i === keys.length - 1 || keys.length === 1) {
            const val = currentModel[key];
            if (typeof val === "boolean") {
              currentModel[key] = value || false;
            } else if (Array.isArray(val)) {
              currentModel[key] = value || [];
            } else {
              currentModel[key] = value;
            }
          }
          currentModel = currentModel[key];
        }
      }
      emit("change", model.value);
    };

    const reset = () => {
      Object.keys(formItems.value).forEach((prop) => {
        updateMode(prop);
        formItems.value[prop].valid = true;
      });
    };

    const test = (key) => {
      const item = formItems.value[key];
      if (item) {
        const rules = item.rules || (props.rules || {})[item.prop];
        if (rules) {
          return item.validate(rules);
        }
      }
    };

    const testProp = (path) => {
      const keys = path
        .replace(/\[(\w+)\]/g, ".$1")
        .replace(/^\./, "")
        .split(".");
      let currentModel = model.value || {};
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        if (key in currentModel) {
          currentModel = JSON.parse(JSON.stringify(currentModel[key]));
        } else {
          console.warn(`Invalid form item prop: ${path}`);
          // 可根据需要启用警告或错误提示
        }
      }
      return currentModel === model.value ||
        JSON.stringify(currentModel) === "{}"
        ? null
        : currentModel;
    };

    const submit = (e) => {
      e?.preventDefault();
      validate((valid) => {
        const modelCopy = JSON.parse(JSON.stringify(model.value || "{}"));
        emit("submit", { valid, model: modelCopy });
      });
    };

    const validate = (callback) => {
      let result = true;
      Object.keys(formItems.value).forEach((key) => {
        let item = formItems.value[key];
        const rules = item.rules || (props.rules || {})[item.prop];
        if (rules) {
          const valid = item.validate(rules);
          if (!valid) result = false;
        }
      });

      if (typeof callback === "function") {
        callback(result);
      }
    };

    watch(model, () => {
      validate();
    });

    const register = (item) => {
      formItems.value[item.prop] = item;
    };
    const unregister = (item) => {
      delete formItems.value[item.prop];
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
      testProp,
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
          onSubmit={submit}
          onReset={reset}
          autocomplete="off"
        >
          {children.map((child) => {
            const childLabelCol =
              child?.componentOptions?.propsData?.labelCol || labelCol;
            const childWrapperCol =
              child?.componentOptions?.propsData?.wrapperCol || wrapperCol;
            // const childLabelCol = child.props?.labelCol || labelCol; // for 3
            // const childWrapperCol = child.props?.wrapperCol || wrapperCol;  // for 3

            return cloneVNode(
              child,
              {
                props: {
                  labelCol: childLabelCol,
                  wrapperCol: childWrapperCol,
                },
                on: {
                  // collect: ({ context, push }) => {
                  //   if (push) {
                  //     formItems.value.push(context);
                  //     if (context.prop && model.value) {
                  //       testProp(context.prop);
                  //     }
                  //   } else {
                  //     const index = formItems.value.indexOf(context);
                  //     if (index !== -1) {
                  //       formItems.value.splice(index, 1);
                  //     }
                  //   }
                  // },
                },
              },
              true
            );
          })}
        </form>
      );
    };
  },
});

export default withInstall(Form);
