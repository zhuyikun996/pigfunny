//获取应用实例
var app = getApp()

var interval;
var varName;
var ctx = wx.createCanvasContext('canvasArcCir');

Page({
  data: {
    bottolenumber: 0,
    goNextBottle: true,
    btn_tips: '开始喝水',
    btn_disable: false, //默认按钮可按
    btn_color: '#fff',
    btn_type: 'primary'
  },
  //点击喝了一杯之后
  drawCircle: function() {
    // clearInterval(varName);
    var step = wx.getStorageSync("step")
    var timestemp = wx.getStorageSync("timestemp")
    var currentTime = Date.parse(new Date()) //获取点击按钮一瞬间的时间戳
    if (step == '') {
      step = 0
    }
    if (timestemp == '') { //时间戳为空，获取当前时间戳
      timestemp = Date.parse(new Date())
    } else { //时间戳不为空 计算一下时间差
      var second = (currentTime - timestemp) / 1000
      //如果在一分钟内连续喝两杯，就让他缓一缓
      if (second <= 60) {
        wx.showToast({
          title: '别闹，你喝这么快要干嘛？',
          icon: 'none',
          duration: 2000
        })
        this.setData({
          goNextBottle: false
        })

      } else {
        this.setData({
          goNextBottle: true
        })
      }
    }
    console.info("goNextBottle ***" + this.data.goNextBottle)

    var canGoNextBottle = this.data.goNextBottle
    if (canGoNextBottle) {
      console.info("***")
      step++
      this.drawBlueCircle(step)
      if (step < 9) {
        wx.setStorageSync("step", step)
        wx.setStorageSync("timestemp", currentTime)
        this.getCurrentBottleNumberAndChangeBtnTips() //更改btn上的提示文字
      } else {
        wx.showToast({
          title: '已经喝够8杯水啦！^_^',
          icon: 'none',
          duration: 2000
        })
      }
      console.info("step:" + step)
    }

  },
  //重置
  rest: function() {
    var that = this
    wx.showModal({
      title: '重新开始喝水？',
      content: '',
      success: function(res) {
        if (res.confirm) {
          wx.setStorageSync("step", 0)
          var currentNumber = that.getCurrentBottleNumberAndChangeBtnTips();
          that.drawBlueCircle(currentNumber)
          that.setData({
            btn_disable: false, 
            btn_type: 'primary'
          })
       
        } else {
          console.log('用户点击取消')
        }
      }
    })

  },
  //发送提醒
  remind: function(e) {
    // console.log('e.detail.formId =' + e.detail.formId)

    // var formId = e.detail.formId
    // var js_code = ''
    // wx.login({
    //   success: function(res) {
    //     if (res.code) {
    //       console.log('res.code =' + res.code)
    //       js_code = res.code
    //     } else {
    //       console.log('获取用户登录态失败！' + res.errMsg);　　　　　　
    //     }　　　　
    //   }　　
    // })

    // var touser = 'wx903b41c94035f7a9'//openId


// 需要小程序本地获取并上传服务器的字段：
    // formId
    // js_code :用于获取openId

    // var APPSECRET = 'fc5f93914971675f2a6e80ee88c3d578'
    // var openId = 'oWfb70MoTFi85-xZc9hSzb71lklM'
    // var form_id = '021FcScA1DryQe0s2Z9A1T5PcA1FcScy'
    // var template_id = 'oXcwTmBjB7pVCFzGBSmQ-iGqC0cRWCVCpQ87UVxGxoM'
    // var page = "pages/watercare/watercare"


    // var access_token = "12_V9XEtB15HHyf6NQkkZY7MyhNikHPAcTu8x4We5edvEO5GWS9CCbcWcaHMRlfyPuGXlhx4y0ADvYfYE13DXJPWIBzQr5Zvu5bLHJPYDTQEtwGaAyktFMj2LgbIMZmTo5jn3EXHeclYqacb4jwGUViABAQEF"
    // wx.request({
    //   url: 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid='+APPID+'&secret='+APPSECRET,
    //   success: function (res) {
    //     var access_token = res.data.access_token
    //     console.log('access_token=' + access_token)
    //   },
    // })

  },
  onReady: function() {
    //创建并返回绘图上下文context对象。
    var cxt_arc = wx.createCanvasContext('canvasCircle');
    cxt_arc.setLineWidth(6);
    cxt_arc.setStrokeStyle('#EBEBEB');
    cxt_arc.setLineCap('round');
    cxt_arc.beginPath();
    cxt_arc.arc(100, 100, 96, 0, 2 * Math.PI, false);
    cxt_arc.stroke();
    cxt_arc.draw();
  },
  onLoad: function(options) {

  },
  onShow: function() {
    var currentBottleNumber = this.getCurrentBottleNumberAndChangeBtnTips()
    if (currentBottleNumber != '') {
      this.drawBlueCircle(currentBottleNumber)
    }
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {
    title: '我今天已经喝了'
  },
  getCurrentBottleNumberAndChangeBtnTips: function() {
    var currentBottleNumber = wx.getStorageSync("step")
    if (currentBottleNumber == 0) {
      this.setData({
        btn_tips: '开始喝水'
      })
    }
    if (currentBottleNumber != '') {
      this.setData({
        btn_tips: '再喝一杯'
      })
    }
    if (currentBottleNumber == 8) {
      this.setData({
        btn_tips: '恭喜你，今天喝够8杯水啦^_^',
        btn_disable: true, //修改按钮状态，调整为不可按
        btn_type: 'warn'
      })
    }
    return currentBottleNumber
  },
  //绘制蓝色圆圈，代表已经喝水的进度
  drawBlueCircle: function(step) {
    var startAngle = 1.5 * Math.PI,
      endAngle = 0;
    var animation_interval = 1000,
      n = 8;
    endAngle = step * 2 * Math.PI / 8 + 1.5 * Math.PI;
    this.drawArc(startAngle, endAngle);
    //更新圆圈中表示喝水杯数的数字
    this.setData({
      bottolenumber: step
    })
    var tips = ''
    if (step == 8) {
      tips = "完成"
    } else {
      tips = step
    }
    this.setData({
      bottolenumber: tips
    })
  },
  //画圈的函数
  drawArc: function(s, e) {
    ctx.setFillStyle('white');
    ctx.clearRect(0, 0, 200, 200);
    ctx.draw();
    var x = 100,
      y = 100,
      radius = 96;
    ctx.setLineWidth(5);
    ctx.setStrokeStyle('#73b8e2');
    ctx.setLineCap('round');
    ctx.beginPath();
    ctx.arc(x, y, radius, s, e, false);
    ctx.stroke()
    ctx.draw()
  }
})