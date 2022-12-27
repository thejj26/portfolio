let fullscreen = document.getElementById("mobile-menu-fullscreen")
let sections = document.getElementsByTagName("section")

document.addEventListener("DOMContentLoaded", () => { //when the site loads execute the event
   document.getElementById("home").style.marginTop = "0";    //remove the margin
   document.getElementById("home").style.opacity = "1"; //set the opacity to 1 (fully visible)
})


function showFullscreen() {
   fullscreen.style.display = "flex"
   for (let i = 0; i < sections.length; i++) {
      sections[i].style.display = "none"
   }
}

function hideFullscreen() {
   fullscreen.style.display = "none"
   for (let i = 0; i < sections.length; i++) {
      sections[i].style.display = ""
   }
}