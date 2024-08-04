import { createMarkupMainCard } from "./marckup.js";
const createMainList = document.querySelector(".main-list-js");
createMainList.insertAdjacentHTML("beforeend", createMarkupMainCard());
