Page({
  data: {
    userName: '',
    userPwd: "",

    indicatorDots:true,
    autoplay:true,
    interval:2000,//自动切换间隔时间
    duration:300,//滑动动画时长
    // background: ['demo-text-1', 'demo-text-2', 'demo-text-3']
    background: [
      { url:'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'}, 
      { url:'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg'},
      { url:'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'}],

  },
  //获取用户输入的用户名
  userNameInput: function (e) {
    this.setData({
      userName: e.detail.value
    })
  },
  passWdInput: function (e) {
    this.setData({
      userPwd: e.detail.value
    })
  },
  //获取用户输入的密码
  // loginBtnClick: function (e) {
  //   wx.request({
  //     url: 'http://mobile.weather.com.cn/data/forecast/101010100.html?_=1381891660081',
  //     success:function(res){
  //       var jsonData = res.data.result[0];
  //       console.log("jsonData：" + jsonData);
  //     }
  //   })
  // }
  loginBtnClick(){
    console.log("123")
  }
})