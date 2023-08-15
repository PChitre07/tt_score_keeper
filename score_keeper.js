const p1button = document.querySelector('#p1button');
const p2button = document.querySelector('#p2button');
const p1display = document.querySelector('#player1display');
const p2display = document.querySelector('#player2display');
const resetbutton = document.querySelector('#resetscore');
const winningscoreselect = document.querySelector('#playto');

let winningscore = 5;
let p1score = 0;
let p2score = 0;
let isgameover = false;

winningscoreselect.addEventListener("change", function(){
    winningscore = parseInt(this.value);
    resetscore();
});

p1button.addEventListener('click', function(){
    if(!isgameover){
        p1score += 1;
        p1display.textContent = p1score;
        if(p1score === winningscore){
            isgameover = true;
            p1display.style.color = 'green';
            p2display.style.color = 'red';
        }
    }
});

p2button.addEventListener('click',function(){
    if(!isgameover){
        p2score += 1;
        p2display.textContent = p2score;
        if(p2score === winningscore){
            isgameover = true;
            p2display.style.color = 'green';
            p1display.style.color = 'red';
        }
    }
});

resetbutton.addEventListener('click', resetscore);

function resetscore(){
    isgameover = false;
    p1score = 0;
    p2score = 0;
    p1display.textContent = 0;
    p2display.textContent = 0;
    p1display.style.color = 'black';
    p2display.style.color = 'black';
}

