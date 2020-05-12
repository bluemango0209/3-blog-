var hide = document.getElementById("container");
var hide_btn = document.getElementById("menu_btn")
function menuHide() {
hide.style.opacity = "0.5";
hide_btn.style.opacity = "0";
}
document.getElementById("menu_btn").addEventListener('click', menuHide);

var open = document.getElementById("container");

function menuOpen() {
hide_btn.style.opacity = "1";
hide.style.opacity = "0";

}
document.getElementById("cls_btn").addEventListener('click', menuOpen);
