(window.webpackJsonp=window.webpackJsonp||[]).push([[8,3,16,18],{623:function(t,e,n){"use strict";n.d(e,"d",(function(){return r})),n.d(e,"a",(function(){return a})),n.d(e,"f",(function(){return i})),n.d(e,"b",(function(){return u})),n.d(e,"e",(function(){return c})),n.d(e,"h",(function(){return p})),n.d(e,"i",(function(){return d})),n.d(e,"c",(function(){return h})),n.d(e,"g",(function(){return f}));n(386);const r=/#.*$/,s=/\.(md|html)$/,a=/\/$/,i=/^[a-z]+:/i;function o(t){return decodeURI(t).replace(r,"").replace(s,"")}function l(t){return i.test(t)}function u(t){if(l(t))return t;const e=t.match(r),n=e?e[0]:"",s=o(t);return a.test(s)?t:s+".html"+n}function c(t,e){const n=t.hash,s=function(t){const e=t.match(r);if(e)return e[0]}(e);if(s&&n!==s)return!1;return o(t.path)===o(e)}function p(t,e,n){if(l(e))return{type:"external",path:e};n&&(e=function(t,e,n){const r=t.charAt(0);if("/"===r)return t;if("?"===r||"#"===r)return e+t;const s=e.split("/");n&&s[s.length-1]||s.pop();const a=t.replace(/^\//,"").split("/");for(let t=0;t<a.length;t++){const e=a[t];".."===e?s.pop():"."!==e&&s.push(e)}""!==s[0]&&s.unshift("");return s.join("/")}(e,n));const r=o(e);for(let e=0;e<t.length;e++)if(o(t[e].regularPath)===r)return Object.assign({},t[e],{type:"page",path:u(t[e].path)});return console.error(`[vuepress] No matching page found for sidebar item "${e}"`),{}}function d(t,e,n,r){const{pages:s,themeConfig:a}=n,i=r&&a.locales&&a.locales[r]||a;if("auto"===(t.frontmatter.sidebar||i.sidebar||a.sidebar))return function(t){const e=h(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map(e=>({type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}))}]}(t);const o=i.sidebar||a.sidebar;if(o){const{base:t,config:n}=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(const r in e)if(0===(n=t,/(\.html|\/)$/.test(n)?n:n+"/").indexOf(encodeURI(r)))return{base:r,config:e[r]};var n;return{}}(e,o);return n?n.map(e=>function t(e,n,r,s=1){if("string"==typeof e)return p(n,e,r);if(Array.isArray(e))return Object.assign(p(n,e[0],r),{title:e[1]});{s>3&&console.error("[vuepress] detected a too deep nested sidebar group.");const a=e.children||[];return 0===a.length&&e.path?Object.assign(p(n,e.path,r),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,children:a.map(e=>t(e,n,r,s+1)),collapsable:!1!==e.collapsable}}}(e,s,t)):[]}return[]}function h(t){let e;return(t=t.map(t=>Object.assign({},t))).forEach(t=>{2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)}),t.filter(t=>2===t.level)}function f(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},624:function(t,e,n){},625:function(t,e,n){},628:function(t,e,n){},631:function(t,e,n){"use strict";n(624)},632:function(t,e,n){"use strict";n.r(e);var r=n(646),s=n(633),a=n(623);function i(t,e){return"group"===e.type&&e.children.some(e=>"group"===e.type?i(t,e):"page"===e.type&&Object(a.e)(t,e.path))}var o={name:"SidebarLinks",components:{SidebarGroup:r.default,SidebarLink:s.default},props:["items","depth","sidebarDepth"],data:()=>({openGroupIndex:0}),watch:{$route(){this.refreshIndex()}},created(){this.refreshIndex()},methods:{refreshIndex(){const t=function(t,e){for(let n=0;n<e.length;n++){const r=e[n];if(i(t,r))return n}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive(t){return Object(a.e)(this.$route,t.regularPath)}}},l=n(38),u=Object(l.a)(o,(function(){var t=this,e=t._self._c;return t.items.length?e("ul",{staticClass:"sidebar-links"},t._l(t.items,(function(n,r){return e("li",{key:r},["group"===n.type?e("SidebarGroup",{attrs:{item:n,open:r===t.openGroupIndex,collapsable:n.collapsable||n.collapsible,depth:t.depth},on:{toggle:function(e){return t.toggleGroup(r)}}}):e("SidebarLink",{attrs:{"sidebar-depth":t.sidebarDepth,item:n}})],1)})),0):t._e()}),[],!1,null,null,null);e.default=u.exports},633:function(t,e,n){"use strict";n.r(e);var r=n(623);function s(t,e,n,r,s){const a={props:{to:e,activeClass:"",exactActiveClass:""},attrs:{title:n},class:{active:r,"sidebar-link":!0}};return s>2&&(a.style={"padding-left":s+"rem"}),t("RouterLink",a,n)}function a(t,e,n,i,o,l=1){return!e||l>o?null:t("ul",{class:"sidebar-sub-headers"},e.map(e=>{const u=Object(r.e)(i,n+"#"+e.slug);return t("li",{class:"sidebar-sub-header"},[s(t,n+"#"+e.slug,e.title,u,e.level-1),a(t,e.children,n,i,o,l+1)])}))}var i={functional:!0,props:["item","sidebarDepth"],render(t,{parent:{$page:e,$site:n,$route:i,$themeConfig:o,$themeLocaleConfig:l},props:{item:u,sidebarDepth:c}}){const p=Object(r.e)(i,u.path),d="auto"===u.type?p||u.children.some(t=>Object(r.e)(i,u.basePath+"#"+t.slug)):p,h="external"===u.type?function(t,e,n){return t("a",{attrs:{href:e,target:"_blank",rel:"noopener noreferrer"},class:{"sidebar-link":!0}},[n,t("OutboundLink")])}(t,u.path,u.title||u.path):s(t,u.path,u.title||u.path,d),f=[e.frontmatter.sidebarDepth,c,l.sidebarDepth,o.sidebarDepth,1].find(t=>void 0!==t),b=l.displayAllHeaders||o.displayAllHeaders;if("auto"===u.type)return[h,a(t,u.children,u.basePath,i,f)];if((d||b)&&u.headers&&!r.d.test(u.path)){return[h,a(t,Object(r.c)(u.headers),u.path,i,f)]}return h}},o=(n(631),n(38)),l=Object(o.a)(i,void 0,void 0,!1,null,null,null);e.default=l.exports},634:function(t,e,n){"use strict";n(625)},639:function(t,e,n){"use strict";n(628)},640:function(t,e,n){},646:function(t,e,n){"use strict";n.r(e);var r={name:"SidebarGroup",props:["item","open","collapsable","depth"],beforeCreate(){this.$options.components.SidebarLinks=n(632).default},methods:{isActive:n(623).e}},s=(n(639),n(38)),a=Object(s.a)(r,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"sidebar-group",class:[{collapsable:t.collapsable,"is-sub-group":0!==t.depth},"depth-"+t.depth]},[t.item.path?e("RouterLink",{staticClass:"sidebar-heading clickable",class:{open:t.open,active:t.isActive(t.$route,t.item.path)},attrs:{to:t.item.path},nativeOn:{click:function(e){return t.$emit("toggle")}}},[e("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?e("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]):e("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){return t.$emit("toggle")}}},[e("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?e("span",{staticClass:"arrow",class:t.open?"down":"right"},[e("a-icon",{attrs:{type:"down"}})],1):t._e()]),t._v(" "),t.open||!t.collapsable?e("SidebarLinks",{staticClass:"sidebar-group-items",attrs:{items:t.item.children,"sidebar-depth":t.item.sidebarDepth,depth:t.depth+1}}):t._e()],1)}),[],!1,null,null,null);e.default=a.exports},647:function(t,e,n){"use strict";n.r(e);var r={name:"Ads",methods:{gotoLink(){window.open(this.data.link)},popupInfo(){this.$info({title:this.data.msgTitle||"Message Title",content:this.data.msgText||"Put your text here.",okText:this.data.msgOkText||"Ok",maskClosable:!0})}},computed:{data(){return this.$themeConfig.ads}}},s=(n(634),n(38)),a=Object(s.a)(r,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"ads"},[1===t.data.style?e("div",{attrs:{id:"ads_1"},on:{click:t.gotoLink}},[e("img",{attrs:{src:t.data.image}}),t._v(" "),e("span",{attrs:{title:t.data.text}},[t._v(t._s(t.data.text||"No text"))])]):2===t.data.style?e("div",{attrs:{id:"ads_2"}},[e("a-carousel",{attrs:{autoplay:"",autoplaySpeed:t.data.speed||3e3}},t._l(t.data.items,(function(t,n){return e("div",{key:n},[e("a",{attrs:{href:t.link,target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:t.image,title:t.text}})])])})),0)],1):e("div",{attrs:{id:"ads_3"}},[e("div",{staticClass:"ads_title"},[t._v(t._s(t.data.title||"Sponsor"))]),t._v(" "),e("a-button",{attrs:{type:"primary",ghost:""},on:{click:t.popupInfo}},[t._v(t._s(t.data.btnText||"Become a Sponsor"))])],1)]),t._v(" "),t.data?e("a-divider",{attrs:{dashed:"",id:"reset-margin"}}):t._e()],1)}),[],!1,null,null,null);e.default=a.exports},653:function(t,e,n){"use strict";n(640)},655:function(t,e,n){"use strict";n.r(e);var r=n(632),s=n(647),a={name:"Sidebar",components:{SidebarLinks:r.default,Ads:s.default},props:["items"]},i=(n(653),n(38)),o=Object(i.a)(a,(function(){var t=this._self._c;return t("aside",{staticClass:"sidebar"},[this.$themeConfig.ads?t("Ads"):this._e(),this._v(" "),t("SidebarLinks",{attrs:{depth:0,items:this.items}})],1)}),[],!1,null,null,null);e.default=o.exports}}]);