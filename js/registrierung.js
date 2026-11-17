const formular = document.querySelector("#spendenformular");
const adressbereich = document.querySelector("#adressbereich");

function aktualisiereUebergabeart() {
    const auswahl = document.querySelector(
        'input[name="uebergabeart"]:checked'
    ).value;

    const istAbholung = auswahl === "abholung";

    adressbereich.hidden = !istAbholung;
    adressbereich.disabled = !istAbholung;
}

document
    .querySelectorAll('input[name="uebergabeart"]')
    .forEach(function (feld) {
        feld.addEventListener("change", aktualisiereUebergabeart);
    });

aktualisiereUebergabeart();