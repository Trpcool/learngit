window.addEventListener("load", function () {
  // 1.控制鼠标移入移出时，左右箭头的显示和隐藏
  var btnL = document.querySelector(".btn-ll");
  var btnR = document.querySelector(".btn-rl");
  var focus = document.querySelector(".focus-r");
  focus.addEventListener("mouseenter", function () {
    btnL.style.display = "block";
    btnR.style.display = "block";
    // 10.自动轮播的暂停和开始
    // clearInterval(timer);
    // timer = null; //清除定时器变量
  });
  focus.addEventListener("mouseleave", function () {
    btnL.style.display = "none";
    btnR.style.display = "none";
    // timer = setInterval(() => {
    //   btnR.click();
    // }, 1500);
  });
  // 2.动态生成小圆圈，有几张图片就生成几个小圆点
  var ul = focus.querySelector("ul");
  var ol = focus.querySelector("ol");
  var focusWidth = focus.offsetWidth;

  console.log(ul.children.length);
  for (var i = 0; i < ul.children.length; i++) {
    var li = document.createElement("li");
    // 记录当前小圆圈的索引号，通过自定义属性
    li.setAttribute("index", i);
    ol.appendChild(li);
    // 3.小圆圈点击变色
    li.addEventListener("click", function () {
      for (var i = 0; i < ol.children.length; i++) {
        ol.children[i].className = "none";
      }
      this.className = "current";
      // 4.点击小圆圈，移动图片，移动的是ul
      // ul的移动距离 = 小圆圈索引号 * 图片的宽度
      var index = this.getAttribute("index");
      num = index;
      circle = index;
      // console.log(index);
      animate(ul, -index * 180);
    });
  }
  // 把ol中的第一个小li设置类名为current
  ol.children[0].className = "current";
  // 6.克隆第一张照片（li），放到ul最后面
  var firstP = ul.children[0].cloneNode(true);
  ul.appendChild(firstP);
  // 5.点击右侧按钮，图片滚动一张
  var num = 0;
  // circle控制小圆圈的播放
  var circle = 0;
  // 右侧按钮
  btnR.addEventListener("click", function () {
    // 如果走到最后一张，此时ul要快速复原，left为0
    if (num == ul.children.length - 1) {
      ul.style.left = 0;
      num = 0;
    }
    num++;
    animate(ul, -num * 180);
    // 7.点击右侧按钮，小圆圈跟随一起变化，可以再声明一个变量circle控制小圆圈的播放
    circle++;
    // 如果到最后一张，就复原
    if (circle == ol.children.length) {
      circle = 0;
    }
    for (var i = 0; i < ol.children.length; i++) {
      ol.children[i].className = "none";
    }
    ol.children[circle].className = "current";
  });
  // 8.左侧按钮
  btnL.addEventListener("click", function () {
    if (num == 0) {
      num = ul.children.length - 1;
      ul.style.left = -num * 180 + "px";
    }
    num--;
    animate(ul, -num * 200);
    circle--;
    if (circle < 0) {
      circle = ol.children.length - 1;
    }
    // circleChange();
  });

  function circleChange() {
    for (var i = 0; i < ol.children.length; i++) {
      ol.children[i].className = "none";
    }
    ol.children[circle].className = "current";
  }
  // 9.自动播放功能
  // var timer = setInterval(() => {
  //   btnR.click();
  // }, 1500);
});
