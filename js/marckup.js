import { AddMath, MAIN_CARD_LIST } from "./const.js";
const list = document.querySelector(".js-list");

export function createFormMarkupHtml(ARR_NUM_PLUS, mathOperation) {
  let i = 0;

//   console.log("ARR_NUM_PLUS");
//   console.log(ARR_NUM_PLUS);
  const numArray = AddMath(ARR_NUM_PLUS, mathOperation);
  return numArray
    .map(({ first_num, second_num }) => {
      i += 1;
      return `
      <div class="form-group"> <span class="circle circle${i}"></span>
        <label class="field field${i}">${first_num} ${mathOperation} ${second_num}= </label>
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

export function createModalContent(data) {
  return data
    .map(({ itemName, itemPage, wrongQty }) => {
      return `
                 <div class="modal-text-box">
              <p class="modal-text">Супер!!! ${itemName} решено</p>
              <p class="modal-text">Результаты:</p>
              <p class="modal-text">всего ${wrongQty} не правильных ответов</p>
            </div>
            <a href="${itemPage}" class="btn-main-card btn-modal"
              >Считать еще раз</a
            >
            <a href="./index.html" class="btn-main-card btn-modal"
              >На главную</a
            >   `;
    })
    .join("");
}
