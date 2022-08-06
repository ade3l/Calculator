let add = (a,b)=> a+ b
let subtract = (a,b)=> a - b
let mult = (a,b)=> a * b
let divide = (a,b)=> a / b
let inverse = a=> -1*a
let percent = (a,b)=>(a/100) * b

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
let queue = []
let operandSelected = false
let calculated = false


function AC(){
    
}
function evaluate(){
    let exp = queue.join("").split(/[+\-\×\÷\%]/)
    let num1 =exp[0]
    let num2 = exp[1]
    switch(queue[num1.length]){
        case '+': operand = add;break
        case '-': operand = subtract;break
        case '×': operand = mult; break
        case '÷': operand = divide; break
        case '%': operand = percent; break 
    }
    result = operand(parseInt(num1),parseInt(num2))
    updateResult(result)
    calculated = true
}
const modeAdd = 0;
const modeRem = 1;
function updateCalculation(character, mode){
    if(mode == modeAdd)
        calculationText.innerText += character
    // else if(mode == modeRem)
    //     calculationText.innerText -=character
}
function updateResult (result){resultText.innerText = result};

AC()

funcButtons.forEach(button=>{
    button.addEventListener('click',()=>{
        if(button.id!='ac' && button.id!='equal' && !operandSelected){
            queue.push(button.innerHTML)
            updateCalculation(button.innerText, modeAdd)
            operandSelected = true
        }
        if(button.id=='equal'){
            if(!calculated)
                evaluate()
        }
    })
})

numButtons.forEach(button=>{
    button.addEventListener('click',()=>{
        queue.push(button.getAttribute('data-key'))
        updateCalculation(button.getAttribute('data-key'),modeAdd)
    })
})
