import{f as E,o as q,c as B,b as e,k as b,t as C,r as S,g as A,q as $,a as i,w as x,v as p,m as g,T as y,u as n,F as z}from"./index-YOu0IZSB.js";import{_ as I}from"./Logo-2LRJTR0s.js";import T from"./ButtonMeeting-UsZngIJa.js";import{S as j}from"./SocialNetworks-m8xCg_7Y.js";import{h as L,s as l}from"./scrollMenu-N3kOyiLQ.js";const N={props:{active:{type:String,required:!0},equalActive:{type:String,required:!0},title:{type:String,required:!0}}},V={class:"h-16 w-full pl-10 flex justify-start items-center select-none"},W=["textContent"];function D(c,k,s,r,u,o){return q(),B("div",V,[e("p",{class:b(["text-start text-oscuro text-xl cursor-pointer transition-all duration-150 ease-in-out",{"font-bold hover:font-bold":s.active===s.equalActive,"hover:font-semibold":s.active!==s.equalActive}]),textContent:C(s.title)},null,10,W)])}const a=E(N,[["render",D]]),F={class:"fixed flex flex-col justify-items w-80 h-[100vh] rounded-r-2xl bg-blanco z-50 md:hidden shadow-xl shadow-sombra z-200"},R={class:"h-28 w-full rounded-tr-2xl flex-shrink-0 border-fondo border-b flex justify-center items-end"},M={class:"flex w-full items-start pl-9 pb-6"},P={class:"w-56"},U={class:"w-full overflow-y-auto my-8"},G={class:"w-full flex-shrink-0"},H={class:"flex w-full items-start pl-8"},J={class:"w-64"},K={class:"w-full flex-shrink-0 mt-16"},O={class:"flex w-full items-start pl-8"},Q={class:"w-64"},X={__name:"SideBar",props:["open"],emits:["closeEvent"],setup(c,{emit:k}){const s=k,r=()=>{s("closeEvent")},u=()=>{window.innerWidth>=768&&s("closeEvent")},o=S("active1");let v,f,m,_,w;return A(()=>{v=document.getElementById("section1"),f=document.getElementById("section2"),m=document.getElementById("section3"),_=document.getElementById("section4"),w=document.getElementById("section5");let h=[v,f,m,_,w];window.addEventListener("scroll",function(t){L(t,o,h)}),window.addEventListener("resize",u)}),$(()=>{window.removeEventListener("resize",u)}),(h,t)=>(q(),B(z,null,[i(y,{name:"close"},{default:x(()=>[g(e("i",{onClick:r,class:"fixed top-0 right-0 p-3 text-3xl cursor-pointer ri-close-line z-100 md:hidden"},null,512),[[p,c.open]])]),_:1}),i(y,{name:"menu"},{default:x(()=>[g(e("nav",F,[e("div",R,[e("div",M,[e("div",P,[i(I)])])]),e("div",U,[i(a,{active:o.value,equalActive:"active1",title:"Inicio",onClick:t[0]||(t[0]=d=>n(l)(n(v)))},null,8,["active"]),i(a,{active:o.value,equalActive:"active2",title:"Servicios",onClick:t[1]||(t[1]=d=>n(l)(n(f)))},null,8,["active"]),i(a,{active:o.value,equalActive:"active3",title:"Equipo",onClick:t[2]||(t[2]=d=>n(l)(n(m)))},null,8,["active"]),i(a,{active:o.value,equalActive:"active4",title:"Portafolio",onClick:t[3]||(t[3]=d=>n(l)(n(_)))},null,8,["active"]),i(a,{active:o.value,equalActive:"active5",title:"Testimonios",onClick:t[4]||(t[4]=d=>n(l)(n(w)))},null,8,["active"])]),e("div",G,[e("div",H,[e("div",J,[i(T,{title:"Agendar Reunión"})])])]),e("div",K,[e("div",O,[e("div",Q,[i(j)])])])],512),[[p,c.open]])]),_:1}),i(y,{name:"fondo"},{default:x(()=>[g(e("div",{onClick:r,class:"bg-oscuro fixed w-full h-[100%] opacity-20 md:hidden z-10"},null,512),[[p,c.open]])]),_:1})],64))}},ne=E(X,[["__scopeId","data-v-0df90c41"]]);export{ne as default};
