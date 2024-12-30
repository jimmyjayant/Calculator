// For index.html webpage 
if(window.location.pathname.includes("index.html"))
{
  var res = document.getElementById("result");
  var len = res.innerText.length;
  var lastChar = res.innerText.charAt(len-1);
}

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

function clearResult() {
  if(window.location.pathname.includes("index.html"))
  {
    res.innerText = "";
  }
  else if(window.location.pathname.includes("length.html"))
  {
    para1.innerText = "";
    para2.innerText = "";
  }
}

function divide() {
  var len = res.innerText.length;
  var lastChar = res.innerText.charAt(len-1);
  if((res.innerText != "") && (lastChar != "/") && (lastChar != "+") && (lastChar != "-") && (lastChar != "*") && (lastChar != ".") && (lastChar != "("))
  {
    res.innerText += "/";
  }  
}

function mul() {
  var len = res.innerText.length;
  var lastChar = res.innerText.charAt(len-1);
  if((res.innerText != "") && (lastChar != "*") && (lastChar != "/") && (lastChar != "+") && (lastChar != "-") && (lastChar != ".") && (lastChar != "("))
  {
    res.innerText += "*";
  }
}

function del() {
  if(window.location.pathname.includes("index.html"))
  {
    if(res.innerText != "")
    {
      res.innerText = res.innerText.slice(0,-1);
    }
  }
  else if(window.location.pathname.includes("length.html"))
  {
    if(para1.innerText != "")
    {
      para1.innerText = para1.innerText.slice(0,-1);
    }
  }
}

function squareroot() {
  if(Number(res.innerText) < 0)
  {
    res.innerText = "Square Root of Negative Number is not possible in this Calculator.";
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
  if(window.location.pathname.includes("index.html"))
  {
    res.innerText += "7";
  }
  else if(window.location.pathname.includes("length.html"))
  {
    para1.innerText += "7";
  }
}

function eight() {
  if(window.location.pathname.includes("index.html"))
  {
    res.innerText += "8";
  }
  else if(window.location.pathname.includes("length.html"))
  {
    para1.innerText += "8";
  }
}

function nine() {
  if(window.location.pathname.includes("index.html"))
  {
    res.innerText += "9";
  }
  else if(window.location.pathname.includes("length.html"))
  {
    para1.innerText += "9";
  }
}

function minus() {
  var len = res.innerText.length;
  var lastChar = res.innerText.charAt(len-1);
  if((lastChar != "-") && (lastChar != "*") && (lastChar != "/") && (lastChar != "+") && (lastChar != "."))
  {
    res.innerText += "-";
  }
}

function four() {
  if(window.location.pathname.includes("index.html"))
  {
    res.innerText += "4";
  }
  else if(window.location.pathname.includes("length.html"))
  {
    para1.innerText += "4";
  }
}

function five() {
  if(window.location.pathname.includes("index.html"))
  {
    res.innerText += "5";
  }
  else if(window.location.pathname.includes("length.html"))
  {
    para1.innerText += "5";
  }
}

function six() {
  if(window.location.pathname.includes("index.html"))
  {
    res.innerText += "6";
  }
  else if(window.location.pathname.includes("length.html"))
  {
    para1.innerText += "6";
  }
}

function plus() {
  var len = res.innerText.length;
  var lastChar = res.innerText.charAt(len-1);
  if((lastChar != "+") && (lastChar != "-") && (lastChar != "*") && (lastChar != "/") && (lastChar != "."))
  {
    res.innerText += "+";
  }
}

function one() {
  if(window.location.pathname.includes("index.html"))
  {
    res.innerText += "1";
  }
  else if(window.location.pathname.includes("length.html"))
  {
    para1.innerText += "1";
  }
}

function two() {
  if(window.location.pathname.includes("index.html"))
  {
    res.innerText += "2";
  }
  else if(window.location.pathname.includes("length.html"))
  {
    para1.innerText += "2";
  }
}

function three() {
  if(window.location.pathname.includes("index.html"))
  {
    res.innerText += "3";
  }
  else if(window.location.pathname.includes("length.html"))
  {
    para1.innerText += "3";
  }
}

function dot() {
  if(window.location.pathname.includes("index.html"))
  {
    var len = res.innerText.length;
    var lastChar = res.innerText.charAt(len-1);
    if(res.innerText != "")
    {
      if((lastChar != ".") && (lastChar != "+") && (lastChar != "-") && (lastChar != "*") && 
      (lastChar != "/") && (lastChar != "%") && (lastChar != "(") && (lastChar != ")"))
      {
        let operand = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
        let lastOperand = "";
        let ch = "";

          for(let i = res.innerText.length-1; i > -1; i--)
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
            alert("There is already a dot in the last operand.");
          }
          else
          {
            res.innerText += ".";
          }
      }
    }
  }
  else if(window.location.pathname.includes("length.html"))
  {
    var lenofpara1 = para1.innerText.length;
    var lastCharofpara1 = para1.innerText.charAt(lenofpara1-1);
    if((lastCharofpara1 != "."))
    {
      if(para1.innerText.includes(".") == true)
      {
        alert("There is already a dot in the operand. You cannot have more than one dot in a single operand.");
      }
      else
      {
        para1.innerText += ".";
      }
    }
  }
}

