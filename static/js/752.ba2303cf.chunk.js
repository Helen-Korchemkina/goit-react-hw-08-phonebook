"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[752],{6140:function(t,n,e){e.d(n,{x7:function(){return yt},ZP:function(){return Tt},Am:function(){return U}});var r=e(2791),i=e(4942),o={data:""},a=function(t){return"object"==typeof window?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||o},s=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,u=/\/\*[^]*?\*\/|  +/g,c=/\n+/g,f=function t(n,e){var r="",i="",o="",a=function(a){var u=n[a];"@"==a[0]?"i"==a[1]?r=a+" "+u+";":i+="f"==a[1]?t(u,a):a+"{"+t(u,"k"==a[1]?"":e)+"}":"object"==typeof u?i+=t(u,e?e.replace(/([^,])+/g,(function(t){return a.replace(/(^:.*)|([^,])+/g,(function(n){return/&/.test(n)?n.replace(/&/g,t):t?t+" "+n:n}))})):a):null!=u&&(a=/^--/.test(a)?a:a.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=t.p?t.p(a,u):a+":"+u+";"),s=a};for(var s in n)a(s);return r+(e&&o?e+"{"+o+"}":o)+i},l={},d=function t(n){if("object"==typeof n){var e="";for(var r in n)e+=r+t(n[r]);return e}return n},p=function(t,n,e,r,o){var a=d(t),p=l[a]||(l[a]=function(t){for(var n=0,e=11;n<t.length;)e=101*e+t.charCodeAt(n++)>>>0;return"go"+e}(a));if(!l[p]){var m=a!==t?t:function(t){for(var n,e,r=[{}];n=s.exec(t.replace(u,""));)n[4]?r.shift():n[3]?(e=n[3].replace(c," ").trim(),r.unshift(r[0][e]=r[0][e]||{})):r[0][n[1]]=n[2].replace(c," ").trim();return r[0]}(t);l[p]=f(o?(0,i.Z)({},"@keyframes "+p,m):m,e?"":"."+p)}return function(t,n,e){-1==n.data.indexOf(t)&&(n.data=e?t+n.data:n.data+t)}(l[p],n,r),p},m=function(t,n,e){return t.reduce((function(t,r,i){var o=n[i];if(o&&o.call){var a=o(e),s=a&&a.props&&a.props.className||/^go/.test(a)&&a;o=s?"."+s:a&&"object"==typeof a?a.props?"":f(a,""):!1===a?"":a}return t+r+(null==o?"":o)}),"")};function v(t){var n=this||{},e=t.call?t(n.p):t;return p(e.unshift?e.raw?m(e,[].slice.call(arguments,1),n.p):e.reduce((function(t,e){return Object.assign(t,e&&e.call?e(n.p):e)}),{}):e,a(n.target),n.g,n.o,n.k)}v.bind({g:1});var g,b,h,y=v.bind({k:1});function T(t,n){var e=this||{};return function(){var r=arguments;function i(o,a){var s=Object.assign({},o),u=s.className||i.className;e.p=Object.assign({theme:b&&b()},s),e.o=/ *go\d+/.test(u),s.className=v.apply(e,r)+(u?" "+u:""),n&&(s.ref=a);var c=t;return t[0]&&(c=s.as||t,delete s.as),h&&c[0]&&h(s),g(c,s)}return n?n(i):i}}function x(){return x=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},x.apply(this,arguments)}function E(t,n){return n||(n=t.slice(0)),t.raw=n,t}var S,w=function(t,n){return function(t){return"function"===typeof t}(t)?t(n):t},A=function(){var t=0;return function(){return(++t).toString()}}(),O=function(){var t=void 0;return function(){if(void 0===t&&"undefined"!==typeof window){var n=matchMedia("(prefers-reduced-motion: reduce)");t=!n||n.matches}return t}}();!function(t){t[t.ADD_TOAST=0]="ADD_TOAST",t[t.UPDATE_TOAST=1]="UPDATE_TOAST",t[t.UPSERT_TOAST=2]="UPSERT_TOAST",t[t.DISMISS_TOAST=3]="DISMISS_TOAST",t[t.REMOVE_TOAST=4]="REMOVE_TOAST",t[t.START_PAUSE=5]="START_PAUSE",t[t.END_PAUSE=6]="END_PAUSE"}(S||(S={}));var _=new Map,D=function(t){if(!_.has(t)){var n=setTimeout((function(){_.delete(t),j({type:S.REMOVE_TOAST,toastId:t})}),1e3);_.set(t,n)}},P=function t(n,e){switch(e.type){case S.ADD_TOAST:return x({},n,{toasts:[e.toast].concat(n.toasts).slice(0,20)});case S.UPDATE_TOAST:return e.toast.id&&function(t){var n=_.get(t);n&&clearTimeout(n)}(e.toast.id),x({},n,{toasts:n.toasts.map((function(t){return t.id===e.toast.id?x({},t,e.toast):t}))});case S.UPSERT_TOAST:var r=e.toast;return n.toasts.find((function(t){return t.id===r.id}))?t(n,{type:S.UPDATE_TOAST,toast:r}):t(n,{type:S.ADD_TOAST,toast:r});case S.DISMISS_TOAST:var i=e.toastId;return i?D(i):n.toasts.forEach((function(t){D(t.id)})),x({},n,{toasts:n.toasts.map((function(t){return t.id===i||void 0===i?x({},t,{visible:!1}):t}))});case S.REMOVE_TOAST:return void 0===e.toastId?x({},n,{toasts:[]}):x({},n,{toasts:n.toasts.filter((function(t){return t.id!==e.toastId}))});case S.START_PAUSE:return x({},n,{pausedAt:e.time});case S.END_PAUSE:var o=e.time-(n.pausedAt||0);return x({},n,{pausedAt:void 0,toasts:n.toasts.map((function(t){return x({},t,{pauseDuration:t.pauseDuration+o})}))})}},N=[],M={toasts:[],pausedAt:void 0},j=function(t){M=P(M,t),N.forEach((function(t){t(M)}))},k={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},C=function(t){return function(n,e){var r=function(t,n,e){return void 0===n&&(n="blank"),x({createdAt:Date.now(),visible:!0,type:n,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0},e,{id:(null==e?void 0:e.id)||A()})}(n,t,e);return j({type:S.UPSERT_TOAST,toast:r}),r.id}},U=function(t,n){return C("blank")(t,n)};U.error=C("error"),U.success=C("success"),U.loading=C("loading"),U.custom=C("custom"),U.dismiss=function(t){j({type:S.DISMISS_TOAST,toastId:t})},U.remove=function(t){return j({type:S.REMOVE_TOAST,toastId:t})},U.promise=function(t,n,e){var r=U.loading(n.loading,x({},e,null==e?void 0:e.loading));return t.then((function(t){return U.success(w(n.success,t),x({id:r},e,null==e?void 0:e.success)),t})).catch((function(t){U.error(w(n.error,t),x({id:r},e,null==e?void 0:e.error))})),t};var I=function(t){var n=function(t){void 0===t&&(t={});var n=(0,r.useState)(M),e=n[0],i=n[1];(0,r.useEffect)((function(){return N.push(i),function(){var t=N.indexOf(i);t>-1&&N.splice(t,1)}}),[e]);var o=e.toasts.map((function(n){var e,r,i;return x({},t,t[n.type],n,{duration:n.duration||(null==(e=t[n.type])?void 0:e.duration)||(null==(r=t)?void 0:r.duration)||k[n.type],style:x({},t.style,null==(i=t[n.type])?void 0:i.style,n.style)})}));return x({},e,{toasts:o})}(t),e=n.toasts,i=n.pausedAt;(0,r.useEffect)((function(){if(!i){var t=Date.now(),n=e.map((function(n){if(n.duration!==1/0){var e=(n.duration||0)+n.pauseDuration-(t-n.createdAt);if(!(e<0))return setTimeout((function(){return U.dismiss(n.id)}),e);n.visible&&U.dismiss(n.id)}}));return function(){n.forEach((function(t){return t&&clearTimeout(t)}))}}}),[e,i]);var o=(0,r.useMemo)((function(){return{startPause:function(){j({type:S.START_PAUSE,time:Date.now()})},endPause:function(){i&&j({type:S.END_PAUSE,time:Date.now()})},updateHeight:function(t,n){return j({type:S.UPDATE_TOAST,toast:{id:t,height:n}})},calculateOffset:function(t,n){var r,i=n||{},o=i.reverseOrder,a=void 0!==o&&o,s=i.gutter,u=void 0===s?8:s,c=i.defaultPosition,f=e.filter((function(n){return(n.position||c)===(t.position||c)&&n.height})),l=f.findIndex((function(n){return n.id===t.id})),d=f.filter((function(t,n){return n<l&&t.visible})).length,p=(r=f.filter((function(t){return t.visible}))).slice.apply(r,a?[d+1]:[0,d]).reduce((function(t,n){return t+(n.height||0)+u}),0);return p}}}),[e,i]);return{toasts:e,handlers:o}};function R(){var t=E(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n\n  &:after,\n  &:before {\n    content: '';\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 150ms;\n    position: absolute;\n    border-radius: 3px;\n    opacity: 0;\n    background: ",";\n    bottom: 9px;\n    left: 4px;\n    height: 2px;\n    width: 12px;\n  }\n\n  &:before {\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 180ms;\n    transform: rotate(90deg);\n  }\n"]);return R=function(){return t},t}function z(){var t=E(["\nfrom {\n  transform: scale(0) rotate(90deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(90deg);\n\topacity: 1;\n}"]);return z=function(){return t},t}function F(){var t=E(["\nfrom {\n  transform: scale(0);\n  opacity: 0;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]);return F=function(){return t},t}function V(){var t=E(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n transform: scale(1) rotate(45deg);\n  opacity: 1;\n}"]);return V=function(){return t},t}var L=y(V()),H=y(F()),Z=y(z()),B=T("div")(R(),(function(t){return t.primary||"#ff4b4b"}),L,H,(function(t){return t.secondary||"#fff"}),Z);function q(){var t=E(["\n  width: 12px;\n  height: 12px;\n  box-sizing: border-box;\n  border: 2px solid;\n  border-radius: 100%;\n  border-color: ",";\n  border-right-color: ",";\n  animation: "," 1s linear infinite;\n"]);return q=function(){return t},t}function Y(){var t=E(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]);return Y=function(){return t},t}var $=y(Y()),G=T("div")(q(),(function(t){return t.secondary||"#e0e0e0"}),(function(t){return t.primary||"#616161"}),$);function J(){var t=E(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n  &:after {\n    content: '';\n    box-sizing: border-box;\n    animation: "," 0.2s ease-out forwards;\n    opacity: 0;\n    animation-delay: 200ms;\n    position: absolute;\n    border-right: 2px solid;\n    border-bottom: 2px solid;\n    border-color: ",";\n    bottom: 6px;\n    left: 6px;\n    height: 10px;\n    width: 6px;\n  }\n"]);return J=function(){return t},t}function K(){var t=E(["\n0% {\n\theight: 0;\n\twidth: 0;\n\topacity: 0;\n}\n40% {\n  height: 0;\n\twidth: 6px;\n\topacity: 1;\n}\n100% {\n  opacity: 1;\n  height: 10px;\n}"]);return K=function(){return t},t}function Q(){var t=E(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(45deg);\n\topacity: 1;\n}"]);return Q=function(){return t},t}var W=y(Q()),X=y(K()),tt=T("div")(J(),(function(t){return t.primary||"#61d345"}),W,X,(function(t){return t.secondary||"#fff"}));function nt(){var t=E(["\n  position: relative;\n  transform: scale(0.6);\n  opacity: 0.4;\n  min-width: 20px;\n  animation: "," 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n"]);return nt=function(){return t},t}function et(){var t=E(["\nfrom {\n  transform: scale(0.6);\n  opacity: 0.4;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]);return et=function(){return t},t}function rt(){var t=E(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-width: 20px;\n  min-height: 20px;\n"]);return rt=function(){return t},t}function it(){var t=E(["\n  position: absolute;\n"]);return it=function(){return t},t}var ot=T("div")(it()),at=T("div")(rt()),st=y(et()),ut=T("div")(nt(),st),ct=function(t){var n=t.toast,e=n.icon,i=n.type,o=n.iconTheme;return void 0!==e?"string"===typeof e?(0,r.createElement)(ut,null,e):e:"blank"===i?null:(0,r.createElement)(at,null,(0,r.createElement)(G,Object.assign({},o)),"loading"!==i&&(0,r.createElement)(ot,null,"error"===i?(0,r.createElement)(B,Object.assign({},o)):(0,r.createElement)(tt,Object.assign({},o))))};function ft(){var t=E(["\n  display: flex;\n  justify-content: center;\n  margin: 4px 10px;\n  color: inherit;\n  flex: 1 1 auto;\n  white-space: pre-line;\n"]);return ft=function(){return t},t}function lt(){var t=E(["\n  display: flex;\n  align-items: center;\n  background: #fff;\n  color: #363636;\n  line-height: 1.3;\n  will-change: transform;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);\n  max-width: 350px;\n  pointer-events: auto;\n  padding: 8px 10px;\n  border-radius: 8px;\n"]);return lt=function(){return t},t}var dt=function(t){return"\n0% {transform: translate3d(0,"+-200*t+"%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n"},pt=function(t){return"\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,"+-150*t+"%,-1px) scale(.6); opacity:0;}\n"},mt=T("div",r.forwardRef)(lt()),vt=T("div")(ft()),gt=(0,r.memo)((function(t){var n=t.toast,e=t.position,i=t.style,o=t.children,a=null!=n&&n.height?function(t,n){var e=t.includes("top")?1:-1,r=O()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[dt(e),pt(e)],i=r[1];return{animation:n?y(r[0])+" 0.35s cubic-bezier(.21,1.02,.73,1) forwards":y(i)+" 0.4s forwards cubic-bezier(.06,.71,.55,1)"}}(n.position||e||"top-center",n.visible):{opacity:0},s=(0,r.createElement)(ct,{toast:n}),u=(0,r.createElement)(vt,Object.assign({},n.ariaProps),w(n.message,n));return(0,r.createElement)(mt,{className:n.className,style:x({},a,i,n.style)},"function"===typeof o?o({icon:s,message:u}):(0,r.createElement)(r.Fragment,null,s,u))}));function bt(){var t=E(["\n  z-index: 9999;\n  > * {\n    pointer-events: auto;\n  }\n"]);return bt=function(){return t},t}!function(t,n,e,r){f.p=n,g=t,b=e,h=r}(r.createElement);var ht=v(bt()),yt=function(t){var n=t.reverseOrder,e=t.position,i=void 0===e?"top-center":e,o=t.toastOptions,a=t.gutter,s=t.children,u=t.containerStyle,c=t.containerClassName,f=I(o),l=f.toasts,d=f.handlers;return(0,r.createElement)("div",{style:x({position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none"},u),className:c,onMouseEnter:d.startPause,onMouseLeave:d.endPause},l.map((function(t){var e,o=t.position||i,u=function(t,n){var e=t.includes("top"),r=e?{top:0}:{bottom:0},i=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return x({left:0,right:0,display:"flex",position:"absolute",transition:O()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:"translateY("+n*(e?1:-1)+"px)"},r,i)}(o,d.calculateOffset(t,{reverseOrder:n,gutter:a,defaultPosition:i})),c=t.height?void 0:(e=function(n){d.updateHeight(t.id,n.height)},function(t){t&&setTimeout((function(){var n=t.getBoundingClientRect();e(n)}))});return(0,r.createElement)("div",{ref:c,className:t.visible?ht:"",key:t.id,style:u},"custom"===t.type?w(t.message,t):s?s(t):(0,r.createElement)(gt,{toast:t,position:o}))})))},Tt=U},6373:function(t,n,e){e.d(n,{g4:function(){return a}});var r=e(2791),i=function(){return i=Object.assign||function(t){for(var n,e=1,r=arguments.length;e<r;e++)for(var i in n=arguments[e])Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i]);return t},i.apply(this,arguments)},o=function(t){return{display:t?"flex":"none"}},a=function(t){var n=t.height,e=void 0===n?80:n,a=t.width,s=void 0===a?80:a,u=t.radius,c=void 0===u?9:u,f=t.color,l=void 0===f?"green":f,d=t.ariaLabel,p=void 0===d?"three-dots-loading":d,m=t.wrapperStyle,v=t.wrapperClass,g=t.visible,b=void 0===g||g;return r.createElement("div",{style:i(i({},o(b)),m),className:v,"data-testid":"three-dots-loading"},r.createElement("svg",{width:s,height:e,viewBox:"0 0 120 30",xmlns:"http://www.w3.org/2000/svg",fill:l,"aria-label":p,"data-testid":"three-dots-svg"},r.createElement("circle",{cx:"15",cy:"15",r:Number(c)+6},r.createElement("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),r.createElement("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})),r.createElement("circle",{cx:"60",cy:"15",r:c,attributeName:"fill-opacity",from:"1",to:"0.3"},r.createElement("animate",{attributeName:"r",from:"9",to:"9",begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}),r.createElement("animate",{attributeName:"fill-opacity",from:"0.5",to:"0.5",begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"})),r.createElement("circle",{cx:"105",cy:"15",r:Number(c)+6},r.createElement("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),r.createElement("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"}))))}}}]);
//# sourceMappingURL=752.ba2303cf.chunk.js.map