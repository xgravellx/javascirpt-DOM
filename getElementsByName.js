// Hayvan sayısına ulaşmak,
let sonuc1 = document.getElementsByName("hayvanAdi").length;
document.getElementById("hayvanSayisi").innerHTML = sonuc1;

// 0. name indexine ulaşmak,
let sonuc2 = document.getElementsByName("hayvanAdi")[2].innerHTML;
document.getElementById("hayvanAlani").innerHTML = sonuc2;

// name' leri döngü ile yakalamak,
let bilgi  = document.getElementsByName("hayvanAdi");
let hayvanlar = [];
for (let i = 0; i < bilgi.length; i++) {
    let sonuc3 = bilgi[i].innerHTML;
    hayvanlar[i] = sonuc3;
}
document.getElementById("hayvanlarAll").innerHTML = hayvanlar;