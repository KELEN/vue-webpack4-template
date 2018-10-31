exports.pubtimeFormate = (ftime) => {
  ftime = ftime + '';
  var nowDate = new Date(),
      nowyear = nowDate.getFullYear(),
      nowmonth = nowDate.getMonth() + 1,
      nowday = nowDate.getDate(),
      nowhour = nowDate.getHours(),
      arrtime = ftime.split("-"),
      ayear = parseInt(ftime.substr(0, 4)),
      amonth = parseInt(ftime.substr(5, 2)),
      aday = parseInt(ftime.substr(8, 2)),
      ahour = parseInt(ftime.substr(11, 2));
  if ((ayear !== nowyear)) {
    return ftime;
  }
  if ((ayear == nowyear) && (nowmonth !== amonth)) {
    return ftime;
  }
  if ((ayear == nowyear) && (nowday !== aday)) {
    if (nowday - aday>15){
      return ftime;
    }
    return (nowday - aday) + '天前';
  }
  if ((nowmonth == amonth) && (nowday == aday)) {
    if (nowhour == ahour) {
      return '刚刚'
    }
    else {
      return (nowhour - ahour) + '小时前';
    }
  }
  else {
    return ftime;
  }
};
