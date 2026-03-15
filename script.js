(function(){

/* BLOCCO BASE DEVTOOLS */
document.addEventListener("contextmenu",e=>e.preventDefault());

document.onkeydown=function(e){
if(e.key==="F12")return false;
if(e.ctrlKey&&e.shiftKey&&e.key==="I")return false;
if(e.ctrlKey&&e.shiftKey&&e.key==="J")return false;
if(e.ctrlKey&&e.key==="U")return false;
};

/* IP CASUALE */
function r(){return Math.floor(Math.random()*255)}
function fakeIP(){return r()+"."+r()+"."+r()+"."+r()}

/* CONSOLE LOG */
function log(){
let c=document.getElementById("console");
let d=new Date().toLocaleTimeString();
c.innerHTML+="["+d+"] CONNECT "+fakeIP()+"<br>";
c.scrollTop=c.scrollHeight;
}
setInterval(log,1200);

/* TERMINALI */
function terminal(){
let box=document.createElement("div");
box.className="terminal";

box.style.left=Math.random()*800+"px";
box.style.top=Math.random()*300+"px";

let titles=[
"PowerShell",
"Scanner",
"Firewall",
"Database",
"Security",
"Trace",
"Server"
];

let text=[
"Accesso server...",
"Verifica rete...",
"Bypass firewall...",
"Download database...",
"Encrypt files...",
"Ping network...",
"Monitor logs..."
];

box.innerHTML="<div class='title'>"+titles[Math.floor(Math.random()*titles.length)]+"</div><div class='txt'></div>";

document.getElementById("terminals").appendChild(box);

let t=box.querySelector(".txt");
let msg=text[Math.floor(Math.random()*text.length)];
let i=0;

let sound=document.getElementById("typeSound");

let w=setInterval(function(){
t.innerHTML+=msg[i];
sound.currentTime=0;
sound.play();
i++;
if(i>=msg.length)clearInterval(w);
},30);
}

/* CREA 20 TERMINALI */
for(let i=0;i<20;i++){
setTimeout(terminal,i*700);
}

/* BARRA */
let bar=document.getElementById("bar");
let p=0;
setInterval(function(){
p++;
bar.style.width=p+"%";
if(p>=100)p=0;
},80);

/* MATRIX */
var canvas=document.getElementById("matrix");
var ctx=canvas.getContext("2d");

canvas.height=window.innerHeight;
canvas.width=window.innerWidth;

var letters="01ABCDEFGHIJKLMNOPQRSTUVWXYZ";
letters=letters.split("");

var fontSize=14;
var columns=canvas.width/fontSize;

var drops=[];
for(var x=0;x<columns;x++)drops[x]=1;

function draw(){

ctx.fillStyle="rgba(0,0,0,0.05)";
ctx.fillRect(0,0,canvas.width,canvas.height);

ctx.fillStyle="#0f0";
ctx.font=fontSize+"px monospace";

for(var i=0;i<drops.length;i++){

var text=letters[Math.floor(Math.random()*letters.length)];

ctx.fillText(text,i*fontSize,drops[i]*fontSize);

if(drops[i]*fontSize>canvas.height && Math.random()>0.975)
drops[i]=0;

drops[i]++;

}

}

setInterval(draw,33);

})();
