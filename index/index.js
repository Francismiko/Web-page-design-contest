// 页面跳转函数
window.onload = function () {
  var textBool = false
  var Text = document.getElementById("Text")
  var changeText = document.getElementById("changeText")
  var jump1 = document.getElementById("jump1")
  var jump2 = document.getElementById("jump2")
  var jump3 = document.getElementById("jump3")
  var jump4 = document.getElementById("jump4")
  var jump5 = document.getElementById("jump5")
  var toLogin = document.getElementById("toLogin")
  // 改变文本大小
  changeText.onclick = function () {
    textBool = !textBool
    if (textBool) {
      Text.style.fontSize = 1.75 + "rem"
      changeText.style.fontSize = 1.5 + "rem"
      jump1.style.fontSize = 2 + "rem"
      jump2.style.fontSize = 2 + "rem"
      jump3.style.fontSize = 2 + "rem"
      jump4.style.fontSize = 2 + "rem"
      jump5.style.fontSize = 2 + "rem"
      toLogin.style.fontSize = 2 + "rem"
    } else {
      Text.style.fontSize = 1.2 + "rem"
      changeText.style.fontSize = 1.2 + "rem"
      jump1.style.fontSize = 1.5 + "rem"
      jump2.style.fontSize = 1.5 + "rem"
      jump3.style.fontSize = 1.5 + "rem"
      jump4.style.fontSize = 1.5 + "rem"
      jump5.style.fontSize = 1.5 + "rem"
      toLogin.style.fontSize = 1.2 + "rem"
    }
  }

  jump1.onclick = function () {
    window.open("../pages/page1/page1.html")
    console.log("用户点击了'测试例'跳转链接")
  }

  jump2.onclick = function () {
    window.open("../pages/page2/page2.html")
    console.log("用户点击了'测试例'跳转链接")
  }

  jump3.onclick = function () {
    window.open("../pages/page3/page3.html")
    console.log("用户点击了'测试例'跳转链接")
  }

  jump4.onclick = function () {
    window.open("../pages/page4/page4.html")
    console.log("用户点击了'测试例'跳转链接")
  }

  jump5.onclick = function () {
    window.open("../pages/page5/page5.html")
    console.log("用户点击了'测试例'跳转链接")
  }

  toLogin.onclick = function () {
    location.href = "../login/login.html"
    console.log("用户点击了'登录注册按钮")
  }
}