import{f as w,r,e as v,o as l,c as n,b as a,F as f,j as u,k as m,a as M,d as b,_ as D}from"./index-utv3qmOU.js";const h=[{image:"https://images.unsplash.com/photo-1604311795833-25e1d5c128c6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8OSUzQTE2fGVufDB8fDB8fHww",text:"Desarrollo web"},{image:"https://images.unsplash.com/photo-1604311795833-25e1d5c128c6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8OSUzQTE2fGVufDB8fDB8fHww",text:"Edición de video"},{image:"https://images.unsplash.com/photo-1604311795833-25e1d5c128c6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8OSUzQTE2fGVufDB8fDB8fHww",text:"Marca Gráfica"},{image:"https://images.unsplash.com/photo-1604311795833-25e1d5c128c6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8OSUzQTE2fGVufDB8fDB8fHww",text:"Desarrollo web"}],B="/voy.digital/assets/portafolioWeb1-5lgyvjex.png",_="/voy.digital/assets/portafolioVideo1-lZrY6wlN.png",y="/voy.digital/assets/portafolioMarca1-PbRMETKG.png",V="/voy.digital/assets/portafolioWeb2-VfwVGtDj.png",z=[{image:B,text:"Desarrollo web"},{image:_,text:"Edición de video"},{image:y,text:"Marca gráfica"},{image:V,text:"Desarrollo web"}],C=b(()=>D(()=>import("./CardImage-YN124l4A.js"),__vite__mapDeps([0,1,2,3]))),E={components:{CardImage:C},setup(){const d=r(z),t="https://images.unsplash.com/photo-1604311795833-25e1d5c128c6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8OSUzQTE2fGVufDB8fDB8fHww",x="hola foca",o=r(h),s=r(!1),p=r(!1);let i=!0;return{datos:d,image:t,text:x,pausar:s,sentido:p,itemsCarousel:o,toggle:()=>{s.value=!s.value,i=!i},activar:()=>{i&&(s.value=!1)}}}},H={class:"flex"},j={class:"bg-oscuro h-20 w-full"},W={class:"flex items-center w-full"},k={class:"flex gap-12 items-center justify-center text-blanco text-5xl w-full py-8"};function G(d,t,x,o,s,p){const i=v("CardImage");return l(),n(f,null,[a("div",{class:"relative w-full bg-oscuro-claro overflow-hidden rounded-xl",onMouseover:t[0]||(t[0]=e=>o.pausar=!0),onMouseleave:t[1]||(t[1]=(...e)=>o.activar&&o.activar(...e))},[a("div",H,[(l(),n(f,null,u(3,e=>a("div",{class:m(["flex flex-nowrap transition-all duration-1000 ease-in-out",{"slide-paused":o.pausar,"slide-left":o.sentido,"slide-right":!o.sentido}]),key:"slice"+e},[(l(!0),n(f,null,u(o.datos,(c,g)=>(l(),n("div",{class:"px-4",key:e+"card"+g},[M(i,{image:c.image,text:c.text},null,8,["image","text"])]))),128))],2)),64))])],32),a("div",j,[a("div",W,[a("div",k,[a("i",{class:"ri-arrow-left-s-line cursor-pointer",onClick:t[2]||(t[2]=e=>o.sentido=!1)}),a("i",{class:m(["text-4xl cursor-pointer",{"ri-play-mini-fill":o.pausar,"ri-pause-fill":!o.pausar}]),onClick:t[3]||(t[3]=(...e)=>o.toggle&&o.toggle(...e))},null,2),a("i",{class:"ri-arrow-right-s-line cursor-pointer",onClick:t[4]||(t[4]=e=>o.sentido=!0)})])])])],64)}const F=w(E,[["render",G],["__scopeId","data-v-4ec00d73"]]);export{F as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/CardImage-YN124l4A.js","assets/index-utv3qmOU.js","assets/index-uKNHXMS2.css","assets/CardImage-N0ieUiHT.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}