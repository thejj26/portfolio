let navSections=document.getElementsByClassName("nav-section")  //stores all of the navigation links into this element

function enableNavBorder(navSection){
   for(let i=0;i<navSections.length;i++){
        navSections[i].parentElement.setAttribute("inView","false") //sets the inView attribute of all element to false (clear all of them)
   }
   navSection.parentElement.setAttribute("inView","true")   //sets the inView attribute of the selected element to true
}

document.addEventListener("DOMContentLoaded",()=>{ //when the site loads execute the event
   document.getElementById("home").style.marginTop="0";    //remove the margin
   document.getElementById("home").style.opacity="1"; //set the opacity to 1 (fully visible)
})

