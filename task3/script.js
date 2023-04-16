// объявляем переменные 
const trafficLightE1 = document.querySelector('#trafficLight1');
const trafficLightE2 = document.querySelector('#trafficLight2');
const trafficLightE3 = document.querySelector('#trafficLight3');
let color = 0;
let result = 0;

//прослушиваем клики по каждому блоку и проверяем какой блок активен
// выключаем активный блок, включаем следующий
trafficLightE1.addEventListener('click', () => {
    result = activeDiv();
    if (result == 0 || result == 3) { 
        makeGreen(); 
    } else if (result == 1) { 
        makeYellow();
    } else if (result == 2) {
        makeRed(); 
    }
});

trafficLightE2.addEventListener('click', () => {
    result = activeDiv();
    if (result == 0 || result == 1) { 
        makeYellow();
    } else if (result == 2) { 
        makeRed();
    } else if (result == 3) { 
        makeGreen(); 
    }
});

trafficLightE3.addEventListener('click', () => {
    result = activeDiv();
    if (result == 0 || result == 2) { 
        makeRed();
    } else if (result == 1) { 
        makeYellow();
    } else if (result == 3) { 
        makeGreen(); 
    }
});

//функция возвращает переменную, указывающую какой блок активен
function activeDiv() {
    if (trafficLightE1.style.background == ('green')) {
        color = 1;
    } else if (trafficLightE2.style.background == ('yellow')) {
        color = 2;
    } else if (trafficLightE3.style.background == ('red')) {
        color = 3;
    }
    return color;
}

//функции включения блоков
function makeGreen() {
    trafficLightE1.style.background = ('green');
    trafficLightE2.style.background = ('black');
    trafficLightE3.style.background = ('black');
}

function makeYellow() {
    trafficLightE1.style.background = ('black');
    trafficLightE2.style.background = ('yellow');
    trafficLightE3.style.background = ('black');
}

function makeRed() {
    trafficLightE1.style.background = ('black');
    trafficLightE2.style.background = ('black');
    trafficLightE3.style.background = ('Red');
}