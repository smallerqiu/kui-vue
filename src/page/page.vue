/** * by chuchur / chuchur@qq.com * page vue 组件,用作前端渲染 */
<template>
  <div>
    <div :class="classes">
      <div class="paging">
        <a @click="prePage"> 上一页</a>
        <a :class="{active:page==1}" v-if="pageCount > 0" @click="toPage(1)">1</a>
        <a v-if="showPrevMore">...</a>
        <a v-for="(pager,i) in pagers" :key="i" :class="{active:page==pager}" @click="toPage(pager)">{{pager}}</a>
        <a v-if="showNextMore" class="">...</a>
        <a :class="{ active: page==pageCount }" v-if="pageCount > 1" @click="toPage(pageCount)">{{ pageCount}}</a>
        <a @click="nextPage">下一页</a>
      </div>
      <div class="page-number">
        <span>共{{pageCount}}页</span>
      </div>
      <div class="jump-page">跳至
        <input type="text" v-model="jump" maxlength="3" class="input-page" /> 页
        <a class="submit" @click="goPage">确定</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Page",
  props: {
    mini: { required: false, default: false, type: Boolean },
    total: { required: false, default: 0, type: [Number, String] },
    // onchange: { type: Function, required: false, default: function() {} },
    pagesize: { default: 15, required: false, type: [Number, String] },
    current: { default: 1, required: false, type: [Number, String] }
  },
  data() {
    return {
      jump: 0,
      pageCount: 0,
      page: 0,
      showPrevMore: false,
      showNextMore: false
    };
  },
  computed: {
    pagers() {
      const pagerCount = 7;
      const page = Number(this.page);
      const pageCount = Number(this.pageCount);
      let showPrevMore = false;
      let showNextMore = false;
      if (pageCount > pagerCount) {
        if (page > pagerCount - 3) {
          showPrevMore = true;
        }
        if (page < pageCount - 3) {
          showNextMore = true;
        }
      }
      const array = [];
      if (showPrevMore && !showNextMore) {
        const startPage = pageCount - (pagerCount - 2);
        for (let i = startPage; i < pageCount; i++) {
          array.push(i);
        }
      } else if (!showPrevMore && showNextMore) {
        for (let i = 2; i < pagerCount; i++) {
          array.push(i);
        }
      } else if (showPrevMore && showNextMore) {
        const offset = Math.floor(pagerCount / 2) - 1;
        for (let i = page - offset; i <= page + offset; i++) {
          array.push(i);
        }
      } else {
        for (let i = 2; i < pageCount; i++) {
          array.push(i);
        }
      }
      this.showPrevMore = showPrevMore;
      this.showNextMore = showNextMore;
      return array;
    },
    classes() {
      return ["k-pages", { ["k-pages-mini"]: this.mini }];
    }
  },
  watch: {
    total(v) {
      this.pageCount = Math.ceil(this.total / this.pagesize) || 1;
      this.current =
        this.current > this.pageCount ? this.pageCount : this.current;
      this.page = this.current;
    },
    page(page) {
      this.jump = page;
      this.$emit("change", page);
    }
  },
  mounted() {
    this.pageCount = Math.ceil(this.total / this.pagesize) || 1;
    this.jump = this.current;
    this.page = this.current;
    this.groupCount = Math.ceil(this.pageCount / 5);
  },
  methods: {
    goPage() {
      if (!this.jump || this.page < 0 || this.jump > this.pageCount) return;
      this.page = this.jump;
    },
    toPage(page) {
      this.page = page;
    },
    prePage() {
      this.page > 1 && this.page--;
    },
    nextPage() {
      this.page < this.pageCount && this.page++;
    }
  }
};
</script>