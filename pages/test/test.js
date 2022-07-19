// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let nums = [6,4,-3,5,-2,-1,0,1,-9];

    console.log(this.question1(nums));
  },
  /**
   * @nums {Array} 放入的数组
   */
  question1 (nums) {
    let k = 0;
    let temp;

    for(let i = 0; i < nums.length; i++) {
      if(nums[i] >= 0) {
        temp = nums[k];
        nums[k++] = nums[i];
        nums[i] = temp;
      }
    }
    return nums
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