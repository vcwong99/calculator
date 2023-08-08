let currentNum='';
let firstNum=-1;
let operator= null;
const container = document.getElementById('container');
const numbers = document.createElement('numbers');

const output=document.createElement('div');
output.setAttribute('id', 'output');
const outputMain=document.createElement('div');
outputMain.setAttribute('id', 'main');
const history=document.createElement('div');
history.setAttribute("id", 'history');
output.appendChild(history);
output.appendChild(outputMain);
container.appendChild(output);
function updateOutput(){
    outputMain.textContent=currentNum;
    history.textContent= (operator==null)? '':`${firstNum} ${operator}`;
    
    
}

function addOperator (op){
    firstNum=(currentNum=='')? 0:parseInt(currentNum);
    operator=op;
    currentNum=''
    updateOutput();
}



const operators=document.createElement('div');
operators.setAttribute('class','operators');
container.appendChild(operators);
numbers.setAttribute('class', 'numbers');








const multiply = document.createElement('button');
multiply.textContent="*";
multiply.addEventListener('click', ()=>addOperator('*'));
operators.appendChild(multiply);
const subtract = document.createElement('button');
subtract.textContent="-";
subtract.addEventListener('click', ()=>addOperator('-'));
operators.appendChild(subtract);
const addition = document.createElement('button');
addition.textContent="+";
addition.addEventListener('click', ()=>addOperator('+'));
operators.appendChild(addition);
const divide = document.createElement('button');
divide.textContent="/";
divide.addEventListener('click', ()=>addOperator('/'));
operators.appendChild(divide);



for(let i=9; i>=0;i--){
    const number=document.createElement('button');
    number.textContent= `${i}`;
    number.setAttribute('id', `number-${i}`);
    number.addEventListener('click',(e)=>{
        currentNum+=i;
        console.log(currentNum);
        updateOutput();
    })
    numbers.appendChild(number);
}
container.appendChild(numbers);





