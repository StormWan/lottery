<template>
    <div id="setting">
        <van-nav-bar
                title="活动详情"
                left-text=""
                left-arrow
                @click-left="onClickLeft"
        />
        <P>设置页面</P>
    </div>
</template>

<script>
import { Row, Col, NavBar } from 'vant'

export default {
  name: 'setting',
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
