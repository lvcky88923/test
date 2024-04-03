import{i as w,a as A,_ as j}from"./_plugin-vue_export-helper-BM9DdGT0.js";import{d as S,r as D,U as N,f as o,k as $,g as y,u as h,b as m,$ as B,X as n,a8 as p,aH as q,j as c,F as P,h as k,t as F,q as H,v as I,l as J,aI as M,w as d,aJ as f,a as L,n as T,e as V,A as X,i as v,B as K}from"./index-WlA0U7AG.js";const O={class:"plus-check-card__avatar-wrapper"},Q={class:"plus-check-card__right-content"},R={key:0,class:"plus-check-card__title"},W={class:"plus-check-card__title-left"},Y=["onClick"],Z={key:1,class:"plus-check-card__description"};var x=S({name:"PlusCheckCard",__name:"index",props:{modelValue:{type:Boolean,default:!1},size:{default:"default"},avatar:{type:[String,Function],default:void 0},avatarProps:{default:()=>({})},title:{type:[String,Function],default:void 0},description:{type:[String,Function],default:void 0},disabled:{type:Boolean,default:!1},extra:{type:Function,default:void 0}},emits:["update:modelValue","change","extra"],setup(z,{emit:l}){const t=z,r={large:"plus-check-card--large",default:"plus-check-card--default",small:"plus-check-card--small"},u=D({checked:!1});N(()=>{u.checked=t.modelValue});const g=()=>t.size?r[t.size]:"plus-check-card--default",b=()=>{t.disabled||(u.checked=!u.checked,l("update:modelValue",u.checked),l("change",u.checked))},a=()=>{t.disabled||l("extra")};return(e,s)=>(o(),$("div",{class:I(["plus-check-card",[g(),u.checked?"plus-check-card--checked":"",e.disabled?"plus-check-card--disabled":""]]),onClick:b},[y("div",O,[h(w)(e.avatar)?(o(),m(B(e.avatar),{key:0,avatar:e.avatar,title:e.title,description:e.description},null,8,["avatar","title","description"])):e.$slots.avatar?n(e.$slots,"avatar",{key:1,avatar:e.avatar,title:e.title,description:e.description}):h(A)(e.avatar)?(o(),m(h(q),p({key:2,src:e.avatar},e.avatarProps),null,16,["src"])):c("v-if",!0)]),y("div",Q,[e.title||e.$slots.title?(o(),$("div",R,[y("div",W,[h(w)(e.title)?(o(),m(B(e.title),{key:0,avatar:e.avatar,title:e.title,description:e.description},null,8,["avatar","title","description"])):e.$slots.title?n(e.$slots,"title",{key:1,title:e.title,avatar:e.avatar,description:e.description}):(o(),$(P,{key:2},[k(F(e.title),1)],64))]),y("div",{class:"plus-check-card__title-right",onClick:H(a,["stop"])},[h(w)(e.extra)?(o(),m(B(e.extra),{key:0,avatar:e.avatar,title:e.title,description:e.description},null,8,["avatar","title","description"])):e.$slots.extra?n(e.$slots,"extra",{key:1,title:e.title,avatar:e.avatar,description:e.description}):c("v-if",!0)],8,Y)])):c("v-if",!0),e.description||e.$slots.description?(o(),$("div",Z,[h(w)(e.description)?(o(),m(B(e.description),{key:0,title:e.title,avatar:e.avatar,description:e.description},null,8,["title","avatar","description"])):e.$slots.description?n(e.$slots,"description",{key:1,title:e.title,description:e.description,avatar:e.avatar}):(o(),$(P,{key:2},[k(F(e.description),1)],64))])):c("v-if",!0)])],2))}}),ee=j(x,[["__file","index.vue"]]);const ae=ee,se={class:"plus-check-card-group"};var te=S({name:"PlusCheckCardGroup",__name:"index",props:{modelValue:{default:()=>[]},options:{default:()=>[]},size:{default:void 0},disabled:{type:Boolean,default:!1},multiple:{type:Boolean,default:!1}},emits:["update:modelValue","change","extra"],setup(z,{emit:l}){const t=z,r=D({checkList:[],checked:""});N(()=>{t.multiple?r.checkList=t.modelValue:r.checked=t.modelValue});const u=a=>t.multiple?r.checkList.includes(a):r.checked===a,g=(a,e)=>{if(t.multiple)a?r.checkList.push(e):r.checkList=r.checkList.filter(s=>s!==e),l("update:modelValue",r.checkList),l("change",r.checkList);else{const s=a?e:"";l("update:modelValue",s),l("change",s)}},b=a=>{t.disabled||l("extra",a)};return(a,e)=>(o(),$("div",se,[(o(!0),$(P,null,J(a.options,(s,E)=>(o(),m(h(ae),p({key:s.value||E,size:a.size,disabled:a.disabled},s,{"model-value":u(s.value),onChange:i=>g(i,s.value),onExtra:i=>b(s)}),M({_:2},[a.$slots["avatar-"+s.value]||a.$slots.avatar?{name:"avatar",fn:d(i=>[a.$slots["avatar-"+s.value]?n(a.$slots,"avatar-"+s.value,f(p({key:0},i))):c("v-if",!0),a.$slots.avatar?n(a.$slots,"avatar",f(p({key:1},i))):c("v-if",!0)]),key:"0"}:void 0,a.$slots["title-"+s.value]||a.$slots.title?{name:"title",fn:d(i=>[a.$slots["title-"+s.value]?n(a.$slots,"title-"+s.value,f(p({key:0},i))):c("v-if",!0),a.$slots.title?n(a.$slots,"title",f(p({key:1},i))):c("v-if",!0)]),key:"1"}:void 0,a.$slots["description-"+s.value]||a.$slots.description?{name:"description",fn:d(i=>[a.$slots["description-"+s.value]?n(a.$slots,"description-"+s.value,f(p({key:0},i))):c("v-if",!0),a.$slots.description?n(a.$slots,"description",f(p({key:1},i))):c("v-if",!0)]),key:"2"}:void 0,a.$slots["extra-"+s.value]||a.$slots.extra?{name:"extra",fn:d(i=>[a.$slots["extra-"+s.value]?n(a.$slots,"extra-"+s.value,f(p({key:0},i))):c("v-if",!0),a.$slots.extra?n(a.$slots,"extra",f(p({key:1},i))):c("v-if",!0)]),key:"3"}:void 0]),1040,["size","disabled","model-value","onChange","onExtra"]))),128))]))}}),le=j(te,[["__file","index.vue"]]);const _=le,ie={class:"card-header"},oe=y("p",{class:"mb-2 mt-4"},"单选",-1),re=y("p",{class:"mb-2 mt-4"},"多选",-1),ce=S({name:"CheckCard",__name:"check-card",setup(z){const l=L("default"),t=L(),r=L("0"),u=L([]),g=[{title:"标题一",value:"0",description:"坚持梦想，成就不凡的自己",avatar:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"},{title:"标题二",value:"1",description:"每一次努力，都是成长的契机",avatar:"https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg"}];return T(l,b=>b==="disabled"?t.value="default":t.value=l.value),(b,a)=>{const e=V("el-link"),s=V("el-radio"),E=V("el-radio-group"),i=V("el-space"),U=V("el-card"),G=X("tippy");return o(),m(U,{shadow:"never"},{header:d(()=>[y("div",ie,[v(i,{wrap:"",size:40},{default:d(()=>[K((o(),m(e,{href:"https://plus-pro-components.com/components/check-card-group.html",target:"_blank",style:{"font-size":"16px","font-weight":"800"}},{default:d(()=>[k(" 多选卡片组 ")]),_:1})),[[G,{content:"点击查看详细文档"}]]),v(E,{modelValue:l.value,"onUpdate:modelValue":a[0]||(a[0]=C=>l.value=C)},{default:d(()=>[v(s,{value:"large"},{default:d(()=>[k("大尺寸")]),_:1}),v(s,{value:"default"},{default:d(()=>[k("默认尺寸")]),_:1}),v(s,{value:"small"},{default:d(()=>[k("小尺寸")]),_:1}),v(s,{value:"disabled"},{default:d(()=>[k("禁用")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),v(e,{class:"mt-2",href:"https://github.com/pure-admin/vue-pure-admin/blob/main/src/views/components/check-card.vue",target:"_blank"},{default:d(()=>[k(" 代码位置 src/views/components/check-card.vue ")]),_:1})]),default:d(()=>[oe,v(h(_),{modelValue:r.value,"onUpdate:modelValue":a[1]||(a[1]=C=>r.value=C),options:g,size:t.value,disabled:l.value==="disabled"},null,8,["modelValue","size","disabled"]),re,v(h(_),{modelValue:u.value,"onUpdate:modelValue":a[2]||(a[2]=C=>u.value=C),options:g,size:t.value,disabled:l.value==="disabled",multiple:""},null,8,["modelValue","size","disabled"])]),_:1})}}});export{ce as default};
