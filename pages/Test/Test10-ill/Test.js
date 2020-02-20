// pages/Test/Test9/Test9.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ill1: false,
    ill2: false,
    ill3: false,
    ill4: false,
    ill5: false,
    ill6: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      ill1: app.globalData.ill1,
      ill2: app.globalData.ill2,
      ill3: app.globalData.ill3,
      ill4: app.globalData.ill4,
      ill5: app.globalData.ill5,
      ill6: app.globalData.ill6,
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
    app.globalData.ill1 = this.data.ill1;
    app.globalData.ill2 = this.data.ill2;
    app.globalData.ill3 = this.data.ill3;
    app.globalData.ill4 = this.data.ill4;
    app.globalData.ill5 = this.data.ill5;
    app.globalData.ill6 = this.data.ill6;
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
      url: '../Test11-Touch/Test'
    })
  },
  Prev: function () {
    wx.redirectTo({
      url: '../Test9-Around/Test'
    })
  },
  Cill1: function (e) {
    this.setData({
      ill1: e.detail.value
    })
  },
  Cill2: function (e) {
    this.setData({
      ill2: e.detail.value
    })
  },
  Cill3: function (e) {
    this.setData({
      ill3: e.detail.value
    })
  },
  Cill4: function (e) {
    this.setData({
      ill4: e.detail.value
    })
  },
  Cill5: function (e) {
    this.setData({
      ill5: e.detail.value
    })
  },
  Cill6: function (e) {
    this.setData({
      ill6: e.detail.value
    })
  },
})