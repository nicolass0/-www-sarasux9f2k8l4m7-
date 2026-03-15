let fakeDB = {};

function accetta(){
document.getElementById("warning").style.display="none";
document.getElementById("auth").classList.remove("hidden");
}

function esci(){
document.body.innerHTML="<h1>ACCESSO NEGATO</h1>";
}

function register(){
let name=document.getElementById("regName").value;
let pass=document.getElementById("regPass").value;

fakeDB[name]=pass;

alert("Registrazione completata");
}

function login(){
let name=document.getElementById("logName").value;
let pass=document.getElementById("logPass").value;

if(fakeDB[name]===pass){
startHack(name);
}else{
alert("Credenziali errate");
}
}

function startHack(name){

document.getElementById("auth").style.display="none";
document.getElementById("hacker").classList.remove("hidden");

let bar=document.getElementById("bar");
let status=document.getElementById("status");

let progress=0;

let interval=setInterval(()=>{

progress++;

bar.style.width=progress+"%";

status.innerText="Tracciamento soggetto: "+name+" "+progress+"%";

if(progress>=100){

clearInterval(interval);

document.getElementById("hacker").style.display="none";
document.getElementById("final").classList.remove("hidden");

setTimeout(()=>{
location.reload();
},4000);

}

},80);

}
