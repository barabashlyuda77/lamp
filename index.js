const turnOnButton = document.querySelector('.turn_on.button');

function turnOnButtonHandler() {
    const lightLamp = document.querySelector('.img-wrapper.light');
    lightLamp.classList.remove('inactive');
    lightLamp.classList.add('active');
    const darkLamp = document.querySelector('.img-wrapper.dark');
    darkLamp.classList.remove('active');
    darkLamp.classList.add('inactive');
    const turnOnButton = document.querySelector('.turn_on.button');
    turnOnButton.classList.remove('button-inactive');
    turnOnButton.classList.add('button-active');
    const turnOffButton = document.querySelector('.turn_off.button');
    turnOffButton.classList.remove('button-active');
    turnOffButton.classList.add('button-inactive');
}

turnOnButton.addEventListener('click', turnOnButtonHandler);

const turnOffButton = document.querySelector('.turn_off.button');

function turnOffButtonHandler() {
    const lightLamp = document.querySelector('.img-wrapper.light');
    lightLamp.classList.remove('active');
    lightLamp.classList.add('inactive');
    const darkLamp = document.querySelector('.img-wrapper.dark');
    darkLamp.classList.remove('inactive');
    darkLamp.classList.add('active');
    const turnOnButton = document.querySelector('.turn_on.button');
    turnOnButton.classList.remove('button-active');
    turnOnButton.classList.add('button-inactive');
    const turnOffButton = document.querySelector('.turn_off.button');
    turnOffButton.classList.remove('button-inactive');
    turnOffButton.classList.add('button-active');
}

turnOffButton.addEventListener('click', turnOffButtonHandler);