(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{10:function(e){e.exports={width:240,height:400,assets:[{name:"I",block:"./assets/sprites/block_cyan.png",matrix:[[0,0,0,0],[1,1,1,1],[0,0,0,0],[0,0,0,0]]},{name:"J",url:"./assets/sprites/block_blue.png",matrix:[[0,0,0],[1,0,0],[1,1,1]]},{name:"L",url:"./assets/sprites/block_orange.png",matrix:[[0,0,0],[0,0,1],[1,1,1]]},{name:"O",url:"./assets/sprites/block_yellow.png",matrix:[[1,1],[1,1]]},{name:"S",url:"./assets/sprites/block_green.png",matrix:[[0,1,1],[1,1,0],[0,0,0]]},{name:"T",url:"./assets/sprites/block_purple.png",matrix:[[0,1,0],[1,1,1],[0,0,0]]},{name:"Z",url:"./assets/sprites/block_red.png",matrix:[[1,1,0],[0,1,1],[0,0,0]]}]}},194:function(e,n,t){"use strict";t.r(n);var s=t(17),a=t(90),r=t.n(a),i=t(10);function o(e,n){for(var t=0;t<n.length;t++){var s=n[t];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}var l=new s.Application({width:i.width,height:i.height,antialias:!0,transparent:!1,resolution:1}),u=s.loader,p=s.loader.resources,c=s.Sprite;new(function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.initLayout(),r.a}var n,t,s;return n=e,(t=[{key:"initLayout",value:function(){document.getElementById("app").appendChild(l.renderer.view),u.add([i.assets.map(function(e){return e})]).on("progress",this.loadProgressHandler).load(this.setup.bind(this))}},{key:"loadProgressHandler",value:function(e,n){console.log("loading: ",n)}},{key:"setup",value:function(){e="J",i.assets.find(function(n){return n.name===e.toUpperCase()});var e,n=new c(p.J.texture);n.x=10,n.y=20,console.log("setup",n),l.stage.addChild(n)}}])&&o(n.prototype,t),s&&o(n,s),e}())},90:function(e,n,t){},91:function(e,n,t){e.exports=t(194)}},[[91,2,0]]]);