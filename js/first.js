const ARR_NUM_PLUS = [1, 21]; //минимальное и максиммальное число
const MATH_OPERATION = ["*", "+", "-"];

const list = document.querySelector(".js-list");

function createMarkupHtml(ARR_NUM_PLUS) {
  let i = 1;
  const numbersArray = AddMath(ARR_NUM_PLUS, 1);
  return numbersArray
    .map(({ first_num, second_num }) => {
      i += 1;
      return `<li class="number">
      ${first_num} + ${second_num} =</li>
        <input type="text" class="input-result${i} js-result">
`;
    })
    .join("");
}

function AddMath(numbers, MATH_OPERATION) {
  const newARR = [];
  for (let i = 0; i < 5; i++) {
    newARR.push({
      first_num: Math.floor(
        Math.random() * (numbers[1] - numbers[0]) + numbers[0]
      ),
      second_num: Math.floor(
        Math.random() * (numbers[1] - numbers[0]) + numbers[0]
      ),
    });
  }
  console.log("newARR:");
  console.log(newARR);
  return newARR;
}

list.insertAdjacentHTML("afterbegin", createMarkupHtml(ARR_NUM_PLUS));
const btnOkClick = document.querySelector(".js-btn");
btnOkClick.addEventListener("click", hendlerClickOk);
function hendlerClickOk() {}
// const numbersArray = AddMath(ARR_NUM_PLUS, 1);
