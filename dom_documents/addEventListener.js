document.addEventListener("click", function(){
    console.log("Tıklama oldu");
})

document.addEventListener("click", ornek_eventListener);
function ornek_eventListener(){
    document.body.style.backgroundColor = "#f3f3f3f";
}

document.addEventListener("mouseover", ornek_eventListener2);
function ornek_eventListener2(){
    document.getElementById("sonuc_eventListener").innerHTML = Math.random();
}