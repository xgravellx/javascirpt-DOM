
// item() 	:	Belge içerisindeki HTML elemanına eklenmiş olan özellik node'u (düğümü) referansını elde etmek veya ayarlamak için kullanılır. HTML elemanı içerisindeki özellik sayısı birden fazla ise her bir özellik node' (düğümü) referansı döngü ile elde edilebilir.

var islem	=	document.getElementById("kimlik");
var adet	=	document.getElementById("kimlik").attributes.length;
var metin	=	"";
for(var baslangic = 0; baslangic<adet; baslangic++){
	var sonucadi	=	islem.attributes.item(baslangic).name;
	var sonucdegeri	=	islem.attributes.item(baslangic).value;
	var sonucmetni	=	sonucadi + " : " + sonucdegeri + ", ";
	metin	+=	sonucmetni;
}

document.getElementById("sonucalani").innerHTML = metin;

