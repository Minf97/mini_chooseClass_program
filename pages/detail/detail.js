
Page({
  data: {
    data: '',
    idx: '',
    _id: '',
    args: []
  },

  naviToChoose(e) {
    let jsonStr = JSON.stringify(this.data.data.children[this.data.idx]);
    let data = encodeURIComponent(jsonStr);

    let {idx, _id} = this.data
    wx.navigateTo({
      url: `../chooseClass/chooseClass?data=${data}&idx=${idx}&_id=${_id}`,
    })
  },

  onLoad(options) {
    let data = JSON.parse(decodeURIComponent(options.data)) 
    let {idx, _id} = options
    this.setData({
      data,
      idx,
      _id
    })
  },

  onShow() {

  },
})