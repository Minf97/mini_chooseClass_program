Page({

  data: {
    statusBarHeight: getApp().globalData.statusBarHeight,
    lineHeight: getApp().globalData.lineHeight,
    rectHeight: getApp().globalData.rectHeight,
    windowHeight: getApp().globalData.windowHeight,
    pixelRatio: getApp().globalData.pixelRatio,     // rpx 与 px 的转换比例

    label: [
      {
        title: '美术书法',
        children: [
          {
            title: '美学工作室',
            naviUrl: ''
          },
          {
            title: '创想大师班',
            naviUrl: ''
          },
          {
            title: '国际动漫A班',
            naviUrl: ''
          }
        ]
      },
      {
        title: '舞蹈',
        children: [
          {
            title: '舞蹈1',
            naviUrl: ''
          },
          {
            title: '舞蹈2',
            naviUrl: ''
          },
          {
            title: '舞蹈3',
            naviUrl: ''
          }
        ]
      },
      {
        title: '阅读语言',
        children: [
          {
            title: '舞蹈1',
            naviUrl: ''
          },
          {
            title: '舞蹈2',
            naviUrl: ''
          },
          {
            title: '舞蹈3',
            naviUrl: ''
          }
        ]
      },
      {
        title: '特色课',
        children: [
          {
            title: '舞蹈1',
            naviUrl: ''
          },
          {
            title: '舞蹈2',
            naviUrl: ''
          },
          {
            title: '舞蹈3',
            naviUrl: ''
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