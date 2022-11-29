/* 
Program Name:   Custom Music Player
Developer:      Royal Raynold
Date:           29th November, 2022
FileType:       JavaScript
*/
const prog = document.getElementById("progress");
const bwd = document.getElementById("bwd");
const title = document.getElementById("title");
const play = document.getElementById("play");
const spec = document.getElementById("spec");
const fwd = document.getElementById("fwd");
const cover = document.getElementById("cover");
const bars = document.querySelectorAll("bar");
const music = document.createElement("audio");
let track = 0;
let mplaying = 0;

const musicList = [
    {
        img: "./files/2021-09-17.jpg",
        name:  "The Last Butterfly  Beautiful Piano Violin Music.mp3",
        music: "./files/butterfly.mp3"
    },
    {
        img: "./files/flower.jpg",
        name: "Naruto  Sadness and Sorrow Violin Cover By Taylor Davis.mp3",
        music: "./files/naruto.mp3"
    }
]

function playMusic(){
    if(track == 0){
        music.src = musicList[0].music;
        music.load();
        cover.src = musicList[0].img;
        title.innerText = musicList[0].name;
    }else{
        music.src = musicList[1].music;
        music.load();
        cover.src = musicList[1].img;
        title.innerText = musicList[1].name;
    }
    music.play();
    
}

play.addEventListener("click", () => {
    if(play.classList.contains("fa-play")){
        mplaying = 1;
        playMusic();
        play.classList.replace("fa-play", "fa-pause");
        spec.classList.toggle("specAnim");
    }else{
        play.classList.replace("fa-pause", "fa-play");
        music.pause();
        spec.classList.toggle("specAnim");
        mplaying = 0;
    }
    prog.classList.toggle("playAnim")
})

bwd.addEventListener("click", () => {
    if(mplaying == 1){
        if(track == 1){
            track = 0;
            music.pause();
            playMusic();
            prog.classList.toggle("green");
        } 
    }
});

fwd.addEventListener("click", () => {
    if(mplaying == 1){
        if(track == 0){
            track = 1;
            music.pause();
            playMusic();
            prog.classList.toggle("green");
        } 
    }
});