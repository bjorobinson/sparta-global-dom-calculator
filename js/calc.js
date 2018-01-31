//FUNCTIONS
function makeButtonNum(newButton, index, val){
  newButton = numbers[index];
  newButton.addEventListener('click',handleClick);
  function handleClick(){
    console.log(val);
  }
  return newButton;
}

//PROGRAM START
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


//Console logs for testing
console.log(numbers);
console.log(button7);
