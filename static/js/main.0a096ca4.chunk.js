(this.webpackJsonpproduct_list_app=this.webpackJsonpproduct_list_app||[]).push([[0],{113:function(e,t,a){e.exports={icon:"SortSelection_icon__1MI4j"}},118:function(e){e.exports=JSON.parse('[{"name":"tile","title":"","icon":"AppstoreOutlined"},{"name":"list","title":"","icon":"UnorderedListOutlined"}]')},134:function(e,t,a){e.exports=a(203)},203:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),o=a.n(c),u=a(37),i=a.n(u),s=a(60),p=a(43),l=(a(140),a(61)),_=a(62),m=a.n(_),d=a(206),g=a(2),f=a.n(g),h=function(e){var t,a=e.image,n=e.name,c=e.price,o=e.chooseProduct,u=e.displayType;return r.a.createElement("div",{className:m.a.wrap,onClick:function(){return o(a,n,c)}},r.a.createElement(d.a,{hoverable:!0,cover:r.a.createElement("img",{src:a.replace("http","https"),alt:"phone",className:f()((t={},Object(l.a)(t,m.a.image,!0),Object(l.a)(t,m.a.tileImage,"tile"===u),Object(l.a)(t,m.a.listImage,"list"===u),t))})},r.a.createElement("h3",{className:m.a.productName},n),r.a.createElement("h1",{className:m.a.productPrice},c," \u20bd")))},v=a(91),E=a.n(v),b=function(e){var t,a=e.productList,n=e.chooseProduct,c=e.displayType;return r.a.createElement("div",{className:f()((t={},Object(l.a)(t,E.a.tileWrap,"tile"===c),Object(l.a)(t,E.a.listWrap,"list"===c),t))},a.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement(h,{image:e.image,name:e.name,price:e.price,chooseProduct:n,displayType:c}))})))},w=a(209),j=function(e){var t=e.inputSearchValue,a=e.inputValue;return r.a.createElement(w.a,{value:a,onChange:function(e){t(e.target.value)}})},O=a(48),x=a.n(O),N=a(76),k=a(105),C=a(106),S=a(84),y=a(113),P=a.n(y),A=function(e){var t=e.sortChange,a=N.a.Option;return r.a.createElement(N.a,{defaultValue:"".concat(S[0].name.toLowerCase(),"-").concat(S[0].sortDirection),onChange:function(e){return t(e)}},S.map((function(e){return r.a.createElement(a,{key:"".concat(e.name.toLowerCase(),"-").concat(e.sortDirection),value:"".concat(e.name.toLowerCase(),"-").concat(e.sortDirection)},r.a.createElement("span",{className:P.a.icon},"asc"===e.sortDirection?r.a.createElement(k.a,null):r.a.createElement(C.a,null)),e.name)})))},L=a(211),T=a(207),D=a(205),W=a(208),F=a(107),I=a(54),B=function(e){var t=e.type,a=e.title,n=e.icon,c=e.onClick,o=e.name;return r.a.createElement(I.a,{name:o,type:t,icon:n,onClick:c},a)},G=function(){var e=Object(s.a)(i.a.mark((function e(t,a){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={total_count:"",current_page:"",previous_page_url:"",next_page_url:"",pages_count:"",products:[]},e.next=3,fetch(t,{method:a}).then((function(e){return e.json()})).then((function(e){return n=e})).catch((function(e){alert("\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b: ".concat(e))}));case 3:return e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),V=a(210),J=function(e){var t=e.buttonsArr,n=e.activeButton,c=e.onChange;return r.a.createElement(V.a.Group,{value:n,onChange:c},t.map((function(e,t){return r.a.createElement(V.a.Button,{value:e.name,key:t},function(e){var t=a(87)[e];return r.a.createElement(t,null)}(e.icon),e.title)})))},z=a(118),q=function(){var e=Object(n.useState)(!1),t=Object(p.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)([]),u=Object(p.a)(o,2),l=u[0],_=u[1],m=Object(n.useState)(""),d=Object(p.a)(m,2),g=d[0],f=d[1],h=Object(n.useState)({total_count:"",current_page:"",previous_page_url:"",next_page_url:"",pages_count:""}),v=Object(p.a)(h,2),E=v[0],w=v[1],O=Object(n.useState)(!1),N=Object(p.a)(O,2),k=N[0],C=N[1],S=Object(n.useState)(!1),y=Object(p.a)(S,2),P=y[0],I=y[1],V=Object(n.useState)({image:"",name:"",price:""}),q=Object(p.a)(V,2),M=q[0],K=q[1],U=Object(n.useState)({sortField:"name",sortDirection:"asc"}),Y=Object(p.a)(U,2),H=Y[0],Q=Y[1],R=Object(n.useState)("tile"),X=Object(p.a)(R,2),Z=X[0],$=X[1],ee=function(){var e=Object(s.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G("https://www.lenvendo.ru/api/js-test-task/","GET");case 2:t=e.sent,_(t.products),w({total_count:t.total_count,current_page:t.current_page,previous_page_url:t.previous_page_url,next_page_url:t.next_page_url}),0!==t.products.length?c(!0):c(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),te=function(){var e=Object(s.a)(i.a.mark((function e(t){var a,n,r,c,o,u;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.split("-"),n=Object(p.a)(a,2),r=n[0],c=n[1],o="https://www.lenvendo.ru/api/js-test-task/?sort_field=".concat(r,"&sort_direction=").concat(c),e.next=4,G(o,"GET");case 4:u=e.sent,Q({sortField:r,sortDirection:c}),_(u.products);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ae=function(){var e=Object(s.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=g?"https://www.lenvendo.ru/api/js-test-task/?search=".concat(g):"https://www.lenvendo.ru/api/js-test-task/",e.next=3,G(t,"GET");case 3:void 0==(a=e.sent).products?(_([]),C(!0)):(_(a.products),C(!1)),w({total_count:a.total_count,current_page:a.current_page,previous_page_url:a.previous_page_url,next_page_url:a.next_page_url});case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ne=function(){var e=Object(s.a)(i.a.mark((function e(t){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t-E.current_page===1&&(a=E.next_page_url.replace("http","https")),t-E.current_page===-1&&(a=E.previous_page_url.replace("http","https")),(t-E.current_page>1||t-E.current_page<-1||t-E.current_page===0)&&(a="https://www.lenvendo.ru/api/js-test-task/?page=".concat(t)),g&&(a="".concat(a,"&search=").concat(g)),e.next=6,G("".concat(a,"&sort_field=").concat(H.sortField,"&sort_direction=").concat(H.sortDirection),"GET");case 6:n=e.sent,_(n.products),w({total_count:n.total_count,current_page:n.current_page,previous_page_url:n.previous_page_url,next_page_url:n.next_page_url}),setTimeout((function(){window.scrollTo(0,0)}),100);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){ee()}),[]),r.a.createElement("div",{className:x.a.wrap},r.a.createElement("div",{className:x.a.searchBar},r.a.createElement(L.b,{className:x.a.searchForm},r.a.createElement(j,{inputSearchValue:function(e){f(e)},inputValue:g}),r.a.createElement(B,{name:"Search",title:"Search",onClick:ae,icon:r.a.createElement(F.a,null)})),r.a.createElement(L.b,null,r.a.createElement(A,{sortChange:te}),r.a.createElement(J,{buttonsArr:z,activeButton:Z,onChange:function(e){$(e.target.value)}}))),a?r.a.createElement("div",{className:x.a.productListWrap},k?r.a.createElement("h2",{className:x.a.notFound},"\u041f\u043e \u0412\u0430\u0448\u0435\u043c\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u0443 \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"):r.a.createElement("div",null,r.a.createElement(b,{productList:l,chooseProduct:function(e,t,a){K({name:t,price:a,image:e}),I(!0)},displayType:Z}),r.a.createElement(T.a,{visible:P,onOk:function(){I(!1)},onCancel:function(){I(!1)},okText:"Add to cart"},r.a.createElement("img",{src:M.image.replace("http","https"),alt:"phone",className:x.a.image}),r.a.createElement("h3",null,M.name),r.a.createElement("h1",null,M.price," \u20bd")))):r.a.createElement("div",{className:x.a.preloader},r.a.createElement(D.a,{size:"large"})),r.a.createElement("div",{className:x.a.pagination},r.a.createElement(W.a,{responsive:!0,defaultCurrent:1,total:E.total_count,onChange:function(e){return ne(e)},showSizeChanger:!1,hideOnSinglePage:!0})))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(q,null)),document.getElementById("root"))},48:function(e,t,a){e.exports={wrap:"App_wrap__C6IVf",searchBar:"App_searchBar__2Tb0q",productListWrap:"App_productListWrap__3nrC9",preloader:"App_preloader__27Wlt",image:"App_image__3ar8i",pagination:"App_pagination__2AINP",notFound:"App_notFound__lYN_S",searchForm:"App_searchForm__2m6g7"}},62:function(e,t,a){e.exports={wrap:"Product_wrap__1v3L3",image:"Product_image__3GIla",listImage:"Product_listImage__1jwce",productName:"Product_productName__28jv9",productPrice:"Product_productPrice__J3kTz"}},84:function(e){e.exports=JSON.parse('[{"name":"Name","sortDirection":"asc"},{"name":"Name","sortDirection":"desc"},{"name":"Price","sortDirection":"asc"},{"name":"Price","sortDirection":"desc"}]')},91:function(e,t,a){e.exports={tileWrap:"ProductList_tileWrap__2ffmK",listWrap:"ProductList_listWrap__CqoLD"}}},[[134,1,2]]]);
//# sourceMappingURL=main.0a096ca4.chunk.js.map