const clockEl = document.querySelector("#clock");

function clock() {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    hours = hours > 9 ? hours : "0" + hours;
    minutes = minutes > 9 ? minutes : "0" + minutes;
    seconds = seconds > 9 ? seconds : "0" + seconds;

    clockEl.textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(() => {
    clock();
}, 1000);
