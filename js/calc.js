//FUNCTIONS
function makeButtonNum(newButton, index, val){
  newButton = numbers[index];
  newButton.addEventListener('click',handleClick);
  function handleClick(){
    line += val.toString();
    console.log(line);
  }
  return newButton;
}

function makeOperatorButton(newButton, index, operator){
  newButton = operators[index];
  newButton.addEventListener('click',handleClick);
  function handleClick(){
    line += operator;
    console.log(line);
  }
}

function clearLine(){
  console.log('ClearLineClicked');
  line = '';
}

function equalsLine(){
  console.log('Equals clicked');
}

//PROGRAM START
var line = '';
var display = document.getElementById('container')
//Add Number Buttons
var numbers = document.getElementsByClassName('buttonNum');
var button7 = makeButtonNum(button7,0,7);
var button8 = makeButtonNum(button8,1,8);
var button9 = makeButtonNum(button9,2,9);
var button4 = makeButtonNum(button4,3,4);
var button5 = makeButtonNum(button5,4,5);
var button6 = makeButtonNum(button6,5,6);
var button1 = makeButtonNum(button1,6,1);
var button2 = makeButtonNum(button2,7,2);
var button3 = makeButtonNum(button3,8,3);
//Add AC Button
var buttonAC=document.getElementsByClassName('buttonClear')[0];
buttonAC.addEventListener('click',clearLine);
//Add Operator buttons
operators = document.getElementsByClassName('operator');
var buttonMul = makeOperatorButton(buttonMul,0,'*');
var buttonDiv = makeOperatorButton(buttonDiv,1,'/');
var buttonSub = makeOperatorButton(buttonSub,2,'-');
var buttonAdd = makeOperatorButton(buttonAdd,3,'+');
//Add Equals button
var buttonEquals=document.getElementsByClassName('equals')[0];
buttonEquals.addEventListener('click',equalsLine);
