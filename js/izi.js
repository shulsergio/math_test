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
// ---- numbers

export function iziNumberLose() {
  iziToast.error({
    title: "УПС",
    message: "Game OVER",
    position: "topRight",
    timeout: 4000,
    color: "red",
  });
}

export function iziNumberWin() {
  iziToast.success({
    title: "WOW!!!",
    message: "И это правильно!!! ПОБЕДА!!! ",
    position: "topRight",
    timeout: 4500,
    color: "#ff00f2",
  });
}

export function iziNumberMore(data) {
  iziToast.success({
    title: "ОК!",
    message: `${data}, продолжай`,
    position: "topRight",
    timeout: 4500,
    color: "green",
  });
}
