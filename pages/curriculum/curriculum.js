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
    left: ['8:00', '9:10', '10:20', '11:30', '13:00', '14:10', '15:20', '16:30', '17:45', '18:55', '20:05'],
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
    this.setData({
      date: util.formatTime(new Date())
    })
  },

  onReady() {

  },

  onShow() {

  },
  onChangeWeek(weekSwitch) {
    let week = this.data.week;
    let weekMs = '';
    switch (weekSwitch) {
      case 'add':
        weekMs = (1000*60*60*24*7)*(week + 1);
        this.setData({
          week: week + 1,
          date: util.formatTime(new Date((new Date().getTime() + weekMs)))
        })
        break;
      case 'moit':
        weekMs = (1000*60*60*24*7)*(week - 1);
        this.setData({
          week: week - 1,
          date: util.formatTime(new Date((new Date().getTime() + weekMs)))
        })
        break;
      default:
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