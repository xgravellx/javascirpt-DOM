
// name 	:	Belge içerisindeki HTML elemanına eklenmiş olan özellik adı referansını elde etmek için kullanılır. HTML elemanının içerisindeki özellik sayısı birden fazla ise her bir özellik adı referansı döngü ile elde edilebilir.

var sonucbir	=	document.getElementById("birincikimlik").attributes[0].name;
var sonuciki	=	document.getElementById("birincikimlik").attributes[1].name;
var sonucuc		=	document.getElementById("birincikimlik").attributes[2].name;
var sonucdort	=	document.getElementById("birincikimlik").attributes[3].name;

document.getElementById("sonucalanibir").innerHTML = "Birinci özelliğin adı : " + sonucbir;
document.getElementById("sonucalaniiki").innerHTML = "İkinci özelliğin adı : " + sonuciki;
document.getElementById("sonucalaniuc").innerHTML = "Üçüncü özelliğin adı : " + sonucuc;
document.getElementById("sonucalanidort").innerHTML = "Dördüncü özelliğin adı : " + sonucdort;

