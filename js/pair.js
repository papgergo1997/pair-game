'use strict'

const counter = document.querySelector('.counter')
const cardVeg = document.querySelectorAll('.veg')
const cardAeg = document.querySelectorAll('.aeg')
const cardWal = document.querySelectorAll('.wal')
const cardTris = document.querySelectorAll('.tris')
const cardYgg = document.querySelectorAll('.ygg')


const myVar = setInterval(clock, 1000);

let minutes = 0;
let seconds = 0;

function secondDisplayModifier() {
    if (seconds > 9) {
        return `0${minutes}:${seconds}`
    } else { 
        return `0${minutes}:0${seconds}`
    }
};

function clock() {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
    };
    document.querySelector('.counter').innerHTML = secondDisplayModifier()
};

   