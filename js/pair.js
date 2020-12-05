'use strict'

const counter = document.querySelector('.counter')
const cardVeg1 = document.querySelector('.veg1')
const cardVeg2 = document.querySelector('.veg2')
const cardAeg1 = document.querySelector('.aeg1')
const cardAeg2 = document.querySelector('.aeg2')
const cardWal1 = document.querySelector('.wal1')
const cardWal2 = document.querySelector('.wal2')
const cardTris1 = document.querySelector('.tris1')
const cardTris2 = document.querySelector('.tris2')
const cardYgg1 = document.querySelector('.ygg1')
const cardYgg2 = document.querySelector('.ygg2')


const myRefresher = setInterval(counterFunction, 1000);

let minutes = 0;
let seconds = 0;

function DisplayModifier() {
    if (seconds > 9) {
        return `0${minutes}:${seconds}`
    } else { 
        return `0${minutes}:0${seconds}`
    }
};

function counterFunction() {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
    };
    document.querySelector('.counter').innerHTML = DisplayModifier()
};


// cardVeg1.addEventListener('click', button => {
//     cardVeg1.style.backgroundImage = 'url(./css/img/Vegvisir.jpg)'
// })
// cardVeg2.addEventListener('click', button => {
//     cardVeg2.style.backgroundImage = 'url(./css/img/Vegvisir.jpg)'
// })
// cardTris1.addEventListener('click', button => {
//     cardTris1.style.backgroundImage = 'url(./css/img/Triskelion.jpg)'
// })
// cardTris2.addEventListener('click', button => {
//     cardTris2.style.backgroundImage = 'url(./css/img/Triskelion.jpg)'
// })
// cardAeg1.addEventListener('click', button => {
//     cardAeg1.style.backgroundImage = 'url(./css/img/Aegishjalmur.jpg)'
// })
// cardAeg2.addEventListener('click', button => {
//     cardAeg2.style.backgroundImage = 'url(./css/img/Aegishjalmur.jpg)'
// })
// cardWal1.addEventListener('click', button => {
//     cardWal1.style.backgroundImage = 'url(./css/img/Walknut.jpg)'
// })
// cardWal2.addEventListener('click', button => {
//     cardWal2.style.backgroundImage = 'url(./css/img/Walknut.jpg)'
// })
// cardYgg1.addEventListener('click', button => {
//     cardYgg1.style.backgroundImage = 'url(./css/img/Yggdrasil.jpg)'
// })
// cardYgg2.addEventListener('click', button => {
//     cardYgg2.style.backgroundImage = 'url(./css/img/yggdrasil.jpg)'
// })
   

// function matcher(previousCard, currentCard) {
//     if (previousCard.style.backgroundImage != currentCard.style.backgroundImage) {
        
//     }
// }