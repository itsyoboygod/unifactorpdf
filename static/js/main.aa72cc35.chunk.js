(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{105:function(e,t,a){e.exports=a.p+"static/media/Monoton-Regular.411051cb.ttf"},106:function(e,t,a){e.exports=a.p+"static/media/Roboto-Bold.e07df86c.ttf"},109:function(e,t,a){e.exports=a(236)},115:function(e,t,a){},120:function(e,t){},122:function(e,t){},149:function(e,t){},150:function(e,t){},206:function(e,t){},234:function(e,t,a){},236:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),o=a(88),r=a.n(o),c=a(89),i=a(90),m=a(91),s=a(107),u=a(92),d=a(108),g=(a(115),a(5)),E=a(59),p=a.n(E),h=a(105),f=a.n(h),_=a(106),C=a.n(_);g.b.register({src:p.a,family:"Roboto-Italic"}),g.b.register({src:f.a,family:"Monoton-Regular"}),g.b.register({src:C.a,family:"Roboto-Bold"});var y=l.a.createRef(),b=(new Date).toJSON().slice(0,10).replace(/-/g,"/"),x=g.f.create({page:{flexDirection:"row",backgroundColor:"#E4E4E4",minHeight:"100%"},pageBackground:{display:"block",position:"absolute",height:"99.99vh",width:"99.99vw"},titles:{source1:p.a}}),w=function(e){return l.a.useEffect(function(){console.log("doc",e)},[e]),l.a.createElement(g.a,null,l.a.createElement(g.e,{size:"A4"},l.a.createElement(g.c,{src:"https://previews.123rf.com/images/artefy/artefy1103/artefy110300007/9216253-arri%C3%A8re-plan-de-document-s%C3%A9curis%C3%A9-.jpg?fj=1",style:x.pageBackground}),l.a.createElement(g.h,{ref:y,style:{width:"100%"}},l.a.createElement(g.h,{className:"header"},l.a.createElement(g.g,{style:{margin:"auto",padding:"10px",top:0}},"header")),l.a.createElement(g.h,{className:"post",style:{display:"flex",flexDirection:"row",width:"100%",margin:"auto"}},l.a.createElement(g.h,{className:"left",style:{margin:"auto",width:"45%"}},l.a.createElement(g.g,{style:{margin:"10px",fontWeight:"bold"}},"INFORMA\xc7\xc3O GERAL"),l.a.createElement(g.g,{style:{fontFamily:"Roboto-Italic"}},"Nome do projeto:"),l.a.createElement(g.g,null,e.titleproj),l.a.createElement(g.g,null,"Nome do propriet\xe1rio:"),l.a.createElement(g.g,null,e.firstname),l.a.createElement(g.g,null,"Sobrenome do propriet\xe1rio:"),l.a.createElement(g.g,null,e.lastname),l.a.createElement(g.g,null,"Email do propriet\xe1rio:"),l.a.createElement(g.g,null,e.email),l.a.createElement(g.g,null,"Contato do propriet\xe1rio:"),l.a.createElement(g.g,null,e.contact),l.a.createElement(g.g,null,"Endere\xe7o do propriet\xe1rio:"),l.a.createElement(g.g,null,e.end),l.a.createElement(g.g,null,"Local de retirado do produto:"),l.a.createElement(g.g,null,e.retirada)),l.a.createElement(g.h,{className:"right",style:{margin:"auto",width:"45%"}},l.a.createElement(g.g,{style:{margin:"10px"}},"INFORMA\xc7\xc3O T\xc9CNICA"),l.a.createElement(g.g,null,"Produto:"),l.a.createElement(g.g,null,e.product),l.a.createElement(g.g,null,"Unidades:"),l.a.createElement(g.g,null,e.units),l.a.createElement(g.g,null,"Peso do produto:"),l.a.createElement(g.g,null,e.weight),l.a.createElement(g.g,null,"Cor do produto:"),l.a.createElement(g.g,null,e.color),l.a.createElement(g.g,null,"Cor do produto:"),l.a.createElement(g.g,null,e.color),l.a.createElement(g.g,null,"Cor do produto:"),l.a.createElement(g.g,null,e.color),l.a.createElement(g.g,null,"Cor do produto:"),l.a.createElement(g.g,null,e.color))),l.a.createElement(g.h,{style:{display:"flex",flexDirection:"row",justifyContent:"space-around"}},l.a.createElement(g.h,null,l.a.createElement(g.g,null,"_______________________"),l.a.createElement(g.g,{style:{margin:"auto"}},"Assinatura do cliente")),l.a.createElement(g.h,{style:{}},l.a.createElement(g.g,null,"_______________________"),l.a.createElement(g.g,{style:{margin:"auto"}},"Assinatura do representante"))),l.a.createElement(g.h,{className:"footer",style:{margin:"50px"}},l.a.createElement(g.h,{className:"uni-logo",style:{flexDirection:"row",margin:"auto"}},l.a.createElement(g.g,{style:{fontFamily:"Roboto-Bold",margin:"5px"}},"UNIFACTOR"),l.a.createElement(g.g,{style:{margin:"auto",fontFamily:"Monoton-Regular"}},"3D")),l.a.createElement(g.g,{style:{textAlign:"center",fontFamily:"Roboto-Italic"}},"S\xc3O PAULO ",b)))))};var A=function(e){return l.a.useEffect(function(){console.log(e)},[e]),l.a.createElement("div",{style:{height:"99vh"}},l.a.createElement(g.d,{size:"A4",targetref:y,filename:"post.pdf",height:"100%",width:"99.7%"},l.a.createElement(w,e)))},N=(a(234),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={titleproj:"",firstname:"",lastname:"",email:"",contact:"",end:"",retirada:"",product:"",units:"",weight:"",color:"",postSubmmited:!1},a.onChange=function(e){return function(t){a.setState(Object(c.a)({},e,t.target.value))}},a.submmitPost=function(e){console.log(a.state),a.setState({postSubmmited:!0})},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,this.state.postSubmmited?l.a.createElement(A,{titleproj:this.state.titleproj,firstname:this.state.firstname,lastname:this.state.lastname,email:this.state.email,contact:this.state.contact,retirada:this.state.retirada,product:this.state.product,end:this.state.end,project:this.state.project,units:this.state.units,color:this.state.color,weight:this.state.weight}):l.a.createElement("div",{className:"form-container"},l.a.createElement("form",null,l.a.createElement("div",{className:"left"},l.a.createElement("h1",null,"INFORMA\xc7\xc3O GERAL"),l.a.createElement("p",null,"Nome do projeto:"),l.a.createElement("input",{onChange:this.onChange("titleproj"),name:"titleproj",placeholder:"Ex: SpaceX"}),l.a.createElement("p",null,"Nome do cliente:"),l.a.createElement("input",{onChange:this.onChange("firstname"),name:"firstname",placeholder:"Ex: Vinicius"}),l.a.createElement("p",null,"Sobrenome do cliente:"),l.a.createElement("input",{onChange:this.onChange("lastname"),name:"lastname",placeholder:"Ex: Kaique"}),l.a.createElement("p",null,"E-mail:"),l.a.createElement("input",{onChange:this.onChange("email"),name:"email",placeholder:"Ex: vinicius.kaique@hotmail.com"}),l.a.createElement("p",null,"N\xfamero de contato:"),l.a.createElement("input",{onChange:this.onChange("contact"),name:"contact",placeholder:"Ex: 9 1234-5678"}),l.a.createElement("p",null,"Endere\xe7o do cliente:"),l.a.createElement("input",{onChange:this.onChange("end"),name:"end",placeholder:"Ex: Av. Maria Coelho Aguiar"}),l.a.createElement("p",null,"Endere\xe7o do local da entrega:"),l.a.createElement("input",{onChange:this.onChange("retirada"),name:"retirada",placeholder:"Ex: Av. Paulista 123, apto 321"})),l.a.createElement("div",{className:"right"},l.a.createElement("h1",null,"INFORMA\xc7\xc3O T\xc9CNICA"),l.a.createElement("p",null,"Produto:"),l.a.createElement("input",{onChange:this.onChange("product"),name:"product",placeholder:"Ex: cubo"}),l.a.createElement("p",null,"Cor:"),l.a.createElement("input",{onChange:this.onChange("color"),name:"color",placeholder:"Ex: azul"}),l.a.createElement("p",null,"Peso:"),l.a.createElement("input",{onChange:this.onChange("weight"),name:"weight",placeholder:"Ex: 123g"}),l.a.createElement("p",null,"Dimensoes:"),l.a.createElement("input",{onChange:this.onChange("dimen"),name:"dimen",placeholder:"Ex: 30x8.5x7 cm"}),l.a.createElement("p",null,"Unidades:"),l.a.createElement("input",{onChange:this.onChange("units"),name:"units",placeholder:"Ex: 20u"}))),l.a.createElement("button",{id:"id-create-btn",onClick:this.submmitPost,type:"submit"},"Done")))}}]),t}(n.Component));var v=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(N,null))};r.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(v,null)),document.getElementById("root"))},59:function(e,t,a){e.exports=a.p+"static/media/Roboto-Italic.a720f17a.ttf"}},[[109,2,1]]]);
//# sourceMappingURL=main.aa72cc35.chunk.js.map