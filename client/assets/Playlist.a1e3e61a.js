import{a,s,m as e,r as l,q as i,b as n,M as t,C as c,o as r,c as o,f as d,e as u,g as v,E as g,t as m,F as p,h as y,N as f,n as k,u as h,i as I,O as _}from"./vendor.70dc73e6.js";import{_ as C,u as P,s as b}from"./index.e6affcc5.js";const j={class:"play-list"},z={class:"left"},S={class:"title"},w={class:"desc"},x={key:0,class:"search-list"},N={class:"search-item"},q={class:"desc"},D=f("VIP"),E={class:"author"};var F=C(a({setup(a){const C=P(),{curSongId:F,isPlaying:M}=s(C),O=e(),U=l(!1),V=l(null),A=l([]),B=l([]);(async a=>{U.value=!0;const s={id:a},e=await b.getPlaylist(s);200===e.code?(V.value=e.playlist,B.value=e.playlist.trackIds.map((a=>a.id)),G()):g.error(e.message)})(Number(O.params.id));const G=async()=>{const a={ids:B.value.join(",")};try{const s=await b.getSongDetail(a);200===s.code?A.value=s.songs:g.error(s.message)}finally{U.value=!1}},H=i();return(a,s)=>{var e;const l=n("el-image"),i=n("el-link"),g=n("el-button"),P=n("el-tag"),b=n("el-empty"),O=n("el-card"),B=t("loading");return c((r(),o("div",j,[d("div",z,[u(l,{src:null==(e=V.value)?void 0:e.coverImgUrl},null,8,["src"])]),u(O,{class:"right"},{header:v((()=>{var a,s;return[d("div",S,m(null==(a=V.value)?void 0:a.name),1),d("div",w,m(null==(s=V.value)?void 0:s.description),1)]})),default:v((()=>[A.value.length?(r(),o("div",x,[A.value.length?(r(!0),o(p,{key:0},y(A.value,(a=>(r(),o("div",N,[u(i,{class:k(["name",{playing:a.id===h(F)}]),onClick:s=>{return e=a.id,void H.push({name:"songInfo",params:{id:e}});var e}},{default:v((()=>[f(m(a.name),1)])),_:2},1032,["class","onClick"]),u(g,{onClick:s=>(a=>{a.id!==F.value?C.setSongId(a.id):C.setIsPlaying(!C.isPlaying)})(a),size:"small",type:"primary"},{icon:v((()=>[d("i",{class:k(["iconfont",a.id===h(F)&&h(M)?"icon-24gf-pause2":"icon-24gf-play"])},null,2)])),default:v((()=>[f(m(1===a.fee?"试听":a.id===h(F)&&h(M)?"暂停":"播放")+" ",1)])),_:2},1032,["onClick"]),d("div",q,[1===a.fee?(r(),I(P,{key:0,size:"small",class:"vip"},{default:v((()=>[D])),_:1})):_("",!0),d("span",E,m(a.ar[0].name),1)])])))),256)):_("",!0)])):(r(),I(b,{key:1,"image-size":200}))])),_:1})])),[[B,U.value]])}}}),[["__scopeId","data-v-220c6a13"]]);export{F as default};