(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{exbY:function(t,o,r){"use strict";r.r(o);var e=r("dI71"),i=r("q1tI"),n=r.n(i),a=r("Lw+3"),s=r("lxDd"),c=r("rePB"),u=(r("i8i4"),r("pLLy")),p=r("18Jy"),m=r("5VxJ"),h=r("hUFJ"),l=r("bZ2V"),d={name:"LAS",id:"las",module:"las",version:"3.0.11",worker:!0,extensions:["las","laz"],mimeTypes:["application/octet-stream"],text:!0,binary:!0,tests:["LAS"],options:{las:{fp64:!1,skip:1,colorDepth:8}}};function b(t,o){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);o&&(e=e.filter((function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable}))),r.push.apply(r,e)}return r}function v(t){for(var o=1;o<arguments.length;o++){var r=null!=arguments[o]?arguments[o]:{};o%2?b(Object(r),!0).forEach((function(o){Object(c.a)(t,o,r[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(r,o))}))}return t}var f={target:[0,0,0],rotationX:0,rotationOrbit:0,minZoom:0,maxZoom:10,zoom:1},O=new p.a(["rotationOrbit"]);function w(t){var o=t.onLoad,r=Object(i.useState)(f),e=r[0],a=r[1],s=Object(i.useState)(!1),c=s[0],p=s[1];Object(i.useEffect)((function(){if(c){!function t(){a((function(o){return v(v({},o),{},{rotationOrbit:o.rotationOrbit+120,transitionDuration:2400,transitionInterpolator:O,onTransitionEnd:t})}))}()}}),[c]);var b=[new l.a({id:"laz-point-cloud-layer",data:"https://raw.githubusercontent.com/visgl/deck.gl-data/master/examples/point-cloud-laz/indoor.0.1.laz",onDataLoad:function(t){var r=t.header;if(r.boundingBox){var e=r.boundingBox,i=e[0],n=e[1];a(v(v({},f),{},{target:[(i[0]+n[0])/2,(i[1]+n[1])/2,(i[2]+n[2])/2],zoom:Math.log2(window.innerWidth/(n[0]-i[0]))-1})),p(!0)}o&&o({count:r.vertexCount,progress:1})},coordinateSystem:m.a.CARTESIAN,getNormal:[0,1,0],getColor:[255,255,255],opacity:.5,pointSize:.5,loaders:[d]})];return n.a.createElement(u.a,{views:new h.a({orbitAxis:"Y",fov:50}),viewState:e,controller:!0,onViewStateChange:function(t){return a(t.viewState)},layers:b,parameters:{clearColor:[.93,.86,.81,1]}})}var g=r("CtqP"),P=function(t){function o(){for(var o,r=arguments.length,e=new Array(r),i=0;i<r;i++)e[i]=arguments[i];return(o=t.call.apply(t,[this].concat(e))||this)._onLoad=function(t){o.props.onStateChange(t)},o}return Object(e.a)(o,t),o.renderInfo=function(t){return n.a.createElement("div",null,n.a.createElement("p",null,"This demo may not work on mobile devices due to browser limitations."),n.a.createElement("p",null,"Data source: ",n.a.createElement("a",{href:"https://kaarta.com"},"kaarta.com")),n.a.createElement("div",{className:"stat"},"No. of Points",n.a.createElement("b",null,Object(a.b)(t.count))))},o.prototype.render=function(){return n.a.createElement(w,{onLoad:this._onLoad})},o}(i.Component);P.title="3D Indoor Scan",P.code=s.b+"/examples/website/point-cloud";o.default=Object(g.a)(P)},hUFJ:function(t,o,r){"use strict";r.d(o,"a",(function(){return v}));var e=r("vuIU"),i=r("rePB"),n=r("dI71"),a=r("hAA0"),s=r("YiiH"),c=r("1+Ew"),u=r("R25c"),p=r("pNJ/");function m(t,o){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);o&&(e=e.filter((function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable}))),r.push.apply(r,e)}return r}function h(t){for(var o=1;o<arguments.length;o++){var r=null!=arguments[o]?arguments[o]:{};o%2?m(Object(r),!0).forEach((function(o){Object(i.a)(t,o,r[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(r,o))}))}return t}var l=Math.PI/180;function d(t){var o=t.height,r=t.fovy,e=t.orbitAxis,i=t.rotationX,n=t.rotationOrbit,a=t.zoom,s=.5/Math.tan(r*l/2),u="Z"===e?[0,0,1]:[0,1,0],p="Z"===e?[0,-s,0]:[0,0,s],m=(new c.a).lookAt({eye:p,up:u});m.rotateX(i*l),"Z"===e?m.rotateZ(n*l):m.rotateY(n*l);var h=Math.pow(2,a)/(o||1);return m.scale(h),m}var b=function(t){function o(o){var r,e=o.height,i=o.fovy,n=o.orbitAxis,a=o.target,s=void 0===a?[0,0,0]:a,c=o.rotationX,u=void 0===c?0:c,p=o.rotationOrbit,m=void 0===p?0:p,l=o.zoom,b=void 0===l?0:l;return(r=t.call(this,h(h({},o),{},{longitude:null,viewMatrix:d({height:e,fovy:i,orbitAxis:n,rotationX:u,rotationOrbit:m,zoom:b}),fovy:i,position:s,zoom:b}))||this).projectedCenter=r.project(r.center),r}Object(n.a)(o,t);var r=o.prototype;return r.unproject=function(t,o){var r=(void 0===o?{}:o).topLeft,e=void 0===r||r,i=t[0],n=t[1],a=t[2],s=void 0===a?this.projectedCenter[2]:a,c=e?n:this.height-n,p=Object(u.m)([i,c,s],this.pixelUnprojectionMatrix);return[p[0],p[1],p[2]]},r.panByPosition=function(t,o){var r=this.project(t),e=[this.width/2+r[0]-o[0],this.height/2+r[1]-o[1],this.projectedCenter[2]];return{target:this.unproject(e)}},o}(s.a),v=function(t){function o(o){void 0===o&&(o={});var r=o.orbitAxis,e=void 0===r?"Z":r;return t.call(this,h(h({},o),{},{orbitAxis:e,type:b}))||this}return Object(n.a)(o,t),Object(e.a)(o,[{key:"controller",get:function(){return this._getControllerProps({type:p.b})}}]),o}(a.a);v.displayName="OrbitView"},"pNJ/":function(t,o,r){"use strict";r.d(o,"a",(function(){return l})),r.d(o,"b",(function(){return d}));var e=r("vuIU"),i=r("rePB"),n=r("dI71"),a=r("1+Ew"),s=r("lKxY"),c=r("rBR8"),u=r("kDl2");function p(t,o){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);o&&(e=e.filter((function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable}))),r.push.apply(r,e)}return r}function m(t){for(var o=1;o<arguments.length;o++){var r=null!=arguments[o]?arguments[o]:{};o%2?p(Object(r),!0).forEach((function(o){Object(i.a)(t,o,r[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(r,o))}))}return t}var h={rotationX:0,rotationOrbit:0,zoom:0,target:[0,0,0],minRotationX:-90,maxRotationX:90,minZoom:-1/0,maxZoom:1/0},l=function(t){function o(o){var r,e=o.makeViewport,i=o.width,n=o.height,a=o.rotationX,s=void 0===a?h.rotationX:a,c=o.rotationOrbit,u=void 0===c?h.rotationOrbit:c,p=o.target,m=void 0===p?h.target:p,l=o.zoom,d=void 0===l?h.zoom:l,b=o.minRotationX,v=void 0===b?h.minRotationX:b,f=o.maxRotationX,O=void 0===f?h.maxRotationX:f,w=o.minZoom,g=void 0===w?h.minZoom:w,P=o.maxZoom,j=void 0===P?h.maxZoom:P,y=o.startPanPosition,_=o.startRotatePos,S=o.startRotationX,Z=o.startRotationOrbit,X=o.startZoomPosition,x=o.startZoom;return(r=t.call(this,{width:i,height:n,rotationX:s,rotationOrbit:u,target:m,zoom:d,minRotationX:v,maxRotationX:O,minZoom:g,maxZoom:j})||this)._state={startPanPosition:y,startRotatePos:_,startRotationX:S,startRotationOrbit:Z,startZoomPosition:X,startZoom:x},r.makeViewport=e,r}Object(n.a)(o,t);var r=o.prototype;return r.panStart=function(t){var o=t.pos;return this._getUpdatedState({startPanPosition:this._unproject(o)})},r.pan=function(t){var o=t.pos,r=t.startPosition,e=this._state.startPanPosition||r;if(!e)return this;var i=this.makeViewport(this._viewportProps).panByPosition(e,o);return this._getUpdatedState(i)},r.panEnd=function(){return this._getUpdatedState({startPanPosition:null})},r.rotateStart=function(t){var o=t.pos;return this._getUpdatedState({startRotatePos:o,startRotationX:this._viewportProps.rotationX,startRotationOrbit:this._viewportProps.rotationOrbit})},r.rotate=function(t){var o,r=t.pos,e=t.deltaAngleX,i=void 0===e?0:e,n=t.deltaAngleY,a=void 0===n?0:n,s=this._state,c=s.startRotatePos,u=s.startRotationX,p=s.startRotationOrbit,m=this._viewportProps,h=m.width,l=m.height;if(!c||!Number.isFinite(u)||!Number.isFinite(p))return this;if(r){var d=(r[0]-c[0])/h;(u<-90||u>90)&&(d*=-1),o={rotationX:u+180*((r[1]-c[1])/l),rotationOrbit:p+180*d}}else o={rotationX:u+a,rotationOrbit:p+i};return this._getUpdatedState(o)},r.rotateEnd=function(){return this._getUpdatedState({startRotationX:null,startRotationOrbit:null})},r.shortestPathFrom=function(t){var o=t.getViewportProps(),r=m({},this._viewportProps),e=r.rotationOrbit;return Math.abs(e-o.rotationOrbit)>180&&(r.rotationOrbit=e<0?e+360:e-360),r},r.zoomStart=function(t){var o=t.pos;return this._getUpdatedState({startZoomPosition:this._unproject(o),startZoom:this._viewportProps.zoom})},r.zoom=function(t){var o=t.pos,r=t.startPos,e=t.scale,i=this._viewportProps.zoom,n=this._state,a=n.startZoom,s=n.startZoomPosition;Number.isFinite(a)||(a=i,s=this._unproject(r)||this._unproject(o));var c=this._calculateNewZoom({scale:e,startZoom:a}),u=this.makeViewport(m(m({},this._viewportProps),{},{zoom:c}));return this._getUpdatedState(m({zoom:c},u.panByPosition(s,o)))},r.zoomEnd=function(){return this._getUpdatedState({startZoomPosition:null,startZoom:null})},r.zoomIn=function(t){return void 0===t&&(t=2),this._getUpdatedState({zoom:this._calculateNewZoom({scale:t})})},r.zoomOut=function(t){return void 0===t&&(t=2),this._getUpdatedState({zoom:this._calculateNewZoom({scale:1/t})})},r.moveLeft=function(t){return void 0===t&&(t=50),this._panFromCenter([-t,0])},r.moveRight=function(t){return void 0===t&&(t=50),this._panFromCenter([t,0])},r.moveUp=function(t){return void 0===t&&(t=50),this._panFromCenter([0,-t])},r.moveDown=function(t){return void 0===t&&(t=50),this._panFromCenter([0,t])},r.rotateLeft=function(t){return void 0===t&&(t=15),this._getUpdatedState({rotationOrbit:this._viewportProps.rotationOrbit-t})},r.rotateRight=function(t){return void 0===t&&(t=15),this._getUpdatedState({rotationOrbit:this._viewportProps.rotationOrbit+t})},r.rotateUp=function(t){return void 0===t&&(t=10),this._getUpdatedState({rotationX:this._viewportProps.rotationX-t})},r.rotateDown=function(t){return void 0===t&&(t=10),this._getUpdatedState({rotationX:this._viewportProps.rotationX+t})},r._unproject=function(t){var o=this.makeViewport(this._viewportProps);return t&&o.unproject(t)},r._calculateNewZoom=function(t){var o=t.scale,r=t.startZoom,e=this._viewportProps,i=e.maxZoom,n=e.minZoom;Number.isFinite(r)||(r=this._viewportProps.zoom);var s=r+Math.log2(o);return Object(a.d)(s,n,i)},r._panFromCenter=function(t){var o=this._viewportProps,r=o.width,e=o.height,i=o.target;return this.pan({startPosition:i,pos:[r/2+t[0],e/2+t[1]]})},r._getUpdatedState=function(t){return new o(m(m(m({},this._viewportProps),this._state),t))},r._applyConstraints=function(t){var o=t.maxZoom,r=t.minZoom,e=t.zoom,i=t.maxRotationX,n=t.minRotationX,s=t.rotationOrbit;return t.zoom=Object(a.d)(e,r,o),t.rotationX=Object(a.d)(t.rotationX,n,i),(s<-180||s>180)&&(t.rotationOrbit=Object(u.e)(s+180,360)-180),t},o}(c.a),d=function(t){function o(o){return t.call(this,l,o)||this}return Object(n.a)(o,t),Object(e.a)(o,[{key:"linearTransitionProps",get:function(){return["target","zoom","rotationX","rotationOrbit"]}}]),o}(s.a)}}]);