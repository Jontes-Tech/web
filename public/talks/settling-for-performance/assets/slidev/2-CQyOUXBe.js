import{d as p,I as u,o as c,b as _,e as t,f,i as g,h,c as v,k as y,q as b,s as k,z as a}from"../modules/vue-6QpwdnMK.js";import{u as d,p as x,f as S}from"./context-dc6TvT5n.js";import{b as m,V as l}from"../index-Do9qY0ie.js";import"../modules/shiki-Ceez9vfC.js";const w="/jonte_square.png";function n(e){return e.startsWith("/")?"/"+e.slice(1):e}function z(e,o=!1){const s=e&&["#","rgb","hsl"].some(i=>e.indexOf(i)===0),r={background:s?e:void 0,color:e&&!s?"white":void 0,backgroundImage:s?void 0:e?o?`linear-gradient(#0005, #0008), url(${n(e)})`:`url("${n(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return r.background||delete r.background,r}const B={class:"grid grid-cols-2 w-full h-full"},C=p({__name:"intro-image-right",props:{image:{type:String},class:{type:String}},setup(e){d();const o=e,s=u(()=>z(o.image));return(r,i)=>(c(),_("div",B,[t("div",{class:g(["slidev-layout default image-right my-auto",o.class])},[f(r.$slots,"default")],2),t("div",{class:"my-14 mr-14",style:h(s.value)},null,4)]))}}),$=m(C,[["__file","/home/jonte/apps/settling-for-performance/node_modules/.pnpm/@slidev+theme-apple-basic@0.25.0/node_modules/@slidev/theme-apple-basic/layouts/intro-image-right.vue"]]),j=t("h1",null,[t("code",null,"whoami")],-1),P=t("ul",null,[t("li",null,"TypeScript dev"),t("li",null,"Älskar bleeding-edge teknik"),t("li",null,"Överoptimerar bäst-det-går på webben")],-1),I=t("div",{style:{position:"fixed",bottom:"0",right:"0",width:"42vh"}},[t("img",{style:{"object-fit":"cover"},src:w})],-1),q={__name:"2",setup(e){return x(l),d(),(o,s)=>(c(),v($,b(k(a(S)(a(l),1))),{default:y(()=>[j,P,I]),_:1},16))}},E=m(q,[["__file","/@slidev/slides/2.md"]]);export{E as default};
