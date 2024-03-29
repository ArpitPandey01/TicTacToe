let music = new Audio("sources/ting.mp3");
let gameover = new Audio('sources/gameover.mp3');
let turn = "X";
let matchOver = false;
let reset = document.getElementById("reset");

const changeTurn = ()=>{
    return turn === "X"?"0":"X";
}
const checkWin = ()=>{
    let boxText = document.getElementsByClassName("textBox");
   let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],

        [0,3,6],
        [1,4,7],
        [2,5,8],

        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e =>{
        if((boxText[e[0]].innerText === boxText[e[1]].innerText) && (boxText[e[2]].innerText === boxText[e[1]].innerText) && (boxText[e[0]].innerText!== "")){
            document.querySelector(".info").innerText = boxText[e[0]].innerText + " Won";
            gameover.play();
            matchOver = true;
            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "200px";
        }
    });
}
//Logic 

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxText = element.querySelector(".textBox");
    element.addEventListener('click',()=>{
        if(boxText.innerText === ''){
            boxText.innerText = turn;
            turn = changeTurn();
            music.play();
            checkWin();
            if(!matchOver)
            {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    })
})

reset.addEventListener('click', (e)=>{
    let boxText = document.querySelectorAll('.textBox');
    Array.from(boxText).forEach(element =>{
        element.innerText = " ";
    });
    turn = "X"
    matchOver = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "0px";

});