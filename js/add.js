import { hendlerClickOk } from "./const.js";
import { createFormMarkupHtml } from "./marckup.js";
const newForm = document.querySelector(".js-my-form");

const ARR_NUM_PLUS = [0, 50]; //минимальное и максиммальное число

newForm.insertAdjacentHTML("afterbegin", createFormMarkupHtml(ARR_NUM_PLUS));
const btnOkClick = document.querySelector(".js-form-btn");
btnOkClick.addEventListener("click", hendlerClickOk);
