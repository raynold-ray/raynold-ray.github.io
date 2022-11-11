/* 
Program Name:   Custom MP4 Video Player
Developer:      Royal Raynold
Date:           11th November, 2022
FileType:       JAVASCRIPT
*/
const player = document.querySelector(".player");
const mVideo = document.getElementById("videoclass");
const playPause = document.getElementById("playPause");
const aProgress = document.getElementById("aProgress");
const pBar = document.getElementById("pBar");
const bwd = document.getElementById("bwd");
const fwd = document.getElementById("fwd");
const vUp = document.getElementById("vUp");
const expand = document.getElementById("expand");
const cTime = document.getElementById("cTime");
const maxTime = document.getElementById("maxTime");
const cArea = document.getElementById("cArea");
const bProgress = document.getElementById("bProgress");
let cVolume;
let hidden = true;

//Hide custom controls
cArea.style.visibility = "hidden";
bProgress.style.visibility = "hidden";

//Return time formatted correctly
const formatTime = time =>{
    //Get time as hours, minutes and seconds
    let seconds = Math.floor(time%60),
    minutes = Math.floor(time/60)%60,
    hours = Math.floor(time/3600);

    //append '0' before single digits
    seconds = seconds < 10 ? `0${seconds}` : seconds;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    hours = hours < 10 ? `0${hours}` : hours;

    if (hours == 0){
        return `${minutes}:${seconds}`;
    }
    return `${hours}:${minutes}:${seconds}`;
}

//Play
playPause.addEventListener("click", () => {
    mVideo.paused ? mVideo.play() : mVideo.pause();
});

//Change play button on click
mVideo.addEventListener("play", () => {
    playPause.classList.replace("fa-play", "fa-pause");
});
mVideo.addEventListener("pause", () => {
    playPause.classList.replace("fa-pause", "fa-play");
});

//Show/hide controls on video click
mVideo.addEventListener("click", () => { 
    if(hidden == false){
        cArea.style.visibility = "hidden";
        bProgress.style.visibility = "hidden";
        hidden = true;
    }else{
        cArea.style.visibility = "visible";
        bProgress.style.visibility = "visible";
        hidden = false;
    }
});

//Set video times
mVideo.addEventListener("loadeddata", e => {
    maxTime.innerText = formatTime(e.target.duration);
});
mVideo.addEventListener("timeupdate", e => {
    let {currentTime, duration} = e.target;
    let prog = (currentTime / duration) * 100;
    pBar.style.width = prog + "%";
    cTime.innerText = formatTime(currentTime);
});

//Handling forward click
fwd.addEventListener("click", () =>{
    mVideo.currentTime += 5;
});

//Handling backward click
bwd.addEventListener("click", () =>{
    mVideo.currentTime -= 5;
});

//Set to full screen
expand.addEventListener("click", () =>{
    player.classList.toggle("fullscreen");
    if(document.fullscreenElement){
        expand.classList.replace("fa-compress", "fa-expand")
        return document.exitFullscreen();
    }
    expand.classList.replace("fa-expand", "fa-compress")
    player.requestFullscreen();
});

//Change video position on progressbar click, and drag
aProgress.addEventListener("click", e =>{
    let pos = e.target.clientWidth;
    mVideo.currentTime = (e.offsetX / pos) * mVideo.duration;
});
const drag = e =>{
    let pos = e.target.clientWidth;
    pBar.style.width = `${e.offsetX}px`;
    mVideo.currentTime = (e.offsetX / pos) * mVideo.duration;
    cTime.innerText = formatTime(mVideo.currentTime);
}
aProgress.addEventListener("mousedown", () =>{
    aProgress.addEventListener("mousemove", drag);
});
aProgress.addEventListener("mouseup", () =>{
    aProgress.removeEventListener("mousemove", drag);
});

//Handle volume icon click
vUp.addEventListener("click", () =>{
    if(vUp.classList.contains("fa-volume-up")){
        cVolume = mVideo.volume;
        mVideo.volume = 0.0;
        vUp.classList.replace("fa-volume-up", "fa-volume-off");
    }else{
        mVideo.volume = cVolume;
        vUp.classList.replace("fa-volume-off", "fa-volume-up");
    }
});

//More commands on arrow keys click
document.onkeydown = checkKey;
function checkKey(e) {
    e = e || window.event;
    if (e.keyCode == '38') {
        // up arrow
        console.log(mVideo.volume);
        if(mVideo.volume > 0.94){
            mVideo.volume = 1;
            return;
        }else{
            mVideo.volume += 0.05;
            if(!vUp.classList.contains("fa-volume-up")){
                vUp.classList.replace("fa-volume-off", "fa-volume-up");
            }
        }
    }else if (e.keyCode == '40') {
        // down arrow
        console.log(mVideo.volume);
        if(mVideo.volume < 0.06){
            mVideo.volume = 0.0;
            if(!vUp.classList.contains("fa-volume-off")){
                vUp.classList.replace("fa-volume-up", "fa-volume-off");
            }
            return;
        }else{
            mVideo.volume -= 0.05;
        }
    }else if (e.keyCode == '37') {
        mVideo.currentTime -= 5;// left arrow
    }else if (e.keyCode == '39') {
        mVideo.currentTime += 5;// right arrow
    }
};