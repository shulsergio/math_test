import { hendlerClickPlusOk } from "./const.js";
import { createFormMarkupHtml } from "./marckup.js";
const newFormPlus = document.querySelector(".js-my-form");
const ARR_NUM_PLUS = [0, 20]; //минимальное и максиммальное число

newFormPlus.insertAdjacentHTML("afterbegin", createFormMarkupHtml(ARR_NUM_PLUS, "+"));

const btnOkClick = document.querySelector(".js-form-btn");
btnOkClick.addEventListener("click", hendlerClickPlusOk);
