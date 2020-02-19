import * as echarts from './ec-canvas/echarts';

const app = getApp();
let countlist = [];
let dangerlist = [];
Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    userload:'UserLoad.png',
    dialogShow:false
  },
  onLoad: function () {
    let that = this;
    /*wx.request({
      url: 'https://lab.ahusmart.com/nCoV/api/overall?latest=0',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        let ar = res.data.results;
        let count = ar.length - 1;
        for (let i = 0; i < 5; i++) {
          dangerlist.push(ar[count].suspectedCount);
          countlist.push(ar[count].confirmedCount);
          count -= 50;
        }
        that.chartInit();
      }
    })*/

    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  chartInit() {
    let ch = this.selectComponent('#mychart-dom-line');
    ch.init((canvas, width, height) => {
      const scaChart = echarts.init(canvas, null, {
        width: width,
        height: height
      });
      scaChart.setOption(this.getOption());
      return scaChart;
    });
  },
  getOption() {
    return {
      color: ["#37A2DA", "#67E0E3"],
      legend: {
        data: ['疑似', '确诊'],
        top: 0,
        left: 'center',
        z: 100,
        icon: 'rect',
        selectedMode: false,

      },
      grid: {
        top: 50,
        bottom: 0
      },
      tooltip: {
        show: true,
        trigger: 'axis'
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['day1', 'day2', 'day3', 'day4', 'day5'],
        show: false
      },
      yAxis: {
        x: 'center',
        type: 'value',
        splitLine: {
          lineStyle: {
            type: 'dashed'
          }
        },
        show: false
      },
      series: [{
        name: '疑似',
        type: 'line',
        data: dangerlist,
        itemStyle: {
          normal: {
            areaStyle: {
              type: 'default',
              color: '#37A2DA',
            },
            //以及在折线图每个日期点顶端显示数字
            label: {
              show: true,
              color: 'black',
              fontSize: 11,
            },
          },
        },
      },
      {
        name: '确诊',
        type: 'line',
        data: countlist,
        itemStyle: {
          normal: {
            areaStyle: {
              type: 'default',
              color: '#67E0E3',
            },
            //以及在折线图每个日期点顶端显示数字
            label: {
              show: true,
              color: 'black',
              fontSize: 11,
            },
          },
        },
      }],
    };
  },
  ToHistory:function(){
    wx.navigateTo({
      url: '../History/History'
    })
  },
  ToTest: function () {
    wx.navigateTo({
      url: '../Test/Test1/Test1'
    })
  },
  ChartStop:function(){

  },
  GetDialog(){
    this.setData({
      dialogShow: true
    })
  },
  tapDialogButton(){
    this.setData({
      dialogShow:false
    })
  }
})
