// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current:"",
    isShow:""
  },

  ChangeBtn1: function () {
    this.setData({
      current: "list"
    });
    this.selectComponent("#list").onShow();
    this.hideOther();
  }, 
  ChangeBtn2: function () {
    console.log("123");
    this.setData({
      current: "edit"
    });
    this.selectComponent("#edit").onShow();
    this.hideOther();
  },
  hideOther:function(){
    this.setData({
      isShow: "hide"
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("my");
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
    console.log("order");
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