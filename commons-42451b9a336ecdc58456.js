(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[351],{2993:function(e){var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function a(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){if(e.constructor!==i.constructor)return!1;var c,u,s,l;if(Array.isArray(e)){if((c=e.length)!=i.length)return!1;for(u=c;0!=u--;)if(!a(e[u],i[u]))return!1;return!0}if(r&&e instanceof Map&&i instanceof Map){if(e.size!==i.size)return!1;for(l=e.entries();!(u=l.next()).done;)if(!i.has(u.value[0]))return!1;for(l=e.entries();!(u=l.next()).done;)if(!a(u.value[1],i.get(u.value[0])))return!1;return!0}if(n&&e instanceof Set&&i instanceof Set){if(e.size!==i.size)return!1;for(l=e.entries();!(u=l.next()).done;)if(!i.has(u.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(i)){if((c=e.length)!=i.length)return!1;for(u=c;0!=u--;)if(e[u]!==i[u])return!1;return!0}if(e.constructor===RegExp)return e.source===i.source&&e.flags===i.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===i.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===i.toString();if((c=(s=Object.keys(e)).length)!==Object.keys(i).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(i,s[u]))return!1;if(t&&e instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==s[u]&&"__v"!==s[u]&&"__o"!==s[u]||!e.$$typeof)&&!a(e[s[u]],i[s[u]]))return!1;return!0}return e!=e&&i!=i}e.exports=function(e,t){try{return a(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},1046:function(e,t,r){"use strict";r.d(t,{w_:function(){return s}});var n=r(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=n.createContext&&n.createContext(o),i=function(){return(i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},c=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};function u(e){return e&&e.map((function(e,t){return n.createElement(e.tag,i({key:t},e.attr),u(e.child))}))}function s(e){return function(t){return n.createElement(l,i({attr:i({},e.attr)},t),u(e.child))}}function l(e){var t=function(t){var r,o=e.attr,a=e.size,u=e.title,s=c(e,["attr","size","title"]),l=a||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,s,{className:r,style:i(i({color:e.color||t.color},t.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),u&&n.createElement("title",null,u),e.children)};return void 0!==a?n.createElement(a.Consumer,null,(function(e){return t(e)})):t(o)}},4839:function(e,t,r){"use strict";var n,o=r(7294),a=(n=o)&&"object"==typeof n&&"default"in n?n.default:n;function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var u,s=[];function l(){u=e(s.map((function(e){return e.props}))),f.canUseDOM?t(u):r&&(u=r(u))}var f=function(e){var t,r;function o(){return e.apply(this,arguments)||this}r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,o.peek=function(){return u},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,s=[],e};var i=o.prototype;return i.UNSAFE_componentWillMount=function(){s.push(this),l()},i.componentDidUpdate=function(){l()},i.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),l()},i.render=function(){return a.createElement(n,this.props)},o}(o.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),i(f,"canUseDOM",c),f}}},7628:function(e,t,r){"use strict";r.d(t,{Z:function(){return d}});var n=r(7294),o=r(5444),a=r(3201),i=r(2359),c="Header-module--navLinks--1XxR4",u="Header-module--navLink--2BKhV",s="Header-module--activeLink--2oR24",l=function(){var e=(0,n.useState)(!1),t=e[0],l=e[1];return n.createElement("header",{className:"Header-module--navbar--i7wyi"},n.createElement("div",{className:"Header-module--navCenter--788ZB"},n.createElement("div",{className:"Header-module--navHeader--B68br"},n.createElement(o.rU,{to:"/"},n.createElement(i.S,{src:"../assets/images/logo.png",alt:"Terrence Chan",layout:"constrained",placeholder:"blurred",height:96,__imageData:r(4025)})),n.createElement("button",{className:"Header-module--navBtn--1NXrb",onClick:function(){return l(!t)}},n.createElement(a.jw0,null))),n.createElement("div",{className:t?c+" Header-module--showLinks--2bJNw":""+c},n.createElement(o.rU,{to:"/",className:u,activeClassName:s,onClick:function(){return l(!1)}},"Home"),n.createElement(o.rU,{to:"/projects",className:u,activeClassName:s,onClick:function(){return l(!1)}},"Projects"))))},f=function(){return n.createElement("footer",null,"© Terrence Chan ",(new Date).getFullYear())},d=function(e){var t=e.children;return n.createElement("body",null,n.createElement(l,null),t,n.createElement(f,null))}},1633:function(e,t,r){"use strict";r.d(t,{Z:function(){return ge}});var n,o,a,i,c=r(7294),u=r(5697),s=r.n(u),l=r(4839),f=r.n(l),d=r(2993),p=r.n(d),m=r(6494),y=r.n(m),h="bodyAttributes",b="htmlAttributes",g="titleAttributes",v={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(v).map((function(e){return v[e]})),"charset"),T="cssText",A="href",E="http-equiv",O="innerHTML",C="itemprop",S="name",k="property",j="rel",x="src",P="target",N={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},L="defaultTitle",I="defer",M="encodeSpecialCharacters",H="onChangeClientState",R="titleTemplate",U=Object.keys(N).reduce((function(e,t){return e[N[t]]=t,e}),{}),B=[v.NOSCRIPT,v.SCRIPT,v.STYLE],D="data-react-helmet",K="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Y=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},q=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},z=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},V=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},F=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},Z=function(e){var t=Q(e,v.TITLE),r=Q(e,R);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=Q(e,L);return t||n||void 0},W=function(e){return Q(e,H)||function(){}},J=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return _({},e,t)}),{})},X=function(e,t){return t.filter((function(e){return void 0!==e[v.BASE]})).map((function(e){return e[v.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),o=0;o<n.length;o++){var a=n[o].toLowerCase();if(-1!==e.indexOf(a)&&r[a])return t.concat(r)}return t}),[])},G=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ne("Helmet: "+e+' should be of type "Array". Instead found type "'+K(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var o={};r.filter((function(e){for(var r=void 0,a=Object.keys(e),i=0;i<a.length;i++){var c=a[i],u=c.toLowerCase();-1===t.indexOf(u)||r===j&&"canonical"===e[r].toLowerCase()||u===j&&"stylesheet"===e[u].toLowerCase()||(r=u),-1===t.indexOf(c)||c!==O&&c!==T&&c!==C||(r=c)}if(!r||!e[r])return!1;var s=e[r].toLowerCase();return n[r]||(n[r]={}),o[r]||(o[r]={}),!n[r][s]&&(o[r][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var a=Object.keys(o),i=0;i<a.length;i++){var c=a[i],u=y()({},n[c],o[c]);n[c]=u}return e}),[]).reverse()},Q=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},$=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){$(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:r.g.requestAnimationFrame||$,re="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:r.g.cancelAnimationFrame||ee,ne=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ae=function(e,t){var r=e.baseTag,n=e.bodyAttributes,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,s=e.scriptTags,l=e.styleTags,f=e.title,d=e.titleAttributes;ue(v.BODY,n),ue(v.HTML,o),ce(f,d);var p={baseTag:se(v.BASE,r),linkTags:se(v.LINK,a),metaTags:se(v.META,i),noscriptTags:se(v.NOSCRIPT,c),scriptTags:se(v.SCRIPT,s),styleTags:se(v.STYLE,l)},m={},y={};Object.keys(p).forEach((function(e){var t=p[e],r=t.newTags,n=t.oldTags;r.length&&(m[e]=r),n.length&&(y[e]=p[e].oldTags)})),t&&t(),u(e,m,y)},ie=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),ue(v.TITLE,t)},ue=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(D),o=n?n.split(","):[],a=[].concat(o),i=Object.keys(t),c=0;c<i.length;c++){var u=i[c],s=t[u]||"";r.getAttribute(u)!==s&&r.setAttribute(u,s),-1===o.indexOf(u)&&o.push(u);var l=a.indexOf(u);-1!==l&&a.splice(l,1)}for(var f=a.length-1;f>=0;f--)r.removeAttribute(a[f]);o.length===a.length?r.removeAttribute(D):r.getAttribute(D)!==i.join(",")&&r.setAttribute(D,i.join(","))}},se=function(e,t){var r=document.head||document.querySelector(v.HEAD),n=r.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(n),a=[],i=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===O)r.innerHTML=t.innerHTML;else if(n===T)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[n]?"":t[n];r.setAttribute(n,c)}r.setAttribute(D,"true"),o.some((function(e,t){return i=t,r.isEqualNode(e)}))?o.splice(i,1):a.push(r)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),a.forEach((function(e){return r.appendChild(e)})),{oldTags:o,newTags:a}},le=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[N[r]||r]=e[r],t}),t)},de=function(e,t,r){switch(e){case v.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[D]=!0,o=fe(r,n),[c.createElement(v.TITLE,o,e)];var e,r,n,o},toString:function(){return function(e,t,r,n){var o=le(r),a=ie(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+F(a,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+F(a,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case h:case b:return{toComponent:function(){return fe(t)},toString:function(){return le(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,o=((n={key:r})[D]=!0,n);return Object.keys(t).forEach((function(e){var r=N[e]||e;if(r===O||r===T){var n=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:n}}else o[r]=t[e]})),c.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var o=Object.keys(n).filter((function(e){return!(e===O||e===T)})).reduce((function(e,t){var o=void 0===n[t]?t:t+'="'+F(n[t],r)+'"';return e?e+" "+o:o}),""),a=n.innerHTML||n.cssText||"",i=-1===B.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(i?"/>":">"+a+"</"+e+">")}),"")}(e,t,r)}}}},pe=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,c=e.noscriptTags,u=e.scriptTags,s=e.styleTags,l=e.title,f=void 0===l?"":l,d=e.titleAttributes;return{base:de(v.BASE,t,n),bodyAttributes:de(h,r,n),htmlAttributes:de(b,o,n),link:de(v.LINK,a,n),meta:de(v.META,i,n),noscript:de(v.NOSCRIPT,c,n),script:de(v.SCRIPT,u,n),style:de(v.STYLE,s,n),title:de(v.TITLE,{title:f,titleAttributes:d},n)}},me=f()((function(e){return{baseTag:X([A,P],e),bodyAttributes:J(h,e),defer:Q(e,I),encode:Q(e,M),htmlAttributes:J(b,e),linkTags:G(v.LINK,[j,A],e),metaTags:G(v.META,[S,w,E,k,C],e),noscriptTags:G(v.NOSCRIPT,[O],e),onChangeClientState:W(e),scriptTags:G(v.SCRIPT,[x,O],e),styleTags:G(v.STYLE,[T],e),title:Z(e),titleAttributes:J(g,e)}}),(function(e){oe&&re(oe),e.defer?oe=te((function(){ae(e,(function(){oe=null}))})):(ae(e),oe=null)}),pe)((function(){return null})),ye=(o=me,i=a=function(e){function t(){return Y(this,t),V(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case v.SCRIPT:case v.NOSCRIPT:return{innerHTML:t};case v.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,o=e.newChildProps,a=e.nestedChildren;return _({},n,((t={})[r.type]=[].concat(n[r.type]||[],[_({},o,this.mapNestedChildrenToProps(r,a))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,o=e.newProps,a=e.newChildProps,i=e.nestedChildren;switch(n.type){case v.TITLE:return _({},o,((t={})[n.type]=i,t.titleAttributes=_({},a),t));case v.BODY:return _({},o,{bodyAttributes:_({},a)});case v.HTML:return _({},o,{htmlAttributes:_({},a)})}return _({},o,((r={})[n.type]=_({},a),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=_({},t);return Object.keys(e).forEach((function(t){var n;r=_({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return c.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,a=o.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[U[r]||r]=e[r],t}),t)}(z(o,["children"]));switch(r.warnOnInvalidChildren(e,a),e.type){case v.LINK:case v.META:case v.NOSCRIPT:case v.SCRIPT:case v.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:i,nestedChildren:a});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:a})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=z(e,["children"]),n=_({},r);return t&&(n=this.mapChildrenToProps(t,n)),c.createElement(o,n)},q(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(c.Component),a.propTypes={base:s().object,bodyAttributes:s().object,children:s().oneOfType([s().arrayOf(s().node),s().node]),defaultTitle:s().string,defer:s().bool,encodeSpecialCharacters:s().bool,htmlAttributes:s().object,link:s().arrayOf(s().object),meta:s().arrayOf(s().object),noscript:s().arrayOf(s().object),onChangeClientState:s().func,script:s().arrayOf(s().object),style:s().arrayOf(s().object),title:s().string,titleAttributes:s().object,titleTemplate:s().string},a.defaultProps={defer:!0,encodeSpecialCharacters:!0},a.peek=o.peek,a.rewind=function(){var e=o.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);ye.renderStatic=ye.rewind;var he=r(5444);function be(e){var t,r,n=e.description,o=e.lang,a=e.meta,i=e.title,u=(0,he.K2)("63159454").site,s=n||u.siteMetadata.description,l=null===(t=u.siteMetadata)||void 0===t?void 0:t.title;return c.createElement(ye,{htmlAttributes:{lang:o},title:i,titleTemplate:l?"%s | "+l:null,meta:[{name:"description",content:s},{property:"og:title",content:i},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:(null===(r=u.siteMetadata)||void 0===r?void 0:r.author)||""},{name:"twitter:title",content:i},{name:"twitter:description",content:s}].concat(a)})}be.defaultProps={lang:"en",meta:[],description:""};var ge=be},4025:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAAA7DAAAOwwHHb6hkAAACTklEQVQoz11Q0UtTURz+rYm91EOkUWHG0AgrynNvU6uHcKOioKCehB6iOx+kestym3Pu6s7ZnZkuJBV6WEZFaZaWZe3ubp5zp21KJIXmsjQQ/S/ixL1eRDrwwXd+v+/7+M4BAADMEBAqWEA2QgUbpggMEIrsZJ3fJRRVWPMtmKJNGgE2Dt4IEjaZTX4WU7TdCt2GKerEDBVjhtxGASvMbnLr/l+g0cw078IU3TcaYSrYLeNpTFGjocMUNZvhFBVZO9v6C63A2OczBSMLwcKLT41w5CZMiBMmuDCtBMLErWZDJngJE9yEidCU2A2KXm3wOKbI5VdLIcLEQsLEAkxRAfRkz0NquReiejUouvNx7/SlHS1aGTR+3AnexB7wvAGIsOPtN8fsENTKYTTfCgOzEngTe4sUvSpuaO58KobW1EFDB/Age65TXYqF72VOhVq0splg6oDqU0vkgOaI+NV9ciDp6JfThyabk6WhYKqcDMx6yPivqNw1VZsMaI7pgOYI+dQSLKcrIoSJbdA1Vfs3u/qSv18kfHjey9/l2/hoPsSH55tM/vqHjz//fouPLLTwR1/q+NjPMB+cu82n14b4s283TM2HRYX3z1zhzcn9HujInDAH2dUXXF2K8bd5maf/9PHJlSc8tdxrGo19bm3INCV+d/OhuUauLT/kudVBc59ZGeDxr9e4Xy3xGf/WEGHO64peJREmSm0Thw14onrN1TA9FsYUveqectUpurNeTldIPbkLUt/MZal94ojUkTkpRfUaKTxxVMK0sp4woeEf3Ydc4LPUDwgAAAAASUVORK5CYII="},"images":{"fallback":{"src":"/static/bfa16d33a97bdd5c1d2da5a030976771/80e0b/logo.png","srcSet":"/static/bfa16d33a97bdd5c1d2da5a030976771/90b8f/logo.png 55w,\\n/static/bfa16d33a97bdd5c1d2da5a030976771/030d0/logo.png 111w,\\n/static/bfa16d33a97bdd5c1d2da5a030976771/80e0b/logo.png 221w,\\n/static/bfa16d33a97bdd5c1d2da5a030976771/21e66/logo.png 442w","sizes":"(min-width: 221px) 221px, 100vw"},"sources":[{"srcSet":"/static/bfa16d33a97bdd5c1d2da5a030976771/2a321/logo.webp 55w,\\n/static/bfa16d33a97bdd5c1d2da5a030976771/19011/logo.webp 111w,\\n/static/bfa16d33a97bdd5c1d2da5a030976771/b9840/logo.webp 221w,\\n/static/bfa16d33a97bdd5c1d2da5a030976771/d7d6e/logo.webp 442w","type":"image/webp","sizes":"(min-width: 221px) 221px, 100vw"}]},"width":221,"height":96}')}}]);
//# sourceMappingURL=commons-42451b9a336ecdc58456.js.map