Page({
  data: {
    // text:"这是一个页面"
    current: 'main'
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
    this.selectComponent("#main").onShow();
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  handleChange({ detail }) {
    console.log(detail);
    this.setData({
      current: detail.key
    });
    this.selectComponent("#" + detail.key).onShow();
  }
})