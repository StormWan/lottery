<template>
    <div id="about">
        <van-nav-bar
                title="个人中心"
                lef-text="返回"
                left-arrow
                @click-left="onClickLeft"
                id="head"
        />
        <div id ="personSetting">
            <!--   个人名片 -->
            <van-row type="flex">
                <van-col >
                    <img src="@/assets/image/person.png" id="personPicture">
                </van-col>
                <van-col span="15">
                    <h3>{{personName}}</h3>
                    <span>我的金币豆:{{personId}}</span>
                </van-col>
                <van-col>
                    <router-link :to="{path:'../setting'}">
                        <van-icon name="setting-o" size="25px" style="z-index: 999"/>
                    </router-link>
                </van-col>
            </van-row>
        </div>
        <!--    参与活动 + 中奖记录 + 发起活动-->
        <div id="flowCard">
            <van-row type="flex" justify="center" class="card">
                <van-col>
                    <router-link :to="{path:'/'}">
                        <van-icon name="fire-o" size="25px"/>
                        <p>{{taskCenter}}</p>
                    </router-link>
                </van-col>
                <van-col>
                    <router-link :to="{path:'../task'}">
                        <van-icon name="award-o" size="25px"/>
                        <p>{{award}}</p>
                    </router-link>
                </van-col>
                <van-col>
                    <router-link :to="{path:'../postEvent'}">
                        <van-icon name="point-gift-o" size="25px"/>
                        <p>{{postEvent}}</p>
                    </router-link>
                </van-col>
            </van-row>
        </div>
        <!--    公众号合作 -->
        <div id="bottom">
            <van-row type="flex" justify="space-between" class="bottomCard">
                <van-col>
                    <van-icon name="friends-o" size="20px" class="bottomIcon"/>
                    <span>{{myAssets}}</span>
                </van-col>
                <van-col id="routerArrow"><router-link :to="{path:'../task'}">
                    <van-icon name="arrow"/>
                </router-link></van-col>
            </van-row>
            <!--    常见问题    -->
            <van-row type="flex" justify="space-between" class="bottomCard">
                <van-col>
                    <van-icon name="question-o"  size="20px" class="bottomIcon"/>
                    <span>{{myQuestion}}</span>
                </van-col>
                <van-col id="routerArrow"><router-link :to="{path:'../task'}">
                    <van-icon name="arrow"/>
                </router-link></van-col>
            </van-row>
            <!--    精选小程序    -->
            <van-row type="flex" justify="space-between" class="bottomCard">
                <van-col>
                    <van-icon name="star-o"  size="20px" class="bottomIcon"/>
                    <span>{{myProgram}}</span>
                </van-col>
                <van-col id="routerArrow"><router-link :to="{path:'../task'}">
                    <van-icon name="arrow"/>
                </router-link> </van-col>
            </van-row>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { Button, NavBar, Row, Col, Icon, Dialog } from 'vant'

export default {
  name: 'about',
  components: {
    [Button.name]: Button,
    [NavBar.name]: NavBar,
    [Row.name]: Row,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Dialog.name]: Dialog
  },
  data () {
    return {
      customer: false,
      personName: '老王上田',
      personId: '1233435',
      myAssets: '公众号合作',
      myQuestion: '常见问题&联系我们',
      myProgram: '精选小程序',
      activate: '去参加活动赢得好礼',
      taskCenter: '参与活动',
      award: '中奖记录',
      postEvent: '发起活动',
      integral: '我的积分',
      grade: '0',
      grade1: '我的会员 等级： LV 0',
      grade2: '目前是第一等级哦'
    }
  },
  async mounted () {
    this.setActiveTab(2)
  },
  methods: {
    ...mapMutations({
      setActiveTab: 'tabbar/setActiveTab'
    }),
    onClickLeft () {
      this.$router.go(-1)
    },
    toSetting () {
      this.$router.push('./setting')
    }
  }
}
</script>

<style lang="less" scoped>
    #about{
        #head{position: fixed; width: 100%;}
        /*个人中心*/
        #personSetting {
            padding-top: 50px;
            background-color: #ececec;
            padding-bottom: 40px;
            /*设置的 icon*/
            .van-icon{
                position: absolute;
                padding-right: 10px;
            }
            #personPicture {
                width: 50px;
                height: 50px;
                padding: 10px;
            }
            /*会员昵称*/
            h3{
                margin: 0px;
                padding-top: 10px;
            }
            span{ font-size: 13px; }
            /*设置的icon*/
            .van-icon{
                right: 0px;
                padding-top: 10px;
                color: black;
            }
        }
        #flowCard{
            position: absolute;
            width: 100%;
            top:0px;
            .card{
                position: relative;
                top:120px;
                background-color: white;
                margin-left: 20px;
                margin-right: 20px;
                padding: 5px;
                border-radius: 10px;
                display: flex;
                justify-content: center;
                -moz-box-shadow:1px 1px 10px #8A8A8A;
                -webkit-box-shadow:1px 1px 10px #8A8A8A;
                box-shadow:1px 1px 10px #8A8A8A;
                .van-icon{
                    padding-top: 10px;
                    padding-left: 26px;
                    color: red;
                }
                p{
                    color: black;
                    font-size: small;
                    margin: 0px;
                    padding-right: 15px;
                    padding-left: 15px;
                    padding-bottom: 20px;
                }
            }
        }
        #bottom{
            position: absolute;
            width: 100%;
            height: 100%;
            margin-top: 50px;
            background-color: #eeeeee;
            padding-top:5px;
            .bottomCard{
                margin-bottom: 5px;
                background-color: white;
                padding: 10px;
                .bottomIcon{
                    color: red;
                    padding-right: 5px;
                    vertical-align: middle;
                }
                span{font-size: 13px;}
            }
        }
    }
</style>
