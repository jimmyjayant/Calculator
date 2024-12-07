var res = document.getElementById("result");
var len = res.innerHTML.length;
var char = res.innerHTML.charAt(len-1);

window.addEventListener("resize", function() {
  if(window.innerWidth > 600)
  {
   document.getElementsByClassName("navbar")[0].style.width = "";
  }
});

window.addEventListener("keydown", function(event) {
  switch(event.key)
  {
    case "Enter":
      event.preventDefault();
      display();
      break;
    case "0":
      event.preventDefault();
      zero();
      break;
    case "1":
      event.preventDefault();
      one();
      break;
    case "2":
      event.preventDefault();
      two();
      break;
    case "3":
      event.preventDefault();
      three();
      break;
    case "4":
      event.preventDefault();
      four();
      break;
    case "5":
      event.preventDefault();
      five();
      break;
    case "6":
      event.preventDefault();
      six();
      break;
    case "7":
      event.preventDefault();
      seven();
      break;
    case "8":
      event.preventDefault();
      eight();
      break;
    case "9":
      event.preventDefault();
      nine();
      break;
    case "Backspace":
      event.preventDefault();
      del();
      break;
    case "Delete":
      event.preventDefault();
      clearResult();
      break;
    case "+":
      event.preventDefault();
      plus();
      break;
    case "-":
      event.preventDefault();
      minus();
      break;
    case "/":
      event.preventDefault();
      divide();
      break;
    case "*":
      event.preventDefault();
      mul();
      break;
    case ".":
      event.preventDefault();
      dot();
      break;
    case "%":
      event.preventDefault();
      percent();
      break;
    case "(":
      event.preventDefault();
      leftbrac();
      break;
    case ")":
      event.preventDefault();
      rightbrac();
      break;
  }
});

function clearResult() {
  res.innerHTML = "";
}

function divide() {
  if(char != "/")
  {
    res.innerHTML += "/";
  }
}

function mul() {
  if(char != "*")
  {
    res.innerHTML += "*";
  }
}

function del() {
  if(res.innerHTML != "")
  {
    res.innerHTML = res.innerHTML.slice(0,-1);
  }
}

function squareroot() {
  if(res.innerHTML != "")
  res.innerHTML = Math.sqrt(eval(res.innerHTML));
}

function cbroot() {
  if(res.innerHTML != "")
  res.innerHTML = Math.cbrt(eval(res.innerHTML));
}

function seven() {
  res.innerHTML += "7";
}

function eight() {
  res.innerHTML += "8";
}

function nine() {
  res.innerHTML += "9";
}

function minus() {
  if(char != "-")
  {
    res.innerHTML += "-";
  }
}

function four() {
  res.innerHTML += "4";
}

function five() {
  res.innerHTML += "5";
}

function six() {
  res.innerHTML += "6";
}

function plus() {
  if(char != "+")
  {
    res.innerHTML += "+";
  }
}

function one() {
  res.innerHTML += "1";
}

function two() {
  res.innerHTML += "2";
}

function three() {
  res.innerHTML += "3";
}

function dot() {
  if(char != ".")
  {
    res.innerHTML += ".";
  }
}

function zero() {
  res.innerHTML += "0";
}

function leftbrac() {
  res.innerHTML += "(";
}

function rightbrac() {
  res.innerHTML += ")";
}

function percent() {
  res.innerHTML += '%';
}

function reciprocal() {
  if(res.innerHTML == '')
  {
    res.innerHTML = "";
  }
  else
  {
    res.innerHTML = 1/(res.innerHTML);
  }
}

function sqr() {
  if(res.innerHTML != "")
  {
    res.innerHTML = eval(res.innerHTML);
    res.innerHTML = Math.pow((res.innerHTML), 2);
  }
}

function display() {
  res.innerHTML = (res.innerHTML).replace("%", "/100");
  let final = eval(res.innerHTML);
  if(final)
  res.innerHTML = final;
  else
  res.innerHTML = "";
}

function nav()
{
  document.getElementsByClassName("navbar")[0].style.width = "250px";
}

function closenav()
{
  document.getElementsByClassName("navbar")[0].style.width = "0";
}

