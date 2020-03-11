let lang = {
  en: {
    dow: 0, // Sunday is the first day of the week
    timeTip: 'Select Time',
    startTimeTip: 'Start Time',
    endTimeTip: 'Start Time',
    btn: 'OK',
    // hourTip: "Select Hour", // tip of select hour
    // minuteTip: "Select Minute", // tip of select minute
    // secondTip: "Select Second", // tip of select second
    yearSuffix: "", // suffix of head
    monthsHead: "January_February_March_April_May_June_July_August_September_October_November_December".split(
      "_"
    ), // months of head
    months: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), // months of panel
    weeks: "Su_Mo_Tu_We_Th_Fr_Sa".split("_") // weeks
  },
  zh: {
    dow: 1, // Monday is the first day of the week
    timeTip: '选择时间',
    btn: '确定',
    startTimeTip: '开始时间',
    endTimeTip: '结束时间',
    // hourTip: "选择小时", // tip of select hour
    // minuteTip: "选择分钟", // tip of select minute
    // secondTip: "选择秒数", // tip of select second
    yearSuffix: "年", // format of head
    monthsHead: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"), // months of head
    months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"), // months of panel
    weeks: "一_二_三_四_五_六_日".split("_") // weeks
  }
}

export default lang