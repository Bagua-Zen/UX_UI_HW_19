var load = document.querySelector("#loadingScreen");
var page = document.querySelector("#page")
var body = document.body
window.addEventListener("load", function() {
setTimeout(() => 
    {
     document.getElementById("loadingScreen").style.display = "none"; 
     document.getElementById("page").style.display = "block";
     body.classList.add("bodyStyling")
    }, 4000);

})