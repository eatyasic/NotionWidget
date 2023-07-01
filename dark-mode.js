localStorage.setItem(
    "color-theme",
    localStorage.getItem("color-theme") ?? "light"
);
ApplyTheme();

document
    .querySelector(".select-theme__button")
    .addEventListener("click", ChangeTheme);

function ChangeTheme() {
    if (localStorage.getItem("color-theme") === "light")
        localStorage.setItem("color-theme", "dark");
    else localStorage.setItem("color-theme", "light");

    ApplyTheme();
}

function ApplyTheme() {
    if (localStorage.getItem("color-theme") === "light") {
        document.querySelector(".select-theme__button").value = "☀ light";
        document.documentElement.setAttribute("color-theme", "light");
    } else {
        document.querySelector(".select-theme__button").value = "☾ dark";
        document.documentElement.setAttribute("color-theme", "dark");
    }
}
