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
    age: -1,
    sexual: "",
    addressB: "",
    addressS: "",
    breath1:0,
    breath2:0,
    breath3:0,
    breath4:0,
    breath5:0,
    stomach1:0,
    stomach2:0,
    stomach3:0,
    stomach4:0,
    eye1:0,
    eye2:0,
    body1:0,
    body2:0,
    body3:0,
    body4:0,
    body5:0,
    body6:0,
    f1:0,
    f2:0,
    hot1:false,
    hot2:false,
    hot3:false,
    h1:false,
    h2:false,
    h3:false,
    action1:false,
    action2:false,
    touch1:false,
    touch2:false,
    touch3:false,
    touch4:false,
    touch5:false,
    touch6:false,
    touch7:false,
    people1:false,
    result:1,
  }
})