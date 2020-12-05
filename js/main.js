'use strict'


let memoryArray = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E']
let memoryValues = [];
let memoryTileIds = [];
let tilesFlipped = 0;
let minutes = 0;
let seconds = 0;

Array.prototype.memoryTileShuffle = function () {
    let i = this.length, j, temp;
    while (--i > 0) {
        j = Math.floor(Math.random() * (i + 1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
};

const workingCounter = () => {
    const counter = document.querySelector('.counter');
    const myRefresher = setInterval(DisplayModifier, 1000);
    
    function DisplayModifier() {        
        seconds++;
         if (seconds == 60) {
            seconds = 0;
            minutes++;
        };
        if (seconds > 9) {
            return document.querySelector('.counter').innerHTML = `0${minutes}:${seconds}`
        } else {
            return document.querySelector('.counter').innerHTML = `0${minutes}:0${seconds}`
        }
    };
}

function clockWatcher() {
    if (minutes != 0 || seconds != 0){
        return
    } else {
        workingCounter()
    }
}

function newBoard() {    
    tilesFlipped = 0;
    let output = '';
    memoryArray.memoryTileShuffle();
    for (let i = 0; i < memoryArray.length; i++) {
        output += '<div id="tile_' + i + '" onclick="memoryFlipTile(this,\'' + memoryArray[i] + '\')"></div>';
    }
    document.getElementById('memory__board').innerHTML = output;
    
};

function memoryFlipTile(tile, val) {
    if (tile.innerHTML == '' && memoryValues.length < 2) {
        tile.style.background = '#FFF';
        tile.innerHTML = val;
        clockWatcher();
        
        if (memoryValues.length == 0) {
            memoryValues.push(val);
            memoryTileIds.push(tile.id);
            
        } else if (memoryValues.length == 1) {
            memoryValues.push(val);
            memoryTileIds.push(tile.id);            
            if (memoryValues[0] == memoryValues[1]) {
                tilesFlipped += 2;
                //Clear both arrays
                memoryValues = [];
                memoryTileIds = [];
                //Check to see if the whole board is clear
                if (tilesFlipped == memoryArray.length) {
                    alert('Board cleared... generating new board');
                    document.getElementById('memory__board').innerHTML = '';
                    newBoard();
                }
            } else {
                function flip2Back() {
                    //Flip the 2 tiles back over
                    let tile_1 = document.getElementById(memoryTileIds[0]);
                    let tile_2 = document.getElementById(memoryTileIds[1]);
                    tile_1.style.background = 'url(./css/img/Kártya.jpg) no-repeat';
                    tile_1.innerHTML = ''
                    tile_2.style.background = 'url(./css/img/Kártya.jpg) no-repeat';
                    tile_2.innerHTML = ''
                    //Clear both arrays
                    memoryValues = [];
                    memoryTileIds = [];
                }
                setTimeout(flip2Back, 1000);               
            } 
        }
    }

}

newBoard()


