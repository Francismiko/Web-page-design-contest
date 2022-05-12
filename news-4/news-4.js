window.onload = function () {
  var textBool = false
  var changeText = document.getElementById("changeText")
  var toLogin = document.getElementById("toLogin")
  var text = document.getElementById("text")
  // 改变文本大小
  changeText.onclick = function () {
    textBool = !textBool
    // bool取反
    if (textBool) {
      changeText.style.fontSize = 1.5 + "rem"
      toLogin.style.fontSize = 2 + "rem"
      text.style.fontSize = 2 + "rem"
      text.style.lineHeight = 10 + "vh"
    } else {
      changeText.style.fontSize = 1.2 + "rem"
      toLogin.style.fontSize = 1.2 + "rem"
      text.style.fontSize = 1.2 + "rem"
      text.style.lineHeight = 6 + "vh"
    }
  }
  toLogin.onclick = function () {
    location.href = "../login/login.html"
  }
}