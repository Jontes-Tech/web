import{ax as n,ar as r,t as m,W as u,ay as j}from"../modules/vue-6QpwdnMK.js";import{h as v,i as $,T as p,Q as x,R as C,a9 as l,P as R,aa as T,ab as S}from"../index-DobqPNfj.js";function k(){const t=n($),a=r(t,"nav"),s=n(p).value,e=r(s,"current"),i=n(x),c=n(C),o=n(l,{}),d=n(R,void 0),f=n(v,m(1));return{$slidev:t,$nav:a,$clicksContext:s,$clicks:e,$page:i,$route:d,$renderContext:c,$frontmatter:o,$scale:f}}function b(t){var i,c;u(l,t);const{$slidev:a,$page:s}=k(),e=a.nav.slides.find(o=>o.no===s.value);if((c=(i=e==null?void 0:e.meta)==null?void 0:i.slide)!=null&&c.frontmatter){for(const o of Object.keys(e.meta.slide.frontmatter))o in t||delete e.meta.slide.frontmatter[o];Object.assign(e.meta.slide.frontmatter,t)}}function g(t,a){return{...j(t,a===0?T:S),frontmatter:t}}export{g as f,b as p,k as u};
