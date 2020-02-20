// pages/Test/Test9/Test9.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    action1: false,
    action2: false,
    action3: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      action1: app.globalData.action1,
      action2: app.globalData.action2,
      action3: app.globalData.action3,
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
    app.globalData.action3 = this.data.action3;
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
      url: '../Test9-Around/Test'
    })
  },
  Prev: function () {
    wx.redirectTo({
      url: '../Test7-Medicine/Test'
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
  Caction3: function (e) {
    this.setData({
      action3: e.detail.value
    })
  },
})