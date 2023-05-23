const buttons = document.querySelectorAll('button');
const screenMain = document.querySelector('.screen-main')
const screenTop = document.querySelector('.screen-top')
let firstNum = 0;
let secondNum = 0;

buttons.forEach(button =>{
    button.addEventListener('click', (e) =>{
        let input = e.target.id
        switch(input){
            case "AC":
                screenMain.innerHTML = 0;
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
                //do something
                break;
            case "subtract":
                //do something
                break;
            case "equals":
                // do something
                break;
            case "decimal":
                //do something
                break;                            
        }
        let screenNumber = screenMain.innerHTML;
        screenMain.innerHTML = parseInt(screenNumber + firstNum).toString()
    })
})
