// pages/adpage/adpage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src: '../../images/adbanner.jpg',
    mode: 'aspectFit',
    msg0:"免费领取",
    msg_red: "1对1陪练",
    msg2: "体验课程",
    inputInfoChildName:"请输入您家小演奏家的名字",
    inputInfoPhoneNumber:"请输入您的手机号码",
    btnMsgGetClass:"立即领取体验课",
    introTeacherTitle:"师资力量",
    introTeacherContent:"陪练老师均为专业音乐学院/师范音乐学院/具备丰富经验，良好教育背景，懂音乐，爱孩子。",
    promissInfoTitle:"我们的承诺",
    servicePromissTitle:"服务承诺",
    servicePromissContent:"因材施教，根据孩子特点与进度，匹配不同程度陪练老师，专业1对1陪练，全程提供五星服务，为孩子的提高和进步保驾护航",
    refundPromissTitle:"退款承诺",
    refundPromissContent:"对课程不满意，对陪练老师不满意，对孩子进步效果不满意,随时可以提出退款要求",
    callThePhone:"客服热线：13465912653 (点击)",
    btnGetClassBottom:"免费领取体验课程"
  },
  // 客服热线：13465912653(点击)
  callMe:function(){
    wx.makePhoneCall({
      phoneNumber: '13465912653' 
    })
  },
  //点击底部免费领取课程按钮返回顶部
  backToTop:function(){
    wx.pageScrollTo({
      scrollTop: 0,
      duration:200
    })
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
  
  }
})