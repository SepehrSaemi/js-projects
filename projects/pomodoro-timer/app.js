const timerEl = document.querySelector("#timer");
const buttons = document.querySelector("#buttons");

let duration = 1500;
let interval;

function startTimer() {
    interval = setInterval(() => {
        duration--;
        updateTimer();
    }, 1000);
}
function stopTimer() {
    clearInterval(interval);
}
function resetTimer() {
    clearInterval(interval);
    duration = 1500;
    timerEl.textContent = "25:00";
}

function updateTimer() {
    if (duration >= 0) {
        let minutes = Math.floor(duration / 60);
        let seconds = duration % 60;
        let formatedTime = `${minutes.toString().padStart(2, 0)}:${seconds.toString().padStart(2, 0)}`;

        timerEl.textContent = formatedTime;
    } else {
        alert("Time is up!");
        resetTimer();
    }
}

buttons.addEventListener("click", (e) => {
    let clickedButton = e.target.dataset.id;

    if (clickedButton) {
        clickedButton == "start" ? startTimer() : clickedButton == "stop" ? stopTimer() : resetTimer();
    }
});
