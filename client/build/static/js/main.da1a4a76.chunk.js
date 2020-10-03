(this["webpackJsonpauth0-react-sample"]=this["webpackJsonpauth0-react-sample"]||[]).push([[0],{110:function(e,t,a){},111:function(e,t,a){},112:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(20),c=a.n(r),i=a(5),o=a(118),s=a(7),u=[{title:"Configure other identity providers",link:"https://auth0.com/docs/connections",description:"Auth0 supports social providers as Facebook, Twitter, Instagram and 100+, Enterprise providers as Microsoft Office 365, Google Apps, Azure, and more. You can also use any OAuth2 Authorization Server."},{title:"Enable Multifactor Authentication",link:"https://auth0.com/docs/multifactor-authentication",description:"Add an extra layer of security by enabling Multi-factor Authentication, requiring your users to provide more than one piece of identifying information. Push notifications, authenticator apps, SMS, and DUO Security are supported."},{title:"Anomaly Detection",link:"https://auth0.com/docs/anomaly-detection",description:"Auth0 can detect anomalies and stop malicious attempts to access your application. Anomaly detection can alert you and your users of suspicious activity, as well as block further login attempts."},{title:"Learn About Rules",link:"https://auth0.com/docs/rules",description:"Rules are JavaScript functions that execute when a user authenticates to your application. They run once the authentication process is complete, and you can use them to customize and extend Auth0's capabilities."}],m=a(115),p=a(116),d=function(){return l.a.createElement("div",{className:"next-steps my-5"},l.a.createElement("h2",{className:"my-5 text-center"},"What can I do next?"),l.a.createElement(m.a,{className:"d-flex justify-content-between"},u.map((function(e,t){return l.a.createElement(p.a,{key:t,md:5,className:"mb-4"},l.a.createElement("h6",{className:"mb-3"},l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:e.link},e.title)),l.a.createElement("p",null,e.description))}))))},h=function(){return l.a.createElement("footer",{className:"bg-light p-3 text-center"},l.a.createElement("div",{className:"logo"}),l.a.createElement("p",null,"Sample project provided by"," ",l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://auth0.com"},"Auth0")))},E=function(){return l.a.createElement("div",{className:"text-center hero my-5"},l.a.createElement("img",{className:"mb-3 app-logo",src:"https://cdn.auth0.com/blog/auth0-react-sample/assets/logo.svg",alt:"React logo",width:"120"}),l.a.createElement("h1",{className:"mb-4"},"React.js Sample Project"),l.a.createElement("p",{className:"lead"},"This is a sample application that demonstrates an authentication flow for an SPA, using"," ",l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://auth0.com/docs/quickstart/spa/react"},"React.js")))},v=function(){return l.a.createElement("div",{className:"spinner"},l.a.createElement("img",{src:"https://cdn.auth0.com/blog/auth0-react-sample/assets/loading.svg",alt:"Loading"}))},g=a(11),f=a(121),b=a(120),y=a(117),N=function(){var e=Object(s.b)().logout;return l.a.createElement(y.a,{onClick:function(){return e({returnTo:window.location.origin})},variant:"danger",className:"btn-margin"},"Log Out")},x=function(){var e=Object(s.b)(),t=e.loginWithRedirect;return!e.isAuthenticated&&l.a.createElement(y.a,{onClick:function(){return t()},variant:"primary",className:"btn-margin"},"Log In")},C=function(){return l.a.createElement(f.a,{className:"mr-auto"},l.a.createElement(f.a.Link,{as:g.b,to:"/",exact:!0,activeClassName:"router-link-exact-active"},"Home"),l.a.createElement(f.a.Link,{as:g.b,to:"/profile",exact:!0,activeClassName:"router-link-exact-active"},"Profile"),l.a.createElement(f.a.Link,{as:g.b,to:"/external-api",exact:!0,activeClassName:"router-link-exact-active"},"External API"))},A=function(){var e=Object(s.b)().isAuthenticated;return l.a.createElement(f.a,{className:"justify-content-end"},e?l.a.createElement(N,null):l.a.createElement(x,null))},I=function(){return l.a.createElement(b.a,{bg:"light",expand:"md"},l.a.createElement(o.a,null,l.a.createElement(b.a.Brand,{as:g.b,className:"logo",to:"/"}),l.a.createElement(C,null),l.a.createElement(A,null)))},S=a(122),k=a(65),O=a(67);S.a.registerLanguage("json",k.a);var _=function(e){var t=e.children;return l.a.createElement(S.a,{language:"json",style:O.a},t)},j=a(69),M=function(e){var t=e.component,a=Object(j.a)(e,["component"]);return l.a.createElement(i.a,Object.assign({component:Object(s.c)(t,{onRedirecting:function(){return l.a.createElement(v,null)}})},a))},T=a(24),w=a.n(T),L=a(39),D=a(68),P=a(119),R=function(){var e=Object(n.useState)(""),t=Object(D.a)(e,2),a=t[0],r=t[1],c="http://localhost:7000",i=Object(s.b)().getAccessTokenSilently,u=function(){var e=Object(L.a)(w.a.mark((function e(){var t,a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(c,"/api/messages/public-message"));case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,r(a),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),r(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(L.a)(w.a.mark((function e(){var t,a,n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i();case 3:return t=e.sent,e.next=6,fetch("".concat(c,"/api/messages/protected-message"),{headers:{Authorization:"Bearer ".concat(t)}});case 6:return a=e.sent,e.next=9,a.json();case 9:n=e.sent,r(n),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),r(e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}();return l.a.createElement(o.a,{className:"mb-5"},l.a.createElement("h1",null,"External API"),l.a.createElement("p",null,"You use will use a button to call an external API using an access token, and the API will validate it using the API's audience value."," ",l.a.createElement("strong",null,"This route should be private"),"."),l.a.createElement(P.a,null,l.a.createElement(y.a,{onClick:u,color:"primary",className:"mt-5"},"Get Public Message"),l.a.createElement(y.a,{onClick:m,color:"primary",className:"mt-5"},"Get Private Message")),a&&l.a.createElement("div",{className:"mt-5"},l.a.createElement("h6",{className:"muted"},"Result"),l.a.createElement(_,null,JSON.stringify(a,null,2))))},F=function(){return l.a.createElement(n.Fragment,null,l.a.createElement(E,null),l.a.createElement("hr",null),l.a.createElement(d,null))},q=function(){var e=Object(s.b)().user,t=e.name,a=e.picture,n=e.email;return l.a.createElement(o.a,{className:"mb-5"},l.a.createElement(m.a,{className:"align-items-center profile-header mb-5 text-center text-md-left"},l.a.createElement(p.a,{md:2},l.a.createElement("img",{src:a,alt:"Profile",className:"rounded-circle img-fluid profile-picture mb-3 mb-md-0"})),l.a.createElement(p.a,{md:!0},l.a.createElement("h2",null,t),l.a.createElement("p",{className:"lead text-muted"},n))),l.a.createElement(m.a,null,l.a.createElement(_,null,JSON.stringify(e,null,2))))};var z=function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"card card-about"},l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",{className:"card-title"},"Steve!"),l.a.createElement("p",{className:"card-text"},"Steve worked a ton on the back end of this project. He also likes bananas!"),l.a.createElement("a",{href:"https://github.com/Steve-Munoz",className:"btn btn-primary"},"Steve's Github"))))};var G=function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"card card-about"},l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",{className:"card-title"},"Steph!"),l.a.createElement("p",{className:"card-text"},"Steph loves a good flower! She thought up the idea for the app and did a lot of the front end work."),l.a.createElement("a",{href:"https://github.com/steppinonland",className:"btn btn-primary"},"Steph's Github"))))},W=function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"About Us"),l.a.createElement(z,null),l.a.createElement(G,null))},H=a(27),J=a(28),V=a(29),Y=a(15),K=a(33),U=a(31),B=(a(92),a(93)),Z=function(e){Object(K.a)(a,e);var t=Object(U.a)(a);function a(){var e;return Object(J.a)(this,a),(e=t.call(this)).maxLengthCheck=function(e){e.target.value.length>e.target.maxLength&&(e.target.value=e.target.value.slice(0,e.target.maxLength))},e.state={title:"",address:"",city:"",state:"",zipcode:"",start_time:"",end_time:"",start_date:"",end_date:""},e.handleInputChange=e.handleInputChange.bind(Object(Y.a)(e)),e.handleFormSubmit=e.handleFormSubmit.bind(Object(Y.a)(e)),e}return Object(V.a)(a,[{key:"handleInputChange",value:function(e){this.setState(Object(H.a)({},e.target.name,e.target.value))}},{key:"handleFormSubmit",value:function(e){var t=this;e.preventDefault();var a,n={title:this.state.title,address:this.state.address,city:this.state.city,state:this.state.state,zip:this.state.zip,start_time:this.state.start_time,end_time:this.state.end_time,start_day:this.state.start_day,end_day:this.state.end_day};this.state.title&&this.state.address?(a=n,B.post("/api/listings/listings",{title:a.title,address:a.address,city:a.city,state:a.state,zipcode:a.zipcode,start_date:a.start_date,end_date:a.end_date,start_time:a.start_time,end_time:a.end_time}).then((function(e){console.log("TESTING req.body")})).catch((function(e){console.log(e)}))).then((function(e){alert("".concat(t.state.title," has been successfully saved"))})):alert("Fill out the full information please!")}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("form",{className:"form"},l.a.createElement("input",{value:this.state.title,name:"title",onChange:this.handleInputChange,type:"text",placeholder:"Listing Title","aria-label":"Listing-Title"}),l.a.createElement("input",{value:this.state.address,name:"address",onChange:this.handleInputChange,type:"text",placeholder:"Address"}),l.a.createElement("input",{value:this.state.city,name:"city",onChange:this.handleInputChange,type:"text",placeholder:"City"}),l.a.createElement("select",{value:this.state.state,onChange:this.handleInputChange,name:"state"},l.a.createElement("option",{value:"State",placeholder:"State"},"State"),l.a.createElement("option",{value:"AL"},"AL"),l.a.createElement("option",{value:"AK"},"AK"),l.a.createElement("option",{value:"AS"},"AS"),l.a.createElement("option",{value:"AZ"},"AZ"),l.a.createElement("option",{value:"AR"},"AR"),l.a.createElement("option",{value:"CA"},"CA"),l.a.createElement("option",{value:"CO"},"CO"),l.a.createElement("option",{value:"CT"},"CT"),l.a.createElement("option",{value:"DE"},"DE"),l.a.createElement("option",{value:"DC"},"DC"),l.a.createElement("option",{value:"FM"},"FM"),l.a.createElement("option",{value:"FL"},"FL"),l.a.createElement("option",{value:"GA"},"GA"),l.a.createElement("option",{value:"GU"},"GU"),l.a.createElement("option",{value:"HI"},"HI"),l.a.createElement("option",{value:"ID"},"ID"),l.a.createElement("option",{value:"IL"},"IL"),l.a.createElement("option",{value:"IN"},"IN"),l.a.createElement("option",{value:"IA"},"IA"),l.a.createElement("option",{value:"KS"},"KS"),l.a.createElement("option",{value:"KY"},"KY"),l.a.createElement("option",{value:"LA"},"LA"),l.a.createElement("option",{value:"ME"},"ME"),l.a.createElement("option",{value:"MH"},"MH"),l.a.createElement("option",{value:"MD"},"MD"),l.a.createElement("option",{value:"MA"},"MA"),l.a.createElement("option",{value:"MI"},"MI"),l.a.createElement("option",{value:"MN"},"MN"),l.a.createElement("option",{value:"MS"},"MS"),l.a.createElement("option",{value:"MO"},"MO"),l.a.createElement("option",{value:"MT"},"MT"),l.a.createElement("option",{value:"NE"},"NE"),l.a.createElement("option",{value:"NV"},"NV"),l.a.createElement("option",{value:"NH"},"NH"),l.a.createElement("option",{value:"NJ"},"NJ"),l.a.createElement("option",{value:"NM"},"NM"),l.a.createElement("option",{value:"NY"},"NY"),l.a.createElement("option",{value:"NC"},"NC"),l.a.createElement("option",{value:"ND"},"ND"),l.a.createElement("option",{value:"MP"},"MP"),l.a.createElement("option",{value:"OH"},"OH"),l.a.createElement("option",{value:"OK"},"OK"),l.a.createElement("option",{value:"OR"},"OR"),l.a.createElement("option",{value:"PW"},"PW"),l.a.createElement("option",{value:"PA"},"PA"),l.a.createElement("option",{value:"PR"},"PR"),l.a.createElement("option",{value:"RI"},"RI"),l.a.createElement("option",{value:"SC"},"SC"),l.a.createElement("option",{value:"SD"},"SD"),l.a.createElement("option",{value:"TN"},"TN"),l.a.createElement("option",{value:"TX"},"TX"),l.a.createElement("option",{value:"UT"},"UT"),l.a.createElement("option",{value:"VT"},"VT"),l.a.createElement("option",{value:"VI"},"VI"),l.a.createElement("option",{value:"VA"},"VA"),l.a.createElement("option",{value:"WA"},"WA"),l.a.createElement("option",{value:"WV"},"WV"),l.a.createElement("option",{value:"WI"},"WI"),l.a.createElement("option",{value:"WY"},"WY")),l.a.createElement("input",{value:this.state.zip,name:"zip",onChange:this.handleInputChange,onInput:this.maxLengthCheck,maxLength:"5",type:"number",placeholder:"'90210'"}),l.a.createElement("textarea",{className:"listingdetails",value:this.state.details,name:"details",onChange:this.handleInputChange,type:"text",placeholder:"Add informations about listing. Example: 'Every weekend from 10-3. Red truck in the front of the parking lot' "}),"Start Date:",l.a.createElement("input",{value:this.state.date_received,name:"start_day",onChange:this.handleInputChange,type:"date",placeholder:"Start Date"}),"End Date:",l.a.createElement("input",{value:this.state.exp_date,name:"end_day",onChange:this.handleInputChange,type:"date",placeholder:"End Date"}),"Start Time:","End Time:",l.a.createElement("button",{onClick:this.handleFormSubmit},"Submit")))}}]),a}(n.Component),X=function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Create New Listing"),l.a.createElement(Z,null))},Q=function(e){Object(K.a)(a,e);var t=Object(U.a)(a);function a(){var e;return Object(J.a)(this,a),(e=t.call(this)).state={name:"",quantity:"",price:"",date_received:"",exp_date:""},e.handleInputChange=e.handleInputChange.bind(Object(Y.a)(e)),e.handleFormSubmit=e.handleFormSubmit.bind(Object(Y.a)(e)),e}return Object(V.a)(a,[{key:"handleInputChange",value:function(e){this.setState(Object(H.a)({},e.target.name,e.target.value))}},{key:"handleFormSubmit",value:function(e){var t=this;e.preventDefault();var a,n={name:this.state.name,quantity:this.state.quantity,price:this.state.price,date_received:this.state.date_received,exp_date:this.state.exp_date};this.state.name&&this.state.quantity?(a=n,B.post("/api/items/items",{name:a.name,quantity:a.quantity,price:a.price,date_received:a.date_received,exp_date:a.exp_date}).then((function(e){console.log("TESTING req.body")})).catch((function(e){console.log(e)}))).then((function(e){alert("".concat(t.state.name," has been successfully saved"))})):alert("Fill out the full information please!")}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("p",null,"Item Form"),l.a.createElement("form",{className:"form"},l.a.createElement("input",{value:this.state.name,name:"name",onChange:this.handleInputChange,type:"text",placeholder:"Item Name"}),l.a.createElement("input",{value:this.state.quantity,name:"quantity",onChange:this.handleInputChange,type:"number",placeholder:"Quantity"}),l.a.createElement("input",{value:this.state.price,name:"price",onChange:this.handleInputChange,type:"decimal",placeholder:"Price (i.e. 1.5 or .85)"}),"Date received:",l.a.createElement("input",{value:this.state.date_received,name:"date_received",onChange:this.handleInputChange,type:"date",placeholder:"Date Received"}),"Expiration Date:",l.a.createElement("input",{value:this.state.exp_date,name:"exp_date",onChange:this.handleInputChange,type:"date",placeholder:"exp_date"}),l.a.createElement("button",{onClick:this.handleFormSubmit},"Submit")))}}]),a}(n.Component),$=function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Add an Item to Inventory"),l.a.createElement(Q,null))},ee=(a(110),function(){return Object(s.b)().isLoading?l.a.createElement(v,null):l.a.createElement("div",{id:"app",className:"d-flex flex-column h-100"},l.a.createElement(I,null),l.a.createElement(o.a,{className:"flex-grow-1 mt-5"},l.a.createElement(i.c,null,l.a.createElement(i.a,{path:"/",exact:!0,component:F}),l.a.createElement(i.a,{path:"/about",component:W}),l.a.createElement(i.a,{path:"/menu#NewListing",component:X}),l.a.createElement(i.a,{path:"/menu#Add",component:$}),l.a.createElement(M,{path:"/profile",component:q}),l.a.createElement(M,{path:"/external-api",component:R}))),l.a.createElement(h,null))}),te=function(e){var t=e.children,a=Object(i.f)();return l.a.createElement(s.a,{domain:"dev-ja5ya0u7.us.auth0.com",clientId:"4JRZG7B38YPF1NxPy791E7cyxIR2JlTJ",redirectUri:window.location.origin,onRedirectCallback:function(e){a.push((null===e||void 0===e?void 0:e.returnTo)||window.location.pathname)},audience:"https://express.sample"},t)};a(111);c.a.render(l.a.createElement(g.a,null,l.a.createElement(te,null,l.a.createElement(ee,null))),document.getElementById("root"))},70:function(e,t,a){e.exports=a(112)},92:function(e,t,a){}},[[70,151,152]]]);
//# sourceMappingURL=main.da1a4a76.chunk.js.map