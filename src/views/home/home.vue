<template>
    <div id="home">
        <div id="head">
            <van-row>
                <van-col><van-icon name="hot-o"/></van-col>
                <van-col><p>今日活动</p></van-col>
            </van-row>
        </div>
        <div id="body">
            <tab-card merchant="社区生活" goods="Switch 游戏机" goodsNumber="2" :introduction="introduction" toRouter="./activityDetail" :logo="img" :image="goodsImg"></tab-card>
            <tab-card merchant="贝贝宝婴" goods="BB 奶嘴" goodsNumber="2" :introduction="introduction" :logo="img"/>
            <tab-card merchant="社区生活" goods="Switch 游戏机" goodsNumber="2" :introduction="introduction"/>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { Row, Col } from 'vant'
import TabCardshow from './tab-card'

export default {
  name: 'home',
  data () {
    return {
      products: [],
      introduction: '本活动由机密小程序举办，奖品发放、质量、售后服务等均由其负责。中奖用户请留下地址、手机和姓名，机密小程序会联系您发放奖品',
      img: require('../../assets/image/person.png'),
      goodsImg: require('../../assets/image/switch.jpg')
    }
  },
  components: {
    [TabCardshow.name]: TabCardshow,
    [Col.name]: Col,
    [Row.name]: Row
  },
  async mounted () {
    this.setActiveTab(0)
    // await this.getProducts()
  },
  methods: {
    ...mapMutations({
      setActiveTab: 'tabbar/setActiveTab'
    })
    // async getProducts () {
    //   const { data } = await this.$api.product.productList()
    //   if (data.code !== 200) {
    //     Toast('请求错误，请重新刷新页面')
    //   } else {
    //     this.products = data.data
    //   }
    // }
  }
}
</script>

<style lang="less" scoped>
    #home {
        padding-bottom: 53px;
        background-color: #f8f8f8;
        #head {
            /*border-bottom: 1px solid #c8c8c8;*/
            margin-bottom: 10px;
            background-color: white;
            position: fixed;
            width: 100%;
            .van-icon {
                font-size: x-large;
                color: red;
                padding-top: 15px;
                padding-left: 10px;
                padding-right: 5px;
            }
        }
        #body{
            padding-top: 60px;
        }
    }
</style>
