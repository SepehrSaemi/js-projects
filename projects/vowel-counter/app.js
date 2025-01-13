const inputEl = document.querySelector("#input");
const buttonEl = document.querySelector("#submit");
const resultEl = document.querySelector("#result");

function count() {
    const vowels = ["a", "e", "u", "i", "o"];
    let counter = 0;
    let txt = inputEl.value;
    txt = txt.toLowerCase();

    for (const character of txt) {
        if (vowels.includes(character)) counter += 1;
    }

    let res = counter <= 1 ? `${counter} Vowel found` : `${counter} Vowels found`;

    inputEl.value = "";
    resultEl.innerHTML = res;
}

buttonEl.addEventListener("click", () => {
    if (inputEl.value) count();
});
