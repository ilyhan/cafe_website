
// Берём кнопку вперёд
let btnRight = document.querySelector(".btnRight");
// Берём слайды
let slides = document.querySelectorAll(".slide");
// Объявляем переменную i
let i = 0;

// Объявляем событие нажатия на кнопку вперёд
btnRight.addEventListener("click", function () {
    // Увеличиваем переменную i
    ++i
    // Условие если переменная i больше или равна количеству слайдов
    if (i >= slides.length) {
        // Удаляем класс block предыдущему слайду
        slides[i-1].classList.remove("block");
        // Присваиваем переменной i ноль
        i = 0;
        // Добавляем класс block следующему слайду
        slides[i].classList.add("block");
    } else { // Иначе
        // Удаляем класс block предыдущему слайду
        slides[i-1].classList.remove("block");
        // Добавляем класс block следующему слайду
        slides[i].classList.add("block");
    }
})





let button = document.querySelector('.btn');
let active = document.querySelector('.active');
let ul = document.querySelector('.nav_ul');

 button.onclick = function() {
  ul.classList.toggle('active');
}

let upButton = document.querySelector('h1');

window.onscroll = function () {
  if (window.pageYOffset > 1800) {
    upButton.classList.add('none');
  } else {
    upButton.classList.remove('none');
  }

};
