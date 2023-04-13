window.onload = function () {
  // 夜晚白天模式选择
  var veiw = document.getElementsByClassName("veiw")[0];
  var model_mnu = document.getElementsByClassName("model-mnu")[0];
  //   根据模式改变theme下的图片模式
  var def = document.getElementsByClassName("default")[0];
  var night = document.getElementsByClassName("night")[0];
  var dark = document.getElementsByClassName("dark")[0];
  // var mflag = document.getElementById("flag");
  // console.log(mflag);
  //
  var body = document.getElementsByTagName("body")[0];
  console.log(body);
  var vm = document.getElementById("vm");
  console.log(dark, night, def, vm);
  //   选择模式后变化
  def.onclick = function () {
    def.style.backgroundColor = "rgb(27, 27, 27)";
    def.style.border = "rgb(71, 71, 71) solid 1px";
    // img对象直接调src属性，不用利用Style对象
    vm.src = "MDN-img/DarkTheme.png";
    reset(night, dark);
  };
  night.onclick = function () {
    night.style.backgroundColor = "rgb(27, 27, 27)";
    night.style.border = "rgb(71, 71, 71) solid 1px";
    body.style.backgroundColor = "rgb(255, 255, 255)";
    // img对象直接调src属性，不用利用Style对象
    vm.src = "MDN-img/sun.png";
    reset(def, dark);
    fontLight();
  };
  // 定义字体变化
  // 字体夜晚模式
  function fontDark() {
    var font_m = document.querySelectorAll(".font-m");
    for (let i = 0; i < font_m.length; i++) {
      font_m[i].style.color = "white";
    }
  }
  // 字体白天模式
  function fontLight() {
    var font_m = document.querySelectorAll(".font-m");
    for (let i = 0; i < font_m.length; i++) {
      font_m[i].style.color = "black";
    }
  }
  dark.onclick = function () {
    dark.style.backgroundColor = "rgb(27, 27, 27)";
    dark.style.border = "rgb(71, 71, 71) solid 1px";
    body.style.backgroundColor = "rgb(27, 27, 27)";
    // flag.style.backgroundColor = "rgb(27, 27, 27)";
    // img元素直接调src属性，不用利用Style对象
    vm.src = "MDN-img/moon.png";
    reset(def, night);
    fontDark();
  };
  var flag = 0;
  // 给每个模式添加独立显示，每次切换只能让一个模式出现背景(重置另外两个模式)
  var reset = function (m1, m2) {
    m1.style.backgroundColor = "rgb(52, 52, 52)";
    m1.style.border = "rgb(52, 52, 52) solid 1px";
    m2.style.backgroundColor = "rgb(52, 52, 52)";
    m2.style.border = "rgb(52, 52, 52) solid 1px";
  };
  //   定义一个状态变量
  veiw.onclick = function () {
    if (flag == 0) {
      model_mnu.style.display = "block";
      flag = 1;
    } else {
      model_mnu.style.display = "none";
      flag = 0;
    }
  };
  //   搜索框变化
  var serch = document.getElementsByClassName("serch")[0];
  var serchafter = window.getComputedStyle(serch, ":before");
  console.log(serchafter);
  var flag2 = 0;
  serch.onclick = function () {
    if (flag2 == 0) {
      serch.style.width = "200px";
      serch.style.border = "rgb(140, 180, 255) solid 1px";
      flag2 = 1;
    } else {
      serch.style.width = "90px";
      flag2 = 0;
    }
  };
};
