import{f as g,o as E,c as N,b as n,k as h,t as k,r as q,g as B,l as A,a as i,u as t,w as C,v as I,m as b,T as S,d as $,_ as j}from"./index-KIKu6gS-.js";import{h as y,s as l}from"./scrollMenu-N3kOyiLQ.js";import{_ as T}from"./Logo-HAoAKXYu.js";import D from"./ButtonMeeting-xCt05ncf.js";const L={props:{active:{type:String,required:!0},equalActive:{type:String,required:!0},title:{type:String,required:!0},className:{type:String,default:"w-14"}}},P=["textContent"];function V(_,x,o,p,w,s){return E(),N("div",{class:h(["h-16 flex justify-start items-center select-none",o.className])},[n("p",{class:h(["text-start text-xl cursor-pointer transition-all duration-150 ease-in-out",{"font-bold hover:font-bold":o.active===o.equalActive,"hover:font-semibold":o.active!==o.equalActive}]),textContent:k(o.title)},null,10,P)],2)}const a=g(L,[["render",V]]),z={class:"fixed bg-fondo w-full h-14 md:h-20 z-5"},O={class:"flex justify-between items-center h-14 px-4 md:hidden"},R={class:"hidden md:flex h-20 justify-center"},M={class:"flex min-w-[768px] max-w-[1380px] h-20 bg-fondo"},U={class:"w-72 flex-shrink-0 flex justify-center items-center"},F={class:"w-56"},G={class:"overflow-x-auto flex"},H={class:"bg-fondo w-[750px] flex items-center gap-12 justify-end pr-10 flex-shrink-0"},J={class:"w-48 flex-shrink-0 flex justify-center items-center"},K={class:"w-full"},Q={__name:"NavBar",props:["open"],emits:["openEvent"],setup(_,{emit:x}){const o=$(()=>j(()=>import("./Icon-WpCv5Hqs.js"),__vite__mapDeps([0,1,2]))),p=x,w=()=>{p("openEvent")},s=q("active1");let d,v,u,m,f;return B(()=>{s.value="active1",d=document.getElementById("section1"),v=document.getElementById("section2"),u=document.getElementById("section3"),m=document.getElementById("section4"),f=document.getElementById("section5");let c=[d,v,u,m,f];window.addEventListener("scroll",function(e){y(e,s,c)})}),A(()=>{window.removeEventListener("scroll",function(c){y(c,s,sections)})}),(c,e)=>(E(),N("nav",z,[n("div",O,[i(t(o),{class:"h-6"}),i(S,null,{default:C(()=>[b(n("i",{class:"ri-more-2-fill text-2xl cursor-pointer",onClick:w},null,512),[[I,!_.open]])]),_:1})]),n("div",R,[n("div",M,[n("div",U,[n("div",F,[i(T)])]),n("div",G,[n("div",H,[i(a,{active:s.value,equalActive:"active1",title:"Inicio",className:"w-14",onClick:e[0]||(e[0]=r=>t(l)(t(d)))},null,8,["active"]),i(a,{active:s.value,equalActive:"active2",title:"Servicios",className:"w-20",onClick:e[1]||(e[1]=r=>t(l)(t(v)))},null,8,["active"]),i(a,{active:s.value,equalActive:"active3",title:"Equipo",className:"w-16",onClick:e[2]||(e[2]=r=>t(l)(t(u)))},null,8,["active"]),i(a,{active:s.value,equalActive:"active4",title:"Portafolio",className:"w-24",onClick:e[3]||(e[3]=r=>t(l)(t(m)))},null,8,["active"]),i(a,{active:s.value,equalActive:"active5",title:"Testimonios",className:"w-28",onClick:e[4]||(e[4]=r=>t(l)(t(f)))},null,8,["active"])])]),n("div",J,[n("div",K,[i(D,{title:"Agendar Reunión",className:"text-[17px] py-[0.4rem]  rounded-xl"})])])])])]))}},ee=g(Q,[["__scopeId","data-v-7ca7427d"]]);export{ee as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Icon-WpCv5Hqs.js","assets/index-KIKu6gS-.js","assets/index-uKNHXMS2.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}