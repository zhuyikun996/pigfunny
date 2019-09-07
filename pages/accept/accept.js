// pages/accept/accept.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  /**
   * 点击"勉强收下"按钮
   */
  getUserID: function (res){

    const userInfo = res.detail.userInfo;//作为用户唯一标识
    var nickName = userInfo.nickName;
    const db = wx.cloud.database(); //获取数据库
    const _ = db.command;
    const myCardNumber = db.collection('myCardNumber').add({
      data:{
        userInfo: nickName,
        myCardNumber:1
      },
      success(){
        console.log(111111);
        wx.navigateTo({
          url: '../../pages/reconcile/reconcile?mycardNumber=' + 1,
        })
      },
      fail: console.error
    })

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