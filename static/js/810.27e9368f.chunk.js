"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[810,522],{9810:function(e,n,t){t.r(n),t.d(n,{default:function(){return Z}});t(2791);var a=t(1405),s=t(6351),r=t(6140),i=t(885),c=t(9e3),o=t(5705),l=t(936),d=t(3360),u="ContactForm_submit__eYq7N",m="ContactForm_label__-cVXI",h="ContactForm_input__Bl93P",_="ContactForm_btn__wll+u",x=t(3329),j=function(){var e=(0,l.Tn)(),n=(0,i.Z)(e,2),t=n[0],a=n[1].isLoading,s=(0,l.wY)();return(0,x.jsx)(o.J9,{initialValues:{name:"",number:""},onSubmit:function(e,n){var a,i=e.name,c=e.number,o=n.resetForm;(null===(a=s.data)||void 0===a?void 0:a.find((function(e){return e.name.toLowerCase()===i.toLowerCase()})))?r.Am.error("".concat(i," is already in contact")):(t({name:i,number:c}),r.Am.success("\u0421ontact with ".concat(i," added")),o())},children:(0,x.jsxs)(o.l0,{className:u,children:[(0,x.jsxs)("label",{className:m,children:["Name",(0,x.jsx)(o.gN,{className:h,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,x.jsxs)("label",{className:m,children:["Number",(0,x.jsx)(o.gN,{className:h,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,x.jsxs)(d.Z,{className:_,variant:"outline-danger",type:"submit",children:[" ",a?(0,x.jsx)("span",{children:"Loading..."}):(0,x.jsx)("span",{children:"Add contact"})," ",(0,x.jsx)(c.Coe,{})]})]})})},b=t(5440),p=t(8535),g="Filter_label__vEd1E",f="Filter_input__N7T3z",N=function(){var e=(0,p.I0)();return(0,x.jsxs)("label",{className:g,children:["Find contacts by name",(0,x.jsx)("input",{className:f,type:"text",onChange:function(n){e((0,b.M)(n.target.value))}})]})},v=t(6373),C=function(){return(0,x.jsx)(v.g4,{height:"100",width:"100",color:"darkred",ariaLabel:"loading"})},L=t(1398),w={list:"ContactList_list__csErn",contact:"ContactList_contact__0STHS",btn:"ContactList_btn__6Piat"},k=function(){var e=(0,l.zr)(),n=(0,i.Z)(e,2),t=n[0],a=n[1].isLoading,o=(0,l.wY)(),u=o.data,m=o.isFetching,h=(0,p.v9)(s.zK).toLowerCase().trim(),_=null===u||void 0===u?void 0:u.map((function(e){return e.name.toLowerCase().includes(h)&&e})).filter((function(e){return!1!==e})).sort((function(e,n){return e.name.localeCompare(n.name)}));return(0,x.jsxs)(L.Z,{className:w.list,children:[_&&!m&&_.map((function(e){var n=e.id,s=e.name,i=e.number;return(0,x.jsxs)(L.Z.Item,{className:w.contact,children:[(0,x.jsx)("span",{children:(0,x.jsx)(c.qNd,{})}),(0,x.jsxs)("p",{children:[s,":"]}),(0,x.jsx)("p",{children:i}),(0,x.jsxs)(d.Z,{type:"button",className:w.btn,onClick:function(){return function(e,n){t(e),r.ZP.success("Contact ".concat(n," has been deleted"))}(n,s)},disabled:a,variant:"outline-danger",children:[a?(0,x.jsx)("span",{children:"Deliting..."}):(0,x.jsx)("span",{children:"Delete"}),(0,x.jsx)(c.HLd,{className:w.icon})]})]},n)})),!0===m&&(0,x.jsx)(C,{})]})},F=t(8674),Z=function(){var e=(0,a.v9)(s.M7);return(0,x.jsxs)("div",{children:[!e&&(0,x.jsx)(F.default,{}),e&&(0,x.jsxs)("div",{children:[(0,x.jsx)("h1",{children:"Phonebook"}),(0,x.jsx)(j,{}),(0,x.jsx)("h2",{children:"Contacts"}),(0,x.jsx)(N,{}),(0,x.jsx)(k,{}),(0,x.jsx)(r.x7,{})]})]})}},8674:function(e,n,t){t.r(n),t.d(n,{default:function(){return i}});var a=t(3504),s={title:"HomePage_title__UFLA3",logo:"HomePage_logo__kUDLi",container:"HomePage_container__uNu-e"},r=t(3329),i=function(){return(0,r.jsx)("div",{className:s.container,children:(0,r.jsxs)("h1",{className:s.title,children:["Welcome to ",(0,r.jsx)("span",{className:s.logo,children:"Phonebook"}),"! ",(0,r.jsx)("br",{}),(0,r.jsx)(a.OL,{className:s.link,to:"/register",children:"Register"}),"or",(0,r.jsx)(a.OL,{className:s.link,to:"/login",children:"login"}),", please."]})})}}}]);
//# sourceMappingURL=810.27e9368f.chunk.js.map