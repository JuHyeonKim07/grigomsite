(this.webpackJsonpgrigomsite=this.webpackJsonpgrigomsite||[]).push([[0],{115:function(e,t,c){},125:function(e,t,c){},126:function(e,t,c){},128:function(e,t,c){},137:function(e,t,c){},138:function(e,t,c){},139:function(e,t,c){},140:function(e,t,c){},141:function(e,t,c){},142:function(e,t,c){},143:function(e,t,c){},144:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c.n(a),n=c(35),l=c.n(n),r=(c(115),c(39)),i=c(199);const o="AIzaSyANiEy7XDGB5UkWWDA3JvMGQ8xdDlye3R0",d=Object(r.b)("GET/YOUTUBE_PRODUCT",(async(e,t)=>{try{const{data:t}=await i.a.get("".concat("https://www.googleapis.com/youtube/v3","/playlistItems?key=").concat(o,"&playlistId=").concat(e,"&part=snippet&maxResults=30"));return t}catch(c){return t.rejectWithValue({errorMessage:"\ud638\ucd9c\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4."})}}));var j=Object(r.c)({name:"YOUTUBE_PRODUCT",initialState:{loading:!1,error:null,data:null},reducers:{},extraReducers(e){e.addCase(d.pending,((e,t)=>{e.loading=!0})).addCase(d.fulfilled,((e,t)=>{e.loading=!1,e.data=t.payload})).addCase(d.rejected,((e,t)=>{e.loading=!1,e.error=t.payload}))}}).reducer;const b=Object(r.b)("GET/YOUTUBE_CHANNELID",(async(e,t)=>{try{const{data:t}=await i.a.get("".concat("https://www.googleapis.com/youtube/v3","/playlists?key=").concat(o,"&channelId=").concat(e,"&part=snippet&maxResults=30"));return t}catch(c){return t.rejectWithValue({errorMessage:"\ud638\ucd9c\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4."})}}));var g=Object(r.c)({name:"YOUTUBE_PLAYLIST",initialState:{loading:!1,error:null,cartegory:[]},reducers:{},extraReducers(e){e.addCase(b.pending,(e=>{e.loading=!0})).addCase(b.fulfilled,((e,t)=>{e.loading=!1,e.cartegory=t.payload.items})).addCase(b.rejected,((e,t)=>{e.loading=!1,e.error=t.payload}))}}).reducer;var h=Object(r.a)({reducer:{youtubeVideosList:j,youtubeCategory:g}}),m=c(55),x=c(10),O=(c(125),c(126),c(1));var u=()=>Object(O.jsxs)("div",{className:"footer",children:[Object(O.jsx)("img",{className:"",src:"/logo/grigom_black.svg",alt:"grigom_black_logo",width:"130px"}),Object(O.jsxs)("ul",{className:"socials",children:[Object(O.jsx)("li",{children:"PHONE : 010.9537.9175"}),Object(O.jsx)("li",{children:"EMAIL : director@grigompictures.com"}),Object(O.jsx)("li",{children:"Copyright 2020. GRIGOM PICTURES. All rights reserved."})]})]}),p=c(22);c(128);var v=function(){const e=()=>{document.getElementById("menu-toggle").checked=!1};return Object(O.jsx)("header",{children:Object(O.jsxs)("div",{className:"header-container",children:[Object(O.jsx)("div",{className:"title-div",children:Object(O.jsxs)(p.b,{to:"/",children:["GRIGOM ",Object(O.jsx)("br",{})," PICTURES"]})}),Object(O.jsxs)("div",{className:"menu-div",children:[Object(O.jsx)("input",{id:"menu-toggle",name:"menu-toggle",type:"checkbox"}),Object(O.jsx)("label",{className:"menu-btn",htmlFor:"menu-toggle",children:Object(O.jsx)("span",{})}),Object(O.jsxs)("ul",{className:"menu-box",children:[Object(O.jsx)("li",{children:Object(O.jsx)(p.b,{to:"/",onClick:e,children:"ABOUT"})}),Object(O.jsx)("li",{children:Object(O.jsx)(p.b,{to:"/Works",onClick:e,children:"WORKS"})}),Object(O.jsx)("li",{children:Object(O.jsx)(p.b,{to:"/Brands",onClick:e,children:"BRANDS"})}),Object(O.jsx)("li",{children:Object(O.jsx)(p.b,{to:"/Contact",onClick:e,children:"CONTACT"})})]})]}),Object(O.jsx)("div",{className:"service-div"})]})})};var y=function(){return Object(O.jsxs)("div",{className:"info-div",children:[Object(O.jsx)("div",{className:"info-image",children:Object(O.jsx)("img",{className:"shot_range",src:"/image/shot_range.webp",alt:"shot_range",width:"100%"})}),Object(O.jsxs)("div",{className:"info-written",children:[Object(O.jsx)("div",{className:"info-title",children:Object(O.jsxs)("span",{children:["\uc601\uc0c1 \ud504\ub85c\ub355\uc158 ",Object(O.jsx)("br",{}),"GRIGOM PICTURES\ub294"]})}),Object(O.jsxs)("div",{className:"info-content",children:[Object(O.jsx)("div",{children:Object(O.jsxs)("span",{children:["\uc218\uc2ed\uac1c\uc758 \ud30c\ud2b8\ub108 \uc0ac\uc640 \ud568\uaed8 ",Object(O.jsx)("br",{})]})}),Object(O.jsx)("div",{children:Object(O.jsxs)("span",{children:["\ub2e4\uc591\ud55c \uc7a5\ub974\uc758 \uc601\uc0c1\uc744 ",Object(O.jsx)("br",{})]})}),Object(O.jsx)("div",{children:Object(O.jsxs)("span",{children:["\uc81c\uc791\ud55c \uacbd\ud5d8\uc744 \ubc14\ud0d5\uc73c\ub85c ",Object(O.jsx)("br",{})]})}),Object(O.jsx)("div",{children:Object(O.jsxs)("span",{children:["\uad6d\ub0b4 \uacf5\uacf5\uae30\uad00 \ubc0f \uae30\uc5c5, ",Object(O.jsx)("br",{})]})}),Object(O.jsx)("div",{children:Object(O.jsxs)("span",{children:["\ubc14\uc774\ub7f4, SNS, \ud64d\ubcf4\uc601\uc0c1, ",Object(O.jsx)("br",{})]})}),Object(O.jsx)("div",{children:Object(O.jsxs)("span",{children:["\ud589\uc0ac\uc601\uc0c1, \uc720\ud29c\ube0c \ucee8\ud150\uce20\ub97c ",Object(O.jsx)("br",{})]})}),Object(O.jsx)("div",{children:Object(O.jsx)("span",{children:"\uc81c\uc791\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."})}),Object(O.jsx)("div",{children:Object(O.jsx)("img",{src:"/logo/grigom_black.svg",alt:"grigom_black",width:"200px"})})]})]})]})};const _=[{src:"/logo/koreaculture_logo.png",alt:"culturekorea_logo"},{src:"/logo/danawa_logo.jpg",alt:"danawa_logo"},{src:"/logo/dyson_logo.png",alt:"dyson_logo"},{src:"/logo/hustorm_logo.png",alt:"hustorm_logo"},{src:"/logo/ksia_logo.png",alt:"ksia_logo"},{src:"/logo/ksif_logo.jpg",alt:"ksif_logo"},{src:"/logo/kspo_logo.png",alt:"kspo_logo"},{src:"/logo/knrea_logo.jpg",alt:"knrea_logo"},{src:"/logo/kyobo_logo.png",alt:"kyobo_logo"},{src:"/logo/samsung_card_logo.png",alt:"samsung_card_logo"},{src:"/logo/sk_dnd_logo.png",alt:"sk_dnd_logo"},{src:"/logo/tmck_logo.png",alt:"tmck_logo"},{src:"/logo/tupperwarebrands_logo.png",alt:"tupperwarebrands_logo"},{src:"/logo/hyundai_logo.png",alt:"hyundai_logo"},{src:"/logo/pubg_logo.png",alt:"pubg_logo"},{src:"/logo/seagate_logo.png",alt:"seagate_logo"}];var N=()=>Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{className:"title-container",children:Object(O.jsx)("div",{className:"title",children:Object(O.jsx)("span",{children:"BRANDS"})})}),Object(O.jsx)("div",{className:"brand-list-box",children:_.map(((e,t)=>Object(O.jsx)("div",{className:"brand-list-logo",children:Object(O.jsx)("img",{src:e.src,alt:e.alt,width:"100%"})},t)))})]}),f=c(198);var C=function(){const[e,t]=Object(a.useState)({message:""}),[c,s]=Object(a.useState)({company:"",number:"",email:"",name:"",phone:""}),{company:n,number:l,email:r,name:o,phone:d}=c,{message:j}=e,b=e=>{const{value:t,name:a}=e.target;s({...c,[a]:t})},g="https://grigompictures.com/index.php";return Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{className:"title-container",children:Object(O.jsx)("div",{className:"title",children:Object(O.jsx)("span",{children:"CONTACT"})})}),Object(O.jsx)("div",{className:"Contact",children:Object(O.jsx)("form",{method:"POST",children:Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{children:"\ud68c\uc0ac\uba85"}),Object(O.jsx)("input",{type:"text",id:"company",name:"company",placeholder:"Your Name",value:n,onChange:b}),Object(O.jsx)("label",{children:"\ud68c\uc0ac\ubc88\ud638"}),Object(O.jsx)("input",{type:"text",id:"number",name:"number",placeholder:"Company Number",value:l,onChange:b}),Object(O.jsx)("label",{children:"\uc774\uba54\uc77c"}),Object(O.jsx)("input",{type:"email",id:"email",name:"email",placeholder:"Your email",value:r,onChange:b,required:!0}),Object(O.jsx)("label",{children:"\ub2f4\ub2f9\uc790 \uc774\ub984"}),Object(O.jsx)("input",{type:"text",id:"name",name:"name",placeholder:"Name",value:o,onChange:b,required:!0}),Object(O.jsx)("label",{children:"\ub2f4\ub2f9\uc790 \uc804\ud654\ubc88\ud638"}),Object(O.jsx)("input",{type:"text",id:"phone",name:"phone",placeholder:"Phone",value:d,onChange:b,required:!0}),Object(O.jsx)("label",{children:"\ub0b4\uc6a9"}),Object(O.jsx)("textarea",{id:"message",name:"message",placeholder:"Write something..",value:j,onChange:c=>{const{value:a,name:s}=c.target;t({...e,[s]:a})},required:!0}),Object(O.jsx)(f.a,{variant:"contained",color:"default",onClick:function(t){const a=document.getElementById("email").value,s=document.getElementById("name").value,n=document.getElementById("phone").value;0===a.length?alert("\uc774\uba54\uc77c\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."):0===s.length?alert("\ub2f4\ub2f9\uc790 \uc774\ub984\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."):0===n.length?alert("\ub2f4\ub2f9\uc790 \uc804\ud654\ubc88\ud638\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694."):(Object(i.a)({method:"post",url:g,headers:{"content-type":"application/json"},data:{...c,...e}}).then((e=>{200===e.status?(alert("\uba54\uc77c\uc744 \uc804\uc1a1\ud558\uc600\uc2b5\ub2c8\ub2e4. \ud648\uc73c\ub85c \uc774\ub3d9\ud569\ub2c8\ub2e4."),window.location.pathname="/"):alert("\uba54\uc77c\uc804\uc1a1\uc5d0 \uc2e4\ud328\ud558\uc600\uc2b5\ub2c8\ub2e4.")})).catch((e=>console.error(e))),t.preventDefault())},children:"\uc804\uc1a1"})]})})})]})};var k=function(e){let{match:t}=e;return Object(O.jsxs)("div",{className:"details",children:[Object(O.jsx)("div",{className:"title-container",children:Object(O.jsx)("div",{className:"title",children:Object(O.jsx)("span",{children:"DETAILS"})})}),Object(O.jsx)("div",{className:"details_box",children:Object(O.jsx)("div",{className:"details_iframe",children:Object(O.jsx)("iframe",{id:"player",src:"https://www.youtube.com/embed/".concat(t.params.data),frameBorder:"0"})})})]})},w=c(202),I=c(204),E=c(200);const R=m.b,S=m.c;var T=function(e){let{playlistId:t}=e;const c=R(),{data:s,loading:n,error:l}=S((e=>e.youtubeVideosList));return Object(a.useEffect)((()=>{c(d(t))}),[c,t]),n?Object(O.jsx)("div",{className:"centered",children:"Loading videos..."}):l?Object(O.jsxs)("div",{className:"centered",children:["\uc601\uc0c1\uc744 \ubd88\ub7ec\uc624\ub358 \uc911 \uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4.",Object(O.jsx)("br",{}),"\uc0c8\ub85c\uace0\uce68 \ud574\uc8fc\uc138\uc694."]}):Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{className:"imageBox",children:s&&s.items.map(((e,t)=>0!==Object.keys(e.snippet.thumbnails).length&&Object(O.jsxs)("div",{className:"image",children:[Object(O.jsx)("img",{className:"image__img",src:e.snippet.thumbnails.maxres?e.snippet.thumbnails.maxres.url:e.snippet.thumbnails.high.url,alt:"thumbnail"}),Object(O.jsx)(p.b,{to:"/Details/".concat(e.snippet.resourceId.videoId),children:Object(O.jsxs)("div",{className:"image__overlay image__overlay--youtube",children:[Object(O.jsx)("div",{className:"image__title",children:"Grigom Pictures"}),Object(O.jsx)("p",{className:"image__description",children:e.snippet.title})]})})]},t)))})})},B=c(99),U=c.n(B);function A(e){const{children:t,value:c,index:a,...s}=e;return Object(O.jsx)("div",{style:{width:"100%"},role:"tabpanel",hidden:c!==a,id:"vertical-tabpanel-".concat(a),"aria-labelledby":"vertical-tab-".concat(a),...s,children:c===a&&Object(O.jsx)(w.a,{children:t})})}function D(){const{cartegory:e}=S((e=>e.youtubeCategory)),[t,c]=Object(a.useState)(!1),s=Object(a.useRef)(null),[n,l]=Object(a.useState)(0);return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)(w.a,{className:"category-container",sx:{bgcolor:"background.paper"},ref:s,children:[Object(O.jsxs)("div",{style:{display:"flex"},children:[Object(O.jsx)(E.a,{orientation:"vertical",variant:"scrollable",value:n,onChange:(e,t)=>{l(t)},"aria-label":"Vertical tabs example",sx:{borderRight:1,borderColor:"divider",minWidth:"200px"},TabIndicatorProps:{sx:{backgroundColor:"orange",width:"3px",borderRadius:"4px",height:"auto"}},children:e&&e.map(((e,t)=>Object(O.jsx)(I.a,{label:e.snippet.title,sx:{color:"black","&.Mui-selected":{color:"orange"}}},t)))}),Object(O.jsx)("div",{className:"tabCloseBtn",onClick:()=>{t?s.current&&(s.current.style.marginLeft="",c(!1)):s.current&&(s.current.style.marginLeft="-200px",c(!0))},children:Object(O.jsx)(U.a,{})})]}),e&&e.map(((e,t)=>Object(O.jsx)(A,{value:n,index:t,children:Object(O.jsx)(T,{playlistId:e.id})},e.id)))]})})}var P=c(205);c(137);function G(){return Object(O.jsx)(w.a,{className:"loader",children:Object(O.jsx)(P.a,{size:150})})}var L=function(){const e=R();Object(a.useLayoutEffect)((()=>{e(b("UCBXwSHfXqRIJkaPs3ZMzKVA"))}),[e]);const{loading:t}=S((e=>e.youtubeCategory));return Object(O.jsx)(O.Fragment,{children:t?Object(O.jsx)(G,{}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{className:"title-container",children:Object(O.jsx)("div",{className:"title",children:Object(O.jsx)("span",{children:"WORKS"})})}),Object(O.jsx)(D,{})]})})};c(138),c(139),c(140),c(141),c(142),c(143);var M=function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:"wrapper",children:[Object(O.jsx)("header",{children:Object(O.jsx)(v,{})}),Object(O.jsx)("main",{children:Object(O.jsxs)("section",{children:[Object(O.jsx)(x.a,{exact:!0,path:"/",component:y}),Object(O.jsxs)(x.c,{children:[Object(O.jsx)(x.a,{path:"/Brands",component:N}),Object(O.jsx)(x.a,{path:"/Works",component:L}),Object(O.jsx)(x.a,{path:"/Contact",component:C}),Object(O.jsx)(x.a,{path:"/Details/:data",component:k})]})]})}),Object(O.jsx)("footer",{children:Object(O.jsx)(u,{})})]})})};l.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(m.a,{store:h,children:Object(O.jsx)(p.a,{children:Object(O.jsx)(M,{})})})}),document.getElementById("root"))}},[[144,1,2]]]);
//# sourceMappingURL=main.fd0f7b5d.chunk.js.map