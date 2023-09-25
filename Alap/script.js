//hide header
setTimeout(() => {
  const hideHeader = document.getElementById("hideHeader");
  hideHeader.style.display = "none";
}, 0);

setTimeout(() => {
  const hideHeader = document.getElementById("hideHeader");
  hideHeader.style.display = "flex";
}, 1500);

setTimeout(() => {
  const prelaoder = document.getElementById("preloader");
  prelaoder.style.display = "none";
}, 1500);

setTimeout(() => {
  const keyframe = document.getElementById("preloader");
  prelaoder.style.display = "none";
}, 1500);

// bekezdes modositas
const menu = document.getElementById("menu-icon");
const close = document.getElementById("close-icon");
const nav = document.querySelector("nav");

menu.addEventListener("click", () => {
  nav.classList.add("open-nav");
});
close.addEventListener("click", () => {
  nav.classList.remove("open-nav");
});
const para = document.createElement("p");
para.innerHTML = "Létrehozott bekezdés.";
document.getElementById("newdiv").appendChild(para);
function Modify() {
  const element = document.getElementById("newdiv");
  element.innerHTML = "Módosított bekezdés :D";
}

const recept = document.querySelector(".recept");
const open = document.querySelector(".btn");

open.addEventListener("click", () => {
  recept.classList.add("open-recept");
});
