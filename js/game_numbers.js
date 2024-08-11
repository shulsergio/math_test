import { iziNumberLose, iziNumberMore, iziNumberWin } from "./izi.js";
let text = 0;
let x = 0;
let Num_comp = Math.floor(Math.random() * 100) + 1;
console.log(".Num_comp-", Num_comp);
const btn = document.querySelector(".numbers-btn-js");
const result = document.querySelector(".result");

btn.addEventListener("click", onBtnNumbersClick);

function onBtnNumbersClick() {
  x++;
  if (x === 11) {
    result.innerHTML = "You LOSE! 10 times input";
    result.style.backgroundColor = "red";
    iziNumberLose();
    btn.classList.add("numbers-btn-hidden");
  }
  text = +document.querySelector(".input-numbers").value;
  document.querySelector(".text-vvod").style.visibility = "visible";
  document.querySelector(".text-vvod").innerHTML += ", " + text;
  if (text === Num_comp) {
    result.innerHTML = "YOU WIN";
    result.style.backgroundColor = "Lime";
    iziNumberWin();
    btn.classList.add("numbers-btn-hidden");
  } else {
    text > Num_comp ? iziNumberMore("Ваше число больше") : iziNumberMore("Ваше число меньше");
  }
}
