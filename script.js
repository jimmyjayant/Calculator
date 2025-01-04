// For length.html webpage
if(window.location.pathname.includes("length.html"))
{
  var para1 = document.getElementById("length1");
  var para2 = document.getElementById("length2");
  var lenofpara1 = para1.innerText.length;
  var lastCharofpara1 = para1.innerText.charAt(lenofpara1-1);
  var input = document.getElementById("firstselect");
  var output = document.getElementById("secondselect");
}
// For index.html webpage 
// Since when the website is hosted, the index.html is not shown in url.
// But the index.html webpage that is the Standard calculator is opened by default.
else
{
  var res = document.getElementById("result");
  var len = res.innerText.length;
  var lastChar = res.innerText.charAt(len-1);
}

// When the window size is greater than 600px, the navigation bar width is set to defaults 
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

// It will add keyboard key pressing event on all buttons of the calculator 
window.addEventListener("keydown", function(event) {
  switch(event.key)
  {
    case "Enter":
      event.preventDefault();
      mouseOver(27);
      display();
      setTimeout(() => mouseOut(27), 100);
      break;

    case "0":
      event.preventDefault();
      mouseOver(25);
      zero();
      setTimeout(() => mouseOut(25), 100);
      break;

    case "1":
      event.preventDefault();
      mouseOver(20);
      one();
      setTimeout(() => mouseOut(20), 100);
      break;

    case "2":
      event.preventDefault();
      mouseOver(21);
      two();
      setTimeout(() => mouseOut(21), 100);
      break;

    case "3":
      event.preventDefault();
      mouseOver(22);
      three();
      setTimeout(() => mouseOut(22), 100);
      break;

    case "4":
      event.preventDefault();
      mouseOver(16);
      four();
      setTimeout(() => mouseOut(16), 100);
      break;

    case "5":
      event.preventDefault();
      mouseOver(17);
      five();
      setTimeout(() => mouseOut(17), 100);
      break;

    case "6":
      event.preventDefault();
      mouseOver(18);
      six();
      setTimeout(() => mouseOut(18), 100);
      break;

    case "7":
      event.preventDefault();
      mouseOver(12);
      seven();
      setTimeout(() => mouseOut(12), 100);
      break;

    case "8":
      event.preventDefault();
      mouseOver(13);
      eight();
      setTimeout(() => mouseOut(13), 100);
      break;

    case "9":
      event.preventDefault();
      mouseOver(14);
      nine();
      setTimeout(() => mouseOut(14), 100);
      break;

    case "Backspace":
      event.preventDefault();
      mouseOver(3);
      del();
      setTimeout(() => mouseOut(3), 100);
      break;

    case "Delete":
      event.preventDefault();
      mouseOver(0);
      clearResult();
      setTimeout(() => mouseOut(0), 100);
      break;

    case "+":
      event.preventDefault();
      mouseOver(19);
      plus();
      setTimeout(() => mouseOut(19), 100);
      break;

    case "-":
      event.preventDefault();
      mouseOver(15);
      minus();
      setTimeout(() => mouseOut(15), 100);
      break;

    case "/":
      event.preventDefault();
      mouseOver(7);
      divide();
      setTimeout(() => mouseOut(7), 100);
      break;

    case "*":
      event.preventDefault();
      mouseOver(11);
      mul();
      setTimeout(() => mouseOut(11), 100);
      break;

    case ".":
      event.preventDefault();
      mouseOver(26);
      dot();
      setTimeout(() => mouseOut(26), 100);
      break;

    case "%":
      event.preventDefault();
      mouseOver(1);
      percent();
      setTimeout(() => mouseOut(1), 100);
      break;

    case "(":
      event.preventDefault();
      mouseOver(9);
      leftbrac();
      setTimeout(() => mouseOut(9), 100);
      break;

    case ")":
      event.preventDefault();
      mouseOver(10);
      rightbrac();
      setTimeout(() => mouseOut(10), 100);
      break;
  }
});

var button = Array.from(document.getElementsByClassName("button"));

