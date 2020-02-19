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
    age: -1,
    sexual: "",
    addressB: "",
    addressS: "",
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
    app.globalData.age = this.data.age;
    app.globalData.sexual = this.data.sexual;
    app.globalData.addressB = this.data.addressB;
    app.globalData.addressS = this.data.addressS;
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
      sexual:"M"
    })
  },
  choosewoman: function () {
    let that = this;
    that.setData({
      manSize: "50rpx",
      womanSize: "75rpx",
      sexual:"W"
    })
  },
  Cage: function (e) {
    this.setData({
      age: e.detail.value
    })
  },
  CaddressB: function (e) {
    this.setData({
      addressB: e.name
    })
  },
  CaddressS: function (e) {
    this.setData({
      addressS: e.name
    })
  },
})