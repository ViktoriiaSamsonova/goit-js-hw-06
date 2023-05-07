
const form = document.querySelector('.login-form');

form.addEventListener('submit', event => {
  event.preventDefault(); // Отменяем перезагрузку страницы

  const formData = new FormData(event.target); // Создаем новый экземпляр объекта FormData и передаем в него форму

  if (!formData.get('email') || !formData.get('password')) { // Если одно из полей пустое
    alert('All fields must be filled in!'); // Выводим предупреждение
  } else { // Иначе
    const formDataObject = Object.fromEntries(formData.entries()); // Преобразуем данные формы в объект
    console.log(formDataObject); // Выводим объект с введенными данными в консоль
    form.reset(); // Очищаем значения полей формы
  }
});
