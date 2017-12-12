/** * by chuchur / chuchur@qq.com * page vue 组件,用作前端渲染 */
<template>
  <div>
    <div class="pages main">
      <div class="paging">
        <a @click="prePage"> 上一页</a>
        <a :class="{active:page==key}" v-for="(key,index) in pageCount" @click="toPage(key)" :key="index">{{key}}</a>
        <span v-show="pageCount>50">…</span>
        <a @click="nextPage">下一页</a>
      </div>
      <div class="page-number">共
        <span>{{pageCount}}</span>页
      </div>
      <div class="jump-page">到
        <input type="text" v-model="topage" maxlength="3" /> 页
        <a class="submit" @click="goPage">确定</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Page",
  props: {
    total: { required: false, default: 0 },
    onchange: { type: Function, required: false, default: function() {} },
    pagesize: { default: 15, required: false, type: Number },
    current: { default: 1, required: false }
  },
  data() {
    return {
      topage: 0,
      pageCount: 0,
      page: 0
    };
  },
  watch: {
    total(v) {
      this.pageCount = Math.ceil(this.total / this.pagesize) || 1;
      this.current =
        this.current > this.pageCount ? this.pageCount : this.current;
      this.page = this.current;
    }
  },
  mounted() {
    this.pageCount = Math.ceil(this.total / this.pagesize) || 1;
    this.topage = this.current;
    this.page = this.current;
  },
  methods: {
    change() {
      typeof this.onchange == "function" && this.onchange(this.page);
      this.topage = this.page;
    },
    goPage() {
      if (!this.topage || this.page < 0 || this.topage > this.pageCount) return;
      this.page = this.topage;
      this.change();
    },
    toPage(page) {
      this.page = page;
      this.change();
    },
    prePage() {
      this.page > 1 && (this.page--, this.change());
    },
    nextPage() {
      this.page < this.pageCount && (this.page++, this.change());
    }
  }
};
</script>