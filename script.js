let darkMode = document.getElementById("dark");
let lightMode = document.getElementById("light");
let body = document.body;

function toggleDarkMode() {
    if (body.style.backgroundColor === "rgb(255, 249, 230)") {
        body.style.backgroundColor = "black";
        body.style.color = "white";
    } else {
        body.style.backgroundColor = "rgb(255, 249, 230)";
        body.style.color = "black";
    }
}

function toggleLightMode() {
    if(body.style.backgroundColor == "black") {
        body.style.backgroundColor = "rgb(255, 249, 230)";
        body.style.color = "black";
    }
    else {
        body.style.backgroundColor = "black";
        body.style.color = "white";
    }
}

darkMode.addEventListener("click", toggleDarkMode);
lightMode.addEventListener("click", toggleLightMode);
