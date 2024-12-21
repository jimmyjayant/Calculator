var res = document.getElementById("result");
var len = res.innerText.length;
var char = res.innerText.charAt(len-1);

window.addEventListener("resize", function() {
  if(window.innerWidth > 600)
  {
   document.getElementsByClassName("navbar")[0].style.width = "";
  }
});

/* My own code when the respective key is pressed then the respective css hover effect will take place of the key. */
function mouseOver(a)
{
  /* The css hover effect for Enter (=) key is different from others as it is styled differently from others. */
  if(a == 27)
  {
    document.getElementsByClassName("button")[a].style.color = "white";
    document.getElementsByClassName("button")[a].style.backgroundColor = "darkblue";
  }
  else
  {
    /* The css styling for the rest of the buttons on the calculator. */
    document.getElementsByClassName("button")[a].style.color = "white";
    document.getElementsByClassName("button")[a].style.backgroundColor = "#111";
  }
}

/* My own code after the key is pressed and css hover effect take place then after that the respective button is returned to its normal css style state. */
function mouseOut(a)
{
  if(a == 27)
    {
      let red = 0;
      let green = 0;
      let blue = 255;
      let alpha = 0.7;
      let rgbaColor = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
      document.getElementsByClassName("button")[a].style.backgroundColor = rgbaColor;
    }
    else
    {
      document.getElementsByClassName("button")[a].style.color = "black";
      document.getElementsByClassName("button")[a].style.backgroundColor = "#f1f1f1";
    }
}

window.addEventListener("keydown", function(event) {
  switch(event.key)
  {
    case "Enter":
      event.preventDefault();
      mouseOver(27);
      display();
      setTimeout(() => mouseOut(27), 100);
      console.log(len);
      console.log(char);
      break;
    case "0":
      event.preventDefault();
      mouseOver(25);
      zero();
      setTimeout(() => mouseOut(25), 100);
      console.log(len);
      console.log(char);
      break;
    case "1":
      event.preventDefault();
      mouseOver(20);
      one();
      setTimeout(() => mouseOut(20), 100);
      var res = document.getElementById("result");
var len = res.innerText.length;
var char = res.innerText.charAt(len-1);
      console.log(len);
      console.log(char);
      break;
    case "2":
      event.preventDefault();
      mouseOver(21);
      two();
      setTimeout(() => mouseOut(21), 100);
      console.log(len);
      console.log(char);
      break;
    case "3":
      event.preventDefault();
      mouseOver(22);
      three();
      setTimeout(() => mouseOut(22), 100);
      console.log(len);
      console.log(char);
      break;
    case "4":
      event.preventDefault();
      mouseOver(16);
      four();
      setTimeout(() => mouseOut(16), 100);
      console.log(len);
      console.log(char);
      break;
    case "5":
      event.preventDefault();
      mouseOver(17);
      five();
      setTimeout(() => mouseOut(17), 100);
      console.log(len);
      console.log(char);
      break;
    case "6":
      event.preventDefault();
      mouseOver(18);
      six();
      setTimeout(() => mouseOut(18), 100);
      console.log(len);
      console.log(char);
      break;
    case "7":
      event.preventDefault();
      mouseOver(12);
      seven();
      setTimeout(() => mouseOut(12), 100);
      console.log(len);
      console.log(char);
      break;
    case "8":
      event.preventDefault();
      mouseOver(13);
      eight();
      setTimeout(() => mouseOut(13), 100);
      console.log(len);
      console.log(char);
      break;
    case "9":
      event.preventDefault();
      mouseOver(14);
      nine();
      setTimeout(() => mouseOut(14), 100);
      console.log(len);
      console.log(char);
      break;
    case "Backspace":
      event.preventDefault();
      mouseOver(3);
      del();
      setTimeout(() => mouseOut(3), 100);
      console.log(char);
      console.log(len);
      break;
    case "Delete":
      event.preventDefault();
      mouseOver(0);
      clearResult();
      setTimeout(() => mouseOut(0), 100);
      console.log(char);
      console.log(len);
      break;
    case "+":
      event.preventDefault();
      mouseOver(19);
      plus();
      setTimeout(() => mouseOut(19), 100);
      console.log(char);
      console.log(len);
      break;
    case "-":
      event.preventDefault();
      mouseOver(15);
      minus();
      setTimeout(() => mouseOut(15), 100);
      console.log(char);
      console.log(len);
      break;
    case "/":
      event.preventDefault();
      mouseOver(7);
      divide();
      setTimeout(() => mouseOut(7), 100);
      console.log(char);
      console.log(len);
      break;
    case "*":
      event.preventDefault();
      mouseOver(11);
      mul();
      setTimeout(() => mouseOut(11), 100);
      console.log(char);
      console.log(len);
      break;
    case ".":
      event.preventDefault();
      mouseOver(26);
      dot();
      setTimeout(() => mouseOut(26), 100);
      console.log(char);
      console.log(len);
      break;
    case "%":
      event.preventDefault();
      mouseOver(1);
      percent();
      setTimeout(() => mouseOut(1), 100);
      console.log(char);
      console.log(len);
      break;
    case "(":
      event.preventDefault();
      mouseOver(9);
      leftbrac();
      setTimeout(() => mouseOut(9), 100);
      console.log(char);
      console.log(len);
      break;
    case ")":
      event.preventDefault();
      mouseOver(10);
      rightbrac();
      setTimeout(() => mouseOut(10), 100);
      console.log(char);
      console.log(len);
      break;
  }
});

