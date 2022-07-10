Page({

  data: {
    statusBarHeight: getApp().globalData.statusBarHeight,
    lineHeight: getApp().globalData.lineHeight,
    rectHeight: getApp().globalData.rectHeight,
    windowHeight: getApp().globalData.windowHeight,
    pixelRatio: getApp().globalData.pixelRatio,     // rpx 与 px 的转换比例

    label: [
      {
        title: '小低阅读协作',
        children: [
          {
            title: '一对一',
          },
          {
            title: '十二人小班',
          },
          {
            title: '百人大班',
          }
        ]
      },
      {
        title: '小中阅读协作',
        children: [
          {
            title: '一对一',
          },
          {
            title: '十二人小班',
          },
          {
            title: '百人大班',
          }
        ]
      },
      {
        title: '小高阅读协作',
        children: [
          {
            title: '一对一',
          },
          {
            title: '十二人小班',
          },
          {
            title: '百人大班',
          }
        ]
      },
      {
        title: '初中阅读协作',
        children: [
          {
            title: '一对一',
          },
          {
            title: '十二人小班',
          },
          {
            title: '百人大班',
          }
        ]
      },]
  },
  naviTo(e) {
    let {currentTarget: {dataset: {title}}} = e
    wx.navigateTo({
      url: `../detail/detail?title=${title}`,
    })
  },
  onLoad: function (options) {

  },
  onReady: function () {

  },

  onShow: function () {

  },

})