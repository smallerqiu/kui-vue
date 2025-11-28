import { defineComponent, ref } from "vue";
import DatePicker from "@/components/datePicker/date.jsx";

export default defineComponent({
  setup() {
    const dateVal = ref("");
    const rangeVal = ref([]);
    const timeVal = ref("");

    return () => (
      <div style={{ padding: "20px", width: "400px" }}>
        <h3>基本模式</h3>
        <DatePicker
          value={dateVal.value}
          onUpdate:value={(v) => (dateVal.value = v)}
          placeholder="选择日期"
        />
        <p>选中值: {String(dateVal.value)}</p>

        <h3>日期范围 (Range)</h3>
        <DatePicker
          mode="dateTimeRange"
          value={rangeVal.value}
          onUpdate:value={(v) => (rangeVal.value = v)}
        />

        <h3>带时间 (DateTime)</h3>
        <DatePicker
          mode="dateTime"
          value={timeVal.value}
          onUpdate:value={(v) => (timeVal.value = v)}
          format="YYYY-MM-DD HH:mm"
        />

        <h3>大尺寸 + 禁用</h3>
        <DatePicker size="large" disabled />
      </div>
    );
  },
});
