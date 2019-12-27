// pages/list/list.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current: 'tab1',
    picurl: "../../image/btn.png",
    isShow1: "show",
    isShow2: "hide",
    isShow3: "hide",
    isShow4: "hide",
    value1: null,
    value2: null,
    value3: null,
    value4: null,
    value5: null,
    commodity: {
      Id: "",
      Title: null,
      Price: "",
      SalePrice: "",
      Total: "",
      ImgUrl: "",
      Describe: ""
    },
    list: []
  },
  setValue: function(e) {
    let key = `${e.target.id}`;
    this.setData({
      [key]: e.detail.detail.value
    });
  },
  handleChange({
    detail
  }) {
    var tab = detail.key;
    if (tab == "tab1") {
      this.data.isShow1 = "show";
      this.data.isShow2 = "hide";
      this.data.isShow3 = "hide";
      this.data.isShow4 = "hide";
    }
    if (tab == "tab2") {
      this.data.isShow1 = "hide";
      this.data.isShow2 = "show";
      this.data.isShow3 = "hide";
      this.data.isShow4 = "hide";
    }
    if (tab == "tab3") {
      this.data.isShow1 = "hide";
      this.data.isShow2 = "hide";
      this.data.isShow3 = "show";
      this.data.isShow4 = "hide";
    }
    if (tab == "tab4") {
      this.data.isShow1 = "hide";
      this.data.isShow2 = "hide";
      this.data.isShow3 = "hide";
      this.data.isShow4 = "show";
    }
    this.setData({
      current: detail.key,
      isShow1: this.data.isShow1,
      isShow2: this.data.isShow2,
      isShow3: this.data.isShow3,
      isShow4: this.data.isShow4,
    });
  },
  showok: function() {
    wx.showToast({
      title: '成功',
      icon: 'success',
      duration: 2000
    })
  },
  showfail: function() {
    wx.showToast({
      title: '失败',
      icon: 'fail',
      duration: 2000
    })
  },
  Save: function() {
    this.data.commodity.Title = this.data.value1;
    this.data.commodity.Price = this.data.value2;
    this.data.commodity.SalePrice = this.data.value3;
    this.data.commodity.ImgUrl = this.data.serverPicUrl;
    this.data.commodity.Total = this.data.value4;
    this.data.commodity.Describe = this.data.value5;
    var that = this;
    wx.request({
      //项目的真正接口，通过字符串拼接方式实现
      url: app.globalData.requestUrl + "Main/AddCommodity",
      data: this.data.commodity,
      method: 'POST',
      success: function(res) {
        console.log(res)
        //参数值为res.data,直接将返回的数据传入
        that.showok();
        that.resetValue();
      },
      fail: function(e) {
        console.log(e)
        that.showfail();
      },
    });
  },
  resetValue: function() {
    this.setData({
      picurl: "../../image/btn.png",
      serverPicUrl:"",
      value1: null,
      value2: null,
      value3: null,
      value4: null,
      value5: null
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  uploadImg() {
    var that = this;
    wx.chooseImage({
      count: 3, // 最多可以选择的图片张数，默认9
      sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
      sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
      success: function(res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths;
        for (var i = 0; i < tempFilePaths.length; i++) {
          that.data.picurl = tempFilePaths[i];
        }
        console.log(that.data.picurl);
        that.setData({
          picurl: that.data.picurl
        })
        wx.uploadFile({
          url: app.globalData.requestUrl + 'UploadFile/SavePicByUrl',
          filePath: tempFilePaths[0],
          header: {
            "Content-Type": "multipart/form-data"
          },
          method: "POST",
          name: 'file',
          success: function(value) {
            console.log(value); //接口返回网络路径
            that.setData({
              serverPicUrl: value.data
            })
          }
        })
      },
    });
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
    var that = this;
    wx.request({
      //项目的真正接口，通过字符串拼接方式实现
      url: app.globalData.requestUrl + "Main/GetCommodityList",
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