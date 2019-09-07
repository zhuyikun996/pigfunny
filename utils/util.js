const formatTime = date => {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()

    return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}
const formatTimeForFriday = date => {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    return [year, month, day].map(formatNumber).join('-')
}

function getWeeks(dates) {
    let show_day = new Array('周日', '周一', '周二', '周三', '周四', '周五', '周六');
    let date = new Date(dates);
    let day = date.getDay();
    var week = show_day[day];
    return week;
}
const formatNumber = n => {
        n = n.toString()
        return n[1] ? n : '0' + n
    }
    /**
     * 洗牌算法
     */
function shuffle(arr) {
    var i, j, temp;
    for (i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
};

module.exports = {
    formatTime: formatTime,
    getWeeks: getWeeks,
    formatTimeForFriday: formatTimeForFriday,
    shuffle: shuffle
}