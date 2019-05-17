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
                <van-cell title="允许分享、助力" clickable @click="radio = '1'">
                    <van-radio name="1" checked-color="#07c160"/>
                </van-cell>
                <van-cell title="允许分享，不允许助力（中奖均等）" clickable @click="radio = '2'">
                    <van-radio name="2" checked-color="#07c160"/>
                </van-cell>
                <van-cell title="不允许分享、助力（私享福利）" clickable @click="radio = '2'">
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
    }
  }
}
</script>

<style lang="less" scoped>
    #shareSetting{
        background-color: #f8f8f8;
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
