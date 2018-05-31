<template>
  <div :class="`k-${type}`">
    <k-notice v-for="(item) in notices" :key="item.name" :type="item.type" :title="item.title" :transition-name="item.transitionName" :content="item.content" :closable="item.closable" :close="item.close" :noticeType="item.noticeType">

    </k-notice>
  </div>
</template>
<script>
import Notice from "./notice";
export default {
  components: { "k-notice": Notice },
  props: { type: String },
  data() {
    return {
      notices: []
    };
  },
  methods: {
    add(notice) {
      notice.name = Math.floor(Math.random() * 99999);
      notice.transitionName = notice.noticeType == "message" ? "fadedown" : "fadeleft";
      notice.duration = isNaN(Number(notice.duration)) ? 3 : notice.duration;
      let time;
      let close = () => {
        notice.onClose && notice.onClose()
        let index = this.notices.indexOf(notice);
        this.notices.splice(index, 1);
        clearTimeout(time);
        time = null;
      };
      notice.duration > 0 && (time = setTimeout(close, notice.duration * 1000));
      ((notice.closable === true && notice.noticeType == "message") ||
        notice.noticeType == "notice") &&
        (notice.close = close);
      this.notices.push(notice);
    }
  }
};
</script>