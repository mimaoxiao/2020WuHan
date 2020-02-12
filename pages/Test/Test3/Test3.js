// pages/Test/Test3/Test3.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    c1: 0,
    c2: 0,
    c3: 0,
    c4: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      c1: app.globalData.c1,
      c2: app.globalData.c2,
      c3: app.globalData.c3,
      c4: app.globalData.c4,
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
    app.globalData.c1 = this.data.c1;
    app.globalData.c2 = this.data.c2;
    app.globalData.c3 = this.data.c3;
    app.globalData.c4 = this.data.c4;
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
      url: '../Test4/Test4'
    })
  },
  Prev: function () {
    wx.redirectTo({
      url: '../Test2/Test2'
    })
  },
  Cc1: function (e) {
    this.setData({
      c1: e.detail.value
    })
  },
  Cc2: function (e) {
    this.setData({
      c2: e.detail.value
    })
  },
  Cc3: function (e) {
    this.setData({
      c3: e.detail.value
    })
  },
  Cc4: function (e) {
    this.setData({
      c4: e.detail.value
    })
  },
})