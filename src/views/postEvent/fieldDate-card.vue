<template>
    <div class="vant-field-date">
        <van-cell
                :title="label"
                :class="{'readonly': readonly, 'placeholder' : text}"
                :is-link="!readonly"
                :required="required"
                @click="show">
            <!-- 显示当前值，没有值显示提示文字 -->
            <span id="cellP">{{ text ? text : placeholder }}</span>
            <!-- 自定义错误显示 -->
            <div
                    v-if="$attrs.error"
                    v-text="$attrs['error-message']"
                    class="van-field__error-message"
            />
        </van-cell>
        <!-- 用 actionsheet 来包裹弹出层日期控件 -->
        <van-actionsheet v-model="isShowPicker">
            <!-- $attrs 可以把根节点的attr放到目标组件上，如此可以像使用 DatePicker 组件一样使用这个新组件 -->
            <van-datetime-picker
                    v-bind="$attrs"
                    type="datetime"
                    title="请选择日期"
                    :min-date="minDate"
                    :max-date="maxDate"
                    v-model="currentDate"
                    @cancel="cancel"
                    @confirm="confirm(currentDate)"
            />
        </van-actionsheet>
    </div>
</template>

<script>
import { Row, Col, DatetimePicker, Cell, CellGroup, Actionsheet, Toast } from 'vant'

export default {
  name: 'field-date-card',
  inheritAttrs: false,
  props: {
    value: {
      type: [Number, Date],
      default: undefined // 值不能是 null，DatePicker会报错
    },
    // ifShow: {
    //   type: String,
    //   default: ''
    // },
    // Cell 显示的文字
    label: {
      type: String,
      default: null
    },
    // 必填的星号
    required: {
      type: Boolean,
      default: false
    },
    // 只读状态
    readonly: {
      type: Boolean,
      default: false
    },
    // 占位提示文字
    placeholder: {
      type: String,
      default: '请选择'
    },
    // 展示的格式化
    format: {
      type: String,
      default: null
    },
    minDate: {
      type: Date,
      default: undefined
    },
    maxDate: {
      type: Date,
      default: undefined
    }
  },
  data () {
    return {
      selectedItem: null,
      isShowPicker: false,
      text: '',
      currentDate: new Date(),
      ifShow: ''
    }
  },
  components: {
    [DatetimePicker.name]: DatetimePicker,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Actionsheet.name]: Actionsheet,
    [Row.name]: Row,
    [Col.name]: Col,
    [Toast.name]: Toast
  },
  computed: {
    // 展示的格式化，时间提交的值是Date类型数据
    formatFormula () {
      if (this.format) {
        return this.format
      } else if (this.type === 'date') {
        return 'yyyy-MM-dd'
      } else if (this.type === 'datetime') {
        return 'yyyy-MM-dd hh:mm'
      } else if (this.type === 'time') {
        return 'hh:mm'
      } else if (this.type === 'year-month') {
        return 'yyyy-MM'
      }
      return ''
    }
  },
  // mounted () {
  //   if (this.ifShow !== '' & this.ifShow !== undefined) {
  //     console.log(this.ifShow)
  //     this.$emit('input', this.ifShow)
  //     this.$emit('change', this.ifShow)
  //     document.getElementById('cellP').innerText = this.ifShow ? this.dateFormat(this.ifShow, this.formatFormula) : ''
  //     console.log(this.dateFormat(this.ifShow, this.formatFormula))
  //     this.$emit('lotteryTime', this.dateFormat(this.ifShow, this.formatFormula))
  //     this.cancel()
  //   } else {
  //     // console.log(this.ifShow)
  //     Toast('this.ifShow is null')
  //   }
  // },
  methods: {
    // 转换时间的格式
    dateFormat: (value, format) => {
      if (!value) return
      if (!(value instanceof Date)) {
        value = new Date(value)
      }
      let o = {
        'M+': value.getMonth() + 1, // month
        'd+': value.getDate(), // day
        'h+': value.getHours(), // hour
        'm+': value.getMinutes(), // minute
        's+': value.getSeconds(), // second
        'q+': Math.floor((value.getMonth() + 3) / 3), // quarter
        'S': value.getMilliseconds() // millisecond
      }

      if (!format || format === '') {
        format = 'yyyy-MM-dd hh:mm:ss'
      }

      if (/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, (value.getFullYear() + '').substr(4 - RegExp.$1.length))
      }

      for (let k in o) {
        if (new RegExp('(' + k + ')').test(format)) {
          format = format.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length))
        }
      }
      return format
    },
    show () {
      if (!this.readonly) {
        this.isShowPicker = true
      }
    },
    // 获取父组件传给子组件的动态数据
    getShow (m) {
      if (m !== '' & m !== undefined) {
        this.ifShow = m
        // console.log(this.ifShow)
        this.$emit('input', this.ifShow)
        this.$emit('change', this.ifShow)
        document.getElementById('cellP').innerText = this.ifShow ? this.dateFormat(this.ifShow, this.formatFormula) : ''
        // console.log(this.dateFormat(this.ifShow, this.formatFormula))
        this.$emit('lotteryTime', this.dateFormat(this.ifShow, this.formatFormula))
        this.cancel()
      } else {
        Toast('this.ifShow is null')
      }
    },
    confirm (value) {
      // 更新 v-model 绑定的 value 值，第二个参数是毫秒数，第三个参数是原始值，根据自己的项目的数据结构来修改
      // input 事件同时也会触发 vee-validate 的验证事件
      this.$emit('input', value)
      // onChange事件，虽然重写 @input可以实现，但这样会破坏 v-model 写法。
      this.$emit('change', value)
      document.getElementById('cellP').innerText = value ? this.dateFormat(value, this.formatFormula) : ''
      // console.log(this.dateFormat(value, this.formatFormula))
      this.$emit('lotteryTime', this.dateFormat(value, this.formatFormula))
      this.cancel()
    },
    // 隐藏弹框
    cancel () {
      this.isShowPicker = false
    }
  }
}
</script>
<style scoped  lang="less">
    .van-cell{
        padding-right: 0px;
        padding-left: 0px;
    }
</style>
