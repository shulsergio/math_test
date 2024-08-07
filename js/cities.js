import { iziError, iziSuccess, iziWOW } from "./izi.js";
import {
  onCreateCitiesCountText,
  onCreateCitiesFormText,
  onCreateCitiesMainText,
} from "./marckup.js";
const LS_KEY_CHOISECAPITAL = "capital";
const LS_TTL_GAME = "ttl_games";
const LS_WIN_GAME = "win_games";
const LS_COUNTRY_OBJ = "country_obj";
const LS_BOOLEAN_DATA = "boolean_data";
localStorage.setItem(LS_KEY_CHOISECAPITAL, 0);
localStorage.setItem(LS_TTL_GAME, 0);
localStorage.setItem(LS_WIN_GAME, 0);
localStorage.setItem(LS_COUNTRY_OBJ, 0);
localStorage.setItem(LS_BOOLEAN_DATA, 0);
const citiesMainText = document.querySelector(".cities-text-js");
const citiesText = document.querySelector(".cities-text");
const citiesForm = document.querySelector(".citiesForm-js");
const btnNextCity = document.querySelector(".btn-city-next-js");
const citiesCount = document.querySelector(".city-count-js");
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
  const numberIzi = [5, 7, 10, 15, 20, 25, 30, 35, 40, 45, 50];
  document.querySelector(".btn-cities-next").classList.add("btn-disable");
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
  numberIzi.includes(winGamesNew) ? iziWOW(winGamesNew) : "";

  localStorage.setItem(LS_WIN_GAME, winGamesNew);
  console.log("winGamesNew-", winGamesNew);
  let currentTtlGames = parseInt(localStorage.getItem("ttl_games"), 10) + 1;
  localStorage.setItem(LS_TTL_GAME, currentTtlGames);
  citiesText.classList.remove("hidden-all");
}

function newCitiesData() {
  console.log("Updating cities data...");
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

startData();

btnNextCity.addEventListener("click", startData);