var button = Array.from(document.getElementsByClassName("button"));
console.log(button);

button.forEach(
  (button) => {
    button.addEventListener("click", (event) => {
      switch(event.target.innerHTML)
      {
        case 'C':
          clearResult();
          break;
        
        case '%':
          percent();
          break;

        case '1/x':
          reciprocal();
          break;

        case '\u2190':
          del();
          break;

        case '\u221A':
          squareroot();
          break;

        case '\u221B':
          cbroot();
          break;

        case 'x<sup>2</sup>':
          sqr();
          break;

        case '/':
          divide();
          break;

        case 'x<sup>y</sup>':
          x_to_power_y();
          break;

        case '(':
          leftbrac();
          break;

        case ')':
          rightbrac();
          break;

        case '*':
          mul();
          break;

        case '7':
          seven();
          break;

        case '8':
          eight();
          break;

        case '9':
          nine();
          break;

        case '-':
          minus();
          break;

        case '4':
          four();
          break;

        case '5':
          five();
          break;

        case '6':
          six();
          break;

        case '+':
          plus();
          break;

        case '1':
          one();
          break;

        case '2':
          two();
          break;

        case '3':
          three();
          break;

        case '+/-':
          reversesign();
          break;

        case '00':
          doublezero();
          break;

        case '0':
          zero();
          break;

        case '.':
          dot();
          break;

        case '=':
          display();
          break;
        
        default:
          console.log(event.target.innerHTML);
          break;
      }
    })
  }
);

function clearResult() {
  res.innerText = "";
}

function divide() {
  var len = res.innerText.length;
  var char = res.innerText.charAt(len-1);
  if((char != "/") && (char != "+") && (char != "-") && (char != "*") && (char != "."))
    {
      res.innerText += "/";
    }  
}

function mul() {
  var len = res.innerText.length;
  var char = res.innerText.charAt(len-1);
  if((char != "*") && (char != "/") && (char != "+") && (char != "-") && (char != "."))
  {
    res.innerText += "*";
  }
}

function del() {
  if(res.innerText != "")
  {
    res.innerText = res.innerText.slice(0,-1);
  }
}

function squareroot() {
  if(Number(res.innerHTML) < 0)
  {
    res.innerHTML = "Square Root of Negative Number is not possible in this Calculator.";
  }
  else if(res.innerText != "")
  {
    res.innerText = Math.sqrt(eval(res.innerText));
  }
}

function cbroot() {
  if(res.innerText != "")
  {
    res.innerText = Math.cbrt(eval(res.innerText));
  }
}

function seven() {
  res.innerText += "7";
}

function eight() {
  res.innerText += "8";
}

function nine() {
  res.innerText += "9";
}

function minus() {
  var len = res.innerText.length;
  var char = res.innerText.charAt(len-1);
  if((char != "-") && (char != "*") && (char != "/") && (char != "+") && (char != "."))
  {
    res.innerText += "-";
  }
}

function four() {
  res.innerText += "4";
}

function five() {
  res.innerText += "5";
}

function six() {
  res.innerText += "6";
}

function plus() {
  var len = res.innerText.length;
  var char = res.innerText.charAt(len-1);
  if((char != "+") && (char != "-") && (char != "*") && (char != "/") && (char != "."))
  {
    res.innerText += "+";
  }
}

function one() {
  res.innerText += "1";
}

function two() {
  res.innerText += "2";
}

function three() {
  res.innerText += "3";
}

function dot() {
  var len = res.innerText.length;
  var char = res.innerText.charAt(len-1);
  if((char != ".") && (char != "+") && (char != "-") && (char != "*") && (char != "/") && (char != "%"))
  {
    res.innerText += ".";
  }
}

function zero() {
  res.innerText += "0";
}

function doublezero() {
  res.innerText += "00";
}

function leftbrac() {
  res.innerText += "(";
}

function rightbrac() {
  res.innerText += ")";
}

function percent() {
  var len = res.innerText.length;
  var char = res.innerText.charAt(len-1);
  if((char != "%") && (char != "+") && (char != "-") && (char != "/") && (char != "*"))
  {
    res.innerText += '%';
  }
}

function reciprocal() {
  if(res.innerHTML == "")
  {
    res.innerHTML = "";
  }
  else if(res.innerHTML == "0")
  {
    res.innerHTML = "Division by Zero is not possible!";
  }
  else
  {
    res.innerText = (1/(res.innerText));
  }
}

function sqr() {
  if(res.innerText != "")
  {
    res.innerText = eval(res.innerText);
    res.innerText = Math.pow((res.innerText), 2);
  }
}

function display() {
  res.innerText = (res.innerText).replace("%", "/100");
  let final = eval(res.innerText);
  if(final)
  {
    res.innerText = final;
  }
  else
  {
    res.innerText = "";
  }
}

function nav()
{
  document.getElementsByClassName("navbar")[0].style.width = "250px";
}

function closenav()
{
  document.getElementsByClassName("navbar")[0].style.width = "0";
}

function x_to_power_y()
{
  var len = res.innerText.length;
  var char = res.innerText.charAt(len-1);
  if(char != "^")
  {
    res.innerText += "^"; // Better code to be discussed
  }
}

function reversesign() {
  if(res.innerText != "")
  {
    // Code yet to be discussed
  }
}


