(this.webpackJsonpsdktset=this.webpackJsonpsdktset||[]).push([[0],{166:function(e,t,i){},172:function(e,t,i){},174:function(e,t,i){"use strict";i.r(t);var n=i(0),a=i.n(n),r=i(17),s=i.n(r),c=i(105),o=i(8),l=i(69),d=i(95),u=Object(d.b)({name:"data",initialState:{list:[],details:{}},reducers:{setData:function(e,t){e.list=t.payload},setDetails:function(e,t){e.details=t.payload}}}),h=u.actions,b=h.setData,j=h.setDetails,p=u.reducer,x=i(126),O="mkWg5isuZ9532tcHQF15SnAZn7BXG62k",f=i(247),m=i(244),g=(i(166),i(9));var k=function(e){var t=e.data;return Object(g.jsxs)("div",{style:{height:"auto",maxWidth:"100%",margin:"40px auto"},children:[Object(g.jsx)("h3",{children:"Book's details"}),Object(g.jsxs)("ul",{children:[Object(g.jsxs)("li",{children:[Object(g.jsx)("strong",{children:"Title: "}),t.title]}),Object(g.jsxs)("li",{children:[Object(g.jsx)("strong",{children:"Author: "}),t.author]}),Object(g.jsxs)("li",{children:[Object(g.jsx)("strong",{children:"Publisher: "}),t.publisher]}),Object(g.jsxs)("li",{children:[Object(g.jsx)("strong",{children:"Description:"}),Object(g.jsx)("br",{}),t.description]}),Object(g.jsxs)("li",{children:[Object(g.jsx)("strong",{children:"Link: "}),Object(g.jsx)("a",{href:t.amazon_product_url,rel:"noreferrer noopener",target:"_blank",children:"Amazon link"})]})]})]})},v=i(130),w=i.n(v),y=i(246);var _=function(){var e=Object(l.c)((function(e){return e.data.list})),t=Object(l.c)((function(e){return e.data.details})),i=Object(l.b)(),r=a.a.useState(!1),s=Object(o.a)(r,2),d=s[0],u=s[1],h=function(){return u(!1)},p=a.a.useState(!0),v=Object(o.a)(p,2),_=v[0],A=v[1],z=function(e){e.defaultMuiPrevented=!0,i(j(e.row.details)),u(!0)};return Object(n.useEffect)((function(){fetch("https://api.nytimes.com/svc/books/v3/lists.json?list-name=hardcover-fiction&api-key=".concat(O),{method:"get"}).then((function(e){return e.json()})).then((function(e){i(b(function(e){var t=[];return e.results.forEach((function(e,i){var n={};n.id=i,n.title=e.book_details[0].title,n.author=e.book_details[0].author,n.publisher=e.book_details[0].publisher,n.details=e.book_details[0],n.details.amazon_product_url=e.amazon_product_url,t.push(n)})),t}(e))),A(!1)})).catch((function(e){console.log("NYT API Error: Defaulting to nytimes archival data.",e)}))}),[]),Object(g.jsxs)("div",{style:{height:"400px",maxWidth:"70%",margin:"40px auto",position:"relative",zIndex:"0"},children:[Object(g.jsx)("h1",{children:"SPA with React to browse an API endpoint"}),Object(g.jsx)("h2",{children:"RAZAFINDRABE Burel Kiady Bezaka"}),_?Object(g.jsx)("div",{style:{width:"45px",margin:"40px auto",position:"absolute",zIndex:"1",left:"48%",top:"60%"},children:Object(g.jsx)(y.a,{})}):"",Object(g.jsx)(x.a,{rows:e,columns:[{field:"id",headerName:"ID",width:150},{field:"title",headerName:"Title",width:350},{field:"author",headerName:"Author",width:250},{field:"publisher",headerName:"Publisher",width:250}],pageSize:5,rowsPerPageOptions:[5],checkboxSelection:!1,disableSelectionOnClick:!0,onRowClick:function(e){return z(e)}}),Object(g.jsx)(m.a,{open:d,onClose:h,"aria-labelledby":"parent-modal-title","aria-describedby":"parent-modal-description",children:Object(g.jsxs)(f.a,{sx:Object(c.a)(Object(c.a)({},{margin:"100px auto",width:400,bgcolor:"background.paper",border:"1px solid #ccc",borderRadius:"5px",p:2,px:4,pb:3,position:"relative"}),{},{width:600}),children:[Object(g.jsx)(w.a,{onClick:h,style:{cursor:"pointer",position:"absolute",top:"0",right:"0",margin:"10px",fontSize:"35px"}}),Object(g.jsx)(k,{data:t})]})})]})},A=(i(172),Object(d.a)({reducer:{data:p}}));s.a.render(Object(g.jsx)(l.a,{store:A,children:Object(g.jsx)(_,{})}),document.getElementById("root"))}},[[174,1,2]]]);
//# sourceMappingURL=main.ce430fa7.chunk.js.map