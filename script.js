window.addEventListener('load', start);

red = 0;
green = 0;
blue = 0;

var inputRed = document.querySelector('#inputRed');
var inputGreen = document.querySelector('#inputGreen');
var inputBlue = document.querySelector('#inputBlue');

var rangeRed = document.querySelector('#rangeRed');
var rangeGreen = document.querySelector('#rangeGreen');
var rangeBlue = document.querySelector('#rangeBlue');

var selectedColor = document.querySelector('#selectedColor');
var project = document.querySelector('#project');

function displayColor(r, g, b) {
  inputRed.value = r;
  inputGreen.value = g;
  inputBlue.value = b;

  selectedColor.textContent = 'RGB(' + r + ',' + g + ',' + b + ')';
}
function findColor(r, g, b) {
  selectColor(r, g, b);

  function selectColor(r, g, b) {
    return (color = 'rgb(' + r + ',' + g + ',' + b + ')');
  }
  selectedColor.style.backgroundColor = color;
  project.style.color = color;

  red = r;
  green = g;
  blue = b;
}

displayColor(red, green, blue);
findColor(inputRed.value, inputGreen.value, inputBlue.value);

function start() {
  rangeRed.addEventListener('input', handleRangeValueChangeRed);
  rangeGreen.addEventListener('input', handleRangeValueChangeGreen);
  rangeBlue.addEventListener('input', handleRangeValueChangeBlue);
}

function handleRangeValueChangeRed(event) {
  var redChanged = event.target.value;
  inputRed.value = redChanged;
  findColor(rangeRed.value, rangeGreen.value, rangeBlue.value);
  displayColor(red, green, blue);
}
function handleRangeValueChangeGreen(event) {
  var greenChanged = event.target.value;
  inputGreen.value = greenChanged;
  findColor(rangeRed.value, rangeGreen.value, rangeBlue.value);
  displayColor(red, green, blue);
}
function handleRangeValueChangeBlue(event) {
  var blueChanged = event.target.value;
  inputBlue.value = blueChanged;
  findColor(rangeRed.value, rangeGreen.value, rangeBlue.value);
  displayColor(red, green, blue);
}

start();
