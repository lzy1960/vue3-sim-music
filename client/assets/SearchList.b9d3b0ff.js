import{a as s,s as a,m as e,r as l,z as n,q as i,b as o,M as t,o as c,c as r,C as d,i as u,g,F as m,h as y,e as v,N as f,t as p,n as k,u as h,f as _,O as I,E as C}from"./vendor.70dc73e6.js";import{_ as w,u as z,s as P}from"./index.5e9e3882.js";const S={class:"search-list"},b={class:"search-item"},j={class:"desc"},q=f("VIP"),x={class:"author"};var E=w(s({setup(s){const w=z();w.isGlobalShow=!1;const{curSongId:E,isPlaying:F}=a(w),G=e(),M=l(!1),N=l([]);n((()=>{(async()=>{M.value=!0;const s={keywords:G.query.keywords};try{const a=await P.searchSong(s);200===a.code?N.value=a.result.songs:C.error(a.message)}finally{M.value=!1}})()}));const O=i();return(s,a)=>{const e=o("el-link"),l=o("el-button"),n=o("el-tag"),i=o("el-empty"),C=o("el-card"),z=t("loading");return c(),r("div",S,[d((c(),u(C,null,{default:g((()=>[N.value.length?(c(!0),r(m,{key:0},y(N.value,(s=>(c(),r("div",b,[v(e,{class:k(["name",{playing:s.id===h(E)}]),onClick:a=>{return e=s.id,void O.push({name:"songInfo",params:{id:e}});var e}},{default:g((()=>[f(p(s.name),1)])),_:2},1032,["class","onClick"]),v(l,{onClick:a=>(s=>{s.id!==E.value?w.setSongId(s.id):w.setIsPlaying(!w.isPlaying)})(s),size:"small",type:"primary"},{icon:g((()=>[_("i",{class:k(["iconfont",s.id===h(E)&&h(F)?"icon-24gf-pause2":"icon-24gf-play"])},null,2)])),default:g((()=>[f(p(1===s.fee?"试听":s.id===h(E)&&h(F)?"暂停":"播放")+" ",1)])),_:2},1032,["onClick"]),_("div",j,[1===s.fee?(c(),u(n,{key:0,size:"small",class:"vip"},{default:g((()=>[q])),_:1})):I("",!0),_("span",x,p(s.artists[0].name),1)])])))),256)):(c(),u(i,{key:1,"image-size":200}))])),_:1})),[[z,M.value]])])}}}),[["__scopeId","data-v-c393ae0c"]]);export{E as default};
