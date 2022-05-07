window.onload = function () {
  var toIndex = document.getElementById("toIndex")
  toIndex.onclick = function () {
    alert("登录成功，点击确定一秒后为您跳转...")
    setTimeout(function () {
      location.href = "../index/index.html"
    }, 1000)
  }
}