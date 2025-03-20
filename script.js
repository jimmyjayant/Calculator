/* The below code will give current or active link in navbar a different styling than others */
const x = document.getElementsByClassName("navbar")[0];
const y = x.getElementsByTagName("a");
const z = Array.from(y);
var linkhrefmatched = 0;

z.forEach((link) => {
  if(window.location.href.includes(`${link.href}`))
  {
    link.classList.add("activeLink");
    linkhrefmatched = 1;
  }
});

if(linkhrefmatched == 0)
{
  z[1].classList.add("activeLink");
}

var isDisabledButton = 0;

// For unit.html webpage
if(window.location.pathname.includes("unit.html"))
{
  var para1 = document.getElementById("unit1");
  var para2 = document.getElementById("unit2");
  var lenofpara1 = para1.innerText.length;
  var lastCharofpara1 = para1.innerText.charAt(lenofpara1-1);
  var chooseunitdiv = document.getElementsByClassName("chooseunit")[0];
  var unitchoosed = Array.from(chooseunitdiv.querySelectorAll("a"));
  unitchoosed[0].classList.add("activeLink");
  var firstselect = Array.from(document.querySelectorAll("#firstunitparameter select"));
  var secondselect = Array.from(document.querySelectorAll("#secondunitparameter select"));
  var input = firstselect[0];
  var output = secondselect[0];
  input.addEventListener("change", displayunit);
  output.addEventListener("change", displayunit);
  var operand = Array.from(document.getElementsByClassName("operand"));
  operand.forEach((operand) => {
    operand.addEventListener("click", displayunit);
  });

  unitchoosed.forEach((a) => {
    a.addEventListener("click", () => {
    unitchoosed.forEach((a) => {
      a.classList.remove("activeLink");
    });

    firstselect.forEach((select) => {
      select.style.display = "none";
    });

    secondselect.forEach((select) => {
      select.style.display = "none";
    });

    para1.innerText = para2.innerText = "";

    switch(a.innerHTML)
    {
      case 'Area':
        firstselect[0].style.display = "block";
        secondselect[0].style.display = "block";
        firstselect[0].selectedIndex = 0;
        secondselect[0].selectedIndex = 0;
        input = firstselect[0];
        output = secondselect[0];
        break;

      case 'Length':
        firstselect[1].style.display = "block";
        secondselect[1].style.display = "block";
        firstselect[1].selectedIndex = 0;
        secondselect[1].selectedIndex = 0;
        input = firstselect[1];
        output = secondselect[1];
        break;

      case 'Temperature':
        firstselect[2].style.display = "block";
        secondselect[2].style.display = "block";
        firstselect[2].selectedIndex = 0;
        secondselect[2].selectedIndex = 0;
        input = firstselect[2];
        output = secondselect[2];
        break;

      case 'Volume':
        firstselect[3].style.display = "block";
        secondselect[3].style.display = "block";
        firstselect[3].selectedIndex = 0;
        secondselect[3].selectedIndex = 0;
        input = firstselect[3];
        output = secondselect[3];
        break;

      case 'Mass':
        firstselect[4].style.display = "block";
        secondselect[4].style.display = "block";
        firstselect[4].selectedIndex = 0;
        secondselect[4].selectedIndex = 0;
        input = firstselect[4];
        output = secondselect[4];
        break;

      case 'Data':
        firstselect[5].style.display = "block";
        secondselect[5].style.display = "block";
        firstselect[5].selectedIndex = 0;
        secondselect[5].selectedIndex = 0;
        input = firstselect[5];
        output = secondselect[5];
        break;

      case 'Speed':
        firstselect[6].style.display = "block";
        secondselect[6].style.display = "block";
        firstselect[6].selectedIndex = 0;
        secondselect[6].selectedIndex = 0;
        input = firstselect[6];
        output = secondselect[6];
        break;

      case 'Time':
        firstselect[7].style.display = "block";
        secondselect[7].style.display = "block";
        firstselect[7].selectedIndex = 0;
        secondselect[7].selectedIndex = 0;
        input = firstselect[7];
        output = secondselect[7];
        break;  
    }

    a.classList.add("activeLink");
    });
  });
}
else if(window.location.pathname.includes("programmer.html"))
{
  // For index.html webpage 
  // Since when the website is hosted, the index.html is not shown in url.
  // But the index.html webpage that is the Standard calculator is opened by default.
  var programmerresult = document.getElementById("programmerresult");
  var finalresult = document.getElementById("finalresult");
  var lastCharoffinalresult = finalresult.innerText.at(-1);
  var hexresult = document.getElementById("hexresult");
  var decimalresult = document.getElementById("decimalresult");
  var octalresult = document.getElementById("octalresult");
  var binaryresult = document.getElementById("binaryresult");
  var choosenresult = 0;
  var programmerresultdiv = document.querySelectorAll("#programmerresult > div:not(:first-child) > div:first-child");
  var programmerbutton = Array.from(document.getElementsByTagName("button"));
  var bodytagprog = document.getElementsByTagName("body")[0];
  var lastDivBorderStyle = null;
  bodytagprog.onload = setDecimalDefault();

  programmerresultdiv.forEach((div) => {
    div.addEventListener("click", (event) => {
      if(lastDivBorderStyle)
      {
        lastDivBorderStyle.classList.remove("leftborderstyle");
      }
      
      event.target.classList.add("leftborderstyle");
      
      if(event.target.innerHTML == "HEX")
        {
          programmerbutton.forEach((button) => {
            //console.log(button.innerHTML);
            switch(button.innerHTML)
            {
              case 'A':
              case 'B':
              case 'C':
              case 'D':
              case 'E':
              case 'F':
                button.disabled = false;
                break;
        
              default:
                button.disabled = false;
            }
          });
      }
  
      if(event.target.innerHTML == "DEC")
      {
        programmerbutton.forEach((button) => {
          //console.log(button.innerHTML);
          switch(button.innerHTML)
          {
            case 'A':
            case 'B':
            case 'C':
            case 'D':
            case 'E':
            case 'F':
              button.disabled = true;
              break;
      
            default:
              button.disabled = false;
          }
        });
      }
  
      if(event.target.innerHTML == "OCT")
      {
        programmerbutton.forEach((button) => {
          //console.log(button.innerHTML);
          switch(button.innerHTML)
          {
            case 'A':
            case 'B':
            case 'C':
            case 'D':
            case 'E':
            case 'F':
            case '8':
            case '9':
            case '.':
              button.disabled = true;
              break;
      
            default:
              button.disabled = false;
          }
        });
      }
  
      if(event.target.innerHTML == "BIN")
      {
        programmerbutton.forEach((button) => {
          //console.log(button.innerHTML);
          switch(button.innerHTML)
          {
            case 'A':
            case 'B':
            case 'C':
            case 'D':
            case 'E':
            case 'F':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
              button.disabled = true;
              break;
      
            default:
              button.disabled = false;
          }
        });
      }
      lastDivBorderStyle = event.target;
      
    });
  });
}
else
{
  var res = document.getElementById("result");
  var len = res.innerText.length;
  var lastChar = res.innerText.charAt(len-1);
}

function displayotherformats() {
  if(window.location.pathname.includes("programmer.html"))
  {
    switch(choosenresult)
    {
      case 1:
        hexresult.children[1].innerText = finalresult.innerText.toUpperCase();
        decimalresult.children[1].innerText = Number('0x' + finalresult.innerText).toString(10);
        octalresult.children[1].innerText = Number('0x' + finalresult.innerText).toString(8);
        binaryresult.children[1].innerText = Number('0x' + finalresult.innerText).toString(2);
        break;

      case 2:
        hexresult.children[1].innerText = Number(finalresult.innerText).toString(16).toUpperCase();
        decimalresult.children[1].innerText = finalresult.innerText;
        octalresult.children[1].innerText = Number(finalresult.innerText).toString(8);
        binaryresult.children[1].innerText = Number(finalresult.innerText).toString(2);
        break;

      case 3:
        hexresult.children[1].innerText = Number(finalresult.innerText).toString(16).toUpperCase();
        decimalresult.children[1].innerText = Number(finalresult.innerText).toString(10);
        octalresult.children[1].innerText = finalresult.innerText;
        binaryresult.children[1].innerText = Number(finalresult.innerText).toString(2);
        break;

      case 4:
        hexresult.children[1].innerText = Number(finalresult.innerText).toString(16).toUpperCase();
        decimalresult.children[1].innerText = Number(finalresult.innerText).toString(10);
        octalresult.children[1].innerText = Number(finalresult.innerText).toString(8);
        binaryresult.children[1].innerText = finalresult.innerText;
        break;
    }    
  }
}

function value_of_variables() {
  // For unit.html webpage
  if(window.location.pathname.includes("unit.html"))
  {
    lenofpara1 = para1.innerText.length;
    lastCharofpara1 = para1.innerText.charAt(lenofpara1-1);
  }
  else if(window.location.pathname.includes("programmer.html"))
  {
    // For index.html webpage 
    // Since when the website is hosted, the index.html is not shown in url.
    // But the index.html webpage that is the Standard calculator is opened by default.
    // variable initialization here for programmer.html webpage 
  }
  else
  {
    len = res.innerText.length;
    lastChar = res.innerText.charAt(len-1);
  }
}

