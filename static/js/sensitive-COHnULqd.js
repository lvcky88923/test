var V=Object.defineProperty;var N=(a,t,s)=>t in a?V(a,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[t]=s;var c=(a,t,s)=>(N(a,typeof t!="symbol"?t+"":t,s),s);import{d as L,a as B,b as T,w as m,e as _,f as b,g as h,i as v,h as x,k as D,l as F,t as k,F as I}from"./index-WlA0U7AG.js";class y{constructor(t,s=0){c(this,"depth",0);c(this,"key");c(this,"word",!1);c(this,"children",{});c(this,"fail");c(this,"count",0);this.key=t,this.depth=s}}class K{constructor(t,s){c(this,"root",new y("root"));c(this,"customCharacter");const e=t.length;this.customCharacter=(s==null?void 0:s.customCharacter)||"*";for(let n=0;n<e;n++)this.add(t[n],!1);this.build()}build(){const t=[];t.push(this.root);let s=0;for(;t.length>s;){const e=t[s],n=e.children;for(const l in e.children){const r=n[l];let o=e.fail;for(;o&&!o.children[l];)o=o.fail;r.fail=(o==null?void 0:o.children[l])||this.root,t.push(r)}s++}}search(t,s={replace:!0}){let e=this.root;const n=[],l=[],r=[],{replace:o=!0,verify:i=!1}=s,w=t.length;for(let u=0;u<w;u++){const d=t[u],f=d.toLowerCase();for(;e&&!(e!=null&&e.children[f]);)e=e==null?void 0:e.fail;if(e=(e==null?void 0:e.children[f])||this.root,n.push(d),l.push(d),e.word){let p=u+1-e.depth,g="";for(;p<=u;){const C=l[p];g+=C,o&&(n[p]=this.customCharacter),p++}if(r.push(g),i)break}}return{words:r,text:n.join("")}}filter(t,s){return this.search(t,s)}verify(t){const{words:s}=this.search(t,{verify:!0});return!s.length}delete(t){const s=this.pop(t.toLowerCase(),t.length,this.root);return this.build(),s}pop(t,s,e,n="delete",l=0){if(!e)return"delete";if(l===s){e.word=!1,e.count--;let r=!0;for(const o in e.children)if(o){r=!1;break}return r?n:"update"}else{const r=t[l],o=e.children[r],i=this.pop(t,s,o,e.word?"update":n,l+1);return e.count--,i==="delete"&&(o==null?void 0:o.count)===0&&delete e.children[r],i}}add(t,s=!0){const e=t.toLowerCase(),n=e.length;return this.put(e,n),s&&this.build(),!0}put(t,s){let e=this.root;const n=s-1;e.count++;for(let l=0;l<s;l++){const r=t[l],o=e.children[r];if(o)o.count++,e=o;else{const i=new y(r,l+1);i.count=1,e.children[r]=i,e=i}n===l&&e.depth&&(e.word=!0)}}}const M=K,S={class:"card-header"},j=h("p",{class:"font-medium"},"敏感词过滤",-1),q={class:"flex flex-wrap gap-2 my-2"},E=h("span",null,"自定义敏感词",-1),U={class:"mt-2"},A=L({name:"Sensitive",__name:"sensitive",setup(a){const t=["脑残","废物","白痴","三八","智障"],s=B(),e=new M(t);function n(){s.value=e.filter(s.value).text}return(l,r)=>{const o=_("el-link"),i=_("el-tag"),w=_("el-input"),u=_("el-card");return b(),T(u,{shadow:"never"},{header:m(()=>[h("div",S,[j,v(o,{class:"mt-2",href:"https://github.com/pure-admin/vue-pure-admin/blob/main/src/views/able/sensitive.vue",target:"_blank"},{default:m(()=>[x(" 代码位置 src/views/able/sensitive.vue ")]),_:1})])]),default:m(()=>[h("div",q,[E,(b(),D(I,null,F(t,(d,f)=>v(i,{key:f,type:"warning",class:"mx-1",effect:"dark",round:""},{default:m(()=>[x(k(d),1)]),_:2},1024)),64))]),v(w,{modelValue:s.value,"onUpdate:modelValue":r[0]||(r[0]=d=>s.value=d),onInput:n},null,8,["modelValue"]),h("p",U,k(s.value),1)]),_:1})}}});export{A as default};
