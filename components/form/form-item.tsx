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
  provide,
  reactive,
  ref,
  toRefs,
  Transition,
  useId,
  watch,
  type Ref,
} from "vue";
import zhCN from "../locale/zh-CN";
import { Col, Row } from "../row-col";
import { getChildren } from "../utils/vnode";

import type { BooleanType } from "../const/types";
import {
  FORM_FIELD_INJECTION_KEY,
  FORM_INJECTION_KEY,
  isFormFieldComponent,
  type FormFieldContext,
} from "./context";
import type { ColProps, FormRule, FormValidateTrigger } from "./types";

/**
 * 判断某条规则是否应该在指定时机触发。
 * 未设置 `trigger` 时默认在 `change` 时校验，以兼容历史行为。
 */
const matchesTrigger = (rule: FormRule, trigger: FormValidateTrigger) => {
  if (!rule.trigger) return trigger === "change";
  const triggers = Array.isArray(rule.trigger) ? rule.trigger : [rule.trigger];
  return triggers.includes(trigger);
};

const isEmptyValue = (value: unknown) =>
  value === null ||
  value === undefined ||
  value === "" ||
  (Array.isArray(value) && value.length === 0);

const hasModelValueProp = (child: ReturnType<typeof cloneVNode>) => {
  if (typeof child.type === "string" || typeof child.type !== "object" || child.type === null) {
    return false;
  }
  const componentProps = "props" in child.type ? child.type.props : undefined;
  if (Array.isArray(componentProps)) return componentProps.includes("modelValue");
  return (
    typeof componentProps === "object" &&
    componentProps !== null &&
    Object.prototype.hasOwnProperty.call(componentProps, "modelValue")
  );
};

const isNativeFormControl = (child: ReturnType<typeof cloneVNode>) =>
  typeof child.type === "string" && ["input", "select", "textarea"].includes(child.type);

const FormFieldProvider = defineComponent({
  name: "FormFieldProvider",
  props: {
    context: { type: Object as PropType<FormFieldContext>, required: true },
  },
  setup(props, { slots }) {
    provide(FORM_FIELD_INJECTION_KEY, props.context);
    return () => slots.default?.();
  },
});

