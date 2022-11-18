const btnClose = document.getElementById("close");
const largeView = document.getElementById("largeView");
const btnTheme = document.getElementById("btnTheme");
const btnImg = document.querySelectorAll(".image");
let iVisible = false;
let s = "";
largeView.style.visibility = "hidden";

const btnIm = document.querySelectorAll(".wrapper .content .cards .item .image").forEach(image => {
    image.onclick = () => {
        s = image.innerHTML.toString();
        s = s.trim();
        s = s.substring(10, s.length - 9);
        largeView.style.visibility = "visible";
        document.querySelector(".largeView .imgView img").src = s;
        iVisible = true;
    }
});

btnClose.addEventListener("click", () => {
    if(iVisible == true){
        largeView.style.visibility = "hidden";
        iVisible = false;
    }
});

btnTheme.addEventListener("click", () => {
    let element = document.body;
    element.classList.toggle("light-mode");
    if(element.classList.contains("light-mode")){
        btnTheme.classList.replace("fa-sun", "fa-moon");
    }else{
        btnTheme.classList.replace("fa-moon", "fa-sun");
    }
});