import type { ExtractPropTypes, PropType } from "vue";
import {
  cloneVNode,
  computed,
  defineComponent,
  inject,
  isRef,
  isVNode,
  onBeforeUnmount,
  onMounted,
  reactive,
  ref,
  toRefs,
  Transition,
  watch,
  type Ref,
} from "vue";
import zhCN from "../locale/zh-CN";
import { Col, Row } from "../row-col";
import { getChildren } from "../utils/vnode";

import type { DirectionType, ShapeType, ThemeType } from "../const/types";
import type { ColProps, FormRule, FormValidateTrigger } from "./types";

interface FormContext {
  getValueFromProp?: (prop: string | undefined) => unknown;
  rules?: Record<string, FormRule | FormRule[]>;
  register?: (item: FormItemRegistration) => void;
  unregister?: (item: FormItemRegistration) => void;
  layout?: "inline" | DirectionType;
  name?: string;
  size?: "large" | "small";
  shape?: ShapeType;
  disabled?: boolean;
  theme?: ThemeType;
  updateModel?: (prop: string, value: unknown) => void;
  labelCol?: ColProps;
  wrapperCol?: ColProps;
  cleaned?: boolean;
}

interface FormItemRegistration {
  prop?: string;
  rules?: FormRule | FormRule[];
  valid: boolean;
  validate: (rules: FormRule | FormRule[], trigger?: FormValidateTrigger) => Promise<boolean>;
}

/**
 * 判断某条规则是否应该在指定时机触发。
 * 未设置 `trigger` 时默认在 `change` 时校验，以兼容历史行为。
 */
const matchesTrigger = (rule: FormRule, trigger: FormValidateTrigger) => {
  if (!rule.trigger) return trigger === "change";
  const triggers = Array.isArray(rule.trigger) ? rule.trigger : [rule.trigger];
  return triggers.includes(trigger);
};

const formItemProps = {
  label: String,
  prop: String,
  labelCol: Object as PropType<ColProps>,
  wrapperCol: Object as PropType<ColProps>,
  rules: [Array, Object] as PropType<FormRule | FormRule[]>,
};

export type FormItemProps = ExtractPropTypes<typeof formItemProps>;

