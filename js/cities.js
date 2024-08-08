import { iziError, iziSuccess, iziWOW } from "./izi.js";
import {
  onCreateCitiesCountText,
  onCreateCitiesFormText,
  onCreateCitiesMainText,
  onCreateCitiesModalText,
} from "./marckup.js";
const LS_KEY_CHOISECAPITAL = "capital";
const LS_TTL_GAME = "ttl_games";
const LS_WIN_GAME = "win_games";
const LS_COUNTRY_OBJ = "country_obj";
const LS_PL_NAME = "player_name";
localStorage.setItem(LS_KEY_CHOISECAPITAL, 0);
localStorage.setItem(LS_TTL_GAME, 0);
localStorage.setItem(LS_WIN_GAME, 0);
localStorage.setItem(LS_COUNTRY_OBJ, 0);
const citiesMainText = document.querySelector(".cities-text-js");
const citiesText = document.querySelector(".cities-text");
const citiesForm = document.querySelector(".citiesForm-js");
const btnNextCity = document.querySelector(".btn-city-next-js");
const citiesCount = document.querySelector(".city-count-js");
const citiesModalWindow = document.querySelector(".cities-modal-overlay");
const citiesModalContent = document.querySelector(".cities-modal-content-js");
const citiesFormNameInput = document.querySelector(".form-cities-name-input");
let countries = [];

function startData() {
  citiesText.classList.add("hidden-all");
  fetch("./js/data_file.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      countries = data;
      newCitiesData();
    })
    .catch((err) => {
      return console.log(err);
    });
  citiesForm.addEventListener("submit", hendlerForm);
}
function hendlerForm(e) {
  e.preventDefault();
  document.querySelector(".btn-ok-js").classList.add("btn-disable");
  let data = new FormData(citiesForm);
  let formDataObject = 0;
  for (let value of data.entries()) {
    formDataObject = value;
  }
  console.log(formDataObject[1]);
  const countryObj = JSON.parse(localStorage.getItem("country_obj"));
  const winGamesOld = parseInt(localStorage.getItem("win_games"), 10);
  console.log(winGamesOld);
  console.log(countryObj.capital);
  console.log(formDataObject[1]);
  const winGamesNew = countryObj.capital === formDataObject[1] ? winGamesOld + 1 : winGamesOld;
  winGamesOld === winGamesNew ? iziError() : iziSuccess();
  [5, 7, 10].includes(winGamesNew) ? iziWOW(winGamesNew) : null;

  localStorage.setItem(LS_WIN_GAME, winGamesNew);
  console.log("winGamesNew-", winGamesNew);
  let currentTtlGames = parseInt(localStorage.getItem("ttl_games"), 10) + 1;
  localStorage.setItem(LS_TTL_GAME, currentTtlGames);
  currentTtlGames % 10 === 0 ? onCitiesFinishModalText() : "";
  citiesCount.innerHTML = onCreateCitiesCountText();
  citiesText.classList.remove("hidden-all");
}

function newCitiesData() {
  const country = countries.reduce((acc, item) => {
    return [...acc, item.name];
  }, []);
  const citiesOnly = countries.reduce((acc, item) => {
    return [...acc, ...item.cities];
  }, []);
  console.log(country);
  console.log(citiesOnly);
  let choiceNumber = Math.floor(Math.random() * country.length);
  let cityNotCountryOne = citiesOnly[Math.floor(Math.random() * citiesOnly.length)];
  let cityNotCountryTwo = citiesOnly[Math.floor(Math.random() * citiesOnly.length)];
  let cityNotCountryThree = citiesOnly[Math.floor(Math.random() * citiesOnly.length)];
  let mainChoiceDataObj = {
    country: country[choiceNumber],
    capital: countries[choiceNumber].capital,
    flag: countries[choiceNumber].flag,
    cities: countries[choiceNumber].cities,
    coordinates: countries[choiceNumber].coordinates,
    citiesNotCountry: [cityNotCountryOne, cityNotCountryTwo, cityNotCountryThree],
  };
  console.log(mainChoiceDataObj);
  localStorage.setItem(LS_COUNTRY_OBJ, JSON.stringify(mainChoiceDataObj));
  citiesForm.innerHTML = onCreateCitiesFormText();
  citiesCount.innerHTML = onCreateCitiesCountText();
  citiesMainText.innerHTML = onCreateCitiesMainText();
}
function onCitiesFinishModalText() {
  citiesModalContent.innerHTML = onCreateCitiesModalText("finish");
  citiesModalWindow.classList.remove("name-modal-hidden");
  const clickBtnFinish = document.querySelector(".btn-finish-js");
  clickBtnFinish.addEventListener("click", () => {
    citiesModalWindow.classList.add("name-modal-hidden");
    startData();
  });
}
async function onBtnSaveName(e) {
  e.preventDefault();
  const namePl = document.querySelector("#cities-id-name-input").value;
  citiesModalWindow.classList.add("name-modal-hidden");
  localStorage.setItem(LS_PL_NAME, namePl);
}

citiesModalWindow.classList.remove("name-modal-hidden");
citiesFormNameInput.addEventListener("submit", async (e) => {
  e.preventDefault();
  await onBtnSaveName(e);
  startData();
});
btnNextCity.addEventListener("click", startData);
