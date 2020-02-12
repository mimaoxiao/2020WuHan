// pages/Test/Test1/Test1.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    options: [{
      city_id: '001',
      city_name: '北京'
    }, {
      city_id: '002',
      city_name: '上海'
    }, {
      city_id: '003',
      city_name: '深圳'
    }],
    manSize:"50rpx",
    womanSize:"50rpx",
    a1: -1,
    a2: "",
    a3: "",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    app.globalData.a1 = this.data.a1;
    app.globalData.a2 = this.data.a2;
    app.globalData.a3 = this.data.a3;
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
      url: '../Test2/Test2'
    })
  },
  chooseman:function(){
    let that=this;
    that.setData({
      manSize:"75rpx",
      womanSize:"50rpx",
      a2:"M"
    })
  },
  choosewoman: function () {
    let that = this;
    that.setData({
      manSize: "50rpx",
      womanSize: "75rpx",
      a2:"W"
    })
  },
  Ca1: function (e) {
    this.setData({
      a1: e.detail.value
    })
  },
  Ca3: function (e) {
    this.setData({
      a3: e.detail.value
    })
  },
})