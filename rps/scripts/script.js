/* 
Program Name:   Rock, Paper, Scissor Game
Developer:      Royal Raynold
Date:           20th October, 2022
FileType:       JavaScript
*/
let Start = () =>{
    document.getElementById('result').innerHTML = '<img width="300" height="300" src="assets/load.png">';
    ShowLoad();
}
//HIDE LOADING ANIMATION
let HideLoad = () =>{
    document.getElementById("bubble").style.visibility = "hidden";
}
//SHOW LOADING ANIMATION
async function ShowLoad(){
    document.getElementById("bubble").style.visibility = "visible";
    await sleep(1000);
    Game();
}
//ROCK, PAPER, SCISSORS
let Game = () =>{
    let num = Math.floor(Math.random(0) * 3);
    document.getElementById("btnStart").innerHTML = "hrl";
    if(num==1){
        //ROCK
        document.getElementById('result').innerHTML = '<img width="300" height="300" src="assets/rock.png">';
    }else if(num==2){
        //PAPER
        document.getElementById('result').innerHTML = '<img width="300" height="300" src="assets/paper.png">';
    }else{
        //SCISSORS
        document.getElementById('result').innerHTML = '<img width="300" height="300" src="assets/scissors.png">';
    }
    
    HideLoad();
}
//DELAY
const sleep = ms => new Promise(r => setTimeout(r, ms));