// It will add click event listener to all the buttons of the calculator website 
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
      }
    })
  }
);

/* The function is related to the button C that is clear the res.innerText */
function clearResult() {
  if(window.location.pathname.includes("length.html"))
  {
    para1.innerText = "";
    para2.innerText = "";
  }
  else
  {
    res.innerText = "";
  }
}

/* The function is related to the button / that is divide */
function divide() {
  var len = res.innerText.length;
  var lastChar = res.innerText.charAt(len-1);
  if((res.innerText != "") && (lastChar != "/") && (lastChar != "+") && (lastChar != "-") && (lastChar != "*") && (lastChar != ".") && (lastChar != "(") && (lastChar != "^"))
  {
    res.innerText += "/";
  }  
}

/* The function is related to the button * that is multiplication */
function mul() {
  var len = res.innerText.length;
  var lastChar = res.innerText.charAt(len-1);
  if((res.innerText != "") && (lastChar != "*") && (lastChar != "/") && (lastChar != "+") && (lastChar != "-") && (lastChar != ".") && (lastChar != "(") && (lastChar != "^"))
  {
    res.innerText += "*";
  }
}

/* The function is related to the button &#8592; that is <-- delete last character */
function del() {
  if(window.location.pathname.includes("length.html"))
  {
    if(para1.innerText != "")
    {
      para1.innerText = para1.innerText.slice(0,-1);
    }
  }
  else
  {
    if(res.innerText != "")
    {
      res.innerText = res.innerText.slice(0,-1);
    }
  }
}

/* The function is related to the button &radic; that is square root */
function squareroot() {
  if(Number(res.innerText) < 0)
  {
    res.innerText = "Square Root of Negative Number is not possible in this Calculator.";
  }
  else if(res.innerText != "")
  {
    let num = eval(res.innerText);
    num = Number(num);
    res.innerText = Math.sqrt(num);
  }
}

/* The function is related to the button &#8731; that is cube root */
function cbroot() {
  if(res.innerText != "")
  {
    res.innerText = Math.cbrt(eval(res.innerText));
  }
}

/* The function is related to the button 7 */
function seven() {
  if(window.location.pathname.includes("length.html"))
  {
    para1.innerText += "7";
  }
  else
  {
    res.innerText += "7";
  }
}

/* The function is related to the button 8 */
function eight() {
  if(window.location.pathname.includes("length.html"))
  {
    para1.innerText += "8";
  }
  else
  {
    res.innerText += "8";
  }
}

/* The function is related to the button 9 */
function nine() {
  if(window.location.pathname.includes("length.html"))
  {
    para1.innerText += "9";
  }
  else
  {
    res.innerText += "9";
  }
}

/* The function is related to the button - */
function minus() {
  var len = res.innerText.length;
  var lastChar = res.innerText.charAt(len-1);
  if((lastChar != "-") && (lastChar != "*") && (lastChar != "/") && (lastChar != "+") && (lastChar != "."))
  {
    res.innerText += "-";
  }
}

/* The function is related to the button 4 */
function four() {
  if(window.location.pathname.includes("length.html"))
  {
    para1.innerText += "4";
  }
  else
  {
    res.innerText += "4";
  }
}

/* The function is related to the button 5 */
function five() {
  if(window.location.pathname.includes("length.html"))
  {
    para1.innerText += "5";
  }
  else
  {
    res.innerText += "5";
  }
}

/* The function is related to the button 6 */
function six() {
  if(window.location.pathname.includes("length.html"))
  {
    para1.innerText += "6";
  }
  else
  {
    res.innerText += "6";
  }
}

/* The function is related to the button + */
function plus() {
  var len = res.innerText.length;
  var lastChar = res.innerText.charAt(len-1);
  if((lastChar != "+") && (lastChar != "-") && (lastChar != "*") && (lastChar != "/") && (lastChar != ".")
   && (lastChar != "^"))
  {
    res.innerText += "+";
  }
}

