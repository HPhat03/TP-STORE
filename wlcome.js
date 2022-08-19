function move(m){
    var ani = document.getElementById(m);
    ani.style.opacity = '100%'; 
}

window.addEventListener("scroll", () => move("2nd"));
window.addEventListener("scroll", () => move("3rd"));
window.addEventListener("scroll", () => move("4th"));