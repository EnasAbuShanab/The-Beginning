function loginP(){
 var UserName = document.getElementById("username").value;
 var password= document.getElementById("exampleInputPassword1").value;

  alert ( UserName + password);

 if ( UserName =="1234" && password =="1234" )
    {
    window.location.assign("dashboard1.html");
    }
   else {
    alert ("username or password error");
   }

}

function logout(){
  alert("You're gonna log out");
}

function msg(){
            alert('You can not edit by your self ');
          }