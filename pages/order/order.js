// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current: 'tab1',
    isShow1:"show",
    isShow2:"hide",
    isShow3:"hide",
  },
  handleChange({ detail }) {
    var tab = detail.key;
    if (tab == "tab1"){
      this.data.isShow1 ="show";
      this.data.isShow2 = "hide";
      this.data.isShow3 = "hide";
    }
    if (tab == "tab2") {
      this.data.isShow1 = "hide";
      this.data.isShow2 = "show";
      this.data.isShow3 = "hide";
    }
    if (tab == "tab3") {
      this.data.isShow1 = "hide";
      this.data.isShow2 = "hide";
      this.data.isShow3 = "show";
    }
    this.setData({
      current: detail.key,
      isShow1:this.data.isShow1,
      isShow2:this.data.isShow2,
      isShow3:this.data.isShow3,
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