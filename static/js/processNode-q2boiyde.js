import{b as r,c}from"./vue-flow-core-DrHcYq0O.js";import{d as h,W as s,f as a,k as i,b as d,w as b,j as o,u,t as v,s as k,_ as m}from"./index-WlA0U7AG.js";const C={key:0},S={key:2,class:"spinner"},x={key:3},P=h({__name:"processNode",props:{data:{type:Object,required:!0},sourcePosition:{type:String},targetPosition:{type:String}},setup(e){const t=e,l=r({type:"target"}),f=r({type:"source"}),n=s(()=>l.value.length<=0),p=s(()=>f.value.length<=0),g=s(()=>n.value?"#2563eb":t.data.hasError?"#f87171":t.data.isFinished?"#42B983":t.data.isCancelled?"#fbbf24":"#4b5563"),y=s(()=>t.data.hasError?"❌":t.data.isSkipped?"🚧":t.data.isCancelled?"🚫":n.value?"📦":t.data.isFinished?"😎":"🏠");return(R,B)=>(a(),i("div",{class:"process-node",style:k({backgroundColor:g.value,boxShadow:e.data.isRunning?"0 0 10px rgba(0, 0, 0, 0.5)":""})},[n.value?o("",!0):(a(),d(u(c),{key:0,type:"target",position:e.targetPosition},{default:b(()=>[!e.data.isRunning&&!e.data.isFinished&&!e.data.isCancelled&&!e.data.isSkipped&&!e.data.hasError?(a(),i("span",C,"📥 ")):o("",!0)]),_:1},8,["position"])),p.value?o("",!0):(a(),d(u(c),{key:1,type:"source",position:e.sourcePosition},null,8,["position"])),!n.value&&e.data.isRunning?(a(),i("div",S)):(a(),i("span",x,v(y.value),1))],4))}}),F=m(P,[["__scopeId","data-v-ba26eccc"]]);export{F as default};
