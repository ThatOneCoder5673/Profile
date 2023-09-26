var skills = ["Multi Tasking","Problem Solving","Customer Service","Team Player"];
var i = 0;
function MultiTaskSwitch() {
var x = document.getElementById("multitask"); 
    x.innerHTML = skills[i++];
    if(i == skills.length) {i = 0;};
    if(skills[i] == skills[3]) {x.style.fontSize = "19px"; x.style.top = "5px";};
}
var skills1 = ["Excel","Word","Power BI","Power Point"];
var i = 0;
function MultiTaskSwitch1() {
var x = document.getElementById("multitask1"); 
    x.innerHTML = skills1[i++];
    if(i == skills1.length) {i = 0;};
    if(skills1[i] == skills1[1] || skills1[i] == skills1[2] || skills1[i] == skills1[3])
     {x.classList.replace("skillsset","bottomskill")}
    else {x.className = "skillsset"};
}

var skills2 = ["Critical Thinking","Leader<wbr>ship","Creativity","Time Mgmt"];
var i = 0;
function MultiTaskSwitch2() {
var x = document.getElementById("multitask2"); 
    x.innerHTML = skills2[i++];
    if(i == skills2.length) {i = 0;};
    if(skills1[i] == skills1[3])
     {x.classList.replace("skillsset","bottomskill")}
    else {x.className = "skillsset"};
}

function ShowLogin() {
    var x = document.getElementById("LoginModalId");
    if (x.style.display === "none") {x.style.display = "block";}
    else {x.style.display = "none"};
}
function CloseLogin() {
    var x = document.getElementById("LoginModalId");
    if (x.style.display === "none") {x.style.display = "block";}
    else {x.style.display = "none"};
}
/*The code below is for the Login
  The password is: password
  The uesrname is: Admin */

function ValidateLogIn() {
    var NotValid = true;
    var username = document.forms["LoginForm"]["UsernameName"].value;
    var password = document.forms["LoginForm"]["PasswordName"].value;

    if (username == "Admin" && password == "password") {
        var x = document.getElementById("mycontact");
        x.style.display = "flex";
        document.getElementById("errormsg").style.display = "none";
        notValid = false; }
        else {
            document.getElementById("errormsg").style.display = "block";
                                }
    
}