/* The function is related to the button 1 */
function one() {
  if(window.location.pathname.includes("length.html"))
  {
    para1.innerText += "1";
  }
  else
  {
    res.innerText += "1";
  }
}

/* The function is related to the button 2 */
function two() {
  if(window.location.pathname.includes("length.html"))
  {
    para1.innerText += "2";
  }
  else
  {
    res.innerText += "2";
  }
}

/* The function is related to the button 3 */
function three() {
  if(window.location.pathname.includes("length.html"))
  {
    para1.innerText += "3";
  }
  else
  {
    res.innerText += "3";
  }
}

/* The function is related to the button . */
function dot() {
  if(window.location.pathname.includes("length.html"))
    {
      var lenofpara1 = para1.innerText.length;
      var lastCharofpara1 = para1.innerText.charAt(lenofpara1-1);
      if(para1.innerText == "")
      {
        alert("You cannot start your input length value with a decimal. There must be atleast a number before the decimal.");
      }
      else if(para1.innerText != "")
      {
        if((lastCharofpara1 != "."))
        {
          if(para1.innerText.includes(".") == true)
          {
            alert("There is already a decimal in the input length value. You cannot have more than one decimal.");
          }
          else
          {
            para1.innerText += ".";
          }
        }
      }
    }
  else
  {
    var len = res.innerText.length;
    var lastChar = res.innerText.charAt(len-1);
    if(res.innerText != "")
    {
      if((lastChar != ".") && (lastChar != "+") && (lastChar != "-") && (lastChar != "*") && 
      (lastChar != "/") && (lastChar != "%") && (lastChar != "(") && (lastChar != ")") && (lastChar != "^"))
      {
        let operand = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
        let lastOperand = "";
        let ch = "";

          for(let i = len-1; i > -1; i--)
          {
            for(let j = 0; j < operand.length; j++)
              {
                ch = res.innerText.charAt(i);
                if(ch == operand[j])
                {
                  lastOperand = ch + lastOperand;
                  break;
                }
              }
            
              if(!(lastOperand.includes(ch)))
              {
                break;
              }
          }

          console.log(lastOperand);

          if(lastOperand.includes("."))
          {
            alert("There is already a decimal in the last operand.");
          }
          else
          {
            res.innerText += ".";
          }
      }
    }
  }
}

/* The function is related to the button 0 */
function zero() {
  if(window.location.pathname.includes("length.html"))
  {
    para1.innerText += "0";
  }
  else
  {
    res.innerText += "0";
  }
}

/* The function is related to the button 00 */
function doublezero() {
  if(window.location.pathname.includes("length.html"))
  {
    para1.innerText += "00";
  }
  else
  {
    res.innerText += "00";
  }
}

/* The function is related to the button ( */
function leftbrac() {
    var len = res.innerText.length;
    var lastChar = res.innerText.charAt(len-1);
    if((lastChar != ".") && (lastChar != "0") && (lastChar != "1") && (lastChar != "2") &&
    (lastChar != "3") && (lastChar != "4") && (lastChar != "5") && (lastChar != "6") && 
    (lastChar != "7") && (lastChar != "8") && (lastChar != "9"))
    {
      if(lastChar == ")")
      {
        alert("You cannot use left bracket just after right bracket. Please use an operator in between these two.");
      }
      else
      {
        res.innerText += "(";
      }
    }
}

/* The function is related to the button ) */
function rightbrac() {
    var len = res.innerText.length;
    var lastChar = res.innerText.charAt(len-1);
    if((lastChar != ".") && (lastChar != "+") && (lastChar != "-") && (lastChar != "*") && (lastChar != "/") && (lastChar != "^"))
    {
      if(lastChar == "(")
      {
        alert("You cannot use right bracket just after left bracket. Please use an operand in between these two.");
      }
      else
      {
        res.innerText += ")";
      }
    }
}

/* The function is related to the % button and adds % to the res.innerText */
function percent() {
    var len = res.innerText.length;
    var lastChar = res.innerText.charAt(len-1);
    if((lastChar != "%") && (lastChar != "+") && (lastChar != "-") && (lastChar != "/") && (lastChar != "*") && (lastChar != ".") && (lastChar != "(") && (lastChar != "^"))
    {
      res.innerText += '%';
    }
}