// When the window size is greater than 600px, the navigation bar width is set to defaults 
window.addEventListener("resize", function() {
  if(window.innerWidth > 600)
  {
   document.getElementsByClassName("navbar")[0].style.width = "";
  }
});

/* This function will be used to toggle buttonhover css class applied on buttons */
function csshovereffect(id) {
  isDisabledButton = 0;
  if(id == "equal")
  {
    document.getElementById(id).classList.toggle("lastbuttonhover");
    setTimeout(() => {
      document.getElementById(id).classList.toggle("lastbuttonhover");
    },100);
  }
  else
  {
    if(document.getElementsByClassName("button")[id].disabled == false)
    {
      document.getElementsByClassName("button")[id].classList.toggle("buttonhover");
      setTimeout(() => {
        document.getElementsByClassName("button")[id].classList.toggle("buttonhover");
      },100);
    }
    else
    {
      isDisabledButton = 1;
    }
  }
}

// It will add keyboard key pressing event on all buttons of the calculator 
window.addEventListener("keydown", function(event) {
  event.preventDefault();
  switch(event.key)
  {
    case "Enter":
      if(window.location.pathname.includes("programmer.html"))
      {
        csshovereffect("equal");
      }
      else
      {
        csshovereffect("equal");
      }

      display();
      break;

    case "0":
      if(window.location.pathname.includes("unit.html"))
      {
        csshovereffect(11);
      }
      else if(window.location.pathname.includes("programmer.html"))
      {
        csshovereffect(24);
      }
      else
      {
        csshovereffect(25);
      }

      if(isDisabledButton == 0)
      {
        zero();
      }
      break;

    case "1":
      if(window.location.pathname.includes("unit.html"))
      {
        csshovereffect(8);
      }
      else if(window.location.pathname.includes("programmer.html"))
      {
        csshovereffect(19);
      }
      else
      {
        csshovereffect(20);
      }

      if(isDisabledButton == 0)
      {
        one();
      }
      break;

    case "2":
      if(window.location.pathname.includes("unit.html"))
      {
        csshovereffect(9);
      }
      else if(window.location.pathname.includes("programmer.html"))
      { 
        csshovereffect(20);
      }
      else
      {
        csshovereffect(21);
      }

      if(isDisabledButton == 0)
      {
        two();
      }
      break;

    case "3":
      if(window.location.pathname.includes("unit.html"))
      {
        csshovereffect(10);
      }
      else if(window.location.pathname.includes("programmer.html"))
      { 
        csshovereffect(21);
      }
      else
      {
        csshovereffect(22);
      }

      if(isDisabledButton == 0)
      {
        three();
      }
      break;

    case "4":
      if(window.location.pathname.includes("unit.html"))
      {
        csshovereffect(4);
      }
      else if(window.location.pathname.includes("programmer.html"))
      {
        csshovereffect(15);
      }
      else
      {
        csshovereffect(16);
      }

      if(isDisabledButton == 0)
      {
        four();
      }
      break;

    case "5":
      if(window.location.pathname.includes("unit.html"))
      {
        csshovereffect(5);
      }
      else if(window.location.pathname.includes("programmer.html"))
      {
        csshovereffect(16);
      }
      else
      {
        csshovereffect(17);
      }

      if(isDisabledButton == 0)
      {
        five();
      }
      break;

    case "6":
      if(window.location.pathname.includes("unit.html"))
      {
        csshovereffect(6);
      }
      else if(window.location.pathname.includes("programmer.html"))
      {
        csshovereffect(17);
      }
      else
      {
        csshovereffect(18);
      }

      if(isDisabledButton == 0)
      {
        six();
      }
      break;

    case "7":
      if(window.location.pathname.includes("unit.html"))
      {
        csshovereffect(0);
      }
      else if(window.location.pathname.includes("programmer.html"))
      {
        csshovereffect(11);
      }
      else
      {
        csshovereffect(12);
      }

      if(isDisabledButton == 0)
      {
        seven();
      }
      break;

    case "8":
      if(window.location.pathname.includes("unit.html"))
      {
        csshovereffect(1);
      }
      else if(window.location.pathname.includes("programmer.html"))
      {
        csshovereffect(12);
      }
      else
      {
        csshovereffect(13);
      }

      if(isDisabledButton == 0)
      {
        eight();
      }
      break;

    case "9":
      if(window.location.pathname.includes("unit.html"))
      {
        csshovereffect(2);
      }
      else if(window.location.pathname.includes("programmer.html"))
      {
        csshovereffect(13);
      }
      else
      {
        csshovereffect(14);
      }

      if(isDisabledButton == 0)
      {
        nine();
      }
      break;

    case "Backspace":
      if(window.location.pathname.includes("programmer.html"))
      {
        csshovereffect(1);
      }
      else
      {
        csshovereffect(3);
      }

      del();
      break;

    case "Delete":
      if(window.location.pathname.includes("unit.html"))
      {
        csshovereffect(7);
      }
      else if(window.location.pathname.includes("programmer.html"))
      {
        csshovereffect(0);
      }
      else
      {
        csshovereffect(0);
      }

      clearResult();
      break;

    case "+":
      if(window.location.pathname.includes("programmer.html"))
      {
        // code here for programmer.html webpage 
      }
      else
      {
        csshovereffect(19);
      }

      plus();
      break;

    case "-":
      if(window.location.pathname.includes("programmer.html"))
      {
        csshovereffect(5);
      }
      else
      {
        csshovereffect(15);
      }

      minus();
      break;

    case "/":
      if(window.location.pathname.includes("programmer.html"))
      {
        // code here for programmer.html webpage 
      }
      else
      {
        csshovereffect(7);
      }

      divide();
      break;

    case "*":
      if(window.location.pathname.includes("programmer.html"))
      {
        // code here for programmer.html webpage 
      }
      else
      {
        csshovereffect(11);
      }

      mul();
      break;

    case ".":
      if(window.location.pathname.includes("unit.html"))
      {
        csshovereffect(12);
      }
      else if(window.location.pathname.includes("programmer.html"))
      {
        csshovereffect(23);
      }
      else
      {
        csshovereffect(26);
      }

      if(isDisabledButton == 0)
      {
        dot();
      }
      break;

    case "%":
      if(window.location.pathname.includes("programmer.html"))
      {
        csshovereffect(9);
      }
      else
      {
        csshovereffect(1);
      }
      
      percent();
      break;

    case "(":
      if(window.location.pathname.includes("programmer.html"))
      {
        csshovereffect(7);
      }
      else
      {
        csshovereffect(9);
      }
      
      leftbrac();
      break;

    case ")":
      if(window.location.pathname.includes("programmer.html"))
      {
        csshovereffect(8);
      }
      else
      {
        csshovereffect(10);
      }
      
      rightbrac();
      break;

    case "a":
      if(window.location.pathname.includes("programmer.html"))
      {
        csshovereffect(2);
      }

      if(isDisabledButton == 0)
      {
        hexA();
      }
      break;

    case "b":
      if(window.location.pathname.includes("programmer.html"))
      {
        csshovereffect(6);
      }

      if(isDisabledButton == 0)
      {
        hexB();
      }
      break;

    case "c":
      if(window.location.pathname.includes("programmer.html"))
      {
        csshovereffect(10);
      }

      if(isDisabledButton == 0)
      {
        hexC();
      }
      break;

    case "d":
      if(window.location.pathname.includes("programmer.html"))
      {
        csshovereffect(14);
      }

      if(isDisabledButton == 0)
      {
        hexD();
      }
      break;

    case "e":
      if(window.location.pathname.includes("programmer.html"))
      {
        csshovereffect(18);
      }

      if(isDisabledButton == 0)
      {
        hexE();
      }
      break;

    case "f":
      if(window.location.pathname.includes("programmer.html"))
      {
        csshovereffect(22);
      }

      if(isDisabledButton == 0)
      {
        hexF();
      }
      break;
  }
  
  displayotherformats();

  value_of_variables();
});

var button = Array.from(document.getElementsByClassName("button"));

// It will add click event listener to all the buttons of the calculator website 
button.forEach(
  (button) => {
    button.addEventListener("click", (event) => {
      switch(event.target.innerHTML)
      {
        case 'C':
          if(window.location.pathname.includes("programmer.html"))
          {
            hexC();
          }
          else
          {
            clearResult();
          }
          break;

        case 'CE':
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

        case 'A':
          hexA();
          break;

        case 'B':
          hexB();
          break;

        case 'D':
          hexD();
          break;

        case 'E':
          hexE();
          break;

        case 'F':
          hexF();
          break; 

        case '&lt;&lt;':
          leftshift();
          break;

        case '&gt;&gt;':
          rightshift();
          break;
      }

      displayotherformats();
      
      value_of_variables();
    })
  }
);

/* The function is related to the button C or CE that is clear the res.innerText */
function clearResult() {
  if(window.location.pathname.includes("unit.html"))
  {
    para1.innerText = para2.innerText = "";
    input.selectedIndex = output.selectedIndex = 0;
  }
  else if(window.location.pathname.includes("programmer.html"))
  {
    finalresult.innerText = hexresult.children[1].innerText = decimalresult.children[1].innerText = "0";
    octalresult.children[1].innerText = binaryresult.children[1].innerText = "0";
  }
  else
  {
    res.innerText = "";
  }
}

