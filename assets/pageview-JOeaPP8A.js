import{_ as t}from"./app-wrwucbpn.js";var a={provider:"Waline",dark:'html[data-theme="dark"]',serverURL:"https://blog-api-dribble-njr.vercel.app/"};const n=async()=>{try{const{pageviewCount:e}=await t(()=>import("./app-wrwucbpn.js").then(r=>r.W),__vite__mapDeps([]));return e({serverURL:a.serverURL})}catch{console.error("@waline/client is not installed!");return}};export{n as updatePageview};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
