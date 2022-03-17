import{d as e,a as t,r as l,s as a,w as s,b as n,o as r,c as o,e as i,u as c,f as u,t as d,g as p,F as v,h as g,n as m,i as h,p as y,j as f,k as S,l as I,m as _,q as b,v as k,x as P,y as w,E as T,z as C,A as L,B as x,C as U,D as V,G as E,T as A,H as D,I as j,J as q,K as N,L as O}from"./vendor.b4a3d6d4.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const l of e)if("childList"===l.type)for(const e of l.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const M=e("main",{state:()=>({isGlobalShow:!1,isPlaying:!1,isLogin:!1,curSongId:0,curSongTitle:"",curSongAuthor:"",curSongUrl:"",curSongPicUrl:"",changeTime:0,curTime:0,totalTime:0,volume:.1,muted:!1,lyric:[{lyric:"",time:"",duration:0}],rotateAngle:0,playlist:[],curPlaylistIndex:0}),getters:{},actions:{setSongId(e){this.curSongId=e},setIsPlaying(e){this.isPlaying=e},setChangeTime(e){this.changeTime=e},setTotalTime(e){this.totalTime=e},setCurTime(e){this.curTime=e},setSongUrl(e){this.curSongUrl=e},setVolume(e){this.volume=e},setLyric(e){this.lyric=e},setMuted(e){this.muted=e},setPlaylist(e){~this.playlist.findIndex((t=>t.id===e.id))||(this.curPlaylistIndex=this.playlist.length,this.playlist.push(e))},previousSong(){this.curPlaylistIndex--,this.setSongId(this.playlist[this.curPlaylistIndex].id)},nextSong(){this.curPlaylistIndex++,this.setSongId(this.playlist[this.curPlaylistIndex].id)}}});function R(e){let t=parseInt(e),l=0,a=0;t>60&&(l=parseInt((t/60).toString()),t=parseInt((t%60).toString()),l>60&&(a=parseInt((l/60).toString()),l=60));let s="";return s=parseInt(t.toString())<10?"0:0"+parseInt(t.toString()):"0:"+parseInt(t.toString()),l>0&&(s=parseInt(t.toString())<10?"0"+parseInt(t.toString()):parseInt(t.toString()).toString(),s=parseInt(l.toString())+":"+s),a>0&&(s=parseInt(t.toString())<10?"0"+parseInt(t.toString()):parseInt(t.toString()).toString(),s=parseInt(a.toString())+":"+parseInt(l.toString())+":"+s),s}var $=(e,t)=>{const l=e.__vccOpts||e;for(const[a,s]of t)l[a]=s;return l};const G={class:"progress"};var K=$(t({setup(e){const t=M(),c=l("00:00"),u=l("00:00"),{curTime:d,totalTime:p}=a(t),v=l(0);s(d,(()=>{c.value=R(d.value+""),u.value=R(p.value+""),v.value=d.value/p.value*100}));const g=()=>{t.setChangeTime(p.value*(.01*v.value))},m=e=>R(p.value*(.01*e)+"");return(e,t)=>{const l=n("el-slider");return r(),o("div",G,[i(l,{modelValue:v.value,"onUpdate:modelValue":t[0]||(t[0]=e=>v.value=e),onChange:g,"format-tooltip":m},null,8,["modelValue"])])}}}),[["__scopeId","data-v-dd282e38"]]);const z={class:"current-play"},H={class:"right"},B={class:"title"},F={class:"author"};var J=$(t({setup(e){const t=M(),{curSongPicUrl:l,curSongTitle:s,curSongAuthor:p}=a(t);return(e,t)=>{const a=n("el-image");return r(),o("div",z,[i(a,{src:c(l)},null,8,["src"]),u("div",H,[u("div",B,d(c(s)),1),u("div",F,d(c(p)),1)])])}}}),[["__scopeId","data-v-93dfd6fe"]]);const W={class:"global-playlist"},Q={key:0},X=["onClick"],Y={class:"title"},Z={class:"author"},ee=(e=>(y("data-v-c439c642"),e=e(),f(),e))((()=>u("i",{class:"iconfont icon-24gf-playlistMusic2"},null,-1)));var te=$(t({setup(e){const t=M(),{playlist:l,curSongId:s}=a(t);return(e,a)=>{const y=n("el-empty"),f=n("el-button"),S=n("el-popover");return r(),o("div",W,[i(S,{placement:"top",width:200,trigger:"click",teleported:!1},{reference:p((()=>[i(f,{type:"text"},{icon:p((()=>[ee])),_:1})])),default:p((()=>[c(l).length?(r(),o("div",Q,[(r(!0),o(v,null,g(c(l),(e=>(r(),o("div",{class:m(["playlist-item",{playing:c(s)===e.id}]),onClick:l=>c(t).setSongId(e.id)},[u("div",Y,d(e.name),1),u("div",Z,d(e.author),1)],10,X)))),256))])):(r(),h(y,{key:1}))])),_:1})])}}}),[["__scopeId","data-v-c439c642"]]);const le=e=>(y("data-v-df9b2406"),e=e(),f(),e),ae={class:"bottom-toolbox"},se={class:"wrapper"},ne={class:"center-control"},re={class:"time-progress"},oe=le((()=>u("span",{class:"iconfont icon-24gf-previous"},null,-1))),ie=le((()=>u("span",{class:"iconfont icon-24gf-next"},null,-1))),ce={class:"volume"};var ue=$(t({setup(e){const t=M(),{curTime:s,totalTime:v,volume:g,isGlobalShow:h,isPlaying:y,muted:f,curPlaylistIndex:_,playlist:b}=a(t),k=S((()=>R(s.value+""))),P=S((()=>R(v.value+""))),w=()=>{h.value=!h.value},T=()=>{y.value=!y.value},C=l(0);C.value=100*g.value;const L=()=>{t.setVolume(C.value/100)};return(e,l)=>{const a=n("el-button"),s=n("el-link"),v=n("el-slider");return r(),o("div",ae,[i(K),u("div",se,[i(J),u("div",ne,[u("div",re,d(c(k))+" / "+d(c(P)),1),i(a,{type:"text",onClick:c(t).previousSong,disabled:!c(_)},{icon:p((()=>[oe])),_:1},8,["onClick","disabled"]),i(a,{class:"play-button",type:"primary",circle:"",onClick:T},{icon:p((()=>[u("span",{class:m(["iconfont",c(t).isPlaying?"icon-24gf-pause2":"icon-24gf-play"])},null,2)])),_:1}),i(a,{type:"text",onClick:c(t).nextSong,disabled:c(_)>=c(b).length-1},{icon:p((()=>[ie])),_:1},8,["onClick","disabled"]),i(s,{onClick:w},{default:p((()=>[I(d(c(h)?"收起":"展开"),1)])),_:1})]),u("div",ce,[u("i",{class:m(["iconfont",C.value&&!c(f)?"icon-24gf-volumeMiddle":"icon-24gf-volumeDisable"]),onClick:l[0]||(l[0]=e=>c(t).setMuted(!c(f)))},null,2),i(v,{modelValue:C.value,"onUpdate:modelValue":l[1]||(l[1]=e=>C.value=e),onInput:L},null,8,["modelValue"])]),i(te)])])}}}),[["__scopeId","data-v-df9b2406"]]);const de=_.create({baseURL:"https://netease-cloud-music-api-dun-nu.vercel.app",timeout:2e4});de.interceptors.request.use((e=>{const t=localStorage.getItem("token");return t&&(e.headers.token=t),e}),(e=>Promise.reject(e))),de.interceptors.response.use((e=>(e.data.code,e)),(e=>Promise.reject(e)));const pe=async e=>{const{data:t}=await de.request(e);return t};var ve={getTopPlaylist:e=>pe({url:"/top/playlist",method:"get",params:e}),searchSong:e=>pe({url:"/search",method:"get",params:e}),getSearchDefault:e=>pe({url:"/search/default",method:"get",params:e}),searchSuggest:e=>pe({url:"/search/suggest",method:"get",params:e}),searchUrl:e=>pe({url:"/song/url",method:"get",params:e}),getSongDetail:e=>pe({url:"/song/detail",method:"get",params:e}),getLyric:e=>pe({url:"/lyric",method:"get",params:e}),getPlaylist:e=>pe({url:"/playlist/detail",method:"get",params:e})};const ge={class:"search"},me=["onClick"];var he=$(t({setup(e){var t,s;const v=b(),g=l(""),m=l(""),h=l("");g.value=(null==(s=null==(t=v.query)?void 0:t.keywords)?void 0:s.toString())||"";const y=k();(async()=>{const e=await ve.getSearchDefault({});200===e.code?(m.value=e.data.showKeyword,h.value=e.data.realkeyword):T.error(e.message)})();const f=async(e,t)=>{if(!e)return void t([]);const l={keywords:e},a=await ve.searchSuggest(l);200===a.code?t(a.result.songs):T.error(a.message)},S=M(),{isGlobalShow:I}=a(S),_=e=>{I.value=!1,e?(g.value||(g.value=e),y.push({name:"searchList",query:{keywords:e}})):T.warning("无搜索内容")};return(e,t)=>{const l=n("el-autocomplete"),a=n("el-col"),s=n("el-button"),v=n("el-row");return r(),o("div",ge,[i(v,null,{default:p((()=>[i(a,{span:22},{default:p((()=>[i(l,{modelValue:g.value,"onUpdate:modelValue":t[0]||(t[0]=e=>g.value=e),placeholder:m.value,"fetch-suggestions":f,onKeyup:t[1]||(t[1]=P((e=>_(g.value||h.value)),["enter"]))},{default:p((({item:e})=>[u("div",{onClick:t=>{var l;(l=e.id)?y.push({name:"songInfo",params:{id:l}}):T.warning("无内容")}},d(e.name),9,me)])),_:1},8,["modelValue","placeholder"])])),_:1}),i(a,{span:2},{default:p((()=>[i(s,{icon:c(w),circle:"",onClick:t[2]||(t[2]=e=>_(g.value||h.value))},null,8,["icon"])])),_:1})])),_:1})])}}}),[["__scopeId","data-v-37b581d3"]]);const ye=I("这是头部"),fe=t({setup(e){const t=M(),l=()=>{},a=()=>{},s=k(),o=()=>{s.push({name:"home"})};return(e,s)=>{const d=n("el-button"),v=n("el-col"),g=n("el-avatar"),m=n("el-dropdown-item"),y=n("el-dropdown-menu"),f=n("el-dropdown"),S=n("el-header");return r(),h(S,null,{default:p((()=>[i(v,{span:8},{default:p((()=>[i(d,{onClick:o,type:"text",style:{color:"#fff"}},{default:p((()=>[ye])),_:1})])),_:1}),i(v,{span:8},{default:p((()=>[i(he)])),_:1}),i(v,{style:{"text-align":"right"},span:8},{default:p((()=>[c(t).isLogin?(r(),h(f,{key:1},{dropdown:p((()=>[i(y,null,{default:p((()=>[i(m,null,{default:p((()=>[u("span",{onClick:a},"退出登录")])),_:1})])),_:1})])),default:p((()=>[i(g,{size:40,src:"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"})])),_:1})):(r(),h(g,{key:0,onClick:l,size:40,src:"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"}))])),_:1})])),_:1})}}});const Se={class:"lyric-area"};var Ie=$(t({setup(e){const t=M(),{curSongId:n,curTime:i,isPlaying:p}=a(t);let h=l([]);const y=l(),f=l();C((()=>{var e;null==(e=f.value)||e.scrollIntoView()}));const S=async e=>{const l={id:e},a=await ve.getLyric(l);200===a.code?(h.value=a.lrc.lyric.split("\n").filter((e=>e)).map((e=>{const t=e.match(/^\[(.*)\:(.*)\.(.*)\]/);return{lyric:e.replace(/\[.*\]/,""),time:e.match(/\[(.*)\]/)&&e.match(/\[(.*)\]/)[1]||"",duration:t?60*Number(t[1])+1*Number(t[2])+.001*Number(t[3]):0}})),t.setLyric(h.value)):T.error(a.message)},I=l(0);s(i,(()=>{I.value=h.value.filter((e=>e.duration<i.value)).length-1})),s(p,(()=>{var e;p.value&&(null==(e=f.value)||e.scrollIntoView({block:"center",behavior:"smooth"}))})),L((()=>{var e;null==(e=f.value)||e.scrollIntoView({block:"center",behavior:"smooth"})})),C((()=>{var e;null==(e=y.value)||e.addEventListener})),n.value&&S(n.value);return s(n,(()=>{S(n.value)})),(e,t)=>(r(),o("div",Se,[u("div",{ref_key:"lyricRef",ref:y,class:"lyric"},[(r(!0),o(v,null,g(c(h),((e,t)=>(r(),o("p",{ref_for:!0,ref:e=>{I.value===t&&(f.value=e)},class:m({current:I.value===t})},d(e.lyric.replace(/\[.*\]/,"")),3)))),256))],512)]))}}),[["__scopeId","data-v-153e7d5d"]]);const _e={class:"sim-audio"},be=["src"],ke=t({setup(e){const t=M(),{curSongId:n,curSongTitle:i,curSongAuthor:d,curSongUrl:p,isPlaying:v,changeTime:g,volume:m,muted:h,curSongPicUrl:y,curPlaylistIndex:f,playlist:S}=a(t),I=l();s(v,(()=>{x((()=>{v.value?I.value.play():I.value.pause()}))})),s(h,(()=>{I.value.muted=h.value})),s(m,(()=>(t.setMuted(!1),I.value.volume=m.value))),C((()=>{I.value.volume=m.value})),s(g,(()=>{I.value.currentTime=g.value})),L((()=>{})),s(n,(async()=>{localStorage.setItem("curSongId",n.value+"");const e=await b(n.value);if(e)t.setSongUrl(e);else{const e=`https://music.163.com/song/media/outer/url?id=${n.value}.mp3`;t.setSongUrl(e)}_()}));const _=async()=>{const e={ids:n.value},t=await ve.getSongDetail(e);if(200===t.code){const e=t.songs[0];k(e)}else T.error(t.message)},b=async e=>{var t;const l={id:n.value},a=await ve.searchUrl(l);if(200===a.code)return(null==(t=a.data[0])?void 0:t.url)||"";T.error(a.message)},k=async e=>{i.value=e.name,d.value=e.ar[0].name,y.value=e.al.picUrl,t.setPlaylist({id:n.value,name:i.value,author:d.value}),t.setIsPlaying(!1),x((()=>{t.setIsPlaying(!0)}))};t.setSongId(Number(localStorage.getItem("curSongId")));const P=()=>{t.setIsPlaying(!1)},w=()=>{t.setTotalTime(I.value.duration)},U=()=>{},V=()=>{t.setCurTime(I.value.currentTime)};return(e,t)=>(r(),o("div",_e,[u("audio",{ref:e=>{I.value=e},src:c(p),onCanplay:w,onEnded:U,onTimeupdate:V,onEmptied:P},null,40,be)]))}});const Pe={class:"global-player"},we={class:"info"},Te={class:"left"},Ce={class:"circle"},Le={class:"song-info"},xe={class:"title"},Ue={class:"author"},Ve={class:"right"};var Ee=$(t({setup(e){const t=M(),{curSongTitle:l,curSongAuthor:s,curSongPicUrl:p}=a(t);return(e,t)=>{const a=n("el-image");return r(),o("div",Pe,[u("div",{class:"background",style:U({backgroundImage:`url(${c(p)})`})},null,4),i(ke),u("div",we,[u("div",Te,[u("div",Ce,[i(a,{src:c(p)},null,8,["src"])]),u("div",Le,[u("p",xe,d(c(l)),1),u("p",Ue,d(c(s)),1)])]),u("div",Ve,[i(Ie)])])])}}}),[["__scopeId","data-v-f79cc9a6"]]);var Ae=$(t({setup(e){const t=M();return(e,l)=>{const a=n("router-view"),s=n("el-main"),u=n("el-footer"),d=n("el-container");return r(),o(v,null,[i(d,null,{default:p((()=>[i(fe),i(s,null,{default:p((()=>[i(a)])),_:1}),i(u,null,{default:p((()=>[i(ue)])),_:1})])),_:1}),i(A,{name:"move"},{default:p((()=>[V(i(Ee,null,null,512),[[E,c(t).isGlobalShow]])])),_:1})],64)}}}),[["__scopeId","data-v-1dc5e242"]]);const De={},je=function(e,t){return t&&0!==t.length?Promise.all(t.map((e=>{if((e=`/${e}`)in De)return;De[e]=!0;const t=e.endsWith(".css"),l=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${l}`))return;const a=document.createElement("link");return a.rel=t?"stylesheet":"modulepreload",t||(a.as="script",a.crossOrigin=""),a.href=e,document.head.appendChild(a),t?new Promise(((t,l)=>{a.addEventListener("load",t),a.addEventListener("error",(()=>l(new Error(`Unable to preload CSS for ${e}`))))})):void 0}))).then((()=>e())):e()},qe=[{name:"home",path:"/",component:()=>je((()=>import("./Home.d42c80f3.js")),["assets/Home.d42c80f3.js","assets/Home.711b6d18.css","assets/vendor.b4a3d6d4.js"])},{name:"searchList",path:"/searchList",component:()=>je((()=>import("./SearchList.60fbd9ce.js")),["assets/SearchList.60fbd9ce.js","assets/SearchList.8ae46d57.css","assets/vendor.b4a3d6d4.js"])},{name:"songInfo",path:"/songInfo/:id",component:()=>je((()=>import("./SongInfo.599abd88.js")),["assets/SongInfo.599abd88.js","assets/SongInfo.888fbf59.css","assets/vendor.b4a3d6d4.js"])},{name:"playlist",path:"/playlist/:id",component:()=>je((()=>import("./Playlist.1541d27c.js")),["assets/Playlist.1541d27c.js","assets/Playlist.27d6f0bc.css","assets/vendor.b4a3d6d4.js"])}],Ne=D({history:j(),routes:qe});q(Ae).use(N).use(O()).use(Ne).mount("#app");export{$ as _,ve as s,M as u};