function checkEvenOdd() {
  let num = parseInt(document.getElementById("num").value);

  if (isNaN(num)) {
    document.getElementById("result").innerText = "Please enter a valid number!";
    return;
  }

  if (num % 2 === 0) {
    document.getElementById("result").innerText = num + " is Even.";
  } else {
    document.getElementById("result").innerText = num + " is Odd.";
  }
}
