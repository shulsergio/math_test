import { createModalContent } from "./marckup.js";

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
    itemPage: "./math_minus.html",
    buttomClass: "btn-main-card",
    buttomText: "Start",
  },
  {
    icon: "./img/symbol-defs.svg#icon-user-check",
    itemName: "Multiply",
    itemText: "Умножение чисел",
    itemPage: "./math_add.html",
    buttomClass: "btn-main-card btn-disable",
    buttomText: "Start",
  },

  {
    icon: "./img/symbol-defs.svg#icon-bubbles4",
    itemName: "Game Capital",
    itemText: "Изучаем столицы стран",
    itemPage: "./cities.html",
    buttomClass: "btn-main-card",
    buttomText: "Start",
  },
  {
    icon: "./img/symbol-defs.svg#icon-users",
    itemName: "Game Flag",
    itemText: "Изучаем флаги стран",
    itemPage: "",
    buttomClass: "btn-main-card btn-disable",
    buttomText: "Start",
  },
  {
    icon: "./img/symbol-defs.svg#icon-hour-glass",
    itemName: "Game Number",
    itemText: "Игра - угадай число",
    itemPage: "./math_add.html",
    buttomClass: "btn-main-card btn-disable",
    buttomText: "Start",
  },
];
let wrongQty = 0;
const newARR = [];
const modalWindow = document.querySelector(".modal-overlay");
const modalContent = document.querySelector(".modal-content-js");
let MATH_OPERATION = 0;

export function AddMath(numbers, mathOperation) {
  MATH_OPERATION = mathOperation;
  let numA = 0,
    numB = 0;
  let c = 0;
  for (let i = 0; i < 12; i++) {
    numA = Math.floor(Math.random() * (numbers[1] - numbers[0]) + numbers[0]);
    numB = Math.floor(Math.random() * (numbers[1] - numbers[0]) + numbers[0]);
    if (mathOperation === "+") {
      c = numA + numB;
      console.log("c in + AddMath");
      console.log(c);
    } else if (mathOperation === "-") {
      if (numA < numB) {
        let zamena = numB;
        numB = numA;
        numA = zamena;
      }
      c = numA - numB;
    }
    newARR.push({
      first_num: numA,
      second_num: numB,
      result_data: c,
    });
  }
  console.log("newARR:");
  console.log(newARR);
  return newARR;
}
function checkResults(arrData) {
  //   console.log("checkResults");
  //   console.log(arrData);
  //   console.log(newARR);

  let i = 0;
  wrongQty = 0;
  newARR.forEach((key) => {
    // console.log("key.result_plus ", key.result_plus);
    // console.log("typOf key.result_plus ", typeof key.result_plus);
    // console.log("arrData[i] ", arrData[i]);
    // console.log("typOf arrData[i] ", typeof arrData[i]);
    const circleStyle = document.querySelector(`.circle${i + 1}`);
    if (key.result_data !== arrData[i]) {
      circleStyle.style.backgroundColor = "red";
      wrongQty = wrongQty + 1;
    }
    circleStyle.style.visibility = "visible";
    i++;
  });
  document.querySelector(".js-form-btn").disabled = true;
  //   console.log("wrongQty");
  //   console.log(wrongQty);
}

export function hendlerClickPlusOk() {
  const form = document.querySelector(".js-my-form");
  const formData = new FormData(form);
  const data = {};
  const arrData = [];
  formData.forEach((value, key) => {
    data[key] = value; // OBJ
    arrData.push(Number(data[key])); // Massiv
  });
  //   console.log("дата после получения ответа");
  //   console.log(formData);
  //   console.log(data);
  //   console.log(arrData);
  checkResults(arrData);
  let itemName = "сложение";
  let itemPage = "./math_add.html";
  if (MATH_OPERATION === "-") {
    itemName = "вычитание";
    itemPage = "./math_minus.html";
  }
  let resdata = [
    {
      itemName: itemName,
      itemPage: itemPage,
      wrongQty: wrongQty,
    },
  ];

  onCreateModalWindow(resdata);
}
function onCreateModalWindow(resdata) {
  modalWindow.classList.remove("modal-hidden");
  modalContent.insertAdjacentHTML("beforeend", createModalContent(resdata));
}
