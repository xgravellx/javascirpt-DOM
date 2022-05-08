function ornek_replaceChild() {
    let new_node = document.createTextNode("Hazal");
    let deger_replaceChild = document.getElementById("bir_replaceChild").childNodes[1];
    deger_replaceChild.replaceChild(new_node, deger_replaceChild.childNodes[0]);
}