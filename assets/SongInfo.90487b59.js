import{_ as E,u as L,s as V}from"./index.c08688aa.js";import{a as q,s as S,q as F,r as b,w as R,b as _,o as t,c as o,f as l,e as u,u as a,g as w,t as r,F as p,h as I,E as T,l as U}from"./vendor.b4a3d6d4.js";const G={class:"song-info"},M={class:"left"},P={class:"title"},j={class:"author"},z={class:"desc"},A=q({setup(H){const c=L(),{lyric:k,curSongPicUrl:J}=S(c);c.isGlobalShow=!1;const d=F(),g=b(!1);let e=b();(async()=>{g.value=!0;const n={ids:d.params.id};try{const s=await V.getSongDetail(n);s.code===200?(console.log(s),e.value=s.songs[0]):T.error(s.message)}finally{g.value=!1}})();const D=n=>n.replace(/\[.*\]/,""),{curSongId:f}=S(c);return R(f,()=>{f.value,Number(d.params.id)}),(n,s)=>{var m,h,v,y,x;const N=_("el-skeleton-item"),B=_("el-image"),C=_("el-scrollbar");return t(),o("div",G,[l("div",M,[u(B,{src:(m=a(e))==null?void 0:m.al.picUrl},{placeholder:w(()=>[u(N,{variant:"image",style:{width:"200px",height:"200px"}})]),_:1},8,["src"]),l("p",P,r((h=a(e))==null?void 0:h.name),1),l("p",j,r((y=(v=a(e))==null?void 0:v.ar[0])==null?void 0:y.name),1),l("p",z,[(t(!0),o(p,null,I((x=a(e))==null?void 0:x.alia,i=>(t(),o(p,null,[U(r(i),1)],64))),256))])]),u(C,{class:"lyric",height:"calc(100vh - 60px - 120px - 80px)"},{default:w(()=>[(t(!0),o(p,null,I(a(k),i=>(t(),o("p",null,r(D(i.lyric)),1))),256))]),_:1})])}}});var W=E(A,[["__scopeId","data-v-2cbfeddc"]]);export{W as default};