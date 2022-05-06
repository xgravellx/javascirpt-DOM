
// value 	:	Belge içerisindeki HTML elemanına eklenmiş olan özellik değerinin referansını elde etmek için kullanılır. HTML elemanı içerisindeki özellik sayısı birden fazla ise her bir özellik değeri referansı döngü ile elde edilebilir.

var deger		=	document.getElementById("birincikimlik").attributes;
var adet		=	deger.length;
var metin		=	"";
var baslangic	=	0;
while(baslangic<adet){
	var sonuc	=	deger[baslangic].value;
	metin		+=	sonuc + "<br />";
	baslangic++;
}

document.getElementById("sonucalani").innerHTML = metin;

