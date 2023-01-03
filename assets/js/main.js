let fullscreenMenu = document.getElementById("mobile-menu-fullscreen")
let body = document.getElementsByTagName("body")[0]

let portraitImages = ["https://thispersondoesnotexist.com/image", "https://thispersondoesnotexist.com/image", "https://thispersondoesnotexist.com/image", "https://thispersondoesnotexist.com/image", "https://thispersondoesnotexist.com/image"]
let activePortrait = 0

let hobbyImages = ["https://thisartworkdoesnotexist.com/", "https://thisartworkdoesnotexist.com/", "https://thisartworkdoesnotexist.com/"]
let activeHobby = 0

function disableScrollInFulscreen() {
   body.classList.add("no-scroll")
}

function enableScrollInFullscreen() {
   body.classList.remove("no-scroll")
}

function showFullscreenMenu() {
   disableScrollInFulscreen()
   fullscreenMenu.style.display = "flex"
   fullscreenMenu.style.zIndex="2"
   setTimeout(() => {
      fullscreenMenu.style.opacity = "1"
   }, 50);
}

function hideFullscreenMenu() {
   fullscreenMenu.style.opacity = "0"
   setTimeout(() => {
      fullscreenMenu.style.display = "none"
      fullscreenMenu.style.zIndex="-1"
      enableScrollInFullscreen()
   }, 200);

}

function showFullscreenImg(divId) {
   disableScrollInFulscreen()
   let div = document.getElementById(divId)
   div.style.zIndex="2"
   div.style.display = "flex"
   setTimeout(() => {
      div.style.opacity = "1"
   }, 50);
}

function hideFullscreenImg(divId) {
   let div = document.getElementById(divId)
   div.style.opacity = "0"
   setTimeout(() => {
      div.style.display = "none"
      div.style.zIndex="-1"
      enableScrollInFullscreen()
   }, 200);
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
