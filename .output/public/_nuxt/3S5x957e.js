function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./DrmoXtMs.js","./IEdULTv5.js","./entry.CA_08kxR.css","./swiper-vue.CJDJU8ss.css","./F6Cw1Rnw.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{af as p,bF as m,c4 as o,aF as i,c5 as c,c6 as g,ae as f,c7 as h,bM as v}from"./IEdULTv5.js";const w=async a=>{const{content:e}=p().public;typeof a?.params!="function"&&(a=m(a));const t=a.params(),s=e.experimental.stripQueryParameters?o(`/navigation/${`${i(t)}.${e.integrity}`}/${c(t)}.json`):o(`/navigation/${i(t)}.${e.integrity}.json`);if(g())return(await f(()=>import("./DrmoXtMs.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url).then(r=>r.generateNavigation))(t);const n=await $fetch(s,{method:"GET",responseType:"json",params:e.experimental.stripQueryParameters?void 0:{_params:h(t),previewToken:v().getPreviewToken()}});if(typeof n=="string"&&n.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return n};export{w as f};
