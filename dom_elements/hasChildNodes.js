function ornek_has() {
    let control1 = document.getElementById("kimlik_has1").hasChildNodes();
    if (control1 == true) {
        document.getElementById("sonuc_has1").innerHTML = "HTML elamanın alt node u vardır."
    }
    else {
        document.getElementById("sonuc_has1").innerHTML = "HTML elamanın alt node u yoktur."
    }

    let control2 = document.getElementById("kimlik_has2").hasChildNodes();
    if (control2 == true) {
        document.getElementById("sonuc_has2").innerHTML = "HTML elamanın alt node u vardır."
    }
    else {
        document.getElementById("sonuc_has2").innerHTML = "HTML elamanın alt node u yoktur."
    }

    let control3 = document.getElementById("kimlik_has3").hasChildNodes();
    if (control3 == true) {
        document.getElementById("sonuc_has3").innerHTML = "HTML elamanın alt node u vardır."
    }
    else {
        document.getElementById("sonuc_has3").innerHTML = "HTML elamanın alt node u yoktur."
    }

    let control4 = document.getElementById("kimlik_has4").hasChildNodes();
    if (control4 == true) {
        document.getElementById("sonuc_has4").innerHTML = "HTML elamanın alt node u vardır."
    }
    else {
        document.getElementById("sonuc_has4").innerHTML = "HTML elamanın alt node u yoktur."
    }
}