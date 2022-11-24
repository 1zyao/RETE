if (referrer = document.referrer) {
    console.log("用户直接输入网址访问");
}
else {
    console.log("用户来自 " + referrer);
}
function setSiteTime() {
    window.setTimeout("siteTime()", 1000);
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
setTimeout(setInterval(setSiteTime, 1000), 10000);
// TODO: LazyLoad