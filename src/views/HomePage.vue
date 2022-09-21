<template>
  <div class="home-container">
    <van-nav-bar title="标题" fixed />
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh" :disabled="finished">
      <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <ArtcicleInfo v-for="item in artcicleList" :key="item.art_id" :title="item.title" :comm-count="item.comm_count"></ArtcicleInfo>
      </van-list>
    </van-pull-refresh>
  </div>
</template>
<script>
import { getArticlesApi } from '../api/index'
import ArtcicleInfo from '../components/ArtcicleInfo.vue'
export default {
  data() {
    return {
      page: 1,
      limit: 10,
      artcicleList: [],
      loading: true,//没有进行加载
      finished: false,
      //是否正在下拉刷新
      refreshing: false,
    }
  },
  created() {
    console.log('111')
    this.initArticles()
  },
  components: {
    ArtcicleInfo,
  },
  methods: {
    async initArticles(isRefresh) {
      const { data: res } = await getArticlesApi(this.page, this.limit)
      if (isRefresh) {
        //新数据在前
        this.artcicleList = [...res, ...this.artcicleList]
        this.refreshing = false
      } else {
        //旧数据在前新数据在后
        this.artcicleList = [...this.artcicleList, ...res]
        this.loading = false
      }

      if (res.length === 0) {
        this.finished = true
      }
      console.log(res)
    },
    onLoad() {
      console.log(this.page)
      this.page++
      this.initArticles()
      console.log('111')
    },
    onRefresh() {
      console.log('触发下拉刷新')
      //页码值加一
      //重新调用接口
      this.page++
      this.initArticles(true)
    },
  }, //https://www.escook.cn /articles _page _limit
}
</script>
<style lang="less" scoped>
.home-container {
  padding: 46px 0 50px 0;
  .van-nav-bar {
    background-color: rgb(139, 255, 207);
  }
  // /deep/ .van-nav-bar__title {
  //   color: white;
  // }
}
</style>