/* The function is related to the button 1/x */
function reciprocal() {
  if(res.innerText == "")
  {
    res.innerText = "";
  }
  else if(res.innerText == "0")
  {
    res.innerText = "Division by Zero is not possible!";
  }
  else
  {
    res.innerText = (1/(res.innerText));
  }
}

/* The function is related to the button x<sup>2</sup> */
function sqr() {
  if(res.innerText != "")
  {
    res.innerText = eval(res.innerText);
    res.innerText = Math.pow((res.innerText), 2);
  }
}

/* The function is related to the button = */
function display() {
  var len = res.innerText.length;
  var lastChar = res.innerText.charAt(len-1);
  if(res.innerText != "")
  {
    if((lastChar == '+') || (lastChar == '-') || (lastChar == '*') || (lastChar == '/') || 
    (lastChar == '('))
    {
    res.innerText = "Invalid Expression. The last character cannot be an operator or left bracket.";
    }
    else 
    {
      let checkStrForBrackets = res.innerText;

      let Stack = [];
      let BracketisOK = 1; // OK
      for(let i=0; i<checkStrForBrackets.length; i++)
      {
        if(checkStrForBrackets[i] == "(")
        {
          Stack.push("(");
        }
        else if(checkStrForBrackets[i] == ")")
        {
          let popped = Stack.pop();
          if(popped != "(")
          {
            BracketisOK = 0; // Not OK 
            break;
          }
        }
      }

      if((BracketisOK == 0) || (Stack.length != 0))
      {
        res.innerText = "Bracket is missing in the Expression.";
      }
      else
      {
        // Replace all the occurrences of '%' with '/100' in the res.innerText 
        res.innerText = (res.innerText).replaceAll("%", "/100");

        // Code for ^ in res.innerText, Example = 2^2
        while(res.innerText.includes("^"))
          {           
            let currentlen = res.innerText.length;
            let lastIndexOfCaret = res.innerText.lastIndexOf("^");
            
            let x = "";
            let y = "";
            let LeftBrackets = 0;
            let RightBrackets = 0;

            // Traversing the rest of the res.innerText after ^ sign 
            for(let j = (lastIndexOfCaret + 1), forwardlength = 0; j < currentlen; j++)
            {
              let ch = res.innerText.charAt(j);
              let beforeCh = res.innerText.charAt(j-1);
              
              if((ch == "+") || (ch == "-") || (ch == "/") || (ch == "*") || (ch == "^") || 
              (ch == ")") || (ch == "("))
              {
                if(ch == "-")
                {
                  if(beforeCh == "^")
                  {
                    y += ch;
                    forwardlength++;
                  }
                  else
                  {
                    if(LeftBrackets == RightBrackets)
                    {
                      break;
                    }
                    else
                    {
                      y += ch;
                      forwardlength++;
                    }
                  }
                }
                else if(ch == "(")
                {
                  if(beforeCh == "^")
                  {
                    y += ch;
                    LeftBrackets++;
                    forwardlength++;
                  }
                  else
                  {
                    if(LeftBrackets == RightBrackets)
                    {
                      break;
                    }
                    else
                    {
                      y += ch;
                      LeftBrackets++;
                      forwardlength++;
                    }
                  }
                }
                else if(ch == ")")
                  {
                    if(y.includes("("))
                    {
                      if(LeftBrackets == RightBrackets)
                      {
                        break;
                      }
                      else
                      {
                        y += ch;
                        RightBrackets++;
                        forwardlength++;
                      }
                    }
                    else
                    {
                      break;
                    }
                }
                else if(ch == "^")
                {
                  break;
                }
                else if(ch == "/")
                {
                  if(LeftBrackets == RightBrackets)
                  {
                    break;
                  }
                  else
                  {
                    y += ch;
                    forwardlength++;
                  }
                }
                else if((ch == "+") || (ch == "*"))
                {
                  if(LeftBrackets == RightBrackets)
                  {
                    break;
                  }
                  else
                  {
                    y += ch;
                    forwardlength++;
                  }
                }
              }
              else
              {
                y += ch;
                forwardlength++;
              }
            }

            console.log(y);

            // Traversing the rest of the res.innerText before ^ sign 
            for(let j = (lastIndexOfCaret - 1), backwardlength = 0; j > -1; j--)
            {
              let ch = res.innerText.charAt(j);
              let afterch = res.innerText.charAt(j+1);

              if((ch == "+") || (ch == "-") || (ch == "/") || (ch == "*") || 
              (ch == "^") || (ch == "(") || (ch == ")"))
              {
                if((ch == "-") || (ch == "+") || (ch == "/") || (ch == "*"))
                {
                  if(LeftBrackets == RightBrackets)
                  {
                    break;
                  }
                  else
                  {
                    x += ch;
                    backwardlength++;
                  }
                }
                else if(ch == ")")
                {
                  if(afterch == "^")
                  {
                    x += ch;
                    RightBrackets++;
                    backwardlength++;
                  }
                  else
                  {
                    if(LeftBrackets == RightBrackets)
                    break;
                    else
                    {
                      x += ch;
                      RightBrackets++;
                      backwardlength++;
                    }
                  }
                }
                else if(ch == "(")
                {
                  if(LeftBrackets == RightBrackets)
                    break;
                  else
                  {
                    x += ch;
                    LeftBrackets++;
                    backwardlength++;
                  }
                }
                else if(ch == "^")
                {
                  break;
                }
              } 
              else
              {
                x += ch;
                backwardlength++;
              }
            }

            console.log(x);

            let originalx = x;
            let originaly = y;

            x = eval(x);
            y = eval(y);

            x = Number(x);
            y = Number(y);

            if((x == Infinity) || (y == Infinity))
            {
              res.innerText = "Computation Not Possible in this Calculator.";
            }
            else
            {
              let z = Math.pow(x,y);
              console.log(z);

              res.innerText = (res.innerText).replaceAll(`${originalx}^${originaly}`, `${z}`);
            }              
          }
        }

      let final = eval(res.innerText);
      final = Number(final);
      if(final == Infinity)
      {
        res.innerText = "Computation Not Possible";
      }
      else
      {
        res.innerText = final;
      }
    }
  }
}

