function number(x) {
  result.innerHTML += x
}

function answer() {
  var ans = eval(result.innerHTML);
  result.innerHTML = ans;
  if (result.innerHTML === 'Infinity') {
    alert('That is not a valid entry, try again!')
  ugh()
  }
  if (result.innerHTML === 'NaN') {
    alert('Not a valid number, try again')
  ugh()
  }
}

function ugh() {
  result.innerHTML = '';
}

function percent() {
  var perCent = eval(result.innerHTML / 100)
  result.innerHTML = perCent
}

function mem() {
  result.innerHTML= 'you remember it'

}
