<template>
    <div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { Row, Col } from 'vant'

export default {
  name: 'about',
  components: {
    [Col.name]: Col,
    [Row.name]: Row
  },
  data () {
    return {
    }
  },
  async mounted () {
    this.setActiveTab(2)
    // await this.getProducts()
  },
  methods: {
    ...mapMutations({
      setActiveTab: 'tabbar/setActiveTab'
    })
  }
}
</script>

<style lang="less" scoped>
</style>
