// pages/order/order.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current: 'tab1',
    isShow1:"show",
    isShow2:"hide",
    left:[],
    right:[],
    baseImgUrl: app.globalData.imageUrl
  },
  handleChange({ detail }) {
    var tab = detail.key;
    if (tab == "tab1"){
      this.data.isShow1 ="show";
      this.data.isShow2 = "hide";
    }
    if (tab == "tab2") {
      this.data.isShow1 = "hide";
      this.data.isShow2 = "show";
    }
    this.setData({
      current: detail.key,
      isShow1:this.data.isShow1,
      isShow2:this.data.isShow2
    });
  },
  handleClick:function(){
    this.setData({
      value :"234"
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("order");
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
    var that = this;
    console.log("order1");
    wx.request({
      url: app.globalData.requestUrl + "Order/GetOrderList?openid=" + app.globalData.openid,
      success(res) {
        console.log(res);
        that.setData({
          left: res.data.result.statusI_OrderList,
          right: res.data.result.statusII_OrderList
        })
      }
    })
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