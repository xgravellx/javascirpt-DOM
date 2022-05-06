document.addEventListener("mousemove", remove);
function remove(){
    document.getElementById("sonuc_removeEventListener").innerHTML = Math.random();
}
function sonlandir() {
    document.removeEventListener("mousemove", remove);
}