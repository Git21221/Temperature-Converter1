const cel = document.getElementById("deg-cel");
const fah = document.getElementById("deg-fah");
const ran = document.getElementById("deg-ran");
const kel = document.getElementById("deg-kel");
const k = 273.15;
const r = 459.67;
cel.oninput = function () {
    if (cel.value != ''){
    fah.value = ((9 * cel.value) + 160) / 5;
    kel.value = parseInt(cel.value) + k;
    ran.value = (((9 * cel.value) + 160) / 5) + 459.67;
    }

    else {
        alert("Please enter a valid number!");
        kel.value = '';
        cel.value = '';
        fah.value = '';
        ran.value = '';
    }
}
fah.oninput = function () {
   
    if (fah.value != ''){
        cel.value = ((5 * fah.value) - 160) / 9;
        ran.value = r + fah.value;
        kel.value = (((5 * fah.value) - 160) / 9) + 273.15;
    }
    else {
        alert("Please enter a valid number!");
        kel.value = '';
        cel.value = '';
        fah.value = '';
        ran.value = '';
    }
}
ran.oninput = function () {
   

    if (ran.value != ''){
        fah.value = ran.value - 459.67;
        cel.value = ((5 * (ran.value - 459.65)) - 160) / 9;
        kel.value = (((5 * (ran.value - 459.65)) - 160) / 9) + 273.15;
    }
    else {
        alert("Please enter a valid number!");
        kel.value = '';
        cel.value = '';
        fah.value = '';
        ran.value = '';
    } 
}
kel.oninput = function () {

    if(kel.value >= 0 && kel.value <= 9){
        fah.value = ((kel.value - 273.15) * 9 / 5) + 32;
        cel.value = kel.value - 273.15;
        ran.value = ((kel.value - 273.15) * 9 / 5) + 32 + 459.65;
}
    else {
        alert("Please enter a valid number!");
        kel.value = '';
        cel.value = '';
        fah.value = '';
        ran.value = '';
    }
}