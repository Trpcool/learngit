// 直接获取属性值

// var id = document.getElementById("id").value;
// 按钮绑定时间
var add = document.getElementById("add");
var ul = document.querySelector(".veiw ul");
//

console.log(ul);
// 用户数组用于保存用户信息
var user = [];
// 添加功能
function User(id, name, age, sex) {
  this.id = id;
  this.name = name;
  this.age = age;
  this.sex = sex;
}
let id = document.querySelector("#id");
let nam = document.querySelector("#name");
let age = document.querySelector("#age");
// 合法性判断标红，给input输入对象绑定正在输入事件进行判断
id.oninput = function () {
  if (isID(id.value)) {
    id.style.border = "rgb(125, 125, 125, 0.5) solid 2px";
  } else {
    id.style.border = "rgb(255, 42, 42) solid 2px";
  }
};
nam.oninput = function () {
  if (isName(nam.value)) {
    nam.style.border = "rgb(125, 125, 125, 0.5) solid 2px";
  } else {
    nam.style.border = "rgb(255, 42, 42) solid 2px";
  }
};
age.oninput = function () {
  if (isAge(age.value)) {
    age.style.border = "rgb(125, 125, 125, 0.5) solid 2px";
  } else {
    age.style.border = "rgb(255, 42, 42) solid 2px";
  }
};
add.addEventListener(
  "click",
  function (e) {
    // 此方法比较重要因为下拉菜单选择后需要刷新页面，所以需要阻止它发声，以免影响后面执行异常
    e.preventDefault();
    // let id = document.querySelector("#id");
    // let name = document.querySelector("#name");
    // let age = document.querySelector("#age");
    let sex = sexHq();
    // 输入框聚焦合法判断

    // 输入合法性判断,如果是其中一样不合法都不能执行赋值给实例对象操作
    if (hefa(id.value, nam.value, age.value)) {
      // 实例每个对象
      let u = new User(id.value, nam.value, age.value, sex);
      user.push(u);
      display();
      console.log(user);
    } else {
      // 原因判断

      if (isID(id.value) == false) {
        alert("您输入的id不合法！");
      }
      if (isName(nam.value) == false) {
        alert("您输入的姓名不合法！");
      }
      if (isAge(age.value) == false) {
        alert("您输入的年龄不合法！");
      }
    }
  },
  true
);

// 用户id属性合法性函数
function isID(id) {
  if (id >= 1 && id <= 1000) {
    return true;
  } else {
    return false;
  }
}
// 用户name合法性
function isName(nam) {
  // 中文正则表达式
  let reg = /^[\u4E00-\u9FA5]{2,10}$/;
  if (reg.test(nam)) {
    return true;
  } else {
    return false;
  }
}
// 年龄合法性判断
function isAge(age) {
  if (age > 0 && age <= 120) {
    return true;
  } else {
    return false;
  }
}
// 性别获取
function sexHq() {
  return document.querySelector("#sex").value;
}
// 所有属性合法判断
function hefa(id, name, age) {
  if (isID(id) && isName(name) && isAge(age)) {
    return true;
  }
  return false;
}

// 列表刷新页面
function display() {
  // 先删除再刷新逻辑
  let preli = document.querySelectorAll("li");
  for (let j = 0; j < preli.length; j++) {
    ul.removeChild(preli[j]);
  }
  //  重新创建节点
  for (let i = 0; i < user.length; i++) {
    // 节点和内容创建
    let li = document.createElement("li");
    // 模版字符串，可以不用字符拼接直接写入字符串里面
    let msg = `id: ${user[i].id} ${user[i].name} - ${user[i].age} - ${user[i].sex}`;
    li.innerHTML = "<p>" + msg + "</p>";
    let btn = document.createElement("button");
    btn.innerText = "删除";
    // btn设置name属性
    btn.className = "rmbtn";
    li.appendChild(btn);
    ul.appendChild(li);
  }
}
// 每个小li标签的删除功能（此处先给父元素绑定事件可以重复执行，否则监听删除事件只能执行一次，不能多次进行删除操作）
let main = document.querySelector(".main");
main.onmouseover = function () {
  let rmbtn = document.querySelectorAll(".rmbtn");
  let li = document.querySelectorAll("ul li");
  // 如果外层事件执行以下函数只能执行一次不可以重复执行
  for (let i = 0; i < rmbtn.length; i++) {
    rmbtn[i].addEventListener(
      "click",
      function () {
        ul.removeChild(li[i]);
        // 不仅只是删除节点，也要删除数组中的对象数据不保留
        // d第一个参数是删除的索引起始位置，第二个是删除个数
        user.splice(i, 1);
      },
      true
    );
  }
};

