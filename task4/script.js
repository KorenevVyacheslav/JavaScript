// объявляем переменную для поля ссылки
const userTextField = document.querySelector('a');

//Ждём левого клика. При нажатии запрашиваем текст и
//выводим его в поле ссылки
userTextField.addEventListener ('click', (event) => {
    let userText = prompt('Введите текст');
    userTextField.textContent = userText;
    event.preventDefault();
});
