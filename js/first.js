import { createMarkupMainCard } from "./marckup.js";
const createMainList = document.querySelector(".main-list-js");
createMainList.insertAdjacentHTML("beforeend", createMarkupMainCard());

const modalLinks = document.querySelectorAll(".modal-close-js");
const modalOverlay = document.querySelector(".mobmenu-modal-overlay");
const btnMobMenuOpen = document.querySelector(".mobmenu-modal-open-js");

// ----- overlay
modalLinks.forEach((link) => {
  link.addEventListener("click", () => {
    modalOverlay.classList.add("mobmenu-modal-hidden");
    // modalOverlay.classList.remove("mobmenu-modal-show");
  });
});
btnMobMenuOpen.addEventListener("click", () => {
  modalOverlay.classList.remove("mobmenu-modal-hidden");
  //   modalOverlay.classList.add("mobmenu-modal-show");
});
