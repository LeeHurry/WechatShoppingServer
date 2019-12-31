// pages/main/main.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: null,
    url: app.globalData.imageUrl
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.onloadData();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    this.onloadData();
  },
  showDetail: function(e) {
    console.log(e.currentTarget.id);
    wx.navigateTo({
      url: '/pages/detail/detail?id=' + e.currentTarget.id,
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    this.onloadData();
  },
  onloadData: function() {
    var that = this;
    wx.request({
      //项目的真正接口，通过字符串拼接方式实现
      url: app.globalData.requestUrl + "Main/GetMainCommodityList",
      method: 'GET',
      success: function(res) {
        console.log(res.data);
        that.setData({
          list: res.data
        });
      },
      fail: function(e) {
        console.log(e)
      },
    });
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {
    console.log('App 4')
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