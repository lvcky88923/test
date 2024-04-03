import{d as C,ar as N,a as g,n as L,b as w,w as a,e as r,A,f as h,g as n,i as e,B as P,h as t,k as F,l as M,u as b,aI as R,t as _,F as U,C as j,D as E,_ as T}from"./index-WlA0U7AG.js";import{u as B}from"./hooks-DY4Vxz01.js";const c=p=>(j("data-v-d972e8cd"),p=p(),E(),p),W={class:"card-header"},q=c(()=>n("p",{class:"mb-2"},"基础按钮",-1)),G=c(()=>n("br",null,null,-1)),H=c(()=>n("p",{class:"mb-4"},"加载状态按钮",-1)),J=c(()=>n("div",{class:"custom-loading"},[n("svg",{class:"circular",viewBox:"-10, -10, 50, 50"},[n("path",{class:"path",d:`\r
            M 30 15\r
            L 28 17\r
            M 25.61 25.61\r
            A 15 15, 0, 0, 1, 15 30\r
            A 15 15, 0, 1, 1, 27.99 7.5\r
            L 15 15\r
          `,style:{fill:"rgb(0 0 0 / 0%)","stroke-width":"4px"}})])],-1)),K=c(()=>n("p",{class:"mb-4"},"自定义元素标签。例如：按钮、div、链接",-1)),O=c(()=>n("p",{class:"mb-4"},"自定义颜色",-1)),Q=C({name:"PureButton",__name:"el-button",setup(p){const{isDark:y}=N(),l=g("default"),d=g(),i=g("default"),V=[{type:"",text:"Default",icon:"ep:search"},{type:"primary",text:"Primary",icon:"ep:edit"},{type:"success",text:"Success",icon:"ep:check"},{type:"info",text:"Info",icon:"ep:message"},{type:"warning",text:"Warning",icon:"ep:star"},{type:"danger",text:"Danger",icon:"ep:delete"}];return L(l,x=>x==="disabled"?d.value="default":d.value=l.value),(x,v)=>{const z=r("el-link"),s=r("el-radio"),k=r("el-radio-group"),m=r("el-space"),o=r("el-button",!0),f=r("el-divider"),D=r("el-card"),I=A("tippy");return h(),w(D,{shadow:"never"},{header:a(()=>[n("div",W,[e(m,{wrap:"",size:40},{default:a(()=>[P((h(),w(z,{href:"https://element-plus.org/zh-CN/component/button.html",target:"_blank",style:{"font-size":"16px","font-weight":"800"}},{default:a(()=>[t(" Button 按钮 ")]),_:1})),[[I,{content:"点击查看详细文档"}]]),e(k,{modelValue:l.value,"onUpdate:modelValue":v[0]||(v[0]=u=>l.value=u)},{default:a(()=>[e(s,{value:"large"},{default:a(()=>[t("大尺寸")]),_:1}),e(s,{value:"default"},{default:a(()=>[t("默认尺寸")]),_:1}),e(s,{value:"small"},{default:a(()=>[t("小尺寸")]),_:1}),e(s,{value:"disabled"},{default:a(()=>[t("禁用")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),e(z,{class:"mt-2",href:"https://github.com/pure-admin/vue-pure-admin/blob/main/src/views/components/el-button.vue",target:"_blank"},{default:a(()=>[t(" 代码位置 src/views/components/el-button.vue ")]),_:1})]),default:a(()=>[q,e(k,{modelValue:i.value,"onUpdate:modelValue":v[1]||(v[1]=u=>i.value=u),class:"mb-3"},{default:a(()=>[e(s,{label:"default",value:"default"}),e(s,{label:"plain",value:"plain"}),e(s,{label:"round",value:"round"}),e(s,{label:"circle",value:"circle"}),e(s,{label:"link",value:"link"}),e(s,{label:"text",value:"text"}),e(s,{label:"text-bg",value:"text-bg"})]),_:1},8,["modelValue"]),G,e(m,{wrap:""},{default:a(()=>[(h(),F(U,null,M(V,(u,S)=>e(o,{key:S,type:u.type,size:d.value,disabled:l.value==="disabled",plain:i.value==="plain",round:i.value==="round",circle:i.value==="circle",link:i.value==="link",text:i.value==="text"||i.value==="text-bg",bg:i.value==="text-bg",icon:b(B)(u.icon)},R({_:2},[i.value!=="circle"?{name:"default",fn:a(()=>[n("p",null,_(u.text),1)]),key:"0"}:void 0]),1032,["type","size","disabled","plain","round","circle","link","text","bg","icon"])),64))]),_:1}),e(f),H,e(o,{text:"",bg:"",type:"primary",size:d.value,disabled:l.value==="disabled",loading:l.value!=="disabled"},{default:a(()=>[t(_(l.value==="disabled"?"停止加载":"加载中"),1)]),_:1},8,["size","disabled","loading"]),e(o,{type:"primary",plain:"",size:d.value,disabled:l.value==="disabled","loading-icon":b(B)("ep:eleme"),loading:l.value!=="disabled"},{default:a(()=>[t(_(l.value==="disabled"?"停止加载":"加载中"),1)]),_:1},8,["size","disabled","loading-icon","loading"]),e(o,{type:"primary",size:d.value,disabled:l.value==="disabled",loading:l.value!=="disabled"},{loading:a(()=>[J]),default:a(()=>[t(" "+_(l.value==="disabled"?"停止加载":"加载中"),1)]),_:1},8,["size","disabled","loading"]),e(f),K,e(o,{size:d.value,disabled:l.value==="disabled"},{default:a(()=>[t(" button 标签 ")]),_:1},8,["size","disabled"]),e(o,{tag:"div",role:"button",tabindex:"0",size:d.value,disabled:l.value==="disabled"},{default:a(()=>[t(" div 标签 ")]),_:1},8,["size","disabled"]),e(o,{type:"primary",tag:"a",href:l.value==="disabled"?"javascript:void(0);":"https://element-plus.org/zh-CN/component/button.html#tag",target:l.value==="disabled"?"_self":"_blank",rel:"noopener noreferrer",size:d.value,disabled:l.value==="disabled"},{default:a(()=>[t(" a 链接 ")]),_:1},8,["href","target","size","disabled"]),e(f),O,e(m,{wrap:""},{default:a(()=>[e(o,{color:"#626aef",size:d.value,disabled:l.value==="disabled",dark:b(y)},{default:a(()=>[t(" Default ")]),_:1},8,["size","disabled","dark"]),e(o,{color:"#626aef",size:d.value,disabled:l.value==="disabled",dark:b(y),plain:""},{default:a(()=>[t(" Plain ")]),_:1},8,["size","disabled","dark"])]),_:1})]),_:1})}}}),Z=T(Q,[["__scopeId","data-v-d972e8cd"]]);export{Z as default};
