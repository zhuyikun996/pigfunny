// pages/bmi/bmi.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    height: '',
    weight: '',
    bmi: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  // 获得身高数据
  getHeight: function(e) {
    this.setData({
      height: e.detail.value
    })
  },
  // 获得体重数据
  getWeight: function(e) {
    this.setData({
      weight: e.detail.value
    })
  },
  // 计算BMI
  calculate: function() {
    var height = this.data.height
    var weight = this.data.weight
    var bmi = ''
    if (height == '' || weight == ''){
      wx.showToast({
        title: '请填写身高，体重',
        icon:"none",
        duration:3000
      })
    }else{
      if (height<120){
        wx.showModal({
          title: '提示',
          content: 'BMI指数有效身高应该大于120cm哦',
          showCancel:false
        })
      } else if (weight<30){
        wx.showModal({
          title: '提示',
          content: 'BMI指数有效体重应该大于30kg哦',
          showCancel: false
        })
      }else{
        var height_m = height / 100
        bmi = (weight / (height_m * height_m)).toFixed(1)
        wx.navigateTo({
          url: '../../pages/bmiresult/bmiresult?bmi=' + bmi,
        })
      }
    
    }

  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})