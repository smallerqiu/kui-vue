import Option from "./option";
import Icon from "../icon";
import Empty from "../empty";
import transfer from "../directives/transfer";
import resize from "../directives/resize";
import zhCN from "../locale/lang/zh-CN";
import { isEmpty } from "../utils/number";
import { setPlacement } from "../utils/placement"; 
import { Loading, Close, CloseCircle, ChevronDown } from "kui-icons";
import { withInstall } from "../utils/vue";
import {
  ref,
  reactive,
  defineComponent,
  watch,
  nextTick,
  inject,
  provide,
  computed,
  onBeforeUnmount
} from "vue";

const Select = defineComponent({
  name: "Select",
  directives: {
    transfer,
    resize,
  },
  props: {
    // [Vue 3 Upgrade]: modelValue: [String, Number, Array],
    value: [String, Number, Array],
    
    placeholder: String,
    size: {
      default: "default",
      validator(value) {
        return ["small", "large", "default"].indexOf(value) >= 0;
      },
    },
    placement: {
      default: "bottom",
      validator(value) {
        return ["top", "top-left", "top-right", "bottom", "bottom-left", "bottom-right", "left", "right"].includes(value);
      },
    },
    width: Number,
    maxTagCount: Number,
    clearable: Boolean,
    filterable: Boolean,
    disabled: Boolean,
    multiple: Boolean,
    loading: Boolean,
    // bordered: { type: Boolean, default: true },
    showArrow: { type: Boolean, default: true },
    options: Array, 
    theme: String,
    emptyText: String,
    loadingText: String,
    icon: [String, Array],
    shape: String,
    arrowIcon: [String, Array],
  },
  setup(props, { slots, emit }) {
    const locale = inject("locale", null) || zhCN;
    
    const state = reactive({
      visible: false,
      queryKey: "",
      queryInputFocused: false,
      rendered: false,
    });

    const currentValue = ref(
      props.multiple ? props.value || [] : (props.value === undefined || props.value === null ? "" : props.value)
    );

    const childOptions = ref([]); 
    const hoverIndex = ref(-1);

    const refCtx = ref(null);
    const refPopper = ref(null);
    const queryInputRef = ref(null);
    const queryInputMirrorRef = ref(null);

    const currentPlacement = ref(props.placement);
    const transOrigin = ref("center top");
    const placementTop = ref(0);
    const placementLeft = ref(0);
    const minWidth = ref(0);

    const registerOption = (option) => {
      const existing = childOptions.value.find(o => o.value === option.value);
      if (!existing) {
        childOptions.value.push(option);
      } else {
        existing.label = option.label;
        existing.disabled = option.disabled;
      }
    };
    
    const unregisterOption = (val) => {
      const idx = childOptions.value.findIndex(o => o.value === val);
      if (idx > -1) {
        childOptions.value.splice(idx, 1);
      }
    };

    const updateOptionLabel = (val, label) => {
      const option = childOptions.value.find(o => o.value === val);
      if (option) {
        option.label = label;
      }
    };
    
    const setHoverIndex = (idx) => {
       hoverIndex.value = idx;
    };

    const onOptionSelect = (val, option) => {
      if (props.multiple) {
        const valArray = Array.isArray(currentValue.value) ? [...currentValue.value] : [];
        const idx = valArray.indexOf(val);
        if (idx > -1) {
          valArray.splice(idx, 1); // 反选
        } else {
          valArray.push(val); // 选中
        }
        currentValue.value = valArray;
        
        if (props.filterable) {
          state.queryKey = "";
          state.queryInputFocused = true;
          nextTick(() => queryInputRef.value?.focus());
        }
        updatePosition();
      } else {
        currentValue.value = val;
        state.visible = false;
        state.queryKey = "";
      }
      
      emit("input", currentValue.value);
      emit("change", currentValue.value);
      emit("select", { value: val, label: option.label });
    };

    provide("KSelect", {
      props,
      state,
      currentValue,
      childOptions, 
      hoverIndex,
      registerOption,
      unregisterOption,
      updateOptionLabel,
      onOptionSelect,
      setHoverIndex
    });

    // --- Watchers ---
    watch(() => props.value, (val) => {
      if (props.multiple) {
          currentValue.value = val || [];
      } else {
          currentValue.value = val;
      }
    });
    
    watch(() => props.placement, (val) => {
      currentPlacement.value = val;
      updatePosition();
    });

    const selectedLabels = computed(() => {
      const getLabel = (val) => {
        const opt = childOptions.value.find(o => o.value === val);
        return opt ? opt.label : val;
      };

      if (props.multiple) {
         return (currentValue.value || []).map(getLabel);
      } else {
         return [getLabel(currentValue.value)];
      }
    });

    const updatePosition = () => {
      if (!state.visible) return;
      nextTick(() => {
        setPlacement(
          refCtx,
          refPopper,
          currentPlacement,
          transOrigin,
          placementTop,
          placementLeft,
          3 
        );
      });
    };

    const toggle = () => {
      if (props.disabled) return;
      if (!state.rendered) state.rendered = true;
      
      state.visible = !state.visible;
      if (state.visible) {
        state.queryInputFocused = true;
        document.addEventListener("click", outsideClick);
        document.addEventListener("keydown", onKeydown);
        
        if (refCtx.value) {
            minWidth.value = refCtx.value.offsetWidth;
        }

        updatePosition();
        
        if (props.filterable) {
             nextTick(() => queryInputRef.value?.focus());
        }
      } else {
        closeDropdown();
      }
    };

    const closeDropdown = () => {
        state.visible = false;
        state.queryInputFocused = false;
        document.removeEventListener("click", outsideClick);
        document.removeEventListener("keydown", onKeydown);
    };

    const outsideClick = (e) => {
      const ctx = refCtx.value?.$el || refCtx.value;
      const popper = refPopper.value?.$el || refPopper.value; 
      if (ctx && ctx.contains(e.target)) return;
      if (popper && popper.contains(e.target)) return;
      closeDropdown();
    };
    
    const onKeydown = (e) => {
       if (!state.visible) return;
       
       const query = state.queryKey.toLowerCase();
       const visibleOpts = childOptions.value.filter(o => {
         if (o.disabled) return false;
         if (query && !String(o.label).toLowerCase().includes(query)) return false;
         return true;
       });
       
       if (visibleOpts.length === 0) return;

       let currentIdx = visibleOpts.findIndex(o => o.value === visibleOpts.find(vo => vo.index === hoverIndex.value)?.value);  

       if (e.key === "ArrowDown") {
          e.preventDefault();
          const nextOpt = visibleOpts[currentIdx + 1] || visibleOpts[0];
          const globalIndex = childOptions.value.findIndex(o => o.value === nextOpt.value);
          hoverIndex.value = globalIndex;
          
          // todo: scrollIntoView 逻辑需要配合 dom 引用
       } else if (e.key === "ArrowUp") {
          e.preventDefault();
          const prevOpt = visibleOpts[currentIdx - 1] || visibleOpts[visibleOpts.length - 1];
          const globalIndex = childOptions.value.findIndex(o => o.value === prevOpt.value);
          hoverIndex.value = globalIndex;
       } else if (e.key === "Enter") {
          e.preventDefault();
          if (hoverIndex.value > -1) {
             const target = childOptions.value[hoverIndex.value];
             if (target && !target.disabled) {
                 onOptionSelect(target.value, target);
             }
          }
       } else if (e.key === "Escape") {
          closeDropdown();
       }
    };

    const onClear = (e) => {
      e.stopPropagation();
      currentValue.value = props.multiple ? [] : "";
      emit("input", currentValue.value);
      emit("change", currentValue.value);
    };

    const removeTag = (e, val, index) => {
      e.stopPropagation();
      if (props.disabled) return;
      const newVal = [...currentValue.value];
      newVal.splice(index, 1);
      currentValue.value = newVal;
      emit("input", newVal);
      emit("change", newVal);
      updatePosition();
    };

    const handleSearchInput = (e) => {
        state.queryKey = e.target.value;
        nextTick(() => {
           if (queryInputMirrorRef.value && e.target) {
               e.target.style.width = `${queryInputMirrorRef.value.offsetWidth}px`;
           }
           updatePosition();
        });
        emit("search", e.target.value);
    };
    
    const handleQueryKeydown = (e) => {
        if (e.key === "Backspace" && !state.queryKey && props.multiple && currentValue.value.length) {
            currentValue.value.pop();
            emit("input", currentValue.value);
            updatePosition();
        }
    };

    onBeforeUnmount(() => {
         document.removeEventListener("click", outsideClick);
         document.removeEventListener("keydown", onKeydown);
    });

    return () => {
      const renderTriggerContent = () => {
        if (props.multiple) {
            const tags = (currentValue.value || []).map((val, i) => {
               if (props.maxTagCount && i >= props.maxTagCount) {
                   return i === props.maxTagCount ? <span class="k-select-tag">+{currentValue.value.length - props.maxTagCount}...</span> : null;
               }
               const opt = childOptions.value.find(o => o.value === val);
               const label = opt ? opt.label : val;
               
               return (
                 <span class="k-select-tag" key={val}>
                   {label}
                   <Icon type={Close} onClick={(e) => removeTag(e, val, i)} />
                 </span>
               );
            });
            
            const searchInput = (
               <div class="k-select-search-wrap" v-show={state.visible || props.filterable}>
                  <input 
                    ref={queryInputRef}
                    class="k-select-search"
                    value={state.queryKey}
                    onInput={handleSearchInput}
                    onKeydown={handleQueryKeydown}
                  />
                  <span ref={queryInputMirrorRef} class="k-select-search-mirror">{state.queryKey}</span>
               </div>
            );
            return <div class="k-select-labels">{tags}{searchInput}</div>;
        } else {
            const hasValue = !isEmpty(currentValue.value);
            const label = selectedLabels.value[0];
            const showSearch = props.filterable && state.visible;
            
            return (
              <div class="k-select-selection">
                { !showSearch && hasValue ? <div class="k-select-label">{label}</div> : null }
                { !showSearch && !hasValue && !state.queryKey ? <div class="k-select-placeholder">{props.placeholder || locale.k.select.placeholder}</div> : null }
                
                { props.filterable ? (
                    <div class="k-select-search-wrap" style={{ display: showSearch ? 'block' : 'none' }}>
                       <input 
                         ref={queryInputRef}
                         class="k-select-search"
                         value={state.queryKey}
                         onInput={handleSearchInput}
                       />
                    </div>
                ) : null}
              </div>
            );
        }
      };

      const renderDropdown = () => {
        if (!state.rendered) return null;
        
        let children = null;
        if (props.options && props.options.length) {
            children = props.options.map(opt => (
               <Option 
                 key={opt.value} 
                 value={opt.value} 
                 label={opt.label} 
                 disabled={opt.disabled} 
               />
            ));
        } else {
            children = slots.default?.();
        }

        const dropdownStyle = {
            minWidth: `${minWidth.value}px`,
            left: `${placementLeft.value}px`,  
            top: `${placementTop.value}px`,    
            transformOrigin: transOrigin.value,  
        };
        
        const hasContent = (props.options && props.options.length) || (children && children.length);

        return (
          <transition name="k-select">
            <div 
              v-show={state.visible} 
              class={["k-select-dropdown", { "k-select-dropdown-multiple": props.multiple }]}
              style={dropdownStyle}
              ref={refPopper}
              v-transfer={true} 
            >
               { props.loading ? (
                   <div class="k-select-loading"><Icon type={Loading} spin /> {props.loadingText || locale.k.select.loading}</div>
               ) : hasContent ? (
                   <ul>{children}</ul>
               ) : (
                   <Empty description={props.emptyText || locale.k.select.emptyText} />
               )}
            </div>
          </transition>
        );
      };

      const classes = [
        "k-select",
        {
          "k-select-disabled": props.disabled,
          "k-select-open": state.visible,
          "k-select-multiple": props.multiple,
          "k-select-lg": props.size == "large",
          "k-select-sm": props.size == "small",
          "k-select-has-clear": props.clearable && !props.disabled && !isEmpty(currentValue.value)
        }
      ];
      
      const showClear = props.clearable && !props.disabled && (!isEmpty(currentValue.value) || (props.multiple && currentValue.value.length));
      
      const iconNode = props.loading ? <Icon type={Loading} spin class="k-select-icon" /> :
                       (showClear ? <Icon type={CloseCircle} class="k-select-clearable" onClick={onClear} /> :
                       (props.showArrow ? <Icon type={props.arrowIcon || ChevronDown} class="k-select-arrow" /> : null));

      return (
        <div 
           class={classes} 
           style={{ width: props.width ? `${props.width}px` : null }}
           ref={refCtx}
           v-resize={updatePosition}
           onClick={toggle}
        >
           {renderTriggerContent()}
           {iconNode}
           {renderDropdown()}
        </div>
      );
    };
  },
});
export default withInstall(Select);