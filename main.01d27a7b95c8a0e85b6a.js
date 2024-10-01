(()=>{"use strict";var e,t={391:(e,t,r)=>{var n,a=r(821),s=r(880),c=r(548),l=r(540),i=r(338),o=r(164);function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u.apply(null,arguments)}const d=function(e){return l.createElement("svg",u({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 10 14"},e),n||(n=l.createElement("path",{stroke:"#42567A",strokeWidth:2,d:"M8.5.75 2.25 7l6.25 6.25"})))};var m;function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},f.apply(null,arguments)}const v=function(e){return l.createElement("svg",f({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 10 14"},e),m||(m=l.createElement("path",{stroke:"#42567A",strokeWidth:2,d:"M1.5.75 7.75 7 1.5 13.25"})))};var p="circular-carousel__active--eFG22",g="circular-carousel__date--fz0rt",h="circular-carousel__item--QlNQU",_="circular-carousel__wrapper--fxReq";s.os.registerPlugin(a.L,c.r);var E=function(e){var t=e.className,r=e.data,n=void 0===r?[]:r,i=e.value,u=void 0===i?0:i,m=e.circleTimeline,f=e.onChange,E=(0,l.useRef)(null),b=(0,l.useRef)(null),w=(0,l.useRef)(null),N=0===u||n.length<2,k=u===n.length-1||n.length<2,x=(0,l.useCallback)((function(){var e=+n[u].list[0].date,t=+n[u].list[n[u].list.length-1].date;s.os.to(b.current,{textContent:e,duration:1,ease:"power1.in",snap:{textContent:1},stagger:{each:1,onUpdate:function(){this.targets()[0].innerHTML=this.targets()[0].textContent}}}),s.os.to(w.current,{textContent:t,duration:1,ease:"power1.in",snap:{textContent:1},stagger:{each:1,onUpdate:function(){this.targets()[0].innerHTML=this.targets()[0].textContent}}})}),[n,u,b.current,w.current]),y=(0,l.useCallback)((function(){b.current.textContent=n[u].list[0].date,w.current.textContent=n[u].list[n[u].list.length-1].date}),[]);return(0,a.L)((function(){y()}),{scope:E,dependencies:[y]}),(0,a.L)((function(){x()}),{scope:E,dependencies:[x]}),(0,a.L)((function(){var e=m;if(e){var t=c.r.convertToPath("#holder",!1)[0];t.id="circlePath",document.querySelector("svg").prepend(t);var r=s.os.utils.toArray(".".concat(h)),n=r.length,a=1/n,l=s.os.utils.wrap(0,1),i=s.os.utils.snap(a),o=s.os.utils.wrap(0,n),u={item:0};r[0].classList.add(p),s.os.set(r,{motionPath:{path:t,align:t,alignOrigin:[.5,.5],end:function(e){return s.os.utils.wrap(0,1,e/r.length-.17)}}}),e.to(".".concat(_),{rotation:360,transformOrigin:"center",duration:1,ease:"none"}),e.to(r,{rotation:"-=360",transformOrigin:"center",duration:1,ease:"none"},0),e.to(u,{item:n,duration:1,ease:"none",modifiers:{item:function(e){return o(n-Math.round(e))}}},0),r.forEach((function(e,t){e.addEventListener("click",(function(){var e=u.item,s=t;if(t!==e){document.querySelector(".".concat(p)).classList.remove(p),r[s].classList.add(p);var c=e-t;if(Math.abs(c)<n/2)d(c*a);else{var l=n-Math.abs(c);d(e>t?l*-a:l*a)}}}))})),document.getElementById("next").addEventListener("click",(function(){return d(-a)})),document.getElementById("prev").addEventListener("click",(function(){return d(a)}))}function d(t){var n=e.progress();e.progress(l(i(e.progress()+t)));var a=u.item;e.progress(n);var c=document.querySelector(".".concat(p)),o=r[a];c.classList.remove(p),o.classList.add(p),s.os.to(e,{progress:i(e.progress()+t),modifiers:{progress:l}})}}),{scope:E,dependencies:[m]}),l.createElement("div",{className:(0,o.A)("circular-carousel__root--i_tGi",t),ref:E},l.createElement("div",{className:"circular-carousel__dates--ZgTZ6"},l.createElement("h2",{ref:b,className:g}),l.createElement("h2",{ref:w,className:g})),l.createElement("div",{className:_},n.map((function(e,t){return l.createElement("div",{className:h,key:e.label,onClick:function(){return f(t)}},l.createElement("button",{className:"circular-carousel__item-btn--aIBzb"}),l.createElement("h3",{className:"circular-carousel__subtitle--pRhc5"},t+1),e.label&&l.createElement("p",{className:"circular-carousel__label--nSwnI"},e.label))})),l.createElement("svg",{viewBox:"0 0 300 300",className:"circular-carousel__circle--l9Bxk"},l.createElement("circle",{id:"holder",className:"circular-carousel__st0--z_vy5",cx:"151",cy:"151",r:"268"}))),l.createElement("div",{className:"circular-carousel__controls--d5Af1"},l.createElement("div",{className:"circular-carousel__counter--Vftb5"},"0".concat(u+1,"/0").concat(n[u].list.length)),l.createElement("div",{className:"circular-carousel__buttons--JQD3g"},l.createElement("button",{className:"circular-carousel__prev-btn--BSL5k",id:"prev",disabled:N,onClick:function(){f(u-1)}},l.createElement(d,null)),l.createElement("button",{className:"circular-carousel__next-btn--Aw203",id:"next",disabled:k,onClick:function(){f(u+1)}},l.createElement(v,null)))))},b=r(848),w=r(325),N=function(e){var t=e.list,r=void 0===t?[]:t,n=e.className,a=(0,l.useState)(!1),s=a[0],c=a[1],i=(0,l.useRef)(),u=(0,l.useRef)(null),m=(0,l.useState)(!0),f=m[0],p=m[1],g=(0,l.useState)(!1),h=g[0],_=g[1];return(0,l.useEffect)((function(){c(!0),setTimeout((function(){c(!1)}),1e3)}),[r]),l.createElement("div",{className:(0,o.A)("historical-dates-slider__root--E3N1X",n),ref:u},l.createElement(w.RC,{onSlideChange:function(e){p(e.isBeginning),_(e.isEnd)},modules:[b.Vx,b.dK],onBeforeInit:function(e){i.current=e},breakpoints:{300:{slidesPerView:2,spaceBetween:0},600:{slidesPerView:3,spaceBetween:50},768:{slidesPerView:2,spaceBetween:50},1024:{slidesPerView:3,spaceBetween:50}}},r.map((function(e){var t;return l.createElement(w.qr,{key:e.id},l.createElement("div",{className:(0,o.A)("historical-dates-slider__slide--NC4u6",(t={},t["historical-dates-slider__show--Ww_by"]=!s,t))},l.createElement("p",{className:"historical-dates-slider__date--OPCKI"},e.date),l.createElement("p",{className:"historical-dates-slider__description--A8HDY"},e.description)))}))),!f&&l.createElement("button",{className:"historical-dates-slider__swiper-button-prev--UXPCX",onClick:function(){var e;return null===(e=i.current)||void 0===e?void 0:e.slidePrev()}},l.createElement(d,null)),!h&&l.createElement("button",{className:"historical-dates-slider__swiper-button-next--EkbPX",onClick:function(){var e;return null===(e=i.current)||void 0===e?void 0:e.slideNext()}},l.createElement(v,null)))},k=r(844),x=[{from:"1950",to:"1960"},{from:"1961",to:"1970"},{from:"1971",to:"1980"},{from:"1981",to:"1990"},{from:"1991",to:"2000"},{from:"2001",to:"2010"}].map((function(e){return{label:k.a.lorem.word(),list:Array.from({length:6},(function(){return{id:k.a.string.uuid(),date:k.a.date.between(e).getFullYear(),description:k.a.lorem.sentence(12)}})).sort((function(e,t){return new Date(e.date).getTime()-new Date(t.date).getTime()}))}}));const y=function(){var e=(0,l.useState)(0),t=e[0],r=e[1],n=(0,l.useState)(),c=n[0],i=n[1];return(0,a.L)((function(){var e=s.Ay.timeline({paused:!0,reversed:!0});i(e)}),{dependencies:[]}),l.createElement("div",{className:"src__root--HIsVg"},l.createElement("h1",{className:"src__title--cDkF1"},"Исторические",l.createElement("br",null),"даты"),l.createElement(E,{className:"src__carousel--jbUJl",data:x,onChange:r,value:t,circleTimeline:c}),l.createElement(N,{list:x[t].list,className:"src__slider--urWIU",circleTimeline:c}))};s.Ay.registerPlugin(a.L,c.r),i.createRoot(document.getElementById("root")).render(l.createElement(l.StrictMode,null,l.createElement(y,null)))}},r={};function n(e){var a=r[e];if(void 0!==a)return a.exports;var s=r[e]={exports:{}};return t[e](s,s.exports,n),s.exports}n.m=t,e=[],n.O=(t,r,a,s)=>{if(!r){var c=1/0;for(u=0;u<e.length;u++){for(var[r,a,s]=e[u],l=!0,i=0;i<r.length;i++)(!1&s||c>=s)&&Object.keys(n.O).every((e=>n.O[e](r[i])))?r.splice(i--,1):(l=!1,s<c&&(c=s));if(l){e.splice(u--,1);var o=a();void 0!==o&&(t=o)}}return t}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[r,a,s]},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={792:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var a,s,[c,l,i]=r,o=0;if(c.some((t=>0!==e[t]))){for(a in l)n.o(l,a)&&(n.m[a]=l[a]);if(i)var u=i(n)}for(t&&t(r);o<c.length;o++)s=c[o],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(u)},r=self.webpackChunkinterview_task_only=self.webpackChunkinterview_task_only||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var a=n.O(void 0,[692],(()=>n(391)));a=n.O(a)})();
//# sourceMappingURL=main.01d27a7b95c8a0e85b6a.js.map