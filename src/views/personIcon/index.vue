<template>
    <div class="personIcon">
        <van-nav-bar
                title="参与用户"
                left-text=""
                left-arrow
                @click-left="onClickLeft"
        />
        <img src="../../assets/image/logo.png" id="imageMerchant" @click="toMerchant"/>
        <span>{{title}}</span>
        <van-row type="flex" justify="center" id="imagePosition">
            <div class="img_box">
                <div v-for="item in items" :key="item.id ">
                    <img :src="img" class="imagePerson">
                </div>
            </div>
        </van-row>
        <span>{{t_buttom}}</span>
    </div>
</template>

<script>
import { Row, Col, NavBar } from 'vant'

export default {
  name: 'personIcon',
  data () {
    return {
      title: '已有 8902 人参加此活动',
      t_buttom: '加载更多',
      img: require('../../assets/image/person.png'),
      items: 130
    }
  },
  components: {
    [Col.name]: Col,
    [Row.name]: Row,
    [NavBar.name]: NavBar
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    },
    toMerchant () { // 跳转到商家的小程序/公众号
      this.$router.push('./merchant')
    }
  }
}
</script>

<style lang="less" scoped>
    .personIcon {
        padding: 5px;
        span{
            color: grey;
            font-size: small;
            padding-top: 10px;
            padding-bottom: 10px;
            display: flex;
            justify-content: center;
        }
        #imageMerchant{
            width: 100%;
            height: 100px;
        }
        #imagePosition {
            width: 100%;

            .img_box {
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                justify-content: center;

                div {
                    width: 30px;
                    height: 30px;
                    margin: 2px 2px;

                    .imagePerson {
                        width: 100%;
                        border-radius: 10px;
                    }
                }
            }
        }
    }
</style>
