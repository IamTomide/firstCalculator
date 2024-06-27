let runningTotal = 0;
let previousOperator = null;
let buffer = "0";

const screen = document.querySelector(".screen");
function buttonHandler(value) {
    if (isNaN(value)) {
        symbolhandler(value);
    } else 
        {numberhandler(value);}
    
    screen.innerText = buffer;
    
}

function symbolhandler(symbol){
    switch (symbol) {
        case "C":
            buffer = "0";
            runningTotal = 0;
            break;
        case "=":
            if (previousOperator === null){
                return;
            }
            flushoperator(parseInt(buffer));
            previousOperator = null;
            buffer = runningTotal;
            runningTotal = 0;
            break;
        case "+":
        case "−":
        case "×":
        case "÷":
            mathHandler(symbol);
            break;
        case "←":
            if (buffer.length ===1) {
                buffer = "0";
            } else {buffer = buffer.substring(0, buffer.length-1)}
    }
}

function mathHandler(symbol) {
    if (buffer === "0"){
        return;
    }
    const intBuffer = parseInt(buffer);
    if (runningTotal === 0){
        runningTotal = intBuffer;
    }
    else {flushoperator(intBuffer);}
    previousOperator = symbol;
    buffer="0";
}

function flushoperator(intBuffer) {
    switch (previousOperator) {
        case "+":
            runningTotal += intBuffer;
            break;
        case "−":
            runningTotal -= intBuffer;
            break;
        case "×":
            runningTotal *= intBuffer;
            break;
        case "÷":
            runningTotal /= intBuffer;
            break;
    }
}

function numberhandler(numString){
    if (buffer === "0") {buffer = numString;}
    else {buffer += numString;}
    
    
}




function init(){
    document.querySelector(".calc-buttons").
    addEventListener("click", function(event) {return buttonHandler(event.target.innerText)});
}

init();