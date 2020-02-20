// pages/Test/Test10/Test10.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    touch1: false,
    touch2: false,
    touch3: false,
    touch4: false,
    touch5: false,
    touch6: false,
    touch7: false,
    touch8: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      touch1: app.globalData.touch1,
      touch2: app.globalData.touch2,
      touch3: app.globalData.touch3,
      touch4: app.globalData.touch4,
      touch5: app.globalData.touch5,
      touch6: app.globalData.touch6,
      touch7: app.globalData.touch7,
      touch8: app.globalData.touch8,
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
    app.globalData.touch1 = this.data.touch1;
    app.globalData.touch2 = this.data.touch2;
    app.globalData.touch3 = this.data.touch3;
    app.globalData.touch4 = this.data.touch4;
    app.globalData.touch5 = this.data.touch5;
    app.globalData.touch6 = this.data.touch6;
    app.globalData.touch7 = this.data.touch7;
    app.globalData.touch8 = this.data.touch8;
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
      url: '../Test12-Scan/Test'
    })
  },
  Prev: function () {
    wx.redirectTo({
      url: '../Test10-ill/Test'
    })
  },
  Ctouch1: function (e) {
    this.setData({
      touch1: e.detail.value
    })
  },
  Ctouch2: function (e) {
    this.setData({
      touch2: e.detail.value
    })
  },
  Ctouch3: function (e) {
    this.setData({
      touch3: e.detail.value
    })
  },
  Ctouch4: function (e) {
    this.setData({
      touch4: e.detail.value
    })
  },
  Ctouch5: function (e) {
    this.setData({
      touch5: e.detail.value
    })
  },
  Ctouch6: function (e) {
    this.setData({
      touch6: e.detail.value
    })
  },
  Ctouch7: function (e) {
    this.setData({
      touch7: e.detail.value
    })
  },
  Ctouch8: function (e) {
    this.setData({
      touch8: e.detail.value
    })
  },
})