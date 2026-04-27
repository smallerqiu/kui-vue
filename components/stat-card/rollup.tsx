import { defineComponent, nextTick, onMounted, ref, watch } from "vue";

export default defineComponent({
  name: "RollUp",
  props: {
    modelValue: { type: Number, default: 0 },
    duration: { type: Number, default: 1.2 },
    precision: { type: Number, default: 0 },
  },
  setup(props) {
    const displayChars = ref<string[]>([]);
    const format = (val: number | bigint) => {
      return new Intl.NumberFormat("en-US", {
        minimumFractionDigits: props.precision,
        maximumFractionDigits: props.precision,
      })
        .format(val)
        .split("");
    };
    const getOffsetChars = (targetValue: number) => {
      const finalChars = format(targetValue);
      return finalChars.map((char: any) =>
        /\d/.test(char) ? (char > 5 ? char - 5 : char == 5 ? 8 : char * 1 + 5) : char
      );
    };

    displayChars.value = getOffsetChars(props.modelValue);

    onMounted(async () => {
      await nextTick();
      console.log("mounted", displayChars.value);
      displayChars.value = format(props.modelValue);
      console.log("mounted", displayChars.value);
    });
    watch(
      () => props.modelValue,
      async (newVal) => {
        displayChars.value = getOffsetChars(newVal);
        await nextTick();
        displayChars.value = format(newVal);
      },
      { immediate: false }
    );

    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    return () => (
      <div class="k-stat-roll-number-container">
        {displayChars.value.map((char, index) => (
          <div key={index} class="k-stat-roll-number-slot">
            {/\d/.test(char) ? (
              <div
                class="k-stat-roll-number-column"
                style={{
                  transition: `transform ${props.duration * 1000}ms cubic-bezier(0.4, 0, 0.2, 1)`,
                  transform: `translateY(-${Number(char) * 10}%)`,
                  willChange: "transform",
                }}
              >
                {numbers.map((num) => (
                  <span key={num}>{num}</span>
                ))}
              </div>
            ) : (
              <span class="k-stat-roll-number-separator">{char}</span>
            )}
          </div>
        ))}
      </div>
    );
  },
});
