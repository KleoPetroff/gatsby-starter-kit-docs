(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{232:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return M});var u=n(3),r=n.n(u),a=n(0),D=n.n(a),o=(n(262),n(240)),i=n.n(o),l=n(244),c=n.n(l),s=n(253),d=n.n(s),f=n(245),p=n.n(f),F=n(246),E=n.n(F),m=n(242),v=n.n(m),g=n(247),h=n.n(g),x=n(248),C=n.n(x),b=n(249),y=n.n(b),w=n(280),A=n.n(w),O=n(284),_=n.n(O),j=n(238),k=n.n(j),B=n(239),z=n(255),P=function(e){e.location.pathname;var t=e.data,n=t.page,u=n.html,r=n.frontmatter.title,a=n.fields,o=a.slug,l=a.source,s=n.excerpt,f=t.pages.edges,F=t.footerLinks.html,m=t.copyright.html,g=k.a.headerTitle,x=k.a.headerSubTitle,b=k.a.siteUrl,w=k.a.siteLanguage,O=k.a.siteTitlePostfix,j=f.map(function(e){return e.node}),P="docs"===l?_.a:void 0;return D.a.createElement(D.a.Fragment,null,P&&D.a.createElement(A.a,{title:"Table of content",pages:j,categoryList:z.a,pathname:o}),D.a.createElement(h.a,{themeStyle:P},D.a.createElement(E.a,null,D.a.createElement(c.a,{title:g,subTitle:x}),D.a.createElement(C.a,{items:B.a})),D.a.createElement(i.a,null,D.a.createElement(v.a,{title:r}),D.a.createElement(d.a,{html:u})),D.a.createElement(p.a,{links:F,copyright:m}),D.a.createElement(y.a,{url:""+b+o,language:w,title:""+r+O,description:s})))};P.propTypes={data:r.a.object.isRequired,pageContext:r.a.object.isRequired},t.default=P;var M="378647823"},238:function(e,t){var n="Gatsby Starter Kit",u={siteTitle:n+" - a set of starters for GatsbyJS",siteTitlePostfix:" - "+n,siteDescription:"This is Docs for gatsby-starter-kit, a series of starters for GatsbyJS.",siteImage:"preview.jpg",siteLanguage:"en",headerTitle:""+n,headerSubTitle:"a set of starters for Gatsby.js",siteUrl:"https://github.com/greglobinski/gatsby-starter-kit-docs"};e.exports=u},239:function(e,t,n){"use strict";var u=n(250),r=n.n(u),a=n(251),D=n.n(a),o=n(252),i=n.n(o),l=[{label:"Home",to:"/",icon:r.a,linkProps:{}},{label:"Menu",to:"/content",icon:D.a},{label:"About",to:"/about",icon:i.a}];t.a=l},240:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=D(n(0)),r=D(n(3)),a=D(n(241));function D(e){return e&&e.__esModule?e:{default:e}}var o=function(e){var t=e.children,n=e.themeStyle,r=void 0===n?a.default:n;return u.default.createElement("article",{className:"".concat(r)},t)};o.propTypes={children:r.default.node.isRequired,themeStyle:r.default.string};var i=o;t.default=i},241:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u,r=n(124);function a(){var e=function(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  margin: 0 auto 30px;\n\n  ",";\n"]);return a=function(){return e},e}var D=(0,((u=n(237))&&u.__esModule?u:{default:u}).default)([1024,1280].map(function(e){return"@media (min-width: ".concat(e,"px)")})),o=(0,r.css)(a(),D({maxWidth:["500px","600px","700px"]}));t.default=o},242:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=D(n(0)),r=D(n(3)),a=D(n(243));function D(e){return e&&e.__esModule?e:{default:e}}var o=function(e){var t=e.title,n=e.children,r=e.themeStyle,D=void 0===r?a.default:r;return u.default.createElement("header",{className:"".concat(D)},t?u.default.createElement("h1",null,t):n)};o.propTypes={title:r.default.string,children:r.default.node,themeStyle:r.default.string};var i=o;t.default=i},243:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u,r=n(124);function a(){var e=function(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  h1 {\n    letter-spacing: -0.03em;\n    margin-bottom: 1em;\n    line-height: 1.2;\n    border-left: 6px solid var(--firstActiveColor);\n    padding-left: 15px;\n    color: var(--lightTextColor);\n\n    ",";\n  }\n"]);return a=function(){return e},e}var D=(0,((u=n(237))&&u.__esModule?u:{default:u}).default)([768,1024].map(function(e){return"@media (min-width: ".concat(e,"px)")})),o=(0,r.css)(a(),D({fontSize:["1.8em","2em","2.2em"]}));t.default=o},253:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=D(n(0)),r=D(n(3)),a=D(n(254));function D(e){return e&&e.__esModule?e:{default:e}}var o=function(e){var t=e.html,n=e.children,r=e.themeStyle,D=void 0===r?a.default:r;return u.default.createElement(u.default.Fragment,null,t?u.default.createElement("div",{className:"".concat(D),dangerouslySetInnerHTML:{__html:t}}):u.default.createElement("div",{className:"".concat(D)},n))};o.propTypes={html:r.default.string,themeStyle:r.default.string};var i=o;t.default=i},254:function(e,t,n){"use strict";function u(){var e=function(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  margin-bottom: 50px;\n  min-height: 40vh;\n\n  & .gatsby-resp-image-wrapper {\n    margin: 2em 0;\n  }\n\n  img {\n    border: 1px solid #ddd;\n    border-radius: 5px;\n  }\n\n  a.demoLink {\n    align-items: center;\n    border-radius: 3px;\n    color: var(--firstActiveColor);\n    font-size: 1em;\n    display: flex;\n    text-decoration: none;\n    text-transform: uppercase;\n    padding: 0.6em 2em;\n    background: #f9f9f9;\n    font-weight: 700;\n    font-size: 1.2em;\n    border: 1px solid #ddd;\n    margin: 40px 0 0;\n    width: 100%;\n    justify-content: center;\n\n    @media (hover: hover) {\n      &:hover {\n        background: #eee;\n      }\n    }\n  }\n\n  p {\n    line-height: 1.6;\n    margin: 0 0 1.5em;\n    font-size: 1em;\n  }\n\n  strong {\n    letter-spacing: -0.02em;\n  }\n\n  ul {\n    margin: 0 0 1.5em;\n    list-style: none;\n  }\n\n  li {\n    margin: 0.8em 0;\n    line-height: 1.6;\n    padding: 0 5px 0 20px;\n    position: relative;\n\n    &:before {\n      content: '';\n      width: 4px;\n      height: 4px;\n      background: var(--firstActiveColor);\n      position: absolute;\n      top: 0.6em;\n      left: 1px;\n    }\n  }\n\n  h2,\n  h3 {\n    line-height: 1.2;\n    margin: 1.8em 0 1em;\n    letter-spacing: -0.03em;\n    display: flex;\n  }\n\n  h2 {\n    font-size: 1.6em;\n  }\n\n  h3 {\n    font-size: 1.3em;\n  }\n\n  .anchor {\n    margin-left: -20px;\n    float: none;\n    width: 20px;\n    display: flex;\n    align-items: center;\n  }\n\n  pre {\n    margin: 0 0 1.5em;\n  }\n\n  & *:not(pre) > code[class*='language-'] {\n    background: #eee;\n    color: #333;\n    text-shadow: none;\n    padding: 1px 5px 2px;\n    border-radius: 2px;\n  }\n\n  & pre[class*='language-'] {\n    background: #444;\n  }\n\n  blockquote {\n    background: #f9f9f9;\n    padding: 20px 20px 20px 30px;\n    border-left: 5px solid #ddd;\n    font-style: italic;\n\n    & p:last-child {\n      margin-bottom: 0;\n    }\n  }\n"]);return u=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=(0,n(124).css)(u());t.default=r},255:function(e,t,n){"use strict";var u=n(256),r=n.n(u),a=n(257),D=n.n(a),o=n(258),i=n.n(o),l=n(259),c=n.n(l),s=[{name:"general",label:"Get started",icon:r.a},{name:"starter",label:"Default starters",icon:D.a},{name:"themed",label:"Themed starters",icon:i.a},{name:"other",label:"Everything else",icon:c.a}];t.a=s},256:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var u in n)Object.prototype.hasOwnProperty.call(n,u)&&(e[u]=n[u])}return e},r=D(n(0)),a=D(n(3));function D(e){return e&&e.__esModule?e:{default:e}}var o=function(e){var t=e.color,n=e.size,a=function(e,t){var n={};for(var u in e)t.indexOf(u)>=0||Object.prototype.hasOwnProperty.call(e,u)&&(n[u]=e[u]);return n}(e,["color","size"]);return r.default.createElement("svg",u({xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),r.default.createElement("circle",{cx:"12",cy:"12",r:"3"}),r.default.createElement("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"}))};o.propTypes={color:a.default.string,size:a.default.oneOfType([a.default.string,a.default.number])},o.defaultProps={color:"currentColor",size:"24"},t.default=o},257:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var u in n)Object.prototype.hasOwnProperty.call(n,u)&&(e[u]=n[u])}return e},r=D(n(0)),a=D(n(3));function D(e){return e&&e.__esModule?e:{default:e}}var o=function(e){var t=e.color,n=e.size,a=function(e,t){var n={};for(var u in e)t.indexOf(u)>=0||Object.prototype.hasOwnProperty.call(e,u)&&(n[u]=e[u]);return n}(e,["color","size"]);return r.default.createElement("svg",u({xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),r.default.createElement("line",{x1:"6",y1:"3",x2:"6",y2:"15"}),r.default.createElement("circle",{cx:"18",cy:"6",r:"3"}),r.default.createElement("circle",{cx:"6",cy:"18",r:"3"}),r.default.createElement("path",{d:"M18 9a9 9 0 0 1-9 9"}))};o.propTypes={color:a.default.string,size:a.default.oneOfType([a.default.string,a.default.number])},o.defaultProps={color:"currentColor",size:"24"},t.default=o},258:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var u in n)Object.prototype.hasOwnProperty.call(n,u)&&(e[u]=n[u])}return e},r=D(n(0)),a=D(n(3));function D(e){return e&&e.__esModule?e:{default:e}}var o=function(e){var t=e.color,n=e.size,a=function(e,t){var n={};for(var u in e)t.indexOf(u)>=0||Object.prototype.hasOwnProperty.call(e,u)&&(n[u]=e[u]);return n}(e,["color","size"]);return r.default.createElement("svg",u({xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),r.default.createElement("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),r.default.createElement("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),r.default.createElement("polyline",{points:"21 15 16 10 5 21"}))};o.propTypes={color:a.default.string,size:a.default.oneOfType([a.default.string,a.default.number])},o.defaultProps={color:"currentColor",size:"24"},t.default=o},259:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var u in n)Object.prototype.hasOwnProperty.call(n,u)&&(e[u]=n[u])}return e},r=D(n(0)),a=D(n(3));function D(e){return e&&e.__esModule?e:{default:e}}var o=function(e){var t=e.color,n=e.size,a=function(e,t){var n={};for(var u in e)t.indexOf(u)>=0||Object.prototype.hasOwnProperty.call(e,u)&&(n[u]=e[u]);return n}(e,["color","size"]);return r.default.createElement("svg",u({xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),r.default.createElement("path",{d:"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"}),r.default.createElement("line",{x1:"12",y1:"11",x2:"12",y2:"17"}),r.default.createElement("line",{x1:"9",y1:"14",x2:"15",y2:"14"}))};o.propTypes={color:a.default.string,size:a.default.oneOfType([a.default.string,a.default.number])},o.defaultProps={color:"currentColor",size:"24"},t.default=o},262:function(e,t,n){},280:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=i(n(0)),r=i(n(3)),a=n(48),D=i(n(281)),o=i(n(283));function i(e){return e&&e.__esModule?e:{default:e}}var l=new D.default,c=function(e){var t=e.themeStyle,n=void 0===t?o.default:t,r=e.title,D=e.pages,i=e.categoryList,c=e.pathname,s=function(e,t){return D.reduce(function(e,n){var u=n.frontmatter.categories.reduce(function(e,n){return""===e&&t.find(function(e){return e.name===n})?n:e},"");return u&&e.find(function(e){return e.name===u}).pages.push(n),e},t.map(function(e){return e.pages=[],e}))}(0,i);return u.default.createElement("aside",{className:"".concat(n)},u.default.createElement("h2",null,r),s.map(function(e){var t=e.label,n=e.icon;return u.default.createElement(u.default.Fragment,{key:t},u.default.createElement("h3",null,u.default.createElement(n,null),t),u.default.createElement("ul",null,e.pages.map(function(e){var t=e.frontmatter,n=t.title,r=t.shortTitle,D=e.fields.slug,o=e.headings;return u.default.createElement("li",{key:D,className:c===D?"active":""},u.default.createElement(a.Link,{key:D,to:D},r||n),o.length>0&&u.default.createElement("ul",null,o.map(function(e){var t=e.value,n=e.depth;return l.reset(),2===n&&u.default.createElement("li",{key:t},u.default.createElement("a",{href:"#".concat(l.slug(t))},t))})))})))}))};c.propTypes={pathname:r.default.string.isRequired,title:r.default.string,pages:r.default.array,categoryList:r.default.array,themeStyle:r.default.string};var s=c;t.default=s},281:function(e,t,n){var u=n(282);function r(){if(!(this instanceof r))return new r;this.reset()}e.exports=r,r.prototype.slug=function(e,t){var n=function(e,t){return"string"!=typeof e?"":(t||(e=e.replace(/[A-Z]+/g,D)),e.trim().replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(u(),"").replace(a,"-"))}(e,t=!0===t),r=this.occurrences[n];return this.occurrences.hasOwnProperty(n)?r++:r=0,this.occurrences[n]=r,r&&(n=n+"-"+r),n},r.prototype.reset=function(){this.occurrences={}};var a=/\s/g;function D(e){return e.toLowerCase()}},282:function(e,t){e.exports=function(){return/[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2694\u2696\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD79\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED0\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3]|\uD83E[\uDD10-\uDD18\uDD80-\uDD84\uDDC0]|\uD83C\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uD83C\uDDFE\uD83C[\uDDEA\uDDF9]|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDFC\uD83C[\uDDEB\uDDF8]|\uD83C\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uD83C\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF8\uDDFE\uDDFF]|\uD83C\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uD83C\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uD83C\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uD83C\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uD83C\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uD83C\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uD83C\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uD83C\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uD83C\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uD83C\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uD83C\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uD83C\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uD83C\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uD83C\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uD83C\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uD83C\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|[#\*0-9]\u20E3/g}},283:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u,r=n(124);function a(){var e=function(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  position: fixed;\n  left: 0;\n  top: 0;\n  height: 100vh;\n  background: white;\n  border-right: 1px dotted #ddd;\n  overflow: auto;\n  transition: 0.3s;\n  padding-bottom: 20px;\n\n  ",";\n\n  & h2 {\n    font-size: 0.8em;\n    letter-spacing: 0.2em;\n    color: var(--superLightTextColor);\n    padding: 25px 30px;\n    border-bottom: 1px dotted #ddd;\n    margin-bottom: 15px;\n  }\n\n  & h3 {\n    font-size: 0.7em;\n    letter-spacing: 0.2em;\n    padding: 10px 30px 0;\n    text-transform: uppercase;\n    font-weight: 300;\n    color: var(--lightTextColor);\n    display: flex;\n    align-items: center;\n\n    & svg {\n      width: 15px;\n      margin: 0 5px 0 -5px;\n      stroke: var(--superLightGray);\n    }\n  }\n\n  & a {\n    text-decoration: none;\n  }\n\n  & > ul {\n    font-size: 0.9em;\n    list-style: none;\n    padding: 10px 0 15px;\n\n    & > li {\n      background: white;\n\n      & > a {\n        text-decoration: none;\n        color: #666;\n        padding: 6px 29px;\n        display: block;\n        transition: 0.5s;\n        position: relative;\n        line-height: 1.35;\n\n        &:before {\n          content: '';\n          position: absolute;\n          top: 0;\n          bottom: 0;\n          left: 13px;\n          width: 1px;\n          transform: translateX(-14px);\n          background: var(--secondActiveColor);\n          transition: 0.3s;\n        }\n\n        @media (hover: hover) {\n          &:hover {\n            &:before {\n              transform: translateX(0);\n              width: 5px;\n            }\n          }\n        }\n      }\n\n      & > ul {\n        display: none;\n        list-style: none;\n        margin-left: 17px;\n        font-size: 0.9em;\n\n        & > li {\n          padding: 4px 20px 6px;\n          border-left: 1px dotted var(--firstActiveColor);\n\n          & > a {\n            color: #999;\n          }\n\n          @media (hover: hover) {\n            &:hover {\n              border-left: 1px solid var(--secondActiveColor);\n            }\n          }\n        }\n      }\n\n      &.active {\n        & > a {\n          &:before {\n            background: var(--firstActiveColor);\n            transform: translateX(0);\n            width: 5px;\n          }\n        }\n\n        & > ul {\n          display: block;\n        }\n      }\n    }\n  }\n"]);return a=function(){return e},e}var D=(0,((u=n(237))&&u.__esModule?u:{default:u}).default)([1024,1280].map(function(e){return"@media (min-width: ".concat(e,"px)")})),o=(0,r.css)(a(),D({transform:["translate(-280px, 0)","translate(0, 0)","translate(0, 0)"],width:["280px","300px","320px"]}));t.default=o},284:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u,r=n(124);function a(){var e=function(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  padding: 15px 25px;\n\n  ",";\n\n  &.entry {\n    /*background: red;*/\n  }\n"]);return a=function(){return e},e}var D=(0,((u=n(237))&&u.__esModule?u:{default:u}).default)([1024].map(function(e){return"@media (min-width: ".concat(e,"px)")})),o=(0,r.css)(a(),D({marginLeft:["0","320px"]}));t.default=o}}]);
//# sourceMappingURL=component---src-templates-page-template-js-1e82b530ec5b55b2505b.js.map