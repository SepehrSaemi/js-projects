const buttonContainer = document.querySelector("#buttons");
const buttons = document.querySelectorAll(".button");
const tabs = document.querySelectorAll(".tab-content");

function changeTab(e) {
    const id = e.target.dataset.id;

    if (id) {
        let tab = document.getElementById(id);

        buttons.forEach((button) => button.setAttribute("data-active", "false"));
        tabs.forEach((tab) => {
            tab.classList.remove("flex");
            tab.classList.add("hidden");
        });

        e.target.setAttribute("data-active", "true");

        tab.classList.add("flex");
        tab.classList.remove("hidden");
    }
}

buttonContainer.addEventListener("click", (e) => changeTab(e));
