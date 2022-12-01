/* 
Program Name:   Trio Render Farm
Developer:      Royal Raynold
Date:           30th November, 2022
FileType:       JavaScript
*/
const BG = document.getElementById("bg");
window.addEventListener("scroll", () =>{
    BG.style.backgroundSize = 400 - +window.pageYOffset/12+ "%";
    BG.style.opacity = 1 - +window.pageYOffset/700+ "";
})