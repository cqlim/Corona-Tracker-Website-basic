(this["webpackJsonpcorona-tracker-website"]=this["webpackJsonpcorona-tracker-website"]||[]).push([[0],{26:function(e,t,a){e.exports=a(51)},31:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(24),c=a.n(r),o=(a(31),a(14)),s=a(1),i=a(13),m=a(12),u=a(10),d=(a(32),a(8)),p=a(11),E=a.n(p),g=(a(50),a(9));var x=function(){var e=Object(l.useState)(""),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(l.useState)(""),p=Object(o.a)(c,2),x=p[0],h=p[1];return Object(l.useEffect)((function(){E.a.get("https://covidtracking.com/api/states/").then((function(e){r(e.data[37])})).catch((function(e){console.log(e)})),E.a.get("http://covidtracking.com/api/us").then((function(e){h(e.data[0])})).catch((function(e){console.log(e)}))}),[]),n.a.createElement("div",{className:"out-div"},n.a.createElement(m.a,null,n.a.createElement("h2",null,"Status of Oregon"),">",n.a.createElement(u.a,null,n.a.createElement(d.a,null,n.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Flag_of_Oregon.svg/2000px-Flag_of_Oregon.svg.png"}))),n.a.createElement(u.a,null,n.a.createElement(i.a,{style:{margin:"50px"}},n.a.createElement(d.a,{xs:6},n.a.createElement(s.a,{bg:"secondary",text:"white",style:{margin:"10px"}},n.a.createElement(s.a.Header,null,"Cases"),n.a.createElement(s.a.Body,null,n.a.createElement(s.a.Title,null,n.a.createElement(g.a,{value:a.positive,displayType:"text",thousandSeparator:!0,prefix:"Total: "}))))),n.a.createElement(d.a,null,n.a.createElement(s.a,{bg:"danger",text:"white",className:"text=center",style:{margin:"10px"}},n.a.createElement(s.a.Header,null,"Deaths"),n.a.createElement(s.a.Body,null,n.a.createElement(s.a.Title,null,n.a.createElement(g.a,{value:a.death,displayType:"text",thousandSeparator:!0,prefix:"Total: "}))))),n.a.createElement(d.a,{xs:6},n.a.createElement(s.a,{bg:"success",text:"white",className:"text=center",style:{margin:"10px"}},n.a.createElement(s.a.Header,null,"Recovered"),n.a.createElement(s.a.Body,null,n.a.createElement(s.a.Title,null,n.a.createElement(g.a,{value:a.recovered,displayType:"text",thousandSeparator:!0,prefix:"Total: "}))))),n.a.createElement(d.a,{xs:6},n.a.createElement(s.a,{bg:"info",text:"white",className:"text=center",style:{margin:"10px"}},n.a.createElement(s.a.Header,null,"Currently Hospitalized"),n.a.createElement(s.a.Body,null,n.a.createElement(s.a.Title,null,n.a.createElement(g.a,{value:a.hospitalizedCurrently,displayType:"text",thousandSeparator:!0,prefix:"Total: "})))))))),n.a.createElement(m.a,null,n.a.createElement("h2",null,"Status of United State"),">",n.a.createElement(u.a,null,n.a.createElement(d.a,null,n.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1280px-Flag_of_the_United_States.svg.png"}))),n.a.createElement(u.a,null,n.a.createElement(i.a,{style:{margin:"50px"}},n.a.createElement(d.a,{xs:6},n.a.createElement(s.a,{bg:"secondary",text:"white",style:{margin:"10px"}},n.a.createElement(s.a.Header,null,"Total tested results"),n.a.createElement(s.a.Body,null,n.a.createElement(s.a.Title,null,n.a.createElement(g.a,{value:x.totalTestResults,displayType:"text",thousandSeparator:!0,prefix:"Total: "}))))),n.a.createElement(d.a,null,n.a.createElement(s.a,{bg:"danger",text:"white",className:"text=center",style:{margin:"10px"}},n.a.createElement(s.a.Header,null,"Total tested positives"),n.a.createElement(s.a.Body,null,n.a.createElement(s.a.Title,null,n.a.createElement(g.a,{value:x.positive,displayType:"text",thousandSeparator:!0,prefix:"Total: "}))))),n.a.createElement(d.a,{xs:6},n.a.createElement(s.a,{bg:"success",text:"white",className:"text=center",style:{margin:"10px"}},n.a.createElement(s.a.Header,null,"Total tested negatives"),n.a.createElement(s.a.Body,null,n.a.createElement(s.a.Title,null,n.a.createElement(g.a,{value:x.negative,displayType:"text",thousandSeparator:!0,prefix:"Total: "}))))),n.a.createElement(d.a,{xs:6},n.a.createElement(s.a,{bg:"info",text:"white",className:"text=center",style:{margin:"10px"}},n.a.createElement(s.a.Header,null,"Total test pending"),n.a.createElement(s.a.Body,null,n.a.createElement(s.a.Title,null,n.a.createElement(g.a,{value:x.pending,displayType:"text",thousandSeparator:!0,prefix:"Total: "})))))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.34dc995f.chunk.js.map