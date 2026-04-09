import type { ExtractPropTypes, PropType } from "vue";
import {
  cloneVNode,
  computed,
  defineComponent,
  inject,
  isVNode,
  onBeforeUnmount,
  onMounted,
  reactive,
  ref,
  toRefs,
  Transition,
} from "vue";
import zhCN from "../locale/zh-CN";
import { Col, Row } from "../row-col";
import { getChildren } from "../utils/vnode";

import type { DirectionType } from "../const/types";
import type { ColProps, FormRule } from "./types";

interface FormContext {
  getValueFromProp?: (prop: string | undefined) => any;
  rules?: Record<string, FormRule[]>;
  register?: (item: any) => void;
  unregister?: (item: any) => void;
  layout?: "inline" | DirectionType;
  name?: string;
  size?: "large" | "small";
  shape?: "square" | "round" | "circle";
  disabled?: boolean;
  theme?: "light" | "dark";
  updateMode?: (prop: string, value: any) => void;
}

const formItemProps = {
  label: String,
  prop: String,
  labelCol: Object as PropType<ColProps>,
  wrapperCol: Object as PropType<ColProps>,
  rules: [Array, Object] as PropType<FormRule | FormRule[]>,
};

export type FormItemProps = ExtractPropTypes<typeof formItemProps>;

export default defineComponent({
  name: "FormItem",
  props: formItemProps,
  setup(props, { slots }) {
    const injectedLocale = inject<Record<string, any>>("locale", zhCN);

    const locale = computed(() => {
      return injectedLocale instanceof Object && "value" in injectedLocale
        ? injectedLocale.value
        : injectedLocale;
    });

    const valid = ref(true);
    const message = ref<string | undefined>("");

    const Form = inject<FormContext>("Form", {});

    const test = (rule: FormRule) => {
      let isValid = valid.value;
      const itemValue = Form.getValueFromProp?.(props.prop);
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
          rule.validator(rule, itemValue, (error: any) => {
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

    const validate = (rules: FormRule | FormRule[], _?: string) => {
      // TODO trigger
      if (!rules) return true;

      if (rules.constructor === Object) return test(rules as FormRule);

      const sortedRules = [...(rules as FormRule[])].sort((a) => (a.required ? -1 : 0));
      for (let i = 0; i < sortedRules.length; i++) {
        let isValid = test(sortedRules[i]);
        if (!isValid) {
          break;
        }
      }
      return valid.value;
    };

    const getRule = (prop: string): FormRule | FormRule[] | undefined => {
      if (props.rules) return props.rules;
      return Form.rules?.[prop] || undefined;
    };
    const testValue = (trigger?: string) => {
      if (props.prop) {
        const rules = getRule(props.prop);
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
        Form?.register?.(formItem);
      }
    });

    onBeforeUnmount(() => {
      if (props.prop) {
        Form?.unregister?.(formItem);
      }
    });

    return () => {
      const { label, prop = "" } = props;
      const rules = getRule(prop);
      const required = rules
        ? rules?.constructor === Object
          ? (rules as FormRule).required
          : (rules as FormRule[]).filter((r: FormRule) => r.required).length > 0
        : false;

      const classes = [
        "k-form-item",
        {
          "k-form-item-required": required,
          "k-form-item-error": !valid.value,
        },
      ];

      let labelProp, wrapperProp;
      if (Form?.layout == "vertical") {
        delete props.wrapperCol?.offset;
      }
      if (Form?.layout != "inline") {
        labelProp = { ...props.labelCol };
        wrapperProp = { ...props.wrapperCol };
      }

      const children = getChildren(slots.default?.());
      let id = undefined;
      if (Form?.name && prop) {
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
                  // todo tag
                  const tag = (child.type as any)?.name;
                  const value = prop ? Form.getValueFromProp?.(prop) || undefined : undefined;
                  const propsData = child?.props || {};
                  const size = propsData.size || Form.size;
                  const theme = propsData.theme || Form.theme;
                  const shape = propsData.shape || Form.shape;
                  const disabled = propsData.disabled || Form.disabled;
                  const childProps: Record<string, any> = {
                    id,
                    size,
                    disabled,
                    ...(theme ? { theme } : {}),
                    ...(shape ? { shape } : {}),
                  };

                  const childEvents: Record<string, any> = {};
                  if (prop) {
                    if (/(switch|radio|checkbox)/.test(tag)) {
                      childProps.checked = value || false;
                    } else {
                      childProps.modelValue = value;
                    }

                    childEvents["onUpdate:modelValue"] = (value: any) => {
                      if (tag) {
                        Form.updateMode?.(prop, value);
                        testValue();
                      }
                    };
                  }
                  if (/(input|textarea)/.test(tag)) {
                    childEvents.onBlur = () => {
                      testValue();
                    };
                  }

                  return cloneVNode(child, {
                    ...childProps,
                    ...childEvents,
                  });
                } else {
                  return child;
                }
              })}
              {prop ? (
                <Transition name="k-form-item-fade">
                  {!valid.value ? <div class="k-form-item-error-tip">{message.value}</div> : null}
                </Transition>
              ) : null}
            </div>
          </Col>
        </Row>
      );
    };
  },
}) 
