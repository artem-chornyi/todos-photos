(this["webpackJsonptodos-photos"]=this["webpackJsonptodos-photos"]||[]).push([[0],{123:function(e,t,n){},124:function(e,t,n){"use strict";n.r(t);var c,o=n(0),a=n(30),r=n.n(a),i=n(28),s=n(43),l=n(67),d=n(17),j="addTodo",u="removeTodo",b="chengeTodo",O=function(e,t){localStorage.setItem(e,JSON.stringify(t))},h=100,x=4,f="Task",p="todoList",m={todos:(c=p,null===localStorage.getItem(c)&&localStorage.setItem(c,JSON.stringify([])),JSON.parse(localStorage.getItem(c)))},v=Object(l.a)({todo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:var n=[].concat(Object(d.a)(e.todos),[t.data]);return O(p,n),{todos:n};case u:var c=e.todos.filter((function(e){return e!==t.data}));return O(p,c),{todos:c};case b:var o=e.todos.map((function(e){return e.id===t.data.id?t.data:e}));return O(p,o),{todos:o};default:return e}}}),g=Object(l.b)(v),C=n(14),y=n(16),T=n(49),S=n(189),w=n(190),k="#808080",N="#008000",D="#006400",E="#FFFAFA",I=function(e){return{search:{fontColor:E},input:{"& label.Mui-focused":{color:N},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:E},"&:hover fieldset":{borderColor:N},"&.Mui-focused fieldset":{borderColor:N}},"& .MuiTextField-root":{borderColor:"red"},"& .MuiInputLabel-root":{color:E}}}},F=n(2),P=["value","onChange","onKeyDown","helperText"],A=Object(w.a)(I),H=function(e){var t=e.value,n=e.onChange,c=e.onKeyDown,o=e.helperText,a=Object(T.a)(e,P),r=A();return Object(F.jsx)("div",{className:r.search,children:Object(F.jsx)(S.a,Object(y.a)({onChange:n,value:t,onKeyDown:c,variant:"outlined",helperText:o,className:r.input,error:!!o},a))})},J=H,M={textDecoration:"none"},B=function(e){return{active:Object(y.a)(Object(y.a)({},M),{},{color:N}),link:Object(y.a)(Object(y.a)({},M),{},{color:E})}},K=["children","to"],R=Object(w.a)(B),U=function(e){var t=e.children,n=e.to,c=Object(T.a)(e,K),o=R(),a=Object(C.g)(n);return a&&(document.title="Home"===t?"React App":t),Object(F.jsx)(i.b,Object(y.a)(Object(y.a)({to:n,className:a?o.active:o.link},c),{},{children:t}))},_=n(199),G=n(200),L=n(211),W=n(99),Y=Object(W.a)({palette:{mode:"dark",primary:{main:"#1976d2"}}}),$=Object(w.a)((function(e){return{root:{justifyContent:"space-around"}}})),q=function(){var e=$();return Object(F.jsx)(L.a,{theme:Y,children:Object(F.jsx)(_.a,{position:"static",children:Object(F.jsxs)(G.a,{className:e.root,children:[Object(F.jsx)(U,{to:"/",children:"Home"}),Object(F.jsx)(U,{to:"photos",children:"Photos"}),Object(F.jsx)(U,{to:"todos",children:"Todos"})]})})})},z=n(196),Q=function(e){return{button:{backgroundColor:"".concat(N," !important"),"&:hover":{backgroundColor:"".concat(D," !important")},height:54}}},V=["onClick","value"],X=Object(w.a)(Q),Z=function(e){var t=e.onClick,n=e.value,c=Object(T.a)(e,V),o=X();return Object(F.jsx)(z.a,Object(y.a)(Object(y.a)({onClick:t,className:o.button,variant:"contained"},c),{},{children:n}))},ee=Z,te=n(201),ne=n(202),ce=n(204),oe=n(205),ae=n(203),re=function(e){return{photo:{height:150,width:150,margin:"auto"},card:{width:250}}},ie=function(e){var t=e.title,n=e.src;return Object(F.jsx)(F.Fragment,{children:Object(F.jsxs)(te.a,{sx:re().card,children:[Object(F.jsx)(ne.a,{}),Object(F.jsx)(ce.a,{component:"img",sx:re().photo,height:"150",src:n,alt:"Paella dish"}),Object(F.jsx)(oe.a,{children:Object(F.jsx)(ae.a,{variant:"body2",color:"text.secondary",children:t})})]})})},se=n(198),le=n(194),de=n(188),je=n(207),ue=n(208),be=n(193),Oe=n(206),he=n(98),xe=n.n(he),fe=n(97),pe=n.n(fe),me=function(e){var t=e.todos,n=e.deleteTodo,c=e.setTodoChenge,o=e.changeStatusTudo,a=Object(C.h)(),r=t.sort((function(e,t){return t.status.localeCompare(e.status)}));return Object(F.jsx)("div",{children:Object(F.jsx)(se.a,{sx:{width:"100%",bgcolor:"background.paper"},children:r.map((function(e){var t=e.id,r=e.status,i=e.text;return Object(F.jsxs)(le.a,{sx:{paddingRight:"70px"},secondaryAction:Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(Oe.a,{edge:"end","aria-label":"comments",onClick:function(){return c(e)},children:Object(F.jsx)(pe.a,{})}),Object(F.jsx)(Oe.a,{edge:"end","aria-label":"comments",onClick:function(){return n(e)},children:Object(F.jsx)(xe.a,{})})]}),disablePadding:!0,children:[Object(F.jsx)(je.a,{children:Object(F.jsx)(be.a,{edge:"start",checked:"done"===r,onClick:function(){return o(e)},tabIndex:-1,disableRipple:!0,sx:{marginLeft:0},inputProps:{"aria-labelledby":t}})}),Object(F.jsx)(de.a,{role:void 0,sx:{paddingRight:"15px !important"},onClick:function(){a("/todos/".concat(t))},dense:!0,children:"done"===r?Object(F.jsx)("s",{children:Object(F.jsx)(ue.a,{id:t,primary:i})}):Object(F.jsx)(ue.a,{id:t,primary:i})})]},t)}))})})},ve=function(){return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(q,{}),Object(F.jsx)(ke,{children:Object(F.jsx)(C.a,{})})]})},ge=function(){var e=Object(C.f)().pathname;return Object(o.useEffect)((function(){window.scrollTo(0,0)}),[e]),null},Ce=function(e){return{viewContainer:{background:k,width:"100%",minHeight:"100vh"},wrapper:{maxWidth:1300,padding:"0 30px 30px",margin:"auto"}}},ye=Object(w.a)(Ce),Te=function(e){var t=e.children,n=ye();return Object(F.jsx)("div",{className:n.viewContainer,children:Object(F.jsx)("div",{className:n.wrapper,children:t})})},Se=function(e){return{content:{padding:"40px 20px",minHeight:"100vp"}}},we=Object(w.a)(Se),ke=function(e){var t=e.children,n=we();return Object(F.jsx)("div",{className:n.content,children:t})},Ne=n.p+"static/media/preloader.8e5faca5.svg",De=function(e){return{preloader:{display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"inherit",width:"100%",height:100,padding:20}}},Ee=Object(w.a)(De),Ie=function(){var e=Ee();return Object(F.jsx)("div",{className:e.preloader,children:Object(F.jsx)("img",{src:Ne,width:"100",alt:"preloader"})})},Fe=(n(123),function(){return Object(F.jsx)("div",{children:"Home"})}),Pe=n(11),Ae=function(e){return{allContent:{display:"flex",flexDirection:"column",gap:40},search:{display:"flex",flexDirection:"row",gap:20,justifyContent:"center"},photoContent:{display:"flex",flexDirection:"row",flexWrap:"wrap",gap:20,justifyContent:"center"}}};var He=Object(w.a)(Ae),Je=function(){var e=He(),t=Object(o.useState)(""),n=Object(Pe.a)(t,2),c=n[0],a=n[1],r=Object(o.useState)(!1),i=Object(Pe.a)(r,2),s=i[0],l=i[1],d=Object(o.useState)([]),j=Object(Pe.a)(d,2),u=j[0],b=j[1],O=Object(o.useState)(""),x=Object(Pe.a)(O,2),f=x[0],p=x[1],m=Object(o.useState)(""),v=Object(Pe.a)(m,2),g=v[0],C=v[1],y=Object(o.useState)(!0),T=Object(Pe.a)(y,2),S=T[0],w=T[1];Object(o.useEffect)((function(){var e;s&&(b([]),(e=c,fetch("https://jsonplaceholder.typicode.com/photos?albumId="+e).then((function(e){return e.json()}))).then((function(e){b(e),a("")})).catch((function(e){p(e)})).finally((function(){l(!1)})))}),[s]),Object(o.useEffect)((function(){w(c===g||!c)}),[c]);var k=function(){var e=function(e,t){return/^[0-9]+$/.test(e)&&e<t}(c,h);e?(C(c),l(!0)):p("Use only numbers from 1 to 100")};return Object(F.jsxs)("div",{className:e.allContent,children:[Object(F.jsxs)("div",{className:e.search,children:[Object(F.jsx)(J,{onChange:function(e){var t=e.target;p(""),a(t.value)},value:c,onKeyDown:function(e){"Enter"===e.key&&k()},label:"Search by id",helperText:f}),Object(F.jsx)(ee,{value:"Get photos",onClick:k,disabled:S})]}),s&&Object(F.jsx)(Ie,{}),Object(F.jsx)("div",{className:e.photoContent,children:u&&u.map((function(e){return Object(F.jsx)(ie,{src:e.thumbnailUrl,title:e.title},e.id)}))})]})},Me=Je,Be=n(5),Ke=n(191),Re=n(212),Ue={box:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",bgcolor:"background.paper",boxShadow:24,pt:2,px:4,pb:3,width:250,display:"flex",flexDirection:"column",gap:"20px"}},_e=n(192),Ge=n(197),Le=n(213),We=n(209),Ye=n(185),$e=function(e){var t=Object(o.useState)(!0),n=Object(Pe.a)(t,2),c=n[0],a=n[1],r=e.open,i=e.handleClose,s=e.statusTodo,l=e.setStatusTodo,d=e.text,j=e.setText,u=e.makeNewTodo,b=e.setTodoChenge,O=e.todoChenge,h=e.changeExistingTodo;Object(o.useEffect)((function(){d||O.text?a(!1):a(!0)}),[d,O]);return Object(F.jsx)(Ke.a,{open:r,onClose:i,children:Object(F.jsxs)(Re.a,{sx:Ue.box,children:[Object(F.jsx)("h2",{children:"Create todo"}),Object(F.jsxs)(We.a,{children:[Object(F.jsx)(Ye.a,{id:"demo-radio-buttons-group-label",children:"Status"}),Object(F.jsxs)(Ge.a,{"aria-labelledby":"demo-radio-buttons-group-label",name:"status",value:O.text?O.status:s,onChange:function(e){var t=e.target;O.text?b(Object(y.a)(Object(y.a)({},O),{},Object(Be.a)({},t.name,t.value))):l(t.value)},children:[Object(F.jsx)(Le.a,{value:"plan",control:Object(F.jsx)(_e.a,{}),label:"Plan"}),Object(F.jsx)(Le.a,{value:"done",control:Object(F.jsx)(_e.a,{}),label:"Done"})]})]}),Object(F.jsx)(S.a,{label:f,multiline:!0,rows:x,name:"text",onChange:function(e){var t=e.target;O.text?b(Object(y.a)(Object(y.a)({},O),{},Object(Be.a)({},t.name,t.value))):j(t.value)},placeholder:"Write a task",value:O.text?O.text:d}),Object(F.jsx)(ee,{value:O.text?"Chage todo":"Add new todo",onClick:O.text?h:u,disabled:c})]})})},qe=function(e){return{type:b,data:e}},ze=function(e){return{content:{display:"flex",flexDirection:"column",gap:20},button:{display:"flex",justifyContent:"flex-end"}}},Qe=Object(w.a)(ze),Ve=function(){var e=Qe(),t=Object(s.c)((function(e){return e.todo.todos})),n=Object(s.b)(),c=Object(o.useState)(!1),a=Object(Pe.a)(c,2),r=a[0],i=a[1],l=Object(o.useState)("plan"),d=Object(Pe.a)(l,2),b=d[0],O=d[1],h=Object(o.useState)(""),x=Object(Pe.a)(h,2),f=x[0],p=x[1],m=Object(o.useState)({}),v=Object(Pe.a)(m,2),g=v[0],C=v[1];Object(o.useEffect)((function(){g.text&&i(!0)}),[g]);var T=function(){C({}),p(""),i(!1)};return Object(F.jsxs)("div",{className:e.content,children:[Object(F.jsx)("div",{className:e.button,children:Object(F.jsx)(ee,{value:"Add new todo",onClick:function(){i(!0)}})}),Object(F.jsx)(me,{todos:t,deleteTodo:function(e){n({type:u,data:e})},setTodoChenge:C,changeStatusTudo:function(e){n(qe(Object(y.a)(Object(y.a)({},e),{},{status:"plan"===e.status?"done":"plan"})))}}),Object(F.jsx)($e,{hideBackdrop:!0,open:r,handleClose:T,statusTodo:b,setStatusTodo:O,text:f,setText:p,makeNewTodo:function(e){var t;e.preventDefault(),T(),n((t={text:f,status:b,id:Date.now()},{type:j,data:t})),p(""),O("plan")},setTodoChenge:C,todoChenge:g,changeExistingTodo:function(){n(qe(g)),C({}),T()}})]})},Xe=function(){return Object(F.jsxs)("div",{children:[Object(F.jsx)("p",{children:"\u0423\u043f\u0441 \u0432\u044b \u043d\u0430\u0432\u0435\u0440\u043d\u043e \u043f\u043e\u0442\u0435\u0440\u044f\u043b\u0438\u0441\u044c"}),Object(F.jsx)(U,{to:"/",children:"\u0412\u0435\u0440\u043d\u0443\u0442\u0441\u044f \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443"})]})},Ze=function(){var e=Object(s.c)((function(e){return e.todo.todos})),t=Object(C.h)(),n=Object(C.i)().id,c=Object(o.useState)({}),a=Object(Pe.a)(c,2),r=a[0],i=a[1];return Object(o.useEffect)((function(){var c=e.filter((function(e){return e.id===+n}));0===c.length?t("/notfound"):i(c[0])}),[]),Object(F.jsx)("div",{children:r.text})},et={PHOTOS:"photos",TODOS:"todos",TODOS_BY_ID:"todos/:id",NOTFOUNDPAGE:"*"},tt=[{index:!0,element:Object(F.jsx)(Fe,{})},{path:et.PHOTOS,element:Object(F.jsx)(Me,{})},{path:et.TODOS,element:Object(F.jsx)(Ve,{})},{path:et.TODOS_BY_ID,element:Object(F.jsx)(Ze,{})},{path:et.NOTFOUNDPAGE,element:Object(F.jsx)(Xe,{})}],nt=function(){var e=tt;return Object(F.jsx)(F.Fragment,{children:Object(F.jsx)(C.d,{children:Object(F.jsx)(C.b,{path:"/",element:Object(F.jsx)(ve,{}),children:e.map((function(e){return Object(o.createElement)(C.b,Object(y.a)(Object(y.a)({},e),{},{key:e.path||e.index}))}))})})})};var ct=function(){return Object(F.jsx)(Te,{children:Object(F.jsx)(nt,{})})};r.a.render(Object(F.jsx)(s.a,{store:g,children:Object(F.jsxs)(i.a,{children:[Object(F.jsx)(ge,{}),Object(F.jsx)(ct,{})]})}),document.getElementById("root"))}},[[124,1,2]]]);
//# sourceMappingURL=main.aeb75ba4.chunk.js.map