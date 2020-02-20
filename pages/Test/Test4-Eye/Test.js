// pages/Test/Test4/Test4.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    eye1: 0,
    eye2: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      eye1: app.globalData.eye1,
      eye2: app.globalData.eye2,
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
    app.globalData.eye1 = this.data.eye1;
    app.globalData.eye2 = this.data.eye2;
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
      url: '../Test5-Body/Test'
    })
  },
  Prev: function () {
    wx.redirectTo({
      url: '../Test3-Stomach/Test'
    })
  },
  Ceye1: function (e) {
    this.setData({
      eye1: e.detail.value
    })
  },
  Ceye2: function (e) {
    this.setData({
      eye2: e.detail.value
    })
  },
})