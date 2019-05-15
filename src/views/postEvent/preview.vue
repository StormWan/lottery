<template>
    <div id="preview">
        <img :src="imgGood" id="goodsPicture"/>
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
                    <span>开奖时间： {{lotteryTime}}</span>
                </van-col>
                <van-col>
                    <van-icon name="more-o"/>
                    <p class="p">分享</p>
                </van-col>
            </van-row>
            <!--     头像信息       -->
            <div id="personMessage">
                <van-row type="flex" justify="center">
                    <van-col span="4"><img src="../../assets/image/left.png" class="imageArrow"></van-col>
                    <van-col span="7"><p>详情介绍</p></van-col>
                    <van-col span="4"><img src="../../assets/image/right.png" class="imageArrow"></van-col>
                </van-row>
            </div>
        </div>
    </div>
</template>

<script>
import { Row, Col, NavBar, Button, Actionsheet } from 'vant'

export default {
  name: 'post-Preview',
  data () {
    return {
    }
  },
  components: {
    [Col.name]: Col,
    [Row.name]: Row,
    [NavBar.name]: NavBar,
    [Button.name]: Button,
    [Actionsheet.name]: Actionsheet
  },
  props: {
    goodsNumber: {
      type: String,
      default: '1'
    },
    sponsor1: {
      type: String,
      default: '由xxx赞助的活动'
    },
    goodsTitle: {
      type: String,
      default: '奖品名字'
    },
    lotteryTime: {
      type: String,
      default: '开奖时间'
    },
    imgGood: {
      type: String,
      default: require('../../assets/image/logo.png')
    }
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
    #preview{
        position: absolute;
        width: 100%;
        padding-bottom: 53px;
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
            p{
                margin: 0px;
            }
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
            .p{
                color: darkgray;
                font-size: small;
            }
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
            }
        }
    }
</style>
