(this["webpackJsonpreact-practice-forms"]=this["webpackJsonpreact-practice-forms"]||[]).push([[0],{15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),c=a(6),s=a.n(c),r=(a(15),a(2)),o=a(4),h=a(7),l=a(8),j=a(3),b=a(10),d=a(9),g=a(0);var u=function(e){return Object(g.jsxs)("main",{children:[Object(g.jsxs)("form",{onSubmit:e.handleSumbit,children:[Object(g.jsx)("input",{placeholder:"First Name",name:"firstName",value:e.firstName,onChange:e.handleChange}),Object(g.jsx)("br",{}),Object(g.jsx)("input",{placeholder:"Last Name",name:"lastName",value:e.lastName,onChange:e.handleChange}),Object(g.jsx)("br",{}),Object(g.jsx)("input",{placeholder:"Age",name:"age",value:e.age,onChange:e.handleChange}),Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),Object(g.jsxs)("label",{children:[Object(g.jsx)("input",{type:"radio",name:"gender",checked:"male"===e.gender,value:"male",onChange:e.handleChange}),"Male"]}),Object(g.jsxs)("label",{children:[Object(g.jsx)("input",{type:"radio",name:"gender",checked:"female"===e.gender,value:"female",onChange:e.handleChange}),"Female"]}),Object(g.jsx)("br",{}),Object(g.jsx)("label",{children:"Please choose a location"}),Object(g.jsxs)("select",{name:"location",value:e.location,onChange:e.handleChange,children:[Object(g.jsx)("option",{value:"zagreb",children:"Zagreb"}),Object(g.jsx)("option",{value:"berlin",children:"Berlin"}),Object(g.jsx)("option",{value:"london",children:"London"})]}),Object(g.jsx)("br",{}),Object(g.jsxs)("label",{children:[Object(g.jsx)("input",{type:"checkbox",name:"isKosher",checked:e.dietaryRestrictions.isKosher,value:"kosher",onChange:e.handleChange}),"Kosher"]}),Object(g.jsxs)("label",{children:[Object(g.jsx)("input",{type:"checkbox",name:"isVegetarian",checked:e.dietaryRestrictions.isVegetarian,value:"vegetarian",onChange:e.handleChange}),"Vegetarian"]}),Object(g.jsxs)("label",{children:[Object(g.jsx)("input",{type:"checkbox",name:"isVegan",checked:e.dietaryRestrictions.isVegan,value:"vegan",onChange:e.handleChange}),"Vegan"]}),Object(g.jsx)("br",{}),Object(g.jsx)("button",{children:"Submit"})]}),Object(g.jsx)("hr",{}),Object(g.jsx)("h2",{children:"Entered information:"}),Object(g.jsxs)("p",{children:["Your name: ","".concat(e.firstName," ").concat(e.lastName)]}),Object(g.jsxs)("p",{children:["Your age: ",e.age]}),Object(g.jsxs)("p",{children:["Your gender: ",e.gender]}),Object(g.jsxs)("p",{children:["Your destination: ",e.location]}),Object(g.jsxs)("p",{children:["Your dietary restrictions:",Object(g.jsx)("br",{}),"Vegan: ",e.dietaryRestrictions.isVegan?"YES":"NO",Object(g.jsx)("br",{}),"Vegetarian: ",e.dietaryRestrictions.isVegetarian?"YES":"NO",Object(g.jsx)("br",{}),"Kosher: ",e.dietaryRestrictions.isKosher?"YES":"NO"]})]})},O=function(e){Object(b.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(h.a)(this,a),(e=t.call(this)).state={firstName:"",lastName:"",age:"",gender:"",location:"zagreb",dietaryRestrictions:{isVegan:!1,isVegetarian:!1,isKosher:!1}},e.handleChange=e.handleChange.bind(Object(j.a)(e)),e.handleSumbit=e.handleSumbit.bind(Object(j.a)(e)),e}return Object(l.a)(a,[{key:"handleSumbit",value:function(e){var t="First name: ".concat(this.state.firstName,"\n");t+="Last name: ".concat(this.state.lastName,"\n"),t+="Age: ".concat(this.state.age,"\n"),t+="Gender: ".concat(this.state.gender,"\n"),t+="Location: ".concat(this.state.location,"\n"),t+="Dietary restrictions: ";var a=!0;for(var n in this.state.dietaryRestrictions)!0===this.state.dietaryRestrictions[n]&&(a?a=!1:t+=", ",t+=n.substr(2));alert(t),e.preventDefault()}},{key:"handleChange",value:function(e){var t=e.target.name;if("checkbox"===e.target.type){var a=e.target.checked;this.setState((function(e){return{dietaryRestrictions:Object(o.a)(Object(o.a)({},e.dietaryRestrictions),{},Object(r.a)({},t,a))}}))}else{var n=e.target.value;this.setState(Object(r.a)({},t,n))}}},{key:"render",value:function(){return Object(g.jsx)(u,Object(o.a)({handleChange:this.handleChange,handleSumbit:this.handleSumbit},this.state))}}]),a}(i.a.Component);var m=function(){return Object(g.jsx)("div",{children:Object(g.jsx)(O,{})})},x=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,18)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),i(e),c(e),s(e)}))};s.a.render(Object(g.jsx)(m,{}),document.getElementById("root")),x()}},[[17,1,2]]]);
//# sourceMappingURL=main.099b3809.chunk.js.map