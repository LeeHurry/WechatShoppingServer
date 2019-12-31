//app.js
App({
  
  onLaunch: function() {
    console.log('App Launch')
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    var that = this;
    // 登录
    wx.login({
      success(res) {
        if (res.code) {
          console.log(res);
          //发起网络请求
          wx.request({
            url: that.globalData.requestUrl +'Login/GetOpenId?code='+res.code,
            data: {
              code: res.code
            },
            success(res) {
              console.log(res.data);
              that.globalData.openid = res.data;
            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo
              console.info(res.userInfo);

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo:null,
    openid:"",
    //requestUrl:"http://10.102.142.201:5005/api/",
    //imageUrl: "http://10.102.142.201:5005/",
    requestUrl: "https://www.kikiestore.com/api/",
    imageUrl: "https://www.kikiestore.com/",
    //requestUrl: "http://localhost:5000/api/",
  },

  onShow: function() {
    console.log('App Show')
  },
  onHide: function() {
    console.log('App Hide')
  }
})