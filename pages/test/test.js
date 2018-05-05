Page({
  data: {
    userName: '',
    userPwd: ""
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
  loginBtnClick: function (e) {
    console.log("用户名：" + this.data.userName + " 密码：" + this.data.userPwd);
  }
})