/* The function is related to the navigation bar when the screen size is below 600px */
function nav()
{
  document.getElementsByClassName("navbar")[0].style.width = "calc(100vw - 20px)";
}

/* The function is related to the X button when the navbar is vertical below 600px screen size */
function closenav()
{
  document.getElementsByClassName("navbar")[0].style.width = "0";
}

/* The function is related to the button x<sup>y</sup> and adds ^ to the res.innerText */
function x_to_power_y()
{
  var len = res.innerText.length;
  var lastChar = res.innerText.charAt(len-1);
  if(res.innerText != "")
  {
    if((lastChar != "^") && (lastChar != "+") && (lastChar != "-") && (lastChar != "/") && (lastChar != "*") && (lastChar != "("))
    {
      res.innerText += "^";
    }
  }
}

// This function will check for brackets 
/*This function will now throw an error or an alert message when there is missing brackets or whether left or right brackets are more or less.
This Function will only check outer brackets conditions. And will return values to reversesign() function. 
*/
function checkForBrackets(s)
{
  let newStr = res.innerText;
  // Where s denotes the starting position of slice 
  newStr = newStr.slice(s, -1);
  console.log(newStr);

  // Creating an Empty Array to check the newStr
  let Stack = [];
  let Brackets = 1; // 1 = OK

  for(let i = 0; i < newStr.length; i++)
  {
    if(newStr[i] == "(")
    {
      Stack.push("(");
    }
    else if(newStr[i] == ")")
    {
      let poppedElement = Stack.pop();
      if(poppedElement != "(")
      {
        Brackets = 0; // Not OK 
        break;
      }
    }
  }

  if(Stack.length != 0)
  {
    console.log("Brackets in Expression is missing.");
  }
  /* This Brackets variable might be misleading because it can be equal to 1 even if brackets are missing. */
  console.log(Brackets);
  return Brackets;  
}

