var overlay = document.getElementById("full_pop");
var closer =document.getElementsByClassName("close")[0];
var background =document.getElementById("home");
function showoverlay(){
    overlay.style.display="block";
    document.body.style.overflow = "hidden";
    // document.body.style.position = "relative"
    // overlay.style.position ="absolute"
}
function closeoverlay(){
    overlay.style.display="none";
    document.body.style.overflow = "auto";
  
}
window.onclick = function(event){
    if(event.target == overlay){
    overlay.style.display ="none";
    document.body.style.overflow = "auto";

    }
}


// function showoverlay(){
//     overlay.style.display="block";
// }
// let overlay = document.getElementById("full_pop");
// let popup = document.getElementById("popup");
// popup.onclick = function(event){
//     overlay.style.display ="none"
// }
