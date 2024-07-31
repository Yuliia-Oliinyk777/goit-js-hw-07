function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const changeColBtn = document.querySelector('.change-color');
const colorValue = document.querySelector('.color');

const onBtnClick = () => {
  colorValue.innerHTML = getRandomHexColor();
  document.body.style.backgroundColor = colorValue.textContent }
changeColBtn.addEventListener('click', onBtnClick);
