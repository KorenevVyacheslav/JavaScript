// объявляем переменные для кнопки, поля ввода и поля вывода
let buttonEvent= document.querySelector('button');
let userTextField = document.querySelector('input');
let userPrint = document.querySelector('#duplicateField');

//Прослушиваем клавиатуру. При нажатии записываем содержимое в поле вывода
userTextField.addEventListener('keyup', () => {
    let userText = userTextField.value;
    userPrint.textContent=userText ;
});

//Ждём левого клика. При нажатии выводим содержимое в консоль,
//выводим пустое поле в поле вывода и в поле ввода
buttonEvent.addEventListener ('click', (event) => {
    let userText = userTextField.value;
    console.log(userText);
    userPrint.textContent = '';
    userTextField.value = '';
    event.preventDefault();
});
