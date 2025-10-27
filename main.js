const hourhand = document.getElementById("hourhand");
const minuteshand = document.getElementById("minuteshand");
const secondshand = document.getElementById("secondshand");

function updateClock(){
    const time = new Date();
    const gethour = time.getHours();
    const getminute = time.getMinutes();
    const getseconds = time.getSeconds();
    const getmilliseconds = time.getMilliseconds(); // ← Missing before

    const hoursdeg = ((gethour % 12) / 12) * 360 + (getminute / 60) * 30 + (getseconds / 3600) * 30;
    const minutesDeg = getminute * 6 + getseconds * 0.1 + getmilliseconds * (0.1 / 1000);
    const secondsDeg = getseconds * 6 + (getmilliseconds / 1000) * 6;

    hourhand.style.transform = `rotate(${hoursdeg + 180}deg)`;
    minuteshand.style.transform = `rotate(${minutesDeg + 180}deg)`; 
    secondshand.style.transform = `rotate(${secondsDeg}deg)`;
}

updateClock();
setInterval(updateClock, 50);
