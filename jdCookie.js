/*
此文件为Node.js专用。其他用户请忽略
 */
//此处填写京东账号cookie。
//注：github action用户cookie填写到Settings-Secrets里面，新增JD_COOKIE，多个账号的cookie使用`&`隔开或者换行
let CookieJDs = [
   'pt_key=AAJfm1r2ADBrzit0G23hqXOjHICyqfTvaPe_tAuNiUFs6biSqo0otPWGmFMq9rCla4ecVhHfvF4;pt_pin=xxzhaobb;nickname=Majia168;',//Majia168
  'pt_key=AAJfm-T_ADAmZCp7wWqpoUo5fBOfjYTiE_BEv5MZMg6ixFntrucQr0wejwpTLpPJ3g-jwyMRo2Y;pt_pin=15882077231_p;nickname=QIQI;',//QIQI
  'pt_key=AAJfl4WmADBSI7F59lcG5wAx3mnifm9aA9_zMC3PGCcqu_4CePD9xEErfaXAX8MfdJJMWGV3v7E;pt_pin=jd_41b3f66005ccf;nickname=Chunyi;',//Chunyi
  'pt_key=AAJfoi0xADCud1lNllMAFin4-jHEoTy4n5ofu5aMS3h1ECWFWJmzQdrI5Y6p7BFEQpIPWT7YNMY;pt_pin=baobeier001;nickname=Cuicui;',//Cuicui
  'pt_key=AAJfhpobADCLe8w9ZvsQcgrd52FrIEzWSMN4lOwlGa5um-ofhiPHeHjy4ZlMgkF7RmwyW61FCCw;pt_pin=sandy-long;nickname=sandlong;'//sandy-long
  'pt_key=AAJfo4tsADA3Q2ycHAt_5oMm-ZY13-8i3ZZGHItP5XDt4E0lJJKe6_KkcibC1St9xQmqGM7n0is;pt_pin=wdCBepaUbWmSYW;nickname=Foyuan'//Foyuan
]
// 判断github action里面是否有京东ck
if (process.env.JD_COOKIE) {
  if (process.env.JD_COOKIE.indexOf('&') > -1) {
    console.log(`您的cookie选择的是用&隔开\n`)
    CookieJDs = process.env.JD_COOKIE.split('&');
  } else if (process.env.JD_COOKIE.indexOf('\n') > -1) {
    console.log(`您的cookie选择的是用换行隔开\n`)
    CookieJDs = process.env.JD_COOKIE.split('\n');
  } else {
    CookieJDs = process.env.JD_COOKIE.split();
  }
  console.log(`\n====================共有${CookieJDs.length}个京东账号Cookie=========\n`);
  console.log(`==================脚本执行- 北京时间(UTC+8)：${new Date(new Date().getTime() + new Date().getTimezoneOffset()*60*1000 + 8*60*60*1000).toLocaleString()}=====================\n`)
  // console.log(`\n==================脚本执行来自 github action=====================\n`)
}
for (let i = 0; i < CookieJDs.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['CookieJD' + index] = CookieJDs[i];
}
