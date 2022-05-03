function islemSecme(){
    let deger = document.getElementsByName("ilgiAlanlari");
    for (let i = 0; i < deger.length; i++) {
        deger[i].checked = true;        
    }
}

function islemTemizle(){
    let deger1 = document.getElementsByName("ilgiAlanlari");
    for (let i = 0; i < deger1.length; i++) {
        deger1[i].checked = false;        
    }
}