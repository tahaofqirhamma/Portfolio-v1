const opneMenu = document.getElementById("menuhum");
const closeMenu = document.getElementById("closemenu");
const menu = document.getElementById("menu");
const loadSection = document.getElementById("loading");
const mainTag = document.getElementById("main");

addEventListener("load", () => {
  setTimeout(() => {
    loadSection.style.opacity = "0%";
    loadSection.style.height = "0vh";
    mainTag.style.height = "auto";
  }, 3000);
});

opneMenu.addEventListener("click", () => {
  menu.style.display = "flex";
});

closeMenu.addEventListener("click", () => {
  menu.style.display = "none";
});
menu.addEventListener("click", () => {
  menu.style.display = "none";
});
// ======================

const paths = document.querySelectorAll(".ssvg path");
const pathss = document.querySelectorAll(".svg path");

console.log(paths);

paths.forEach((item, index) => {
  var i = 0;
  const pathLength = item.getTotalLength();
  item.setAttribute("stroke-dasharray", pathLength);
  item.setAttribute("stroke-dashoffset", pathLength);
  item.innerHTML =
    "<animate attributeName='stroke-dashoffset' begin='0s' dur='1.5s' to='O' fill='freeze' repeatCount='indefinite'  />";
});

pathss.forEach((item, index) => {
  var i = 0;
  const pathLength = item.getTotalLength();
  item.setAttribute("stroke-dasharray", pathLength);
  item.setAttribute("stroke-dashoffset", pathLength);
  item.innerHTML =
    "<animate attributeName='stroke-dashoffset' begin='0s' dur='7s' to='O' fill='freeze' />";
});