const FormItem = defineComponent({
  name: "FormItem",
  props: formItemProps,
  setup(props, { slots }) {
    type Locale = typeof zhCN;
    const injectedLocale = inject<Locale | Ref<Locale>>("locale", zhCN);
    const locale = computed<Locale>(() => {
      return isRef(injectedLocale) ? injectedLocale.value : injectedLocale;
    });

    const valid = ref(true);
    const message = ref<string>();

    const Form = inject<FormContext>("Form", {});

    const test = async (rule: FormRule) => {
      let isValid = true;
      const itemValue = Form.getValueFromProp?.(props.prop);
      let msg = rule.message;

      if (rule.required) {
        isValid = Array.isArray(itemValue)
          ? itemValue.length > 0
          : itemValue !== null &&
            itemValue !== undefined &&
            itemValue !== "" &&
            itemValue !== false;
        if (!isValid) {
          msg =
            msg || locale.value.k.form.required.replace("{label}", props.label || props.prop || "");
        }
      } else if (rule.pattern) {
        isValid = rule.pattern.test(String(itemValue ?? ""));
      } else if (rule.type) {
        switch (rule.type) {
          case "mail":
            isValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/.test(
              String(itemValue ?? "")
            );
            if (!isValid) msg = msg || locale.value?.k.form.email;
            break;
          case "mobile":
            isValid = /^[1][3-9][0-9]{9}$/.test(String(itemValue ?? ""));
            if (!isValid) msg = msg || locale.value.k.form.phone;
            break;
          case "number":
            isValid = /^(-?\d+)(\.\d+)?$/.test(String(itemValue ?? ""));
            if (isValid) {
              const numericValue = Number(itemValue);
              if (rule.min !== undefined && numericValue < rule.min) {
                isValid = false;
                msg = msg || locale.value.k.form.num_min.replace("{min}", String(rule.min));
              } else if (rule.max !== undefined && numericValue > rule.max) {
                isValid = false;
                msg = msg || locale.value.k.form.num_max.replace("{max}", String(rule.max));
              }
            }
            if (!isValid) msg = msg || locale.value?.k.form.number;
            break;
          default:
            break;
        }
      } else if (rule.min !== undefined || rule.max !== undefined) {
        const empty =
          itemValue === null ||
          itemValue === undefined ||
          itemValue === "" ||
          (Array.isArray(itemValue) && itemValue.length === 0);
        if (rule.min !== undefined) {
          if (empty) {
            isValid = false;
          } else if (Array.isArray(itemValue)) {
            isValid = itemValue.length >= rule.min;
          } else if (typeof itemValue === "string") {
            isValid = itemValue.replace(/[\u0391-\uFFE5]/g, "aa").length >= rule.min;
          } else if (typeof itemValue === "number") {
            isValid = itemValue >= rule.min;
          }
        }
        if (rule.max !== undefined && isValid) {
          if (empty) {
            isValid = false;
          } else if (Array.isArray(itemValue)) {
            isValid = itemValue.length <= rule.max;
          } else if (typeof itemValue === "string") {
            isValid = itemValue.replace(/[\u0391-\uFFE5]/g, "aa").length <= rule.max;
          } else if (typeof itemValue === "number") {
            isValid = itemValue <= rule.max;
          }
        }
        if (!isValid) msg = msg || "Incorrect length";
      }

      // validator 独立于其他校验执行，仅在前面的校验通过后运行，
      // 使 `{ required: true, validator }` 这类组合规则也能生效
      if (isValid && typeof rule.validator === "function") {
        const error = await new Promise<Error | undefined>((resolve) => {
          let settled = false;
          const done = (error?: Error) => {
            if (settled) return;
            settled = true;
            resolve(error);
          };
          try {
            const result = rule.validator?.(rule, itemValue, done);
            if (result && typeof result.then === "function") {
              result
                .then(() => done())
                .catch((error) => {
                  done(error instanceof Error ? error : new Error(String(error)));
                });
            }
          } catch (error) {
            done(error instanceof Error ? error : new Error(String(error)));
          }
        });
        if (error !== undefined) {
          isValid = false;
          msg = error.message || msg;
        }
      }

      return { valid: isValid, message: isValid ? undefined : msg };
    };

    const validate = async (rules: FormRule | FormRule[], trigger?: FormValidateTrigger) => {
      if (!rules) return true;

      const list = Array.isArray(rules) ? [...rules] : [rules];
      // 指定触发时机时只校验匹配的规则；手动调用与提交校验不区分时机，全部校验
      const target = trigger ? list.filter((rule) => matchesTrigger(rule, trigger)) : list;
      if (target.length === 0) return true;

      const sortedRules = target.sort((a) => (a.required ? -1 : 0));
      let result = { valid: true, message: undefined as string | undefined };
      for (let i = 0; i < sortedRules.length; i++) {
        result = await test(sortedRules[i]);
        if (!result.valid) break;
      }
      valid.value = result.valid;
      message.value = result.message;
      return result.valid;
    };

    const testValue = (trigger: FormValidateTrigger = "change") => {
      if (props.prop) {
        const rules = props.rules || (Form.rules || {})[props.prop];
        if (rules) void validate(rules, trigger);
      }
    };
    const { prop, rules } = toRefs(props);
    const formItem = reactive({ prop, rules, valid, validate });
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

    const ItemValue = computed(() => {
      const prop = props.prop;
      return prop ? (Form.getValueFromProp?.(prop) ?? undefined) : undefined;
    });

    watch(ItemValue, () => {
      if (props.prop && Form.cleaned) {
        testValue();
      }
    });

    return () => {
      const { label, prop } = props;
      const rules = props.rules || (prop ? Form.rules?.[prop] : undefined) || [];
      const required = !Array.isArray(rules)
        ? (rules as FormRule).required
        : rules.filter((r: FormRule) => r.required).length > 0;

      const classes = [
        "k-form-item",
        {
          "k-form-item-required": required,
          "k-form-item-error": !valid.value,
        },
      ];

      let labelProp: ColProps = {},
        wrapperProp: ColProps = {};

      if (Form.layout != "inline") {
        labelProp = props.labelCol || Form.labelCol || {};
        wrapperProp = props.wrapperCol || Form.wrapperCol || {};
      }
      if (Form.layout == "vertical") {
        delete wrapperProp?.offset;
      }

      const children = getChildren(slots.default?.());
      let id = undefined;
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
                  const value = prop ? (Form.getValueFromProp?.(prop) ?? undefined) : undefined;
                  const propsData = child?.props || {};
                  const childProps: Record<string, unknown> = {
                    id,
                    size: propsData.size || Form.size,
                    disabled: propsData.disabled || Form.disabled,
                    theme: propsData.theme || Form.theme,
                    shape: propsData.shape || Form.shape,
                  };
                  if (prop) {
                    childProps.modelValue = value;
                    childProps["onUpdate:modelValue"] = (value: unknown) => {
                      Form.updateModel?.(prop, value);
                    };
                    // cloneVNode 会合并事件处理器，子控件原有的 onBlur 仍会执行
                    childProps.onBlur = () => testValue("blur");
                  }

                  return cloneVNode(child, {
                    ...childProps,
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
});
export default FormItem;
