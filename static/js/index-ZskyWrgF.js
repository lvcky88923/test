import{useRole as V}from"./hook-BEkmLDVE.js";import{R as B,P as L}from"./refresh-BEqAUBBL.js";import{u as s}from"./hooks-DY4Vxz01.js";import{d as z,a as O,e as l,f as T,k as $,i as o,w as n,u as e,h as c,_ as I}from"./index-WlA0U7AG.js";import"./system-KjD_3GT1.js";import"./sortable.esm-6WsHlDA5.js";import"./epTheme-Do9dy9Og.js";const N={width:24,height:24,body:'<path fill="currentColor" d="M14 8.947L22 14v2l-8-2.526v5.36l3 1.666V22l-4.5-1L8 22v-1.5l3-1.667v-5.36L3 16v-2l8-5.053V3.5a1.5 1.5 0 0 1 3 0v5.447Z"/>'},U=N,E={class:"main"},F=z({name:"OnlineUser",__name:"index",setup(M){const m=O(),{form:r,loading:p,columns:_,dataList:g,pagination:h,onSearch:f,resetForm:C,handleOffline:v,handleSizeChange:b,handleCurrentChange:x,handleSelectionChange:y}=V();return(Z,t)=>{const k=l("el-input"),u=l("el-form-item"),i=l("el-button"),S=l("el-form"),w=l("el-popconfirm"),R=l("pure-table");return T(),$("div",E,[o(S,{ref_key:"formRef",ref:m,inline:!0,model:e(r),class:"search-form bg-bg_color w-[99/100] pl-8 pt-[12px] overflow-auto"},{default:n(()=>[o(u,{label:"用户名",prop:"username"},{default:n(()=>[o(k,{modelValue:e(r).username,"onUpdate:modelValue":t[0]||(t[0]=a=>e(r).username=a),placeholder:"请输入用户名",clearable:"",class:"!w-[180px]"},null,8,["modelValue"])]),_:1}),o(u,null,{default:n(()=>[o(i,{type:"primary",icon:e(s)("ri:search-line"),loading:e(p),onClick:e(f)},{default:n(()=>[c(" 搜索 ")]),_:1},8,["icon","loading","onClick"]),o(i,{icon:e(s)(e(B)),onClick:t[1]||(t[1]=a=>e(C)(m.value))},{default:n(()=>[c(" 重置 ")]),_:1},8,["icon"])]),_:1})]),_:1},8,["model"]),o(e(L),{title:"在线用户（仅演示，操作后不生效）",columns:e(_),onRefresh:e(f)},{default:n(({size:a,dynamicColumns:P})=>[o(R,{"align-whole":"center",showOverflowTooltip:"","table-layout":"auto",loading:e(p),size:a,adaptive:"",adaptiveConfig:{offsetBottom:108},data:e(g),columns:P,pagination:e(h),paginationSmall:a==="small","header-cell-style":{background:"var(--el-fill-color-light)",color:"var(--el-text-color-primary)"},onSelectionChange:e(y),onPageSizeChange:e(b),onPageCurrentChange:e(x)},{operation:n(({row:d})=>[o(w,{title:`是否强制下线${d.username}`,onConfirm:j=>e(v)(d)},{reference:n(()=>[o(i,{class:"reset-margin",link:"",type:"primary",size:a,icon:e(s)(e(U))},{default:n(()=>[c(" 强退 ")]),_:2},1032,["size","icon"])]),_:2},1032,["title","onConfirm"])]),_:2},1032,["loading","size","data","columns","pagination","paginationSmall","header-cell-style","onSelectionChange","onPageSizeChange","onPageCurrentChange"])]),_:1},8,["columns","onRefresh"])])}}}),Q=I(F,[["__scopeId","data-v-61a9cb0f"]]);export{Q as default};
