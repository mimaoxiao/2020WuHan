//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    a1:-1,
    a2:"",
    a3:"",
    b1:0,
    b2:0,
    b3:0,
    b4:0,
    b5:0,
    c1:0,
    c2:0,
    c3:0,
    c4:0,
    d1:0,
    d2:0,
    e1:0,
    e2:0,
    e3:0,
    e4:0,
    e5:0,
    e6:0,
    f1:0,
    f2:0,
    g1:false,
    g2:false,
    g3:false,
    h1:false,
    h2:false,
    h3:false,
    i1:false,
    i2:false,
    j1:false,
    j2:false,
    j3:false,
    j4:false,
    j5:false,
    j6:false,
    j7:false,
    k1:false,
    result:1,
  }
})