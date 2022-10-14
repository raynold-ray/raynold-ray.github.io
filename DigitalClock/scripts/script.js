/*
Program Name:   Digital Clock
Developer:      Royal Raynold
Date:           13th October, 2022
FileType:       JavaScript
*/

function displayTime(){
    // REFRESH EVERY 1 SECOND
    var refresh=1000; 
    mytime=setTimeout('CurrentTime()',refresh)
}
    
function CurrentTime() {
    var x = new Date()
    var ampm = x.getHours( ) >= 12 ? ' PM' : ' AM';
    hours = x.getHours( ) % 12;

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
    document.getElementById('hh').innerHTML = hours;
    document.getElementById('mm').innerHTML = minutes;
    document.getElementById('ss').innerHTML = seconds;
    document.getElementById('apm').innerHTML = ampm;
    displayTime();
}