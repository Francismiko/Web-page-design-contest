window.onload = function () {
  var toLogin = document.getElementById("toLogin")
  toLogin.onclick = function () {
    alert("注册成功，点击确定后为您跳转至登录页面...")
    location.href = "../login/login.html"
  }
}