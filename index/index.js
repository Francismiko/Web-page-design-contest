// 页面跳转函数
window.onload = function () {
  var textBool = false
  var changeText = document.getElementById("changeText")
  var jumpConveningProcess = document.getElementById("jump-ConveningProcess")
  var jumpConferenceSignificance = document.getElementById("jump-ConferenceSignificance")
  var jumpRepresentativeFeeling = document.getElementById("jump-RepresentativeFeeling")
  var jumpBasesDynamic = document.getElementById("jump-BasesDynamic")
  var toLogin = document.getElementById("toLogin")
  var jumpNews1 = document.getElementById("jumpNews1")
  var jumpNews2 = document.getElementById("jumpNews2")
  var jumpNews3 = document.getElementById("jumpNews3")
  var jumpNews4 = document.getElementById("jumpNews4")
  var jumpNews5 = document.getElementById("jumpNews5")
  // 改变文本大小
  changeText.onclick = function () {
    textBool = !textBool
    // bool取反
    if (textBool) {
      changeText.style.fontSize = 1.5 + "rem"
      jumpConveningProcess.style.fontSize = 2 + "rem"
      jumpConferenceSignificance.style.fontSize = 2 + "rem"
      jumpRepresentativeFeeling.style.fontSize = 2 + "rem"
      jumpBasesDynamic.style.fontSize = 2 + "rem"
      toLogin.style.fontSize = 2 + "rem"
      jumpNews1.style.fontSize = 2 + "rem"
      jumpNews2.style.fontSize = 2 + "rem"
      jumpNews3.style.fontSize = 2 + "rem"
      jumpNews4.style.fontSize = 2 + "rem"
      jumpNews5.style.fontSize = 2 + "rem"
    } else {
      changeText.style.fontSize = 1.4 + "vw"
      jumpConveningProcess.style.fontSize = 1.7 + "vw"
      jumpConferenceSignificance.style.fontSize = 1.7 + "vw"
      jumpRepresentativeFeeling.style.fontSize = 1.7 + "vw"
      jumpBasesDynamic.style.fontSize = 1.7 + "vw"
      toLogin.style.fontSize = 1.4 + "vw"
      jumpNews1.style.fontSize = 1.7 + "vw"
      jumpNews2.style.fontSize = 1.7 + "vw"
      jumpNews3.style.fontSize = 1.7 + "vw"
      jumpNews4.style.fontSize = 1.7 + "vw"
      jumpNews5.style.fontSize = 1.7 + "vw"
    }
  }

  jumpConveningProcess.onclick = function () {
    window.open("../convening process/convening process.html")
  }

  jumpConferenceSignificance.onclick = function () {
    window.open("../conference significance/conference significance.html")
  }

  jumpRepresentativeFeeling.onclick = function () {
    window.open("../representative feeling/representative feeling.html")
  }

  jumpBasesDynamic.onclick = function () {
    window.open("../bases dynamic/bases dynamic.html")
  }

  toLogin.onclick = function () {
    location.href = "../login/login.html"
  }

  jumpNews1.onclick = function () {
    window.open("../news-1/news-1.html")
  }

  jumpNews2.onclick = function () {
    window.open("../news-2/news-2.html")
  }

  jumpNews3.onclick = function () {
    window.open("../news-3/news-3.html")
  }

  jumpNews4.onclick = function () {
    window.open("../news-4/news-4.html")
  }

  jumpNews5.onclick = function () {
    window.open("../news-5/news-5.html")
  }
}

var angle = 0;

function galleryspin(sign) {
  spinner = document.querySelector("#spinner");
  if (!sign) {
    angle = angle + 40;
  } else {
    angle = angle - 40;
  }
  spinner.setAttribute("style", "-webkit-transform: rotateY(" + angle + "deg); -moz-transform: rotateY(" + angle + "deg); transform: rotateY(" + angle + "deg);");
}