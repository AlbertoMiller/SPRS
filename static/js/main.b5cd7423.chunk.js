(this.webpackJsonpmodern_react=this.webpackJsonpmodern_react||[]).push([[0],{53:function(e,t,c){},80:function(e,t,c){"use strict";c.r(t);var a,n=c(0),s=c.n(n),i=c(18),r=c.n(i),l=(c(53),c(19)),o=c(5),d=c(16),u=c(42),j=c(43).a.div(a||(a=Object(u.a)(["\ncolor:#e0e0e0;\nmargin: 10px;\nfont-size=bold;\nfont-size: large;\nfont-weight: bold;\u0651\n"]))),b=c(28),m=c.n(b),O=c(13),x=c(47),h=c(29),p=c.n(h),v=c(1),f=Object(n.createContext)(),g=Object(n.createContext)(),N=Object(n.createContext)(),C=Object(n.createContext)();function y(){return s.a.useContext(f)}function w(){return s.a.useContext(g)}var S=function(e){var t=e.children,c=Object(n.useState)([]),a=Object(d.a)(c,2),s=a[0],i=a[1],r=Object(n.useState)([]),l=Object(d.a)(r,2),o=l[0],u=l[1];return console.log(o),Object(n.useEffect)((function(){Object(x.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.get("http://fakestoreapi.com/products").then((function(e){var t=e.data;i(t.map((function(e){return Object(O.a)(Object(O.a)({},e),{},{count:0})})))}));case 3:e.next=10;break;case 5:return e.prev=5,e.t0=e.catch(0),e.next=9,p.a.get("https://jsonplaceholder.typicode.com/users").then((function(e){var t=e.data;i(t.map((function(e){return Object(O.a)(Object(O.a)({},e),{},{count:0})})))}));case 9:console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,5]])})))()}),[]),Object(v.jsx)(f.Provider,{value:s,children:Object(v.jsx)(g.Provider,{value:i,children:Object(v.jsx)(N.Provider,{value:o,children:Object(v.jsx)(C.Provider,{value:u,children:t})})})})},k=c.p+"static/media/sorry.514597e4.svg",B=function(e){var t=e.itemData,c=w(),a=y(),n=s.a.useContext(C);t.isValue=!1;var i=function(){c((function(e){return e.map((function(e){return e.id===t.id?Object(O.a)(Object(O.a)({},e),{},{count:e.count+1}):e}))}))},r=function(){c((function(e){return e.map((function(e){return e.id===t.id?Object(O.a)(Object(O.a)({},e),{},{count:e.count-1}):e}))}))};n(a.filter((function(e){return e.count>0})).map((function(e){return e.price*e.count})));return t.count>0?(t.isValue=!0,Object(v.jsxs)("div",{className:null!=t.image?" counterBox noSelect":"counterBox  ReCounterBox",children:[t.count>0&&Object(v.jsx)("div",{className:"subtractCircle smallSubtractCircle noSelect",style:{cursor:"pointer"},onClick:r,children:"-"}),Object(v.jsx)("div",{className:" counterNumber noSelect",children:t.count}),t.count<99&&Object(v.jsx)("div",{className:" pluse pluseCircle smallPluseCircle noSelect",style:{cursor:"pointer"},onClick:i,children:"+"})]})):t.count<1?Object(v.jsx)("div",{className:null!=t.image?"pluse pluseCircle noSelect":"pluseCircle noSelect RePositionPluse",style:{cursor:"pointer"},onClick:function(){return i()},children:"+"}):void 0},I=s.a.memo(B),P=function(e){var t=e.itemData,c=w(),a=t.price*t.count;return Object(v.jsx)("div",{className:"slidebar-cards",children:Object(v.jsxs)("div",{className:"slidebar-card",children:[Object(v.jsxs)("div",{className:"slidebar-imageArea",children:[Object(v.jsx)("img",{className:null!=t.image?"slidebar-cardImages":"slidebar-cardImages withoutPadding",src:null!=t.image?t.image:k,alt:"ImgData"}),Object(v.jsx)(I,{itemData:t,className:"pluse"})]}),Object(v.jsx)("div",{className:"slidebar-bodyArea",children:Object(v.jsxs)("div",{children:[Object(v.jsx)("p",{className:"slidebar-title cardTitle noSelect",children:null!=t.title?t.title:t.name}),Object(v.jsxs)("p",{className:"slidebar-price noSelect",children:["$",a.toFixed(2)]})]})}),Object(v.jsx)("div",{className:"positionOfslidebar-delete",children:Object(v.jsx)("div",{className:"slidebar-delete",onClick:function(){c((function(e){return e.map((function(e){return e.id===t.id?Object(O.a)(Object(O.a)({},e),{},{count:0}):e}))}))},children:Object(v.jsx)("i",{className:"fa fa-times"})})})]})})},D=s.a.memo(P);var L=function(){return y().map((function(e,t){return e.isValue&&e.count>0?Object(v.jsx)(D,{itemData:e},t):null}))},T=c.p+"static/media/github.1dbcf7b2.svg",M=function(){var e=Object(n.useState)(!1),t=Object(d.a)(e,2),c=t[0],a=t[1],i=s.a.useContext(N),r=function(){return a(!c)};function o(){r(),window.onscroll=function(){}}return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("div",{className:"navbar logoNavbar",children:[Object(v.jsx)(l.b,{to:"/",className:"MenuLinks",children:Object(v.jsx)(j,{className:"noSelect",children:"Logo"})}),Object(v.jsx)("a",{href:"https://github.com/AlbertoMiller/SPRS",className:"menuLinks githubLink",children:Object(v.jsx)("div",{className:"github-icon",children:Object(v.jsx)("img",{src:T,alt:"github"})})}),Object(v.jsx)(l.b,{to:"#",className:"menuLinks ",children:Object(v.jsx)("i",{className:"fas fa-cart-plus navMenuShopIcon",onClick:function(){r(),function(){var e=window.pageYOffset||document.documentElement.scrollTop,t=window.pageXOffset||document.documentElement.scrollLeft;window.onscroll=function(){window.scrollTo(t,e)}}()}})})]}),Object(v.jsxs)("nav",{className:c?"navMenu active":" navMenu",children:[Object(v.jsx)(l.b,{to:"#",className:"menubars",children:Object(v.jsx)("div",{className:"navbar-delete",onClick:o,children:Object(v.jsx)("i",{className:"fa fa-times","aria-hidden":"true"})})}),Object(v.jsxs)("ul",{className:"navMenuItems",children:[Object(v.jsx)("br",{}),Object(v.jsx)(L,{})]}),Object(v.jsxs)("div",{className:"payment",children:[Object(v.jsxs)("div",{className:"priceClac",children:[Object(v.jsx)("div",{className:"priceText",children:"Payment :"}),Object(v.jsxs)("div",{className:"priceNumber",children:["$",i.reduce((function(e,t){return e+t}),0).toFixed(2)]})]}),Object(v.jsx)("button",{className:"paymentBtn btn btn-primary",onClick:function(){window.location.reload(!1)},children:"Payment!"})]})]}),Object(v.jsx)("div",{className:c?" outOfMenu active":" outOfMenu",onClick:o})]})},A=c(83),F=c(84),E=c(24),R=function(e){var t=e.itemData,c=Object(n.useState)(!1),a=Object(d.a)(c,2),s=a[0],i=a[1];return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("div",{className:"cards",children:Object(v.jsxs)(A.a,{style:{width:"18rem"},className:"card",children:[Object(v.jsxs)("div",{className:"cardImageArea",children:[Object(v.jsx)(A.a.Img,{variant:"top",className:null!=t.image?"cardImages":"cardImages withoutPadding",src:null!=t.image?t.image:k,style:{padding:"unset !important"}}),Object(v.jsx)(I,{itemData:t})]}),Object(v.jsxs)(A.a.Body,{className:"cardBody",children:[Object(v.jsx)(A.a.Title,{className:"cardTitle",style:{WebkitBoxOrient:"vertical"},children:null!=t.title?t.title:t.name}),Object(v.jsx)("br",{}),Object(v.jsxs)(A.a.Text,{style:{fontWeight:"bolder"},children:["$",null!=t.price?t.price:t.address.zipcode]}),Object(v.jsx)("div",{className:"positionButton",children:Object(v.jsx)(F.a,{variant:"primary",className:"Btn btn right",onClick:function(){return i(!0)},children:"details"})})]})]})}),Object(v.jsxs)(E.a,{show:s,onHide:function(){return i(!1)},dialogClassName:"modal-90w","aria-labelledby":"example-custom-modal-styling-title",className:"modalBox",children:[Object(v.jsxs)(E.a.Body,{children:[Object(v.jsx)("div",{className:"cardImageArea modalCardImageArea",children:Object(v.jsx)(A.a.Img,{variant:"top",className:"cardImages modalCardImages",src:null!=t.image?t.image:k})}),Object(v.jsx)(A.a.Title,{className:"modalCardTitle cardTitle",style:{WebkitBoxOrient:"vertical"},children:null!=t.title?t.title:t.name}),Object(v.jsx)(I,{itemData:t,className:"pluse modalPluse"})]}),Object(v.jsx)(E.a.Header,{closeButton:!0,children:Object(v.jsxs)(A.a.Body,{children:[Object(v.jsx)("div",{children:"Description:"}),Object(v.jsx)("br",{}),Object(v.jsx)("div",{children:null!=t.description?t.description:t.email})]})})]})]})};var z=function(){var e=y(),t=Object(n.useState)(""),c=Object(d.a)(t,2),a=c[0],s=c[1];return Object(v.jsxs)("div",{className:"home",children:[Object(v.jsx)("input",{type:"text",placeholder:"Search...",onChange:function(e){s(e.target.value)}}),Object(v.jsx)("div",{className:"BoxCard",children:e&&e.filter((function(e){var t=null!=e.title?e.title:e.name,c=null!=e.category?e.category:e.email;return""===a||t.toLowerCase().includes(a.toLowerCase())||c.toLowerCase().includes(a.toLowerCase())?e:null})).map((function(e,t){return Object(v.jsx)(R,{itemData:e},t)}))})]})},V=function e(){return Object(v.jsx)(e,{children:"404 Page Not Find"})},W=function(){return Object(v.jsx)(S,{children:Object(v.jsxs)(l.a,{basename:"/SPRS",children:[Object(v.jsx)(M,{className:"App-header"}),Object(v.jsx)("main",{children:Object(v.jsxs)(o.c,{children:[Object(v.jsx)(o.a,{path:"/",component:z}),Object(v.jsx)(o.a,{path:"/*",exact:!0,component:V})]})})]})})};var $=function(){return Object(v.jsx)(W,{})};r.a.render(Object(v.jsx)(s.a.StrictMode,{children:Object(v.jsx)($,{})}),document.getElementById("root"))}},[[80,1,2]]]);
//# sourceMappingURL=main.b5cd7423.chunk.js.map