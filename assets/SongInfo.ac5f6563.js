import{_ as a,u as s,s as l}from"./index.219b9bf5.js";import{a as e,s as r,q as c,r as o,w as t,b as i,o as n,c as d,f as u,e as p,u as v,g as m,t as g,F as f,h,E as b,l as x}from"./vendor.b4a3d6d4.js";const y={class:"song-info"},_={class:"left"},w={class:"title"},S={class:"author"},j={class:"desc"};var I=a(e({setup(a){const e=s(),{lyric:I,curSongPicUrl:U}=r(e);e.isGlobalShow=!1;const k=c(),q=o(!1);let D=o();(async()=>{q.value=!0;const a={ids:k.params.id};try{const s=await l.getSongDetail(a);200===s.code?D.value=s.songs[0]:b.error(s.message)}finally{q.value=!1}})();const{curSongId:E}=r(e);return t(E,(()=>{E.value,Number(k.params.id)})),(a,s)=>{var l,e,r,c,o;const t=i("el-skeleton-item"),b=i("el-image"),U=i("el-scrollbar");return n(),d("div",y,[u("div",_,[p(b,{src:null==(l=v(D))?void 0:l.al.picUrl},{placeholder:m((()=>[p(t,{variant:"image",style:{width:"200px",height:"200px"}})])),_:1},8,["src"]),u("p",w,g(null==(e=v(D))?void 0:e.name),1),u("p",S,g(null==(c=null==(r=v(D))?void 0:r.ar[0])?void 0:c.name),1),u("p",j,[(n(!0),d(f,null,h(null==(o=v(D))?void 0:o.alia,(a=>(n(),d(f,null,[x(g(a),1)],64)))),256))])]),p(U,{class:"lyric",height:"calc(100vh - 60px - 120px - 80px)"},{default:m((()=>[(n(!0),d(f,null,h(v(I),(a=>(n(),d("p",null,g(a.lyric.replace(/\[.*\]/,"")),1)))),256))])),_:1})])}}}),[["__scopeId","data-v-2cbfeddc"]]);export{I as default};