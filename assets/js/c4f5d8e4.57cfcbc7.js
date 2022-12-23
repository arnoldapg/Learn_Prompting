/*! For license information please see c4f5d8e4.57cfcbc7.js.LICENSE.txt */
(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[4195],{7307:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>v});var r=n(7294),a=(n(3935),n(6010)),l=n(9960),i=n(2263),s=n(782),c=n(7462);const o="features_t9lD",m=[{title:"Easy to Use",Svg:n(64).Z,description:r.createElement(r.Fragment,null,"Built for beginners")},{title:"Focus on What Matters",Svg:n(3553).Z,description:r.createElement(r.Fragment,null,"Spend less time for better LLM results")},{title:"Shoot for the Moon",Svg:n(8778).Z,description:r.createElement(r.Fragment,null,"Learn advanced prompt engineering")}];function d(e){let{Svg:t,title:n,description:l}=e;return r.createElement("div",{className:(0,a.Z)("col col--4")},r.createElement("center",null,r.createElement("div",{className:"text--center"},r.createElement("img",{src:t,alt:"img",width:"251px",style:{alignSelf:"center"}})),r.createElement("div",{className:"text--center padding-horiz--md"},r.createElement("h3",null,n),r.createElement("p",null,l))))}function u(){return r.createElement("section",{className:o},r.createElement("div",{className:"container"},r.createElement("div",{className:"row"},m.map(((e,t)=>r.createElement(d,(0,c.Z)({key:t},e)))))))}var p="https://platform.twitter.com/widgets.js",g="createFollowButton",f=function(e){var t=r.useRef(null),a=r.useState(!0),l=a[0],i=a[1];return r.useEffect((function(){var r=!0;return n(5277)(p,"twitter-embed",(function(){if(window.twttr){if(r){if(!window.twttr.widgets[g])return void console.error("Method "+g+" is not present anymore in twttr.widget api");window.twttr.widgets[g](e.screenName,null==t?void 0:t.current,e.options).then((function(t){i(!1),e.onLoad&&e.onLoad(t)}))}}else console.error("Failure to load window.twttr, aborting load")})),function(){r=!1}}),[]),r.createElement(r.Fragment,null,l&&r.createElement(r.Fragment,null,e.placeholder),r.createElement("div",{ref:t}))};const h="heroBanner_qdFl",E="buttons_AeoN",w=e=>{let{isSSO:t,url:n}=e;return r.createElement("a",{href:n,style:{color:"white",fontWeight:"bold",borderRadius:8,display:"inline-flex",alignItems:"center",padding:"10px 15px",backgroundColor:"#7289da",textDecoration:"none"}},r.createElement("div",{style:{width:25,height:25,marginRight:15}},r.createElement("svg",{id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 245 240"},r.createElement("path",{class:"st0",d:"M104.4 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1.1-6.1-4.5-11.1-10.2-11.1zM140.9 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1s-4.5-11.1-10.2-11.1z"}),r.createElement("path",{class:"st0",d:"M189.5 20h-134C44.2 20 35 29.2 35 40.6v135.2c0 11.4 9.2 20.6 20.5 20.6h113.4l-5.3-18.5 12.8 11.9 12.1 11.2 21.5 19V40.6c0-11.4-9.2-20.6-20.5-20.6zm-38.6 130.6s-3.6-4.3-6.6-8.1c13.1-3.7 18.1-11.9 18.1-11.9-4.1 2.7-8 4.6-11.5 5.9-5 2.1-9.8 3.5-14.5 4.3-9.6 1.8-18.4 1.3-25.9-.1-5.7-1.1-10.6-2.7-14.7-4.3-2.3-.9-4.8-2-7.3-3.4-.3-.2-.6-.3-.9-.5-.2-.1-.3-.2-.4-.3-1.8-1-2.8-1.7-2.8-1.7s4.8 8 17.5 11.8c-3 3.8-6.7 8.3-6.7 8.3-22.1-.7-30.5-15.2-30.5-15.2 0-32.2 14.4-58.3 14.4-58.3 14.4-10.8 28.1-10.5 28.1-10.5l1 1.2c-18 5.2-26.3 13.1-26.3 13.1s2.2-1.2 5.9-2.9c10.7-4.7 19.2-6 22.7-6.3.6-.1 1.1-.2 1.7-.2 6.1-.8 13-1 20.2-.2 9.5 1.1 19.7 3.9 30.1 9.6 0 0-7.9-7.5-24.9-12.7l1.4-1.6s13.7-.3 28.1 10.5c0 0 14.4 26.1 14.4 58.3 0 0-8.5 14.5-30.6 15.2z"}))),r.createElement("span",null,t?"Sign in with Discord":"Join the Discord"))};function b(){const{siteConfig:e}=(0,i.Z)();return r.createElement("header",{className:(0,a.Z)("hero hero--primary",h)},r.createElement("div",{className:"container"},r.createElement("h1",{className:"hero__title"},e.title),r.createElement("p",{className:"hero__subtitle"},e.tagline),r.createElement("div",{className:E,style:{marginTop:"25px"}},r.createElement(l.Z,{className:"button button--secondary button--lg",to:"/docs/intro"},"Get Started \ud83c\udfc3")),r.createElement("div",{style:{marginTop:"25px"}},r.createElement(l.Z,{to:"https://discord.gg/7enStJXQzD"},r.createElement(w,null))),r.createElement("div",{style:{marginTop:"25px"}},r.createElement(f,{screenName:"Learn_Prompting"}))))}function v(){const{siteConfig:e}=(0,i.Z)();return r.createElement(s.Z,{title:`${e.title}`,description:"Learn Prompt Engineering"},r.createElement(b,null),r.createElement("main",null,r.createElement(u,null),r.createElement("div",{class:"text--center padding-horiz--md"},r.createElement("hr",null),r.createElement("h1",null,"Media on Learn Prompting"),r.createElement("div",{className:"container",style:{marginBottom:"20px"}},r.createElement("div",{className:"row"},r.createElement("div",{className:(0,a.Z)("col col--6")},r.createElement("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/pZsJbYIFCCw",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),r.createElement("div",{className:(0,a.Z)("col col--6")},r.createElement("h3",null,"Stay tuned for a competition with ",r.createElement("a",{href:"https://community.towardsai.net/"},"Towards AI")),r.createElement("img",{src:n(2364).Z,alt:"img",height:"275px",style:{alignSelf:"center"}})))),r.createElement("div",{className:"row"},r.createElement("div",{className:(0,a.Z)("col col--12")},r.createElement("h4",null,"NewsLetters"),r.createElement("a",{href:"https://bensbites.beehiiv.com/p/bens-bites-hackathon-win-15k"},r.createElement("img",{src:n(5897).Z,alt:"img",height:"40px",style:{alignSelf:"center"}})),r.createElement("a",{href:"https://towardsai.net/p/newsletter/this-ai-newsletter-is-all-you-need-25",style:{marginLeft:"20px"}},r.createElement("img",{src:n(5138).Z,alt:"img",height:"40px",style:{alignSelf:"center"}})))))))}},5277:(e,t,n)=>{var r,a,l;l=function(){var e,t,n=document,r=n.getElementsByTagName("head")[0],a={},l={},i={},s={};function c(e,t){for(var n=0,r=e.length;n<r;++n)if(!t(e[n]))return!1;return 1}function o(e,t){c(e,(function(e){return t(e),1}))}function m(t,n,r){t=t.push?t:[t];var u=n&&n.call,p=u?n:r,g=u?t.join(""):n,f=t.length;function h(e){return e.call?e():a[e]}function E(){if(!--f)for(var e in a[g]=1,p&&p(),i)c(e.split("|"),h)&&!o(i[e],h)&&(i[e]=[])}return setTimeout((function(){o(t,(function t(n,r){return null===n?E():(r||/^https?:\/\//.test(n)||!e||(n=-1===n.indexOf(".js")?e+n+".js":e+n),s[n]?(g&&(l[g]=1),2==s[n]?E():setTimeout((function(){t(n,!0)}),0)):(s[n]=1,g&&(l[g]=1),void d(n,E)))}))}),0),m}function d(e,a){var l,i=n.createElement("script");i.onload=i.onerror=i.onreadystatechange=function(){i.readyState&&!/^c|loade/.test(i.readyState)||l||(i.onload=i.onreadystatechange=null,l=1,s[e]=2,a())},i.async=1,i.src=t?e+(-1===e.indexOf("?")?"?":"&")+t:e,r.insertBefore(i,r.lastChild)}return m.get=d,m.order=function(e,t,n){!function r(a){a=e.shift(),e.length?m(a,r):m(a,t,n)}()},m.path=function(t){e=t},m.urlArgs=function(e){t=e},m.ready=function(e,t,n){e=e.push?e:[e];var r,l=[];return!o(e,(function(e){a[e]||l.push(e)}))&&c(e,(function(e){return a[e]}))?t():(r=e.join("|"),i[r]=i[r]||[],i[r].push(t),n&&n(l)),m},m.done=function(e){m([null],e)},m},e.exports?e.exports=l():void 0===(a="function"==typeof(r=l)?r.call(t,n,t,e):r)||(e.exports=a)},64:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=n.p+"assets/images/astronaut-95650234596819f54ee184f1dabd8943.png"},5897:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r="data:image/webp;base64,UklGRjoDAABXRUJQVlA4IC4DAAAwFgCdASpkAGQAPkUaikOioaEbvRwAKAREofQAm1X/17eYfil+3fG0dz8NoyAYYD+Af039VfeZ/oGoAegB+x3XBftf+wGY5+IOnJXS/3eaK/3qcO+UX6P/4XqqEBh9HrSRB2UJSDErkR2/4IotTaQC5SzPeyCX0pUoBpGBG9eVqODlnls1lCDeBPjzssrnI85Rbw6q1UW9Ob44/jK0pqASmPxOXwtMGo+8B5pLhaQu9CqkJvki9wdwQwAA/u921//mBd/ldP//OIGr+gnMUAQwD8/ATe257nOyzi+tCZjp8W/iBAr6pxK6kDxyNqZgZNIO58/iBRnxeG/xA33w/jN+VbaiMZdXEHqKlT+3xMtw5zoDm32Hlr/kr9GCHVEZSs/XD4NNsqw7DpH5fDhOElnPrWgkUWYPlSTP3jfI4m2/fbFU/SKOkSv0/6RSaCsUq6LWSgthtQgI/crbTY9iCxx0SxMJU8P/bNkAzNRnAp2L4nVJVZ54FBnFqbPWZhEzVAOC67ISqPxXE6DmVsSCqXMO3VxFRxjl2iXxx6eVMAciaLS34/x63kkZEB6o+lJtJVgIaPgArb8e4Rmrk2FwNfOUYXdbul3XO4RT0wLpN6a/INNC7E3+d//iHvwdCK+oCsyTxno56p1sTGubTaoeJ6p/o8/5dGsMyo2mHfyVL1ZvbtkH587P+9X/6OwLV8hW2M2c3sVfaGRCHCuCbM3i/mi32d2v5+PbZ1/JLMp1RzwVOYlT5HJLt+zCyWj+PW4tiKAWsDIE6W6k6uWaV4Dcgx7oAu2ZRajp5Dsuqv7wkv7u+qNTKXuMOMzK4WQ1k6ERyfNtYsiRphFlPnMm0h3lhGLvQbgayvt71miOIsvhdx8Zzc/paC2kgWP/tdk6eHZ+7MlNgukebZVQ/qbNLvJn+8inIRZWkeOL7AHLQlDqPDUNgzA/Tt1yvR+6jvg/UwlJw1zCCwnb8HPJUMkbYgBrhps8N6TFHVWgUN1lus3HlbuNVg6qyTkEGM3r1P0npsqlDTI1YTEEJ67i2lDkyADEjFuOEoYg4LH/+Our7+qViVx0N5ZDBgnvSyAbQ2F4gAAA"},3553:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=n.p+"assets/images/computer-243ae75c79d233de57ba6cd14c5b7999.png"},8778:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=n.p+"assets/images/rocket-a44f3d49a8eb6b98b2d30de930e63c16.png"},2364:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=n.p+"assets/images/towards_ai-8ba6f0df56a97d31c30cf8711647f549.png"},5138:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=n.p+"assets/images/towards_ai_small-9093b0a3baeca1d0261e3414bb030113.png"}}]);