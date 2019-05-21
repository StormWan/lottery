<template>
    <div id="postEvent">
        <van-nav-bar
                title=""
                left-text="发起活动"
                left-arrow
                @click-left="onClickLeft"
        />
        <div id="body">
            <van-row type="flex" class="title">
                <van-col><van-icon name="gift"/></van-col>
                <van-col><p>奖品设置</p></van-col>
            </van-row>
            <div id="basicSettings">
                <van-row type="flex">
                    <van-col ><img :src="imgGood" class="productImg"/></van-col>
                    <van-col >
                        <van-field v-model="goodsTitle" type="textarea" placeholder="请输入奖品名称" size="large" id="goodsTitle" ref="sad" autosize/>
                        <van-stepper v-model="goodsNumber" integer :min="1" :max="100" :step="1" @overlimit="overlimit"/>
                    </van-col>
                </van-row>
                <div @click="show = true">
                    <van-row type="flex" justify="space-between" >
                        <van-col><p>开奖方式</p></van-col>
                        <van-col>
                            <div class="rightSetting">
                                <span id ="p">{{openAway}}</span>
                                <van-icon name="arrow"/>
                            </div>
                        </van-col>
                    </van-row>
                </div>
                <van-popup v-model="show" position="bottom" :overlay="false">
                    <van-picker show-toolbar :columns="columns" @confirm="show = false" @cancel="show = false" @change="onChange"/>
                </van-popup>
                <div  @click="show1 = true" v-show="chooseTime">
                    <field-date-card label="开奖时间" v-model="time" type="datetime" :max-date="maxDate" :min-date="minDate"/>
                </div>
                <div v-show="choosePerson" >
                    <van-row type="flex" >
                        <van-col><p>开奖人数</p></van-col>
                        <van-col>
                            <div class="rightSetting">
                                <van-stepper  v-model="personNumber" integer :min="1" :max="500" :step="1" @overlimit="overlimit1"/>
                            </div>
                        </van-col>
                    </van-row>
                </div>
            </div>
            <!--    抽奖说明    -->
            <van-row type="flex" class="title">
                <van-col><van-icon name="label"/></van-col>
                <van-col><p>抽奖说明</p></van-col>
                <van-col><div class="rightSetting"><span>非必填</span></div></van-col>
            </van-row>
            <div id="description"><van-field v-model="lotterAway" type="textarea" placeholder="请填写此次活动的说明" autosize/></div>
            <!--    高级设置    -->
            <van-row type="flex" class="title">
                <van-col><van-icon name="setting"/></van-col>
                <van-col><p>高级设置</p></van-col>
            </van-row>
            <div id="advancedSettings">
                <div @click="toSponsor">
                    <van-row type="flex">
                        <van-col><p>赞助商信息</p></van-col>
                        <van-col><van-icon name="arrow" class="rightArrow"/></van-col>
                    </van-row>
                </div>
                <div @click="toPasswordLottery">
                    <van-row type="flex">
                        <van-col><p>口令抽奖</p></van-col>
                        <van-col><van-icon name="arrow" class="rightArrow"/></van-col>
                    </van-row>
                </div>
                <div @click="toShare">
                    <van-row type="flex">
                        <van-col><p>分享&助力</p></van-col>
                        <van-col><van-icon name="arrow" class="rightArrow"/></van-col>
                    </van-row>
                </div>
            </div>
            <van-goods-action >
                <van-goods-action-big-btn
                        text="预览"
                        @click="onClickPreview"
                />
                <van-goods-action-big-btn
                        primary
                        text="提交"
                        @click="onClickCommit"
                />
            </van-goods-action>
        </div>
    </div>
</template>

<script>
import { Row, Col, NavBar, Field, Icon, Popup, Picker, Stepper, Toast, DatetimePicker, Tabbar, TabbarItem, GoodsAction, GoodsActionBigBtn, GoodsActionMiniBtn, NumberKeyboard } from 'vant'
import postPreview from './preview'
import fieldDateCard from './fieldDate-card'

