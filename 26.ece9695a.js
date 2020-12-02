(window.webpackJsonp=window.webpackJsonp||[]).push([[26,29],{127:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(113);t.default=function(){return r.a.createElement(o.a,{title:"Page Not Found"},r.a.createElement("main",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6 col--offset-3"},r.a.createElement("h1",{className:"hero__title"},"Page Not Found"),r.a.createElement("p",null,"We could not find what you were looking for."),r.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}},151:function(e,t,a){"use strict";const n=(e,{target:t=document.body}={})=>{const a=document.createElement("textarea"),n=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";const r=document.getSelection();let o=!1;r.rangeCount>0&&(o=r.getRangeAt(0)),t.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;let l=!1;try{l=document.execCommand("copy")}catch(c){}return a.remove(),o&&(r.removeAllRanges(),r.addRange(o)),n&&n.focus(),l};e.exports=n,e.exports.default=n},152:function(e,t){function a(e){let t,a=[];for(let n of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(n))a.push(parseInt(n,10));else if(t=n.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,n,r,o]=t;if(n&&o){n=parseInt(n),o=parseInt(o);const e=n<o?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(o+=e);for(let t=n;t!==o;t+=e)a.push(t)}}return a}t.default=a,e.exports=a},93:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),u=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=u(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),p=u(a),d=n,b=p["".concat(l,".").concat(d)]||p[d]||m[d]||o;return a?r.a.createElement(b,c(c({ref:t},i),{},{components:a})):r.a.createElement(b,c({ref:t},i))}));d.displayName="MDXCreateElement";var b=a(22),y=a(26),h=a(113),f=a(3),g=a(99),v=a(100),j=a(102),k=a(132),O=a(133),E=a(131),N=a(105),C=a(98),x=a(142),w=a(65),P=a.n(w);const S=(e,t)=>"link"===e.type?Object(v.isSamePath)(e.href,t):"category"===e.type&&e.items.some((e=>S(e,t)));function T({item:e,onItemClick:t,collapsible:a,activePath:o,...l}){const{items:c,label:s}=e,i=S(e,o),u=function(e){const t=Object(n.useRef)(e);return Object(n.useEffect)((()=>{t.current=e}),[e]),t.current}(i),[p,m]=Object(n.useState)((()=>!!a&&(!i&&e.collapsed))),d=Object(n.useRef)(null),[b,y]=Object(n.useState)(void 0),h=(e=!0)=>{var t;y(e?`${null===(t=d.current)||void 0===t?void 0:t.scrollHeight}px`:void 0)};Object(n.useEffect)((()=>{i&&!u&&p&&m(!1)}),[i,u,p]);const v=Object(n.useCallback)((e=>{e.preventDefault(),b||h(),setTimeout((()=>m((e=>!e))),100)}),[b]);return 0===c.length?null:r.a.createElement("li",{className:Object(g.a)("menu__list-item",{"menu__list-item--collapsed":p}),key:s},r.a.createElement("a",Object(f.a)({className:Object(g.a)("menu__link",{"menu__link--sublist":a,"menu__link--active":a&&i,[P.a.menuLinkText]:!a}),onClick:a?v:void 0,href:a?"#!":void 0},l),s),r.a.createElement("ul",{className:"menu__list",ref:d,style:{height:b},onTransitionEnd:()=>{p||h(!1)}},c.map((e=>r.a.createElement(D,{tabIndex:p?"-1":"0",key:e.label,item:e,onItemClick:t,collapsible:a,activePath:o})))))}function _({item:e,onItemClick:t,activePath:a,collapsible:n,...o}){const{href:l,label:c}=e,s=S(e,a);return r.a.createElement("li",{className:"menu__list-item",key:c},r.a.createElement(N.a,Object(f.a)({className:Object(g.a)("menu__link",{"menu__link--active":s}),to:l},Object(C.a)(l)?{isNavLink:!0,exact:!0,onClick:t}:{target:"_blank",rel:"noreferrer noopener"},o),c))}function D(e){switch(e.item.type){case"category":return r.a.createElement(T,e);case"link":default:return r.a.createElement(_,e)}}var I=function({path:e,sidebar:t,sidebarCollapsible:a=!0,onCollapse:o,isHidden:l}){const[c,s]=Object(n.useState)(!1),{navbar:{hideOnScroll:i},hideableSidebar:u}=Object(v.useThemeConfig)(),{isAnnouncementBarClosed:p}=Object(j.a)(),{scrollY:m}=Object(E.a)();Object(k.a)(c);const d=Object(O.a)();return Object(n.useEffect)((()=>{d===O.b.desktop&&s(!1)}),[d]),r.a.createElement("div",{className:Object(g.a)(P.a.sidebar,{[P.a.sidebarWithHideableNavbar]:i,[P.a.sidebarHidden]:l})},i&&r.a.createElement(x.a,{tabIndex:-1,className:P.a.sidebarLogo}),r.a.createElement("div",{className:Object(g.a)("menu","menu--responsive","thin-scrollbar",P.a.menu,{"menu--show":c,[P.a.menuWithAnnouncementBar]:!p&&0===m})},r.a.createElement("button",{"aria-label":c?"Close Menu":"Open Menu","aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:()=>{s(!c)}},c?r.a.createElement("span",{className:Object(g.a)(P.a.sidebarMenuIcon,P.a.sidebarMenuCloseIcon)},"\xd7"):r.a.createElement("svg",{"aria-label":"Menu",className:P.a.sidebarMenuIcon,xmlns:"http://www.w3.org/2000/svg",height:24,width:24,viewBox:"0 0 32 32",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement("ul",{className:"menu__list"},t.map((t=>r.a.createElement(D,{key:t.label,item:t,onItemClick:e=>{e.target.blur(),s(!1)},collapsible:a,activePath:e}))))),u&&r.a.createElement("button",{type:"button",title:"Collapse sidebar","aria-label":"Collapse sidebar",className:Object(g.a)("button button--secondary button--outline",P.a.collapseSidebarButton),onClick:o}))},L={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},M={Prism:a(24).a,theme:L};function B(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function $(){return($=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var R=/\r\n|\r|\n/,A=function(e){0===e.length?e.push({types:["plain"],content:"",empty:!0}):1===e.length&&""===e[0].content&&(e[0].empty=!0)},W=function(e,t){var a=e.length;return a>0&&e[a-1]===t?e:e.concat(t)},F=function(e,t){var a=e.plain,n=Object.create(null),r=e.styles.reduce((function(e,a){var n=a.languages,r=a.style;return n&&!n.includes(t)||a.types.forEach((function(t){var a=$({},e[t],r);e[t]=a})),e}),n);return r.root=a,r.plain=$({},a,{backgroundColor:null}),r};function H(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}var z=function(e){function t(){for(var t=this,a=[],n=arguments.length;n--;)a[n]=arguments[n];e.apply(this,a),B(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var a=e.theme?F(e.theme,e.language):void 0;return t.themeDict=a})),B(this,"getLineProps",(function(e){var a=e.key,n=e.className,r=e.style,o=$({},H(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(o.style=l.plain),void 0!==r&&(o.style=void 0!==o.style?$({},o.style,r):r),void 0!==a&&(o.key=a),n&&(o.className+=" "+n),o})),B(this,"getStyleForToken",(function(e){var a=e.types,n=e.empty,r=a.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===r&&"plain"===a[0])return n?{display:"inline-block"}:void 0;if(1===r&&!n)return o[a[0]];var l=n?{display:"inline-block"}:{},c=a.map((function(e){return o[e]}));return Object.assign.apply(Object,[l].concat(c))}})),B(this,"getTokenProps",(function(e){var a=e.key,n=e.className,r=e.style,o=e.token,l=$({},H(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==r&&(l.style=void 0!==l.style?$({},l.style,r):r),void 0!==a&&(l.key=a),n&&(l.className+=" "+n),l}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,a=e.language,n=e.code,r=e.children,o=this.getThemeDict(this.props),l=t.languages[a];return r({tokens:function(e){for(var t=[[]],a=[e],n=[0],r=[e.length],o=0,l=0,c=[],s=[c];l>-1;){for(;(o=n[l]++)<r[l];){var i=void 0,u=t[l],p=a[l][o];if("string"==typeof p?(u=l>0?u:["plain"],i=p):(u=W(u,p.type),p.alias&&(u=W(u,p.alias)),i=p.content),"string"==typeof i){var m=i.split(R),d=m.length;c.push({types:u,content:m[0]});for(var b=1;b<d;b++)A(c),s.push(c=[]),c.push({types:u,content:m[b]})}else l++,t.push(u),a.push(i),n.push(0),r.push(i.length)}l--,t.pop(),a.pop(),n.pop(),r.pop()}return A(c),s}(void 0!==l?t.tokenize(n,l,a):[n]),className:"prism-code language-"+a,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(n.Component),J=a(151),K=a.n(J),U=a(152),V=a.n(U),X={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},Y=a(123);var q=()=>{const{prism:e}=Object(v.useThemeConfig)(),{isDarkTheme:t}=Object(Y.a)(),a=e.theme||X,n=e.darkTheme||a;return t?n:a},G=a(66),Q=a.n(G);const Z=/{([\d,-]+)}/,ee=(e=["js","jsBlock","jsx","python","html"])=>{const t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},a=["highlight-next-line","highlight-start","highlight-end"].join("|"),n=e.map((e=>`(?:${t[e].start}\\s*(${a})\\s*${t[e].end})`)).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)},te=/(?:title=")(.*)(?:")/;var ae=({children:e,className:t,metastring:a})=>{const{prism:o}=Object(v.useThemeConfig)(),[l,c]=Object(n.useState)(!1),[s,i]=Object(n.useState)(!1);Object(n.useEffect)((()=>{i(!0)}),[]);const u=Object(n.useRef)(null);let p=[],m="";const d=q();if(Array.isArray(e)&&(e=e.join("")),a&&Z.test(a)){const e=a.match(Z)[1];p=V()(e).filter((e=>e>0))}a&&te.test(a)&&(m=a.match(te)[1]);let b=t&&t.replace(/language-/,"");!b&&o.defaultLanguage&&(b=o.defaultLanguage);let y=e.replace(/\n$/,"");if(0===p.length&&void 0!==b){let t="";const a=(e=>{switch(e){case"js":case"javascript":case"ts":case"typescript":return ee(["js","jsBlock"]);case"jsx":case"tsx":return ee(["js","jsBlock","jsx"]);case"html":return ee(["js","jsBlock","html"]);case"python":case"py":return ee(["python"]);default:return ee()}})(b),n=e.replace(/\n$/,"").split("\n");let r;for(let e=0;e<n.length;){const o=e+1,l=n[e].match(a);if(null!==l){switch(l.slice(1).reduce(((e,t)=>e||t),void 0)){case"highlight-next-line":t+=`${o},`;break;case"highlight-start":r=o;break;case"highlight-end":t+=`${r}-${o-1},`}n.splice(e,1)}else e+=1}p=V()(t),y=n.join("\n")}const h=()=>{K()(y),c(!0),setTimeout((()=>c(!1)),2e3)};return r.a.createElement(z,Object(f.a)({},M,{key:String(s),theme:d,code:y,language:b}),(({className:e,style:t,tokens:a,getLineProps:n,getTokenProps:o})=>r.a.createElement(r.a.Fragment,null,m&&r.a.createElement("div",{style:t,className:Q.a.codeBlockTitle},m),r.a.createElement("div",{className:Q.a.codeBlockContent},r.a.createElement("div",{tabIndex:0,className:Object(g.a)(e,Q.a.codeBlock,"thin-scrollbar",{[Q.a.codeBlockWithTitle]:m})},r.a.createElement("div",{className:Q.a.codeBlockLines,style:t},a.map(((e,t)=>{1===e.length&&""===e[0].content&&(e[0].content="\n");const a=n({line:e,key:t});return p.includes(t+1)&&(a.className=`${a.className} docusaurus-highlight-code-line`),r.a.createElement("div",Object(f.a)({key:t},a),e.map(((e,t)=>r.a.createElement("span",Object(f.a)({key:t},o({token:e,key:t}))))))})))),r.a.createElement("button",{ref:u,type:"button","aria-label":"Copy code to clipboard",className:Object(g.a)(Q.a.copyButton),onClick:h},l?"Copied":"Copy")))))},ne=(a(67),a(68)),re=a.n(ne);var oe=e=>function({id:t,...a}){const{navbar:{hideOnScroll:n}}=Object(v.useThemeConfig)();return t?r.a.createElement(e,a,r.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(g.a)("anchor",{[re.a.enhancedAnchor]:!n}),id:t}),a.children,r.a.createElement("a",{className:"hash-link",href:`#${t}`,title:"Direct link to heading"},"#")):r.a.createElement(e,a)},le=a(69),ce=a.n(le);var se={code:e=>{const{children:t}=e;return"string"==typeof t?t.includes("\n")?r.a.createElement(ae,e):r.a.createElement("code",e):t},a:e=>r.a.createElement(N.a,e),pre:e=>r.a.createElement("div",Object(f.a)({className:ce.a.mdxCodeBlock},e)),h1:oe("h1"),h2:oe("h2"),h3:oe("h3"),h4:oe("h4"),h5:oe("h5"),h6:oe("h6")},ie=a(127),ue=a(104),pe=a(70),me=a.n(pe);function de({currentDocRoute:e,versionMetadata:t,children:a}){var o,l;const{siteConfig:c,isClient:s}=Object(b.default)(),{pluginId:i,permalinkToSidebar:u,docsSidebars:m,version:d}=t,y=u[e.path],f=m[y],[j,k]=Object(n.useState)(!1),[O,E]=Object(n.useState)(!1),N=Object(n.useCallback)((()=>{O&&E(!1),k(!j)}),[O]);return r.a.createElement(h.a,{key:s,searchMetadatas:{version:d,tag:Object(v.docVersionSearchTag)(i,d)}},r.a.createElement("div",{className:me.a.docPage},f&&r.a.createElement("div",{className:Object(g.a)(me.a.docSidebarContainer,{[me.a.docSidebarContainerHidden]:j}),onTransitionEnd:e=>{e.currentTarget.classList.contains(me.a.docSidebarContainer)&&j&&E(!0)},role:"complementary"},r.a.createElement(I,{key:y,sidebar:f,path:e.path,sidebarCollapsible:null===(o=null===(l=c.themeConfig)||void 0===l?void 0:l.sidebarCollapsible)||void 0===o||o,onCollapse:N,isHidden:O}),O&&r.a.createElement("div",{className:me.a.collapsedDocSidebar,title:"Expand sidebar","aria-label":"Expand sidebar",tabIndex:0,role:"button",onKeyDown:N,onClick:N})),r.a.createElement("main",{className:me.a.docMainContainer},r.a.createElement("div",{className:Object(g.a)("container padding-vert--lg",me.a.docItemWrapper,{[me.a.docItemWrapperEnhanced]:j})},r.a.createElement(p,{components:se},a)))))}t.default=function(e){const{route:{routes:t},versionMetadata:a,location:n}=e,o=t.find((e=>Object(ue.matchPath)(n.pathname,e)));return o?r.a.createElement(de,{currentDocRoute:o,versionMetadata:a},Object(y.a)(t)):r.a.createElement(ie.default,e)}}}]);