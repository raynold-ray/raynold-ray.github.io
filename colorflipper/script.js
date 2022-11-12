/* 
Program Name:   Color Flipper
Developer:      Royal Raynold
Date:           12th November, 2022
FileType:       JAVASCRIPT
*/
hexN = document.getElementById("hexN");
hex = document.getElementById("hex");
rgbN = document.getElementById("rgbN");
rgb = document.getElementById("rgb");
hslN = document.getElementById("hslN");
hsl = document.getElementById("hsl");
btnRefresh = document.getElementById("btnRefresh");
bBody = document.querySelector("body");

const cCodes = ["A", "B", "C", "D", "E", "F", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
let cColor = "";

// REFRESH
btnRefresh.addEventListener("click", () => {
    for(let i = 0; i<6; i++){
        cColor = cColor + cCodes[Math.floor(Math.random() * cCodes.length)];
    }
    bBody.style.backgroundColor = "#" + cColor;
    hex.innerText = "#" + cColor;
    rgb.innerText = cColor.hexToRgb();
    hsl.innerText = hexToHSL("#" + cColor);
    cColor = "";
});

// HEX TO RGB
String.prototype.hexToRgb = function(){
    var aRgbHex = this.match(/.{1,2}/g);
    var aRgb = [
        "R(" + parseInt(aRgbHex[0], 16) + ")",
        " G(" + parseInt(aRgbHex[1], 16) + ")",
        " B(" + parseInt(aRgbHex[2], 16) + ")"
    ];
    return aRgb;
}

// HEX TO RGB TO HSL
function hexToHSL(H) {
    // RGB
    let r = 0, g = 0, b = 0;
    r = "0x" + H[1] + H[2];
    g = "0x" + H[3] + H[4];
    b = "0x" + H[5] + H[6];

    // HSL
    r /= 255;
    g /= 255;
    b /= 255;
    let cmin = Math.min(r, g, b),
      cmax = Math.max(r, g, b),
      delta = cmax - cmin, h = 0, s = 0, l = 0;
  
    if (delta === 0){
        h = 0;
    }else if (cmax === r) {
        h = ((g - b) / delta) % 6;
    }else if (cmax === g) {
        h = (b - r) / delta + 2;
    }else {
        h = (r - g) / delta + 4;
    }
    h = Math.round(h * 60);
    if (h < 0) h += 360;
    l = (cmax + cmin) / 2;
    s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);
  
    return "H(" + h + "%), S(" + s + "%), L(" + l + "%)";
  }