export default {
  name: 'postEvent',
  components: {
    [Col.name]: Col,
    [Row.name]: Row,
    [NavBar.name]: NavBar,
    [Field.name]: Field,
    [Icon.name]: Icon,
    [Popup.name]: Popup,
    [Picker.name]: Picker,
    [Stepper.name]: Stepper,
    [Toast.name]: Toast,
    [DatetimePicker.name]: DatetimePicker,
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
    [GoodsAction.name]: GoodsAction,
    [GoodsActionMiniBtn.name]: GoodsActionMiniBtn,
    [GoodsActionBigBtn.name]: GoodsActionBigBtn,
    [postPreview.name]: postPreview,
    [NumberKeyboard.name]: NumberKeyboard,
    [fieldDateCard.name]: fieldDateCard
  },
  data () {
    return {
      imgGood: require('../../assets/image/weichat.png'),
      goodsTitle: '',
      lotterAway: '',
      goodsNumber: '',
      show: false,
      show1: false,
      show2: false,
      showKayboard: false,
      columns: ['定时开奖', '满人开奖'],
      time: undefined,
      timePlaceholder: '请选择开奖时间',
      lotteryTime: '',
      minDate: new Date(),
      maxDate: new Date(2019, 12, 30),
      sponsor1: '贝贝无敌有限公司赞助 ',
      openAway: '定时开奖',
      chooseTime: true,
      choosePerson: false,
      personNumber: '1',
      shareSetting: ''
    }
  },
  mounted () {
    // 打开页面，判断之前是否有填写过信息，有就获取 laocalStorage 的信息
    if (localStorage.getItem('myPreview')) {
      this.goodsNumber = JSON.parse(localStorage.getItem('myPreview')).goodsNumber
      this.sponsor1 = JSON.parse(localStorage.getItem('myPreview')).sponsor1
      this.goodsTitle = JSON.parse(localStorage.getItem('myPreview')).goodsTitle
      this.lotterAway = JSON.parse(localStorage.getItem('myPreview')).lotterAway
      this.lotteryTime = JSON.parse(localStorage.getItem('myPreview')).lotteryTime
      this.imgGood = JSON.parse(localStorage.getItem('myPreview')).imgGood
      this.openAway = JSON.parse(localStorage.getItem('myPreview')).openAway
    }
    // 再次打开页面，获取之前的开奖方式
    if (JSON.parse(localStorage.getItem('myPreview')).openAway === '定时开奖') {
      this.chooseTime = true
      this.choosePerson = false
    } else {
      this.chooseTime = false
      this.choosePerson = true
    }
  },
  methods: {
    // 返回上一个页面
    onClickLeft () {
      this.$router.go(-1)
    },
    // 奖品数量限制
    overlimit () {
      Toast('奖品数量最少为 1 个，最多为 100 个')
    },
    // 参与人数数量限制
    overlimit1 () {
      Toast('参与人数最少为 1 个，最多为 500 个')
    },
    // 赞助商信息
    toSponsor () {
      this.$router.push('./sponsor')
    },
    // 口令抽奖
    toPasswordLottery () {
      this.$router.push('./passwordLottery')
    },
    // 分享助力
    toShare () {
      this.$router.push('./shareSetting')
    },
    // 选择开奖方式的方法
    onChange (picker, value, index) {
      // document.getElementById('p').innerText = value
      this.openAway = value
      console.log(this.openAway)
      if (value === '定时开奖') {
        this.chooseTime = true
        this.choosePerson = false
      } else {
        this.chooseTime = false
        this.choosePerson = true
      }
    },
    // 提交数据
    onClickCommit () {
      let myPreview = JSON.parse(localStorage.getItem('myPreview'))
      if (myPreview.goodsTitle !== '') {
        if (myPreview.openAway === '定时开奖' & myPreview.lotteryTime !== '') {
          this.$router.push('/')
          localStorage.removeItem('myPreview') // <-----清空保存发起活动的信息
        } else if (myPreview.openAway === '满人开奖' & myPreview) {

        }
      }
    },
    // 预览页面
    onClickPreview () { // <---点击预览时候先将数据存储在 localStorage,再跳转页面获取存储再 localStorage 的数据
      let myPreview = {} // <---将预览的数据存在对象俩民
      myPreview.goodsNumber = this.goodsNumber // 奖品的数量
      myPreview.sponsor1 = this.sponsor1 // 赞助商
      myPreview.goodsTitle = this.goodsTitle // 奖品的名字
      myPreview.lotterAway = this.lotterAway// <抽奖说明
      myPreview.openAway = this.openAway // 开奖方式
      myPreview.lotteryTime = this.lotteryTime
      myPreview.personNumber = this.personNumber
      myPreview.imgGood = this.imgGood // 奖品的图片
      let preview = JSON.stringify(myPreview) // <--将对象转为字符串，再保存到 localStorage
      localStorage.setItem('myPreview', preview)
      console.log(JSON.parse(localStorage.getItem('myPreview')))
      this.$router.push('./preview')
    }
  }
}
</script>

<style lang="less" scoped>

    #postEvent{
        background-color: #eeeeee;
        position: absolute;
        padding-bottom: 230px;
        /*margin-bottom: 10px;*/
        width: 100%;
        height: 100%;
        .title{
            background-color: #f8f8f8;
            .van-icon{
                position: relative;
                font-size: 20px;
                padding: 15px;
                padding-right: 10px;
                color: purple;
            }
        }
        .van-field{ background-color: #f8f8f8; }
        /*右边的注释*/
        .rightSetting{
            position: absolute;
            right: 0px;
            padding-top: 15px;
            padding-right: 20px;
            color: darkgrey;
        }
        #body{
            padding-left: 10px;
            padding-right: 10px;
            padding-top: 10px;
            height: 100%;
            #basicSettings{
                background-color: white;
                padding: 10px;
                margin-bottom: 10px;
                span{ padding-right: 5px;}
                .van-icon{
                    font-size: 19px;
                    position: relative;
                    vertical-align: middle;
                }
                .productImg{
                    width: 100px;
                    height: 100px;
                    padding-right: 5px;
                }
                .van-field{
                    height: 65px;
                    width: 100%;
                    margin-bottom: 5px;
                }
            }
            #description{
                background-color: white;
                padding: 10px;
                margin-bottom: 10px;
                .van-field{
                    width: 100%;
                }
            }
            #advancedSettings{
                background-color: white;
                padding: 10px;
                margin-bottom: 10px;
                .rightArrow{
                    position: absolute;
                    right: 0px;
                    padding-right: 20px;
                    padding-top: 20px;
                }
            }
        }

    }
</style>
