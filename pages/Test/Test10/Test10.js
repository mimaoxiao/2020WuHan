// pages/Test/Test10/Test10.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    j1: false,
    j2: false,
    j3: false,
    j4: false,
    j5: false,
    j6: false,
    j7: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      j1: app.globalData.j1,
      j2: app.globalData.j2,
      j3: app.globalData.j3,
      j4: app.globalData.j4,
      j5: app.globalData.j5,
      j6: app.globalData.j6,
      j7: app.globalData.j7,
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
    app.globalData.j1 = this.data.j1;
    app.globalData.j2 = this.data.j2;
    app.globalData.j3 = this.data.j3;
    app.globalData.j4 = this.data.j4;
    app.globalData.j5 = this.data.j5;
    app.globalData.j6 = this.data.j6;
    app.globalData.j7 = this.data.j7;
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
      url: '../Test11/Test11'
    })
  },
  Prev: function () {
    wx.redirectTo({
      url: '../Test9/Test9'
    })
  },
  Cj1: function (e) {
    this.setData({
      j1: e.detail.value
    })
  },
  Cj2: function (e) {
    this.setData({
      j2: e.detail.value
    })
  },
  Cj3: function (e) {
    this.setData({
      j3: e.detail.value
    })
  },
  Cj4: function (e) {
    this.setData({
      j4: e.detail.value
    })
  },
  Cj5: function (e) {
    this.setData({
      j5: e.detail.value
    })
  },
  Cj6: function (e) {
    this.setData({
      j6: e.detail.value
    })
  },
  Cj7: function (e) {
    this.setData({
      j7: e.detail.value
    })
  },
})