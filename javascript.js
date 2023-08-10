let currentNum='';
let decimals=0;
let firstNum=-1;
let operator= null;
const container = document.getElementById('container');


const output=document.createElement('div');
output.setAttribute('id', 'output');
const outputMain=document.createElement('div');
outputMain.setAttribute('id', 'main');
const history=document.createElement('div');
history.setAttribute("id", 'history');
const resets=document.createElement('div');
resets.setAttribute('id', 'resets');
output.appendChild(history);
output.appendChild(outputMain);
container.appendChild(output);
container.appendChild(resets);

function removeLastChar(){
    if(currentNum.length>0){
        currentNum= currentNum.substring(0, currentNum.length-1);
    }
    console.log(currentNum);
    updateOutput();
}

function updateOutput(){
    outputMain.textContent=currentNum;
    history.textContent= (operator==null)? '.':`${firstNum} ${operator}`;
}

function addOperator (op){
    //console.log(`${getValidNumber()==="number"}`);
    if(getValidNumber()!=null){
        firstNum=getValidNumber();
        decimals=0;
        operator=op;
        currentNum='';
        updateOutput();
    }

}
const clearAll=document.createElement('button');
clearAll.textContent='AC';
clearAll.style.backgroundColor='#90EE90';
clearAll.style.borderColor='#22dd22';
clearAll.addEventListener('click', ()=>{
    currentNum='';
    reset();
    updateOutput();
})
resets.appendChild(clearAll);
const backspace=document.createElement('button');
backspace.textContent='BCKSP';
backspace.style.backgroundColor='#ff6666';
backspace.style.borderColor='#ff3333';
backspace.addEventListener('click', removeLastChar);
resets.appendChild(backspace);


const buttons=document.createElement('div');
buttons.setAttribute('class','buttons');

const operators=document.createElement('div');
operators.setAttribute('class','operators');
buttons.appendChild(operators);

const multiply = document.createElement('button');
multiply.textContent="*";
const subtract = document.createElement('button');
subtract.textContent="-";
const addition = document.createElement('button');
addition.textContent="+";
const divide = document.createElement('button');
divide.textContent="/";

addition.addEventListener('click', ()=>addOperator('+'));
subtract.addEventListener('click', ()=>addOperator('-'));
multiply.addEventListener('click', ()=>addOperator('*'));
divide.addEventListener('click', ()=>addOperator('/'));
operators.appendChild(addition);
operators.appendChild(subtract);
operators.appendChild(multiply);
operators.appendChild(divide);

const numbers = document.createElement('div');
numbers.setAttribute('class', 'numbers');
for(let i=9; i>=0;i--){
    const number=document.createElement('button');
    number.textContent= `${i}`;
    number.setAttribute('id', `number-${i}`);
    number.addEventListener('click',(e)=>processNumButton(e));
    numbers.appendChild(number);
}

const decimal= document.createElement('button');
decimal.textContent='.'
decimal.addEventListener('click',(e)=>{
    decimals++;
    processNumButton(e);

});


numbers.appendChild(decimal);
buttons.appendChild(numbers);
container.appendChild(buttons);

const equal=document.createElement('button');
equal.setAttribute('id', 'equals');
equal.style.backgroundColor='rgb(202, 132, 2)';
equal.addEventListener('click',calculate);
equal.textContent='=';
container.appendChild(equal);

function processNumButton(e){
    currentNum+=e.target.textContent;
    updateOutput();
}

function getValidNumber(){
    console.log(`decimals: ${decimals} currNum: ${currentNum} op:${operator}`);
    if(decimals>1){
        currentNum='';
        outputMain.textContent="invalid number";
        
        return;
    }
    return (currentNum=='')? 0:parseFloat(currentNum);
}

function reset(){
    decimals=0;
    firstNum=-1;
    operator= null;
}

function calculate(){
    const secondNum= getValidNumber();
    if(secondNum!=null){
        switch(operator) {
            case '+':
                currentNum=`${firstNum+secondNum}`;
                break;
            case '-':
                currentNum=`${firstNum-secondNum}`;
                break;
            case '*':
                currentNum=`${firstNum*secondNum}`;
                break;
            case '/':
                currentNum=`${firstNum/secondNum}`;
                break;
        }
        console.log(currentNum);
        reset();
        updateOutput();
        currentNum='';
    }
}



