var display = document.getElementById('container')
//Add Buttons
var numbers = document.getElementsByClassName('buttonNum');
var button7 = numbers[0];
button7.addEventListener('click',handleClick);
//Handle buttons
function handleClick(){
  console.log('Click!');
}
//Console logs for testing
console.log(numbers);
console.log(button7);
