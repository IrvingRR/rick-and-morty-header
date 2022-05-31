"use strict";(self.webpackChunkrick_and_morty_header=self.webpackChunkrick_and_morty_header||[]).push([[180],{180:function(r,o,a){a.r(o);var n=a(724),t=a(447),i=a(759),e=a(820),c=a(893);o.default=({mode:r,setMode:o})=>{const[a,d]=(0,i.useState)(!1),l=(0,e.useMode)();return console.log(l),localStorage.setItem("mode",JSON.stringify(r)),(0,c.jsxs)(n.W2,{mode:r,children:[(0,c.jsxs)(n.TR,{to:"/",mode:r,children:[(0,c.jsx)(t.wEI,{}),"Logo"]}),(0,c.jsxs)(n.yX,{activated:a.toString(),mode:r,children:[(0,c.jsx)(n.nf,{children:(0,c.jsx)(n.EA,{to:"/characters",children:"Characters"})}),(0,c.jsx)(n.nf,{children:(0,c.jsx)(n.EA,{to:"/chapters",children:"Chapters"})}),(0,c.jsx)(n.nf,{children:(0,c.jsx)(n.zx,{onClick:()=>{o("dark"===r?"light":"dark")},children:"dark"===r?(0,c.jsx)(t.JuG,{}):(0,c.jsx)(t.dZ3,{})})})]}),(0,c.jsx)(n.zx,{className:"button-menu",onClick:()=>d(!a),children:(0,c.jsx)(t.HjU,{})})]})}},724:function(r,o,a){a.d(o,{EA:function(){return s},TR:function(){return c},W2:function(){return e},nf:function(){return l},yX:function(){return d},zx:function(){return p}});var n=a(950),t=a.n(n),i=a(159);const e=t().header`
    width: 100%;
    padding: 10px 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--dark-gray-color);
    color: var(--white-color);
    transition: var(--transition);

    .button-menu { display: none; }

    ${r=>"light"===r.mode&&n.css`
        background-color: var(--white-color);
    `}
    
    @media only screen and (max-width: 425px) { 
        padding: 10px 20px;
        .button-menu { display: flex; }
    }
`,c=t()(i.Link)`
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

    ${r=>"light"===r.mode&&n.css`
        color: var(--font-color);
    `}
`,d=t().ul`
    display: flex;
    align-items: center;
    gap: 5px;
    transition: var(--transition);

    ${r=>"light"===r.mode&&n.css`
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
        
        ${r=>"true"===r.activated&&n.css`
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
        `}

        ${r=>"light"===r.mode&&n.css`
            background-color: var(--white-color);
            a, li { color: var(--font-color); }
            box-shadow: var(--shadow-down);
        `}
    }
`,l=t().li`
    @media only screen and (max-width: 425px) { 
        width: 100%;
        padding: 10px 20px;
    }
`,s=t()(i.Link)`
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
`,p=t().button`
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
`}}]);