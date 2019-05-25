<template>
    <div>
        <van-nav-bar
                title="活动详情"
                left-text=""
                left-arrow
                @click-left="onClickLeft"
        />
        <P>商家页面</P>
    </div>
</template>

<script>
import { Row, Col, NavBar } from 'vant'

export default {
  name: 'merchant',
  components: {
    [Col.name]: Col,
    [Row.name]: Row,
    [NavBar.name]: NavBar
  },
  data () {
    return {}
  },
  methods: {
    // Navbar左边的返回按钮
    onClickLeft () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="less" scoped>
</style>
