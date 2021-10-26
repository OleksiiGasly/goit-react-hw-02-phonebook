(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{18:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var a,r,c,i,o,s,l,u,b,d,m=n(1),j=n.n(m),h=n(9),p=n.n(h),x=(n(18),n(12)),f=n(4),O=n(5),g=n(7),v=n(6),y=n(10),C=n(2),k=n(3),w=k.a.form(a||(a=Object(C.a)(["\n  display: block;\n  margin-left: 22px;\n"]))),S=k.a.label(r||(r=Object(C.a)(["\n  font-size: 15px;\n"]))),A=k.a.input(c||(c=Object(C.a)(["\n  display: block;\n  width: 222px;\n  height: 30px;\n  margin-bottom: 10px;\n"]))),z=k.a.button(i||(i=Object(C.a)(["\n  margin-left: 56px;\n  margin-top: 10px;\n  width: 110px;\n  height: 37px;\n  color: white;\n  background-color: navy;\n  border-style: none;\n  border-radius: 4px;\n"]))),F=n(0),D=function(e){Object(g.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(f.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:""},e.handleChange=function(t){var n=t.currentTarget,a=n.name,r=n.value;e.setState(Object(y.a)({},a,r))},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state),e.reset()},e.reset=function(){e.setState({name:"",number:""})},e}return Object(O.a)(n,[{key:"render",value:function(){var e=this.handleSubmit,t=this.handleChange,n=this.state,a=n.name,r=n.number;return Object(F.jsxs)(w,{onSubmit:e,children:[Object(F.jsxs)(S,{htmlFor:"name",children:["Name",Object(F.jsx)(A,{onChange:t,type:"text",name:"name",value:a,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432.\r \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(F.jsxs)(S,{htmlFor:"number",children:["Number",Object(F.jsx)(A,{onChange:t,type:"tel",name:"number",value:r,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b,\r \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(F.jsx)("div",{children:Object(F.jsx)(z,{type:"submit",children:"Add contact"})})]})}}]),n}(m.Component),J=D,T=k.a.ul(o||(o=Object(C.a)(["\n  list-style-type: none;\n  padding-left: 22px;\n"]))),Z=k.a.li(s||(s=Object(C.a)(["\nbackground-color: whitesmoke;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 344px;\n  margin-bottom: 8px;\n"]))),q=k.a.button(l||(l=Object(C.a)(["\n  width: 88px;\n  height: 30px;\n  color: white;\n  background-color: navy;\n  border-style: none;\n  border-radius: 4px;\n"]))),B=function(e){var t=e.id,n=e.name,a=e.number,r=e.onClick;return Object(F.jsxs)(Z,{children:[Object(F.jsxs)("span",{children:[n,": ",a]}),Object(F.jsx)(q,{type:"button",onClick:r,children:"Delete"})]},t)},E=function(e){var t=e.contacts,n=e.onDeleteContact;return Object(F.jsx)(T,{children:t.map((function(e){return Object(F.jsx)(B,{name:e.name,number:e.number,onClick:function(){return n(e.id)}})}))})},L=k.a.label(u||(u=Object(C.a)(["\ndisplay: block;\nmargin-left: 22px;  \nfont-weight: 500;\n"]))),M=function(e){var t=e.value,n=e.onChange;return Object(F.jsxs)(L,{children:[Object(F.jsx)("p",{children:" Find contact by name"}),Object(F.jsx)("input",{type:"text",value:t,onChange:n})]})},N=k.a.h1(b||(b=Object(C.a)(["\n  margin-left: 110px;\n"]))),H=k.a.h2(d||(d=Object(C.a)(["\n  margin-top: 40px;\n  margin-left: 144px;\n"]))),I=n(25),K=function(e){Object(g.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(f.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},e.addContact=function(t){var n=t.name,a=t.number,r=e.state.contacts,c={id:Object(I.a)(),name:n,number:a};r.some((function(e){return e.name===c.name}))?alert("".concat(c.name," is already in contacts")):e.setState((function(e){var t=e.contacts;return{contacts:[c].concat(Object(x.a)(t))}}))},e.tryFilter=function(t){e.setState({filter:t.currentTarget.value}),console.log(t.currentTarget.value)},e.visibleContacts=function(){var t=e.state,n=t.contacts,a=t.filter.toLowerCase();return n.filter((function(e){return e.name.toLowerCase().includes(a)}))},e.deleteContact=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e}return Object(O.a)(n,[{key:"render",value:function(){var e=this.state.filter,t=this.visibleContacts();return Object(F.jsxs)("div",{children:[Object(F.jsx)(N,{children:"Phonebook"}),Object(F.jsx)(J,{onSubmit:this.addContact}),Object(F.jsx)(H,{children:"Contacts"}),Object(F.jsx)(M,{value:e,onChange:this.tryFilter}),Object(F.jsx)(E,{contacts:t,onDeleteContact:this.deleteContact})]})}}]),n}(m.Component),P=K;p.a.render(Object(F.jsx)(j.a.StrictMode,{children:Object(F.jsx)(P,{})}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.793ad9f7.chunk.js.map