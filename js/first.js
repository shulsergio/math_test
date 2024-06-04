const ARR_NUM = [1, 100]; //минимальное и максиммальное число
const MATH_OPERATION = ["*", "+", "-"];
const newARR = [];
function AddMath(ARR_NUM, MATH_OPERATION) {
  for (let i = 0; i < 250; i++) {
    newARR.push(
      Math.floor(Math.random() * (ARR_NUM[1] - ARR_NUM[0]) + ARR_NUM[0])
    );
  }
  const sortedArr = newARR.toSorted((a, b) => a - b);
  console.log(sortedArr);
}
AddMath(ARR_NUM, 1);
