export function animar(el, animacao) {
  el.classList.add("animate__animated", `animate__${animacao}`);
  el.addEventListener("animationend", () => {
    el.classList.remove("animate__animated", `animate__${animacao}`);
  }, { once: true });
}