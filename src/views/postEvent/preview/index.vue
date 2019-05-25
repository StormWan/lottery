<template>
    <div id="preview">
        <van-nav-bar
                title=""
                left-text="预览"
                left-arrow
                @click-left="onClickLeft"
        />
        <van-swipe :autoplay="3000" :height="300">
            <van-swipe-item v-for="(image, index) in images" :key="index">
                <img v-lazy="image" />
            </van-swipe-item>
        </van-swipe>
        <div id="imageButtom">
            <van-row type="flex" justify="space-between">
                <van-col>
                    <van-icon name="gift"/>
                    <span class="span"> 抽奖 | 共 {{goodsNumber}} 份</span>
                </van-col>
                <van-col><van-button type="default" size="small" to="./merchant" >{{sponsor1}}></van-button></van-col>
            </van-row>
        </div>
        <!--   图片下方信息栏     -->
        <div id="goodsMessage">
            <!--     商品开奖时间 + 分享       -->
            <van-row type="flex" justify="space-between" >
                <van-col>
                    <p>{{goodsTitle}}</p>
                    <div v-show="chooseTime">
                        <span>开奖时间： {{lotteryTime}}</span>
                    </div>
                    <div v-show="choosePerson">
                        <span>开奖人数：{{personNumber}}</span>
                    </div>
                </van-col>
                <van-col>
                    <van-icon name="more-o"/>
                    <p class="p">分享</p>
                </van-col>
            </van-row>
            <!--     详情信息       -->
            <div id="personMessage">
                <van-row type="flex" justify="center">
                    <van-col span="4"><img src="../../../assets/image/left.png" class="imageArrow"></van-col>
                    <van-col span="7"><p>详情介绍</p></van-col>
                    <van-col span="4"><img src="../../../assets/image/right.png" class="imageArrow"></van-col>
                </van-row>
                <van-field v-model="fieldValue"></van-field>
                <div v-for="item in img"  :key="item.id" class="sponsorImg">
                    <img :src="item">
                </div>
                <div v-show="cardshow" class="copyField">
                    <div class="contain2">
                        <p>{{titleValue}}</p>
                        <p class="p" id="pll">{{copyValue}}</p>
                        <van-button alt="Copy to clipboard" type="primary" size="large" class="btn" data-clipboard-target="#pll" @click="copyLink">一键复制</van-button>
                    </div>
                </div>
                <div v-show="cardshow1" class="copyField">
                    <div class="contain2">
                        <p>{{titleValue1}}</p>
                        <p class="p" id="pl">{{copyValue1}}</p>
                        <van-button alt="Copy to clipboard" type="primary" size="large" class="btn" data-clipboard-target="#pl" @click="copyLink">一键复制</van-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Row, Col, NavBar, Button, Actionsheet, Field, Toast, Swipe, SwipeItem } from 'vant'
import ClipboardJS from '../../../../node_modules/clipboard/dist/clipboard.min'

export default {
  name: 'preview',
  data () {
    return {
      goodsNumber: '',
      sponsor1: '',
      goodsTitle: '',
      lotteryTime: '',
      personNumber: '',
      imgGood: '',
      lotterAway: '',
      openAway: '',
      chooseTime: true,
      choosePerson: false,
      images: [],
      img: [],
      cardshow: true,
      cardshow1: true,
      fieldValue: '',
      copyValue: '',
      copyValue1: '',
      titleValue: '',
      titleValue1: ''
    }
  },
  components: {
    [Col.name]: Col,
    [Row.name]: Row,
    [NavBar.name]: NavBar,
    [Button.name]: Button,
    [Actionsheet.name]: Actionsheet,
    [Field.name]: Field,
    [Toast.name]: Toast,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  },
  mounted () {
    // 判断是否存储了数据
    if (localStorage.getItem('myPreview')) {
      this.goodsNumber = JSON.parse(localStorage.getItem('myPreview')).goodsNumber
      this.sponsor1 = JSON.parse(localStorage.getItem('myPreview')).sponsor1
      this.goodsTitle = JSON.parse(localStorage.getItem('myPreview')).goodsTitle
      this.lotterAway = JSON.parse(localStorage.getItem('myPreview')).lotterAway
      this.lotteryTime = JSON.parse(localStorage.getItem('myPreview')).lotteryTime
      this.personNumber = JSON.parse(localStorage.getItem('myPreview')).personNumber
      this.openAway = JSON.parse(localStorage.getItem('myPreview')).openAway

      if (JSON.parse(localStorage.getItem('myPreview')).openAway === '定时开奖') {
        this.chooseTime = true
        this.choosePerson = false
      } else {
        this.chooseTime = false
        this.choosePerson = true
      }
    }
    // 判断是否存储了商品的图片，有就获取
    if (localStorage.getItem('goodsPicture')) {
      let job = JSON.parse(localStorage.getItem('goodsPicture'))
      for (let i = 0; i < job.length; i++) {
        this.images[i] = job[i]
      }
    }
    // 判断是否存储了赞助商信息，有即获取
    if (JSON.parse(localStorage.getItem('sponsorMessage'))) {
      this.fieldValue = JSON.parse(localStorage.getItem('sponsorMessage')).fieldValue
      this.copyValue = JSON.parse(localStorage.getItem('sponsorMessage')).copyValue
      this.titleValue = JSON.parse(localStorage.getItem('sponsorMessage')).titleValue
      this.copyValue1 = JSON.parse(localStorage.getItem('sponsorMessage')).copyValue1
      this.titleValue1 = JSON.parse(localStorage.getItem('sponsorMessage')).titleValue1

      if (this.titleValue === '' & this.copyValue === '') {
        this.cardshow = false
      }
      if (this.titleValue1 === '' & this.copyValue1 === '') {
        this.cardshow1 = false
      }
    }
    // 判断是否有存储赞助商的图片，有获取存储详细信息的图片信息
    if (localStorage.getItem('sponsorMessagePicture')) {
      let job = JSON.parse(localStorage.getItem('sponsorMessagePicture'))
      for (let i = 0; i < job.length; i++) {
        this.img[i] = job[i]
      }
    }
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    },
    copyLink () { // <-- 点击即复制
      var clipboard = new ClipboardJS('.btn')
      clipboard.on('success', function (e) {
        Toast('链接复制成功')
      })
      clipboard.on('error', function (e) {
        Toast(e)
      })
    }
  }
}
</script>

