(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(t,e,n){},16:function(t,e,n){var i=n(17),r=i.cartesianSquare,a=i.cartesianProduct,o=i.justifyLength,u=i.range,l=i.subtractPositions,c=i.isNotOrigin,s=i.addPositions,f=function(t){var e=t[0],n=t[1],i=new Array(e).fill("1");return i=i.map(function(t){return new Array(n).fill("*").map(function(t){return 0})})},d=function(t){return"|"+(t=t.map(function(t){return o(t,3)+"|"})).join("")},v=function(t){return r([-1,0,1]).filter(c).map(function(e){return s(e,t)})},m=function(t,e){var n=e[0],i=e[1];return void 0!=t[n]&&void 0!=t[n][i]},p=function(t,e){return v(e).filter(m.bind(null,t)).map(function(e){return t[e[0]][e[1]]})},b=function(t,e){return p(t,e).filter(function(t){return 1==t}).length},h=function(t,e){return["0","0",e,"1","0","0","0","0","0"][t]};t.exports={makeGrid:function(t){for(var e=[],n=0;n<t.length;n++)e[n]=d(t[n]);return e.join("\n")},makeWorld:f,findNeighbours:p,findAliveposition:function(t){var e=t.world,n=t.dimensions,i=[],r=n[0],o=n[1];return a(u(r),u(o)).map(function(t){1==e[t[0]][t[1]]&&i.push([t[0],t[1]])}),i},decideState:h,findNeighboursPositions:v,extractSize:function(t){var e=t.bottomRight,n=t.topLeft;return[e[0]-n[0]+1,e[1]-n[1]+1]},updateWorld:function(t,e){return e.map(function(e){m(t,e)&&(t[e[0]][e[1]]=1)}),t},isValidPosition:m,countAliveNeighbours:b,generateNextWorld:function(t){for(var e=t.dimensions,n=t.world,i=f(e),r=0;r<e[0];r++)for(var a=0;a<e[1];a++){var o=n[r][a],u=b(n,[r,a]);i[r][a]=h(u,o)}return i},extractValidPosition:function(t,e,n){var i={"+":s,"-":l};return t.map(function(t){return i[n](t,e)})},generateRow:d}},17:function(t,e){var n=function(t,e){var n=[];return t.forEach(function(t){e.forEach(function(e){n.push([t,e])})}),n},i=function(t,e){return t=Math.max(0,t),new Array(t).fill(e).join("")};t.exports={cartesianSquare:function(t){return n(t,t)},cartesianProduct:n,addPositions:function(t,e){return[t[0]+e[0],t[1]+e[1]]},subtractPositions:function(t,e){return[t[0]-e[0],t[1]-e[1]]},justifyLength:function(t,e){var n=e-t.toString().length;return t+i(n," ")},repeatSymbol:i,range:function(t){var e=0;return new Array(t).fill("*").map(function(t){return e++})},isNotOrigin:function(t){return!(0==t[0]&&0==t[1])}}},18:function(t,e,n){"use strict";n.r(e);var i=n(3),r=n(4),a=n(7),o=n(5),u=n(8),l=n(1),c=n(0),s=n.n(c),f=n(6),d=n.n(f),v=(n(15),n(16)),m=v.makeWorld,p=(v.findNeighboursPositions,v.findAliveposition),b=v.extractSize,h=v.updateWorld,g=v.extractValidPosition,y=v.generateNextWorld,C=function(t,e){var n=b(e),i=m(n),r=e.topLeft;e.bottomRight;t=g(t,r,"-");var a={world:i=h(i,t),dimensions:n};a.world=y(a);var o=p(a);return g(o,r,"+")},w=function(t){function e(t){var n;return Object(i.a)(this,e),(n=Object(a.a)(this,Object(o.a)(e).call(this,t))).RenderTable=function(){for(var t=[],e=0;e<15;e++){var i=[];n.createRow(i,e),t.push(s.a.createElement("tr",{key:e},i))}return t},n.updateCell=n.updateCell.bind(Object(l.a)(Object(l.a)(n))),n.initializeAliveCell=n.initializeAliveCell.bind(Object(l.a)(Object(l.a)(n))),n.startGame=n.startGame.bind(Object(l.a)(Object(l.a)(n))),n.bounds={topLeft:[0,0],bottomRight:[15,15]},n.state={aliveCells:[]},n}return Object(u.a)(e,t),Object(r.a)(e,[{key:"startGame",value:function(){setInterval(this.updateCell,1e3)}},{key:"createRow",value:function(t,e){for(var n=0;n<15;n++)t.push(s.a.createElement("td",{className:"column",key:e+"_"+n,id:e+"_"+n,onClick:this.initializeAliveCell}))}},{key:"initializeAliveCell",value:function(t){var e=t.target.id.split("_");document.getElementById(t.target.id).className="aliveCell";var n=this.state.aliveCells;n.push(e),this.setState({aliveCells:n})}},{key:"updateCell",value:function(){this.state.aliveCells.map(function(t){document.getElementById(t[0]+"_"+t[1]).className="column"});var t=C(this.state.aliveCells,this.bounds);t.map(function(t){document.getElementById(t[0]+"_"+t[1]).className="aliveCell"}),this.setState({aliveCells:t})}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("table",null,s.a.createElement("tbody",null,this.RenderTable())),s.a.createElement("button",{onClick:this.startGame},"Start"))}}]),e}(s.a.Component);d.a.render(s.a.createElement(w,null),document.getElementById("root"))},9:function(t,e,n){t.exports=n(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.d28ed0c6.chunk.js.map