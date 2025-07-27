let gameseq=[];
let unserseq=[];
let started=false;
let Level=0;
let btns=["yellow","red","blue","green"];
let highestscore=0;

let h3=document.querySelector("h3");
document.addEventListener("keypress",function(){
    if(started == false){
    console.log("Game Start");
    levelup();
    started =true;    
}
});

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function alert(){
    body=document.querySelector("body");
    body.classList.add("redalert");
    setTimeout(function(){
        body.classList.remove("redalert");
    },250);
}
function levelup(){
    unserseq=[];
    Level++;
    h3.textContent=`Level ${Level}`;
    let rdmidx=Math.floor(Math.random()*3);
    let rdmclr=btns[rdmidx];
    let rdmbtn=document.querySelector(`.${rdmclr}`);
    gameseq.push(rdmclr);
    console.log(gameseq);
    btnflash(rdmbtn);
}

function btnpress(){
    let btn=this;
    btnflash(btn);
    let userclr=btn.getAttribute("id");
    console.log(userclr);
    unserseq.push(userclr);
    clrcheck(unserseq.length-1);
}
let btn=document.querySelectorAll(".btn");

for(b of btn){
    b.addEventListener("click",btnpress);
}

function clrcheck(idx){
    if(unserseq[idx]==gameseq[idx]){
        if(unserseq.length==gameseq.length){
        setTimeout(levelup,800);
        }else{

        }
    }else{
        if(highestscore<Level){
            highestscore=Level;
        }
        h3.innerHTML = `Game Over! Your score was <b>${Level}</b> <br>Highest Score :${highestscore} <br> Press any key to start game again. `;
        alert();
        reset();

    }
}

function reset(){
    started =false;
    gameseq=[];
    unserseq=[];
    Level=0;
}
