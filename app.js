/*-------------------------------- Constants --------------------------------*/
const calculator = document.querySelector('#calculator');
const display = document.querySelector('.display')
/*-------------------------------- Variables --------------------------------*/
let num1 = ''
let num2 = ''
let operator = ''
let total = 0
/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/
calculator.addEventListener('click', (event) => {


  if (event.target.classList.contains('number') && operator === '') {
      num1 += event.target.innerText
      display.innerText = num1
  } else if (event.target.classList.contains('number') && operator !== '') {
      num2 += event.target.innerText
      display.innerText = num2
  } else if (event.target.classList.contains('operator') && operator === '') {
      operator = event.target.innerText
      display.innerText = operator
  } else if (event.target.classList.contains('clear')) {
      num1 = ''
      num2 = ''
      operator = ''
      display.innerText = 0
  } else if (event.target.classList.contains('equals')) {
      if (operator === '+') {
          total = Number(num1) + Number(num2)
          display.innerText = total
          num1 = ''
          num2 = ''
          operator = ''
      } else if (operator === '-') {
          total = Number(num1) - Number(num2)
          display.innerText = total
          num1 = ''
          num2 = ''
          operator = ''
      } else if (operator === '*') {
          total = Number(num1) * Number(num2)
          display.innerText = total
          num1 = ''
          num2 = ''
          operator = ''
      } else if (operator === '/') {
          total = Number(num1) / Number(num2)
          display.innerText = total
          num1 = ''
          num2 = ''
          operator = ''
      }
  }

})
/*-------------------------------- Functions --------------------------------*/