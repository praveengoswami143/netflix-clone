(this.webpackJsonpnetflix_clone=this.webpackJsonpnetflix_clone||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){},47:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n(1),a=n.n(o),r=n(19),i=n.n(r),s=(n(28),n(29),n(5)),l=n.n(s),u=n(6),d=n(4),h=n(20),f=n.n(h).a.create({baseURL:"https://api.themoviedb.org/3"}),v=(n(47),n(7)),b=n(8),j=n.n(b),g=function(e){var t=e.title,n=e.fetchUrl,a=e.isLargeRow,r=Object(o.useState)([]),i=Object(d.a)(r,2),s=i[0],h=i[1],b=Object(o.useState)(""),g=Object(d.a)(b,2),p=g[0],m=g[1];Object(o.useEffect)((function(){(function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get(n);case 2:return t=e.sent,h(t.data.results),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[n]);return Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("h2",{children:t}),Object(c.jsx)("div",{className:"row_posters",children:s.map((function(e){return Object(c.jsx)("img",{onClick:function(){return function(e){p?m(""):j()((null===e||void 0===e?void 0:e.name)||"").then((function(e){var t=new URLSearchParams(new URL(e).search);m(t.get("v"))})).catch((function(e){return console.log(e)}))}(e)},className:"row_poster ".concat(a&&"row_posterLarge"),src:"".concat("https://image.tmdb.org/t/p/original/").concat(a?e.poster_path:e.backdrop_path),alt:e.name},e.id)}))}),p&&Object(c.jsx)(v.a,{videoId:p,opts:{height:"390",width:"100%",playerVars:{autoplay:1}}})]})},p="16ec5b2a7c4bc7a3248132c787767284",m={fetchTrending:"/trending/all/week?api_key=".concat(p,"&language=en-US"),fetchNetflixOrigionals:"/discover/tv?api_key=".concat(p,"&with_networks=213"),fetchTopRated:"/movie/top_rated?api_key=".concat(p,"&language=en-US"),fetchActionMovies:"/discover/movie?api_key=".concat(p,"&with_genres=28"),fetchComedymovies:"/discover/movie?api_key=".concat(p,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(p,"&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(p,"&with_genres=10749"),fetchDocumentaries:"/discover/movie?api_key=".concat(p,"&with_genres=99")},O=(n(63),function(){var e=Object(o.useState)([]),t=Object(d.a)(e,2),n=t[0],a=t[1],r=Object(o.useState)(""),i=Object(d.a)(r,2),s=i[0],h=i[1];Object(o.useEffect)((function(){(function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get(m.fetchNetflixOrigionals);case 2:t=e.sent,a(t.data.results[Math.floor(Math.random()*t.data.results.length-1)]);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),console.log(n);var b,g;return Object(c.jsxs)("header",{className:"banner",style:{backgroundSize:"cover",backgroundImage:'url("https://image.tmdb.org/t/p/original/'.concat(null===n||void 0===n?void 0:n.backdrop_path,'")'),backgroundPosition:"center"},children:[Object(c.jsxs)("div",{className:"banner_contents",children:[Object(c.jsx)("h1",{className:"banner_title",children:(null===n||void 0===n?void 0:n.title)||(null===n||void 0===n?void 0:n.name)||(null===n||void 0===n?void 0:n.original_name)}),Object(c.jsxs)("div",{className:"banner_buttons",children:[Object(c.jsx)("button",{className:"banner_button",onClick:function(){return function(e){s?h(""):j()((null===e||void 0===e?void 0:e.name)||"").then((function(e){var t=new URLSearchParams(new URL(e).search);h(t.get("v"))})).catch((function(e){return console.log(e)}))}(n)},children:"Play"}),Object(c.jsx)("button",{className:"banner_button",children:"My List"})]}),Object(c.jsx)("h1",{className:"banner_description",children:(b=null===n||void 0===n?void 0:n.overview,g=150,(null===b||void 0===b?void 0:b.length)>g?b.substr(0,g-1)+" ...":b)})]}),Object(c.jsx)("div",{className:"banner_fadeBottom"}),s&&Object(c.jsx)(v.a,{videoId:s,opts:{width:"100%",height:"390",playerVars:{autoplay:1}}})]})}),x=(n(64),function(){var e=Object(o.useState)(!1),t=Object(d.a)(e,2),n=t[0],a=t[1];return Object(o.useEffect)((function(){return window.addEventListener("scroll",(function(){window.scrollY>100?a(!0):a(!1)})),function(){window.removeEventListener("scroll")}}),[]),Object(c.jsxs)("div",{className:"nav ".concat(n&&"nav_black"),children:[Object(c.jsx)("img",{className:"nav_logo",src:"https://www.freepnglogos.com/uploads/netflix-logo-0.png",alt:"Netflix Logo"}),Object(c.jsx)("a",{className:"nav_avtar",href:"#",children:"Login "})]})});var w=function(){return Object(c.jsxs)("div",{className:"app",children:[Object(c.jsx)(x,{}),Object(c.jsx)(O,{}),Object(c.jsx)(g,{title:"NETFLIX ORIGIONALS",fetchUrl:m.fetchNetflixOrigionals,isLargeRow:!0}),Object(c.jsx)(g,{title:"Trending Now",fetchUrl:m.fetchTrending}),Object(c.jsx)(g,{title:"Top Rated",fetchUrl:m.fetchTopRated}),Object(c.jsx)(g,{title:"Action Movies",fetchUrl:m.fetchActionMovies}),Object(c.jsx)(g,{title:"Comedy Now",fetchUrl:m.fetchComedymovies}),Object(c.jsx)(g,{title:"Horror Now",fetchUrl:m.fetchHorrorMovies}),Object(c.jsx)(g,{title:"Romance Now",fetchUrl:m.fetchRomanceMovies}),Object(c.jsx)(g,{title:"Documentaries",fetchUrl:m.fetchDocumentaries})]})},_=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,66)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),o(e),a(e),r(e)}))};i.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(w,{})}),document.getElementById("root")),_()}},[[65,1,2]]]);
//# sourceMappingURL=main.1ae58f64.chunk.js.map