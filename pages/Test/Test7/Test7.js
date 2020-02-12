// pages/Test/Test7/Test7.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    g1: false,
    g2: false,
    g3: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      g1: app.globalData.g1,
      g2: app.globalData.g2,
      g3: app.globalData.g3,
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
    app.globalData.g1 = this.data.g1;
    app.globalData.g2 = this.data.g2;
    app.globalData.g3 = this.data.g3;
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
      url: '../Test8/Test8'
    })
  },
  Prev: function () {
    wx.redirectTo({
      url: '../Test6/Test6'
    })
  },
  Cg1: function (e) {
    this.setData({
      g1: e.detail.value
    })
  },
  Cg2: function (e) {
    this.setData({
      g2: e.detail.value
    })
  },
  Cg3: function (e) {
    this.setData({
      g3: e.detail.value
    })
  },
})