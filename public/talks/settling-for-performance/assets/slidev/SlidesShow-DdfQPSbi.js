function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/slidev/DrawingControls-grjv22-n.js","assets/modules/unplugin-icons-2hV70NCQ.js","assets/modules/vue-6QpwdnMK.js","assets/modules/shiki-Ceez9vfC.js","assets/modules/shiki-BSchMNmt.css","assets/slidev/DrawingPreview-Rf2GXPVO.js","assets/index-DUNblq55.js","assets/index-BTac9VE5.css","assets/slidev/bottom-C86qgIgU.js","assets/bottom-wdQA4CPU.css","assets/DrawingControls-BO6lw4N5.css","assets/slidev/DrawingLayer-DYEot8EX.js","assets/slidev/context-BhbNUvK0.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{t as N,a7 as Nt,a8 as Tt,I as C,a9 as I,aa as j,P as Ot,C as Me,ab as Pt,d as W,ac as jt,B as dt,Y as Dt,W as Vt,b as v,e as E,f as he,h as fe,i as T,o as h,a5 as Ue,x as U,F as B,X as Ee,z as c,l as w,Z as je,a4 as Ft,ad as Bt,c as S,g as x,a6 as Gt,k as $,ae as ht,Q as De,r as Kt,af as Wt,ag as zt,$ as ft,ah as pt,j as me,ai as Ht,aj as Qt,m as Ut,ak as Yt}from"../modules/vue-6QpwdnMK.js";import{i as Ze,d as ee,b as Xt,D as Jt}from"./DrawingPreview-Rf2GXPVO.js";import{x as ce,y as ue,A as Ve,B as Fe,f as ne,D as vt,E as $e,e as Ie,j as Zt,a as Ae,s as qt,c as we,F as qe,h as es,b as G,g as ts,G as et,w as be,_ as _t,z as Z,H as ss,o as ns,I as os,J as tt,K as q,L as rs,t as is,u as as,C as ls,M as st,r as Re,n as ie,p as Le,v as cs,N as nt,O as us}from"../index-DUNblq55.js";import{b as V,t as mt,m as ae,n as gt,o as ds,q as hs,r as fs,u as yt,k as Ne,v as Be,s as ge,p as ps,x as vs,y as _s,f as ot,z as de,w as Te,S as kt,g as wt,G as ms,a as gs}from"./bottom-C86qgIgU.js";import{e as ys,f as ks,g as ws,h as bs,i as xs,j as Ss,k as Ms,l as bt,m as $s,n as Cs,o as Es,p as Is,q as As,r as Rs,s as Ls,t as Ns,u as Ts,v as Os}from"../modules/unplugin-icons-2hV70NCQ.js";function Go(s){const e=N(0),{direction:t,distanceX:n,distanceY:o}=Nt(s,{pointerTypes:["touch"],onSwipeStart(){Ze.value||(e.value=Tt())},onSwipeEnd(){if(!e.value||Ze.value)return;const r=Math.abs(n.value),i=Math.abs(o.value);r/window.innerWidth>.3||r>75?t.value==="left"?ce():ue():(i/window.innerHeight>.4||i>200)&&(t.value==="down"?Ve():Fe())}})}const xe=N(1),Se=C(()=>ne.value.length),R=N(0),Ye=N(0);function Ps(){R.value>xe.value&&(R.value-=1)}function js(){R.value<Se.value&&(R.value+=1)}function Ds(){if(R.value>xe.value){let s=R.value-Ye.value;s<xe.value&&(s=xe.value),R.value=s}}function Vs(){if(R.value<Se.value){let s=R.value+Ye.value;s>Se.value&&(s=Se.value),R.value=s}}function Fs(){const{escape:s,space:e,shift:t,left:n,right:o,up:r,down:i,enter:a,d:l,g:d,o:u,"`":p}=gt;let f=[{name:"next_space",key:I(e,j(t)),fn:ce,autoRepeat:!0},{name:"prev_space",key:I(e,t),fn:ue,autoRepeat:!0},{name:"next_right",key:I(o,j(t),j(V)),fn:ce,autoRepeat:!0},{name:"prev_left",key:I(n,j(t),j(V)),fn:ue,autoRepeat:!0},{name:"next_page_key",key:"pageDown",fn:ce,autoRepeat:!0},{name:"prev_page_key",key:"pageUp",fn:ue,autoRepeat:!0},{name:"next_down",key:I(i,j(V)),fn:Fe,autoRepeat:!0},{name:"prev_up",key:I(r,j(V)),fn:()=>Ve(!1),autoRepeat:!0},{name:"next_shift",key:I(o,t),fn:Fe,autoRepeat:!0},{name:"prev_shift",key:I(n,t),fn:()=>Ve(!1),autoRepeat:!0},{name:"toggle_dark",key:I(l,j(ee)),fn:vt},{name:"toggle_overview",key:I(Ot(u,p),j(ee)),fn:mt},{name:"hide_overview",key:I(s,j(ee)),fn:()=>V.value=!1},{name:"goto",key:I(d,j(ee)),fn:()=>ae.value=!ae.value},{name:"next_overview",key:I(o,V),fn:js},{name:"prev_overview",key:I(n,V),fn:Ps},{name:"up_overview",key:I(r,V),fn:Ds},{name:"down_overview",key:I(i,V),fn:Vs},{name:"goto_from_overview",key:I(a,V),fn:()=>{$e(R.value),V.value=!1}}];const g=new Set(f.map(y=>y.name));if(f.filter(y=>y.name&&g.has(y.name)).length===0){const y=["========== WARNING ==========","defineShortcutsSetup did not return any of the base shortcuts.","See https://sli.dev/custom/config-shortcuts.html for migration.",'If it is intentional, return at least one shortcut with one of the base names (e.g. name:"goto").'].join(`

`);alert(y),console.warn(y)}return f}const xt=I(j(fs),j(hs),ds);function Bs(s,e,t=!1){typeof s=="string"&&(s=gt[s]);const n=I(s,xt);let o=0,r;const i=()=>{if(clearTimeout(r),!n.value){o=0;return}t&&(r=setTimeout(i,Math.max(1e3-o*250,150)),o++),e()};return Me(n,i,{flush:"sync"})}function Gs(s,e){return Pt(s,t=>{xt.value&&(t.repeat||e())})}function Ko(){const s=Fs();new Map(s.map(t=>[t.key,t])).forEach(t=>{t.fn&&Bs(t.key,t.fn,t.autoRepeat)}),Gs("f",()=>yt.toggle())}const Ks=W({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]},isMain:{type:Boolean,default:!1}},setup(s){const e=s,t=N(),n=jt(t),o=C(()=>e.width?e.width:n.width.value),r=C(()=>e.width?e.width/Ie.value:n.height.value);e.width&&dt(()=>{t.value&&(t.value.style.width=`${o.value}px`,t.value.style.height=`${r.value}px`)});const i=C(()=>o.value/r.value),a=C(()=>e.scale&&!Zt.value?e.scale:i.value<Ie.value?o.value/Ae.value:r.value*Ie.value/Ae.value),l=C(()=>({height:`${qt.value}px`,width:`${Ae.value}px`,transform:`translate(-50%, -50%) scale(${a.value})`,"--slidev-slide-scale":a.value})),d=C(()=>({"select-none":!we.selectable,"slidev-nav-go-forward":qe.value>0,"slidev-nav-go-backward":qe.value<0}));return e.isMain&&Dt(C(()=>`
    :root {
      --slidev-slide-scale: ${a.value};
    }
  `)),Vt(es,a),(u,p)=>(h(),v("div",{id:"slide-container",ref_key:"root",ref:t,class:T(["slidev-slides-container",d.value])},[E("div",{id:"slide-content",class:"slidev-slide-content",style:fe(l.value)},[he(u.$slots,"default")],4),he(u.$slots,"controls")],2))}}),Ws=G(Ks,[["__file","/home/jonte/apps/settling-for-performance/node_modules/.pnpm/@slidev+client@0.48.0-beta.24_postcss@8.4.35_vite@5.1.5/node_modules/@slidev/client/internals/SlideContainer.vue"]]),zs={class:"select-list"},Hs={class:"title"},Qs={class:"items"},Us=["onClick"],Ys=W({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(s,{emit:e}){const o=Ue(s,"modelValue",e,{passive:!0});return(r,i)=>{const a=ys;return h(),v("div",zs,[E("div",Hs,U(s.title),1),E("div",Qs,[(h(!0),v(B,null,Ee(s.items,l=>(h(),v("div",{key:l.value,class:T(["item",{active:c(o)===l.value}]),onClick:()=>{var d;o.value=l.value,(d=l.onClick)==null||d.call(l)}},[w(a,{class:T(["text-green-500",{"opacity-0":c(o)!==l.value}])},null,8,["class"]),je(" "+U(l.display||l.value),1)],10,Us))),128))])])}}}),Xs=G(Ys,[["__scopeId","data-v-f7f54dc3"],["__file","/home/jonte/apps/settling-for-performance/node_modules/.pnpm/@slidev+client@0.48.0-beta.24_postcss@8.4.35_vite@5.1.5/node_modules/@slidev/client/internals/SelectList.vue"]]),Js={class:"text-sm"},Zs=W({__name:"Settings",setup(s){const e=[{display:"Fit",value:0},{display:"1:1",value:1}];return(t,n)=>(h(),v("div",Js,[w(Xs,{modelValue:c(Ne),"onUpdate:modelValue":n[0]||(n[0]=o=>Ft(Ne)?Ne.value=o:null),title:"Scale",items:e},null,8,["modelValue"])]))}}),qs=G(Zs,[["__file","/home/jonte/apps/settling-for-performance/node_modules/.pnpm/@slidev+client@0.48.0-beta.24_postcss@8.4.35_vite@5.1.5/node_modules/@slidev/client/internals/Settings.vue"]]),en={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ main"},tn=W({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(s,{emit:e}){const o=Ue(s,"modelValue",e,{passive:!0}),r=N();return Bt(r,()=>{o.value=!1}),(i,a)=>(h(),v("div",{ref_key:"el",ref:r,class:"flex relative"},[E("button",{class:T({disabled:s.disabled}),onClick:a[0]||(a[0]=l=>o.value=!c(o))},[he(i.$slots,"button",{class:T({disabled:s.disabled})})],2),(h(),S(Gt,null,[c(o)?(h(),v("div",en,[he(i.$slots,"menu")])):x("v-if",!0)],1024))],512))}}),sn=G(tn,[["__file","/home/jonte/apps/settling-for-performance/node_modules/.pnpm/@slidev+client@0.48.0-beta.24_postcss@8.4.35_vite@5.1.5/node_modules/@slidev/client/internals/MenuButton.vue"]]),nn={},on={class:"w-1px opacity-10 bg-current m-1 lg:m-2"};function rn(s,e){return h(),v("div",on)}const ye=G(nn,[["render",rn],["__file","/home/jonte/apps/settling-for-performance/node_modules/.pnpm/@slidev+client@0.48.0-beta.24_postcss@8.4.35_vite@5.1.5/node_modules/@slidev/client/internals/VerticalDivider.vue"]]),an={class:"sr-only"},ln=W({__name:"IconButton",props:{title:{type:String,required:!0},icon:{type:String,required:!1},as:{type:String,required:!1}},setup(s){return(e,t)=>(h(),S(ht(e.as||"button"),{class:"slidev-icon-btn",title:e.title},{default:$(()=>[E("span",an,U(e.title),1),he(e.$slots,"default",{},()=>[E("div",{class:T(e.icon)},null,2)])]),_:3},8,["title"]))}}),F=G(ln,[["__file","/home/jonte/apps/settling-for-performance/node_modules/.pnpm/@slidev+client@0.48.0-beta.24_postcss@8.4.35_vite@5.1.5/node_modules/@slidev/client/internals/IconButton.vue"]]),cn={render(){return[]}},un={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},dn={class:"my-auto"},hn={class:"opacity-50"},fn=W({__name:"NavControls",props:{persist:{default:!1}},setup(s){const e=s,t=Be.smaller("md"),{isFullscreen:n,toggle:o}=yt,r=C(()=>ts.value.query.password),i=C(()=>r.value?`?password=${r.value}`:""),a=C(()=>`${et(be.value,!0)}${i.value}`),l=C(()=>`${et(be.value,!1)}${i.value}`),d=N();function u(){d.value&&de.value&&d.value.contains(de.value)&&de.value.blur()}const p=C(()=>e.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-main"),f=De(),g=De();return _t(()=>import("./DrawingControls-grjv22-n.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10])).then(k=>g.value=k.default),(k,y)=>{const b=ks,M=ws,O=bs,_=xs,A=Is,K=Ss,X=Ms,L=bt,z=$s,H=Cs,pe=As,oe=Kt("RouterLink"),J=Rs,Je=Ls,P=Ns,re=Ts,ve=Es;return h(),v("nav",{ref_key:"root",ref:d,class:"flex flex-col"},[E("div",{class:T(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",p.value]),onMouseleave:u},[c(Z)?x("v-if",!0):(h(),S(F,{key:0,title:c(n)?"Close fullscreen":"Enter fullscreen",onClick:c(o)},{default:$(()=>[c(n)?(h(),S(b,{key:0})):(h(),S(M,{key:1}))]),_:1},8,["title","onClick"])),w(F,{class:T({disabled:!c(ss)}),title:"Go to previous slide",onClick:c(ue)},{default:$(()=>[w(O)]),_:1},8,["class","onClick"]),w(F,{class:T({disabled:!c(ns)}),title:"Go to next slide",onClick:c(ce)},{default:$(()=>[w(_)]),_:1},8,["class","onClick"]),c(Z)?x("v-if",!0):(h(),S(F,{key:1,title:"Show slide overview",onClick:y[0]||(y[0]=_e=>c(mt)())},{default:$(()=>[w(A)]),_:1})),c(os)?x("v-if",!0):(h(),S(F,{key:2,title:c(tt)?"Switch to light mode theme":"Switch to dark mode theme",onClick:y[1]||(y[1]=_e=>c(vt)())},{default:$(()=>[c(tt)?(h(),S(K,{key:0})):(h(),S(X,{key:1}))]),_:1},8,["title"])),w(ye),c(Z)?x("v-if",!0):(h(),v(B,{key:3},[!c(q)&&!c(t)&&f.value?(h(),v(B,{key:0},[w(c(f)),w(ye)],64)):x("v-if",!0),c(q)?(h(),S(F,{key:1,title:c(ge)?"Hide presenter cursor":"Show presenter cursor",onClick:y[2]||(y[2]=_e=>ge.value=!c(ge))},{default:$(()=>[c(ge)?(h(),S(L,{key:0})):(h(),S(z,{key:1}))]),_:1},8,["title"])):x("v-if",!0)],64)),(!c(we).drawings.presenterOnly||c(q))&&!c(Z)?(h(),v(B,{key:4},[w(F,{class:"relative",title:c(ee)?"Hide drawing toolbar":"Show drawing toolbar",onClick:y[3]||(y[3]=_e=>ee.value=!c(ee))},{default:$(()=>[w(H),c(ee)?(h(),v("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:fe({background:c(Xt).color})},null,4)):x("v-if",!0)]),_:1},8,["title"]),w(ye)],64)):x("v-if",!0),c(Z)?x("v-if",!0):(h(),v(B,{key:5},[c(q)?(h(),S(oe,{key:0,to:l.value,class:"slidev-icon-btn",title:"Play Mode"},{default:$(()=>[w(pe)]),_:1},8,["to"])):x("v-if",!0),c(rs)?(h(),S(oe,{key:1,to:a.value,class:"slidev-icon-btn",title:"Presenter Mode"},{default:$(()=>[w(J)]),_:1},8,["to"])):x("v-if",!0),x("v-if",!0),c(q)?(h(),S(F,{key:3,title:"Toggle Presenter Layout",class:"aspect-ratio-initial",onClick:c(vs)},{default:$(()=>[w(Je),je(" "+U(c(ps)),1)]),_:1},8,["onClick"])):x("v-if",!0)],64)),(h(),v(B,{key:6},[c(we).download?(h(),S(F,{key:0,title:"Download as PDF",onClick:c(_s)},{default:$(()=>[w(P)]),_:1},8,["onClick"])):x("v-if",!0)],64)),!c(q)&&c(we).info&&!c(Z)?(h(),S(F,{key:7,title:"Show info",onClick:y[5]||(y[5]=_e=>ot.value=!c(ot))},{default:$(()=>[w(re)]),_:1})):x("v-if",!0),!c(q)&&!c(Z)?(h(),S(sn,{key:8},{button:$(()=>[w(F,{title:"Adjust settings"},{default:$(()=>[w(ve)]),_:1})]),menu:$(()=>[w(qs)]),_:1})):x("v-if",!0),c(Z)?x("v-if",!0):(h(),S(ye,{key:9})),E("div",un,[E("div",dn,[je(U(c(be))+" ",1),E("span",hn,"/ "+U(c(is)),1)])]),w(c(cn))],34)],512)}}}),Wo=G(fn,[["__file","/home/jonte/apps/settling-for-performance/node_modules/.pnpm/@slidev+client@0.48.0-beta.24_postcss@8.4.35_vite@5.1.5/node_modules/@slidev/client/internals/NavControls.vue"]]),pn=["onClick"],vn={class:"text-green font-bold"},_n={class:"opacity-50"},mn={key:1,class:"opacity-50"},gn={key:0,class:"fixed top-4 right-4 text-gray-400 flex flex-col items-center gap-2"},Oe=4*16*2,rt=2*16,yn=W({__name:"QuickOverview",props:{modelValue:{type:Boolean,required:!0}},emits:["update:modelValue"],setup(s,{emit:e}){const o=Ue(s,"modelValue",e);function r(){o.value=!1}function i(g){$e(g),r()}function a(g){return g===R.value}const l=Be.smaller("xs"),d=Be.smaller("sm"),u=C(()=>l.value?Te.width.value-Oe:d.value?(Te.width.value-Oe-rt)/2:300),p=C(()=>Math.floor((Te.width.value-Oe)/(u.value+rt))),f=N("");return Wt("keypress",g=>{if(!V.value){f.value="";return}if(g.key==="Enter"){g.preventDefault(),f.value?(i(+f.value),f.value=""):i(R.value);return}const k=Number.parseInt(g.key.replace(/[^0-9]/g,""));if(Number.isNaN(k)){f.value="";return}if(!f.value&&k===0)return;if(f.value+=String(k),+f.value>=ne.value.length){f.value="";return}const y=ne.value.findIndex(b=>`/${b.no}`===f.value);y!==-1&&(R.value=y+1),+f.value*10>ne.value.length&&(i(+f.value),f.value="")}),dt(()=>{R.value=be.value,Ye.value=p.value}),(g,k)=>{const y=Os;return h(),v(B,null,[w(zt,{"enter-active-class":"duration-150 ease-out","enter-from-class":"opacity-0 scale-102 !backdrop-blur-0px","leave-active-class":"duration-200 ease-in","leave-to-class":"opacity-0 scale-102 !backdrop-blur-0px",persisted:""},{default:$(()=>[ft(E("div",{class:"bg-main !bg-opacity-75 p-16 py-20 overflow-y-auto backdrop-blur-5px fixed left-0 right-0 top-0 h-[calc(var(--vh,1vh)*100)]",onClick:k[0]||(k[0]=b=>r())},[E("div",{class:"grid gap-y-4 gap-x-8 w-full",style:fe(`grid-template-columns: repeat(auto-fit,minmax(${u.value}px,1fr))`)},[(h(!0),v(B,null,Ee(c(ne),(b,M)=>(h(),v("div",{key:b.no,class:"relative"},[E("div",{class:T(["inline-block border rounded overflow-hidden bg-main hover:border-primary transition",a(M+1)||c(R)===M+1?"border-primary":"border-main"]),onClick:O=>i(b.no)},[(h(),S(Ws,{key:b.no,width:u.value,"clicks-disabled":!0,class:"pointer-events-none"},{default:$(()=>[b!=null&&b.component?(h(),S(kt,{key:0,is:b.component,"clicks-context":c(as)(b,c(ls)),class:T(c(wt)(b)),route:b,"render-context":"overview"},null,8,["is","clicks-context","class","route"])):x("v-if",!0),w(Jt,{page:b.no},null,8,["page"])]),_:2},1032,["width"]))],10,pn),E("div",{class:"absolute top-0",style:fe(`left: ${u.value+5}px`)},[f.value&&String(M+1).startsWith(f.value)?(h(),v(B,{key:0},[E("span",vn,U(f.value),1),E("span",_n,U(String(M+1).slice(f.value.length)),1)],64)):(h(),v("span",mn,U(M+1),1))],4)]))),128))],4)],512),[[pt,c(o)]])]),_:1}),c(o)?(h(),v("div",gn,[w(F,{title:"Close",class:"text-2xl",onClick:r},{default:$(()=>[w(y)]),_:1}),x("v-if",!0)])):x("v-if",!0)],64)}}}),zo=G(yn,[["__file","/home/jonte/apps/settling-for-performance/node_modules/.pnpm/@slidev+client@0.48.0-beta.24_postcss@8.4.35_vite@5.1.5/node_modules/@slidev/client/internals/QuickOverview.vue"]]);function Y(s){return Array.isArray?Array.isArray(s):$t(s)==="[object Array]"}const kn=1/0;function wn(s){if(typeof s=="string")return s;let e=s+"";return e=="0"&&1/s==-kn?"-0":e}function bn(s){return s==null?"":wn(s)}function Q(s){return typeof s=="string"}function St(s){return typeof s=="number"}function xn(s){return s===!0||s===!1||Sn(s)&&$t(s)=="[object Boolean]"}function Mt(s){return typeof s=="object"}function Sn(s){return Mt(s)&&s!==null}function D(s){return s!=null}function Pe(s){return!s.trim().length}function $t(s){return s==null?s===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(s)}const Mn="Incorrect 'index' type",$n=s=>`Invalid value for key ${s}`,Cn=s=>`Pattern length exceeds max of ${s}.`,En=s=>`Missing ${s} property in key`,In=s=>`Property 'weight' in key '${s}' must be a positive integer`,it=Object.prototype.hasOwnProperty;class An{constructor(e){this._keys=[],this._keyMap={};let t=0;e.forEach(n=>{let o=Ct(n);this._keys.push(o),this._keyMap[o.id]=o,t+=o.weight}),this._keys.forEach(n=>{n.weight/=t})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function Ct(s){let e=null,t=null,n=null,o=1,r=null;if(Q(s)||Y(s))n=s,e=at(s),t=Ge(s);else{if(!it.call(s,"name"))throw new Error(En("name"));const i=s.name;if(n=i,it.call(s,"weight")&&(o=s.weight,o<=0))throw new Error(In(i));e=at(i),t=Ge(i),r=s.getFn}return{path:e,id:t,weight:o,src:n,getFn:r}}function at(s){return Y(s)?s:s.split(".")}function Ge(s){return Y(s)?s.join("."):s}function Rn(s,e){let t=[],n=!1;const o=(r,i,a)=>{if(D(r))if(!i[a])t.push(r);else{let l=i[a];const d=r[l];if(!D(d))return;if(a===i.length-1&&(Q(d)||St(d)||xn(d)))t.push(bn(d));else if(Y(d)){n=!0;for(let u=0,p=d.length;u<p;u+=1)o(d[u],i,a+1)}else i.length&&o(d,i,a+1)}};return o(s,Q(e)?e.split("."):e,0),n?t:t[0]}const Ln={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},Nn={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(s,e)=>s.score===e.score?s.idx<e.idx?-1:1:s.score<e.score?-1:1},Tn={location:0,threshold:.6,distance:100},On={useExtendedSearch:!1,getFn:Rn,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var m={...Nn,...Ln,...Tn,...On};const Pn=/[^ ]+/g;function jn(s=1,e=3){const t=new Map,n=Math.pow(10,e);return{get(o){const r=o.match(Pn).length;if(t.has(r))return t.get(r);const i=1/Math.pow(r,.5*s),a=parseFloat(Math.round(i*n)/n);return t.set(r,a),a},clear(){t.clear()}}}class Xe{constructor({getFn:e=m.getFn,fieldNormWeight:t=m.fieldNormWeight}={}){this.norm=jn(t,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((t,n)=>{this._keysMap[t.id]=n})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,Q(this.docs[0])?this.docs.forEach((e,t)=>{this._addString(e,t)}):this.docs.forEach((e,t)=>{this._addObject(e,t)}),this.norm.clear())}add(e){const t=this.size();Q(e)?this._addString(e,t):this._addObject(e,t)}removeAt(e){this.records.splice(e,1);for(let t=e,n=this.size();t<n;t+=1)this.records[t].i-=1}getValueForItemAtKeyId(e,t){return e[this._keysMap[t]]}size(){return this.records.length}_addString(e,t){if(!D(e)||Pe(e))return;let n={v:e,i:t,n:this.norm.get(e)};this.records.push(n)}_addObject(e,t){let n={i:t,$:{}};this.keys.forEach((o,r)=>{let i=o.getFn?o.getFn(e):this.getFn(e,o.path);if(D(i)){if(Y(i)){let a=[];const l=[{nestedArrIndex:-1,value:i}];for(;l.length;){const{nestedArrIndex:d,value:u}=l.pop();if(D(u))if(Q(u)&&!Pe(u)){let p={v:u,i:d,n:this.norm.get(u)};a.push(p)}else Y(u)&&u.forEach((p,f)=>{l.push({nestedArrIndex:f,value:p})})}n.$[r]=a}else if(Q(i)&&!Pe(i)){let a={v:i,n:this.norm.get(i)};n.$[r]=a}}}),this.records.push(n)}toJSON(){return{keys:this.keys,records:this.records}}}function Et(s,e,{getFn:t=m.getFn,fieldNormWeight:n=m.fieldNormWeight}={}){const o=new Xe({getFn:t,fieldNormWeight:n});return o.setKeys(s.map(Ct)),o.setSources(e),o.create(),o}function Dn(s,{getFn:e=m.getFn,fieldNormWeight:t=m.fieldNormWeight}={}){const{keys:n,records:o}=s,r=new Xe({getFn:e,fieldNormWeight:t});return r.setKeys(n),r.setIndexRecords(o),r}function ke(s,{errors:e=0,currentLocation:t=0,expectedLocation:n=0,distance:o=m.distance,ignoreLocation:r=m.ignoreLocation}={}){const i=e/s.length;if(r)return i;const a=Math.abs(n-t);return o?i+a/o:a?1:i}function Vn(s=[],e=m.minMatchCharLength){let t=[],n=-1,o=-1,r=0;for(let i=s.length;r<i;r+=1){let a=s[r];a&&n===-1?n=r:!a&&n!==-1&&(o=r-1,o-n+1>=e&&t.push([n,o]),n=-1)}return s[r-1]&&r-n>=e&&t.push([n,r-1]),t}const se=32;function Fn(s,e,t,{location:n=m.location,distance:o=m.distance,threshold:r=m.threshold,findAllMatches:i=m.findAllMatches,minMatchCharLength:a=m.minMatchCharLength,includeMatches:l=m.includeMatches,ignoreLocation:d=m.ignoreLocation}={}){if(e.length>se)throw new Error(Cn(se));const u=e.length,p=s.length,f=Math.max(0,Math.min(n,p));let g=r,k=f;const y=a>1||l,b=y?Array(p):[];let M;for(;(M=s.indexOf(e,k))>-1;){let L=ke(e,{currentLocation:M,expectedLocation:f,distance:o,ignoreLocation:d});if(g=Math.min(L,g),k=M+u,y){let z=0;for(;z<u;)b[M+z]=1,z+=1}}k=-1;let O=[],_=1,A=u+p;const K=1<<u-1;for(let L=0;L<u;L+=1){let z=0,H=A;for(;z<H;)ke(e,{errors:L,currentLocation:f+H,expectedLocation:f,distance:o,ignoreLocation:d})<=g?z=H:A=H,H=Math.floor((A-z)/2+z);A=H;let pe=Math.max(1,f-H+1),oe=i?p:Math.min(f+H,p)+u,J=Array(oe+2);J[oe+1]=(1<<L)-1;for(let P=oe;P>=pe;P-=1){let re=P-1,ve=t[s.charAt(re)];if(y&&(b[re]=+!!ve),J[P]=(J[P+1]<<1|1)&ve,L&&(J[P]|=(O[P+1]|O[P])<<1|1|O[P+1]),J[P]&K&&(_=ke(e,{errors:L,currentLocation:re,expectedLocation:f,distance:o,ignoreLocation:d}),_<=g)){if(g=_,k=re,k<=f)break;pe=Math.max(1,2*f-k)}}if(ke(e,{errors:L+1,currentLocation:f,expectedLocation:f,distance:o,ignoreLocation:d})>g)break;O=J}const X={isMatch:k>=0,score:Math.max(.001,_)};if(y){const L=Vn(b,a);L.length?l&&(X.indices=L):X.isMatch=!1}return X}function Bn(s){let e={};for(let t=0,n=s.length;t<n;t+=1){const o=s.charAt(t);e[o]=(e[o]||0)|1<<n-t-1}return e}class It{constructor(e,{location:t=m.location,threshold:n=m.threshold,distance:o=m.distance,includeMatches:r=m.includeMatches,findAllMatches:i=m.findAllMatches,minMatchCharLength:a=m.minMatchCharLength,isCaseSensitive:l=m.isCaseSensitive,ignoreLocation:d=m.ignoreLocation}={}){if(this.options={location:t,threshold:n,distance:o,includeMatches:r,findAllMatches:i,minMatchCharLength:a,isCaseSensitive:l,ignoreLocation:d},this.pattern=l?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const u=(f,g)=>{this.chunks.push({pattern:f,alphabet:Bn(f),startIndex:g})},p=this.pattern.length;if(p>se){let f=0;const g=p%se,k=p-g;for(;f<k;)u(this.pattern.substr(f,se),f),f+=se;if(g){const y=p-se;u(this.pattern.substr(y),y)}}else u(this.pattern,0)}searchIn(e){const{isCaseSensitive:t,includeMatches:n}=this.options;if(t||(e=e.toLowerCase()),this.pattern===e){let k={isMatch:!0,score:0};return n&&(k.indices=[[0,e.length-1]]),k}const{location:o,distance:r,threshold:i,findAllMatches:a,minMatchCharLength:l,ignoreLocation:d}=this.options;let u=[],p=0,f=!1;this.chunks.forEach(({pattern:k,alphabet:y,startIndex:b})=>{const{isMatch:M,score:O,indices:_}=Fn(e,k,y,{location:o+b,distance:r,threshold:i,findAllMatches:a,minMatchCharLength:l,includeMatches:n,ignoreLocation:d});M&&(f=!0),p+=O,M&&_&&(u=[...u,..._])});let g={isMatch:f,score:f?p/this.chunks.length:1};return f&&n&&(g.indices=u),g}}class te{constructor(e){this.pattern=e}static isMultiMatch(e){return lt(e,this.multiRegex)}static isSingleMatch(e){return lt(e,this.singleRegex)}search(){}}function lt(s,e){const t=s.match(e);return t?t[1]:null}class Gn extends te{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const t=e===this.pattern;return{isMatch:t,score:t?0:1,indices:[0,this.pattern.length-1]}}}class Kn extends te{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const n=e.indexOf(this.pattern)===-1;return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class Wn extends te{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const t=e.startsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,this.pattern.length-1]}}}class zn extends te{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const t=!e.startsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,e.length-1]}}}class Hn extends te{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const t=e.endsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class Qn extends te{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const t=!e.endsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,e.length-1]}}}class At extends te{constructor(e,{location:t=m.location,threshold:n=m.threshold,distance:o=m.distance,includeMatches:r=m.includeMatches,findAllMatches:i=m.findAllMatches,minMatchCharLength:a=m.minMatchCharLength,isCaseSensitive:l=m.isCaseSensitive,ignoreLocation:d=m.ignoreLocation}={}){super(e),this._bitapSearch=new It(e,{location:t,threshold:n,distance:o,includeMatches:r,findAllMatches:i,minMatchCharLength:a,isCaseSensitive:l,ignoreLocation:d})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class Rt extends te{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let t=0,n;const o=[],r=this.pattern.length;for(;(n=e.indexOf(this.pattern,t))>-1;)t=n+r,o.push([n,t-1]);const i=!!o.length;return{isMatch:i,score:i?0:1,indices:o}}}const Ke=[Gn,Rt,Wn,zn,Qn,Hn,Kn,At],ct=Ke.length,Un=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,Yn="|";function Xn(s,e={}){return s.split(Yn).map(t=>{let n=t.trim().split(Un).filter(r=>r&&!!r.trim()),o=[];for(let r=0,i=n.length;r<i;r+=1){const a=n[r];let l=!1,d=-1;for(;!l&&++d<ct;){const u=Ke[d];let p=u.isMultiMatch(a);p&&(o.push(new u(p,e)),l=!0)}if(!l)for(d=-1;++d<ct;){const u=Ke[d];let p=u.isSingleMatch(a);if(p){o.push(new u(p,e));break}}}return o})}const Jn=new Set([At.type,Rt.type]);class Zn{constructor(e,{isCaseSensitive:t=m.isCaseSensitive,includeMatches:n=m.includeMatches,minMatchCharLength:o=m.minMatchCharLength,ignoreLocation:r=m.ignoreLocation,findAllMatches:i=m.findAllMatches,location:a=m.location,threshold:l=m.threshold,distance:d=m.distance}={}){this.query=null,this.options={isCaseSensitive:t,includeMatches:n,minMatchCharLength:o,findAllMatches:i,ignoreLocation:r,location:a,threshold:l,distance:d},this.pattern=t?e:e.toLowerCase(),this.query=Xn(this.pattern,this.options)}static condition(e,t){return t.useExtendedSearch}searchIn(e){const t=this.query;if(!t)return{isMatch:!1,score:1};const{includeMatches:n,isCaseSensitive:o}=this.options;e=o?e:e.toLowerCase();let r=0,i=[],a=0;for(let l=0,d=t.length;l<d;l+=1){const u=t[l];i.length=0,r=0;for(let p=0,f=u.length;p<f;p+=1){const g=u[p],{isMatch:k,indices:y,score:b}=g.search(e);if(k){if(r+=1,a+=b,n){const M=g.constructor.type;Jn.has(M)?i=[...i,...y]:i.push(y)}}else{a=0,r=0,i.length=0;break}}if(r){let p={isMatch:!0,score:a/r};return n&&(p.indices=i),p}}return{isMatch:!1,score:1}}}const We=[];function qn(...s){We.push(...s)}function ze(s,e){for(let t=0,n=We.length;t<n;t+=1){let o=We[t];if(o.condition(s,e))return new o(s,e)}return new It(s,e)}const Ce={AND:"$and",OR:"$or"},He={PATH:"$path",PATTERN:"$val"},Qe=s=>!!(s[Ce.AND]||s[Ce.OR]),eo=s=>!!s[He.PATH],to=s=>!Y(s)&&Mt(s)&&!Qe(s),ut=s=>({[Ce.AND]:Object.keys(s).map(e=>({[e]:s[e]}))});function Lt(s,e,{auto:t=!0}={}){const n=o=>{let r=Object.keys(o);const i=eo(o);if(!i&&r.length>1&&!Qe(o))return n(ut(o));if(to(o)){const l=i?o[He.PATH]:r[0],d=i?o[He.PATTERN]:o[l];if(!Q(d))throw new Error($n(l));const u={keyId:Ge(l),pattern:d};return t&&(u.searcher=ze(d,e)),u}let a={children:[],operator:r[0]};return r.forEach(l=>{const d=o[l];Y(d)&&d.forEach(u=>{a.children.push(n(u))})}),a};return Qe(s)||(s=ut(s)),n(s)}function so(s,{ignoreFieldNorm:e=m.ignoreFieldNorm}){s.forEach(t=>{let n=1;t.matches.forEach(({key:o,norm:r,score:i})=>{const a=o?o.weight:null;n*=Math.pow(i===0&&a?Number.EPSILON:i,(a||1)*(e?1:r))}),t.score=n})}function no(s,e){const t=s.matches;e.matches=[],D(t)&&t.forEach(n=>{if(!D(n.indices)||!n.indices.length)return;const{indices:o,value:r}=n;let i={indices:o,value:r};n.key&&(i.key=n.key.src),n.idx>-1&&(i.refIndex=n.idx),e.matches.push(i)})}function oo(s,e){e.score=s.score}function ro(s,e,{includeMatches:t=m.includeMatches,includeScore:n=m.includeScore}={}){const o=[];return t&&o.push(no),n&&o.push(oo),s.map(r=>{const{idx:i}=r,a={item:e[i],refIndex:i};return o.length&&o.forEach(l=>{l(r,a)}),a})}class le{constructor(e,t={},n){this.options={...m,...t},this.options.useExtendedSearch,this._keyStore=new An(this.options.keys),this.setCollection(e,n)}setCollection(e,t){if(this._docs=e,t&&!(t instanceof Xe))throw new Error(Mn);this._myIndex=t||Et(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){D(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const t=[];for(let n=0,o=this._docs.length;n<o;n+=1){const r=this._docs[n];e(r,n)&&(this.removeAt(n),n-=1,o-=1,t.push(r))}return t}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:t=-1}={}){const{includeMatches:n,includeScore:o,shouldSort:r,sortFn:i,ignoreFieldNorm:a}=this.options;let l=Q(e)?Q(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return so(l,{ignoreFieldNorm:a}),r&&l.sort(i),St(t)&&t>-1&&(l=l.slice(0,t)),ro(l,this._docs,{includeMatches:n,includeScore:o})}_searchStringList(e){const t=ze(e,this.options),{records:n}=this._myIndex,o=[];return n.forEach(({v:r,i,n:a})=>{if(!D(r))return;const{isMatch:l,score:d,indices:u}=t.searchIn(r);l&&o.push({item:r,idx:i,matches:[{score:d,value:r,norm:a,indices:u}]})}),o}_searchLogical(e){const t=Lt(e,this.options),n=(a,l,d)=>{if(!a.children){const{keyId:p,searcher:f}=a,g=this._findMatches({key:this._keyStore.get(p),value:this._myIndex.getValueForItemAtKeyId(l,p),searcher:f});return g&&g.length?[{idx:d,item:l,matches:g}]:[]}const u=[];for(let p=0,f=a.children.length;p<f;p+=1){const g=a.children[p],k=n(g,l,d);if(k.length)u.push(...k);else if(a.operator===Ce.AND)return[]}return u},o=this._myIndex.records,r={},i=[];return o.forEach(({$:a,i:l})=>{if(D(a)){let d=n(t,a,l);d.length&&(r[l]||(r[l]={idx:l,item:a,matches:[]},i.push(r[l])),d.forEach(({matches:u})=>{r[l].matches.push(...u)}))}}),i}_searchObjectList(e){const t=ze(e,this.options),{keys:n,records:o}=this._myIndex,r=[];return o.forEach(({$:i,i:a})=>{if(!D(i))return;let l=[];n.forEach((d,u)=>{l.push(...this._findMatches({key:d,value:i[u],searcher:t}))}),l.length&&r.push({idx:a,item:i,matches:l})}),r}_findMatches({key:e,value:t,searcher:n}){if(!D(t))return[];let o=[];if(Y(t))t.forEach(({v:r,i,n:a})=>{if(!D(r))return;const{isMatch:l,score:d,indices:u}=n.searchIn(r);l&&o.push({score:d,key:e,value:r,idx:i,norm:a,indices:u})});else{const{v:r,n:i}=t,{isMatch:a,score:l,indices:d}=n.searchIn(r);a&&o.push({score:l,key:e,value:r,norm:i,indices:d})}return o}}le.version="7.0.0";le.createIndex=Et;le.parseIndex=Dn;le.config=m;le.parseQuery=Lt;qn(Zn);const io={key:0},ao={key:1},lo=E("code",null,"whoami",-1),co=[lo],uo={key:2},ho={key:3},fo={key:4},po={key:5},vo={key:6},_o={key:7},mo={key:8},go={key:9},yo={key:10},ko={key:11},wo={key:12},bo={key:13},xo={key:14},So={key:15},Mo=W({__name:"titles",props:{no:{type:[Number,String],required:!0}},setup(s){return(e,t)=>(h(),v("div",null,[+e.no==1?(h(),v("p",io,"Att nöja sig med prestandan")):+e.no==2?(h(),v("p",ao,[...co])):+e.no==3?(h(),v("p",uo,"Varför spelar prestanda roll?")):+e.no==4?(h(),v("p",ho,"Vad kan vi göra?")):+e.no==5?(h(),v("p",fo,"Caching")):+e.no==6?(h(),v("p",po,"Prefetching")):+e.no==7?(h(),v("p",vo,"Optimistic UI")):+e.no==8?(h(),v("p",_o,"Streaming/SSE")):+e.no==9?(h(),v("p",mo,"När kan det bli för mycket?")):+e.no==10?(h(),v("p",go,"Nu låtsas vi")):+e.no==11?(h(),v("p",yo,"Lätt att optimera för tidigt")):+e.no==12?(h(),v("p",ko,"Okonventionella idéer")):+e.no==13?(h(),v("p",wo,"Case study: Enstate")):+e.no==14?(h(),v("p",bo,"undefined")):+e.no==15?(h(),v("p",xo,"Vad ska vi göra?")):+e.no==16?(h(),v("p",So,"Tack för mig!")):x("v-if",!0)]))}}),$o=G(Mo,[["__file","/@slidev/titles.md"]]),Co={class:"bg-main transform",shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:main"},Eo=["value","disabled"],Io=["border","onClick"],Ao={"w-4":"","text-right":"",op50:"","text-sm":""},Ro=W({__name:"Goto",setup(s){const e=N(),t=N(),n=N(),o=N(),r=N(""),i=N(0);function a(_){return _!=null}const l=C(()=>new le(ne.value.map(_=>{var A;return(A=_.meta)==null?void 0:A.slide}).filter(a),{keys:["no","title"],threshold:.3,shouldSort:!0,minMatchCharLength:1})),d=C(()=>r.value.startsWith("/")?r.value.substring(1):r.value),u=C(()=>l.value.search(d.value).map(_=>_.item)),p=C(()=>!!u.value.length);function f(){if(p.value){const _=u.value.at(i.value||0);_&&$e(_.no)}g()}function g(){r.value="",ae.value=!1}function k(_){_.preventDefault(),i.value++,i.value>=u.value.length&&(i.value=0),b()}function y(_){_.preventDefault(),i.value--,i.value<=-2&&(i.value=u.value.length-1),b()}function b(){var A;const _=(A=o.value)==null?void 0:A[i.value];_&&n.value&&(_.offsetTop+_.offsetHeight>n.value.offsetHeight+n.value.scrollTop?n.value.scrollTo({behavior:"smooth",top:_.offsetTop+_.offsetHeight-n.value.offsetHeight+1}):_.offsetTop<n.value.scrollTop&&n.value.scrollTo({behavior:"smooth",top:_.offsetTop}))}function M(_){i.value=0,r.value=_.target.value}function O(_){$e(_),g()}return Me(ae,async _=>{var A;_?(r.value="",i.value=0,setTimeout(()=>{var K;return(K=t.value)==null?void 0:K.focus()},0)):(A=t.value)==null||A.blur()}),Me(de,()=>{var _;(_=e.value)!=null&&_.contains(de.value)||g()}),(_,A)=>(h(),v("div",{id:"slidev-goto-dialog",ref_key:"container",ref:e,class:T(["fixed right-5 transition-all",c(ae)?"top-5":"-top-20"]),"w-90":"","max-w-90":"","min-w-90":""},[E("div",Co,[E("input",{id:"slidev-goto-input",ref_key:"input",ref:t,value:r.value,type:"text",disabled:!c(ae),class:T(["outline-none bg-transparent",{"text-red-400":!p.value&&r.value}]),placeholder:"Goto...",onKeydown:[me(f,["enter"]),me(g,["escape"]),me(k,["down"]),me(y,["up"])],onInput:M},null,42,Eo)]),u.value.length>0?(h(),v("ul",{key:0,ref_key:"list",ref:n,class:"autocomplete-list",shadow:"~",border:"~ transparent rounded dark:main"},[(h(!0),v(B,null,Ee(u.value,(K,X)=>(h(),v("li",{ref_for:!0,ref_key:"items",ref:o,key:K.id,role:"button",tabindex:"0",p:"x-4 y-2","cursor-pointer":"",hover:"op100",flex:"~ gap-2","w-90":"","items-center":"",border:X===0?"":"t main",class:T(i.value===X?"bg-active op100":"op80"),onClick:Ht(L=>O(K.no),["stop","prevent"])},[E("div",Ao,U(K.no),1),w(c($o),{no:K.no},null,8,["no"])],10,Io))),128))],512)):x("v-if",!0)],2))}}),Ho=G(Ro,[["__scopeId","data-v-43b4aab4"],["__file","/home/jonte/apps/settling-for-performance/node_modules/.pnpm/@slidev+client@0.48.0-beta.24_postcss@8.4.35_vite@5.1.5/node_modules/@slidev/client/internals/Goto.vue"]]);function Lo(){const s=Qt(),e=N(!1);let t,n;const o=typeof document<"u"&&"startViewTransition"in document;return s.beforeResolve((r,i)=>{var y,b,M,O;const a=(y=st(i.params.no))==null?void 0:y.meta,l=(b=st(r.params.no))==null?void 0:b.meta,d=(M=a==null?void 0:a.slide)==null?void 0:M.no,u=(O=l==null?void 0:l.slide)==null?void 0:O.no;if(!(d!==void 0&&u!==void 0&&((a==null?void 0:a.transition)==="view-transition"&&d<u||(l==null?void 0:l.transition)==="view-transition"&&u<d))){e.value=!1;return}if(!o){e.value=!1,console.warn("View transition is not supported in your browser, fallback to normal transition.");return}e.value=!0;const p=new Promise((_,A)=>{t=_,n=A});let f;const g=new Promise(_=>f=_);return document.startViewTransition(()=>(f(),p)).finished.then(()=>{n=void 0,t=void 0}),g}),o&&s.afterEach(()=>{t==null||t(),n==null||n()}),e}const No={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},To=W({__name:"PresenterMouse",setup(s){return(e,t)=>{const n=bt;return c(Re).cursor?(h(),v("div",No,[w(n,{class:"absolute",style:fe({left:`${c(Re).cursor.x}%`,top:`${c(Re).cursor.y}%`})},null,8,["style"])])):x("v-if",!0)}}}),Oo=G(To,[["__file","/home/jonte/apps/settling-for-performance/node_modules/.pnpm/@slidev+client@0.48.0-beta.24_postcss@8.4.35_vite@5.1.5/node_modules/@slidev/client/internals/PresenterMouse.vue"]]),Po=W({__name:"SlidesShow",props:{renderContext:{type:String,required:!0}},setup(s){Me(ie,()=>{var r,i;(r=ie.value)!=null&&r.meta&&ie.value.meta.preload!==!1&&(ie.value.meta.__preloaded=!0),(i=Le.value)!=null&&i.meta&&Le.value.meta.preload!==!1&&(Le.value.meta.__preloaded=!0)},{immediate:!0});const e=Lo(),t=De();_t(()=>import("./DrawingLayer-DYEot8EX.js"),__vite__mapDeps([11,2,5,6,3,4,7,8,9,12])).then(r=>t.value=r.default);const n=C(()=>ne.value.filter(r=>{var i;return((i=r.meta)==null?void 0:i.__preloaded)||r===ie.value}));function o(){nt.value=!0}return(r,i)=>(h(),v(B,null,[x(" Global Bottom "),w(c(ms)),x(" Slides "),(h(),S(ht(c(e)?"div":Yt),Ut(c(nt)?{}:c(us),{id:"slideshow",tag:"div",onAfterLeave:o}),{default:$(()=>[(h(!0),v(B,null,Ee(n.value,a=>ft((h(),v("div",{key:a.no},[w(kt,{is:a.component,"clicks-context":c(cs)(a),class:T([c(wt)(a),"overflow-hidden"]),route:a,"render-context":r.renderContext},null,8,["is","clicks-context","class","route","render-context"])])),[[pt,a===c(ie)]])),128))]),_:1},16)),x(" Global Top "),w(c(gs)),t.value?(h(),S(c(t),{key:0})):x("v-if",!0),c(q)?x("v-if",!0):(h(),S(Oo,{key:1}))],64))}}),Qo=G(Po,[["__scopeId","data-v-8bb7261e"],["__file","/home/jonte/apps/settling-for-performance/node_modules/.pnpm/@slidev+client@0.48.0-beta.24_postcss@8.4.35_vite@5.1.5/node_modules/@slidev/client/internals/SlidesShow.vue"]]);export{Ho as G,F as I,Wo as N,zo as Q,Ws as S,ye as V,Qo as a,Ko as r,Go as u};