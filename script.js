let database={};

function entra(){
document.getElementById("warning").style.display="none";
document.getElementById("register").classList.remove("hidden");
}

function esci(){
document.body.innerHTML="<h1>ACCESSO NEGATO</h1>";
}

function vaiLogin(){
document.getElementById("register").style.display="none";
document.getElementById("login").classList.remove("hidden");
}

function register(){

let name=document.getElementById("regName").value;
let pass=document.getElementById("regPass").value;

database[name]=pass;

alert("Registrazione completata");

vaiLogin();
}

function login(){

let name=document.getElementById("logName").value;
let pass=document.getElementById("logPass").value;

if(database[name]===pass){

startHack(name);

}else{

alert("Password errata");

}

}

function startHack(nome){

document.getElementById("login").style.display="none";
document.getElementById("hacker").classList.remove("hidden");

let bar=document.getElementById("bar");
let status=document.getElementById("status");

let progress=0;

let timer=setInterval(()=>{

progress++;

bar.style.width=progress+"%";

status.innerText="Tracciamento soggetto: "+nome+" "+progress+"%";

if(progress>=100){

clearInterval(timer);

document.getElementById("hacker").style.display="none";
document.getElementById("final").classList.remove("hidden");

setTimeout(()=>{
location.reload();
},5000);

}

},70);

}
