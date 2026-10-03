// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    var y=document.querySelector("#displayYear");if(y){y.innerHTML=currentYear;}
}

getYear();

// overlay menu
function openNav() {
    document.getElementById("myNav").classList.toggle("menu_width");
    document.querySelector(".custom_menu-btn").classList.toggle("menu_btn-style");
}


/** google_map js **/

function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

// lightbox gallery
$(document).on("click", '[data-toggle="lightbox"]', function (event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});
function sendQuote(e){e.preventDefault();
var t="Hello Maata, my name is "+document.getElementById("n").value+" ("+document.getElementById("p").value+"). "+document.getElementById("m").value;
window.open("https://wa.me/256701508810?text="+encodeURIComponent(t),"_blank");return false;}
