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
  submitOrder:function(e){
    var that = this ;
    console.log(e.detail.userInfo)
    wx.request({
      url: app.globalData.requestUrl + 'Order/CreateOrder', //仅为示例，并非真实的接口地址
      data: {
        OpenId: app.globalData.openid,
        CommodityId:that.data.id,
        Count: that.data.buy,
        NickName: e.detail.userInfo.nickName
      },
      method:"POST",
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)
        if(res.data.code == "10000"){
          wx.showToast({
            title: '成功，可在订单查看详情',
            icon: 'success',
            duration: 2000
          })
        }
      }
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