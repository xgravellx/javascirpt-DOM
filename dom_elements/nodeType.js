/*
    1   ELEMENT_NODE                : Eleman düğümü
    2   ATTRIBUTE_NODE              : Özellik düğümü
    3   TEXT_NODE                   : Metin türü
    4   CDATA_SECTION_NODE          : Cdata kesit düğümü
    5   ENTITY_REFERANCE_NODE       : Varlık referansı düğümü
    6   ENTITY_NODE                 : varlık düğümü
    7   PROCESSING_INSTRUCTION_NODE : İşlem yönergesi düğümü
    8   COMMEND_Node                : AÇıklama Düğümü
    9   TYPE_NODE                   : Belge türü düğümü
    10   DOCUMENT_NODE               : Belge düğümü
    11  DOCUMENT_FARGMENT_NODE      : Belge parçası düğümü
    12  NOTATION_NODE               : Gösterim Düğümü
*/ 

let dugumbul = document.getElementById("ornek_nodeType").nodeType;
if (dugumbul == 1) {
    document.getElementById("sonuc_nodeType").innerHTML = dugumbul + " " + "ELEMENT_NODE";
}
else if (dugumbul == 2) {
    document.getElementById("sonuc_nodeType").innerHTML = dugumbul + " " + "ATTRIBUTE_NODE";
}
else if (dugumbul == 3) {
    document.getElementById("sonuc_nodeType").innerHTML = dugumbul + " " + "TEXT_NODE";
}
else if (dugumbul == 4) {
    document.getElementById("sonuc_nodeType").innerHTML = dugumbul + " " + "CDATA_SECTION_NODE";
}
else if (dugumbul == 5) {
    document.getElementById("sonuc_nodeType").innerHTML = dugumbul + " " + "ENTITY_REFERANCE_NODE";
}
else if (dugumbul == 6) {
    document.getElementById("sonuc_nodeType").innerHTML = dugumbul + " " + "ENTITY_NODE";
}
else if (dugumbul == 7) {
    document.getElementById("sonuc_nodeType").innerHTML = dugumbul + " " + "PROCESSING_INSTRUCTION_NODE";
}
else if (dugumbul == 8) {
    document.getElementById("sonuc_nodeType").innerHTML = dugumbul + " " + "COMMEND_Node";
}
else if (dugumbul == 9) {
    document.getElementById("sonuc_nodeType").innerHTML = dugumbul + " " + "TYPE_NODE";
}
else if (dugumbul == 10) {
    document.getElementById("sonuc_nodeType").innerHTML = dugumbul + " " + "DOCUMENT_NODE";
}
else if (dugumbul == 11) {
    document.getElementById("sonuc_nodeType").innerHTML = dugumbul + " " + "DOCUMENT_FARGMENT_NODE";
}
else if (dugumbul == 12) {
    document.getElementById("sonuc_nodeType").innerHTML = dugumbul + " " + "NOTATION_NODE";
}
else {
    document.getElementById("sonuc_nodeType").innerHTML = "Tanımlanmayan Düğüm";
} 


function dugumBul(){
    let islem_nodeType = document.body.childNodes;
    let metin_nodeType = "";
    for (let baslangic_n = 0; baslangic_n < islem_nodeType.length; baslangic_n++){
        metin_nodeType = metin_nodeType + islem_nodeType[baslangic_n].nodeType;
    }
    document.getElementById("sonuc_n").innerHTML = metin_nodeType;
} 