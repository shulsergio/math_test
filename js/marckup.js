import { AddMath, MAIN_CARD_LIST } from "./const.js";
const list = document.querySelector(".js-list");

export function createFormMarkupHtml(ARR_NUM_PLUS) {
  let i = 0;
  console.log("ARR_NUM_PLUS");
  console.log(ARR_NUM_PLUS);
  const numArray = AddMath(ARR_NUM_PLUS, 1);
  return numArray
    .map(({ first_num, second_num }) => {
      i += 1;
      return `
      <div class="form-group"> <span class="circle circle${i}"></span>
        <label class="field field${i}">${first_num} + ${second_num}= </label>
        <input type="number" class="form-result" id="form-result${i}" name="form-result${i}" placeholder="Ответ" required autocomplete="off"/>
      </div>
`;
    })
    .join("");
}

export function createMarkupMainCard() {
  console.log("MAIN_CARD_LIST");
  console.log(MAIN_CARD_LIST);
  return MAIN_CARD_LIST.map(
    ({ icon, itemName, itemText, itemPage, buttomClass, buttomText }) => {
      return `<li class="main-item">
            <div class="for-svg">
              <svg class="icon">
                <use
                  xlink:href="${icon}"
                  width="48"
                  height="48"
                ></use>
              </svg>
            </div>
            <p class="item-text-name">${itemName}</p>
            <p class="item-text">${itemText}</p>
            <a href="${itemPage}" class="${buttomClass}">${buttomText}</a>
          </li>`;
    }
  ).join("");
}
