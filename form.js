
function verify(){
var fname= document.employreg_form.fname; 
var lname = document.employreg_form.lname; 
var Gender = document.employreg_form.Gender; 
var emailid = document.employreg_form.emailid; 
var username = document.employreg_form.username; 
var mobile = document.employreg_form.mobile; 
var Password = document.employreg_form.Password; 
var cPassword = document.employreg_form.cPassword; 
var Age = document.employreg_form.Age; 
var JObRole = document.employreg_form.JObRole; 


if (fname.value.length <= 0) {    
    alert(" Enter your firstName!");    
    fname.focus();    
    return false;    
}  
if (lname.value.length <= 0) {    
    alert(" Enter your LastName! ");    
    lname.focus();    
    return false;    
}      
if (emailid.value.length <= 0) {    
    alert(" Enter your emailid !");    
   emailid.focus();    
    return false;    
}      
if (username.value.length <= 0) {    
    alert(" enter your username !");    
    username.focus();    
    return false;    
}      
if (mobile.value.length <= 0) {    
    alert(" Enter mobile number !");    
    mobile.focus();    
    return false;    
}   
if (Password.value.length <= 0) {    
    alert("input your Password !");    
   Password.focus();    
    return false;    
}     
if (cPassword.value.length <= 0) {    
    alert("Please confirm your Password !");    
   cPassword.focus();    
    return false;    
}     
return false; 
}   