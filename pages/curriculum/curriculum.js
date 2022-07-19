const util = require('../../utils/util')
var startX, endX;
var moveFlag = true;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    week: 0,
    today: util.formatDate(new Date()),
    date: [],
    left: ['8:00', '9:10', '10:20', '11:30', '13:00', '14:10', '15:20', '16:30', '17:45', '18:55', '20:05', '21:15'],
    class: [
      {
        weekDay: 1,
        timeIndex: 1,

      },
      {
        weekDay: 1,
        timeIndex: 2,

      },
      {
        weekDay: 1,
        timeIndex: 3,

      },
      {
        weekDay: 2,
        timeIndex: 1,

      }
    ],
    color: [
      '#99CCCC',
      '#FF6666',
      '#CCCC66',
    ],

  },

  onLoad(options) {

  },

  onReady() {

  },
  getClass(date = util.formatTime(new Date())) {
    let user = wx.getStorageSync('user');
    let data = [];
    console.log(date);
    if (user.curriculum) {
      console.log(user.curriculum);
      user.curriculum.forEach(item => {
        date.forEach(e => {
          console.log(item.date, e.date, item.day,e.day);
          if (item.date == e.date && item.day == e.day) {
            console.log("fddddd");
            let period = {
              "8:00 - 9:10": 0,
              "9:10 - 10:20": 0.5,
              "10:20 - 11:30": 1,
              "11:30 - 13:00": 1.5,
              "13:00 - 14:10": 2,
              "14:10 - 15:20": 2.5,
              "15:20 - 16:30": 3,
              "16:30 - 17:45": 3.5,
              "17:45 - 18:55": 4,
              "18:55 - 20:05": 4.5,
              "20:05 - 21:15": 5,
            }
            let week = {
              "周一": 1,
              "周二": 2,
              "周三": 3,
              "周四": 4,
              "周五": 5,
              "周六": 6,
              "周日": 7
            }
            console.log(period[item.period], item.period);
            item.period = period[item.period];
            item.week = week[item.week];
            data.push(item)
          }
        })
      })
    }
    console.log(data);
    this.setData({
      date: date,
      class: data
    })
  },
  onShow() {
    this.getClass()
  },
  onChangeWeek(weekSwitch) {
    let week = this.data.week;
    let weekMs = '';
    switch (weekSwitch) {
      case 'add':
        weekMs = (1000 * 60 * 60 * 24 * 7) * (week + 1);
        this.getClass(util.formatTime(new Date((new Date().getTime() + weekMs))))
        this.setData({
          week: week + 1,
        })
        break;
      case 'moit':
        weekMs = (1000 * 60 * 60 * 24 * 7) * (week - 1);
        this.getClass(util.formatTime(new Date((new Date().getTime() + weekMs))))
        this.setData({
          week: week - 1,
        })
        break;
    }
  },
  touchStart: function (e) {
    startX = e.touches[0].pageX; // 获取触摸时的原点
    moveFlag = true;
  },
  touchMove: function (e) {                   // 触摸移动事件
    endX = e.touches[0].pageX; // 获取触摸时的原点
    if (moveFlag) {
      if (endX - startX > 50) {
        moveFlag = false;
        this.onChangeWeek('moit')
      }
      if (startX - endX > 50) {
        moveFlag = false;
        this.onChangeWeek('add')
      }
    }
  },
  touchEnd: function (e) {                    // 触摸结束事件
    moveFlag = true; // 回复滑动事件
  },

})