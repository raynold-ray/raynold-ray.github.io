/*
Program Name:   Infiniti Vision Gran Turismo
Developer:      Royal Raynold
Date:           28th November, 2022
FileType:       JavaScript
*/
const links = document.getElementById("links");
const btnMenu = document.getElementById("menu");

links.classList.toggle("disable");

btnMenu.addEventListener("click", () => {
    links.classList.toggle("disable");
});