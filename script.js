let userscore=0;
let comscore=0;
const pics=document.querySelectorAll(".pic");
let msg=document.querySelector(".msg");
let userScore=document.querySelector("#userScore");
let comScore=document.querySelector("#comScore");
let resetbtn=document.querySelector("#resetbtn");

pics.forEach((pic)=>{
    pic.addEventListener("click",()=>{
        const userChoice=pic.getAttribute("id");
        playGame(userChoice);
    });
});

const playGame=(userChoice)=>{
    console.log("user Choice = ",userChoice);
    const comChoice=gencomChoice();
    console.log("com Choice = ",comChoice);

    if(userChoice===comChoice){
        msg.innerText="Game was a draw,Play again.";
        msg.style.backgroundColor=("rgb(0,0,0,0.8)");
    }
    else{
        let userWin=true;
        if(comChoice==="rock"){
            userWin=userChoice==="paper"?true:false;
        }
        else if(comChoice==="paper"){
            userWin=userChoice==="scissors"?true:false;
        }
        else if(comChoice==="scissors"){
            userWin=userChoice==="rock"?true:false;
        }
        showWinner(userWin,userChoice,comChoice);
    }
    
}

const gencomChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}

const showWinner=(userWin,userChoice,comChoice)=>{
    if(userWin){
        userscore++;
        userScore.innerText=userscore;
        msg.innerText=`You win!,your ${userChoice} beats ${comChoice}.`;
        msg.style.backgroundColor=("green");
    }
    else{
        comscore++;
        comScore.innerText=comscore;
        msg.innerText=`You lose,${comChoice} beats your ${userChoice}.`;
        msg.style.backgroundColor=("red");
    }
}
resetbtn.addEventListener("click",()=>{
    msg.innerText="Play your move";
    msg.style.backgroundColor=("rgb(0,0,0,0.8)");
    comscore=0;
    comScore.innerText=comscore;
    userscore=0;
    userScore.innerText=userscore;
});

