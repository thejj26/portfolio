let fullscreenMenu = document.getElementById("mobile-menu-fullscreen")
let body = document.getElementsByTagName("body")[0]

let portraitImages = ["https://thispersondoesnotexist.com/image", "https://thispersondoesnotexist.com/image", "https://thispersondoesnotexist.com/image", "https://thispersondoesnotexist.com/image", "https://thispersondoesnotexist.com/image"]
let activePortrait = 0;

document.addEventListener("DOMContentLoaded", () => { //when the site loads execute the event
   document.getElementById("home").style.marginTop = "0";    //remove the margin
   document.getElementById("home").style.opacity = "1"; //set the opacity to 1 (fully visible)
})


function disableScrollInFulscreen() {
   body.classList.add("no-scroll")
}

function enableScrollInFullscreen() {
   body.classList.remove("no-scroll")
}

function showFullscreenMenu() {
   fullscreenMenu.style.display = "flex"
   disableScrollInFulscreen()
}

function hideFullscreenMenu() {
   fullscreenMenu.style.display = "none"
   enableScrollInFullscreen()
}

function showFullscreenImg(divId) {
   disableScrollInFulscreen()
   document.getElementById(divId).style.display = "flex"
}

function hideFullscreenImg(divId) {
   document.getElementById(divId).style.display = "none"
   enableScrollInFullscreen()
}

function chImg(imgId, mode, index) {
   document.getElementById(imgId + activePortrait).classList.remove("fill")
   switch (mode) {
      case 0:
         if (activePortrait>0) {
            activePortrait--
            document.getElementById(imgId).setAttribute("href", portraitImages[activePortrait])
         }
         break
      case 1:
         if (activePortrait < portraitImages.length-1) {
            activePortrait++
            document.getElementById(imgId).setAttribute("href", portraitImages[activePortrait])
         }
         break
      case 2:
         activePortrait = index
         document.getElementById(imgId).setAttribute("href", portraitImages[activePortrait])
         break
   }
   document.getElementById(imgId + activePortrait).classList.add("fill")
}
