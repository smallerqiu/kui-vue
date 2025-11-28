import { defineComponent, ref, computed, watch, onMounted, onUnmounted, nextTick } from 'vue';
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import customParseFormat from 'dayjs/plugin/customParseFormat';

// 启用插件
dayjs.extend(isBetween);
dayjs.extend(customParseFormat);

import './styles/demo.css';

export default defineComponent({
  name: 'DatePicker',
  props: {
    value: { type: [Date, Array, String, Number], default: null },
    mode: { 
      type: String, 
      default: 'date',
      validator: (v) => ['year', 'month', 'date', 'dateTime', 'dateRange', 'dateTimeRange'].includes(v)
    },
    disabled: { type: Boolean, default: false },
    clearable: { type: Boolean, default: true },
    placeholder: { type: [String, Array], default: '' },
    format: { type: [String, Array], default: null },
    disabledDate: { type: Function, default: () => false },
  },
  emits: ['update:value', 'change'],
  
  setup(props, { emit }) {
    // --- 状态定义 ---
    const isVisible = ref(false);
    const containerRef = ref(null);
    const isFocus = ref(false);

    // 面板显示的基准 (决定显示哪一年/月)
    const panelDate = ref(dayjs());
    // 内部值: dayjs对象 或 [dayjs, dayjs]
    const innerValue = ref(null);
    // 输入框显示文本
    const textValue = ref('');
    // 鼠标悬停日期 (用于 Range 预览)
    const hoverDate = ref(null);

    // 视图状态: 'date' | 'month' | 'year' | 'time'
    const currentView = ref('date'); 
    // Range模式下，当前时间面板编辑的是哪一端: 'start' | 'end'
    const timeEditSide = ref('start'); 

    // --- 辅助函数 ---
    const getFormat = () => {
        if (props.format) return Array.isArray(props.format) ? props.format[0] : props.format;
        const map = {
            date: 'YYYY-MM-DD',
            dateTime: 'YYYY-MM-DD HH:mm:ss',
            dateRange: 'YYYY-MM-DD',
            dateTimeRange: 'YYYY-MM-DD HH:mm:ss',
            month: 'YYYY-MM',
            year: 'YYYY'
        };
        return map[props.mode] || 'YYYY-MM-DD';
    };

    // --- 数据监听 ---
    watch(() => props.value, (val) => {
        const fmt = getFormat();
        if (!val) {
            innerValue.value = null;
            textValue.value = '';
            return;
        }
        if (props.mode.includes('Range') && Array.isArray(val)) {
            innerValue.value = val.map(d => dayjs(d));
            textValue.value = innerValue.value.map(d => d.format(fmt)).join(' - ');
            if (innerValue.value[0]) panelDate.value = innerValue.value[0];
        } else {
            const d = dayjs(val);
            innerValue.value = d;
            textValue.value = d.isValid() ? d.format(fmt) : val;
            if (d.isValid()) panelDate.value = d;
        }
    }, { immediate: true });

    // --- 核心逻辑 ---

    // 1. 初始化视图
    const initView = () => {
        if (props.mode === 'year') currentView.value = 'year';
        else if (props.mode === 'month') currentView.value = 'month';
        else currentView.value = 'date';
        
        // 每次打开如果没值，重置面板到当前
        if (!innerValue.value) panelDate.value = dayjs();
        else if (!Array.isArray(innerValue.value)) panelDate.value = innerValue.value;
    };

    const togglePanel = () => {
        if (props.disabled) return;
        isVisible.value = !isVisible.value;
        if (isVisible.value) {
            isFocus.value = true;
            initView();
        } else {
            isFocus.value = false;
        }
    };

    const handleClickOutside = (e) => {
        if (containerRef.value && !containerRef.value.contains(e.target)) {
            isVisible.value = false;
            isFocus.value = false;
            syncTextFromValue(); // Blur 恢复正确文本
        }
    };

    // 2. 值更新与发射
    const emitValue = (closePanel = true) => {
        if (!innerValue.value) {
            emit('update:value', null);
            emit('change', null, '');
            return;
        }

        const fmt = getFormat();
        let emitData, emitStr;

        if (Array.isArray(innerValue.value)) {
             // Range
             if (innerValue.value.length === 2 && innerValue.value[0] && innerValue.value[1]) {
                const dates = innerValue.value.sort((a, b) => a.valueOf() - b.valueOf());
                emitData = dates.map(d => d.toDate());
                emitStr = dates.map(d => d.format(fmt));
                
                emit('update:value', emitData);
                emit('change', dates, emitStr);
                syncTextFromValue();
                if (closePanel) isVisible.value = false;
             }
        } else {
            // Single
            emitData = innerValue.value.toDate();
            emitStr = innerValue.value.format(fmt);
            emit('update:value', emitData);
            emit('change', innerValue.value, emitStr);
            syncTextFromValue();
            if (closePanel) isVisible.value = false;
        }
    };

    const syncTextFromValue = () => {
        if (!innerValue.value) { textValue.value = ''; return; }
        const fmt = getFormat();
        if (Array.isArray(innerValue.value) && innerValue.value.length === 2) {
            textValue.value = innerValue.value.map(d => d.format(fmt)).join(' - ');
        } else if (!Array.isArray(innerValue.value)) {
            textValue.value = innerValue.value.format(fmt);
        }
    };

    // 3. 用户输入处理
    const handleInput = (e) => {
        const val = e.target.value;
        textValue.value = val;
        const fmt = getFormat();

        if (props.mode.includes('Range')) {
            const parts = val.split(' - ');
            if (parts.length === 2) {
                const d1 = dayjs(parts[0], fmt, true);
                const d2 = dayjs(parts[1], fmt, true);
                if (d1.isValid() && d2.isValid()) {
                    innerValue.value = [d1, d2];
                    panelDate.value = d1;
                    emitValue(false);
                }
            }
        } else {
            const d = dayjs(val, fmt); // 去掉 strict 以更宽容
            if (d.isValid()) {
                innerValue.value = d;
                panelDate.value = d;
                emitValue(false);
            }
        }
    };

    // --- 交互 Handler ---

    // 头部: 年/月 切换逻辑
    const handlePrevYear = () => panelDate.value = panelDate.value.subtract(1, 'year');
    const handleNextYear = () => panelDate.value = panelDate.value.add(1, 'year');
    const handlePrevMonth = () => panelDate.value = panelDate.value.subtract(1, 'month');
    const handleNextMonth = () => panelDate.value = panelDate.value.add(1, 'month');

    // 选中具体年
    const pickYear = (year) => {
        panelDate.value = panelDate.value.year(year);
        if (props.mode === 'year') {
            innerValue.value = panelDate.value;
            emitValue(true);
        } else {
            currentView.value = 'month'; // 选完年选月
        }
    };

    // 选中具体月
    const pickMonth = (monthIndex) => {
        panelDate.value = panelDate.value.month(monthIndex);
        if (props.mode === 'month') {
            innerValue.value = panelDate.value;
            emitValue(true);
        } else {
            currentView.value = 'date'; // 选完月选日
        }
    };

    // 选中具体日 (核心)
    const pickDate = (date) => {
        if (props.mode.includes('Range')) {
            let newVal = Array.isArray(innerValue.value) ? [...innerValue.value] : [];
            // 如果已有2个(选满了) 或者 0个 => 重新开始
            if (newVal.length === 2 || newVal.length === 0) {
                newVal = [date];
            } else {
                // 已有1个 => 补全，排序
                newVal = [newVal[0], date].sort((a,b)=>a.valueOf()-b.valueOf());
                // DateTimeRange: 默认给结束时间 23:59:59 (如果是新选的日期)
                if (props.mode === 'dateTimeRange') {
                   // 保留原来的时分秒逻辑比较复杂，这里简单处理：如果是同一天不改时间，不同天结束设为23:59:59
                   // 为了“选中修改了直接...”的体验，这里只定日期，时间保持默认或当前
                }
            }
            innerValue.value = newVal;
            
            // 如果选满了2个
            if (newVal.length === 2) {
                // 如果不是带时间的，直接完成
                if (props.mode !== 'dateTimeRange') {
                    emitValue(true);
                } else {
                    // 带时间：更新值，但不关闭，让用户有机会改时间
                    emitValue(false); 
                }
            }
        } else {
            // 单选
            if (props.mode === 'dateTime') {
                // 保持原来的时间
                const old = innerValue.value || dayjs();
                innerValue.value = date.hour(old.hour()).minute(old.minute()).second(old.second());
                emitValue(false); // 更新但不关闭
            } else {
                innerValue.value = date;
                emitValue(true); // 关闭
            }
        }
    };

    // 时间滚动选择
    const handleTimeScroll = (type, val) => {
        // type: 'hour'|'minute'|'second'
        let target = null;
        if (props.mode === 'dateTimeRange') {
            const idx = timeEditSide.value === 'start' ? 0 : 1;
            if (!innerValue.value || !innerValue.value[idx]) return; // 还没选日期不能选时间
            
            const newD = innerValue.value[idx].set(type, val);
            const newArr = [...innerValue.value];
            newArr[idx] = newD;
            innerValue.value = newArr;
            emitValue(false); // 实时更新
        } else {
            const base = innerValue.value || dayjs();
            innerValue.value = base.set(type, val);
            emitValue(false); // 实时更新
        }
    };

    // 切换时间面板
    const toggleTimeMode = (side) => {
        if (side) timeEditSide.value = side;
        if (currentView.value === 'time' && (side === null || side === timeEditSide.value)) {
            currentView.value = 'date'; // 再次点击切回日期
        } else {
            currentView.value = 'time';
        }
    };

    // --- 渲染函数 ---

    const renderHeader = () => {
        // 只有 Date/Month/Year 视图有头部，Time视图用简单的标题替代或复用
        if (currentView.value === 'time') {
            const title = props.mode === 'dateTimeRange' 
                ? (timeEditSide.value === 'start' ? '设置开始时间' : '设置结束时间')
                : '设置时间';
            return (
                <div class="v-dp-header">
                     <span class="v-dp-header-label" style="cursor: default">{title}</span>
                     <button style="position:absolute; right:10px; font-size:12px;" onClick={() => currentView.value = 'date'}>返回日期</button>
                </div>
            )
        }

        const year = panelDate.value.year();
        const month = panelDate.value.month() + 1;

        return (
            <div class="v-dp-header">
                <div class="v-dp-prev-btn">
                    <button onClick={handlePrevYear}>«</button>
                    {currentView.value === 'date' && <button onClick={handlePrevMonth}>‹</button>}
                </div>
                
                <div>
                    <span class="v-dp-header-label" onClick={() => currentView.value = 'year'}>{year}年</span>
                    {currentView.value === 'date' && 
                        <span class="v-dp-header-label" onClick={() => currentView.value = 'month'}>{month}月</span>
                    }
                </div>

                <div class="v-dp-next-btn">
                    {currentView.value === 'date' && <button onClick={handleNextMonth}>›</button>}
                    <button onClick={handleNextYear}>»</button>
                </div>
            </div>
        )
    };

    const renderYearTable = () => {
        // 显示 12 年 (比如 2020-2029 + 前后)
        const startY = Math.floor(panelDate.value.year() / 10) * 10;
        const years = Array.from({length: 12}, (_, i) => startY - 1 + i);
        return (
            <div class="v-dp-body">
                <div class="v-dp-year-table">
                    {years.map(y => (
                        <div 
                            key={y} 
                            class={['v-dp-year-cell', y === panelDate.value.year() ? 'is-selected' : '']}
                            onClick={() => pickYear(y)}
                        >
                            {y}
                        </div>
                    ))}
                </div>
            </div>
        )
    };

    const renderMonthTable = () => {
        const months = ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'];
        return (
             <div class="v-dp-body">
                <div class="v-dp-month-table">
                    {months.map((m, i) => (
                        <div 
                            key={i}
                            class={['v-dp-month-cell', i === panelDate.value.month() ? 'is-selected' : '']}
                            onClick={() => pickMonth(i)}
                        >
                            {m}
                        </div>
                    ))}
                </div>
             </div>
        )
    };

    const renderDateTable = () => {
        const startOfMonth = panelDate.value.startOf('month');
        const startDay = startOfMonth.day(); // 0(Sun)
        const days = [];
        
        // 补全上月
        for(let i=startDay; i>0; i--) days.push({ d: startOfMonth.subtract(i, 'day'), type: 'prev' });
        // 本月
        for(let i=0; i<startOfMonth.daysInMonth(); i++) days.push({ d: startOfMonth.add(i, 'day'), type: 'curr' });
        // 补全下月 (凑42格)
        const rem = 42 - days.length;
        for(let i=1; i<=rem; i++) days.push({ d: startOfMonth.endOf('month').add(i, 'day'), type: 'next' });

        return (
            <div class="v-dp-body">
                <div class="v-dp-week-header">
                    {['日','一','二','三','四','五','六'].map(w => <span key={w} style={{flex:1, textAlign:'center', fontSize:'12px', color:'#909399'}}>{w}</span>)}
                </div>
                <div class="v-dp-table" onMouseleave={() => hoverDate.value = null}>
                    {days.map((item, idx) => {
                        const date = item.d;
                        const isToday = date.isSame(dayjs(), 'day');
                        const isDisabled = props.disabledDate(date.toDate());
                        
                        let isSelected = false;
                        let inRange = false;
                        let isRangeStart = false;
                        let isRangeEnd = false;

                        // 复杂的 Range 样式判断
                        if (props.mode.includes('Range') && Array.isArray(innerValue.value)) {
                            const [s, e] = innerValue.value;
                            if (s && date.isSame(s, 'day')) { isSelected = true; isRangeStart = true; }
                            if (e && date.isSame(e, 'day')) { isSelected = true; isRangeEnd = true; }
                            
                            // 已选范围
                            if (s && e && date.isBetween(s, e, 'day', '[]')) inRange = true;
                            // 悬停预览范围 (只有开始没有结束时)
                            if (s && !e && hoverDate.value) {
                                const min = s.isBefore(hoverDate.value) ? s : hoverDate.value;
                                const max = s.isBefore(hoverDate.value) ? hoverDate.value : s;
                                if (date.isBetween(min, max, 'day', '[]')) inRange = true;
                            }
                        } else if (innerValue.value && !Array.isArray(innerValue.value)) {
                            if (date.isSame(innerValue.value, 'day')) isSelected = true;
                        }

                        return (
                            <div 
                                key={idx}
                                class={[
                                    'v-dp-cell',
                                    item.type !== 'curr' ? 'not-current' : '',
                                    isToday ? 'is-today' : '',
                                    isSelected ? 'is-selected' : '',
                                    inRange && !isSelected ? 'in-range' : '',
                                    isRangeStart ? 'range-start' : '',
                                    isRangeEnd ? 'range-end' : '',
                                    isDisabled ? 'is-disabled' : ''
                                ]}
                                onMouseenter={() => { if(props.mode.includes('Range')) hoverDate.value = date; }}
                                onClick={() => !isDisabled && pickDate(date)}
                            >
                                {date.date()}
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    };

    const renderTimePicker = () => {
        // 确定当前应该显示哪个时间
        let activeDate = dayjs();
        if (props.mode === 'dateTimeRange') {
            const idx = timeEditSide.value === 'start' ? 0 : 1;
            if (innerValue.value && innerValue.value[idx]) activeDate = innerValue.value[idx];
        } else {
            if (innerValue.value && !Array.isArray(innerValue.value)) activeDate = innerValue.value;
        }

        const renderCol = (type, max) => {
            const curr = type === 'hour' ? activeDate.hour() : (type === 'minute' ? activeDate.minute() : activeDate.second());
            // 自动滚动定位需要 DOM 操作，简单起见用 key 强制刷新或 CSS，这里不做复杂 scrollIntoView
            // 实际生产建议在 mounted/updated 里做 scrollTop
            return (
                <ul class="v-dp-time-col">
                    {Array.from({length: max}).map((_, i) => (
                        <li 
                            key={i} 
                            class={['v-dp-time-item', i === curr ? 'active' : '']}
                            onClick={() => handleTimeScroll(type, i)}
                        >
                            {String(i).padStart(2, '0')}
                        </li>
                    ))}
                    {/* 简单的自动滚动脚本注入 (Hack) */}
                    <script>{`
                        // 这是一个占位，实际需要 Vue directive 或 ref 来做滚动
                    `}</script>
                </ul>
            )
        };

        return (
            <div class="v-dp-time-picker">
                {renderCol('hour', 24)}
                {renderCol('minute', 60)}
                {renderCol('second', 60)}
            </div>
        )
    };

    const renderFooter = () => {
        // 只有 dateTime / dateTimeRange 需要 Footer 来切换时间面板
        if (!props.mode.includes('Time')) return null;
        
        if (props.mode === 'dateTimeRange') {
            const s = (innerValue.value && innerValue.value[0]) ? innerValue.value[0].format('HH:mm:ss') : '--:--:--';
            const e = (innerValue.value && innerValue.value[1]) ? innerValue.value[1].format('HH:mm:ss') : '--:--:--';
            return (
                <div class="v-dp-footer">
                    <button 
                        class={['v-dp-footer-btn', currentView.value === 'time' && timeEditSide.value === 'start' ? 'active' : '']}
                        onClick={() => toggleTimeMode('start')}
                    >
                        {s}
                    </button>
                    <span style="color:#dcdfe6">-</span>
                    <button 
                        class={['v-dp-footer-btn', currentView.value === 'time' && timeEditSide.value === 'end' ? 'active' : '']}
                        onClick={() => toggleTimeMode('end')}
                    >
                        {e}
                    </button>
                </div>
            )
        } else {
            const t = innerValue.value ? innerValue.value.format('HH:mm:ss') : '选择时间';
            return (
                <div class="v-dp-footer">
                    <button 
                         class={['v-dp-footer-btn', currentView.value === 'time' ? 'active' : '']}
                         onClick={() => toggleTimeMode(null)}
                         style={{width:'100%'}}
                    >
                        {currentView.value === 'time' ? '确定时间' : t}
                    </button>
                </div>
            )
        }
    };

    // --- 生命周期 ---
    onMounted(() => document.addEventListener('click', handleClickOutside));
    onUnmounted(() => document.removeEventListener('click', handleClickOutside));

    return () => (
        <div class="v-datepicker" ref={containerRef}>
            <div 
                class={['v-datepicker-wrapper', isFocus.value ? 'is-focus' : '', props.disabled ? 'is-disabled' : '']} 
                onClick={togglePanel}
            >
                <i style={{marginRight:'8px', color:'#c0c4cc', fontStyle:'normal'}}>📅</i>
                <input 
                    class="v-datepicker-input"
                    value={textValue.value}
                    onInput={handleInput}
                    placeholder={Array.isArray(props.placeholder) ? props.placeholder.join(' - ') : props.placeholder}
                    disabled={props.disabled}
                />
                {props.clearable && textValue.value && !props.disabled && 
                    <i 
                        style={{cursor:'pointer', color:'#c0c4cc', fontStyle:'normal', fontSize:'14px'}}
                        onClick={(e) => { e.stopPropagation(); emit('update:value', null); emit('change', null, ''); }}
                    >✕</i>
                }
            </div>

            {isVisible.value && (
                <div class="v-datepicker-panel">
                    {renderHeader()}
                    
                    {currentView.value === 'year' && renderYearTable()}
                    {currentView.value === 'month' && renderMonthTable()}
                    {currentView.value === 'date' && renderDateTable()}
                    {currentView.value === 'time' && renderTimePicker()}

                    {renderFooter()}
                </div>
            )}
        </div>
    )
  }
});