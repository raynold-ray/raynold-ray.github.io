const searchDiv = document.getElementById("searchDiv");
const btnClose = document.getElementById("btnClose");
const btnSearch = document.getElementById("btnSearch");
const links = document.getElementById("links");
const btnMenu = document.getElementById("menu");
searchDiv.classList.toggle("disable");
links.classList.toggle("disable");

btnClose.addEventListener("click", () => {
    searchDiv.classList.toggle("disable");
});

btnSearch.addEventListener("click", () => {
    searchDiv.classList.toggle("disable");
});

btnMenu.addEventListener("click", () => {
    links.classList.toggle("disable");
});