<template>
    <div id="passwordLottery">
        <van-nav-bar
                title=""
                left-text="口令抽奖"
                left-arrow
                @click-left="onClickLeft"
        />
        <div id="body">
            <div >
                <p>设置口令</p>
                <van-field v-model="password" placeholder="请填写你想设置的口令，不超过 20 个字" />
            </div>
            <p>获取来源</p>
            <van-row type="flex" justify="center">
                <van-col><p @click="subscribeChange" ref="chooseSubscribe"><van-icon name="volume"/>公众号</p></van-col>
                <van-col><p @click="appletsChange" ref="chooseApplets"><van-icon name="weapp-nav"/>小程序</p></van-col>
                <van-col><p @click="weichatChange" ref="chooseWeichat"><van-icon name="wechat"/>微信号</p></van-col>
            </van-row>
            <div v-show="subscribe" >
                <p>公众号名称</p>
                <van-field v-model="publicName" placeholder="请输入公众号名称" />
            </div>
            <div v-show="applets" >
                <p>小程序名称</p>
                <van-field v-model="appletsName" placeholder="请输入小程序名称" />
            </div>
            <div v-show="weichat" >
                <p>微信号</p>
                <van-field v-model="weichatName" placeholder="请输入微信号" />
            </div>
            <p>提示信息</p>
            <van-field v-model="message" placeholder="请填写你想设置提示信息，不超过 20 个字" />
        </div>
        <div id="footer">
            <van-button size="large" @click="submit" type="danger">保存</van-button>
        </div>
    </div>
</template>

<script>
import { NavBar, Row, Col, Field, Button, Toast } from 'vant'

export default {
  name: 'passwordLottery',
  components: {
    [NavBar.name]: NavBar,
    [Col.name]: Col,
    [Row.name]: Row,
    [Field.name]: Field,
    [Button.name]: Button,
    [Toast.name]: Toast
  },
  data () {
    return {
      password: '',
      subscribe: true,
      applets: false,
      weichat: false,
      publicName: '',
      appletsName: '',
      weichatName: '',
      message: ''
    }
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    },
    // 点击公众号
    subscribeChange () {
      this.subscribe = true
      this.applets = false
      this.weichat = false
      this.$refs.chooseSubscribe.className = 'chooseOn'
      this.$refs.chooseApplets.className = 'chooseOff'
      this.$refs.chooseWeichat.className = 'chooseOff'
    },
    // 点击小程序
    appletsChange () {
      this.subscribe = false
      this.applets = true
      this.weichat = false
      this.$refs.chooseApplets.className = 'chooseOn'
      this.$refs.chooseSubscribe.className = 'chooseOff'
      this.$refs.chooseWeichat.className = 'chooseOff'
    },
    // 点击微信号
    weichatChange () {
      this.subscribe = false
      this.applets = false
      this.weichat = true
      this.$refs.chooseWeichat.className = 'chooseOn'
      this.$refs.chooseApplets.className = 'chooseOff'
      this.$refs.chooseSubscribe.className = 'chooseOff'
    },
    //  提交
    submit () {
      if (this.password) {
        if (this.publicName !== '' || this.appletsName !== '' || this.weichatName !== '') {}
        let passwordLottery = {} // 将信息存储在对象中
        passwordLottery.password = this.password
        passwordLottery.publicName = this.publicName
        passwordLottery.appletsName = this.appletsName
        passwordLottery.weichatName = this.weichatName
        passwordLottery.message = this.message
        localStorage.setItem('passwordLottery', JSON.stringify(passwordLottery))
        Toast('保存成功')
        console.log(JSON.parse(localStorage.getItem('passwordLottery')))
      } else {
        Toast('设置口令不能为空')
      }
    }
  }
}
</script>

<style lang="less" scoped>
    #passwordLottery{
        background-color: #eeeeee;
        position: absolute;
        height: 100%;
        width: 100%;
        #body{
            margin: 10px;
            background-color: white;
            padding: 10px;
            padding-top: 0px;
            .van-field{background-color: #f8f8f8;}
            p{
                padding: 10px;
                margin: 0px;
            }
            /*选中就显示红色*/
            .chooseOn{
                color: red;
                border-bottom: 2px solid #f89; /*下划线*/
            }
            /*没有选中就设置为黑色*/
            .chooseOff{
                color: black;
            }
            .van-button{
                margin: 10px;
            }
        }
        #footer{
            position: fixed;
            bottom: 0px;
            width: 100%;
        }
    }
</style>
