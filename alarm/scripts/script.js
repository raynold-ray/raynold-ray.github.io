/*
Program Name:   Alarm Clock
Developer:      Royal Raynold
Date:           2nd November, 2022
FileType:       JavaScript
*/
let alarmTime;
let Ringing = false;
let sound;
let divv = document.querySelector(".inputs");
function displayTime(){
    // REFRESH EVERY 1 SECOND
    var refresh=1000; 
    mytime=setTimeout('CurrentTime()',refresh)
}
    
function CurrentTime() {
    var x = new Date()
    var ampm = x.getHours( ) >= 12 ? ' pm' : ' am';
    hours = x.getHours( )// % 12;

    // GET HOURS
    hours = hours ? hours : 12;
    hours=hours.toString().length==1? 0+hours.toString() : hours;

    // GET MINUTES
    var minutes=x.getMinutes().toString()
    minutes=minutes.length==1 ? 0+minutes : minutes;

    // GET SECONDS
    var seconds=x.getSeconds().toString()
    seconds=seconds.length==1 ? 0+seconds : seconds;

    // UPDATE HTML ELEMENTS
    document.getElementById('dTime').innerHTML = hours + ":" + minutes + ":" + seconds;

    if(alarmTime == (hours + ":" + minutes + ":" + seconds)){
        Ringing = true;
        AlarmSound();
    }
    displayTime();
}

function Validate(){
    var hh = document.getElementById("hour").value;
    var mm = document.getElementById("min").value;
    var ss = document.getElementById("sec").value;

    if (Ringing == true){
        divv.classList.remove("disable");
        document.querySelector("button").textContent = "Set Alarm";
        document.getElementById("hour").value = "";
        document.getElementById("min").value = "";
        document.getElementById("sec").value = "";
        document.getElementById("sss").innerHTML = "";
        document.querySelector("img").classList.remove("ring");
        Ringing = false;
        sound.pause();
        return;
    }
    
    if (hh.length < 1 || hh.length > 2 || mm.length < 1 || mm.length > 2 || ss.length < 1 || ss.length > 2) {
        alert("One or more values may be incorrect!");
        return;
    }
    if (hh/hh != 1 || mm/mm != 1 || ss/ss != 1) {
        alert("Only numbers allowed!");
        document.getElementById("hour").value = "";
        document.getElementById("min").value = "";
        document.getElementById("sec").value = "";
        //return;
    }
    let hhh = parseInt((parseInt(hh) + ((parseInt(mm) + parseInt(ss/60)))/60))%24;
    let mmm = (parseInt(mm) + parseInt(ss/60))%60;
    let ssss = ss%60;

    hhh = hhh < 10 ? "0" + hhh : hhh;
    mmm = mmm < 10 ? "0" + mmm : mmm;
    ssss = ssss < 10 ? "0" + ssss : ssss;

    document.getElementById("hour").value = hhh;
    document.getElementById("min").value = mmm;
    document.getElementById("sec").value = ssss;

    alarmTime = hhh + ":" + mmm + ":" + ssss;

    let dayTime = document.getElementById("hour").value;
    if (dayTime <= 4) {
        document.getElementById("sss").innerHTML = "Dawn";
    } else if (dayTime <= 11) {
        document.getElementById("sss").innerHTML = "Morning";
    } else if (dayTime == 12) {
        document.getElementById("sss").innerHTML = "Noon";
    } else if (dayTime <= 15) {
        document.getElementById("sss").innerHTML = "Afternoon";
    } else if (dayTime <= 21) {
        document.getElementById("sss").innerHTML = "Evening";
    } else if (dayTime <= 23) {
        document.getElementById("sss").innerHTML = "Night";
    } else if (dayTime == 0) {
        document.getElementById("sss").innerHTML = "Midnight";
    } else {
        document.getElementById("sss").innerHTML = "";
    }

    divv.classList.add("disable");
    document.querySelector("button").textContent = "Remove Alarm";
}
function AlarmSound(){
    sound = new Audio("./assets/alarm.mp3");
    document.getElementById("sss").innerHTML = "Alarm is Ringing...";
    document.querySelector("img").classList.add("ring");
    sound.play();
    sound.loop = true;
}