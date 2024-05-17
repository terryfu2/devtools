(this.webpackJsonpdevtools=this.webpackJsonpdevtools||[]).push([[0],{112:function(e,t,a){},126:function(e){e.exports=JSON.parse('{"name":"devtools","version":"1.1.9","homepage":"https://terryfu2.github.io/devtools","private":true,"dependencies":{"@emotion/react":"^11.11.4","@emotion/styled":"^11.11.5","@mui/icons-material":"^5.15.17","@mui/material":"^5.15.17","@testing-library/jest-dom":"^4.2.4","@testing-library/react":"^9.5.0","@testing-library/user-event":"^7.2.1","@uiw/codemirror-theme-vscode":"^4.22.0","@uiw/react-codemirror":"^4.22.0","axios":"^1.6.8","bootstrap":"^5.3.3","codemirror":"^6.0.1","formik":"^2.4.6","react":"^16.13.1","react-bootstrap":"^2.10.2","react-codemirror2":"^8.0.0","react-dom":"^16.13.1","react-icons":"^5.2.1","react-json-editor-ajrm":"^2.5.14","react-pro-sidebar":"^1.1.0","react-router-dom":"^5.2.0","react-scripts":"3.4.3","styled-components":"^6.1.11"},"scripts":{"predeploy":"npm run build","deploy":"gh-pages -d build","start":"react-scripts start","build":"react-scripts build","test":"react-scripts test","eject":"react-scripts eject"},"eslintConfig":{"extends":"react-app"},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]},"devDependencies":{"gh-pages":"^6.1.1"}}')},153:function(e,t,a){e.exports=a(174)},172:function(e,t,a){},174:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(33),l=a.n(r),i=a(57),c=a(96),s=a(17);a(112);const m={light:{background:"#ffffff",backgroundColor:"#ffffff",text:"#1876d2",font:"black",hover:"#091E4224"},dark:{background:"#333333",backgroundColor:"#333333",text:"#ffffff",font:"white",hover:"#464646"}},d=Object(n.createContext)(),u=e=>{let{children:t}=e;const[a,r]=Object(n.useState)(m.dark);return o.a.createElement(d.Provider,{value:{theme:a,toggleTheme:()=>{r(e=>e===m.light?m.dark:m.light)}}},t)};var p=a(117),h=a.n(p),v=a(120),f=a.n(v),b=a(121),g=a.n(b),E=a(119),y=a.n(E);const x=[{label:"HTTP Request",to:"/HttpRequest",icon:h.a},{label:"Lorem Ipsum Generator",to:"/LiGenerator",icon:y.a},{label:"Git Graph",to:"/Temp",icon:f.a},{label:"JSON Minify/Beautify ",to:"/Jsonmb",icon:g.a},{label:"Git Graph2",to:"/"},{label:"HTTP Request3",to:"/"},{label:"Git Graph4",to:"/"},{label:"HTTP Request5",to:"/"},{label:"Git Graph6",to:"/"},{label:"HTTP Request7",to:"/"},{label:"Git Graph8",to:"/"},{label:"HTTP Request9",to:"/"},{label:"Git Graph10",to:"/"},{label:"HTTP Request11",to:"/"},{label:"Git Graph12",to:"/"},{label:"HTTP Request13",to:"/"},{label:"Git Graph14",to:"/"},{label:"HTTP Request15",to:"/"}],C=(e,t)=>t.filter(t=>t.label.toLowerCase().includes(e.toLowerCase()));var k,S,w=()=>{const[e,t]=Object(n.useState)(""),[a,r]=Object(n.useState)(null),l=Object(n.useRef)(null),m=Object(s.f)(),{theme:u}=o.a.useContext(d);document.documentElement.style.setProperty("--active-color",u.text);const p=e=>{e.ctrlKey&&"/"===e.key&&l.current.focus()};Object(n.useEffect)(()=>{"/"===m.pathname&&r(null)},[m.pathname]),Object(n.useEffect)(()=>(window.addEventListener("keydown",p),()=>{window.removeEventListener("keydown",p)}),[]);return o.a.createElement("div",{id:"btngrp",style:{left:"2%",height:"100vh"}},o.a.createElement("input",{ref:l,type:"text",placeholder:"Search... (ctrl + /)",value:e,onChange:e=>{t(e.target.value)},style:{width:"97%",padding:"10px",boxSizing:"border-box",marginLeft:"10px",marginBottom:"10px",color:"black",backgroundColor:"white",border:"none",borderBottom:"1px solid white",borderRadius:"8px",transition:"border-color 0.3s"}}),o.a.createElement(c.c,{style:{overflowY:"auto",height:"calc(100% - 130px)",width:"100%"},backgroundColor:u.backgroundColor},o.a.createElement(c.a,{style:{backgroundColor:u.backgroundColor},menuItemStyles:{button:{fontWeight:"bold",color:u.text,backgroundColor:u.backgroundColor,textAlign:"left","&:hover":{backgroundColor:u.hover},"&:hover::after":{content:'""',position:"absolute",left:0,bottom:0,width:"100%",height:"2px",backgroundColor:u.text,animation:"drawLine 0.5s forwards"},".active":{backgroundColor:"white !important"}}},renderExpandIcon:e=>{let{open:t}=e;return o.a.createElement("span",null,t?"-":"+")}},C(e,x).map(e=>o.a.createElement(c.b,{key:e.label,component:o.a.createElement(i.b,{to:e.to,onClick:()=>{return t=e.to,void r(t);var t},id:e.to}),className:a===e.to?"active":""},e.icon&&o.a.createElement(e.icon,{style:{marginRight:"8px"}}),e.label)))))},T=a(53),O=a(123),j=a.n(O),N=a(125),q=a.n(N),P=a(124),R=a.n(P),D=a(108);const G=D.a.div(k||(k=Object(T.a)(["\n    position: fixed;\n    color: ",";\n    top: 1em;\n    left: 2em;\n    opacity: 0.6;\n    transition: opacity 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);\n    &:hover {\n        opacity: 1;\n    }\n    & > h1 {\n        font-size: 30px;\n        margin: 0 0;\n        & > a {\n            text-decoration: none;\n            position: relative;\n            color: black;\n        }\n    }\n    @media (max-width: 960px) {\n        position: relative;\n        display: grid;\n        left: -6em;\n        font-size: 10px;\n    }\n"])),e=>{let{theme:t}=e;return t.text}),J=D.a.div(S||(S=Object(T.a)(["\n    position: fixed;\n    top: 0;\n    width: 100%;\n    height: 6px;\n    background-color: ",";\n"])),m.light.text);var _=()=>{const{theme:e,toggleTheme:t}=Object(n.useContext)(d);return o.a.createElement("div",null,o.a.createElement(J,{theme:e}),o.a.createElement(i.b,{to:"/"},o.a.createElement(G,{theme:e},o.a.createElement("h1",{style:{fontWeight:"bolder"}}," ",o.a.createElement(j.a,{sx:{fontSize:40}})," devtools"))),o.a.createElement("div",{style:{position:"fixed",top:"1em",right:"2em",cursor:"pointer"},onClick:t},e===m.light?o.a.createElement(R.a,{sx:{fontSize:30,color:m.light.text}}):o.a.createElement(q.a,{sx:{fontSize:30,color:"white"}})))},z=a(220),H=a(126);var L=()=>{const[e,t]=Object(n.useState)(null);Object(n.useEffect)(()=>{z.a.get("https://api.github.com/repos/".concat("terryfu2","/").concat("devtools")).then(e=>{const a=new Date(e.data.pushed_at);t(a)}).catch(e=>{console.error("Error fetching repository information:",e)})},[]);const a=e?(e=>{const t=new Date,a=Math.floor((t-e)/864e5);return 1===a?"1 day ago":"".concat(a," days ago")})(e):"",{theme:r}=o.a.useContext(d);return o.a.createElement("div",{style:{position:"absolute",bottom:"10px",left:"60%",transform:"translateX(-50%)",color:r.font,fontSize:"12px"}},"Last Build:  ",a," ",o.a.createElement("a",{href:"https://github.com/terryfu2/devtools"},"v.",H.version)," by ",o.a.createElement("a",{href:"https://terryfu.ca"},"Terry Fu"))};var M=()=>{const{theme:e}=o.a.useContext(d);return o.a.createElement("div",null,o.a.createElement("div",{style:{fontSize:"3rem",color:m.light.text,fontWeight:"bolder"}},"All-in-one Toolbox"),o.a.createElement("div",{style:{fontSize:"3rem",color:e.font,fontWeight:"bold"}},"for Developers."))},W=a(34),B=(a(169),a(224)),F=a(221),A=a(225),K=a(127),I=a.n(K),U=a(137),X=a(133),V=a.n(X);var Y=function(){const[e,t]=Object(n.useState)(0),[a,r]=Object(n.useState)(0),[l,i]=Object(n.useState)(0),[c,s]=Object(n.useState)({}),[m,u]=Object(n.useState)({}),[p,h]=Object(n.useState)({});function v(e){if(void 0!==e)return e.customData=e.customData||{},e.customData.time=(new Date).getTime()-e.config.customData.startTime,e}function f(e){var t={};return e.forEach(e=>{t[e.key]=e.value}),t}z.a.interceptors.request.use(e=>(e.customData=e.customData||{},e.customData.startTime=(new Date).getTime(),e)),z.a.interceptors.response.use(v,e=>Promise.reject(v(e.response)));const{theme:b}=o.a.useContext(d);return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{style:{fontSize:"1.5rem",color:b.font,fontWeight:"bold"}},"HTTP Request"),o.a.createElement("div",{className:"p-4"},o.a.createElement("div",null,o.a.createElement(W.d,{initialValues:{url:"https://jsonplaceholder.typicode.com/todos/1",query_data:[{}],header_data:[{}],method:"GET"},onSubmit:e=>{!function(e){let a;try{a=p}catch(n){return void alert("JSON data is malformed")}Object(z.a)({url:e.url,method:e.method,params:f(e.query_data),headers:f(e.header_data),dataJson:a,validateStatus:()=>!0}).catch(e=>console.log(e)).then(e=>{void 0!==e&&(t(e.status),s(e.data),u(e.headers),r(e.customData.time),i(I()(JSON.stringify(e.data).length+JSON.stringify(e.headers).length)))})}(e)}},e=>{let{values:t}=e;return o.a.createElement(W.c,null,o.a.createElement("div",{className:"form-group"},o.a.createElement("div",{className:"input-group mb-4"},o.a.createElement(W.a,{name:"method",as:"select"},o.a.createElement("option",{value:"GET"}," GET "),o.a.createElement("option",{value:"POST"}," POST "),o.a.createElement("option",{value:"PUT"}," PUT "),o.a.createElement("option",{value:"PATCH"}," PATCH "),o.a.createElement("option",{value:"DELETE"}," DELETE ")),o.a.createElement(W.a,{required:!0,type:"url",name:"url",placeholder:"https://www.example.com",className:"form-control"}),o.a.createElement("div",{className:"form-group"},o.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Submit")))),o.a.createElement(F.a,{defaultActiveKey:"query-params",id:"uncontrolled-tab-example",className:"mb-3"},o.a.createElement(A.a,{eventKey:"query-params",title:"Query Params"},o.a.createElement(W.b,{name:"query_data"},e=>o.a.createElement("div",null,o.a.createElement(B.a,{onClick:()=>e.push({})}," ","Add"," "),t.query_data.map((t,a)=>o.a.createElement("div",{key:a},o.a.createElement(W.a,{placeholder:"Key",name:"query_data.".concat(a,".key"),type:"input"}),o.a.createElement(W.a,{placeholder:"Value",name:"query_data.".concat(a,".value"),type:"input"}),o.a.createElement(B.a,{onClick:()=>e.remove(a)},"x")))))),o.a.createElement(A.a,{eventKey:"headers",title:"Headers"},o.a.createElement(W.b,{name:"header_data"},e=>o.a.createElement("div",null,o.a.createElement(B.a,{onClick:()=>e.push({})}," ","Add"," "),t.header_data.map((t,a)=>o.a.createElement("div",{key:a},o.a.createElement(W.a,{placeholder:"Key",name:"header_data.".concat(a,".key"),type:"input"}),o.a.createElement(W.a,{placeholder:"Value",name:"header_data.".concat(a,".value"),type:"input"}),o.a.createElement(B.a,{onClick:()=>e.remove(a)},"x")))))),o.a.createElement(A.a,{eventKey:"json",title:"JSON"},o.a.createElement(U.a,{id:"a_unique_id",theme:"dark_vscode_tribute",colors:{string:"#59A5D8",backgroud:"#FFFFFF"},locale:V.a,onChange:e=>h(e.jsObject),height:"300px"}))))})),o.a.createElement("div",null,o.a.createElement("h3",{style:{color:b.font,fontSize:"1.5rem",fontWeight:"bold"}},"Response"),o.a.createElement("div",{className:"d-flex my-2"},o.a.createElement("div",{style:{color:b.font},className:"me-3 "},"Status: ",e),o.a.createElement("div",{style:{color:b.font},className:"me-3"},"Time: ",a," ms"),o.a.createElement("div",{style:{color:b.font},className:"me-3"},"Size: ",l)),o.a.createElement("div",null,o.a.createElement(F.a,{defaultActiveKey:"body",id:"uncontrolled-tab-example",className:"nav nav-tabs"},o.a.createElement(A.a,{eventKey:"body",title:"Body"},o.a.createElement("pre",{style:{color:b.font,overflowY:"scroll",maxHeight:"300px"}},JSON.stringify(c,null,2))),o.a.createElement(A.a,{eventKey:"response",title:"Response"},o.a.createElement("pre",{style:{color:b.font,overflowY:"scroll"}},JSON.stringify(m,null,2))))))))},Q=a(134),Z=a.n(Q);var $=()=>{const{theme:e}=o.a.useContext(d);return o.a.createElement("div",null,o.a.createElement("div",{style:{fontSize:"3rem",color:e.font,fontWeight:"bolder"}}," ",o.a.createElement(Z.a,{fontSize:"large"})," Page coming soon..."))},ee=a(75),te=a(77);const ae=[{label:"Sentence"},{label:"Paragraph"},{label:"Clear"}],ne=[{index:"0",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},{index:"1",text:"Etiam quis urna et tellus tempus consectetur vitae nec magna."},{index:"2",text:"Aliquam ullamcorper nisi id magna pellentesque, ac eleifend ante porta."},{index:"3",text:"Morbi interdum eros vel blandit semper."},{index:"4",text:"Etiam pharetra libero pulvinar metus feugiat, id consectetur erat vehicula."},{index:"5",text:"Mauris ornare eros eu nunc maximus lacinia."},{index:"6",text:"Nulla suscipit leo sit amet quam laoreet, non ultricies lectus blandit."},{index:"7",text:"Sed quis odio vel erat iaculis maximus in in odio."},{index:"8",text:"Sed in urna eget nisl lacinia mattis nec vel libero."},{index:"9",text:"Morbi vitae metus eget elit lobortis suscipit sed quis tellus."},{index:"10",text:"Duis ut libero at ex dictum blandit."},{index:"11",text:"Nam vitae magna feugiat, iaculis tortor eget, maximus velit."},{index:"12",text:"Maecenas dignissim enim vel elit molestie, non cursus mi dictum."},{index:"13",text:"Nunc lobortis purus eget volutpat interdum."},{index:"14",text:"Morbi congue enim convallis, placerat eros sit amet, pretium orci."},{index:"15",text:"Ut sed nulla suscipit, faucibus felis ut, feugiat libero."}];var oe=a(223),re=a(136),le=a.n(re),ie=a(219),ce=a(2);var se=()=>{const{theme:e}=o.a.useContext(d),[t,a]=Object(n.useState)(""),[r,l]=o.a.useState(!0);return o.a.createElement("div",null,o.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:"1.5rem",color:e.font,fontWeight:"bolder"}},"Lorem Ipsum Generator",o.a.createElement(ie.a,{title:"Start with Lorem ipsum....",arrow:!0},o.a.createElement(oe.a,{checked:r,onChange:()=>{l(!r)},inputProps:{"aria-label":"controlled"}})),o.a.createElement(B.a,{variant:"contained",startIcon:o.a.createElement(le.a,null),onClick:()=>{navigator.clipboard.writeText(t).then(()=>{}).catch(e=>{console.error("Failed to copy: ",e)})}},"Copy")),o.a.createElement("div",{style:{display:"flex"}},o.a.createElement("div",{style:{marginRight:"10px",display:"flex",flexDirection:"column"}},ae.map((e,n)=>o.a.createElement(B.a,{variant:"contained",key:n,onClick:()=>(e=>{let n="";if(r&&(n=ne[0].text),"Sentence"!==e||r){if("Paragraph"===e)for(let t=0;t<=5;t++){const e=Math.floor(16*Math.random());n+=ne[e].text}else if("Clear"===e)return void a("")}else{const e=Math.floor(16*Math.random());n=ne[e].text}a(t+n+"\n")})(e.label),style:{marginBottom:"5px"}},e.label))),o.a.createElement("div",null,o.a.createElement(ee.a,{width:"935px",height:"600px",extensions:[ce.c.lineWrapping],value:t,theme:te.a,style:{overflowX:"wrap"}}))))};a(172);var me=()=>{const{theme:e}=o.a.useContext(d),[t,a]=Object(n.useState)(""),[r,l]=Object(n.useState)("");return o.a.createElement("div",null,o.a.createElement("div",{style:{fontSize:"1.5rem",color:e.font,fontWeight:"bolder",marginBottom:"20px"}},"Json Minify/Beautify"),o.a.createElement("div",{style:{display:"flex"}},o.a.createElement("div",{style:{flex:1,marginRight:"10px"}},o.a.createElement("div",null,o.a.createElement(B.a,{variant:"contained",onClick:()=>{a('{"a":1, "b":"foo", "c":["false","false","null", "null", {"d":{"e":"1.3e5","f":"1.3e5"}}]}')},style:{marginRight:"10px"}},"Add Dummy Data"),o.a.createElement(B.a,{variant:"contained",onClick:()=>{a("")},style:{marginRight:"10px"}},"Clear"),o.a.createElement(B.a,{variant:"contained",onClick:()=>{navigator.clipboard.readText().then(e=>{a(e)}).catch(e=>{console.error("Failed to paste: ",e)})},style:{marginRight:"10px"}},"Paste"),o.a.createElement(B.a,{variant:"contained",onClick:()=>{navigator.clipboard.writeText(t).then(()=>{}).catch(e=>{console.error("Failed to copy: ",e)})},style:{marginRight:"10px"}},"Copy")),o.a.createElement(ee.a,{width:"500px",height:"550px",value:t,theme:te.a,extensions:[ce.c.lineWrapping],onChange:e=>a(e),options:{mode:"javascript",json:!0,autoCloseBrackets:!0,lineNumbers:!0,indentUnit:2,lineWrapping:!0,overflowX:"auto"}})),o.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",margin:"0 10px"}},o.a.createElement(B.a,{variant:"contained",style:{marginBottom:"10px"},onClick:()=>{try{const e=JSON.parse(t),a=JSON.stringify(e,null,2);l(a)}catch(e){l("Invalid JSON: "+e.message)}}},"Beautify"),o.a.createElement(B.a,{variant:"contained",onClick:()=>{try{const e=JSON.parse(r),t=JSON.stringify(e);a(t)}catch(e){a("Invalid JSON: "+e.message)}}},"Minify")),o.a.createElement("div",{style:{flex:1,marginLeft:"10px"}},o.a.createElement("div",null,o.a.createElement(B.a,{variant:"contained",onClick:()=>{const e=JSON.stringify({a:1,b:"foo",c:[!1,"false",null,"null",{d:{e:13e4,f:"1.3e5"}}]},null,2);l(e)},style:{marginRight:"10px"}},"Add Dummy Data"),o.a.createElement(B.a,{variant:"contained",onClick:()=>{l("")},style:{marginRight:"10px"}},"Clear"),o.a.createElement(B.a,{variant:"contained",onClick:()=>{navigator.clipboard.readText().then(e=>{l(e)}).catch(e=>{console.error("Failed to paste: ",e)})},style:{marginRight:"10px"}},"Paste"),o.a.createElement(B.a,{variant:"contained",onClick:()=>{navigator.clipboard.writeText(r).then(()=>{}).catch(e=>{console.error("Failed to copy: ",e)})},style:{marginRight:"10px"}},"Copy")),o.a.createElement(ee.a,{width:"500px",height:"550px",value:r,theme:te.a,extensions:[ce.c.lineWrapping],onChange:e=>l(e),options:{mode:"javascript",json:!0,autoCloseBrackets:!0,lineNumbers:!0,indentUnit:2,lineWrapping:!0,overflowX:"auto"}}))))};var de=()=>(o.a.useEffect(()=>(document.body.style.overflow="hidden",()=>{document.body.style.overflow=""}),[]),o.a.createElement(s.c,null,o.a.createElement(s.a,{path:"/Httprequest",component:Y}),o.a.createElement(s.a,{path:"/Temp",component:$}),o.a.createElement(s.a,{path:"/LiGenerator",component:se}),o.a.createElement(s.a,{path:"/Jsonmb",component:me}),o.a.createElement(s.a,{path:"/",component:M})));var ue=()=>{const{theme:e}=o.a.useContext(d);return o.a.createElement("div",{style:{minHeight:"100vh",backgroundColor:e.backgroundColor}},o.a.createElement(i.a,{basename:"/devtools"},o.a.createElement("div",{style:{position:"relative",minHeight:"100vh",backgroundColor:e.backgroundColor}},o.a.createElement("div",{style:{backgroundColor:e.background}},o.a.createElement(_,null)),o.a.createElement("div",{style:{position:"absolute",top:"80px",left:"0",width:"19%",height:"calc(100% - 80px)"}},o.a.createElement(w,null)),o.a.createElement("div",{style:{position:"absolute",top:"80px",marginLeft:"200px",left:"10%",width:"70%"}},o.a.createElement(de,null))),o.a.createElement(L,null)))};l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(u,null,o.a.createElement(ue,null))),document.getElementById("root"))}},[[153,1,2]]]);
//# sourceMappingURL=main.03eb923a.chunk.js.map