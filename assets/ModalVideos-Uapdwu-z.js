import{f as p,o as r,c as i,a as n,w as c,b as e,t as f,i as x,J as m,T as d,v as h,l as _,F as b,p as g,g as w}from"./index-M3aWDf3A.js";const v={props:{open:{type:Boolean,default:!0},text:{type:String,required:!0,default:"Portafolio Online"},video:{type:String,required:!0}},emits:["closeModal"],setup(o,{emit:t}){return{close:()=>{t("closeModal")}}}},u=o=>(g("data-v-613cd0bf"),o=o(),w(),o),y={key:0,class:"fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blanco text-white rounded-2xl shadow-lg shadow-sombra z-100"},S=u(()=>e("i",{class:"ri-close-line text-blanco"},null,-1)),k=[S],V=["src"],B={class:"text-lg bg-claro font-semibold rounded-b-2xl p-6 flex items-center"},C=u(()=>e("span",{class:"mx-3"},[e("i",{class:"ri-youtube-fill text-2xl"})],-1));function I(o,t,s,l,N,T){return r(),i(b,null,[n(d,{name:"modal"},{default:c(()=>[s.open?(r(),i("div",y,[e("div",{onClick:t[0]||(t[0]=(...a)=>l.close&&l.close(...a)),class:"absolute bg-danger w-8 h-8 -right-4 -top-4 rounded-full flex justify-center items-center text-2xl hover:rotate-90 transition-all duration-150 ease-in-out hover:scale-110 cursor-pointer hover:brightness-125"},k),e("iframe",{src:s.video,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:"",class:"bg-principal rounded-t-lg w-80 h-80 sm:w-[440px] sm:h-[480px] lg:w-[940px] lg:h-[640px]"},null,8,V),e("p",B,[C,x("Portafolio - "+f(s.text),1)])])):m("",!0)]),_:1}),n(d,{name:"fondo"},{default:c(()=>[_(e("div",{onClick:t[1]||(t[1]=(...a)=>l.close&&l.close(...a)),class:"fixed bg-oscuro opacity-30 top-0 left-0 w-full h-full z-50"},null,512),[[h,s.open]])]),_:1})],64)}const q=p(v,[["render",I],["__scopeId","data-v-613cd0bf"]]);export{q as default};
