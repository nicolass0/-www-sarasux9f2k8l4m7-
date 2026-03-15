let database={};

// UTILI
function randomIP(){
return Math.floor(Math.random()*255)+"."+Math.floor(Math.random()*255)+"."+Math.floor(Math.random()*255)+"."+Math.floor(Math.random()*255);
}

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
if(name===""||pass===""){alert("Compila tutti i campi"); return;}
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

// CREA TERMINALE
function creaTerminale(x,y,titolo,testo){
let t=document.createElement("div");
t.className="terminal";
t.style.left=x+"px";
t.style.top=y+"px";
t.innerHTML=`<div class="titlebar">${titolo}</div><div class="text"></div>`;
document.getElementById("terminals").appendChild(t);
let textDiv=t.querySelector(".text");
let i=0;
let typeSound=document.getElementById("typeSound");
let writer=setInterval(()=>{
textDiv.innerHTML+=testo[i];
typeSound.currentTime=0; typeSound.play();
i++;
if(i>=testo.length) clearInterval(writer);
},20);
}

// HACK SIMULAZIONE
function startHack(nome){
document.getElementById("login").style.display="none";
document.getElementById("hacker").classList.remove("hidden");

// MATRIX CANVAS
matrixEffect();

// TERMINALI CASUALI
let terminals=[
["PowerShell","Accesso server...\nVerifica rete...\nOK"],
["Scanner","Analisi IP: "+randomIP()+"\nConnessione trovata"],
["Database","Accesso database...\nDownload file..."],
["Security","Bypass firewall...\nAccesso riuscito"],
["Monitor","Controllo rete...\nPacchetti intercettati"],
["Logs","Analisi logs...\nNessun errore"],
["Crypto","Encrypt file...\nOK"],
["Firewall","Test firewall...\nOK"],
["Network","Ping test...\nOK"],
["Backup","Backup automatico...\nCompletato"],
["Trace","Tracciamento soggetto "+nome+"\nIn corso..."],
["Terminal","Avvio script...\nOK"],
["Server","Stato server: Online"],
["Alert","Allarmi: Nessuno rilevato"],
["Sim","Simulazione completa"]
];

terminals.forEach((t,i)=>{
setTimeout(()=>creaTerminale(Math.random()*600,Math.random()*350,t[0],t[1]),i*800);
});

// BARRA DI CARICAMENTO
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
setTimeout(()=>{location.reload();},7000);
}
},70);
}

// MATRIX EFFECT
function matrixEffect(){
let canvas=document.createElement("canvas");
document.getElementById("matrix").appendChild(canvas);
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
let ctx=canvas.getContext("2d");
let letters="01";
letters=letters.split("");
let fontSize=16;
let columns=canvas.width/fontSize;
let drops=[];
for(let x=0;x<columns;x++) drops[x]=Math.random()*canvas.height;

function draw(){
ctx.fillStyle="rgba(0,0,0,0.05)";
ctx.fillRect(0,0,canvas.width,canvas.height);
ctx.fillStyle="#0F0";
ctx.font=fontSize+"px monospace";
for(let i=0;i<drops.length;i++){
let text=letters[Math.floor(Math.random()*letters.length)];
ctx.fillText(text,i*fontSize,drops[i]*fontSize);
drops[i]++;
if(drops[i]*fontSize>canvas.height && Math.random()>0.975) drops[i]=0;
}
requestAnimationFrame(draw);
}
draw();
}
