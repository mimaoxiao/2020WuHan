// pages/Test/Test5/Test5.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    body1: 0,
    body2: 0,
    body3: 0,
    body4: 0,
    body5: 0,
    body6: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      body1: app.globalData.body1,
      body2: app.globalData.body2,
      body3: app.globalData.body3,
      body4: app.globalData.body4,
      body5: app.globalData.body5,
      body6: app.globalData.body6,
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
    app.globalData.body1 = this.data.body1;
    app.globalData.body2 = this.data.body2;
    app.globalData.body3 = this.data.body3;
    app.globalData.body4 = this.data.body4;
    app.globalData.body5 = this.data.body5;
    app.globalData.body6 = this.data.body6;
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
  Cbody1: function (e) {
    this.setData({
      body1: e.detail.value
    })
  },
  Cbody2: function (e) {
    this.setData({
      body2: e.detail.value
    })
  },
  Cbody3: function (e) {
    this.setData({
      body3: e.detail.value
    })
  },
  Cbody4: function (e) {
    this.setData({
      body4: e.detail.value
    })
  },
  Cbody5: function (e) {
    this.setData({
      body5: e.detail.value
    })
  },
  Cbody6: function (e) {
    this.setData({
      body6: e.detail.value
    })
  },
})