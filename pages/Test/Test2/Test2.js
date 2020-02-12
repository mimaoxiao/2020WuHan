// pages/Test/Test2/Test2.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    b1: 0,
    b2: 0,
    b3: 0,
    b4: 0,
    b5: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      b1: app.globalData.b1,
      b2: app.globalData.b2,
      b3: app.globalData.b3,
      b4: app.globalData.b4,
      b5: app.globalData.b5,
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
    app.globalData.b1 = this.data.b1;
    app.globalData.b2 = this.data.b2;
    app.globalData.b3 = this.data.b3;
    app.globalData.b4 = this.data.b4;
    app.globalData.b5 = this.data.b5;
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
      url: '../Test3/Test3'
    })
  },
  Prev: function () {
    wx.redirectTo({
      url: '../Test1/Test1'
    })
  },
  Cb1:function(e){
    this.setData({
      b1:e.detail.value
    })
  },
  Cb2: function (e) {
    this.setData({
      b2: e.detail.value
    })
  },
  Cb3: function (e) {
    this.setData({
      b3: e.detail.value
    })
  },
  Cb4: function (e) {
    this.setData({
      b4: e.detail.value
    })
  },
  Cb5: function (e) {
    this.setData({
      b5: e.detail.value
    })
  },
})