/* This function will not check whether brackets are missing or not. Or whether right brackets are more or less than left brackets or vice versa. Instead, it will just change the sign from - to + or vice versa. And add an outer bracket if there is none. */
/* The function is related to the +/- button */
function reversesign() {
  var len = res.innerText.length;
  var lastChar = res.innerText.charAt(len-1);

  if(res.innerText != "")
  {
    // Case for -(x) 
    if((res.innerText.at(0) == "-") && (res.innerText.at(1) == "(") && (lastChar == ")"))
    {
      let Result = checkForBrackets(2);
      if(Result == 0)
      {
        // If the Result is not OK
        res.innerText = "-(" + res.innerText + ")";
      }
      else
      {
        // If the Result is OK 
        res.innerText = res.innerText.slice(1);
      }
    }

    // Case for +(x)
    else if((res.innerText.at(0) == "+") && (res.innerText.at(1) == "(") && (lastChar == ")"))
    {
      let Result = checkForBrackets(2);
      if(Result == 0)
      {
        // If the Result is not OK
        res.innerText = "-(" + res.innerText + ")";
      }
      else
      {
        // If the Result is OK
        res.innerText = (res.innerText).replace("+", "-");
      }
    }

    // Case for (x)
    else if((res.innerText.at(0) == "(") && (lastChar == ")"))
      {
        let Result = checkForBrackets(1);
        if(Result == 0)
        {
          // If the Result is not OK
          res.innerText = "-(" + res.innerText + ")";
        }
        else
        {
          // If the Result is OK
          res.innerText = "-" + res.innerText;
        }
      }

    // Case for No overall brackets 
    else 
    {
      res.innerText = "-(" + res.innerText + ")";
    }
  }
}

