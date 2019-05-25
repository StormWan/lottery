<template>
    <div id="activityDetail">
        <!--   导航栏     -->
        <van-nav-bar
                title="活动详情"
                left-text=""
                left-arrow
                @click-left="onClickLeft"
        />
        <van-swipe :autoplay="3000" :height="350">
            <van-swipe-item v-for="(image, index) in imgGood" :key="index" id="goodsPicture">
                <img v-lazy="image" />
            </van-swipe-item>
        </van-swipe>
        <div id="imageButtom">
            <van-row type="flex" justify="space-between">
                <van-col>
                    <van-icon name="gift"/>
                    <span class="span"> 抽奖 | 共 {{goodsNumber}} 份</span>
                </van-col>
                <van-col><van-button type="default" size="small" to="./merchant" >阿拉斯加京东自营 赞助 ></van-button></van-col>
            </van-row>
        </div>
        <!--   图片下方信息栏     -->
        <div id="goodsMessage">
            <!--     商品开奖时间 + 分享       -->
            <van-row type="flex" justify="space-between" >
                <van-col>
                    <p>{{goodsTitle}}</p>
                    <span>开奖时间： {{lotteryTime}}</span>
                </van-col>
                <van-col>
                    <van-icon name="more-o" @click="showShareT"/>
                        <van-dialog v-model="showShare" show-cancel-button class="share">
                            <img :src="imgShare" class="image"/>
                            <h2>独乐乐不如众乐乐</h2>
                            <p>邀请大家一起玩才够意思嘛</p>
                            <van-button type="danger" size="large" @click="toWeichat">发送至好友/微信群</van-button>
                            <van-button type="primary" size="large" @click="storePicture">生成分享图</van-button>
                            <div style="padding-bottom: 10px;"><span @click="toEmbedArticle">嵌入到微信公众号 > </span></div>
                        </van-dialog>
                    <p class="p">分享</p>
                </van-col>
            </van-row>
            <!--      参加活动后显示      -->
            <van-row type="flex" justify="center" v-show="afterJoin">
                <van-col>
                    <img :src="imgPresent" id="presentBox"/>
                    <h3>等待开奖，祝您好运</h3>
                </van-col>
            </van-row>
            <van-row type="flex" justify="space-between" class="Boost" v-show="afterJoin">
                <van-col><img :src="imgIcon" class="image"/></van-col>
                <van-col>
                    <p>获得助力</p>
                    <h3>{{boostNumber}}</h3>
                </van-col>
                <van-col>
                    <p>中奖概率提升</p>
                    <h3>{{boostMultiple}}倍</h3>
                </van-col>
                <van-col> > </van-col>
            </van-row>
            <van-button size="large" type="primary" @click="lottery" v-show="lotteryButton">点击抽奖</van-button>
            <!--      限时好友助力      -->
            <van-actionsheet v-model="showActionsheet" title="限时好友助力" @select="onSelect" id="actionsheet">
                <h4>提升中奖概率</h4>
                <van-row type="flex" justify="center" >
                    <van-col span="12" id="weichatBoost">
                        <div  @click="toWeichat">
                            <img :src="imgWeiChat" class="image"/>
                            <p>发送至好友/微信群</p>
                        </div>
                    </van-col>
                    <van-col span="12" id="pictureBoost" >
                        <div @click="storePicture">
                            <img :src="imgPicture" class="image"/>
                            <p>生成分享图</p>
                        </div>
                    </van-col>
                </van-row>
                <h3><strong>| </strong>赞助商加倍</h3>
                <van-row type="flex">
                    <van-col><img :src="imgWeiChat" class="image"/></van-col>
                    <van-col>
                        <p>{{sponsor}}</p>
                        <span>{{message}}</span>
                    </van-col>
                    <van-col><van-button type="danger" size="small" to="./merchant" @click="toMerchant">2 倍概率</van-button></van-col>
                </van-row>
            </van-actionsheet>
            <!--     头像信息       -->
            <div id="personMessage">
                <span @click="toPersonIcon">{{user}}</span>
                <van-row type="flex" justify="center" id="imagePosition">
                    <div class="img_box">
                        <div v-for="item in items" :key="item ">
                            <img :src="imgIcon" class="imagePerson">
                        </div>
                    </div>
                </van-row>
                <van-row type="flex" justify="center">
                    <van-col span="4"><img src="../../assets/image/left.png" class="imageArrow"></van-col>
                    <van-col span="7"><p>详情介绍</p></van-col>
                    <van-col span="4"><img src="../../assets/image/right.png" class="imageArrow"></van-col>
                </van-row>
                <van-field v-model="fieldValue"></van-field>
                <!--       商品详情图         -->
                <div v-for="item in imgSponsor"  :key="item.id" class="sponsorImg">
                    <img :src="item">
                </div>
                <!--       一键复制模板1         -->
                <div v-show="cardshow" class="copyField">
                    <div class="contain2">
                        <p>{{titleValue}}</p>
                        <p class="p" id="pll">{{copyValue}}</p>
                        <van-button alt="Copy to clipboard" type="primary" size="large" class="btn" data-clipboard-target="#pll" @click="copyLink">一键复制</van-button>
                    </div>
                </div>
                <!--       一键复制模板2         -->
                <div v-show="cardshow1" class="copyField">
                    <div class="contain2">
                        <p>{{titleValue1}}</p>
                        <p class="p" id="pl">{{copyValue1}}</p>
                        <van-button alt="Copy to clipboard" type="primary" size="large" class="btn" data-clipboard-target="#pl" @click="copyLink">一键复制</van-button>
                    </div>
                </div>
            </div>
        </div>
        <van-goods-action>
            <van-goods-action-mini-btn icon="home-o" text="首页" to="/"/>
            <van-goods-action-big-btn text="我也要发起抽奖" to="../postEvent"/>
            <van-goods-action-big-btn primary text="参与更加活动" to="/" />
        </van-goods-action>
    </div>
