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
  //keep a runnign total
  var runningTotal=0;
  //Split the line into an array whenever it reads an operator, use a regex for this
  //((/[*/+-]/) gives numbers
  arrayNumbers = line.split(/[*/+-]/);
  ///[^*/%+-]/) gives operators and "" at each end. pop and shift to remove
  arrayOperators = line.split(/[^*/%+-]/);
  arrayOperators.shift();
  arrayOperators.pop();
  //convert split[0] to number, set it as running total, and shift
  runningTotal = parseInt(arrayNumbers[0]);
  arrayNumbers.shift();
  //get out next int ready, and shift that from numbers array
  do{
    var nextInt = parseInt(arrayNumbers[0]);
    arrayNumbers.shift();
    //use case select to find out what the operator was
    var nextOperator = arrayOperators[0];
    arrayOperators.shift();
    switch (nextOperator) {
      case '+':
        runningTotal = runningTotal + nextInt;
        break;
      case '-':
        runningTotal = runningTotal - nextInt;
        break;
      case '*':
        runningTotal = runningTotal * nextInt;
        break;
      case '/':
        runningTotal = runningTotal / nextInt;
        break;
      default:
        throw 'InvalidInputErrpr'
    }
  }while(arrayNumbers.length>0);
  //reset the line
  line = ''
  //resolves the maths
  //return runningTotal
  console.log(arrayNumbers);
  console.log(arrayOperators);
  console.log(runningTotal);
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
