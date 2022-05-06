
// removeNamedItem() 	:	Belge içerisindeki HTML elemanına eklenmiş olan özellik node'unu (düğümünü) kaldırmak için kullanılır.

var islem	=	document.getElementsByTagName("DIV")[0];
islem.attributes.removeNamedItem("style");

