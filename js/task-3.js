  const fieldIn= document.querySelector('#name-input');
  const fieldOut = document.querySelector('#name-output');

const onFieldInInput = () => {
    const trimmedValue = fieldIn.value.trim();
    fieldOut.textContent = trimmedValue === '' ? 'Anonymous' : trimmedValue;
  }
fieldIn.addEventListener('input', onFieldInInput);