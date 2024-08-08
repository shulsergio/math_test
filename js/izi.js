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
