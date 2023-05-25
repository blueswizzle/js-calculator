const buttons = document.querySelectorAll('button');
const screenMain = document.querySelector('.screen-main')
const screenTop = document.querySelector('.screen-top')
let firstNum = 0;
let secondNum = 0;
let operation = "";
let result = 0;

screenTop.style.visibility = 'hidden';

buttons.forEach(button =>{
    button.addEventListener('click', (e) =>{
        let input = e.target.id
        switch(input){
            case "AC":
                screenMain.innerHTML = 0;
                screenTop.innerHTML = 0;
                screenTop.style.visibility = 'hidden';
                break;
            case "negative-toggle":
                // do sometihng
                break;
            case "divide":
                //do something
                break;
            case "multiply":
                //do something
                break;
            case "addition":
                add();
                break;
            case "subtract":
                subtract();
                break;
            case "equals":
                equals();
                break;
            case "decimal":
                //do something
                break;
            default:
                let screenNumber = screenMain.innerHTML;
                screenMain.innerHTML = parseInt(screenNumber + input).toString();
                break;
        }
        
    })
});


function negativeToggle(){

}

function add(){
    if(operation == "+"){
        firstNum = parseInt(firstNum) + parseInt(screenMain.innerHTML)
        screenTop.style.visibility = 'visible';
        screenMain.innerHTML = 0;
        screenTop.innerHTML = `${firstNum} ${operation} `;
    }else{
        firstNum = screenMain.innerHTML;
        operation = "+"
        screenMain.innerHTML = 0;
        screenTop.style.visibility = 'visible';
        screenTop.innerHTML = `${firstNum} ${operation} `;
    }
  
}

function subtract(){
    if(operation == "-"){
        firstNum = parseInt(firstNum) - parseInt(screenMain.innerHTML)
        screenTop.style.visibility = 'visible';
        screenMain.innerHTML = 0;
        screenTop.innerHTML = `${firstNum} ${operation} `;
    }else{
        firstNum = screenMain.innerHTML;
        operation = "-"
        screenMain.innerHTML = 0;
        screenTop.style.visibility = 'visible';
        screenTop.innerHTML = `${firstNum} ${operation} `;
    }
}

function equals(){
    secondNum = screenMain.innerHTML
    switch(operation){
        case "+":
            result = parseInt(firstNum) + parseInt(secondNum)
            screenTop.innerHTML = `${firstNum} ${operation} ${secondNum} = `;
            screenMain.innerHTML = result;
            operation = ""
            break;
        case "-":
            result = parseInt(firstNum) - parseInt(secondNum)
            screenTop.innerHTML = `${firstNum} ${operation} ${secondNum} = `;
            screenMain.innerHTML = result;
            operation = ""
            break;
    }
}
