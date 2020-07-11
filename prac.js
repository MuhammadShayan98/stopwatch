var min=0;
var sec=0;
var millisec=0;
var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var msecHeading= document.getElementById("millisec");
var interval;

function timer(){
    millisec++;
    msecHeading.innerHTML =millisec;
    if(millisec >=100){
        sec++
        secHeading.innerHTML =sec
        millisec =0;

    }
    else if(sec >=60){
        min++
        minHeading.innerHTML =min
        sec=0
    }
}
function start(){
    interval = setInterval(timer,10);
}
function stop(){
    clearInterval(interval)
}
function reset(){
    min=0
    sec=0
    milli=0
    minHeading.innerHTML=min;
    secHeading.innerHTML=sec;
    msecHeading.innerHTML=millisec;
    clearInterval(interval)
}