import {
  defineComponent,
  ref,
  onBeforeUnmount,
  onMounted,
  inject,
  toRefs,
  reactive,
  computed,
} from "vue";
import { Row, Col } from "../grid";
import { getChildren } from "../utils/vnode";
import { cloneVNode, isVNode } from "../utils/vue";
import zhCN from "../locale/zh-CN";

export default defineComponent({
  name: "FormItem",
  props: {
    label: String,
    prop: String,
    labelCol: Object,
    wrapperCol: Object,
    rules: [Array, Object],
  },
  setup(props, { emit, slots }) {
    const injectedLocale = inject("locale", zhCN);

    const locale = computed(() => {
      return injectedLocale instanceof Object && "value" in injectedLocale
        ? injectedLocale.value
        : injectedLocale;
    });

    const valid = ref(true);
    const message = ref("");

    const Form = inject("Form", {});

    const test = (rule) => {
      let isValid = valid.value;
      const itemValue = Form.testProp?.(props.prop);
      let msg = rule.message;

      if (rule.required) {
        isValid = Array.isArray(itemValue)
          ? itemValue.length > 0
          : itemValue !== null &&
            itemValue !== undefined &&
            itemValue !== "" &&
            itemValue !== false;
        msg = msg || locale.value?.k.form.required.replace("{label}", props.label || props.prop);
      } else {
        if (rule.pattern) {
          isValid = rule.pattern.test(itemValue);
        } else if (rule.type) {
          switch (rule.type) {
            case "mail":
              isValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/.test(itemValue);
              msg = msg || locale.value?.k.form.email;
              break;
            case "mobile":
              isValid = /^[1][3-9][0-9]{9}$/.test(itemValue);
              msg = msg || locale.value?.k.form.mobile;
              break;
            case "number":
              isValid = /^(-?\d+)(\.\d+)?$/.test(itemValue);
              if (isValid) {
                if (rule.min !== undefined && itemValue < rule.min) {
                  isValid = false;
                  msg = msg || locale.value?.k.form.num_min.replace("{min}", rule.min);
                } else if (rule.max !== undefined && itemValue > rule.max) {
                  isValid = false;
                  msg = msg || locale.value?.k.form.num_max.replace("{max}", rule.max);
                }
              }
              msg = msg || locale.value?.k.form.number;
              break;
            default:
              break;
          }
        } else if (typeof rule.validator === "function") {
          rule.validator(rule, itemValue, (error) => {
            isValid = error === undefined;
            if (error) {
              msg = error.message;
            }
          });
        } else if (rule.min !== undefined || rule.max !== undefined) {
          const valueType = typeof itemValue;

          if (rule.min !== undefined) {
            if (Array.isArray(itemValue)) {
              isValid = itemValue.length >= rule.min;
            } else if (valueType === "string") {
              isValid = itemValue.replace(/[\u0391-\uFFE5]/g, "aa").length >= rule.min;
            } else if (valueType === "number") {
              isValid = itemValue >= rule.min;
            }
          }

          if (rule.max !== undefined && isValid) {
            if (Array.isArray(itemValue)) {
              isValid = itemValue.length <= rule.max;
            } else if (valueType === "string") {
              isValid = itemValue.replace(/[\u0391-\uFFE5]/g, "aa").length <= rule.max;
            } else if (valueType === "number") {
              isValid = itemValue <= rule.max;
            }
          }
          msg = msg || "Incorrect length";
        }
      }

      message.value = msg;
      valid.value = isValid;
      return isValid;
    };

    const validate = (rules) => {
      if (!rules) return true;

      if (rules.constructor === Object) return test(rules);

      const sortedRules = [...rules].sort((a) => (a.required ? -1 : 0));
      for (let i = 0; i < sortedRules.length; i++) {
        let isValid = test(sortedRules[i]);
        if (!isValid) {
          break;
        }
      }
      return valid.value;
    };

    const testValue = (trigger) => {
      if (props.prop) {
        const rules = props.rules || (Form.rules || {})[props.prop];
        rules && validate(rules, trigger);
      }
    };
    const { prop, rules } = toRefs(props);
    const formItem = reactive({
      prop,
      rules,
      valid,
      validate,
    });
    onMounted(() => {
      if (props.prop) {
        Form.register?.(formItem);
      }
    });

    onBeforeUnmount(() => {
      if (props.prop) {
        Form.unregister?.(formItem);
      }
    });

    return () => {
      const { label, prop } = props;
      const rules = props.rules || (Form.rules || {})[prop] || [];
      const required =
        rules.constructor === Object ? rules.required : rules.filter((r) => r.required).length > 0;

      const classes = [
        "k-form-item",
        {
          "k-form-item-required": required,
          "k-form-item-error": !valid.value,
        },
      ];

      let labelProp, wrapperProp;
      if (Form.layout == "vertical") {
        delete props.wrapperCol?.offset;
      }
      if (Form.layout != "inline") {
        labelProp = { props: { ...props.labelCol } };
        wrapperProp = { props: { ...props.wrapperCol } };
      }

      const children = getChildren(slots.default?.());
      let id = null;
      if (Form.name && prop) {
        id = `${Form.name || `form_`}_${prop}`;
      }

      return (
        <Row class={classes} type="flex">
          {label ? (
            <Col class="k-form-item-label" {...labelProp}>
              <label for={id}>{label}</label>
            </Col>
          ) : null}
          <Col {...wrapperProp}>
            <div class="k-form-item-content">
              {children.map((child) => {
                if (isVNode(child)) {
                  // const tag = child.type?.name || child.type; //for 3
                  const tag = child?.componentOptions?.tag || child.tag; //for 2
                  const value = prop ? Form.testProp?.(prop) : "";
                  const propsData = child?.componentOptions?.propsData || {}; //for 2
                  const size = propsData.size || Form.size;
                  const theme = propsData.theme || Form.theme;
                  const shape = propsData.shape || Form.shape;
                  const disabled = propsData.disabled || Form.disabled;
                  const childProps = {
                    id,
                    size,
                    disabled,
                    ...(theme ? { theme } : {}),
                    ...(shape ? { shape } : {}),
                  };

                  const childEvents = { on: {} };

                  if (prop) {
                    if (
                      ["Radio", "Checkbox", "Switch", "k-switch", "k-radio", "k-checkbox"].includes(
                        tag
                      )
                    ) {
                      childProps.checked = value || false;
                    } else {
                      childProps.value = value;
                    }

                    childEvents.on.input = (value) => {
                      if (tag) {
                        Form.updateMode?.(prop, value);
                        testValue();
                      }
                    };
                  }

                  if (["Input", "k-input", "TextArea", "k-textarea"].includes(tag)) {
                    childEvents.on.blur = () => {
                      testValue();
                    };
                  }

                  return cloneVNode(child, {
                    props: { ...childProps },
                    ...childEvents,
                  });
                } else {
                  return child;
                }
              })}
              <transition name="k-form-item-fade">
                {!valid.value ? <div class="k-form-item-error-tip">{message.value}</div> : null}
              </transition>
            </div>
          </Col>
        </Row>
      );
    };
  },
});
