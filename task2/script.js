// объявляем переменные
let consoleLog = document.querySelector('#consoleLog');
let alertView = document.querySelector('#alert');
let promptView = document.querySelector('#prompt');

//прослушиваем левый клик на каждом абзаце
consoleLog.addEventListener ('click', () => {
    alert('Пример использования команды console.log');
});

alertView.addEventListener ('click', () => {
    alert('Пример использования команды alert');
});

promptView.addEventListener ('click', () => {
    alert('Пример использования команды prompt');
});