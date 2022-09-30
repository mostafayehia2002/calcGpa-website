let section2 = document.querySelector(".section2");
let number = document.querySelector(".input1");
let btn = document.getElementById("btn-start");
let result = document.getElementById("result");
let table = document.querySelector("table");
let controls = document.querySelector(".controls");
let td = document.querySelectorAll(".td");
let clear = document.getElementById("clear");
let print = document.getElementById("print");
let icon = document.getElementById("icon");
let section1 = document.querySelector(".section1");
let ret = document.querySelector(".return");
let div, select, option, hours, selectV, hoursV;
/***********************************************/
if (window.localStorage.getItem("التراكمي")) {
  td[0].innerHTML = window.localStorage.getItem("التراكمي");
  td[1].innerHTML = window.localStorage.getItem("عدد الساعات");
  td[2].innerHTML = window.localStorage.getItem("التقدير العام");
}
/**********************************************************/
btn.onclick = function () {
  for (let i = 0; i < number.value; i++) {
    div = document.createElement("div");
    div.setAttribute("class", "div");
    select = document.createElement("select");
    option = `
        <option >D</option>
        <option >D+</option>
        <option >c</option>
        <option >c+</option>
        <option >B</option>
        <option >B+</option>
        <option >A</option>
        <option >A+</option>
        
        `;
    hours = `
      <input type="number" class="Hours" value="3" min="3" max="6">
       `;
    select.innerHTML = option;
    div.innerHTML = hours;
    div.appendChild(select);

    section2.appendChild(div);
    section2.appendChild(controls);
    section2.appendChild(table);

  }

  selectV = document.querySelectorAll("select");
  hoursV = document.querySelectorAll(".Hours");
  result.onclick = () => {
    calcSum();
  };

}
/*********************************************************** */
function calcSum() {
  let arr = [];
  let hour = []
  let sum = 0;
  let sumOfHour = 0;
  for (let x = 0; x < selectV.length; x++) {
    arr[x] = selectV[x].value;
    hour[x] = hoursV[x].value;
    switch (arr[x]) {
      case "A+":
        sum += 4 * parseInt(hour[x]);
        break;
      case "A":
        sum += 3.7 * parseInt(hour[x]);
        break;
      case "B+":
        sum += 3.3 * parseInt(hour[x]);
        break;
      case "B":
        sum += 3 * parseInt(hour[x]);
        break;
      case "C+":
        sum += 2.7 * parseInt(hour[x]);
        break;

      case "C":
        sum += 2.4 * parseInt(hour[x]);
        break;

      case "D+":
        sum += 2.2 * parseInt(hour[x]);
        break;

      case "D":
        sum += 2 * parseInt(hour[x]);
        break;
    }
    sumOfHour += parseInt(hour[x]);
  }
  console.log(sum / sumOfHour);
  td[0].innerHTML = (sum / sumOfHour).toFixed(3);
  td[1].innerHTML = (sumOfHour);

  window.localStorage.setItem("التراكمي", td[0].textContent);
  window.localStorage.setItem("عدد الساعات", td[1].textContent);
  method(sum / sumOfHour);
}
/*************************************************************/

function method(v) {
  if (v < 1.5) {
    td[2].innerHTML = ("ضعيف جدا");

  }
  else if (v > 1.5 && v < 2) {

    td[2].innerHTML = ("ضعيف");


  }
  else if (v >= 2 && v < 2.5) {
    td[2].innerHTML = ("مقبول");

  }
  else if (v >= 2.5 && v < 3) {
    td[2].innerHTML = ("جيد");
  }
  else if (v >= 3 && v < 3.5) {
    td[2].innerHTML = ("جيد جدا")

  }
  else {
    td[2].innerHTML = ("امتياز");

  }

  window.localStorage.setItem("التقدير العام", td[2].textContent);

}

/***************************************************************/
clear.onclick = () => {
  td[0].innerHTML = " ";
  td[1].innerHTML = " ";
  td[2].innerHTML = " ";
  window.localStorage.clear();
  location.reload();

}
/****************************************************************/
print.onclick = () => {
  window.print();
}
/**************************************************************/
icon.onclick = function () {
  if (icon.getAttribute("class") == "fas fa-moon") {
    icon.setAttribute("class", "fas fa-sun");
    document.styleSheets[1].cssRules[0].style.setProperty("--background-color", "rgb(68, 67, 68)");
    table.style.color = "white";
    console.log(document.styleSheets[1].cssRules);

  }
  else {
    icon.setAttribute("class", "fas fa-moon");
    document.styleSheets[1].cssRules[0].style.setProperty("--background-color", "rgb(238, 238, 238)");
    table.style.color = "black";


  }

}
/*************************************************************/
window.onload = () => {
  section1.style.display = "flex";
  document.body.style.overflow = "hidden";
  let time = setTimeout(function () {
    section1.style.display = "none";
    document.body.style.overflow = "auto";
  }, 3000)
}
/**********************************************************/
window.onscroll = () => {
  if (window.scrollY >= 100) {
    ret.style.display = "block";

  } else {
    ret.style.display = "none";

  }
}
/***********************************************************/
ret.onclick = () => {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
}
/*************************************************************/