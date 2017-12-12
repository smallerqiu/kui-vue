<template>
   <div class="datepicker" :class="{'datepicker-range':range,'datepicker__clearable':clearable&&text&&!disabled}">
      <input readonly :value="text" :class="[show ? 'focus' : '', inputClass]" :disabled="disabled" :placeholder="placeholder"
         :name="name" />
      <a class="datepicker-close" @click.stop="cls"></a>
      <transition name="datepicker-anim">
         <div class="datepicker-popup" :class="popupClass" tabindex="-1" v-if="show">
            <template v-if="range">
               <Calendar v-model="dates[0]" :left="true"></Calendar>
               <Calendar v-model="dates[1]" :right="true"></Calendar>
            </template>
            <template v-else>
               <Calendar v-model="dates[0]"></Calendar>
            </template>
         </div>
      </transition>
   </div>
</template>
<script>
   import calendar from './datecalendar'
   export default {
      name: 'datePicker',
      components: {
         "Calendar": calendar
      },
      props: {
         name: [String],
         inputClass: [String],
         popupClass: [String],
         value: [Date, Array, String],
         disabled: [Boolean],
         rangeSeparator: {
            type: String,
            default: '~'
         },
         clearable: {
            type: Boolean,
            default: false
         },
         placeholder: [String],
         disabledDate: {
            type: Function,
            default: () => {
               return false
            }
         },
         format: {
            type: String,
            default: 'YYYY-MM-DD'
         },
         local: {
            type: Object,
            default () {
               return {
                  dow: 1, // Monday is the first day of the week
                  hourTip: '选择小时', // tip of select hour
                  minuteTip: '选择分钟', // tip of select minute
                  secondTip: '选择秒数', // tip of select second
                  yearSuffix: '年', // format of head
                  monthsHead: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'), // months of head
                  months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'), // months of panel
                  weeks: '一_二_三_四_五_六_日'.split('_') // weeks
               }
            }
         }
      },
      data() {
         return {
            show: false,
            dates: this.vi(this.value)
         }
      },
      computed: {
         range() {
            return this.dates.length === 2
         },
         text() {
            const val = this.value
            const txt = this.dates.map(date => this.tf(date)).join(` ${this.rangeSeparator} `)
            if (Array.isArray(val)) {
               return val.length > 1 ? txt : ''
            } else {
               return val ? txt : ''
            }
         }
      },
      watch: {
         value(val) {
            // if(!Array.isArray(val)){

            //    console.log(val)
            //    // var s = new Date(val)
            //    // this.dates = new Array(this.tf(s))
            // }
             this.dates = this.vi(this.value)
         }
      },
      methods: {
         cls() {
            this.$emit('input', this.range ? [] : '')
         },
         vi(val) {
            //此处返回值 返回的date 类型改为字符串
            if (Array.isArray(val)) {
               // return val.length > 1 ? val.map(item => new Date(item)) : [new Date(), new Date()]
               return val.length > 1 ? val.map(item => new Date(item)) : [new Date(), new Date()]
            } else {
               // return val ? new Array(new Date(val)) : [new Date()]
               return val ? new Array(new Date(val)) : [new Date()]
            }
         },
         ok() {
            const $this = this
            $this.$emit('input', Array.isArray($this.value) ? $this.dates : $this.dates[0])
            setTimeout(() => {
               $this.show = $this.range
            })
         },
         tf(time, format) {
            const year = time.getFullYear()
            const month = time.getMonth()
            const day = time.getDate()
            const hours24 = time.getHours()
            const hours = hours24 % 12 === 0 ? 12 : hours24 % 12
            const minutes = time.getMinutes()
            const seconds = time.getSeconds()
            const milliseconds = time.getMilliseconds()
            const dd = t => ('0' + t).slice(-2)
            const map = {
               YYYY: year,
               MM: dd(month + 1),
               MMM: this.local.months[month],
               MMMM: this.local.monthsHead[month],
               M: month + 1,
               DD: dd(day),
               D: day,
               HH: dd(hours24),
               H: hours24,
               hh: dd(hours),
               h: hours,
               mm: dd(minutes),
               m: minutes,
               ss: dd(seconds),
               s: seconds,
               S: milliseconds
            }
            return (format || this.format).replace(/Y+|M+|D+|H+|h+|m+|s+|S+/g, str => map[str])
         },
         dc(e) {
            this.show = this.$el.contains(e.target) && !this.disabled
         }
      },
      mounted() {
         document.addEventListener('click', this.dc)
      },
      beforeDestroy() {
         document.removeEventListener('click', this.dc)
      }
   }
</script>