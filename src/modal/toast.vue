/**
 * by chuchur / chuchur@qq.com
 * toast vue 组件,用作前端渲染
 */

 <template>
   <div class="k-modal toast" v-show="visible">
      <div class="modal-mask" ref="mask" @click.stop="out"></div>
      <div class="modal-wrap">
         <div class="modal" ref="modal" :style="`width:${width}px`">
            <div class="modal-content">
               <a class="modal-close" @click="closed">&times;</a>
               <div class="modal-body">
                  <div class="pull-center">
                     <span :class="`toast-icon ijc-${icon}`"></span>
                     <div class="toast-content">
                        <slot>我是内容</slot>
                     </div>
                  </div>
               </div>
               <div class="modal-footer">
                  <slot name="footer">
                     <div class="pull-center">
                        <input type="button" value="我知道了" class="btn ghost gray" @click="yes" />
                     </div>
                  </slot>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>
 <script>
export default {
  name: "Toast",
  props: {
    icon: { required: false, type: String, default: "ok" },
    value: { required: false, type: Boolean, default: false },
    width: { required: false, default: 520 },
    ok: { required: false, default() {}, type:Function },
    cancel: { required: false, default() {}, type:Function },
    close: { required: false, default() {}, type:Function }
  },
  data() {
    return {
      visible: this.value
    };
  },
  watch: {
    value(v) {
      v ? (this.visible = v) : this.out();
    }
  },
  mounted() {},
  methods: {
    yes() {
      this.ok();
      this.out();
    },
    closed() {
      this.cancel();
      this.out();
    },
    out() {
      this.$refs["modal"].className = "modal closed";
      setTimeout(()=> {
        this.visible = false;
        this.$refs["modal"].className = "modal";
        this.close(false);
      }, 300);
    }
  }
};
</script>
 