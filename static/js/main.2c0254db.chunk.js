(this["webpackJsonpzoom-testing-react"]=this["webpackJsonpzoom-testing-react"]||[]).push([[0],{142:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(9),r=a.n(i),c=(a(89),a(24)),o=(a(90),a(166));a(91);var s=a(33),m=a.n(s),u=(m.a.initializeApp({apiKey:"AIzaSyCuTrjIp8G39I6XeOTun8Wx2jvPWzjxHfQ",authDomain:"ims-ghaziabad-voting-2020.firebaseapp.com",databaseURL:"https://ims-ghaziabad-voting-2020.firebaseio.com",projectId:"ims-ghaziabad-voting-2020",storageBucket:"ims-ghaziabad-voting-2020.appspot.com",messagingSenderId:"457194192611",appId:"1:457194192611:web:3422f42b7f7d7049788fd6",measurementId:"G-QGBGCYSGYH"}).firestore(),m.a.auth(),new m.a.auth.GoogleAuthProvider,a(74),Object(n.createContext)()),p=function(e){var t=e.reducer,a=e.initialState,i=e.children;return l.a.createElement(u.Provider,{value:Object(n.useReducer)(t,a)},i)},d=function(){return Object(n.useContext)(u)},E=a(62),h="SET_USER",g=function(e,t){switch(console.log(t),t.type){case h:return Object(E.a)(Object(E.a)({},e),{},{user:t.user});default:return e}},b=a(171),f=a(63),v=a.n(f),w=a(172),A=600,C="/election",y="/clubs",O="/notices",N="/guidelines",j="/schedule",S=a(30),B=a(169);var k,G=function(){var e=l.a.useState(!1),t=Object(c.a)(e,2),a=t[0],n=t[1],i=function(e){return function(){n(e)}};return l.a.createElement("div",{className:"navigation"},l.a.createElement("nav",{className:"wrapper"},l.a.createElement("div",{className:"navigation-logo"},window.innerWidth>A?l.a.createElement("img",{src:v.a,alt:"Ims Ghaziabad"}):l.a.createElement(B.a,{onClick:i(!0),color:"white"},"menu")),l.a.createElement("div",{className:"navigation-title"},l.a.createElement("p",null,"Club Committee Election 2020")),window.innerWidth<A&&l.a.createElement(w.a,{swipeAreaWidth:20,anchor:"left",open:a,onOpen:i(!0),onClose:i(!1)},l.a.createElement("div",{className:"app-drawer-item logo"},l.a.createElement("img",{src:v.a,alt:""})),l.a.createElement(S.b,{className:"app-drawer-item-link",to:C,onClick:function(){return n(!1)}},l.a.createElement(o.a,{className:"app-drawer-item active"},l.a.createElement("p",null,"Election"))),l.a.createElement(S.b,{className:"app-drawer-item-link",to:y,onClick:function(){return n(!1)}},l.a.createElement(o.a,{className:"app-drawer-item active"},l.a.createElement("p",null,"Clubs"))),l.a.createElement(S.b,{className:"app-drawer-item-link",to:O,onClick:function(){return n(!1)}},l.a.createElement(o.a,{className:"app-drawer-item active"},l.a.createElement("p",null,"Notices"))),l.a.createElement(S.b,{className:"app-drawer-item-link",to:N,onClick:function(){return n(!1)}},l.a.createElement(o.a,{className:"app-drawer-item active"},l.a.createElement("p",null,"GuideLines"))),l.a.createElement(S.b,{className:"app-drawer-item-link",to:j,onClick:function(){return n(!1)}},l.a.createElement(o.a,{className:"app-drawer-item active"},l.a.createElement("p",null,"Campaign Schedule"))))))},x=a(25),F=a(78),Y=a.n(F),M=a(79),T=Object(M.autoPlay)(Y.a),V=["https://images.unsplash.com/photo-1540908390241-82158ab62887?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE2MjM0N30&w=1920&fit=max","https://images.pexels.com/photos/1550340/pexels-photo-1550340.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260","https://images.pexels.com/photos/591676/people-street-scene-city-591676.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260","https://images.pexels.com/photos/1550334/pexels-photo-1550334.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"],P=function(e){var t=e.images,a=Object(n.useState)(0),i=Object(c.a)(a,2),r=i[0],o=i[1],s=Object(x.a)();return l.a.createElement("div",{className:"images-holder"},t?l.a.createElement("div",{className:"image-placeholder"},l.a.createElement("img",{src:"https://images.unsplash.com/photo-1540908390241-82158ab62887?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE2MjM0N30&w=1920&fit=max",alt:""})):l.a.createElement(T,{axis:"rtl"===s.direction?"x-reverse":"x",index:r,onChangeIndex:function(e){o(e)},enableMouseEvents:!0},V.map((function(e,t){return l.a.createElement("div",{key:t},Math.abs(r-t)<=2?l.a.createElement("img",{className:"ims_dashboard-carousel-image",src:e,alt:"IMS Club Voting"}):null)}))))},I=a(29),z=a(173),H=a(170),K=a(6),W=(a(80),function(e){return l.a.createElement("div",{className:"tab-panel-container"},l.a.createElement("h2",{style:{marginBottom:"30px"}},"Guide Lines"),l.a.createElement("ol",null,l.a.createElement("li",null,"Election will be in online mode only."),l.a.createElement("li",null,"Election Campaigning will be held in online mode only."),l.a.createElement("li",null,"Nominees can post up to 3 messages in official student\u2019s WhatsApp group per week. Although they can post several times in their unofficial WhatsApp group."),l.a.createElement("li",null,"Official e-Poster has to be sent to election commission for posting to all the students via official Emails / WhatsApp groups."),l.a.createElement("li",null,"Contestants are not supposed to hurt any others nominee\u2019s sentiments in any mean."),l.a.createElement("li",null,"Contestants will be given opportunity for two campaigning debates in a week on official Zoom links provided by Election Commission."),l.a.createElement("li",null,"Contestants can do campaigning on social media platforms without hurting any sentiments of any nominee."),l.a.createElement("li",null,"Campaign mails can only be sent thorough campaign college mail IDs."),l.a.createElement("li",null,"If anyone don\u2019t obey above guidelines or found involved in any inappropriate activity during campaigning, His/her nomination will be cancelled with immediate effect."),l.a.createElement("li",null,"No candidate or his supporters will indulge in any act of gross indiscipline which are listed below:",l.a.createElement("ol",{type:"a"},l.a.createElement("li",null,"Physical assault or threat to use physical force, against any member of the teaching and non-teaching staff of College/institution/ Department and against any student within the Campus of IMSUC."),l.a.createElement("li",null,"Carrying of or use of or threat of use of any weapons."),l.a.createElement("li",null,"Violation of the status, dignity and honour of students belonging to the Scheduled Castes and Tribes."),l.a.createElement("li",null,"Any practice whether verbal or otherwise derogatory of women."),l.a.createElement("li",null,"Any attempt at bribing or corruption in any manner."),l.a.createElement("li",null,"Will full destruction of institutional property."),l.a.createElement("li",null,"Creating ill-will or intolerance on religious or communal grounds."),l.a.createElement("li",null,"Causing disruption in any manner of the academic functioning of the College System.")))))}),D=function(e){return l.a.createElement("div",{className:"tab-panel-container election"},l.a.createElement("h2",{style:{marginBottom:"30px"}},"CLUB ELECTION OBJECTIVE"),l.a.createElement("p",null,"To assist students with similar interests and talents to become better acquainted."),l.a.createElement("p",null,"To provide students the opportunity to carry classroom experiences over into the co-curricular life of the campus."),l.a.createElement("p",null,"To give students a chance to develop social attributes."),l.a.createElement("p",null,"To encourage students to participate in the democratic process."),l.a.createElement("p",null,"To develop leadership qualities among students."),l.a.createElement("div",{className:"separator"},l.a.createElement("div",{className:"header"},l.a.createElement("p",null,"Election Commission")),l.a.createElement("div",{className:"title"},l.a.createElement("p",null,"Dr. Sapna Rakesh")),l.a.createElement("div",{className:"title_braces"},l.a.createElement("p",null,"(Chief Election Commissioner)")),l.a.createElement("div",{className:"title"},l.a.createElement("p",null,"Dhruv Sharma")),l.a.createElement("div",{className:"title_braces"},l.a.createElement("p",null,"(Election Commissioner)")),l.a.createElement("div",{className:"title"},l.a.createElement("p",null,"Dr. Umesh Kumar")),l.a.createElement("div",{className:"title_braces"},l.a.createElement("p",null,"(Election Commissioner)"))))},J=function(e){return l.a.createElement("div",{className:"tab-panel-container clubs"},l.a.createElement("h2",{style:{marginBottom:"30px"}},"Clubs at IMS"),l.a.createElement("div",{className:"list"},l.a.createElement("p",null,"Art and Craft Club"),l.a.createElement("p",null,"Big Ideas Club"),l.a.createElement("p",null,"Bionics Club"),l.a.createElement("p",null,"Cultural Club"),l.a.createElement("p",null,"Desktop App Club"),l.a.createElement("p",null,"Finance Club"),l.a.createElement("p",null,"HR Club"),l.a.createElement("p",null,"IT Club"),l.a.createElement("p",null,"Journalism & Mass Communication Club"),l.a.createElement("p",null,"Literary Club"),l.a.createElement("p",null,"Marketing Club"),l.a.createElement("p",null,"Mathemania Club"),l.a.createElement("p",null,"Music Club"),l.a.createElement("p",null,"Network Club"),l.a.createElement("p",null,"Photography and Documentary Club"),l.a.createElement("p",null,"Sports Club"),l.a.createElement("p",null,"SSR Club"),l.a.createElement("p",null,"Theatre club"),l.a.createElement("p",null,"Web App Club")))},q=function(e){return l.a.createElement("div",{className:"tab-panel-container"},l.a.createElement("h2",{style:{marginBottom:"30px"}},"Notices"))},X=function(e){return l.a.createElement("div",{className:"tab-panel-container"},l.a.createElement("h2",{style:{marginBottom:"30px"}},"Schedule"))};function Z(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}var U=(k={},Object(I.a)(k,C,0),Object(I.a)(k,y,1),Object(I.a)(k,O,2),Object(I.a)(k,N,3),Object(I.a)(k,j,4),k),R=Object(K.f)((function(e){var t=Object(n.useState)(U[e.location.pathname]),a=Object(c.a)(t,2),i=a[0],r=a[1],o=function(t){e.history.push(t)};return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"ims_dashboard-tabs wrapper"},l.a.createElement("div",{className:"wrapper"},window.innerWidth>A&&l.a.createElement(z.a,{variant:"fullWidth",value:i,onChange:function(e,t){r(t)},"aria-label":"nav tabs example"},l.a.createElement(H.a,Object.assign({onClick:function(){return o(C)},label:"Election"},Z(0))),l.a.createElement(H.a,Object.assign({onClick:function(){return o(y)},label:"Clubs"},Z(1))),l.a.createElement(H.a,Object.assign({onClick:function(){return o(O)},label:"Notices"},Z(2))),l.a.createElement(H.a,Object.assign({onClick:function(){return o(N)},label:"GuideLines"},Z(3))),l.a.createElement(H.a,Object.assign({onClick:function(){return o(j)},label:"Campaign Schedule"},Z(4)))))),l.a.createElement("div",{className:"wrapper"},l.a.createElement(K.c,null,l.a.createElement(K.a,{path:C,component:D}),l.a.createElement(K.a,{path:y,component:J}),l.a.createElement(K.a,{path:O,component:q}),l.a.createElement(K.a,{path:N,component:W}),l.a.createElement(K.a,{path:j,component:X}))))})),L=function(e){var t=d(),a=Object(c.a)(t,2);a[0].user,a[1];return l.a.createElement("div",{className:"ims_dashboard"},l.a.createElement(G,null),l.a.createElement("div",{className:"ims_dashboard-content"},l.a.createElement(P,null),l.a.createElement(R,null)))};var Q=function(){var e=d(),t=Object(c.a)(e,2),a=(t[0].user,t[1],Object(n.useState)(!1)),i=Object(c.a)(a,2),r=i[0],o=i[1];return Object(n.useEffect)((function(){o(!0)}),[]),r?l.a.createElement(S.a,null,l.a.createElement(K.c,null,l.a.createElement(K.a,{path:"/"},l.a.createElement(L,null)))):l.a.createElement("div",{style:{width:"100vw",height:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",color:"#505050",position:"fixed",overflow:"hidden",top:0,left:0}},l.a.createElement("p",null,"Hold on, while we are preparing app for you..."),l.a.createElement(b.a,{style:{color:"#505050"}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(p,{initialState:{user:null},reducer:g},l.a.createElement(Q,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},63:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALwAAABKCAMAAAA2XM6dAAAAsVBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+3mHKcAAAAOnRSTlMAd5M6B3zfo4sQDDSyjxS/hGMqHCBSQVsYL6eroOObX1aAJ3Aklk1zZ9lrSUWItszEuq/0+O7QydTnRmDUVwAAEgJJREFUaN7E2NlyglgUheGFgAg4IAgyKQiKOOKs2e//YO0MCKZD3/RXFVN1SuJfB9waUBTvB2/1nFldxf9DjeJwrsscnrwApXjqiyaraawaGIG6lBeGrC/k5TJil7pAMsrIji20+CzFtZ0Q8BzbXWXXfZRj+IyaYNtmprw1o4cfYYEbjnyUGZGBaIyxgbaIZRsWYAJjVYOlAQ2yUII9Jz+UdzidFSA8n/aU00YZnXIG542GJ27yXBsc6OoUS0BILEoot2V7gEsTkw54CgxEPwiHPVNOvABYkYVybYFSPyze5BlljFDmTBkKh1RwP9qJTEBkR/Xb33aHVBq/IhWA1GnVumASDaMfHdGFbcVYyDbLoVhfXiAjQ9xT6gclAspoIkO9H6vjZXqgOwMFLeqBBZZh6PGsytcMhK68WArWyrAX7tKCVIPytZ6nlzpyNpSho2hI+2PpE6T7coTU+EQ3C3yqkSbtDAsBYI5VQB1zgAb0ABXgeqbG1B9np1RILxvkOGSn/QkKuAPVHHoxkNqmpyJ/giN8mJDWXg5PYyAenJJkdjonl9kpOV02s2STXDYSIrsmKeC/1HfppYMcgfgFvRUPnhP1tvTC4o0tPVcDIvKL7WA2rDDCirqLRRTpV77v9/t9z/O6XZss8P31RsOKApTwvsW7NMSBXgR8mtEOs7L49XOh+A7pf75Cjwth2ZLY+DLNG6SCGaLJQyG12s43UaM3EXkskYx6SbxId1ExhLyPFxDRuyzhp1dF2SwaW7uhrF5TgorxWhrPI29HA5TGL+luV/IeiZFhE9eWoXfm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"},74:function(e,t,a){e.exports=a.p+"static/media/495078-PHE69C-919.2418340e.jpg"},84:function(e,t,a){e.exports=a(142)},89:function(e,t,a){},90:function(e,t,a){},91:function(e,t,a){}},[[84,1,2]]]);
//# sourceMappingURL=main.2c0254db.chunk.js.map