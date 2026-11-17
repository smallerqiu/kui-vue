import { defineComponent, type PropType } from "vue";

const positions = ["tl", "tr", "bl", "br"];
const labels = ["Top left", "Top right", "Bottom left", "Bottom right"];

export default defineComponent({
  name: "GradientCorners",
  props: {
    disabled: Boolean,
    colors: {
      type: Array as PropType<string[]>,
      required: true,
    },
    selected: { type: Number, default: 0 },
    gradient: { type: String, default: "" },
  },
  emits: {
    activate: (index: number, element: HTMLElement) =>
      typeof index === "number" && element instanceof HTMLElement,
  },
  setup(props, { emit }) {
    return () => (
      <div class="k-gradient-picker-corners">
        <div class="k-gradient-picker-corners-fill">
          <div
            class="k-gradient-picker-corners-color"
            style={{ backgroundImage: props.gradient }}
          />
        </div>
        {props.colors.map((color, index) => (
          <button
            type="button"
            class={[
              "k-gradient-picker-corner",
              `k-gradient-picker-corner-${positions[index]}`,
              { "k-gradient-picker-corner-active": index === props.selected },
            ]}
            aria-label={labels[index]}
            aria-pressed={index === props.selected}
            aria-haspopup="dialog"
            aria-disabled={props.disabled || undefined}
            disabled={props.disabled}
            onClick={(event: MouseEvent) => {
              if (props.disabled) return;
              emit("activate", index, event.currentTarget as HTMLElement);
            }}
          >
            <span class="k-gradient-picker-corner-color" style={{ backgroundColor: color }} />
          </button>
        ))}
      </div>
    );
  },
});
