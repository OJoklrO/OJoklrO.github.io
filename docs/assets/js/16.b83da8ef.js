(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{623:function(t,e,n){"use strict";n.d(e,"d",(function(){return r})),n.d(e,"a",(function(){return a})),n.d(e,"f",(function(){return s})),n.d(e,"b",(function(){return c})),n.d(e,"e",(function(){return l})),n.d(e,"h",(function(){return p})),n.d(e,"i",(function(){return d})),n.d(e,"c",(function(){return f})),n.d(e,"g",(function(){return h}));n(386);const r=/#.*$/,i=/\.(md|html)$/,a=/\/$/,s=/^[a-z]+:/i;function o(t){return decodeURI(t).replace(r,"").replace(i,"")}function u(t){return s.test(t)}function c(t){if(u(t))return t;const e=t.match(r),n=e?e[0]:"",i=o(t);return a.test(i)?t:i+".html"+n}function l(t,e){const n=t.hash,i=function(t){const e=t.match(r);if(e)return e[0]}(e);if(i&&n!==i)return!1;return o(t.path)===o(e)}function p(t,e,n){if(u(e))return{type:"external",path:e};n&&(e=function(t,e,n){const r=t.charAt(0);if("/"===r)return t;if("?"===r||"#"===r)return e+t;const i=e.split("/");n&&i[i.length-1]||i.pop();const a=t.replace(/^\//,"").split("/");for(let t=0;t<a.length;t++){const e=a[t];".."===e?i.pop():"."!==e&&i.push(e)}""!==i[0]&&i.unshift("");return i.join("/")}(e,n));const r=o(e);for(let e=0;e<t.length;e++)if(o(t[e].regularPath)===r)return Object.assign({},t[e],{type:"page",path:c(t[e].path)});return console.error(`[vuepress] No matching page found for sidebar item "${e}"`),{}}function d(t,e,n,r){const{pages:i,themeConfig:a}=n,s=r&&a.locales&&a.locales[r]||a;if("auto"===(t.frontmatter.sidebar||s.sidebar||a.sidebar))return function(t){const e=f(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map(e=>({type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}))}]}(t);const o=s.sidebar||a.sidebar;if(o){const{base:t,config:n}=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(const r in e)if(0===(n=t,/(\.html|\/)$/.test(n)?n:n+"/").indexOf(encodeURI(r)))return{base:r,config:e[r]};var n;return{}}(e,o);return n?n.map(e=>function t(e,n,r,i=1){if("string"==typeof e)return p(n,e,r);if(Array.isArray(e))return Object.assign(p(n,e[0],r),{title:e[1]});{i>3&&console.error("[vuepress] detected a too deep nested sidebar group.");const a=e.children||[];return 0===a.length&&e.path?Object.assign(p(n,e.path,r),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,children:a.map(e=>t(e,n,r,i+1)),collapsable:!1!==e.collapsable}}}(e,i,t)):[]}return[]}function f(t){let e;return(t=t.map(t=>Object.assign({},t))).forEach(t=>{2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)}),t.filter(t=>2===t.level)}function h(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},624:function(t,e,n){},631:function(t,e,n){"use strict";n(624)},633:function(t,e,n){"use strict";n.r(e);var r=n(623);function i(t,e,n,r,i){const a={props:{to:e,activeClass:"",exactActiveClass:""},attrs:{title:n},class:{active:r,"sidebar-link":!0}};return i>2&&(a.style={"padding-left":i+"rem"}),t("RouterLink",a,n)}function a(t,e,n,s,o,u=1){return!e||u>o?null:t("ul",{class:"sidebar-sub-headers"},e.map(e=>{const c=Object(r.e)(s,n+"#"+e.slug);return t("li",{class:"sidebar-sub-header"},[i(t,n+"#"+e.slug,e.title,c,e.level-1),a(t,e.children,n,s,o,u+1)])}))}var s={functional:!0,props:["item","sidebarDepth"],render(t,{parent:{$page:e,$site:n,$route:s,$themeConfig:o,$themeLocaleConfig:u},props:{item:c,sidebarDepth:l}}){const p=Object(r.e)(s,c.path),d="auto"===c.type?p||c.children.some(t=>Object(r.e)(s,c.basePath+"#"+t.slug)):p,f="external"===c.type?function(t,e,n){return t("a",{attrs:{href:e,target:"_blank",rel:"noopener noreferrer"},class:{"sidebar-link":!0}},[n,t("OutboundLink")])}(t,c.path,c.title||c.path):i(t,c.path,c.title||c.path,d),h=[e.frontmatter.sidebarDepth,l,u.sidebarDepth,o.sidebarDepth,1].find(t=>void 0!==t),b=u.displayAllHeaders||o.displayAllHeaders;if("auto"===c.type)return[f,a(t,c.children,c.basePath,s,h)];if((d||b)&&c.headers&&!r.d.test(c.path)){return[f,a(t,Object(r.c)(c.headers),c.path,s,h)]}return f}},o=(n(631),n(38)),u=Object(o.a)(s,void 0,void 0,!1,null,null,null);e.default=u.exports}}]);