// pages/Test/Test9/Test9.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    i1: false,
    i2: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      i1: app.globalData.i1,
      i2: app.globalData.i2,
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
    app.globalData.i1 = this.data.i1;
    app.globalData.i2 = this.data.i2;
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
      url: '../Test10/Test10'
    })
  },
  Prev: function () {
    wx.redirectTo({
      url: '../Test8/Test8'
    })
  },
  Ci1: function (e) {
    this.setData({
      i1: e.detail.value
    })
  },
  Ci2: function (e) {
    this.setData({
      i2: e.detail.value
    })
  },
})