<template>
    <div id="embedArticle">
        <van-nav-bar
                title=""
                left-text="嵌入到微信公众号"
                left-arrow
                @click-left="onClickLeft"
                id="head"
        />
        <div id="body">
            <div id="top">
                <van-row type="flex" class="background">
                    <van-col><van-icon name="column"/></van-col>
                    <van-col><p>小程序卡片</p></van-col>
                </van-row>
                <div id="card">
                    <div id="productCard">
                        <van-row type="flex">
                            <van-col span="16" class="imageBox">
                                <img :src="img" id="productImg"/> <!-- -->
                            </van-col>
                            <van-col span="8" style="background-color: #ffd4db;border-top-right-radius: 10px;">
                                <div class="imageBox"><img :src="imgFunnel" id="iconImg"/></div>
                                <p>活动开奖时间</p>
                                <h4>{{lotteryTime}}</h4>
                                <van-button type="danger" size="normal">立即抽奖</van-button>
                            </van-col>
                        </van-row>
                        <p class="p">{{message}}</p>
                    </div>
                    <div id="a"><a :href="imgSrc" @click="downloadImga()" download="p.jpg">保存图片( 1080 x 864 )</a></div>
                </div>
            </div>
            <div id="buttom">
                <van-row type="flex" class="background">
                    <van-col><van-icon name="ellipsis"/></van-col>
                    <van-col><p>关联路径</p></van-col>
                </van-row>
                <div id="linkRoute">
                    <p class="pLink" id="pl">{{link}}</p>
                    <van-button alt="Copy to clipboard" type="danger" size="large" class="btn" data-clipboard-target="#pl" @click="copyLink">复制链接</van-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Row, Col, Button, Toast, NavBar } from 'vant'
import ClipboardJS from '../../../node_modules/clipboard/dist/clipboard.min'
import html2canvas from '../../../node_modules/html2canvas/dist/html2canvas.min'

export default {
  name: 'embedArticle',
  data () {
    return {
      lotteryTime: '2019-5-13 17:00:00',
      message: '自然共和国 清爽防晒乳 SPF27 PA++ 50G x5',
      link: 'page/detai/datail?pld=423&hp=hp',
      img: require('../../assets/image/weichat.png'),
      imgFunnel: require('../../assets/image/weichat.png'),
      imgSrc: ''
    }
  },
  components: {
    [Col.name]: Col,
    [Row.name]: Row,
    [Button.name]: Button,
    [Toast.name]: Toast,
    [NavBar.name]: NavBar
  },
  methods: {
    // Navbar左边的返回按钮
    onClickLeft () {
      this.$router.go(-1)
    },
    downloadImga () { // <---保存图片到相册
      try {
        html2canvas(document.querySelector('#productCard')).then(canvas => {
          this.imgSrc = canvas.toDataURL('jpg') // <---保存为 jpg 格式
          let alink = document.createElement('a')
          let blob = new Blob([this.imgSrc])
          let evt = document.createEvent('HTMLEvents')
          evt.initEvent('click', false, false)
          alink.href = URL.createObjectURL(blob)
          console.log(alink)
          alink.dispatchEvent(evt)
          Toast('已保存图片在相册')
        })
      } catch (e) {
        console.log(e)
        console.log(1)
      }
    },
    copyLink () { // <-- 点击即复制
      var clipboard = new ClipboardJS('.btn')
      clipboard.on('success', function (e) {
        Toast('链接复制成功')
      })
      clipboard.on('error', function (e) {
        // console.log(e)
        Toast(e)
      })
    }
  }
}
</script>

<style lang="less" scoped>
    #embedArticle{
        background-size: contain;
        text-align: center;
        background-color: #eeeeee;
        position: absolute;
        height: 100%;
        width: 100%;
        #head{
            position: fixed;
            width: 100%;
        }
        .van-button{ border-radius: 10px; }
        .van-button--large{
            margin-top: 10px;
            border-radius: 30px;
        }
        .background{ background-color: #f8f8f8; }
        .van-icon{
            font-size: 20px;
            margin: 15px;
            margin-right: 5px;
            color:purple;
        }
        .van-icon-arrow-left{color: black}
        .van-nav-bar__text {
            color: black;
            font-size: 15px;
        }
        #body{
            padding-top: 40px;
            /*小程序卡片*/
            #top{
                margin: 15px;
                margin-top: 20px;
                position: relative;
                background-color: #f8f8f8;
                #card{
                    background-color: white;
                    padding-top: 5px;
                    padding-bottom: 10px;
                    #productCard{
                        padding-bottom: 10px;
                        border-radius: 10px;
                        margin: 10px;
                        p{ margin-bottom: 0px; }
                        h4{ margin-top: 10px; }
                        .imageBox{
                            display: flex;
                            justify-content: center;
                            #productImg{
                                width: 100%;
                                height: 200px;
                                border-top-left-radius: 10px;
                            }
                            #iconImg{
                                width: 30px;
                                height: 30px;
                                padding-top: 15px;
                            }
                        }
                        .p{
                            padding-bottom: 15px;
                            padding-top: 10px;
                            padding-left: 10px;
                            margin: 0px;
                            border-bottom-right-radius: 10px;
                            border-bottom-left-radius: 10px;
                            background-color: #f44;
                            text-align: left;
                            color: white;
                            font-weight: lighter;
                            font-size: 13px;

                        }
                    }
                    #a{
                        max-width: 100%;
                        background-color: #f44;
                        padding-top: 15px;
                        padding-bottom: 15px;
                        border-radius: 30px;
                        margin-left: 10px;
                        margin-right: 10px;
                    }
                    a{color: white}
                }
            }
            /*关联路径*/
            #buttom{
                background-color: #eeeeee;
                padding: 15px;
                position: relative;
                #linkRoute{
                    padding: 10px;
                    background-color: white;
                    .pLink{
                        background-color: #f8f8f8;
                        padding-top: 15px;
                        padding-bottom: 15px;
                        border-radius: 5px;
                        margin-bottom: 5px;
                        margin-top: 5px;
                    }
                }
            }
        }
    }
</style>
