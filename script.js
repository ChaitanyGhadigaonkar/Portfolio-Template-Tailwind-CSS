const hamburger = document.getElementById("hamburger")
const routes = document.querySelector(".routes")
hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active")
    routes.classList.toggle("hidden");
})
const navlist = document.querySelectorAll(".navlist");

navlist.forEach(n=>{
    n.addEventListener("click",()=>{
        hamburger.classList.toggle("active")
        routes.classList.toggle("hidden");
    })
})

