(function(undefined){function Call(t,l){var n=arguments.length>2?arguments[2]:[];if(!1===IsCallable(t))throw new TypeError(Object.prototype.toString.call(t)+"is not a function.");return t.apply(l,n)}function CreateMethodProperty(e,r,t){var a={value:t,writable:!0,enumerable:!1,configurable:!0};Object.defineProperty(e,r,a)}function Get(n,t){return n[t]}function HasProperty(n,r){return r in n}function IsCallable(n){return"function"==typeof n}function RequireObjectCoercible(e){if(null===e||e===undefined)throw TypeError();return e}function ToBoolean(o){return Boolean(o)}function ToInteger(n){var i=Number(n);return isNaN(i)?0:1/i===Infinity||1/i==-Infinity||i===Infinity||i===-Infinity?i:(i<0?-1:1)*Math.floor(Math.abs(i))}function ToLength(n){var t=ToInteger(n);return t<=0?0:Math.min(t,Math.pow(2,53)-1)}function ToObject(e){if(null===e||e===undefined)throw TypeError();return Object(e)}function GetV(t,e){return ToObject(t)[e]}function GetMethod(e,n){var r=GetV(e,n);if(null===r||r===undefined)return undefined;if(!1===IsCallable(r))throw new TypeError("Method not callable: "+n);return r}function Type(e){switch(typeof e){case"undefined":return"undefined";case"boolean":return"boolean";case"number":return"number";case"string":return"string";case"symbol":return"symbol";default:return null===e?"null":"Symbol"in this&&e instanceof this.Symbol?"symbol":"object"}}function IsRegExp(e){if("object"!==Type(e))return!1;var t="Symbol"in this&&"match"in this.Symbol?Get(e,this.Symbol.match):undefined;if(t!==undefined)return ToBoolean(t);try{var n=e.lastIndex;return e.lastIndex=0,RegExp.prototype.exec.call(e),!0}catch(r){}finally{e.lastIndex=n}return!1}function OrdinaryToPrimitive(r,t){if("string"===t)var e=["toString","valueOf"];else e=["valueOf","toString"];for(var i=0;i<e.length;++i){var n=e[i],a=Get(r,n);if(IsCallable(a)){var o=Call(a,r);if("object"!==Type(o))return o}}throw new TypeError("Cannot convert to primitive.")}function ToPrimitive(e){var t=arguments.length>1?arguments[1]:undefined;if("object"===Type(e)){if(arguments.length<2)var i="default";else t===String?i="string":t===Number&&(i="number");var r="function"==typeof this.Symbol&&"symbol"==typeof this.Symbol.toPrimitive?GetMethod(e,this.Symbol.toPrimitive):undefined;if(r!==undefined){var n=Call(r,e,[i]);if("object"!==Type(n))return n;throw new TypeError("Cannot convert exotic object to primitive.")}return"default"===i&&(i="number"),OrdinaryToPrimitive(e,i)}return e}function ToString(t){switch(Type(t)){case"symbol":throw new TypeError("Cannot convert a Symbol value to a string");case"object":return ToString(ToPrimitive(t,"string"));default:return String(t)}}var _mutation=function(){function e(e){return"function"==typeof Node?e instanceof Node:e&&"object"==typeof e&&e.nodeName&&e.nodeType>=1&&e.nodeType<=12}return function n(t){if(1===t.length)return e(t[0])?t[0]:document.createTextNode(t[0]+"");for(var o=document.createDocumentFragment(),r=0;r<t.length;r++)o.appendChild(e(t[r])?t[r]:document.createTextNode(t[r]+""));return o}}();DocumentFragment.prototype.append=function t(){this.appendChild(_mutation(arguments))};DocumentFragment.prototype.prepend=function t(){this.insertBefore(_mutation(arguments),this.firstChild)};Document.prototype.after=Element.prototype.after=function t(){if(this.parentNode){for(var t=Array.prototype.slice.call(arguments),e=this.nextSibling,o=e?t.indexOf(e):-1;-1!==o&&(e=e.nextSibling);)o=t.indexOf(e);this.parentNode.insertBefore(_mutation(arguments),e)}},"Text"in this&&(Text.prototype.after=Element.prototype.after);Document.prototype.append=Element.prototype.append=function p(){this.appendChild(_mutation(arguments))};Document.prototype.before=Element.prototype.before=function e(){if(this.parentNode){for(var e=Array.prototype.slice.call(arguments),t=this.previousSibling,o=t?e.indexOf(t):-1;-1!==o&&(t=t.previousSibling);)o=e.indexOf(t);this.parentNode.insertBefore(_mutation(arguments),t?t.nextSibling:this.parentNode.firstChild)}},"Text"in this&&(Text.prototype.before=Element.prototype.before);Document.prototype.prepend=Element.prototype.prepend=function t(){this.insertBefore(_mutation(arguments),this.firstChild)};Document.prototype.remove=Element.prototype.remove=function e(){this.parentNode&&this.parentNode.removeChild(this)},"Text"in this&&(Text.prototype.remove=Element.prototype.remove);Document.prototype.replaceWith=Element.prototype.replaceWith=function t(){this.parentNode&&this.parentNode.replaceChild(_mutation(arguments),this)},"Text"in this&&(Text.prototype.replaceWith=Element.prototype.replaceWith);this.addEventListener("focus",function(e){e.target.dispatchEvent(new Event("focusin",{bubbles:!0,cancelable:!0}))},!0),this.addEventListener("blur",function(e){e.target.dispatchEvent(new Event("focusout",{bubbles:!0,cancelable:!0}))},!0);!function(n){function h(){a!==n.location.hash&&(a=n.location.hash,n.dispatchEvent(new Event("hashchange"))),setTimeout(h,500)}var a=n.location.hash;n.onhashchange=function(){},h()}(this);CreateMethodProperty(String.prototype,"includes",function e(t){"use strict";var r=arguments.length>1?arguments[1]:undefined,n=RequireObjectCoercible(this),i=ToString(n);if(IsRegExp(t))throw new TypeError("First argument to String.prototype.includes must not be a regular expression");var o=ToString(t),g=ToInteger(r),a=i.length,p=Math.min(Math.max(g,0),a);return-1!==String.prototype.indexOf.call(i,o,p)})}).call("object"===typeof window&&window||"object"===typeof self&&self||"object"===typeof global&&global||{});
