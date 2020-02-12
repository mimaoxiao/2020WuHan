// pages/Test/Test5/Test5.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    e1: 0,
    e2: 0,
    e3: 0,
    e4: 0,
    e5: 0,
    e6: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      e1: app.globalData.e1,
      e2: app.globalData.e2,
      e3: app.globalData.e3,
      e4: app.globalData.e4,
      e5: app.globalData.e5,
      e6: app.globalData.e6,
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
    app.globalData.e1 = this.data.e1;
    app.globalData.e2 = this.data.e2;
    app.globalData.e3 = this.data.e3;
    app.globalData.e4 = this.data.e4;
    app.globalData.e5 = this.data.e5;
    app.globalData.e6 = this.data.e6;
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
      url: '../Test6/Test6'
    })
  },
  Prev: function () {
    wx.redirectTo({
      url: '../Test4/Test4'
    })
  },
  Ce1: function (e) {
    this.setData({
      e1: e.detail.value
    })
  },
  Ce2: function (e) {
    this.setData({
      e2: e.detail.value
    })
  },
  Ce3: function (e) {
    this.setData({
      e3: e.detail.value
    })
  },
  Ce4: function (e) {
    this.setData({
      e4: e.detail.value
    })
  },
  Ce5: function (e) {
    this.setData({
      e5: e.detail.value
    })
  },
  Ce6: function (e) {
    this.setData({
      e6: e.detail.value
    })
  },
})