</template>

<script>
import { Row, Col, NavBar, Button, Toast, Actionsheet, GoodsAction, GoodsActionBigBtn, GoodsActionMiniBtn, Swipe, SwipeItem, Field } from 'vant'
import ClipboardJS from '../../../node_modules/clipboard/dist/clipboard.min'

export default {
  name: 'activityDetail',
  data () {
    return {
      goodsNumber: '2',
      goodsTitle: 'Switch 游戏机',
      lotteryTime: '05 月 12 日 17 ：00',
      user: '参与将关注店铺，已有 8902 人参加此活动 >',
      items: 18,
      imgGood: [require('../../assets/image/presentBox.png'), require('../../assets/image/presentBox.png'), require('../../assets/image/presentBox.png')],
      imgPresent: require('../../assets/image/presentBox.png'),
      imgIcon: require('../../assets/image/person.png'),
      imgWeiChat: require('../../assets/image/weichat.png'),
      imgPicture: require('../../assets/image/picture.png'),
      imgShare: require('../../assets/image/smile.jpg'),
      imgSponsor: [require('../../assets/image/weichat.png'), require('../../assets/image/person.png'), require('../../assets/image/presentBox.png')],
      lotteryButton: true,
      afterJoin: false,
      showActionsheet: false,
      sponsor: '自然共和国旗舰店 赞助',
      message: '查看赞助商链接，增加 2 倍中奖概率',
      boostMultiple: 0, // <--- 一开始都设置为默认值 0
      boostNumber: 0,
      activityId: 0,
      showShare: false,
      fieldValue: '详情介绍下的介绍，叭啦啦啦啦啦啦',
      cardshow: true,
      cardshow1: true,
      copyValue: '复制内容一',
      copyValue1: '复制内容二',
      titleValue: '复制标题一',
      titleValue1: '复制标题二'
    }
  },
  components: {
    [Col.name]: Col,
    [Row.name]: Row,
    [NavBar.name]: NavBar,
    [Button.name]: Button,
    [Actionsheet.name]: Actionsheet,
    [GoodsActionBigBtn.name]: GoodsActionBigBtn,
    [GoodsActionMiniBtn.name]: GoodsActionMiniBtn,
    [GoodsAction.name]: GoodsAction,
    [SwipeItem.name]: SwipeItem,
    [Swipe.name]: Swipe,
    [Field.name]: Field,
    [Toast.name]: Toast
  },
  mounted () {
    // 如果本地存在 boost 键值对，证明已经参加了活动，返回就直接显示助力信息
    if (localStorage.getItem('boost')) {
      this.afterShow()
      this.boostNumber = JSON.parse(localStorage.getItem('boost')).boostNumber
      this.boostMultiple = JSON.parse(localStorage.getItem('boost')).boostMultiple
    }
    // 从服务器获取赞助商的图片信息，现是暂时是获取本地的图片信息
    // if (localStorage.getItem('sponsorMessagePicture')) {
    //   let job = JSON.parse(localStorage.getItem('sponsorMessagePicture'))
    //   for (let i = 0; i < job.length; i++) {
    //     this.img[i] = job[i]
    //   }
    // }
  },
  methods: {
    // Navbar左边的返回按钮
    onClickLeft () {
      this.$router.go(-1)
    },
    // 前往人员头像的页面
    toPersonIcon () {
      this.$router.push('./personIcon')
    },
    // 显示分享的弹窗
    showShareT () {
      this.showShare = true
    },
    // 点击选项时候默认不会关闭菜单，可以手动关闭
    onSelect () {
      this.showActionsheet = false
    },
    // 前往公众号复制页面
    toEmbedArticle () {
      this.$router.push('./embedArticle')
    },
    // 一键复制
    copyLink () { // <-- 点击即复制
      var clipboard = new ClipboardJS('.btn')
      clipboard.on('success', function (e) {
        Toast('链接复制成功')
      })
      clipboard.on('error', function (e) {
        Toast(e)
      })
    },
    // 参加活动按钮,隐藏参与活动按钮，显示抽奖信息，显示上拉菜单
    lottery () {
      this.lotteryButton = false
      this.afterJoin = true
      this.showActionsheet = true
    },
    // 隐藏参与活动按钮，显示抽奖信息
    afterShow () {
      this.lotteryButton = false
      this.afterJoin = true
    },
    // 发送给好友，没有任何助力
    toWeichat () {
      let boost = {}
      boost.boostNumber = this.boostNumber
      boost.boostMultiple = this.boostMultiple
      localStorage.setItem('boost', JSON.stringify(boost))
      // this.afterShow()
      this.$router.push('./merchant')
    },
    // 生成分享图片，没有任何助力
    storePicture () {
      let boost = {}
      boost.boostNumber = this.boostNumber
      boost.boostMultiple = this.boostMultiple
      localStorage.setItem('boost', JSON.stringify(boost))
      this.$router.push('./merchant')
      // this.afterShow()
    },
    // 点击商家链接,将助力信息存储在本地
    toMerchant () {
      let boost = {}
      this.boostNumber = this.boostNumber + 1
      this.boostMultiple = this.boostMultiple + 2
      boost.boostNumber = this.boostNumber
      boost.boostMultiple = this.boostMultiple
      localStorage.setItem('boost', JSON.stringify(boost))
      this.$router.push('./merchant')
    }
  }
}
</script>

<style lang="less" scoped>
    #activityDetail{
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
            .span{ vertical-align: middle; }
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
            /*参加活动后显示的助力信息*/
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
            /*分享*/
            .p{ color: darkgray;font-size: small; }
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
            /*限时好友助力*/
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
            /*头像信息*/
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
