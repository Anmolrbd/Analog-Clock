const hourhand = document.getElementById("hourhand");
const minuteshand = document.getElementById("minuteshand");
const secondshand = document.getElementById("secondshand");

function updateClock(){
    const time = new Date();
    const gethour = time.getHours();
    const getminute = time.getMinutes();
    const getseconds = time.getSeconds();
    const hoursdeg = gethour*30 +getminute/2; 
    const minutesDeg = getminute*6; 
    
    const secondsDeg = getseconds*6;                       
    hourhand.style.transform = `rotate(${hoursdeg + 180}deg )`;
    minuteshand.style.transform = `rotate(${minutesDeg + 180}deg)`;
    secondshand.style.transform = `rotate(${secondsDeg}deg)`;
}

updateClock();
setInterval(updateClock,1000)