<style lang="less" scoped>
    #preview{
        position: absolute;
        width: 100%;
        padding-bottom: 53px;
        /*轮播图*/
        .van-swipe{
            .van-swipe-item{
                img{
                    height: 100%;
                    width: 100%;
                }
            }
        }
        /*商品图片展示*/
        #goodsPicture{
            width: 100%;
            height: auto;
        }
        /*商品下方灰色信息展示*/
        #imageButtom{
            position: relative;
            background-color:#a9a9a9;
            padding: 5px;
            vertical-align: middle;
            .van-icon-gift{
                font-size: 19px;
                margin-top: 5px;
                vertical-align: middle;
            }
            .span{
                vertical-align: middle;
            }
        }
        /*商品详细信息*/
        #goodsMessage{
            padding: 10px;
            p{ margin: 0px; }
            span{
                color: darkgray;
                font-family: "微软雅黑 Light";
                font-size: 13px;
            }
            /*分享弹窗*/
            .share{
                padding-right: 10px;
                padding-left: 10px;
                padding-top: 10px;
                text-align: center;
                .image{
                    width: 150px;
                    height: 100px;
                }
                h2{ margin-bottom: 5px; }
                p{ padding: 10px; }
                .van-button--large{
                    border-radius: 5px;
                    margin-bottom: 10px;
                }
            }
            /*祝您好运*/
            h3{
                color: red;
                margin-top: 0px;
                font-weight: normal;
            }
            /*分享 icon*/
            .van-icon-more-o{
                color: gray;
                font-size: 22px;
                padding-left: 2px;
            }
            .Boost{
                p{
                    font-size: small;
                    color: grey;
                }
                h3{
                    color: black;
                    text-align: center;
                    padding-top: 5px;
                }
            }
            .p{ color: darkgray; font-size: small; }
            /*参与活动按钮*/
            .van-button--large{
                span{
                    color: white;
                    font-family: "微软雅黑 Light";
                    font-size: 13px
                }
            }
            /*礼物盒子大小*/
            #presentBox{
                width: 100px;
                height: 100px;
                padding-left: 30px;
            }
            /*微信图 + 分享 log*/
            .image{
                width: 50px;
                height: 50px
            }
            #actionsheet{
                h4{
                    display: flex;
                    justify-content: center;
                    color: gray;
                    font-weight: normal;
                    font-size: small;
                    margin: 8px;
                }
                /*微信好友助力*/
                #weichatBoost{
                    background-color: #ffd4db;
                    border-radius: 5px;
                    padding: 15px;
                    margin-left: 10px;
                    margin-right: 10px;
                    margin-bottom: 10px;
                    text-align: center;
                }
                /*生成分享图助力*/
                #pictureBoost{
                    background-color: antiquewhite;
                    border-radius: 5px;
                    margin-right: 10px;
                    margin-bottom: 10px;
                    padding: 15px;
                    text-align: center;
                }
                /*2 倍概率按钮*/
                .van-button--small{
                    margin-left: 20px;
                    margin-top: 5px;
                    span{
                        color: white;
                        font-family: "微软雅黑 Light";
                        font-size: 13px;
                    }
                }
            }
            /*详情信息*/
            #personMessage{
                text-align: center;
                #imagePosition{
                    width: 100%;
                    .img_box{
                        width: 100%;
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: center;
                        div{
                            width: 30px;
                            height: 30px;
                            margin: 2px 2px;
                            .imagePerson{
                                width: 100%;
                                border-radius: 10px;
                            }
                        }
                    }
                }
                p{
                    padding-top: 10px;
                    padding-left: 20px;
                    color: darkgray;
                }
                /*详情介绍的分割线*/
                .imageArrow{
                    padding-top: 5px;
                    width: 80px;
                    height: 30px;
                }
                /*一键复制的样式*/
                .copyField{
                    background-color: #f8f8f8;
                    height: 100%;
                    width: 100%;
                    .contain2{
                        height: 100%;
                        margin: 10px;
                        padding-top: 10px;
                        p{
                            background-color: white;
                            margin-bottom: 10px;
                            padding: 10px;
                            color: blue;
                        }
                        .p{
                            background-color: white;
                            margin-bottom: 10px;
                            padding: 10px;
                            color: black;
                        }
                    }
                }
                /*商家图片的样式*/
                .sponsorImg {
                    img {
                        width: 100%;
                    }
                }
            }
        }
    }
</style>
