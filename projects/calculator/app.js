const buttons = document.querySelector("#buttons");
const calculatorInput = document.querySelector("#calculator-input");

buttons.addEventListener("click", (event) => {
    const button = event.target.textContent;

    if (button === "=") {
        const result = eval(calculatorInput.value);
        calculatorInput.value = result;
    } else if (button === "AC") {
        calculatorInput.value = "";
    } else if (button === "C") {
        calculatorInput.value = calculatorInput.value.slice(0, -1);
    } else {
        calculatorInput.value += button;
    }
});
