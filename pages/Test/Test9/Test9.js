// pages/Test/Test9/Test9.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    action1: false,
    action2: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      action1: app.globalData.action1,
      action2: app.globalData.action2,
    })
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
    app.globalData.action1 = this.data.action1;
    app.globalData.action2 = this.data.action2;
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

  },
  Next: function () {
    wx.redirectTo({
      url: '../Test10/Test10'
    })
  },
  Prev: function () {
    wx.redirectTo({
      url: '../Test8/Test8'
    })
  },
  Caction1: function (e) {
    this.setData({
      action1: e.detail.value
    })
  },
  Caction2: function (e) {
    this.setData({
      action2: e.detail.value
    })
  },
})