// pages/bmiresult/bmiresult.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bmi: '',
    suggest: "您目前的体重属于正常范围，请勿盲目减肥，规律的有氧运动能够帮助你保持良好体型。",
    suggest_low: "您目前的体重偏低，适当增加碳水化合物，蛋白质和脂肪的摄入量，适量运动。",
    suggest_high: "您目前的体重偏高，适当控制碳水化合物，蛋白质和脂肪的摄入量，适量运动。",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var bmi = options.bmi
    var suggest = ''
    if (bmi < 18.5) {
      bmi = bmi + " (体重过低)"
      suggest = this.data.suggest_low
    } else if (bmi < 23.9) {
      bmi = bmi + " (正常范围)"
      suggest = this.data.suggest
    } else if (bmi < 27.9) {
      bmi = bmi + " (体重超重啦)"
      suggest = this.data.suggest_high
    } else if (bmi > 27.9){
      bmi = bmi + " (肥胖)"
      suggest = this.data.suggest_high
    } else if (bmi == ''){
      
    }
    this.setData({
      bmi: bmi,
      suggest: suggest
    })
  },
  recalculate: function() {
    wx.navigateBack({

    })
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
    return {
      title: '我刚测过身体BMI指数，你不来测一下？',
      path: '/pages/bmi/bmi'
    }
  }
})