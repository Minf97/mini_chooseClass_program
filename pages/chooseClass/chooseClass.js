const util = require('../../utils/util')
import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast';
Page({

  data: {
    _id: '',
    idx: '',
    infoIdx: '',
    timeIdx: '',

    data: [],
    nickname: '',
    username: '',
    name_err: '',
    username_err: '',
    show: false
  },
  onLoad: function (options) {
    let data = JSON.parse(decodeURIComponent(options.data))
    let { idx, _id } = options
    this.setData({
      data,
      idx,
      _id,
      username: wx.getStorageSync('user').username,
      nickname: wx.getStorageSync('user').nickname
    });
  },
  naviToApply: function (e) {
    console.log(e);
    let { currentTarget: { dataset: { infoidx, timeidx } } } = e;
    console.log(infoidx);
    this.setData({
      show: !this.data.show,
      infoIdx: infoidx,
      timeIdx: timeidx
    })
  },
  onConfirm(e) {
    console.log(e);
    let that = this,
      data = this.data,
      nickname = data.nickname,
      username = data.username,
      _id = data._id,
      idx = data.idx,
      timeIdx = data.timeIdx,
      infoIdx = data.infoIdx;

    let reserve = util.formatDate(new Date())

    wx.showLoading({
      title: '正在处理...',
    })
    if (!nickname.replace(/\s/g, "")) {
      this.setData({
        name_err: '名字不能为空'
      })
    } else if (!username.replace(/\s/g, "")) {
      this.setData({
        username_err: '学号不能为空'
      })
    } else {
      wx.cloud.callFunction({
        name: 'api',
        data: {
          type: 'reserve',
          nickname,
          username,
          _id,
          idx,
          infoIdx,
          timeIdx,
          reserve
        },
        success(res) {
          wx.hideLoading()
          console.log(res.result);
          switch (res.result) {
            case '您已报名':
              console.log(123);
              wx.showToast({
                title: '您已报名，不可重复报名',
                icon: 'none'
              })
              break;
            case '人数已满':
              console.log(456);
              wx.showToast({
                title: '该班人数已满，不可报名',
                icon: 'none'
              })
              break;
            default:
              console.log(789);
              wx.showToast({
                title: '报名成功！返回课表可查看',
                icon: 'none'
              })
              break;
          }
          wx.cloud.callFunction({
            name: 'api',
            data: {
              type: 'getuser',
              username
            },
            success(res) {
              let user = res.result.data[0]

              wx.setStorageSync('user', user)
            }
          })
        }
      })
      wx.hideLoading()
    }

  },
  onClose(e) {
    console.log(e);
  },
  onChange(e) {
    this.setData({
      name_err: '',
      username_err: ''
    })
  },
  onShow: function () {

  },
})