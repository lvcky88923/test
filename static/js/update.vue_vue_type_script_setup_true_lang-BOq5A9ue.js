var k=(R,s,n)=>new Promise((r,i)=>{var V=d=>{try{m(n.next(d))}catch(c){i(c)}},_=d=>{try{m(n.throw(d))}catch(c){i(c)}},m=d=>d.done?r(d.value):Promise.resolve(d.value).then(V,_);m((n=n.apply(R,s)).next())});import{M as f}from"./motion-C0432WbG.js";import{d as N,Z as D,a as U,r as E,e as w,f as I,b as T,w as a,i as o,u as e,g as $,h as x,t as C,af as h,fv as P,L as z,fN as F}from"./index-WlA0U7AG.js";import{u as b,a as W}from"./verifyCode-X7aEI8gl.js";import{u as y}from"./hooks-DY4Vxz01.js";import{d as S}from"./lock-fill-BZPnsoM7.js";import{d as G}from"./iphone-CgGaW-_Y.js";const M={class:"w-full flex justify-between"},K=N({__name:"update",setup(R){const{t:s}=D(),n=U(!1),r=E({phone:"",verifyCode:"",password:"",repeatPassword:""}),i=U(),{isDisabled:V,text:_}=b(),m=[{validator:(g,l,t)=>{l===""?t(new Error(h(P("login.purePassWordSureReg")))):r.password!==l?t(new Error(h(P("login.purePassWordDifferentReg")))):t()},trigger:"blur"}],d=g=>k(this,null,function*(){n.value=!0,g&&(yield g.validate((l,t)=>{if(l)setTimeout(()=>{z(h(P("login.purePassWordUpdateReg")),{type:"success"}),n.value=!1},2e3);else return n.value=!1,t}))});function c(){b().end(),F().SET_CURRENTPAGE(0)}return(g,l)=>{const t=w("el-input"),p=w("el-form-item"),v=w("el-button"),B=w("el-form");return I(),T(B,{ref_key:"ruleFormRef",ref:i,model:r,rules:e(W),size:"large"},{default:a(()=>[o(e(f),null,{default:a(()=>[o(p,{prop:"phone"},{default:a(()=>[o(t,{modelValue:r.phone,"onUpdate:modelValue":l[0]||(l[0]=u=>r.phone=u),clearable:"",placeholder:e(s)("login.purePhone"),"prefix-icon":e(y)(e(G))},null,8,["modelValue","placeholder","prefix-icon"])]),_:1})]),_:1}),o(e(f),{delay:100},{default:a(()=>[o(p,{prop:"verifyCode"},{default:a(()=>[$("div",M,[o(t,{modelValue:r.verifyCode,"onUpdate:modelValue":l[1]||(l[1]=u=>r.verifyCode=u),clearable:"",placeholder:e(s)("login.pureSmsVerifyCode"),"prefix-icon":e(y)("ri:shield-keyhole-line")},null,8,["modelValue","placeholder","prefix-icon"]),o(v,{disabled:e(V),class:"ml-2",onClick:l[2]||(l[2]=u=>e(b)().start(i.value,"phone"))},{default:a(()=>[x(C(e(_).length>0?e(_)+e(s)("login.pureInfo"):e(s)("login.pureGetVerifyCode")),1)]),_:1},8,["disabled"])])]),_:1})]),_:1}),o(e(f),{delay:150},{default:a(()=>[o(p,{prop:"password"},{default:a(()=>[o(t,{modelValue:r.password,"onUpdate:modelValue":l[3]||(l[3]=u=>r.password=u),clearable:"","show-password":"",placeholder:e(s)("login.purePassword"),"prefix-icon":e(y)(e(S))},null,8,["modelValue","placeholder","prefix-icon"])]),_:1})]),_:1}),o(e(f),{delay:200},{default:a(()=>[o(p,{rules:m,prop:"repeatPassword"},{default:a(()=>[o(t,{modelValue:r.repeatPassword,"onUpdate:modelValue":l[4]||(l[4]=u=>r.repeatPassword=u),clearable:"","show-password":"",placeholder:e(s)("login.pureSure"),"prefix-icon":e(y)(e(S))},null,8,["modelValue","placeholder","prefix-icon"])]),_:1})]),_:1}),o(e(f),{delay:250},{default:a(()=>[o(p,null,{default:a(()=>[o(v,{class:"w-full",size:"default",type:"primary",loading:n.value,onClick:l[5]||(l[5]=u=>d(i.value))},{default:a(()=>[x(C(e(s)("login.pureDefinite")),1)]),_:1},8,["loading"])]),_:1})]),_:1}),o(e(f),{delay:300},{default:a(()=>[o(p,null,{default:a(()=>[o(v,{class:"w-full",size:"default",onClick:c},{default:a(()=>[x(C(e(s)("login.pureBack")),1)]),_:1})]),_:1})]),_:1})]),_:1},8,["model","rules"])}}});export{K as _};
