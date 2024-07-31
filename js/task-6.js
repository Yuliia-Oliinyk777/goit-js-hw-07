function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const numberInput = document.querySelector('#controls input');
const parentBox = document.querySelector('#boxes');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
    const onCreateBtnClick = () => {
      const amount = parseInt(numberInput.value.trim());
      if (amount >= 1 && amount <= 100) {
        createBoxes(amount);
        numberInput.value = '';
      } else {
        alert('Please enter a number between 1 and 100');
      }
    };

    const onDestroyBtnClick = () => {
      destroyBoxes();
    };

    const createBoxes = (amount) => {
      destroyBoxes();

      const boxes = [];
      for (let i = 0; i < amount; i++) {
        const box = document.createElement('div');
        const size = 30 + i * 10;
        box.style.width = `${size}px`;
        box.style.height = `${size}px`;
        box.style.backgroundColor = getRandomHexColor();
        boxes.push(box);
      }

      parentBox.append(...boxes);
    };

    const destroyBoxes = () => {
      parentBox.innerHTML = '';
    };

    createBtn.addEventListener('click', onCreateBtnClick);
destroyBtn.addEventListener('click', onDestroyBtnClick);
