// item     : Classın seçicisinin adını döndürür.
// length   : Classın sayısını döndüdrür.
// add      : class ekler
// remove   : class siler
// toggle   : class ekler ve siler
// contains : class seçicisi arar.

function ornek_classList(){
    let deger_classList = document.getElementById("alan1").classList;
    document.getElementById("sonuc1").innerHTML = "İlgili elemanın class listesi" + ": "+ deger_classList;
}

function ornek_classList_item(){
    let deger_classList_itemm = document.getElementById("alan1").classList.item(0);
    console.log(deger_classList_itemm);
}

function ornek_classList_add(){
    let deger_classList_addd = document.getElementById("alan1").classList.add("o-bir", "o-iki", "o-uc");
    console.log(deger_classList_addd);
}
