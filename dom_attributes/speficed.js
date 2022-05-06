
// specified 	:	Belge içerisindeki HTML elemanına herhangi bir özelliğin eklenip eklenmediği referansını boolean (mantıksal) veri türünde elde etmek için kullanılır.

var islem	=	document.getElementsByTagName("DIV")[0];
var sonuc	=	islem.getAttributeNode("name").specified;
document.getElementById("sonucalani").innerHTML = sonuc;
