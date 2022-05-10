// 页面跳转函数
window.onload = function () {
  var textBool = false
  var changeText = document.getElementById("changeText")
  var jumpConveningprocess = document.getElementById("jump-Conveningprocess")
  var jump2 = document.getElementById("jump2")
  var jump3 = document.getElementById("jump3")
  var jump4 = document.getElementById("jump4")
  var jump5 = document.getElementById("jump5")
  var toLogin = document.getElementById("toLogin")
  // 改变文本大小
  changeText.onclick = function () {
    textBool = !textBool
    // bool取反
    if (textBool) {
      changeText.style.fontSize = 1.5 + "rem"
      jumpConveningprocess.style.fontSize = 2 + "rem"
      jump2.style.fontSize = 2 + "rem"
      jump3.style.fontSize = 2 + "rem"
      jump4.style.fontSize = 2 + "rem"
      jump5.style.fontSize = 2 + "rem"
      toLogin.style.fontSize = 2 + "rem"
    } else {
      changeText.style.fontSize = 1.2 + "rem"
      jumpConveningprocess.style.fontSize = 1.5 + "rem"
      jump2.style.fontSize = 1.5 + "rem"
      jump3.style.fontSize = 1.5 + "rem"
      jump4.style.fontSize = 1.5 + "rem"
      jump5.style.fontSize = 1.5 + "rem"
      toLogin.style.fontSize = 1.2 + "rem"
    }
  }

  jumpConveningprocess.onclick = function () {
    window.open("../pages/convening process/convening process.html")
  }

  jump2.onclick = function () {
    window.open("../pages/page2/page2.html")
  }

  jump3.onclick = function () {
    window.open("../pages/page3/page3.html")
  }

  jump4.onclick = function () {
    window.open("../pages/page4/page4.html")
  }

  jump5.onclick = function () {
    window.open("../pages/page5/page5.html")
  }

  toLogin.onclick = function () {
    location.href = "../login/login.html"
  }
}