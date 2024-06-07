const ARR_NUM_PLUS = [1, 21]; //минимальное и максиммальное число
const MATH_OPERATION = ["*", "+", "-"];
const newARR = [];
const list = document.querySelector(".js-list");
const newForm = document.querySelector(".js-my-form");

function createInputMarkupHtml(ARR_NUM_PLUS) {
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

function createFormMarkupHtml(ARR_NUM_PLUS) {
  let i = 0;
  const numArray = AddMath(ARR_NUM_PLUS, 1);
  return numArray
    .map(({ first_num, second_num }) => {
      i += 1;
      return `
      <div class="form-group">
        <label for="field${i}">${first_num} + ${second_num}</label>
        <input type="text" id="form-result${i}" name="form-result${i}" placeholder="Ответ" />
      </div>
`;
    })
    .join("");
}

function AddMath(numbers, MATH_OPERATION) {
  let numA = 0,
    numB = 0;
  for (let i = 0; i < 5; i++) {
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
function checkResults(data) {
  let i = 0;
  console.log("checkResults");
  console.log(data);
  console.log(newARR);
  //   for (let key in data) {
  //     console.log("data[key] - " + newARR.result_plus[key]);
  //     console.log("data[key].value- " + newARR.result_plus[key].value);
  //     console.log("newARR[i].result_plus - " + newARR[i].result_plus);
  //      if (data[key] === newARR[i].result_plus) {}
  //     i++;
  //   }
}

function hendlerClickOk() {
  const form = document.querySelector(".js-my-form");
  const formData = new FormData(form);
  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });

  console.log(data);
  btnOkClick.style.visibility = "disabled";
  checkResults(data);
}

list.insertAdjacentHTML("afterbegin", createInputMarkupHtml(ARR_NUM_PLUS));
newForm.insertAdjacentHTML("afterbegin", createFormMarkupHtml(ARR_NUM_PLUS));
const btnOkClick = document.querySelector(".js-form-btn");
btnOkClick.addEventListener("click", hendlerClickOk);

// const numbersArray = AddMath(ARR_NUM_PLUS, 1);
