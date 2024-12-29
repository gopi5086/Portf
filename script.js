function toggleMenu(){
    const menu = document.querySelector(".hamburger-links");
    const close_icon = document.querySelector(".close");
    const burger_icon=document.querySelector(".burger");
    burger_icon.classList.toggle("close2");
    close_icon.classList.toggle("disappear");
    menu.classList.toggle("open");
}
