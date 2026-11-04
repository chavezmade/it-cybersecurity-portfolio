'use strict';
const form=document.getElementById('terminalForm');
const input=document.getElementById('command');
const output=document.getElementById('output');
const year=document.getElementById('year');
year.textContent=new Date().getFullYear();
const commands={
 help:'Available commands: help, about, skills, projects, whoami, pwd, ls, date, clear\nHint: A curious admin might try a hidden command...',
 about:'Valentino Chavez | IT & Cybersecurity student at Central New Mexico Community College.\nInterested in IT support, networking, Linux, and cybersecurity.',
 skills:'Linux administration | Networking | Windows troubleshooting | Computer hardware | Docker | Technical support',
 projects:'1. Network Configuration & Connectivity Troubleshooting\n2. Linux Administration Labs\n3. Chavez Made — Digital & Maker Workflow',
 whoami:'valentino — student, maker, problem solver, aspiring IT professional',
 pwd:'/home/visitor/portfolio',
 ls:'about.txt  skills.txt  projects/  secret.txt',
 date:()=>new Date().toLocaleString(),
 'cat secret.txt':'🎉 You found the hidden command!\nCreative twist: this portfolio includes a simulated Linux command line.\nIn cybersecurity, curiosity and careful exploration can reveal unexpected details.\nBonus: Try `sudo hire-me`.',
 'sudo hire-me':'Permission granted: curiosity + persistence detected.\nThanks for exploring! This is a simulation, but my interest in IT is real.'
};
function printLine(message,cls=''){const line=document.createElement('div');line.className=cls;line.textContent=message;output.appendChild(line);output.scrollTop=output.scrollHeight;}
form.addEventListener('submit',event=>{event.preventDefault();const raw=input.value.trim();if(!raw)return;printLine('visitor@portfolio:~$ '+raw,'outcmd');const cmd=raw.toLowerCase().replace(/\s+/g,' ');if(cmd==='clear'){output.textContent='';}else if(Object.prototype.hasOwnProperty.call(commands,cmd)){const result=commands[cmd];printLine(typeof result==='function'?result():result,'outsuccess');}else{printLine('Command not found: '+raw+'. Type help for available commands.','outerror');}input.value='';input.focus();});
document.getElementById('clearBtn').addEventListener('click',()=>{output.textContent='';input.focus();});
