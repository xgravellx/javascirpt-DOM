
// getNamedItem() 	:	Belge içerisindeki HTML elemanına eklenmiş olan özellik node'u (düğümü) referansını elde etmek için kullanılır.

var islem	=	document.getElementsByTagName("DIV")[0];
var sonuc	=	islem.attributes.getNamedItem("style").value;
alert(sonuc);

