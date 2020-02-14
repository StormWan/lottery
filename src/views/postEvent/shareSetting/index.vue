<template>
    <div id="shareSetting">
        <van-nav-bar
                title=""
                left-text="分享&助力"
                left-arrow
                @click-left="onClickLeft"
        />
        <van-radio-group v-model="radio" class="radio">
            <van-cell-group>
                <van-cell title="允许分享、助力" clickable @click="getMessage1">
                    <van-radio name="1" checked-color="#07c160"/>
                </van-cell>
                <van-cell title="允许分享，不允许助力（中奖均等）" clickable @click="getMessage2">
                    <van-radio name="2" checked-color="#07c160"/>
                </van-cell>
                <van-cell title="不允许分享、助力（私享福利）" clickable @click="getMessage3">
                    <van-radio name="3" checked-color="#07c160"/>
                </van-cell>
            </van-cell-group>
        </van-radio-group>
    </div>
</template>

<script>
import { NavBar, Row, Col, RadioGroup, Radio, Cell, CellGroup } from 'vant'

export default {
  name: 'shareSetting',
  components: {
    [NavBar.name]: NavBar,
    [Col.name]: Col,
    [Row.name]: Row,
    [RadioGroup.name]: RadioGroup,
    [Radio.name]: Radio,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup
  },
  data () {
    return {
      radio: ''
    }
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    },
    // 选择 1
    getMessage1 () {
      this.radio = '1'
      localStorage.setItem('shareRadioMessage', this.radio)
      // this.$emit('radioMessage', this.radio)
    },
    getMessage2 () {
      this.radio = '2'
      localStorage.setItem('shareRadioMessage', this.radio)
      // this.$emit('radioMessage', this.radio)
    },
    getMessage3 () {
      this.radio = '3'
      localStorage.setItem('shareRadioMessage', this.radio)
      // this.$emit('radioMessage', this.radio)
    }
  }
}
</script>

<style lang="less" scoped>
    #shareSetting{
        background-color: #f8f8f8;
        height: 100%;
        width: 100%;
        position: absolute;
        .radio{
            padding: 10px;
            .van-cell__title{
                flex: 1;
            }
            .iconRadio{

            }
        }
    }
</style>
