// Henter pop-up vinduet
var vindue = document.getElementById("popup");

// Knappen der åbner pop-up vinduet
var button = document.getElementById("submit");

// Tilføjelse af krydset, der kan lukke vinduet
var span = document.getElementsByClassName("close")[0];

// Når man klikker på knappen, åbner vinduet
button.onclick = function () {
    vindue.style.display = "block";
}

// Når man klikker på krydset lukker vinduet
span.onclick = function () {
    vindue.style.display = "none";
}

// Når man klikker hvilket som helst sted udenfor viduet lukker pop-upen
window.onclick = function (event) {
    if (event.target == vindue) {
        vindue.style.display = "none";
    }
}
