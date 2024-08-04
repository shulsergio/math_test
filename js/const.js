export const MAIN_CARD_LIST = [
  {
    icon: "./img/symbol-defs.svg#icon-user-plus",
    itemName: "Plus",
    itemText: "Сложение чисел",
    itemPage: "./math_add.html",
    buttomClass: "btn-main-card",
    buttomText: "Start",
  },
  {
    icon: "./img/symbol-defs.svg#icon-user-minus",
    itemName: "Minus",
    itemText: "Вычитание чисел",
    itemPage: "./math_add.html",
    buttomClass: "btn-main-card btn-main-card-disable",
    buttomText: "Start",
  },
  {
    icon: "./img/symbol-defs.svg#icon-user-check",
    itemName: "Multiply",
    itemText: "Умножение чисел",
    itemPage: "./math_add.html",
    buttomClass: "btn-main-card btn-main-card-disable",
    buttomText: "Start",
  },
  {
    icon: "./img/symbol-defs.svg#icon-hour-glass",
    itemName: "Game Number",
    itemText: "Сложение чисел",
    itemPage: "./math_add.html",
    buttomClass: "btn-main-card btn-main-card-disable",
    buttomText: "Start",
  },
  {
    icon: "./img/symbol-defs.svg#icon-bubbles4",
    itemName: "Game City",
    itemText: "Сложение чисел",
    itemPage: "./math_add.html",
    buttomClass: "btn-main-card btn-main-card-disable",
    buttomText: "Start",
  },
  {
    icon: "./img/symbol-defs.svg#icon-users",
    itemName: "reserv",
    itemText: "",
    itemPage: "",
    buttomClass: "btn-main-card btn-main-card-disable",
    buttomText: "Start",
  },
];

const MATH_OPERATION = ["*", "+", "-"];
const newARR = [];

export function AddMath(numbers, MATH_OPERATION) {
  let numA = 0,
    numB = 0;
  for (let i = 0; i < 12; i++) {
    numA = Math.floor(Math.random() * (numbers[1] - numbers[0]) + numbers[0]);
    numB = Math.floor(Math.random() * (numbers[1] - numbers[0]) + numbers[0]);
    newARR.push({
      first_num: numA,
      second_num: numB,
      result_plus: numA + numB,
    });
  }
  console.log("newARR:");
  console.log(newARR);
  return newARR;
}
function checkResults(arrData) {
  console.log("checkResults");
  console.log(arrData);
  console.log(newARR);

  let i = 0;

  newARR.forEach((key) => {
    console.log("key.result_plus ", key.result_plus);
    console.log("typOf key.result_plus ", typeof key.result_plus);
    console.log("arrData[i] ", arrData[i]);
    console.log("typOf arrData[i] ", typeof arrData[i]);
    const circleStyle = document.querySelector(`.circle${i + 1}`);
    if (key.result_plus !== arrData[i]) {
      circleStyle.style.backgroundColor = "red";
    }
    circleStyle.style.visibility = "visible";
    i++;
  });
  document.querySelector(".js-form-btn").disabled = true;
}

export function hendlerClickOk() {
  const form = document.querySelector(".js-my-form");
  const formData = new FormData(form);
  const data = {};
  const arrData = [];
  formData.forEach((value, key) => {
    data[key] = value; // OBJ
    arrData.push(Number(data[key])); // Massiv
  });
  console.log("дата после получения ответа");
  console.log(formData);
  console.log(data);
  console.log(arrData);
  checkResults(arrData);
}
