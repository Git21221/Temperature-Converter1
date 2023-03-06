const cel = document.getElementById("deg-cel");
const fah = document.getElementById("deg-fah");
const ran = document.getElementById("deg-ran");
const kel = document.getElementById("deg-kel");
const k = 273.15;
const r = 459.67;
cel.oninput = function () {
    fah.value = ((9 * cel.value) + 160) / 5;
    kel.value = parseInt(cel.value) + k;
    ran.value = (((9 * cel.value) + 160) / 5) + 459.67;
}
fah.oninput = function () {
    cel.value = ((5 * fah.value) - 160) / 9;
    ran.value = r + parseInt(fah.value);
    kel.value = (((5 * fah.value) - 160) / 9) + 273.15;
}
ran.oninput = function () {
    fah.value = ran.value - 459.67;
    cel.value = ((5 * (ran.value - 459.65)) - 160) / 9;
    kel.value = (((5 * (ran.value - 459.65)) - 160) / 9) + 273.15;
}
kel.oninput = function () {
    fah.value = ((kel.value - 273.15) * 9/5) + 32;
    cel.value = kel.value - 273.15;
    ran.value = ((kel.value - 273.15) * 9/5) + 32 + 459.65;
}