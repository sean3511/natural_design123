var overlay = document.getElementById("full_pop");
var closer =document.getElementsByClassName("close")[0];
var anmation
window.onload=function(){
    var tiles = document.getElementsByClassName("tile");
   }
function showoverlay(){
    overlay.style.display="block";
}
function closeoverlay(){
    overlay.style.display="none";
}
window.onclick = function(event){
    if(event.target == overlay)overlay.style.display ="none"
}
