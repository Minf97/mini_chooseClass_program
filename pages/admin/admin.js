// pages/admin/admin.js
Page({

  data: {
    activeNames: '1',
    activeNames_secon: '1',
    activeNames_third: '',
    activeNames_fourth_info: '',
    activeNames_fourth_time: '1',
    activeNames_five: '1',

    args: []
  },
  onChange1(event) {
    console.log(event.detail);
    this.setData({
      activeNames: event.detail,
    });
  },
  onChange2(event) {
    this.setData({
      activeNames_secon: event.detail,
    });
  },
  onChange3(event) {
    this.setData({
      activeNames_third: event.detail,
    });
  },
  onChange4_info(event) {
    this.setData({
      activeNames_fourth_info: event.detail,
    });
  },
  onChange4_time(event) {
    this.setData({
      activeNames_fourth_time: event.detail,
    });
  },
  onChange5(event) {
    console.log(event.detail);
    this.setData({
      activeNames_five: event.detail,
    });
  },
  onLoad(options) {
    wx.showLoading({
      title: '信息初始化...',
    })
    let args = wx.getStorageSync('args')

    this.setData({
      args
    })
    setTimeout(() => {
      wx.hideLoading()
    }, 500)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})