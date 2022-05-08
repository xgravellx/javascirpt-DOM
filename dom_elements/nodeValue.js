function ornek_nodeValue() {
    let islem_nodeValue = document.getElementById("kimlik_nodeValue").childNodes[0].nodeValue;
    document.getElementById("sonuc_nodeValue").innerHTML = islem_nodeValue;
}