/* The function is related to the button / that is divide */
function divide() {
  if(window.location.pathname.includes("programmer.html"))
  {
    if(finalresult.innerText.at(-1) != "/")
    {
      finalresult.innerText += "/";
    }
  }
  else
  {
    if((res.innerText != "") && (lastChar != "/") && (lastChar != "+") && 
    (lastChar != "-") && (lastChar != "*") && 
    (lastChar != ".") && (lastChar != "(") && (lastChar != "^"))
    {
      res.innerText += "/";
    } 
  }  
}

/* The function is related to the button * that is multiplication */
function mul() {
  if(window.location.pathname.includes("programmer.html"))
  {
    if(finalresult.innerText.at(-1) != "*")
    {
      finalresult.innerText += "*";
    }
  }
  else
  {
    if((res.innerText != "") && (lastChar != "*") && (lastChar != "/") && 
    (lastChar != "+") && (lastChar != "-") && (lastChar != ".") && 
    (lastChar != "(") && (lastChar != "^"))
    {
      res.innerText += "*";
    }
  }
}

/* The function is related to the button &#8592; that is <-- delete last character */
function del() {
  if(window.location.pathname.includes("unit.html"))
  {
    if(para1.innerText != "")
    {
      para1.innerText = para1.innerText.slice(0,-1);
      displayunit();
    }
  }
  else if(window.location.pathname.includes("programmer.html"))
    {
      if(finalresult.innerText != "0")
      {
        let lengthoffinalresult = finalresult.innerText.length;
        
        if(lengthoffinalresult == 1)
        {
          finalresult.innerText = "0";
        }
        else
          finalresult.innerText = finalresult.innerText.slice(0, -1);
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
  if(window.location.pathname.includes("unit.html"))
  {
    para1.innerText += "7";
    displayunit();
  }
  else if(window.location.pathname.includes("programmer.html"))
    {
      if(finalresult.innerText == "0")
      finalresult.innerText = "7";
      else
      finalresult.innerText += "7";
    }
  else
  {
    res.innerText += "7";
  }
}

/* The function is related to the button 8 */
function eight() {
  if(window.location.pathname.includes("unit.html"))
  {
    para1.innerText += "8";
    displayunit();
  }
  else if(window.location.pathname.includes("programmer.html"))
    {
      if(finalresult.innerText == "0")
        finalresult.innerText = "8";
        else
        finalresult.innerText += "8";
    }
  else
  {
    res.innerText += "8";
  }
}

/* The function is related to the button 9 */
function nine() {
  if(window.location.pathname.includes("unit.html"))
  {
    para1.innerText += "9";
    displayunit();
  }
  else if(window.location.pathname.includes("programmer.html"))
    {
      if(finalresult.innerText == "0")
        finalresult.innerText = "9";
        else
        finalresult.innerText += "9";
    }
  else
  {
    res.innerText += "9";
  }
}

/* The function is related to the button - */
function minus() {
  if(window.location.pathname.includes("programmer.html"))
    {
      if(finalresult.innerText.at(-1) != "-")
      {
        finalresult.innerText += "-";
      }
    }
  else
  {
    if((lastChar != "-") && (lastChar != "*") && (lastChar != "/") && (lastChar != "+") && (lastChar != "."))
      {
        res.innerText += "-";
      }
  }
}

/* The function is related to the button 4 */
function four() {
  if(window.location.pathname.includes("unit.html"))
  {
    para1.innerText += "4";
    displayunit();
  }
  else if(window.location.pathname.includes("programmer.html"))
  {
    if(finalresult.innerText == "0")
      finalresult.innerText = "4";
      else
      finalresult.innerText += "4"; 
  }
  else
  {
    res.innerText += "4";
  }
}

/* The function is related to the button 5 */
function five() {
  if(window.location.pathname.includes("unit.html"))
  {
    para1.innerText += "5";
    displayunit();
  }
  else if(window.location.pathname.includes("programmer.html"))
    {
      if(finalresult.innerText == "0")
        finalresult.innerText = "5";
        else
        finalresult.innerText += "5";  
    }
  else
  {
    res.innerText += "5";
  }
}

/* The function is related to the button 6 */
function six() {
  if(window.location.pathname.includes("unit.html"))
  {
    para1.innerText += "6";
    displayunit();
  }
  else if(window.location.pathname.includes("programmer.html"))
    {
      if(finalresult.innerText == "0")
        finalresult.innerText = "6";
        else
        finalresult.innerText += "6"; 
    }
  else
  {
    res.innerText += "6";
  }
}

/* The function is related to the button + */
function plus() {
  if(window.location.pathname.includes("programmer.html"))
  {
    if(finalresult.innerText.at(-1) != "+")
    {
      finalresult.innerText += "+";
    }
  }
  else
  {
    if((lastChar != "+") && (lastChar != "-") && (lastChar != "*") && 
    (lastChar != "/") && (lastChar != ".")&& (lastChar != "^"))
    {
      res.innerText += "+";
    }
  }
}

/* The function is related to the button 1 */
function one() {
  if(window.location.pathname.includes("unit.html"))
  {
    para1.innerText += "1";
    displayunit();
  }
  else if(window.location.pathname.includes("programmer.html"))
    {
      if(finalresult.innerText == "0")
        finalresult.innerText = "1";
        else
        finalresult.innerText += "1"; 
    }
  else
  {
    res.innerText += "1";
  }
}

/* The function is related to the button 2 */
function two() {
  if(window.location.pathname.includes("unit.html"))
  {
    para1.innerText += "2";
    displayunit();
  }
  else if(window.location.pathname.includes("programmer.html"))
    {
      if(finalresult.innerText == "0")
        finalresult.innerText = "2";
        else
        finalresult.innerText += "2";  
    }
  else
  {
    res.innerText += "2";
  }
}

/* The function is related to the button 3 */
function three() {
  if(window.location.pathname.includes("unit.html"))
  {
    para1.innerText += "3";
    displayunit();
  }
  else if(window.location.pathname.includes("programmer.html"))
    {
      if(finalresult.innerText == "0")
        finalresult.innerText = "3";
        else
        finalresult.innerText += "3"; 
    }
  else
  {
    res.innerText += "3";
  }
}

/* The function is related to the button . */
function dot() {
  if(window.location.pathname.includes("unit.html"))
    {
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
            displayunit();
          }
        }
      }
    }
  else if(window.location.pathname.includes("programmer.html"))
    {
      if(finalresult.innerText == "")
      {
        alert("You cannot start with a decimal point. There must be atleast a number before the decimal.");
      }
      else if(finalresult.innerText != "")
      {
        if(lastCharoffinalresult != ".")
        {
          if(finalresult.innerText.includes(".") == true)
          {
            alert("There is already a decimal point in the value. You cannot have more than one decimal.");
          }
          else
          {
            finalresult.innerText += ".";
          }
        }
      }
    }
  else
  {
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

          //console.log(lastOperand);

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
    else
    {
      alert("If you want to insert a decimal number below 0. Please press 0 before the dot operand.");
    }
  }
}

/* The function is related to the button 0 */
function zero() {
  if(window.location.pathname.includes("unit.html"))
  {
    para1.innerText += "0";
    displayunit();
  }
  else if(window.location.pathname.includes("programmer.html"))
    {
      if(finalresult.innerText == "0")
        finalresult.innerText = "0";
      else
        finalresult.innerText += "0";  
    }
  else
  {
    res.innerText += "0";
  }
}

