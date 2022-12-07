var login_attempts=3;
function check_form()
{
 var name=document.getElementById("name").value;
 var pass=document.getElementById("pass").value;
 if(name=="ADMIN" && pass=="SYSTEM")
 {
  
  document.location.href="main.html";
  document.getElementById("name").value="";
  document.getElementById("pass").value="";
 }
 else
 {
  if(login_attempts==0)
  {
   alert("No Login Attempts Available");
  }
  else
  {
   login_attempts=login_attempts-1;
   alert("Login Failed Now Only "+login_attempts+" Login Attempts Available");
   if(login_attempts==0)
   {
    //TImer Start
    var timeLeft = 30;
    var elem = document.getElementById('Timer');

    var timerId = setInterval(countdown, 1000);

function countdown() {
  if (timeLeft == -1) {
    clearTimeout(timerId);
    login_attempts=3;
    elem.innerHTML = 'Login Now';
    document.getElementById("name").disabled=false;
    document.getElementById("pass").disabled=false;
    document.getElementById("form1").disabled=false;
  } else {
    elem.innerHTML = 'Please wait '+ timeLeft + ' seconds';
    document.getElementById("name").disabled=true;
    document.getElementById("pass").disabled=true;
    document.getElementById("form1").disabled=true;
    timeLeft--;
  }
}
   }
  }
 }
 
 return false;
}	