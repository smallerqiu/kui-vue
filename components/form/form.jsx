import { cloneVNode, defineComponent, provide, reactive, ref, toRefs, watch } from "vue";
import { getChildren } from "../utils/vnode";


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
  emits: ["submit", "change"],
  setup(props, { emit, slots, expose }) {
    const formRef = ref(null);
    const formItems = ref({});

    const { model, rules, size, shape, theme, disabled, layout, name } = toRefs(props);

    const updateMode = (prop, value = null) => {
      const { o, k } = getPropByPath(model.value, prop);
      // console.log(o, k, value);
      if (o) {
        o[k] = value;
        emit("change", model.value);
      }
    };
    const getValueFromProp = (path) => {
      const { v } = getPropByPath(model.value, path);
      return v;
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

    const getPropByPath = (obj, path) => {
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
    const onSubmit = (e) => {
      e.preventDefault();
      e.stopPropagation();
      submit();
      return false;
    };
    const submit = () => {
      validate((valid) => {
        emit("submit", valid);
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
        const modelCopy = JSON.parse(JSON.stringify(model.value || "{}"));
        callback({ valid: result, model: modelCopy });
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
            const childLabelCol = child.props?.labelCol || labelCol; // for 3
            const childWrapperCol = child.props?.wrapperCol || wrapperCol; // for 3

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
});

export default Form;
