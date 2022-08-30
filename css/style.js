 const style = document.querySelector(".style-switcher-toggler");
 style.addEventListener("click", () =>{
 document.querySelector(".style-switcher").classList.toggle("open")
 })

 window.addEventListener("scroll", () =>{
    if(document.querySelector(".style-switcher").classList.contains("open"))
    {
        document.querySelector(".style-switcher").classList.remove("open");
    }
 })

 const alt = document.querySelectorAll(".alternate-style");
 function setActiveStyle(color) {
    alt.forEach((style) => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        } else {
            // Not GetAttribute it's SetAttribute
            style.setAttribute("disabled", "true");
        }
    });
}

const darkday = document.querySelector(".day-night");
darkday.addEventListener("click", () =>{
    darkday.querySelector("i").classList.toggle("fa-sun");
    darkday.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load", () =>{
    if(document.body.classList.contains("dark"))
    {
        darkday.querySelector("i").classList.add("fa-sun");
    }
    else
    {
        darkday.querySelector("i").classList.add("fa-moon");
    }

})

const navTogglerBtn = document.querySelector(".nav-toggler"),
aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () =>
{
    asideSectionTogglerBtn()
})
function asideSectionTogglerBtn()
{
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for( let i=0; i<slection; i++)
    {
        slec[i].classList.toggle("open")
    }
}
