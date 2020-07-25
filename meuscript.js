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

function start() {
  rangeRed.addEventListener('input', handleRangeValueChangeRed);
  rangeGreen.addEventListener('input', handleRangeValueChangeGreen);
  rangeBlue.addEventListener('input', handleRangeValueChangeBlue);

  selectedColor.style.backgroundColor =
    'rgb(' + red + ',' + green + ',' + blue + ')';
  project.style.color = 'rgb(' + red + ',' + green + ',' + blue + ')';
}

function handleRangeValueChangeRed(event) {
  var redChanged = event.target.value;
  inputRed.value = redChanged;
  red = redChanged;
  selectedColor.style.backgroundColor =
    'rgb(' + redChanged + ',' + green + ',' + blue + ')';
  selectedColor.textContent =
    'RGB(' + redChanged + ',' + green + ',' + blue + ')';
  project.style.color = 'rgb(' + redChanged + ',' + green + ',' + blue + ')';
}
function handleRangeValueChangeGreen(event) {
  var greenChanged = event.target.value;
  inputGreen.value = greenChanged;
  green = greenChanged;
  selectedColor.style.backgroundColor =
    'rgb(' + red + ',' + greenChanged + ',' + blue + ')';
  selectedColor.textContent =
    'RGB(' + red + ',' + greenChanged + ',' + blue + ')';
  project.style.color = 'rgb(' + red + ',' + greenChanged + ',' + blue + ')';
}
function handleRangeValueChangeBlue(event) {
  var blueChanged = event.target.value;
  inputBlue.value = blueChanged;
  blue = blueChanged;
  selectedColor.style.backgroundColor =
    'rgb(' + red + ',' + green + ',' + blueChanged + ')';
  selectedColor.textContent =
    'RGB(' + red + ',' + green + ',' + blueChanged + ')';
  project.style.color = 'rgb(' + red + ',' + green + ',' + blueChanged + ')';
}

start();
