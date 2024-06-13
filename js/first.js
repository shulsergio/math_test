const ARR_NUM_PLUS = [1, 11]; //минимальное и максиммальное число
const MATH_OPERATION = ["*", "+", "-"];
const newARR = [];
const list = document.querySelector(".js-list");
const newForm = document.querySelector(".js-my-form");

function createFormMarkupHtml(ARR_NUM_PLUS) {
  let i = 0;
  const numArray = AddMath(ARR_NUM_PLUS, 1);
  return numArray
    .map(({ first_num, second_num }) => {
      i += 1;
      return `
      <div class="form-group"> <span class="circle circle${i}"></span>
        <label class="field field${i}">${first_num} + ${second_num}= </label>
        <input type="text" class="form-result" id="form-result${i}" name="form-result${i}" placeholder="Ответ" required autocomplete="off"/>
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

function hendlerClickOk() {
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

newForm.insertAdjacentHTML("afterbegin", createFormMarkupHtml(ARR_NUM_PLUS));
const btnOkClick = document.querySelector(".js-form-btn");
btnOkClick.addEventListener("click", hendlerClickOk);
