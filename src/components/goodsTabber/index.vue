<template>
    <van-tabbar v-model="goodsActiveTab" style="z-index: 1999">
        <van-tabbar-item
                v-for="(tab, index) in tabbar"
                :icon="tab.icon"
                :to="tab.path"
                :dot="tab.dot"
                :info="tab.info"
                :key="index">
            {{tab.name}}
        </van-tabbar-item>
    </van-tabbar>
</template>

<script>
import { Tabbar, TabbarItem } from 'vant'

export default {
  data () {
    return {
      tabbar: [
        {
          name: '首页',
          path: '/',
          pathName: 'home',
          icon: 'home-o',
          dot: false
          // info: ''
        },
        {
          name: '我也要发起抽奖',
          path: '/postEvent',
          pathName: 'postEvent',
          icon: 'point-gift-o',
          dot: false
          // info: ''
        },
        {
          name: '参与更多活动',
          path: '/',
          pathName: 'home',
          icon: 'friends-o',
          dot: false
          // info: ''
        }
      ]
    }
  },
  computed: {
    goodsActiveTab: {
      get () {
        return this.$store.state.tabbar.goodsActiveTab
      },
      set (value) {
        this.$store.commit('tabbar/setgoodsActiveTab', value)
      }
    }
  },
  methods: {
  },
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  }
}
</script>
