// pages/Test/Test7-Medicine/Test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    medicine1: false,
    medicine2: false,
    medicine3: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      medicine1: app.globalData.medicine1,
      medicine2: app.globalData.medicine2,
      medicine3: app.globalData.medicine3,
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
    app.globalData.medicine1 = this.data.medicine1;
    app.globalData.medicine2 = this.data.medicine2;
    app.globalData.medicine3 = this.data.medicine3;
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
      url: '../Test8-Action/Test'
    })
  },
  Prev: function () {
    wx.redirectTo({
      url: '../Test6-Hot/Test'
    })
  },
  Cmedicine1: function (e) {
    this.setData({
      medicine1: e.detail.value
    })
  },
  Cmedicine2: function (e) {
    this.setData({
      medicine2: e.detail.value
    })
  },
  Cmedicine3: function (e) {
    this.setData({
      medicine3: e.detail.value
    })
  },
})