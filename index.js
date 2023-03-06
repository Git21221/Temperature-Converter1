const cel = document.getElementById("deg-cel");
const fah = document.getElementById("deg-fah");
const ran = document.getElementById("deg-ran");
const kel = document.getElementById("deg-kel");
const k = 273.15;
const r = 459.67;
cel.oninput = function () {

    if (cel.value === '') {
        fah.value = '';
        kel.value = '';
        ran.value = '';
    }
    else {
        alert("Please enter a valid number!");
        kel.value = '';
        cel.value = '';
        fah.value = '';
        ran.value = '';
    }

    if (cel.value >= 0 && cel.value <= 9)
        fah.value = ((9 * cel.value) + 160) / 5;
    

    if (cel.value >= 0 && cel.value <= 9)
        kel.value = cel.value + k;
    


    if (cel.value >= 0 && cel.value <= 9)
        ran.value = (((9 * cel.value) + 160) / 5) + 459.67;

}
fah.oninput = function () {
    if (fah.value === '') {
        cel.value = '';
        kel.value = '';
        ran.value = '';
    }
    else {
        alert("Please enter a valid number!");
        kel.value = '';
        cel.value = '';
        fah.value = '';
        ran.value = '';
    }

    if (fah.value >= 0 && fah.value <= 9)
        cel.value = ((5 * fah.value) - 160) / 9;
    

    if (fah.value >= 0 && fah.value <= 9)
        ran.value = r + fah.value;
    

    if(fah.value >= 0 && fah.value <= 9)
        kel.value = (((5 * fah.value) - 160) / 9) + 273.15;
    

}
ran.oninput = function () {
    if (ran.value === '') {
        cel.value = '';
        kel.value = '';
        fah.value = '';
    }
    else {
        alert("Please enter a valid number!");
        kel.value = '';
        cel.value = '';
        fah.value = '';
        ran.value = '';
    }

    if (ran.value >= 0 && ran.value <= 9)
        fah.value = ran.value - 459.67;
    
    if(ran.value >= 0 && ran.value <= 9)
        cel.value = ((5 * (ran.value - 459.65)) - 160) / 9;

    if(ran.value >= 0 && ran.value <= 9)
        kel.value = (((5 * (ran.value - 459.65)) - 160) / 9) + 273.15;
    
}
kel.oninput = function () {
    if (kel.value === '') {
        cel.value = '';
        fah.value = '';
        ran.value = '';
    }
    else {
        alert("Please enter a valid number!");
        kel.value = '';
        cel.value = '';
        fah.value = '';
        ran.value = '';
    }

    if(kel.value >= 0 && kel.value <= 9)
        fah.value = ((kel.value - 273.15) * 9 / 5) + 32;
    
    if(kel.value >= 0 && kel.value <= 9)
        cel.value = kel.value - 273.15;
    

    if(kel.value >= 0 && kel.value <= 9)
        ran.value = ((kel.value - 273.15) * 9 / 5) + 32 + 459.65;
    
}