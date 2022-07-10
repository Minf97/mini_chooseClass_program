// pages/chooseClass/chooseClass.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '',
    arr: [],
    List: [{
        title: '美学工作室',
        label: [{
            head: '周三',
            children: [{
                date: '17:30-19:00',
                class: '基础4-5岁 （1次/周）'
              },
              {
                date: '19:05-20:35',
                class: '提高5-6岁 （1次/周）'
              },
            ]
          },
          {
            head: '周四',
            children: [{
              date: '17:30-19:00',
              class: '基础4-5岁 （1次/周）'
            }]
          },
          {
            head: '周五',
            children: [{
              date: '19:05-20:35',
              class: '提高5-6岁 （1次/周）'
            }, ]
          },
          {
            head: '周六',
            children: [{
              date: '17:30-19:00',
              class: '基础4-5岁 （1次/周）'
            }, ]
          },
          {
            head: '周日',
            children: [{
              date: '19:05-20:35',
              class: '提高5-6岁 （1次/周）'
            }, ]
          }
        ]
      },
      {
        title: '创想大师班',
        label: [{
            head: '周四',
            children: [{
              date: '17:30-19:00',
              class: '基础4-5岁 （1次/周）'
            }]
          },
          {
            head: '周五',
            children: [{
              date: '19:05-20:35',
              class: '提高5-6岁 （1次/周）'
            }, ]
          },
          {
            head: '周六',
            children: [{
              date: '17:30-19:00',
              class: '基础4-5岁 （1次/周）'
            }, ]
          },
          {
            head: '周日',
            children: [{
              date: '19:05-20:35',
              class: '提高5-6岁 （1次/周）'
            }, ]
          }
        ]
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      title: options.title
    });
    this.choose();
  },

  choose: function () {
    var that = this;
    var list = that.data.List;
    var j = 0;
    while(j < list.length){
      if(that.data.title == list[j].title){
        var arr = list[j];
        that.setData({
          arr:arr
        });
        break;
      };
      j++;
    }
  },

  naviToApply:function(){

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})