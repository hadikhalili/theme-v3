function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./tA5Uwtla.js","./IEdULTv5.js","./entry.CA_08kxR.css","./swiper-vue.CJDJU8ss.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{aw as f,aB as y,ae as x,a6 as C,d as g,r as i,aC as A,c as s,e as k,i as a,O as o,A as p,U as v,g as w,w as L,a5 as B,I as z,aD as O,ai as P,ac as V}from"./IEdULTv5.js";const u=()=>f("apex-loaded",()=>!1),b=y({suspensible:!1,loader:()=>x(()=>import("./tA5Uwtla.js"),__vite__mapDeps([0,1,2,3]),import.meta.url).then(e=>(C(()=>{u().value=!0}),e.default))});function D(){const e=u();return{LazyApexCharts:b,isLoaded:e}}const S=g({__name:"AddonApexcharts",props:{type:{},height:{},width:{},series:{},options:{}},setup(e){const _=e,{LazyApexCharts:d,isLoaded:r}=D(),l=i(null),n=i(!1),{stop:h}=A(l,([{isIntersecting:t}])=>{t&&(n.value=t,h())});return(t,E)=>{const c=P,m=V;return s(),k("div",{ref_key:"target",ref:l},[!a(r)&&!a(n)?(s(),o(c,{key:0,class:"m-4 w-[calc(100%-32px)]",style:p({height:`${t.height-32}px`})},null,8,["style"])):v("",!0),w(m,null,{default:L(()=>[a(n)?B((s(),o(a(d),z({key:0},_,{dir:"ltr"}),null,16)),[[O,a(r)]]):(s(),o(c,{key:1,class:"m-4 w-[calc(100%-32px)]",style:p({height:`${t.height-32}px`})},null,8,["style"]))]),_:1})],512)}}});export{S as _};
