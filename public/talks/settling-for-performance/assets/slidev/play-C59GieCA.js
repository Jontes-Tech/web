function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/slidev/DrawingControls-CIAiZpD-.js","assets/modules/unplugin-icons-2hV70NCQ.js","assets/modules/vue-6QpwdnMK.js","assets/modules/shiki-Ceez9vfC.js","assets/modules/shiki-BSchMNmt.css","assets/slidev/DrawingPreview-DYWKVPJO.js","assets/index-DobqPNfj.js","assets/index-DzArufpp.css","assets/slidev/bottom-Czvzt10h.js","assets/bottom-wdQA4CPU.css","assets/slidev/SlidesShow-Bkex4TLd.js","assets/SlidesShow-Cs--HI28.css","assets/DrawingControls-BO6lw4N5.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{b as g,c as v,_ as M,x as N,y as P,j as S,z as E}from"../index-DobqPNfj.js";import{d as y,a5 as j,o as l,c as r,z as e,b as h,e as t,f as $,i as k,g as i,a6 as B,I as z,k as x,a4 as f,Z as O,Q as _,l as u,F as I,t as R,h as T}from"../modules/vue-6QpwdnMK.js";import{b,e as w,f as V,h as U,j as D,w as A,k as H,l as L}from"./bottom-Czvzt10h.js";import{Q,G as F,r as G,u as W,S as K,a as X,N as Y}from"./SlidesShow-Bkex4TLd.js";import{i as Z}from"./DrawingPreview-DYWKVPJO.js";import{P as q}from"./PrintStyle-BcbmVonb.js";import"../modules/shiki-Ceez9vfC.js";import"../modules/unplugin-icons-2hV70NCQ.js";const J="/talks/settling-for-performance/assets/logo-BYkHSa_O.png",ee={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},oe=y({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["update:modelValue"],setup(c,{emit:a}){const n=c,o=j(n,"modelValue",a);function s(){o.value=!1}return(d,p)=>(l(),r(B,null,[e(o)?(l(),h("div",ee,[t("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:p[0]||(p[0]=C=>s())}),t("div",{class:k(["m-auto rounded-md bg-main shadow",n.class]),"dark:border":"~ main"},[$(d.$slots,"default")],2)])):i("v-if",!0)],1024))}}),se=g(oe,[["__file","/home/jonte/apps/settling-for-performance/node_modules/.pnpm/@slidev+client@0.48.0-beta.24_postcss@8.4.35_vite@5.1.5/node_modules/@slidev/client/internals/Modal.vue"]]),te={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},le=["innerHTML"],ae=t("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[t("div",{class:"flex gap-1 children:my-auto"},[t("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),t("img",{class:"w-5 h-5",src:J,alt:"Slidev logo"}),t("div",{style:{color:"#2082A6"}},[t("b",null,"Sli"),O("dev ")])])],-1),ne=y({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["update:modelValue"],setup(c,{emit:a}){const o=j(c,"modelValue",a),s=z(()=>typeof v.info=="string");return(d,p)=>(l(),r(se,{modelValue:e(o),"onUpdate:modelValue":p[0]||(p[0]=C=>f(o)?o.value=C:null),class:"px-6 py-4"},{default:x(()=>[t("div",te,[s.value?(l(),h("div",{key:0,class:"mb-4",innerHTML:e(v).info},null,8,le)):i("v-if",!0),ae])]),_:1},8,["modelValue"]))}}),ie=g(ne,[["__file","/home/jonte/apps/settling-for-performance/node_modules/.pnpm/@slidev+client@0.48.0-beta.24_postcss@8.4.35_vite@5.1.5/node_modules/@slidev/client/internals/InfoDialog.vue"]]),re=y({__name:"Controls",setup(c){const a=_(),n=_();return(m,o)=>(l(),h(I,null,[u(Q,{modelValue:e(b),"onUpdate:modelValue":o[0]||(o[0]=s=>f(b)?b.value=s:null)},null,8,["modelValue"]),u(F),a.value?(l(),r(e(a),{key:0})):i("v-if",!0),n.value?(l(),r(e(n),{key:1,modelValue:e(w),"onUpdate:modelValue":o[1]||(o[1]=s=>f(w)?w.value=s:null)},null,8,["modelValue"])):i("v-if",!0),e(v).info?(l(),r(ie,{key:2,modelValue:e(V),"onUpdate:modelValue":o[2]||(o[2]=s=>f(V)?V.value=s:null)},null,8,["modelValue"])):i("v-if",!0)],64))}}),de=g(re,[["__file","/home/jonte/apps/settling-for-performance/node_modules/.pnpm/@slidev+client@0.48.0-beta.24_postcss@8.4.35_vite@5.1.5/node_modules/@slidev/client/internals/Controls.vue"]]),ue=y({__name:"play",setup(c){G();const a=R();function n(s){var d;D.value||((d=s.target)==null?void 0:d.id)==="slide-container"&&(s.screenX/window.innerWidth>.6?N():P())}W(a);const m=z(()=>U.value||D.value);_();const o=_();return M(()=>import("./DrawingControls-CIAiZpD-.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12])).then(s=>o.value=s.default),(s,d)=>(l(),h(I,null,[e(S)?(l(),r(q,{key:0})):i("v-if",!0),t("div",{id:"page-root",ref_key:"root",ref:a,class:k(["grid",e(L)?"grid-rows-[1fr_max-content]":"grid-cols-[1fr_max-content]"])},[u(K,{class:"w-full h-full",style:T({background:"var(--slidev-slide-container-background, black)"}),width:e(S)?e(A).width.value:void 0,scale:e(H),"is-main":!0,onPointerdown:n},{default:x(()=>[u(X,{"render-context":"slide"})]),controls:x(()=>[t("div",{class:k(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[m.value?"!opacity-100 right-0":"opacity-0 p-2",e(Z)?"pointer-events-none":""]])},[u(Y,{class:"m-auto",persist:m.value},null,8,["persist"])],2),!e(v).drawings.presenterOnly&&!e(E)&&o.value?(l(),r(e(o),{key:0,class:"ml-0"})):i("v-if",!0)]),_:1},8,["style","width","scale"]),i("v-if",!0)],2),u(de)],64))}}),he=g(ue,[["__file","/home/jonte/apps/settling-for-performance/node_modules/.pnpm/@slidev+client@0.48.0-beta.24_postcss@8.4.35_vite@5.1.5/node_modules/@slidev/client/pages/play.vue"]]);export{he as default};
