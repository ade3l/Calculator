
let add = (a,b)=> parseInt(a) + parseInt(b)
let subtract = (a,b)=> parseInt(a) - parseInt(b)
let mult = (a,b)=> parseInt(a) * parseInt(b)
let divide = (a,b)=> parseInt(a) / parseInt(b)
let inverse = a=> -1*parseInt(a)
let percent = (a,b)=>(parseInt(a)/100) * parseInt(b)

let num1 = "0"
let num2 = "0"
let currentNum = ""
let operand = add
let calculation=""
let result = ""

let resultText = document.querySelector('#result')
let calculationText = document.querySelector('#calculation')
let funcButtons = document.querySelectorAll('.function')
let numButtons = document.querySelectorAll('.number');
function AC(){
    num1 = "0"
    num2 = "0"
    currentNum = "";
    operand = add
    calculation="";
    result = "0"
    updateDisplay()
}

function updateDisplay(){
    resultText.innerText = result;
    if(calculation.length == 0){
        calculationText.innerHTML = "&ensp;"
    }
    else{ calculationText.innerHTML = calculation}
}

AC()

funcButtons.forEach(button=>{
    button.addEventListener('click',()=>{
        if(button.id =="ac") AC();
        if(button.id == 'equal') {
            result = operand(result,num1)
            num2 = result
            num1="0"
            updateDisplay()
        }
        if(calculation!="" && button.id!='equal'){
            switch(button.id){
                case 'add': operand = add; break
                case 'subtract': operand = subtract; break
                case 'multiply': operand= mult; break
                case 'divide':operand = divide; break
            }
            calculation+=button.innerText
            result= operand(num1,num2);
            num2 = result
            num1="0"
            updateDisplay()
            console.log(num1,num2,result)
        }
    })
})

numButtons.forEach(button=>{
    button.addEventListener('click',()=>{
        calculation+=button.getAttribute('data-key');
        num1+=button.getAttribute('data-key');
        console.log(num1)            
        updateDisplay();
    })
})