// 搜索功能
let serchbtn = document.querySelector("#serch");
serchbtn.addEventListener(
  "click",
  function (e) {
    // 搜索值
    e.preventDefault();
    let name = document.querySelector("#name").value;
    let tuser = serch(name);
    // 如果没有匹配到相关用户数组长度为0

    if (tuser.length == 0) {
      // 也是先清空li再刷新
      let pli = document.querySelectorAll("ul li");
      for (let j = 0; j < pli.length; j++) {
        ul.removeChild(pli[j]);
      }
      // 创建输出节点
      let li = document.createElement("li");
      li.innerHTML = "<p>没有匹配到相关用户！</p>";
      ul.appendChild(li);
    } else {
      // 删除所有ul中的li节点在创建达到刷新目的
      let li = document.querySelectorAll("ul li");
      for (let j = 0; j < li.length; j++) {
        ul.removeChild(li[j]);
      }
      // 然后再更新
      let updaate = serch(name);
      updaate.forEach((value, index) => {
        let li = document.createElement("li");
        let msg = `id: ${tuser[index].id} ${tuser[index].name} - ${tuser[index].age} - ${tuser[index].sex}`;
        li.innerHTML = "<p>" + msg + "</p>";
        ul.appendChild(li);
      });
    }
  },
  true
);
// 根据姓名返回一个对象
function serch(sname) {
  // 将需要查询到的所有用户转入一个数组进行返回
  var tempuser = [];
  // for (let i = 0; i < user.length; i++) {
  //   if (user[i].name.indexOf(sname) >= 0) {
  //     tempuser.push(user[i]);
  //   }
  // }
  user.forEach((value, index) => {
    if (user[index].name.includes(sname) === true) {
      tempuser.push(user[index]);
    }
  });
  return tempuser;
}
// forEach循环
// user.forEach((item) => {
//   console.log("==========");
//   if (item.name.indexOf(sname) >= 0) {
//     tempuser.push(item);
//   }
// });
// ---------增加一个按钮课用于搜索之后返回列表---------
let listbtn = document.querySelector("h4 img");
listbtn.addEventListener(
  "click",
  () => {
    // display();
    display();
  },
  true
);
// 根据id修改
let fix = document.querySelector("#fix");
// 获取提示框div
let fixts = document.querySelector(".fixts");
// 获取提示框中的确定按钮
let yes = document.querySelector(".fixts #yes");
console.log(yes);
// 获取提示框输入的值

fix.addEventListener(
  "click",
  (e) => {
    e.preventDefault();
    // 弹出提示框
    fixts.style.display = "block";
    yes.onclick = function () {
      let tname = document.querySelector(".fixts #tname").value;
      let tage = document.querySelector(".fixts #tage").value;
      let tsex = document.querySelector(".fixts #tsex").value;
      let id = document.querySelector("#id").value;
      // console.log(tname, tage, tsex);
      // 配到到对象进行参数匹配
      user.forEach((value, index) => {
        console.log("需要匹配的id是" + id);
        if (value.id === id) {
          console.log("匹配到的用户" + value.name);
          user[index].name = tname;
          user[index].age = Number(tage);
          user[index].sex = tsex;
          console.log(value.name, value.age, value.sex);
        }
      });
      setTimeout(() => {
        fixts.style.display = "none";
        alert("修改成功");
        display();
      }, 1000);
    };
  },
  true
);
console.log(user);
console.log("abc" === "abc");
