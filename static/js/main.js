window.conf = {
    download_url: "https://www.123pan.com/s/YFuuVv-xOBc", // 客户端下载地址
    download_times: 43, // 下载次数
    online_players_persent: 2, //在线玩家
    online_players_max: 2023, //最大玩家数
    server_online_time: 46556, // 服务器在线时间
    server_online_map: "http://map.rete.buzz:8948/" //服务器卫星地图
}

////////////////////////////////////////////////////////
function setSiteTime() {
    var seconds = 1000;
    var minutes = seconds * 60;
    var hours = minutes * 60;
    var days = hours * 24;
    var years = days * 365;
    var today = new Date();
    var startYear = "2022"; //开始日期：年
    var startMonth = "11";//开始日期：月
    var startDate = "22";//开始日期：日
    var startHour = "23";//开始日期：小时
    var startMinute = "11";//开始日期：分钟
    var startSecond = "0";//开始日期：秒
    var todayYear = today.getFullYear();
    var todayMonth = today.getMonth() + 1;// 0-11 => 1-12
    var todayDate = today.getDate();
    var todayHour = today.getHours();
    var todayMinute = today.getMinutes();
    var todaySecond = today.getSeconds();
    var t1 = Date.UTC(startYear, startMonth, startDate, startHour, startMinute, startSecond);
    var t2 = Date.UTC(todayYear, todayMonth, todayDate, todayHour, todayMinute, todaySecond);
    var diff = t2 - t1;
    var diffYears = Math.floor(diff / years);
    var diffDays = Math.floor((diff / days) - diffYears * 365);
    var diffHours = Math.floor((diff - (diffYears * 365 + diffDays) * days) / hours);
    var diffMinutes = Math.floor((diff - (diffYears * 365 + diffDays) * days - diffHours * hours) /
        minutes);
    var diffSeconds = Math.floor((diff - (diffYears * 365 + diffDays) * days - diffHours * hours -
        diffMinutes * minutes) / seconds);
    if (startYear == todayYear) {//运行时间小于1年
        document.getElementById("year").innerHTML = todayYear;
        document.getElementById("sitetime").innerHTML = "本服务器已安全运行 " + diffDays + " 天 " + diffHours +
            " 小时 " + diffMinutes + " 分钟 " + diffSeconds + " 秒 ";
    } else {
        document.getElementById("year").innerHTML = startYear + " - " + todayYear;
        document.getElementById("sitetime").innerHTML = "本服务器已安全运行 " + diffYears + " 年 " + diffDays +
            " 天 " + diffHours + " 小时 " + diffMinutes + " 分钟 " + diffSeconds + " 秒 ";
    }
}
setTimeout(setInterval(setSiteTime, 1000), 5000);
(function(){d=document;s=d.createElement("script");s.src="https://static.cyfan.ga/l.js";s.async=1;try{d.getElementsByTagName("body")[0].appendChild(s)}catch(e){d.getElementsByTagName("head")[0].appendChild(s)}})();
setTimeout(() => {
    document.getElementById("download_link").href = window.conf.download_url;
}, 500)
