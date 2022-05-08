let node_first = document.getElementById("js_node");
let node_second = document.getElementById("css_node");

let islem_nodeP = node_first.compareDocumentPosition(node_second);
document.getElementById("sonuc_compareDocumentPosition").innerHTML = islem_nodeP;