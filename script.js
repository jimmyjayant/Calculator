var res = document.getElementById("result");
var len = res.innerHTML.length;
var char = res.innerHTML.charAt(len-1);

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