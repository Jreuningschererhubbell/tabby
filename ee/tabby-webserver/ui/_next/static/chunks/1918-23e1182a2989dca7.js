"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1918],{61918:function(e,n,t){t.d(n,{e:function(){return ex},p:function(){return em}});var r=t(57437),s=t(2265),l=t(82504),i=t(66026),a=t(95376),o=t(67887),d=t(39311),c=t(93023),u=t(84168),f=t(70470);function m(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1?arguments[1]:void 0,[t,r]=s.useState(!1);return s.useEffect(()=>{if(n)return;let t=(0,f.Z)(()=>{r(window.innerHeight+window.scrollY>=document.body.offsetHeight-e)},100,{leading:!0});return window.addEventListener("scroll",t,{passive:!0}),window.addEventListener("resize",t,{passive:!0}),t(),()=>{window.removeEventListener("scroll",t),window.removeEventListener("resize",t)}},[e,n]),s.useEffect(()=>{if(!n)return;let e=(0,f.Z)(()=>{let{scrollTop:e,clientHeight:t,scrollHeight:s}=n;r(e+t>=s)},100,{leading:!0});return n.addEventListener("scroll",e,{passive:!0}),n.addEventListener("resize",e,{passive:!0}),e(),()=>{n.removeEventListener("scroll",e),n.removeEventListener("resize",e)}},[e,n]),t}function h(e){let{className:n,container:t,offset:s,...l}=e,i=m(s||0,t);return(0,r.jsxs)(c.z,{variant:"outline",size:"icon",className:(0,d.cn)("absolute right-4 top-1 z-10 bg-background transition-opacity duration-300 sm:right-8 md:top-2",i?"opacity-0":"opacity-100",n),onClick:()=>{t?t.scrollTo({top:t.scrollHeight,behavior:"smooth"}):window.scrollTo({top:document.body.offsetHeight,behavior:"smooth"})},...l,children:[(0,r.jsx)(u.IconArrowDown,{}),(0,r.jsx)("span",{className:"sr-only",children:"Scroll to bottom"})]})}var v=t(50976),x=t(91067),p=t(30713),g=t(1592),j=t(25831),b=t(95482),w=t(35216);let y=s.forwardRef(function(e,n){let{onSubmit:t,input:l,setInput:i,isLoading:a}=e,{formRef:o,onKeyDown:f}=function(){let e=(0,s.useRef)(null);return{formRef:e,onKeyDown:n=>{if("Enter"===n.key&&!n.shiftKey&&!n.nativeEvent.isComposing){var t;null===(t=e.current)||void 0===t||t.requestSubmit(),n.preventDefault()}}}}(),[m,h]=s.useState(null),[y,C]=s.useState(!1),A=s.useRef(null),E=s.useRef(),R=s.useRef(),[S,z]=s.useState([]),[I,F]=s.useState({}),{data:L}=(0,p.ZP)(m,g.Z,{revalidateOnFocus:!1,dedupingInterval:0,errorRetryCount:0});s.useEffect(()=>{var e;let n=null!==(e=null==L?void 0:L.hits)&&void 0!==e?e:[];z(n),C(!!(null==n?void 0:n.length))},[null==L?void 0:L.hits]),s.useImperativeHandle(n,()=>({focus:()=>{var e;null===(e=A.current)||void 0===e||e.focus()}})),s.useEffect(()=>{l&&A.current&&A.current!==document.activeElement&&A.current.focus()},[l]),s.useLayoutEffect(()=>{var e,n,t;(null===(e=R.current)||void 0===e?void 0:e.length)&&(null===(t=A.current)||void 0===t||null===(n=t.setSelectionRange)||void 0===n||n.call(t,R.current[0],R.current[1]),R.current=void 0)}),s.useMemo(()=>(0,v.Z)(e=>{var n,t,r,s;let l=null!==(r=null===(n=e.target)||void 0===n?void 0:n.value)&&void 0!==r?r:"",i=null!==(s=null===(t=e.target)||void 0===t?void 0:t.selectionEnd)&&void 0!==s?s:0,a=N(l,i),o=null==a?void 0:a[1];if(o){let e=encodeURIComponent("name:".concat(o," AND kind:function")),n="/v1beta/search?q=".concat(e);h(n)}else z([]),C(!1)},200),[]);let D=async e=>{if(e.preventDefault(),!(null==l?void 0:l.trim())||a)return;let n=l;Object.keys(I).forEach(e=>{var t,r,s;let l=I[e];(null==l?void 0:l.doc)&&(n=n.replaceAll(e,"\n```".concat(null!==(r=null===(t=l.doc)||void 0===t?void 0:t.language)&&void 0!==r?r:"","\n").concat(null!==(s=l.doc.body)&&void 0!==s?s:"","\n","```","\n")))}),i(""),await t(n)},Z=(e,n)=>{"Enter"===e.key&&n?e.preventDefault():n&&["ArrowRight","ArrowLeft","Home","End"].includes(e.key)?(z([]),C(!1)):(n||(e.preventDownshiftDefault=!0),f(e))};return(0,r.jsx)("form",{onSubmit:D,ref:o,children:(0,r.jsx)(w.Vc,{options:S,onSelect:e=>{var n,t,r;let s=null!==(n=E.current)&&void 0!==n?n:0,a=N(l,s);if(a){F({...I,["@".concat(null===(t=e.doc)||void 0===t?void 0:t.name)]:e});let n="@".concat(null==e?void 0:null===(r=e.doc)||void 0===r?void 0:r.name," "),o=l.substring(0,s).replace(new RegExp(a[0]),""),d=o.length+n.length;R.current=[d,d],i(o+n+l.slice(s))}z([]),C(!1)},open:y,onOpenChange:e=>{e&&(null==S?void 0:S.length)?C(e):(C(!1),z([]))},children:e=>{var n,t,s,o;let{open:f,highlightedIndex:m}=e,h=null==S?void 0:S[m];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(w.JH,{children:(0,r.jsxs)("div",{className:"relative flex max-h-60 w-full grow flex-col overflow-hidden bg-background px-8 sm:rounded-md sm:border sm:px-12",children:[(0,r.jsx)("span",{className:(0,d.cn)((0,c.d)({size:"sm",variant:"ghost"}),"absolute left-0 top-4 h-8 w-8 rounded-full bg-background p-0 hover:bg-background sm:left-4"),children:(0,r.jsx)(u.IconEdit,{})}),(0,r.jsx)(w.rG,{tabIndex:0,rows:1,placeholder:"Ask a question.",spellCheck:!1,className:"min-h-[60px] w-full resize-none bg-transparent px-4 py-[1.3rem] focus-within:outline-none sm:text-sm",value:l,ref:A,onChange:e=>{(0,x.Z)(e,"target.value")?(E.current=e.target.selectionEnd,i(e.target.value)):E.current=void 0},onKeyDown:e=>Z(e,f)}),(0,r.jsx)("div",{className:"absolute right-0 top-4 sm:right-4",children:(0,r.jsxs)(b.u,{children:[(0,r.jsx)(b.aJ,{asChild:!0,children:(0,r.jsxs)(c.z,{type:"submit",size:"icon",disabled:a||""===l,children:[(0,r.jsx)(u.IconArrowElbow,{}),(0,r.jsx)("span",{className:"sr-only",children:"Send message"})]})}),(0,r.jsx)(b._v,{children:"Send message"})]})})]})}),(0,r.jsx)(w.fD,{align:"start",side:"top",onOpenAutoFocus:e=>e.preventDefault(),className:"w-[60vw] md:w-[430px]",children:(0,r.jsxs)(j.J2,{open:f&&!!h,children:[(0,r.jsx)(j.tW,{asChild:!0,children:(0,r.jsx)("div",{className:"max-h-[300px] overflow-y-scroll",children:f&&!!(null==S?void 0:S.length)&&S.map((e,n)=>{var t,s,l;return(0,r.jsx)(w.x5,{item:e,index:n,children:(0,r.jsxs)("div",{className:"flex w-full items-center justify-between gap-8 overflow-x-hidden",children:[(0,r.jsxs)("div",{className:"flex items-center gap-1",children:[(0,r.jsx)(k,{kind:null==e?void 0:null===(t=e.doc)||void 0===t?void 0:t.kind}),(0,r.jsxs)("div",{className:"max-w-[200px] truncate",children:[null==e?void 0:null===(s=e.doc)||void 0===s?void 0:s.name,"(...)"]})]}),(0,r.jsx)("div",{className:"flex-1 truncate text-right text-sm text-muted-foreground",children:null==e?void 0:null===(l=e.doc)||void 0===l?void 0:l.body})]})},null==e?void 0:e.id)})})}),(0,r.jsx)(j.yk,{asChild:!0,align:"start",side:"right",alignOffset:-4,onOpenAutoFocus:e=>e.preventDefault(),onKeyDownCapture:e=>e.preventDefault(),className:"rounded-none",collisionPadding:{bottom:120},children:(0,r.jsxs)("div",{className:"flex max-h-[70vh] w-[20vw] flex-col overflow-y-auto px-2 md:w-[240px] lg:w-[340px]",children:[(0,r.jsxs)("div",{className:"mb-2",children:[(null==h?void 0:null===(n=h.doc)||void 0===n?void 0:n.kind)?"(".concat(null==h?void 0:null===(t=h.doc)||void 0===t?void 0:t.kind,") "):"",null==h?void 0:null===(s=h.doc)||void 0===s?void 0:s.name]}),(0,r.jsx)("div",{className:"flex-1 whitespace-pre-wrap break-all text-muted-foreground",children:null==h?void 0:null===(o=h.doc)||void 0===o?void 0:o.body})]})})]})})]})}})})});function N(e,n){let t=e.substring(0,n),r=/@(\w+)$/.exec(t);return r}function k(e){let{kind:n,...t}=e;return(0,r.jsx)(u.IconSymbolFunction,{...t})}function C(e){let{href:n,children:t}=e;return(0,r.jsxs)("a",{href:n,target:"_blank",className:"inline-flex flex-1 justify-center gap-1 leading-4 hover:underline",children:[(0,r.jsx)("span",{children:t}),(0,r.jsx)("svg",{"aria-hidden":"true",height:"7",viewBox:"0 0 6 6",width:"7",className:"opacity-70",children:(0,r.jsx)("path",{d:"M1.25215 5.54731L0.622742 4.9179L3.78169 1.75597H1.3834L1.38936 0.890915H5.27615V4.78069H4.40513L4.41109 2.38538L1.25215 5.54731Z",fill:"currentColor"})})]})}function A(e){let{className:n,...t}=e;return(0,r.jsxs)("p",{className:(0,d.cn)("px-2 text-center text-xs leading-normal text-muted-foreground",n),...t,children:[(0,r.jsx)(C,{href:"https://tabby.tabbyml.com",children:"Tabby"}),", an opensource, self-hosted AI coding assistant ."]})}function E(e){let{id:n,stop:t,reload:l,input:i,setInput:a,className:o,onSubmit:f}=e,m=s.useRef(null),{container:v,onClearMessages:x,qaPairs:p,isLoading:g}=s.useContext(em);return s.useEffect(()=>{var e;null==m||null===(e=m.current)||void 0===e||e.focus()},[n]),(0,r.jsxs)("div",{className:(0,d.cn)("bg-gradient-to-b from-transparent from-0% to-muted/25 to-100%",o),children:[(0,r.jsx)(h,{container:v}),(0,r.jsxs)("div",{className:"mx-auto sm:max-w-2xl sm:px-4",children:[(0,r.jsxs)("div",{className:"flex h-10 items-center justify-center gap-2",children:[g?(0,r.jsxs)(c.z,{variant:"outline",onClick:()=>t(),className:"bg-background",children:[(0,r.jsx)(u.IconStop,{className:"mr-2"}),"Stop generating"]}):(null==p?void 0:p.length)>0&&(0,r.jsxs)(c.z,{variant:"outline",onClick:()=>l(),className:"bg-background",children:[(0,r.jsx)(u.IconRefresh,{className:"mr-2"}),"Regenerate response"]}),(null==p?void 0:p.length)>0&&(0,r.jsxs)(c.z,{variant:"outline",onClick:x,className:"bg-background lg:hidden",children:[(0,r.jsx)(u.IconTrash,{className:"mr-2"}),"Clear"]})]}),(0,r.jsxs)("div",{className:"space-y-4 border-t bg-background px-4 py-2 shadow-lg sm:rounded-t-xl sm:border md:py-4",children:[(0,r.jsx)(y,{ref:m,onSubmit:f,input:i,setInput:a,isLoading:g}),(0,r.jsx)(A,{className:"hidden sm:block"})]})]})]})}var R=t(4327);function S(e){let{trackVisibility:n}=e,{container:t}=s.useContext(em),l=m(0,t),{ref:i,entry:a,inView:o}=(0,R.YD)({trackVisibility:n,delay:100,rootMargin:"0px 0px -150px 0px"});return s.useEffect(()=>{l&&n&&!o&&(null==a||a.target.scrollIntoView({block:"start"}))},[o,a,l,n]),(0,r.jsx)("div",{ref:i,className:"h-px w-full"})}let z=[{heading:"Convert list of string to numbers",message:"How to convert a list of string to numbers in python"},{heading:"How to parse email address",message:"How to parse email address with regex"}];function I(e){let{setInput:n}=e;return(0,r.jsx)("div",{className:"mx-auto max-w-2xl px-4",children:(0,r.jsxs)("div",{className:"rounded-lg border bg-background p-8",children:[(0,r.jsx)("h1",{className:"mb-2 text-lg font-semibold",children:"Welcome to Playground!"}),(0,r.jsx)("p",{className:"leading-normal text-muted-foreground",children:"You can start a conversation here or try the following examples:"}),(0,r.jsx)("div",{className:"mt-4 flex flex-col items-start space-y-2",children:z.map((e,t)=>(0,r.jsxs)(c.z,{variant:"link",className:"h-auto p-0 text-base",onClick:()=>n(e.message),children:[(0,r.jsx)(u.IconArrowRight,{className:"mr-2 text-muted-foreground"}),e.heading]},t))})]})})}var F=t(16691),L=t.n(F),D=t(66566),Z=t(72999),O=t(24144),H=t(48975),T=t(82180),M=t(44688),Y=t(4523),P=t(77723);let U={javascript:".js",python:".py",java:".java",c:".c",cpp:".cpp","c++":".cpp","c#":".cs",ruby:".rb",php:".php",swift:".swift","objective-c":".m",kotlin:".kt",typescript:".ts",go:".go",perl:".pl",rust:".rs",scala:".scala",haskell:".hs",lua:".lua",shell:".sh",sql:".sql",html:".html",css:".css"},V=function(e){let n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t="ABCDEFGHJKLMNPQRSTUVWXY3456789",r="";for(let n=0;n<e;n++)r+=t.charAt(Math.floor(Math.random()*t.length));return n?r.toLowerCase():r},_=(0,s.memo)(e=>{let{language:n,value:t}=e,{isCopied:s,copyToClipboard:l}=(0,P.m)({timeout:2e3});return(0,r.jsxs)("div",{className:"codeblock relative w-full bg-zinc-950 font-sans",children:[(0,r.jsxs)("div",{className:"flex w-full items-center justify-between bg-zinc-800 px-6 py-2 pr-4 text-zinc-100",children:[(0,r.jsx)("span",{className:"text-xs lowercase",children:n}),(0,r.jsxs)("div",{className:"flex items-center space-x-1",children:[(0,r.jsxs)(c.z,{variant:"ghost",className:"hover:bg-[#3C382F] hover:text-[#F4F4F5] focus-visible:ring-1 focus-visible:ring-slate-700 focus-visible:ring-offset-0",onClick:()=>{let e=U[n]||".file",r="file-".concat(V(3,!0)).concat(e),s=window.prompt("Enter file name",r);if(!s)return;let l=new Blob([t],{type:"text/plain"}),i=URL.createObjectURL(l),a=document.createElement("a");a.download=s,a.href=i,a.style.display="none",document.body.appendChild(a),a.click(),document.body.removeChild(a),URL.revokeObjectURL(i)},size:"icon",children:[(0,r.jsx)(u.IconDownload,{}),(0,r.jsx)("span",{className:"sr-only",children:"Download"})]}),(0,r.jsxs)(c.z,{variant:"ghost",size:"icon",className:"text-xs hover:bg-[#3C382F] hover:text-[#F4F4F5] focus-visible:ring-1 focus-visible:ring-slate-700 focus-visible:ring-offset-0",onClick:()=>{s||l(t)},children:[s?(0,r.jsx)(u.IconCheck,{}):(0,r.jsx)(u.IconCopy,{}),(0,r.jsx)("span",{className:"sr-only",children:"Copy code"})]})]})]}),(0,r.jsx)(M.Z,{language:n,style:Y.RY,PreTag:"div",showLineNumbers:!0,customStyle:{margin:0,width:"100%",background:"transparent",padding:"1.5rem 1rem"},codeTagProps:{style:{fontSize:"0.9rem",fontFamily:"var(--font-mono)"}},children:t})]})});_.displayName="CodeBlock";var K=t(21362),W=t(33555),J=t(64169),q=t(83523);let B=J.fC,G=s.forwardRef((e,n)=>{let{className:t,...s}=e;return(0,r.jsx)(J.ck,{ref:n,className:(0,d.cn)("border-b",t),...s})});G.displayName="AccordionItem";let Q=s.forwardRef((e,n)=>{let{className:t,children:s,...l}=e;return(0,r.jsxs)(J.xz,{ref:n,className:(0,d.cn)("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",t),...l,children:[s,(0,r.jsx)(q.Z,{className:"h-4 w-4 shrink-0 transition-transform duration-200"})]})});Q.displayName=J.xz.displayName;let X=s.forwardRef((e,n)=>{let{className:t,children:s,...l}=e;return(0,r.jsx)(J.VY,{ref:n,className:"overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",...l,children:(0,r.jsx)("div",{className:(0,d.cn)("pb-4 pt-0",t),children:s})})});X.displayName=J.VY.displayName;var $=t(16775),ee=t(25645),en=t(55909);function et(e){let{messages:n}=e,{isLoading:t}=s.useContext(em);return(0,r.jsx)("div",{className:"relative mx-auto max-w-2xl px-4",children:null==n?void 0:n.map((e,l)=>{let i=l===n.length-1;return(0,r.jsxs)(s.Fragment,{children:[(0,r.jsx)(er,{isLoading:!!i&&t,message:e}),!i&&(0,r.jsx)($.Z,{className:"my-4 md:my-8"})]},e.user.id)})})}function er(e){let{message:n,isLoading:t}=e,{user:s,assistant:l}=n,i=s.selectContext,a=s.relevantContext;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(es,{message:s}),!!l&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)($.Z,{className:"my-4 md:my-8"}),(0,r.jsx)(el,{message:l,isLoading:t,userMessageId:s.id,selectContext:i,relevantContext:a})]})]})}function es(e){let{message:n}=e,{handleMessageAction:t}=s.useContext(em);return(0,r.jsxs)("div",{className:(0,d.cn)("group relative mb-4 flex items-start md:-ml-12"),...e,children:[(0,r.jsx)("div",{className:"shrink-0 select-none rounded-full border bg-background shadow",children:(0,r.jsx)(en.Y,{className:"h-8 w-8"})}),(0,r.jsxs)("div",{className:"ml-4 flex-1 space-y-2 overflow-hidden px-1",children:[(0,r.jsx)(ei,{message:n.message}),(0,r.jsx)(ec,{children:(0,r.jsxs)(c.z,{variant:"ghost",size:"icon",onClick:e=>null==t?void 0:t(n.id,"delete"),children:[(0,r.jsx)(u.IconTrash,{}),(0,r.jsx)("span",{className:"sr-only",children:"Delete message"})]})})]})]})}function el(e){let{handleMessageAction:n,isLoading:t}=s.useContext(em),{message:l,selectContext:i,relevantContext:a,isLoading:o,userMessageId:f,...m}=e,h=s.useMemo(()=>(0,Z.Z)([i,...null!=a?a:[]]),[i,a]);return(0,r.jsxs)("div",{className:(0,d.cn)("group relative mb-4 flex items-start md:-ml-12"),...m,children:[(0,r.jsx)("div",{className:"shrink-0 select-none rounded-full border bg-background shadow",children:(0,r.jsx)(ed,{className:"h-8 w-8"})}),(0,r.jsxs)("div",{className:"ml-4 flex-1 space-y-2 overflow-hidden px-1",children:[(0,r.jsx)(eu,{contexts:h}),!o||(null==l?void 0:l.message)?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(ei,{message:l.message}),!!l.error&&(0,r.jsx)(ea,{error:l.error})]}):(0,r.jsx)(eo,{}),(0,r.jsxs)(ec,{children:[!t&&(0,r.jsxs)(c.z,{variant:"ghost",size:"icon",onClick:e=>n(f,"regenerate"),children:[(0,r.jsx)(u.IconRefresh,{}),(0,r.jsx)("span",{className:"sr-only",children:"Regenerate message"})]}),(0,r.jsx)(W.q,{value:l.message})]})]})]})}function ei(e){let{message:n}=e;return(0,r.jsx)(K.s,{className:"prose break-words dark:prose-invert prose-p:leading-relaxed prose-pre:mt-1 prose-pre:p-0",remarkPlugins:[H.Z,T.Z],components:{p(e){let{children:n}=e;return(0,r.jsx)("p",{className:"mb-2 last:mb-0",children:n})},code(e){var n;let{node:t,inline:s,className:l,children:i,...a}=e;if(i.length){if("▍"==i[0])return(0,r.jsx)("span",{className:"mt-1 animate-pulse cursor-default",children:"▍"});i[0]=i[0].replace("`▍`","▍")}let o=/language-(\w+)/.exec(l||""),d=function(e){let n={};if(!e)return n;let t=e.split(" ");return t.forEach(e=>{let[t,r]=e.split("=");n[t]=r}),n}(null===(n=t.data)||void 0===n?void 0:n.meta),c=(null==d?void 0:d.is_reference)==="1";return c?null:s?(0,r.jsx)("code",{className:l,...a,children:i}):(0,r.jsx)(_,{language:o&&o[1]||"",value:String(i).replace(/\n$/,""),...a},Math.random())}},children:n})}function ea(e){let{error:n="Fail to fetch"}=e,t=s.useMemo(()=>"```\n"+JSON.stringify({error:!0,message:n},null,2)+"\n```",[n]);return(0,r.jsx)(K.s,{className:"prose break-words text-sm dark:prose-invert prose-p:leading-relaxed prose-pre:mt-1 prose-pre:p-0",remarkPlugins:[H.Z,T.Z],components:{code(e){let{node:n,inline:t,className:s,children:l,...i}=e;return(0,r.jsx)("div",{...i,className:(0,d.cn)(s,"bg-zinc-950 p-2"),children:l})}},children:t})}function eo(){return(0,r.jsxs)("div",{className:"space-y-2 px-1",children:[(0,r.jsx)(ee.O,{className:"h-3 w-full"}),(0,r.jsx)(ee.O,{className:"h-3 w-full"})]})}function ed(e){let{className:n}=e;return(0,r.jsx)(L(),{style:{backgroundColor:"#E8E2D2"},className:(0,d.cn)("rounded-full p-0.5",n),src:D.Z,alt:"tabby"})}function ec(e){let{className:n,...t}=e;return(0,r.jsx)("div",{className:(0,d.cn)("flex items-center justify-end transition-opacity group-hover:opacity-100 md:absolute md:-right-[5rem] md:-top-2 md:opacity-0",n),...t})}let eu=e=>{let{contexts:n}=e,{onNavigateToContext:t}=s.useContext(em),l=(null==n?void 0:n.length)>1;return(null==n?void 0:n.length)?(0,r.jsx)(B,{type:"single",collapsible:!0,className:"bg-background text-foreground",children:(0,r.jsxs)(G,{value:"references",className:"my-0 border-0",children:[(0,r.jsx)(Q,{className:"my-0 py-2",children:(0,r.jsx)("span",{className:"mr-2",children:"Used ".concat(n.length," reference").concat(l?"s":"")})}),(0,r.jsx)(X,{className:"space-y-2",children:null==n?void 0:n.map(e=>{var n,s,l;let i=!(0,O.Z)(null===(n=e.range)||void 0===n?void 0:n.start)&&!(0,O.Z)(null===(s=e.range)||void 0===s?void 0:s.end)&&e.range.start<e.range.end,a=e.filepath.split("/"),o=a[a.length-1],d=a.slice(0,a.length-1).join("/");return(0,r.jsx)("div",{className:"cursor-pointer rounded-md border p-2 hover:bg-accent",onClick:n=>null==t?void 0:t(e),children:(0,r.jsxs)("div",{className:"flex items-center gap-1 overflow-x-auto",children:[(0,r.jsx)(u.IconFile,{className:"shrink-0"}),(0,r.jsxs)("span",{children:[(0,r.jsx)("span",{children:o}),(null===(l=e.range)||void 0===l?void 0:l.start)&&(0,r.jsxs)("span",{className:"text-muted-foreground",children:[":",e.range.start]}),i&&(0,r.jsxs)("span",{className:"text-muted-foreground",children:["-",e.range.end]})]}),(0,r.jsx)("span",{className:"ml-2 text-xs text-muted-foreground",children:d})]})},e.filepath)})})]})}):null};var ef=t(95865);let em=s.createContext({});function eh(e){if(!(null==e?void 0:e.length))return[];let n=[];for(let t of e){let{user:e,assistant:r}=t;e&&n.push(ev(e)),r&&n.push({role:"assistant",id:r.id,content:r.message})}return n}function ev(e){let{selectContext:n,message:t,id:r}=e;return{id:r,role:"user",content:t+function(e){var n;if(!e||!e.content)return"";let{content:t,filepath:r}=e,s=null===(n=(0,o.U$)(r))||void 0===n?void 0:n[0];return"\n```".concat(null!=s?s:""," is_reference=1\n ").concat(null!=t?t:""," \n","```","\n")}(n)}}let ex=s.forwardRef(function(e,n){let{className:t,chatId:o,initialMessages:c,headers:u,api:f="/v1/chat/completions",onLoaded:m,onThreadUpdates:h,onNavigateToContext:v,container:x,fetcher:p}=e;!function(e){let{api:n,fetcher:t}=e;s.useEffect(()=>{window._originFetch||(window._originFetch=window.fetch);let e=t||window._originFetch;return window.fetch=async function(t,r){return"/api/chat"!==t?window._originFetch(t,r):e(n,{...r,body:function(e){if("string"!=typeof e)return e;try{var n;let t=JSON.parse(e),r=null===(n=t.messages)||void 0===n?void 0:n.slice();if(!Array.isArray(r)||!(r.length>1))return e;{let e=0,n=1;for(;n<r.length;){let t=r[e],s=r[n];s.role===t.role?r=[...r.slice(0,e),{...t,content:[t.content,s.content].join("\n")},...r.slice(n+1)]:e=n++}return JSON.stringify({...t,messages:r})}}catch(n){return e}}(null==r?void 0:r.body),method:"POST",headers:{"Content-Type":"application/json",...null==r?void 0:r.headers}}).then(e=>{if(!(null==e?void 0:e.ok))throw Error(String(e.status));let n=(0,ef.HP)(e);return new ef.wn(n)})},()=>{var e;(null===(e=window)||void 0===e?void 0:e._originFetch)&&(window.fetch=window._originFetch,window._originFetch=void 0)}},[n])}({api:f,fetcher:p});let[g,j]=s.useState(null!=c?c:[]),b=s.useRef(!1),w=s.useMemo(()=>eh(c),[]),y=(0,l.R)({initialMessages:w,id:o,headers:u,body:{id:o}}),{messages:N,append:k,stop:C,isLoading:A,input:R,setInput:z,setMessages:F,error:L}=y,D=async e=>{C();let n=g.filter(n=>n.user.id!==e);j(n),F(eh(n))},Z=async e=>{let n=(0,i.Z)(g,n=>n.user.id===e);if(n>-1){var t;let e=g[n],r=[...g.slice(0,n),{...e,assistant:{...e.assistant,id:(null===(t=e.assistant)||void 0===t?void 0:t.id)||(0,d.x0)(),message:"",error:void 0}}];return j(r),F(eh(r.slice(0,-1))),k(ev(e.user))}},O=async()=>{if(!(null==g?void 0:g.length))return;let e=g[g.length-1].user.id;return Z(e)};s.useEffect(()=>{var e;if(!A||!(null==g?void 0:g.length)||!(null==N?void 0:N.length))return;let n=g[g.length-1],t=N[N.length-1],r=(null==t?void 0:t.role)==="assistant"&&(null===(e=N[N.length-2])||void 0===e?void 0:e.id)===n.user.id;r&&j(e=>{let r=e[e.length-1].assistant,s={...r,id:(null==r?void 0:r.id)||t.id,message:t.content,error:void 0};return[...e.slice(0,e.length-1),{...n,assistant:s}]})},[N,A]),s.useEffect(()=>{L&&(null==g?void 0:g.length)&&j(e=>{var n,t,r;let s=e[e.length-1];return[...e.slice(0,e.length-1),{...s,assistant:{...s.assistant,id:(null===(n=s.assistant)||void 0===n?void 0:n.id)||(0,d.x0)(),message:null!==(r=null===(t=s.assistant)||void 0===t?void 0:t.message)&&void 0!==r?r:"",error:(null==L?void 0:L.message)==="401"?"Unauthorized":"Fail to fetch"}}]})},[L]);let H=e=>{var n;let t={...e,id:null!==(n=e.id)&&void 0!==n?n:(0,d.x0)()};return j(e=>[...e,{user:t,assistant:{id:(0,d.x0)(),message:"",error:void 0}}]),k(ev(t))},T=async e=>H({message:e});return s.useEffect(()=>{b.current&&h(g)},[g]),s.useImperativeHandle(n,()=>({...(0,a.Z)(y,["append","messages"]),sendUserChat:H}),[y]),s.useEffect(()=>{null!=b&&b.current||(b.current=!0,null==m||m())},[]),(0,r.jsx)(em.Provider,{value:{isLoading:y.isLoading,qaPairs:g,onNavigateToContext:v,handleMessageAction:(e,n)=>{switch(n){case"delete":D(e);break;case"regenerate":Z(e)}},onClearMessages:()=>{C(),F([]),j([])},container:x},children:(0,r.jsx)("div",{className:"flex justify-center overflow-x-hidden",children:(0,r.jsxs)("div",{className:"w-full max-w-2xl px-4",children:[(0,r.jsxs)("div",{className:(0,d.cn)("pb-[200px] pt-4 md:pt-10",t),children:[(null==g?void 0:g.length)?(0,r.jsx)(et,{messages:g}):(0,r.jsx)(I,{setInput:y.setInput}),(0,r.jsx)(S,{trackVisibility:A})]}),(0,r.jsx)(E,{onSubmit:T,className:"fixed inset-x-0 bottom-0 lg:ml-[280px]",id:o,stop:()=>{C()},reload:O,input:R,setInput:z})]})})})})},33555:function(e,n,t){t.d(n,{q:function(){return a}});var r=t(57437);t(2265);var s=t(77723),l=t(93023),i=t(84168);function a(e){let{className:n,value:t,...a}=e,{isCopied:o,copyToClipboard:d}=(0,s.m)({timeout:2e3});return t?(0,r.jsxs)(l.z,{variant:"ghost",size:"icon",className:n,onClick:()=>{o||d(t)},...a,children:[o?(0,r.jsx)(i.IconCheck,{className:"text-green-600"}):(0,r.jsx)(i.IconCopy,{}),(0,r.jsx)("span",{className:"sr-only",children:"Copy"})]}):null}},21362:function(e,n,t){t.d(n,{s:function(){return l}});var r=t(2265),s=t(28179);let l=(0,r.memo)(s.D,(e,n)=>e.children===n.children&&e.className===n.className)},35216:function(e,n,t){t.d(n,{JH:function(){return h},KM:function(){return x},Vc:function(){return j},fD:function(){return p},rG:function(){return v},x5:function(){return g}});var r=t(57437),s=t(2265),l=t(92402),i=t(24144),a=t(53587),o=t(39338),d=t(39311),c=t(25831),u=t(51908);let f=s.createContext({}),m=c.xp,h=s.forwardRef((e,n)=>(0,r.jsx)(c.tW,{...e,ref:n}));h.displayName="SearchableSelectAnchor";let v=s.forwardRef((e,n)=>{let{getInputProps:t}=s.useContext(f),{onKeyDown:l,onChange:d,onInput:c,onBlur:u,onClick:m,...h}=e;return(0,r.jsx)(o.Z,{...t((0,a.Z)({onKeyDown:l,onChange:d,onInput:c,onBlur:u,onClick:m,ref:n},i.Z)),...h})});v.displayName="SearchableSelectTextarea";let x=s.forwardRef((e,n)=>{let{getInputProps:t}=s.useContext(f),{onKeyDown:l,onChange:o,onInput:d,onBlur:c,onClick:m,...h}=e;return(0,r.jsx)(u.I,{...t((0,a.Z)({onKeyDown:l,onChange:o,onInput:d,onBlur:c,onClick:m,ref:n},i.Z)),...h})});x.displayName="SearchableSelectInput";let p=s.forwardRef((e,n)=>{let{children:t,style:l,popupMatchAnchorWidth:i,...a}=e,{getMenuProps:o,anchorRef:d}=s.useContext(f),u=s.useRef(void 0);return s.useLayoutEffect(()=>{if(i){let e=d.current;if(e){let n=e.getBoundingClientRect();u.current=n.width}}},[]),(0,r.jsx)(c.i9,{children:(0,r.jsx)(c.yk,{align:"start",onOpenAutoFocus:e=>e.preventDefault(),style:{width:u.current,...l},...o({ref:n},{suppressRefError:!0}),...a,children:t})})});p.displayName="SearchableSelectContent";let g=s.forwardRef((e,n)=>{let{item:t,index:l,className:i,children:a,disabled:o,...c}=e,{highlightedIndex:u,selectedItem:h,getItemProps:v}=s.useContext(f),x=u===l,p=h===t;return(0,r.jsx)(m,{asChild:!0,children:(0,r.jsx)("div",{className:(0,d.cn)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none",x&&"bg-accent text-accent-foreground",p&&"font-bold",o&&"pointer-events-none opacity-50",i),...v({item:t,index:l,onMouseLeave:e=>e.preventDefault(),onMouseOut:e=>e.preventDefault()}),...c,children:"function"==typeof a?a({highlighted:x,selected:p}):a})},t.id)});function j(e){let{options:n,onSelect:t,children:a,open:o,onOpenChange:d,stayOpenOnInputClick:u}=e,m=s.useRef(null),h=s.useCallback((e,n)=>{let{type:t,changes:r}=n;switch(t){case l.Kb.stateChangeTypes.MenuMouseLeave:return{...r,highlightedIndex:e.highlightedIndex};case l.Kb.stateChangeTypes.InputClick:let s=!!u||r.isOpen;return{...r,isOpen:s};default:return r}},[u]),v=(0,l.Kb)({items:null!=n?n:[],defaultIsOpen:o,onSelectedItemChange(e){let{selectedItem:n}=e;n&&(null==t||t(n),null==d||d(!1))},onIsOpenChange:e=>{let{isOpen:n}=e;null==d||d(!!n)},stateReducer:h}),{setHighlightedIndex:x,highlightedIndex:p}=v,g=(0,i.Z)(o)?v.isOpen:v.isOpen&&o;s.useEffect(()=>{g&&(null==n?void 0:n.length)&&-1===p&&x(0)},[g,n]);let j=s.useMemo(()=>({...v,open:g,anchorRef:m}),[v,g,m]);return(0,r.jsx)(f.Provider,{value:j,children:(0,r.jsx)(c.J2,{open:g,children:"function"==typeof a?a(j):a})})}g.displayName="SearchableSelectOption"},51908:function(e,n,t){t.d(n,{I:function(){return i}});var r=t(57437),s=t(2265),l=t(39311);let i=s.forwardRef((e,n)=>{let{className:t,type:s,...i}=e;return(0,r.jsx)("input",{type:s,className:(0,l.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",t),ref:n,...i})});i.displayName="Input"},25831:function(e,n,t){t.d(n,{J2:function(){return a},i9:function(){return c},tW:function(){return u},xo:function(){return o},xp:function(){return d},yk:function(){return f}});var r=t(57437),s=t(2265),l=t(65050),i=t(39311);let a=l.fC,o=l.xz,d=l.x8,c=l.h_,u=l.ee,f=s.forwardRef((e,n)=>{let{className:t,sideOffset:s=4,...a}=e;return(0,r.jsx)(l.VY,{ref:n,sideOffset:s,className:(0,i.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",t),...a})});f.displayName=l.VY.displayName},95482:function(e,n,t){t.d(n,{_v:function(){return c},aJ:function(){return d},pn:function(){return a},u:function(){return o}});var r=t(57437),s=t(2265),l=t(98567),i=t(39311);let a=l.zt,o=l.fC,d=l.xz,c=s.forwardRef((e,n)=>{let{className:t,sideOffset:s=4,...a}=e;return(0,r.jsx)(l.VY,{ref:n,sideOffset:s,className:(0,i.cn)("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-xs font-medium text-popover-foreground shadow-md animate-in fade-in-50 data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1",t),...a})});c.displayName=l.VY.displayName},55909:function(e,n,t){t.d(n,{Y:function(){return j},n:function(){return b}});var r=t(57437),s=t(11372),l=t(30713),i=t(1589),a=t(10356),o=t(1592),d=t(39311),c=t(2265),u=t(26694);let f=c.forwardRef((e,n)=>{let{className:t,...s}=e;return(0,r.jsx)(u.fC,{ref:n,className:(0,d.cn)("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",t),...s})});f.displayName=u.fC.displayName;let m=c.forwardRef((e,n)=>{let{className:t,...s}=e;return(0,r.jsx)(u.Ee,{ref:n,className:(0,d.cn)("aspect-square h-full w-full",t),...s})});m.displayName=u.Ee.displayName;let h=c.forwardRef((e,n)=>{let{className:t,...s}=e;return(0,r.jsx)(u.NY,{ref:n,className:(0,d.cn)("flex h-full w-full items-center justify-center rounded-full bg-muted",t),...s})});h.displayName=u.NY.displayName;var v=t(25645),x=t(67133).lW;let p="not_found",g=!0;function j(e){var n;let{className:t}=e,[{data:l}]=(0,a.P)(),c=null==l?void 0:l.me.id,u=c&&"/avatar/".concat(l.me.id)||null,{data:j,isLoading:b,error:w}=(0,i.Z)(u,e=>{if(g)return(0,o.Z)(e,{responseFormatter:async e=>{let n=await e.blob(),t=x.from(await n.arrayBuffer());return"data:image/png;base64,".concat(t.toString("base64"))},errorHandler:e=>{if(404===e.status)throw Error(p)}})});if(!c)return null;if(b)return(0,r.jsx)(v.O,{className:(0,d.cn)("h-16 w-16 rounded-full",t)});if((null==w?void 0:w.message)===p&&(g=!1),!j){let e=(0,s.B)(l.me.email);return(0,r.jsx)(s.Z,{className:(0,d.cn)("h-16 w-16",t),...e})}return(0,r.jsxs)(f,{className:(0,d.cn)("h-16 w-16",t),children:[(0,r.jsx)(m,{src:j,alt:l.me.email,className:"object-cover"}),(0,r.jsx)(h,{children:null===(n=l.me)||void 0===n?void 0:n.email.substring(0,2)})]})}let b=e=>{g=!0,(0,l.JG)("/avatar/".concat(e))}},77723:function(e,n,t){t.d(n,{m:function(){return a}});var r=t(2265),s=t(2390),l=t.n(s),i=t(71424);function a(e){let{timeout:n=2e3,onError:t}=e,[s,a]=r.useState(!1),o=()=>{a(!0),setTimeout(()=>{a(!1)},n)},d=e=>{if("function"==typeof t){null==t||t(e);return}i.A.error("Failed to copy.")};return{isCopied:s,copyToClipboard:e=>{var n;if(e){if(null===(n=navigator.clipboard)||void 0===n?void 0:n.writeText)navigator.clipboard.writeText(e).then(o).catch(d);else{let n=l()(e);n?o():d()}}}}}},10356:function(e,n,t){t.d(n,{P:function(){return i}});var r=t(99109),s=t(60106);let l=(0,s.BX)("\n  query MeQuery {\n    me {\n      id\n      authToken\n      email\n      isAdmin\n      isPasswordSet\n    }\n  }\n"),i=()=>(0,r.aM)({query:l})},1592:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(18398),s=t(34084),l=t(53771),i=t(58001),a=t(37004);async function o(e,n){var t;let r=null!==(t=null==n?void 0:n.customFetch)&&void 0!==t?t:window.fetch;if(function(e){var n;if(e.startsWith("/oauth/providers"))return!1;let t=null===(n=(0,a.bW)())||void 0===n?void 0:n.accessToken;if(!t)return!0;try{let{exp:e}=(0,l.o)(t);return(0,a.pw)(e)}catch(e){return!0}}(e))return a.gN.refreshToken(d).then(t=>f(e,n));let s=await r(e,c(n));return 401===s.status?a.gN.refreshToken(d).then(t=>f(e,n)):m(s,n)}async function d(){var e,n;let t=null===(e=(0,a.bW)())||void 0===e?void 0:e.refreshToken;if(!t)return;let r=await u(t);return null==r?void 0:null===(n=r.data)||void 0===n?void 0:n.refreshToken}function c(e){var n;let t=new Headers(null==e?void 0:e.headers);return t.append("authorization","Bearer ".concat(null===(n=(0,a.bW)())||void 0===n?void 0:n.accessToken)),{...e||{},headers:t}}async function u(e){let n=new r.KU({url:"/graphql",requestPolicy:"network-only",exchanges:[r.Ek]}),t=n.createRequestOperation("mutation",(0,s.h)(i.Dp,{refreshToken:e}));return n.executeMutation(t)}function f(e,n){var t;let r=null!==(t=null==n?void 0:n.customFetch)&&void 0!==t?t:window.fetch;return r(e,c(n)).then(e=>m(e,n))}function m(e,n){return(null==e?void 0:e.ok)?(null==n?void 0:n.responseFormatter)?n.responseFormatter(e):(null==n?void 0:n.responseFormat)==="blob"?e.blob():e.json():(null==n?void 0:n.errorHandler)?n.errorHandler(e):void 0}},66566:function(e,n){n.Z={src:"/_next/static/media/tabby.16ac81a9.png",height:175,width:175,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA50lEQVR42mMAgUWTGw3KsqO9QOypZeG6NekBuQzI4NCmmaZtFam/K6PtHzYlOH5ysDX7n5QYboJQsKrfd1JN6v+ldXH/F+fa/fWyNf4fEebXBlcwsSbNeWV/+f9FE+t+za2K+xNjLfPf293u6v///xkZQGDDwr7gfetm/d8xr+VPkpXgnzR3nf/xAY6vt6yfK84AUrV5+US9HWtnnVgyrfm/tiTD/9JAo//5Ea5nGUDAkoGBCUQHWEiZysuI7LcwN7wb6WV1IT7YzR7uhh3Lepg+AU2av2AiT0pCuDKDayAvSLwsM4oJAH4LXl0Gpb0HAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}}}]);