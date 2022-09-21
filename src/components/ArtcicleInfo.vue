<template>
  <div class="p">
    <div class="d">
      {{ title }}
    </div>
    <span>{{commCount}}</span>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    commCount: {
      type: [String, Number],
      default: '',
    },
    cover:{
        type:Object,
        default:function(){
            return {type:0}
        }
    }
  },
  methods: {},
  created() {},
}
</script>
<style lang="less" scoped>
.p{
    height:150px;
    background-color: rgb(255, 124, 124);
    margin-bottom: 20px;
}
</style>
