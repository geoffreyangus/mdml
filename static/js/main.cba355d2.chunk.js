(window["webpackJsonpmd-ml"]=window["webpackJsonpmd-ml"]||[]).push([[0],{133:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(38),o=a.n(c),l=a(12),i=a(13);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(47);var s=a(2),m=a(3),u=a(5),d=a(4),h=a(6),p=(a(48),function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.title,a=e.image,n=e.description,c=(e.links,e.notes),o=e.exercises,i=e.projects;e.challenges;return c=c.map(function(e){return r.a.createElement(l.b,{to:e.link},e.name)}),o=o.map(function(e){return r.a.createElement(l.b,{to:e.link},e.name)}),i=i.map(function(e){return r.a.createElement(l.b,{to:e.link},e.name)}),r.a.createElement("div",{className:"concept-card"},r.a.createElement("div",{className:"card-preview"},r.a.createElement("img",{className:"card-preview-image",src:"https://raw.githubusercontent.com/geoffreyangus/md-ml/master/"+a}),r.a.createElement("div",null,n)),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"card-body-title"},t),r.a.createElement("div",{className:"card-materials"},r.a.createElement("div",{className:"card-materials-notes"},r.a.createElement("div",{className:"card-materials-title"},"Notes"),c),r.a.createElement("div",{className:"card-materials-assignments"},r.a.createElement("div",{className:"card-materials-title"},"Exercises"),o),r.a.createElement("div",{className:"card-materials-assignments"},r.a.createElement("div",{className:"card-materials-title"},"Projects"),i))))}}]),t}(r.a.Component)),b=a(41),f=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(u.a)(this,Object(d.a)(t).call(this))).listenToScroll=function(){var t=(document.body.scrollTop||document.documentElement.scrollTop)/(document.documentElement.scrollHeight-document.documentElement.clientHeight);e.setState({scrolled:t>0})},e.state={scrolled:!1},e}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.listenToScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.listenToScroll)}},{key:"render",value:function(){return console.log(this.state),r.a.createElement("div",{id:"navbar",className:this.state.scrolled?"navbar scroll":"navbar"},r.a.createElement("a",Object(b.a)({className:"main-link",href:""},"className","btn"),r.a.createElement("div",null,r.a.createElement("b",null,"MD"),"+",r.a.createElement("b",null,"ML"))),r.a.createElement(l.b,{to:"/about"},"About"),r.a.createElement("a",{target:"_blank",href:"https://repl.it/logout",className:"btn"},"Login"))}}]),t}(n.Component),v=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"navbar-wrapper"},r.a.createElement(f,null))}}]),t}(n.Component),E=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"footer"},"Icons made by ",r.a.createElement("a",{href:"https://www.flaticon.com/authors/freepik",title:"Freepik"},"Freepik")," from ",r.a.createElement("a",{href:"https://www.flaticon.com/",title:"Flaticon"},"www.flaticon.com"))}}]),t}(n.Component),j=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(u.a)(this,Object(d.a)(t).call(this))).state={data:null},e}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://raw.githubusercontent.com/geoffreyangus/md-ml/master/data/home.json").then(function(e){return e.json()}).then(function(t){return e.setState({data:t})})}},{key:"render",value:function(){var e=this.state.data,t=[];if(null!=e)for(var a=0;a<e.length;a++)t.push(r.a.createElement(p,{title:e[a].title,image:e[a].image,description:e[a].description,links:e[a].links,notes:e[a].notes,exercises:e[a].exercises,projects:e[a].projects,challenges:e[a].challenges}));return r.a.createElement("div",{id:"home-page"},r.a.createElement(v,null),r.a.createElement("div",{id:"concept-cards-wrapper"},t),r.a.createElement(E,null))}}]),t}(n.Component),w=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(j,null)}}]),t}(n.Component),O=a(19),g=a.n(O),k=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(u.a)(this,Object(d.a)(t).call(this))).state={markdown:""},e}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://raw.githubusercontent.com/geoffreyangus/md-ml/master/data"+this.props.location.pathname).then(function(e){return e.text()}).then(function(t){return e.setState({markdown:t})})}},{key:"render",value:function(){var e=this.state.markdown;return r.a.createElement("div",null,r.a.createElement(v,null),r.a.createElement("div",{className:"notes-wrapper"},r.a.createElement(g.a,{source:e}),r.a.createElement(E,null)))}}]),t}(n.Component),y=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(u.a)(this,Object(d.a)(t).call(this))).state={markdown:""},e}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://raw.githubusercontent.com/geoffreyangus/md-ml/master/data/about/about.md").then(function(e){return e.text()}).then(function(t){return e.setState({markdown:t})})}},{key:"render",value:function(){var e=this.state.markdown;return r.a.createElement("div",{className:"about-wrapper"},r.a.createElement(g.a,{source:e}))}}]),t}(r.a.Component),N=r.a.createElement(l.a,{basename:"/md-ml"},r.a.createElement("div",null,r.a.createElement(i.a,{exact:!0,path:"/",component:w}),r.a.createElement(i.a,{path:"/about",component:y}),r.a.createElement(i.a,{path:"/notes",component:k})));o.a.render(N,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},42:function(e,t,a){e.exports=a(133)},47:function(e,t,a){},48:function(e,t,a){}},[[42,1,2]]]);
//# sourceMappingURL=main.cba355d2.chunk.js.map