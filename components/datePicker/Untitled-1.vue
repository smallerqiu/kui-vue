<template>
  <div class="k-calendar">
    <div class="k-calendar-head">
      <template v-if="showTime">
        <div class="k-calendar-time-title">{{left?'开始时间':(right?'结束时间':'选择时间')}}</div>
      </template>
      <template v-else>
        <span class="k-calendar-prev-decade-btn" v-show="showYears" @click="year-=10">«</span>
        <span class="k-calendar-prev-year-btn" v-show="!showYears && !right" @click="setDate('Y-')">«</span>
        <span class="k-calendar-prev-month-btn" v-show="!showYears&&!showMonths && !right" @click="prevMonth">‹</span>
        <span class="k-calendar-year-select" v-show="showYears">{{ys+'-'+ye}}</span>
        <template v-if="年">
          <span class="k-calendar-year-select" @click="showYears=!showYears" v-show="!showYears">{{year}}年</span>
          <span class="k-calendar-month-select" @click="showMonths=!showMonths" v-show="!showYears&&!showMonths">{{monthsHead[month]}}</span>
        </template>
        <template v-else>
          <span class="k-calendar-month-select" @click="showMonths=!showMonths" v-show="!showYears&&!showMonths">{{monthsHead[month]}}</span>
          <span class="k-calendar-year-select" @click="showYears=!showYears" v-show="!showYears">{{year}}</span>
        </template>
        <span class="k-calendar-next-month-btn" v-show="!showYears&&!showMonths && !left" @click="nextMonth">›</span>
        <span class="k-calendar-next-year-btn" v-show="!showYears && !left" @click="setDate('Y+')">»</span>
        <span class="k-calendar-next-decade-btn" v-show="showYears" @click="year+=10">»</span>
      </template>
    </div>
    <div class="k-calendar-body">
      <div class="k-calendar-days">
        <span class="k-calendar-week" v-for="(i) in weeks" :key="i">{{i}}</span>
        <span v-for="(j,x) in days" :key="x" @click="is($event)&&(day=j.i,ok(j))" :class="[(j.p||j.n)?`k-calendar-date-out`:'',status(j.y,j.m,j.i,hour,minute,second,'YYYYMMDD',j)]">{{j.i}}</span>
      </div>
      <div class="k-calendar-months" v-show="showMonths">
        <span v-for="(i,j) in months" :key="j" @click="setDate('M',$event,j)" :class="[status(year,j,day,hour,minute,second,'YYYYMM',j)]">{{i}}</span>
      </div>
      <div class="k-calendar-years" v-show="showYears">
        <span v-for="(i,j) in years" :key="j" @click="setDate('Y',$event,i)" :class="[(j===0||j===11)?`k-calendar-date-out`:'',status(i,month,day,hour,minute,second,'YYYY',j)]">{{i}}</span>
      </div>
      <!-- <div class="k-calendar-hours" v-show="showHours">
        <div class="k-calendar-title">{{local.hourTip}}</div>
        <span v-for="(j,i) in 24" :key="i" @click="is($event)&&(showHours=false,hour=i,ok('h'))" :class="[status(year,month,day,i,minute,second,'YYYYMMDDHH')]">{{i}}</span>
      </div> -->
      <!-- <div class="k-calendar-minutes" v-show="showMinutes">
        <div class="k-calendar-title">{{local.minuteTip}}</div>
        <span v-for="(j,i) in 60" :key="i" @click="is($event)&&(showMinutes=false,minute=i,ok('h'))" :class="[status(year,month,day,hour,i,second,'YYYYMMDDHHmm')]">{{i}}</span>
      </div> -->
      <!-- <div class="k-calendar-seconds" v-show="showSeconds">
        <div class="k-calendar-title">{{local.secondTip}}</div>
        <span v-for="(j,i) in 60" :key="i" @click="is($event)&&(showSeconds=false,second=i,ok('h'))" :class="[status(year,month,day,hour,minute,i,'YYYYMMDDHHmmss')]">{{i}}</span>
      </div> -->
      <transition name="fade">
        <div class="k-calendar-time" v-if="m==='H' && showTime">
          <div class="k-calendar-hours">
            <span v-for="(j,i) in 24" :key="i" @click="setDate('h',$event,i)" :class="[status(year,month,day,i,minute,second,'YYYYMMDDHH',j)]">{{i|dd}}</span>
          </div>
          <div class="k-calendar-minutes">
            <span v-for="(j,i) in 60" :key="i" @click="setDate('m',$event,i)" :class="[status(year,month,day,hour,i,second,'YYYYMMDDHHmm',j)]">{{i|dd}}</span>
          </div>
          <div class="k-calendar-seconds">
            <span v-for="(j,i) in 60" :key="i" @click="setDate('s',$event,i)" :class="[status(year,month,day,hour,minute,i,'YYYYMMDDHHmmss',j)]">{{i|dd}}</span>
          </div>
        </div>
      </transition>
    </div>
    <div class="k-calendar-foot" v-if="m==='H'">
      <span :class="['k-calendar-timetip',{'disabled':tipDis}]" v-if="!this.right" @click="toggleShowTime">选择时间</span>
      <Button class="k-calendar-btn" mini type="primary" v-if="!this.left" @click="$parent.ok()">确定</Button>
      <!-- <div class="k-calendar-hour">
        <span :title="local.hourTip" @click="showHours=!showHours,showMinutes=showSeconds=false" :class="{on:showHours}">{{hour|dd}}</span>
        <span>:</span>
        <span :title="local.minuteTip" @click="showMinutes=!showMinutes,showHours=showSeconds=false" :class="{on:showMinutes}">{{minute|dd}}</span>
        <span>:</span>
        <span :title="local.secondTip" @click="showSeconds=!showSeconds,showHours=showMinutes=false" :class="{on:showSeconds}">{{second|dd}}</span>
      </div> -->
    </div>
  </div>
</template>