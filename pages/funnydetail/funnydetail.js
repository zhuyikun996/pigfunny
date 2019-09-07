// pages/funnydetail/funnydetail.js
let interstitialAd = null
Page({

    /**
     * 页面的初始数据
     */
    data: {
        funnydata: "",
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        var funnydata = JSON.parse(options.funnydata)
        this.setData({
                funnydata: funnydata
            })
            // console.log("funnydata-detail" + JSON.stringify(funnydata))
            // 在页面onLoad回调事件中创建插屏广告实例
        // if (wx.createInterstitialAd) {
        //     interstitialAd = wx.createInterstitialAd({
        //         adUnitId: 'adunit-8a4ac710d21f9f5f'
        //     })
        // }
        // 在适合的场景显示插屏广告
        // if (interstitialAd) {
        //     interstitialAd.show().catch((err) => {
        //         console.error(err)
        //     })
        // }
    },
    goBackHome: function() {
        wx.reLaunch({
            url: '../../pages/funny/funny'
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
            title: "笑死我了，我不行了",
        }
    }
})