/* The function is related to the button 00 */
function doublezero() {
  if(window.location.pathname.includes("unit.html"))
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
  if(window.location.pathname.includes("programmer.html"))
  {
    // code here for programmer.html webpage 
  }
  else
  {
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
}

/* The function is related to the button ) */
function rightbrac() {
  if(window.location.pathname.includes("programmer.html"))
  {
    // code here for programmer.html webpage 
  }
  else
  {
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
}

/* The function is related to the % button and adds % to the res.innerText */
function percent() {
  if(window.location.pathname.includes("programmer.html"))
  {
    // code here for programmer.html webpage 
  }
  else
  {
    if((lastChar != "%") && (lastChar != "+") && (lastChar != "-") && (lastChar != "/") && 
    (lastChar != "*") && (lastChar != ".") && (lastChar != "(") && (lastChar != "^"))
    {
      res.innerText += '%';
    }
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

/* The function is related to the button A on the programmer.html webpage */
function hexA() {
  if(window.location.pathname.includes("programmer.html"))
  {
    if(document.getElementsByClassName("button")[2].disabled == false)
    {
      if(finalresult.innerText == "0")
        finalresult.innerText = "A";
      else
        finalresult.innerText += "A";
    }
  }
}

/* The function is related to the button B on the programmer.html webpage */
function hexB() {
  if(window.location.pathname.includes("programmer.html"))
  {
    if(document.getElementsByClassName("button")[6].disabled == false)
    {
      if(finalresult.innerText == "0")
        finalresult.innerText = "B";
      else
        finalresult.innerText += "B";
    }
    
  }
}

/* The function is related to the button C on the programmer.html webpage */
function hexC() {
  if(window.location.pathname.includes("programmer.html"))
  {
    if(document.getElementsByClassName("button")[10].disabled == false)
    {
      if(finalresult.innerText == "0")
        finalresult.innerText = "C";
      else
        finalresult.innerText += "C";
    }
  }
}

/* The function is related to the button D on the programmer.html webpage */
function hexD() {
  if(window.location.pathname.includes("programmer.html"))
  {
    if(document.getElementsByClassName("button")[14].disabled == false)
    {
      if(finalresult.innerText == "0")
        finalresult.innerText = "D";
      else
        finalresult.innerText += "D";
    }
  }
}

/* The function is related to the button E on the programmer.html webpage */
function hexE() {
  if(window.location.pathname.includes("programmer.html"))
  {
    if(document.getElementsByClassName("button")[18].disabled == false)
    {
      if(finalresult.innerText == "0")
        finalresult.innerText = "E";
      else
        finalresult.innerText += "E";
    }
  }
}

/* The function is related to the button F on the programmer.html webpage */
function hexF() {
  if(window.location.pathname.includes("programmer.html"))
  {
    if(document.getElementsByClassName("button")[22].disabled == false)
    {
      if(finalresult.innerText == "0")
        finalresult.innerText = "F";
      else
        finalresult.innerText += "F";
    }
  }
}

/* The function is related to the button << on the programmer.html webpage */
function leftshift() {
  if(window.location.pathname.includes("programmer.html"))
  { 
    finalresult.innerText += "<<";
  }
}

/* The function is related to the button >> on the programmer.html webpage */
function rightshift() {
  if(window.location.pathname.includes("programmer.html"))
  {
    finalresult.innerText += ">>";
  }
}

/* The function is related to the button = */
function display() {
  if(window.location.pathname.includes("programmer.html"))
  {
    finalresult.innerText = eval(finalresult.innerText);
    displayotherformats();
  }
  else
  {
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
    
                //console.log(y);
    
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
    
                //console.log(x);
    
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
                  //console.log(z);
    
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
  if(res.innerText != "")
  {
    if((lastChar != "^") && (lastChar != "+") && (lastChar != "-") && 
        (lastChar != "/") && (lastChar != "*") && (lastChar != "("))
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
  //console.log(newStr);

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

/* The function is related to the unit.html webpage for converting one length into another */
function displayunit() {
  switch(input.id)
  {
    case "firstareaselect":
      switch(input.value)
      {
        case "acres":
          switch(output.value)
          {
            case "acres":
              para2.innerText = para1.innerText;
              break;

            case "ares":
              para2.innerText = (para1.innerText)*(40.468564224);
              break;

            case "hectares":
              para2.innerText = (para1.innerText)*(0.4046856422);
              break;

            case "square centimeters":
              para2.innerText = (para1.innerText)*(40468564.224);
              break;

            case "square feet":
              para2.innerText = (para1.innerText)*(43560);
              break;

            case "square inches":
              para2.innerText = (para1.innerText)*(6272640);
              break;

            case "square meters":
              para2.innerText = (para1.innerText)*(4046.8564224);
              break;
          }
          break;

        case "ares":
          switch(output.value)
          {
            case "acres":
              para2.innerText = (para1.innerText)*(0.0247105381);
              break;

            case "ares":
              para2.innerText = para1.innerText;
              break;

            case "hectares":
              para2.innerText = (para1.innerText)*(0.01);
              break;

            case "square centimeters":
              para2.innerText = (para1.innerText)*(1000000);
              break;

            case "square feet":
              para2.innerText = (para1.innerText)*(1076.391041671);
              break;

            case "square inches":
              para2.innerText = (para1.innerText)*(155000.31000062);
              break;

            case "square meters":
              para2.innerText = (para1.innerText)*(100);
              break;
          }
          break;

        case "hectares":
          switch(output.value)
          {
            case "acres":
              para2.innerText = (para1.innerText)*(2.4710538147);
              break;

            case "ares":
              para2.innerText = (para1.innerText)*(100);
              break;

            case "hectares":
              para2.innerText = para1.innerText;
              break;

            case "square centimeters":
              para2.innerText = (para1.innerText)*(100000000);
              break;

            case "square feet":
              para2.innerText = (para1.innerText)*(107639.1041671);
              break;

            case "square inches":
              para2.innerText = (para1.innerText)*(15500031.000062);
              break;

            case "square meters":
              para2.innerText = (para1.innerText)*(10000);
              break;            
          }
          break;

        case "square centimeters":
          switch(output.value)
          {
            case "acres":
              para2.innerText = (para1.innerText)*(2.47105381E-8);
              break;

            case "ares":
              para2.innerText = (para1.innerText)*(0.000001);
              break;

            case "hectares":
              para2.innerText = (para1.innerText)*(1.00000000E-8);
              break;

            case "square centimeters":
              para2.innerText = para1.innerText;
              break;

            case "square feet":
              para2.innerText = (para1.innerText)*(0.001076391);
              break;

            case "square inches":
              para2.innerText = (para1.innerText)*(0.15500031);
              break;

            case "square meters":
              para2.innerText = (para1.innerText)*(0.0001);
              break;
          }
          break;

        case "square feet":
          switch(output.value)
          {
            case "acres":
              para2.innerText = (para1.innerText)*(0.0000229568);
              break;

            case "ares":
              para2.innerText = (para1.innerText)*(0.0009290304);
              break;

            case "hectares":
              para2.innerText = (para1.innerText)*(0.0000092903);
              break;

            case "square centimeters":
              para2.innerText = (para1.innerText)*(929.0304);
              break;

            case "square feet":
              para2.innerText = para1.innerText;
              break;

            case "square inches":
              para2.innerText = (para1.innerText)*(144);
              break;

            case "square meters":
              para2.innerText = (para1.innerText)*(0.09290304);
              break;
          }
          break;

        case "square inches":
          switch(output.value)
          {
            case "acres":
              para2.innerText = (para1.innerText)*(1.59422508E-7);
              break;

            case "ares":
              para2.innerText = (para1.innerText)*(0.0000064516);
              break;

            case "hectares":
              para2.innerText = (para1.innerText)*(6.45160000E-8);
              break;

            case "square centimeters":
              para2.innerText = (para1.innerText)*(6.4516);
              break;

            case "square feet":
              para2.innerText = (para1.innerText)*(0.0069444444);
              break;

            case "square inches":
              para2.innerText = para1.innerText;
              break;

            case "square meters":
              para2.innerText = (para1.innerText)*(0.00064516);
              break;
          }
          break;

        case "square meters":
          switch(output.value)
          {
            case "acres":
              para2.innerText = (para1.innerText)*(0.0002471054);
              break;

            case "ares":
              para2.innerText = (para1.innerText)*(0.01);
              break;

            case "hectares":
              para2.innerText = (para1.innerText)*(0.0001);
              break;

            case "square centimeters":
              para2.innerText = (para1.innerText)*(10000);
              break;

            case "square feet":
              para2.innerText = (para1.innerText)*(10.7639104167);
              break;

            case "square inches":
              para2.innerText = (para1.innerText)*(1550.0031000062);
              break;

            case "square meters":
              para2.innerText = para1.innerText;
              break;
          }
          break;
      }
      break;

    case "firstlengthselect":
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
      break;

    case "firsttemperatureselect":
      switch(input.value)
      {
        case "celsius":
          switch(output.value)
          {
            case "celsius":
              para2.innerText = para1.innerText;
              break;
            
            case "fahrenheit":
              para2.innerText = (para1.innerText)*(33.8);
              break;

            case "kelvin":
              para2.innerText = (para1.innerText)*(274.15);
              break;
          }
          break;

        case "fahrenheit":
          switch(output.value)
          {
            case "celsius":
              para2.innerText = (para1.innerText)*(-17.2222222222);
              break;

            case "fahrenheit":
              para2.innerText = para1.innerText;
              break;

            case "kelvin":
              para2.innerText = (para1.innerText)*(255.9277777778);
              break;
          }
          break;

        case "kelvin":
          switch(output.value)
          {
            case "celsius":
              para2.innerText = (para1.innerText)*(-272.15);
              break;

            case "fahrenheit":
              para2.innerText = (para1.innerText)*(-457.87);
              break;

            case "kelvin":
              para2.innerText = para1.innerText;
              break;
          }
          break;
      }
      break;
    
    case "firstvolumeselect":
      switch(input.value)
      {
        case "uk gallons":
          switch(output.value)
          {
            case "uk gallons":
              para2.innerText = para1.innerText;
              break;

            case "us gallons":
              para2.innerText = (para1.innerText)*(1.2009499255);
              break;

            case "liters":
              para2.innerText = (para1.innerText)*(4.54609);
              break;

            case "milliliters":
              para2.innerText = (para1.innerText)*(4546.09);
              break;

            case "cubic centimeters":
              para2.innerText = (para1.innerText)*(4546.09);
              break;

            case "cubic meters":
              para2.innerText = (para1.innerText)*(0.00454609);
              break;

            case "cubic inches":
              para2.innerText = (para1.innerText)*(277.4194327916);
              break;

            case "cubic feet":
              para2.innerText = (para1.innerText)*(0.1605436532);
              break;
          }
          break;

        case "us gallons":
          switch(output.value)
          {
            case "uk gallons":
              para2.innerText = (para1.innerText)*(0.8326741846);
              break;

            case "us gallons":
              para2.innerText = para1.innerText;
              break;

            case "liters":
              para2.innerText = (para1.innerText)*(3.785411784);
              break;

            case "milliliters":
              para2.innerText = (para1.innerText)*(3785.411784);
              break;

            case "cubic centimeters":
              para2.innerText = (para1.innerText)*(3785.411784);
              break;

            case "cubic meters":
              para2.innerText = (para1.innerText)*(0.0037854118);
              break;

            case "cubic inches":
              para2.innerText = (para1.innerText)*(231);
              break;

            case "cubic feet":
              para2.innerText = (para1.innerText)*(0.1336805556);
              break;
          }
          break;

        case "liters":
          switch(output.value)
          {
            case "uk gallons":
              para2.innerText = (para1.innerText)*(0.2199692483);
              break;

            case "us gallons":
              para2.innerText = (para1.innerText)*(0.2641720524);
              break;

            case "liters":
              para2.innerText = para1.innerText;
              break;

            case "milliliters":
              para2.innerText = (para1.innerText)*(1000);
              break;

            case "cubic centimeters":
              para2.innerText = (para1.innerText)*(1000);
              break;

            case "cubic meters":
              para2.innerText = (para1.innerText)*(0.001);
              break;

            case "cubic inches":
              para2.innerText = (para1.innerText)*(61.0237440947);
              break;

            case "cubic feet":
              para2.innerText = (para1.innerText)*(0.0353146667);
              break;
          }
          break;

        case "milliliters":
        case "cubic centimeters":
          switch(output.value)
          {
            case "uk gallons":
              para2.innerText = (para1.innerText)*(0.0002199692);
              break;

            case "us gallons":
              para2.innerText = (para1.innerText)*(0.0002641721);
              break;

            case "liters":
              para2.innerText = (para1.innerText)*(0.001);
              break;

            case "milliliters":
              para2.innerText = para1.innerText;
              break;

            case "cubic centimeters":
              para2.innerText = para1.innerText;
              break;

            case "cubic meters":
              para2.innerText = (para1.innerText)*(0.000001);
              break;

            case "cubic inches":
              para2.innerText = (para1.innerText)*(0.0610237441);
              break;

            case "cubic feet":
              para2.innerText = (para1.innerText)*(0.0000353147);
              break;
          }
          break;

        case "cubic meters":
          switch(output.value)
          {
            case "uk gallons":
              para2.innerText = (para1.innerText)*(219.9692482991);
              break;

            case "us gallons":
              para2.innerText = (para1.innerText)*(264.1720523581);
              break;

            case "liters":
              para2.innerText = (para1.innerText)*(1000);
              break;

            case "milliliters":
              para2.innerText = (para1.innerText)*(1000000);
              break;

            case "cubic centimeters":
              para2.innerText = (para1.innerText)*(1000000);
              break;

            case "cubic meters":
              para2.innerText = para1.innerText;
              break;

            case "cubic inches":
              para2.innerText = (para1.innerText)*(61023.744094732);
              break;

            case "cubic feet":
              para2.innerText = (para1.innerText)*(35.3146667215);
              break;
          }
          break;

        case "cubic inches":
          switch(output.value)
          {
            case "uk gallons":
              para2.innerText = (para1.innerText)*(0.0036046501);
              break;

            case "us gallons":
              para2.innerText = (para1.innerText)*(0.0043290043);
              break;

            case "liters":
              para2.innerText = (para1.innerText)*(0.016387064);
              break;

            case "milliliters":
            case "cubic centimeters":
              para2.innerText = (para1.innerText)*(16.387064);
              break;

            case "cubic meters":
              para2.innerText = (para1.innerText)*(0.0000163871);
              break;

            case "cubic inches":
              para2.innerText = para1.innerText;
              break;

            case "cubic feet":
              para2.innerText = (para1.innerText)*(0.0005787037);
              break;
          }
          break;

          case "cubic feet":
          switch(output.value)
          {
            case "uk gallons":
              para2.innerText = (para1.innerText)*(6.228835459);
              break;

            case "us gallons":
              para2.innerText = (para1.innerText)*(7.4805194805);
              break;

            case "liters":
              para2.innerText = (para1.innerText)*(28.316846592);
              break;

            case "milliliters":
            case "cubic centimeters":
              para2.innerText = (para1.innerText)*(28316.846592);
              break;

            case "cubic meters":
              para2.innerText = (para1.innerText)*(0.0283168466);
              break;

            case "cubic inches":
              para2.innerText = (para1.innerText)*(1728);
              break;

            case "cubic feet":
              para2.innerText = para1.innerText;
              break;
          }
          break;
      }
      break;

    case "firstmassselect":
      switch(input.value)
      {
        case "tons":
          switch(output.value)
          {
            case "tons":
              para2.innerText = para1.innerText;
              break;

            case "uk tons":
              para2.innerText = (para1.innerText)*(0.9842065276);
              break;

            case "us tons":
              para2.innerText = (para1.innerText)*(1.1023113109);
              break;

            case "pounds":
              para2.innerText = (para1.innerText)*(2204.6226218488);
              break;

            case "ounces":
              para2.innerText = (para1.innerText)*(35273.96194958);
              break;

            case "kilograms":
              para2.innerText = (para1.innerText)*(1000);
              break;

            case "grams":
              para2.innerText = (para1.innerText)*(1000000);
              break;
          }
          break;

        case "uk tons":
          switch(output.value)
          {
            case "tons":
              para2.innerText = (para1.innerText)*(1.0160469088);
              break;

            case "uk tons":
              para2.innerText = para1.innerText;
              break;

            case "us tons":
              para2.innerText = (para1.innerText)*(1.12);
              break;

            case "pounds":
              para2.innerText = (para1.innerText)*(2240);
              break;

            case "ounces":
              para2.innerText = (para1.innerText)*(35840);
              break;

            case "kilograms":
              para2.innerText = (para1.innerText)*(1016.0469088);
              break;

            case "grams":
              para2.innerText = (para1.innerText)*(1016046.9088);
              break;
          }
          break;

        case "us tons":
          switch(output.value)
          {
            case "tons":
              para2.innerText = (para1.innerText)*(0.90718474);
              break;

            case "uk tons":
              para2.innerText = (para1.innerText)*(0.8928571429);
              break;

            case "us tons":
              para2.innerText = para1.innerText;
              break;

            case "pounds":
              para2.innerText = (para1.innerText)*(2000);
              break;

            case "ounces":
              para2.innerText = (para1.innerText)*(32000);
              break;

            case "kilograms":
              para2.innerText = (para1.innerText)*(907.18474);
              break;

            case "grams":
              para2.innerText = (para1.innerText)*(907184.74);
              break;
          }
          break;

        case "pounds":
          switch(output.value)
          {
            case "tons":
              para2.innerText = (para1.innerText)*(0.0004535924);
              break;

            case "uk tons":
              para2.innerText = (para1.innerText)*(0.0004464286);
              break;

            case "us tons":
              para2.innerText = (para1.innerText)*(0.0005);
              break;

            case "pounds":
              para2.innerText = para1.innerText;
              break;

            case "ounces":
              para2.innerText = (para1.innerText)*(16);
              break;

            case "kilograms":
              para2.innerText = (para1.innerText)*(0.45359237);
              break;

            case "grams":
              para2.innerText = (para1.innerText)*(453.59237);
              break;
          }
          break;

        case "ounces":
          switch(output.value)
          {
            case "tons":
              para2.innerText = (para1.innerText)*(0.0000283495);
              break;

            case "uk tons":
              para2.innerText = (para1.innerText)*(0.0000279018);
              break;

            case "us tons":
              para2.innerText = (para1.innerText)*(0.00003125);
              break;

            case "pounds":
              para2.innerText = (para1.innerText)*(0.0625);
              break;

            case "ounces":
              para2.innerText = para1.innerText;
              break;

            case "kilograms":
              para2.innerText = (para1.innerText)*(0.0283495231);
              break;

            case "grams":
              para2.innerText = (para1.innerText)*(28.349523125);
              break;
          }
          break;

        case "kilograms":
          switch(output.value)
          {
            case "tons":
              para2.innerText = (para1.innerText)*(0.001);
              break;

            case "uk tons":
              para2.innerText = (para1.innerText)*(0.0009842065);
              break;

            case "us tons":
              para2.innerText = (para1.innerText)*(0.0011023113);
              break;

            case "pounds":
              para2.innerText = (para1.innerText)*(2.2046226218);
              break;

            case "ounces":
              para2.innerText = (para1.innerText)*(35.2739619496);
              break;

            case "kilograms":
              para2.innerText = para1.innerText;
              break;

            case "grams":
              para2.innerText = (para1.innerText)*(1000);
              break;
          }
          break;

        case "grams":
          switch(output.value)
          {
            case "tons":
              para2.innerText = (para1.innerText)*(0.000001);
              break;

            case "uk tons":
              para2.innerText = (para1.innerText)*(9.84206528E-7);
              break;

            case "us tons":
              para2.innerText = (para1.innerText)*(0.0000011023);
              break;

            case "pounds":
              para2.innerText = (para1.innerText)*(0.0022046226);
              break;

            case "ounces":
              para2.innerText = (para1.innerText)*(0.0352739619);
              break;

            case "kilograms":
              para2.innerText = (para1.innerText)*(0.001);
              break;

            case "grams":
              para2.innerText = para1.innerText;
              break;
          }
          break;
      }
      break;

    case "firstdataselect":
      switch(input.value)
      {
        case "bits":
          switch(output.value)
          {
            case "bits":
              para2.innerText = para1.innerText;
              break;

            case "bytes":
              para2.innerText = (para1.innerText)*(0.125);
              break;

            case "kilobytes":
              para2.innerText = (para1.innerText)*(0.000125);
              break;

            case "kibibytes":
              para2.innerText = (para1.innerText)*(0.0001220703);
              break;

            case "megabytes":
              para2.innerText = (para1.innerText)*(1.25000000E-7);
              break;

            case "mebibytes":
              para2.innerText = (para1.innerText)*(1.19209290E-7);
              break;

            case "gigabytes":
              para2.innerText = (para1.innerText)*(1.25000000E-10);
              break;

            case "gibibytes":
              para2.innerText = (para1.innerText)*(1.16415322E-10);
              break;

            case "terabytes":
              para2.innerText = (para1.innerText)*(1.25000000E-13);
              break;

            case "tebibytes":
              para2.innerText = (para1.innerText)*(1.13686838E-13);
              break;
          }
          break;

        case "bytes":
          switch(output.value)
          {
            case "bits":
              para2.innerText = (para1.innerText)*(8);
              break;

            case "bytes":
              para2.innerText = para1.innerText;
              break;

            case "kilobytes":
              para2.innerText = (para1.innerText)*(0.001);
              break;

            case "kibibytes":
              para2.innerText = (para1.innerText)*(0.0009765625);
              break;

            case "megabytes":
              para2.innerText = (para1.innerText)*(0.000001);
              break;

            case "mebibytes":
              para2.innerText = (para1.innerText)*(9.53674316E-7);
              break;

            case "gigabytes":
              para2.innerText = (para1.innerText)*(1.00000000E-9);
              break;

            case "gibibytes":
              para2.innerText = (para1.innerText)*(9.31322575E-10);
              break;

            case "terabytes":
              para2.innerText = (para1.innerText)*(1.00000000E-12);
              break;

            case "tebibytes":
              para2.innerText = (para1.innerText)*(9.09494702E-13);
              break;
          }
          break;

        case "kilobytes":
          switch(output.value)
          {
            case "bits":
              para2.innerText = (para1.innerText)*(8000);
              break;

            case "bytes":
              para2.innerText = (para1.innerText)*(1000);
              break;

            case "kilobytes":
              para2.innerText = para1.innerText;
              break;

            case "kibibytes":
              para2.innerText = (para1.innerText)*(0.9765625);
              break;

            case "megabytes":
              para2.innerText = (para1.innerText)*(0.001);
              break;

            case "mebibytes":
              para2.innerText = (para1.innerText)*(0.0009536743);
              break;

            case "gigabytes":
              para2.innerText = (para1.innerText)*(0.000001);
              break;

            case "gibibytes":
              para2.innerText = (para1.innerText)*(9.31322575E-7);
              break;

            case "terabytes":
              para2.innerText = (para1.innerText)*(1.00000000E-9);
              break;

            case "tebibytes":
              para2.innerText = (para1.innerText)*(9.09494702E-10);
              break;
          }
          break;

        case "kibibytes":
          switch(output.value)
          {
            case "bits":
              para2.innerText = (para1.innerText)*(8192);
              break;

            case "bytes":
              para2.innerText = (para1.innerText)*(1024);
              break;

            case "kilobytes":
              para2.innerText = (para1.innerText)*(1.024);
              break;

            case "kibibytes":
              para2.innerText = para1.innerText;
              break;

            case "megabytes":
              para2.innerText = (para1.innerText)*(0.001024);
              break;

            case "mebibytes":
              para2.innerText = (para1.innerText)*(0.0009765625);
              break;

            case "gigabytes":
              para2.innerText = (para1.innerText)*(0.000001024);
              break;

            case "gibibytes":
              para2.innerText = (para1.innerText)*(9.53674316E-7);
              break;

            case "terabytes":
              para2.innerText = (para1.innerText)*(1.02400000E-9);
              break;

            case "tebibytes":
              para2.innerText = (para1.innerText)*(9.31322575E-10);
              break;
          }
          break;

        case "megabytes":
          switch(output.value)
          {
            case "bits":
              para2.innerText = (para1.innerText)*(8000000);
              break;

            case "bytes":
              para2.innerText = (para1.innerText)*(1000000);
              break;

            case "kilobytes":
              para2.innerText = (para1.innerText)*(1000);
              break;

            case "kibibytes":
              para2.innerText = (para1.innerText)*(976.5625);
              break;

            case "megabytes":
              para2.innerText = para1.innerText;
              break;

            case "mebibytes":
              para2.innerText = (para1.innerText)*(0.9536743164);
              break;

            case "gigabytes":
              para2.innerText = (para1.innerText)*(0.001);
              break;

            case "gibibytes":
              para2.innerText = (para1.innerText)*(0.0009313226);
              break;

            case "terabytes":
              para2.innerText = (para1.innerText)*(0.000001);
              break;

            case "tebibytes":
              para2.innerText = (para1.innerText)*(9.09494702E-7);
              break;
          }
          break;

        case "mebibytes":
          switch(output.value)
          {
            case "bits":
              para2.innerText = (para1.innerText)*(8388608);
              break;

            case "bytes":
              para2.innerText = (para1.innerText)*(1048576);
              break;

            case "kilobytes":
              para2.innerText = (para1.innerText)*(1048.576);
              break;

            case "kibibytes":
              para2.innerText = (para1.innerText)*(1024);
              break;

            case "megabytes":
              para2.innerText = (para1.innerText)*(1.048576);
              break;

            case "mebibytes":
              para2.innerText = para1.innerText;
              break;

            case "gigabytes":
              para2.innerText = (para1.innerText)*(0.001048576);
              break;

            case "gibibytes":
              para2.innerText = (para1.innerText)*(0.0009765625);
              break;

            case "terabytes":
              para2.innerText = (para1.innerText)*(0.0000010486);
              break;

            case "tebibytes":
              para2.innerText = (para1.innerText)*(9.53674316E-7);
              break;
          }
          break;

        case "gigabytes":
          switch(output.value)
          {
            case "bits":
              para2.innerText = (para1.innerText)*(8000000000);
              break;

            case "bytes":
              para2.innerText = (para1.innerText)*(1000000000);
              break;

            case "kilobytes":
              para2.innerText = (para1.innerText)*(1000000);
              break;

            case "kibibytes":
              para2.innerText = (para1.innerText)*(976562.5);
              break;

            case "megabytes":
              para2.innerText = (para1.innerText)*(1000);
              break;

            case "mebibytes":
              para2.innerText = (para1.innerText)*(953.6743164063);
              break;

            case "gigabytes":
              para2.innerText = para1.innerText;
              break;

            case "gibibytes":
              para2.innerText = (para1.innerText)*(0.9313225746);
              break;

            case "terabytes":
              para2.innerText = (para1.innerText)*(0.001);
              break;

            case "tebibytes":
              para2.innerText = (para1.innerText)*(0.0009094947);
              break;
          }
          break;

        case "gibibytes":
          switch(output.value)
          {
            case "bits":
              para2.innerText = (para1.innerText)*(8589934592);
              break;

            case "bytes":
              para2.innerText = (para1.innerText)*(1073741824);
              break;

            case "kilobytes":
              para2.innerText = (para1.innerText)*(1073741.824);
              break;

            case "kibibytes":
              para2.innerText = (para1.innerText)*(1048576);
              break;

            case "megabytes":
              para2.innerText = (para1.innerText)*(1073.741824);
              break;

            case "mebibytes":
              para2.innerText = (para1.innerText)*(1024);
              break;

            case "gigabytes":
              para2.innerText = (para1.innerText)*(1.073741824);
              break;

            case "gibibytes":
              para2.innerText = para1.innerText;
              break;

            case "terabytes":
              para2.innerText = (para1.innerText)*(0.0010737418);
              break;

            case "tebibytes":
              para2.innerText = (para1.innerText)*(0.0009765625);
              break;
          }
          break;

        case "terabytes":
          switch(output.value)
          {
            case "bits":
              para2.innerText = (para1.innerText)*(8000000000000);
              break;

            case "bytes":
              para2.innerText = (para1.innerText)*(1000000000000);
              break;

            case "kilobytes":
              para2.innerText = (para1.innerText)*(1000000000);
              break;

            case "kibibytes":
              para2.innerText = (para1.innerText)*(976562500);
              break;

            case "megabytes":
              para2.innerText = (para1.innerText)*(1000000);
              break;

            case "mebibytes":
              para2.innerText = (para1.innerText)*(953674.31640625);
              break;

            case "gigabytes":
              para2.innerText = (para1.innerText)*(1000);
              break;

            case "gibibytes":
              para2.innerText = (para1.innerText)*(931.3225746155);
              break;

            case "terabytes":
              para2.innerText = para1.innerText;
              break;

            case "tebibytes":
              para2.innerText = (para1.innerText)*(0.9094947018);
              break;
          }
          break;

        case "tebibytes":
          switch(output.value)
          {
            case "bits":
              para2.innerText = (para1.innerText)*(8796093022208);
              break;

            case "bytes":
              para2.innerText = (para1.innerText)*(1099511627776);
              break;

            case "kilobytes":
              para2.innerText = (para1.innerText)*(1099511627.776);
              break;

            case "kibibytes":
              para2.innerText = (para1.innerText)*(1073741824);
              break;

            case "megabytes":
              para2.innerText = (para1.innerText)*(1099511.627776);
              break;

            case "mebibytes":
              para2.innerText = (para1.innerText)*(1048576);
              break;

            case "gigabytes":
              para2.innerText = (para1.innerText)*(1099.511627776);
              break;

            case "gibibytes":
              para2.innerText = (para1.innerText)*(1024);
              break;

            case "terabytes":
              para2.innerText = (para1.innerText)*(1.0995116278);
              break;

            case "tebibytes":
              para2.innerText = para1.innerText;
              break;
          }
          break;
      }
      break;

    case "firstspeedselect":
      switch(input.value)
      {
        case "meters per second":
          switch(output.value)
          {
            case "meters per second":
              para2.innerText = para1.innerText;
              break;

            case "meters per hour":
              para2.innerText = (para1.innerText)*(3600);
              break;

            case "kilometers per second":
              para2.innerText = (para1.innerText)*(0.001);
              break;

            case "kilometers per hour":
              para2.innerText = (para1.innerText)*(3.6);
              break;

            case "inches per second":
              para2.innerText = (para1.innerText)*(39.3700787402);
              break;

            case "inches per hour":
              para2.innerText = (para1.innerText)*(141732.28346457);
              break;

            case "feet per second":
              para2.innerText = (para1.innerText)*(3.280839895);
              break;

            case "feet per hour":
              para2.innerText = (para1.innerText)*(11811.023622047);
              break;

            case "miles per second":
              para2.innerText = (para1.innerText)*(0.0006213712);
              break;

            case "miles per hour":
              para2.innerText = (para1.innerText)*(2.2369362921);
              break;

            case "knots":
              para2.innerText = (para1.innerText)*(1.9438444924);
              break;
          }
          break;

        case "meters per hour":
          switch(output.value)
          {
            case "meters per second":
              para2.innerText = (para1.innerText)*(0.0002777778);
              break;

            case "meters per hour":
              para2.innerText = para1.innerText;
              break;

            case "kilometers per second":
              para2.innerText = (para1.innerText)*(2.77777778E-7);
              break;

            case "kilometers per hour":
              para2.innerText = (para1.innerText)*(0.001);
              break;

            case "inches per second":
              para2.innerText = (para1.innerText)*(0.010936133);
              break;

            case "inches per hour":
              para2.innerText = (para1.innerText)*(39.3700787402);
              break;

            case "feet per second":
              para2.innerText = (para1.innerText)*(0.0009113444);
              break;

            case "feet per hour":
              para2.innerText = (para1.innerText)*(3.280839895);
              break;

            case "miles per second":
              para2.innerText = (para1.innerText)*(1.72603109E-7);
              break;

            case "miles per hour":
              para2.innerText = (para1.innerText)*(0.0006213712);
              break;

            case "knots":
              para2.innerText = (para1.innerText)*(0.0005399568);
              break;
          }
          break;

        case "kilometers per second":
          switch(output.value)
          {
            case "meters per second":
              para2.innerText = (para1.innerText)*(1000);
              break;

            case "meters per hour":
              para2.innerText = (para1.innerText)*(3600000);
              break;

            case "kilometers per second":
              para2.innerText = para1.innerText;
              break;

            case "kilometers per hour":
              para2.innerText = (para1.innerText)*(3600);
              break;

            case "inches per second":
              para2.innerText = (para1.innerText)*(39370.078740157);
              break;

            case "inches per hour":
              para2.innerText = (para1.innerText)*(141732283.46457);
              break;

            case "feet per second":
              para2.innerText = (para1.innerText)*(3280.8398950131);
              break;

            case "feet per hour":
              para2.innerText = (para1.innerText)*(11811023.622047);
              break;

            case "miles per second":
              para2.innerText = (para1.innerText)*(0.6213711922);
              break;

            case "miles per hour":
              para2.innerText = (para1.innerText)*(2236.9362920544);
              break;

            case "knots":
              para2.innerText = (para1.innerText)*(1943.8444924406);
              break;
          }
          break;

        case "kilometers per hour":
          switch(output.value)
          {
            case "meters per second":
              para2.innerText = (para1.innerText)*(0.2777777778);
              break;

            case "meters per hour":
              para2.innerText = (para1.innerText)*(1000);
              break;

            case "kilometers per second":
              para2.innerText = (para1.innerText)*(0.0002777778);
              break;

            case "kilometers per hour":
              para2.innerText = para1.innerText;
              break;

            case "inches per second":
              para2.innerText = (para1.innerText)*(10.9361329834);
              break;

            case "inches per hour":
              para2.innerText = (para1.innerText)*(39370.078740157);
              break;

            case "feet per second":
              para2.innerText = (para1.innerText)*(0.9113444153);
              break;

            case "feet per hour":
              para2.innerText = (para1.innerText)*(3280.8398950131);
              break;

            case "miles per second":
              para2.innerText = (para1.innerText)*(0.0001726031);
              break;

            case "miles per hour":
              para2.innerText = (para1.innerText)*(0.6213711922);
              break;

            case "knots":
              para2.innerText = (para1.innerText)*(0.5399568035);
              break;
          }
          break;

        case "inches per second":
          switch(output.value)
          {
            case "meters per second":
              para2.innerText = (para1.innerText)*(0.0254);
              break;

            case "meters per hour":
              para2.innerText = (para1.innerText)*(91.44);
              break;

            case "kilometers per second":
              para2.innerText = (para1.innerText)*(0.0000254);
              break;

            case "kilometers per hour":
              para2.innerText = (para1.innerText)*(0.09144);
              break;

            case "inches per second":
              para2.innerText = para1.innerText;
              break;

            case "inches per hour":
              para2.innerText = (para1.innerText)*(3600);
              break;

            case "feet per second":
              para2.innerText = (para1.innerText)*(0.0833333333);
              break;

            case "feet per hour":
              para2.innerText = (para1.innerText)*(300);
              break;

            case "miles per second":
              para2.innerText = (para1.innerText)*(0.0000157828);
              break;

            case "miles per hour":
              para2.innerText = (para1.innerText)*(0.0568181818);
              break;

            case "knots":
              para2.innerText = (para1.innerText)*(0.0493736501);
              break;
          }
          break;

        case "inches per hour":
          switch(output.value)
          {
            case "meters per second":
              para2.innerText = (para1.innerText)*(0.0000070556);
              break;

            case "meters per hour":
              para2.innerText = (para1.innerText)*(0.0254);
              break;

            case "kilometers per second":
              para2.innerText = (para1.innerText)*(7.05555556E-9);
              break;

            case "kilometers per hour":
              para2.innerText = (para1.innerText)*(0.0000254);
              break;

            case "inches per second":
              para2.innerText = (para1.innerText)*(0.0002777778);
              break;

            case "inches per hour":
              para2.innerText = para1.innerText;
              break;

            case "feet per second":
              para2.innerText = (para1.innerText)*(0.0000231481);
              break;

            case "feet per hour":
              para2.innerText = (para1.innerText)*(0.0833333333);
              break;

            case "miles per second":
              para2.innerText = (para1.innerText)*(4.38411897E-9);
              break;

            case "miles per hour":
              para2.innerText = (para1.innerText)*(0.0000157828);
              break;

            case "knots":
              para2.innerText = (para1.innerText)*(0.0000137149);
              break;
          }
          break;

        case "feet per second":
          switch(output.value)
          {
            case "meters per second":
              para2.innerText = (para1.innerText)*(0.3048);
              break;

            case "meters per hour":
              para2.innerText = (para1.innerText)*(1097.28);
              break;

            case "kilometers per second":
              para2.innerText = (para1.innerText)*(0.0003048);
              break;

            case "kilometers per hour":
              para2.innerText = (para1.innerText)*(1.09728);
              break;

            case "inches per second":
              para2.innerText = (para1.innerText)*(12);
              break;

            case "inches per hour":
              para2.innerText = (para1.innerText)*(43200);
              break;

            case "feet per second":
              para2.innerText = para1.innerText;
              break;

            case "feet per hour":
              para2.innerText = (para1.innerText)*(3600);
              break;

            case "miles per second":
              para2.innerText = (para1.innerText)*(0.0001893939);
              break;

            case "miles per hour":
              para2.innerText = (para1.innerText)*(0.6818181818);
              break;

            case "knots":
              para2.innerText = (para1.innerText)*(0.5924838013);
              break;
          }
          break;

        case "feet per hour":
          switch(output.value)
          {
            case "meters per second":
              para2.innerText = (para1.innerText)*(0.0000846667);
              break;

            case "meters per hour":
              para2.innerText = (para1.innerText)*(0.3048);
              break;

            case "kilometers per second":
              para2.innerText = (para1.innerText)*(8.46666667E-8);
              break;

            case "kilometers per hour":
              para2.innerText = (para1.innerText)*(0.0003048);
              break;

            case "inches per second":
              para2.innerText = (para1.innerText)*(0.0033333333);
              break;

            case "inches per hour":
              para2.innerText = (para1.innerText)*(12);
              break;

            case "feet per second":
              para2.innerText = (para1.innerText)*(0.0002777778);
              break;

            case "feet per hour":
              para2.innerText = para1.innerText;
              break;

            case "miles per second":
              para2.innerText = (para1.innerText)*(5.26094276E-8);
              break;

            case "miles per hour":
              para2.innerText = (para1.innerText)*(0.0001893939);
              break;

            case "knots":
              para2.innerText = (para1.innerText)*(0.0001645788);
              break;
          }
          break;

        case "miles per second":
          switch(output.value)
          {
            case "meters per second":
              para2.innerText = (para1.innerText)*(1609.344);
              break;

            case "meters per hour":
              para2.innerText = (para1.innerText)*(5793638.4);
              break;

            case "kilometers per second":
              para2.innerText = (para1.innerText)*(1.609344);
              break;

            case "kilometers per hour":
              para2.innerText = (para1.innerText)*(5793.6384);
              break;

            case "inches per second":
              para2.innerText = (para1.innerText)*(63360);
              break;

            case "inches per hour":
              para2.innerText = (para1.innerText)*(228096000);
              break;

            case "feet per second":
              para2.innerText = (para1.innerText)*(5280);
              break;

            case "feet per hour":
              para2.innerText = (para1.innerText)*(19008000);
              break;

            case "miles per second":
              para2.innerText = para1.innerText;
              break;

            case "miles per hour":
              para2.innerText = (para1.innerText)*(3600);
              break;

            case "knots":
              para2.innerText = (para1.innerText)*(3128.3144708423);
              break;
          }
          break;

        case "miles per hour":
          switch(output.value)
          {
            case "meters per second":
              para2.innerText = (para1.innerText)*(0.44704);
              break;

            case "meters per hour":
              para2.innerText = (para1.innerText)*(1609.344);
              break;

            case "kilometers per second":
              para2.innerText = (para1.innerText)*(0.00044704);
              break;

            case "kilometers per hour":
              para2.innerText = (para1.innerText)*(1.609344);
              break;

            case "inches per second":
              para2.innerText = (para1.innerText)*(17.6);
              break;

            case "inches per hour":
              para2.innerText = (para1.innerText)*(63360);
              break;

            case "feet per second":
              para2.innerText = (para1.innerText)*(1.4666666667);
              break;

            case "feet per hour":
              para2.innerText = (para1.innerText)*(5280);
              break;

            case "miles per second":
              para2.innerText = (para1.innerText)*(0.0002777778);
              break;

            case "miles per hour":
              para2.innerText = para1.innerText;
              break;

            case "knots":
              para2.innerText = (para1.innerText)*(0.8689762419);
              break;
          }
          break;

        case "knots":
          switch(output.value)
          {
            case "meters per second":
              para2.innerText = (para1.innerText)*(0.5144444444);
              break;

            case "meters per hour":
              para2.innerText = (para1.innerText)*(1852);
              break;

            case "kilometers per second":
              para2.innerText = (para1.innerText)*(0.0005144444);
              break;

            case "kilometers per hour":
              para2.innerText = (para1.innerText)*(1.852);
              break;

            case "inches per second":
              para2.innerText = (para1.innerText)*(20.2537182852);
              break;

            case "inches per hour":
              para2.innerText = (para1.innerText)*(72913.385826772);
              break;

            case "feet per second":
              para2.innerText = (para1.innerText)*(1.6878098571);
              break;

            case "feet per hour":
              para2.innerText = (para1.innerText)*(6076.1154855643);
              break;

            case "miles per second":
              para2.innerText = (para1.innerText)*(0.000319661);
              break;

            case "miles per hour":
              para2.innerText = (para1.innerText)*(1.150779448);
              break;

            case "knots":
              para2.innerText = para1.innerText;
              break;
          }
          break;
      }
      break;

    case "firsttimeselect":
      switch(input.value)
      {
        case "milliseconds":
          switch(output.value)
          {
            case "milliseconds":
              para2.innerText = para1.innerText;
              break;

            case "seconds":
              para2.innerText = (para1.innerText)*(0.001);
              break;

            case "minutes":
              para2.innerText = (para1.innerText)*(0.0000166667);
              break;

            case "hours":
              para2.innerText = (para1.innerText)*(2.77777778E-7);
              break;

            case "days":
              para2.innerText = (para1.innerText)*(1.15740741E-8);
              break;

            case "weeks":
              para2.innerText = (para1.innerText)*(1.65343915E-9);
              break;
          }
          break;

        case "seconds":
          switch(output.value)
          {
            case "milliseconds":
              para2.innerText = (para1.innerText)*(1000);
              break;

            case "seconds":
              para2.innerText = para1.innerText;
              break;

            case "minutes":
              para2.innerText = (para1.innerText)*(0.0166666667);
              break;

            case "hours":
              para2.innerText = (para1.innerText)*(0.0002777778);
              break;

            case "days":
              para2.innerText = (para1.innerText)*(0.0000115741);
              break;

            case "weeks":
              para2.innerText = (para1.innerText)*(0.0000016534);
              break;
          }
          break;

        case "minutes":
          switch(output.value)
          {
            case "milliseconds":
              para2.innerText = (para1.innerText)*(60000);
              break;

            case "seconds":
              para2.innerText = (para1.innerText)*(60);
              break;

            case "minutes":
              para2.innerText = para1.innerText;
              break;

            case "hours":
              para2.innerText = (para1.innerText)*(0.0166666667);
              break;

            case "days":
              para2.innerText = (para1.innerText)*(0.0006944444);
              break;

            case "weeks":
              para2.innerText = (para1.innerText)*(0.0000992063);
              break;
          }
          break;

        case "hours":
          switch(output.value)
          {
            case "milliseconds":
              para2.innerText = (para1.innerText)*(3600000);
              break;

            case "seconds":
              para2.innerText = (para1.innerText)*(3600);
              break;

            case "minutes":
              para2.innerText = (para1.innerText)*(60);
              break;

            case "hours":
              para2.innerText = para1.innerText;
              break;

            case "days":
              para2.innerText = (para1.innerText)*(0.0416666667);
              break;

            case "weeks":
              para2.innerText = (para1.innerText)*(0.005952381);
              break;
          }
          break;

        case "days":
          switch(output.value)
          {
            case "milliseconds":
              para2.innerText = (para1.innerText)*(86400000);
              break;

            case "seconds":
              para2.innerText = (para1.innerText)*(86400);
              break;

            case "minutes":
              para2.innerText = (para1.innerText)*(1440);
              break;

            case "hours":
              para2.innerText = (para1.innerText)*(24);
              break;

            case "days":
              para2.innerText = para1.innerText;
              break;

            case "weeks":
              para2.innerText = (para1.innerText)*(0.1428571429);
              break;
          }
          break;

        case "weeks":
          switch(output.value)
          {
            case "milliseconds":
              para2.innerText = (para1.innerText)*(604800000);
              break;

            case "seconds":
              para2.innerText = (para1.innerText)*(604800);
              break;

            case "minutes":
              para2.innerText = (para1.innerText)*(10080);
              break;

            case "hours":
              para2.innerText = (para1.innerText)*(168);
              break;

            case "days":
              para2.innerText = (para1.innerText)*(7);
              break;

            case "weeks":
              para2.innerText = para1.innerText;
              break;
          }
          break;
      }
      break;
  }
}

function setchoosenvar(obj) {
  if(obj.id == "hexresult")
  {
    choosenresult = 1;
    finalresult.innerText = hexresult.children[1].innerText;
  }
  else if(obj.id == "decimalresult")
  {
    choosenresult = 2;
    finalresult.innerText = decimalresult.children[1].innerText;
  }
  else if(obj.id == "octalresult")
  {
    choosenresult = 3;
    finalresult.innerText = octalresult.children[1].innerText;
  }
  else if(obj.id == "binaryresult")
  {
    choosenresult = 4;
    finalresult.innerText = binaryresult.children[1].innerText;
  }
  else
  {
    choosenresult = 2;
  }
  console.log(obj.id, choosenresult);
}

/* Set the css style of left border of id decimalresult div in programmer.html webpage when the webpage loads */
function setDecimalDefault() {
  decimalresult.classList.add("leftborderstyle");
  choosenresult = 2;
  lastDivBorderStyle = decimalresult;

  programmerbutton.forEach((button) => {
    //console.log(button.innerHTML);
    switch(button.innerHTML)
    {
      case 'A':
      case 'B':
      case 'C':
      case 'D':
      case 'E':
      case 'F':
        button.disabled = true;
        break;

      default:
        button.disabled = false;
    }
  });
}
