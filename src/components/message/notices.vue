<template>
  <div :class="`k-${type}`">
  <transition-group :name="type=='message'?'fadedown':'fadeleft'" @enter="enter" @leave="leave">
    <k-notice v-for="(item) in notices" :key="item.name" :type="item.type" :visible="item.visible" :title="item.title" :transition-name="item.transitionName" :content="item.content" :closable="item.closable" :onClose="item.onClose" :noticeType="item.noticeType">
    </k-notice>
  </transition-group>
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
    enter(e) {
      e.style.height = e.scrollHeight - 16 + "px";
    },
    leave(e) {
      e.style.height = 0;
      e.style.paddingTop = 0;
      e.style.paddingBottom = 0;
    },
    add(notice) {
      notice.name = Date.now()//Math.floor(Math.random() * 99999);
      notice.transitionName = notice.noticeType == "message" ? "fadedown" : "fadeleft";
      notice.duration = isNaN(Number(notice.duration)) ? 3 : notice.duration;
      let time;
      let onClose = () => {
        notice.close && notice.close()
        let index = this.notices.indexOf(notice)
        notice.index = index
        // this.$set(notice, 'visible', false)    
        this.notices.splice(index,1)   
        clearTimeout(time);
        time = null;
      };
      notice.duration > 0 && (time = setTimeout(onClose, notice.duration * 1000));
      ((notice.closable === true && notice.noticeType == "message") || notice.noticeType == "notice") && (notice.onClose = onClose);
      this.notices.push(notice);
    }
  }
};
</script>