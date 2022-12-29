let fullscreenMenu = document.getElementById("mobile-menu-fullscreen")
let body = document.getElementsByTagName("body")[0]

let portraitImages = ["https://thispersondoesnotexist.com/image", "https://thispersondoesnotexist.com/image", "https://thispersondoesnotexist.com/image", "https://thispersondoesnotexist.com/image", "https://thispersondoesnotexist.com/image"]
let activePortrait = 0

let hobbyImages = ["https://thisartworkdoesnotexist.com/", "https://thisartworkdoesnotexist.com/", "https://thisartworkdoesnotexist.com/"]
let activeHobby = 0

document.addEventListener("DOMContentLoaded", () => { //when the site loads execute the event
   document.getElementById("home").style.marginTop = "0";    //remove the margin
   document.getElementById("home").style.opacity = "1"; //set the opacity to 1 (fully visible)
   document.getElementById("about-me").style.opacity = "1";
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
   if (imgId == "portrait-img") {
      document.getElementById(imgId + activePortrait).classList.remove("fill")
      switch (mode) {
         case 0:
            if (activePortrait > 0) {
               activePortrait--
               document.getElementById(imgId).setAttribute("href", portraitImages[activePortrait])
            }
            break
         case 1:
            if (activePortrait < portraitImages.length - 1) {
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
   else if (imgId == "hobbies-img") {
      document.getElementById(imgId + activeHobby).classList.remove("fill")
      switch (mode) {
         case 0:
            if (activeHobby > 0) {
               activeHobby--
               document.getElementById(imgId).setAttribute("href", hobbyImages[activeHobby])
            }
            break
         case 1:
            if (activeHobby < hobbyImages.length - 1) {
               activeHobby++
               document.getElementById(imgId).setAttribute("href", hobbyImages[activeHobby])
            }
            break
         case 2:
            activeHobby = index
            document.getElementById(imgId).setAttribute("href", hobbyImages[activeHobby])
            break
      }
      document.getElementById(imgId + activeHobby).classList.add("fill")
   }
}
