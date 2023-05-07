const input = document.querySelector('#validation-input');

input.addEventListener('blur', handleInputBlur);

function handleInputBlur(event) {
  const textLength = event.target.value.length;
  const requiredLength = Number(event.target.getAttribute('data-length'));

  if (textLength === requiredLength) {
    event.target.classList.add('valid');
    event.target.classList.remove('invalid');
  } else {
    event.target.classList.add('invalid');
    event.target.classList.remove('valid');
  }
}