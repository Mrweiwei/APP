(function(window){var svgSprite='<svg><symbol id="icon-yonghu" viewBox="0 0 1024 1024"><path d="M512 625.777778c-159.288889 0-284.444444-125.155556-284.444444-284.444445s125.155556-284.444444 284.444444-284.444444 284.444444 125.155556 284.444444 284.444444-125.155556 284.444444-284.444444 284.444445z m0-56.888889c125.155556 0 227.555556-102.4 227.555556-227.555556s-102.4-227.555556-227.555556-227.555555-227.555556 102.4-227.555556 227.555555 102.4 227.555556 227.555556 227.555556z" fill="#333333" ></path><path d="M56.888889 1024c0-250.311111 204.8-455.111111 455.111111-455.111111s455.111111 204.8 455.111111 455.111111h-56.888889c0-221.866667-176.355556-398.222222-398.222222-398.222222s-398.222222 176.355556-398.222222 398.222222H56.888889z" fill="#333333" ></path></symbol><symbol id="icon-icon-" viewBox="0 0 1024 1024"><path d="M864 384h-64V288c0-160-128-288-288-288S224 128 224 288v96H160c-89.6 0-160 70.4-160 160v320c0 89.6 70.4 160 160 160h704c89.6 0 160-70.4 160-160V544c0-89.6-70.4-160-160-160zM288 288c0-124.8 99.2-224 224-224s224 99.2 224 224v96H288V288z m672 576c0 54.4-41.6 96-96 96H160c-51.2 0-96-41.6-96-96V544c0-54.4 44.8-96 96-96h704c54.4 0 96 41.6 96 96v320z"  ></path><path d="M608 640c0 41.6-25.6 76.8-64 89.6V832c0 16-16 32-32 32s-32-16-32-32v-102.4c-38.4-12.8-64-48-64-89.6 0-54.4 41.6-96 96-96s96 41.6 96 96z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)