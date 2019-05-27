<template>
    <div id="sponsor">
        <van-nav-bar
                title=""
                left-text="赞助商信息"
                left-arrow
                @click-left="onClickLeft"
        />
        <div id="contain">
            <div id="picText">
                <p>图文编辑</p>
                <van-row type="flex"  justify="center">
                    <div id="button_box">
                    <van-col>
                        <span class="iconInfo">{{fieldNumber}}/1</span>
                        <van-button @click="filedShow"  plain type="danger" size="small"><van-icon name="notes-o" size="20px"/>插入文本</van-button>
                    </van-col>
                    <van-col>
                        <span class="iconInfo">{{pictureNumber}}/9</span>
                        <van-uploader :after-read="onRead" name="商品图" :max-size="maxSize" @oversize="oversize" accept="image/jpg, image/jpeg, image/png">
                            <van-button  plain type="danger" size="small"><van-icon name="photo" size="20px"/>插入图片</van-button>
                        </van-uploader>
                    </van-col>
                    <van-col>
                        <span class="iconInfo">{{copyNumber}}/2</span>
                        <van-button @click="copyShow"  plain type="danger" size="small"><van-icon name="graphic" size="20px"/>一键复制</van-button>
                    </van-col>
                    </div>
                </van-row>
                <!--       插入文本内容         -->
                <div v-show="field" id="inputField">
                    <van-icon name="clear" size="20px" class="clearIcon" @click="fieldShow" />
                    <van-field v-model="fieldValue" placeholder="请输入文本内容" />
                </div>
                <!--       上传图片         -->
                <div v-for="(item, index) in img " :key=index class="uploader">
                    <img :src="item"  ref="goodsImg" class="Photograph" >
                    <van-icon name="clear" size="20px" @click.native.stop="imgclose(index)"></van-icon>
                </div>
                <!--       复制文本 - 一键复制         -->
                <div v-show="copyCard">
                    <van-icon name="clear" size="20px" class="clearIcon" @click="copyShowCard" />
                    <div class="copyField">
                        <div class="contain2">
                            <van-field v-model="titleValue" placeholder="请填写标题引导语"/>
                            <van-field v-model="copyValue" placeholder="请填写需要复制的信息"/>
                            <van-button type="primary" size="large" disabled>点击一键复制</van-button>
                        </div>
                    </div>
                </div>
                <div v-show="copyCard1" >
                    <van-icon name="clear" size="20px" class="clearIcon" @click="copyShowCard1" />
                    <div class="copyField">
                        <div class="contain2">
                            <van-field v-model="titleValue1" placeholder="请填写标题引导语"/>
                            <van-field v-model="copyValue1" placeholder="请填写需要复制的信息"/>
                            <van-button type="primary" size="large" disabled>点击一键复制</van-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footer><van-button size="large" type="danger" @click="submit">保存</van-button></footer>
    </div>
</template>

<script>
import { Button, Col, Field, NavBar, Row, Toast, Uploader } from 'vant'

