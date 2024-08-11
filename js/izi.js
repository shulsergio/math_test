let map;

export function iziSuccess() {
  iziToast.success({
    title: "ООО!!!",
    message: "И это правильно!!! ",
    position: "topRight",
    timeout: 3500,
    color: "green",
  });
}
export function iziError() {
  iziToast.error({
    title: "Мимо",
    message: "Не спеши, думай)",
    position: "topRight",
    timeout: 3500,
    color: "red",
  });
}
export function iziWOW(qty) {
  iziToast.success({
    title: "WOW!!!",
    message: qty > 10 ? `Уже ${qty} верных ответов!!!` : `${qty} раз правильно! WOW!!!`,
    position: "topRight",
    timeout: 4000,
    color: "#ff00f2",
  });
}

export function getMapLeaflet(lat, lng) {
  // Создаем карту

  if (map) {
    map.remove(); // Удаляем старую карту
  }
  map = L.map("map").setView([lat, lng], 4); // Задаем координаты и уровень масштабирования

  // Добавляем слой карты
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy",
  }).addTo(map);
}
