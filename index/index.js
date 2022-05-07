// 页面跳转函数
window.onload = function () {
  var jump1 = document.getElementById("jump1")
  jump1.onclick = function () {
    window.open("../pages/page1/page1.html")
    console.log("用户点击了'测试例'跳转链接")
  }
  var jump2 = document.getElementById("jump2")
  jump2.onclick = function () {
    window.open("../pages/page2/page2.html")
    console.log("用户点击了'测试例'跳转链接")
  }
  var jump3 = document.getElementById("jump3")
  jump3.onclick = function () {
    window.open("../pages/page3/page3.html")
    console.log("用户点击了'测试例'跳转链接")
  }
  var jump4 = document.getElementById("jump4")
  jump4.onclick = function () {
    window.open("../pages/page4/page4.html")
    console.log("用户点击了'测试例'跳转链接")
  }
  var jump5 = document.getElementById("jump5")
  jump5.onclick = function () {
    window.open("../pages/page5/page5.html")
    console.log("用户点击了'测试例'跳转链接")
  }
  var toLogin = document.getElementById("toLogin")
  toLogin.onclick = function () {
    location.href = "../login/login.html"
    console.log("用户点击了'登录注册按钮")
  }
}