/* The function is related to the length.html webpage for converting one length into another */
function displaylength1() {
  switch(input.value)
  {
    case "millimeters":
      switch(output.value)
      {
        case "millimeters":
          para2.innerText = para1.innerText;
          break;

        case "centimeters":
          para2.innerText = ((para1.innerText)/10);
          break;

        case "meters":
          para2.innerText = ((para1.innerText)/1000);
          break;

        case "kilometers":
          para2.innerText = ((para1.innerText)/1000000);
          break;

        case "inches":
          para2.innerText = ((para1.innerText)*0.0393700787);
          break;

        case "feet":
          para2.innerText = ((para1.innerText)*0.0032808399);
          break;

        case "yards":
          para2.innerText = ((para1.innerText)*0.0010936133);
          break;

        case "miles":
          para2.innerText = ((para1.innerText)*6.21371192E-7);
          break;

        case "nautical miles":
          para2.innerText = ((para1.innerText)*5.39956803E-7);
          break;

        case "mils":
          para2.innerText = ((para1.innerText)*39.3700787402);
          break;
      }
      break;

    case "centimeters":
      switch(output.value)
      {
        case "millimeters":
          para2.innerText = ((para1.innerText)*10);
          break;

        case "centimeters":
          para2.innerText = para1.innerText;
          break;

        case "meters":
          para2.innerText = ((para1.innerText)/100);
          break;

        case "kilometers":
          para2.innerText = ((para1.innerText)/100000);
          break;

        case "inches":
          para2.innerText = ((para1.innerText)*0.3937007874);
          break;

        case "feet":
          para2.innerText = ((para1.innerText)*0.032808399);
          break;

        case "yards":
          para2.innerText = ((para1.innerText)*0.010936133);
          break;

        case "miles":
          para2.innerText = ((para1.innerText)*0.0000062137);
          break;

        case "nautical miles":
          para2.innerText = ((para1.innerText)*0.0000053996);
          break;

        case "mils":
          para2.innerText = ((para1.innerText)*393.7007874016);
          break;
      }
      break;

    case "meters":
      switch(output.value)
      {
        case "millimeters":
          para2.innerText = ((para1.innerText)*1000);
          break;

        case "centimeters":
          para2.innerText = ((para1.innerText)*100);
          break;

        case "meters":
          para2.innerText = para1.innerText;
          break;

        case "kilometers":
          para2.innerText = ((para1.innerText)*0.001);
          break;

        case "inches":
          para2.innerText = ((para1.innerText)*39.3700787402);
          break;

        case "feet":
          para2.innerText = ((para1.innerText)*3.280839895);
          break;

        case "yards":
          para2.innerText = ((para1.innerText)*1.0936132983);
          break;

        case "miles":
          para2.innerText = ((para1.innerText)*0.0006213712);
          break;

        case "nautical miles":
          para2.innerText = ((para1.innerText)*0.0005399568);
          break;

        case "mils":
          para2.innerText = ((para1.innerText)*39370.078740157);
          break;
      }
      break;

    case "kilometers":
      switch(output.value)
      {
        case "millimeters":
          para2.innerText = eval((para1.innerText)*1000000);
          break;

        case "centimeters":
          para2.innerText = ((para1.innerText)*100000);
          break;

        case "meters":
          para2.innerText = ((para1.innerText)*1000);
          break;

        case "kilometers":
          para2.innerText = para1.innerText;
          break;

        case "inches":
          para2.innerText = ((para1.innerText)*39370.078740157);
          break;

        case "feet":
          para2.innerText = ((para1.innerText)*3280.8398950131);
          break;

        case "yards":
          para2.innerText = ((para1.innerText)*1093.6132983377);
          break;

        case "miles":
          para2.innerText = ((para1.innerText)*0.6213711922);
          break;

        case "nautical miles":
          para2.innerText = ((para1.innerText)*0.5399568035);
          break;
        
        case "mils":
          para2.innerText = ((para1.innerText)*39370078.740157);
          break;
      }
      break;

    case "inches":
      switch(output.value)
      {
        case "millimeters":
          para2.innerText = ((para1.innerText)*25.4);
          break;

        case "centimeters":
          para2.innerText = ((para1.innerText)*2.54);
          break;

        case "meters":
          para2.innerText = ((para1.innerText)*0.0254);
          break;

        case "kilometers":
          para2.innerText = ((para1.innerText)*0.0000254);
          break;

        case "inches":
          para2.innerText = para1.innerText;
          break;

        case "feet":
          para2.innerText = ((para1.innerText)*0.0833333333);
          break;

        case "yards":
          para2.innerText = ((para1.innerText)*0.0277777778);
          break;

        case "miles":
          para2.innerText = ((para1.innerText)*0.0000157828);
          break;

        case "nautical miles":
          para2.innerText = ((para1.innerText)*0.0000137149);
          break;

        case "mils":
          para2.innerText = ((para1.innerText)*1000);
          break;
      }
      break;

    case "feet":
      switch(output.value)
      {
        case "millimeters":
          para2.innerText = ((para1.innerText)*304.8);
          break;

        case "centimeters":
          para2.innerText = ((para1.innerText)*30.48);
          break;

        case "meters":
          para2.innerText = ((para1.innerText)*0.3048);
          break;

        case "kilometers":
          para2.innerText = ((para1.innerText)*0.0003048);
          break;

        case "inches":
          para2.innerText = ((para1.innerText)*12);
          break;

        case "feet":
          para2.innerText = para1.innerText;
          break;

        case "yards":
          para2.innerText = ((para1.innerText)*0.3333333333);
          break;

        case "miles":
          para2.innerText = ((para1.innerText)*0.0001893939);
          break;

        case "nautical miles":
          para2.innerText = ((para1.innerText)*0.0001645788);
          break;

        case "mils":
          para2.innerText = ((para1.innerText)*12000);
          break;
      }
      break;

    case "yards":
      switch(output.value)
      {
        case "millimeters":
          para2.innerText = ((para1.innerText)*914.4);
          break;

        case "centimeters":
          para2.innerText = ((para1.innerText)*91.44);
          break;

        case "meters":
          para2.innerText = ((para1.innerText)*0.9144);
          break;

        case "kilometers":
          para2.innerText = ((para1.innerText)*0.0009144);
          break;

        case "inches":
          para2.innerText = ((para1.innerText)*36);
          break;

        case "feet":
          para2.innerText = ((para1.innerText)*3);
          break;

        case "yards":
          para2.innerText = para1.innerText;
          break;

        case "miles":
          para2.innerText = ((para1.innerText)*0.0005681818);
          break;

        case "nautical miles":
          para2.innerText = ((para1.innerText)*0.0004937365);
          break;

        case "mils":
          para2.innerText = ((para1.innerText)*36000);
          break;
      }
      break;

    case "miles":
      switch(output.value)
      {
        case "millimeters":
          para2.innerText = ((para1.innerText)*1609344);
          break;

        case "centimeters":
          para2.innerText = ((para1.innerText)*160934.4);
          break;

        case "meters":
          para2.innerText = ((para1.innerText)*1609.344);
          break;

        case "kilometers":
          para2.innerText = ((para1.innerText)*1.609344);
          break;

        case "inches":
          para2.innerText = ((para1.innerText)*63360);
          break;

        case "feet":
          para2.innerText = ((para1.innerText)*5280);
          break;

        case "yards":
          para2.innerText = ((para1.innerText)*1760);
          break;

        case "miles":
          para2.innerText = para1.innerText;
          break;

        case "nautical miles":
          para2.innerText = ((para1.innerText)*0.8689762419);
          break;

        case "mils":
          para2.innerText = ((para1.innerText)*63360000);
          break;
      }
      break;

    case "nautical miles":
      switch(output.value)
      {
        case "millimeters":
          para2.innerText = ((para1.innerText)*1852000);
          break;

        case "centimeters":
          para2.innerText = ((para1.innerText)*185200);
          break;

        case "meters":
          para2.innerText = ((para1.innerText)*1852);
          break;

        case "kilometers":
          para2.innerText = ((para1.innerText)*1.852);
          break;

        case "inches":
          para2.innerText = ((para1.innerText)*72913.385826772);
          break;

        case "feet":
          para2.innerText = ((para1.innerText)*6076.1154855643);
          break;

        case "yards":
          para2.innerText = ((para1.innerText)*2025.3718285214);
          break;

        case "miles":
          para2.innerText = ((para1.innerText)*1.150779448);
          break;

        case "nautical miles":
          para2.innerText = para1.innerText;
          break;

        case "mils":
          para2.innerText = ((para1.innerText)*72913385.826772);
          break;
      }
      break;

    case "mils":
      switch(output.value)
      {
        case "millimeters":
          para2.innerText = ((para1.innerText)*0.0254);
          break;

        case "centimeters":
          para2.innerText = ((para1.innerText)*0.00254);
          break;

        case "meters":
          para2.innerText = ((para1.innerText)*0.0000254);
          break;

        case "kilometers":
          para2.innerText = eval((para1.innerText)*(2.54000000E-8));
          break;

        case "inches":
          para2.innerText = ((para1.innerText)*0.001);
          break;

        case "feet":
          para2.innerText = ((para1.innerText)*0.0000833333);
          break;

        case "yards":
          para2.innerText = ((para1.innerText)*0.0000277778);
          break;

        case "miles":
          para2.innerText = ((para1.innerText)*1.57828283E-8);
          break;

        case "nautical miles":
          para2.innerText = ((para1.innerText)*1.37149028E-8);
          break;

        case "mils":
          para2.innerText = para1.innerText;
          break;
      }
      break;
  }
}

if(window.location.pathname.includes("length.html"))
{
  input.addEventListener("change", displaylength1);

  output.addEventListener("change", displaylength1);

  var operand = Array.from(document.getElementsByClassName("operand"));

  operand.forEach((operand) => {
    operand.addEventListener("click", displaylength1);
  });
}
