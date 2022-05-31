"use strict";(self.webpackChunkrick_and_morty_header=self.webpackChunkrick_and_morty_header||[]).push([[736],{737:function(r,n,o){o.r(n);var t=o(759),e=o.n(t),a=o(745),i=o(379),c=o.n(i),s=o(795),l=o.n(s),d=o(569),p=o.n(d),u=o(565),f=o.n(u),h=o(216),v=o.n(h),g=o(589),m=o.n(g),x=o(424),b={};b.styleTagTransform=m(),b.setAttributes=f(),b.insert=p().bind(null,"head"),b.domAPI=l(),b.insertStyleElement=v(),c()(x.Z,b),x.Z&&x.Z.locals&&x.Z.locals;var y=o(950),w=o.n(y),k=o(159);const j=w().header`
    width: 100%;
    padding: 10px 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--dark-gray-color);
    color: var(--white-color);
    transition: var(--transition);

    .button-menu { display: none; }

    ${r=>"light"===r.mode&&y.css`
        background-color: var(--white-color);
    `}
    
    @media only screen and (max-width: 425px) { 
        padding: 10px 20px;
        .button-menu { display: flex; }
    }
`,C=w()(k.Link)`
    font-size: var(--fs-20);
    color: var(--white-color);
    letter-spacing: 1px;
    display: inline-flex;
    align-items: center;
    gap: 5px;

    svg { 
        transition: var(--transition);
        color: var(--primary-color);
     }

    &:hover svg { 
        transform: translateY(-3px);
    }

    ${r=>"light"===r.mode&&y.css`
        color: var(--font-color);
    `}
`,I=w().ul`
    display: flex;
    align-items: center;
    gap: 5px;
    transition: var(--transition);

    ${r=>"light"===r.mode&&y.css`
        a {
            color: var(--font-color);

            &:hover {
                background-color: var(--white-gray-color);
                color: var(--font-color);
            }
        }
    `}

    @media only screen and (max-width: 425px) { 
        position: absolute;
        background-color: var(--dark-gray-color);
        flex-direction: column;
        width: 250px;
        left: 0;
        top: 53px;
        border-top-right-radius: var(--radius);
        border-bottom-right-radius: var(--radius);
        transform: translateY(-20px);
        opacity: 0;
        visibility: hidden;
        
        ${r=>"true"===r.activated&&y.css`
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
        `}

        ${r=>"light"===r.mode&&y.css`
            background-color: var(--white-color);
            a, li { color: var(--font-color); }
            box-shadow: var(--shadow-down);
        `}
    }
`,S=w().li`
    @media only screen and (max-width: 425px) { 
        width: 100%;
        padding: 10px 20px;
    }
`,T=w()(k.Link)`
    padding: 10px 20px;
    border-radius: var(--radius);
    color: var(--white-gray-color);
    
    &:hover { 
        color: var(--white-color);
        background-color: var(--dark-background-color); 
    }

    @media only screen and (max-width: 425px) { 
        padding: 10px 0;
    }
`,M=w().button`
    background-color: transparent;
    border-color: var(--primary-color);
    color: var(--primary-color);
    padding: 8px 10px;
    display: flex;
    align-items: center;
    gap: 5px;
    border-radius: var(--radius);
    cursor: pointer;
    transition: var(--transition);

    &:hover {
        color: var(--white-color);
        background-color: var(--primary-color);
    }
`;var E,L=o(447),N=o(820),R=o(893),A=({mode:r,setMode:n})=>{const[o,e]=(0,t.useState)(!1),a=(0,N.useMode)();return console.log(a),localStorage.setItem("mode",JSON.stringify(r)),(0,R.jsxs)(j,{mode:r,children:[(0,R.jsxs)(C,{to:"/",mode:r,children:[(0,R.jsx)(L.wEI,{}),"Logo"]}),(0,R.jsxs)(I,{activated:o.toString(),mode:r,children:[(0,R.jsx)(S,{children:(0,R.jsx)(T,{to:"/characters",children:"Characters"})}),(0,R.jsx)(S,{children:(0,R.jsx)(T,{to:"/chapters",children:"Chapters"})}),(0,R.jsx)(S,{children:(0,R.jsx)(M,{onClick:()=>{n("dark"===r?"light":"dark")},children:"dark"===r?(0,R.jsx)(L.JuG,{}):(0,R.jsx)(L.dZ3,{})})})]}),(0,R.jsx)(M,{className:"button-menu",onClick:()=>e(!o),children:(0,R.jsx)(L.HjU,{})})]})},F=function(){return(0,R.jsx)("div",{className:"App",children:(0,R.jsx)(A,{})})};a.createRoot(document.getElementById("root")).render((0,R.jsx)(e().StrictMode,{children:(0,R.jsx)(F,{})})),E&&E instanceof Function&&o.e(165).then(o.t.bind(o,165,23)).then((({getCLS:r,getFID:n,getFCP:o,getLCP:t,getTTFB:e})=>{r(E),n(E),o(E),t(E),e(E)}))},424:function(r,n,o){var t=o(81),e=o.n(t),a=o(645),i=o.n(a)()(e());i.push([r.id,"@import url(https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap);"]),i.push([r.id,"/* Google fonts - Inter */\n\n/* Variables */\n\n:root {\n\n  /* Colors */\n  --dark-background-color: rgb(33, 37, 41);\n  --dark-gray-color: rgb(43, 50, 58);\n  --light-background-color:rgb(236, 237, 239);\n  --white-color: rgb(255, 255, 255);\n  --white-gray-color: rgb(245, 245, 245);\n  --primary-color: rgb(216, 87, 204);\n  --primary-color-hover: #973e8e;\n  --border-color: rgb(231, 231, 231);\n\n  --font: 'Inter', sans-serif;\n  --font-color: rgb(51, 51, 51);\n\n  --fs-13: 0.8125rem;\n  --fs-14: 0.875rem;\n  --fs-15: 0.9375rem;\n  --fs-16: 1rem;\n  --fs-17: 1.0625rem;\n  --fs-18: 1.125rem;\n  --fs-19: 1.1875rem;\n  --fs-20: 1.25rem;\n  --fs-25: 1.5625rem;\n  --fs-30: 1.875rem;\n\n  --shadow: 0px 0px 5px 0px rgba(204,204,204,0.75);\n  --shadow-dow: 0px 5px 5px 0px rgba(204,204,204,0.75);\n  --shadow-up: 0px -5px 5px 0px rgba(204,204,204,0.75);\n  --shadow-left: -5px 0px 5px 0px rgba(204,204,204,0.75);\n  --shadow-right: 5px 0px 5px 0px rgba(204,204,204,0.75);\n\n  --transition: 0.3s ease;\n\n  --radius: 4px;\n\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: var(--font);\n}\n\nbody {\n  font-family: var(--font);\n  font-size: var(--fs-13);\n  background-color: var(--light-background-color);\n}\n\nul, li { list-style: none; }\n\na { \n  text-decoration: none;\n  transition: var(--transition);\n}\n\nimg { object-fit: cover; }\n\nbutton,\ninput,\nselect {\n  border: 1px solid transparent;\n  outline: none;\n  transition: var(--transition);\n  font-family: var(--font);\n}\n\n.container {\n  width: 100%;\n  min-height: 100vh;\n  background-color: var(--dark-background-color);\n  color: var(--white-color);\n}\n\np { line-height: 25px; }",""]),n.Z=i},645:function(r){r.exports=function(r){var n=[];return n.toString=function(){return this.map((function(n){var o="",t=void 0!==n[5];return n[4]&&(o+="@supports (".concat(n[4],") {")),n[2]&&(o+="@media ".concat(n[2]," {")),t&&(o+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),o+=r(n),t&&(o+="}"),n[2]&&(o+="}"),n[4]&&(o+="}"),o})).join("")},n.i=function(r,o,t,e,a){"string"==typeof r&&(r=[[null,r,void 0]]);var i={};if(t)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<r.length;l++){var d=[].concat(r[l]);t&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),o&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=o):d[2]=o),e&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=e):d[4]="".concat(e)),n.push(d))}},n}},81:function(r){r.exports=function(r){return r[1]}},745:function(r,n,o){var t=o(538);n.createRoot=t.createRoot,n.hydrateRoot=t.hydrateRoot},379:function(r){var n=[];function o(r){for(var o=-1,t=0;t<n.length;t++)if(n[t].identifier===r){o=t;break}return o}function t(r,t){for(var a={},i=[],c=0;c<r.length;c++){var s=r[c],l=t.base?s[0]+t.base:s[0],d=a[l]||0,p="".concat(l," ").concat(d);a[l]=d+1;var u=o(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(f);else{var h=e(f,t);t.byIndex=c,n.splice(c,0,{identifier:p,updater:h,references:1})}i.push(p)}return i}function e(r,n){var o=n.domAPI(n);return o.update(r),function(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap&&n.supports===r.supports&&n.layer===r.layer)return;o.update(r=n)}else o.remove()}}r.exports=function(r,e){var a=t(r=r||[],e=e||{});return function(r){r=r||[];for(var i=0;i<a.length;i++){var c=o(a[i]);n[c].references--}for(var s=t(r,e),l=0;l<a.length;l++){var d=o(a[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}a=s}}},569:function(r){var n={};r.exports=function(r,o){var t=function(r){if(void 0===n[r]){var o=document.querySelector(r);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(r){o=null}n[r]=o}return n[r]}(r);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(o)}},216:function(r){r.exports=function(r){var n=document.createElement("style");return r.setAttributes(n,r.attributes),r.insert(n,r.options),n}},565:function(r,n,o){r.exports=function(r){var n=o.nc;n&&r.setAttribute("nonce",n)}},795:function(r){r.exports=function(r){var n=r.insertStyleElement(r);return{update:function(o){!function(r,n,o){var t="";o.supports&&(t+="@supports (".concat(o.supports,") {")),o.media&&(t+="@media ".concat(o.media," {"));var e=void 0!==o.layer;e&&(t+="@layer".concat(o.layer.length>0?" ".concat(o.layer):""," {")),t+=o.css,e&&(t+="}"),o.media&&(t+="}"),o.supports&&(t+="}");var a=o.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(t,r,n.options)}(n,r,o)},remove:function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(n)}}}},589:function(r){r.exports=function(r,n){if(n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}}}]);