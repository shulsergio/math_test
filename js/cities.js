import { onCreateCitiesMainText } from "./marckup.js";
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
  let data = new FormData(citiesForm);
  let formDataObject = 0;
  for (let value of data.entries()) {
    formDataObject = value;
  }
  console.log(formDataObject[1]);
  localStorage.setItem(LS_KEY_CHOISECAPITAL, JSON.stringify(formDataObject[1]));
  let currentTtlGames = localStorage.getItem("ttl_games");
  currentTtlGames = parseInt(currentTtlGames, 10) + 1;
  localStorage.setItem(LS_TTL_GAME, JSON.stringify(currentTtlGames));
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

  let mainChoiceDataObj = {
    country: country[choiceNumber],
    capital: countries[choiceNumber].capital,
    flag: countries[choiceNumber].flag,
    coordinates: countries[choiceNumber].coordinates,
    cityOne: citiesOnly[Math.floor(Math.random() * citiesOnly.length)],
    cityTwo: citiesOnly[Math.floor(Math.random() * citiesOnly.length)],
  };
  console.log(mainChoiceDataObj);
  localStorage.setItem(LS_COUNTRY_OBJ, JSON.stringify(mainChoiceDataObj));
  citiesMainText.innerHTML = onCreateCitiesMainText();
}

startData();
const btnNextCity = document.querySelector(".btn-city-next-js");
btnNextCity.addEventListener("click", () => {
  startData(); // Обновляем данные при клике
});
