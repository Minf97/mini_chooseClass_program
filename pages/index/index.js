Page({

  data: {
    statusBarHeight: getApp().globalData.statusBarHeight,
    lineHeight: getApp().globalData.lineHeight,
    rectHeight: getApp().globalData.rectHeight,
    windowHeight: getApp().globalData.windowHeight,
    pixelRatio: getApp().globalData.pixelRatio,     // rpx 与 px 的转换比例

    label: [],
    active: 1,
  },

  naviTo(e) {
    let {currentTarget: {dataset: {index, idx}}} = e;

    let jsonStr = JSON.stringify(this.data.label[index]);
    let data = encodeURIComponent(jsonStr);

    let _id = this.data.label[index]._id
    wx.navigateTo({
      url: `../detail/detail?data=${data}&idx=${idx}&_id=${_id}`,
    })
  },

  onLoad: function (options) {
    this.getArgs();
  },

  getArgs(e) {
    let that = this;
    wx.cloud.callFunction({
      name: 'api',
      data: {
        type: 'getArgs'
      },
      success(res) {
        console.log(res);
        let {result: {data}} = res;
        wx.setStorageSync('args', data)
        that.setData({
          label: data
        })
        
      }
    })
  },

  onChange(e) {
    console.log(e);
  },

  onShow: function () {

  },

})