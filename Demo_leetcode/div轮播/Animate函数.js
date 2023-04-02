// 有回调函数就会调用
function animate(obj, target, callback) {
  // 先清楚以前的定时器，只保留当前一个定时器执行
  clearInterval(obj.timer);
  obj.timer = setInterval(function () {
    // 把步长值写到定时器的里面
    // var step = Math.ceil((target - obj.offsetLeft) / 10);
    // 把步长值改为整数，不要出现小数的问题
    var step = (target - obj.offsetLeft) / 10;
    var step = step > 0 ? Math.ceil(step) : Math.floor(step);
    if (obj.offsetLeft == target) {
      // 停止动画
      clearInterval(obj.timer);
      if (callback) {
        // 调用函数
        callback();
      }
    }
    // 步长公式
    obj.style.left = obj.offsetLeft + step + "px";
  }, 15);
}
