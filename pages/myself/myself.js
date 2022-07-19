
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'

Page({
  data: {
    user: {},
  },
  onLoad() {
    let user = wx.getStorageSync('user') || {
      username: '未登录',
      password: '',
      avatarUrl: defaultAvatarUrl,
      nickname: '游客'
    }
    this.setData({
      user
    })
  },
  login(e) {
    wx.navigateTo({
      url: '../login/login',
    })
  },
})