const formItemProps = {
  label: String,
  prop: String,
  labelCol: Object as PropType<ColProps>,
  wrapperCol: Object as PropType<ColProps>,
  rules: [Array, Object] as PropType<FormRule | FormRule[]>,
  colon: { type: Boolean as BooleanType, default: undefined },
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
    let validationVersion = 0;

    const Form = inject(FORM_INJECTION_KEY, {});
    const generatedId = `form_${useId().replace(/:/g, "")}`;

    const test = async (rule: FormRule) => {
      let isValid = true;
      const itemValue = Form.getValueFromProp?.(props.prop);
      let msg = rule.message;

      const empty = isEmptyValue(itemValue);

      if (rule.required) {
        isValid = !empty && itemValue !== false;
        if (!isValid) {
          msg =
            msg || locale.value.k.form.required.replace("{label}", props.label || props.prop || "");
        }
      } else if (empty) {
        return { valid: true, message: undefined };
      }

      if (isValid && rule.pattern) {
        rule.pattern.lastIndex = 0;
        isValid = rule.pattern.test(String(itemValue));
        rule.pattern.lastIndex = 0;
      }

      if (isValid && rule.type) {
        switch (rule.type) {
          case "mail":
            isValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/.test(
              String(itemValue ?? ""),
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
      }

      if (isValid && (rule.min !== undefined || rule.max !== undefined)) {
        const numeric = rule.type === "number" || typeof itemValue === "number";
        if (rule.min !== undefined) {
          if (Array.isArray(itemValue)) {
            isValid = itemValue.length >= rule.min;
          } else if (typeof itemValue === "string") {
            isValid = numeric
              ? Number(itemValue) >= rule.min
              : itemValue.replace(/[\u0391-\uFFE5]/g, "aa").length >= rule.min;
          } else if (numeric) {
            isValid = Number(itemValue) >= rule.min;
          }
        }
        if (rule.max !== undefined && isValid) {
          if (Array.isArray(itemValue)) {
            isValid = itemValue.length <= rule.max;
          } else if (typeof itemValue === "string") {
            isValid = numeric
              ? Number(itemValue) <= rule.max
              : itemValue.replace(/[\u0391-\uFFE5]/g, "aa").length <= rule.max;
          } else if (numeric) {
            isValid = Number(itemValue) <= rule.max;
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
      const currentVersion = ++validationVersion;
      let result = { valid: true, message: undefined as string | undefined };
      for (let i = 0; i < sortedRules.length; i++) {
        result = await test(sortedRules[i]);
        if (!result.valid) break;
      }
      if (currentVersion === validationVersion) {
        valid.value = result.valid;
        message.value = result.message;
      }
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
    let registeredProp: string | undefined;
    const register = (nextProp?: string) => {
      if (!nextProp) return;
      Form.register?.(formItem);
      registeredProp = nextProp;
    };
    const unregister = () => {
      if (!registeredProp) return;
      Form.unregister?.(formItem, registeredProp);
      registeredProp = undefined;
    };

    onMounted(() => register(props.prop));

    watch(
      () => props.prop,
      (nextProp, previousProp) => {
        if (nextProp === previousProp) return;
        unregister();
        register(nextProp);
        valid.value = true;
        message.value = undefined;
      },
    );

    onBeforeUnmount(unregister);

    const ItemValue = computed(() => {
      const prop = props.prop;
      return prop ? (Form.getValueFromProp?.(prop) ?? undefined) : undefined;
    });
    const renderedItemValue = ref(ItemValue.value);

    watch(ItemValue, (value) => {
      // Slot VNodes can be compiler-cached when they contain no expressions.
      // Mirroring the field into a local ref ensures FormItem itself renders
      // again when the external model is changed (for example by setValue).
      renderedItemValue.value = value;
      if (props.prop && Form.cleaned) {
        testValue();
      }
    });

    const effectiveRules = computed(
      () => props.rules || (props.prop ? Form.rules?.[props.prop] : undefined) || [],
    );
    const required = computed(() =>
      (Array.isArray(effectiveRules.value) ? effectiveRules.value : [effectiveRules.value]).some(
        (rule) => rule.required,
      ),
    );
    const id = computed(() =>
      Form.name && props.prop
        ? `${Form.name}_${props.prop}`
        : `${generatedId}_${props.prop || "field"}`,
    );
    const errorId = computed(() => `${id.value}_error`);
    const labelId = computed(() => `${id.value}_label`);
    const fieldContext: FormFieldContext = {
      get id() {
        return id.value;
      },
      get labelId() {
        return labelId.value;
      },
      get errorId() {
        return errorId.value;
      },
      get prop() {
        return props.prop;
      },
      value: computed(() => renderedItemValue.value),
      size: computed(() => Form.size),
      shape: computed(() => Form.shape),
      theme: computed(() => Form.theme),
      disabled: computed(() => !!Form.disabled),
      readonly: computed(() => !!Form.readonly),
      invalid: computed(() => !valid.value),
      required,
      describedBy: computed(() => (!valid.value && props.prop ? errorId.value : undefined)),
      update: (value) => {
        if (props.prop) Form.updateModel?.(props.prop, value);
      },
      blur: () => testValue("blur"),
    };

    return () => {
      const { label, prop } = props;
      const isRequired = required.value;
      const showColon = props.colon ?? Form.colon ?? true;

      const classes = [
        "k-form-item",
        {
          "k-form-item-required": isRequired,
          "k-form-item-error": !valid.value,
          "k-form-item-no-colon": !showColon,
        },
      ];

      let labelProp: ColProps = {},
        wrapperProp: ColProps = {};

      if (Form.layout != "inline") {
        labelProp = { ...(props.labelCol || Form.labelCol) };
        wrapperProp = { ...(props.wrapperCol || Form.wrapperCol) };
      }
      if (Form.layout == "vertical") {
        delete wrapperProp?.offset;
      }

      const children = getChildren(slots.default?.());
      const controlId = id.value;
      const controlErrorId = errorId.value;
      const describedBy = !valid.value && prop ? controlErrorId : undefined;
      const controlIndex = children.findIndex(
        (child) => isVNode(child) && (hasModelValueProp(child) || isFormFieldComponent(child.type)),
      );

      return (
        <Row class={classes} type="flex">
          {label ? (
            <Col class="k-form-item-label" {...labelProp}>
              <label id={labelId.value} for={controlId}>
                <span class="k-form-item-label-main">
                  {isRequired ? (
                    <span class="k-form-item-required-mark" aria-hidden="true">
                      *
                    </span>
                  ) : null}
                  <span class="k-form-item-label-text">{label}</span>
                </span>
                {showColon ? (
                  <span class="k-form-item-colon" aria-hidden="true">
                    :
                  </span>
                ) : null}
              </label>
            </Col>
          ) : null}
          <Col {...wrapperProp}>
            <div class="k-form-item-content">
              {children.map((child, index) => {
                if (isVNode(child) && isNativeFormControl(child)) {
                  return cloneVNode(child, {
                    id: controlId,
                    "aria-describedby": describedBy,
                    "aria-invalid": !valid.value || undefined,
                    "aria-required": isRequired || undefined,
                    onBlur: prop ? () => testValue("blur") : undefined,
                  });
                }
                if (isVNode(child) && index === controlIndex) {
                  if (isFormFieldComponent(child.type)) {
                    return (
                      <FormFieldProvider context={fieldContext}>{() => child}</FormFieldProvider>
                    );
                  }
                  // Read through the computed value so external writes to the
                  // form model reliably invalidate this render and patch the
                  // cloned control's modelValue.
                  const value = prop ? renderedItemValue.value : undefined;
                  const propsData = child?.props || {};
                  const childProps: Record<string, unknown> = {
                    id: controlId,
                    "aria-describedby": describedBy,
                    "aria-invalid": !valid.value || undefined,
                    "aria-required": isRequired || undefined,
                    size: propsData.size || Form.size,
                    disabled: propsData.disabled || Form.disabled,
                    readonly: propsData.readonly || Form.readonly,
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
            </div>
            {prop ? (
              <Transition name="k-form-item-fade">
                {!valid.value ? (
                  <div id={controlErrorId} class="k-form-item-error-tip" role="alert">
                    {message.value}
                  </div>
                ) : null}
              </Transition>
            ) : null}
          </Col>
        </Row>
      );
    };
  },
});
export default FormItem;
