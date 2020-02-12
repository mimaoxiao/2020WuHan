// pages/Test/Test6/Test6.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    f1: 0,
    f2: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      f1: app.globalData.f1,
      f2: app.globalData.f2,
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
    app.globalData.f1 = this.data.f1;
    app.globalData.f2 = this.data.f2;
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
      url: '../Test7/Test7'
    })
  },
  Prev: function () {
    wx.redirectTo({
      url: '../Test5/Test5'
    })
  },
  Cf1: function (e) {
    this.setData({
      f1: e.detail.value
    })
  },
  Cf2: function (e) {
    this.setData({
      f2: e.detail.value
    })
  },
})