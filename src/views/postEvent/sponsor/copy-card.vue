<template>
    <div id="copyField">
        <div id="contain">
            <van-field v-model="titleValue" placeholder="请填写标题引导语"/>
            <van-field v-model="copyValue" placeholder="请填写需要复制的信息"/>
            <van-button type="primary" size="large">点击一键复制</van-button>
        </div>
    </div>
</template>

<script>
import { Row, Col, Cell, CellGroup, Field, Button, Icon } from 'vant'

export default {
  name: 'copy-card',
  props: {
    titleValue: {
      type: String,
      default: ''
    },
    copyValue: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      // myTitleValue: this.titleValue,
      // myCopyValue: this.copyValue
    }
  },
  // watch: {
  //   titleValue (val) {
  //     this.myTitleValue = val // 监听外部对 props 属性 titleValue 的变更
  //   },
  //   myTitleValue (val) {
  //     this.$emit('onCopyTitle')
  //   }
  // },
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Row.name]: Row,
    [Col.name]: Col,
    [Field.name]: Field,
    [Button.name]: Button,
    [Icon.name]: Icon
  },
  methods: {
  }
}
</script>
<style scoped  lang="less">
    #copyField{
        background-color: #f8f8f8;
        height: 100%;
        width: 100%;
        #contain{
            height: 100%;
            margin: 10px;
            padding-top: 10px;
            .van-field{
                background-color: white;
                margin-bottom: 10px;
            }
        }

    }
</style>
