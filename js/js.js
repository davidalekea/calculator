let output = document.querySelector("#output");
let btn0 = document.querySelector("#bt0");
let btn1 = document.querySelector("#bt1");
let btn2 = document.querySelector("#bt2");
let btn3 = document.querySelector("#bt3");
let btn4 = document.querySelector("#bt4");
let btn5 = document.querySelector("#bt5");
let btn6 = document.querySelector("#bt6");
let btn7 = document.querySelector("#bt7");
let btn8 = document.querySelector("#bt8");
let btn9 = document.querySelector("#bt9");
let btnClear = document.querySelector("#btc");
let btnEqual = document.querySelector("#bte");
let btnAdd = document.querySelector("#bta");
let btnSubtract = document.querySelector("#bts");
let btnMultiply = document.querySelector("#btm");
let btnDevide = document.querySelector("#btd");

let formula = '';
let lastChar = '';
let outputData = 0;
let enterBtnClicked = false;


btn0.addEventListener("click", fbtn0);
function fbtn0(){digitpress("0");}

btn1.addEventListener("click", fbtn1);
function fbtn1(){digitpress("1");}

btn2.addEventListener("click", fbtn2);
function fbtn2(){digitpress("2");}

btn3.addEventListener("click", fbtn3);
function fbtn3(){digitpress("3");}

btn4.addEventListener("click", fbtn4);
function fbtn4(){digitpress("4");}

btn5.addEventListener("click", fbtn5);
function fbtn5(){digitpress("5");}

btn6.addEventListener("click", fbtn6);
function fbtn6(){digitpress("6");}

btn7.addEventListener("click", fbtn7);
function fbtn7(){digitpress("7");}

btn8.addEventListener("click", fbtn8);
function fbtn8(){digitpress("8");}

btn9.addEventListener("click", fbtn9);
function fbtn9(){digitpress("9");}

btnClear.addEventListener("click", clearFormula);
function clearFormula(){
    formula = "";
    lastChar = "";
    outputData = 0;
    output.innerHTML = "";
}


btnEqual.addEventListener("click", calculate);
function calculate(){
    formula = output.innerHTML;
    if (formula.match(/^[/*+\-0-9. ]+$/g) !== null){
        let previousLastChar = formula.substr(formula.length - 1);
        if (previousLastChar=="/" || previousLastChar=="*" || previousLastChar=="+" || previousLastChar=="-"){
            formula = formula.substr(0,(formula.length-1));
        }
        outputData = eval(formula);
    }else{
        outputData = "undefined";
    }
    console.log("Output: "+outputData);
    output.innerHTML = "";
    output.innerHTML = outputData;
    lastChar = "";
}



btnAdd.addEventListener("click", fbtnAdd);
function fbtnAdd(){digitpress("+");}

btnSubtract.addEventListener("click", fbtnSubtract);
function fbtnSubtract(){digitpress("-");}

btnMultiply.addEventListener("click", fbtnbtnMultiply);
function fbtnbtnMultiply(){digitpress("*");}

btnDevide.addEventListener("click", fbtnDevide);
function fbtnDevide(){digitpress("/");}




function digitpress(pressedChar){
    console.log(enterBtnClicked);
    if(enterBtnClicked) return; //stop triggering click on pressing enter button

    formula = output.innerHTML;
    console.log("Previous formula: "+formula);
    if(formula == "undefined") formula = "";
    if(pressedChar == "+" || pressedChar == "-" || pressedChar == "*" || pressedChar == "/"){
        if(formula != "" && lastChar != "+" && lastChar != "-" && lastChar != "*" && lastChar != "/"){
            lastChar = pressedChar;
            formula = formula + lastChar;
        }else if(formula != ""){
            let previousLastChar = formula.substr(formula.length - 1);
            let previousFormula = formula.substr(0, (formula.length - 1));
            lastChar = pressedChar;
            formula = previousFormula + pressedChar;
        }
    }else if(pressedChar == "0"){
        if((formula != "0" && lastChar != "+" && lastChar != "-" && lastChar != "*" && lastChar != "/")){
            lastChar = pressedChar;
            formula = formula + lastChar;
        }
    }else{
        lastChar = pressedChar;
        formula = formula + lastChar;
    }
    console.log("Current formula: "+formula);
    output.innerHTML = formula;
}


//NEW FUNCTION WITH ON KEY PRESS
document.addEventListener("keypress", digittype);
function digittype(event){
    let key = (typeof event.which == "number") ? event.which : event.keyCode || event.charCode;
    console.log("which:"+event.which+", keyCode:"+event.keyCode+", charCode:"+event.charCode+", key:"+key );

    if(key == 48) fbtn0();
    else if(key == 49) fbtn1();
    else if(key == 50) fbtn2();
    else if(key == 51) fbtn3();
    else if(key == 52) fbtn4();
    else if(key == 53) fbtn5();
    else if(key == 54) fbtn6();
    else if(key == 55) fbtn7();
    else if(key == 56) fbtn8();
    else if(key == 57) fbtn9();
    else if(key == 13) {
        enterBtnClicked = true;
        calculate();
        setTimeout(function (){enterBtnClicked = false;}, 500)
    }
}
