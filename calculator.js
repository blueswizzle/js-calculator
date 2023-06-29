const buttons = document.querySelectorAll('button');
const screenMain = document.querySelector('.screen-main')
const screenTop = document.querySelector('.screen-top')
let firstNum = 0;
let secondNum = 0;
let operation = "";
let result = 0;
let prevOperation = "";
screenTop.style.visibility = 'hidden';


window.addEventListener('keydown', keyBoardInput);

buttons.forEach(button =>{
    button.addEventListener('click', (e) =>{
        let input = e.target.id
        switch(input){
            case "AC":
                screenMain.innerHTML = "0";
                screenTop.innerHTML = "0";
                screenTop.style.visibility = 'hidden';
                operation = "";
                prevOperation = "";
                result = 0;
                break;
            case "negative-toggle":
                negativeToggle();
                break;
            case "divide":
                if(operation !== ""){
                    prevOperation = operation
                    operation = "/";
                }else{
                    operation = "/"
                }
                performOperation()
                break;
            case "multiply":
                if(operation !== ""){
                    prevOperation = operation
                    operation = "*";
                }else{
                    operation = "*"
                }
                performOperation()
                break;
            case "addition":
                if(operation !== ""){
                    prevOperation = operation
                    operation = "+";
                }else{
                    operation = "+"
                }
                performOperation()
                break;
            case "subtract":
                if(operation !== ""){
                    prevOperation = operation
                    operation = "-";
                }else{
                    operation = "-"
                }
                performOperation()
                break;
            case "equals":
                equals();
                break;
            case "decimal":
                decimal();
                break;
            default:
                appendNumber(input);
                break;
        }
        
    })
});


function negativeToggle(){
    let num = screenMain.innerHTML
    if(num != 0){
        screenMain.innerHTML = num * -1;
    }
}

function decimal(){
    if(!screenMain.innerHTML.includes(".")){
        screenMain.innerHTML += "."
    }
}

function performOperation(){
    screenTop.style.visibility = 'visible'
    if(prevOperation !== ""){
        firstNum = getPreviousResult();
        screenTop.innerHTML = `${firstNum} ${operation}`;
    }else{
        firstNum = screenMain.innerHTML
        screenTop.innerHTML = `${firstNum} ${operation}`;
    }    
    screenMain.innerHTML = "0";
}

function appendNumber(num){
    screenMain.innerHTML = parseFloat(screenMain.innerHTML + num).toString();
}
function deleteNumber(){
    screenMain.innerHTML = screenMain.innerHTML
    .toString()
    .slice(0, -1)
}
function equals(){
    secondNum = screenMain.innerHTML
    switch(operation){
        case "+":
            result = parseFloat(firstNum) + parseFloat(secondNum)
            screenTop.innerHTML = `${firstNum} ${operation} ${secondNum} = `;
            screenMain.innerHTML = result;
            operation = ""
            prevOperation = "";
        
            break;
        case "-":
            result = parseFloat(firstNum) - parseFloat(secondNum)
            screenTop.innerHTML = `${firstNum} ${operation} ${secondNum} = `;
            screenMain.innerHTML = result;
            operation = ""
            prevOperation = "";
            
            break;
        case "*":
            result = parseFloat(firstNum) * parseFloat(secondNum)
            screenTop.innerHTML = `${firstNum} ${operation} ${secondNum} = `;
            screenMain.innerHTML = result;
            operation = ""
            prevOperation = "";
            
            break;
        case "/":
            result = parseFloat(firstNum) / parseFloat(secondNum)
            result = roundNumber(result);
            screenTop.innerHTML = `${firstNum} ${operation} ${secondNum} = `;
            screenMain.innerHTML = result;
            operation = ""
            prevOperation = "";
            
            break; 
    }
}

function getPreviousResult(){
    secondNum = screenMain.innerHTML
    switch(prevOperation){
        case "+":
            result = parseFloat(firstNum) + parseFloat(secondNum)
           
            break;
        case "-":
            result = parseFloat(firstNum) - parseFloat(secondNum)
            
            break;
        case "*":
            result = parseFloat(firstNum) * parseFloat(secondNum)
            
            break;
        case "/":
            result = parseFloat(firstNum) / parseFloat(secondNum)
            result = roundNumber(result);
        
            break; 
    }
    return result;
}

function roundNumber(number){
    return Math.round(number * 1000 + Number.EPSILON) / 1000;
}


function keyBoardInput(e){
    if(e.key === 'Backspace') deleteNumber()
    if (e.key >= 0 && e.key <= 9) appendNumber(e.key)
    if(e.key === '.') decimal()
}