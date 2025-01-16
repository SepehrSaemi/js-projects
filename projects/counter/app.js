const buttons = document.querySelector("#buttons");
const counterEl = document.querySelector("#counter");

function updateCounter(e) {
    let clickedBtn = e.target.textContent;
    let counter = Number(counterEl.textContent);

    if (clickedBtn === "Increase") {
        counter++;
    } else if (clickedBtn === "Decrease") {
        counter--;
    } else {
        counter = 0;
    }

    counterEl.textContent = counter;
}

buttons.addEventListener("click", (e) => updateCounter(e));
