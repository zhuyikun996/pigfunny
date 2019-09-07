// pages/reconcile/reconcile.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mycardNumber:0,
    src: '../../images/titleIntro.png',
    mode: 'widthFix',
    myCardNumber:0,
    use1Card:",用1张"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var mycardNumber = options.mycardNumber;
    
    if (mycardNumber == 0){
      this.setData({
        use1Card:""
      })
    }
     
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
    return{
      title:"一张和好卡",
      desc:"",
      path:'/pages/accept/accept'
    }
  },
  /**
   * 使用和好卡
   */
  useMyCard: function (res){
    //获取用户昵称
    const userInfo = res.detail.userInfo;//作为用户唯一标识
    var nickName = userInfo.nickName;
    wx.setStorageSync("nickName", nickName);
    var myCardNumber = this.data.myCardNumber;
    if (myCardNumber == 0){
      wx.showToast({
        icon:"none",
        title:"暂时还没有人给您发过和好卡",
      })
    }else{
      
    }
  }
})