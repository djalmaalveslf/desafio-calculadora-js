const inputNumber1 = document.querySelector('[name="number1"]');
const inputNumber2 = document.querySelector('[name="number2"]');
const resultBox = document.querySelector('[id="result-box"]');

const btnPlus = document.querySelector('[id="btn-plus"]');
btnPlus.addEventListener('click', handleBtnPlusClick);

const btnTimes = document.querySelector('[id="btn-times"]');
btnTimes.addEventListener('click', handleBtnTimesClick);

const btnClear = document.querySelector('[id="btn-clear"]');
btnClear.addEventListener('click', handleBtnClearClick);

function handleBtnClearClick(event){
  event.preventDefault();
  inputNumber1.classList.remove("input-error");
  inputNumber2.classList.remove("input-error");
  inputNumber1.value = "";
  inputNumber2.value = "";
  resultBox.innerHTML = 0;
}

function handleBtnPlusClick(event){
  event.preventDefault();
  if(validateNumericFields()){
    const sumInputsNumbers = Number(inputNumber1.value) + Number(inputNumber2.value);
    resultBox.innerHTML = sumInputsNumbers;
  }  
}

function handleBtnTimesClick(event){
  event.preventDefault();
  if(validateNumericFields()){
    const timesInputsNumbers = Number(inputNumber1.value) * Number(inputNumber2.value);
    resultBox.innerHTML = timesInputsNumbers;
  }
}

function validateNumericFields(){
  if(!isNumber(inputNumber1.value) && !isNumber(inputNumber2.value)){
    inputNumber1.classList.add("input-error");
    inputNumber2.classList.add("input-error"); 
    return false;
  }
  else if(isNumber(inputNumber1.value) && !isNumber(inputNumber2.value)){
    inputNumber1.classList.remove("input-error");
    inputNumber2.classList.add("input-error");
    return false;
  }
  else if(!isNumber(inputNumber1.value) && isNumber(inputNumber2.value)){
    inputNumber1.classList.add("input-error");
    inputNumber2.classList.remove("input-error");
    return false;
  }
  else{
    inputNumber1.classList.remove("input-error");
    inputNumber2.classList.remove("input-error");
    return true;
  }
}

function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}