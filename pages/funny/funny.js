var util = require("../../utils/util.js")
let videoAd = null;

Page({

    /**
     * 页面的初始数据
     */
    data: {
        itemArray: [],
        index: 0, //默认拉取第1页
        hiddenAd: true
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        var that = this
            // that.loadFunnyList('picdata', that.data.index); //第1次拉取db中的数据
        that.getPicDataFromDB(that.data.index);
        //实例化广告
        videoAd = wx.createRewardedVideoAd({
            adUnitId: 'adunit-da9fd36ace6246c6'
        })
        videoAd.onError(err => {
            console.log(err)
        })
    },
    /**
     * 利用云函数拉取数据库数据
     */
    getPicDataFromDB: function(i) {
        var that = this;
        var resArray = that.data.itemArray
        wx.cloud.callFunction({
            name: 'runDB',
            data: {
                type: "get", //指定操作是get  
                db: "newpicdata", //指定操作的数据表
                skip: 0,
                limit: 0
            },
            success: res => {
                // console.log(i + '[云函数] 获取picdata数据库信息：' + JSON.stringify(res.result.data))
                var shufferedArr = util.shuffle(res.result.data)
                if (shufferedArr.length > 0) {
                    for (let j = 0; j < shufferedArr.length; j++) {
                        resArray.push(shufferedArr[j])
                    }
                    that.setData({
                        itemArray: resArray,
                    })
                } else {
                    wx.showToast({
                        title: '余粮不够了~明天再来试试吧~',
                        icon: 'none',
                        duration: 2000
                    })
                }
            },
            fail: err => {
                console.error('[云函数] 获取picdata数据库信息失败', err)
            }
        })

    },
    /**|
     * 拉取播客数据库数据
     */
    loadFunnyList: function(dbName, i) {
        var that = this;
        const db = wx.cloud.database()
        var resArray = that.data.itemArray
        db.collection(dbName).skip(20 * i).get({
            success(res) {
                // console.log("res-length" + res.data.length)
                var shufferedArr = util.shuffle(res.data)
                if (shufferedArr.length > 0) {
                    for (let j = 0; j < shufferedArr.length; j++) {
                        resArray.push(shufferedArr[j])
                    }
                    that.setData({
                        itemArray: resArray,
                    })
                } else {
                    wx.showToast({
                        title: '余粮不够了~明天再来试试吧~',
                        icon: 'none',
                        duration: 2000
                    })
                }

            }
        })
    },
    goDetail: function(e) {
        // console.log("goDetail" + JSON.stringify(e.currentTarget))
        var index = parseInt(e.currentTarget.dataset.index);
        var funnydata = this.data.itemArray[index]
            // console.log("funnydata" + JSON.stringify(funnydata))
        wx.navigateTo({
            url: '../../pages/funnydetail/funnydetail?funnydata=' + JSON.stringify(funnydata),
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
        // console.log("页面上拉触底事件的处理函数")
        var that = this
        var index = that.data.index
            // let hiddenAd = that.data.hiddenAd
        that.setData({
                index: index + 1,
                // hiddenAd: !hiddenAd
            })
            // that.loadFunnyList('picdata', that.data.index); //第1次拉取db中的数据
        that.getPicDataFromDB(that.data.index)

        //如果广告已经实例化了
        // if (videoAd) {
        //     videoAd.load()
        //         .then(() => videoAd.show())
        //         .catch(err => console.log(err.errMsg))

        //     videoAd.onClose((status) => {
        //         if (status && status.isEnded || status === undefined) {
        //             //正常播放结束
        //             var index = that.data.index
        //             let hiddenAd = that.data.hiddenAd
        //             that.setData({
        //                     index: index + 1,
        //                     // hiddenAd: !hiddenAd 不展示banner广告
        //                 })
        //                 that.loadFunnyList('picdata', that.data.index); //第1次拉取db中的数据
        //         } else {
        //             //播放中途推出，不给奖励
        //             wx.showToast({
        //                 title: '看完广告才可以继续刷哦~',
        //                 icon: 'none',
        //                 duration: 2000
        //             })
        //         }
        //     })
        // } else {
        //     console.log(err.errMsg)
        // }

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {
        return {
            title: '快来看，笑死我了~哈哈哈',
            path: '/pages/funny/funny'
        }
    }
})