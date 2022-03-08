// 解析播放时间
export function formatSeconds (value:string) {
  let theTime = parseInt(value);
  let theTime1 = 0;
  let theTime2 = 0;
  if (theTime > 60) {
    theTime1 = parseInt((theTime / 60).toString()); // 分
    theTime = parseInt((theTime % 60).toString()); // 秒
    // 是否超过一个小时
    if (theTime1 > 60) {
      theTime2 = parseInt((theTime1 / 60).toString()); // 小时
      theTime1 = 60; // 分
    }
  }
  // 多少秒
  let result = "";
  if (parseInt((theTime).toString()) < 10) {
    result = "0:0" + parseInt((theTime).toString());
  } else {
    result = "0:" + parseInt((theTime).toString());
  }
  // 多少分钟时
  if (theTime1 > 0) {
    if (parseInt((theTime).toString()) < 10) {
      result = "0" + parseInt((theTime).toString());
    } else {
      result = parseInt((theTime).toString()).toString();
    }
    result = parseInt((theTime1).toString()) + ":" + result;
  }
  // 多少小时时
  if (theTime2 > 0) {
    if (parseInt((theTime).toString()) < 10) {
      result = "0" + parseInt((theTime).toString());
    } else {
      result = parseInt((theTime).toString()).toString();
    }
    result = parseInt((theTime2).toString()) + ":" + parseInt((theTime1).toString()) + ":" + result;
  }
  return result;
}