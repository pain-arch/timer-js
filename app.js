// target date
const newYear = '1 jan 2022';

//days, hours, mins, secs 
const getDays = document.getElementById('days');
const getHours = document.getElementById('hours');
const getMins = document.getElementById('mins');
const getSeconds = document.getElementById('seconds'); 

//function for setup the timer
function timer(){

    const newYearDate = new Date(newYear);
    const currentDate = new Date();

    const totalSeconds = (newYearDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 /24);
    const hours = Math.floor((totalSeconds / 3600) % 24);
    const min = Math.floor((totalSeconds / 60)%60);
    const sec = Math.floor((totalSeconds)%60);

    getDays.innerText = days;
    getHours.innerText = hours;
    getMins.innerText = min;
    getSeconds.innerText = sec;

    console.log(days, hours, min, sec);
};

timer();

setInterval(timer, 1000);