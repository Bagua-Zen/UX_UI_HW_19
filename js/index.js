var load = document.querySelector("#loadingScreen");
var page = document.querySelector("#page")

window.addEventListener("load", function() {
setTimeout(() => 
    {
     document.getElementById("loadingScreen").style.display = "none"; 
     document.getElementById("page").style.display = "block";
    }, 4000);

})