"use strict"

var hour=0;
var minutes=0
var seconds=0


var time=1000;   //quantos milésimos valem 1 segundo//

var cron;


//
function Start(){
    
    cron=setInterval(()=> {timer();},time);
}

//
function Pause(){
    
    clearInterval(cron)

}

//
function Delete(){

hour=0;
minutes=0;
seconds=0;
document.getElementById("counter").innerText ="00:00:00";

}

//
function timer(){
    seconds++;

    if(seconds==60){
        seconds=0;
        minutes++;

        if(minutes==60){
            minutes=0;
            hour++;
        }
    }

var format = (hour<10? "0" +hour: hour) +":"+ (minutes<10 ? "0" + minutes : minutes) + ":" + (seconds<10? "0" + seconds : seconds);
 document.getElementById("counter").innerText =format;
}
