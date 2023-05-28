// КНОПКИ "ПОКАЗАТЬ ВСЕ"
const buttonShow = document.querySelectorAll('.openAll');
buttonShow.forEach((currentButton) => {

    currentButton.addEventListener('click', (event) => {

        const clickedButton = event.target.closest(".openAll");
        const buttonText = clickedButton.querySelector('.buttonText');
        const buttonSVG = clickedButton.querySelector('.buttonSVG');
        const infoText = clickedButton.previousElementSibling;

        if (buttonText.textContent === 'Показать все') {
            buttonText.textContent = 'Скрыть';
            infoText.classList.remove('infoText_hide');
        } else {
            buttonText.textContent = 'Показать все';
            infoText.classList.add('infoText_hide');
        }
        buttonSVG.classList.toggle('svgTurn');
    });

});

// КНОПКА "ЧИТАТЬ ДАЛЕЕ"
const buttonRead = document.querySelector('.readMore');
buttonRead.addEventListener('click', () => {

    const buttonText = buttonRead.querySelector('.buttonText');
    const buttonSVG = buttonRead.querySelector('.buttonSVG');
    const infoText = buttonRead.previousElementSibling;

    if (buttonText.textContent === 'Читать далее') {
        buttonText.textContent = 'Скрыть';
        infoText.classList.remove('infoText_hide');
    } else {
        buttonText.textContent = 'Читать далее';
        infoText.classList.add('infoText_hide');
    }
    buttonSVG.classList.toggle('svgTurn');
});


/////////////////////////////////////////////////////////////////////////////////
// SIDEBAR-WRAPPER
const buttonBurger = document.querySelector('.svg-burger');
buttonBurger.addEventListener('click', openBurger);
function openBurger() {
    const modal = document.querySelector(".sidebar-wrapper");
    modal.style.display = "block";
}

// // MODAL-MESSAGE-WRAPPER
// const buttonMessage = document.querySelector('.svg-message');
// buttonMessage.addEventListener('click', openMessage);
// function openMessage() {
//     const modal = document.querySelector(".modal-message-wrapper");
//     modal.style.display = "block";
// }
//
// // MODAL-CALL-WRAPPER
// const buttonCall = document.querySelector('.svg-call');
// buttonCall.addEventListener('click', openCall);
// function openCall() {
//     const modal = document.querySelector(".modal-call-wrapper");
//     modal.style.display = "block";
// }

// // MODAL-MESSAGE-WRAPPER
const buttonMessage = document.querySelectorAll('.svg-message');
function openMessage() {
    const modal = document.querySelector(".modal-message-wrapper");
    modal.style.display = "block"; }
buttonMessage.forEach((currentButtonCall) => {
    currentButtonCall.addEventListener('click', openMessage) });

// MODAL-CALL-WRAPPER
const buttonCall = document.querySelectorAll('.svg-call');
function openCall() {
    const modal = document.querySelector(".modal-call-wrapper");
    modal.style.display = "block"; }
buttonCall.forEach((currentButtonCall) => {
    currentButtonCall.addEventListener('click', openCall) });

/////////////////////////////////////////////////////////////////////////////////
// ВСЕ КНОПКИ "ЗАКРЫТЬ"
const buttonClose = document.querySelectorAll('.button-close');
function closeModal(event) {
    const modal = event.target.closest(".modal-function");
    modal.style.display = "none"; }
buttonClose.forEach((currentButtonClose) => {
    currentButtonClose.addEventListener('click', closeModal) });

/////////////////////////////////////////////////////////////////////////////////



// new Swiper('.swiper', {
//     pagination: {
//         el: '.swiper-pagination',
//     },
//     breakpoints: {
//         580: {
//             slidesPerView: 1
//
//         },
//         600: {
//             slidesPerView: 2
//         },
//
//     },
//     spaceBetween: 16,
// });

document.addEventListener('DOMContentLoaded', function () {
    const commonOptions = {
        pagination: {
            el: '.swiper-pagination',
        },
        breakpoints: {
            580: {
                slidesPerView: 1,
            },
            600: {
                slidesPerView: 2,
            },
        },
        spaceBetween: 16,
    };

    // Инициализируем каждый слайдер с общими настройками
    document.querySelectorAll('.mobile-swiper .swiper').forEach(function (container) {
        new Swiper(container, commonOptions);
    });
});