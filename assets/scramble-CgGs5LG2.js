import{b as m,a as f,r as g,s as R}from"./animationSetup-DnxAb-5H.js";import"./index-B4VjBxx5.js";const y=(s,o)=>{const e=o/3;return s.map(()=>m(e,o-100))},D=()=>{const s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),o=s.length,e=m(0,o);return s[e]},S=async(s,o)=>{const{options:e,elements:r}=f(s,o),c=e.scrambleDuration;return await new Promise(p=>{r.forEach(async({currentNode:a,text:i})=>{let n=i.split("");const L=y(n,c),l=Date.now();for(g(a,e.parentElement,t=>{t.classList.add("finished-typing")});Date.now()-l<c;){const t=m(0,n.length),h=L[t],T=n[t]===" ",d=()=>Date.now()-l;if(d()>=h||T)if(!(n[t]===i[t]))n[t]=i[t];else continue;else n[t]=D();const u=n.join("");a.innerHTML=u;const w=u===i,b=e.scrambleSlowdown?Math.round(d()/100):1;if(await R(b),w){p();break}}a.innerHTML=i})}),e.dispatch("done"),{update(){},destroy(){}}};export{S as default};
