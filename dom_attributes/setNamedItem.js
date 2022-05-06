
// setNamedItem() 	:	Belge içerisindeki HTML elemanına özellik node'u (düğüme) ve değeri eklemek için kullanılır.

var islem	=	document.getElementsByTagName("DIV")[0];
var ekle	=	document.createAttribute("dir");
ekle.value 	=	"rtl";
islem.attributes.setNamedItem(ekle);

