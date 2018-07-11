<template>
  <div>
    <div :class="classes">
      <ul class="k-pager">
        <li class="k-pager-item" @click="prePage">
          <span>
            <Icon type="ios-arrow-left" />
          </span>
        </li>
        <li class="k-pager-item" :class="{active:page==1}" v-if="pageCount > 0" @click="toPage(1)">
          <span>1</span>
        </li>
        <li class="k-pager-item k-pager-more" v-if="showPrevMore">
          <span>
            <Icon type="more" />
          </span>
        </li>
        <li class="k-pager-item" v-for="(pager,i) in pagers" :key="i" :class="{active:page==pager}" @click="toPage(pager)">
          <span>{{pager}}</span>
        </li>
        <li class="k-pager-item k-pager-more" v-if="showNextMore">
          <span>
            <Icon type="more" />
          </span>
        </li>
        <li class="k-pager-item" :class="{ active: page==pageCount }" v-if="pageCount > 1" @click="toPage(pageCount)">
          <span>{{ pageCount}}</span>
        </li>
        <li class="k-pager-item" @click="nextPage">
          <span>
            <Icon type="ios-arrow-right" />
          </span>
        </li>
      </ul>
      <div class="k-page-sizer" v-if="sizer">
        <k-select :mini="mini" v-model="defaultPageSize" @change="changeSize">
          <k-option v-for="p in sizeData" :key="p" :value="p">{{p}}条/页</k-option>
        </k-select>
      </div>
      <div class="k-page-number">
        <span>共{{pageCount}}页</span>
      </div>
      <div class="k-page-options">
        <span>跳至</span>
        <k-input v-model="elevator" :mini="mini" class="k-page-options-elevator" />
        <span>页</span>
        <k-button :mini="mini" class="k-page-options-action" @click="goPage">确定</k-button>
      </div>
    </div>
  </div>
</template>
<script>
import { Select, Option } from '../select'
import { Button } from '../button'
import Input from '../input'
import Icon from '../icon'
export default {
  name: "Page",
  components: {
    'k-select': Select,
    'k-option': Option,
    Icon,
    'k-input': Input,
    'k-button': Button
  },
  props: {
    sizer: Boolean,
    sizeData: { type: Array, default: () => [10, 15, 20, 30, 40] },
    mini: { default: false, type: Boolean },
    total: { default: 0, type: [Number, String] },
    pagesize: { default: 15, type: [Number, String] },
    current: { default: 1, type: [Number, String] }
  },
  data() {
    return {
      elevator: 0,
      pageCount: 0,
      page: 0,
      showPrevMore: false,
      showNextMore: false,
      defaultPageSize: this.pagesize
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
      return ["k-page", { ["k-page-mini"]: this.mini }];
    }
  },
  watch: {
    total(v) {
      this.pageCount = Math.ceil(this.total / this.defaultPageSize) || 1;
      this.current = this.current > this.pageCount ? this.pageCount : this.current;
      this.page = this.current;
    },
    page(page) {
      this.elevator = page;
      this.$emit("change", page);
    }
  },
  mounted() {
    this.pageCount = Math.ceil(this.total / this.defaultPageSize) || 1;
    this.elevator = this.current;
    this.page = this.current;
    this.groupCount = Math.ceil(this.pageCount / 5);
  },
  methods: {
    changeSize(data) {
      this.defaultPageSize = data.value
      this.pageCount = Math.ceil(this.total / this.defaultPageSize) || 1;
      this.page = this.page > this.pageCount ? this.pageCount : this.page
      this.$emit('page-size-change', this.defaultPageSize)
    },
    goPage() {
      if (this.elevator >= 1) {
        if (!this.elevator || this.page < 0 || this.elevator > this.pageCount) return;
        this.page = this.elevator;
      }
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