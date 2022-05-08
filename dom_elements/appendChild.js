function ornek_appendChild() {
    let elemanOlustur = document.createElement("LI");
    let icerikOlustur = document.createTextNode("XML");
    elemanOlustur.appendChild(icerikOlustur);
    document.getElementById("bir_appendChild").appendChild(elemanOlustur);
} 