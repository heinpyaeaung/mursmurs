import{d as f,r as m,u as _,a as x,w as U,b as t,o as d,c as u,e,t as h,n as k,f as y,s as C,g as b,h as $,i as v,j as L,k as N,l as j,m as R,p as S,v as O,q as M,x as z,F as B,y as I,z as V}from"./index-fd9f2e82.js";const D={key:0,class:"border-2 shadow-md border-y-secondary p-2 flex items-center justify-between"},K={class:"md:flex md:space-x-5 md:items-center"},q=e("h1",{class:"md:hidden z-50 text-secondary text-4xl drop-shadow-xl font-semibold"},"MurMurs",-1),E=["src"],F={class:"hidden md:block"},A={class:"text-xl font-semibold"},T=e("div",{class:"w-8 h-1 bg-secondary rounded-sm"},null,-1),G=e("div",{class:"w-8 h-1 bg-secondary rounded-sm"},null,-1),H=e("div",{class:"w-8 h-1 bg-secondary rounded-sm"},null,-1),J=[T,G,H],P={class:"w-full min-h-screen flex flex-col justify-between items-center py-5"},Q={id:"profile-container",class:"space-y-6 flex flex-col items-center"},W=["src"],X={class:"text-center"},Y={class:"font-semibold text-xl"},Z={class:"mt-2"},ee=f({__name:"navbar",setup(p){const o=m(!0),r=b();let s=m();s.value=_.getUserInfos(),x.onAuthStateChanged(a=>{s.value=a}),U(s,()=>{s.value||r.push({name:"home"})});const l=async()=>{try{await C(x)}catch(a){console.log(a)}};return(a,n)=>t(s)?(d(),u("nav",D,[e("div",K,[q,e("img",{src:t(s).photoURL,alt:"profile-pic",class:"hidden md:block h-14 w-14 rounded-full border-2 border-secondary"},null,8,E),e("div",F,[e("h1",A,h(t(s).displayName),1),e("span",null,"Logged in as "+h(t(s).email),1)])]),e("div",{class:"md:hidden space-y-1 cursor-pointer active:ring-2 ring-secondary ring-offset-2 rounded-sm",onClick:n[0]||(n[0]=c=>o.value=!o.value)},J),e("div",{class:k([[{"-translate-x-full":o.value}],"z-30 md:hidden absolute drop-shadow-lg delay-100 ease-out duration-100 left-0 bottom-0 min-h-full w-3/4 border-r-2 border-secondary bg-main"])},[e("section",P,[e("div",Q,[e("img",{class:"h-32 w-32 rounded-full border-4 border-secondary bg-highlight",src:t(s).photoURL,alt:"profile-pic"},null,8,W),e("div",X,[e("h1",Y,h(t(s).displayName),1),e("p",Z,"Logged in as "+h(t(s).email),1)])]),e("div",null,[e("button",{onClick:l,class:"cursor-pointer drop-shadow-xl px-8 py-2 rounded-xl ring-2 ring-offset-1 ring-secondary active:bg-secondary active:text-main"},"Log Out")])])],2),e("div",{class:"hidden md:block"},[e("button",{onClick:l,class:"cursor-pointer drop-shadow-xl px-8 py-2 rounded-xl ring-2 ring-offset-1 ring-secondary active:bg-secondary active:text-main"},"Log Out")])])):y("",!0)}}),se={key:0,class:"group w-full flex items-center justify-between border-b-2 hover:border-l-8 border-secondary py-2 px-3"},te=["src"],oe={class:"font-normal"},re={class:"text-sm font-bold text-slate-700"},ne=f({__name:"userbox",props:{user:{type:Object,required:!0}},setup(p){var c;const o=p,r=b();let{user:s}=$(o),l=(c=_.getUserInfos())==null?void 0:c.uid;const a=async()=>(await _.selectUser(s.value),r.push(`/chatroom/${s.value.uid}`)),n=async()=>{typeof l=="string"&&_.delUser(l,s.value.uid)};return(i,g)=>{const w=L("font-awesome-icon");return d(),u("div",null,[t(l)!=t(s).uid?(d(),u("div",se,[e("div",{onClick:a,class:"flex space-x-4"},[e("img",{src:t(s).photoURL,alt:"profile-pid",class:"w-12 h-12 border-2 border-secondary rounded-full"},null,8,te),e("div",null,[e("h1",oe,h(t(s).displayName),1),e("p",re,h(t(s).lastMessage||"say hello"),1)])]),t(s).lastMessage?(d(),u("div",{key:0,onClick:n,class:"opacity-0 group-hover:opacity-100 ring-2 ring-secondary rounded-full p-2 flex justify-center items-center hover:bg-secondary cursor-pointer"},[v(w,{icon:"fa-regular fa-trash-can",class:"text-secondary text-xl hover:text-white"})])):y("",!0)])):y("",!0)])}}}),ae={class:"w-full"},le={class:"px-2"},ce=["onKeypress"],de=f({__name:"userwindow",setup(p){var a;let o=m([]),r=m(""),s=(a=_)==null?void 0:a.getUserInfos();N(j(R,"userChats",s.uid),n=>{let c=n.data();o.value=[],Object.entries(c).forEach(i=>{let{userInfos:g}=i[1];o.value.push(g)})});const l=async()=>{let n=await _.searchUser(r.value);if(n.length==0){r.value="";return}o.value=[],o.value=n,r.value=""};return(n,c)=>(d(),u("section",null,[e("section",ae,[e("div",le,[S(e("input",{onKeypress:M(l,["enter"]),"onUpdate:modelValue":c[0]||(c[0]=i=>z(r)?r.value=i:r=i),type:"text",class:"outline-none px-2 py-1 rounded-xl w-full my-2 border-2 border-secondary bg-slate-300",placeholder:"Search a user"},null,40,ce),[[O,t(r)]])]),(d(!0),u(B,null,I(t(o),i=>(d(),V(ne,{user:i},null,8,["user"]))),256))])]))}}),ue=f({__name:"UserRoom",setup(p){return(o,r)=>(d(),u("section",null,[v(ee),v(de)]))}});export{ue as default};
