import { defineComponent, onMounted, ref, watch } from "vue";

export default defineComponent({
  name: "RollUp",
  props: {
    modelValue: { type: [Number, String], default: 0 },
    duration: { type: Number, default: 1.2 },
    precision: { type: Number, default: 0 },
  },
  setup(props) {
    const displayChars = ref<string[]>([]);
    const format = (val: number | string): string[] => {
      return new Intl.NumberFormat("en-US", {
        minimumFractionDigits: props.precision,
        maximumFractionDigits: props.precision,
      })
        .format(Number(val))
        .split("");
    };
    const getChars = (targetValue: number | string): string[] => {
      const finalChars = format(targetValue);
      return finalChars.map((char: any) =>
        /\d/.test(char) ? (char > 5 ? char - 5 : char * 1 + 5) : char
      );
    };

    displayChars.value = getChars(props.modelValue);

    onMounted(() => {
      displayChars.value = format(props.modelValue);
    });
    watch(
      () => props.modelValue,
      (newVal) => {
        displayChars.value = format(newVal);
      }
    );

    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const slotNodes = displayChars.value.map((char, index) => {
      const rollProps = {
        class: "k-stat-roll-number-column",
        style: {
          transition: `transform ${props.duration * 1000}ms cubic-bezier(0.4, 0, 0.2, 1)`,
          transform: `translateY(-${Number(char) * 10}%)`,
        },
      };

      return (
        <div key={index} class="k-stat-roll-number-slot">
          {/\d/.test(char) ? (
            <div {...rollProps}>
              {numbers.map((num) => (
                <span key={num}>{num}</span>
              ))}
            </div>
          ) : (
            <span class="k-stat-roll-number-separator">{char}</span>
          )}
        </div>
      );
    });

    return () => <div class="k-stat-roll-number-container">{slotNodes}</div>;
  },
});
