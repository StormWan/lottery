<template>
    <div>
        <van-radio-group v-model="radio">
            <van-cell-group>
                <van-cell title="单选框 1" clickable @click="radio = '1'">
                    <van-radio name="1" />
                </van-cell>
                <van-cell title="单选框 2" clickable @click="radio = '2'">
                    <van-radio name="2" />
                </van-cell>
            </van-cell-group>
        </van-radio-group>
    </div>
</template>

<script>
import { Row, Col, RadioGroup, Radio, Cell, CellGroup } from 'vant'

export default {
  name: 'shareSetting',
  components: {
    [Col.name]: Col,
    [Row.name]: Row,
    [RadioGroup.name]: RadioGroup,
    [Radio.name]: Radio,
    [Cell.name]: Cell,
    [!CellGroup.name]: CellGroup
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
</style>
