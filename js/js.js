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
let pressedChar = '';


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
    lastChar = "";
    output.value = "";
}


let divideOutput = 0;
let multiplyOutput = 0;
let addOutput = 0;
let subtractOutput = 0;

btnEqual.addEventListener("click", calculate);
function calculate(){
    formula = output.value;
    farrS()
}
function farrS(equation){
    let arrS = equation.split("-"); // less power full
    arrS.forEach(farrA);
}
function farrA(subEquation){
    let arrA = subEquation.split("+");
    arrA.forEach(farrM);
}
function farrM(subEquation){
    let arrM = formula.split("-");
    arrM.forEach(farrD);
}
function farrD(){
    let arrD = formula.split("-"); // most power full
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
    formula = output.value;
    if(pressedChar == "+" || pressedChar == "-" || pressedChar == "*" || pressedChar == "/"){
        if(lastChar != "" && lastChar != "+" && lastChar != "-" && lastChar != "*" && lastChar != "/"){
            lastChar = pressedChar;
            formula = formula + lastChar;
        }else if(lastChar != ""){
            let previousLastChar = formula.substr(formula.length - 1);
            let previousFormula = formula.substr(0, (formula.length - 1));
            lastChar = pressedChar;
            formula = previousFormula + pressedChar;
        }
    }else if(pressedChar == "0"){
        if((lastChar != "" || lastChar != "+" || lastChar != "-" || lastChar != "*" || lastChar != "/")){
            lastChar = pressedChar;
            formula = formula + lastChar;
        }
    }else{
        lastChar = pressedChar;
        formula = formula + lastChar;
    }
    output.value = formula;
}


