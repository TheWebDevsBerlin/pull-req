(this["webpackJsonppull-req"]=this["webpackJsonppull-req"]||[]).push([[0],{100:function(e,t,a){},116:function(e,t,a){e.exports=a.p+"static/media/PullReqIcon.e2f35405.svg"},123:function(e,t,a){e.exports=a.p+"static/media/PullReqGreen.e520bfb8.svg"},145:function(e,t,a){e.exports=a(224)},150:function(e,t,a){},160:function(e,t,a){},161:function(e,t,a){},220:function(e,t){},223:function(e,t,a){},224:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(15),l=a.n(r),c=a(28),o=(a(150),a(82)),i=a(19),u=a(20),p=a(22),m=a(21),d=(a(89),a(119)),h=a.n(d),g=a(263),b=a(117),f=a.n(b),E=a(118),y=a.n(E),v=a(38),k=a.n(v),O=a(14),C=a(116),S=a.n(C);var j=function(e){var t=e.backButton,a=e.user,n=e.menuIsOpen,r=e.setMenuIsOpen,l=Object(O.g)(),o=Object(O.h)();return s.a.createElement("div",{className:"header"},t&&"back"===t.icon&&s.a.createElement(g.a,{onClick:function(e){return l.replace(t.path)}},s.a.createElement(f.a,{fontSize:"large",className:"header_icon"})),t&&"menu"===t.icon&&s.a.createElement(g.a,{onClick:function(e){r()}},n?s.a.createElement(k.a,{fontSize:"large",className:"header_icon"}):s.a.createElement(y.a,{fontSize:"large",className:"header_icon"})),s.a.createElement(c.b,{to:"/"},s.a.createElement("img",{src:S.a,alt:"PullReqLogo",width:"40rem"})," ull request"),s.a.createElement(c.b,{to:"/chat"},s.a.createElement(g.a,{style:{visibility:("/"!==o.pathname||!a)&&"hidden"}},s.a.createElement(h.a,{className:"header_icon",fontSize:"large"}))))},_=a(120),w=a.n(_),N=(a(160),a(121)),B=a(122),x=a.n(B),M=a(286),F=a(284),P=a(264),I=a(281),T=a(285),q=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.props.loadNextPage(),this.props.setBackButton("")}},{key:"componentDidUpdate",value:function(e,t){e.labels!==this.props.labels&&this.props.labels.length<=2&&this.props.loadNextPage()}},{key:"render",value:function(){var e=this;return s.a.createElement(s.a.Fragment,null,this.props.message&&s.a.createElement("h2",null,this.props.message),s.a.createElement("div",{className:"cards__cardcontainer"},this.props.labels.map((function(t){return s.a.createElement(w.a,{className:"swipe",key:t._id,preventSwipe:["up","down"],onCardLeftScreen:function(){return e.props.handleCardLeftScreen(t._id)}},s.a.createElement("div",{style:{backgroundImage:"url(".concat(t.image,")")},className:"card"},s.a.createElement("header",null,s.a.createElement("h2",null,s.a.createElement("span",null,s.a.createElement(N.Icon,{icon:x.a})," "),s.a.createElement("span",null,t.repo_id.repo)),s.a.createElement("p",null,"Last updated ",Object(I.a)(Object(T.a)(Date.parse(t.updated_at),0),new Date))),s.a.createElement("footer",null,t.labels.map((function(e){return s.a.createElement(M.a,{key:e.name+" "+e.color,label:e.name,style:{backgroundColor:"#"+e.color},size:"small"})})),s.a.createElement(F.a,{"aria-label":"breadcrumb"},s.a.createElement(P.a,{color:"inherit"},t.repo_id.owner),s.a.createElement(P.a,{color:"inherit",href:t.owner.url},t.owner.login)))),t.repo&&s.a.createElement(s.a.Fragment,null,s.a.createElement("p",null,t.repo.about),s.a.createElement("p",null,t.repo.title)))}))))}}]),a}(n.Component),L=a(83),D=(a(161),a(47)),U=a.n(D),z=a(72),A=a(4),H=a(271),R=a(269),W=a(265),G=a(266),J=a(267),Y=a(51),K=a(270),Q=a(39),V=a(268),X=Object(A.a)((function(e){return{root:{margin:0,padding:e.spacing(2)},closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.grey[500]}}}))((function(e){var t=e.children,a=e.classes,n=e.onClose,r=Object(z.a)(e,["children","classes","onClose"]);return s.a.createElement(W.a,Object.assign({disableTypography:!0,className:a.root},r),s.a.createElement(Y.a,{variant:"h6"},t),n?s.a.createElement(g.a,{"aria-label":"close",className:a.closeButton,onClick:n},s.a.createElement(k.a,null)):null)})),Z=Object(A.a)((function(e){return{root:{padding:e.spacing(2)}}}))(G.a),$=Object(A.a)((function(e){return{root:{margin:0,padding:e.spacing(1)}}}))(J.a);function ee(e){var t=Object(Q.a)(),a=Object(V.a)(t.breakpoints.down("sm"));return s.a.createElement(R.a,{onClose:e.handleClose,fullScreen:a,"aria-labelledby":"customized-dialog-title",open:e.open},s.a.createElement(X,{id:"customized-dialog-title",onClose:e.handleClose},s.a.createElement("h3",null,"Send a pull request!")),s.a.createElement(Z,{dividers:!0},s.a.createElement(Y.a,{gutterBottom:!0},s.a.createElement("p",null,"Your message will be sent to the repo owner on GitHub")),s.a.createElement(K.a,{value:e.message,onChange:e.handleMessageChange,"aria-label":"empty textarea",placeholder:"Why is your code so bad?",style:{margin:"0",padding:"1rem 0 0 0",width:"100%",border:"none",outlineStyle:"dotted",outlineColor:"lightgray",borderTop:"3px dotted gray",minHeight:"5rem"}})),s.a.createElement($,null,s.a.createElement(H.a,{autoFocus:!0,onClick:e.handleMessageSend,color:"primary"},"Pull request"),s.a.createElement(H.a,{autoFocus:!0,onClick:e.handleClose,color:"primary"},"Cancel")))}var te=a(123),ae=a.n(te),ne=a(17),se=a.n(ne),re=function(e){var t=s.a.useState(!1),a=Object(L.a)(t,2),n=a[0],r=a[1],l=s.a.useState(""),c=Object(L.a)(l,2),o=c[0],i=c[1];return s.a.createElement("div",{className:"buttons"},s.a.createElement(g.a,{onClick:function(){return e.handleCardLeftScreen(e.label._id)},className:"buttons_close"},s.a.createElement(k.a,{fontSize:"large"})),s.a.createElement(g.a,{className:"buttons_github",onClick:function(){return window.open(e.label.repo.html_url)}},s.a.createElement(U.a,{fontSize:"large"})),s.a.createElement(g.a,{className:"buttons_pull"},s.a.createElement("img",{src:ae.a,alt:"PullReqLogo",width:"40rem",onClick:function(){r(!0)}})),s.a.createElement(ee,{handleClose:function(){r(!1)},handleMessageSend:function(){se.a.post("/api/label/comment",{owner:"giladt",repo:"getHired",issue_number:5,body:o}).then((function(e){console.log("message sent successfully",{res:e}),r(!1)})).catch((function(e){console.log("message failed to send",{err:e})}))},message:o,label:e.label,handleMessageChange:function(e){i(e.target.value)},open:n}))},le=a(289);a(100);var ce=function(e){var t=e.id,a=e.name,n=e.profilePic,r=e.updateToField;return s.a.createElement(c.b,{to:"/chat/".concat(t),onClick:function(){return r(t)}},s.a.createElement("div",{className:"chat"},s.a.createElement(le.a,{className:"chat_image",src:n}),s.a.createElement("div",{className:"details"},s.a.createElement("strong",null,a))))},oe=a(124),ie=a.n(oe),ue=a(272),pe=a(283),me=a(273),de=a(282);function he(e){var t=e.children,a=e.value,n=e.index,r=Object(z.a)(e,["children","value","index"]);return s.a.createElement("div",Object.assign({role:"tabpanel",hidden:a!==n,id:"full-width-tabpanel-".concat(n),"aria-labelledby":"full-width-tab-".concat(n)},r),a===n&&s.a.createElement(de.a,{p:2},s.a.createElement(Y.a,null,t)))}var ge,be=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={matchedContacts:[],allContacts:[],value:0},e.handleChange=function(t,a){e.setState({value:a})},e.handleChangeIndex=function(t){e.setState({value:t})},e}return Object(u.a)(a,[{key:"a11yProps",value:function(e){return{id:"full-width-tab-".concat(e),"aria-controls":"full-width-tabpanel-".concat(e)}}},{key:"componentDidMount",value:function(){var e=this;this.props.setBackButton({path:"/",icon:"back",click:""}),se.a.get("/api/chat/users/".concat(this.props.user._id)).then((function(t){e.setState({matchedContacts:t.data.filter((function(t){return t._id!==e.props.user._id}))})})),se.a.get("/api/chat/users").then((function(t){e.setState({allContacts:t.data.filter((function(t){return t._id!==e.props.user._id}))})}))}},{key:"render",value:function(){var e=this;return s.a.createElement(s.a.Fragment,null,s.a.createElement(ue.a,{position:"static",color:"default"},s.a.createElement(pe.a,{value:this.state.value,onChange:this.handleChange,indicatorColor:"primary",textColor:"primary",variant:"fullWidth","aria-label":"full width tabs example"},s.a.createElement(me.a,Object.assign({label:"Matched"},this.a11yProps(0))),s.a.createElement(me.a,Object.assign({label:"Party"},this.a11yProps(1))))),s.a.createElement(ie.a,{index:this.state.value,className:"chats-list",onChangeIndex:this.handleChangeIndex},s.a.createElement(he,{value:this.state.value,index:0},s.a.createElement("span",null,"Your matches:"),this.state.matchedContacts.map((function(t){return s.a.createElement(ce,{key:t._id,className:"chats",updateToField:e.props.updateToField,name:t.displayName||t.login,id:t._id,message:"",timestamp:"",profilePic:t.avatar_url})}))),s.a.createElement(he,{value:this.state.value,index:1},s.a.createElement("span",null,"All users:"),this.state.allContacts.map((function(t){return s.a.createElement(ce,{key:t._id,className:"chats",updateToField:e.props.updateToField,name:t.displayName||t.login,id:t._id,message:"",timestamp:"",profilePic:t.avatar_url})})))))}}]),a}(s.a.Component),fe=(a(74),function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={user:e.props.user,content:e.props.content.content,by:e.props.by,time:e.props.time},e}return Object(u.a)(a,[{key:"render",value:function(){var e="";return e=this.state.by._id===this.state.user?"chat_textUser":"chat_text",s.a.createElement("div",{className:e},this.state.by._id!==this.state.user&&s.a.createElement(le.a,{src:this.state.by.avatar_url}),s.a.createElement("div",null,s.a.createElement("div",null,this.state.content),s.a.createElement("div",null,Object(I.a)(Object(T.a)(Date.parse(this.state.time),0),new Date))))}}]),a}(n.Component)),Ee=a(125),ye=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={user:e.props.user,message:""},e.handleChange=function(t){var a=t.target,n=a.name,s=a.value,r=s.length?"".concat(e.state.user.displayName||e.state.user.username," is typing..."):null;e.setState(Object(Ee.a)({},n,s)),e.props.isTyping(r,e.props.to)},e.handleSubmit=function(t){t.preventDefault(),e.props.postMessage(e.state.message),e.setState({message:""})},e}return Object(u.a)(a,[{key:"render",value:function(){return this.props.user?s.a.createElement("form",{className:"chat_input",onSubmit:this.handleSubmit},s.a.createElement("input",{autoComplete:"off",className:"message_input",type:"text",name:"message",placeholder:"Type your message here...",value:this.state.message,onChange:this.handleChange}),s.a.createElement("button",{className:"inputBtn"},"Send")):s.a.createElement(O.a,{to:"/"})}}]),a}(n.Component),ve=a(126),ke=a.n(ve),Oe=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={by:e.props.user._id,to:e.props.to,messageHistory:[],message:"",response:"",endpoint:"".concat("https://pull-req.herokuapp.com"),actionFeedback:"",actionFeedbackMsg:"",systemFeedback:""},e.componentDidMount=function(){var t=e.props.location.pathname.split("/").pop();e.state.to||e.setState({to:t}),e.props.setBackButton({path:"/chat",icon:"back",click:""}),se.a.get("/api/chat/messages/".concat(e.state.by,"/").concat(e.state.to||t)).then((function(t){e.setState({messageHistory:t.data}),e.scrollDown()})).catch((function(e){return console.log(e)}));var a=e.state.endpoint;(ge=ke()(a)).on("message",(function(t){var a=t.type,n=t.message;"message"===a?(e.setState({response:n}),se.a.get("/api/chat/messages/".concat(e.state.by,"/").concat(e.state.to)).then((function(t){t&&e.setState({messageHistory:t.data}),e.scrollDown()}))):"typing"===a?e.setState({actionFeedback:n}):"system"===a&&(e.setState({systemFeedback:n}),e.props.isConnected(n))})),ge.send({type:"system",message:"".concat(e.state.by," is connected.")})},e.scrollDown=function(){document.querySelector(".chat-area>div").scrollBy(0,1e4)},e.isTyping=function(e,t){ge.send({type:"typing",message:{typing:e,to:t}})},e.postMessage=function(t){se.a.post("/api/chat/messages",{to:e.state.to,by:e.state.by,message:t}).then((function(){ge.send({type:"message",message:t}),ge.send({type:"typing",message:null})})).catch((function(e){return console.log(e)})),e.setState({message:""})},e}return Object(u.a)(a,[{key:"componentDidUpdate",value:function(e,t){if(t.actionFeedback!==this.state.actionFeedback){var a=this.props.location.pathname.split("/").pop(),n=this.state.actionFeedback;null!==n&&n.to.toString()===a.toString()&&this.setState({actionFeedbackMsg:n.typing})}}},{key:"render",value:function(){var e=this;if(!this.props.user)return s.a.createElement(O.a,{to:"/"});var t=this.state.messageHistory.map((function(t){return s.a.createElement("li",{key:t._id},s.a.createElement(fe,{user:e.props.user._id,by:t.by,to:t.to,content:t,time:t.created_at}))})),a=this.state.actionFeedbackMsg,n=this.state.systemFeedback;return n.length&&setTimeout((function(){e.setState({systemFeedback:""})}),2e3),s.a.createElement("div",{className:"chat-area"},s.a.createElement("div",null,t),s.a.createElement("div",null,a,n),s.a.createElement(ye,{postMessage:this.postMessage,user:this.props.user,isConnected:this.props.isConnected,to:this.state.by,isTyping:this.isTyping}))}}]),a}(s.a.Component),Ce=Object(O.i)(Oe),Se=a(274),je=a(275);function _e(e){var t=e.user?"".concat("https://pull-req.herokuapp.com","/api/auth/user/").concat(e.user):"".concat("https://pull-req.herokuapp.com","/api/auth/github");return s.a.createElement(H.a,{id:"root-login-button",href:t,variant:"outlined",color:"primary",className:"buttons"},s.a.createElement(U.a,{style:{marginRight:"1rem"}}),"Login / Signup with github")}var we=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return console.log(this.props.match.params),s.a.createElement(s.a.Fragment,null,s.a.createElement(Se.a,null),s.a.createElement(je.a,{maxWidth:"sm",style:{margin:"2rem",padding:"2rem"}},s.a.createElement(Y.a,{component:"article"},s.a.createElement("h1",null,"Sign up or login"),s.a.createElement("p",null,"Sign up and login to Pull-Req app in order to chat with ____ regarding a solution for your issue or just get to know a new friend."),s.a.createElement(_e,{user:this.props.match.params.person}))))}}]),a}(n.Component),Ne=Object(O.i)(we),Be=a(287),xe=a(277),Me=a(288),Fe=a(279),Pe=a(280),Ie=a(127),Te=a.n(Ie),qe=a(3),Le=a(128),De=a.n(Le),Ue=a(278),ze=a(129),Ae=a.n(ze),He=a(276),Re=Object(He.a)({list:{maxWidth:350,width:"75vw"},fullList:{width:"auto"},link:{display:"contents"}});function We(e){var t=Re(),a=document.querySelector("#root");return s.a.createElement(s.a.Fragment,{key:"left"},s.a.createElement(Be.a,{PaperProps:{style:{position:"absolute"}},BackdropProps:{style:{position:"absolute"}},ModalProps:{container:a,style:{position:"absolute"}},variant:"temporary",container:a,anchor:"left",open:e.menuIsOpen,onClose:e.closeMenu},s.a.createElement(xe.a,{className:Object(qe.a)(t.list)},s.a.createElement(Me.a,{button:!0,divider:!0,disabled:!0},s.a.createElement(Ue.a,null,s.a.createElement(Te.a,null)),s.a.createElement(Fe.a,{primary:"Settings"}),s.a.createElement(Pe.a,{onClick:e.closeMenu},s.a.createElement(g.a,{edge:"end","aria-label":"delete"},s.a.createElement(k.a,null)))),s.a.createElement("hr",null),s.a.createElement(Me.a,{button:!0},s.a.createElement(Ue.a,null,s.a.createElement(De.a,null)),s.a.createElement(Fe.a,{primary:"Edit Profile"})),e.user?s.a.createElement(Me.a,{button:!0,onClick:function(t){t.preventDefault(),e.user&&(se.a.delete("/api/auth/logout").then((function(e){return e})).catch((function(e){return e})),e.setUser(null),e.closeMenu())}},s.a.createElement(Ue.a,null,s.a.createElement(Ae.a,null)),s.a.createElement(Fe.a,{primary:"Log out"})):s.a.createElement(Me.a,{button:!0},s.a.createElement("a",{className:Object(qe.a)(t.link),href:"".concat("https://pull-req.herokuapp.com","/api/auth/github")},s.a.createElement(Ue.a,null,s.a.createElement(U.a,null)),s.a.createElement(Fe.a,{primary:"Login / Sign up"}))))))}a(223);var Ge=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={user:e.props.user,to:"",connectedUsers:[],backButton:{path:"/",icon:"menu",click:""},menuIsOpen:!1,labels:[],page:1},e.handleCardLeftScreen=function(t){var a=e.state.labels.find((function(e){return e._id===t})),n=e.state.labels.filter((function(e){return e._id!==t}));e.setState({labels:n}),e.setState({currentLabel:a})},e.loadNextPage=function(){se.a.get("/api/labels/".concat("help-wanted&is:public","/2/").concat(e.state.page)).then((function(t){var a=[].concat(Object(o.a)(t.data.data),Object(o.a)(e.state.labels));e.setState({labels:a,page:e.state.page+1})})).catch((function(t){return e.setState({message:"Error fetching labels. \n ".concat(t)})}))},e.setUser=function(t){e.setState({user:t})},e.updateTo=function(t){e.setState({partner:t})},e.isConnected=function(t){var a=t.split(" ")[0];e.setState({connectedUsers:e.state.connectedUsers.concat(a)})},e.setBackButton=function(t){var a={path:t.path||"",icon:t.icon||"menu",click:t.click||""};e.setState({backButton:a})},e.handleMenuIsOpen=function(){e.setState((function(e){return{menuIsOpen:!e.menuIsOpen}}))},e.handleCloseMenu=function(){e.setState((function(e){return{menuIsOpen:!1}}))},e.updateToField=function(t){e.setState({to:t})},e}return Object(u.a)(a,[{key:"render",value:function(){return s.a.createElement(c.a,{className:"App"},s.a.createElement(j,{user:this.state.user,setUser:this.setUser,backButton:this.state.backButton,menuIsOpen:this.state.menuIsOpen,setMenuIsOpen:this.handleMenuIsOpen,closeMenu:this.handleCloseMenu}),s.a.createElement(We,{user:this.state.user,setUser:this.setUser,menuIsOpen:this.state.menuIsOpen,closeMenu:this.handleCloseMenu}),s.a.createElement(O.d,null,s.a.createElement(O.b,{exact:!0,path:"/chat/:person"},this.state.user?s.a.createElement(Ce,{user:this.state.user,to:this.state.to,isConnected:this.isConnected,setBackButton:this.setBackButton}):s.a.createElement(Ne,null)),s.a.createElement(O.b,{exact:!0,path:"/chat"},this.state.user?s.a.createElement(be,{user:this.state.user,updateToField:this.updateToField,connectedUsers:this.state.connectedUsers,setBackButton:this.setBackButton}):s.a.createElement(O.a,{to:"/login"})),s.a.createElement(O.b,{exact:!0,path:"login"},s.a.createElement(Ne,null)),s.a.createElement(O.b,{exact:!0,path:"/"},s.a.createElement(q,{user:this.state.user,loadNextPage:this.loadNextPage,labels:this.state.labels,page:this.state.page,handleCardLeftScreen:this.handleCardLeftScreen,setBackButton:this.setBackButton}),this.state.user?s.a.createElement(re,{label:this.state.labels[this.state.labels.length-1],handleCardLeftScreen:this.handleCardLeftScreen}):s.a.createElement(_e,{user:this.state.user}))))}}]),a}(n.Component);se.a.get("/api/auth/loggedin").then((function(e){var t=e.data;l.a.render(s.a.createElement(c.a,null,s.a.createElement(Ge,{user:t})),document.getElementById("root"))}))},74:function(e,t,a){},89:function(e,t,a){}},[[145,1,2]]]);
//# sourceMappingURL=main.3affdcf0.chunk.js.map