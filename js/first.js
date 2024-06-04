const ARR_NUM = [10, 50]; //минимальное и максиммальное число
const MATH_OPERATION = ["*", "+", "-"];

const list = document.querySelector(".js-list");

function createMarkupHtml(ARR_NUM) {
  const numbersArray = AddMath(ARR_NUM, 1);
  return numbersArray
    .map(
      ({ first_num, second_num }) =>
        `<li class="number">
      ${first_num} + ${second_num} =</li>
        <input type="text" class="input-result js-result">
`
    )
    .join("");
}

function AddMath(numbers, MATH_OPERATION) {
  const newARR = [];
  for (let i = 0; i < 10; i++) {
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

list.insertAdjacentHTML("afterbegin", createMarkupHtml(ARR_NUM));
// const numbersArray = AddMath(ARR_NUM, 1);
