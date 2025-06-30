
// registration fields getting all elem; 

const usernameinput=document.getElementById("name");
const usermailinput=document.getElementById("mail");
const userpasswordinput=document.getElementById("password");  


// span error messages 
let errorname=document.getElementById("nameerror");
let errormail=document.getElementById("mailerror");
let errorpassword=document.getElementById("passworderror");

// password+eye field+btns
let eyebtn=document.getElementById("toggle-eye");  
let passwordfield=document.getElementById("password"); 
let btn=document.getElementById("btn");


// container-switching 
const registeredcontainer=document.querySelector(".container");
const logincontainer=document.querySelector(".containertwo");
const login=document.getElementById("entertologin"); 
const signup=document.getElementById("entertosignup"); 


//  container two elem;
let signupbtn = document.getElementById('signupbtn'); 
let loginerrorname=document.getElementById('loginerror');  
let loginpassworderror=document.getElementById('loginpasssworderror');  

let loginname=document.getElementById('loginname');
let loginpassword=document.getElementById('loginpassword');


// form validations 

function mailvalidation(mail){
  const combination=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  return combination.test(mail);
} 

// registration btn 

btn.addEventListener('click',(e)=>{  
  e.preventDefault();
const username=usernameinput.value.trim();
const usermail=usermailinput.value.trim();
const userpassword=userpasswordinput.value.trim();

// name validation
  if (username===""){
    errorname.innerText="please enter your name dude !"; 
    errorname.style.color="red";
  } else{
    errorname.innerText="";
  }
// mail validation
  if (usermail===""){
    errormail.innerText="please enter your E-mail"; 
    errormail.style.color="red"
  }else if(!mailvalidation(usermail)){
    errormail.innerText="invalid mail please try again"; 
    errormail.style.color="red"
  }else{
    errormail.innerText="";
  } 
// password validation
  if(userpassword===""){
    errorpassword.innerText="please enter your the password"; 
    errorpassword.style.color="red";
  }else if(userpassword.length <=6){
    errorpassword.innerText="must be grater then 6 character"
    errorpassword.style.color="red";
  } else{
    errorpassword.innerText="";
  } 

// all validation to store and jump
if (
  username!=="" && 
  usermail!=="" && 
  mailvalidation(usermail) && 
  userpassword!=="" && 
  userpassword.length > 6
) {
user={
  name:username,
  mail:usermail,
  pass:userpassword
} 

localStorage.setItem("userInfo",JSON.stringify(user)); 

alert("successful"); 

usernameinput.value = "";
usermailinput.value = "";
userpasswordinput.value = ""; 

}
});  

// ending validations ----


// login form validations ---

signupbtn.addEventListener('click',()=>{
 let loginnamefield=loginname.value.trim(); 
 let loginpasswordfield=loginpassword.value.trim();  
 let userdata=JSON.parse(localStorage.getItem('userInfo'));


 // user font or not 
 if (!userdata){
  alert("no user found please register")
 }
// user check 
  if(userdata.name===loginnamefield && userdata.pass===loginpasswordfield){
    alert("correct"); 
    //clear inputs
    loginname.value = "";
    loginpassword.value = ""; 

    //redirecting 
    window.location.href="maindash.html";

  } else{
  if(userdata.pass!==loginpasswordfield){
    loginpassworderror.innerText="invalid password";
    loginpassworderror.style.color="red";
  } 
  if(userdata.name !== loginnamefield){
    loginerrorname.innerText="invalid name"; 
    loginerrorname.style.color="red";
  }  
}
}); 

// errors removing on login+signup

usernameinput.addEventListener("input", () => {
    errorname.innerText="";
}); 

 usermailinput.addEventListener('input',()=>{
    errormail.innerText="";
});
 userpasswordinput.addEventListener('input',()=>{
    errorpassword.innerText="";
}); 

loginname.addEventListener('input',()=>{
  loginerrorname.innerText="";
});

loginpassword.addEventListener('input',()=>{
  loginpassworderror.innerText="";
});


// eye btns for viewings toggle

eyebtn.addEventListener('click',()=>{
  if(passwordfield.type==="password"){
    passwordfield.type='text'; 
    eyebtn.querySelector("i").classList.replace("fa-eye","fa-eye-slash");
  } else {
    passwordfield.type='password' 
    eyebtn.querySelector("i").classList.replace("fa-eye-slash","fa-eye");
  }
});

// eye two 
let eyebtntwo=document.getElementById("logintoggleeye");
let passwordfieldtwo=document.getElementById("loginpassword");
eyebtntwo.addEventListener('click',()=>{
  if(passwordfieldtwo.type==="password"){
    passwordfieldtwo.type='text'; 
    eyebtntwo.querySelector("i").classList.replace("fa-eye","fa-eye-slash");
  }else{
    passwordfieldtwo.type='password';
    eyebtntwo.querySelector("i").classList.replace("fa-eye-slash","fa-eye");
  }
});

// container switching
login.addEventListener('click',(e)=>{  
  e.preventDefault();
  registeredcontainer.classList.replace('show','hide'); 
  logincontainer.classList.replace('hide','show');
}); 
signup.addEventListener('click',(e)=>{ 
  e.preventDefault();
  registeredcontainer.classList.replace('hide','show');
  logincontainer.classList.replace('show','hide');
}); 


