/*! For license information please see 879.js.LICENSE.txt */
"use strict";(self.webpackChunkrick_and_morty_header=self.webpackChunkrick_and_morty_header||[]).push([[879],{879:function(t,e,n){n.r(e),n.d(e,{BrowserRouter:function(){return at},HashRouter:function(){return it},Link:function(){return ut},MemoryRouter:function(){return V},NavLink:function(){return ct},Navigate:function(){return q},NavigationType:function(){return r},Outlet:function(){return z},Route:function(){return G},Router:function(){return Q},Routes:function(){return X},UNSAFE_LocationContext:function(){return v},UNSAFE_NavigationContext:function(){return d},UNSAFE_RouteContext:function(){return m},createPath:function(){return f},createRoutesFromChildren:function(){return Y},createSearchParams:function(){return ht},generatePath:function(){return y},matchPath:function(){return w},matchRoutes:function(){return b},parsePath:function(){return p},renderMatches:function(){return Z},resolvePath:function(){return S},unstable_HistoryRouter:function(){return ot},useHref:function(){return $},useInRouterContext:function(){return j},useLinkClickHandler:function(){return lt},useLocation:function(){return B},useMatch:function(){return _},useNavigate:function(){return H},useNavigationType:function(){return W},useOutlet:function(){return U},useOutletContext:function(){return I},useParams:function(){return F},useResolvedPath:function(){return D},useRoutes:function(){return J},useSearchParams:function(){return st}});var r,a=n(759);function i(){return i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i.apply(this,arguments)}!function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"}(r||(r={}));var o="beforeunload",u="popstate";function c(t,e,n){return Math.min(Math.max(t,e),n)}function l(t){t.preventDefault(),t.returnValue=""}function s(){var t=[];return{get length(){return t.length},push:function(e){return t.push(e),function(){t=t.filter((function(t){return t!==e}))}},call:function(e){t.forEach((function(t){return t&&t(e)}))}}}function h(){return Math.random().toString(36).substr(2,8)}function f(t){var e=t.pathname,n=void 0===e?"/":e,r=t.search,a=void 0===r?"":r,i=t.hash,o=void 0===i?"":i;return a&&"?"!==a&&(n+="?"===a.charAt(0)?a:"?"+a),o&&"#"!==o&&(n+="#"===o.charAt(0)?o:"#"+o),n}function p(t){var e={};if(t){var n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));var r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}const d=(0,a.createContext)(null),v=(0,a.createContext)(null),m=(0,a.createContext)({outlet:null,matches:[]});function g(t,e){if(!t)throw new Error(e)}function y(t,e){return void 0===e&&(e={}),t.replace(/:(\w+)/g,((t,n)=>(null==e[n]&&g(!1),e[n]))).replace(/\/*\*$/,(t=>null==e["*"]?"":e["*"].replace(/^\/*/,"/")))}function b(t,e,n){void 0===n&&(n="/");let r=L(("string"==typeof e?p(e):e).pathname||"/",n);if(null==r)return null;let a=x(t);!function(t){t.sort(((t,e)=>t.score!==e.score?e.score-t.score:function(t,e){return t.length===e.length&&t.slice(0,-1).every(((t,n)=>t===e[n]))?t[t.length-1]-e[e.length-1]:0}(t.routesMeta.map((t=>t.childrenIndex)),e.routesMeta.map((t=>t.childrenIndex)))))}(a);let i=null;for(let t=0;null==i&&t<a.length;++t)i=C(a[t],r);return i}function x(t,e,n,r){return void 0===e&&(e=[]),void 0===n&&(n=[]),void 0===r&&(r=""),t.forEach(((t,a)=>{let i={relativePath:t.path||"",caseSensitive:!0===t.caseSensitive,childrenIndex:a,route:t};i.relativePath.startsWith("/")&&(i.relativePath.startsWith(r)||g(!1),i.relativePath=i.relativePath.slice(r.length));let o=O([r,i.relativePath]),u=n.concat(i);t.children&&t.children.length>0&&(!0===t.index&&g(!1),x(t.children,e,u,o)),(null!=t.path||t.index)&&e.push({path:o,score:E(o,t.index),routesMeta:u})})),e}const P=/^:\w+$/,k=t=>"*"===t;function E(t,e){let n=t.split("/"),r=n.length;return n.some(k)&&(r+=-2),e&&(r+=2),n.filter((t=>!k(t))).reduce(((t,e)=>t+(P.test(e)?3:""===e?1:10)),r)}function C(t,e){let{routesMeta:n}=t,r={},a="/",i=[];for(let t=0;t<n.length;++t){let o=n[t],u=t===n.length-1,c="/"===a?e:e.slice(a.length)||"/",l=w({path:o.relativePath,caseSensitive:o.caseSensitive,end:u},c);if(!l)return null;Object.assign(r,l.params);let s=o.route;i.push({params:r,pathname:O([a,l.pathname]),pathnameBase:A(O([a,l.pathnameBase])),route:s}),"/"!==l.pathnameBase&&(a=O([a,l.pathnameBase]))}return i}function w(t,e){"string"==typeof t&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=function(t,e,n){void 0===e&&(e=!1),void 0===n&&(n=!0);let r=[],a="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,((t,e)=>(r.push(e),"([^\\/]+)")));return t.endsWith("*")?(r.push("*"),a+="*"===t||"/*"===t?"(.*)$":"(?:\\/(.+)|\\/*)$"):a+=n?"\\/*$":"(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)",[new RegExp(a,e?void 0:"i"),r]}(t.path,t.caseSensitive,t.end),a=e.match(n);if(!a)return null;let i=a[0],o=i.replace(/(.)\/+$/,"$1"),u=a.slice(1);return{params:r.reduce(((t,e,n)=>{if("*"===e){let t=u[n]||"";o=i.slice(0,i.length-t.length).replace(/(.)\/+$/,"$1")}return t[e]=function(t,e){try{return decodeURIComponent(t)}catch(e){return t}}(u[n]||""),t}),{}),pathname:i,pathnameBase:o,pattern:t}}function S(t,e){void 0===e&&(e="/");let{pathname:n,search:r="",hash:a=""}="string"==typeof t?p(t):t,i=n?n.startsWith("/")?n:function(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach((t=>{".."===t?n.length>1&&n.pop():"."!==t&&n.push(t)})),n.length>1?n.join("/"):"/"}(n,e):e;return{pathname:i,search:N(r),hash:M(a)}}function R(t,e,n){let r,a="string"==typeof t?p(t):t,i=""===t||""===a.pathname?"/":a.pathname;if(null==i)r=n;else{let t=e.length-1;if(i.startsWith("..")){let e=i.split("/");for(;".."===e[0];)e.shift(),t-=1;a.pathname=e.join("/")}r=t>=0?e[t]:"/"}let o=S(a,r);return i&&"/"!==i&&i.endsWith("/")&&!o.pathname.endsWith("/")&&(o.pathname+="/"),o}function L(t,e){if("/"===e)return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=t.charAt(e.length);return n&&"/"!==n?null:t.slice(e.length)||"/"}const O=t=>t.join("/").replace(/\/\/+/g,"/"),A=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),N=t=>t&&"?"!==t?t.startsWith("?")?t:"?"+t:"",M=t=>t&&"#"!==t?t.startsWith("#")?t:"#"+t:"";function $(t){j()||g(!1);let{basename:e,navigator:n}=(0,a.useContext)(d),{hash:r,pathname:i,search:o}=D(t),u=i;if("/"!==e){let n=function(t){return""===t||""===t.pathname?"/":"string"==typeof t?p(t).pathname:t.pathname}(t),r=null!=n&&n.endsWith("/");u="/"===i?e+(r?"/":""):O([e,i])}return n.createHref({pathname:u,search:o,hash:r})}function j(){return null!=(0,a.useContext)(v)}function B(){return j()||g(!1),(0,a.useContext)(v).location}function W(){return(0,a.useContext)(v).navigationType}function _(t){j()||g(!1);let{pathname:e}=B();return(0,a.useMemo)((()=>w(t,e)),[e,t])}function H(){j()||g(!1);let{basename:t,navigator:e}=(0,a.useContext)(d),{matches:n}=(0,a.useContext)(m),{pathname:r}=B(),i=JSON.stringify(n.map((t=>t.pathnameBase))),o=(0,a.useRef)(!1);return(0,a.useEffect)((()=>{o.current=!0})),(0,a.useCallback)((function(n,a){if(void 0===a&&(a={}),!o.current)return;if("number"==typeof n)return void e.go(n);let u=R(n,JSON.parse(i),r);"/"!==t&&(u.pathname=O([t,u.pathname])),(a.replace?e.replace:e.push)(u,a.state)}),[t,e,i,r])}const T=(0,a.createContext)(null);function I(){return(0,a.useContext)(T)}function U(t){let e=(0,a.useContext)(m).outlet;return e?(0,a.createElement)(T.Provider,{value:t},e):e}function F(){let{matches:t}=(0,a.useContext)(m),e=t[t.length-1];return e?e.params:{}}function D(t){let{matches:e}=(0,a.useContext)(m),{pathname:n}=B(),r=JSON.stringify(e.map((t=>t.pathnameBase)));return(0,a.useMemo)((()=>R(t,JSON.parse(r),n)),[t,r,n])}function J(t,e){j()||g(!1);let{matches:n}=(0,a.useContext)(m),r=n[n.length-1],i=r?r.params:{},o=(r&&r.pathname,r?r.pathnameBase:"/");r&&r.route;let u,c=B();if(e){var l;let t="string"==typeof e?p(e):e;"/"===o||(null==(l=t.pathname)?void 0:l.startsWith(o))||g(!1),u=t}else u=c;let s=u.pathname||"/",h=b(t,{pathname:"/"===o?s:s.slice(o.length)||"/"});return K(h&&h.map((t=>Object.assign({},t,{params:Object.assign({},i,t.params),pathname:O([o,t.pathname]),pathnameBase:"/"===t.pathnameBase?o:O([o,t.pathnameBase])}))),n)}function K(t,e){return void 0===e&&(e=[]),null==t?null:t.reduceRight(((n,r,i)=>(0,a.createElement)(m.Provider,{children:void 0!==r.route.element?r.route.element:n,value:{outlet:n,matches:e.concat(t.slice(0,i+1))}})),null)}function V(t){let{basename:e,children:n,initialEntries:o,initialIndex:u}=t,l=(0,a.useRef)();null==l.current&&(l.current=function(t){void 0===t&&(t={});var e=t,n=e.initialEntries,a=void 0===n?["/"]:n,o=e.initialIndex,u=a.map((function(t){return i({pathname:"/",search:"",hash:"",state:null,key:h()},"string"==typeof t?p(t):t)})),l=c(null==o?u.length-1:o,0,u.length-1),d=r.Pop,v=u[l],m=s(),g=s();function y(t,e){return void 0===e&&(e=null),i({pathname:v.pathname,search:"",hash:""},"string"==typeof t?p(t):t,{state:e,key:h()})}function b(t,e,n){return!g.length||(g.call({action:t,location:e,retry:n}),!1)}function x(t,e){d=t,v=e,m.call({action:d,location:v})}function P(t){var e=c(l+t,0,u.length-1),n=r.Pop,a=u[e];b(n,a,(function(){P(t)}))&&(l=e,x(n,a))}var k={get index(){return l},get action(){return d},get location(){return v},createHref:function(t){return"string"==typeof t?t:f(t)},push:function t(e,n){var a=r.Push,i=y(e,n);b(a,i,(function(){t(e,n)}))&&(l+=1,u.splice(l,u.length,i),x(a,i))},replace:function t(e,n){var a=r.Replace,i=y(e,n);b(a,i,(function(){t(e,n)}))&&(u[l]=i,x(a,i))},go:P,back:function(){P(-1)},forward:function(){P(1)},listen:function(t){return m.push(t)},block:function(t){return g.push(t)}};return k}({initialEntries:o,initialIndex:u}));let d=l.current,[v,m]=(0,a.useState)({action:d.action,location:d.location});return(0,a.useLayoutEffect)((()=>d.listen(m)),[d]),(0,a.createElement)(Q,{basename:e,children:n,location:v.location,navigationType:v.action,navigator:d})}function q(t){let{to:e,replace:n,state:r}=t;j()||g(!1);let i=H();return(0,a.useEffect)((()=>{i(e,{replace:n,state:r})})),null}function z(t){return U(t.context)}function G(t){g(!1)}function Q(t){let{basename:e="/",children:n=null,location:i,navigationType:o=r.Pop,navigator:u,static:c=!1}=t;j()&&g(!1);let l=A(e),s=(0,a.useMemo)((()=>({basename:l,navigator:u,static:c})),[l,u,c]);"string"==typeof i&&(i=p(i));let{pathname:h="/",search:f="",hash:m="",state:y=null,key:b="default"}=i,x=(0,a.useMemo)((()=>{let t=L(h,l);return null==t?null:{pathname:t,search:f,hash:m,state:y,key:b}}),[l,h,f,m,y,b]);return null==x?null:(0,a.createElement)(d.Provider,{value:s},(0,a.createElement)(v.Provider,{children:n,value:{location:x,navigationType:o}}))}function X(t){let{children:e,location:n}=t;return J(Y(e),n)}function Y(t){let e=[];return a.Children.forEach(t,(t=>{if(!(0,a.isValidElement)(t))return;if(t.type===a.Fragment)return void e.push.apply(e,Y(t.props.children));t.type!==G&&g(!1);let n={caseSensitive:t.props.caseSensitive,element:t.props.element,index:t.props.index,path:t.props.path};t.props.children&&(n.children=Y(t.props.children)),e.push(n)})),e}function Z(t){return K(t)}function tt(){return tt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},tt.apply(this,arguments)}function et(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}const nt=["onClick","reloadDocument","replace","state","target","to"],rt=["aria-current","caseSensitive","className","end","style","to","children"];function at(t){let{basename:e,children:n,window:c}=t,d=(0,a.useRef)();null==d.current&&(d.current=function(t){void 0===t&&(t={});var e=t.window,n=void 0===e?document.defaultView:e,a=n.history;function c(){var t=n.location,e=t.pathname,r=t.search,i=t.hash,o=a.state||{};return[o.idx,{pathname:e,search:r,hash:i,state:o.usr||null,key:o.key||"default"}]}var d=null;n.addEventListener(u,(function(){if(d)x.call(d),d=null;else{var t=r.Pop,e=c(),n=e[0],a=e[1];if(x.length){if(null!=n){var i=g-n;i&&(d={action:t,location:a,retry:function(){S(-1*i)}},S(i))}}else w(t)}}));var v=r.Pop,m=c(),g=m[0],y=m[1],b=s(),x=s();function P(t){return"string"==typeof t?t:f(t)}function k(t,e){return void 0===e&&(e=null),i({pathname:y.pathname,hash:"",search:""},"string"==typeof t?p(t):t,{state:e,key:h()})}function E(t,e){return[{usr:t.state,key:t.key,idx:e},P(t)]}function C(t,e,n){return!x.length||(x.call({action:t,location:e,retry:n}),!1)}function w(t){v=t;var e=c();g=e[0],y=e[1],b.call({action:v,location:y})}function S(t){a.go(t)}null==g&&(g=0,a.replaceState(i({},a.state,{idx:g}),""));var R={get action(){return v},get location(){return y},createHref:P,push:function t(e,i){var o=r.Push,u=k(e,i);if(C(o,u,(function(){t(e,i)}))){var c=E(u,g+1),l=c[0],s=c[1];try{a.pushState(l,"",s)}catch(t){n.location.assign(s)}w(o)}},replace:function t(e,n){var i=r.Replace,o=k(e,n);if(C(i,o,(function(){t(e,n)}))){var u=E(o,g),c=u[0],l=u[1];a.replaceState(c,"",l),w(i)}},go:S,back:function(){S(-1)},forward:function(){S(1)},listen:function(t){return b.push(t)},block:function(t){var e=x.push(t);return 1===x.length&&n.addEventListener(o,l),function(){e(),x.length||n.removeEventListener(o,l)}}};return R}({window:c}));let v=d.current,[m,g]=(0,a.useState)({action:v.action,location:v.location});return(0,a.useLayoutEffect)((()=>v.listen(g)),[v]),(0,a.createElement)(Q,{basename:e,children:n,location:m.location,navigationType:m.action,navigator:v})}function it(t){let{basename:e,children:n,window:c}=t,d=(0,a.useRef)();null==d.current&&(d.current=function(t){void 0===t&&(t={});var e=t.window,n=void 0===e?document.defaultView:e,a=n.history;function c(){var t=p(n.location.hash.substr(1)),e=t.pathname,r=void 0===e?"/":e,i=t.search,o=void 0===i?"":i,u=t.hash,c=void 0===u?"":u,l=a.state||{};return[l.idx,{pathname:r,search:o,hash:c,state:l.usr||null,key:l.key||"default"}]}var d=null;function v(){if(d)P.call(d),d=null;else{var t=r.Pop,e=c(),n=e[0],a=e[1];if(P.length){if(null!=n){var i=y-n;i&&(d={action:t,location:a,retry:function(){R(-1*i)}},R(i))}}else S(t)}}n.addEventListener(u,v),n.addEventListener("hashchange",(function(){f(c()[1])!==f(b)&&v()}));var m=r.Pop,g=c(),y=g[0],b=g[1],x=s(),P=s();function k(t){return function(){var t=document.querySelector("base"),e="";if(t&&t.getAttribute("href")){var r=n.location.href,a=r.indexOf("#");e=-1===a?r:r.slice(0,a)}return e}()+"#"+("string"==typeof t?t:f(t))}function E(t,e){return void 0===e&&(e=null),i({pathname:b.pathname,hash:"",search:""},"string"==typeof t?p(t):t,{state:e,key:h()})}function C(t,e){return[{usr:t.state,key:t.key,idx:e},k(t)]}function w(t,e,n){return!P.length||(P.call({action:t,location:e,retry:n}),!1)}function S(t){m=t;var e=c();y=e[0],b=e[1],x.call({action:m,location:b})}function R(t){a.go(t)}return null==y&&(y=0,a.replaceState(i({},a.state,{idx:y}),"")),{get action(){return m},get location(){return b},createHref:k,push:function t(e,i){var o=r.Push,u=E(e,i);if(w(o,u,(function(){t(e,i)}))){var c=C(u,y+1),l=c[0],s=c[1];try{a.pushState(l,"",s)}catch(t){n.location.assign(s)}S(o)}},replace:function t(e,n){var i=r.Replace,o=E(e,n);if(w(i,o,(function(){t(e,n)}))){var u=C(o,y),c=u[0],l=u[1];a.replaceState(c,"",l),S(i)}},go:R,back:function(){R(-1)},forward:function(){R(1)},listen:function(t){return x.push(t)},block:function(t){var e=P.push(t);return 1===P.length&&n.addEventListener(o,l),function(){e(),P.length||n.removeEventListener(o,l)}}}}({window:c}));let v=d.current,[m,g]=(0,a.useState)({action:v.action,location:v.location});return(0,a.useLayoutEffect)((()=>v.listen(g)),[v]),(0,a.createElement)(Q,{basename:e,children:n,location:m.location,navigationType:m.action,navigator:v})}function ot(t){let{basename:e,children:n,history:r}=t;const[i,o]=(0,a.useState)({action:r.action,location:r.location});return(0,a.useLayoutEffect)((()=>r.listen(o)),[r]),(0,a.createElement)(Q,{basename:e,children:n,location:i.location,navigationType:i.action,navigator:r})}const ut=(0,a.forwardRef)((function(t,e){let{onClick:n,reloadDocument:r,replace:i=!1,state:o,target:u,to:c}=t,l=et(t,nt),s=$(c),h=lt(c,{replace:i,state:o,target:u});return(0,a.createElement)("a",tt({},l,{href:s,onClick:function(t){n&&n(t),t.defaultPrevented||r||h(t)},ref:e,target:u}))})),ct=(0,a.forwardRef)((function(t,e){let{"aria-current":n="page",caseSensitive:r=!1,className:i="",end:o=!1,style:u,to:c,children:l}=t,s=et(t,rt),h=B(),f=D(c),p=h.pathname,d=f.pathname;r||(p=p.toLowerCase(),d=d.toLowerCase());let v,m=p===d||!o&&p.startsWith(d)&&"/"===p.charAt(d.length),g=m?n:void 0;v="function"==typeof i?i({isActive:m}):[i,m?"active":null].filter(Boolean).join(" ");let y="function"==typeof u?u({isActive:m}):u;return(0,a.createElement)(ut,tt({},s,{"aria-current":g,className:v,ref:e,style:y,to:c}),"function"==typeof l?l({isActive:m}):l)}));function lt(t,e){let{target:n,replace:r,state:i}=void 0===e?{}:e,o=H(),u=B(),c=D(t);return(0,a.useCallback)((e=>{if(!(0!==e.button||n&&"_self"!==n||function(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}(e))){e.preventDefault();let n=!!r||f(u)===f(c);o(t,{replace:n,state:i})}}),[u,o,c,r,i,n,t])}function st(t){let e=(0,a.useRef)(ht(t)),n=B(),r=(0,a.useMemo)((()=>{let t=ht(n.search);for(let n of e.current.keys())t.has(n)||e.current.getAll(n).forEach((e=>{t.append(n,e)}));return t}),[n.search]),i=H();return[r,(0,a.useCallback)(((t,e)=>{i("?"+ht(t),e)}),[i])]}function ht(t){return void 0===t&&(t=""),new URLSearchParams("string"==typeof t||Array.isArray(t)||t instanceof URLSearchParams?t:Object.keys(t).reduce(((e,n)=>{let r=t[n];return e.concat(Array.isArray(r)?r.map((t=>[n,t])):[[n,r]])}),[]))}}}]);