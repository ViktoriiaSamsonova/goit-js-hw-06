const input = document.getElementById('validation-input');

input.addEventListener('blur', handleInputBlur);

function handleInputBlur() {
  const inputValue = input.value.trim();
  const expectedLength = input.getAttribute('data-length');

  if (inputValue.length === Number(expectedLength)) {
    input.classList.remove('invalid');
    input.classList.add('valid');
  } else {
    input.classList.remove('valid');
    input.classList.add('invalid');
  }
}