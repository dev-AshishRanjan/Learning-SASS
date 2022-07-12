const menu_btn =document.querySelector(".menu-btn");
const burger =document.querySelector(".menu-btn-burger");
const nav =document.querySelector(".nav");
const ul =document.querySelector(".nav>ul");
const li =document.querySelectorAll(".nav>ul>li");

let showMenu =false;
menu_btn.addEventListener("click",()=>{
    if(!showMenu){
        burger.classList.add("open");

        nav.classList.add("open");
        ul.classList.add("open");

        for(el of li){
            el.classList.add("open");
        }
        showMenu=true;
    }
    else{
        burger.classList.remove("open");

        nav.classList.remove("open");
        ul.classList.remove("open");
        for(el of li){
            el.classList.remove("open");
        }
        showMenu=false
    }
})