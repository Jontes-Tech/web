import{d as p,Y as _,I as d,b as a,e as t,x as s,z as r,F as u,X as h,o as n,Z as f,l as v,g}from"../modules/vue-6QpwdnMK.js";import{k as x,c as m,f as b,t as y,b as N}from"../index-DobqPNfj.js";import{N as k}from"./NoteDisplay-DOqWxATz.js";import"../modules/shiki-Ceez9vfC.js";const w={id:"page-root"},L={class:"m-4"},T={class:"mb-10"},V={class:"text-4xl font-bold mt-2"},B={class:"opacity-50"},D={class:"text-lg"},H={class:"font-bold flex gap-2"},S={class:"opacity-50"},j=t("div",{class:"flex-auto"},null,-1),z={key:0,class:"border-main mb-8"},C=p({__name:"print",setup(F){_(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),x({title:`Notes - ${m.title}`});const i=d(()=>b.value.map(o=>{var l;return(l=o.meta)==null?void 0:l.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,l)=>(n(),a("div",w,[t("div",L,[t("div",T,[t("h1",V,s(r(m).title),1),t("div",B,s(new Date().toLocaleString()),1)]),(n(!0),a(u,null,h(i.value,(e,c)=>(n(),a("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",D,[t("div",H,[t("div",S,s(e==null?void 0:e.no)+"/"+s(r(y)),1),f(" "+s(e==null?void 0:e.title)+" ",1),j])]),v(k,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<i.value.length-1?(n(),a("hr",z)):g("v-if",!0)]))),128))])]))}}),W=N(C,[["__file","/home/jonte/apps/settling-for-performance/node_modules/.pnpm/@slidev+client@0.48.0-beta.24_postcss@8.4.35_vite@5.1.5/node_modules/@slidev/client/pages/presenter/print.vue"]]);export{W as default};
