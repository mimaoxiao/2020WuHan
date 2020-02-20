// pages/Test/Test3/Test3.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    stomach1: 0,
    stomach2: 0,
    stomach3: 0,
    stomach4: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      stomach1: app.globalData.stomach1,
      stomach2: app.globalData.stomach2,
      stomach3: app.globalData.stomach3,
      stomach4: app.globalData.stomach4,
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
    app.globalData.stomach1 = this.data.stomach1;
    app.globalData.stomach2 = this.data.stomach2;
    app.globalData.stomach3 = this.data.stomach3;
    app.globalData.stomach4 = this.data.stomach4;
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
      url: '../Test4-Eye/Test'
    })
  },
  Prev: function () {
    wx.redirectTo({
      url: '../Test2-Breath/Test'
    })
  },
  Cstomach1: function (e) {
    this.setData({
      stomach1: e.detail.value
    })
  },
  Cstomach2: function (e) {
    this.setData({
      stomach2: e.detail.value
    })
  },
  Cstomach3: function (e) {
    this.setData({
      stomach3: e.detail.value
    })
  },
  Cstomach4: function (e) {
    this.setData({
      stomach4: e.detail.value
    })
  },
})