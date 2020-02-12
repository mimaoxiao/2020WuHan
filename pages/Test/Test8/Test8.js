// pages/Test/Test8/Test8.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    h1: false,
    h2: false,
    h3: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      h1: app.globalData.h1,
      h2: app.globalData.h2,
      h3: app.globalData.h3,
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
    app.globalData.h1 = this.data.h1;
    app.globalData.h2 = this.data.h2;
    app.globalData.h3 = this.data.h3;
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
      url: '../Test9/Test9'
    })
  },
  Prev: function () {
    wx.redirectTo({
      url: '../Test7/Test7'
    })
  },
  Ch1: function (e) {
    this.setData({
      h1: e.detail.value
    })
  },
  Ch2: function (e) {
    this.setData({
      h2: e.detail.value
    })
  },
  Ch3: function (e) {
    this.setData({
      h3: e.detail.value
    })
  },
})