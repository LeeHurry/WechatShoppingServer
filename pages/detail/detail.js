// pages/detail/detail.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: 0,
    entity: null,
    buy: 1,
    sum: 0,
    vprice: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    this.setData({
      id: options.id
    })
    wx.request({
      url: app.globalData.requestUrl + "Commodity/GetCommodityDetail?id=" + options.id,
      success(res) {
        console.log(res)
        var item = res.data;
        item.imgUrl = app.globalData.imageUrl + item.imgUrl;
        that.setData({
          entity: res.data,
          sum: res.data.price,
          vprice: res.data.price
        })
        console.log(that.data.entity)
      }
    })
  },
  add: function() {
    this.setData({
      buy: this.data.buy += 1,
    })
    this.sumMoney();
  },
  cut: function() {
    if (this.data.buy == 1) {

    } else {
      this.setData({
        buy: this.data.buy -= 1,
      })
      this.sumMoney();
    }
  },
  sumMoney:function(){
    this.setData({
      sum:this.data.vprice * this.data.buy
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})