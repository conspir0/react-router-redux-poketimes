(this["webpackJsonpreact-router-redux-poketimes"]=this["webpackJsonpreact-router-redux-poketimes"]||[]).push([[0],{25:function(e,t,c){},45:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c.n(s),a=c(20),i=c.n(a),r=(c(25),c(6)),o=c(2),l=c(1),j=function(){return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h4",{className:"center",children:"About"}),Object(l.jsx)("p",{children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam adipisci nostrum dolorem aspernatur! Debitis voluptate alias, sunt minima cum iste hic. Fugit ex eos aspernatur esse alias beatae ut sequi."})]})},d=function(){return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h4",{className:"center",children:"Contact"}),Object(l.jsx)("p",{children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam adipisci nostrum dolorem aspernatur! Debitis voluptate alias, sunt minima cum iste hic. Fugit ex eos aspernatur esse alias beatae ut sequi."})]})},b=c(5),u=c(9),h=c.n(u),m=c.p+"static/media/pokeball.05e5662d.png",p=function(){var e=Object(s.useState)(null),t=Object(b.a)(e,2),c=t[0],n=t[1];Object(s.useEffect)((function(){h.a.get("https://jsonplaceholder.typicode.com/posts").then((function(e){n(e.data.slice(0,10))})).catch((function(e){return console.error("There was a problem - ".concat(e))}))}),[]);var a=Boolean(c)?c.map((function(e,t){return Object(l.jsxs)("div",{className:"post card",children:[Object(l.jsx)("img",{src:m,alt:"pokeball"}),Object(l.jsxs)("div",{className:"card-content",children:[Object(l.jsx)(r.b,{to:"/".concat(e.id),children:Object(l.jsx)("span",{className:"card-title red-text",children:e.title})}),Object(l.jsx)("p",{children:e.body})]})]},e.id)})):Object(l.jsx)("div",{className:"center",children:"No posts yet."});return Object(l.jsxs)("div",{className:"container home",children:[Object(l.jsx)("h4",{className:"center",children:"Home"}),a]})},O=function(){return Object(l.jsx)("nav",{className:"nav-wrapper red darken-3",children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)(r.c,{to:"/",className:"brand-logo",children:"Poke'Times"}),Object(l.jsxs)("ul",{className:"right",children:[Object(l.jsx)("li",{children:Object(l.jsx)(r.c,{to:"/",children:"Home"})}),Object(l.jsx)("li",{children:Object(l.jsx)(r.c,{to:"/about",children:"About"})}),Object(l.jsx)("li",{children:Object(l.jsx)(r.c,{to:"/contact",children:"Contact"})})]})]})})},x=function(){var e=Object(s.useState)(null),t=Object(b.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(null),i=Object(b.a)(a,2),r=i[0],j=i[1],d=Object(o.h)(),u=Object(o.e)(),m=Object(o.f)(":post_id");Object(s.useEffect)((function(){var e=d.post_id;h.a.get("https://jsonplaceholder.typicode.com/posts/"+e).then((function(e){j(e.data)})).catch((function(e){return console.error("There was a problem - ".concat(e))})),n(e)}),[]),console.log("params: ",d),console.log("match: ",m),console.log("location: ",u),console.log("id: ",c),console.log(r);var p=Boolean(r)?Object(l.jsxs)("div",{className:"post",children:[Object(l.jsx)("h4",{className:"center",children:r.title}),Object(l.jsx)("p",{children:r.body})]}):Object(l.jsx)("div",{className:"center",children:"Loading post..."});return Object(l.jsx)("div",{className:"container",children:p})},v=function(){return Object(l.jsx)(r.a,{children:Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(O,{}),Object(l.jsxs)(o.c,{children:[Object(l.jsx)(o.a,{path:"/",element:Object(l.jsx)(p,{})}),Object(l.jsx)(o.a,{path:":post_id",element:Object(l.jsx)(x,{})}),Object(l.jsx)(o.a,{path:"about",element:Object(l.jsx)(j,{})}),Object(l.jsx)(o.a,{path:"contact",element:Object(l.jsx)(d,{})})]})]})})};i.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(v,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.1b0a463c.chunk.js.map