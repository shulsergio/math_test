import { AddMath, MAIN_CARD_LIST } from "./const.js";
const list = document.querySelector(".js-list");

export function createFormMarkupHtml(ARR_NUM_PLUS, mathOperation) {
  let i = 0;

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
  return MAIN_CARD_LIST.map(({ icon, itemName, itemText, itemPage, buttomClass, buttomText }) => {
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
  }).join("");
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
export function onCreateCitiesCountText() {
  return `
          <p class="cities-count-ttl">Счет</p>
        <p>Всего игр: ${localStorage.getItem("ttl_games")}</p>
        <p>Угаданно: ${localStorage.getItem("win_games")}</p>
              <a href="./index.html" class="btn-main-card btn-cities-exit ">Выйти на главную</a>
`;
}

export function onCreateCitiesFormText() {
  const data = JSON.parse(localStorage.getItem("country_obj"));
  const plName = localStorage.getItem("player_name");
  const gameTtl = localStorage.getItem("ttl_games");
  let array = [data.capital, ...data.citiesNotCountry];
  array = shuffleArray(array);
  let i = 0;
  let strOne = `
        <p class="cities-form-qvsn">${plName}, вопрос #${parseInt(gameTtl) + 1}</p>
        <p class="cities-form">Страна - <span> ${data.country}</span></p>
        <p class="cities-form">Выбери столицу:</p>
        <div class="form-block">`;
  let strTwo = array
    .map((item) => {
      i = i + 1;
      return ` <div class="form-block-label">
            <input type="radio" id="cityChoice${i}" name="capital" value="${item}" ${
        i === 1 ? "checked" : ""
      }/>
            <label for="cityChoice${i}">${item} </label>
          </div>`;
    })
    .join("");
  let strThree = `</div><div>
  <button type="submit" class="btn-main-card btn-cities-next btn-ok-js">OK</button></div>`;
  return strOne + strTwo + strThree;
}
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export function onCreateCitiesMainText() {
  const data = JSON.parse(localStorage.getItem("country_obj"));
  const zoom = 11;

  return `
<p class="about-country-p">Страна: <span>${data.country}</span></p>
        <div class="about-cities-text">
          <ul class="about-country-list">
            <li class="about-country-item">Столица: <span>${data.capital}</span></li>
            <li class="about-country-item">
              Города страны:
              <p>- ${data.cities[0]}</p>
              <p>- ${data.cities[1]}</p>
              <p>- ${data.cities[2]}</p>
            </li>
          </ul>
          <ul>
            <li class="about-cities-flag">Флаг:</li>
            <li>
              <img
                src="${data.flag}"
                alt="Flag"
                width="100"
                height="80"
              />
            </li>
          </ul>
        </div>
 <div class="gmap-link" >         <a href="https://www.google.com/maps/@${data.coordinates.lat},${data.coordinates.lng},${zoom}z" target="_blank">Открыть столицу на гугл картах</a>
 </div>    `;
}

export function onCreateCitiesModalText(data = "start") {
  let text = "";
  const namePl = localStorage.getItem("player_name");
  const gamesWin = parseInt(localStorage.getItem("win_games"), 10);
  const gamesTtl = parseInt(localStorage.getItem("ttl_games"), 10);
  console.log(gamesWin, gamesTtl, gamesWin / gamesTtl);
  if (gamesWin / gamesTtl < 0.3) {
    text = "Нужно еще учить города";
  } else if (gamesWin / gamesTtl >= 0.3 && gamesWin / gamesTtl < 0.8) {
    text = "Хороший результат, но нужно еще чуть выучить";
  } else {
    text = "ОГО! Ты хорошо знаешь столицы!!";
  }
  return ` <p class="cities-form-qvsn">${namePl}</p>
<p class="input-model-text">Правильных ответов:</p>
<p class="input-model-text">${gamesWin} из ${gamesTtl}</p>
<p class="input-model-text">${text}</p>  
<button type="button" class="btn-main-card btn-cities-finish" onclick="window.location.href='./index.html'">
  На главную
</button>
<button type="button" class="btn-main-card btn-cities-finish btn-finish-js">Давай еще раз</button>`;
}
