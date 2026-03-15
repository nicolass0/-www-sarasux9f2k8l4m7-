let database={};

// FUNZIONI PRINCIPALI
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
if(name==="" || pass===""){
alert("Compila tutti i campi");
return;
}
database[name]=pass;
alert("Registrazione completata!");
vaiLogin();
}

function login(){
let name=document.getElementById("logName").value;
let pass=document.getElementById("logPass").value;

if(database[name]===pass){
startHack(name);
}else{
alert("Password errata o utente non registrato");
}
}

// CREAZIONE TERMINALI
function creaTerminale(x,y,titolo,testo){
let t=document.createElement("div");
t.className="terminal";
t.style.left=x+"px";
t.style.top=y+"px";
t.innerHTML=`
<div class="titlebar">${titolo}</div>
<div class="text"></div>
`;
document.getElementById("terminals").appendChild(t);
let textDiv=t.querySelector(".text");
let i=0;
let writer=setInterval(()=>{
textDiv.innerHTML+=testo[i];
i++;
if(i>=testo.length) clearInterval(writer);
},20);
}

// FUNZIONE HACK SIMULAZIONE
function startHack(nome){
document.getElementById("login").style.display="none";
document.getElementById("hacker").classList.remove("hidden");

let bar=document.getElementById("bar");
let status=document.getElementById("status");
let progress=0;

// CREA TERMINALI STILE POWERSHELL
setTimeout(()=>creaTerminale(50,50,"PowerShell","Accesso server...\nVerifica rete...\nOK"),100);
setTimeout(()=>creaTerminale(320,60,"Scanner","Analisi IP...\nConnessione trovata"),900);
setTimeout(()=>creaTerminale(150,200,"Database","Accesso database...\nDownload file..."),1700);
setTimeout(()=>creaTerminale(420,220,"Security","Bypass firewall...\nAccesso riuscito"),2500);

// BARRA DI CARICAMENTO
let timer=setInterval(()=>{
progress++;
bar.style.width=progress+"%";
status.innerText="Tracciamento soggetto: "+nome+" "+progress+"%";
if(progress>=100){
clearInterval(timer);
document.getElementById("hacker").style.display="none";
document.getElementById("final").classList.remove("hidden");
setTimeout(()=>{location.reload();},5000);
}
},70);
