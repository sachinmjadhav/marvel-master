(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,a,t){e.exports=t.p+"static/media/loader.781335f2.gif"},15:function(e,a,t){},22:function(e,a,t){},26:function(e,a,t){e.exports=t.p+"static/media/logo.eaf230e6.png"},29:function(e,a,t){e.exports=t(51)},35:function(e,a,t){},36:function(e,a,t){},39:function(e,a,t){},40:function(e,a,t){},49:function(e,a,t){},51:function(e,a,t){"use strict";t.r(a);var c=t(0),n=t.n(c),r=t(25),l=t.n(r),s=(t(34),t(35),t(19)),m=t(6),i=t(65),o=t(64),u=t(53),d=t(54),f=t(26),h=t.n(f);t(36);var E=function(){return n.a.createElement(u.a,{className:"navbar",dark:!0,expand:"md"},n.a.createElement(d.a,{href:"/",className:"mx-auto brand"},n.a.createElement("img",{src:h.a,alt:"",className:"img"})))},b=t(55),p=t(66),v=t(56);t(39);var N=function(e){var a=e.setSearching,t=e.setSearchResult,r=Object(c.useState)(""),l=Object(m.a)(r,2),s=l[0],i=l[1],o=Object(c.useState)(""),u=Object(m.a)(o,2),d=u[0],f=u[1],h=Object(c.useRef)(!0);return Object(c.useLayoutEffect)(function(){h.current?h.current=!1:fetch("https://gateway.marvel.com/v1/public/characters?nameStartsWith=".concat(d,"&ts=1551892957053&apikey=ed0db551a956a22bc791744a20041f60&hash=28c71675f79648ff557cf218a277715f")).then(function(e){return e.json()}).then(function(e){return t(e.data)})},[d]),n.a.createElement("form",{onSubmit:function(e){e.preventDefault(),f(s),i(""),a(!0)}},n.a.createElement(b.a,{size:"md",className:"ml-3 mb-4 input_group"},n.a.createElement(p.a,{addonType:"prepend",className:"icon"},n.a.createElement("i",{class:"fas fa-search"})),n.a.createElement(v.a,{placeholder:"Search",className:"search",onChange:function(e){i(e.target.value)}})))},g=t(13),j=t.n(g),O=t(61),w=t(62),S=(t(22),t(57)),y=t(58),_=t(59),x=t(60);var A=function(e){var a=e.hero;return n.a.createElement(n.a.Fragment,null,n.a.createElement(S.a,{className:"_card"},n.a.createElement(y.a,{className:"_img",top:!0,width:"80%",src:"".concat(a.thumbnail.path,"/portrait_fantastic.").concat(a.thumbnail.extension)}),n.a.createElement("div",{className:"_bar"}),n.a.createElement(_.a,{className:"_body"},n.a.createElement(x.a,{className:"title"},a.name))))};var k=function(e){var a=e.heros,t=e.setCount;return n.a.createElement("div",null,n.a.createElement("div",{className:"row mx-auto"},0===a.length?n.a.createElement("h2",null,"Not results found"):a.map(function(e){return n.a.createElement("div",{className:"col-lg-3 col-md-4 col-sm-6 mb-3 pl-5",key:e.id},n.a.createElement(O.a,{to:"/character/".concat(e.id)},n.a.createElement(A,{hero:e})))})),t&&a.length>0?n.a.createElement(w.a,{color:"primary",block:!0,className:"mb-2",onClick:function(){return t(function(e){return e+20})}},"Load More Superheroes"):"")};t(40);var C=function(){return n.a.createElement("div",{className:"poster"},n.a.createElement("div",{className:"sheet"}),n.a.createElement("div",{className:"poster_title"},n.a.createElement("h2",null,"MARVEL CHARACTERS"),n.a.createElement("p",null,"DIVE INTO THE DAZZLING DOMAIN OF ALL THE CLASSIC CHARACTERS YOU LOVE")))},R=(t(15),t(11)),L=t.n(R);var I=function(){var e=Object(c.useState)(),a=Object(m.a)(e,2),t=a[0],r=a[1];return Object(c.useEffect)(function(){fetch("https://gateway.marvel.com/v1/public/characters?nameStartsWith=thor&ts=1551892957053&apikey=ed0db551a956a22bc791744a20041f60&hash=28c71675f79648ff557cf218a277715f").then(function(e){return e.json()}).then(function(e){return r(e.data.results[0])})},[]),t?n.a.createElement(n.a.Fragment,null,n.a.createElement(O.a,{to:"/character/".concat(t.id)},n.a.createElement(S.a,{className:"_card"},n.a.createElement(y.a,{className:"_img",top:!0,width:"80%",src:"".concat(t.thumbnail.path,"/portrait_fantastic.").concat(t.thumbnail.extension)}),n.a.createElement("div",{className:"_bar"}),n.a.createElement(_.a,{className:"_body"},n.a.createElement(x.a,{className:"title"},t.name))))):n.a.createElement(L.a,{size:100,color:"#333"})};var T=function(){var e=Object(c.useState)(),a=Object(m.a)(e,2),t=a[0],r=a[1];return Object(c.useEffect)(function(){fetch("https://gateway.marvel.com/v1/public/characters?nameStartsWith=black%20panther&ts=1551892957053&apikey=ed0db551a956a22bc791744a20041f60&hash=28c71675f79648ff557cf218a277715f").then(function(e){return e.json()}).then(function(e){return r(e.data.results[0])})},[]),t?n.a.createElement(n.a.Fragment,null,n.a.createElement(O.a,{to:"/character/".concat(t.id)},n.a.createElement(S.a,{className:"_card"},n.a.createElement(y.a,{className:"_img",top:!0,width:"80%",src:"".concat(t.thumbnail.path,"/portrait_fantastic.").concat(t.thumbnail.extension)}),n.a.createElement("div",{className:"_bar"}),n.a.createElement(_.a,{className:"_body"},n.a.createElement(x.a,{className:"title"},t.name))))):n.a.createElement(L.a,{size:100,color:"#333"})};var D=function(){var e=Object(c.useState)(),a=Object(m.a)(e,2),t=a[0],r=a[1];return Object(c.useEffect)(function(){fetch("https://gateway.marvel.com/v1/public/characters?nameStartsWith=captain%20marvel&ts=1551892957053&apikey=ed0db551a956a22bc791744a20041f60&hash=28c71675f79648ff557cf218a277715f").then(function(e){return e.json()}).then(function(e){return r(e.data.results[0])})},[]),t?n.a.createElement(n.a.Fragment,null,n.a.createElement(O.a,{to:"/character/".concat(t.id)},n.a.createElement(S.a,{className:"_card"},n.a.createElement(y.a,{className:"_img",top:!0,width:"80%",src:"".concat(t.thumbnail.path,"/portrait_fantastic.").concat(t.thumbnail.extension)}),n.a.createElement("div",{className:"_bar"}),n.a.createElement(_.a,{className:"_body"},n.a.createElement(x.a,{className:"title"},"Caprain Marvel"))))):n.a.createElement(L.a,{size:100,color:"#333"})};var F=function(){var e=Object(c.useState)(),a=Object(m.a)(e,2),t=a[0],r=a[1];return Object(c.useEffect)(function(){fetch("https://gateway.marvel.com/v1/public/characters?nameStartsWith=spider-man&ts=1551892957053&apikey=ed0db551a956a22bc791744a20041f60&hash=28c71675f79648ff557cf218a277715f").then(function(e){return e.json()}).then(function(e){return r(e.data.results[0])})},[]),t?n.a.createElement(n.a.Fragment,null,n.a.createElement(O.a,{to:"/character/".concat(t.id)},n.a.createElement(S.a,{className:"_card"},n.a.createElement(y.a,{className:"_img",top:!0,width:"80%",src:"".concat(t.thumbnail.path,"/portrait_fantastic.").concat(t.thumbnail.extension)}),n.a.createElement("div",{className:"_bar"}),n.a.createElement(_.a,{className:"_body"},n.a.createElement(x.a,{className:"title"},t.name))))):n.a.createElement(L.a,{size:100,color:"#333"})};var W=function(){return n.a.createElement("div",null,n.a.createElement("h2",{className:"py-2 _title-bars"},"FEATURED CHARACTERS"),n.a.createElement("div",{className:"row mx-auto mb-5"},n.a.createElement("div",{className:"col-lg-3 col-md-4 col-sm-6 mb-3",style:{width:"100%",margin:"0 !important"}},n.a.createElement(I,null)),n.a.createElement("div",{className:"col-lg-3 col-md-4 col-sm-6 mb-3"},n.a.createElement(T,null)),n.a.createElement("div",{className:"col-lg-3 col-md-4 col-sm-6 mb-3"},n.a.createElement(D,null)),n.a.createElement("div",{className:"col-lg-3 col-md-4 col-sm-6 mb-3"},n.a.createElement(F,null))))},z={footer:{height:"80px",width:"100vw",background:"#333",color:"white",textAlign:"center",paddingTop:"20px"}};var H=function(){return n.a.createElement("div",{style:z.footer},"Powered by \xa9 Marvel API")},M=n.a.memo(function(e){var a=e.isLoading,t=e.heros,r=e.setCount,l=Object(c.useState)(!1),s=Object(m.a)(l,2),i=s[0],o=s[1],u=Object(c.useState)(),d=Object(m.a)(u,2),f=d[0],h=d[1];return a?n.a.createElement("img",{src:j.a,className:"loader",alt:""}):n.a.createElement("div",null,n.a.createElement(C,null),n.a.createElement("div",{className:"container mt-5 "},n.a.createElement(W,null),n.a.createElement("div",{className:"dropdown-divider"}),n.a.createElement("h2",{className:"py-2 mt-5 _title-bars list-title"},"MARVEL CHARACTERS LIST"),n.a.createElement(N,{setSearching:o,setSearchResult:h}),i?f?n.a.createElement(k,{heros:f.results}):n.a.createElement("img",{src:j.a,alt:""}):n.a.createElement(k,{heros:t,setCount:r})),n.a.createElement(H,null))}),V=t(63),U=function(e){var a=e.lastIndexOf("/");return e.substr(a)},B=n.a.memo(function(e){var a=Object(c.useState)(),t=Object(m.a)(a,2),r=t[0],l=t[1],s=Object(c.useState)(!0),i=Object(m.a)(s,2),o=i[0],u=i[1],d=parseInt(e.match.params.id);return Object(c.useEffect)(function(){fetch("https://gateway.marvel.com/v1/public/characters/".concat(d,"?ts=1551892957053&apikey=ed0db551a956a22bc791744a20041f60&hash=28c71675f79648ff557cf218a277715f")).then(function(e){return e.json()}).then(function(e){l(e.data.results[0]),u(!1)})},[d]),console.log(r),o?n.a.createElement("img",{src:j.a,className:"loader",alt:""}):n.a.createElement("div",null,n.a.createElement("div",{className:"_title"},n.a.createElement("img",{src:"".concat(r.thumbnail.path,"/detail.").concat(r.thumbnail.extension),alt:"",className:"image"}),n.a.createElement("h1",{className:"name ml-4"},r.name)),n.a.createElement("div",{className:"container mt-5 mb-3"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-8"},n.a.createElement("h2",null,"Description"),n.a.createElement("div",{className:"dropdown-divider"}),r.description?r.description:"Not Available")),r.series.available>0?n.a.createElement("div",{className:"row mt-5"},n.a.createElement("div",{className:"col-md-6"},n.a.createElement("h2",null,"Series"),n.a.createElement("div",{className:"dropdown-divider"}),r.series.items.map(function(e){return n.a.createElement(O.a,{key:e.name,to:"/series".concat(U(e.resourceURI))},n.a.createElement(V.a,{className:"mx-1",style:{fontSize:"0.8rem",margin:"2px"},color:"secondary"},e.name))}))):""))}),J=(t(49),n.a.memo(function(e){var a=e.match.params.id,t=Object(c.useState)({}),r=Object(m.a)(t,2),l=r[0],s=r[1],i=Object(c.useState)(!0),o=Object(m.a)(i,2),u=o[0],d=o[1];return Object(c.useEffect)(function(){fetch("https://gateway.marvel.com/v1/public/series/".concat(a,"?ts=1551892957053&apikey=ed0db551a956a22bc791744a20041f60&hash=28c71675f79648ff557cf218a277715f")).then(function(e){return e.json()}).then(function(e){s(e.data.results[0]),d(!1)})},[a]),u?n.a.createElement("img",{src:j.a,className:"loader",alt:""}):n.a.createElement("div",null,n.a.createElement("div",{className:"_title"},n.a.createElement("img",{src:"".concat(l.thumbnail.path,"/detail.").concat(l.thumbnail.extension),alt:"",className:"image"}),n.a.createElement("h1",{className:"name ml-4"},l.title)),n.a.createElement("div",{className:"container mt-5"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-8"},n.a.createElement("h2",null,"Description"),n.a.createElement("div",{className:"dropdown-divider"}),l.description?l.description:"Not Available"))))}));var P=function(){var e=Object(c.useState)([]),a=Object(m.a)(e,2),t=a[0],r=a[1],l=Object(c.useState)(0),u=Object(m.a)(l,2),d=u[0],f=u[1],h=Object(c.useState)(!0),b=Object(m.a)(h,2),p=b[0],v=b[1];return Object(c.useEffect)(function(){fetch("https://gateway.marvel.com/v1/public/characters?limit=20&offset=".concat(d,"&ts=1551892957053&apikey=ed0db551a956a22bc791744a20041f60&hash=28c71675f79648ff557cf218a277715f")).then(function(e){return e.json()}).then(function(e){r(function(a){return[].concat(Object(s.a)(a),Object(s.a)(e.data.results))}),v(!1)})},[d]),n.a.createElement(i.a,null,n.a.createElement("div",{className:"App"},n.a.createElement(E,null),n.a.createElement(o.a,{exact:!0,path:"/",render:function(e){return n.a.createElement(M,Object.assign({},e,{heros:t,setCount:f,isLoading:p}))}}),n.a.createElement(o.a,{exact:!0,path:"/character/:id",render:function(e){return n.a.createElement(B,e)}}),n.a.createElement(o.a,{exact:!0,path:"/series/:id",render:function(e){return n.a.createElement(J,e)}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[29,1,2]]]);
//# sourceMappingURL=main.581a1e60.chunk.js.map