(this["webpackJsonppull-req"]=this["webpackJsonppull-req"]||[]).push([[0],{101:function(e,t,a){},117:function(e,t,a){e.exports=a.p+"static/media/PullReqIcon.e2f35405.svg"},144:function(e,t,a){e.exports=a(224)},149:function(e,t,a){},159:function(e,t,a){},160:function(e,t,a){},161:function(e,t,a){},220:function(e,t){},223:function(e,t,a){},224:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(15),l=a.n(r),c=a(28),o=(a(149),a(83)),i=a(19),u=a(20),m=a(22),p=a(21),h=(a(90),a(120)),d=a.n(h),g=a(264),b=a(118),f=a.n(b),E=a(119),y=a.n(E),v=a(38),k=a.n(v),C=a(14),O=a(117),S=a.n(O);var j=function(e){var t=e.backButton,a=e.user,n=e.menuIsOpen,r=e.setMenuIsOpen,l=Object(C.g)(),o=Object(C.h)();return s.a.createElement("div",{className:"header"},t&&"back"===t.icon&&s.a.createElement(g.a,{onClick:function(e){return l.replace(t.path)}},s.a.createElement(f.a,{fontSize:"large",className:"header_icon"})),t&&"menu"===t.icon&&s.a.createElement(g.a,{onClick:function(e){r()}},n?s.a.createElement(k.a,{fontSize:"large",className:"header_icon"}):s.a.createElement(y.a,{fontSize:"large",className:"header_icon"})),s.a.createElement(c.b,{to:"/"},s.a.createElement("img",{src:S.a,alt:"PullReqLogo",width:"40rem"}),"ull-req"),s.a.createElement(c.b,{to:"/chat"},s.a.createElement(g.a,{style:{visibility:("/"!==o.pathname||!a)&&"hidden"}},s.a.createElement(d.a,{className:"header_icon",fontSize:"large"}))))},_=a(121),w=a.n(_),N=(a(159),a(122)),B=a(123),x=a.n(B),M=a(287),F=a(285),P=a(265),I=a(282),q=a(286),L=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.props.loadNextPage(),this.props.setBackButton("")}},{key:"componentDidUpdate",value:function(e,t){e.labels!==this.props.labels&&this.props.labels.length<=2&&this.props.loadNextPage()}},{key:"render",value:function(){var e=this;return s.a.createElement(s.a.Fragment,null,this.props.message&&s.a.createElement("h2",null,this.props.message),s.a.createElement("div",{className:"cards__cardcontainer"},this.props.labels.map((function(t){return s.a.createElement(w.a,{className:"swipe watermarked",key:t._id,preventSwipe:["up","down"],onCardLeftScreen:function(){return e.props.handleCardLeftScreen(t._id)}},s.a.createElement("div",{style:{backgroundImage:"url(".concat(t.image,")")},className:"card"},s.a.createElement("header",null,s.a.createElement("h2",null,s.a.createElement("span",null,s.a.createElement(N.Icon,{icon:x.a})," "),s.a.createElement("span",null,t.repo_id.repo)),s.a.createElement("p",null,"Last updated ",Object(I.a)(Object(q.a)(Date.parse(t.updated_at),0),new Date))),s.a.createElement("footer",null,t.labels.map((function(e){return s.a.createElement(M.a,{key:e.name+" "+e.color,label:e.name,style:{backgroundColor:"#"+e.color},size:"small"})})),s.a.createElement(F.a,{"aria-label":"breadcrumb"},s.a.createElement(P.a,{color:"inherit"},t.repo_id.owner),s.a.createElement(P.a,{color:"inherit",href:t.owner.url},t.owner.login)))),t.repo&&s.a.createElement(s.a.Fragment,null,s.a.createElement("p",null,t.repo.about),s.a.createElement("p",null,t.repo.title)))}))))}}]),a}(n.Component),T=a(84),D=(a(160),a(47)),U=a.n(D),z=a(73),A=a(4),H=a(270),R=a(266),W=a(267),J=a(268),Y=a(51),G=a(271),K=a(39),Q=a(269),V=a(70),X=a.n(V),Z=(a(161),Object(A.a)((function(e){return{root:{margin:0,padding:e.spacing(2)},closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.grey[500]}}}))((function(e){var t=e.children,a=e.classes,n=e.onClose,r=Object(z.a)(e,["children","classes","onClose"]);return s.a.createElement(R.a,Object.assign({disableTypography:!0,className:a.root},r),s.a.createElement(Y.a,{variant:"h6"},t),n?s.a.createElement(g.a,{"aria-label":"close",className:a.closeButton,onClick:n},s.a.createElement(k.a,null)):null)}))),$=Object(A.a)((function(e){return{root:{padding:e.spacing(2)}}}))(W.a),ee=Object(A.a)((function(e){return{root:{margin:0,padding:e.spacing(1)}}}))(J.a);function te(e){var t=Object(K.a)(),a=Object(Q.a)(t.breakpoints.down("sm"));return s.a.createElement(H.a,{onClose:e.handleClose,fullScreen:a,"aria-labelledby":"customized-dialog-title",open:e.open},s.a.createElement(Z,{id:"customized-dialog-title",onClose:e.handleClose,className:"dialogHeader"},s.a.createElement("img",{src:X.a,alt:"PullReqLogo",width:"38rem",align:"center"})),s.a.createElement($,{dividers:!0},s.a.createElement(Y.a,{gutterBottom:!0},s.a.createElement("p",null,"Your message will be sent to the project owner, if they accept your offer, you will be able to chat...",s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("strong",null,'git commit -m "'))),s.a.createElement(G.a,{className:"textArea",value:e.message,onChange:e.handleMessageChange,"aria-label":"empty textarea",placeholder:"Why is your code so bad?",style:{margin:"0",padding:"1rem 0 0 0",width:"100%",border:"none",outlineStyle:"dotted",outlineColor:"lightgray",borderTop:"3px dotted gray",minHeight:"5rem"}}),s.a.createElement(Y.a,{gutterBottom:!0},s.a.createElement("p",null,s.a.createElement("strong",null,'"')))),s.a.createElement(ee,null,s.a.createElement(g.a,{autoFocus:!0,onClick:e.handleClose,color:"secondary"},"Cancel"),s.a.createElement(g.a,{autoFocus:!0,onClick:e.handleMessageSend,color:"inherit"},"Pull request")))}var ae=a(17),ne=a.n(ae),se=function(e){var t=s.a.useState(!1),a=Object(T.a)(t,2),n=a[0],r=a[1],l=s.a.useState(""),c=Object(T.a)(l,2),o=c[0],i=c[1];return e.label?s.a.createElement("div",{className:"buttons"},s.a.createElement(g.a,{onClick:function(){return e.handleCardLeftScreen(e.label._id)},className:"buttons_close"},s.a.createElement(k.a,{fontSize:"large"})),s.a.createElement(g.a,{className:"buttons_github",onClick:function(){return window.open(e.label.repo.html_url)}},s.a.createElement(U.a,{fontSize:"large"})),s.a.createElement(g.a,{className:"buttons_pull"},s.a.createElement("img",{src:X.a,alt:"PullReqLogo",width:"40rem",onClick:function(){r(!0)}})),s.a.createElement(te,{handleClose:function(){r(!1)},handleMessageSend:function(){var t=e.labels?e.labels[e.labels.length-1]:"",a=e.user||"",n=" \n  ".concat(o,"\n\n  ###Hi ").concat(t.owner.login||"there",',\n  This message has been sent from <a href="https://github.com/TheWebDevsBerlin/pull-req">Pull-req</a>, to connect with ').concat(a.displayName||"",', please follow this <a href="http://pull-req.herokuapp.com/chat/').concat(a._id,'">Link</a>.\n\n  Cheers,\n  Pull-req team!\n  ');ne.a.post("/api/label/comment",{owner:t.owner.login,repo:t.repo_id.repo,issue_number:t.issue_number,body:n}).then((function(e){console.log("message sent successfully",{res:e}),r(!1)})).catch((function(e){console.log("message failed to send",{err:e})}))},message:o,setMessage:i,handleMessageChange:function(e){i(e.target.value)},open:n})):s.a.createElement("h1",null,"Fetching some more issues...")},re=a(290);a(101);var le=function(e){var t=e.id,a=e.name,n=e.profilePic,r=e.updateToField;return s.a.createElement(c.b,{to:"/chat/".concat(t),onClick:function(){return r(t)}},s.a.createElement("div",{className:"chat"},s.a.createElement(re.a,{className:"chat_image",src:n}),s.a.createElement("div",{className:"details"},s.a.createElement("strong",null,a))))},ce=a(124),oe=a.n(ce),ie=a(272),ue=a(284),me=a(273),pe=a(283);function he(e){var t=e.children,a=e.value,n=e.index,r=Object(z.a)(e,["children","value","index"]);return s.a.createElement("div",Object.assign({role:"tabpanel",hidden:a!==n,id:"full-width-tabpanel-".concat(n),"aria-labelledby":"full-width-tab-".concat(n)},r),a===n&&s.a.createElement(pe.a,{p:2},s.a.createElement(Y.a,null,t)))}var de,ge=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={matchedContacts:[],allContacts:[],value:0},e.handleChange=function(t,a){e.setState({value:a})},e.handleChangeIndex=function(t){e.setState({value:t})},e}return Object(u.a)(a,[{key:"a11yProps",value:function(e){return{id:"full-width-tab-".concat(e),"aria-controls":"full-width-tabpanel-".concat(e)}}},{key:"componentDidMount",value:function(){var e=this;this.props.setBackButton({path:"/",icon:"back",click:""}),ne.a.get("/api/chat/users/".concat(this.props.user._id)).then((function(t){e.setState({matchedContacts:t.data.filter((function(t){return t._id!==e.props.user._id}))})})),ne.a.get("/api/chat/users").then((function(t){e.setState({allContacts:t.data.filter((function(t){return t._id!==e.props.user._id}))})}))}},{key:"render",value:function(){var e=this;return s.a.createElement(s.a.Fragment,null,s.a.createElement(ie.a,{position:"static",color:"default"},s.a.createElement(ue.a,{value:this.state.value,onChange:this.handleChange,indicatorColor:"primary",textColor:"primary",variant:"fullWidth","aria-label":"full width tabs example"},s.a.createElement(me.a,Object.assign({label:"Matched"},this.a11yProps(0))),s.a.createElement(me.a,Object.assign({label:"Party"},this.a11yProps(1))))),s.a.createElement(oe.a,{index:this.state.value,className:"chats-list",onChangeIndex:this.handleChangeIndex},s.a.createElement(he,{value:this.state.value,index:0},s.a.createElement("span",null,"Your matches:"),this.state.matchedContacts.map((function(t){return s.a.createElement(le,{key:t._id,className:"chats",updateToField:e.props.updateToField,name:t.displayName||t.login,id:t._id,message:"",timestamp:"",profilePic:t.avatar_url})}))),s.a.createElement(he,{value:this.state.value,index:1},s.a.createElement("span",null,"All users:"),this.state.allContacts.map((function(t){return s.a.createElement(le,{key:t._id,className:"chats",updateToField:e.props.updateToField,name:t.displayName||t.login,id:t._id,message:"",timestamp:"",profilePic:t.avatar_url})})))))}}]),a}(s.a.Component),be=(a(75),function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={user:e.props.user,content:e.props.content.content,by:e.props.by,time:e.props.time},e}return Object(u.a)(a,[{key:"render",value:function(){var e="";return e=this.state.by._id===this.state.user?"chat_textUser":"chat_text",s.a.createElement("div",{className:e},this.state.by._id!==this.state.user&&s.a.createElement(re.a,{src:this.state.by.avatar_url}),s.a.createElement("div",null,s.a.createElement("div",null,this.state.content),s.a.createElement("div",null,Object(I.a)(Object(q.a)(Date.parse(this.state.time),0),new Date))))}}]),a}(n.Component)),fe=a(125),Ee=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={user:e.props.user,message:""},e.handleChange=function(t){var a=t.target,n=a.name,s=a.value,r=s.length?"".concat(e.state.user.displayName||e.state.user.username," is typing..."):null;e.setState(Object(fe.a)({},n,s)),e.props.isTyping(r,e.props.to)},e.handleSubmit=function(t){t.preventDefault(),e.props.postMessage(e.state.message),e.setState({message:""})},e}return Object(u.a)(a,[{key:"render",value:function(){return this.props.user?s.a.createElement("form",{className:"chat_input",onSubmit:this.handleSubmit},s.a.createElement("input",{autoComplete:"off",className:"message_input",type:"text",name:"message",placeholder:"Type your message here...",value:this.state.message,onChange:this.handleChange}),s.a.createElement("button",{className:"inputBtn"},"Send")):s.a.createElement(C.a,{to:"/"})}}]),a}(n.Component),ye=a(126),ve=a.n(ye),ke=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={by:e.props.user._id,to:e.props.to,messageHistory:[],message:"",response:"",endpoint:"".concat("https://pull-req.herokuapp.com"),actionFeedback:"",actionFeedbackMsg:"",systemFeedback:""},e.componentDidMount=function(){var t=e.props.location.pathname.split("/").pop();e.state.to||e.setState({to:t}),e.props.setBackButton({path:"/chat",icon:"back",click:""}),ne.a.get("/api/chat/messages/".concat(e.state.by,"/").concat(e.state.to||t)).then((function(t){e.setState({messageHistory:t.data}),e.scrollDown()})).catch((function(e){return console.log(e)}));var a=e.state.endpoint;(de=ve()(a)).on("message",(function(t){var a=t.type,n=t.message;"message"===a?(e.setState({response:n}),ne.a.get("/api/chat/messages/".concat(e.state.by,"/").concat(e.state.to)).then((function(t){t&&e.setState({messageHistory:t.data}),e.scrollDown()}))):"typing"===a?e.setState({actionFeedback:n}):"system"===a&&(e.setState({systemFeedback:n}),e.props.isConnected(n))})),de.send({type:"system",message:"".concat(e.state.by," is connected.")})},e.scrollDown=function(){document.querySelector(".chat-area>div").scrollBy(0,1e4)},e.isTyping=function(e,t){de.send({type:"typing",message:{typing:e,to:t}})},e.postMessage=function(t){ne.a.post("/api/chat/messages",{to:e.state.to,by:e.state.by,message:t}).then((function(){de.send({type:"message",message:t}),de.send({type:"typing",message:null})})).catch((function(e){return console.log(e)})),e.setState({message:""})},e}return Object(u.a)(a,[{key:"componentDidUpdate",value:function(e,t){if(t.actionFeedback!==this.state.actionFeedback){var a=this.props.location.pathname.split("/").pop(),n=this.state.actionFeedback;null!==n&&n.to.toString()===a.toString()&&this.setState({actionFeedbackMsg:n.typing})}}},{key:"render",value:function(){var e=this;if(!this.props.user)return s.a.createElement(C.a,{to:"/"});var t=this.state.messageHistory.map((function(t){return s.a.createElement("li",{key:t._id},s.a.createElement(be,{user:e.props.user._id,by:t.by,to:t.to,content:t,time:t.created_at}))})),a=this.state.actionFeedbackMsg,n=this.state.systemFeedback;return n.length&&setTimeout((function(){e.setState({systemFeedback:""})}),2e3),s.a.createElement("div",{className:"chat-area"},s.a.createElement("div",null,t),s.a.createElement("div",null,a,n),s.a.createElement(Ee,{postMessage:this.postMessage,user:this.props.user,isConnected:this.props.isConnected,to:this.state.by,isTyping:this.isTyping}))}}]),a}(s.a.Component),Ce=Object(C.i)(ke),Oe=a(275),Se=a(276),je=a(274);function _e(e){var t=e.user?"".concat("https://pull-req.herokuapp.com","/api/auth/user/").concat(e.user):"".concat("https://pull-req.herokuapp.com","/api/auth/github");return s.a.createElement(je.a,{id:"root-login-button",href:t,variant:"outlined",color:"primary",className:"buttons"},s.a.createElement(U.a,{style:{marginRight:"1rem"}}),"Login / Signup with github")}var we=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return console.log(this.props.match.params),s.a.createElement(s.a.Fragment,null,s.a.createElement(Oe.a,null),s.a.createElement(Se.a,{maxWidth:"sm",style:{margin:"2rem",padding:"2rem"}},s.a.createElement(Y.a,{component:"article"},s.a.createElement("h1",null,"Sign up or login"),s.a.createElement("p",null,"Sign up and login to Pull-Req app in order to chat with ____ regarding a solution for your issue or just get to know a new friend."),s.a.createElement(_e,{user:this.props.match.params.person}))))}}]),a}(n.Component),Ne=Object(C.i)(we),Be=a(288),xe=a(278),Me=a(289),Fe=a(280),Pe=a(281),Ie=a(127),qe=a.n(Ie),Le=a(3),Te=a(128),De=a.n(Te),Ue=a(279),ze=a(129),Ae=a.n(ze),He=a(277),Re=Object(He.a)({list:{maxWidth:350,width:"75vw"},fullList:{width:"auto"},link:{display:"contents"}});function We(e){var t=Re(),a=document.querySelector("#root");return s.a.createElement(s.a.Fragment,{key:"left"},s.a.createElement(Be.a,{PaperProps:{style:{position:"absolute"}},BackdropProps:{style:{position:"absolute"}},ModalProps:{container:a,style:{position:"absolute"}},variant:"temporary",container:a,anchor:"left",open:e.menuIsOpen,onClose:e.closeMenu},s.a.createElement(xe.a,{className:Object(Le.a)(t.list)},s.a.createElement(Me.a,{button:!0,divider:!0,disabled:!0},s.a.createElement(Ue.a,null,s.a.createElement(qe.a,null)),s.a.createElement(Fe.a,{primary:"Settings"}),s.a.createElement(Pe.a,{onClick:e.closeMenu},s.a.createElement(g.a,{edge:"end","aria-label":"delete"},s.a.createElement(k.a,null)))),s.a.createElement("hr",null),s.a.createElement(Me.a,{button:!0},s.a.createElement(Ue.a,null,s.a.createElement(De.a,null)),s.a.createElement(Fe.a,{primary:"Edit Profile"})),e.user?s.a.createElement(Me.a,{button:!0,onClick:function(t){t.preventDefault(),e.user&&(ne.a.delete("/api/auth/logout").then((function(e){return e})).catch((function(e){return e})),e.setUser(null),e.closeMenu())}},s.a.createElement(Ue.a,null,s.a.createElement(Ae.a,null)),s.a.createElement(Fe.a,{primary:"Log out"})):s.a.createElement(Me.a,{button:!0},s.a.createElement("a",{className:Object(Le.a)(t.link),href:"".concat("https://pull-req.herokuapp.com","/api/auth/github")},s.a.createElement(Ue.a,null,s.a.createElement(U.a,null)),s.a.createElement(Fe.a,{primary:"Login / Sign up"}))))))}a(223);var Je=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={user:e.props.user,to:"",connectedUsers:[],backButton:{path:"/",icon:"menu",click:""},menuIsOpen:!1,labels:[],page:1},e.handleCardLeftScreen=function(t){var a=e.state.labels.find((function(e){return e._id===t})),n=e.state.labels.filter((function(e){return e._id!==t}));e.setState({labels:n}),e.setState({currentLabel:a})},e.loadNextPage=function(){ne.a.get("/api/labels/".concat("help-wanted&is:public","/2/").concat(e.state.page)).then((function(t){var a=[].concat(Object(o.a)(t.data.data),Object(o.a)(e.state.labels));e.setState({labels:a,page:e.state.page+1})})).catch((function(t){return e.setState({message:"Error fetching labels. \n ".concat(t)})}))},e.setUser=function(t){e.setState({user:t})},e.updateTo=function(t){e.setState({partner:t})},e.isConnected=function(t){var a=t.split(" ")[0];e.setState({connectedUsers:e.state.connectedUsers.concat(a)})},e.setBackButton=function(t){var a={path:t.path||"",icon:t.icon||"menu",click:t.click||""};e.setState({backButton:a})},e.handleMenuIsOpen=function(){e.setState((function(e){return{menuIsOpen:!e.menuIsOpen}}))},e.handleCloseMenu=function(){e.setState((function(e){return{menuIsOpen:!1}}))},e.updateToField=function(t){e.setState({to:t})},e}return Object(u.a)(a,[{key:"render",value:function(){return this.state.labels?s.a.createElement(c.a,{className:"App"},s.a.createElement(j,{user:this.state.user,setUser:this.setUser,backButton:this.state.backButton,menuIsOpen:this.state.menuIsOpen,setMenuIsOpen:this.handleMenuIsOpen,closeMenu:this.handleCloseMenu}),s.a.createElement(We,{user:this.state.user,setUser:this.setUser,menuIsOpen:this.state.menuIsOpen,closeMenu:this.handleCloseMenu}),s.a.createElement(C.d,null,s.a.createElement(C.b,{exact:!0,path:"/chat/:person"},this.state.user?s.a.createElement(Ce,{user:this.state.user,to:this.state.to,isConnected:this.isConnected,setBackButton:this.setBackButton}):s.a.createElement(Ne,null)),s.a.createElement(C.b,{exact:!0,path:"/chat"},this.state.user?s.a.createElement(ge,{user:this.state.user,updateToField:this.updateToField,connectedUsers:this.state.connectedUsers,setBackButton:this.setBackButton}):s.a.createElement(C.a,{to:"/login"})),s.a.createElement(C.b,{exact:!0,path:"login"},s.a.createElement(Ne,null)),s.a.createElement(C.b,{exact:!0,path:"/"},s.a.createElement(L,{user:this.state.user,loadNextPage:this.loadNextPage,labels:this.state.labels,page:this.state.page,handleCardLeftScreen:this.handleCardLeftScreen,setBackButton:this.setBackButton}),this.state.user&&this.state.labels?s.a.createElement(se,{user:this.state.user,labels:this.state.labels,label:this.state.labels[this.state.labels.length-1],handleCardLeftScreen:this.handleCardLeftScreen}):s.a.createElement(_e,{user:this.state.user})))):s.a.createElement("h1",null,"Loading...")}}]),a}(n.Component);ne.a.get("/api/auth/loggedin").then((function(e){var t=e.data;l.a.render(s.a.createElement(c.a,null,s.a.createElement(Je,{user:t})),document.getElementById("root"))}))},70:function(e,t,a){e.exports=a.p+"static/media/PullReqGreen.e520bfb8.svg"},75:function(e,t,a){},90:function(e,t,a){}},[[144,1,2]]]);
//# sourceMappingURL=main.7b74a4b9.chunk.js.map