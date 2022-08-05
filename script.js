
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
        if(calculation!=""){
            switch(button.id){
                case 'add': operand = add; break
                case 'subtract': operand = subtract; break
                case 'multiply': operand= mult; break
                case 'divide':operand = divide; break
            }
            calculation+=button.innerText
            result= operand(num1,num2);
            num1 = result
            updateDisplay()
        }
    })
})


