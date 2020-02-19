// pages/Test/Test11/Test11.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    people1: false,
    warning:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.countResult();

    this.setData({
      people1: app.globalData.people1,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    app.globalData.people1 = this.data.people1;
    this.setData({
      warning: this.countResult()
    })
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
      url: '/pages/Loading/Loading'
    })
  },
  Prev: function () {
    wx.redirectTo({
      url: '../Test10/Test10'
    })
  },
  Cpeople1: function (e) {
    this.setData({
      people1: e.detail.value
    });
    app.globalData.people1 = this.data.people1;

    this.setData({
      warning: this.countResult()
    })
  },
  countResult: function () {
    let warning = 0;
    let warn2 = 0;
    let keeping = 0;

    let cH = [];
    let cN = [];
    let cE = [];
    let hot = [];
    let nohot = [];
    let sus = [];

    cH.push(app.globalData.j1);
    cH.push(app.globalData.j2);
    cH.push(app.globalData.people1);

    cN.push(app.globalData.j3);

    cE.push(app.globalData.j1);
    cE.push(app.globalData.j2);
    cE.push(app.globalData.j3);
    cE.push(app.globalData.j4);

    hot.push(app.globalData.g1);
    hot.push(app.globalData.g2);

    nohot.push(app.globalData.b1);
    nohot.push(app.globalData.b2);
    nohot.push(app.globalData.b3);
    nohot.push(app.globalData.b4);
    nohot.push(app.globalData.b5);
    nohot.push(app.globalData.c1);
    nohot.push(app.globalData.c2);
    nohot.push(app.globalData.c3);
    nohot.push(app.globalData.c4);
    nohot.push(app.globalData.d1);
    nohot.push(app.globalData.d2);
    nohot.push(app.globalData.e1);
    nohot.push(app.globalData.e2);
    nohot.push(app.globalData.e3);
    nohot.push(app.globalData.e4);
    nohot.push(app.globalData.e5);
    nohot.push(app.globalData.e6);

    sus.push(app.globalData.g3);
    sus.push(app.globalData.f1);
    sus.push(app.globalData.f2);

    for (let x = 0; x < 3; x++) {
      if (cH[x]) {
        warning = 3;
        break;
      }
    }
    if (warning === 0) {
      for (let x = 0; x < 1; x++) {
        if (cN[x]) {
          warning = 2;
          break;
        }
      }
    }
    if (warning === 0) {
      for (let x = 0; x < 4; x++) {
        if (cE[x]) {
          warning = 1;
          break;
        }
      }
    }
    if (warning === 0) {
      for (let x = 0; x < 2; x++) {
        if (hot[x]) {
          keeping = 3;
          break;
        }
      }
      if (keeping === 0) {
        for (let x = 0; x < 17; x++) {
          if (nohot[x] == 2) {
            keeping = 2;
            break;
          }
        }
      }
      if (keeping === 0) {
        for (let x = 0; x < 17; x++) {
          if (nohot[x] == 1) {
            keeping = 1;
            break;
          }
        }
      }
      if (keeping === 0) {
        let sp = 0;
        if (sus[0]) {
          sp += 1;
        }
        if (sus[1] != 0) {
          sp += 1;
        }
        if (sus[2] != 0) {
          sp += 1;
        }
        if (sp === 3) {
          keeping = 2;
        }
        else {
          keeping = 1;
        }
      }
    }
    else {
      for (let x = 0; x < 2; x++) {
        if (hot[x]) {
          warn2 = 3;
          break;
        }
      }
      if (warn2 === 0) {
        for (let x = 0; x < 17; x++) {
          if (nohot[x] != 0) {
            warn2 = 2;
            break;
          }
        }
      }
    }

    if(warning!=0){
      app.globalData.result=warning+3;
      return true;
    }
    else{
      app.globalData.result=warn2;
      return false;
    }
  }
})