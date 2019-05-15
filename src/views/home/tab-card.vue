<template>
    <div id="card-container">
        <div id="head">
        <van-row type="flex">
            <van-col><img :src="logo" id="logo"/></van-col>
            <van-col>
                <p>{{merchant}}</p>
                <span>{{starTime}}</span>
            </van-col>
        </van-row>
        <p>{{introduction}}</p>
        </div>
        <img :src="image" id="image" @click="onchick"/>
        <van-row type="flex" justify="space-between" id="buttom">
            <van-col >
                <h4>{{goods}} x {{goodsNumber}}</h4>
                <span>{{lotteryTime}}</span>
            </van-col>
            <van-col ><van-button size="small" :to="toRouter">参与抽奖</van-button></van-col>
        </van-row>
    </div>
</template>

<script>
import { Row, Col, Button, Icon } from 'vant'
let myDate = new Date()
let lotteryDate = new Date(myDate.getFullYear(), myDate.getMonth(), myDate.getDate() + 5)
export default {
  name: 'tab-card',
  components: {
    [Col.name]: Col,
    [Row.name]: Row,
    [Button.name]: Button,
    [Icon.name]: Icon
  },
  data () {
    return {
      starTime: myDate.toLocaleString() // 获取当前时间
    }
  },
  props: {
    logo: { // 商家logo
      type: String,
      default: '/img/logo.82b9c7a5.png'
    },
    merchant: {
      type: String,
      default: '赞助商'
    },
    goods: {
      type: String,
      default: '抽奖商品'
    },
    goodsNumber: {
      type: String,
      default: '1'
    },
    introduction: {
      type: String,
      default: '这里抽奖信息的简写'
    },
    lotteryTime: {
      type: String,
      default: lotteryDate.toLocaleDateString() + ' 07 : 00 自动开奖' // 默认设置为五天后开奖
    },
    toRouter: {
      type: String,
      default: './activityDetail'
    },
    image: {
      type: String,
      default: '/img/logo.82b9c7a5.png'
    }
  },
  methods: {
    onchick () {
      this.$router.push(this.toRouter)
    }
  }
}
</script>

<style scoped lang="less">
    #card-container{
        background-color: white;
        padding-bottom: 10px;
        margin-bottom: 10px;
        margin-left: 15px;
        margin-right: 15px;
        /*margin-bottom: 15px;*/
        /*margin: 15px;*/
        border-radius: 5px;
        #head{
            padding-left: 10px;
            padding-right: 10px;
            #logo{
                width: 35px;
                height: 35px;
                margin-top: 15px;
                margin-right: 10px;
            }
        }
        #image{
            width: 100%;
            height: 150px;
        }
        #buttom{
            padding-left: 10px;
            h4{
                margin-top: 8px;
                margin-bottom: 5px;
            }
            .van-button--small{
                background-color: #ffd4db;
                padding-left: 15px;
                padding-right: 15px;
                margin-top: 10px;
                margin-right: 10px;
                span{
                    color: red;
                    font-family: "微软雅黑 Light";
                    font-size: 13px
                }
            }
        }
        p{
            margin-bottom: 0px;
            margin-top: 15px;
            font-size: 13px;
            font-family: 微软雅黑;
        }
        span{
            font-size: small;
            color: darkgray;
        }
    }
</style>
