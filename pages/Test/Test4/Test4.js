// pages/Test/Test4/Test4.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    d1: 0,
    d2: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      d1: app.globalData.d1,
      d2: app.globalData.d2,
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
    app.globalData.d1 = this.data.d1;
    app.globalData.d2 = this.data.d2;
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
      url: '../Test5/Test5'
    })
  },
  Prev: function () {
    wx.redirectTo({
      url: '../Test3/Test3'
    })
  },
  Cd1: function (e) {
    this.setData({
      d1: e.detail.value
    })
  },
  Cd2: function (e) {
    this.setData({
      d2: e.detail.value
    })
  },
})