  let me = new Typed(".typing", {
    strings:[ "Programmer", "Student"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
  })

  const nav = document.querySelector(".nav"),
  navlist = nav.querySelectorAll("li"),
  totalnav = navlist.length,
  slec = document.querySelectorAll(".section"),
  slection = slec.length;
  for( let i=0; i<totalnav; i++)
  {
    const a = navlist[i].querySelector("a");
    a.addEventListener("click", function ()
    {
        for(let i=0; i<slection; i++)
{
    slec[i].classList.remove("back-section")
}
       for( let j=0; j<totalnav; j++)
       {
        if(navlist[j].querySelector("a").classList.contains("active"))
        {
            slec[j].classList.add("back-section")
        }
         navlist[j].querySelector("a").classList.remove("active");
       }
       this.classList.add("active")
       showSection(this);
    })
  }
  function showSection(element)
  {
for(let i=0; i<slection; i++)
{
    slec[i].classList.remove("active")
}
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active");
  }
  function updateNav(element)
  {
    for(let i=0; i<totalnav; i++)
    {
        navlist[i].querySelector("a").classList.remove("active");
        const target =  element.getAttribute("href").split("#")[1];
        if(target === navlist[i].querySelector("a").getAttribute("href").split("#")[1])
        {
            navlist[i].querySelector("a").classList.add("active");
        }
    }
  }
  document.querySelector(".hire-me").addEventListener("click", function()
  {
    const sectionIndex = this.getAttribute("data-section-index");
    console.log(sectionIndex)
    showSection(this);
    updateNav(this);
  })
  
     