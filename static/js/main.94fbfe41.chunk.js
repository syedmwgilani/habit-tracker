(this["webpackJsonphabit-tracker"]=this["webpackJsonphabit-tracker"]||[]).push([[0],{15:function(e,t){e.exports={getNestedVal:function(e,t){return t.reduce((function(e,t,r){return e[t]}),e)},getInnerObj:function(e,t){var r=t.slice(0,t.length-1);return this.getNestedVal(e,r)},setNestedVal:function(e,t,r){return t.reduce((function(e,t,n,a){return n===a.length-1?(e[t]=r,e):e[t]}),e)},generateUIDKey:function(e){for(var t=Math.floor(1e16*Math.random()).toString();e[t];)t=Math.floor(1e16*Math.random()).toString();return t},addPrefix:function(e,t,r){return e()?t:r+t}}},16:function(e,t,r){},17:function(e,t,r){"use strict";r.r(t);var n=r(2),a=r(1),c=r(4),s=r.n(c),i=r(7),o=r(5),l=r(6),u=r(9),d=r(8),b=r(0),h=r(15).addPrefix;function g(e){var t={width:(e.size<=100?e.size:100)+"%"};return Object(b.jsxs)("div",{className:"bg-blue white",style:t,children:[" ",e.size,"% "]})}function j(e){return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"bg-light-gray",children:Object(b.jsx)(g,{size:e.progress})}),Object(b.jsx)("br",{}),Object(b.jsx)("button",{onClick:e.onClick,children:" Click Me "})]})}function O(e){return Object(b.jsxs)("div",{children:[Object(b.jsx)("p",{children:e.name}),Object(b.jsx)(j,{progress:e.progress,onClick:e.onClick}),Object(b.jsxs)("p",{children:["Daily Occurence: ",e.dailyOccurrence]})]})}var f=function(e){Object(u.a)(r,e);var t=Object(d.a)(r);function r(e){var n;Object(o.a)(this,r),n=t.call(this,e);var a=new Date,c=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][a.getDay()],s=(a.getMonth()+1).toString(),i=a.getDate().toString(),l=a.getFullYear()+"_"+h((function(){return s.length>1}),s,"0")+"_"+h((function(){return i.length>1}),i,"0"),u=localStorage.getItem("activeHabitTemplates"),d=JSON.parse(u);console.log("LOADED activeHabitTemp: ",d);var b=[];if(d){var g=localStorage.getItem("habits_"+l);b=g?JSON.parse(g):Object.keys(d).reduce((function(e,t){if(d[t].weeklyOccurrence[c]){var r={};return r.id=t,r.name=d[t].name,r.dailyOccurrence=d[t].dailyOccurrence,r.progress=0,e.push(r),e}return e}),[])}return n.state={dayOfTheWeek:c,dateString:l,habits:b},console.log("CREATED Habit state: ",n.state),n.saveHabitLocalStorage(),n}return Object(l.a)(r,[{key:"saveHabitLocalStorage",value:function(){console.log("SAVING...",this.state);var e=JSON.stringify(this.state.habits);localStorage.setItem("habits_"+this.state.dateString,e),console.log("SAVED Habits",e)}},{key:"incrementProgress",value:function(e,t){console.log("---\nCLICKED habits[".concat(t,"]"));var r=Object(i.a)(this.state.habits),n=r[t],a=100/n.dailyOccurrence;n.progress=n.progress+a,console.log(r[t]),this.setState({habits:r},this.saveHabitLocalStorage.bind(this))}},{key:"render",value:function(e){var t=this,r=this.state.habits.map((function(e,r){return Object(b.jsx)("li",{children:Object(b.jsx)(O,Object(n.a)(Object(n.a)({},e),{},{onClick:function(n){return t.incrementProgress(e.id,r)}}))},e.id)}));return Object(b.jsxs)("main",{className:"wrapper",children:[Object(b.jsx)("div",{className:"margin1"}),Object(b.jsxs)("div",{className:"content",children:[Object(b.jsx)("p",{children:this.state.dayOfTheWeek}),Object(b.jsx)("ul",{children:r})]}),Object(b.jsx)("div",{className:"margin2"})]})}}]),r}(a.Component);r(16);s.a.render(Object(b.jsx)(f,Object(n.a)({},{})),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.94fbfe41.chunk.js.map