function zero() {
  if(window.location.pathname.includes("index.html"))
  {
    res.innerText += "0";
  }
  else if(window.location.pathname.includes("length.html"))
  {
    para1.innerText += "0";
  }
}

function doublezero() {
  if(window.location.pathname.includes("index.html"))
  {
    res.innerText += "00";
  }
  else if(window.location.pathname.includes("length.html"))
  {
    para1.innerText += "00";
  }
}

function leftbrac() {
  if(window.location.pathname.includes("index.html"))
  {
    var len = res.innerText.length;
    var lastChar = res.innerText.charAt(len-1);
    if(lastChar != ".")
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
}

function rightbrac() {
  if(window.location.pathname.includes("index.html"))
  {
    var len = res.innerText.length;
    var lastChar = res.innerText.charAt(len-1);
    if((lastChar != ".") && (lastChar != "+") && (lastChar != "-") && (lastChar != "*") && (lastChar != "/"))
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
}

function percent() {
  if(window.location.pathname.includes("index.html"))
  {
    var len = res.innerText.length;
    var lastChar = res.innerText.charAt(len-1);
    if((lastChar != "%") && (lastChar != "+") && (lastChar != "-") && (lastChar != "/") && (lastChar != "*") && (lastChar != ".") && (lastChar != "(") && (lastChar != "^"))
    {
      res.innerText += '%';
    }
  }
}

function reciprocal() {
  if(window.location.pathname.includes("index.html"))
  {
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
}

function sqr() {
  if(window.location.pathname.includes("index.html"))
  {
    if(res.innerText != "")
    {
      res.innerText = eval(res.innerText);
      res.innerText = Math.pow((res.innerText), 2);
    }
  }
}

function display() {
  if(window.location.pathname.includes("index.html"))
  {
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
        console.log(checkStrForBrackets);
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

        console.log(BracketisOK);
        console.log(Stack.length);

        if((BracketisOK == 0) || (Stack.length != 0))
        {
          res.innerText = "Bracket is missing in the Expression.";
        }
        else
        {
          // Replace all the occurrences of '%' with '/100' in the res.innerText 
          res.innerText = (res.innerText).replaceAll("%", "/100");

          // Code for ^ in res.innerText, Example = 2^2
          if(res.innerText.includes("^"))
            {
              let matchIterator = res.innerText.matchAll(/\^/g);
              let matchArray = [...matchIterator];
      
              console.log(matchArray);
      
              var MatchIndexArray = [];
      
              matchArray.forEach((match) => {
                MatchIndexArray.push(match.index);
              });
      
              console.log(MatchIndexArray);

              for(let i = (MatchIndexArray.length-1); i>-1; i--)
              {
                let y = "";
                let LeftBrackets = 0;
                let RightBrackets = 0;


              }

              /*
              let power = res.innerText.indexOf("^");
              console.log(power);
              let x = res.innerText.slice(0,power);
              console.log(x);
              let y = res.innerText.slice(power + 1);
              console.log(y);
      
              x = eval(x);
              x = Number(x);
              y = eval(y);
              y = Number(y);
      
              let powresult = Math.pow(x,y);
              console.log(powresult);
              res.innerText = (res.innerText).replace(`${x}^${y}`, `${powresult}`);
              */
      
              // Code for ^ in res.innerText, Example = 2^2^2
              /*
              let power = res.innerText.indexOf("^"); // 1
              console.log(power);
              let power1 = res.innerText.indexOf("^", power+1);  // 3
              console.log(power1);
              let x = res.innerText.slice(0, power); // '2'
              console.log(x);
              let y = res.innerText.slice(power+1); // '2^2'
              console.log(y);
              let a = res.innerText.slice(power+1, power1);
              console.log(a);
              let b = res.innerText.slice(power1+1);
              console.log(b);
              x = Number(x);
              a = Number(a);
              b = Number(b);
      
              let powresult = Math.pow(a,b);
              console.log(powresult);
              let powresult1 = Math.pow(x,powresult);
              console.log(powresult1);
              res.innerText = (res.innerText).replace(`${x}^${a}^${b}`, `${powresult1}`);
              */
            }
  
          let final = eval(res.innerText);
          final = Number(final);
          if(final)
          {
            res.innerText = final;
          }
          else
          {
            res.innerText = "";
          }
        }
      }
    }
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
  if(window.location.pathname.includes("index.html"))
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
}

// This function will check for brackets 
function checkForBrackets(s)
{
  let newStr = res.innerText;
  // Where s denotes the starting position of slice 
  newStr = newStr.slice(s, -1);
  console.log(newStr);

  // Creating an Empty String to check the newStr
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
  console.log(Brackets);
  return Brackets;  
}

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
