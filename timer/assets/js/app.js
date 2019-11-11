//TIMER
let timer;

//seconds, min, hour
let seconds = 0;
let min = 0;
let hour = 0;

//Buttons that handle start, pause, and reset
let start_btn = document.getElementById("start");
let pause_btn = document.getElementById("pause");
let reset_btn = document.getElementById("reset");

//Timer that runs
let timer_element = document.getElementById("timer");

//stars the timer
start_btn.addEventListener("click", function(){
    timer = setInterval(TimerHandler, 1000);
    start_btn.disabled = true;
    reset_btn.disabled = false;
});
//pauses the timer
pause_btn.addEventListener("click", function(){
    timer = clearInterval(timer);
    reset_btn.disabled = false;
    start_btn.disabled = false;
});
//resets the timer
reset_btn.addEventListener("click", function(){
    timer = clearInterval(timer);
    start_btn.disabled = false;
    reset_btn.disabled = true
    seconds = 0;
    min = 0;
    hour = 0;
    timer_element.innerHTML = "00:00:00";
});

//starts the timer
function TimerHandler(){
    seconds++;

    if(seconds === 60){
        seconds = 0;
        min++;
    }

    if(min === 60){
        min = 0;
        hour++;
    }

    DisplayTime();
}

//changes the time accordingly
function DisplayTime(){
    let _seconds = seconds;
    let _min = min;
    let _hour = hour;

    if(seconds < 10){
        _seconds = "0"+seconds;
    }

    if(min<10) {
        _min = "0"+min;
    }

    if(hour<10){
        _hour = "0"+hour;
    }
    timer_element.innerHTML = _hour + ":" + _min + ":" + _seconds;
}