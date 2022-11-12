/* 
Program Name:   Calculator
Developer:      Royal Raynold
Date:           12th November, 2022
FileType:       JAVASCRIPT
*/
const iInput = document.getElementById("iInput");
const result = document.getElementById("result");
const btn0 = document.getElementById("btn0");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");
const btn7 = document.getElementById("btn7");
const btn8 = document.getElementById("btn8");
const btn9 = document.getElementById("btn9");
const btnPlus = document.getElementById("btnPlus");
const btnSub = document.getElementById("btnSub");
const btnMulti = document.getElementById("btnMulti");
const btnDiv = document.getElementById("btnDiv");
const btnPnt = document.getElementById("btnPnt");
const btnEqu = document.getElementById("btnEqu");
const btnDel = document.getElementById("btnDel");
const btnLeftBracket = document.getElementById("btnLeftBracket");
const btnRightBracket = document.getElementById("btnRightBracket");
const btnPercent = document.getElementById("btnPercent");
const btnClear = document.getElementById("btnClear");
let ops = []; // Array that holds the operands and operators
let firstOp;
let secondOp;
let res;
let tLength;

// Button Events
// Clear the calculator display
btnClear.addEventListener("click", () =>{
    iInput.innerText = "";
    result.innerText = "";
    ops = [];
});
btnDel.addEventListener("click", () =>{
    if(ops.length > 0){
        iInput.innerText = ops[ops.length-1];
        ops.splice([ops.length-1], 1);
        iInput.innerText = ops.toString().replace(/,/g, "");
    }else{
        if(iInput.innerText.length > 0){iInput.innerText = iInput.innerText.substring(0, iInput.innerText.length-1);}
    }
    
    result.innerText = "";
});
btn0.addEventListener("click", () =>{
    iInput.append(0);
});
btn1.addEventListener("click", () =>{
    iInput.append(1);
});
btn2.addEventListener("click", () =>{
    iInput.append(2);
});
btn3.addEventListener("click", () =>{
    iInput.append(3);
});
btn4.addEventListener("click", () =>{
    iInput.append(4);
});
btn5.addEventListener("click", () =>{
    iInput.append(5);
});
btn6.addEventListener("click", () =>{
    iInput.append(6);
});
btn7.addEventListener("click", () =>{
    iInput.append(7);
});
btn8.addEventListener("click", () =>{
    iInput.append(8);
});
btn9.addEventListener("click", () =>{
    iInput.append(9);
});
btnLeftBracket.addEventListener("click", () =>{
    iInput.append("(");
});
btnRightBracket.addEventListener("click", () =>{
    iInput.append(")");
});
btnPnt.addEventListener("click", () =>{
    iInput.append(".");
});

// Operator Events
// Add everything into an array
btnPlus.addEventListener("click", () =>{
    if(ops.length > 0){
        ops.push(iInput.innerText.substring(ops.toString().replace(/,/g, "").length));
    }else{
        ops.push(iInput.innerText);
    }
    iInput.append("+");
    ops.push("+");
});
btnSub.addEventListener("click", () =>{
    if(ops.length > 0){
        ops.push(iInput.innerText.substring(ops.toString().replace(/,/g, "").length));
    }else{
        ops.push(iInput.innerText);
    }
    iInput.append("-");
    ops.push("-");
});
btnMulti.addEventListener("click", () =>{
    if(ops.length > 0){
        ops.push(iInput.innerText.substring(ops.toString().replace(/,/g, "").length));
    }else{
        ops.push(iInput.innerText);
    }
    iInput.append("x");
    ops.push("*");
});
btnDiv.addEventListener("click", () =>{
    if(ops.length > 0){
        ops.push(iInput.innerText.substring(ops.toString().replace(/,/g, "").length));
    }else{
        ops.push(iInput.innerText);
    }
    iInput.append("÷");
    ops.push("/");
});
btnPercent.addEventListener("click", () =>{
    if(ops.length > 0){
        ops.push(iInput.innerText.substring(ops.toString().replace(/,/g, "").length));
    }else{
        ops.push(iInput.innerText);
    }
    iInput.append("%");
    ops.push("%");
});

// Get the result as per the data in the array
btnEqu.addEventListener("click", () =>{
    if (iInput.innerText.length == 0){return}
    if(ops.length < 2){result.innerText = parseInt(iInput.innerText);}
    tLength = ops.toString().replace(/,/g, "").length;
    res = ops.toString().replace(/,/g, "") + iInput.innerText.substring(tLength);
    result.innerText = eval(res);
});
