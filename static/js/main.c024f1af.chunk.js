(this.webpackJsonpoasis=this.webpackJsonpoasis||[]).push([[0],{31:function(e,n,t){},34:function(e,n,t){"use strict";t.r(n);var s,c,i,r,a,o=t(1),l=t.n(o),d=t(14),j=t.n(d),b=t(15),u=t(16),h=t(21),p=t(20),x=(t(26),t(5)),O=t(7),m=(t(31),t(3)),g=t(4),v="#aaaaaa",f="#bb2929",N=(g.a.form(s||(s=Object(m.a)(["\n    display: grid;\n    grid-template-columns: 1fr;\n"]))),g.a.label(c||(c=Object(m.a)(["\n    display: block;\n    padding: 10px;\n    min-height: 40px;\n    cursor: pointer;\n"]))),g.a.div(i||(i=Object(m.a)(["\n    position: relative;\n    z-index: 90;\n\n"]))),g.a.input(r||(r=Object(m.a)(["\n    width: 100%;\n    background: #fff;\n    border-radius: 3px;\n    height: 40px;\n    line-height: 45px;\n    padding: 0 35px 0 10px;\n    transition: .3s ease all;\n    border: 1px solid transparent;\n    &:focus{\n        border: 0.01px solid ",";\n        outline: none;\n        box-shadow: 3px 0px 30px rgba(163,163,163, 0.4);\n    }\n"])),v)),w=g.a.p(a||(a=Object(m.a)(["\n    font-size: 12px;\n    margin-bottom: 0;\n    color: ",";\n    \n"])),f),k=t.p+"static/media/usac.3f43267a.png",C=t(0),y=function(e){Object(h.a)(t,e);var n=Object(p.a)(t);function t(e){var s;return Object(b.a)(this,t),(s=n.call(this,e)).logIn=function(){s.setState({hecho:!0,usuario:s.usuario.value,correo:s.correo.value})},s.logOut=function(){s.setState({hecho:!1,usuario:""})},s.state={hecho:!1,usuario:"",errorMensaje:"",pestanas:""},s}return Object(u.a)(t,[{key:"render",value:function(){var e=this;return this.state.hecho?Object(C.jsxs)("div",{class:"login container border rounded p-3 mt-4",children:[Object(C.jsxs)("div",{class:"row",children:[Object(C.jsx)("div",{class:"col-sm",children:Object(C.jsx)("i",{children:Object(C.jsx)("img",{src:k})})}),Object(C.jsx)("div",{class:"col-sm",children:Object(C.jsx)("h2",{children:"OASIS"})}),Object(C.jsx)("div",{class:"col-sm",children:Object(C.jsx)("div",{className:"btn-group pb-3",children:Object(C.jsx)("a",{className:"btn btn-outline-dark btn-sm",onClick:this.logOut,children:"Mi perfil"})})})]}),Object(C.jsxs)("div",{class:"row",children:[Object(C.jsxs)("div",{class:"col-sm border rounded p-3 mt-4",children:[Object(C.jsx)("div",{className:"btn-group pb-3 pestanaaa",children:Object(C.jsxs)("a",{className:"btn btn-outline-dark",onClick:this.unu,children:[Object(C.jsx)("i",{}),"Iniciar sesi\xf3n"]})}),Object(C.jsx)("div",{className:"btn-group pb-3 pestanaaa",children:Object(C.jsxs)("a",{className:"btn btn-outline-warning",onClick:this.unu,children:[Object(C.jsx)("i",{}),"Crear una nueva cuenta"]})}),Object(C.jsx)("div",{className:"btn-group pb-3 pestanaaa",children:Object(C.jsxs)("a",{className:"btn btn-outline-dark",onClick:this.unu,children:[Object(C.jsx)("i",{}),"Iniciar sesi\xf3n"]})}),Object(C.jsx)("div",{className:"btn-group pb-3 pestanaaa",children:Object(C.jsxs)("a",{className:"btn btn-outline-warning",onClick:this.unu,children:[Object(C.jsx)("i",{}),"Crear una nueva cuenta"]})})]}),Object(C.jsx)("div",{class:"col-sm border rounded p-3 mt-4",children:Object(C.jsx)("h3",{children:"feed all content"})}),Object(C.jsx)("div",{class:"col-sm border rounded p-3 mt-4",children:Object(C.jsx)("h3",{children:"Usuarios activos"})})]}),Object(C.jsxs)("div",{class:"row",children:[Object(C.jsx)("div",{class:"col-6 border rounded p-6 mt-4",children:"Contacto Ingenieria usac"}),Object(C.jsx)("div",{class:"col-6 border rounded p-6 mt-4",children:Object(C.jsx)("div",{className:"btn-group pb-3",children:Object(C.jsx)("a",{className:"btn btn-outline-dark btn-sm",onClick:this.logOut,children:"Cerrar sesi\xf3n"})})})]})]}):Object(C.jsxs)("div",{className:"registro container border rounded p-3 mt-4",children:[Object(C.jsx)("h2",{children:"REGISTRO"}),Object(C.jsxs)("form",{children:[Object(C.jsx)(w,{className:"textoleyenda",children:"nombre de usuario invalido"}),Object(C.jsxs)("div",{className:"input-group pb-3",children:[Object(C.jsx)("div",{className:"input-group-prepend icon",children:Object(C.jsx)("span",{className:"input-group-text",children:Object(C.jsx)("i",{className:"fa-fw",children:Object(C.jsx)(x.a,{icon:O.d})})})}),Object(C.jsx)(N,{id:"usuario",className:"form-control",type:"text",placeholder:"Usuario",ref:function(n){return e.usuario=n}})]}),Object(C.jsxs)("div",{className:"input-group pb-3",children:[Object(C.jsx)("div",{className:"input-group-prepend",children:Object(C.jsx)("span",{className:"input-group-text",children:Object(C.jsx)("i",{className:"fa-fw",children:Object(C.jsx)(x.a,{icon:O.a})})})}),Object(C.jsx)(N,{id:"correo",className:"form-control",type:"text",placeholder:"Correo Electr\xf3nico Institucional",ref:function(n){return e.correo=n}})]}),Object(C.jsxs)("div",{className:"input-group pb-3",children:[Object(C.jsx)("div",{className:"input-group-prepend",children:Object(C.jsx)("span",{className:"input-group-text",children:Object(C.jsx)("i",{className:"fa-fw",children:Object(C.jsx)(x.a,{icon:O.c})})})}),Object(C.jsx)(N,{id:"clave",className:"form-control",type:"password",placeholder:"Contrase\xf1a",ref:function(n){return e.clave=n}})]}),Object(C.jsx)("div",{className:"btn-group pb-3 registroinicio",children:Object(C.jsxs)("a",{className:"btn btn-outline-dark",onClick:this.logIn,children:[Object(C.jsx)("i",{}),"Iniciar sesi\xf3n"]})}),Object(C.jsx)("div",{className:"btn-group pb-3 registroinicio",children:Object(C.jsxs)("a",{className:"btn btn-outline-warning",onClick:this.logOut,children:[Object(C.jsx)("i",{}),"Crear una nueva cuenta"]})}),Object(C.jsx)("div",{className:"border rounded p-6 mt-8",children:Object(C.jsxs)("p",{children:[Object(C.jsx)(x.a,{icon:O.b}),Object(C.jsx)("b",{children:"Error:"})," Por favor rellena el formulario correctamente"]})}),Object(C.jsx)("div",{className:"border rounded p-6 mt-8",children:Object(C.jsx)("p",{children:"Formulario enviado exitosamente!"})})]})]})}}]),t}(o.Component),I=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function S(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}j.a.render(Object(C.jsx)(l.a.StrictMode,{children:Object(C.jsx)(y,{})}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/oasis",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/oasis","/service-worker.js");I?(!function(e){fetch(e).then((function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):S(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):S(e)}))}}()}},[[34,1,2]]]);
//# sourceMappingURL=main.c024f1af.chunk.js.map