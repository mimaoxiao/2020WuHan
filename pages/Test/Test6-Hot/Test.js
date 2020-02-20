// pages/Test/Test7/Test7.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hot1: false,
    hot2: false,
    hot3: false,
    hot4: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      hot1: app.globalData.hot1,
      hot2: app.globalData.hot2,
      hot3: app.globalData.hot3,
      hot4: app.globalData.hot4,
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
    app.globalData.hot1 = this.data.hot1;
    app.globalData.hot2 = this.data.hot2;
    app.globalData.hot3 = this.data.hot3;
    app.globalData.hot4 = this.data.hot4;
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
      url: '../Test7-Medicine/Test'
    })
  },
  Prev: function () {
    wx.redirectTo({
      url: '../Test5-Body/Test'
    })
  },
  Chot1: function (e) {
    this.setData({
      hot1: e.detail.value
    })
  },
  Chot2: function (e) {
    this.setData({
      hot2: e.detail.value
    })
  },
  Chot3: function (e) {
    this.setData({
      hot3: e.detail.value
    })
  },
  Chot4: function (e) {
    this.setData({
      hot4: e.detail.value
    })
  },
})