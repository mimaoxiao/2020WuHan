// pages/Test/Test7-scan/Test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scan1: false,
    scan2: false,
    scan3: false,
    scan4: false,
    scan5: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      scan1: app.globalData.scan1,
      scan2: app.globalData.scan2,
      scan3: app.globalData.scan3,
      scan4: app.globalData.scan4,
      scan5: app.globalData.scan5,
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
    app.globalData.scan1 = this.data.scan1;
    app.globalData.scan2 = this.data.scan2;
    app.globalData.scan3 = this.data.scan3;
    app.globalData.scan4 = this.data.scan4;
    app.globalData.scan5 = this.data.scan5;
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
      url: '../../Loading/Loading'
    })
  },
  Prev: function () {
    wx.redirectTo({
      url: '../Test11-Touch/Test'
    })
  },
  Cscan1: function (e) {
    this.setData({
      scan1: e.detail.value
    })
  },
  Cscan2: function (e) {
    this.setData({
      scan2: e.detail.value
    })
  },
  Cscan3: function (e) {
    this.setData({
      scan3: e.detail.value
    })
  },
  Cscan4: function (e) {
    this.setData({
      scan4: e.detail.value
    })
  },
  Cscan5: function (e) {
    this.setData({
      scan5: e.detail.value
    })
  },
})