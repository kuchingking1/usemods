import O from"./DocsAside.8f977d8a.js";import R from"./ProseCodeInline.b5a2a230.js";import U from"./Alert.cb008ce9.js";import W from"./DocsPageBottom.5b140fd1.js";import Y from"./DocsPrevNext.478945fb.js";import{d as q,W as G,a9 as Q,s as X,J as m,r as V,m as Z,o as ee,ac as oe,b as u,Y as A,w as h,K as t,c as g,g as r,f as y,e as p,$ as te,E as x,t as ne,F as se,n as k,a8 as ae,ad as ce,p as le,i as re,k as _e}from"./entry.76004c01.js";import ie from"./DocsToc.c8e75ae7.js";import"./slot.0b198c4e.js";import"./node.305c80d0.js";import"./ProseA.bcec48ad.js";import"./EditOnLink.vue.bd4f68a6.js";import"./DocsTocLinks.b3cab9d8.js";const ue=d=>(le("data-v-73d798d2"),d=d(),re(),d),pe={class:"page-body"},de={key:1,class:"toc"},me={class:"toc-wrapper"},fe=ue(()=>p("span",{class:"title"},"Table of Contents",-1)),ve=q({__name:"DocsPageLayout",setup(d){const{page:s}=G(),{config:f,tree:T}=Q(),E=X(),F=(e,o=!0)=>{var n;return typeof((n=s.value)==null?void 0:n[e])<"u"?s.value[e]:o},P=m(()=>{var e,o,n;return!s.value||((n=(o=(e=s.value)==null?void 0:e.body)==null?void 0:o.children)==null?void 0:n.length)>0}),S=m(()=>{var e,o,n,c,l;return((e=s.value)==null?void 0:e.toc)!==!1&&((l=(c=(n=(o=s.value)==null?void 0:o.body)==null?void 0:n.toc)==null?void 0:c.links)==null?void 0:l.length)>=2}),b=m(()=>{var e,o,n,c,l;return((e=s.value)==null?void 0:e.aside)!==!1&&(((o=T.value)==null?void 0:o.length)>1||((l=(c=(n=T.value)==null?void 0:n[0])==null?void 0:c.children)==null?void 0:l.length))}),H=m(()=>F("bottom",!0)),_=V(!1),a=V(null),v=()=>E.path.split("/").slice(0,2).join("/"),i=Z("asideScroll",()=>{var e;return{parentPath:v(),scrollTop:((e=a.value)==null?void 0:e.scrollTop)||0}});function C(){a.value&&(a.value.scrollHeight===0&&setTimeout(C,0),a.value.scrollTop=i.value.scrollTop)}return ee(()=>{i.value.parentPath!==v()?(i.value.parentPath=v(),i.value.scrollTop=0):C()}),oe(()=>{a.value&&(i.value.scrollTop=a.value.scrollTop)}),(e,o)=>{var D,w,B,N,$,I;const n=O,c=R,l=U,L=W,M=Y,j=ae,z=ie,J=ce;return u(),A(J,{fluid:(w=(D=t(f))==null?void 0:D.main)==null?void 0:w.fluid,padded:(N=(B=t(f))==null?void 0:B.main)==null?void 0:N.padded,class:k(["docs-page-content",{fluid:(I=($=t(f))==null?void 0:$.main)==null?void 0:I.fluid,"has-toc":t(S),"has-aside":t(b)}])},{default:h(()=>[t(b)?(u(),g("aside",{key:0,ref_key:"asideNav",ref:a,class:"aside-nav"},[r(n,{class:"app-aside"})],512)):y("",!0),p("article",pe,[t(P)?te(e.$slots,"default",{key:0},void 0,!0):(u(),A(l,{key:1,type:"info"},{default:h(()=>[x(" Start writing in "),r(c,null,{default:h(()=>[x("content/"+ne(t(s)._file),1)]),_:1}),x(" to see this page taking shape. ")]),_:1})),t(P)&&t(s)&&t(H)?(u(),g(se,{key:2},[r(L),r(M)],64)):y("",!0)]),t(S)?(u(),g("div",de,[p("div",me,[p("button",{onClick:o[0]||(o[0]=K=>_.value=!t(_))},[fe,r(j,{name:"heroicons-outline:chevron-right",class:k(["icon",[t(_)&&"rotate"]])},null,8,["class"])]),p("div",{class:k(["docs-toc-wrapper",[t(_)&&"opened"]])},[r(z,{onMove:o[1]||(o[1]=K=>_.value=!1)})],2)])])):y("",!0)]),_:3},8,["fluid","padded","class"])}}});const Be=_e(ve,[["__scopeId","data-v-73d798d2"]]);export{Be as default};
