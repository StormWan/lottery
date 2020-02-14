## 项目运行的效果，没有用好看的图片，只是简单的框架（哈哈）
```
链接：http://stromwan.gitee.io/lottery
```

### 主要分为三部分，分别是「首页」、「发起活动」、「我的」
#### 首页是多个 tab-card.vue 成一列的抽奖卡片，卡片包括发起人、发起时间、简单的活动介绍和奖品图片
这里只是设置了三个卡片，其实可以后台获取活动的数量，从而循环 tab-card 将活动全部渲染出来。
这里就遇到一个问题：当活动很多时候，为了节省加载页面时间和提供效率，会使用懒加载
比如：每次像后台请求数据时候，只请求固定量（ 10 个），在用户刷到 10 个之后触发加载再向后台请求后 10 个抽奖活动。
具体怎么做没有尝试过（捂脸）
![首页示例图](https://github.com/StormWan/lottery/blob/master/sampleImg/home.png)

#### 发起活动是设置奖品、抽奖说明、还要一些赞助商信息设置、分享助力设置等。
商品名称：开奖的奖品名称
商品数量：开奖的奖品数量
商品图片：只能上传 3 张，这个是放在活动的滚博图上面的。
开奖方式：可以选择「按时开奖」或者是「满人开奖」
抽奖说明：这个会妨碍放在首页的活动介绍里面
赞助商信息：实质上和淘宝的商品详情差不多
密码抽奖|分享&助力：用于加密发起活动者与参与者之间的关系，可以引流到发起活动者的微信公众号
![发起活动示例图1](https://github.com/StormWan/lottery/blob/master/sampleImg/setActivity_1.png)
![发起活动示例图2](https://github.com/StormWan/lottery/blob/master/sampleImg/setActivity_2.png)

#### 我的页面没有什么特别的，主要是记录个人信息
![我的页面](https://github.com/StormWan/lottery/blob/master/sampleImg/about.png)
