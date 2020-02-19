// pages/Test/Test2/Test2.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    breath1: 0,
    breath2: 0,
    breath3: 0,
    breath4: 0,
    breath5: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      breath1: app.globalData.breath1,
      breath2: app.globalData.breath2,
      breath3: app.globalData.breath3,
      breath4: app.globalData.breath4,
      breath5: app.globalData.breath5,
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
    app.globalData.breath1 = this.data.breath1;
    app.globalData.breath2 = this.data.breath2;
    app.globalData.breath3 = this.data.breath3;
    app.globalData.breath4 = this.data.breath4;
    app.globalData.breath5 = this.data.breath5;
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
  Cbreath1:function(e){
    this.setData({
      breath1:e.detail.value
    })
  },
  Cbreath2: function (e) {
    this.setData({
      breath2: e.detail.value
    })
  },
  Cbreath3: function (e) {
    this.setData({
      breath3: e.detail.value
    })
  },
  Cbreath4: function (e) {
    this.setData({
      breath4: e.detail.value
    })
  },
  Cbreath5: function (e) {
    this.setData({
      breath5: e.detail.value
    })
  },
})