export default {
  name: 'sponsor',
  components: {
    [NavBar.name]: NavBar,
    [Col.name]: Col,
    [Row.name]: Row,
    [Button.name]: Button,
    [Field.name]: Field,
    [Toast.name]: Toast,
    [Uploader.name]: Uploader
  },
  data () {
    return {
      file: [],
      fieldValue: '',
      titleValue: '',
      copyValue: '',
      titleValue1: '',
      copyValue1: '',
      field: false,
      copyCard: false,
      copyCard1: false,
      fieldNumber: 0, // 范围 0 - 1
      pictureNumber: 0, // 范围 0 - 9
      copyNumber: 0, // 范围 0 - 3
      cardNumber1: 0,
      cardNumber2: 0,
      maxSize: 1024 * 1024 * 2,
      img: [] // 用于显示图片
    }
  },
  methods: {
    // 返回上一个页面
    onClickLeft () {
      this.$router.go(-1)
    },
    // 插入文本数量限定
    filedShow () {
      if (this.fieldNumber < 1) {
        this.fieldNumber++
        // console.log(this.fieldNumber)
        this.field = true
      } else {
        Toast('只可插入一个文本哦~')
      }
    },
    // 插入图片数量限定，将图片存储在 img 数组中
    onRead (file) {
      if (this.img.length >= 9) { // <------限定只能上传九张截图
        Toast('只能上传9张图哦！')
      } else {
        this.pictureNumber = this.pictureNumber + 1
        // const FileToAdd = {
        //   lastModified: file.file.lastModified,
        //   lastModifiedDate: file.file.lastModifiedDate,
        //   name: file.file.name,
        //   size: file.file.size,
        //   type: file.file.type
        // }
        this.file.push(file.file) // 到时候传给服务器
        this.img.push(file.content)
      }
    },
    // 限制图片大小
    oversize (file) {
      Toast('上传的文件不能超过2M!')
    },
    // 点击删除预览图的按钮
    imgclose (e) {
      // console.log(e)
      this.img.splice(e, 1)
    },
    // 插入一键复制模板
    copyShow () {
      if (this.copyNumber < 2) {
        this.copyNumber = this.copyNumber + 1
        // console.log(this.copyNumber)
        this.cardNumber1 = 1
        if (this.cardNumber1 === 1 & this.copyNumber === 1) { this.copyCard = true }
        if (this.copyNumber === 2) {
          this.cardNumber1 = 1
          this.copyCard1 = true
        }
        if (this.copyNumber === 2 & this.cardNumber1 === 1) { this.copyCard = true }
      } else {
        Toast('只能有两个一键复制模板哦~')
      }
    },
    // 清空模板 1 上的内容，隐藏信息，可显示模板数量加一
    copyShowCard () {
      this.titleValue = ''
      this.copyValue = ''
      this.copyCard = false
      this.copyCard = 0
      this.copyNumber--
    },
    // 清空模板 2 上的内容，隐藏信息，可显示模板数量加一
    copyShowCard1 () {
      this.titleValue1 = ''
      this.copyValue1 = ''
      this.copyCard1 = false
      this.copyCard1 = 0
      this.copyNumber--
    },
    // i清空文本输入框，关闭文本输入框的显示，可显示文本输入框数量加一
    fieldShow () {
      this.fieldValue = ''
      this.field = false
      this.fieldNumber = 0
    },
    // 提交信息
    submit () {
      let sponsorMessage = {}
      sponsorMessage.fieldValue = this.fieldValue
      sponsorMessage.titleValue = this.titleValue
      sponsorMessage.titleValue1 = this.titleValue1
      sponsorMessage.copyValue = this.copyValue
      sponsorMessage.copyValue1 = this.copyValue1

      // 只要有一个非空就可以继续执行
      if (this.fieldValue === '' & this.titleValue === '' & this.titleValue1 === '' & this.copyValue === '' & this.copyValue1 === '' & JSON.stringify(this.file) === '[]') {
        Toast('不能为空哦~')
      } else { // <--- 暂时存储在本地，后买你存储到服务器
        localStorage.setItem('sponsorMessage', JSON.stringify(sponsorMessage))
        localStorage.setItem('sponsorMessagePicture', JSON.stringify(this.img))
        Toast('提交赞助商信息成功')
      }
    }
  }
}
</script>

<style lang="less" scoped>
    #sponsor{
        background-color: #f8f8f8;
        position: absolute;
        height: 100%;
        width: 100%;
        #contain{
            #picText{
                background-color: white;
                padding: 5px;
                margin: 10px;
                padding-bottom: 100px;
                /*clearIcon 的样式*/
                .clearIcon{
                    position: relative;
                    color: red;
                    left: 95%;
                    top: 20px;
                    z-index: 999;
                }
                /*按钮的样式*/
                #button_box{
                    position: relative;
                    .van-col{
                        width: 95px;
                        /* button 里面的 icon 垂直居中*/
                        .van-icon{vertical-align: middle; }
                        /*按钮右上角的数字显示*/
                        .iconInfo{
                            position: relative;
                            font-size: 10px;
                            background-color: red;
                            padding: 1px;
                            border-bottom-left-radius: 10px;
                            color: white;
                            left: 67px;
                            top: 15px;
                            z-index: 999;
                        }
                    }
                }
                /*输入文本框*/
                #inputField{
                    .van-field{background-color: #f8f8f8;}
                    .clearIcon{ top: 10px;}
                }
                /*一键复制的样式*/
                .copyField{
                    background-color: #f8f8f8;
                    height: 100%;
                    width: 100%;
                    .contain2{
                        height: 100%;
                        margin: 10px;
                        padding-top: 10px;
                        .van-field{
                            background-color: white;
                            margin-bottom: 10px;
                        }
                    }
                }
                /*插入图片那的样式*/
                .uploader{
                    .Photograph{
                        padding-top: 10px;
                        width: 100%;
                        height: 100%;
                    }
                    .van-icon{
                        /*点击删除的图片样式*/
                        position: absolute;
                        color: red;
                        left: 92%;
                        z-index:999;
                    }
                }
            }
        }
        /*固定再底部的提交按钮*/
        footer{
            position: fixed;
            width: 100%;
            bottom: 0px;
        }
    }
</style>
