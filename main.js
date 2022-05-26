(function () {
    "use strict";
    return false;

    var app = {
        isLoading: true,
        BUILDID: '1650362618987'
    };
    window.app = app;

    if (navigator.serviceWorker) {
        navigator.serviceWorker
            .register("service-worker.desktop.js")
            .then(function (registration) {
                if (registration.installing) {
                    void 0;
                }
                if (registration.waiting) {
                    void 0;
                }
                if (registration.active) {
                    void 0;
                }
                registration.update();
            }).catch(function (err) {
                void 0;
            });
    } else {
        void 0;
    }
}());


function initCyclicCache() {
    'use strict';
    function removeOld() {
        let sortedKeys = Object.keys(localStorage).filter(function (val) {
            return val === String(parseFloat(val));
        }).sort();
        if (!sortedKeys.length) {
            return false;
        }
        localStorage.removeItem(sortedKeys[0]);
        return true;
    }
    function setCache(key, value) {
        let retry = false;
        do {
            try {
                localStorage.setItem(key, JSON.stringify(value));
            } catch (err) {
                void 0;
                if (removeOld()) {
                    retry = true;
                }
            }
        } while (retry);
    }
    function getCache(key) {
        let result = false;
        try {
            result = JSON.parse(localStorage.getItem(key));
        } catch (err) {
            void 0;
        }
        return result;

    }
    return {
        setCache,
        getCache
    };
}

window.cyclicCache = initCyclicCache();
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).DOMPurify=t()}(this,(function(){"use strict";var e=Object.hasOwnProperty,t=Object.setPrototypeOf,n=Object.isFrozen,r=Object.getPrototypeOf,o=Object.getOwnPropertyDescriptor,i=Object.freeze,a=Object.seal,l=Object.create,c="undefined"!=typeof Reflect&&Reflect,s=c.apply,u=c.construct;s||(s=function(e,t,n){return e.apply(t,n)}),i||(i=function(e){return e}),a||(a=function(e){return e}),u||(u=function(e,t){return new(Function.prototype.bind.apply(e,[null].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(t))))});var f,m=x(Array.prototype.forEach),d=x(Array.prototype.pop),p=x(Array.prototype.push),g=x(String.prototype.toLowerCase),h=x(String.prototype.match),y=x(String.prototype.replace),v=x(String.prototype.indexOf),b=x(String.prototype.trim),T=x(RegExp.prototype.test),A=(f=TypeError,function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return u(f,t)});function x(e){return function(t){for(var n=arguments.length,r=Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return s(e,t,r)}}function S(e,r){t&&t(e,null);for(var o=r.length;o--;){var i=r[o];if("string"==typeof i){var a=g(i);a!==i&&(n(r)||(r[o]=a),i=a)}e[i]=!0}return e}function w(t){var n=l(null),r=void 0;for(r in t)s(e,t,[r])&&(n[r]=t[r]);return n}function N(e,t){for(;null!==e;){var n=o(e,t);if(n){if(n.get)return x(n.get);if("function"==typeof n.value)return x(n.value)}e=r(e)}return function(e){return void 0,null}}var k=i(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),E=i(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),D=i(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),O=i(["animate","color-profile","cursor","discard","fedropshadow","feimage","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),R=i(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),_=i(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),M=i(["#text"]),L=i(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),F=i(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),I=i(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),C=i(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),z=a(/\{\{[\s\S]*|[\s\S]*\}\}/gm),H=a(/<%[\s\S]*|[\s\S]*%>/gm),U=a(/^data-[\-\w.\u00B7-\uFFFF]/),j=a(/^aria-[\-\w]+$/),B=a(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),P=a(/^(?:\w+script|data):/i),W=a(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function q(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var K=function(){return"undefined"==typeof window?null:window},V=function(e,t){if("object"!==(void 0===e?"undefined":G(e))||"function"!=typeof e.createPolicy)return null;var n=null,r="data-tt-policy-suffix";t.currentScript&&t.currentScript.hasAttribute(r)&&(n=t.currentScript.getAttribute(r));var o="dompurify"+(n?"#"+n:"");try{return e.createPolicy(o,{createHTML:function(e){return e}})}catch(e){return void 0,null}};return function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K(),n=function(t){return e(t)};if(n.version="2.3.1",n.removed=[],!t||!t.document||9!==t.document.nodeType)return n.isSupported=!1,n;var r=t.document,o=t.document,a=t.DocumentFragment,l=t.HTMLTemplateElement,c=t.Node,s=t.Element,u=t.NodeFilter,f=t.NamedNodeMap,x=void 0===f?t.NamedNodeMap||t.MozNamedAttrMap:f,Y=t.Text,X=t.Comment,$=t.DOMParser,Z=t.trustedTypes,J=s.prototype,Q=N(J,"cloneNode"),ee=N(J,"nextSibling"),te=N(J,"childNodes"),ne=N(J,"parentNode");if("function"==typeof l){var re=o.createElement("template");re.content&&re.content.ownerDocument&&(o=re.content.ownerDocument)}var oe=V(Z,r),ie=oe&&ze?oe.createHTML(""):"",ae=o,le=ae.implementation,ce=ae.createNodeIterator,se=ae.createDocumentFragment,ue=ae.getElementsByTagName,fe=r.importNode,me={};try{me=w(o).documentMode?o.documentMode:{}}catch(e){}var de={};n.isSupported="function"==typeof ne&&le&&void 0!==le.createHTMLDocument&&9!==me;var pe=z,ge=H,he=U,ye=j,ve=P,be=W,Te=B,Ae=null,xe=S({},[].concat(q(k),q(E),q(D),q(R),q(M))),Se=null,we=S({},[].concat(q(L),q(F),q(I),q(C))),Ne=null,ke=null,Ee=!0,De=!0,Oe=!1,Re=!1,_e=!1,Me=!1,Le=!1,Fe=!1,Ie=!1,Ce=!0,ze=!1,He=!0,Ue=!0,je=!1,Be={},Pe=null,We=S({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),Ge=null,qe=S({},["audio","video","img","source","image","track"]),Ke=null,Ve=S({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Ye="http://www.w3.org/1998/Math/MathML",Xe="http://www.w3.org/2000/svg",$e="http://www.w3.org/1999/xhtml",Ze=$e,Je=!1,Qe=null,et=o.createElement("form"),tt=function(e){Qe&&Qe===e||(e&&"object"===(void 0===e?"undefined":G(e))||(e={}),e=w(e),Ae="ALLOWED_TAGS"in e?S({},e.ALLOWED_TAGS):xe,Se="ALLOWED_ATTR"in e?S({},e.ALLOWED_ATTR):we,Ke="ADD_URI_SAFE_ATTR"in e?S(w(Ve),e.ADD_URI_SAFE_ATTR):Ve,Ge="ADD_DATA_URI_TAGS"in e?S(w(qe),e.ADD_DATA_URI_TAGS):qe,Pe="FORBID_CONTENTS"in e?S({},e.FORBID_CONTENTS):We,Ne="FORBID_TAGS"in e?S({},e.FORBID_TAGS):{},ke="FORBID_ATTR"in e?S({},e.FORBID_ATTR):{},Be="USE_PROFILES"in e&&e.USE_PROFILES,Ee=!1!==e.ALLOW_ARIA_ATTR,De=!1!==e.ALLOW_DATA_ATTR,Oe=e.ALLOW_UNKNOWN_PROTOCOLS||!1,Re=e.SAFE_FOR_TEMPLATES||!1,_e=e.WHOLE_DOCUMENT||!1,Fe=e.RETURN_DOM||!1,Ie=e.RETURN_DOM_FRAGMENT||!1,Ce=!1!==e.RETURN_DOM_IMPORT,ze=e.RETURN_TRUSTED_TYPE||!1,Le=e.FORCE_BODY||!1,He=!1!==e.SANITIZE_DOM,Ue=!1!==e.KEEP_CONTENT,je=e.IN_PLACE||!1,Te=e.ALLOWED_URI_REGEXP||Te,Ze=e.NAMESPACE||$e,Re&&(De=!1),Ie&&(Fe=!0),Be&&(Ae=S({},[].concat(q(M))),Se=[],!0===Be.html&&(S(Ae,k),S(Se,L)),!0===Be.svg&&(S(Ae,E),S(Se,F),S(Se,C)),!0===Be.svgFilters&&(S(Ae,D),S(Se,F),S(Se,C)),!0===Be.mathMl&&(S(Ae,R),S(Se,I),S(Se,C))),e.ADD_TAGS&&(Ae===xe&&(Ae=w(Ae)),S(Ae,e.ADD_TAGS)),e.ADD_ATTR&&(Se===we&&(Se=w(Se)),S(Se,e.ADD_ATTR)),e.ADD_URI_SAFE_ATTR&&S(Ke,e.ADD_URI_SAFE_ATTR),e.FORBID_CONTENTS&&(Pe===We&&(Pe=w(Pe)),S(Pe,e.FORBID_CONTENTS)),Ue&&(Ae["#text"]=!0),_e&&S(Ae,["html","head","body"]),Ae.table&&(S(Ae,["tbody"]),delete Ne.tbody),i&&i(e),Qe=e)},nt=S({},["mi","mo","mn","ms","mtext"]),rt=S({},["foreignobject","desc","title","annotation-xml"]),ot=S({},E);S(ot,D),S(ot,O);var it=S({},R);S(it,_);var at=function(e){var t=ne(e);t&&t.tagName||(t={namespaceURI:$e,tagName:"template"});var n=g(e.tagName),r=g(t.tagName);if(e.namespaceURI===Xe)return t.namespaceURI===$e?"svg"===n:t.namespaceURI===Ye?"svg"===n&&("annotation-xml"===r||nt[r]):Boolean(ot[n]);if(e.namespaceURI===Ye)return t.namespaceURI===$e?"math"===n:t.namespaceURI===Xe?"math"===n&&rt[r]:Boolean(it[n]);if(e.namespaceURI===$e){if(t.namespaceURI===Xe&&!rt[r])return!1;if(t.namespaceURI===Ye&&!nt[r])return!1;var o=S({},["title","style","font","a","script"]);return!it[n]&&(o[n]||!ot[n])}return!1},lt=function(e){p(n.removed,{element:e});try{e.parentNode.removeChild(e)}catch(t){try{e.outerHTML=ie}catch(t){e.remove()}}},ct=function(e,t){try{p(n.removed,{attribute:t.getAttributeNode(e),from:t})}catch(e){p(n.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e&&!Se[e])if(Fe||Ie)try{lt(t)}catch(e){}else try{t.setAttribute(e,"")}catch(e){}},st=function(e){var t=void 0,n=void 0;if(Le)e="<remove></remove>"+e;else{var r=h(e,/^[\r\n\t ]+/);n=r&&r[0]}var i=oe?oe.createHTML(e):e;if(Ze===$e)try{t=(new $).parseFromString(i,"text/html")}catch(e){}if(!t||!t.documentElement){t=le.createDocument(Ze,"template",null);try{t.documentElement.innerHTML=Je?"":i}catch(e){}}var a=t.body||t.documentElement;return e&&n&&a.insertBefore(o.createTextNode(n),a.childNodes[0]||null),Ze===$e?ue.call(t,_e?"html":"body")[0]:_e?t.documentElement:a},ut=function(e){return ce.call(e.ownerDocument||e,e,u.SHOW_ELEMENT|u.SHOW_COMMENT|u.SHOW_TEXT,null,!1)},ft=function(e){return!(e instanceof Y||e instanceof X)&&!("string"==typeof e.nodeName&&"string"==typeof e.textContent&&"function"==typeof e.removeChild&&e.attributes instanceof x&&"function"==typeof e.removeAttribute&&"function"==typeof e.setAttribute&&"string"==typeof e.namespaceURI&&"function"==typeof e.insertBefore)},mt=function(e){return"object"===(void 0===c?"undefined":G(c))?e instanceof c:e&&"object"===(void 0===e?"undefined":G(e))&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},dt=function(e,t,r){de[e]&&m(de[e],(function(e){e.call(n,t,r,Qe)}))},pt=function(e){var t=void 0;if(dt("beforeSanitizeElements",e,null),ft(e))return lt(e),!0;if(h(e.nodeName,/[\u0080-\uFFFF]/))return lt(e),!0;var r=g(e.nodeName);if(dt("uponSanitizeElement",e,{tagName:r,allowedTags:Ae}),!mt(e.firstElementChild)&&(!mt(e.content)||!mt(e.content.firstElementChild))&&T(/<[/\w]/g,e.innerHTML)&&T(/<[/\w]/g,e.textContent))return lt(e),!0;if("select"===r&&T(/<template/i,e.innerHTML))return lt(e),!0;if(!Ae[r]||Ne[r]){if(Ue&&!Pe[r]){var o=ne(e)||e.parentNode,i=te(e)||e.childNodes;if(i&&o)for(var a=i.length-1;a>=0;--a)o.insertBefore(Q(i[a],!0),ee(e))}return lt(e),!0}return e instanceof s&&!at(e)?(lt(e),!0):"noscript"!==r&&"noembed"!==r||!T(/<\/no(script|embed)/i,e.innerHTML)?(Re&&3===e.nodeType&&(t=e.textContent,t=y(t,pe," "),t=y(t,ge," "),e.textContent!==t&&(p(n.removed,{element:e.cloneNode()}),e.textContent=t)),dt("afterSanitizeElements",e,null),!1):(lt(e),!0)},gt=function(e,t,n){if(He&&("id"===t||"name"===t)&&(n in o||n in et))return!1;if(De&&!ke[t]&&T(he,t));else if(Ee&&T(ye,t));else{if(!Se[t]||ke[t])return!1;if(Ke[t]);else if(T(Te,y(n,be,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==v(n,"data:")||!Ge[e]){if(Oe&&!T(ve,y(n,be,"")));else if(n)return!1}else;}return!0},ht=function(e){var t=void 0,r=void 0,o=void 0,i=void 0;dt("beforeSanitizeAttributes",e,null);var a=e.attributes;if(a){var l={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:Se};for(i=a.length;i--;){var c=t=a[i],s=c.name,u=c.namespaceURI;if(r=b(t.value),o=g(s),l.attrName=o,l.attrValue=r,l.keepAttr=!0,l.forceKeepAttr=void 0,dt("uponSanitizeAttribute",e,l),r=l.attrValue,!l.forceKeepAttr&&(ct(s,e),l.keepAttr))if(T(/\/>/i,r))ct(s,e);else{Re&&(r=y(r,pe," "),r=y(r,ge," "));var f=e.nodeName.toLowerCase();if(gt(f,o,r))try{u?e.setAttributeNS(u,s,r):e.setAttribute(s,r),d(n.removed)}catch(e){}}}dt("afterSanitizeAttributes",e,null)}},yt=function e(t){var n=void 0,r=ut(t);for(dt("beforeSanitizeShadowDOM",t,null);n=r.nextNode();)dt("uponSanitizeShadowNode",n,null),pt(n)||(n.content instanceof a&&e(n.content),ht(n));dt("afterSanitizeShadowDOM",t,null)};return n.sanitize=function(e,o){var i=void 0,l=void 0,s=void 0,u=void 0,f=void 0;if((Je=!e)&&(e="\x3c!--\x3e"),"string"!=typeof e&&!mt(e)){if("function"!=typeof e.toString)throw A("toString is not a function");if("string"!=typeof(e=e.toString()))throw A("dirty is not a string, aborting")}if(!n.isSupported){if("object"===G(t.toStaticHTML)||"function"==typeof t.toStaticHTML){if("string"==typeof e)return t.toStaticHTML(e);if(mt(e))return t.toStaticHTML(e.outerHTML)}return e}if(Me||tt(o),n.removed=[],"string"==typeof e&&(je=!1),je);else if(e instanceof c)1===(l=(i=st("\x3c!----\x3e")).ownerDocument.importNode(e,!0)).nodeType&&"BODY"===l.nodeName||"HTML"===l.nodeName?i=l:i.appendChild(l);else{if(!Fe&&!Re&&!_e&&-1===e.indexOf("<"))return oe&&ze?oe.createHTML(e):e;if(!(i=st(e)))return Fe?null:ie}i&&Le&&lt(i.firstChild);for(var m=ut(je?e:i);s=m.nextNode();)3===s.nodeType&&s===u||pt(s)||(s.content instanceof a&&yt(s.content),ht(s),u=s);if(u=null,je)return e;if(Fe){if(Ie)for(f=se.call(i.ownerDocument);i.firstChild;)f.appendChild(i.firstChild);else f=i;return Ce&&(f=fe.call(r,f,!0)),f}var d=_e?i.outerHTML:i.innerHTML;return Re&&(d=y(d,pe," "),d=y(d,ge," ")),oe&&ze?oe.createHTML(d):d},n.setConfig=function(e){tt(e),Me=!0},n.clearConfig=function(){Qe=null,Me=!1},n.isValidAttribute=function(e,t,n){Qe||tt({});var r=g(e),o=g(t);return gt(r,o,n)},n.addHook=function(e,t){"function"==typeof t&&(de[e]=de[e]||[],p(de[e],t))},n.removeHook=function(e){de[e]&&d(de[e])},n.removeHooks=function(e){de[e]&&(de[e]=[])},n.removeAllHooks=function(){de={}},n}()}));

var html=function(t){"use strict";const{replace:a}="",l=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34);/g,c=/[&<>'"]/g,e={"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"},p=t=>e[t],o={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"'},s=t=>o[t];return t.escape=(t=>a.call(t,c,p)),t.unescape=(t=>a.call(t,l,s)),t}({});


function taggedString(strings, ...args) {
  return strings.reduce((prev, curr, index) => prev + curr + (args[index] || ''), '');
}

window.escapeHTML = function(strings, ...args) {
  return html.escape(taggedString(strings, ...args));
};

window.Sanitizer = {
  escapeHTML: (strings, ...args) => DOMPurify.sanitize(
    taggedString(strings, ...args),
    {USE_PROFILES: {html: true}}
  )
};

(function(r){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=r()}else if(typeof define==="function"&&define.amd){define([],r)}else{var e;if(typeof window!=="undefined"){e=window}else if(typeof global!=="undefined"){e=global}else if(typeof self!=="undefined"){e=self}else{e=this}e.base64js=r()}})(function(){var r,e,n;return function(){function r(e,n,t){function o(f,i){if(!n[f]){if(!e[f]){var u="function"==typeof require&&require;if(!i&&u)return u(f,!0);if(a)return a(f,!0);var v=new Error("Cannot find module '"+f+"'");throw v.code="MODULE_NOT_FOUND",v}var d=n[f]={exports:{}};e[f][0].call(d.exports,function(r){var n=e[f][1][r];return o(n||r)},d,d.exports,r,e,n,t)}return n[f].exports}for(var a="function"==typeof require&&require,f=0;f<t.length;f++)o(t[f]);return o}return r}()({"/":[function(r,e,n){"use strict";n.byteLength=d;n.toByteArray=h;n.fromByteArray=p;var t=[];var o=[];var a=typeof Uint8Array!=="undefined"?Uint8Array:Array;var f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(var i=0,u=f.length;i<u;++i){t[i]=f[i];o[f.charCodeAt(i)]=i}o["-".charCodeAt(0)]=62;o["_".charCodeAt(0)]=63;function v(r){var e=r.length;if(e%4>0){throw new Error("Invalid string. Length must be a multiple of 4")}var n=r.indexOf("=");if(n===-1)n=e;var t=n===e?0:4-n%4;return[n,t]}function d(r){var e=v(r);var n=e[0];var t=e[1];return(n+t)*3/4-t}function c(r,e,n){return(e+n)*3/4-n}function h(r){var e;var n=v(r);var t=n[0];var f=n[1];var i=new a(c(r,t,f));var u=0;var d=f>0?t-4:t;for(var h=0;h<d;h+=4){e=o[r.charCodeAt(h)]<<18|o[r.charCodeAt(h+1)]<<12|o[r.charCodeAt(h+2)]<<6|o[r.charCodeAt(h+3)];i[u++]=e>>16&255;i[u++]=e>>8&255;i[u++]=e&255}if(f===2){e=o[r.charCodeAt(h)]<<2|o[r.charCodeAt(h+1)]>>4;i[u++]=e&255}if(f===1){e=o[r.charCodeAt(h)]<<10|o[r.charCodeAt(h+1)]<<4|o[r.charCodeAt(h+2)]>>2;i[u++]=e>>8&255;i[u++]=e&255}return i}function s(r){return t[r>>18&63]+t[r>>12&63]+t[r>>6&63]+t[r&63]}function l(r,e,n){var t;var o=[];for(var a=e;a<n;a+=3){t=(r[a]<<16&16711680)+(r[a+1]<<8&65280)+(r[a+2]&255);o.push(s(t))}return o.join("")}function p(r){var e;var n=r.length;var o=n%3;var a=[];var f=16383;for(var i=0,u=n-o;i<u;i+=f){a.push(l(r,i,i+f>u?u:i+f))}if(o===1){e=r[n-1];a.push(t[e>>2]+t[e<<4&63]+"==")}else if(o===2){e=(r[n-2]<<8)+r[n-1];a.push(t[e>>10]+t[e>>4&63]+t[e<<2&63]+"=")}return a.join("")}},{}]},{},[])("/")});

function getThumbnail(image, maxDimension) {
    'use strict';
    let dstWidth = maxDimension;
    let dstHeight = maxDimension;
    if (image.width > image.height) {
        dstHeight = maxDimension * (image.height / image.width);
    }
    if (image.width < image.height) {
        dstWidth = maxDimension * (image.width / image.height);
    }
    const canvas = document.createElement('canvas');
    canvas.width = dstWidth;
    canvas.height = dstHeight;
    const context2d = canvas.getContext('2d');
    context2d.drawImage(image, 0, 0, image.width, image.height, 0, 0, dstWidth, dstHeight);
    return canvas.toDataURL('image/jpeg', 0.3);
}
function generateThumbnail(file, onFinish) {
    'use strict';
    const sizeLimit = 1024 + 128;
    if (file.type.match('image.*')) {
        const image = new Image();
        image.onload = function () {
            if (!image.width || !image.height) {
                return onFinish();
            }
            let maxDimension = 128;
            let thumbnail;
            do {
                thumbnail = getThumbnail(image, maxDimension);
                maxDimension = Math.floor(maxDimension * 0.75);
            } while (thumbnail.length > sizeLimit && maxDimension > 8);
            if (thumbnail.length > sizeLimit) {
                thumbnail = '';
            }
            onFinish(thumbnail);
        };
        image.onerror = onFinish;
        const reader = new FileReader();
        reader.onload = function (evt) {
            if (evt.target.readyState === FileReader.DONE) {
                image.src = evt.target.result;
            }
        };
        reader.onerror = onFinish;
        reader.readAsDataURL(file);
    } else {
        return onFinish();
    }

}

window.generateThumbnail = generateThumbnail;

var a,b;"undefined"!=typeof navigator&&(a=window||{},b=function(window){"use strict";var svgNS="http://www.w3.org/2000/svg",locationHref="",initialDefaultFrame=-999999,subframeEnabled=!0,expressionsPlugin,isSafari=/^((?!chrome|android).)*safari/i.test(navigator.userAgent),cachedColors={},bm_rounder=Math.round,bm_rnd,bm_pow=Math.pow,bm_sqrt=Math.sqrt,bm_abs=Math.abs,bm_floor=Math.floor,bm_max=Math.max,bm_min=Math.min,blitter=10,BMMath={};function ProjectInterface(){return{}}!function(){var t,e=["abs","acos","acosh","asin","asinh","atan","atanh","atan2","ceil","cbrt","expm1","clz32","cos","cosh","exp","floor","fround","hypot","imul","log","log1p","log2","log10","max","min","pow","random","round","sign","sin","sinh","sqrt","tan","tanh","trunc","E","LN10","LN2","LOG10E","LOG2E","PI","SQRT1_2","SQRT2"],r=e.length;for(t=0;t<r;t+=1)BMMath[e[t]]=Math[e[t]]}(),BMMath.random=Math.random,BMMath.abs=function(t){if("object"===typeof t&&t.length){var e,r=createSizedArray(t.length),i=t.length;for(e=0;e<i;e+=1)r[e]=Math.abs(t[e]);return r}return Math.abs(t)};var defaultCurveSegments=150,degToRads=Math.PI/180,roundCorner=.5519;function roundValues(t){bm_rnd=t?Math.round:function(t){return t}}function styleDiv(t){t.style.position="absolute",t.style.top=0,t.style.left=0,t.style.display="block",t.style.transformOrigin=t.style.webkitTransformOrigin="0 0",t.style.backfaceVisibility=t.style.webkitBackfaceVisibility="visible",t.style.transformStyle=t.style.webkitTransformStyle=t.style.mozTransformStyle="preserve-3d"}function BMEnterFrameEvent(t,e,r,i){this.type=t,this.currentTime=e,this.totalTime=r,this.direction=i<0?-1:1}function BMCompleteEvent(t,e){this.type=t,this.direction=e<0?-1:1}function BMCompleteLoopEvent(t,e,r,i){this.type=t,this.currentLoop=r,this.totalLoops=e,this.direction=i<0?-1:1}function BMSegmentStartEvent(t,e,r){this.type=t,this.firstFrame=e,this.totalFrames=r}function BMDestroyEvent(t,e){this.type=t,this.target=e}function BMRenderFrameErrorEvent(t,e){this.type="renderFrameError",this.nativeError=t,this.currentTime=e}function BMConfigErrorEvent(t){this.type="configError",this.nativeError=t}function BMAnimationConfigErrorEvent(t,e){this.type=t,this.nativeError=e,this.currentTime=currentTime}roundValues(!1);var createElementID=(I=0,function(){return"__lottie_element_"+ ++I}),I;function HSVtoRGB(t,e,r){var i,s,a,n,o,h,l,p;switch(h=r*(1-e),l=r*(1-(o=6*t-(n=Math.floor(6*t)))*e),p=r*(1-(1-o)*e),n%6){case 0:i=r,s=p,a=h;break;case 1:i=l,s=r,a=h;break;case 2:i=h,s=r,a=p;break;case 3:i=h,s=l,a=r;break;case 4:i=p,s=h,a=r;break;case 5:i=r,s=h,a=l}return[i,s,a]}function RGBtoHSV(t,e,r){var i,s=Math.max(t,e,r),a=Math.min(t,e,r),n=s-a,o=0===s?0:n/s,h=s/255;switch(s){case a:i=0;break;case t:i=e-r+n*(e<r?6:0),i/=6*n;break;case e:i=r-t+2*n,i/=6*n;break;case r:i=t-e+4*n,i/=6*n}return[i,o,h]}function addSaturationToRGB(t,e){var r=RGBtoHSV(255*t[0],255*t[1],255*t[2]);return r[1]+=e,1<r[1]?r[1]=1:r[1]<=0&&(r[1]=0),HSVtoRGB(r[0],r[1],r[2])}function addBrightnessToRGB(t,e){var r=RGBtoHSV(255*t[0],255*t[1],255*t[2]);return r[2]+=e,1<r[2]?r[2]=1:r[2]<0&&(r[2]=0),HSVtoRGB(r[0],r[1],r[2])}function addHueToRGB(t,e){var r=RGBtoHSV(255*t[0],255*t[1],255*t[2]);return r[0]+=e/360,1<r[0]?r[0]-=1:r[0]<0&&(r[0]+=1),HSVtoRGB(r[0],r[1],r[2])}var rgbToHex=function(){var t,e,i=[];for(t=0;t<256;t+=1)e=t.toString(16),i[t]=1==e.length?"0"+e:e;return function(t,e,r){return t<0&&(t=0),e<0&&(e=0),r<0&&(r=0),"#"+i[t]+i[e]+i[r]}}();function BaseEvent(){}BaseEvent.prototype={triggerEvent:function(t,e){if(this._cbs[t])for(var r=this._cbs[t].length,i=0;i<r;i++)this._cbs[t][i](e)},addEventListener:function(t,e){return this._cbs[t]||(this._cbs[t]=[]),this._cbs[t].push(e),function(){this.removeEventListener(t,e)}.bind(this)},removeEventListener:function(t,e){if(e){if(this._cbs[t]){for(var r=0,i=this._cbs[t].length;r<i;)this._cbs[t][r]===e&&(this._cbs[t].splice(r,1),r-=1,i-=1),r+=1;this._cbs[t].length||(this._cbs[t]=null)}}else this._cbs[t]=null}};var createTypedArray="function"==typeof Uint8ClampedArray&&"function"==typeof Float32Array?function(t,e){return"float32"===t?new Float32Array(e):"int16"===t?new Int16Array(e):"uint8c"===t?new Uint8ClampedArray(e):void 0}:function(t,e){var r,i=0,s=[];switch(t){case"int16":case"uint8c":r=1;break;default:r=1.1}for(i=0;i<e;i+=1)s.push(r);return s};function createSizedArray(t){return Array.apply(null,{length:t})}function createNS(t){return document.createElementNS(svgNS,t)}function createTag(t){return document.createElement(t)}function DynamicPropertyContainer(){}DynamicPropertyContainer.prototype={addDynamicProperty:function(t){-1===this.dynamicProperties.indexOf(t)&&(this.dynamicProperties.push(t),this.container.addDynamicProperty(this),this._isAnimated=!0)},iterateDynamicProperties:function(){this._mdf=!1;var t,e=this.dynamicProperties.length;for(t=0;t<e;t+=1)this.dynamicProperties[t].getValue(),this.dynamicProperties[t]._mdf&&(this._mdf=!0)},initDynamicPropertyContainer:function(t){this.container=t,this.dynamicProperties=[],this._mdf=!1,this._isAnimated=!1}};var getBlendMode=(Ra={0:"source-over",1:"multiply",2:"screen",3:"overlay",4:"darken",5:"lighten",6:"color-dodge",7:"color-burn",8:"hard-light",9:"soft-light",10:"difference",11:"exclusion",12:"hue",13:"saturation",14:"color",15:"luminosity"},function(t){return Ra[t]||""}),Ra,Matrix=function(){var s=Math.cos,a=Math.sin,n=Math.tan,i=Math.round;function t(){return this.props[0]=1,this.props[1]=0,this.props[2]=0,this.props[3]=0,this.props[4]=0,this.props[5]=1,this.props[6]=0,this.props[7]=0,this.props[8]=0,this.props[9]=0,this.props[10]=1,this.props[11]=0,this.props[12]=0,this.props[13]=0,this.props[14]=0,this.props[15]=1,this}function e(t){if(0===t)return this;var e=s(t),r=a(t);return this._t(e,-r,0,0,r,e,0,0,0,0,1,0,0,0,0,1)}function r(t){if(0===t)return this;var e=s(t),r=a(t);return this._t(1,0,0,0,0,e,-r,0,0,r,e,0,0,0,0,1)}function o(t){if(0===t)return this;var e=s(t),r=a(t);return this._t(e,0,r,0,0,1,0,0,-r,0,e,0,0,0,0,1)}function h(t){if(0===t)return this;var e=s(t),r=a(t);return this._t(e,-r,0,0,r,e,0,0,0,0,1,0,0,0,0,1)}function l(t,e){return this._t(1,e,t,1,0,0)}function p(t,e){return this.shear(n(t),n(e))}function m(t,e){var r=s(e),i=a(e);return this._t(r,i,0,0,-i,r,0,0,0,0,1,0,0,0,0,1)._t(1,0,0,0,n(t),1,0,0,0,0,1,0,0,0,0,1)._t(r,-i,0,0,i,r,0,0,0,0,1,0,0,0,0,1)}function f(t,e,r){return r||0===r||(r=1),1===t&&1===e&&1===r?this:this._t(t,0,0,0,0,e,0,0,0,0,r,0,0,0,0,1)}function c(t,e,r,i,s,a,n,o,h,l,p,m,f,c,d,u){return this.props[0]=t,this.props[1]=e,this.props[2]=r,this.props[3]=i,this.props[4]=s,this.props[5]=a,this.props[6]=n,this.props[7]=o,this.props[8]=h,this.props[9]=l,this.props[10]=p,this.props[11]=m,this.props[12]=f,this.props[13]=c,this.props[14]=d,this.props[15]=u,this}function d(t,e,r){return r=r||0,0!==t||0!==e||0!==r?this._t(1,0,0,0,0,1,0,0,0,0,1,0,t,e,r,1):this}function u(t,e,r,i,s,a,n,o,h,l,p,m,f,c,d,u){var y=this.props;if(1===t&&0===e&&0===r&&0===i&&0===s&&1===a&&0===n&&0===o&&0===h&&0===l&&1===p&&0===m)return y[12]=y[12]*t+y[15]*f,y[13]=y[13]*a+y[15]*c,y[14]=y[14]*p+y[15]*d,y[15]=y[15]*u,this._identityCalculated=!1,this;var g=y[0],v=y[1],b=y[2],E=y[3],x=y[4],P=y[5],S=y[6],_=y[7],A=y[8],C=y[9],T=y[10],k=y[11],M=y[12],D=y[13],w=y[14],F=y[15];return y[0]=g*t+v*s+b*h+E*f,y[1]=g*e+v*a+b*l+E*c,y[2]=g*r+v*n+b*p+E*d,y[3]=g*i+v*o+b*m+E*u,y[4]=x*t+P*s+S*h+_*f,y[5]=x*e+P*a+S*l+_*c,y[6]=x*r+P*n+S*p+_*d,y[7]=x*i+P*o+S*m+_*u,y[8]=A*t+C*s+T*h+k*f,y[9]=A*e+C*a+T*l+k*c,y[10]=A*r+C*n+T*p+k*d,y[11]=A*i+C*o+T*m+k*u,y[12]=M*t+D*s+w*h+F*f,y[13]=M*e+D*a+w*l+F*c,y[14]=M*r+D*n+w*p+F*d,y[15]=M*i+D*o+w*m+F*u,this._identityCalculated=!1,this}function y(){return this._identityCalculated||(this._identity=!(1!==this.props[0]||0!==this.props[1]||0!==this.props[2]||0!==this.props[3]||0!==this.props[4]||1!==this.props[5]||0!==this.props[6]||0!==this.props[7]||0!==this.props[8]||0!==this.props[9]||1!==this.props[10]||0!==this.props[11]||0!==this.props[12]||0!==this.props[13]||0!==this.props[14]||1!==this.props[15]),this._identityCalculated=!0),this._identity}function g(t){for(var e=0;e<16;){if(t.props[e]!==this.props[e])return!1;e+=1}return!0}function v(t){var e;for(e=0;e<16;e+=1)t.props[e]=this.props[e]}function b(t){var e;for(e=0;e<16;e+=1)this.props[e]=t[e]}function E(t,e,r){return{x:t*this.props[0]+e*this.props[4]+r*this.props[8]+this.props[12],y:t*this.props[1]+e*this.props[5]+r*this.props[9]+this.props[13],z:t*this.props[2]+e*this.props[6]+r*this.props[10]+this.props[14]}}function x(t,e,r){return t*this.props[0]+e*this.props[4]+r*this.props[8]+this.props[12]}function P(t,e,r){return t*this.props[1]+e*this.props[5]+r*this.props[9]+this.props[13]}function S(t,e,r){return t*this.props[2]+e*this.props[6]+r*this.props[10]+this.props[14]}function _(t){var e=this.props[0]*this.props[5]-this.props[1]*this.props[4],r=this.props[5]/e,i=-this.props[1]/e,s=-this.props[4]/e,a=this.props[0]/e,n=(this.props[4]*this.props[13]-this.props[5]*this.props[12])/e,o=-(this.props[0]*this.props[13]-this.props[1]*this.props[12])/e;return[t[0]*r+t[1]*s+n,t[0]*i+t[1]*a+o,0]}function A(t){var e,r=t.length,i=[];for(e=0;e<r;e+=1)i[e]=_(t[e]);return i}function C(t,e,r){var i=createTypedArray("float32",6);if(this.isIdentity())i[0]=t[0],i[1]=t[1],i[2]=e[0],i[3]=e[1],i[4]=r[0],i[5]=r[1];else{var s=this.props[0],a=this.props[1],n=this.props[4],o=this.props[5],h=this.props[12],l=this.props[13];i[0]=t[0]*s+t[1]*n+h,i[1]=t[0]*a+t[1]*o+l,i[2]=e[0]*s+e[1]*n+h,i[3]=e[0]*a+e[1]*o+l,i[4]=r[0]*s+r[1]*n+h,i[5]=r[0]*a+r[1]*o+l}return i}function T(t,e,r){return this.isIdentity()?[t,e,r]:[t*this.props[0]+e*this.props[4]+r*this.props[8]+this.props[12],t*this.props[1]+e*this.props[5]+r*this.props[9]+this.props[13],t*this.props[2]+e*this.props[6]+r*this.props[10]+this.props[14]]}function k(t,e){if(this.isIdentity())return t+","+e;var r=this.props;return Math.round(100*(t*r[0]+e*r[4]+r[12]))/100+","+Math.round(100*(t*r[1]+e*r[5]+r[13]))/100}function M(){for(var t=0,e=this.props,r="matrix3d(";t<16;)r+=i(1e4*e[t])/1e4,r+=15===t?")":",",t+=1;return r}function D(t){return t<1e-6&&0<t||-1e-6<t&&t<0?i(1e4*t)/1e4:t}function w(){var t=this.props;return"matrix("+D(t[0])+","+D(t[1])+","+D(t[4])+","+D(t[5])+","+D(t[12])+","+D(t[13])+")"}return function(){this.reset=t,this.rotate=e,this.rotateX=r,this.rotateY=o,this.rotateZ=h,this.skew=p,this.skewFromAxis=m,this.shear=l,this.scale=f,this.setTransform=c,this.translate=d,this.transform=u,this.applyToPoint=E,this.applyToX=x,this.applyToY=P,this.applyToZ=S,this.applyToPointArray=T,this.applyToTriplePoints=C,this.applyToPointStringified=k,this.toCSS=M,this.to2dCSS=w,this.clone=v,this.cloneFromProps=b,this.equals=g,this.inversePoints=A,this.inversePoint=_,this._t=this.transform,this.isIdentity=y,this._identity=!0,this._identityCalculated=!1,this.props=createTypedArray("float32",16),this.reset()}}();!function(o,h){var l,p=this,m=256,f=6,c="random",d=h.pow(m,f),u=h.pow(2,52),y=2*u,g=m-1;function v(t){var e,r=t.length,n=this,i=0,s=n.i=n.j=0,a=n.S=[];for(r||(t=[r++]);i<m;)a[i]=i++;for(i=0;i<m;i++)a[i]=a[s=g&s+t[i%r]+(e=a[i])],a[s]=e;n.g=function(t){for(var e,r=0,i=n.i,s=n.j,a=n.S;t--;)e=a[i=g&i+1],r=r*m+a[g&(a[i]=a[s=g&s+e])+(a[s]=e)];return n.i=i,n.j=s,r}}function b(t,e){return e.i=t.i,e.j=t.j,e.S=t.S.slice(),e}function E(t,e){for(var r,i=t+"",s=0;s<i.length;)e[g&s]=g&(r^=19*e[g&s])+i.charCodeAt(s++);return x(e)}function x(t){return String.fromCharCode.apply(0,t)}h["seed"+c]=function(t,e,r){var i=[],s=E(function t(e,r){var i,s=[],a=typeof e;if(r&&"object"==a)for(i in e)try{s.push(t(e[i],r-1))}catch(t){}return s.length?s:"string"==a?e:e+"\0"}((e=!0===e?{entropy:!0}:e||{}).entropy?[t,x(o)]:null===t?function(){try{if(l)return x(l.randomBytes(m));var t=new Uint8Array(m);return(p.crypto||p.msCrypto).getRandomValues(t),x(t)}catch(t){var e=p.navigator,r=e&&e.plugins;return[+new Date,p,r,p.screen,x(o)]}}():t,3),i),a=new v(i),n=function(){for(var t=a.g(f),e=d,r=0;t<u;)t=(t+r)*m,e*=m,r=a.g(1);for(;y<=t;)t/=2,e/=2,r>>>=1;return(t+r)/e};return n.int32=function(){return 0|a.g(4)},n.quick=function(){return a.g(4)/4294967296},n.double=n,E(x(a.S),o),(e.pass||r||function(t,e,r,i){return i&&(i.S&&b(i,a),t.state=function(){return b(a,{})}),r?(h[c]=t,e):t})(n,s,"global"in e?e.global:this==h,e.state)},E(h.random(),o)}([],BMMath);var BezierFactory=function(){var t={getBezierEasing:function(t,e,r,i,s){var a=s||("bez_"+t+"_"+e+"_"+r+"_"+i).replace(/\./g,"p");if(o[a])return o[a];var n=new h([t,e,r,i]);return o[a]=n}},o={};var l=11,p=1/(l-1),e="function"==typeof Float32Array;function i(t,e){return 1-3*e+3*t}function s(t,e){return 3*e-6*t}function a(t){return 3*t}function m(t,e,r){return((i(e,r)*t+s(e,r))*t+a(e))*t}function f(t,e,r){return 3*i(e,r)*t*t+2*s(e,r)*t+a(e)}function h(t){this._p=t,this._mSampleValues=e?new Float32Array(l):new Array(l),this._precomputed=!1,this.get=this.get.bind(this)}return h.prototype={get:function(t){var e=this._p[0],r=this._p[1],i=this._p[2],s=this._p[3];return this._precomputed||this._precompute(),e===r&&i===s?t:0===t?0:1===t?1:m(this._getTForX(t),r,s)},_precompute:function(){var t=this._p[0],e=this._p[1],r=this._p[2],i=this._p[3];this._precomputed=!0,t===e&&r===i||this._calcSampleValues()},_calcSampleValues:function(){for(var t=this._p[0],e=this._p[2],r=0;r<l;++r)this._mSampleValues[r]=m(r*p,t,e)},_getTForX:function(t){for(var e=this._p[0],r=this._p[2],i=this._mSampleValues,s=0,a=1,n=l-1;a!==n&&i[a]<=t;++a)s+=p;var o=s+(t-i[--a])/(i[a+1]-i[a])*p,h=f(o,e,r);return.001<=h?function(t,e,r,i){for(var s=0;s<4;++s){var a=f(e,r,i);if(0===a)return e;e-=(m(e,r,i)-t)/a}return e}(t,o,e,r):0===h?o:function(t,e,r,i,s){for(var a,n,o=0;0<(a=m(n=e+(r-e)/2,i,s)-t)?r=n:e=n,1e-7<Math.abs(a)&&++o<10;);return n}(t,s,s+p,e,r)}},t}();function extendPrototype(t,e){var r,i,s=t.length;for(r=0;r<s;r+=1)for(var a in i=t[r].prototype)i.hasOwnProperty(a)&&(e.prototype[a]=i[a])}function getDescriptor(t,e){return Object.getOwnPropertyDescriptor(t,e)}function createProxyFunction(t){function e(){}return e.prototype=t,e}function bezFunction(){Math;function y(t,e,r,i,s,a){var n=t*i+e*s+r*a-s*i-a*t-r*e;return-.001<n&&n<.001}var p=function(t,e,r,i){var s,a,n,o,h,l,p=defaultCurveSegments,m=0,f=[],c=[],d=bezier_length_pool.newElement();for(n=r.length,s=0;s<p;s+=1){for(h=s/(p-1),a=l=0;a<n;a+=1)o=bm_pow(1-h,3)*t[a]+3*bm_pow(1-h,2)*h*r[a]+3*(1-h)*bm_pow(h,2)*i[a]+bm_pow(h,3)*e[a],f[a]=o,null!==c[a]&&(l+=bm_pow(f[a]-c[a],2)),c[a]=f[a];l&&(m+=l=bm_sqrt(l)),d.percents[s]=h,d.lengths[s]=m}return d.addedLength=m,d};function g(t){this.segmentLength=0,this.points=new Array(t)}function v(t,e){this.partialLength=t,this.point=e}var b,t=(b={},function(t,e,r,i){var s=(t[0]+"_"+t[1]+"_"+e[0]+"_"+e[1]+"_"+r[0]+"_"+r[1]+"_"+i[0]+"_"+i[1]).replace(/\./g,"p");if(!b[s]){var a,n,o,h,l,p,m,f=defaultCurveSegments,c=0,d=null;2===t.length&&(t[0]!=e[0]||t[1]!=e[1])&&y(t[0],t[1],e[0],e[1],t[0]+r[0],t[1]+r[1])&&y(t[0],t[1],e[0],e[1],e[0]+i[0],e[1]+i[1])&&(f=2);var u=new g(f);for(o=r.length,a=0;a<f;a+=1){for(m=createSizedArray(o),l=a/(f-1),n=p=0;n<o;n+=1)h=bm_pow(1-l,3)*t[n]+3*bm_pow(1-l,2)*l*(t[n]+r[n])+3*(1-l)*bm_pow(l,2)*(e[n]+i[n])+bm_pow(l,3)*e[n],m[n]=h,null!==d&&(p+=bm_pow(m[n]-d[n],2));c+=p=bm_sqrt(p),u.points[a]=new v(p,m),d=m}u.segmentLength=c,b[s]=u}return b[s]});function M(t,e){var r=e.percents,i=e.lengths,s=r.length,a=bm_floor((s-1)*t),n=t*e.addedLength,o=0;if(a===s-1||0===a||n===i[a])return r[a];for(var h=i[a]>n?-1:1,l=!0;l;)if(i[a]<=n&&i[a+1]>n?(o=(n-i[a])/(i[a+1]-i[a]),l=!1):a+=h,a<0||s-1<=a){if(a===s-1)return r[a];l=!1}return r[a]+(r[a+1]-r[a])*o}var D=createTypedArray("float32",8);return{getSegmentsLength:function(t){var e,r=segments_length_pool.newElement(),i=t.c,s=t.v,a=t.o,n=t.i,o=t._length,h=r.lengths,l=0;for(e=0;e<o-1;e+=1)h[e]=p(s[e],s[e+1],a[e],n[e+1]),l+=h[e].addedLength;return i&&o&&(h[e]=p(s[e],s[0],a[e],n[0]),l+=h[e].addedLength),r.totalLength=l,r},getNewSegment:function(t,e,r,i,s,a,n){var o,h=M(s=s<0?0:1<s?1:s,n),l=M(a=1<a?1:a,n),p=t.length,m=1-h,f=1-l,c=m*m*m,d=h*m*m*3,u=h*h*m*3,y=h*h*h,g=m*m*f,v=h*m*f+m*h*f+m*m*l,b=h*h*f+m*h*l+h*m*l,E=h*h*l,x=m*f*f,P=h*f*f+m*l*f+m*f*l,S=h*l*f+m*l*l+h*f*l,_=h*l*l,A=f*f*f,C=l*f*f+f*l*f+f*f*l,T=l*l*f+f*l*l+l*f*l,k=l*l*l;for(o=0;o<p;o+=1)D[4*o]=Math.round(1e3*(c*t[o]+d*r[o]+u*i[o]+y*e[o]))/1e3,D[4*o+1]=Math.round(1e3*(g*t[o]+v*r[o]+b*i[o]+E*e[o]))/1e3,D[4*o+2]=Math.round(1e3*(x*t[o]+P*r[o]+S*i[o]+_*e[o]))/1e3,D[4*o+3]=Math.round(1e3*(A*t[o]+C*r[o]+T*i[o]+k*e[o]))/1e3;return D},getPointInSegment:function(t,e,r,i,s,a){var n=M(s,a),o=1-n;return[Math.round(1e3*(o*o*o*t[0]+(n*o*o+o*n*o+o*o*n)*r[0]+(n*n*o+o*n*n+n*o*n)*i[0]+n*n*n*e[0]))/1e3,Math.round(1e3*(o*o*o*t[1]+(n*o*o+o*n*o+o*o*n)*r[1]+(n*n*o+o*n*n+n*o*n)*i[1]+n*n*n*e[1]))/1e3]},buildBezierData:t,pointOnLine2D:y,pointOnLine3D:function(t,e,r,i,s,a,n,o,h){if(0===r&&0===a&&0===h)return y(t,e,i,s,n,o);var l,p=Math.sqrt(Math.pow(i-t,2)+Math.pow(s-e,2)+Math.pow(a-r,2)),m=Math.sqrt(Math.pow(n-t,2)+Math.pow(o-e,2)+Math.pow(h-r,2)),f=Math.sqrt(Math.pow(n-i,2)+Math.pow(o-s,2)+Math.pow(h-a,2));return-1e-4<(l=m<p?f<p?p-m-f:f-m-p:m<f?f-m-p:m-p-f)&&l<1e-4}}}!function(){for(var a=0,t=["ms","moz","webkit","o"],e=0;e<t.length&&!window.requestAnimationFrame;++e)window.requestAnimationFrame=window[t[e]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[t[e]+"CancelAnimationFrame"]||window[t[e]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t,e){var r=(new Date).getTime(),i=Math.max(0,16-(r-a)),s=setTimeout(function(){t(r+i)},i);return a=r+i,s}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)})}();var bez=bezFunction();function dataFunctionManager(){function c(t,e){for(var r=0,i=e.length;r<i;){if(e[r].id===t)return e[r].layers.__used?JSON.parse(JSON.stringify(e[r].layers)):(e[r].layers.__used=!0,e[r].layers);r+=1}}function d(t){var e,r,i;for(e=t.length-1;0<=e;e-=1)if("sh"==t[e].ty){if(t[e].ks.k.i)u(t[e].ks.k);else for(i=t[e].ks.k.length,r=0;r<i;r+=1)t[e].ks.k[r].s&&u(t[e].ks.k[r].s[0]),t[e].ks.k[r].e&&u(t[e].ks.k[r].e[0]);!0}else"gr"==t[e].ty&&d(t[e].it)}function u(t){var e,r=t.i.length;for(e=0;e<r;e+=1)t.i[e][0]+=t.v[e][0],t.i[e][1]+=t.v[e][1],t.o[e][0]+=t.v[e][0],t.o[e][1]+=t.v[e][1]}function o(t,e){var r=e?e.split("."):[100,100,100];return t[0]>r[0]||!(r[0]>t[0])&&(t[1]>r[1]||!(r[1]>t[1])&&(t[2]>r[2]||!(r[2]>t[2])&&void 0))}var h,r=function(){var i=[4,4,14];function s(t){var e,r,i,s=t.length;for(e=0;e<s;e+=1)5===t[e].ty&&(r=t[e],void 0,i=r.t.d,r.t.d={k:[{s:i,t:0}]})}return function(t){if(o(i,t.v)&&(s(t.layers),t.assets)){var e,r=t.assets.length;for(e=0;e<r;e+=1)t.assets[e].layers&&s(t.assets[e].layers)}}}(),i=(h=[4,7,99],function(t){if(t.chars&&!o(h,t.v)){var e,r,i,s,a,n=t.chars.length;for(e=0;e<n;e+=1)if(t.chars[e].data&&t.chars[e].data.shapes)for(i=(a=t.chars[e].data.shapes[0].it).length,r=0;r<i;r+=1)(s=a[r].ks.k).__converted||(u(a[r].ks.k),s.__converted=!0)}}),s=function(){var i=[4,1,9];function a(t){var e,r,i,s=t.length;for(e=0;e<s;e+=1)if("gr"===t[e].ty)a(t[e].it);else if("fl"===t[e].ty||"st"===t[e].ty)if(t[e].c.k&&t[e].c.k[0].i)for(i=t[e].c.k.length,r=0;r<i;r+=1)t[e].c.k[r].s&&(t[e].c.k[r].s[0]/=255,t[e].c.k[r].s[1]/=255,t[e].c.k[r].s[2]/=255,t[e].c.k[r].s[3]/=255),t[e].c.k[r].e&&(t[e].c.k[r].e[0]/=255,t[e].c.k[r].e[1]/=255,t[e].c.k[r].e[2]/=255,t[e].c.k[r].e[3]/=255);else t[e].c.k[0]/=255,t[e].c.k[1]/=255,t[e].c.k[2]/=255,t[e].c.k[3]/=255}function s(t){var e,r=t.length;for(e=0;e<r;e+=1)4===t[e].ty&&a(t[e].shapes)}return function(t){if(o(i,t.v)&&(s(t.layers),t.assets)){var e,r=t.assets.length;for(e=0;e<r;e+=1)t.assets[e].layers&&s(t.assets[e].layers)}}}(),a=function(){var i=[4,4,18];function l(t){var e,r,i;for(e=t.length-1;0<=e;e-=1)if("sh"==t[e].ty){if(t[e].ks.k.i)t[e].ks.k.c=t[e].closed;else for(i=t[e].ks.k.length,r=0;r<i;r+=1)t[e].ks.k[r].s&&(t[e].ks.k[r].s[0].c=t[e].closed),t[e].ks.k[r].e&&(t[e].ks.k[r].e[0].c=t[e].closed);!0}else"gr"==t[e].ty&&l(t[e].it)}function s(t){var e,r,i,s,a,n,o=t.length;for(r=0;r<o;r+=1){if((e=t[r]).hasMask){var h=e.masksProperties;for(s=h.length,i=0;i<s;i+=1)if(h[i].pt.k.i)h[i].pt.k.c=h[i].cl;else for(n=h[i].pt.k.length,a=0;a<n;a+=1)h[i].pt.k[a].s&&(h[i].pt.k[a].s[0].c=h[i].cl),h[i].pt.k[a].e&&(h[i].pt.k[a].e[0].c=h[i].cl)}4===e.ty&&l(e.shapes)}}return function(t){if(o(i,t.v)&&(s(t.layers),t.assets)){var e,r=t.assets.length;for(e=0;e<r;e+=1)t.assets[e].layers&&s(t.assets[e].layers)}}}();var t={};return t.completeData=function(t,e){t.__complete||(s(t),r(t),i(t),a(t),function t(e,r,i){var s,a,n,o,h,l,p,m=e.length;for(a=0;a<m;a+=1)if("ks"in(s=e[a])&&!s.completed){if(s.completed=!0,s.tt&&(e[a-1].td=s.tt),s.hasMask){var f=s.masksProperties;for(o=f.length,n=0;n<o;n+=1)if(f[n].pt.k.i)u(f[n].pt.k);else for(l=f[n].pt.k.length,h=0;h<l;h+=1)f[n].pt.k[h].s&&u(f[n].pt.k[h].s[0]),f[n].pt.k[h].e&&u(f[n].pt.k[h].e[0])}0===s.ty?(s.layers=c(s.refId,r),t(s.layers,r,i)):4===s.ty?d(s.shapes):5==s.ty&&(0!==(p=s).t.a.length||"m"in p.t.p||(p.singleShape=!0))}}(t.layers,t.assets,e),t.__complete=!0)},t}var dataManager=dataFunctionManager(),FontManager=function(){var a={w:0,size:0,shapes:[]},t=[];function u(t,e){var r=createTag("span");r.style.fontFamily=e;var i=createTag("span");i.innerHTML="giItT1WQy@!-/#",r.style.position="absolute",r.style.left="-10000px",r.style.top="-10000px",r.style.fontSize="300px",r.style.fontVariant="normal",r.style.fontStyle="normal",r.style.fontWeight="normal",r.style.letterSpacing="0",r.appendChild(i),document.body.appendChild(r);var s=i.offsetWidth;return i.style.fontFamily=t+", "+e,{node:i,w:s,parent:r}}t=t.concat([2304,2305,2306,2307,2362,2363,2364,2364,2366,2367,2368,2369,2370,2371,2372,2373,2374,2375,2376,2377,2378,2379,2380,2381,2382,2383,2387,2388,2389,2390,2391,2402,2403]);var e=function(){this.fonts=[],this.chars=null,this.typekitLoaded=0,this.isLoaded=!1,this.initTime=Date.now()};return e.getCombinedCharacterCodes=function(){return t},e.prototype.addChars=function(t){if(t){this.chars||(this.chars=[]);var e,r,i,s=t.length,a=this.chars.length;for(e=0;e<s;e+=1){for(r=0,i=!1;r<a;)this.chars[r].style===t[e].style&&this.chars[r].fFamily===t[e].fFamily&&this.chars[r].ch===t[e].ch&&(i=!0),r+=1;i||(this.chars.push(t[e]),a+=1)}}},e.prototype.addFonts=function(t,e){if(t){if(this.chars)return this.isLoaded=!0,void(this.fonts=t.list);var r,i,s,a,n=t.list,o=n.length,h=o;for(r=0;r<o;r+=1){var l,p,m=!0;if(n[r].loaded=!1,n[r].monoCase=u(n[r].fFamily,"monospace"),n[r].sansCase=u(n[r].fFamily,"sans-serif"),n[r].fPath){if("p"===n[r].fOrigin||3===n[r].origin){if(0<(l=document.querySelectorAll('style[f-forigin="p"][f-family="'+n[r].fFamily+'"], style[f-origin="3"][f-family="'+n[r].fFamily+'"]')).length&&(m=!1),m){var f=createTag("style");f.setAttribute("f-forigin",n[r].fOrigin),f.setAttribute("f-origin",n[r].origin),f.setAttribute("f-family",n[r].fFamily),f.type="text/css",f.innerHTML="@font-face {font-family: "+n[r].fFamily+"; font-style: normal; src: url('"+n[r].fPath+"');}",e.appendChild(f)}}else if("g"===n[r].fOrigin||1===n[r].origin){for(l=document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'),p=0;p<l.length;p++)-1!==l[p].href.indexOf(n[r].fPath)&&(m=!1);if(m){var c=createTag("link");c.setAttribute("f-forigin",n[r].fOrigin),c.setAttribute("f-origin",n[r].origin),c.type="text/css",c.rel="stylesheet",c.href=n[r].fPath,document.body.appendChild(c)}}else if("t"===n[r].fOrigin||2===n[r].origin){for(l=document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'),p=0;p<l.length;p++)n[r].fPath===l[p].src&&(m=!1);if(m){var d=createTag("link");d.setAttribute("f-forigin",n[r].fOrigin),d.setAttribute("f-origin",n[r].origin),d.setAttribute("rel","stylesheet"),d.setAttribute("href",n[r].fPath),e.appendChild(d)}}}else n[r].loaded=!0,h-=1;n[r].helper=(i=e,s=n[r],a=void 0,(a=createNS("text")).style.fontSize="100px",a.setAttribute("font-family",s.fFamily),a.setAttribute("font-style",s.fStyle),a.setAttribute("font-weight",s.fWeight),a.textContent="1",s.fClass?(a.style.fontFamily="inherit",a.setAttribute("class",s.fClass)):a.style.fontFamily=s.fFamily,i.appendChild(a),createTag("canvas").getContext("2d").font=s.fWeight+" "+s.fStyle+" 100px "+s.fFamily,a),n[r].cache={},this.fonts.push(n[r])}0===h?this.isLoaded=!0:setTimeout(this.checkLoadedFonts.bind(this),100)}else this.isLoaded=!0},e.prototype.getCharData=function(t,e,r){for(var i=0,s=this.chars.length;i<s;){if(this.chars[i].ch===t&&this.chars[i].style===e&&this.chars[i].fFamily===r)return this.chars[i];i+=1}return("string"==typeof t&&13!==t.charCodeAt(0)||!t)&&console&&console.warn&&void 0,a},e.prototype.getFontByName=function(t){for(var e=0,r=this.fonts.length;e<r;){if(this.fonts[e].fName===t)return this.fonts[e];e+=1}return this.fonts[0]},e.prototype.measureText=function(t,e,r){var i=this.getFontByName(e),s=t.charCodeAt(0);if(!i.cache[s+1]){var a=i.helper;if(" "===t){a.textContent="|"+t+"|";var n=a.getComputedTextLength();a.textContent="||";var o=a.getComputedTextLength();i.cache[s+1]=(n-o)/100}else a.textContent=t,i.cache[s+1]=a.getComputedTextLength()/100}return i.cache[s+1]*r},e.prototype.checkLoadedFonts=function(){var t,e,r,i=this.fonts.length,s=i;for(t=0;t<i;t+=1)this.fonts[t].loaded?s-=1:"n"===this.fonts[t].fOrigin||0===this.fonts[t].origin?this.fonts[t].loaded=!0:(e=this.fonts[t].monoCase.node,r=this.fonts[t].monoCase.w,e.offsetWidth!==r?(s-=1,this.fonts[t].loaded=!0):(e=this.fonts[t].sansCase.node,r=this.fonts[t].sansCase.w,e.offsetWidth!==r&&(s-=1,this.fonts[t].loaded=!0)),this.fonts[t].loaded&&(this.fonts[t].sansCase.parent.parentNode.removeChild(this.fonts[t].sansCase.parent),this.fonts[t].monoCase.parent.parentNode.removeChild(this.fonts[t].monoCase.parent)));0!==s&&Date.now()-this.initTime<5e3?setTimeout(this.checkLoadedFonts.bind(this),20):setTimeout(function(){this.isLoaded=!0}.bind(this),0)},e.prototype.loaded=function(){return this.isLoaded},e}(),PropertyFactory=function(){var m=initialDefaultFrame,s=Math.abs;function f(t,e){var r,i=this.offsetTime;"multidimensional"===this.propType&&(r=createTypedArray("float32",this.pv.length));for(var s,a,n,o,h,l,p,m,f=e.lastIndex,c=f,d=this.keyframes.length-1,u=!0;u;){if(s=this.keyframes[c],a=this.keyframes[c+1],c===d-1&&t>=a.t-i){s.h&&(s=a),f=0;break}if(a.t-i>t){f=c;break}c<d-1?c+=1:(f=0,u=!1)}var y,g,v,b,E,x,P,S,_,A,C=a.t-i,T=s.t-i;if(s.to){s.bezierData||(s.bezierData=bez.buildBezierData(s.s,a.s||s.e,s.to,s.ti));var k=s.bezierData;if(C<=t||t<T){var M=C<=t?k.points.length-1:0;for(o=k.points[M].point.length,n=0;n<o;n+=1)r[n]=k.points[M].point[n]}else{s.__fnct?m=s.__fnct:(m=BezierFactory.getBezierEasing(s.o.x,s.o.y,s.i.x,s.i.y,s.n).get,s.__fnct=m),h=m((t-T)/(C-T));var D,w=k.segmentLength*h,F=e.lastFrame<t&&e._lastKeyframeIndex===c?e._lastAddedLength:0;for(p=e.lastFrame<t&&e._lastKeyframeIndex===c?e._lastPoint:0,u=!0,l=k.points.length;u;){if(F+=k.points[p].partialLength,0===w||0===h||p===k.points.length-1){for(o=k.points[p].point.length,n=0;n<o;n+=1)r[n]=k.points[p].point[n];break}if(F<=w&&w<F+k.points[p+1].partialLength){for(D=(w-F)/k.points[p+1].partialLength,o=k.points[p].point.length,n=0;n<o;n+=1)r[n]=k.points[p].point[n]+(k.points[p+1].point[n]-k.points[p].point[n])*D;break}p<l-1?p+=1:u=!1}e._lastPoint=p,e._lastAddedLength=F-k.points[p].partialLength,e._lastKeyframeIndex=c}}else{var I,V,R,B,L;if(d=s.s.length,y=a.s||s.e,this.sh&&1!==s.h)if(C<=t)r[0]=y[0],r[1]=y[1],r[2]=y[2];else if(t<=T)r[0]=s.s[0],r[1]=s.s[1],r[2]=s.s[2];else{var G=N(s.s),z=N(y);g=r,v=function(t,e,r){var i,s,a,n,o,h=[],l=t[0],p=t[1],m=t[2],f=t[3],c=e[0],d=e[1],u=e[2],y=e[3];(s=l*c+p*d+m*u+f*y)<0&&(s=-s,c=-c,d=-d,u=-u,y=-y);o=1e-6<1-s?(i=Math.acos(s),a=Math.sin(i),n=Math.sin((1-r)*i)/a,Math.sin(r*i)/a):(n=1-r,r);return h[0]=n*l+o*c,h[1]=n*p+o*d,h[2]=n*m+o*u,h[3]=n*f+o*y,h}(G,z,(t-T)/(C-T)),b=v[0],E=v[1],x=v[2],P=v[3],S=Math.atan2(2*E*P-2*b*x,1-2*E*E-2*x*x),_=Math.asin(2*b*E+2*x*P),A=Math.atan2(2*b*P-2*E*x,1-2*b*b-2*x*x),g[0]=S/degToRads,g[1]=_/degToRads,g[2]=A/degToRads}else for(c=0;c<d;c+=1)1!==s.h&&(h=C<=t?1:t<T?0:(s.o.x.constructor===Array?(s.__fnct||(s.__fnct=[]),s.__fnct[c]?m=s.__fnct[c]:(I=void 0===s.o.x[c]?s.o.x[0]:s.o.x[c],V=void 0===s.o.y[c]?s.o.y[0]:s.o.y[c],R=void 0===s.i.x[c]?s.i.x[0]:s.i.x[c],B=void 0===s.i.y[c]?s.i.y[0]:s.i.y[c],m=BezierFactory.getBezierEasing(I,V,R,B).get,s.__fnct[c]=m)):s.__fnct?m=s.__fnct:(I=s.o.x,V=s.o.y,R=s.i.x,B=s.i.y,m=BezierFactory.getBezierEasing(I,V,R,B).get,s.__fnct=m),m((t-T)/(C-T)))),y=a.s||s.e,L=1===s.h?s.s[c]:s.s[c]+(y[c]-s.s[c])*h,"multidimensional"===this.propType?r[c]=L:r=L}return e.lastIndex=f,r}function N(t){var e=t[0]*degToRads,r=t[1]*degToRads,i=t[2]*degToRads,s=Math.cos(e/2),a=Math.cos(r/2),n=Math.cos(i/2),o=Math.sin(e/2),h=Math.sin(r/2),l=Math.sin(i/2);return[o*h*n+s*a*l,o*a*n+s*h*l,s*h*n-o*a*l,s*a*n-o*h*l]}function c(){var t=this.comp.renderedFrame-this.offsetTime,e=this.keyframes[0].t-this.offsetTime,r=this.keyframes[this.keyframes.length-1].t-this.offsetTime;if(!(t===this._caching.lastFrame||this._caching.lastFrame!==m&&(this._caching.lastFrame>=r&&r<=t||this._caching.lastFrame<e&&t<e))){this._caching.lastFrame>=t&&(this._caching._lastKeyframeIndex=-1,this._caching.lastIndex=0);var i=this.interpolateValue(t,this._caching);this.pv=i}return this._caching.lastFrame=t,this.pv}function d(t){var e;if("unidimensional"===this.propType)e=t*this.mult,1e-5<s(this.v-e)&&(this.v=e,this._mdf=!0);else for(var r=0,i=this.v.length;r<i;)e=t[r]*this.mult,1e-5<s(this.v[r]-e)&&(this.v[r]=e,this._mdf=!0),r+=1}function u(){if(this.elem.globalData.frameId!==this.frameId&&this.effectsSequence.length)if(this.lock)this.setVValue(this.pv);else{this.lock=!0,this._mdf=this._isFirstFrame;var t,e=this.effectsSequence.length,r=this.kf?this.pv:this.data.k;for(t=0;t<e;t+=1)r=this.effectsSequence[t](r);this.setVValue(r),this._isFirstFrame=!1,this.lock=!1,this.frameId=this.elem.globalData.frameId}}function y(t){this.effectsSequence.push(t),this.container.addDynamicProperty(this)}function n(t,e,r,i){this.propType="unidimensional",this.mult=r||1,this.data=e,this.v=r?e.k*r:e.k,this.pv=e.k,this._mdf=!1,this.elem=t,this.container=i,this.comp=t.comp,this.k=!1,this.kf=!1,this.vel=0,this.effectsSequence=[],this._isFirstFrame=!0,this.getValue=u,this.setVValue=d,this.addEffect=y}function o(t,e,r,i){this.propType="multidimensional",this.mult=r||1,this.data=e,this._mdf=!1,this.elem=t,this.container=i,this.comp=t.comp,this.k=!1,this.kf=!1,this.frameId=-1;var s,a=e.k.length;this.v=createTypedArray("float32",a),this.pv=createTypedArray("float32",a);createTypedArray("float32",a);for(this.vel=createTypedArray("float32",a),s=0;s<a;s+=1)this.v[s]=e.k[s]*this.mult,this.pv[s]=e.k[s];this._isFirstFrame=!0,this.effectsSequence=[],this.getValue=u,this.setVValue=d,this.addEffect=y}function h(t,e,r,i){this.propType="unidimensional",this.keyframes=e.k,this.offsetTime=t.data.st,this.frameId=-1,this._caching={lastFrame:m,lastIndex:0,value:0,_lastKeyframeIndex:-1},this.k=!0,this.kf=!0,this.data=e,this.mult=r||1,this.elem=t,this.container=i,this.comp=t.comp,this.v=m,this.pv=m,this._isFirstFrame=!0,this.getValue=u,this.setVValue=d,this.interpolateValue=f,this.effectsSequence=[c.bind(this)],this.addEffect=y}function l(t,e,r,i){this.propType="multidimensional";var s,a,n,o,h,l=e.k.length;for(s=0;s<l-1;s+=1)e.k[s].to&&e.k[s].s&&e.k[s].e&&(a=e.k[s].s,n=e.k[s].e,o=e.k[s].to,h=e.k[s].ti,(2===a.length&&(a[0]!==n[0]||a[1]!==n[1])&&bez.pointOnLine2D(a[0],a[1],n[0],n[1],a[0]+o[0],a[1]+o[1])&&bez.pointOnLine2D(a[0],a[1],n[0],n[1],n[0]+h[0],n[1]+h[1])||3===a.length&&(a[0]!==n[0]||a[1]!==n[1]||a[2]!==n[2])&&bez.pointOnLine3D(a[0],a[1],a[2],n[0],n[1],n[2],a[0]+o[0],a[1]+o[1],a[2]+o[2])&&bez.pointOnLine3D(a[0],a[1],a[2],n[0],n[1],n[2],n[0]+h[0],n[1]+h[1],n[2]+h[2]))&&(e.k[s].to=null,e.k[s].ti=null),a[0]===n[0]&&a[1]===n[1]&&0===o[0]&&0===o[1]&&0===h[0]&&0===h[1]&&(2===a.length||a[2]===n[2]&&0===o[2]&&0===h[2])&&(e.k[s].to=null,e.k[s].ti=null));this.effectsSequence=[c.bind(this)],this.keyframes=e.k,this.offsetTime=t.data.st,this.k=!0,this.kf=!0,this._isFirstFrame=!0,this.mult=r||1,this.elem=t,this.container=i,this.comp=t.comp,this.getValue=u,this.setVValue=d,this.interpolateValue=f,this.frameId=-1;var p=e.k[0].s.length;for(this.v=createTypedArray("float32",p),this.pv=createTypedArray("float32",p),s=0;s<p;s+=1)this.v[s]=m,this.pv[s]=m;this._caching={lastFrame:m,lastIndex:0,value:createTypedArray("float32",p)},this.addEffect=y}return{getProp:function(t,e,r,i,s){var a;if(e.k.length)if("number"==typeof e.k[0])a=new o(t,e,i,s);else switch(r){case 0:a=new h(t,e,i,s);break;case 1:a=new l(t,e,i,s)}else a=new n(t,e,i,s);return a.effectsSequence.length&&s.addDynamicProperty(a),a}}}(),TransformPropertyFactory=function(){function i(t,e,r){if(this.elem=t,this.frameId=-1,this.propType="transform",this.data=e,this.v=new Matrix,this.pre=new Matrix,this.appliedTransformations=0,this.initDynamicPropertyContainer(r||t),e.p&&e.p.s?(this.px=PropertyFactory.getProp(t,e.p.x,0,0,this),this.py=PropertyFactory.getProp(t,e.p.y,0,0,this),e.p.z&&(this.pz=PropertyFactory.getProp(t,e.p.z,0,0,this))):this.p=PropertyFactory.getProp(t,e.p||{k:[0,0,0]},1,0,this),e.rx){if(this.rx=PropertyFactory.getProp(t,e.rx,0,degToRads,this),this.ry=PropertyFactory.getProp(t,e.ry,0,degToRads,this),this.rz=PropertyFactory.getProp(t,e.rz,0,degToRads,this),e.or.k[0].ti){var i,s=e.or.k.length;for(i=0;i<s;i+=1)e.or.k[i].to=e.or.k[i].ti=null}this.or=PropertyFactory.getProp(t,e.or,1,degToRads,this),this.or.sh=!0}else this.r=PropertyFactory.getProp(t,e.r||{k:0},0,degToRads,this);e.sk&&(this.sk=PropertyFactory.getProp(t,e.sk,0,degToRads,this),this.sa=PropertyFactory.getProp(t,e.sa,0,degToRads,this)),this.a=PropertyFactory.getProp(t,e.a||{k:[0,0,0]},1,0,this),this.s=PropertyFactory.getProp(t,e.s||{k:[100,100,100]},1,.01,this),e.o?this.o=PropertyFactory.getProp(t,e.o,0,.01,t):this.o={_mdf:!1,v:1},this._isDirty=!0,this.dynamicProperties.length||this.getValue(!0)}return i.prototype={applyToMatrix:function(t){var e=this._mdf;this.iterateDynamicProperties(),this._mdf=this._mdf||e,this.a&&t.translate(-this.a.v[0],-this.a.v[1],this.a.v[2]),this.s&&t.scale(this.s.v[0],this.s.v[1],this.s.v[2]),this.sk&&t.skewFromAxis(-this.sk.v,this.sa.v),this.r?t.rotate(-this.r.v):t.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),this.data.p.s?this.data.p.z?t.translate(this.px.v,this.py.v,-this.pz.v):t.translate(this.px.v,this.py.v,0):t.translate(this.p.v[0],this.p.v[1],-this.p.v[2])},getValue:function(t){if(this.elem.globalData.frameId!==this.frameId){if(this._isDirty&&(this.precalculateMatrix(),this._isDirty=!1),this.iterateDynamicProperties(),this._mdf||t){if(this.v.cloneFromProps(this.pre.props),this.appliedTransformations<1&&this.v.translate(-this.a.v[0],-this.a.v[1],this.a.v[2]),this.appliedTransformations<2&&this.v.scale(this.s.v[0],this.s.v[1],this.s.v[2]),this.sk&&this.appliedTransformations<3&&this.v.skewFromAxis(-this.sk.v,this.sa.v),this.r&&this.appliedTransformations<4?this.v.rotate(-this.r.v):!this.r&&this.appliedTransformations<4&&this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),this.autoOriented){var e,r,i=this.elem.globalData.frameRate;if(this.p&&this.p.keyframes&&this.p.getValueAtTime)r=this.p._caching.lastFrame+this.p.offsetTime<=this.p.keyframes[0].t?(e=this.p.getValueAtTime((this.p.keyframes[0].t+.01)/i,0),this.p.getValueAtTime(this.p.keyframes[0].t/i,0)):this.p._caching.lastFrame+this.p.offsetTime>=this.p.keyframes[this.p.keyframes.length-1].t?(e=this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length-1].t/i,0),this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length-1].t-.05)/i,0)):(e=this.p.pv,this.p.getValueAtTime((this.p._caching.lastFrame+this.p.offsetTime-.01)/i,this.p.offsetTime));else if(this.px&&this.px.keyframes&&this.py.keyframes&&this.px.getValueAtTime&&this.py.getValueAtTime){e=[],r=[];var s=this.px,a=this.py;s._caching.lastFrame+s.offsetTime<=s.keyframes[0].t?(e[0]=s.getValueAtTime((s.keyframes[0].t+.01)/i,0),e[1]=a.getValueAtTime((a.keyframes[0].t+.01)/i,0),r[0]=s.getValueAtTime(s.keyframes[0].t/i,0),r[1]=a.getValueAtTime(a.keyframes[0].t/i,0)):s._caching.lastFrame+s.offsetTime>=s.keyframes[s.keyframes.length-1].t?(e[0]=s.getValueAtTime(s.keyframes[s.keyframes.length-1].t/i,0),e[1]=a.getValueAtTime(a.keyframes[a.keyframes.length-1].t/i,0),r[0]=s.getValueAtTime((s.keyframes[s.keyframes.length-1].t-.01)/i,0),r[1]=a.getValueAtTime((a.keyframes[a.keyframes.length-1].t-.01)/i,0)):(e=[s.pv,a.pv],r[0]=s.getValueAtTime((s._caching.lastFrame+s.offsetTime-.01)/i,s.offsetTime),r[1]=a.getValueAtTime((a._caching.lastFrame+a.offsetTime-.01)/i,a.offsetTime))}this.v.rotate(-Math.atan2(e[1]-r[1],e[0]-r[0]))}this.data.p&&this.data.p.s?this.data.p.z?this.v.translate(this.px.v,this.py.v,-this.pz.v):this.v.translate(this.px.v,this.py.v,0):this.v.translate(this.p.v[0],this.p.v[1],-this.p.v[2])}this.frameId=this.elem.globalData.frameId}},precalculateMatrix:function(){if(!this.a.k&&(this.pre.translate(-this.a.v[0],-this.a.v[1],this.a.v[2]),this.appliedTransformations=1,!this.s.effectsSequence.length)){if(this.pre.scale(this.s.v[0],this.s.v[1],this.s.v[2]),this.appliedTransformations=2,this.sk){if(this.sk.effectsSequence.length||this.sa.effectsSequence.length)return;this.pre.skewFromAxis(-this.sk.v,this.sa.v),this.appliedTransformations=3}if(this.r){if(this.r.effectsSequence.length)return;this.pre.rotate(-this.r.v),this.appliedTransformations=4}else this.rz.effectsSequence.length||this.ry.effectsSequence.length||this.rx.effectsSequence.length||this.or.effectsSequence.length||(this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),this.appliedTransformations=4)}},autoOrient:function(){}},extendPrototype([DynamicPropertyContainer],i),i.prototype.addDynamicProperty=function(t){this._addDynamicProperty(t),this.elem.addDynamicProperty(t),this._isDirty=!0},i.prototype._addDynamicProperty=DynamicPropertyContainer.prototype.addDynamicProperty,{getTransformProperty:function(t,e,r){return new i(t,e,r)}}}();function ShapePath(){this.c=!1,this._length=0,this._maxLength=8,this.v=createSizedArray(this._maxLength),this.o=createSizedArray(this._maxLength),this.i=createSizedArray(this._maxLength)}ShapePath.prototype.setPathData=function(t,e){this.c=t,this.setLength(e);for(var r=0;r<e;)this.v[r]=point_pool.newElement(),this.o[r]=point_pool.newElement(),this.i[r]=point_pool.newElement(),r+=1},ShapePath.prototype.setLength=function(t){for(;this._maxLength<t;)this.doubleArrayLength();this._length=t},ShapePath.prototype.doubleArrayLength=function(){this.v=this.v.concat(createSizedArray(this._maxLength)),this.i=this.i.concat(createSizedArray(this._maxLength)),this.o=this.o.concat(createSizedArray(this._maxLength)),this._maxLength*=2},ShapePath.prototype.setXYAt=function(t,e,r,i,s){var a;switch(this._length=Math.max(this._length,i+1),this._length>=this._maxLength&&this.doubleArrayLength(),r){case"v":a=this.v;break;case"i":a=this.i;break;case"o":a=this.o}(!a[i]||a[i]&&!s)&&(a[i]=point_pool.newElement()),a[i][0]=t,a[i][1]=e},ShapePath.prototype.setTripleAt=function(t,e,r,i,s,a,n,o){this.setXYAt(t,e,"v",n,o),this.setXYAt(r,i,"o",n,o),this.setXYAt(s,a,"i",n,o)},ShapePath.prototype.reverse=function(){var t=new ShapePath;t.setPathData(this.c,this._length);var e=this.v,r=this.o,i=this.i,s=0;this.c&&(t.setTripleAt(e[0][0],e[0][1],i[0][0],i[0][1],r[0][0],r[0][1],0,!1),s=1);var a,n=this._length-1,o=this._length;for(a=s;a<o;a+=1)t.setTripleAt(e[n][0],e[n][1],i[n][0],i[n][1],r[n][0],r[n][1],a,!1),n-=1;return t};var ShapePropertyFactory=function(){var s=-999999;function t(t,e,r){var i,s,a,n,o,h,l,p,m,f=r.lastIndex,c=this.keyframes;if(t<c[0].t-this.offsetTime)i=c[0].s[0],a=!0,f=0;else if(t>=c[c.length-1].t-this.offsetTime)i=c[c.length-1].s?c[c.length-1].s[0]:c[c.length-2].e[0],a=!0;else{for(var d,u,y=f,g=c.length-1,v=!0;v&&(d=c[y],!((u=c[y+1]).t-this.offsetTime>t));)y<g-1?y+=1:v=!1;if(f=y,!(a=1===d.h)){if(t>=u.t-this.offsetTime)p=1;else if(t<d.t-this.offsetTime)p=0;else{var b;d.__fnct?b=d.__fnct:(b=BezierFactory.getBezierEasing(d.o.x,d.o.y,d.i.x,d.i.y).get,d.__fnct=b),p=b((t-(d.t-this.offsetTime))/(u.t-this.offsetTime-(d.t-this.offsetTime)))}s=u.s?u.s[0]:d.e[0]}i=d.s[0]}for(h=e._length,l=i.i[0].length,r.lastIndex=f,n=0;n<h;n+=1)for(o=0;o<l;o+=1)m=a?i.i[n][o]:i.i[n][o]+(s.i[n][o]-i.i[n][o])*p,e.i[n][o]=m,m=a?i.o[n][o]:i.o[n][o]+(s.o[n][o]-i.o[n][o])*p,e.o[n][o]=m,m=a?i.v[n][o]:i.v[n][o]+(s.v[n][o]-i.v[n][o])*p,e.v[n][o]=m}function a(){this.paths=this.localShapeCollection}function e(t){(function(t,e){if(t._length!==e._length||t.c!==e.c)return!1;var r,i=t._length;for(r=0;r<i;r+=1)if(t.v[r][0]!==e.v[r][0]||t.v[r][1]!==e.v[r][1]||t.o[r][0]!==e.o[r][0]||t.o[r][1]!==e.o[r][1]||t.i[r][0]!==e.i[r][0]||t.i[r][1]!==e.i[r][1])return!1;return!0})(this.v,t)||(this.v=shape_pool.clone(t),this.localShapeCollection.releaseShapes(),this.localShapeCollection.addShape(this.v),this._mdf=!0,this.paths=this.localShapeCollection)}function r(){if(this.elem.globalData.frameId!==this.frameId)if(this.effectsSequence.length)if(this.lock)this.setVValue(this.pv);else{this.lock=!0,this._mdf=!1;var t,e=this.kf?this.pv:this.data.ks?this.data.ks.k:this.data.pt.k,r=this.effectsSequence.length;for(t=0;t<r;t+=1)e=this.effectsSequence[t](e);this.setVValue(e),this.lock=!1,this.frameId=this.elem.globalData.frameId}else this._mdf=!1}function n(t,e,r){this.propType="shape",this.comp=t.comp,this.container=t,this.elem=t,this.data=e,this.k=!1,this.kf=!1,this._mdf=!1;var i=3===r?e.pt.k:e.ks.k;this.v=shape_pool.clone(i),this.pv=shape_pool.clone(this.v),this.localShapeCollection=shapeCollection_pool.newShapeCollection(),this.paths=this.localShapeCollection,this.paths.addShape(this.v),this.reset=a,this.effectsSequence=[]}function i(t){this.effectsSequence.push(t),this.container.addDynamicProperty(this)}function o(t,e,r){this.propType="shape",this.comp=t.comp,this.elem=t,this.container=t,this.offsetTime=t.data.st,this.keyframes=3===r?e.pt.k:e.ks.k,this.k=!0,this.kf=!0;var i=this.keyframes[0].s[0].i.length;this.keyframes[0].s[0].i[0].length;this.v=shape_pool.newElement(),this.v.setPathData(this.keyframes[0].s[0].c,i),this.pv=shape_pool.clone(this.v),this.localShapeCollection=shapeCollection_pool.newShapeCollection(),this.paths=this.localShapeCollection,this.paths.addShape(this.v),this.lastFrame=s,this.reset=a,this._caching={lastFrame:s,lastIndex:0},this.effectsSequence=[function(){var t=this.comp.renderedFrame-this.offsetTime,e=this.keyframes[0].t-this.offsetTime,r=this.keyframes[this.keyframes.length-1].t-this.offsetTime,i=this._caching.lastFrame;return i!==s&&(i<e&&t<e||r<i&&r<t)||(this._caching.lastIndex=i<t?this._caching.lastIndex:0,this.interpolateShape(t,this.pv,this._caching)),this._caching.lastFrame=t,this.pv}.bind(this)]}n.prototype.interpolateShape=t,n.prototype.getValue=r,n.prototype.setVValue=e,n.prototype.addEffect=i,o.prototype.getValue=r,o.prototype.interpolateShape=t,o.prototype.setVValue=e,o.prototype.addEffect=i;var h=function(){var n=roundCorner;function t(t,e){this.v=shape_pool.newElement(),this.v.setPathData(!0,4),this.localShapeCollection=shapeCollection_pool.newShapeCollection(),this.paths=this.localShapeCollection,this.localShapeCollection.addShape(this.v),this.d=e.d,this.elem=t,this.comp=t.comp,this.frameId=-1,this.initDynamicPropertyContainer(t),this.p=PropertyFactory.getProp(t,e.p,1,0,this),this.s=PropertyFactory.getProp(t,e.s,1,0,this),this.dynamicProperties.length?this.k=!0:(this.k=!1,this.convertEllToPath())}return t.prototype={reset:a,getValue:function(){this.elem.globalData.frameId!==this.frameId&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties(),this._mdf&&this.convertEllToPath())},convertEllToPath:function(){var t=this.p.v[0],e=this.p.v[1],r=this.s.v[0]/2,i=this.s.v[1]/2,s=3!==this.d,a=this.v;a.v[0][0]=t,a.v[0][1]=e-i,a.v[1][0]=s?t+r:t-r,a.v[1][1]=e,a.v[2][0]=t,a.v[2][1]=e+i,a.v[3][0]=s?t-r:t+r,a.v[3][1]=e,a.i[0][0]=s?t-r*n:t+r*n,a.i[0][1]=e-i,a.i[1][0]=s?t+r:t-r,a.i[1][1]=e-i*n,a.i[2][0]=s?t+r*n:t-r*n,a.i[2][1]=e+i,a.i[3][0]=s?t-r:t+r,a.i[3][1]=e+i*n,a.o[0][0]=s?t+r*n:t-r*n,a.o[0][1]=e-i,a.o[1][0]=s?t+r:t-r,a.o[1][1]=e+i*n,a.o[2][0]=s?t-r*n:t+r*n,a.o[2][1]=e+i,a.o[3][0]=s?t-r:t+r,a.o[3][1]=e-i*n}},extendPrototype([DynamicPropertyContainer],t),t}(),l=function(){function t(t,e){this.v=shape_pool.newElement(),this.v.setPathData(!0,0),this.elem=t,this.comp=t.comp,this.data=e,this.frameId=-1,this.d=e.d,this.initDynamicPropertyContainer(t),1===e.sy?(this.ir=PropertyFactory.getProp(t,e.ir,0,0,this),this.is=PropertyFactory.getProp(t,e.is,0,.01,this),this.convertToPath=this.convertStarToPath):this.convertToPath=this.convertPolygonToPath,this.pt=PropertyFactory.getProp(t,e.pt,0,0,this),this.p=PropertyFactory.getProp(t,e.p,1,0,this),this.r=PropertyFactory.getProp(t,e.r,0,degToRads,this),this.or=PropertyFactory.getProp(t,e.or,0,0,this),this.os=PropertyFactory.getProp(t,e.os,0,.01,this),this.localShapeCollection=shapeCollection_pool.newShapeCollection(),this.localShapeCollection.addShape(this.v),this.paths=this.localShapeCollection,this.dynamicProperties.length?this.k=!0:(this.k=!1,this.convertToPath())}return t.prototype={reset:a,getValue:function(){this.elem.globalData.frameId!==this.frameId&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties(),this._mdf&&this.convertToPath())},convertStarToPath:function(){var t,e,r,i,s=2*Math.floor(this.pt.v),a=2*Math.PI/s,n=!0,o=this.or.v,h=this.ir.v,l=this.os.v,p=this.is.v,m=2*Math.PI*o/(2*s),f=2*Math.PI*h/(2*s),c=-Math.PI/2;c+=this.r.v;var d=3===this.data.d?-1:1;for(t=this.v._length=0;t<s;t+=1){r=n?l:p,i=n?m:f;var u=(e=n?o:h)*Math.cos(c),y=e*Math.sin(c),g=0===u&&0===y?0:y/Math.sqrt(u*u+y*y),v=0===u&&0===y?0:-u/Math.sqrt(u*u+y*y);u+=+this.p.v[0],y+=+this.p.v[1],this.v.setTripleAt(u,y,u-g*i*r*d,y-v*i*r*d,u+g*i*r*d,y+v*i*r*d,t,!0),n=!n,c+=a*d}},convertPolygonToPath:function(){var t,e=Math.floor(this.pt.v),r=2*Math.PI/e,i=this.or.v,s=this.os.v,a=2*Math.PI*i/(4*e),n=-Math.PI/2,o=3===this.data.d?-1:1;for(n+=this.r.v,t=this.v._length=0;t<e;t+=1){var h=i*Math.cos(n),l=i*Math.sin(n),p=0===h&&0===l?0:l/Math.sqrt(h*h+l*l),m=0===h&&0===l?0:-h/Math.sqrt(h*h+l*l);h+=+this.p.v[0],l+=+this.p.v[1],this.v.setTripleAt(h,l,h-p*a*s*o,l-m*a*s*o,h+p*a*s*o,l+m*a*s*o,t,!0),n+=r*o}this.paths.length=0,this.paths[0]=this.v}},extendPrototype([DynamicPropertyContainer],t),t}(),p=function(){function t(t,e){this.v=shape_pool.newElement(),this.v.c=!0,this.localShapeCollection=shapeCollection_pool.newShapeCollection(),this.localShapeCollection.addShape(this.v),this.paths=this.localShapeCollection,this.elem=t,this.comp=t.comp,this.frameId=-1,this.d=e.d,this.initDynamicPropertyContainer(t),this.p=PropertyFactory.getProp(t,e.p,1,0,this),this.s=PropertyFactory.getProp(t,e.s,1,0,this),this.r=PropertyFactory.getProp(t,e.r,0,0,this),this.dynamicProperties.length?this.k=!0:(this.k=!1,this.convertRectToPath())}return t.prototype={convertRectToPath:function(){var t=this.p.v[0],e=this.p.v[1],r=this.s.v[0]/2,i=this.s.v[1]/2,s=bm_min(r,i,this.r.v),a=s*(1-roundCorner);this.v._length=0,2===this.d||1===this.d?(this.v.setTripleAt(t+r,e-i+s,t+r,e-i+s,t+r,e-i+a,0,!0),this.v.setTripleAt(t+r,e+i-s,t+r,e+i-a,t+r,e+i-s,1,!0),0!==s?(this.v.setTripleAt(t+r-s,e+i,t+r-s,e+i,t+r-a,e+i,2,!0),this.v.setTripleAt(t-r+s,e+i,t-r+a,e+i,t-r+s,e+i,3,!0),this.v.setTripleAt(t-r,e+i-s,t-r,e+i-s,t-r,e+i-a,4,!0),this.v.setTripleAt(t-r,e-i+s,t-r,e-i+a,t-r,e-i+s,5,!0),this.v.setTripleAt(t-r+s,e-i,t-r+s,e-i,t-r+a,e-i,6,!0),this.v.setTripleAt(t+r-s,e-i,t+r-a,e-i,t+r-s,e-i,7,!0)):(this.v.setTripleAt(t-r,e+i,t-r+a,e+i,t-r,e+i,2),this.v.setTripleAt(t-r,e-i,t-r,e-i+a,t-r,e-i,3))):(this.v.setTripleAt(t+r,e-i+s,t+r,e-i+a,t+r,e-i+s,0,!0),0!==s?(this.v.setTripleAt(t+r-s,e-i,t+r-s,e-i,t+r-a,e-i,1,!0),this.v.setTripleAt(t-r+s,e-i,t-r+a,e-i,t-r+s,e-i,2,!0),this.v.setTripleAt(t-r,e-i+s,t-r,e-i+s,t-r,e-i+a,3,!0),this.v.setTripleAt(t-r,e+i-s,t-r,e+i-a,t-r,e+i-s,4,!0),this.v.setTripleAt(t-r+s,e+i,t-r+s,e+i,t-r+a,e+i,5,!0),this.v.setTripleAt(t+r-s,e+i,t+r-a,e+i,t+r-s,e+i,6,!0),this.v.setTripleAt(t+r,e+i-s,t+r,e+i-s,t+r,e+i-a,7,!0)):(this.v.setTripleAt(t-r,e-i,t-r+a,e-i,t-r,e-i,1,!0),this.v.setTripleAt(t-r,e+i,t-r,e+i-a,t-r,e+i,2,!0),this.v.setTripleAt(t+r,e+i,t+r-a,e+i,t+r,e+i,3,!0)))},getValue:function(t){this.elem.globalData.frameId!==this.frameId&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties(),this._mdf&&this.convertRectToPath())},reset:a},extendPrototype([DynamicPropertyContainer],t),t}();var m={getShapeProp:function(t,e,r){var i;return 3===r||4===r?i=(3===r?e.pt:e.ks).k.length?new o(t,e,r):new n(t,e,r):5===r?i=new p(t,e):6===r?i=new h(t,e):7===r&&(i=new l(t,e)),i.k&&t.addDynamicProperty(i),i},getConstructorFunction:function(){return n},getKeyframedConstructorFunction:function(){return o}};return m}(),ShapeModifiers=(Yr={},Zr={},Yr.registerModifier=function(t,e){Zr[t]||(Zr[t]=e)},Yr.getModifier=function(t,e,r){return new Zr[t](e,r)},Yr),Yr,Zr;function ShapeModifier(){}function TrimModifier(){}function RoundCornersModifier(){}function RepeaterModifier(){}function ShapeCollection(){this._length=0,this._maxLength=4,this.shapes=createSizedArray(this._maxLength)}function DashProperty(t,e,r,i){this.elem=t,this.frameId=-1,this.dataProps=createSizedArray(e.length),this.renderer=r,this.k=!1,this.dashStr="",this.dashArray=createTypedArray("float32",e.length?e.length-1:0),this.dashoffset=createTypedArray("float32",1),this.initDynamicPropertyContainer(i);var s,a,n=e.length||0;for(s=0;s<n;s+=1)a=PropertyFactory.getProp(t,e[s].v,0,0,this),this.k=a.k||this.k,this.dataProps[s]={n:e[s].n,p:a};this.k||this.getValue(!0),this._isAnimated=this.k}function GradientProperty(t,e,r){this.data=e,this.c=createTypedArray("uint8c",4*e.p);var i=e.k.k[0].s?e.k.k[0].s.length-4*e.p:e.k.k.length-4*e.p;this.o=createTypedArray("float32",i),this._cmdf=!1,this._omdf=!1,this._collapsable=this.checkCollapsable(),this._hasOpacity=i,this.initDynamicPropertyContainer(r),this.prop=PropertyFactory.getProp(t,e.k,1,null,this),this.k=this.prop.k,this.getValue(!0)}ShapeModifier.prototype.initModifierProperties=function(){},ShapeModifier.prototype.addShapeToModifier=function(){},ShapeModifier.prototype.addShape=function(t){if(!this.closed){t.sh.container.addDynamicProperty(t.sh);var e={shape:t.sh,data:t,localShapeCollection:shapeCollection_pool.newShapeCollection()};this.shapes.push(e),this.addShapeToModifier(e),this._isAnimated&&t.setAsAnimated()}},ShapeModifier.prototype.init=function(t,e){this.shapes=[],this.elem=t,this.initDynamicPropertyContainer(t),this.initModifierProperties(t,e),this.frameId=initialDefaultFrame,this.closed=!1,this.k=!1,this.dynamicProperties.length?this.k=!0:this.getValue(!0)},ShapeModifier.prototype.processKeys=function(){this.elem.globalData.frameId!==this.frameId&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties())},extendPrototype([DynamicPropertyContainer],ShapeModifier),extendPrototype([ShapeModifier],TrimModifier),TrimModifier.prototype.initModifierProperties=function(t,e){this.s=PropertyFactory.getProp(t,e.s,0,.01,this),this.e=PropertyFactory.getProp(t,e.e,0,.01,this),this.o=PropertyFactory.getProp(t,e.o,0,0,this),this.sValue=0,this.eValue=0,this.getValue=this.processKeys,this.m=e.m,this._isAnimated=!!this.s.effectsSequence.length||!!this.e.effectsSequence.length||!!this.o.effectsSequence.length},TrimModifier.prototype.addShapeToModifier=function(t){t.pathsData=[]},TrimModifier.prototype.calculateShapeEdges=function(t,e,r,i,s){var a=[];e<=1?a.push({s:t,e:e}):1<=t?a.push({s:t-1,e:e-1}):(a.push({s:t,e:1}),a.push({s:0,e:e-1}));var n,o,h=[],l=a.length;for(n=0;n<l;n+=1){var p,m;if((o=a[n]).e*s<i||o.s*s>i+r);else p=o.s*s<=i?0:(o.s*s-i)/r,m=o.e*s>=i+r?1:(o.e*s-i)/r,h.push([p,m])}return h.length||h.push([0,0]),h},TrimModifier.prototype.releasePathsData=function(t){var e,r=t.length;for(e=0;e<r;e+=1)segments_length_pool.release(t[e]);return t.length=0,t},TrimModifier.prototype.processShapes=function(t){var e,r,i;if(this._mdf||t){var s=this.o.v%360/360;if(s<0&&(s+=1),e=(1<this.s.v?1:this.s.v<0?0:this.s.v)+s,(r=(1<this.e.v?1:this.e.v<0?0:this.e.v)+s)<e){var a=e;e=r,r=a}e=1e-4*Math.round(1e4*e),r=1e-4*Math.round(1e4*r),this.sValue=e,this.eValue=r}else e=this.sValue,r=this.eValue;var n,o,h,l,p,m,f=this.shapes.length,c=0;if(r===e)for(n=0;n<f;n+=1)this.shapes[n].localShapeCollection.releaseShapes(),this.shapes[n].shape._mdf=!0,this.shapes[n].shape.paths=this.shapes[n].localShapeCollection;else if(1===r&&0===e||0===r&&1===e){if(this._mdf)for(n=0;n<f;n+=1)this.shapes[n].pathsData.length=0,this.shapes[n].shape._mdf=!0}else{var d,u,y=[];for(n=0;n<f;n+=1)if((d=this.shapes[n]).shape._mdf||this._mdf||t||2===this.m){if(h=(i=d.shape.paths)._length,m=0,!d.shape._mdf&&d.pathsData.length)m=d.totalShapeLength;else{for(l=this.releasePathsData(d.pathsData),o=0;o<h;o+=1)p=bez.getSegmentsLength(i.shapes[o]),l.push(p),m+=p.totalLength;d.totalShapeLength=m,d.pathsData=l}c+=m,d.shape._mdf=!0}else d.shape.paths=d.localShapeCollection;var g,v=e,b=r,E=0;for(n=f-1;0<=n;n-=1)if((d=this.shapes[n]).shape._mdf){for((u=d.localShapeCollection).releaseShapes(),2===this.m&&1<f?(g=this.calculateShapeEdges(e,r,d.totalShapeLength,E,c),E+=d.totalShapeLength):g=[[v,b]],h=g.length,o=0;o<h;o+=1){v=g[o][0],b=g[o][1],y.length=0,b<=1?y.push({s:d.totalShapeLength*v,e:d.totalShapeLength*b}):1<=v?y.push({s:d.totalShapeLength*(v-1),e:d.totalShapeLength*(b-1)}):(y.push({s:d.totalShapeLength*v,e:d.totalShapeLength}),y.push({s:0,e:d.totalShapeLength*(b-1)}));var x=this.addShapes(d,y[0]);if(y[0].s!==y[0].e){if(1<y.length)if(d.shape.paths.shapes[d.shape.paths._length-1].c){var P=x.pop();this.addPaths(x,u),x=this.addShapes(d,y[1],P)}else this.addPaths(x,u),x=this.addShapes(d,y[1]);this.addPaths(x,u)}}d.shape.paths=u}}},TrimModifier.prototype.addPaths=function(t,e){var r,i=t.length;for(r=0;r<i;r+=1)e.addShape(t[r])},TrimModifier.prototype.addSegment=function(t,e,r,i,s,a,n){s.setXYAt(e[0],e[1],"o",a),s.setXYAt(r[0],r[1],"i",a+1),n&&s.setXYAt(t[0],t[1],"v",a),s.setXYAt(i[0],i[1],"v",a+1)},TrimModifier.prototype.addSegmentFromArray=function(t,e,r,i){e.setXYAt(t[1],t[5],"o",r),e.setXYAt(t[2],t[6],"i",r+1),i&&e.setXYAt(t[0],t[4],"v",r),e.setXYAt(t[3],t[7],"v",r+1)},TrimModifier.prototype.addShapes=function(t,e,r){var i,s,a,n,o,h,l,p,m=t.pathsData,f=t.shape.paths.shapes,c=t.shape.paths._length,d=0,u=[],y=!0;for(p=r?(o=r._length,r._length):(r=shape_pool.newElement(),o=0),u.push(r),i=0;i<c;i+=1){for(h=m[i].lengths,r.c=f[i].c,a=f[i].c?h.length:h.length+1,s=1;s<a;s+=1)if(d+(n=h[s-1]).addedLength<e.s)d+=n.addedLength,r.c=!1;else{if(d>e.e){r.c=!1;break}e.s<=d&&e.e>=d+n.addedLength?(this.addSegment(f[i].v[s-1],f[i].o[s-1],f[i].i[s],f[i].v[s],r,o,y),y=!1):(l=bez.getNewSegment(f[i].v[s-1],f[i].v[s],f[i].o[s-1],f[i].i[s],(e.s-d)/n.addedLength,(e.e-d)/n.addedLength,h[s-1]),this.addSegmentFromArray(l,r,o,y),y=!1,r.c=!1),d+=n.addedLength,o+=1}if(f[i].c&&h.length){if(n=h[s-1],d<=e.e){var g=h[s-1].addedLength;e.s<=d&&e.e>=d+g?(this.addSegment(f[i].v[s-1],f[i].o[s-1],f[i].i[0],f[i].v[0],r,o,y),y=!1):(l=bez.getNewSegment(f[i].v[s-1],f[i].v[0],f[i].o[s-1],f[i].i[0],(e.s-d)/g,(e.e-d)/g,h[s-1]),this.addSegmentFromArray(l,r,o,y),y=!1,r.c=!1)}else r.c=!1;d+=n.addedLength,o+=1}if(r._length&&(r.setXYAt(r.v[p][0],r.v[p][1],"i",p),r.setXYAt(r.v[r._length-1][0],r.v[r._length-1][1],"o",r._length-1)),d>e.e)break;i<c-1&&(r=shape_pool.newElement(),y=!0,u.push(r),o=0)}return u},ShapeModifiers.registerModifier("tm",TrimModifier),extendPrototype([ShapeModifier],RoundCornersModifier),RoundCornersModifier.prototype.initModifierProperties=function(t,e){this.getValue=this.processKeys,this.rd=PropertyFactory.getProp(t,e.r,0,null,this),this._isAnimated=!!this.rd.effectsSequence.length},RoundCornersModifier.prototype.processPath=function(t,e){var r=shape_pool.newElement();r.c=t.c;var i,s,a,n,o,h,l,p,m,f,c,d,u,y=t._length,g=0;for(i=0;i<y;i+=1)s=t.v[i],n=t.o[i],a=t.i[i],s[0]===n[0]&&s[1]===n[1]&&s[0]===a[0]&&s[1]===a[1]?0!==i&&i!==y-1||t.c?(o=0===i?t.v[y-1]:t.v[i-1],l=(h=Math.sqrt(Math.pow(s[0]-o[0],2)+Math.pow(s[1]-o[1],2)))?Math.min(h/2,e)/h:0,p=d=s[0]+(o[0]-s[0])*l,m=u=s[1]-(s[1]-o[1])*l,f=p-(p-s[0])*roundCorner,c=m-(m-s[1])*roundCorner,r.setTripleAt(p,m,f,c,d,u,g),g+=1,o=i===y-1?t.v[0]:t.v[i+1],l=(h=Math.sqrt(Math.pow(s[0]-o[0],2)+Math.pow(s[1]-o[1],2)))?Math.min(h/2,e)/h:0,p=f=s[0]+(o[0]-s[0])*l,m=c=s[1]+(o[1]-s[1])*l,d=p-(p-s[0])*roundCorner,u=m-(m-s[1])*roundCorner,r.setTripleAt(p,m,f,c,d,u,g)):r.setTripleAt(s[0],s[1],n[0],n[1],a[0],a[1],g):r.setTripleAt(t.v[i][0],t.v[i][1],t.o[i][0],t.o[i][1],t.i[i][0],t.i[i][1],g),g+=1;return r},RoundCornersModifier.prototype.processShapes=function(t){var e,r,i,s,a,n,o=this.shapes.length,h=this.rd.v;if(0!==h)for(r=0;r<o;r+=1){if((a=this.shapes[r]).shape.paths,n=a.localShapeCollection,a.shape._mdf||this._mdf||t)for(n.releaseShapes(),a.shape._mdf=!0,e=a.shape.paths.shapes,s=a.shape.paths._length,i=0;i<s;i+=1)n.addShape(this.processPath(e[i],h));a.shape.paths=a.localShapeCollection}this.dynamicProperties.length||(this._mdf=!1)},ShapeModifiers.registerModifier("rd",RoundCornersModifier),extendPrototype([ShapeModifier],RepeaterModifier),RepeaterModifier.prototype.initModifierProperties=function(t,e){this.getValue=this.processKeys,this.c=PropertyFactory.getProp(t,e.c,0,null,this),this.o=PropertyFactory.getProp(t,e.o,0,null,this),this.tr=TransformPropertyFactory.getTransformProperty(t,e.tr,this),this.so=PropertyFactory.getProp(t,e.tr.so,0,.01,this),this.eo=PropertyFactory.getProp(t,e.tr.eo,0,.01,this),this.data=e,this.dynamicProperties.length||this.getValue(!0),this._isAnimated=!!this.dynamicProperties.length,this.pMatrix=new Matrix,this.rMatrix=new Matrix,this.sMatrix=new Matrix,this.tMatrix=new Matrix,this.matrix=new Matrix},RepeaterModifier.prototype.applyTransforms=function(t,e,r,i,s,a){var n=a?-1:1,o=i.s.v[0]+(1-i.s.v[0])*(1-s),h=i.s.v[1]+(1-i.s.v[1])*(1-s);t.translate(i.p.v[0]*n*s,i.p.v[1]*n*s,i.p.v[2]),e.translate(-i.a.v[0],-i.a.v[1],i.a.v[2]),e.rotate(-i.r.v*n*s),e.translate(i.a.v[0],i.a.v[1],i.a.v[2]),r.translate(-i.a.v[0],-i.a.v[1],i.a.v[2]),r.scale(a?1/o:o,a?1/h:h),r.translate(i.a.v[0],i.a.v[1],i.a.v[2])},RepeaterModifier.prototype.init=function(t,e,r,i){this.elem=t,this.arr=e,this.pos=r,this.elemsData=i,this._currentCopies=0,this._elements=[],this._groups=[],this.frameId=-1,this.initDynamicPropertyContainer(t),this.initModifierProperties(t,e[r]);for(;0<r;)r-=1,this._elements.unshift(e[r]),1;this.dynamicProperties.length?this.k=!0:this.getValue(!0)},RepeaterModifier.prototype.resetElements=function(t){var e,r=t.length;for(e=0;e<r;e+=1)t[e]._processed=!1,"gr"===t[e].ty&&this.resetElements(t[e].it)},RepeaterModifier.prototype.cloneElements=function(t){t.length;var e=JSON.parse(JSON.stringify(t));return this.resetElements(e),e},RepeaterModifier.prototype.changeGroupRender=function(t,e){var r,i=t.length;for(r=0;r<i;r+=1)t[r]._render=e,"gr"===t[r].ty&&this.changeGroupRender(t[r].it,e)},RepeaterModifier.prototype.processShapes=function(t){var e,r,i,s,a;if(this._mdf||t){var n,o=Math.ceil(this.c.v);if(this._groups.length<o){for(;this._groups.length<o;){var h={it:this.cloneElements(this._elements),ty:"gr"};h.it.push({a:{a:0,ix:1,k:[0,0]},nm:"Transform",o:{a:0,ix:7,k:100},p:{a:0,ix:2,k:[0,0]},r:{a:1,ix:6,k:[{s:0,e:0,t:0},{s:0,e:0,t:1}]},s:{a:0,ix:3,k:[100,100]},sa:{a:0,ix:5,k:0},sk:{a:0,ix:4,k:0},ty:"tr"}),this.arr.splice(0,0,h),this._groups.splice(0,0,h),this._currentCopies+=1}this.elem.reloadShapes()}for(i=a=0;i<=this._groups.length-1;i+=1)n=a<o,this._groups[i]._render=n,this.changeGroupRender(this._groups[i].it,n),a+=1;this._currentCopies=o;var l=this.o.v,p=l%1,m=0<l?Math.floor(l):Math.ceil(l),f=(this.tr.v.props,this.pMatrix.props),c=this.rMatrix.props,d=this.sMatrix.props;this.pMatrix.reset(),this.rMatrix.reset(),this.sMatrix.reset(),this.tMatrix.reset(),this.matrix.reset();var u,y,g=0;if(0<l){for(;g<m;)this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,1,!1),g+=1;p&&(this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,p,!1),g+=p)}else if(l<0){for(;m<g;)this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,1,!0),g-=1;p&&(this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,-p,!0),g-=p)}for(i=1===this.data.m?0:this._currentCopies-1,s=1===this.data.m?1:-1,a=this._currentCopies;a;){if(y=(r=(e=this.elemsData[i].it)[e.length-1].transform.mProps.v.props).length,e[e.length-1].transform.mProps._mdf=!0,e[e.length-1].transform.op._mdf=!0,e[e.length-1].transform.op.v=this.so.v+(this.eo.v-this.so.v)*(i/(this._currentCopies-1)),0!==g){for((0!==i&&1===s||i!==this._currentCopies-1&&-1===s)&&this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,1,!1),this.matrix.transform(c[0],c[1],c[2],c[3],c[4],c[5],c[6],c[7],c[8],c[9],c[10],c[11],c[12],c[13],c[14],c[15]),this.matrix.transform(d[0],d[1],d[2],d[3],d[4],d[5],d[6],d[7],d[8],d[9],d[10],d[11],d[12],d[13],d[14],d[15]),this.matrix.transform(f[0],f[1],f[2],f[3],f[4],f[5],f[6],f[7],f[8],f[9],f[10],f[11],f[12],f[13],f[14],f[15]),u=0;u<y;u+=1)r[u]=this.matrix.props[u];this.matrix.reset()}else for(this.matrix.reset(),u=0;u<y;u+=1)r[u]=this.matrix.props[u];g+=1,a-=1,i+=s}}else for(a=this._currentCopies,i=0,s=1;a;)r=(e=this.elemsData[i].it)[e.length-1].transform.mProps.v.props,e[e.length-1].transform.mProps._mdf=!1,e[e.length-1].transform.op._mdf=!1,a-=1,i+=s},RepeaterModifier.prototype.addShape=function(){},ShapeModifiers.registerModifier("rp",RepeaterModifier),ShapeCollection.prototype.addShape=function(t){this._length===this._maxLength&&(this.shapes=this.shapes.concat(createSizedArray(this._maxLength)),this._maxLength*=2),this.shapes[this._length]=t,this._length+=1},ShapeCollection.prototype.releaseShapes=function(){var t;for(t=0;t<this._length;t+=1)shape_pool.release(this.shapes[t]);this._length=0},DashProperty.prototype.getValue=function(t){if((this.elem.globalData.frameId!==this.frameId||t)&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties(),this._mdf=this._mdf||t,this._mdf)){var e=0,r=this.dataProps.length;for("svg"===this.renderer&&(this.dashStr=""),e=0;e<r;e+=1)"o"!=this.dataProps[e].n?"svg"===this.renderer?this.dashStr+=" "+this.dataProps[e].p.v:this.dashArray[e]=this.dataProps[e].p.v:this.dashoffset[0]=this.dataProps[e].p.v}},extendPrototype([DynamicPropertyContainer],DashProperty),GradientProperty.prototype.comparePoints=function(t,e){for(var r=0,i=this.o.length/2;r<i;){if(.01<Math.abs(t[4*r]-t[4*e+2*r]))return!1;r+=1}return!0},GradientProperty.prototype.checkCollapsable=function(){if(this.o.length/2!=this.c.length/4)return!1;if(this.data.k.k[0].s)for(var t=0,e=this.data.k.k.length;t<e;){if(!this.comparePoints(this.data.k.k[t].s,this.data.p))return!1;t+=1}else if(!this.comparePoints(this.data.k.k,this.data.p))return!1;return!0},GradientProperty.prototype.getValue=function(t){if(this.prop.getValue(),this._mdf=!1,this._cmdf=!1,this._omdf=!1,this.prop._mdf||t){var e,r,i,s=4*this.data.p;for(e=0;e<s;e+=1)r=e%4==0?100:255,i=Math.round(this.prop.v[e]*r),this.c[e]!==i&&(this.c[e]=i,this._cmdf=!t);if(this.o.length)for(s=this.prop.v.length,e=4*this.data.p;e<s;e+=1)r=e%2==0?100:1,i=e%2==0?Math.round(100*this.prop.v[e]):this.prop.v[e],this.o[e-4*this.data.p]!==i&&(this.o[e-4*this.data.p]=i,this._omdf=!t);this._mdf=!t}},extendPrototype([DynamicPropertyContainer],GradientProperty);var buildShapeString=function(t,e,r,i){if(0===e)return"";var s,a=t.o,n=t.i,o=t.v,h=" M"+i.applyToPointStringified(o[0][0],o[0][1]);for(s=1;s<e;s+=1)h+=" C"+i.applyToPointStringified(a[s-1][0],a[s-1][1])+" "+i.applyToPointStringified(n[s][0],n[s][1])+" "+i.applyToPointStringified(o[s][0],o[s][1]);return r&&e&&(h+=" C"+i.applyToPointStringified(a[s-1][0],a[s-1][1])+" "+i.applyToPointStringified(n[0][0],n[0][1])+" "+i.applyToPointStringified(o[0][0],o[0][1]),h+="z"),h},ImagePreloader=function(){var s=function(){var t=createTag("canvas");t.width=1,t.height=1;var e=t.getContext("2d");return e.fillStyle="rgba(0,0,0,0)",e.fillRect(0,0,1,1),t}();function t(){this.loadedAssets+=1,this.loadedAssets===this.totalImages&&this.imagesLoadedCb&&this.imagesLoadedCb(null)}function e(t){var e=function(t,e,r){var i="";if(t.e)i=t.p;else if(e){var s=t.p;-1!==s.indexOf("images/")&&(s=s.split("/")[1]),i=e+s}else i=r,i+=t.u?t.u:"",i+=t.p;return i}(t,this.assetsPath,this.path),r=createTag("img");r.crossOrigin="anonymous",r.addEventListener("load",this._imageLoaded.bind(this),!1),r.addEventListener("error",function(){i.img=s,this._imageLoaded()}.bind(this),!1),r.src=e;var i={img:r,assetData:t};return i}function r(t,e){this.imagesLoadedCb=e;var r,i=t.length;for(r=0;r<i;r+=1)t[r].layers||(this.totalImages+=1,this.images.push(this._createImageData(t[r])))}function i(t){this.path=t||""}function a(t){this.assetsPath=t||""}function n(t){for(var e=0,r=this.images.length;e<r;){if(this.images[e].assetData===t)return this.images[e].img;e+=1}}function o(){this.imagesLoadedCb=null,this.images.length=0}function h(){return this.totalImages===this.loadedAssets}return function(){this.loadAssets=r,this.setAssetsPath=a,this.setPath=i,this.loaded=h,this.destroy=o,this.getImage=n,this._createImageData=e,this._imageLoaded=t,this.assetsPath="",this.path="",this.totalImages=0,this.loadedAssets=0,this.imagesLoadedCb=null,this.images=[]}}(),featureSupport=(qw={maskType:!0},(/MSIE 10/i.test(navigator.userAgent)||/MSIE 9/i.test(navigator.userAgent)||/rv:11.0/i.test(navigator.userAgent)||/Edge\/\d./i.test(navigator.userAgent))&&(qw.maskType=!1),qw),qw,filtersFactory=(rw={},rw.createFilter=function(t){var e=createNS("filter");return e.setAttribute("id",t),e.setAttribute("filterUnits","objectBoundingBox"),e.setAttribute("x","0%"),e.setAttribute("y","0%"),e.setAttribute("width","100%"),e.setAttribute("height","100%"),e},rw.createAlphaToLuminanceFilter=function(){var t=createNS("feColorMatrix");return t.setAttribute("type","matrix"),t.setAttribute("color-interpolation-filters","sRGB"),t.setAttribute("values","0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"),t},rw),rw,assetLoader=function(){function a(t){return t.response&&"object"==typeof t.response?t.response:t.response&&"string"==typeof t.response?JSON.parse(t.response):t.responseText?JSON.parse(t.responseText):void 0}return{load:function(t,e,r){var i,s=new XMLHttpRequest;s.open("GET",t,!0);try{s.responseType="json"}catch(t){}s.send(),s.onreadystatechange=function(){if(4==s.readyState)if(200==s.status)i=a(s),e(i);else try{i=a(s),e(i)}catch(t){r&&r(t)}}}}}();function TextAnimatorProperty(t,e,r){this._isFirstFrame=!0,this._hasMaskedPath=!1,this._frameId=-1,this._textData=t,this._renderType=e,this._elem=r,this._animatorsData=createSizedArray(this._textData.a.length),this._pathData={},this._moreOptions={alignment:{}},this.renderedLetters=[],this.lettersChangedFlag=!1,this.initDynamicPropertyContainer(r)}function TextAnimatorDataProperty(t,e,r){var i={propType:!1},s=PropertyFactory.getProp,a=e.a;this.a={r:a.r?s(t,a.r,0,degToRads,r):i,rx:a.rx?s(t,a.rx,0,degToRads,r):i,ry:a.ry?s(t,a.ry,0,degToRads,r):i,sk:a.sk?s(t,a.sk,0,degToRads,r):i,sa:a.sa?s(t,a.sa,0,degToRads,r):i,s:a.s?s(t,a.s,1,.01,r):i,a:a.a?s(t,a.a,1,0,r):i,o:a.o?s(t,a.o,0,.01,r):i,p:a.p?s(t,a.p,1,0,r):i,sw:a.sw?s(t,a.sw,0,0,r):i,sc:a.sc?s(t,a.sc,1,0,r):i,fc:a.fc?s(t,a.fc,1,0,r):i,fh:a.fh?s(t,a.fh,0,0,r):i,fs:a.fs?s(t,a.fs,0,.01,r):i,fb:a.fb?s(t,a.fb,0,.01,r):i,t:a.t?s(t,a.t,0,0,r):i},this.s=TextSelectorProp.getTextSelectorProp(t,e.s,r),this.s.t=e.s.t}function LetterProps(t,e,r,i,s,a){this.o=t,this.sw=e,this.sc=r,this.fc=i,this.m=s,this.p=a,this._mdf={o:!0,sw:!!e,sc:!!r,fc:!!i,m:!0,p:!0}}function TextProperty(t,e){this._frameId=initialDefaultFrame,this.pv="",this.v="",this.kf=!1,this._isFirstFrame=!0,this._mdf=!1,this.data=e,this.elem=t,this.comp=this.elem.comp,this.keysIndex=0,this.canResize=!1,this.minimumFontSize=1,this.effectsSequence=[],this.currentData={ascent:0,boxWidth:this.defaultBoxWidth,f:"",fStyle:"",fWeight:"",fc:"",j:"",justifyOffset:"",l:[],lh:0,lineWidths:[],ls:"",of:"",s:"",sc:"",sw:0,t:0,tr:0,sz:0,ps:null,fillColorAnim:!1,strokeColorAnim:!1,strokeWidthAnim:!1,yOffset:0,finalSize:0,finalText:[],finalLineHeight:0,__complete:!1},this.copyData(this.currentData,this.data.d.k[0].s),this.searchProperty()||this.completeTextData(this.currentData)}TextAnimatorProperty.prototype.searchProperties=function(){var t,e,r=this._textData.a.length,i=PropertyFactory.getProp;for(t=0;t<r;t+=1)e=this._textData.a[t],this._animatorsData[t]=new TextAnimatorDataProperty(this._elem,e,this);this._textData.p&&"m"in this._textData.p?(this._pathData={f:i(this._elem,this._textData.p.f,0,0,this),l:i(this._elem,this._textData.p.l,0,0,this),r:this._textData.p.r,m:this._elem.maskManager.getMaskProperty(this._textData.p.m)},this._hasMaskedPath=!0):this._hasMaskedPath=!1,this._moreOptions.alignment=i(this._elem,this._textData.m.a,1,0,this)},TextAnimatorProperty.prototype.getMeasures=function(t,e){if(this.lettersChangedFlag=e,this._mdf||this._isFirstFrame||e||this._hasMaskedPath&&this._pathData.m._mdf){this._isFirstFrame=!1;var r,i,s,a,n,o,h,l,p,m,f,c,d,u,y,g,v,b,E,x=this._moreOptions.alignment.v,P=this._animatorsData,S=this._textData,_=this.mHelper,A=this._renderType,C=this.renderedLetters.length,T=(this.data,t.l);if(this._hasMaskedPath){if(E=this._pathData.m,!this._pathData.n||this._pathData._mdf){var k,M=E.v;for(this._pathData.r&&(M=M.reverse()),n={tLength:0,segments:[]},a=M._length-1,s=g=0;s<a;s+=1)k=bez.buildBezierData(M.v[s],M.v[s+1],[M.o[s][0]-M.v[s][0],M.o[s][1]-M.v[s][1]],[M.i[s+1][0]-M.v[s+1][0],M.i[s+1][1]-M.v[s+1][1]]),n.tLength+=k.segmentLength,n.segments.push(k),g+=k.segmentLength;s=a,E.v.c&&(k=bez.buildBezierData(M.v[s],M.v[0],[M.o[s][0]-M.v[s][0],M.o[s][1]-M.v[s][1]],[M.i[0][0]-M.v[0][0],M.i[0][1]-M.v[0][1]]),n.tLength+=k.segmentLength,n.segments.push(k),g+=k.segmentLength),this._pathData.pi=n}if(n=this._pathData.pi,o=this._pathData.f.v,m=1,p=!(l=f=0),u=n.segments,o<0&&E.v.c)for(n.tLength<Math.abs(o)&&(o=-Math.abs(o)%n.tLength),m=(d=u[f=u.length-1].points).length-1;o<0;)o+=d[m].partialLength,(m-=1)<0&&(m=(d=u[f-=1].points).length-1);c=(d=u[f].points)[m-1],y=(h=d[m]).partialLength}a=T.length,i=r=0;var D,w,F,I,V=1.2*t.finalSize*.714,R=!0;F=P.length;var B,L,G,z,N,O,H,j,q,W,Y,X,$,K=-1,Z=o,J=f,Q=m,U=-1,tt="",et=this.defaultPropsArray;if(2===t.j||1===t.j){var rt=0,it=0,st=2===t.j?-.5:-1,at=0,nt=!0;for(s=0;s<a;s+=1)if(T[s].n){for(rt&&(rt+=it);at<s;)T[at].animatorJustifyOffset=rt,at+=1;nt=!(rt=0)}else{for(w=0;w<F;w+=1)(D=P[w].a).t.propType&&(nt&&2===t.j&&(it+=D.t.v*st),(B=P[w].s.getMult(T[s].anIndexes[w],S.a[w].s.totalChars)).length?rt+=D.t.v*B[0]*st:rt+=D.t.v*B*st);nt=!1}for(rt&&(rt+=it);at<s;)T[at].animatorJustifyOffset=rt,at+=1}for(s=0;s<a;s+=1){if(_.reset(),N=1,T[s].n)r=0,i+=t.yOffset,i+=R?1:0,o=Z,R=!1,0,this._hasMaskedPath&&(m=Q,c=(d=u[f=J].points)[m-1],y=(h=d[m]).partialLength,l=0),$=W=X=tt="",et=this.defaultPropsArray;else{if(this._hasMaskedPath){if(U!==T[s].line){switch(t.j){case 1:o+=g-t.lineWidths[T[s].line];break;case 2:o+=(g-t.lineWidths[T[s].line])/2}U=T[s].line}K!==T[s].ind&&(T[K]&&(o+=T[K].extra),o+=T[s].an/2,K=T[s].ind),o+=x[0]*T[s].an/200;var ot=0;for(w=0;w<F;w+=1)(D=P[w].a).p.propType&&((B=P[w].s.getMult(T[s].anIndexes[w],S.a[w].s.totalChars)).length?ot+=D.p.v[0]*B[0]:ot+=D.p.v[0]*B),D.a.propType&&((B=P[w].s.getMult(T[s].anIndexes[w],S.a[w].s.totalChars)).length?ot+=D.a.v[0]*B[0]:ot+=D.a.v[0]*B);for(p=!0;p;)o+ot<=l+y||!d?(v=(o+ot-l)/h.partialLength,G=c.point[0]+(h.point[0]-c.point[0])*v,z=c.point[1]+(h.point[1]-c.point[1])*v,_.translate(-x[0]*T[s].an/200,-x[1]*V/100),p=!1):d&&(l+=h.partialLength,(m+=1)>=d.length&&(m=0,d=u[f+=1]?u[f].points:E.v.c?u[f=m=0].points:(l-=h.partialLength,null)),d&&(c=h,y=(h=d[m]).partialLength));L=T[s].an/2-T[s].add,_.translate(-L,0,0)}else L=T[s].an/2-T[s].add,_.translate(-L,0,0),_.translate(-x[0]*T[s].an/200,-x[1]*V/100,0);for(T[s].l/2,w=0;w<F;w+=1)(D=P[w].a).t.propType&&(B=P[w].s.getMult(T[s].anIndexes[w],S.a[w].s.totalChars),0===r&&0===t.j||(this._hasMaskedPath?B.length?o+=D.t.v*B[0]:o+=D.t.v*B:B.length?r+=D.t.v*B[0]:r+=D.t.v*B));for(T[s].l/2,t.strokeWidthAnim&&(H=t.sw||0),t.strokeColorAnim&&(O=t.sc?[t.sc[0],t.sc[1],t.sc[2]]:[0,0,0]),t.fillColorAnim&&t.fc&&(j=[t.fc[0],t.fc[1],t.fc[2]]),w=0;w<F;w+=1)(D=P[w].a).a.propType&&((B=P[w].s.getMult(T[s].anIndexes[w],S.a[w].s.totalChars)).length?_.translate(-D.a.v[0]*B[0],-D.a.v[1]*B[1],D.a.v[2]*B[2]):_.translate(-D.a.v[0]*B,-D.a.v[1]*B,D.a.v[2]*B));for(w=0;w<F;w+=1)(D=P[w].a).s.propType&&((B=P[w].s.getMult(T[s].anIndexes[w],S.a[w].s.totalChars)).length?_.scale(1+(D.s.v[0]-1)*B[0],1+(D.s.v[1]-1)*B[1],1):_.scale(1+(D.s.v[0]-1)*B,1+(D.s.v[1]-1)*B,1));for(w=0;w<F;w+=1){if(D=P[w].a,B=P[w].s.getMult(T[s].anIndexes[w],S.a[w].s.totalChars),D.sk.propType&&(B.length?_.skewFromAxis(-D.sk.v*B[0],D.sa.v*B[1]):_.skewFromAxis(-D.sk.v*B,D.sa.v*B)),D.r.propType&&(B.length?_.rotateZ(-D.r.v*B[2]):_.rotateZ(-D.r.v*B)),D.ry.propType&&(B.length?_.rotateY(D.ry.v*B[1]):_.rotateY(D.ry.v*B)),D.rx.propType&&(B.length?_.rotateX(D.rx.v*B[0]):_.rotateX(D.rx.v*B)),D.o.propType&&(B.length?N+=(D.o.v*B[0]-N)*B[0]:N+=(D.o.v*B-N)*B),t.strokeWidthAnim&&D.sw.propType&&(B.length?H+=D.sw.v*B[0]:H+=D.sw.v*B),t.strokeColorAnim&&D.sc.propType)for(q=0;q<3;q+=1)B.length?O[q]=O[q]+(D.sc.v[q]-O[q])*B[0]:O[q]=O[q]+(D.sc.v[q]-O[q])*B;if(t.fillColorAnim&&t.fc){if(D.fc.propType)for(q=0;q<3;q+=1)B.length?j[q]=j[q]+(D.fc.v[q]-j[q])*B[0]:j[q]=j[q]+(D.fc.v[q]-j[q])*B;D.fh.propType&&(j=B.length?addHueToRGB(j,D.fh.v*B[0]):addHueToRGB(j,D.fh.v*B)),D.fs.propType&&(j=B.length?addSaturationToRGB(j,D.fs.v*B[0]):addSaturationToRGB(j,D.fs.v*B)),D.fb.propType&&(j=B.length?addBrightnessToRGB(j,D.fb.v*B[0]):addBrightnessToRGB(j,D.fb.v*B))}}for(w=0;w<F;w+=1)(D=P[w].a).p.propType&&(B=P[w].s.getMult(T[s].anIndexes[w],S.a[w].s.totalChars),this._hasMaskedPath?B.length?_.translate(0,D.p.v[1]*B[0],-D.p.v[2]*B[1]):_.translate(0,D.p.v[1]*B,-D.p.v[2]*B):B.length?_.translate(D.p.v[0]*B[0],D.p.v[1]*B[1],-D.p.v[2]*B[2]):_.translate(D.p.v[0]*B,D.p.v[1]*B,-D.p.v[2]*B));if(t.strokeWidthAnim&&(W=H<0?0:H),t.strokeColorAnim&&(Y="rgb("+Math.round(255*O[0])+","+Math.round(255*O[1])+","+Math.round(255*O[2])+")"),t.fillColorAnim&&t.fc&&(X="rgb("+Math.round(255*j[0])+","+Math.round(255*j[1])+","+Math.round(255*j[2])+")"),this._hasMaskedPath){if(_.translate(0,-t.ls),_.translate(0,x[1]*V/100+i,0),S.p.p){b=(h.point[1]-c.point[1])/(h.point[0]-c.point[0]);var ht=180*Math.atan(b)/Math.PI;h.point[0]<c.point[0]&&(ht+=180),_.rotate(-ht*Math.PI/180)}_.translate(G,z,0),o-=x[0]*T[s].an/200,T[s+1]&&K!==T[s+1].ind&&(o+=T[s].an/2,o+=t.tr/1e3*t.finalSize)}else{switch(_.translate(r,i,0),t.ps&&_.translate(t.ps[0],t.ps[1]+t.ascent,0),t.j){case 1:_.translate(T[s].animatorJustifyOffset+t.justifyOffset+(t.boxWidth-t.lineWidths[T[s].line]),0,0);break;case 2:_.translate(T[s].animatorJustifyOffset+t.justifyOffset+(t.boxWidth-t.lineWidths[T[s].line])/2,0,0)}_.translate(0,-t.ls),_.translate(L,0,0),_.translate(x[0]*T[s].an/200,x[1]*V/100,0),r+=T[s].l+t.tr/1e3*t.finalSize}"html"===A?tt=_.toCSS():"svg"===A?tt=_.to2dCSS():et=[_.props[0],_.props[1],_.props[2],_.props[3],_.props[4],_.props[5],_.props[6],_.props[7],_.props[8],_.props[9],_.props[10],_.props[11],_.props[12],_.props[13],_.props[14],_.props[15]],$=N}this.lettersChangedFlag=C<=s?(I=new LetterProps($,W,Y,X,tt,et),this.renderedLetters.push(I),C+=1,!0):(I=this.renderedLetters[s]).update($,W,Y,X,tt,et)||this.lettersChangedFlag}}},TextAnimatorProperty.prototype.getValue=function(){this._elem.globalData.frameId!==this._frameId&&(this._frameId=this._elem.globalData.frameId,this.iterateDynamicProperties())},TextAnimatorProperty.prototype.mHelper=new Matrix,TextAnimatorProperty.prototype.defaultPropsArray=[],extendPrototype([DynamicPropertyContainer],TextAnimatorProperty),LetterProps.prototype.update=function(t,e,r,i,s,a){this._mdf.o=!1,this._mdf.sw=!1,this._mdf.sc=!1,this._mdf.fc=!1,this._mdf.m=!1;var n=this._mdf.p=!1;return this.o!==t&&(this.o=t,n=this._mdf.o=!0),this.sw!==e&&(this.sw=e,n=this._mdf.sw=!0),this.sc!==r&&(this.sc=r,n=this._mdf.sc=!0),this.fc!==i&&(this.fc=i,n=this._mdf.fc=!0),this.m!==s&&(this.m=s,n=this._mdf.m=!0),!a.length||this.p[0]===a[0]&&this.p[1]===a[1]&&this.p[4]===a[4]&&this.p[5]===a[5]&&this.p[12]===a[12]&&this.p[13]===a[13]||(this.p=a,n=this._mdf.p=!0),n},TextProperty.prototype.defaultBoxWidth=[0,0],TextProperty.prototype.copyData=function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);return t},TextProperty.prototype.setCurrentData=function(t){t.__complete||this.completeTextData(t),this.currentData=t,this.currentData.boxWidth=this.currentData.boxWidth||this.defaultBoxWidth,this._mdf=!0},TextProperty.prototype.searchProperty=function(){return this.searchKeyframes()},TextProperty.prototype.searchKeyframes=function(){return this.kf=1<this.data.d.k.length,this.kf&&this.addEffect(this.getKeyframeValue.bind(this)),this.kf},TextProperty.prototype.addEffect=function(t){this.effectsSequence.push(t),this.elem.addDynamicProperty(this)},TextProperty.prototype.getValue=function(t){if(this.elem.globalData.frameId!==this.frameId&&this.effectsSequence.length||t){this.currentData.t=this.data.d.k[this.keysIndex].s.t;var e=this.currentData,r=this.keysIndex;if(this.lock)this.setCurrentData(this.currentData);else{this.lock=!0,this._mdf=!1;var i,s=this.effectsSequence.length,a=t||this.data.d.k[this.keysIndex].s;for(i=0;i<s;i+=1)a=r!==this.keysIndex?this.effectsSequence[i](a,a.t):this.effectsSequence[i](this.currentData,a.t);e!==a&&this.setCurrentData(a),this.pv=this.v=this.currentData,this.lock=!1,this.frameId=this.elem.globalData.frameId}}},TextProperty.prototype.getKeyframeValue=function(){for(var t=this.data.d.k,e=this.elem.comp.renderedFrame,r=0,i=t.length;r<=i-1&&(t[r].s,!(r===i-1||t[r+1].t>e));)r+=1;return this.keysIndex!==r&&(this.keysIndex=r),this.data.d.k[this.keysIndex].s},TextProperty.prototype.buildFinalText=function(t){for(var e,r=FontManager.getCombinedCharacterCodes(),i=[],s=0,a=t.length;s<a;)e=t.charCodeAt(s),-1!==r.indexOf(e)?i[i.length-1]+=t.charAt(s):55296<=e&&e<=56319&&56320<=(e=t.charCodeAt(s+1))&&e<=57343?(i.push(t.substr(s,2)),++s):i.push(t.charAt(s)),s+=1;return i},TextProperty.prototype.completeTextData=function(t){t.__complete=!0;var e,r,i,s,a,n,o,h=this.elem.globalData.fontManager,l=this.data,p=[],m=0,f=l.m.g,c=0,d=0,u=0,y=[],g=0,v=0,b=h.getFontByName(t.f),E=0,x=b.fStyle?b.fStyle.split(" "):[],P="normal",S="normal";for(r=x.length,e=0;e<r;e+=1)switch(x[e].toLowerCase()){case"italic":S="italic";break;case"bold":P="700";break;case"black":P="900";break;case"medium":P="500";break;case"regular":case"normal":P="400";break;case"light":case"thin":P="200"}t.fWeight=b.fWeight||P,t.fStyle=S,t.finalSize=t.s,t.finalText=this.buildFinalText(t.t),r=t.finalText.length,t.finalLineHeight=t.lh;var _,A=t.tr/1e3*t.finalSize;if(t.sz)for(var C,T,k=!0,M=t.sz[0],D=t.sz[1];k;){g=C=0,r=(T=this.buildFinalText(t.t)).length,A=t.tr/1e3*t.finalSize;var w=-1;for(e=0;e<r;e+=1)_=T[e].charCodeAt(0),i=!1," "===T[e]?w=e:13!==_&&3!==_||(i=!(g=0),C+=t.finalLineHeight||1.2*t.finalSize),M<g+(E=h.chars?(o=h.getCharData(T[e],b.fStyle,b.fFamily),i?0:o.w*t.finalSize/100):h.measureText(T[e],t.f,t.finalSize))&&" "!==T[e]?(-1===w?r+=1:e=w,C+=t.finalLineHeight||1.2*t.finalSize,T.splice(e,w===e?1:0,"\r"),w=-1,g=0):(g+=E,g+=A);C+=b.ascent*t.finalSize/100,this.canResize&&t.finalSize>this.minimumFontSize&&D<C?(t.finalSize-=1,t.finalLineHeight=t.finalSize*t.lh/t.s):(t.finalText=T,r=t.finalText.length,k=!1)}g=-A;var F,I=E=0;for(e=0;e<r;e+=1)if(i=!1,_=(F=t.finalText[e]).charCodeAt(0)," "===F?s="\xa0":13===_||3===_?(I=0,y.push(g),v=v<g?g:v,g=-2*A,i=!(s=""),u+=1):s=t.finalText[e],E=h.chars?(o=h.getCharData(F,b.fStyle,h.getFontByName(t.f).fFamily),i?0:o.w*t.finalSize/100):h.measureText(s,t.f,t.finalSize)," "===F?I+=E+A:(g+=E+A+I,I=0),p.push({l:E,an:E,add:c,n:i,anIndexes:[],val:s,line:u,animatorJustifyOffset:0}),2==f){if(c+=E,""===s||"\xa0"===s||e===r-1){for(""!==s&&"\xa0"!==s||(c-=E);d<=e;)p[d].an=c,p[d].ind=m,p[d].extra=E,d+=1;m+=1,c=0}}else if(3==f){if(c+=E,""===s||e===r-1){for(""===s&&(c-=E);d<=e;)p[d].an=c,p[d].ind=m,p[d].extra=E,d+=1;c=0,m+=1}}else p[m].ind=m,p[m].extra=0,m+=1;if(t.l=p,v=v<g?g:v,y.push(g),t.sz)t.boxWidth=t.sz[0],t.justifyOffset=0;else switch(t.boxWidth=v,t.j){case 1:t.justifyOffset=-t.boxWidth;break;case 2:t.justifyOffset=-t.boxWidth/2;break;default:t.justifyOffset=0}t.lineWidths=y;var V,R,B=l.a;n=B.length;var L,G,z=[];for(a=0;a<n;a+=1){for((V=B[a]).a.sc&&(t.strokeColorAnim=!0),V.a.sw&&(t.strokeWidthAnim=!0),(V.a.fc||V.a.fh||V.a.fs||V.a.fb)&&(t.fillColorAnim=!0),G=0,L=V.s.b,e=0;e<r;e+=1)(R=p[e]).anIndexes[a]=G,(1==L&&""!==R.val||2==L&&""!==R.val&&"\xa0"!==R.val||3==L&&(R.n||"\xa0"==R.val||e==r-1)||4==L&&(R.n||e==r-1))&&(1===V.s.rn&&z.push(G),G+=1);l.a[a].s.totalChars=G;var N,O=-1;if(1===V.s.rn)for(e=0;e<r;e+=1)O!=(R=p[e]).anIndexes[a]&&(O=R.anIndexes[a],N=z.splice(Math.floor(Math.random()*z.length),1)[0]),R.anIndexes[a]=N}t.yOffset=t.finalLineHeight||1.2*t.finalSize,t.ls=t.ls||0,t.ascent=b.ascent*t.finalSize/100},TextProperty.prototype.updateDocumentData=function(t,e){e=void 0===e?this.keysIndex:e;var r=this.copyData({},this.data.d.k[e].s);r=this.copyData(r,t),this.data.d.k[e].s=r,this.recalculate(e),this.elem.addDynamicProperty(this)},TextProperty.prototype.recalculate=function(t){var e=this.data.d.k[t].s;e.__complete=!1,this.keysIndex=0,this._isFirstFrame=!0,this.getValue(e)},TextProperty.prototype.canResizeFont=function(t){this.canResize=t,this.recalculate(this.keysIndex),this.elem.addDynamicProperty(this)},TextProperty.prototype.setMinimumFontSize=function(t){this.minimumFontSize=Math.floor(t)||1,this.recalculate(this.keysIndex),this.elem.addDynamicProperty(this)};var TextSelectorProp=function(){var l=Math.max,p=Math.min,m=Math.floor;function i(t,e){this._currentTextLength=-1,this.k=!1,this.data=e,this.elem=t,this.comp=t.comp,this.finalS=0,this.finalE=0,this.initDynamicPropertyContainer(t),this.s=PropertyFactory.getProp(t,e.s||{k:0},0,0,this),this.e="e"in e?PropertyFactory.getProp(t,e.e,0,0,this):{v:100},this.o=PropertyFactory.getProp(t,e.o||{k:0},0,0,this),this.xe=PropertyFactory.getProp(t,e.xe||{k:0},0,0,this),this.ne=PropertyFactory.getProp(t,e.ne||{k:0},0,0,this),this.a=PropertyFactory.getProp(t,e.a,0,.01,this),this.dynamicProperties.length||this.getValue()}return i.prototype={getMult:function(t){this._currentTextLength!==this.elem.textProperty.currentData.l.length&&this.getValue();var e=BezierFactory.getBezierEasing(this.ne.v/100,0,1-this.xe.v/100,1).get,r=0,i=this.finalS,s=this.finalE,a=this.data.sh;if(2==a)r=e(r=s===i?s<=t?1:0:l(0,p(.5/(s-i)+(t-i)/(s-i),1)));else if(3==a)r=e(r=s===i?s<=t?0:1:1-l(0,p(.5/(s-i)+(t-i)/(s-i),1)));else if(4==a)s===i?r=0:(r=l(0,p(.5/(s-i)+(t-i)/(s-i),1)))<.5?r*=2:r=1-2*(r-.5),r=e(r);else if(5==a){if(s===i)r=0;else{var n=s-i,o=-n/2+(t=p(l(0,t+.5-i),s-i)),h=n/2;r=Math.sqrt(1-o*o/(h*h))}r=e(r)}else r=6==a?e(r=s===i?0:(t=p(l(0,t+.5-i),s-i),(1+Math.cos(Math.PI+2*Math.PI*t/(s-i)))/2)):(t>=m(i)&&(r=t-i<0?1-(i-t):l(0,p(s-t,1))),e(r));return r*this.a.v},getValue:function(t){this.iterateDynamicProperties(),this._mdf=t||this._mdf,this._currentTextLength=this.elem.textProperty.currentData.l.length||0,t&&2===this.data.r&&(this.e.v=this._currentTextLength);var e=2===this.data.r?1:100/this.data.totalChars,r=this.o.v/e,i=this.s.v/e+r,s=this.e.v/e+r;if(s<i){var a=i;i=s,s=a}this.finalS=i,this.finalE=s}},extendPrototype([DynamicPropertyContainer],i),{getTextSelectorProp:function(t,e,r){return new i(t,e,r)}}}(),pool_factory=function(t,e,r,i){var s=0,a=t,n=createSizedArray(a);function o(){return s?n[s-=1]:e()}return{newElement:o,release:function(t){s===a&&(n=pooling.double(n),a*=2),r&&r(t),n[s]=t,s+=1}}},pooling={double:function(t){return t.concat(createSizedArray(t.length))}},point_pool=pool_factory(8,function(){return createTypedArray("float32",2)}),shape_pool=(EA=pool_factory(4,function(){return new ShapePath},function(t){var e,r=t._length;for(e=0;e<r;e+=1)point_pool.release(t.v[e]),point_pool.release(t.i[e]),point_pool.release(t.o[e]),t.v[e]=null,t.i[e]=null,t.o[e]=null;t._length=0,t.c=!1}),EA.clone=function(t){var e,r=EA.newElement(),i=void 0===t._length?t.v.length:t._length;for(r.setLength(i),r.c=t.c,e=0;e<i;e+=1)r.setTripleAt(t.v[e][0],t.v[e][1],t.o[e][0],t.o[e][1],t.i[e][0],t.i[e][1],e);return r},EA),EA,shapeCollection_pool=(NA={newShapeCollection:function(){var t;t=OA?QA[OA-=1]:new ShapeCollection;return t},release:function(t){var e,r=t._length;for(e=0;e<r;e+=1)shape_pool.release(t.shapes[e]);t._length=0,OA===PA&&(QA=pooling.double(QA),PA*=2);QA[OA]=t,OA+=1}},OA=0,PA=4,QA=createSizedArray(PA),NA),NA,OA,PA,QA,segments_length_pool=pool_factory(8,function(){return{lengths:[],totalLength:0}},function(t){var e,r=t.lengths.length;for(e=0;e<r;e+=1)bezier_length_pool.release(t.lengths[e]);t.lengths.length=0}),bezier_length_pool=pool_factory(8,function(){return{addedLength:0,percents:createTypedArray("float32",defaultCurveSegments),lengths:createTypedArray("float32",defaultCurveSegments)}});function BaseRenderer(){}function SVGRenderer(t,e){this.animationItem=t,this.layers=null,this.renderedFrame=-1,this.svgElement=createNS("svg");var r="";if(e&&e.title){var i=createNS("title"),s=createElementID();i.setAttribute("id",s),i.textContent=e.title,this.svgElement.appendChild(i),r+=s}if(e&&e.description){var a=createNS("desc"),n=createElementID();a.setAttribute("id",n),a.textContent=e.description,this.svgElement.appendChild(a),r+=" "+n}r&&this.svgElement.setAttribute("aria-labelledby",r);var o=createNS("defs");this.svgElement.appendChild(o);var h=createNS("g");this.svgElement.appendChild(h),this.layerElement=h,this.renderConfig={preserveAspectRatio:e&&e.preserveAspectRatio||"xMidYMid meet",imagePreserveAspectRatio:e&&e.imagePreserveAspectRatio||"xMidYMid slice",progressiveLoad:e&&e.progressiveLoad||!1,hideOnTransparent:!e||!1!==e.hideOnTransparent,viewBoxOnly:e&&e.viewBoxOnly||!1,viewBoxSize:e&&e.viewBoxSize||!1,className:e&&e.className||"",focusable:e&&e.focusable},this.globalData={_mdf:!1,frameNum:-1,defs:o,renderConfig:this.renderConfig},this.elements=[],this.pendingElements=[],this.destroyed=!1,this.rendererType="svg"}function CanvasRenderer(t,e){this.animationItem=t,this.renderConfig={clearCanvas:!e||void 0===e.clearCanvas||e.clearCanvas,context:e&&e.context||null,progressiveLoad:e&&e.progressiveLoad||!1,preserveAspectRatio:e&&e.preserveAspectRatio||"xMidYMid meet",imagePreserveAspectRatio:e&&e.imagePreserveAspectRatio||"xMidYMid slice",className:e&&e.className||""},this.renderConfig.dpr=e&&e.dpr||1,this.animationItem.wrapper&&(this.renderConfig.dpr=e&&e.dpr||window.devicePixelRatio||1),this.renderedFrame=-1,this.globalData={frameNum:-1,_mdf:!1,renderConfig:this.renderConfig,currentGlobalAlpha:-1},this.contextData=new CVContextData,this.elements=[],this.pendingElements=[],this.transformMat=new Matrix,this.completeLayers=!1,this.rendererType="canvas"}function HybridRenderer(t,e){this.animationItem=t,this.layers=null,this.renderedFrame=-1,this.renderConfig={className:e&&e.className||"",imagePreserveAspectRatio:e&&e.imagePreserveAspectRatio||"xMidYMid slice",hideOnTransparent:!e||!1!==e.hideOnTransparent},this.globalData={_mdf:!1,frameNum:-1,renderConfig:this.renderConfig},this.pendingElements=[],this.elements=[],this.threeDElements=[],this.destroyed=!1,this.camera=null,this.supports3d=!0,this.rendererType="html"}function MaskElement(t,e,r){this.data=t,this.element=e,this.globalData=r,this.storedData=[],this.masksProperties=this.data.masksProperties||[],this.maskElement=null;var i,s=this.globalData.defs,a=this.masksProperties?this.masksProperties.length:0;this.viewData=createSizedArray(a),this.solidPath="";var n,o,h,l,p,m,f,c=this.masksProperties,d=0,u=[],y=createElementID(),g="clipPath",v="clip-path";for(i=0;i<a;i++)if(("a"!==c[i].mode&&"n"!==c[i].mode||c[i].inv||100!==c[i].o.k||c[i].o.x)&&(v=g="mask"),"s"!=c[i].mode&&"i"!=c[i].mode||0!==d?l=null:((l=createNS("rect")).setAttribute("fill","#ffffff"),l.setAttribute("width",this.element.comp.data.w||0),l.setAttribute("height",this.element.comp.data.h||0),u.push(l)),n=createNS("path"),"n"!=c[i].mode){var b;if(d+=1,n.setAttribute("fill","s"===c[i].mode?"#000000":"#ffffff"),n.setAttribute("clip-rule","nonzero"),0!==c[i].x.k?(v=g="mask",f=PropertyFactory.getProp(this.element,c[i].x,0,null,this.element),b=createElementID(),(p=createNS("filter")).setAttribute("id",b),(m=createNS("feMorphology")).setAttribute("operator","erode"),m.setAttribute("in","SourceGraphic"),m.setAttribute("radius","0"),p.appendChild(m),s.appendChild(p),n.setAttribute("stroke","s"===c[i].mode?"#000000":"#ffffff")):f=m=null,this.storedData[i]={elem:n,x:f,expan:m,lastPath:"",lastOperator:"",filterId:b,lastRadius:0},"i"==c[i].mode){h=u.length;var E=createNS("g");for(o=0;o<h;o+=1)E.appendChild(u[o]);var x=createNS("mask");x.setAttribute("mask-type","alpha"),x.setAttribute("id",y+"_"+d),x.appendChild(n),s.appendChild(x),E.setAttribute("mask","url("+locationHref+"#"+y+"_"+d+")"),u.length=0,u.push(E)}else u.push(n);c[i].inv&&!this.solidPath&&(this.solidPath=this.createLayerSolidPath()),this.viewData[i]={elem:n,lastPath:"",op:PropertyFactory.getProp(this.element,c[i].o,0,.01,this.element),prop:ShapePropertyFactory.getShapeProp(this.element,c[i],3),invRect:l},this.viewData[i].prop.k||this.drawPath(c[i],this.viewData[i].prop.v,this.viewData[i])}else this.viewData[i]={op:PropertyFactory.getProp(this.element,c[i].o,0,.01,this.element),prop:ShapePropertyFactory.getShapeProp(this.element,c[i],3),elem:n,lastPath:""},s.appendChild(n);for(this.maskElement=createNS(g),a=u.length,i=0;i<a;i+=1)this.maskElement.appendChild(u[i]);0<d&&(this.maskElement.setAttribute("id",y),this.element.maskedElement.setAttribute(v,"url("+locationHref+"#"+y+")"),s.appendChild(this.maskElement)),this.viewData.length&&this.element.addRenderableComponent(this)}function HierarchyElement(){}function FrameElement(){}function TransformElement(){}function RenderableElement(){}function RenderableDOMElement(){}function ProcessedElement(t,e){this.elem=t,this.pos=e}function SVGStyleData(t,e){this.data=t,this.type=t.ty,this.d="",this.lvl=e,this._mdf=!1,this.closed=!0===t.hd,this.pElem=createNS("path"),this.msElem=null}function SVGShapeData(t,e,r){this.caches=[],this.styles=[],this.transformers=t,this.lStr="",this.sh=r,this.lvl=e,this._isAnimated=!!r.k;for(var i=0,s=t.length;i<s;){if(t[i].mProps.dynamicProperties.length){this._isAnimated=!0;break}i+=1}}function SVGTransformData(t,e,r){this.transform={mProps:t,op:e,container:r},this.elements=[],this._isAnimated=this.transform.mProps.dynamicProperties.length||this.transform.op.effectsSequence.length}function SVGStrokeStyleData(t,e,r){this.initDynamicPropertyContainer(t),this.getValue=this.iterateDynamicProperties,this.o=PropertyFactory.getProp(t,e.o,0,.01,this),this.w=PropertyFactory.getProp(t,e.w,0,null,this),this.d=new DashProperty(t,e.d||{},"svg",this),this.c=PropertyFactory.getProp(t,e.c,1,255,this),this.style=r,this._isAnimated=!!this._isAnimated}function SVGFillStyleData(t,e,r){this.initDynamicPropertyContainer(t),this.getValue=this.iterateDynamicProperties,this.o=PropertyFactory.getProp(t,e.o,0,.01,this),this.c=PropertyFactory.getProp(t,e.c,1,255,this),this.style=r}function SVGGradientFillStyleData(t,e,r){this.initDynamicPropertyContainer(t),this.getValue=this.iterateDynamicProperties,this.initGradientData(t,e,r)}function SVGGradientStrokeStyleData(t,e,r){this.initDynamicPropertyContainer(t),this.getValue=this.iterateDynamicProperties,this.w=PropertyFactory.getProp(t,e.w,0,null,this),this.d=new DashProperty(t,e.d||{},"svg",this),this.initGradientData(t,e,r),this._isAnimated=!!this._isAnimated}function ShapeGroupData(){this.it=[],this.prevViewData=[],this.gr=createNS("g")}BaseRenderer.prototype.checkLayers=function(t){var e,r,i=this.layers.length;for(this.completeLayers=!0,e=i-1;0<=e;e--)this.elements[e]||(r=this.layers[e]).ip-r.st<=t-this.layers[e].st&&r.op-r.st>t-this.layers[e].st&&this.buildItem(e),this.completeLayers=!!this.elements[e]&&this.completeLayers;this.checkPendingElements()},BaseRenderer.prototype.createItem=function(t){switch(t.ty){case 2:return this.createImage(t);case 0:return this.createComp(t);case 1:return this.createSolid(t);case 3:return this.createNull(t);case 4:return this.createShape(t);case 5:return this.createText(t);case 13:return this.createCamera(t)}return this.createNull(t)},BaseRenderer.prototype.createCamera=function(){throw new Error("You're using a 3d camera. Try the html renderer.")},BaseRenderer.prototype.buildAllItems=function(){var t,e=this.layers.length;for(t=0;t<e;t+=1)this.buildItem(t);this.checkPendingElements()},BaseRenderer.prototype.includeLayers=function(t){this.completeLayers=!1;var e,r,i=t.length,s=this.layers.length;for(e=0;e<i;e+=1)for(r=0;r<s;){if(this.layers[r].id==t[e].id){this.layers[r]=t[e];break}r+=1}},BaseRenderer.prototype.setProjectInterface=function(t){this.globalData.projectInterface=t},BaseRenderer.prototype.initItems=function(){this.globalData.progressiveLoad||this.buildAllItems()},BaseRenderer.prototype.buildElementParenting=function(t,e,r){for(var i=this.elements,s=this.layers,a=0,n=s.length;a<n;)s[a].ind==e&&(i[a]&&!0!==i[a]?(r.push(i[a]),i[a].setAsParent(),void 0!==s[a].parent?this.buildElementParenting(t,s[a].parent,r):t.setHierarchy(r)):(this.buildItem(a),this.addPendingElement(t))),a+=1},BaseRenderer.prototype.addPendingElement=function(t){this.pendingElements.push(t)},BaseRenderer.prototype.searchExtraCompositions=function(t){var e,r=t.length;for(e=0;e<r;e+=1)if(t[e].xt){var i=this.createComp(t[e]);i.initExpressions(),this.globalData.projectInterface.registerComposition(i)}},BaseRenderer.prototype.setupGlobalData=function(t,e){this.globalData.fontManager=new FontManager,this.globalData.fontManager.addChars(t.chars),this.globalData.fontManager.addFonts(t.fonts,e),this.globalData.getAssetData=this.animationItem.getAssetData.bind(this.animationItem),this.globalData.getAssetsPath=this.animationItem.getAssetsPath.bind(this.animationItem),this.globalData.imageLoader=this.animationItem.imagePreloader,this.globalData.frameId=0,this.globalData.frameRate=t.fr,this.globalData.nm=t.nm,this.globalData.compSize={w:t.w,h:t.h}},extendPrototype([BaseRenderer],SVGRenderer),SVGRenderer.prototype.createNull=function(t){return new NullElement(t,this.globalData,this)},SVGRenderer.prototype.createShape=function(t){return new SVGShapeElement(t,this.globalData,this)},SVGRenderer.prototype.createText=function(t){return new SVGTextElement(t,this.globalData,this)},SVGRenderer.prototype.createImage=function(t){return new IImageElement(t,this.globalData,this)},SVGRenderer.prototype.createComp=function(t){return new SVGCompElement(t,this.globalData,this)},SVGRenderer.prototype.createSolid=function(t){return new ISolidElement(t,this.globalData,this)},SVGRenderer.prototype.configAnimation=function(t){this.svgElement.setAttribute("xmlns","http://www.w3.org/2000/svg"),this.renderConfig.viewBoxSize?this.svgElement.setAttribute("viewBox",this.renderConfig.viewBoxSize):this.svgElement.setAttribute("viewBox","0 0 "+t.w+" "+t.h),this.renderConfig.viewBoxOnly||(this.svgElement.setAttribute("width",t.w),this.svgElement.setAttribute("height",t.h),this.svgElement.style.width="100%",this.svgElement.style.height="100%",this.svgElement.style.transform="translate3d(0,0,0)"),this.renderConfig.className&&this.svgElement.setAttribute("class",this.renderConfig.className),void 0!==this.renderConfig.focusable&&this.svgElement.setAttribute("focusable",this.renderConfig.focusable),this.svgElement.setAttribute("preserveAspectRatio",this.renderConfig.preserveAspectRatio),this.animationItem.wrapper.appendChild(this.svgElement);var e=this.globalData.defs;this.setupGlobalData(t,e),this.globalData.progressiveLoad=this.renderConfig.progressiveLoad,this.data=t;var r=createNS("clipPath"),i=createNS("rect");i.setAttribute("width",t.w),i.setAttribute("height",t.h),i.setAttribute("x",0),i.setAttribute("y",0);var s=createElementID();r.setAttribute("id",s),r.appendChild(i),this.layerElement.setAttribute("clip-path","url("+locationHref+"#"+s+")"),e.appendChild(r),this.layers=t.layers,this.elements=createSizedArray(t.layers.length)},SVGRenderer.prototype.destroy=function(){this.animationItem.wrapper.innerHTML="",this.layerElement=null,this.globalData.defs=null;var t,e=this.layers?this.layers.length:0;for(t=0;t<e;t++)this.elements[t]&&this.elements[t].destroy();this.elements.length=0,this.destroyed=!0,this.animationItem=null},SVGRenderer.prototype.updateContainerSize=function(){},SVGRenderer.prototype.buildItem=function(t){var e=this.elements;if(!e[t]&&99!=this.layers[t].ty){e[t]=!0;var r=this.createItem(this.layers[t]);e[t]=r,expressionsPlugin&&(0===this.layers[t].ty&&this.globalData.projectInterface.registerComposition(r),r.initExpressions()),this.appendElementInPos(r,t),this.layers[t].tt&&(this.elements[t-1]&&!0!==this.elements[t-1]?r.setMatte(e[t-1].layerId):(this.buildItem(t-1),this.addPendingElement(r)))}},SVGRenderer.prototype.checkPendingElements=function(){for(;this.pendingElements.length;){var t=this.pendingElements.pop();if(t.checkParenting(),t.data.tt)for(var e=0,r=this.elements.length;e<r;){if(this.elements[e]===t){t.setMatte(this.elements[e-1].layerId);break}e+=1}}},SVGRenderer.prototype.renderFrame=function(t){if(this.renderedFrame!==t&&!this.destroyed){null===t?t=this.renderedFrame:this.renderedFrame=t,this.globalData.frameNum=t,this.globalData.frameId+=1,this.globalData.projectInterface.currentFrame=t,this.globalData._mdf=!1;var e,r=this.layers.length;for(this.completeLayers||this.checkLayers(t),e=r-1;0<=e;e--)(this.completeLayers||this.elements[e])&&this.elements[e].prepareFrame(t-this.layers[e].st);if(this.globalData._mdf)for(e=0;e<r;e+=1)(this.completeLayers||this.elements[e])&&this.elements[e].renderFrame()}},SVGRenderer.prototype.appendElementInPos=function(t,e){var r=t.getBaseElement();if(r){for(var i,s=0;s<e;)this.elements[s]&&!0!==this.elements[s]&&this.elements[s].getBaseElement()&&(i=this.elements[s].getBaseElement()),s+=1;i?this.layerElement.insertBefore(r,i):this.layerElement.appendChild(r)}},SVGRenderer.prototype.hide=function(){this.layerElement.style.display="none"},SVGRenderer.prototype.show=function(){this.layerElement.style.display="block"},extendPrototype([BaseRenderer],CanvasRenderer),CanvasRenderer.prototype.createShape=function(t){return new CVShapeElement(t,this.globalData,this)},CanvasRenderer.prototype.createText=function(t){return new CVTextElement(t,this.globalData,this)},CanvasRenderer.prototype.createImage=function(t){return new CVImageElement(t,this.globalData,this)},CanvasRenderer.prototype.createComp=function(t){return new CVCompElement(t,this.globalData,this)},CanvasRenderer.prototype.createSolid=function(t){return new CVSolidElement(t,this.globalData,this)},CanvasRenderer.prototype.createNull=SVGRenderer.prototype.createNull,CanvasRenderer.prototype.ctxTransform=function(t){if(1!==t[0]||0!==t[1]||0!==t[4]||1!==t[5]||0!==t[12]||0!==t[13])if(this.renderConfig.clearCanvas){this.transformMat.cloneFromProps(t);var e=this.contextData.cTr.props;this.transformMat.transform(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15]),this.contextData.cTr.cloneFromProps(this.transformMat.props);var r=this.contextData.cTr.props;this.canvasContext.setTransform(r[0],r[1],r[4],r[5],r[12],r[13])}else this.canvasContext.transform(t[0],t[1],t[4],t[5],t[12],t[13])},CanvasRenderer.prototype.ctxOpacity=function(t){if(!this.renderConfig.clearCanvas)return this.canvasContext.globalAlpha*=t<0?0:t,void(this.globalData.currentGlobalAlpha=this.contextData.cO);this.contextData.cO*=t<0?0:t,this.globalData.currentGlobalAlpha!==this.contextData.cO&&(this.canvasContext.globalAlpha=this.contextData.cO,this.globalData.currentGlobalAlpha=this.contextData.cO)},CanvasRenderer.prototype.reset=function(){this.renderConfig.clearCanvas?this.contextData.reset():this.canvasContext.restore()},CanvasRenderer.prototype.save=function(t){if(this.renderConfig.clearCanvas){t&&this.canvasContext.save();var e=this.contextData.cTr.props;this.contextData._length<=this.contextData.cArrPos&&this.contextData.duplicate();var r,i=this.contextData.saved[this.contextData.cArrPos];for(r=0;r<16;r+=1)i[r]=e[r];this.contextData.savedOp[this.contextData.cArrPos]=this.contextData.cO,this.contextData.cArrPos+=1}else this.canvasContext.save()},CanvasRenderer.prototype.restore=function(t){if(this.renderConfig.clearCanvas){t&&(this.canvasContext.restore(),this.globalData.blendMode="source-over"),this.contextData.cArrPos-=1;var e,r=this.contextData.saved[this.contextData.cArrPos],i=this.contextData.cTr.props;for(e=0;e<16;e+=1)i[e]=r[e];this.canvasContext.setTransform(r[0],r[1],r[4],r[5],r[12],r[13]),r=this.contextData.savedOp[this.contextData.cArrPos],this.contextData.cO=r,this.globalData.currentGlobalAlpha!==r&&(this.canvasContext.globalAlpha=r,this.globalData.currentGlobalAlpha=r)}else this.canvasContext.restore()},CanvasRenderer.prototype.configAnimation=function(t){this.animationItem.wrapper?(this.animationItem.container=createTag("canvas"),this.animationItem.container.style.width="100%",this.animationItem.container.style.height="100%",this.animationItem.container.style.transformOrigin=this.animationItem.container.style.mozTransformOrigin=this.animationItem.container.style.webkitTransformOrigin=this.animationItem.container.style["-webkit-transform"]="0px 0px 0px",this.animationItem.wrapper.appendChild(this.animationItem.container),this.canvasContext=this.animationItem.container.getContext("2d"),this.renderConfig.className&&this.animationItem.container.setAttribute("class",this.renderConfig.className)):this.canvasContext=this.renderConfig.context,this.data=t,this.layers=t.layers,this.transformCanvas={w:t.w,h:t.h,sx:0,sy:0,tx:0,ty:0},this.setupGlobalData(t,document.body),this.globalData.canvasContext=this.canvasContext,(this.globalData.renderer=this).globalData.isDashed=!1,this.globalData.progressiveLoad=this.renderConfig.progressiveLoad,this.globalData.transformCanvas=this.transformCanvas,this.elements=createSizedArray(t.layers.length),this.updateContainerSize()},CanvasRenderer.prototype.updateContainerSize=function(){var t,e,r,i;if(this.reset(),this.animationItem.wrapper&&this.animationItem.container?(t=this.animationItem.wrapper.offsetWidth,e=this.animationItem.wrapper.offsetHeight,this.animationItem.container.setAttribute("width",t*this.renderConfig.dpr),this.animationItem.container.setAttribute("height",e*this.renderConfig.dpr)):(t=this.canvasContext.canvas.width*this.renderConfig.dpr,e=this.canvasContext.canvas.height*this.renderConfig.dpr),-1!==this.renderConfig.preserveAspectRatio.indexOf("meet")||-1!==this.renderConfig.preserveAspectRatio.indexOf("slice")){var s=this.renderConfig.preserveAspectRatio.split(" "),a=s[1]||"meet",n=s[0]||"xMidYMid",o=n.substr(0,4),h=n.substr(4);r=t/e,i=this.transformCanvas.w/this.transformCanvas.h,this.transformCanvas.sy=r<i&&"meet"===a||i<r&&"slice"===a?(this.transformCanvas.sx=t/(this.transformCanvas.w/this.renderConfig.dpr),t/(this.transformCanvas.w/this.renderConfig.dpr)):(this.transformCanvas.sx=e/(this.transformCanvas.h/this.renderConfig.dpr),e/(this.transformCanvas.h/this.renderConfig.dpr)),this.transformCanvas.tx="xMid"===o&&(i<r&&"meet"===a||r<i&&"slice"===a)?(t-this.transformCanvas.w*(e/this.transformCanvas.h))/2*this.renderConfig.dpr:"xMax"===o&&(i<r&&"meet"===a||r<i&&"slice"===a)?(t-this.transformCanvas.w*(e/this.transformCanvas.h))*this.renderConfig.dpr:0,this.transformCanvas.ty="YMid"===h&&(r<i&&"meet"===a||i<r&&"slice"===a)?(e-this.transformCanvas.h*(t/this.transformCanvas.w))/2*this.renderConfig.dpr:"YMax"===h&&(r<i&&"meet"===a||i<r&&"slice"===a)?(e-this.transformCanvas.h*(t/this.transformCanvas.w))*this.renderConfig.dpr:0}else"none"==this.renderConfig.preserveAspectRatio?(this.transformCanvas.sx=t/(this.transformCanvas.w/this.renderConfig.dpr),this.transformCanvas.sy=e/(this.transformCanvas.h/this.renderConfig.dpr)):(this.transformCanvas.sx=this.renderConfig.dpr,this.transformCanvas.sy=this.renderConfig.dpr),this.transformCanvas.tx=0,this.transformCanvas.ty=0;this.transformCanvas.props=[this.transformCanvas.sx,0,0,0,0,this.transformCanvas.sy,0,0,0,0,1,0,this.transformCanvas.tx,this.transformCanvas.ty,0,1],this.ctxTransform(this.transformCanvas.props),this.canvasContext.beginPath(),this.canvasContext.rect(0,0,this.transformCanvas.w,this.transformCanvas.h),this.canvasContext.closePath(),this.canvasContext.clip(),this.renderFrame(this.renderedFrame,!0)},CanvasRenderer.prototype.destroy=function(){var t;for(this.renderConfig.clearCanvas&&(this.animationItem.wrapper.innerHTML=""),t=(this.layers?this.layers.length:0)-1;0<=t;t-=1)this.elements[t]&&this.elements[t].destroy();this.elements.length=0,this.globalData.canvasContext=null,this.animationItem.container=null,this.destroyed=!0},CanvasRenderer.prototype.renderFrame=function(t,e){if((this.renderedFrame!==t||!0!==this.renderConfig.clearCanvas||e)&&!this.destroyed&&-1!==t){this.renderedFrame=t,this.globalData.frameNum=t-this.animationItem._isFirstFrame,this.globalData.frameId+=1,this.globalData._mdf=!this.renderConfig.clearCanvas||e,this.globalData.projectInterface.currentFrame=t;var r,i=this.layers.length;for(this.completeLayers||this.checkLayers(t),r=0;r<i;r++)(this.completeLayers||this.elements[r])&&this.elements[r].prepareFrame(t-this.layers[r].st);if(this.globalData._mdf){for(!0===this.renderConfig.clearCanvas?this.canvasContext.clearRect(0,0,this.transformCanvas.w,this.transformCanvas.h):this.save(),r=i-1;0<=r;r-=1)(this.completeLayers||this.elements[r])&&this.elements[r].renderFrame();!0!==this.renderConfig.clearCanvas&&this.restore()}}},CanvasRenderer.prototype.buildItem=function(t){var e=this.elements;if(!e[t]&&99!=this.layers[t].ty){var r=this.createItem(this.layers[t],this,this.globalData);(e[t]=r).initExpressions()}},CanvasRenderer.prototype.checkPendingElements=function(){for(;this.pendingElements.length;){this.pendingElements.pop().checkParenting()}},CanvasRenderer.prototype.hide=function(){this.animationItem.container.style.display="none"},CanvasRenderer.prototype.show=function(){this.animationItem.container.style.display="block"},extendPrototype([BaseRenderer],HybridRenderer),HybridRenderer.prototype.buildItem=SVGRenderer.prototype.buildItem,HybridRenderer.prototype.checkPendingElements=function(){for(;this.pendingElements.length;){this.pendingElements.pop().checkParenting()}},HybridRenderer.prototype.appendElementInPos=function(t,e){var r=t.getBaseElement();if(r){var i=this.layers[e];if(i.ddd&&this.supports3d)this.addTo3dContainer(r,e);else if(this.threeDElements)this.addTo3dContainer(r,e);else{for(var s,a,n=0;n<e;)this.elements[n]&&!0!==this.elements[n]&&this.elements[n].getBaseElement&&(a=this.elements[n],s=(this.layers[n].ddd?this.getThreeDContainerByPos(n):a.getBaseElement())||s),n+=1;s?i.ddd&&this.supports3d||this.layerElement.insertBefore(r,s):i.ddd&&this.supports3d||this.layerElement.appendChild(r)}}},HybridRenderer.prototype.createShape=function(t){return this.supports3d?new HShapeElement(t,this.globalData,this):new SVGShapeElement(t,this.globalData,this)},HybridRenderer.prototype.createText=function(t){return this.supports3d?new HTextElement(t,this.globalData,this):new SVGTextElement(t,this.globalData,this)},HybridRenderer.prototype.createCamera=function(t){return this.camera=new HCameraElement(t,this.globalData,this),this.camera},HybridRenderer.prototype.createImage=function(t){return this.supports3d?new HImageElement(t,this.globalData,this):new IImageElement(t,this.globalData,this)},HybridRenderer.prototype.createComp=function(t){return this.supports3d?new HCompElement(t,this.globalData,this):new SVGCompElement(t,this.globalData,this)},HybridRenderer.prototype.createSolid=function(t){return this.supports3d?new HSolidElement(t,this.globalData,this):new ISolidElement(t,this.globalData,this)},HybridRenderer.prototype.createNull=SVGRenderer.prototype.createNull,HybridRenderer.prototype.getThreeDContainerByPos=function(t){for(var e=0,r=this.threeDElements.length;e<r;){if(this.threeDElements[e].startPos<=t&&this.threeDElements[e].endPos>=t)return this.threeDElements[e].perspectiveElem;e+=1}},HybridRenderer.prototype.createThreeDContainer=function(t,e){var r=createTag("div");styleDiv(r);var i=createTag("div");styleDiv(i),"3d"===e&&(r.style.width=this.globalData.compSize.w+"px",r.style.height=this.globalData.compSize.h+"px",r.style.transformOrigin=r.style.mozTransformOrigin=r.style.webkitTransformOrigin="50% 50%",i.style.transform=i.style.webkitTransform="matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)"),r.appendChild(i);var s={container:i,perspectiveElem:r,startPos:t,endPos:t,type:e};return this.threeDElements.push(s),s},HybridRenderer.prototype.build3dContainers=function(){var t,e,r=this.layers.length,i="";for(t=0;t<r;t+=1)this.layers[t].ddd&&3!==this.layers[t].ty?"3d"!==i&&(i="3d",e=this.createThreeDContainer(t,"3d")):"2d"!==i&&(i="2d",e=this.createThreeDContainer(t,"2d")),e.endPos=Math.max(e.endPos,t);for(t=(r=this.threeDElements.length)-1;0<=t;t--)this.resizerElem.appendChild(this.threeDElements[t].perspectiveElem)},HybridRenderer.prototype.addTo3dContainer=function(t,e){for(var r=0,i=this.threeDElements.length;r<i;){if(e<=this.threeDElements[r].endPos){for(var s,a=this.threeDElements[r].startPos;a<e;)this.elements[a]&&this.elements[a].getBaseElement&&(s=this.elements[a].getBaseElement()),a+=1;s?this.threeDElements[r].container.insertBefore(t,s):this.threeDElements[r].container.appendChild(t);break}r+=1}},HybridRenderer.prototype.configAnimation=function(t){var e=createTag("div"),r=this.animationItem.wrapper;e.style.width=t.w+"px",e.style.height=t.h+"px",styleDiv(this.resizerElem=e),e.style.transformStyle=e.style.webkitTransformStyle=e.style.mozTransformStyle="flat",this.renderConfig.className&&e.setAttribute("class",this.renderConfig.className),r.appendChild(e),e.style.overflow="hidden";var i=createNS("svg");i.setAttribute("width","1"),i.setAttribute("height","1"),styleDiv(i),this.resizerElem.appendChild(i);var s=createNS("defs");i.appendChild(s),this.data=t,this.setupGlobalData(t,i),this.globalData.defs=s,this.layers=t.layers,this.layerElement=this.resizerElem,this.build3dContainers(),this.updateContainerSize()},HybridRenderer.prototype.destroy=function(){this.animationItem.wrapper.innerHTML="",this.animationItem.container=null,this.globalData.defs=null;var t,e=this.layers?this.layers.length:0;for(t=0;t<e;t++)this.elements[t].destroy();this.elements.length=0,this.destroyed=!0,this.animationItem=null},HybridRenderer.prototype.updateContainerSize=function(){var t,e,r,i,s=this.animationItem.wrapper.offsetWidth,a=this.animationItem.wrapper.offsetHeight;i=s/a<this.globalData.compSize.w/this.globalData.compSize.h?(t=s/this.globalData.compSize.w,e=s/this.globalData.compSize.w,r=0,(a-this.globalData.compSize.h*(s/this.globalData.compSize.w))/2):(t=a/this.globalData.compSize.h,e=a/this.globalData.compSize.h,r=(s-this.globalData.compSize.w*(a/this.globalData.compSize.h))/2,0),this.resizerElem.style.transform=this.resizerElem.style.webkitTransform="matrix3d("+t+",0,0,0,0,"+e+",0,0,0,0,1,0,"+r+","+i+",0,1)"},HybridRenderer.prototype.renderFrame=SVGRenderer.prototype.renderFrame,HybridRenderer.prototype.hide=function(){this.resizerElem.style.display="none"},HybridRenderer.prototype.show=function(){this.resizerElem.style.display="block"},HybridRenderer.prototype.initItems=function(){if(this.buildAllItems(),this.camera)this.camera.setup();else{var t,e=this.globalData.compSize.w,r=this.globalData.compSize.h,i=this.threeDElements.length;for(t=0;t<i;t+=1)this.threeDElements[t].perspectiveElem.style.perspective=this.threeDElements[t].perspectiveElem.style.webkitPerspective=Math.sqrt(Math.pow(e,2)+Math.pow(r,2))+"px"}},HybridRenderer.prototype.searchExtraCompositions=function(t){var e,r=t.length,i=createTag("div");for(e=0;e<r;e+=1)if(t[e].xt){var s=this.createComp(t[e],i,this.globalData.comp,null);s.initExpressions(),this.globalData.projectInterface.registerComposition(s)}},MaskElement.prototype.getMaskProperty=function(t){return this.viewData[t].prop},MaskElement.prototype.renderFrame=function(t){var e,r=this.element.finalTransform.mat,i=this.masksProperties.length;for(e=0;e<i;e++)if((this.viewData[e].prop._mdf||t)&&this.drawPath(this.masksProperties[e],this.viewData[e].prop.v,this.viewData[e]),(this.viewData[e].op._mdf||t)&&this.viewData[e].elem.setAttribute("fill-opacity",this.viewData[e].op.v),"n"!==this.masksProperties[e].mode&&(this.viewData[e].invRect&&(this.element.finalTransform.mProp._mdf||t)&&(this.viewData[e].invRect.setAttribute("x",-r.props[12]),this.viewData[e].invRect.setAttribute("y",-r.props[13])),this.storedData[e].x&&(this.storedData[e].x._mdf||t))){var s=this.storedData[e].expan;this.storedData[e].x.v<0?("erode"!==this.storedData[e].lastOperator&&(this.storedData[e].lastOperator="erode",this.storedData[e].elem.setAttribute("filter","url("+locationHref+"#"+this.storedData[e].filterId+")")),s.setAttribute("radius",-this.storedData[e].x.v)):("dilate"!==this.storedData[e].lastOperator&&(this.storedData[e].lastOperator="dilate",this.storedData[e].elem.setAttribute("filter",null)),this.storedData[e].elem.setAttribute("stroke-width",2*this.storedData[e].x.v))}},MaskElement.prototype.getMaskelement=function(){return this.maskElement},MaskElement.prototype.createLayerSolidPath=function(){var t="M0,0 ";return t+=" h"+this.globalData.compSize.w,t+=" v"+this.globalData.compSize.h,t+=" h-"+this.globalData.compSize.w,t+=" v-"+this.globalData.compSize.h+" "},MaskElement.prototype.drawPath=function(t,e,r){var i,s,a=" M"+e.v[0][0]+","+e.v[0][1];for(s=e._length,i=1;i<s;i+=1)a+=" C"+e.o[i-1][0]+","+e.o[i-1][1]+" "+e.i[i][0]+","+e.i[i][1]+" "+e.v[i][0]+","+e.v[i][1];if(e.c&&1<s&&(a+=" C"+e.o[i-1][0]+","+e.o[i-1][1]+" "+e.i[0][0]+","+e.i[0][1]+" "+e.v[0][0]+","+e.v[0][1]),r.lastPath!==a){var n="";r.elem&&(e.c&&(n=t.inv?this.solidPath+a:a),r.elem.setAttribute("d",n)),r.lastPath=a}},MaskElement.prototype.destroy=function(){this.element=null,this.globalData=null,this.maskElement=null,this.data=null,this.masksProperties=null},HierarchyElement.prototype={initHierarchy:function(){this.hierarchy=[],this._isParent=!1,this.checkParenting()},setHierarchy:function(t){this.hierarchy=t},setAsParent:function(){this._isParent=!0},checkParenting:function(){void 0!==this.data.parent&&this.comp.buildElementParenting(this,this.data.parent,[])}},FrameElement.prototype={initFrame:function(){this._isFirstFrame=!1,this.dynamicProperties=[],this._mdf=!1},prepareProperties:function(t,e){var r,i=this.dynamicProperties.length;for(r=0;r<i;r+=1)(e||this._isParent&&"transform"===this.dynamicProperties[r].propType)&&(this.dynamicProperties[r].getValue(),this.dynamicProperties[r]._mdf&&(this.globalData._mdf=!0,this._mdf=!0))},addDynamicProperty:function(t){-1===this.dynamicProperties.indexOf(t)&&this.dynamicProperties.push(t)}},TransformElement.prototype={initTransform:function(){this.finalTransform={mProp:this.data.ks?TransformPropertyFactory.getTransformProperty(this,this.data.ks,this):{o:0},_matMdf:!1,_opMdf:!1,mat:new Matrix},this.data.ao&&(this.finalTransform.mProp.autoOriented=!0),this.data.ty},renderTransform:function(){if(this.finalTransform._opMdf=this.finalTransform.mProp.o._mdf||this._isFirstFrame,this.finalTransform._matMdf=this.finalTransform.mProp._mdf||this._isFirstFrame,this.hierarchy){var t,e=this.finalTransform.mat,r=0,i=this.hierarchy.length;if(!this.finalTransform._matMdf)for(;r<i;){if(this.hierarchy[r].finalTransform.mProp._mdf){this.finalTransform._matMdf=!0;break}r+=1}if(this.finalTransform._matMdf)for(t=this.finalTransform.mProp.v.props,e.cloneFromProps(t),r=0;r<i;r+=1)t=this.hierarchy[r].finalTransform.mProp.v.props,e.transform(t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8],t[9],t[10],t[11],t[12],t[13],t[14],t[15])}},globalToLocal:function(t){var e=[];e.push(this.finalTransform);for(var r=!0,i=this.comp;r;)i.finalTransform?(i.data.hasMask&&e.splice(0,0,i.finalTransform),i=i.comp):r=!1;var s,a,n=e.length;for(s=0;s<n;s+=1)a=e[s].mat.applyToPointArray(0,0,0),t=[t[0]-a[0],t[1]-a[1],0];return t},mHelper:new Matrix},RenderableElement.prototype={initRenderable:function(){this.isInRange=!1,this.hidden=!1,this.isTransparent=!1,this.renderableComponents=[]},addRenderableComponent:function(t){-1===this.renderableComponents.indexOf(t)&&this.renderableComponents.push(t)},removeRenderableComponent:function(t){-1!==this.renderableComponents.indexOf(t)&&this.renderableComponents.splice(this.renderableComponents.indexOf(t),1)},prepareRenderableFrame:function(t){this.checkLayerLimits(t)},checkTransparency:function(){this.finalTransform.mProp.o.v<=0?!this.isTransparent&&this.globalData.renderConfig.hideOnTransparent&&(this.isTransparent=!0,this.hide()):this.isTransparent&&(this.isTransparent=!1,this.show())},checkLayerLimits:function(t){this.data.ip-this.data.st<=t&&this.data.op-this.data.st>t?!0!==this.isInRange&&(this.globalData._mdf=!0,this._mdf=!0,this.isInRange=!0,this.show()):!1!==this.isInRange&&(this.globalData._mdf=!0,this.isInRange=!1,this.hide())},renderRenderable:function(){var t,e=this.renderableComponents.length;for(t=0;t<e;t+=1)this.renderableComponents[t].renderFrame(this._isFirstFrame)},sourceRectAtTime:function(){return{top:0,left:0,width:100,height:100}},getLayerSize:function(){return 5===this.data.ty?{w:this.data.textData.width,h:this.data.textData.height}:{w:this.data.width,h:this.data.height}}},extendPrototype([RenderableElement,createProxyFunction({initElement:function(t,e,r){this.initFrame(),this.initBaseData(t,e,r),this.initTransform(t,e,r),this.initHierarchy(),this.initRenderable(),this.initRendererElement(),this.createContainerElements(),this.createRenderableComponents(),this.createContent(),this.hide()},hide:function(){this.hidden||this.isInRange&&!this.isTransparent||((this.baseElement||this.layerElement).style.display="none",this.hidden=!0)},show:function(){this.isInRange&&!this.isTransparent&&(this.data.hd||((this.baseElement||this.layerElement).style.display="block"),this.hidden=!1,this._isFirstFrame=!0)},renderFrame:function(){this.data.hd||this.hidden||(this.renderTransform(),this.renderRenderable(),this.renderElement(),this.renderInnerContent(),this._isFirstFrame&&(this._isFirstFrame=!1))},renderInnerContent:function(){},prepareFrame:function(t){this._mdf=!1,this.prepareRenderableFrame(t),this.prepareProperties(t,this.isInRange),this.checkTransparency()},destroy:function(){this.innerElem=null,this.destroyBaseElement()}})],RenderableDOMElement),SVGStyleData.prototype.reset=function(){this.d="",this._mdf=!1},SVGShapeData.prototype.setAsAnimated=function(){this._isAnimated=!0},extendPrototype([DynamicPropertyContainer],SVGStrokeStyleData),extendPrototype([DynamicPropertyContainer],SVGFillStyleData),SVGGradientFillStyleData.prototype.initGradientData=function(t,e,r){this.o=PropertyFactory.getProp(t,e.o,0,.01,this),this.s=PropertyFactory.getProp(t,e.s,1,null,this),this.e=PropertyFactory.getProp(t,e.e,1,null,this),this.h=PropertyFactory.getProp(t,e.h||{k:0},0,.01,this),this.a=PropertyFactory.getProp(t,e.a||{k:0},0,degToRads,this),this.g=new GradientProperty(t,e.g,this),this.style=r,this.stops=[],this.setGradientData(r.pElem,e),this.setGradientOpacity(e,r),this._isAnimated=!!this._isAnimated},SVGGradientFillStyleData.prototype.setGradientData=function(t,e){var r=createElementID(),i=createNS(1===e.t?"linearGradient":"radialGradient");i.setAttribute("id",r),i.setAttribute("spreadMethod","pad"),i.setAttribute("gradientUnits","userSpaceOnUse");var s,a,n,o=[];for(n=4*e.g.p,a=0;a<n;a+=4)s=createNS("stop"),i.appendChild(s),o.push(s);t.setAttribute("gf"===e.ty?"fill":"stroke","url("+locationHref+"#"+r+")"),this.gf=i,this.cst=o},SVGGradientFillStyleData.prototype.setGradientOpacity=function(t,e){if(this.g._hasOpacity&&!this.g._collapsable){var r,i,s,a=createNS("mask"),n=createNS("path");a.appendChild(n);var o=createElementID(),h=createElementID();a.setAttribute("id",h);var l=createNS(1===t.t?"linearGradient":"radialGradient");l.setAttribute("id",o),l.setAttribute("spreadMethod","pad"),l.setAttribute("gradientUnits","userSpaceOnUse"),s=t.g.k.k[0].s?t.g.k.k[0].s.length:t.g.k.k.length;var p=this.stops;for(i=4*t.g.p;i<s;i+=2)(r=createNS("stop")).setAttribute("stop-color","rgb(255,255,255)"),l.appendChild(r),p.push(r);n.setAttribute("gf"===t.ty?"fill":"stroke","url("+locationHref+"#"+o+")"),this.of=l,this.ms=a,this.ost=p,this.maskId=h,e.msElem=n}},extendPrototype([DynamicPropertyContainer],SVGGradientFillStyleData),extendPrototype([SVGGradientFillStyleData,DynamicPropertyContainer],SVGGradientStrokeStyleData);var SVGElementsRenderer=function(){var y=new Matrix,g=new Matrix;function e(t,e,r){(r||e.transform.op._mdf)&&e.transform.container.setAttribute("opacity",e.transform.op.v),(r||e.transform.mProps._mdf)&&e.transform.container.setAttribute("transform",e.transform.mProps.v.to2dCSS())}function r(t,e,r){var i,s,a,n,o,h,l,p,m,f,c,d=e.styles.length,u=e.lvl;for(h=0;h<d;h+=1){if(n=e.sh._mdf||r,e.styles[h].lvl<u){for(p=g.reset(),f=u-e.styles[h].lvl,c=e.transformers.length-1;!n&&0<f;)n=e.transformers[c].mProps._mdf||n,f--,c--;if(n)for(f=u-e.styles[h].lvl,c=e.transformers.length-1;0<f;)m=e.transformers[c].mProps.v.props,p.transform(m[0],m[1],m[2],m[3],m[4],m[5],m[6],m[7],m[8],m[9],m[10],m[11],m[12],m[13],m[14],m[15]),f--,c--}else p=y;if(s=(l=e.sh.paths)._length,n){for(a="",i=0;i<s;i+=1)(o=l.shapes[i])&&o._length&&(a+=buildShapeString(o,o._length,o.c,p));e.caches[h]=a}else a=e.caches[h];e.styles[h].d+=!0===t.hd?"":a,e.styles[h]._mdf=n||e.styles[h]._mdf}}function i(t,e,r){var i=e.style;(e.c._mdf||r)&&i.pElem.setAttribute("fill","rgb("+bm_floor(e.c.v[0])+","+bm_floor(e.c.v[1])+","+bm_floor(e.c.v[2])+")"),(e.o._mdf||r)&&i.pElem.setAttribute("fill-opacity",e.o.v)}function s(t,e,r){a(t,e,r),n(t,e,r)}function a(t,e,r){var i,s,a,n,o,h=e.gf,l=e.g._hasOpacity,p=e.s.v,m=e.e.v;if(e.o._mdf||r){var f="gf"===t.ty?"fill-opacity":"stroke-opacity";e.style.pElem.setAttribute(f,e.o.v)}if(e.s._mdf||r){var c=1===t.t?"x1":"cx",d="x1"===c?"y1":"cy";h.setAttribute(c,p[0]),h.setAttribute(d,p[1]),l&&!e.g._collapsable&&(e.of.setAttribute(c,p[0]),e.of.setAttribute(d,p[1]))}if(e.g._cmdf||r){i=e.cst;var u=e.g.c;for(a=i.length,s=0;s<a;s+=1)(n=i[s]).setAttribute("offset",u[4*s]+"%"),n.setAttribute("stop-color","rgb("+u[4*s+1]+","+u[4*s+2]+","+u[4*s+3]+")")}if(l&&(e.g._omdf||r)){var y=e.g.o;for(a=(i=e.g._collapsable?e.cst:e.ost).length,s=0;s<a;s+=1)n=i[s],e.g._collapsable||n.setAttribute("offset",y[2*s]+"%"),n.setAttribute("stop-opacity",y[2*s+1])}if(1===t.t)(e.e._mdf||r)&&(h.setAttribute("x2",m[0]),h.setAttribute("y2",m[1]),l&&!e.g._collapsable&&(e.of.setAttribute("x2",m[0]),e.of.setAttribute("y2",m[1])));else if((e.s._mdf||e.e._mdf||r)&&(o=Math.sqrt(Math.pow(p[0]-m[0],2)+Math.pow(p[1]-m[1],2)),h.setAttribute("r",o),l&&!e.g._collapsable&&e.of.setAttribute("r",o)),e.e._mdf||e.h._mdf||e.a._mdf||r){o||(o=Math.sqrt(Math.pow(p[0]-m[0],2)+Math.pow(p[1]-m[1],2)));var g=Math.atan2(m[1]-p[1],m[0]-p[0]),v=o*(1<=e.h.v?.99:e.h.v<=-1?-.99:e.h.v),b=Math.cos(g+e.a.v)*v+p[0],E=Math.sin(g+e.a.v)*v+p[1];h.setAttribute("fx",b),h.setAttribute("fy",E),l&&!e.g._collapsable&&(e.of.setAttribute("fx",b),e.of.setAttribute("fy",E))}}function n(t,e,r){var i=e.style,s=e.d;s&&(s._mdf||r)&&s.dashStr&&(i.pElem.setAttribute("stroke-dasharray",s.dashStr),i.pElem.setAttribute("stroke-dashoffset",s.dashoffset[0])),e.c&&(e.c._mdf||r)&&i.pElem.setAttribute("stroke","rgb("+bm_floor(e.c.v[0])+","+bm_floor(e.c.v[1])+","+bm_floor(e.c.v[2])+")"),(e.o._mdf||r)&&i.pElem.setAttribute("stroke-opacity",e.o.v),(e.w._mdf||r)&&(i.pElem.setAttribute("stroke-width",e.w.v),i.msElem&&i.msElem.setAttribute("stroke-width",e.w.v))}return{createRenderFunction:function(t){t.ty;switch(t.ty){case"fl":return i;case"gf":return a;case"gs":return s;case"st":return n;case"sh":case"el":case"rc":case"sr":return r;case"tr":return e}}}}();function ShapeTransformManager(){this.sequences={},this.sequenceList=[],this.transform_key_count=0}function CVShapeData(t,e,r,i){this.styledShapes=[],this.tr=[0,0,0,0,0,0];var s=4;"rc"==e.ty?s=5:"el"==e.ty?s=6:"sr"==e.ty&&(s=7),this.sh=ShapePropertyFactory.getShapeProp(t,e,s,t);var a,n,o=r.length;for(a=0;a<o;a+=1)r[a].closed||(n={transforms:i.addTransformSequence(r[a].transforms),trNodes:[]},this.styledShapes.push(n),r[a].elements.push(n))}function BaseElement(){}function NullElement(t,e,r){this.initFrame(),this.initBaseData(t,e,r),this.initFrame(),this.initTransform(t,e,r),this.initHierarchy()}function SVGBaseElement(){}function IShapeElement(){}function ITextElement(){}function ICompElement(){}function IImageElement(t,e,r){this.assetData=e.getAssetData(t.refId),this.initElement(t,e,r),this.sourceRect={top:0,left:0,width:this.assetData.w,height:this.assetData.h}}function ISolidElement(t,e,r){this.initElement(t,e,r)}function SVGCompElement(t,e,r){this.layers=t.layers,this.supports3d=!0,this.completeLayers=!1,this.pendingElements=[],this.elements=this.layers?createSizedArray(this.layers.length):[],this.initElement(t,e,r),this.tm=t.tm?PropertyFactory.getProp(this,t.tm,0,e.frameRate,this):{_placeholder:!0}}function SVGTextElement(t,e,r){this.textSpans=[],this.renderType="svg",this.initElement(t,e,r)}function SVGShapeElement(t,e,r){this.shapes=[],this.shapesData=t.shapes,this.stylesList=[],this.shapeModifiers=[],this.itemsData=[],this.processedElements=[],this.animatedContents=[],this.initElement(t,e,r),this.prevViewData=[]}function SVGTintFilter(t,e){this.filterManager=e;var r=createNS("feColorMatrix");if(r.setAttribute("type","matrix"),r.setAttribute("color-interpolation-filters","linearRGB"),r.setAttribute("values","0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"),r.setAttribute("result","f1"),t.appendChild(r),(r=createNS("feColorMatrix")).setAttribute("type","matrix"),r.setAttribute("color-interpolation-filters","sRGB"),r.setAttribute("values","1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"),r.setAttribute("result","f2"),t.appendChild(r),this.matrixFilter=r,100!==e.effectElements[2].p.v||e.effectElements[2].p.k){var i,s=createNS("feMerge");t.appendChild(s),(i=createNS("feMergeNode")).setAttribute("in","SourceGraphic"),s.appendChild(i),(i=createNS("feMergeNode")).setAttribute("in","f2"),s.appendChild(i)}}function SVGFillFilter(t,e){this.filterManager=e;var r=createNS("feColorMatrix");r.setAttribute("type","matrix"),r.setAttribute("color-interpolation-filters","sRGB"),r.setAttribute("values","1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"),t.appendChild(r),this.matrixFilter=r}function SVGGaussianBlurEffect(t,e){t.setAttribute("x","-100%"),t.setAttribute("y","-100%"),t.setAttribute("width","300%"),t.setAttribute("height","300%"),this.filterManager=e;var r=createNS("feGaussianBlur");t.appendChild(r),this.feGaussianBlur=r}function SVGStrokeEffect(t,e){this.initialized=!1,this.filterManager=e,this.elem=t,this.paths=[]}function SVGTritoneFilter(t,e){this.filterManager=e;var r=createNS("feColorMatrix");r.setAttribute("type","matrix"),r.setAttribute("color-interpolation-filters","linearRGB"),r.setAttribute("values","0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"),r.setAttribute("result","f1"),t.appendChild(r);var i=createNS("feComponentTransfer");i.setAttribute("color-interpolation-filters","sRGB"),t.appendChild(i),this.matrixFilter=i;var s=createNS("feFuncR");s.setAttribute("type","table"),i.appendChild(s),this.feFuncR=s;var a=createNS("feFuncG");a.setAttribute("type","table"),i.appendChild(a),this.feFuncG=a;var n=createNS("feFuncB");n.setAttribute("type","table"),i.appendChild(n),this.feFuncB=n}function SVGProLevelsFilter(t,e){this.filterManager=e;var r=this.filterManager.effectElements,i=createNS("feComponentTransfer");(r[10].p.k||0!==r[10].p.v||r[11].p.k||1!==r[11].p.v||r[12].p.k||1!==r[12].p.v||r[13].p.k||0!==r[13].p.v||r[14].p.k||1!==r[14].p.v)&&(this.feFuncR=this.createFeFunc("feFuncR",i)),(r[17].p.k||0!==r[17].p.v||r[18].p.k||1!==r[18].p.v||r[19].p.k||1!==r[19].p.v||r[20].p.k||0!==r[20].p.v||r[21].p.k||1!==r[21].p.v)&&(this.feFuncG=this.createFeFunc("feFuncG",i)),(r[24].p.k||0!==r[24].p.v||r[25].p.k||1!==r[25].p.v||r[26].p.k||1!==r[26].p.v||r[27].p.k||0!==r[27].p.v||r[28].p.k||1!==r[28].p.v)&&(this.feFuncB=this.createFeFunc("feFuncB",i)),(r[31].p.k||0!==r[31].p.v||r[32].p.k||1!==r[32].p.v||r[33].p.k||1!==r[33].p.v||r[34].p.k||0!==r[34].p.v||r[35].p.k||1!==r[35].p.v)&&(this.feFuncA=this.createFeFunc("feFuncA",i)),(this.feFuncR||this.feFuncG||this.feFuncB||this.feFuncA)&&(i.setAttribute("color-interpolation-filters","sRGB"),t.appendChild(i),i=createNS("feComponentTransfer")),(r[3].p.k||0!==r[3].p.v||r[4].p.k||1!==r[4].p.v||r[5].p.k||1!==r[5].p.v||r[6].p.k||0!==r[6].p.v||r[7].p.k||1!==r[7].p.v)&&(i.setAttribute("color-interpolation-filters","sRGB"),t.appendChild(i),this.feFuncRComposed=this.createFeFunc("feFuncR",i),this.feFuncGComposed=this.createFeFunc("feFuncG",i),this.feFuncBComposed=this.createFeFunc("feFuncB",i))}function SVGDropShadowEffect(t,e){t.setAttribute("x","-100%"),t.setAttribute("y","-100%"),t.setAttribute("width","400%"),t.setAttribute("height","400%"),this.filterManager=e;var r=createNS("feGaussianBlur");r.setAttribute("in","SourceAlpha"),r.setAttribute("result","drop_shadow_1"),r.setAttribute("stdDeviation","0"),this.feGaussianBlur=r,t.appendChild(r);var i=createNS("feOffset");i.setAttribute("dx","25"),i.setAttribute("dy","0"),i.setAttribute("in","drop_shadow_1"),i.setAttribute("result","drop_shadow_2"),this.feOffset=i,t.appendChild(i);var s=createNS("feFlood");s.setAttribute("flood-color","#00ff00"),s.setAttribute("flood-opacity","1"),s.setAttribute("result","drop_shadow_3"),this.feFlood=s,t.appendChild(s);var a=createNS("feComposite");a.setAttribute("in","drop_shadow_3"),a.setAttribute("in2","drop_shadow_2"),a.setAttribute("operator","in"),a.setAttribute("result","drop_shadow_4"),t.appendChild(a);var n,o=createNS("feMerge");t.appendChild(o),n=createNS("feMergeNode"),o.appendChild(n),(n=createNS("feMergeNode")).setAttribute("in","SourceGraphic"),this.feMergeNode=n,this.feMerge=o,this.originalNodeAdded=!1,o.appendChild(n)}ShapeTransformManager.prototype={addTransformSequence:function(t){var e,r=t.length,i="_";for(e=0;e<r;e+=1)i+=t[e].transform.key+"_";var s=this.sequences[i];return s||(s={transforms:[].concat(t),finalTransform:new Matrix,_mdf:!1},this.sequences[i]=s,this.sequenceList.push(s)),s},processSequence:function(t,e){for(var r,i=0,s=t.transforms.length,a=e;i<s&&!e;){if(t.transforms[i].transform.mProps._mdf){a=!0;break}i+=1}if(a)for(t.finalTransform.reset(),i=s-1;0<=i;i-=1)r=t.transforms[i].transform.mProps.v.props,t.finalTransform.transform(r[0],r[1],r[2],r[3],r[4],r[5],r[6],r[7],r[8],r[9],r[10],r[11],r[12],r[13],r[14],r[15]);t._mdf=a},processSequences:function(t){var e,r=this.sequenceList.length;for(e=0;e<r;e+=1)this.processSequence(this.sequenceList[e],t)},getNewKey:function(){return"_"+this.transform_key_count++}},CVShapeData.prototype.setAsAnimated=SVGShapeData.prototype.setAsAnimated,BaseElement.prototype={checkMasks:function(){if(!this.data.hasMask)return!1;for(var t=0,e=this.data.masksProperties.length;t<e;){if("n"!==this.data.masksProperties[t].mode&&!1!==this.data.masksProperties[t].cl)return!0;t+=1}return!1},initExpressions:function(){this.layerInterface=LayerExpressionInterface(this),this.data.hasMask&&this.maskManager&&this.layerInterface.registerMaskInterface(this.maskManager);var t=EffectsExpressionInterface.createEffectsInterface(this,this.layerInterface);this.layerInterface.registerEffectsInterface(t),0===this.data.ty||this.data.xt?this.compInterface=CompExpressionInterface(this):4===this.data.ty?(this.layerInterface.shapeInterface=ShapeExpressionInterface(this.shapesData,this.itemsData,this.layerInterface),this.layerInterface.content=this.layerInterface.shapeInterface):5===this.data.ty&&(this.layerInterface.textInterface=TextExpressionInterface(this),this.layerInterface.text=this.layerInterface.textInterface)},setBlendMode:function(){var t=getBlendMode(this.data.bm);(this.baseElement||this.layerElement).style["mix-blend-mode"]=t},initBaseData:function(t,e,r){this.globalData=e,this.comp=r,this.data=t,this.layerId=createElementID(),this.data.sr||(this.data.sr=1),this.effectsManager=new EffectsManager(this.data,this,this.dynamicProperties)},getType:function(){return this.type},sourceRectAtTime:function(){}},NullElement.prototype.prepareFrame=function(t){this.prepareProperties(t,!0)},NullElement.prototype.renderFrame=function(){},NullElement.prototype.getBaseElement=function(){return null},NullElement.prototype.destroy=function(){},NullElement.prototype.sourceRectAtTime=function(){},NullElement.prototype.hide=function(){},extendPrototype([BaseElement,TransformElement,HierarchyElement,FrameElement],NullElement),SVGBaseElement.prototype={initRendererElement:function(){this.layerElement=createNS("g")},createContainerElements:function(){this.matteElement=createNS("g"),this.transformedElement=this.layerElement,this.maskedElement=this.layerElement,this._sizeChanged=!1;var t,e,r,i=null;if(this.data.td){if(3==this.data.td||1==this.data.td){var s=createNS("mask");s.setAttribute("id",this.layerId),s.setAttribute("mask-type",3==this.data.td?"luminance":"alpha"),s.appendChild(this.layerElement),i=s,this.globalData.defs.appendChild(s),featureSupport.maskType||1!=this.data.td||(s.setAttribute("mask-type","luminance"),t=createElementID(),e=filtersFactory.createFilter(t),this.globalData.defs.appendChild(e),e.appendChild(filtersFactory.createAlphaToLuminanceFilter()),(r=createNS("g")).appendChild(this.layerElement),i=r,s.appendChild(r),r.setAttribute("filter","url("+locationHref+"#"+t+")"))}else if(2==this.data.td){var a=createNS("mask");a.setAttribute("id",this.layerId),a.setAttribute("mask-type","alpha");var n=createNS("g");a.appendChild(n),t=createElementID(),e=filtersFactory.createFilter(t);var o=createNS("feComponentTransfer");o.setAttribute("in","SourceGraphic"),e.appendChild(o);var h=createNS("feFuncA");h.setAttribute("type","table"),h.setAttribute("tableValues","1.0 0.0"),o.appendChild(h),this.globalData.defs.appendChild(e);var l=createNS("rect");l.setAttribute("width",this.comp.data.w),l.setAttribute("height",this.comp.data.h),l.setAttribute("x","0"),l.setAttribute("y","0"),l.setAttribute("fill","#ffffff"),l.setAttribute("opacity","0"),n.setAttribute("filter","url("+locationHref+"#"+t+")"),n.appendChild(l),n.appendChild(this.layerElement),i=n,featureSupport.maskType||(a.setAttribute("mask-type","luminance"),e.appendChild(filtersFactory.createAlphaToLuminanceFilter()),r=createNS("g"),n.appendChild(l),r.appendChild(this.layerElement),i=r,n.appendChild(r)),this.globalData.defs.appendChild(a)}}else this.data.tt?(this.matteElement.appendChild(this.layerElement),i=this.matteElement,this.baseElement=this.matteElement):this.baseElement=this.layerElement;if(this.data.ln&&this.layerElement.setAttribute("id",this.data.ln),this.data.cl&&this.layerElement.setAttribute("class",this.data.cl),0===this.data.ty&&!this.data.hd){var p=createNS("clipPath"),m=createNS("path");m.setAttribute("d","M0,0 L"+this.data.w+",0 L"+this.data.w+","+this.data.h+" L0,"+this.data.h+"z");var f=createElementID();if(p.setAttribute("id",f),p.appendChild(m),this.globalData.defs.appendChild(p),this.checkMasks()){var c=createNS("g");c.setAttribute("clip-path","url("+locationHref+"#"+f+")"),c.appendChild(this.layerElement),this.transformedElement=c,i?i.appendChild(this.transformedElement):this.baseElement=this.transformedElement}else this.layerElement.setAttribute("clip-path","url("+locationHref+"#"+f+")")}0!==this.data.bm&&this.setBlendMode()},renderElement:function(){this.finalTransform._matMdf&&this.transformedElement.setAttribute("transform",this.finalTransform.mat.to2dCSS()),this.finalTransform._opMdf&&this.transformedElement.setAttribute("opacity",this.finalTransform.mProp.o.v)},destroyBaseElement:function(){this.layerElement=null,this.matteElement=null,this.maskManager.destroy()},getBaseElement:function(){return this.data.hd?null:this.baseElement},createRenderableComponents:function(){this.maskManager=new MaskElement(this.data,this,this.globalData),this.renderableEffectsManager=new SVGEffects(this)},setMatte:function(t){this.matteElement&&this.matteElement.setAttribute("mask","url("+locationHref+"#"+t+")")}},IShapeElement.prototype={addShapeToModifiers:function(t){var e,r=this.shapeModifiers.length;for(e=0;e<r;e+=1)this.shapeModifiers[e].addShape(t)},isShapeInAnimatedModifiers:function(t){for(var e=this.shapeModifiers.length;0<e;)if(this.shapeModifiers[0].isAnimatedWithShape(t))return!0;return!1},renderModifiers:function(){if(this.shapeModifiers.length){var t,e=this.shapes.length;for(t=0;t<e;t+=1)this.shapes[t].sh.reset();for(t=(e=this.shapeModifiers.length)-1;0<=t;t-=1)this.shapeModifiers[t].processShapes(this._isFirstFrame)}},lcEnum:{1:"butt",2:"round",3:"square"},ljEnum:{1:"miter",2:"round",3:"bevel"},searchProcessedElement:function(t){for(var e=this.processedElements,r=0,i=e.length;r<i;){if(e[r].elem===t)return e[r].pos;r+=1}return 0},addProcessedElement:function(t,e){for(var r=this.processedElements,i=r.length;i;)if(r[i-=1].elem===t)return void(r[i].pos=e);r.push(new ProcessedElement(t,e))},prepareFrame:function(t){this.prepareRenderableFrame(t),this.prepareProperties(t,this.isInRange)}},ITextElement.prototype.initElement=function(t,e,r){this.lettersChangedFlag=!0,this.initFrame(),this.initBaseData(t,e,r),this.textProperty=new TextProperty(this,t.t,this.dynamicProperties),this.textAnimator=new TextAnimatorProperty(t.t,this.renderType,this),this.initTransform(t,e,r),this.initHierarchy(),this.initRenderable(),this.initRendererElement(),this.createContainerElements(),this.createRenderableComponents(),this.createContent(),this.hide(),this.textAnimator.searchProperties(this.dynamicProperties)},ITextElement.prototype.prepareFrame=function(t){this._mdf=!1,this.prepareRenderableFrame(t),this.prepareProperties(t,this.isInRange),(this.textProperty._mdf||this.textProperty._isFirstFrame)&&(this.buildNewText(),this.textProperty._isFirstFrame=!1,this.textProperty._mdf=!1)},ITextElement.prototype.createPathShape=function(t,e){var r,i,s=e.length,a="";for(r=0;r<s;r+=1)i=e[r].ks.k,a+=buildShapeString(i,i.i.length,!0,t);return a},ITextElement.prototype.updateDocumentData=function(t,e){this.textProperty.updateDocumentData(t,e)},ITextElement.prototype.canResizeFont=function(t){this.textProperty.canResizeFont(t)},ITextElement.prototype.setMinimumFontSize=function(t){this.textProperty.setMinimumFontSize(t)},ITextElement.prototype.applyTextPropertiesToMatrix=function(t,e,r,i,s){switch(t.ps&&e.translate(t.ps[0],t.ps[1]+t.ascent,0),e.translate(0,-t.ls,0),t.j){case 1:e.translate(t.justifyOffset+(t.boxWidth-t.lineWidths[r]),0,0);break;case 2:e.translate(t.justifyOffset+(t.boxWidth-t.lineWidths[r])/2,0,0)}e.translate(i,s,0)},ITextElement.prototype.buildColor=function(t){return"rgb("+Math.round(255*t[0])+","+Math.round(255*t[1])+","+Math.round(255*t[2])+")"},ITextElement.prototype.emptyProp=new LetterProps,ITextElement.prototype.destroy=function(){},extendPrototype([BaseElement,TransformElement,HierarchyElement,FrameElement,RenderableDOMElement],ICompElement),ICompElement.prototype.initElement=function(t,e,r){this.initFrame(),this.initBaseData(t,e,r),this.initTransform(t,e,r),this.initRenderable(),this.initHierarchy(),this.initRendererElement(),this.createContainerElements(),this.createRenderableComponents(),!this.data.xt&&e.progressiveLoad||this.buildAllItems(),this.hide()},ICompElement.prototype.prepareFrame=function(t){if(this._mdf=!1,this.prepareRenderableFrame(t),this.prepareProperties(t,this.isInRange),this.isInRange||this.data.xt){if(this.tm._placeholder)this.renderedFrame=t/this.data.sr;else{var e=this.tm.v;e===this.data.op&&(e=this.data.op-1),this.renderedFrame=e}var r,i=this.elements.length;for(this.completeLayers||this.checkLayers(this.renderedFrame),r=i-1;0<=r;r-=1)(this.completeLayers||this.elements[r])&&(this.elements[r].prepareFrame(this.renderedFrame-this.layers[r].st),this.elements[r]._mdf&&(this._mdf=!0))}},ICompElement.prototype.renderInnerContent=function(){var t,e=this.layers.length;for(t=0;t<e;t+=1)(this.completeLayers||this.elements[t])&&this.elements[t].renderFrame()},ICompElement.prototype.setElements=function(t){this.elements=t},ICompElement.prototype.getElements=function(){return this.elements},ICompElement.prototype.destroyElements=function(){var t,e=this.layers.length;for(t=0;t<e;t+=1)this.elements[t]&&this.elements[t].destroy()},ICompElement.prototype.destroy=function(){this.destroyElements(),this.destroyBaseElement()},extendPrototype([BaseElement,TransformElement,SVGBaseElement,HierarchyElement,FrameElement,RenderableDOMElement],IImageElement),IImageElement.prototype.createContent=function(){var t=this.globalData.getAssetsPath(this.assetData);this.innerElem=createNS("image"),this.innerElem.setAttribute("width",this.assetData.w+"px"),this.innerElem.setAttribute("height",this.assetData.h+"px"),this.innerElem.setAttribute("preserveAspectRatio",this.assetData.pr||this.globalData.renderConfig.imagePreserveAspectRatio),this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink","href",t),this.layerElement.appendChild(this.innerElem)},IImageElement.prototype.sourceRectAtTime=function(){return this.sourceRect},extendPrototype([IImageElement],ISolidElement),ISolidElement.prototype.createContent=function(){var t=createNS("rect");t.setAttribute("width",this.data.sw),t.setAttribute("height",this.data.sh),t.setAttribute("fill",this.data.sc),this.layerElement.appendChild(t)},extendPrototype([SVGRenderer,ICompElement,SVGBaseElement],SVGCompElement),extendPrototype([BaseElement,TransformElement,SVGBaseElement,HierarchyElement,FrameElement,RenderableDOMElement,ITextElement],SVGTextElement),SVGTextElement.prototype.createContent=function(){this.data.singleShape&&!this.globalData.fontManager.chars&&(this.textContainer=createNS("text"))},SVGTextElement.prototype.buildTextContents=function(t){for(var e=0,r=t.length,i=[],s="";e<r;)t[e]===String.fromCharCode(13)||t[e]===String.fromCharCode(3)?(i.push(s),s=""):s+=t[e],e+=1;return i.push(s),i},SVGTextElement.prototype.buildNewText=function(){var t,e,r=this.textProperty.currentData;this.renderedLetters=createSizedArray(r?r.l.length:0),r.fc?this.layerElement.setAttribute("fill",this.buildColor(r.fc)):this.layerElement.setAttribute("fill","rgba(0,0,0,0)"),r.sc&&(this.layerElement.setAttribute("stroke",this.buildColor(r.sc)),this.layerElement.setAttribute("stroke-width",r.sw)),this.layerElement.setAttribute("font-size",r.finalSize);var i=this.globalData.fontManager.getFontByName(r.f);if(i.fClass)this.layerElement.setAttribute("class",i.fClass);else{this.layerElement.setAttribute("font-family",i.fFamily);var s=r.fWeight,a=r.fStyle;this.layerElement.setAttribute("font-style",a),this.layerElement.setAttribute("font-weight",s)}this.layerElement.setAttribute("aria-label",r.t);var n,o=r.l||[],h=!!this.globalData.fontManager.chars;e=o.length;var l,p=this.mHelper,m="",f=this.data.singleShape,c=0,d=0,u=!0,y=r.tr/1e3*r.finalSize;if(!f||h||r.sz){var g,v,b=this.textSpans.length;for(t=0;t<e;t+=1)h&&f&&0!==t||(n=t<b?this.textSpans[t]:createNS(h?"path":"text"),b<=t&&(n.setAttribute("stroke-linecap","butt"),n.setAttribute("stroke-linejoin","round"),n.setAttribute("stroke-miterlimit","4"),this.textSpans[t]=n,this.layerElement.appendChild(n)),n.style.display="inherit"),p.reset(),p.scale(r.finalSize/100,r.finalSize/100),f&&(o[t].n&&(c=-y,d+=r.yOffset,d+=u?1:0,u=!1),this.applyTextPropertiesToMatrix(r,p,o[t].line,c,d),c+=o[t].l||0,c+=y),h?(l=(g=(v=this.globalData.fontManager.getCharData(r.finalText[t],i.fStyle,this.globalData.fontManager.getFontByName(r.f).fFamily))&&v.data||{}).shapes?g.shapes[0].it:[],f?m+=this.createPathShape(p,l):n.setAttribute("d",this.createPathShape(p,l))):(f&&n.setAttribute("transform","translate("+p.props[12]+","+p.props[13]+")"),n.textContent=o[t].val,n.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"));f&&n&&n.setAttribute("d",m)}else{var E=this.textContainer,x="start";switch(r.j){case 1:x="end";break;case 2:x="middle"}E.setAttribute("text-anchor",x),E.setAttribute("letter-spacing",y);var P=this.buildTextContents(r.finalText);for(e=P.length,d=r.ps?r.ps[1]+r.ascent:0,t=0;t<e;t+=1)(n=this.textSpans[t]||createNS("tspan")).textContent=P[t],n.setAttribute("x",0),n.setAttribute("y",d),n.style.display="inherit",E.appendChild(n),this.textSpans[t]=n,d+=r.finalLineHeight;this.layerElement.appendChild(E)}for(;t<this.textSpans.length;)this.textSpans[t].style.display="none",t+=1;this._sizeChanged=!0},SVGTextElement.prototype.sourceRectAtTime=function(t){if(this.prepareFrame(this.comp.renderedFrame-this.data.st),this.renderInnerContent(),this._sizeChanged){this._sizeChanged=!1;var e=this.layerElement.getBBox();this.bbox={top:e.y,left:e.x,width:e.width,height:e.height}}return this.bbox},SVGTextElement.prototype.renderInnerContent=function(){if(!this.data.singleShape&&(this.textAnimator.getMeasures(this.textProperty.currentData,this.lettersChangedFlag),this.lettersChangedFlag||this.textAnimator.lettersChangedFlag)){var t,e;this._sizeChanged=!0;var r,i,s=this.textAnimator.renderedLetters,a=this.textProperty.currentData.l;for(e=a.length,t=0;t<e;t+=1)a[t].n||(r=s[t],i=this.textSpans[t],r._mdf.m&&i.setAttribute("transform",r.m),r._mdf.o&&i.setAttribute("opacity",r.o),r._mdf.sw&&i.setAttribute("stroke-width",r.sw),r._mdf.sc&&i.setAttribute("stroke",r.sc),r._mdf.fc&&i.setAttribute("fill",r.fc))}},extendPrototype([BaseElement,TransformElement,SVGBaseElement,IShapeElement,HierarchyElement,FrameElement,RenderableDOMElement],SVGShapeElement),SVGShapeElement.prototype.initSecondaryElement=function(){},SVGShapeElement.prototype.identityMatrix=new Matrix,SVGShapeElement.prototype.buildExpressionInterface=function(){},SVGShapeElement.prototype.createContent=function(){this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,this.layerElement,0,[],!0),this.filterUniqueShapes()},SVGShapeElement.prototype.filterUniqueShapes=function(){var t,e,r,i,s=this.shapes.length,a=this.stylesList.length,n=[],o=!1;for(r=0;r<a;r+=1){for(i=this.stylesList[r],o=!1,t=n.length=0;t<s;t+=1)-1!==(e=this.shapes[t]).styles.indexOf(i)&&(n.push(e),o=e._isAnimated||o);1<n.length&&o&&this.setShapesAsAnimated(n)}},SVGShapeElement.prototype.setShapesAsAnimated=function(t){var e,r=t.length;for(e=0;e<r;e+=1)t[e].setAsAnimated()},SVGShapeElement.prototype.createStyleElement=function(t,e){var r,i=new SVGStyleData(t,e),s=i.pElem;if("st"===t.ty)r=new SVGStrokeStyleData(this,t,i);else if("fl"===t.ty)r=new SVGFillStyleData(this,t,i);else if("gf"===t.ty||"gs"===t.ty){r=new("gf"===t.ty?SVGGradientFillStyleData:SVGGradientStrokeStyleData)(this,t,i),this.globalData.defs.appendChild(r.gf),r.maskId&&(this.globalData.defs.appendChild(r.ms),this.globalData.defs.appendChild(r.of),s.setAttribute("mask","url("+locationHref+"#"+r.maskId+")"))}return"st"!==t.ty&&"gs"!==t.ty||(s.setAttribute("stroke-linecap",this.lcEnum[t.lc]||"round"),s.setAttribute("stroke-linejoin",this.ljEnum[t.lj]||"round"),s.setAttribute("fill-opacity","0"),1===t.lj&&s.setAttribute("stroke-miterlimit",t.ml)),2===t.r&&s.setAttribute("fill-rule","evenodd"),t.ln&&s.setAttribute("id",t.ln),t.cl&&s.setAttribute("class",t.cl),t.bm&&(s.style["mix-blend-mode"]=getBlendMode(t.bm)),this.stylesList.push(i),this.addToAnimatedContents(t,r),r},SVGShapeElement.prototype.createGroupElement=function(t){var e=new ShapeGroupData;return t.ln&&e.gr.setAttribute("id",t.ln),t.cl&&e.gr.setAttribute("class",t.cl),t.bm&&(e.gr.style["mix-blend-mode"]=getBlendMode(t.bm)),e},SVGShapeElement.prototype.createTransformElement=function(t,e){var r=TransformPropertyFactory.getTransformProperty(this,t,this),i=new SVGTransformData(r,r.o,e);return this.addToAnimatedContents(t,i),i},SVGShapeElement.prototype.createShapeElement=function(t,e,r){var i=4;"rc"===t.ty?i=5:"el"===t.ty?i=6:"sr"===t.ty&&(i=7);var s=new SVGShapeData(e,r,ShapePropertyFactory.getShapeProp(this,t,i,this));return this.shapes.push(s),this.addShapeToModifiers(s),this.addToAnimatedContents(t,s),s},SVGShapeElement.prototype.addToAnimatedContents=function(t,e){for(var r=0,i=this.animatedContents.length;r<i;){if(this.animatedContents[r].element===e)return;r+=1}this.animatedContents.push({fn:SVGElementsRenderer.createRenderFunction(t),element:e,data:t})},SVGShapeElement.prototype.setElementStyles=function(t){var e,r=t.styles,i=this.stylesList.length;for(e=0;e<i;e+=1)this.stylesList[e].closed||r.push(this.stylesList[e])},SVGShapeElement.prototype.reloadShapes=function(){this._isFirstFrame=!0;var t,e=this.itemsData.length;for(t=0;t<e;t+=1)this.prevViewData[t]=this.itemsData[t];for(this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,this.layerElement,0,[],!0),this.filterUniqueShapes(),e=this.dynamicProperties.length,t=0;t<e;t+=1)this.dynamicProperties[t].getValue();this.renderModifiers()},SVGShapeElement.prototype.searchShapes=function(t,e,r,i,s,a,n){var o,h,l,p,m,f,c=[].concat(a),d=t.length-1,u=[],y=[];for(o=d;0<=o;o-=1){if((f=this.searchProcessedElement(t[o]))?e[o]=r[f-1]:t[o]._render=n,"fl"==t[o].ty||"st"==t[o].ty||"gf"==t[o].ty||"gs"==t[o].ty)f?e[o].style.closed=!1:e[o]=this.createStyleElement(t[o],s),t[o]._render&&i.appendChild(e[o].style.pElem),u.push(e[o].style);else if("gr"==t[o].ty){if(f)for(l=e[o].it.length,h=0;h<l;h+=1)e[o].prevViewData[h]=e[o].it[h];else e[o]=this.createGroupElement(t[o]);this.searchShapes(t[o].it,e[o].it,e[o].prevViewData,e[o].gr,s+1,c,n),t[o]._render&&i.appendChild(e[o].gr)}else"tr"==t[o].ty?(f||(e[o]=this.createTransformElement(t[o],i)),p=e[o].transform,c.push(p)):"sh"==t[o].ty||"rc"==t[o].ty||"el"==t[o].ty||"sr"==t[o].ty?(f||(e[o]=this.createShapeElement(t[o],c,s)),this.setElementStyles(e[o])):"tm"==t[o].ty||"rd"==t[o].ty||"ms"==t[o].ty?(f?(m=e[o]).closed=!1:((m=ShapeModifiers.getModifier(t[o].ty)).init(this,t[o]),e[o]=m,this.shapeModifiers.push(m)),y.push(m)):"rp"==t[o].ty&&(f?(m=e[o]).closed=!0:(m=ShapeModifiers.getModifier(t[o].ty),(e[o]=m).init(this,t,o,e),this.shapeModifiers.push(m),n=!1),y.push(m));this.addProcessedElement(t[o],o+1)}for(d=u.length,o=0;o<d;o+=1)u[o].closed=!0;for(d=y.length,o=0;o<d;o+=1)y[o].closed=!0},SVGShapeElement.prototype.renderInnerContent=function(){this.renderModifiers();var t,e=this.stylesList.length;for(t=0;t<e;t+=1)this.stylesList[t].reset();for(this.renderShape(),t=0;t<e;t+=1)(this.stylesList[t]._mdf||this._isFirstFrame)&&(this.stylesList[t].msElem&&(this.stylesList[t].msElem.setAttribute("d",this.stylesList[t].d),this.stylesList[t].d="M0 0"+this.stylesList[t].d),this.stylesList[t].pElem.setAttribute("d",this.stylesList[t].d||"M0 0"))},SVGShapeElement.prototype.renderShape=function(){var t,e,r=this.animatedContents.length;for(t=0;t<r;t+=1)e=this.animatedContents[t],(this._isFirstFrame||e.element._isAnimated)&&!0!==e.data&&e.fn(e.data,e.element,this._isFirstFrame)},SVGShapeElement.prototype.destroy=function(){this.destroyBaseElement(),this.shapesData=null,this.itemsData=null},SVGTintFilter.prototype.renderFrame=function(t){if(t||this.filterManager._mdf){var e=this.filterManager.effectElements[0].p.v,r=this.filterManager.effectElements[1].p.v,i=this.filterManager.effectElements[2].p.v/100;this.matrixFilter.setAttribute("values",r[0]-e[0]+" 0 0 0 "+e[0]+" "+(r[1]-e[1])+" 0 0 0 "+e[1]+" "+(r[2]-e[2])+" 0 0 0 "+e[2]+" 0 0 0 "+i+" 0")}},SVGFillFilter.prototype.renderFrame=function(t){if(t||this.filterManager._mdf){var e=this.filterManager.effectElements[2].p.v,r=this.filterManager.effectElements[6].p.v;this.matrixFilter.setAttribute("values","0 0 0 0 "+e[0]+" 0 0 0 0 "+e[1]+" 0 0 0 0 "+e[2]+" 0 0 0 "+r+" 0")}},SVGGaussianBlurEffect.prototype.renderFrame=function(t){if(t||this.filterManager._mdf){var e=.3*this.filterManager.effectElements[0].p.v,r=this.filterManager.effectElements[1].p.v,i=3==r?0:e,s=2==r?0:e;this.feGaussianBlur.setAttribute("stdDeviation",i+" "+s);var a=1==this.filterManager.effectElements[2].p.v?"wrap":"duplicate";this.feGaussianBlur.setAttribute("edgeMode",a)}},SVGStrokeEffect.prototype.initialize=function(){var t,e,r,i,s=this.elem.layerElement.children||this.elem.layerElement.childNodes;for(1===this.filterManager.effectElements[1].p.v?(i=this.elem.maskManager.masksProperties.length,r=0):i=(r=this.filterManager.effectElements[0].p.v-1)+1,(e=createNS("g")).setAttribute("fill","none"),e.setAttribute("stroke-linecap","round"),e.setAttribute("stroke-dashoffset",1);r<i;r+=1)t=createNS("path"),e.appendChild(t),this.paths.push({p:t,m:r});if(3===this.filterManager.effectElements[10].p.v){var a=createNS("mask"),n=createElementID();a.setAttribute("id",n),a.setAttribute("mask-type","alpha"),a.appendChild(e),this.elem.globalData.defs.appendChild(a);var o=createNS("g");for(o.setAttribute("mask","url("+locationHref+"#"+n+")");s[0];)o.appendChild(s[0]);this.elem.layerElement.appendChild(o),this.masker=a,e.setAttribute("stroke","#fff")}else if(1===this.filterManager.effectElements[10].p.v||2===this.filterManager.effectElements[10].p.v){if(2===this.filterManager.effectElements[10].p.v)for(s=this.elem.layerElement.children||this.elem.layerElement.childNodes;s.length;)this.elem.layerElement.removeChild(s[0]);this.elem.layerElement.appendChild(e),this.elem.layerElement.removeAttribute("mask"),e.setAttribute("stroke","#fff")}this.initialized=!0,this.pathMasker=e},SVGStrokeEffect.prototype.renderFrame=function(t){this.initialized||this.initialize();var e,r,i,s=this.paths.length;for(e=0;e<s;e+=1)if(-1!==this.paths[e].m&&(r=this.elem.maskManager.viewData[this.paths[e].m],i=this.paths[e].p,(t||this.filterManager._mdf||r.prop._mdf)&&i.setAttribute("d",r.lastPath),t||this.filterManager.effectElements[9].p._mdf||this.filterManager.effectElements[4].p._mdf||this.filterManager.effectElements[7].p._mdf||this.filterManager.effectElements[8].p._mdf||r.prop._mdf)){var a;if(0!==this.filterManager.effectElements[7].p.v||100!==this.filterManager.effectElements[8].p.v){var n=Math.min(this.filterManager.effectElements[7].p.v,this.filterManager.effectElements[8].p.v)/100,o=Math.max(this.filterManager.effectElements[7].p.v,this.filterManager.effectElements[8].p.v)/100,h=i.getTotalLength();a="0 0 0 "+h*n+" ";var l,p=h*(o-n),m=1+2*this.filterManager.effectElements[4].p.v*this.filterManager.effectElements[9].p.v/100,f=Math.floor(p/m);for(l=0;l<f;l+=1)a+="1 "+2*this.filterManager.effectElements[4].p.v*this.filterManager.effectElements[9].p.v/100+" ";a+="0 "+10*h+" 0 0"}else a="1 "+2*this.filterManager.effectElements[4].p.v*this.filterManager.effectElements[9].p.v/100;i.setAttribute("stroke-dasharray",a)}if((t||this.filterManager.effectElements[4].p._mdf)&&this.pathMasker.setAttribute("stroke-width",2*this.filterManager.effectElements[4].p.v),(t||this.filterManager.effectElements[6].p._mdf)&&this.pathMasker.setAttribute("opacity",this.filterManager.effectElements[6].p.v),(1===this.filterManager.effectElements[10].p.v||2===this.filterManager.effectElements[10].p.v)&&(t||this.filterManager.effectElements[3].p._mdf)){var c=this.filterManager.effectElements[3].p.v;this.pathMasker.setAttribute("stroke","rgb("+bm_floor(255*c[0])+","+bm_floor(255*c[1])+","+bm_floor(255*c[2])+")")}},SVGTritoneFilter.prototype.renderFrame=function(t){if(t||this.filterManager._mdf){var e=this.filterManager.effectElements[0].p.v,r=this.filterManager.effectElements[1].p.v,i=this.filterManager.effectElements[2].p.v,s=i[0]+" "+r[0]+" "+e[0],a=i[1]+" "+r[1]+" "+e[1],n=i[2]+" "+r[2]+" "+e[2];this.feFuncR.setAttribute("tableValues",s),this.feFuncG.setAttribute("tableValues",a),this.feFuncB.setAttribute("tableValues",n)}},SVGProLevelsFilter.prototype.createFeFunc=function(t,e){var r=createNS(t);return r.setAttribute("type","table"),e.appendChild(r),r},SVGProLevelsFilter.prototype.getTableValue=function(t,e,r,i,s){for(var a,n,o=0,h=Math.min(t,e),l=Math.max(t,e),p=Array.call(null,{length:256}),m=0,f=s-i,c=e-t;o<=256;)n=(a=o/256)<=h?c<0?s:i:l<=a?c<0?i:s:i+f*Math.pow((a-t)/c,1/r),p[m++]=n,o+=256/255;return p.join(" ")},SVGProLevelsFilter.prototype.renderFrame=function(t){if(t||this.filterManager._mdf){var e,r=this.filterManager.effectElements;this.feFuncRComposed&&(t||r[3].p._mdf||r[4].p._mdf||r[5].p._mdf||r[6].p._mdf||r[7].p._mdf)&&(e=this.getTableValue(r[3].p.v,r[4].p.v,r[5].p.v,r[6].p.v,r[7].p.v),this.feFuncRComposed.setAttribute("tableValues",e),this.feFuncGComposed.setAttribute("tableValues",e),this.feFuncBComposed.setAttribute("tableValues",e)),this.feFuncR&&(t||r[10].p._mdf||r[11].p._mdf||r[12].p._mdf||r[13].p._mdf||r[14].p._mdf)&&(e=this.getTableValue(r[10].p.v,r[11].p.v,r[12].p.v,r[13].p.v,r[14].p.v),this.feFuncR.setAttribute("tableValues",e)),this.feFuncG&&(t||r[17].p._mdf||r[18].p._mdf||r[19].p._mdf||r[20].p._mdf||r[21].p._mdf)&&(e=this.getTableValue(r[17].p.v,r[18].p.v,r[19].p.v,r[20].p.v,r[21].p.v),this.feFuncG.setAttribute("tableValues",e)),this.feFuncB&&(t||r[24].p._mdf||r[25].p._mdf||r[26].p._mdf||r[27].p._mdf||r[28].p._mdf)&&(e=this.getTableValue(r[24].p.v,r[25].p.v,r[26].p.v,r[27].p.v,r[28].p.v),this.feFuncB.setAttribute("tableValues",e)),this.feFuncA&&(t||r[31].p._mdf||r[32].p._mdf||r[33].p._mdf||r[34].p._mdf||r[35].p._mdf)&&(e=this.getTableValue(r[31].p.v,r[32].p.v,r[33].p.v,r[34].p.v,r[35].p.v),this.feFuncA.setAttribute("tableValues",e))}},SVGDropShadowEffect.prototype.renderFrame=function(t){if(t||this.filterManager._mdf){if((t||this.filterManager.effectElements[4].p._mdf)&&this.feGaussianBlur.setAttribute("stdDeviation",this.filterManager.effectElements[4].p.v/4),t||this.filterManager.effectElements[0].p._mdf){var e=this.filterManager.effectElements[0].p.v;this.feFlood.setAttribute("flood-color",rgbToHex(Math.round(255*e[0]),Math.round(255*e[1]),Math.round(255*e[2])))}if((t||this.filterManager.effectElements[1].p._mdf)&&this.feFlood.setAttribute("flood-opacity",this.filterManager.effectElements[1].p.v/255),t||this.filterManager.effectElements[2].p._mdf||this.filterManager.effectElements[3].p._mdf){var r=this.filterManager.effectElements[3].p.v,i=(this.filterManager.effectElements[2].p.v-90)*degToRads,s=r*Math.cos(i),a=r*Math.sin(i);this.feOffset.setAttribute("dx",s),this.feOffset.setAttribute("dy",a)}}};var _svgMatteSymbols=[];function SVGMatte3Effect(t,e,r){this.initialized=!1,this.filterManager=e,this.filterElem=t,(this.elem=r).matteElement=createNS("g"),r.matteElement.appendChild(r.layerElement),r.matteElement.appendChild(r.transformedElement),r.baseElement=r.matteElement}function SVGEffects(t){var e,r,i=t.data.ef?t.data.ef.length:0,s=createElementID(),a=filtersFactory.createFilter(s),n=0;for(this.filters=[],e=0;e<i;e+=1)r=null,20===t.data.ef[e].ty?(n+=1,r=new SVGTintFilter(a,t.effectsManager.effectElements[e])):21===t.data.ef[e].ty?(n+=1,r=new SVGFillFilter(a,t.effectsManager.effectElements[e])):22===t.data.ef[e].ty?r=new SVGStrokeEffect(t,t.effectsManager.effectElements[e]):23===t.data.ef[e].ty?(n+=1,r=new SVGTritoneFilter(a,t.effectsManager.effectElements[e])):24===t.data.ef[e].ty?(n+=1,r=new SVGProLevelsFilter(a,t.effectsManager.effectElements[e])):25===t.data.ef[e].ty?(n+=1,r=new SVGDropShadowEffect(a,t.effectsManager.effectElements[e])):28===t.data.ef[e].ty?r=new SVGMatte3Effect(a,t.effectsManager.effectElements[e],t):29===t.data.ef[e].ty&&(n+=1,r=new SVGGaussianBlurEffect(a,t.effectsManager.effectElements[e])),r&&this.filters.push(r);n&&(t.globalData.defs.appendChild(a),t.layerElement.setAttribute("filter","url("+locationHref+"#"+s+")")),this.filters.length&&t.addRenderableComponent(this)}function CVContextData(){this.saved=[],this.cArrPos=0,this.cTr=new Matrix,this.cO=1;var t;for(this.savedOp=createTypedArray("float32",15),t=0;t<15;t+=1)this.saved[t]=createTypedArray("float32",16);this._length=15}function CVBaseElement(){}function CVImageElement(t,e,r){this.assetData=e.getAssetData(t.refId),this.img=e.imageLoader.getImage(this.assetData),this.initElement(t,e,r)}function CVCompElement(t,e,r){this.completeLayers=!1,this.layers=t.layers,this.pendingElements=[],this.elements=createSizedArray(this.layers.length),this.initElement(t,e,r),this.tm=t.tm?PropertyFactory.getProp(this,t.tm,0,e.frameRate,this):{_placeholder:!0}}function CVMaskElement(t,e){this.data=t,this.element=e,this.masksProperties=this.data.masksProperties||[],this.viewData=createSizedArray(this.masksProperties.length);var r,i=this.masksProperties.length,s=!1;for(r=0;r<i;r++)"n"!==this.masksProperties[r].mode&&(s=!0),this.viewData[r]=ShapePropertyFactory.getShapeProp(this.element,this.masksProperties[r],3);(this.hasMasks=s)&&this.element.addRenderableComponent(this)}function CVShapeElement(t,e,r){this.shapes=[],this.shapesData=t.shapes,this.stylesList=[],this.itemsData=[],this.prevViewData=[],this.shapeModifiers=[],this.processedElements=[],this.transformsManager=new ShapeTransformManager,this.initElement(t,e,r)}function CVSolidElement(t,e,r){this.initElement(t,e,r)}function CVTextElement(t,e,r){this.textSpans=[],this.yOffset=0,this.fillColorAnim=!1,this.strokeColorAnim=!1,this.strokeWidthAnim=!1,this.stroke=!1,this.fill=!1,this.justifyOffset=0,this.currentRender=null,this.renderType="canvas",this.values={fill:"rgba(0,0,0,0)",stroke:"rgba(0,0,0,0)",sWidth:0,fValue:""},this.initElement(t,e,r)}function CVEffects(){}function HBaseElement(t,e,r){}function HSolidElement(t,e,r){this.initElement(t,e,r)}function HCompElement(t,e,r){this.layers=t.layers,this.supports3d=!t.hasMask,this.completeLayers=!1,this.pendingElements=[],this.elements=this.layers?createSizedArray(this.layers.length):[],this.initElement(t,e,r),this.tm=t.tm?PropertyFactory.getProp(this,t.tm,0,e.frameRate,this):{_placeholder:!0}}function HShapeElement(t,e,r){this.shapes=[],this.shapesData=t.shapes,this.stylesList=[],this.shapeModifiers=[],this.itemsData=[],this.processedElements=[],this.animatedContents=[],this.shapesContainer=createNS("g"),this.initElement(t,e,r),this.prevViewData=[],this.currentBBox={x:999999,y:-999999,h:0,w:0}}function HTextElement(t,e,r){this.textSpans=[],this.textPaths=[],this.currentBBox={x:999999,y:-999999,h:0,w:0},this.renderType="svg",this.isMasked=!1,this.initElement(t,e,r)}function HImageElement(t,e,r){this.assetData=e.getAssetData(t.refId),this.initElement(t,e,r)}function HCameraElement(t,e,r){this.initFrame(),this.initBaseData(t,e,r),this.initHierarchy();var i=PropertyFactory.getProp;if(this.pe=i(this,t.pe,0,0,this),t.ks.p.s?(this.px=i(this,t.ks.p.x,1,0,this),this.py=i(this,t.ks.p.y,1,0,this),this.pz=i(this,t.ks.p.z,1,0,this)):this.p=i(this,t.ks.p,1,0,this),t.ks.a&&(this.a=i(this,t.ks.a,1,0,this)),t.ks.or.k.length&&t.ks.or.k[0].to){var s,a=t.ks.or.k.length;for(s=0;s<a;s+=1)t.ks.or.k[s].to=null,t.ks.or.k[s].ti=null}this.or=i(this,t.ks.or,1,degToRads,this),this.or.sh=!0,this.rx=i(this,t.ks.rx,0,degToRads,this),this.ry=i(this,t.ks.ry,0,degToRads,this),this.rz=i(this,t.ks.rz,0,degToRads,this),this.mat=new Matrix,this._prevMat=new Matrix,this._isFirstFrame=!0,this.finalTransform={mProp:this}}function HEffects(){}SVGMatte3Effect.prototype.findSymbol=function(t){for(var e=0,r=_svgMatteSymbols.length;e<r;){if(_svgMatteSymbols[e]===t)return _svgMatteSymbols[e];e+=1}return null},SVGMatte3Effect.prototype.replaceInParent=function(t,e){var r=t.layerElement.parentNode;if(r){for(var i,s=r.children,a=0,n=s.length;a<n&&s[a]!==t.layerElement;)a+=1;a<=n-2&&(i=s[a+1]);var o=createNS("use");o.setAttribute("href","#"+e),i?r.insertBefore(o,i):r.appendChild(o)}},SVGMatte3Effect.prototype.setElementAsMask=function(t,e){if(!this.findSymbol(e)){var r=createElementID(),i=createNS("mask");i.setAttribute("id",e.layerId),i.setAttribute("mask-type","alpha"),_svgMatteSymbols.push(e);var s=t.globalData.defs;s.appendChild(i);var a=createNS("symbol");a.setAttribute("id",r),this.replaceInParent(e,r),a.appendChild(e.layerElement),s.appendChild(a);var n=createNS("use");n.setAttribute("href","#"+r),i.appendChild(n),e.data.hd=!1,e.show()}t.setMatte(e.layerId)},SVGMatte3Effect.prototype.initialize=function(){for(var t=this.filterManager.effectElements[0].p.v,e=this.elem.comp.elements,r=0,i=e.length;r<i;)e[r]&&e[r].data.ind===t&&this.setElementAsMask(this.elem,e[r]),r+=1;this.initialized=!0},SVGMatte3Effect.prototype.renderFrame=function(){this.initialized||this.initialize()},SVGEffects.prototype.renderFrame=function(t){var e,r=this.filters.length;for(e=0;e<r;e+=1)this.filters[e].renderFrame(t)},CVContextData.prototype.duplicate=function(){var t=2*this._length,e=this.savedOp;this.savedOp=createTypedArray("float32",t),this.savedOp.set(e);var r=0;for(r=this._length;r<t;r+=1)this.saved[r]=createTypedArray("float32",16);this._length=t},CVContextData.prototype.reset=function(){this.cArrPos=0,this.cTr.reset(),this.cO=1},CVBaseElement.prototype={createElements:function(){},initRendererElement:function(){},createContainerElements:function(){this.canvasContext=this.globalData.canvasContext,this.renderableEffectsManager=new CVEffects(this)},createContent:function(){},setBlendMode:function(){var t=this.globalData;if(t.blendMode!==this.data.bm){t.blendMode=this.data.bm;var e=getBlendMode(this.data.bm);t.canvasContext.globalCompositeOperation=e}},createRenderableComponents:function(){this.maskManager=new CVMaskElement(this.data,this)},hideElement:function(){this.hidden||this.isInRange&&!this.isTransparent||(this.hidden=!0)},showElement:function(){this.isInRange&&!this.isTransparent&&(this.hidden=!1,this._isFirstFrame=!0,this.maskManager._isFirstFrame=!0)},renderFrame:function(){if(!this.hidden&&!this.data.hd){this.renderTransform(),this.renderRenderable(),this.setBlendMode();var t=0===this.data.ty;this.globalData.renderer.save(t),this.globalData.renderer.ctxTransform(this.finalTransform.mat.props),this.globalData.renderer.ctxOpacity(this.finalTransform.mProp.o.v),this.renderInnerContent(),this.globalData.renderer.restore(t),this.maskManager.hasMasks&&this.globalData.renderer.restore(!0),this._isFirstFrame&&(this._isFirstFrame=!1)}},destroy:function(){this.canvasContext=null,this.data=null,this.globalData=null,this.maskManager.destroy()},mHelper:new Matrix},CVBaseElement.prototype.hide=CVBaseElement.prototype.hideElement,CVBaseElement.prototype.show=CVBaseElement.prototype.showElement,extendPrototype([BaseElement,TransformElement,CVBaseElement,HierarchyElement,FrameElement,RenderableElement],CVImageElement),CVImageElement.prototype.initElement=SVGShapeElement.prototype.initElement,CVImageElement.prototype.prepareFrame=IImageElement.prototype.prepareFrame,CVImageElement.prototype.createContent=function(){if(this.img.width&&(this.assetData.w!==this.img.width||this.assetData.h!==this.img.height)){var t=createTag("canvas");t.width=this.assetData.w,t.height=this.assetData.h;var e,r,i=t.getContext("2d"),s=this.img.width,a=this.img.height,n=s/a,o=this.assetData.w/this.assetData.h,h=this.assetData.pr||this.globalData.renderConfig.imagePreserveAspectRatio;o<n&&"xMidYMid slice"===h||n<o&&"xMidYMid slice"!==h?e=(r=a)*o:r=(e=s)/o,i.drawImage(this.img,(s-e)/2,(a-r)/2,e,r,0,0,this.assetData.w,this.assetData.h),this.img=t}},CVImageElement.prototype.renderInnerContent=function(t){this.canvasContext.drawImage(this.img,0,0)},CVImageElement.prototype.destroy=function(){this.img=null},extendPrototype([CanvasRenderer,ICompElement,CVBaseElement],CVCompElement),CVCompElement.prototype.renderInnerContent=function(){var t,e=this.canvasContext;for(e.beginPath(),e.moveTo(0,0),e.lineTo(this.data.w,0),e.lineTo(this.data.w,this.data.h),e.lineTo(0,this.data.h),e.lineTo(0,0),e.clip(),t=this.layers.length-1;0<=t;t-=1)(this.completeLayers||this.elements[t])&&this.elements[t].renderFrame()},CVCompElement.prototype.destroy=function(){var t;for(t=this.layers.length-1;0<=t;t-=1)this.elements[t]&&this.elements[t].destroy();this.layers=null,this.elements=null},CVMaskElement.prototype.renderFrame=function(){if(this.hasMasks){var t,e,r,i,s=this.element.finalTransform.mat,a=this.element.canvasContext,n=this.masksProperties.length;for(a.beginPath(),t=0;t<n;t++)if("n"!==this.masksProperties[t].mode){this.masksProperties[t].inv&&(a.moveTo(0,0),a.lineTo(this.element.globalData.compSize.w,0),a.lineTo(this.element.globalData.compSize.w,this.element.globalData.compSize.h),a.lineTo(0,this.element.globalData.compSize.h),a.lineTo(0,0)),i=this.viewData[t].v,e=s.applyToPointArray(i.v[0][0],i.v[0][1],0),a.moveTo(e[0],e[1]);var o,h=i._length;for(o=1;o<h;o++)r=s.applyToTriplePoints(i.o[o-1],i.i[o],i.v[o]),a.bezierCurveTo(r[0],r[1],r[2],r[3],r[4],r[5]);r=s.applyToTriplePoints(i.o[o-1],i.i[0],i.v[0]),a.bezierCurveTo(r[0],r[1],r[2],r[3],r[4],r[5])}this.element.globalData.renderer.save(!0),a.clip()}},CVMaskElement.prototype.getMaskProperty=MaskElement.prototype.getMaskProperty,CVMaskElement.prototype.destroy=function(){this.element=null},extendPrototype([BaseElement,TransformElement,CVBaseElement,IShapeElement,HierarchyElement,FrameElement,RenderableElement],CVShapeElement),CVShapeElement.prototype.initElement=RenderableDOMElement.prototype.initElement,CVShapeElement.prototype.transformHelper={opacity:1,_opMdf:!1},CVShapeElement.prototype.dashResetter=[],CVShapeElement.prototype.createContent=function(){this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,!0,[])},CVShapeElement.prototype.createStyleElement=function(t,e){var r={data:t,type:t.ty,preTransforms:this.transformsManager.addTransformSequence(e),transforms:[],elements:[],closed:!0===t.hd},i={};if("fl"==t.ty||"st"==t.ty?(i.c=PropertyFactory.getProp(this,t.c,1,255,this),i.c.k||(r.co="rgb("+bm_floor(i.c.v[0])+","+bm_floor(i.c.v[1])+","+bm_floor(i.c.v[2])+")")):"gf"!==t.ty&&"gs"!==t.ty||(i.s=PropertyFactory.getProp(this,t.s,1,null,this),i.e=PropertyFactory.getProp(this,t.e,1,null,this),i.h=PropertyFactory.getProp(this,t.h||{k:0},0,.01,this),i.a=PropertyFactory.getProp(this,t.a||{k:0},0,degToRads,this),i.g=new GradientProperty(this,t.g,this)),i.o=PropertyFactory.getProp(this,t.o,0,.01,this),"st"==t.ty||"gs"==t.ty){if(r.lc=this.lcEnum[t.lc]||"round",r.lj=this.ljEnum[t.lj]||"round",1==t.lj&&(r.ml=t.ml),i.w=PropertyFactory.getProp(this,t.w,0,null,this),i.w.k||(r.wi=i.w.v),t.d){var s=new DashProperty(this,t.d,"canvas",this);i.d=s,i.d.k||(r.da=i.d.dashArray,r.do=i.d.dashoffset[0])}}else r.r=2===t.r?"evenodd":"nonzero";return this.stylesList.push(r),i.style=r,i},CVShapeElement.prototype.createGroupElement=function(t){return{it:[],prevViewData:[]}},CVShapeElement.prototype.createTransformElement=function(t){return{transform:{opacity:1,_opMdf:!1,key:this.transformsManager.getNewKey(),op:PropertyFactory.getProp(this,t.o,0,.01,this),mProps:TransformPropertyFactory.getTransformProperty(this,t,this)}}},CVShapeElement.prototype.createShapeElement=function(t){var e=new CVShapeData(this,t,this.stylesList,this.transformsManager);return this.shapes.push(e),this.addShapeToModifiers(e),e},CVShapeElement.prototype.reloadShapes=function(){this._isFirstFrame=!0;var t,e=this.itemsData.length;for(t=0;t<e;t+=1)this.prevViewData[t]=this.itemsData[t];for(this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,!0,[]),e=this.dynamicProperties.length,t=0;t<e;t+=1)this.dynamicProperties[t].getValue();this.renderModifiers(),this.transformsManager.processSequences(this._isFirstFrame)},CVShapeElement.prototype.addTransformToStyleList=function(t){var e,r=this.stylesList.length;for(e=0;e<r;e+=1)this.stylesList[e].closed||this.stylesList[e].transforms.push(t)},CVShapeElement.prototype.removeTransformFromStyleList=function(){var t,e=this.stylesList.length;for(t=0;t<e;t+=1)this.stylesList[t].closed||this.stylesList[t].transforms.pop()},CVShapeElement.prototype.closeStyles=function(t){var e,r=t.length;for(e=0;e<r;e+=1)t[e].closed=!0},CVShapeElement.prototype.searchShapes=function(t,e,r,i,s){var a,n,o,h,l,p,m=t.length-1,f=[],c=[],d=[].concat(s);for(a=m;0<=a;a-=1){if((h=this.searchProcessedElement(t[a]))?e[a]=r[h-1]:t[a]._shouldRender=i,"fl"==t[a].ty||"st"==t[a].ty||"gf"==t[a].ty||"gs"==t[a].ty)h?e[a].style.closed=!1:e[a]=this.createStyleElement(t[a],d),f.push(e[a].style);else if("gr"==t[a].ty){if(h)for(o=e[a].it.length,n=0;n<o;n+=1)e[a].prevViewData[n]=e[a].it[n];else e[a]=this.createGroupElement(t[a]);this.searchShapes(t[a].it,e[a].it,e[a].prevViewData,i,d)}else"tr"==t[a].ty?(h||(p=this.createTransformElement(t[a]),e[a]=p),d.push(e[a]),this.addTransformToStyleList(e[a])):"sh"==t[a].ty||"rc"==t[a].ty||"el"==t[a].ty||"sr"==t[a].ty?h||(e[a]=this.createShapeElement(t[a])):"tm"==t[a].ty||"rd"==t[a].ty?(h?(l=e[a]).closed=!1:((l=ShapeModifiers.getModifier(t[a].ty)).init(this,t[a]),e[a]=l,this.shapeModifiers.push(l)),c.push(l)):"rp"==t[a].ty&&(h?(l=e[a]).closed=!0:(l=ShapeModifiers.getModifier(t[a].ty),(e[a]=l).init(this,t,a,e),this.shapeModifiers.push(l),i=!1),c.push(l));this.addProcessedElement(t[a],a+1)}for(this.removeTransformFromStyleList(),this.closeStyles(f),m=c.length,a=0;a<m;a+=1)c[a].closed=!0},CVShapeElement.prototype.renderInnerContent=function(){this.transformHelper.opacity=1,this.transformHelper._opMdf=!1,this.renderModifiers(),this.transformsManager.processSequences(this._isFirstFrame),this.renderShape(this.transformHelper,this.shapesData,this.itemsData,!0)},CVShapeElement.prototype.renderShapeTransform=function(t,e){(t._opMdf||e.op._mdf||this._isFirstFrame)&&(e.opacity=t.opacity,e.opacity*=e.op.v,e._opMdf=!0)},CVShapeElement.prototype.drawLayer=function(){var t,e,r,i,s,a,n,o,h,l=this.stylesList.length,p=this.globalData.renderer,m=this.globalData.canvasContext;for(t=0;t<l;t+=1)if(("st"!==(o=(h=this.stylesList[t]).type)&&"gs"!==o||0!==h.wi)&&h.data._shouldRender&&0!==h.coOp&&0!==this.globalData.currentGlobalAlpha){for(p.save(),a=h.elements,"st"===o||"gs"===o?(m.strokeStyle="st"===o?h.co:h.grd,m.lineWidth=h.wi,m.lineCap=h.lc,m.lineJoin=h.lj,m.miterLimit=h.ml||0):m.fillStyle="fl"===o?h.co:h.grd,p.ctxOpacity(h.coOp),"st"!==o&&"gs"!==o&&m.beginPath(),p.ctxTransform(h.preTransforms.finalTransform.props),r=a.length,e=0;e<r;e+=1){for("st"!==o&&"gs"!==o||(m.beginPath(),h.da&&(m.setLineDash(h.da),m.lineDashOffset=h.do)),s=(n=a[e].trNodes).length,i=0;i<s;i+=1)"m"==n[i].t?m.moveTo(n[i].p[0],n[i].p[1]):"c"==n[i].t?m.bezierCurveTo(n[i].pts[0],n[i].pts[1],n[i].pts[2],n[i].pts[3],n[i].pts[4],n[i].pts[5]):m.closePath();"st"!==o&&"gs"!==o||(m.stroke(),h.da&&m.setLineDash(this.dashResetter))}"st"!==o&&"gs"!==o&&m.fill(h.r),p.restore()}},CVShapeElement.prototype.renderShape=function(t,e,r,i){var s,a;for(a=t,s=e.length-1;0<=s;s-=1)"tr"==e[s].ty?(a=r[s].transform,this.renderShapeTransform(t,a)):"sh"==e[s].ty||"el"==e[s].ty||"rc"==e[s].ty||"sr"==e[s].ty?this.renderPath(e[s],r[s]):"fl"==e[s].ty?this.renderFill(e[s],r[s],a):"st"==e[s].ty?this.renderStroke(e[s],r[s],a):"gf"==e[s].ty||"gs"==e[s].ty?this.renderGradientFill(e[s],r[s],a):"gr"==e[s].ty?this.renderShape(a,e[s].it,r[s].it):e[s].ty;i&&this.drawLayer()},CVShapeElement.prototype.renderStyledShape=function(t,e){if(this._isFirstFrame||e._mdf||t.transforms._mdf){var r,i,s,a=t.trNodes,n=e.paths,o=n._length;a.length=0;var h=t.transforms.finalTransform;for(s=0;s<o;s+=1){var l=n.shapes[s];if(l&&l.v){for(i=l._length,r=1;r<i;r+=1)1===r&&a.push({t:"m",p:h.applyToPointArray(l.v[0][0],l.v[0][1],0)}),a.push({t:"c",pts:h.applyToTriplePoints(l.o[r-1],l.i[r],l.v[r])});1===i&&a.push({t:"m",p:h.applyToPointArray(l.v[0][0],l.v[0][1],0)}),l.c&&i&&(a.push({t:"c",pts:h.applyToTriplePoints(l.o[r-1],l.i[0],l.v[0])}),a.push({t:"z"}))}}t.trNodes=a}},CVShapeElement.prototype.renderPath=function(t,e){if(!0!==t.hd&&t._shouldRender){var r,i=e.styledShapes.length;for(r=0;r<i;r+=1)this.renderStyledShape(e.styledShapes[r],e.sh)}},CVShapeElement.prototype.renderFill=function(t,e,r){var i=e.style;(e.c._mdf||this._isFirstFrame)&&(i.co="rgb("+bm_floor(e.c.v[0])+","+bm_floor(e.c.v[1])+","+bm_floor(e.c.v[2])+")"),(e.o._mdf||r._opMdf||this._isFirstFrame)&&(i.coOp=e.o.v*r.opacity)},CVShapeElement.prototype.renderGradientFill=function(t,e,r){var i=e.style;if(!i.grd||e.g._mdf||e.s._mdf||e.e._mdf||1!==t.t&&(e.h._mdf||e.a._mdf)){var s=this.globalData.canvasContext,a=e.s.v,n=e.e.v;if(1===t.t)f=s.createLinearGradient(a[0],a[1],n[0],n[1]);else var o=Math.sqrt(Math.pow(a[0]-n[0],2)+Math.pow(a[1]-n[1],2)),h=Math.atan2(n[1]-a[1],n[0]-a[0]),l=o*(1<=e.h.v?.99:e.h.v<=-1?-.99:e.h.v),p=Math.cos(h+e.a.v)*l+a[0],m=Math.sin(h+e.a.v)*l+a[1],f=s.createRadialGradient(p,m,0,a[0],a[1],o);var c,d=t.g.p,u=e.g.c,y=1;for(c=0;c<d;c+=1)e.g._hasOpacity&&e.g._collapsable&&(y=e.g.o[2*c+1]),f.addColorStop(u[4*c]/100,"rgba("+u[4*c+1]+","+u[4*c+2]+","+u[4*c+3]+","+y+")");i.grd=f}i.coOp=e.o.v*r.opacity},CVShapeElement.prototype.renderStroke=function(t,e,r){var i=e.style,s=e.d;s&&(s._mdf||this._isFirstFrame)&&(i.da=s.dashArray,i.do=s.dashoffset[0]),(e.c._mdf||this._isFirstFrame)&&(i.co="rgb("+bm_floor(e.c.v[0])+","+bm_floor(e.c.v[1])+","+bm_floor(e.c.v[2])+")"),(e.o._mdf||r._opMdf||this._isFirstFrame)&&(i.coOp=e.o.v*r.opacity),(e.w._mdf||this._isFirstFrame)&&(i.wi=e.w.v)},CVShapeElement.prototype.destroy=function(){this.shapesData=null,this.globalData=null,this.canvasContext=null,this.stylesList.length=0,this.itemsData.length=0},extendPrototype([BaseElement,TransformElement,CVBaseElement,HierarchyElement,FrameElement,RenderableElement],CVSolidElement),CVSolidElement.prototype.initElement=SVGShapeElement.prototype.initElement,CVSolidElement.prototype.prepareFrame=IImageElement.prototype.prepareFrame,CVSolidElement.prototype.renderInnerContent=function(){var t=this.canvasContext;t.fillStyle=this.data.sc,t.fillRect(0,0,this.data.sw,this.data.sh)},extendPrototype([BaseElement,TransformElement,CVBaseElement,HierarchyElement,FrameElement,RenderableElement,ITextElement],CVTextElement),CVTextElement.prototype.tHelper=createTag("canvas").getContext("2d"),CVTextElement.prototype.buildNewText=function(){var t=this.textProperty.currentData;this.renderedLetters=createSizedArray(t.l?t.l.length:0);var e=!1;t.fc?(e=!0,this.values.fill=this.buildColor(t.fc)):this.values.fill="rgba(0,0,0,0)",this.fill=e;var r=!1;t.sc&&(r=!0,this.values.stroke=this.buildColor(t.sc),this.values.sWidth=t.sw);var i,s,a=this.globalData.fontManager.getFontByName(t.f),n=t.l,o=this.mHelper;this.stroke=r,this.values.fValue=t.finalSize+"px "+this.globalData.fontManager.getFontByName(t.f).fFamily,s=t.finalText.length;var h,l,p,m,f,c,d,u,y,g,v=this.data.singleShape,b=t.tr/1e3*t.finalSize,E=0,x=0,P=!0,S=0;for(i=0;i<s;i+=1){for(l=(h=this.globalData.fontManager.getCharData(t.finalText[i],a.fStyle,this.globalData.fontManager.getFontByName(t.f).fFamily))&&h.data||{},o.reset(),v&&n[i].n&&(E=-b,x+=t.yOffset,x+=P?1:0,P=!1),d=(f=l.shapes?l.shapes[0].it:[]).length,o.scale(t.finalSize/100,t.finalSize/100),v&&this.applyTextPropertiesToMatrix(t,o,n[i].line,E,x),y=createSizedArray(d),c=0;c<d;c+=1){for(m=f[c].ks.k.i.length,u=f[c].ks.k,g=[],p=1;p<m;p+=1)1==p&&g.push(o.applyToX(u.v[0][0],u.v[0][1],0),o.applyToY(u.v[0][0],u.v[0][1],0)),g.push(o.applyToX(u.o[p-1][0],u.o[p-1][1],0),o.applyToY(u.o[p-1][0],u.o[p-1][1],0),o.applyToX(u.i[p][0],u.i[p][1],0),o.applyToY(u.i[p][0],u.i[p][1],0),o.applyToX(u.v[p][0],u.v[p][1],0),o.applyToY(u.v[p][0],u.v[p][1],0));g.push(o.applyToX(u.o[p-1][0],u.o[p-1][1],0),o.applyToY(u.o[p-1][0],u.o[p-1][1],0),o.applyToX(u.i[0][0],u.i[0][1],0),o.applyToY(u.i[0][0],u.i[0][1],0),o.applyToX(u.v[0][0],u.v[0][1],0),o.applyToY(u.v[0][0],u.v[0][1],0)),y[c]=g}v&&(E+=n[i].l,E+=b),this.textSpans[S]?this.textSpans[S].elem=y:this.textSpans[S]={elem:y},S+=1}},CVTextElement.prototype.renderInnerContent=function(){var t,e,r,i,s,a,n=this.canvasContext;this.finalTransform.mat.props;n.font=this.values.fValue,n.lineCap="butt",n.lineJoin="miter",n.miterLimit=4,this.data.singleShape||this.textAnimator.getMeasures(this.textProperty.currentData,this.lettersChangedFlag);var o,h=this.textAnimator.renderedLetters,l=this.textProperty.currentData.l;e=l.length;var p,m,f=null,c=null,d=null;for(t=0;t<e;t+=1)if(!l[t].n){if((o=h[t])&&(this.globalData.renderer.save(),this.globalData.renderer.ctxTransform(o.p),this.globalData.renderer.ctxOpacity(o.o)),this.fill){for(o&&o.fc?f!==o.fc&&(f=o.fc,n.fillStyle=o.fc):f!==this.values.fill&&(f=this.values.fill,n.fillStyle=this.values.fill),i=(p=this.textSpans[t].elem).length,this.globalData.canvasContext.beginPath(),r=0;r<i;r+=1)for(a=(m=p[r]).length,this.globalData.canvasContext.moveTo(m[0],m[1]),s=2;s<a;s+=6)this.globalData.canvasContext.bezierCurveTo(m[s],m[s+1],m[s+2],m[s+3],m[s+4],m[s+5]);this.globalData.canvasContext.closePath(),this.globalData.canvasContext.fill()}if(this.stroke){for(o&&o.sw?d!==o.sw&&(d=o.sw,n.lineWidth=o.sw):d!==this.values.sWidth&&(d=this.values.sWidth,n.lineWidth=this.values.sWidth),o&&o.sc?c!==o.sc&&(c=o.sc,n.strokeStyle=o.sc):c!==this.values.stroke&&(c=this.values.stroke,n.strokeStyle=this.values.stroke),i=(p=this.textSpans[t].elem).length,this.globalData.canvasContext.beginPath(),r=0;r<i;r+=1)for(a=(m=p[r]).length,this.globalData.canvasContext.moveTo(m[0],m[1]),s=2;s<a;s+=6)this.globalData.canvasContext.bezierCurveTo(m[s],m[s+1],m[s+2],m[s+3],m[s+4],m[s+5]);this.globalData.canvasContext.closePath(),this.globalData.canvasContext.stroke()}o&&this.globalData.renderer.restore()}},CVEffects.prototype.renderFrame=function(){},HBaseElement.prototype={checkBlendMode:function(){},initRendererElement:function(){this.baseElement=createTag(this.data.tg||"div"),this.data.hasMask?(this.svgElement=createNS("svg"),this.layerElement=createNS("g"),this.maskedElement=this.layerElement,this.svgElement.appendChild(this.layerElement),this.baseElement.appendChild(this.svgElement)):this.layerElement=this.baseElement,styleDiv(this.baseElement)},createContainerElements:function(){this.renderableEffectsManager=new CVEffects(this),this.transformedElement=this.baseElement,this.maskedElement=this.layerElement,this.data.ln&&this.layerElement.setAttribute("id",this.data.ln),this.data.cl&&this.layerElement.setAttribute("class",this.data.cl),0!==this.data.bm&&this.setBlendMode()},renderElement:function(){this.finalTransform._matMdf&&(this.transformedElement.style.transform=this.transformedElement.style.webkitTransform=this.finalTransform.mat.toCSS()),this.finalTransform._opMdf&&(this.transformedElement.style.opacity=this.finalTransform.mProp.o.v)},renderFrame:function(){this.data.hd||this.hidden||(this.renderTransform(),this.renderRenderable(),this.renderElement(),this.renderInnerContent(),this._isFirstFrame&&(this._isFirstFrame=!1))},destroy:function(){this.layerElement=null,this.transformedElement=null,this.matteElement&&(this.matteElement=null),this.maskManager&&(this.maskManager.destroy(),this.maskManager=null)},createRenderableComponents:function(){this.maskManager=new MaskElement(this.data,this,this.globalData)},addEffects:function(){},setMatte:function(){}},HBaseElement.prototype.getBaseElement=SVGBaseElement.prototype.getBaseElement,HBaseElement.prototype.destroyBaseElement=HBaseElement.prototype.destroy,HBaseElement.prototype.buildElementParenting=HybridRenderer.prototype.buildElementParenting,extendPrototype([BaseElement,TransformElement,HBaseElement,HierarchyElement,FrameElement,RenderableDOMElement],HSolidElement),HSolidElement.prototype.createContent=function(){var t;this.data.hasMask?((t=createNS("rect")).setAttribute("width",this.data.sw),t.setAttribute("height",this.data.sh),t.setAttribute("fill",this.data.sc),this.svgElement.setAttribute("width",this.data.sw),this.svgElement.setAttribute("height",this.data.sh)):((t=createTag("div")).style.width=this.data.sw+"px",t.style.height=this.data.sh+"px",t.style.backgroundColor=this.data.sc),this.layerElement.appendChild(t)},extendPrototype([HybridRenderer,ICompElement,HBaseElement],HCompElement),HCompElement.prototype._createBaseContainerElements=HCompElement.prototype.createContainerElements,HCompElement.prototype.createContainerElements=function(){this._createBaseContainerElements(),this.data.hasMask?(this.svgElement.setAttribute("width",this.data.w),this.svgElement.setAttribute("height",this.data.h),this.transformedElement=this.baseElement):this.transformedElement=this.layerElement},HCompElement.prototype.addTo3dContainer=function(t,e){for(var r,i=0;i<e;)this.elements[i]&&this.elements[i].getBaseElement&&(r=this.elements[i].getBaseElement()),i+=1;r?this.layerElement.insertBefore(t,r):this.layerElement.appendChild(t)},extendPrototype([BaseElement,TransformElement,HSolidElement,SVGShapeElement,HBaseElement,HierarchyElement,FrameElement,RenderableElement],HShapeElement),HShapeElement.prototype._renderShapeFrame=HShapeElement.prototype.renderInnerContent,HShapeElement.prototype.createContent=function(){var t;if(this.baseElement.style.fontSize=0,this.data.hasMask)this.layerElement.appendChild(this.shapesContainer),t=this.svgElement;else{t=createNS("svg");var e=this.comp.data?this.comp.data:this.globalData.compSize;t.setAttribute("width",e.w),t.setAttribute("height",e.h),t.appendChild(this.shapesContainer),this.layerElement.appendChild(t)}this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,this.shapesContainer,0,[],!0),this.filterUniqueShapes(),this.shapeCont=t},HShapeElement.prototype.getTransformedPoint=function(t,e){var r,i=t.length;for(r=0;r<i;r+=1)e=t[r].mProps.v.applyToPointArray(e[0],e[1],0);return e},HShapeElement.prototype.calculateShapeBoundingBox=function(t,e){var r,i,s,a,n,o=t.sh.v,h=t.transformers,l=o._length;if(!(l<=1)){for(r=0;r<l-1;r+=1)i=this.getTransformedPoint(h,o.v[r]),s=this.getTransformedPoint(h,o.o[r]),a=this.getTransformedPoint(h,o.i[r+1]),n=this.getTransformedPoint(h,o.v[r+1]),this.checkBounds(i,s,a,n,e);o.c&&(i=this.getTransformedPoint(h,o.v[r]),s=this.getTransformedPoint(h,o.o[r]),a=this.getTransformedPoint(h,o.i[0]),n=this.getTransformedPoint(h,o.v[0]),this.checkBounds(i,s,a,n,e))}},HShapeElement.prototype.checkBounds=function(t,e,r,i,s){this.getBoundsOfCurve(t,e,r,i);var a=this.shapeBoundingBox;s.x=bm_min(a.left,s.x),s.xMax=bm_max(a.right,s.xMax),s.y=bm_min(a.top,s.y),s.yMax=bm_max(a.bottom,s.yMax)},HShapeElement.prototype.shapeBoundingBox={left:0,right:0,top:0,bottom:0},HShapeElement.prototype.tempBoundingBox={x:0,xMax:0,y:0,yMax:0,width:0,height:0},HShapeElement.prototype.getBoundsOfCurve=function(t,e,r,i){for(var s,a,n,o,h,l,p,m=[[t[0],i[0]],[t[1],i[1]]],f=0;f<2;++f)if(a=6*t[f]-12*e[f]+6*r[f],s=-3*t[f]+9*e[f]-9*r[f]+3*i[f],n=3*e[f]-3*t[f],a|=0,n|=0,0!==(s|=0))(h=a*a-4*n*s)<0||(0<(l=(-a+bm_sqrt(h))/(2*s))&&l<1&&m[f].push(this.calculateF(l,t,e,r,i,f)),0<(p=(-a-bm_sqrt(h))/(2*s))&&p<1&&m[f].push(this.calculateF(p,t,e,r,i,f)));else{if(0===a)continue;0<(o=-n/a)&&o<1&&m[f].push(this.calculateF(o,t,e,r,i,f))}this.shapeBoundingBox.left=bm_min.apply(null,m[0]),this.shapeBoundingBox.top=bm_min.apply(null,m[1]),this.shapeBoundingBox.right=bm_max.apply(null,m[0]),this.shapeBoundingBox.bottom=bm_max.apply(null,m[1])},HShapeElement.prototype.calculateF=function(t,e,r,i,s,a){return bm_pow(1-t,3)*e[a]+3*bm_pow(1-t,2)*t*r[a]+3*(1-t)*bm_pow(t,2)*i[a]+bm_pow(t,3)*s[a]},HShapeElement.prototype.calculateBoundingBox=function(t,e){var r,i=t.length;for(r=0;r<i;r+=1)t[r]&&t[r].sh?this.calculateShapeBoundingBox(t[r],e):t[r]&&t[r].it&&this.calculateBoundingBox(t[r].it,e)},HShapeElement.prototype.currentBoxContains=function(t){return this.currentBBox.x<=t.x&&this.currentBBox.y<=t.y&&this.currentBBox.width+this.currentBBox.x>=t.x+t.width&&this.currentBBox.height+this.currentBBox.y>=t.y+t.height},HShapeElement.prototype.renderInnerContent=function(){if(this._renderShapeFrame(),!this.hidden&&(this._isFirstFrame||this._mdf)){var t=this.tempBoundingBox,e=999999;if(t.x=e,t.xMax=-e,t.y=e,t.yMax=-e,this.calculateBoundingBox(this.itemsData,t),t.width=t.xMax<t.x?0:t.xMax-t.x,t.height=t.yMax<t.y?0:t.yMax-t.y,this.currentBoxContains(t))return;var r=!1;this.currentBBox.w!==t.width&&(this.currentBBox.w=t.width,this.shapeCont.setAttribute("width",t.width),r=!0),this.currentBBox.h!==t.height&&(this.currentBBox.h=t.height,this.shapeCont.setAttribute("height",t.height),r=!0),(r||this.currentBBox.x!==t.x||this.currentBBox.y!==t.y)&&(this.currentBBox.w=t.width,this.currentBBox.h=t.height,this.currentBBox.x=t.x,this.currentBBox.y=t.y,this.shapeCont.setAttribute("viewBox",this.currentBBox.x+" "+this.currentBBox.y+" "+this.currentBBox.w+" "+this.currentBBox.h),this.shapeCont.style.transform=this.shapeCont.style.webkitTransform="translate("+this.currentBBox.x+"px,"+this.currentBBox.y+"px)")}},extendPrototype([BaseElement,TransformElement,HBaseElement,HierarchyElement,FrameElement,RenderableDOMElement,ITextElement],HTextElement),HTextElement.prototype.createContent=function(){if(this.isMasked=this.checkMasks(),this.isMasked){this.renderType="svg",this.compW=this.comp.data.w,this.compH=this.comp.data.h,this.svgElement.setAttribute("width",this.compW),this.svgElement.setAttribute("height",this.compH);var t=createNS("g");this.maskedElement.appendChild(t),this.innerElem=t}else this.renderType="html",this.innerElem=this.layerElement;this.checkParenting()},HTextElement.prototype.buildNewText=function(){var t=this.textProperty.currentData;this.renderedLetters=createSizedArray(t.l?t.l.length:0);var e=this.innerElem.style;e.color=e.fill=t.fc?this.buildColor(t.fc):"rgba(0,0,0,0)",t.sc&&(e.stroke=this.buildColor(t.sc),e.strokeWidth=t.sw+"px");var r,i,s=this.globalData.fontManager.getFontByName(t.f);if(!this.globalData.fontManager.chars)if(e.fontSize=t.finalSize+"px",e.lineHeight=t.finalSize+"px",s.fClass)this.innerElem.className=s.fClass;else{e.fontFamily=s.fFamily;var a=t.fWeight,n=t.fStyle;e.fontStyle=n,e.fontWeight=a}var o,h,l,p=t.l;i=p.length;var m,f=this.mHelper,c="",d=0;for(r=0;r<i;r+=1){if(this.globalData.fontManager.chars?(this.textPaths[d]?o=this.textPaths[d]:((o=createNS("path")).setAttribute("stroke-linecap","butt"),o.setAttribute("stroke-linejoin","round"),o.setAttribute("stroke-miterlimit","4")),this.isMasked||(this.textSpans[d]?l=(h=this.textSpans[d]).children[0]:((h=createTag("div")).style.lineHeight=0,(l=createNS("svg")).appendChild(o),styleDiv(h)))):this.isMasked?o=this.textPaths[d]?this.textPaths[d]:createNS("text"):this.textSpans[d]?(h=this.textSpans[d],o=this.textPaths[d]):(styleDiv(h=createTag("span")),styleDiv(o=createTag("span")),h.appendChild(o)),this.globalData.fontManager.chars){var u,y=this.globalData.fontManager.getCharData(t.finalText[r],s.fStyle,this.globalData.fontManager.getFontByName(t.f).fFamily);if(u=y?y.data:null,f.reset(),u&&u.shapes&&(m=u.shapes[0].it,f.scale(t.finalSize/100,t.finalSize/100),c=this.createPathShape(f,m),o.setAttribute("d",c)),this.isMasked)this.innerElem.appendChild(o);else{if(this.innerElem.appendChild(h),u&&u.shapes){document.body.appendChild(l);var g=l.getBBox();l.setAttribute("width",g.width+2),l.setAttribute("height",g.height+2),l.setAttribute("viewBox",g.x-1+" "+(g.y-1)+" "+(g.width+2)+" "+(g.height+2)),l.style.transform=l.style.webkitTransform="translate("+(g.x-1)+"px,"+(g.y-1)+"px)",p[r].yOffset=g.y-1}else l.setAttribute("width",1),l.setAttribute("height",1);h.appendChild(l)}}else o.textContent=p[r].val,o.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),this.isMasked?this.innerElem.appendChild(o):(this.innerElem.appendChild(h),o.style.transform=o.style.webkitTransform="translate3d(0,"+-t.finalSize/1.2+"px,0)");this.isMasked?this.textSpans[d]=o:this.textSpans[d]=h,this.textSpans[d].style.display="block",this.textPaths[d]=o,d+=1}for(;d<this.textSpans.length;)this.textSpans[d].style.display="none",d+=1},HTextElement.prototype.renderInnerContent=function(){if(this.data.singleShape){if(!this._isFirstFrame&&!this.lettersChangedFlag)return;this.isMasked&&this.finalTransform._matMdf&&(this.svgElement.setAttribute("viewBox",-this.finalTransform.mProp.p.v[0]+" "+-this.finalTransform.mProp.p.v[1]+" "+this.compW+" "+this.compH),this.svgElement.style.transform=this.svgElement.style.webkitTransform="translate("+-this.finalTransform.mProp.p.v[0]+"px,"+-this.finalTransform.mProp.p.v[1]+"px)")}if(this.textAnimator.getMeasures(this.textProperty.currentData,this.lettersChangedFlag),this.lettersChangedFlag||this.textAnimator.lettersChangedFlag){var t,e,r,i,s,a=0,n=this.textAnimator.renderedLetters,o=this.textProperty.currentData.l;for(e=o.length,t=0;t<e;t+=1)o[t].n?a+=1:(i=this.textSpans[t],s=this.textPaths[t],r=n[a],a+=1,r._mdf.m&&(this.isMasked?i.setAttribute("transform",r.m):i.style.transform=i.style.webkitTransform=r.m),i.style.opacity=r.o,r.sw&&r._mdf.sw&&s.setAttribute("stroke-width",r.sw),r.sc&&r._mdf.sc&&s.setAttribute("stroke",r.sc),r.fc&&r._mdf.fc&&(s.setAttribute("fill",r.fc),s.style.color=r.fc));if(this.innerElem.getBBox&&!this.hidden&&(this._isFirstFrame||this._mdf)){var h=this.innerElem.getBBox();this.currentBBox.w!==h.width&&(this.currentBBox.w=h.width,this.svgElement.setAttribute("width",h.width)),this.currentBBox.h!==h.height&&(this.currentBBox.h=h.height,this.svgElement.setAttribute("height",h.height));this.currentBBox.w===h.width+2&&this.currentBBox.h===h.height+2&&this.currentBBox.x===h.x-1&&this.currentBBox.y===h.y-1||(this.currentBBox.w=h.width+2,this.currentBBox.h=h.height+2,this.currentBBox.x=h.x-1,this.currentBBox.y=h.y-1,this.svgElement.setAttribute("viewBox",this.currentBBox.x+" "+this.currentBBox.y+" "+this.currentBBox.w+" "+this.currentBBox.h),this.svgElement.style.transform=this.svgElement.style.webkitTransform="translate("+this.currentBBox.x+"px,"+this.currentBBox.y+"px)")}}},extendPrototype([BaseElement,TransformElement,HBaseElement,HSolidElement,HierarchyElement,FrameElement,RenderableElement],HImageElement),HImageElement.prototype.createContent=function(){var t=this.globalData.getAssetsPath(this.assetData),e=new Image;this.data.hasMask?(this.imageElem=createNS("image"),this.imageElem.setAttribute("width",this.assetData.w+"px"),this.imageElem.setAttribute("height",this.assetData.h+"px"),this.imageElem.setAttributeNS("http://www.w3.org/1999/xlink","href",t),this.layerElement.appendChild(this.imageElem),this.baseElement.setAttribute("width",this.assetData.w),this.baseElement.setAttribute("height",this.assetData.h)):this.layerElement.appendChild(e),e.src=t,this.data.ln&&this.baseElement.setAttribute("id",this.data.ln)},extendPrototype([BaseElement,FrameElement,HierarchyElement],HCameraElement),HCameraElement.prototype.setup=function(){var t,e,r=this.comp.threeDElements.length;for(t=0;t<r;t+=1)"3d"===(e=this.comp.threeDElements[t]).type&&(e.perspectiveElem.style.perspective=e.perspectiveElem.style.webkitPerspective=this.pe.v+"px",e.container.style.transformOrigin=e.container.style.mozTransformOrigin=e.container.style.webkitTransformOrigin="0px 0px 0px",e.perspectiveElem.style.transform=e.perspectiveElem.style.webkitTransform="matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)")},HCameraElement.prototype.createElements=function(){},HCameraElement.prototype.hide=function(){},HCameraElement.prototype.renderFrame=function(){var t,e,r=this._isFirstFrame;if(this.hierarchy)for(e=this.hierarchy.length,t=0;t<e;t+=1)r=this.hierarchy[t].finalTransform.mProp._mdf||r;if(r||this.pe._mdf||this.p&&this.p._mdf||this.px&&(this.px._mdf||this.py._mdf||this.pz._mdf)||this.rx._mdf||this.ry._mdf||this.rz._mdf||this.or._mdf||this.a&&this.a._mdf){if(this.mat.reset(),this.hierarchy)for(t=e=this.hierarchy.length-1;0<=t;t-=1){var i=this.hierarchy[t].finalTransform.mProp;this.mat.translate(-i.p.v[0],-i.p.v[1],i.p.v[2]),this.mat.rotateX(-i.or.v[0]).rotateY(-i.or.v[1]).rotateZ(i.or.v[2]),this.mat.rotateX(-i.rx.v).rotateY(-i.ry.v).rotateZ(i.rz.v),this.mat.scale(1/i.s.v[0],1/i.s.v[1],1/i.s.v[2]),this.mat.translate(i.a.v[0],i.a.v[1],i.a.v[2])}if(this.p?this.mat.translate(-this.p.v[0],-this.p.v[1],this.p.v[2]):this.mat.translate(-this.px.v,-this.py.v,this.pz.v),this.a){var s;s=this.p?[this.p.v[0]-this.a.v[0],this.p.v[1]-this.a.v[1],this.p.v[2]-this.a.v[2]]:[this.px.v-this.a.v[0],this.py.v-this.a.v[1],this.pz.v-this.a.v[2]];var a=Math.sqrt(Math.pow(s[0],2)+Math.pow(s[1],2)+Math.pow(s[2],2)),n=[s[0]/a,s[1]/a,s[2]/a],o=Math.sqrt(n[2]*n[2]+n[0]*n[0]),h=Math.atan2(n[1],o),l=Math.atan2(n[0],-n[2]);this.mat.rotateY(l).rotateX(-h)}this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v),this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]),this.mat.translate(this.globalData.compSize.w/2,this.globalData.compSize.h/2,0),this.mat.translate(0,0,this.pe.v);var p=!this._prevMat.equals(this.mat);if((p||this.pe._mdf)&&this.comp.threeDElements){var m;for(e=this.comp.threeDElements.length,t=0;t<e;t+=1)"3d"===(m=this.comp.threeDElements[t]).type&&(p&&(m.container.style.transform=m.container.style.webkitTransform=this.mat.toCSS()),this.pe._mdf&&(m.perspectiveElem.style.perspective=m.perspectiveElem.style.webkitPerspective=this.pe.v+"px"));this.mat.clone(this._prevMat)}}this._isFirstFrame=!1},HCameraElement.prototype.prepareFrame=function(t){this.prepareProperties(t,!0)},HCameraElement.prototype.destroy=function(){},HCameraElement.prototype.getBaseElement=function(){return null},HEffects.prototype.renderFrame=function(){};var animationManager=function(){var t={},s=[],i=0,a=0,n=0,o=!0,h=!1;function r(t){for(var e=0,r=t.target;e<a;)s[e].animation===r&&(s.splice(e,1),e-=1,a-=1,r.isPaused||m()),e+=1}function l(t,e){if(!t)return null;for(var r=0;r<a;){if(s[r].elem==t&&null!==s[r].elem)return s[r].animation;r+=1}var i=new AnimationItem;return f(i,t),i.setData(t,e),i}function p(){n+=1,d()}function m(){n-=1}function f(t,e){t.addEventListener("destroy",r),t.addEventListener("_active",p),t.addEventListener("_idle",m),s.push({elem:e,animation:t}),a+=1}function c(t){var e,r=t-i;for(e=0;e<a;e+=1)s[e].animation.advanceTime(r);i=t,n&&!h?window.requestAnimationFrame(c):o=!0}function e(t){i=t,window.requestAnimationFrame(c)}function d(){!h&&n&&o&&(window.requestAnimationFrame(e),o=!1)}return t.registerAnimation=l,t.loadAnimation=function(t){var e=new AnimationItem;return f(e,null),e.setParams(t),e},t.setSpeed=function(t,e){var r;for(r=0;r<a;r+=1)s[r].animation.setSpeed(t,e)},t.setDirection=function(t,e){var r;for(r=0;r<a;r+=1)s[r].animation.setDirection(t,e)},t.play=function(t){var e;for(e=0;e<a;e+=1)s[e].animation.play(t)},t.pause=function(t){var e;for(e=0;e<a;e+=1)s[e].animation.pause(t)},t.stop=function(t){var e;for(e=0;e<a;e+=1)s[e].animation.stop(t)},t.togglePause=function(t){var e;for(e=0;e<a;e+=1)s[e].animation.togglePause(t)},t.searchAnimations=function(t,e,r){var i,s=[].concat([].slice.call(document.getElementsByClassName("lottie")),[].slice.call(document.getElementsByClassName("bodymovin"))),a=s.length;for(i=0;i<a;i+=1)r&&s[i].setAttribute("data-bm-type",r),l(s[i],t);if(e&&0===a){r||(r="svg");var n=document.getElementsByTagName("body")[0];n.innerHTML="";var o=createTag("div");o.style.width="100%",o.style.height="100%",o.setAttribute("data-bm-type",r),n.appendChild(o),l(o,t)}},t.resize=function(){var t;for(t=0;t<a;t+=1)s[t].animation.resize()},t.goToAndStop=function(t,e,r){var i;for(i=0;i<a;i+=1)s[i].animation.goToAndStop(t,e,r)},t.destroy=function(t){var e;for(e=a-1;0<=e;e-=1)s[e].animation.destroy(t)},t.freeze=function(){h=!0},t.unfreeze=function(){h=!1,d()},t.getRegisteredAnimations=function(){var t,e=s.length,r=[];for(t=0;t<e;t+=1)r.push(s[t].animation);return r},t}(),AnimationItem=function(){this._cbs=[],this.name="",this.path="",this.isLoaded=!1,this.currentFrame=0,this.currentRawFrame=0,this.totalFrames=0,this.frameRate=0,this.frameMult=0,this.playSpeed=1,this.playDirection=1,this.playCount=0,this.animationData={},this.assets=[],this.isPaused=!0,this.autoplay=!1,this.loop=!0,this.renderer=null,this.animationID=createElementID(),this.assetsPath="",this.timeCompleted=0,this.segmentPos=0,this.subframeEnabled=subframeEnabled,this.segments=[],this._idle=!0,this._completedLoop=!1,this.projectInterface=ProjectInterface(),this.imagePreloader=new ImagePreloader};extendPrototype([BaseEvent],AnimationItem),AnimationItem.prototype.setParams=function(t){t.context&&(this.context=t.context),(t.wrapper||t.container)&&(this.wrapper=t.wrapper||t.container);var e=t.animType?t.animType:t.renderer?t.renderer:"svg";switch(e){case"canvas":this.renderer=new CanvasRenderer(this,t.rendererSettings);break;case"svg":this.renderer=new SVGRenderer(this,t.rendererSettings);break;default:this.renderer=new HybridRenderer(this,t.rendererSettings)}this.renderer.setProjectInterface(this.projectInterface),this.animType=e,""===t.loop||null===t.loop||(!1===t.loop?this.loop=!1:!0===t.loop?this.loop=!0:this.loop=parseInt(t.loop)),this.autoplay=!("autoplay"in t)||t.autoplay,this.name=t.name?t.name:"",this.autoloadSegments=!t.hasOwnProperty("autoloadSegments")||t.autoloadSegments,this.assetsPath=t.assetsPath,t.animationData?this.configAnimation(t.animationData):t.path&&(-1!==t.path.lastIndexOf("\\")?this.path=t.path.substr(0,t.path.lastIndexOf("\\")+1):this.path=t.path.substr(0,t.path.lastIndexOf("/")+1),this.fileName=t.path.substr(t.path.lastIndexOf("/")+1),this.fileName=this.fileName.substr(0,this.fileName.lastIndexOf(".json")),assetLoader.load(t.path,this.configAnimation.bind(this),function(){this.trigger("data_failed")}.bind(this)))},AnimationItem.prototype.setData=function(t,e){var r={wrapper:t,animationData:e?"object"==typeof e?e:JSON.parse(e):null},i=t.attributes;r.path=i.getNamedItem("data-animation-path")?i.getNamedItem("data-animation-path").value:i.getNamedItem("data-bm-path")?i.getNamedItem("data-bm-path").value:i.getNamedItem("bm-path")?i.getNamedItem("bm-path").value:"",r.animType=i.getNamedItem("data-anim-type")?i.getNamedItem("data-anim-type").value:i.getNamedItem("data-bm-type")?i.getNamedItem("data-bm-type").value:i.getNamedItem("bm-type")?i.getNamedItem("bm-type").value:i.getNamedItem("data-bm-renderer")?i.getNamedItem("data-bm-renderer").value:i.getNamedItem("bm-renderer")?i.getNamedItem("bm-renderer").value:"canvas";var s=i.getNamedItem("data-anim-loop")?i.getNamedItem("data-anim-loop").value:i.getNamedItem("data-bm-loop")?i.getNamedItem("data-bm-loop").value:i.getNamedItem("bm-loop")?i.getNamedItem("bm-loop").value:"";""===s||(r.loop="false"!==s&&("true"===s||parseInt(s)));var a=i.getNamedItem("data-anim-autoplay")?i.getNamedItem("data-anim-autoplay").value:i.getNamedItem("data-bm-autoplay")?i.getNamedItem("data-bm-autoplay").value:!i.getNamedItem("bm-autoplay")||i.getNamedItem("bm-autoplay").value;r.autoplay="false"!==a,r.name=i.getNamedItem("data-name")?i.getNamedItem("data-name").value:i.getNamedItem("data-bm-name")?i.getNamedItem("data-bm-name").value:i.getNamedItem("bm-name")?i.getNamedItem("bm-name").value:"","false"===(i.getNamedItem("data-anim-prerender")?i.getNamedItem("data-anim-prerender").value:i.getNamedItem("data-bm-prerender")?i.getNamedItem("data-bm-prerender").value:i.getNamedItem("bm-prerender")?i.getNamedItem("bm-prerender").value:"")&&(r.prerender=!1),this.setParams(r)},AnimationItem.prototype.includeLayers=function(t){t.op>this.animationData.op&&(this.animationData.op=t.op,this.totalFrames=Math.floor(t.op-this.animationData.ip));var e,r,i=this.animationData.layers,s=i.length,a=t.layers,n=a.length;for(r=0;r<n;r+=1)for(e=0;e<s;){if(i[e].id==a[r].id){i[e]=a[r];break}e+=1}if((t.chars||t.fonts)&&(this.renderer.globalData.fontManager.addChars(t.chars),this.renderer.globalData.fontManager.addFonts(t.fonts,this.renderer.globalData.defs)),t.assets)for(s=t.assets.length,e=0;e<s;e+=1)this.animationData.assets.push(t.assets[e]);this.animationData.__complete=!1,dataManager.completeData(this.animationData,this.renderer.globalData.fontManager),this.renderer.includeLayers(t.layers),expressionsPlugin&&expressionsPlugin.initExpressions(this),this.loadNextSegment()},AnimationItem.prototype.loadNextSegment=function(){var t=this.animationData.segments;if(!t||0===t.length||!this.autoloadSegments)return this.trigger("data_ready"),void(this.timeCompleted=this.totalFrames);var e=t.shift();this.timeCompleted=e.time*this.frameRate;var r=this.path+this.fileName+"_"+this.segmentPos+".json";this.segmentPos+=1,assetLoader.load(r,this.includeLayers.bind(this),function(){this.trigger("data_failed")}.bind(this))},AnimationItem.prototype.loadSegments=function(){this.animationData.segments||(this.timeCompleted=this.totalFrames),this.loadNextSegment()},AnimationItem.prototype.imagesLoaded=function(){this.trigger("loaded_images"),this.checkLoaded()},AnimationItem.prototype.preloadImages=function(){this.imagePreloader.setAssetsPath(this.assetsPath),this.imagePreloader.setPath(this.path),this.imagePreloader.loadAssets(this.animationData.assets,this.imagesLoaded.bind(this))},AnimationItem.prototype.configAnimation=function(t){if(this.renderer)try{this.animationData=t,this.totalFrames=Math.floor(this.animationData.op-this.animationData.ip),this.renderer.configAnimation(t),t.assets||(t.assets=[]),this.assets=this.animationData.assets,this.frameRate=this.animationData.fr,this.firstFrame=Math.round(this.animationData.ip),this.frameMult=this.animationData.fr/1e3,this.renderer.searchExtraCompositions(t.assets),this.trigger("config_ready"),this.preloadImages(),this.loadSegments(),this.updaFrameModifier(),this.waitForFontsLoaded()}catch(t){this.triggerConfigError(t)}},AnimationItem.prototype.waitForFontsLoaded=function(){this.renderer&&(this.renderer.globalData.fontManager.loaded()?this.checkLoaded():setTimeout(this.waitForFontsLoaded.bind(this),20))},AnimationItem.prototype.checkLoaded=function(){this.isLoaded||!this.renderer.globalData.fontManager.loaded()||!this.imagePreloader.loaded()&&"canvas"===this.renderer.rendererType||(this.isLoaded=!0,dataManager.completeData(this.animationData,this.renderer.globalData.fontManager),expressionsPlugin&&expressionsPlugin.initExpressions(this),this.renderer.initItems(),setTimeout(function(){this.trigger("DOMLoaded")}.bind(this),0),this.gotoFrame(),this.autoplay&&this.play())},AnimationItem.prototype.resize=function(){this.renderer.updateContainerSize()},AnimationItem.prototype.setSubframe=function(t){this.subframeEnabled=!!t},AnimationItem.prototype.gotoFrame=function(){this.currentFrame=this.subframeEnabled?this.currentRawFrame:~~this.currentRawFrame,this.timeCompleted!==this.totalFrames&&this.currentFrame>this.timeCompleted&&(this.currentFrame=this.timeCompleted),this.trigger("enterFrame"),this.renderFrame()},AnimationItem.prototype.renderFrame=function(){if(!1!==this.isLoaded)try{this.renderer.renderFrame(this.currentFrame+this.firstFrame)}catch(t){this.triggerRenderFrameError(t)}},AnimationItem.prototype.play=function(t){t&&this.name!=t||!0===this.isPaused&&(this.isPaused=!1,this._idle&&(this._idle=!1,this.trigger("_active")))},AnimationItem.prototype.pause=function(t){t&&this.name!=t||!1===this.isPaused&&(this.isPaused=!0,this._idle=!0,this.trigger("_idle"))},AnimationItem.prototype.togglePause=function(t){t&&this.name!=t||(!0===this.isPaused?this.play():this.pause())},AnimationItem.prototype.stop=function(t){t&&this.name!=t||(this.pause(),this.playCount=0,this._completedLoop=!1,this.setCurrentRawFrameValue(0))},AnimationItem.prototype.goToAndStop=function(t,e,r){r&&this.name!=r||(e?this.setCurrentRawFrameValue(t):this.setCurrentRawFrameValue(t*this.frameModifier),this.pause())},AnimationItem.prototype.goToAndPlay=function(t,e,r){this.goToAndStop(t,e,r),this.play()},AnimationItem.prototype.advanceTime=function(t){if(!0!==this.isPaused&&!1!==this.isLoaded){var e=this.currentRawFrame+t*this.frameModifier,r=!1;e>=this.totalFrames-1&&0<this.frameModifier?this.loop&&this.playCount!==this.loop?e>=this.totalFrames?(this.playCount+=1,this.checkSegments(e%this.totalFrames)||(this.setCurrentRawFrameValue(e%this.totalFrames),this._completedLoop=!0,this.trigger("loopComplete"))):this.setCurrentRawFrameValue(e):this.checkSegments(e>this.totalFrames?e%this.totalFrames:0)||(r=!0,e=this.totalFrames-1):e<0?this.checkSegments(e%this.totalFrames)||(!this.loop||this.playCount--<=0&&!0!==this.loop?(r=!0,e=0):(this.setCurrentRawFrameValue(this.totalFrames+e%this.totalFrames),this._completedLoop?this.trigger("loopComplete"):this._completedLoop=!0)):this.setCurrentRawFrameValue(e),r&&(this.setCurrentRawFrameValue(e),this.pause(),this.trigger("complete"))}},AnimationItem.prototype.adjustSegment=function(t,e){this.playCount=0,t[1]<t[0]?(0<this.frameModifier&&(this.playSpeed<0?this.setSpeed(-this.playSpeed):this.setDirection(-1)),this.timeCompleted=this.totalFrames=t[0]-t[1],this.firstFrame=t[1],this.setCurrentRawFrameValue(this.totalFrames-.001-e)):t[1]>t[0]&&(this.frameModifier<0&&(this.playSpeed<0?this.setSpeed(-this.playSpeed):this.setDirection(1)),this.timeCompleted=this.totalFrames=t[1]-t[0],this.firstFrame=t[0],this.setCurrentRawFrameValue(.001+e)),this.trigger("segmentStart")},AnimationItem.prototype.setSegment=function(t,e){var r=-1;this.isPaused&&(this.currentRawFrame+this.firstFrame<t?r=t:this.currentRawFrame+this.firstFrame>e&&(r=e-t)),this.firstFrame=t,this.timeCompleted=this.totalFrames=e-t,-1!==r&&this.goToAndStop(r,!0)},AnimationItem.prototype.playSegments=function(t,e){if(e&&(this.segments.length=0),"object"==typeof t[0]){var r,i=t.length;for(r=0;r<i;r+=1)this.segments.push(t[r])}else this.segments.push(t);this.segments.length&&e&&this.adjustSegment(this.segments.shift(),0),this.isPaused&&this.play()},AnimationItem.prototype.resetSegments=function(t){this.segments.length=0,this.segments.push([this.animationData.ip,this.animationData.op]),t&&this.checkSegments(0)},AnimationItem.prototype.checkSegments=function(t){return!!this.segments.length&&(this.adjustSegment(this.segments.shift(),t),!0)},AnimationItem.prototype.destroy=function(t){t&&this.name!=t||!this.renderer||(this.renderer.destroy(),this.imagePreloader.destroy(),this.trigger("destroy"),this._cbs=null,this.onEnterFrame=this.onLoopComplete=this.onComplete=this.onSegmentStart=this.onDestroy=null,this.renderer=null)},AnimationItem.prototype.setCurrentRawFrameValue=function(t){this.currentRawFrame=t,this.gotoFrame()},AnimationItem.prototype.setSpeed=function(t){this.playSpeed=t,this.updaFrameModifier()},AnimationItem.prototype.setDirection=function(t){this.playDirection=t<0?-1:1,this.updaFrameModifier()},AnimationItem.prototype.updaFrameModifier=function(){this.frameModifier=this.frameMult*this.playSpeed*this.playDirection},AnimationItem.prototype.getPath=function(){return this.path},AnimationItem.prototype.getAssetsPath=function(t){var e="";if(t.e)e=t.p;else if(this.assetsPath){var r=t.p;-1!==r.indexOf("images/")&&(r=r.split("/")[1]),e=this.assetsPath+r}else e=this.path,e+=t.u?t.u:"",e+=t.p;return e},AnimationItem.prototype.getAssetData=function(t){for(var e=0,r=this.assets.length;e<r;){if(t==this.assets[e].id)return this.assets[e];e+=1}},AnimationItem.prototype.hide=function(){this.renderer.hide()},AnimationItem.prototype.show=function(){this.renderer.show()},AnimationItem.prototype.getDuration=function(t){return t?this.totalFrames:this.totalFrames/this.frameRate},AnimationItem.prototype.trigger=function(t){if(this._cbs&&this._cbs[t])switch(t){case"enterFrame":this.triggerEvent(t,new BMEnterFrameEvent(t,this.currentFrame,this.totalFrames,this.frameModifier));break;case"loopComplete":this.triggerEvent(t,new BMCompleteLoopEvent(t,this.loop,this.playCount,this.frameMult));break;case"complete":this.triggerEvent(t,new BMCompleteEvent(t,this.frameMult));break;case"segmentStart":this.triggerEvent(t,new BMSegmentStartEvent(t,this.firstFrame,this.totalFrames));break;case"destroy":this.triggerEvent(t,new BMDestroyEvent(t,this));break;default:this.triggerEvent(t)}"enterFrame"===t&&this.onEnterFrame&&this.onEnterFrame.call(this,new BMEnterFrameEvent(t,this.currentFrame,this.totalFrames,this.frameMult)),"loopComplete"===t&&this.onLoopComplete&&this.onLoopComplete.call(this,new BMCompleteLoopEvent(t,this.loop,this.playCount,this.frameMult)),"complete"===t&&this.onComplete&&this.onComplete.call(this,new BMCompleteEvent(t,this.frameMult)),"segmentStart"===t&&this.onSegmentStart&&this.onSegmentStart.call(this,new BMSegmentStartEvent(t,this.firstFrame,this.totalFrames)),"destroy"===t&&this.onDestroy&&this.onDestroy.call(this,new BMDestroyEvent(t,this))},AnimationItem.prototype.triggerRenderFrameError=function(t){var e=new BMRenderFrameErrorEvent(t,this.currentFrame);this.triggerEvent("error",e),this.onError&&this.onError.call(this,e)},AnimationItem.prototype.triggerConfigError=function(t){var e=new BMConfigErrorEvent(t,this.currentFrame);this.triggerEvent("error",e),this.onError&&this.onError.call(this,e)};var Expressions=(BW={},BW.initExpressions=function(t){var e=0,r=[];function i(){var t,e=r.length;for(t=0;t<e;t+=1)r[t].release();r.length=0}t.renderer.compInterface=CompExpressionInterface(t.renderer),t.renderer.globalData.projectInterface.registerComposition(t.renderer),t.renderer.globalData.pushExpression=function(){e+=1},t.renderer.globalData.popExpression=function(){0==(e-=1)&&i()},t.renderer.globalData.registerExpressionProperty=function(t){-1===r.indexOf(t)&&r.push(t)}},BW),BW;expressionsPlugin=Expressions;var ExpressionManager=function(){var ob={},Math=BMMath,window=null,document=null;function $bm_isInstanceOfArray(t){return t.constructor===Array||t.constructor===Float32Array}function isNumerable(t,e){return"number"===t||"boolean"===t||"string"===t||e instanceof Number}function $bm_neg(t){var e=typeof t;if("number"===e||"boolean"===e||t instanceof Number)return-t;if($bm_isInstanceOfArray(t)){var r,i=t.length,s=[];for(r=0;r<i;r+=1)s[r]=-t[r];return s}return t.propType?t.v:void 0}var easeInBez=BezierFactory.getBezierEasing(.333,0,.833,.833,"easeIn").get,easeOutBez=BezierFactory.getBezierEasing(.167,.167,.667,1,"easeOut").get,easeInOutBez=BezierFactory.getBezierEasing(.33,0,.667,1,"easeInOut").get;function sum(t,e){var r=typeof t,i=typeof e;if("string"===r||"string"===i)return t+e;if(isNumerable(r,t)&&isNumerable(i,e))return t+e;if($bm_isInstanceOfArray(t)&&isNumerable(i,e))return(t=t.slice(0))[0]=t[0]+e,t;if(isNumerable(r,t)&&$bm_isInstanceOfArray(e))return(e=e.slice(0))[0]=t+e[0],e;if($bm_isInstanceOfArray(t)&&$bm_isInstanceOfArray(e)){for(var s=0,a=t.length,n=e.length,o=[];s<a||s<n;)("number"==typeof t[s]||t[s]instanceof Number)&&("number"==typeof e[s]||e[s]instanceof Number)?o[s]=t[s]+e[s]:o[s]=void 0===e[s]?t[s]:t[s]||e[s],s+=1;return o}return 0}var add=sum;function sub(t,e){var r=typeof t,i=typeof e;if(isNumerable(r,t)&&isNumerable(i,e))return"string"===r&&(t=parseInt(t)),"string"===i&&(e=parseInt(e)),t-e;if($bm_isInstanceOfArray(t)&&isNumerable(i,e))return(t=t.slice(0))[0]=t[0]-e,t;if(isNumerable(r,t)&&$bm_isInstanceOfArray(e))return(e=e.slice(0))[0]=t-e[0],e;if($bm_isInstanceOfArray(t)&&$bm_isInstanceOfArray(e)){for(var s=0,a=t.length,n=e.length,o=[];s<a||s<n;)("number"==typeof t[s]||t[s]instanceof Number)&&("number"==typeof e[s]||e[s]instanceof Number)?o[s]=t[s]-e[s]:o[s]=void 0===e[s]?t[s]:t[s]||e[s],s+=1;return o}return 0}function mul(t,e){var r,i,s,a=typeof t,n=typeof e;if(isNumerable(a,t)&&isNumerable(n,e))return t*e;if($bm_isInstanceOfArray(t)&&isNumerable(n,e)){for(s=t.length,r=createTypedArray("float32",s),i=0;i<s;i+=1)r[i]=t[i]*e;return r}if(isNumerable(a,t)&&$bm_isInstanceOfArray(e)){for(s=e.length,r=createTypedArray("float32",s),i=0;i<s;i+=1)r[i]=t*e[i];return r}return 0}function div(t,e){var r,i,s,a=typeof t,n=typeof e;if(isNumerable(a,t)&&isNumerable(n,e))return t/e;if($bm_isInstanceOfArray(t)&&isNumerable(n,e)){for(s=t.length,r=createTypedArray("float32",s),i=0;i<s;i+=1)r[i]=t[i]/e;return r}if(isNumerable(a,t)&&$bm_isInstanceOfArray(e)){for(s=e.length,r=createTypedArray("float32",s),i=0;i<s;i+=1)r[i]=t/e[i];return r}return 0}function mod(t,e){return"string"==typeof t&&(t=parseInt(t)),"string"==typeof e&&(e=parseInt(e)),t%e}var $bm_sum=sum,$bm_sub=sub,$bm_mul=mul,$bm_div=div,$bm_mod=mod;function clamp(t,e,r){if(r<e){var i=r;r=e,e=i}return Math.min(Math.max(t,e),r)}function radiansToDegrees(t){return t/degToRads}var radians_to_degrees=radiansToDegrees;function degreesToRadians(t){return t*degToRads}var degrees_to_radians=radiansToDegrees,helperLengthArray=[0,0,0,0,0,0];function length(t,e){if("number"==typeof t||t instanceof Number)return e=e||0,Math.abs(t-e);e||(e=helperLengthArray);var r,i=Math.min(t.length,e.length),s=0;for(r=0;r<i;r+=1)s+=Math.pow(e[r]-t[r],2);return Math.sqrt(s)}function normalize(t){return div(t,length(t))}function rgbToHsl(t){var e,r,i=t[0],s=t[1],a=t[2],n=Math.max(i,s,a),o=Math.min(i,s,a),h=(n+o)/2;if(n==o)e=r=0;else{var l=n-o;switch(r=.5<h?l/(2-n-o):l/(n+o),n){case i:e=(s-a)/l+(s<a?6:0);break;case s:e=(a-i)/l+2;break;case a:e=(i-s)/l+4}e/=6}return[e,r,h,t[3]]}function hue2rgb(t,e,r){return r<0&&(r+=1),1<r&&(r-=1),r<1/6?t+6*(e-t)*r:r<.5?e:r<2/3?t+(e-t)*(2/3-r)*6:t}function hslToRgb(t){var e,r,i,s=t[0],a=t[1],n=t[2];if(0===a)e=r=i=n;else{var o=n<.5?n*(1+a):n+a-n*a,h=2*n-o;e=hue2rgb(h,o,s+1/3),r=hue2rgb(h,o,s),i=hue2rgb(h,o,s-1/3)}return[e,r,i,t[3]]}function linear(t,e,r,i,s){if(void 0!==i&&void 0!==s||(i=e,s=r,e=0,r=1),r<e){var a=r;r=e,e=a}if(t<=e)return i;if(r<=t)return s;var n=r===e?0:(t-e)/(r-e);if(!i.length)return i+(s-i)*n;var o,h=i.length,l=createTypedArray("float32",h);for(o=0;o<h;o+=1)l[o]=i[o]+(s[o]-i[o])*n;return l}function random(t,e){if(void 0===e&&(void 0===t?(t=0,e=1):(e=t,t=void 0)),e.length){var r,i=e.length;t||(t=createTypedArray("float32",i));var s=createTypedArray("float32",i),a=BMMath.random();for(r=0;r<i;r+=1)s[r]=t[r]+a*(e[r]-t[r]);return s}return void 0===t&&(t=0),t+BMMath.random()*(e-t)}function createPath(t,e,r,i){var s,a=t.length,n=shape_pool.newElement();n.setPathData(!!i,a);var o,h,l=[0,0];for(s=0;s<a;s+=1)o=e&&e[s]?e[s]:l,h=r&&r[s]?r[s]:l,n.setTripleAt(t[s][0],t[s][1],h[0]+t[s][0],h[1]+t[s][1],o[0]+t[s][0],o[1]+t[s][1],s,!0);return n}function initiateExpression(elem,data,property){var val=data.x,needsVelocity=/velocity(?![\w\d])/.test(val),_needsRandom=-1!==val.indexOf("random"),elemType=elem.data.ty,transform,$bm_transform,content,effect,thisProperty=property;thisProperty.valueAtTime=thisProperty.getValueAtTime,Object.defineProperty(thisProperty,"value",{get:function(){return thisProperty.v}}),elem.comp.frameDuration=1/elem.comp.globalData.frameRate,elem.comp.displayStartTime=0;var inPoint=elem.data.ip/elem.comp.globalData.frameRate,outPoint=elem.data.op/elem.comp.globalData.frameRate,width=elem.data.sw?elem.data.sw:0,height=elem.data.sh?elem.data.sh:0,name=elem.data.nm,loopIn,loop_in,loopOut,loop_out,smooth,toWorld,fromWorld,fromComp,toComp,fromCompToSurface,position,rotation,anchorPoint,scale,thisLayer,thisComp,mask,valueAtTime,velocityAtTime,__expression_functions=[],scoped_bm_rt;if(data.xf){var i,len=data.xf.length;for(i=0;i<len;i+=1)__expression_functions[i]=eval("(function(){ return "+data.xf[i]+"}())")}var expression_function=eval("[function _expression_function(){"+val+";scoped_bm_rt=$bm_rt}]")[0],numKeys=property.kf?data.k.length:0,active=!this.data||!0!==this.data.hd,wiggle=function(t,e){var r,i,s=this.pv.length?this.pv.length:1,a=createTypedArray("float32",s);var n=Math.floor(5*time);for(i=r=0;r<n;){for(i=0;i<s;i+=1)a[i]+=-e+2*e*BMMath.random();r+=1}var o=5*time,h=o-Math.floor(o),l=createTypedArray("float32",s);if(1<s){for(i=0;i<s;i+=1)l[i]=this.pv[i]+a[i]+(-e+2*e*BMMath.random())*h;return l}return this.pv+a[0]+(-e+2*e*BMMath.random())*h}.bind(this);function loopInDuration(t,e){return loopIn(t,e,!0)}function loopOutDuration(t,e){return loopOut(t,e,!0)}thisProperty.loopIn&&(loopIn=thisProperty.loopIn.bind(thisProperty),loop_in=loopIn),thisProperty.loopOut&&(loopOut=thisProperty.loopOut.bind(thisProperty),loop_out=loopOut),thisProperty.smooth&&(smooth=thisProperty.smooth.bind(thisProperty)),this.getValueAtTime&&(valueAtTime=this.getValueAtTime.bind(this)),this.getVelocityAtTime&&(velocityAtTime=this.getVelocityAtTime.bind(this));var comp=elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface),time,velocity,value,text,textIndex,textTotal,selectorValue;function lookAt(t,e){var r=[e[0]-t[0],e[1]-t[1],e[2]-t[2]],i=Math.atan2(r[0],Math.sqrt(r[1]*r[1]+r[2]*r[2]))/degToRads;return[-Math.atan2(r[1],r[2])/degToRads,i,0]}function easeOut(t,e,r,i,s){return applyEase(easeOutBez,t,e,r,i,s)}function easeIn(t,e,r,i,s){return applyEase(easeInBez,t,e,r,i,s)}function ease(t,e,r,i,s){return applyEase(easeInOutBez,t,e,r,i,s)}function applyEase(t,e,r,i,s,a){void 0===s?(s=r,a=i):e=(e-r)/(i-r);var n=t(e=1<e?1:e<0?0:e);if($bm_isInstanceOfArray(s)){var o,h=s.length,l=createTypedArray("float32",h);for(o=0;o<h;o+=1)l[o]=(a[o]-s[o])*n+s[o];return l}return(a-s)*n+s}function nearestKey(t){var e,r,i,s=data.k.length;if(data.k.length&&"number"!=typeof data.k[0])if(r=-1,(t*=elem.comp.globalData.frameRate)<data.k[0].t)r=1,i=data.k[0].t;else{for(e=0;e<s-1;e+=1){if(t===data.k[e].t){r=e+1,i=data.k[e].t;break}if(t>data.k[e].t&&t<data.k[e+1].t){i=t-data.k[e].t>data.k[e+1].t-t?(r=e+2,data.k[e+1].t):(r=e+1,data.k[e].t);break}}-1===r&&(r=e+1,i=data.k[e].t)}else i=r=0;var a={};return a.index=r,a.time=i/elem.comp.globalData.frameRate,a}function key(t){var e,r,i;if(!data.k.length||"number"==typeof data.k[0])throw new Error("The property has no keyframe at index "+t);t-=1,e={time:data.k[t].t/elem.comp.globalData.frameRate,value:[]};var s=data.k[t].hasOwnProperty("s")?data.k[t].s:data.k[t-1].e;for(i=s.length,r=0;r<i;r+=1)e[r]=s[r],e.value[r]=s[r];return e}function framesToTime(t,e){return e||(e=elem.comp.globalData.frameRate),t/e}function timeToFrames(t,e){return t||0===t||(t=time),e||(e=elem.comp.globalData.frameRate),t*e}function seedRandom(t){BMMath.seedrandom(randSeed+t)}function sourceRectAtTime(){return elem.sourceRectAtTime()}function substring(t,e){return"string"==typeof value?void 0===e?value.substring(t):value.substring(t,e):""}function substr(t,e){return"string"==typeof value?void 0===e?value.substr(t):value.substr(t,e):""}var index=elem.data.ind,hasParent=!(!elem.hierarchy||!elem.hierarchy.length),parent,randSeed=Math.floor(1e6*Math.random()),globalData=elem.globalData;function executeExpression(t){return value=t,_needsRandom&&seedRandom(randSeed),this.frameExpressionId===elem.globalData.frameId&&"textSelector"!==this.propType?value:("textSelector"===this.propType&&(textIndex=this.textIndex,textTotal=this.textTotal,selectorValue=this.selectorValue),thisLayer||(text=elem.layerInterface.text,thisLayer=elem.layerInterface,thisComp=elem.comp.compInterface,toWorld=thisLayer.toWorld.bind(thisLayer),fromWorld=thisLayer.fromWorld.bind(thisLayer),fromComp=thisLayer.fromComp.bind(thisLayer),toComp=thisLayer.toComp.bind(thisLayer),mask=thisLayer.mask?thisLayer.mask.bind(thisLayer):null,fromCompToSurface=fromComp),transform||(transform=elem.layerInterface("ADBE Transform Group"),($bm_transform=transform)&&(anchorPoint=transform.anchorPoint)),4!==elemType||content||(content=thisLayer("ADBE Root Vectors Group")),effect||(effect=thisLayer(4)),(hasParent=!(!elem.hierarchy||!elem.hierarchy.length))&&!parent&&(parent=elem.hierarchy[0].layerInterface),time=this.comp.renderedFrame/this.comp.globalData.frameRate,needsVelocity&&(velocity=velocityAtTime(time)),expression_function(),this.frameExpressionId=elem.globalData.frameId,"shape"===scoped_bm_rt.propType&&(scoped_bm_rt=scoped_bm_rt.v),scoped_bm_rt)}return executeExpression}return ob.initiateExpression=initiateExpression,ob}(),expressionHelpers={searchExpressions:function(t,e,r){e.x&&(r.k=!0,r.x=!0,r.initiateExpression=ExpressionManager.initiateExpression,r.effectsSequence.push(r.initiateExpression(t,e,r).bind(r)))},getSpeedAtTime:function(t){var e=this.getValueAtTime(t),r=this.getValueAtTime(t+-.01),i=0;if(e.length){var s;for(s=0;s<e.length;s+=1)i+=Math.pow(r[s]-e[s],2);i=100*Math.sqrt(i)}else i=0;return i},getVelocityAtTime:function(t){if(void 0!==this.vel)return this.vel;var e,r,i=this.getValueAtTime(t),s=this.getValueAtTime(t+-.001);if(i.length)for(e=createTypedArray("float32",i.length),r=0;r<i.length;r+=1)e[r]=(s[r]-i[r])/-.001;else e=(s-i)/-.001;return e},getValueAtTime:function(t){return t*=this.elem.globalData.frameRate,(t-=this.offsetTime)!==this._cachingAtTime.lastFrame&&(this._cachingAtTime.lastIndex=this._cachingAtTime.lastFrame<t?this._cachingAtTime.lastIndex:0,this._cachingAtTime.value=this.interpolateValue(t,this._cachingAtTime),this._cachingAtTime.lastFrame=t),this._cachingAtTime.value},getStaticValueAtTime:function(){return this.pv},setGroupProperty:function(t){this.propertyGroup=t}};!function(){function o(t,e,r){if(!this.k||!this.keyframes)return this.pv;t=t?t.toLowerCase():"";var i,s,a,n,o,h=this.comp.renderedFrame,l=this.keyframes,p=l[l.length-1].t;if(h<=p)return this.pv;if(r?s=p-(i=e?Math.abs(p-elem.comp.globalData.frameRate*e):Math.max(0,p-this.elem.data.ip)):((!e||e>l.length-1)&&(e=l.length-1),i=p-(s=l[l.length-1-e].t)),"pingpong"===t){if(Math.floor((h-s)/i)%2!=0)return this.getValueAtTime((i-(h-s)%i+s)/this.comp.globalData.frameRate,0)}else{if("offset"===t){var m=this.getValueAtTime(s/this.comp.globalData.frameRate,0),f=this.getValueAtTime(p/this.comp.globalData.frameRate,0),c=this.getValueAtTime(((h-s)%i+s)/this.comp.globalData.frameRate,0),d=Math.floor((h-s)/i);if(this.pv.length){for(n=(o=new Array(m.length)).length,a=0;a<n;a+=1)o[a]=(f[a]-m[a])*d+c[a];return o}return(f-m)*d+c}if("continue"===t){var u=this.getValueAtTime(p/this.comp.globalData.frameRate,0),y=this.getValueAtTime((p-.001)/this.comp.globalData.frameRate,0);if(this.pv.length){for(n=(o=new Array(u.length)).length,a=0;a<n;a+=1)o[a]=u[a]+(u[a]-y[a])*((h-p)/this.comp.globalData.frameRate)/5e-4;return o}return u+(h-p)/.001*(u-y)}}return this.getValueAtTime(((h-s)%i+s)/this.comp.globalData.frameRate,0)}function h(t,e,r){if(!this.k)return this.pv;t=t?t.toLowerCase():"";var i,s,a,n,o,h=this.comp.renderedFrame,l=this.keyframes,p=l[0].t;if(p<=h)return this.pv;if(r?s=p+(i=e?Math.abs(elem.comp.globalData.frameRate*e):Math.max(0,this.elem.data.op-p)):((!e||e>l.length-1)&&(e=l.length-1),i=(s=l[e].t)-p),"pingpong"===t){if(Math.floor((p-h)/i)%2==0)return this.getValueAtTime(((p-h)%i+p)/this.comp.globalData.frameRate,0)}else{if("offset"===t){var m=this.getValueAtTime(p/this.comp.globalData.frameRate,0),f=this.getValueAtTime(s/this.comp.globalData.frameRate,0),c=this.getValueAtTime((i-(p-h)%i+p)/this.comp.globalData.frameRate,0),d=Math.floor((p-h)/i)+1;if(this.pv.length){for(n=(o=new Array(m.length)).length,a=0;a<n;a+=1)o[a]=c[a]-(f[a]-m[a])*d;return o}return c-(f-m)*d}if("continue"===t){var u=this.getValueAtTime(p/this.comp.globalData.frameRate,0),y=this.getValueAtTime((p+.001)/this.comp.globalData.frameRate,0);if(this.pv.length){for(n=(o=new Array(u.length)).length,a=0;a<n;a+=1)o[a]=u[a]+(u[a]-y[a])*(p-h)/.001;return o}return u+(u-y)*(p-h)/.001}}return this.getValueAtTime((i-(p-h)%i+p)/this.comp.globalData.frameRate,0)}function l(t,e){if(!this.k)return this.pv;if(t=.5*(t||.4),(e=Math.floor(e||5))<=1)return this.pv;var r,i,s=this.comp.renderedFrame/this.comp.globalData.frameRate,a=s-t,n=1<e?(s+t-a)/(e-1):1,o=0,h=0;for(r=this.pv.length?createTypedArray("float32",this.pv.length):0;o<e;){if(i=this.getValueAtTime(a+o*n),this.pv.length)for(h=0;h<this.pv.length;h+=1)r[h]+=i[h];else r+=i;o+=1}if(this.pv.length)for(h=0;h<this.pv.length;h+=1)r[h]/=e;else r/=e;return r}var s=TransformPropertyFactory.getTransformProperty;TransformPropertyFactory.getTransformProperty=function(t,e,r){var i=s(t,e,r);return i.dynamicProperties.length?i.getValueAtTime=function(t){void 0}.bind(i):i.getValueAtTime=function(t){}.bind(i),i.setGroupProperty=expressionHelpers.setGroupProperty,i};var p=PropertyFactory.getProp;PropertyFactory.getProp=function(t,e,r,i,s){var a=p(t,e,r,i,s);a.kf?a.getValueAtTime=expressionHelpers.getValueAtTime.bind(a):a.getValueAtTime=expressionHelpers.getStaticValueAtTime.bind(a),a.setGroupProperty=expressionHelpers.setGroupProperty,a.loopOut=o,a.loopIn=h,a.smooth=l,a.getVelocityAtTime=expressionHelpers.getVelocityAtTime.bind(a),a.getSpeedAtTime=expressionHelpers.getSpeedAtTime.bind(a),a.numKeys=1===e.a?e.k.length:0,a.propertyIndex=e.ix;var n=0;return 0!==r&&(n=createTypedArray("float32",1===e.a?e.k[0].s.length:e.k.length)),a._cachingAtTime={lastFrame:initialDefaultFrame,lastIndex:0,value:n},expressionHelpers.searchExpressions(t,e,a),a.k&&s.addDynamicProperty(a),a};var t=ShapePropertyFactory.getConstructorFunction(),e=ShapePropertyFactory.getKeyframedConstructorFunction();function r(){}r.prototype={vertices:function(t,e){this.k&&this.getValue();var r=this.v;void 0!==e&&(r=this.getValueAtTime(e,0));var i,s=r._length,a=r[t],n=r.v,o=createSizedArray(s);for(i=0;i<s;i+=1)o[i]="i"===t||"o"===t?[a[i][0]-n[i][0],a[i][1]-n[i][1]]:[a[i][0],a[i][1]];return o},points:function(t){return this.vertices("v",t)},inTangents:function(t){return this.vertices("i",t)},outTangents:function(t){return this.vertices("o",t)},isClosed:function(){return this.v.c},pointOnPath:function(t,e){var r=this.v;void 0!==e&&(r=this.getValueAtTime(e,0)),this._segmentsLength||(this._segmentsLength=bez.getSegmentsLength(r));for(var i,s=this._segmentsLength,a=s.lengths,n=s.totalLength*t,o=0,h=a.length,l=0;o<h;){if(l+a[o].addedLength>n){var p=o,m=r.c&&o===h-1?0:o+1,f=(n-l)/a[o].addedLength;i=bez.getPointInSegment(r.v[p],r.v[m],r.o[p],r.i[m],f,a[o]);break}l+=a[o].addedLength,o+=1}return i||(i=r.c?[r.v[0][0],r.v[0][1]]:[r.v[r._length-1][0],r.v[r._length-1][1]]),i},vectorOnPath:function(t,e,r){t=1==t?this.v.c?0:.999:t;var i=this.pointOnPath(t,e),s=this.pointOnPath(t+.001,e),a=s[0]-i[0],n=s[1]-i[1],o=Math.sqrt(Math.pow(a,2)+Math.pow(n,2));return 0===o?[0,0]:"tangent"===r?[a/o,n/o]:[-n/o,a/o]},tangentOnPath:function(t,e){return this.vectorOnPath(t,e,"tangent")},normalOnPath:function(t,e){return this.vectorOnPath(t,e,"normal")},setGroupProperty:expressionHelpers.setGroupProperty,getValueAtTime:expressionHelpers.getStaticValueAtTime},extendPrototype([r],t),extendPrototype([r],e),e.prototype.getValueAtTime=function(t){return this._cachingAtTime||(this._cachingAtTime={shapeValue:shape_pool.clone(this.pv),lastIndex:0,lastTime:initialDefaultFrame}),t*=this.elem.globalData.frameRate,(t-=this.offsetTime)!==this._cachingAtTime.lastTime&&(this._cachingAtTime.lastIndex=this._cachingAtTime.lastTime<t?this._caching.lastIndex:0,this._cachingAtTime.lastTime=t,this.interpolateShape(t,this._cachingAtTime.shapeValue,this._cachingAtTime)),this._cachingAtTime.shapeValue},e.prototype.initiateExpression=ExpressionManager.initiateExpression;var n=ShapePropertyFactory.getShapeProp;ShapePropertyFactory.getShapeProp=function(t,e,r,i,s){var a=n(t,e,r,i,s);return a.propertyIndex=e.ix,a.lock=!1,3===r?expressionHelpers.searchExpressions(t,e.pt,a):4===r&&expressionHelpers.searchExpressions(t,e.ks,a),a.k&&t.addDynamicProperty(a),a}}(),TextProperty.prototype.getExpressionValue=function(t,e){var r=this.calculateExpression(e);if(t.t===r)return t;var i={};return this.copyData(i,t),i.t=r.toString(),i.__complete=!1,i},TextProperty.prototype.searchProperty=function(){var t=this.searchKeyframes(),e=this.searchExpressions();return this.kf=t||e,this.kf},TextProperty.prototype.searchExpressions=function(){if(this.data.d.x)return this.calculateExpression=ExpressionManager.initiateExpression.bind(this)(this.elem,this.data.d,this),this.addEffect(this.getExpressionValue.bind(this)),!0};var ShapeExpressionInterface=function(){function m(t,e,r){var i,s=[],a=t?t.length:0;for(i=0;i<a;i+=1)"gr"==t[i].ty?s.push(n(t[i],e[i],r)):"fl"==t[i].ty?s.push(o(t[i],e[i],r)):"st"==t[i].ty?s.push(h(t[i],e[i],r)):"tm"==t[i].ty?s.push(l(t[i],e[i],r)):"tr"==t[i].ty||("el"==t[i].ty?s.push(p(t[i],e[i],r)):"sr"==t[i].ty?s.push(f(t[i],e[i],r)):"sh"==t[i].ty?s.push(y(t[i],e[i],r)):"rc"==t[i].ty?s.push(c(t[i],e[i],r)):"rd"==t[i].ty?s.push(d(t[i],e[i],r)):"rp"==t[i].ty&&s.push(u(t[i],e[i],r)));return s}function n(t,e,r){var i=function(t){switch(t){case"ADBE Vectors Group":case"Contents":case 2:return i.content;default:return i.transform}};i.propertyGroup=function(t){return 1===t?i:r(t-1)};var s,a,n,o,h,l=(s=t,a=e,n=i.propertyGroup,(h=function(t){for(var e=0,r=o.length;e<r;){if(o[e]._name===t||o[e].mn===t||o[e].propertyIndex===t||o[e].ix===t||o[e].ind===t)return o[e];e+=1}if("number"==typeof t)return o[t-1]}).propertyGroup=function(t){return 1===t?h:n(t-1)},o=m(s.it,a.it,h.propertyGroup),h.numProperties=o.length,h.propertyIndex=s.cix,h._name=s.nm,h),p=function(e,t,r){function i(t){return 1==t?s:r(--t)}t.transform.mProps.o.setGroupProperty(i),t.transform.mProps.p.setGroupProperty(i),t.transform.mProps.a.setGroupProperty(i),t.transform.mProps.s.setGroupProperty(i),t.transform.mProps.r.setGroupProperty(i),t.transform.mProps.sk&&(t.transform.mProps.sk.setGroupProperty(i),t.transform.mProps.sa.setGroupProperty(i));function s(t){return e.a.ix===t||"Anchor Point"===t?s.anchorPoint:e.o.ix===t||"Opacity"===t?s.opacity:e.p.ix===t||"Position"===t?s.position:e.r.ix===t||"Rotation"===t||"ADBE Vector Rotation"===t?s.rotation:e.s.ix===t||"Scale"===t?s.scale:e.sk&&e.sk.ix===t||"Skew"===t?s.skew:e.sa&&e.sa.ix===t||"Skew Axis"===t?s.skewAxis:void 0}return t.transform.op.setGroupProperty(i),Object.defineProperties(s,{opacity:{get:ExpressionPropertyInterface(t.transform.mProps.o)},position:{get:ExpressionPropertyInterface(t.transform.mProps.p)},anchorPoint:{get:ExpressionPropertyInterface(t.transform.mProps.a)},scale:{get:ExpressionPropertyInterface(t.transform.mProps.s)},rotation:{get:ExpressionPropertyInterface(t.transform.mProps.r)},skew:{get:ExpressionPropertyInterface(t.transform.mProps.sk)},skewAxis:{get:ExpressionPropertyInterface(t.transform.mProps.sa)},_name:{value:e.nm}}),s.ty="tr",s.mn=e.mn,s.propertyGroup=r,s}(t.it[t.it.length-1],e.it[e.it.length-1],i.propertyGroup);return i.content=l,i.transform=p,Object.defineProperty(i,"_name",{get:function(){return t.nm}}),i.numProperties=t.np,i.propertyIndex=t.ix,i.nm=t.nm,i.mn=t.mn,i}function o(t,e,r){function i(t){return"Color"===t||"color"===t?i.color:"Opacity"===t||"opacity"===t?i.opacity:void 0}return Object.defineProperties(i,{color:{get:ExpressionPropertyInterface(e.c)},opacity:{get:ExpressionPropertyInterface(e.o)},_name:{value:t.nm},mn:{value:t.mn}}),e.c.setGroupProperty(r),e.o.setGroupProperty(r),i}function h(t,e,r){function i(t){return 1===t?ob:r(t-1)}function s(t){return 1===t?h:i(t-1)}var a,n,o=t.d?t.d.length:0,h={};for(a=0;a<o;a+=1)n=a,Object.defineProperty(h,t.d[n].nm,{get:ExpressionPropertyInterface(e.d.dataProps[n].p)}),e.d.dataProps[a].p.setGroupProperty(s);function l(t){return"Color"===t||"color"===t?l.color:"Opacity"===t||"opacity"===t?l.opacity:"Stroke Width"===t||"stroke width"===t?l.strokeWidth:void 0}return Object.defineProperties(l,{color:{get:ExpressionPropertyInterface(e.c)},opacity:{get:ExpressionPropertyInterface(e.o)},strokeWidth:{get:ExpressionPropertyInterface(e.w)},dash:{get:function(){return h}},_name:{value:t.nm},mn:{value:t.mn}}),e.c.setGroupProperty(i),e.o.setGroupProperty(i),e.w.setGroupProperty(i),l}function l(e,t,r){function i(t){return 1==t?s:r(--t)}function s(t){return t===e.e.ix||"End"===t||"end"===t?s.end:t===e.s.ix?s.start:t===e.o.ix?s.offset:void 0}return s.propertyIndex=e.ix,t.s.setGroupProperty(i),t.e.setGroupProperty(i),t.o.setGroupProperty(i),s.propertyIndex=e.ix,s.propertyGroup=r,Object.defineProperties(s,{start:{get:ExpressionPropertyInterface(t.s)},end:{get:ExpressionPropertyInterface(t.e)},offset:{get:ExpressionPropertyInterface(t.o)},_name:{value:e.nm}}),s.mn=e.mn,s}function p(e,t,r){function i(t){return 1==t?a:r(--t)}a.propertyIndex=e.ix;var s="tm"===t.sh.ty?t.sh.prop:t.sh;function a(t){return e.p.ix===t?a.position:e.s.ix===t?a.size:void 0}return s.s.setGroupProperty(i),s.p.setGroupProperty(i),Object.defineProperties(a,{size:{get:ExpressionPropertyInterface(s.s)},position:{get:ExpressionPropertyInterface(s.p)},_name:{value:e.nm}}),a.mn=e.mn,a}function f(e,t,r){function i(t){return 1==t?a:r(--t)}var s="tm"===t.sh.ty?t.sh.prop:t.sh;function a(t){return e.p.ix===t?a.position:e.r.ix===t?a.rotation:e.pt.ix===t?a.points:e.or.ix===t||"ADBE Vector Star Outer Radius"===t?a.outerRadius:e.os.ix===t?a.outerRoundness:!e.ir||e.ir.ix!==t&&"ADBE Vector Star Inner Radius"!==t?e.is&&e.is.ix===t?a.innerRoundness:void 0:a.innerRadius}return a.propertyIndex=e.ix,s.or.setGroupProperty(i),s.os.setGroupProperty(i),s.pt.setGroupProperty(i),s.p.setGroupProperty(i),s.r.setGroupProperty(i),e.ir&&(s.ir.setGroupProperty(i),s.is.setGroupProperty(i)),Object.defineProperties(a,{position:{get:ExpressionPropertyInterface(s.p)},rotation:{get:ExpressionPropertyInterface(s.r)},points:{get:ExpressionPropertyInterface(s.pt)},outerRadius:{get:ExpressionPropertyInterface(s.or)},outerRoundness:{get:ExpressionPropertyInterface(s.os)},innerRadius:{get:ExpressionPropertyInterface(s.ir)},innerRoundness:{get:ExpressionPropertyInterface(s.is)},_name:{value:e.nm}}),a.mn=e.mn,a}function c(e,t,r){function i(t){return 1==t?a:r(--t)}var s="tm"===t.sh.ty?t.sh.prop:t.sh;function a(t){return e.p.ix===t?a.position:e.r.ix===t?a.roundness:e.s.ix===t||"Size"===t||"ADBE Vector Rect Size"===t?a.size:void 0}return a.propertyIndex=e.ix,s.p.setGroupProperty(i),s.s.setGroupProperty(i),s.r.setGroupProperty(i),Object.defineProperties(a,{position:{get:ExpressionPropertyInterface(s.p)},roundness:{get:ExpressionPropertyInterface(s.r)},size:{get:ExpressionPropertyInterface(s.s)},_name:{value:e.nm}}),a.mn=e.mn,a}function d(e,t,r){var i=t;function s(t){if(e.r.ix===t||"Round Corners 1"===t)return s.radius}return s.propertyIndex=e.ix,i.rd.setGroupProperty(function(t){return 1==t?s:r(--t)}),Object.defineProperties(s,{radius:{get:ExpressionPropertyInterface(i.rd)},_name:{value:e.nm}}),s.mn=e.mn,s}function u(e,t,r){function i(t){return 1==t?a:r(--t)}var s=t;function a(t){return e.c.ix===t||"Copies"===t?a.copies:e.o.ix===t||"Offset"===t?a.offset:void 0}return a.propertyIndex=e.ix,s.c.setGroupProperty(i),s.o.setGroupProperty(i),Object.defineProperties(a,{copies:{get:ExpressionPropertyInterface(s.c)},offset:{get:ExpressionPropertyInterface(s.o)},_name:{value:e.nm}}),a.mn=e.mn,a}function y(t,e,r){var i=e.sh;function s(t){if("Shape"===t||"shape"===t||"Path"===t||"path"===t||"ADBE Vector Shape"===t||2===t)return s.path}return i.setGroupProperty(function(t){return 1==t?s:r(--t)}),Object.defineProperties(s,{path:{get:function(){return i.k&&i.getValue(),i}},shape:{get:function(){return i.k&&i.getValue(),i}},_name:{value:t.nm},ix:{value:t.ix},propertyIndex:{value:t.ix},mn:{value:t.mn}}),s}return function(t,e,r){var i;function s(t){if("number"==typeof t)return i[t-1];for(var e=0,r=i.length;e<r;){if(i[e]._name===t)return i[e];e+=1}}return s.propertyGroup=r,i=m(t,e,s),s.numProperties=i.length,s}}(),TextExpressionInterface=function(e){var r;function t(){}return Object.defineProperty(t,"sourceText",{get:function(){e.textProperty.getValue();var t=e.textProperty.currentData.t;return void 0!==t&&(e.textProperty.currentData.t=void 0,(r=new String(t)).value=t||new String(t)),r}}),t},LayerExpressionInterface=function(){function s(t,e){var r=new Matrix;if(r.reset(),this._elem.finalTransform.mProp.applyToMatrix(r),this._elem.hierarchy&&this._elem.hierarchy.length){var i,s=this._elem.hierarchy.length;for(i=0;i<s;i+=1)this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(r);return r.applyToPointArray(t[0],t[1],t[2]||0)}return r.applyToPointArray(t[0],t[1],t[2]||0)}function a(t,e){var r=new Matrix;if(r.reset(),this._elem.finalTransform.mProp.applyToMatrix(r),this._elem.hierarchy&&this._elem.hierarchy.length){var i,s=this._elem.hierarchy.length;for(i=0;i<s;i+=1)this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(r);return r.inversePoint(t)}return r.inversePoint(t)}function n(t){var e=new Matrix;if(e.reset(),this._elem.finalTransform.mProp.applyToMatrix(e),this._elem.hierarchy&&this._elem.hierarchy.length){var r,i=this._elem.hierarchy.length;for(r=0;r<i;r+=1)this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(e);return e.inversePoint(t)}return e.inversePoint(t)}function o(){return[1,1,1,1]}return function(e){var r;function i(t){switch(t){case"ADBE Root Vectors Group":case"Contents":case 2:return i.shapeInterface;case 1:case 6:case"Transform":case"transform":case"ADBE Transform Group":return r;case 4:case"ADBE Effect Parade":case"effects":case"Effects":return i.effect}}i.toWorld=s,i.fromWorld=a,i.toComp=s,i.fromComp=n,i.sampleImage=o,i.sourceRectAtTime=e.sourceRectAtTime.bind(e);var t=getDescriptor(r=TransformExpressionInterface((i._elem=e).finalTransform.mProp),"anchorPoint");return Object.defineProperties(i,{hasParent:{get:function(){return e.hierarchy.length}},parent:{get:function(){return e.hierarchy[0].layerInterface}},rotation:getDescriptor(r,"rotation"),scale:getDescriptor(r,"scale"),position:getDescriptor(r,"position"),opacity:getDescriptor(r,"opacity"),anchorPoint:t,anchor_point:t,transform:{get:function(){return r}},active:{get:function(){return e.isInRange}}}),i.startTime=e.data.st,i.index=e.data.ind,i.source=e.data.refId,i.height=0===e.data.ty?e.data.h:100,i.width=0===e.data.ty?e.data.w:100,i.inPoint=e.data.ip/e.comp.globalData.frameRate,i.outPoint=e.data.op/e.comp.globalData.frameRate,i._name=e.data.nm,i.registerMaskInterface=function(t){i.mask=new MaskManagerInterface(t,e)},i.registerEffectsInterface=function(t){i.effect=t},i}}(),CompExpressionInterface=function(i){function t(t){for(var e=0,r=i.layers.length;e<r;){if(i.layers[e].nm===t||i.layers[e].ind===t)return i.elements[e].layerInterface;e+=1}return null}return Object.defineProperty(t,"_name",{value:i.data.nm}),(t.layer=t).pixelAspect=1,t.height=i.data.h||i.globalData.compSize.h,t.width=i.data.w||i.globalData.compSize.w,t.pixelAspect=1,t.frameDuration=1/i.globalData.frameRate,t.displayStartTime=0,t.numLayers=i.layers.length,t},TransformExpressionInterface=function(t){function e(t){switch(t){case"scale":case"Scale":case"ADBE Scale":case 6:return e.scale;case"rotation":case"Rotation":case"ADBE Rotation":case"ADBE Rotate Z":case 10:return e.rotation;case"ADBE Rotate X":return e.xRotation;case"ADBE Rotate Y":return e.yRotation;case"position":case"Position":case"ADBE Position":case 2:return e.position;case"ADBE Position_0":return e.xPosition;case"ADBE Position_1":return e.yPosition;case"ADBE Position_2":return e.zPosition;case"anchorPoint":case"AnchorPoint":case"Anchor Point":case"ADBE AnchorPoint":case 1:return e.anchorPoint;case"opacity":case"Opacity":case 11:return e.opacity}}if(Object.defineProperty(e,"rotation",{get:ExpressionPropertyInterface(t.r||t.rz)}),Object.defineProperty(e,"zRotation",{get:ExpressionPropertyInterface(t.rz||t.r)}),Object.defineProperty(e,"xRotation",{get:ExpressionPropertyInterface(t.rx)}),Object.defineProperty(e,"yRotation",{get:ExpressionPropertyInterface(t.ry)}),Object.defineProperty(e,"scale",{get:ExpressionPropertyInterface(t.s)}),t.p)var r=ExpressionPropertyInterface(t.p);return Object.defineProperty(e,"position",{get:function(){return t.p?r():[t.px.v,t.py.v,t.pz?t.pz.v:0]}}),Object.defineProperty(e,"xPosition",{get:ExpressionPropertyInterface(t.px)}),Object.defineProperty(e,"yPosition",{get:ExpressionPropertyInterface(t.py)}),Object.defineProperty(e,"zPosition",{get:ExpressionPropertyInterface(t.pz)}),Object.defineProperty(e,"anchorPoint",{get:ExpressionPropertyInterface(t.a)}),Object.defineProperty(e,"opacity",{get:ExpressionPropertyInterface(t.o)}),Object.defineProperty(e,"skew",{get:ExpressionPropertyInterface(t.sk)}),Object.defineProperty(e,"skewAxis",{get:ExpressionPropertyInterface(t.sa)}),Object.defineProperty(e,"orientation",{get:ExpressionPropertyInterface(t.or)}),e},ProjectInterface=function(){function e(t){this.compositions.push(t)}return function(){function t(t){for(var e=0,r=this.compositions.length;e<r;){if(this.compositions[e].data&&this.compositions[e].data.nm===t)return this.compositions[e].prepareFrame&&this.compositions[e].data.xt&&this.compositions[e].prepareFrame(this.currentFrame),this.compositions[e].compInterface;e+=1}}return t.compositions=[],t.currentFrame=0,t.registerComposition=e,t}}(),EffectsExpressionInterface=function(){function l(s,t,e,r){var i,a=[],n=s.ef.length;for(i=0;i<n;i+=1)5===s.ef[i].ty?a.push(l(s.ef[i],t.effectElements[i],t.effectElements[i].propertyGroup,r)):a.push(p(t.effectElements[i],s.ef[i].ty,r,o));function o(t){return 1===t?h:e(t-1)}var h=function(t){for(var e=s.ef,r=0,i=e.length;r<i;){if(t===e[r].nm||t===e[r].mn||t===e[r].ix)return 5===e[r].ty?a[r]:a[r]();r+=1}return a[0]()};return h.propertyGroup=o,"ADBE Color Control"===s.mn&&Object.defineProperty(h,"color",{get:function(){return a[0]()}}),Object.defineProperty(h,"numProperties",{get:function(){return s.np}}),h.active=h.enabled=0!==s.en,h}function p(t,e,r,i){var s=ExpressionPropertyInterface(t.p);return t.p.setGroupProperty&&t.p.setGroupProperty(i),function(){return 10===e?r.comp.compInterface(t.p.v):s()}}return{createEffectsInterface:function(s,t){if(s.effectsManager){var e,a=[],r=s.data.ef,i=s.effectsManager.effectElements.length;for(e=0;e<i;e+=1)a.push(l(r[e],s.effectsManager.effectElements[e],t,s));return function(t){for(var e=s.data.ef||[],r=0,i=e.length;r<i;){if(t===e[r].nm||t===e[r].mn||t===e[r].ix)return a[r];r+=1}}}}}}(),MaskManagerInterface=function(){function a(t,e){this._mask=t,this._data=e}Object.defineProperty(a.prototype,"maskPath",{get:function(){return this._mask.prop.k&&this._mask.prop.getValue(),this._mask.prop}}),Object.defineProperty(a.prototype,"maskOpacity",{get:function(){return this._mask.op.k&&this._mask.op.getValue(),100*this._mask.op.v}});return function(e,t){var r,i=createSizedArray(e.viewData.length),s=e.viewData.length;for(r=0;r<s;r+=1)i[r]=new a(e.viewData[r],e.masksProperties[r]);return function(t){for(r=0;r<s;){if(e.masksProperties[r].nm===t)return i[r];r+=1}}}}(),ExpressionPropertyInterface=function(){var s={pv:0,v:0,mult:1},n={pv:[0,0,0],v:[0,0,0],mult:1};function o(i,s,a){Object.defineProperty(i,"velocity",{get:function(){return s.getVelocityAtTime(s.comp.currentFrame)}}),i.numKeys=s.keyframes?s.keyframes.length:0,i.key=function(t){if(i.numKeys){var e="";e="s"in s.keyframes[t-1]?s.keyframes[t-1].s:"e"in s.keyframes[t-2]?s.keyframes[t-2].e:s.keyframes[t-2].s;var r="unidimensional"===a?new Number(e):Object.assign({},e);return r.time=s.keyframes[t-1].t/s.elem.comp.globalData.frameRate,r}return 0},i.valueAtTime=s.getValueAtTime,i.speedAtTime=s.getSpeedAtTime,i.velocityAtTime=s.getVelocityAtTime,i.propertyGroup=s.propertyGroup}function e(){return s}return function(t){return t?"unidimensional"===t.propType?function(t){t&&"pv"in t||(t=s);var e=1/t.mult,r=t.pv*e,i=new Number(r);return i.value=r,o(i,t,"unidimensional"),function(){return t.k&&t.getValue(),r=t.v*e,i.value!==r&&((i=new Number(r)).value=r,o(i,t,"unidimensional")),i}}(t):function(e){e&&"pv"in e||(e=n);var r=1/e.mult,i=e.pv.length,s=createTypedArray("float32",i),a=createTypedArray("float32",i);return s.value=a,o(s,e,"multidimensional"),function(){e.k&&e.getValue();for(var t=0;t<i;t+=1)s[t]=a[t]=e.v[t]*r;return s}}(t):e}}(),j5,k5;function SliderEffect(t,e,r){this.p=PropertyFactory.getProp(e,t.v,0,0,r)}function AngleEffect(t,e,r){this.p=PropertyFactory.getProp(e,t.v,0,0,r)}function ColorEffect(t,e,r){this.p=PropertyFactory.getProp(e,t.v,1,0,r)}function PointEffect(t,e,r){this.p=PropertyFactory.getProp(e,t.v,1,0,r)}function LayerIndexEffect(t,e,r){this.p=PropertyFactory.getProp(e,t.v,0,0,r)}function MaskIndexEffect(t,e,r){this.p=PropertyFactory.getProp(e,t.v,0,0,r)}function CheckboxEffect(t,e,r){this.p=PropertyFactory.getProp(e,t.v,0,0,r)}function NoValueEffect(){this.p={}}function EffectsManager(){}function EffectsManager(t,e){var r=t.ef||[];this.effectElements=[];var i,s,a=r.length;for(i=0;i<a;i++)s=new GroupEffect(r[i],e),this.effectElements.push(s)}function GroupEffect(t,e){this.init(t,e)}j5=function(){function r(t,e){return this.textIndex=t+1,this.textTotal=e,this.v=this.getValue()*this.mult,this.v}return function(t,e){this.pv=1,this.comp=t.comp,this.elem=t,this.mult=.01,this.propType="textSelector",this.textTotal=e.totalChars,this.selectorValue=100,this.lastValue=[1,1,1],this.k=!0,this.x=!0,this.getValue=ExpressionManager.initiateExpression.bind(this)(t,e,this),this.getMult=r,this.getVelocityAtTime=expressionHelpers.getVelocityAtTime,this.kf?this.getValueAtTime=expressionHelpers.getValueAtTime.bind(this):this.getValueAtTime=expressionHelpers.getStaticValueAtTime.bind(this),this.setGroupProperty=expressionHelpers.setGroupProperty}}(),k5=TextSelectorProp.getTextSelectorProp,TextSelectorProp.getTextSelectorProp=function(t,e,r){return 1===e.t?new j5(t,e,r):k5(t,e,r)},extendPrototype([DynamicPropertyContainer],GroupEffect),GroupEffect.prototype.getValue=GroupEffect.prototype.iterateDynamicProperties,GroupEffect.prototype.init=function(t,e){this.data=t,this.effectElements=[],this.initDynamicPropertyContainer(e);var r,i,s=this.data.ef.length,a=this.data.ef;for(r=0;r<s;r+=1){switch(i=null,a[r].ty){case 0:i=new SliderEffect(a[r],e,this);break;case 1:i=new AngleEffect(a[r],e,this);break;case 2:i=new ColorEffect(a[r],e,this);break;case 3:i=new PointEffect(a[r],e,this);break;case 4:case 7:i=new CheckboxEffect(a[r],e,this);break;case 10:i=new LayerIndexEffect(a[r],e,this);break;case 11:i=new MaskIndexEffect(a[r],e,this);break;case 5:i=new EffectsManager(a[r],e,this);break;default:i=new NoValueEffect(a[r],e,this)}i&&this.effectElements.push(i)}};var lottiejs={},_isFrozen=!1;function setLocationHref(t){locationHref=t}function searchAnimations(){!0===standalone?animationManager.searchAnimations(animationData,standalone,renderer):animationManager.searchAnimations()}function setSubframeRendering(t){subframeEnabled=t}function loadAnimation(t){return!0===standalone&&(t.animationData=JSON.parse(animationData)),animationManager.loadAnimation(t)}function setQuality(t){if("string"==typeof t)switch(t){case"high":defaultCurveSegments=200;break;case"medium":defaultCurveSegments=50;break;case"low":defaultCurveSegments=10}else!isNaN(t)&&1<t&&(defaultCurveSegments=t);roundValues(!(50<=defaultCurveSegments))}function inBrowser(){return"undefined"!=typeof navigator}function installPlugin(t,e){"expressions"===t&&(expressionsPlugin=e)}function getFactory(t){switch(t){case"propertyFactory":return PropertyFactory;case"shapePropertyFactory":return ShapePropertyFactory;case"matrix":return Matrix}}function checkReady(){"complete"===document.readyState&&(clearInterval(readyStateCheckInterval),searchAnimations())}function getQueryVariable(t){for(var e=queryString.split("&"),r=0;r<e.length;r++){var i=e[r].split("=");if(decodeURIComponent(i[0])==t)return decodeURIComponent(i[1])}}lottiejs.play=animationManager.play,lottiejs.pause=animationManager.pause,lottiejs.setLocationHref=setLocationHref,lottiejs.togglePause=animationManager.togglePause,lottiejs.setSpeed=animationManager.setSpeed,lottiejs.setDirection=animationManager.setDirection,lottiejs.stop=animationManager.stop,lottiejs.searchAnimations=searchAnimations,lottiejs.registerAnimation=animationManager.registerAnimation,lottiejs.loadAnimation=loadAnimation,lottiejs.setSubframeRendering=setSubframeRendering,lottiejs.resize=animationManager.resize,lottiejs.goToAndStop=animationManager.goToAndStop,lottiejs.destroy=animationManager.destroy,lottiejs.setQuality=setQuality,lottiejs.inBrowser=inBrowser,lottiejs.installPlugin=installPlugin,lottiejs.freeze=animationManager.freeze,lottiejs.unfreeze=animationManager.unfreeze,lottiejs.getRegisteredAnimations=animationManager.getRegisteredAnimations,lottiejs.__getFactory=getFactory,lottiejs.version="5.5.9";var standalone="__[STANDALONE]__",animationData="__[ANIMATIONDATA]__",renderer="";if(standalone){var scripts=document.getElementsByTagName("script"),index=scripts.length-1,myScript=scripts[index]||{src:""},queryString=myScript.src.replace(/^[^\?]+\??/,"");renderer=getQueryVariable("renderer")}var readyStateCheckInterval=setInterval(checkReady,100);return lottiejs},"function"==typeof define&&define.amd?define(function(){return b(a)}):"object"==typeof module&&module.exports?module.exports=b(a):(a.lottie=b(a),a.bodymovin=a.lottie));
!function(f){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=f();else if("function"==typeof define&&define.amd)define([],f);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).lottie_api=f()}}(function(){return function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a="function"==typeof require&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n||e)},l,l.exports,e,t,n,r)}return n[o].exports}for(var i="function"==typeof require&&require,o=0;o<r.length;o++)s(r[o]);return s}({1:[function(require,module,exports){"use strict";var Renderer=require("../renderer/Renderer"),layer_api=require("../helpers/layerAPIBuilder");module.exports=function(animation){var state={animation:animation,elements:animation.renderer.elements.map(function(item){return layer_api(item,animation)}),boundingRect:null,scaleData:null};function recalculateSize(container){container=animation.wrapper,state.boundingRect=container.getBoundingClientRect(),state.scaleData=function(boundingRect){var scale,scaleXOffset,xAlignment,yAlignment,compWidth=animation.animationData.w,compHeight=animation.animationData.h,compRel=compWidth/compHeight,elementWidth=boundingRect.width,elementHeight=boundingRect.height,elementRel=elementWidth/elementHeight,aspectRatio=animation.renderer.renderConfig.preserveAspectRatio.split(" ");return scale="meet"===aspectRatio[1]?elementRel>compRel?elementHeight/compHeight:elementWidth/compWidth:elementRel>compRel?elementWidth/compWidth:elementHeight/compHeight,xAlignment=aspectRatio[0].substr(0,4),yAlignment=aspectRatio[0].substr(4),scaleXOffset="xMin"===xAlignment?0:"xMid"===xAlignment?(elementWidth-compWidth*scale)/2:elementWidth-compWidth*scale,{scaleYOffset:"YMin"===yAlignment?0:"YMid"===yAlignment?(elementHeight-compHeight*scale)/2:elementHeight-compHeight*scale,scaleXOffset:scaleXOffset,scale:scale}}(state.boundingRect)}var methods={recalculateSize:recalculateSize,getScaleData:function(){return state.scaleData},toContainerPoint:function(point){if(!animation.wrapper||!animation.wrapper.getBoundingClientRect)return point;state.boundingRect||recalculateSize();var boundingRect=state.boundingRect,newPoint=[point[0]-boundingRect.left,point[1]-boundingRect.top],scaleData=state.scaleData;return newPoint[0]=(newPoint[0]-scaleData.scaleXOffset)/scaleData.scale,newPoint[1]=(newPoint[1]-scaleData.scaleYOffset)/scaleData.scale,newPoint},fromContainerPoint:function(point){if(!animation.wrapper||!animation.wrapper.getBoundingClientRect)return point;state.boundingRect||recalculateSize();var newPoint,boundingRect=state.boundingRect,scaleData=state.scaleData;return newPoint=[(newPoint=[point[0]*scaleData.scale+scaleData.scaleXOffset,point[1]*scaleData.scale+scaleData.scaleYOffset])[0]+boundingRect.left,newPoint[1]+boundingRect.top]},getCurrentFrame:function(){return animation.currentFrame},getCurrentTime:function(){return animation.currentFrame/animation.frameRate},addValueCallback:function(properties,value){var i,len=properties.length;for(i=0;i<len;i+=1)properties.getPropertyAtIndex(i).setValue(value)},toKeypathLayerPoint:function(properties,point){var i,len=properties.length,points=[];for(i=0;i<len;i+=1)points.push(properties.getPropertyAtIndex(i).toKeypathLayerPoint(point));return 1===points.length?points[0]:points},fromKeypathLayerPoint:function(properties,point){var i,len=properties.length,points=[];for(i=0;i<len;i+=1)points.push(properties.getPropertyAtIndex(i).fromKeypathLayerPoint(point));return 1===points.length?points[0]:points}};return Object.assign({},Renderer(state),methods)}},{"../helpers/layerAPIBuilder":6,"../renderer/Renderer":42}],2:[function(require,module,exports){"use strict";module.exports=","},{}],3:[function(require,module,exports){"use strict";module.exports={0:0,1:1,2:2,3:3,4:4,5:5,13:13,comp:0,composition:0,solid:1,image:2,null:3,shape:4,text:5,camera:13}},{}],4:[function(require,module,exports){"use strict";module.exports={LAYER_TRANSFORM:"transform"}},{}],5:[function(require,module,exports){"use strict";var key_path_separator=require("../enums/key_path_separator"),sanitizeString=require("./stringSanitizer");module.exports=function(propertyPath){var keyPathSplit=propertyPath.split(key_path_separator),selector=keyPathSplit.shift();return{selector:sanitizeString(selector),propertyPath:keyPathSplit.join(key_path_separator)}}},{"../enums/key_path_separator":2,"./stringSanitizer":7}],6:[function(require,module,exports){"use strict";var TextElement=require("../layer/text/TextElement"),ShapeElement=require("../layer/shape/Shape"),NullElement=require("../layer/null_element/NullElement"),SolidElement=require("../layer/solid/SolidElement"),ImageElement=require("../layer/image/ImageElement"),CameraElement=require("../layer/camera/Camera"),LayerBase=require("../layer/LayerBase");module.exports=function(element,parent){var layerType=element.data.ty,Composition=require("../layer/composition/Composition");switch(layerType){case 0:return Composition(element,parent);case 1:return SolidElement(element,parent);case 2:return ImageElement(element,parent);case 3:return NullElement(element,parent);case 4:return ShapeElement(element,parent,element.data.shapes,element.itemsData);case 5:return TextElement(element,parent);case 13:return CameraElement(element,parent);default:return LayerBase(element,parent)}}},{"../layer/LayerBase":13,"../layer/camera/Camera":15,"../layer/composition/Composition":16,"../layer/image/ImageElement":20,"../layer/null_element/NullElement":21,"../layer/shape/Shape":22,"../layer/solid/SolidElement":35,"../layer/text/TextElement":38}],7:[function(require,module,exports){"use strict";module.exports=function(string){return string.trim()}},{}],8:[function(require,module,exports){"use strict";var createTypedArray=require("./typedArrays"),Matrix=function(){var _cos=Math.cos,_sin=Math.sin,_tan=Math.tan,_rnd=Math.round;function reset(){return this.props[0]=1,this.props[1]=0,this.props[2]=0,this.props[3]=0,this.props[4]=0,this.props[5]=1,this.props[6]=0,this.props[7]=0,this.props[8]=0,this.props[9]=0,this.props[10]=1,this.props[11]=0,this.props[12]=0,this.props[13]=0,this.props[14]=0,this.props[15]=1,this}function rotate(angle){if(0===angle)return this;var mCos=_cos(angle),mSin=_sin(angle);return this._t(mCos,-mSin,0,0,mSin,mCos,0,0,0,0,1,0,0,0,0,1)}function rotateX(angle){if(0===angle)return this;var mCos=_cos(angle),mSin=_sin(angle);return this._t(1,0,0,0,0,mCos,-mSin,0,0,mSin,mCos,0,0,0,0,1)}function rotateY(angle){if(0===angle)return this;var mCos=_cos(angle),mSin=_sin(angle);return this._t(mCos,0,mSin,0,0,1,0,0,-mSin,0,mCos,0,0,0,0,1)}function rotateZ(angle){if(0===angle)return this;var mCos=_cos(angle),mSin=_sin(angle);return this._t(mCos,-mSin,0,0,mSin,mCos,0,0,0,0,1,0,0,0,0,1)}function shear(sx,sy){return this._t(1,sy,sx,1,0,0)}function skew(ax,ay){return this.shear(_tan(ax),_tan(ay))}function skewFromAxis(ax,angle){var mCos=_cos(angle),mSin=_sin(angle);return this._t(mCos,mSin,0,0,-mSin,mCos,0,0,0,0,1,0,0,0,0,1)._t(1,0,0,0,_tan(ax),1,0,0,0,0,1,0,0,0,0,1)._t(mCos,-mSin,0,0,mSin,mCos,0,0,0,0,1,0,0,0,0,1)}function scale(sx,sy,sz){return sz=isNaN(sz)?1:sz,1==sx&&1==sy&&1==sz?this:this._t(sx,0,0,0,0,sy,0,0,0,0,sz,0,0,0,0,1)}function setTransform(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return this.props[0]=a,this.props[1]=b,this.props[2]=c,this.props[3]=d,this.props[4]=e,this.props[5]=f,this.props[6]=g,this.props[7]=h,this.props[8]=i,this.props[9]=j,this.props[10]=k,this.props[11]=l,this.props[12]=m,this.props[13]=n,this.props[14]=o,this.props[15]=p,this}function translate(tx,ty,tz){return tz=tz||0,0!==tx||0!==ty||0!==tz?this._t(1,0,0,0,0,1,0,0,0,0,1,0,tx,ty,tz,1):this}function transform(a2,b2,c2,d2,e2,f2,g2,h2,i2,j2,k2,l2,m2,n2,o2,p2){var _p=this.props;if(1===a2&&0===b2&&0===c2&&0===d2&&0===e2&&1===f2&&0===g2&&0===h2&&0===i2&&0===j2&&1===k2&&0===l2)return _p[12]=_p[12]*a2+_p[15]*m2,_p[13]=_p[13]*f2+_p[15]*n2,_p[14]=_p[14]*k2+_p[15]*o2,_p[15]=_p[15]*p2,this._identityCalculated=!1,this;var a1=_p[0],b1=_p[1],c1=_p[2],d1=_p[3],e1=_p[4],f1=_p[5],g1=_p[6],h1=_p[7],i1=_p[8],j1=_p[9],k1=_p[10],l1=_p[11],m1=_p[12],n1=_p[13],o1=_p[14],p1=_p[15];return _p[0]=a1*a2+b1*e2+c1*i2+d1*m2,_p[1]=a1*b2+b1*f2+c1*j2+d1*n2,_p[2]=a1*c2+b1*g2+c1*k2+d1*o2,_p[3]=a1*d2+b1*h2+c1*l2+d1*p2,_p[4]=e1*a2+f1*e2+g1*i2+h1*m2,_p[5]=e1*b2+f1*f2+g1*j2+h1*n2,_p[6]=e1*c2+f1*g2+g1*k2+h1*o2,_p[7]=e1*d2+f1*h2+g1*l2+h1*p2,_p[8]=i1*a2+j1*e2+k1*i2+l1*m2,_p[9]=i1*b2+j1*f2+k1*j2+l1*n2,_p[10]=i1*c2+j1*g2+k1*k2+l1*o2,_p[11]=i1*d2+j1*h2+k1*l2+l1*p2,_p[12]=m1*a2+n1*e2+o1*i2+p1*m2,_p[13]=m1*b2+n1*f2+o1*j2+p1*n2,_p[14]=m1*c2+n1*g2+o1*k2+p1*o2,_p[15]=m1*d2+n1*h2+o1*l2+p1*p2,this._identityCalculated=!1,this}function isIdentity(){return this._identityCalculated||(this._identity=!(1!==this.props[0]||0!==this.props[1]||0!==this.props[2]||0!==this.props[3]||0!==this.props[4]||1!==this.props[5]||0!==this.props[6]||0!==this.props[7]||0!==this.props[8]||0!==this.props[9]||1!==this.props[10]||0!==this.props[11]||0!==this.props[12]||0!==this.props[13]||0!==this.props[14]||1!==this.props[15]),this._identityCalculated=!0),this._identity}function equals(matr){for(var i=0;i<16;){if(matr.props[i]!==this.props[i])return!1;i+=1}return!0}function clone(matr){var i;for(i=0;i<16;i+=1)matr.props[i]=this.props[i]}function cloneFromProps(props){var i;for(i=0;i<16;i+=1)this.props[i]=props[i]}function applyToPoint(x,y,z){return{x:x*this.props[0]+y*this.props[4]+z*this.props[8]+this.props[12],y:x*this.props[1]+y*this.props[5]+z*this.props[9]+this.props[13],z:x*this.props[2]+y*this.props[6]+z*this.props[10]+this.props[14]}}function applyToX(x,y,z){return x*this.props[0]+y*this.props[4]+z*this.props[8]+this.props[12]}function applyToY(x,y,z){return x*this.props[1]+y*this.props[5]+z*this.props[9]+this.props[13]}function applyToZ(x,y,z){return x*this.props[2]+y*this.props[6]+z*this.props[10]+this.props[14]}function inversePoint(pt){var determinant=this.props[0]*this.props[5]-this.props[1]*this.props[4],a=this.props[5]/determinant,b=-this.props[1]/determinant,c=-this.props[4]/determinant,d=this.props[0]/determinant,e=(this.props[4]*this.props[13]-this.props[5]*this.props[12])/determinant,f=-(this.props[0]*this.props[13]-this.props[1]*this.props[12])/determinant;return[pt[0]*a+pt[1]*c+e,pt[0]*b+pt[1]*d+f,0]}function inversePoints(pts){var i,len=pts.length,retPts=[];for(i=0;i<len;i+=1)retPts[i]=inversePoint(pts[i]);return retPts}function applyToTriplePoints(pt1,pt2,pt3){var arr=createTypedArray("float32",6);if(this.isIdentity())arr[0]=pt1[0],arr[1]=pt1[1],arr[2]=pt2[0],arr[3]=pt2[1],arr[4]=pt3[0],arr[5]=pt3[1];else{var p0=this.props[0],p1=this.props[1],p4=this.props[4],p5=this.props[5],p12=this.props[12],p13=this.props[13];arr[0]=pt1[0]*p0+pt1[1]*p4+p12,arr[1]=pt1[0]*p1+pt1[1]*p5+p13,arr[2]=pt2[0]*p0+pt2[1]*p4+p12,arr[3]=pt2[0]*p1+pt2[1]*p5+p13,arr[4]=pt3[0]*p0+pt3[1]*p4+p12,arr[5]=pt3[0]*p1+pt3[1]*p5+p13}return arr}function applyToPointArray(x,y,z){return this.isIdentity()?[x,y,z]:[x*this.props[0]+y*this.props[4]+z*this.props[8]+this.props[12],x*this.props[1]+y*this.props[5]+z*this.props[9]+this.props[13],x*this.props[2]+y*this.props[6]+z*this.props[10]+this.props[14]]}function applyToPointStringified(x,y){return this.isIdentity()?x+","+y:x*this.props[0]+y*this.props[4]+this.props[12]+","+(x*this.props[1]+y*this.props[5]+this.props[13])}function toCSS(){for(var i=0,props=this.props,cssValue="matrix3d(";i<16;)cssValue+=_rnd(1e4*props[i])/1e4,cssValue+=15===i?")":",",i+=1;return cssValue}function to2dCSS(){var v=1e4,props=this.props;return"matrix("+_rnd(props[0]*v)/v+","+_rnd(props[1]*v)/v+","+_rnd(props[4]*v)/v+","+_rnd(props[5]*v)/v+","+_rnd(props[12]*v)/v+","+_rnd(props[13]*v)/v+")"}return function(){return new function(){this.reset=reset,this.rotate=rotate,this.rotateX=rotateX,this.rotateY=rotateY,this.rotateZ=rotateZ,this.skew=skew,this.skewFromAxis=skewFromAxis,this.shear=shear,this.scale=scale,this.setTransform=setTransform,this.translate=translate,this.transform=transform,this.applyToPoint=applyToPoint,this.applyToX=applyToX,this.applyToY=applyToY,this.applyToZ=applyToZ,this.applyToPointArray=applyToPointArray,this.applyToTriplePoints=applyToTriplePoints,this.applyToPointStringified=applyToPointStringified,this.toCSS=toCSS,this.to2dCSS=to2dCSS,this.clone=clone,this.cloneFromProps=cloneFromProps,this.equals=equals,this.inversePoints=inversePoints,this.inversePoint=inversePoint,this._t=this.transform,this.isIdentity=isIdentity,this._identity=!0,this._identityCalculated=!1,this.props=createTypedArray("float32",16),this.reset()}}}();module.exports=Matrix},{"./typedArrays":9}],9:[function(require,module,exports){"use strict";var createTypedArray=function(){return"function"==typeof Uint8ClampedArray&&"function"==typeof Float32Array?function(type,len){return"float32"===type?new Float32Array(len):"int16"===type?new Int16Array(len):"uint8c"===type?new Uint8ClampedArray(len):void 0}:function(type,len){var value,i=0,arr=[];switch(type){case"int16":case"uint8c":value=1;break;default:value=1.1}for(i=0;i<len;i+=1)arr.push(value);return arr}}();module.exports=createTypedArray},{}],10:[function(require,module,exports){"use strict";var AnimationItem=require("./animation/AnimationItem");module.exports={createAnimationApi:function(anim){return Object.assign({},AnimationItem(anim))}}},{"./animation/AnimationItem":1}],11:[function(require,module,exports){"use strict";var keyPathBuilder=require("../helpers/keyPathBuilder"),layer_types=require("../enums/layer_types");module.exports=function KeyPathList(elements,node_type){function getLayersByType(selector){return KeyPathList(function(elements,type){return elements.filter(function(element){return element.getTargetLayer().data.ty===layer_types[type]})}(elements,selector),"layer")}var methods={getKeyPath:function(propertyPath){var nodesByName,nodesByType,selectedNodes,keyPathData=keyPathBuilder(propertyPath),selector=keyPathData.selector;return"renderer"===node_type||"layer"===node_type?(nodesByName=function(selector){return KeyPathList(function(elements,name){return elements.filter(function(element){return element.getTargetLayer().data.nm===name})}(elements,selector),"layer")}(selector),nodesByType=getLayersByType(selector),selectedNodes=0===nodesByName.length&&0===nodesByType.length?function(selector){return KeyPathList(function(elements,name){return elements.filter(function(element){return!!element.hasProperty(name)&&element.getProperty(name)})}(elements,selector).map(function(element){return element.getProperty(selector)}),"property")}(selector):nodesByName.concat(nodesByType),keyPathData.propertyPath?selectedNodes.getKeyPath(keyPathData.propertyPath):selectedNodes):"property"===node_type?(selectedNodes=function(selector){return KeyPathList(elements.filter(function(element){return element.hasProperty(selector)}).map(function(element){return element.getProperty(selector)}),"property")}(selector),keyPathData.propertyPath?selectedNodes.getKeyPath(keyPathData.propertyPath):selectedNodes):void 0},concat:function(nodes){var nodesElements=nodes.getElements();return KeyPathList(elements.concat(nodesElements),node_type)},getElements:function(){return elements},getPropertyAtIndex:function(index){return elements[index]}};return Object.defineProperty(methods,"length",{get:function(){return elements.length}}),methods}},{"../enums/layer_types":3,"../helpers/keyPathBuilder":5}],12:[function(require,module,exports){"use strict";require("../enums/key_path_separator"),require("../enums/property_names");module.exports=function(state){function getPropertyByPath(selector,propertyPath){for(var instanceProperties=state.properties||[],i=0,len=instanceProperties.length;i<len;){if(instanceProperties[i].name===selector)return instanceProperties[i].value;i+=1}return null}return{hasProperty:function(selector){return!!getPropertyByPath(selector)},getProperty:function(selector){return getPropertyByPath(selector)},fromKeypathLayerPoint:function(point){return state.parent.fromKeypathLayerPoint(point)},toKeypathLayerPoint:function(point){return state.parent.toKeypathLayerPoint(point)}}}},{"../enums/key_path_separator":2,"../enums/property_names":4}],13:[function(require,module,exports){"use strict";var KeyPathNode=require("../key_path/KeyPathNode"),Transform=require("./transform/Transform"),Effects=require("./effects/Effects"),Matrix=require("../helpers/transformationMatrix");module.exports=function(state){var transform=Transform(state.element.finalTransform.mProp,state),effects=Effects(state.element.effectsManager.effectElements||[],state),methods={getTargetLayer:function(){return state.element},toKeypathLayerPoint:function(point){var element=state.element;state.parent.toKeypathLayerPoint&&(point=state.parent.toKeypathLayerPoint(point));var toWorldMat=Matrix();if(state.getProperty("Transform").getTargetTransform().applyToMatrix(toWorldMat),element.hierarchy&&element.hierarchy.length){var i,len=element.hierarchy.length;for(i=0;i<len;i+=1)element.hierarchy[i].finalTransform.mProp.applyToMatrix(toWorldMat)}return toWorldMat.inversePoint(point)},fromKeypathLayerPoint:function(point){var element=state.element,toWorldMat=Matrix();if(state.getProperty("Transform").getTargetTransform().applyToMatrix(toWorldMat),element.hierarchy&&element.hierarchy.length){var i,len=element.hierarchy.length;for(i=0;i<len;i+=1)element.hierarchy[i].finalTransform.mProp.applyToMatrix(toWorldMat)}return point=toWorldMat.applyToPointArray(point[0],point[1],point[2]||0),state.parent.fromKeypathLayerPoint?state.parent.fromKeypathLayerPoint(point):point}};return state.properties.push({name:"transform",value:transform},{name:"Transform",value:transform},{name:"Effects",value:effects},{name:"effects",value:effects}),Object.assign(state,KeyPathNode(state),methods)}},{"../helpers/transformationMatrix":8,"../key_path/KeyPathNode":12,"./effects/Effects":19,"./transform/Transform":39}],14:[function(require,module,exports){"use strict";var layer_types=require("../enums/layer_types"),layer_api=require("../helpers/layerAPIBuilder");module.exports=function LayerList(elements){function addIteratableMethods(iteratableMethods,list){iteratableMethods.reduce(function(accumulator,value){var _value=value;return accumulator[value]=function(){var _arguments=arguments;return elements.map(function(element){var layer=layer_api(element);return layer[_value]?layer[_value].apply(null,_arguments):null})},accumulator},methods)}var methods={getLayers:function(){return LayerList(elements)},getLayersByType:function(type){return LayerList(function(elements,type){return elements.filter(function(element){return element.data.ty===layer_types[type]})}(elements,type))},getLayersByName:function(type){return LayerList(function(elements,name){return elements.filter(function(element){return element.data.nm===name})}(elements,type))},layer:function(index){return index>=elements.length?[]:layer_api(elements[parseInt(index)])},concat:function(list){return elements.concat(list.getTargetElements())},getTargetElements:function(){return elements}};return addIteratableMethods(["setTranslate","getType","getDuration"]),addIteratableMethods(["setText","getText","setDocumentData","canResizeFont","setMinimumFontSize"]),Object.defineProperty(methods,"length",{get:function(){return elements.length}}),methods}},{"../enums/layer_types":3,"../helpers/layerAPIBuilder":6}],15:[function(require,module,exports){"use strict";var KeyPathNode=require("../../key_path/KeyPathNode"),Property=require("../../property/Property");module.exports=function(element,parent){var state={element:element,parent:parent,properties:[{name:"Point of Interest",value:Property(element.a,parent)},{name:"Zoom",value:Property(element.pe,parent)},{name:"Position",value:Property(element.p,parent)},{name:"X Rotation",value:Property(element.rx,parent)},{name:"Y Rotation",value:Property(element.ry,parent)},{name:"Z Rotation",value:Property(element.rz,parent)},{name:"Orientation",value:Property(element.or,parent)}]},methods={getTargetLayer:function(){return state.element}};return Object.assign({},KeyPathNode(state),methods)}},{"../../key_path/KeyPathNode":12,"../../property/Property":40}],16:[function(require,module,exports){"use strict";var KeyPathList=require("../../key_path/KeyPathList"),LayerBase=require("../LayerBase"),layer_api=require("../../helpers/layerAPIBuilder"),TimeRemap=(require("../../property/Property"),require("./TimeRemap"));module.exports=function(element,parent){var state={element:element,parent:parent,properties:function(){var compositionLayers=element.layers.map(buildLayerApi);return[{name:"Time Remap",value:TimeRemap(element.tm)}].concat(compositionLayers)}()};function buildLayerApi(layer,index){var _layerApi=null,ob={name:layer.nm};return Object.defineProperty(ob,"value",{get:function(){return _layerApi||(_layerApi=layer_api(element.elements[index],state)),_layerApi}}),ob}return Object.assign({},LayerBase(state),KeyPathList(state.elements,"layer"),{})}},{"../../helpers/layerAPIBuilder":6,"../../key_path/KeyPathList":11,"../../property/Property":40,"../LayerBase":13,"./TimeRemap":17}],17:[function(require,module,exports){"use strict";var KeyPathNode=require("../../key_path/KeyPathNode"),ValueProperty=require("../../property/ValueProperty");module.exports=function(property,parent){var _destroyFunction,state={property:property,parent:parent},_isCallbackAdded=!1,currentSegmentInit=0,currentSegmentEnd=0,previousTime=0,currentTime=0,_loop=!0,_speed=1,_paused=!1,_isDebugging=!1,queuedSegments=[],enterFrameEvent={time:-1};function playSegment(init,end,clear){_paused=!1,clear&&(clearQueue(),currentTime=init),_isDebugging&&void 0,previousTime=Date.now(),currentSegmentInit=init,currentSegmentEnd=end,addCallback()}function playQueuedSegment(){var newSegment=queuedSegments.shift();playSegment(newSegment[0],newSegment[1])}function clearQueue(){queuedSegments.length=0}function _segmentPlayer(currentValue){if(currentSegmentInit===currentSegmentEnd)currentTime=currentSegmentInit;else if(!_paused){var nowTime=Date.now(),elapsedTime=_speed*(nowTime-previousTime)/1e3;previousTime=nowTime,currentSegmentInit<currentSegmentEnd?(currentTime+=elapsedTime)>currentSegmentEnd&&(queuedSegments.length?playQueuedSegment():_loop?currentTime%=currentSegmentEnd-currentSegmentInit:currentTime=currentSegmentEnd):(currentTime-=elapsedTime)<currentSegmentEnd&&(queuedSegments.length?playQueuedSegment():currentTime=_loop?currentSegmentInit-(currentSegmentEnd-currentTime):currentSegmentEnd),_isDebugging&&void 0}return instance.onEnterFrame&&enterFrameEvent.time!==currentTime&&(enterFrameEvent.time=currentTime,instance.onEnterFrame(enterFrameEvent)),currentTime}function addCallback(){_isCallbackAdded||(_isCallbackAdded=!0,_destroyFunction=instance.setValue(_segmentPlayer,_isDebugging))}var methods={playSegment:playSegment,playTo:function(end,clear){_paused=!1,clear&&clearQueue(),addCallback(),currentSegmentEnd=end},queueSegment:function(init,end){queuedSegments.push([init,end])},clearQueue:clearQueue,setLoop:function(flag){_loop=flag},setSpeed:function(value){_speed=value},pause:function(){_paused=!0},setDebugging:function(flag){_isDebugging=flag},getCurrentTime:function(){return _isCallbackAdded?currentTime:property.v/property.mult},onEnterFrame:null,destroy:function(){_destroyFunction&&(_destroyFunction(),state.property=null,state.parent=null)}},instance={};return Object.assign(instance,methods,ValueProperty(state),KeyPathNode(state))}},{"../../key_path/KeyPathNode":12,"../../property/ValueProperty":41}],18:[function(require,module,exports){"use strict";var Property=require("../../property/Property");module.exports=function(effect,parent){return Property(effect.p,parent)}},{"../../property/Property":40}],19:[function(require,module,exports){"use strict";var KeyPathNode=require("../../key_path/KeyPathNode"),Property=require("../../property/Property");require("./EffectElement");module.exports=function Effects(effects,parent){var state={parent:parent,properties:function(){var i,len=effects.length,arr=[];for(i=0;i<len;i+=1)arr.push(getValue(effects[i],i));return arr}()};function getValue(effectData,index){return{name:effectData.data?effectData.data.nm:index.toString(),value:effectData.data?Effects(effectData.effectElements,parent):Property(effectData.p,parent)}}return Object.assign({},KeyPathNode(state))}},{"../../key_path/KeyPathNode":12,"../../property/Property":40,"./EffectElement":18}],20:[function(require,module,exports){"use strict";var LayerBase=require("../LayerBase");module.exports=function(element){return Object.assign({},LayerBase(element),{})}},{"../LayerBase":13}],21:[function(require,module,exports){"use strict";var LayerBase=require("../LayerBase");module.exports=function(element,parent){var state={element:element,parent:parent,properties:[]};return Object.assign({},LayerBase(state),{})}},{"../LayerBase":13}],22:[function(require,module,exports){"use strict";var LayerBase=require("../LayerBase"),ShapeContents=require("./ShapeContents");module.exports=function(element,parent){var state={properties:[],parent:parent,element:element},shapeContents=ShapeContents(element.data.shapes,element.itemsData,state);return state.properties.push({name:"Contents",value:shapeContents}),Object.assign(state,LayerBase(state),{})}},{"../LayerBase":13,"./ShapeContents":23}],23:[function(require,module,exports){"use strict";var KeyPathNode=require("../../key_path/KeyPathNode"),ShapeRectangle=(require("../../property/Property"),require("./ShapeRectangle")),ShapeFill=require("./ShapeFill"),ShapeStroke=require("./ShapeStroke"),ShapeEllipse=require("./ShapeEllipse"),ShapeGradientFill=require("./ShapeGradientFill"),ShapeGradientStroke=require("./ShapeGradientStroke"),ShapeTrimPaths=require("./ShapeTrimPaths"),ShapeRepeater=require("./ShapeRepeater"),ShapePolystar=require("./ShapePolystar"),ShapeRoundCorners=require("./ShapeRoundCorners"),ShapePath=require("./ShapePath"),Transform=require("../transform/Transform"),Matrix=require("../../helpers/transformationMatrix");module.exports=function ShapeContents(shapesData,shapes,parent){var state={properties:shapesData.map(function(shape,index){return function(shape,index){var ob={name:shape.nm};return Object.defineProperty(ob,"value",{get:function(){if(cachedShapeProperties[index])return cachedShapeProperties[index];var property;return"gr"===shape.ty?property=ShapeContents(shapesData[index].it,shapes[index].it,state):"rc"===shape.ty?property=ShapeRectangle(shapes[index],state):"el"===shape.ty?property=ShapeEllipse(shapes[index],state):"fl"===shape.ty?property=ShapeFill(shapes[index],state):"st"===shape.ty?property=ShapeStroke(shapes[index],state):"gf"===shape.ty?property=ShapeGradientFill(shapes[index],state):"gs"===shape.ty?property=ShapeGradientStroke(shapes[index],state):"tm"===shape.ty?property=ShapeTrimPaths(shapes[index],state):"rp"===shape.ty?property=ShapeRepeater(shapes[index],state):"sr"===shape.ty?property=ShapePolystar(shapes[index],state):"rd"===shape.ty?property=ShapeRoundCorners(shapes[index],state):"sh"===shape.ty?property=ShapePath(shapes[index],state):"tr"===shape.ty?property=Transform(shapes[index].transform.mProps,state):void 0,cachedShapeProperties[index]=property,property}}),ob}(shape,index)}),parent:parent},cachedShapeProperties=[];var methods={fromKeypathLayerPoint:function(point){if(state.hasProperty("Transform")){var toWorldMat=Matrix();state.getProperty("Transform").getTargetTransform().applyToMatrix(toWorldMat),point=toWorldMat.applyToPointArray(point[0],point[1],point[2]||0)}return state.parent.fromKeypathLayerPoint(point)},toKeypathLayerPoint:function(point){if(point=state.parent.toKeypathLayerPoint(point),state.hasProperty("Transform")){var toWorldMat=Matrix();state.getProperty("Transform").getTargetTransform().applyToMatrix(toWorldMat),point=toWorldMat.inversePoint(point)}return point}};return Object.assign(state,KeyPathNode(state),methods)}},{"../../helpers/transformationMatrix":8,"../../key_path/KeyPathNode":12,"../../property/Property":40,"../transform/Transform":39,"./ShapeEllipse":24,"./ShapeFill":25,"./ShapeGradientFill":26,"./ShapeGradientStroke":27,"./ShapePath":28,"./ShapePolystar":29,"./ShapeRectangle":30,"./ShapeRepeater":31,"./ShapeRoundCorners":32,"./ShapeStroke":33,"./ShapeTrimPaths":34}],24:[function(require,module,exports){"use strict";var KeyPathNode=require("../../key_path/KeyPathNode"),Property=require("../../property/Property");module.exports=function(element,parent){var state={parent:parent,properties:[{name:"Size",value:Property(element.sh.s,parent)},{name:"Position",value:Property(element.sh.p,parent)}]};return Object.assign({},KeyPathNode(state))}},{"../../key_path/KeyPathNode":12,"../../property/Property":40}],25:[function(require,module,exports){"use strict";var KeyPathNode=require("../../key_path/KeyPathNode"),Property=require("../../property/Property");module.exports=function(element,parent){var state={parent:parent,properties:[{name:"Color",value:Property(element.c,parent)},{name:"Opacity",value:{setValue:Property(element.o,parent)}}]};return Object.assign({},KeyPathNode(state))}},{"../../key_path/KeyPathNode":12,"../../property/Property":40}],26:[function(require,module,exports){"use strict";var KeyPathNode=require("../../key_path/KeyPathNode"),Property=require("../../property/Property");module.exports=function(element,parent){var state={parent:parent,properties:[{name:"Start Point",value:Property(element.s,parent)},{name:"End Point",value:Property(element.s,parent)},{name:"Opacity",value:Property(element.o,parent)},{name:"Highlight Length",value:Property(element.h,parent)},{name:"Highlight Angle",value:Property(element.a,parent)},{name:"Colors",value:Property(element.g.prop,parent)}]};return Object.assign({},KeyPathNode(state))}},{"../../key_path/KeyPathNode":12,"../../property/Property":40}],27:[function(require,module,exports){"use strict";var KeyPathNode=require("../../key_path/KeyPathNode"),Property=require("../../property/Property");module.exports=function(element,parent){var state={parent:parent,properties:[{name:"Start Point",value:Property(element.s,parent)},{name:"End Point",value:Property(element.e,parent)},{name:"Opacity",value:Property(element.o,parent)},{name:"Highlight Length",value:Property(element.h,parent)},{name:"Highlight Angle",value:Property(element.a,parent)},{name:"Colors",value:Property(element.g.prop,parent)},{name:"Stroke Width",value:Property(element.w,parent)}]};return Object.assign({},KeyPathNode(state))}},{"../../key_path/KeyPathNode":12,"../../property/Property":40}],28:[function(require,module,exports){"use strict";var KeyPathNode=require("../../key_path/KeyPathNode"),Property=require("../../property/Property");module.exports=function(element,parent){var state={parent:parent,properties:[{name:"path",value:Property(element.sh,parent)}]};return Object.assign({},KeyPathNode(state))}},{"../../key_path/KeyPathNode":12,"../../property/Property":40}],29:[function(require,module,exports){"use strict";var KeyPathNode=require("../../key_path/KeyPathNode"),Property=require("../../property/Property");module.exports=function(element,parent){var state={parent:parent,properties:[{name:"Points",value:Property(element.sh.pt,parent)},{name:"Position",value:Property(element.sh.p,parent)},{name:"Rotation",value:Property(element.sh.r,parent)},{name:"Inner Radius",value:Property(element.sh.ir,parent)},{name:"Outer Radius",value:Property(element.sh.or,parent)},{name:"Inner Roundness",value:Property(element.sh.is,parent)},{name:"Outer Roundness",value:Property(element.sh.os,parent)}]};return Object.assign({},KeyPathNode(state))}},{"../../key_path/KeyPathNode":12,"../../property/Property":40}],30:[function(require,module,exports){"use strict";var KeyPathNode=require("../../key_path/KeyPathNode"),Property=require("../../property/Property");module.exports=function(element,parent){var state={parent:parent,properties:[{name:"Size",value:Property(element.sh.s,parent)},{name:"Position",value:Property(element.sh.p,parent)},{name:"Roundness",value:Property(element.sh.r,parent)}]};return Object.assign({},KeyPathNode(state))}},{"../../key_path/KeyPathNode":12,"../../property/Property":40}],31:[function(require,module,exports){"use strict";var KeyPathNode=require("../../key_path/KeyPathNode"),Property=require("../../property/Property"),Transform=require("../transform/Transform");module.exports=function(element,parent){var state={parent:parent,properties:[{name:"Copies",value:Property(element.c,parent)},{name:"Offset",value:Property(element.o,parent)},{name:"Transform",value:Transform(element.tr,parent)}]};return Object.assign({},KeyPathNode(state))}},{"../../key_path/KeyPathNode":12,"../../property/Property":40,"../transform/Transform":39}],32:[function(require,module,exports){"use strict";var KeyPathNode=require("../../key_path/KeyPathNode"),Property=require("../../property/Property");module.exports=function(element,parent){var state={parent:parent,properties:[{name:"Radius",value:Property(element.rd,parent)}]};return Object.assign({},KeyPathNode(state))}},{"../../key_path/KeyPathNode":12,"../../property/Property":40}],33:[function(require,module,exports){"use strict";var KeyPathNode=require("../../key_path/KeyPathNode"),Property=require("../../property/Property");module.exports=function(element,parent){var state={parent:parent,properties:[{name:"color",value:Property(element.c,parent)},{name:"stroke width",value:Property(element.w,parent)},{name:"opacity",value:Property(element.o,parent)}]};return Object.assign({},KeyPathNode(state))}},{"../../key_path/KeyPathNode":12,"../../property/Property":40}],34:[function(require,module,exports){"use strict";var KeyPathNode=require("../../key_path/KeyPathNode"),Property=require("../../property/Property");module.exports=function(element,parent){var state={parent:parent,properties:[{name:"Start",value:Property(element.s,parent)},{name:"End",value:Property(element.e,parent)},{name:"Offset",value:Property(element.o,parent)}]};return Object.assign({},KeyPathNode(state))}},{"../../key_path/KeyPathNode":12,"../../property/Property":40}],35:[function(require,module,exports){"use strict";var LayerBase=require("../LayerBase");module.exports=function(element,parent){var state={element:element,parent:parent,properties:[]};return Object.assign({},LayerBase(state),{})}},{"../LayerBase":13}],36:[function(require,module,exports){"use strict";var KeyPathNode=require("../../key_path/KeyPathNode"),TextAnimator=(require("../../property/Property"),require("./TextAnimator"));module.exports=function(element,parent){var state={element:element,parent:parent,properties:[{name:"Source",value:{setValue:function(_function){setInterval(function(){var newValue=_function(element.textProperty.currentData);void 0!==newValue&&element.updateDocumentData(newValue)},500),void 0}}}].concat(function(){var i,textAnimator,animatorProperties=[],animators=element.textAnimator._animatorsData,len=animators.length;for(i=0;i<len;i+=1)textAnimator=TextAnimator(animators[i]),animatorProperties.push({name:element.textAnimator._textData.a[i].nm||"Animator "+(i+1),value:textAnimator});return animatorProperties}())};return Object.assign({},{},KeyPathNode(state))}},{"../../key_path/KeyPathNode":12,"../../property/Property":40,"./TextAnimator":37}],37:[function(require,module,exports){"use strict";var KeyPathNode=require("../../key_path/KeyPathNode"),Property=require("../../property/Property");module.exports=function(animator){var state={properties:[{name:"Anchor Point",value:{setValue:setAnchorPoint}},{name:"Fill Brightness",value:{setValue:setFillBrightness}},{name:"Fill Color",value:{setValue:setFillColor}},{name:"Fill Hue",value:{setValue:setFillHue}},{name:"Fill Saturation",value:{setValue:setFillSaturation}},{name:"Fill Opacity",value:{setValue:setFillOpacity}},{name:"Opacity",value:{setValue:setOpacity}},{name:"Position",value:{setValue:setPosition}},{name:"Rotation X",value:{setValue:setRotationX}},{name:"Rotation Y",value:{setValue:setRotationY}},{name:"Scale",value:{setValue:setScale}},{name:"Skew Axis",value:{setValue:setSkewAxis}},{name:"Stroke Color",value:{setValue:setStrokeColor}},{name:"Skew",value:{setValue:setSkew}},{name:"Stroke Width",value:{setValue:setStrokeWidth}},{name:"Tracking Amount",value:{setValue:setTrackingAmount}},{name:"Stroke Opacity",value:{setValue:setStrokeOpacity}},{name:"Stroke Brightness",value:{setValue:setStrokeBrightness}},{name:"Stroke Saturation",value:{setValue:setStrokeSaturation}},{name:"Stroke Hue",value:{setValue:setStrokeHue}}]};function setAnchorPoint(value){Property(animator.a.a).setValue(value)}function setFillBrightness(value){Property(animator.a.fb).setValue(value)}function setFillColor(value){Property(animator.a.fc).setValue(value)}function setFillHue(value){Property(animator.a.fh).setValue(value)}function setFillSaturation(value){Property(animator.a.fs).setValue(value)}function setFillOpacity(value){Property(animator.a.fo).setValue(value)}function setOpacity(value){Property(animator.a.o).setValue(value)}function setPosition(value){Property(animator.a.p).setValue(value)}function setRotationX(value){Property(animator.a.rx).setValue(value)}function setRotationY(value){Property(animator.a.ry).setValue(value)}function setScale(value){Property(animator.a.s).setValue(value)}function setSkewAxis(value){Property(animator.a.sa).setValue(value)}function setStrokeColor(value){Property(animator.a.sc).setValue(value)}function setSkew(value){Property(animator.a.sk).setValue(value)}function setStrokeOpacity(value){Property(animator.a.so).setValue(value)}function setStrokeWidth(value){Property(animator.a.sw).setValue(value)}function setStrokeBrightness(value){Property(animator.a.sb).setValue(value)}function setStrokeHue(value){Property(animator.a.sh).setValue(value)}function setStrokeSaturation(value){Property(animator.a.ss).setValue(value)}function setTrackingAmount(value){Property(animator.a.t).setValue(value)}return Object.assign({},{},KeyPathNode(state))}},{"../../key_path/KeyPathNode":12,"../../property/Property":40}],38:[function(require,module,exports){"use strict";var LayerBase=require("../LayerBase"),Text=require("./Text");module.exports=function(element){var TextProperty=Text(element),state={element:element,properties:[{name:"text",value:TextProperty},{name:"Text",value:TextProperty}]};function setDocumentData(data,index){return element.updateDocumentData(data,index)}var methods={getText:function(){return element.textProperty.currentData.t},setText:function(value,index){setDocumentData({t:value},index)},canResizeFont:function(_canResize){return element.canResizeFont(_canResize)},setDocumentData:setDocumentData,setMinimumFontSize:function(_fontSize){return element.setMinimumFontSize(_fontSize)}};return Object.assign({},LayerBase(state),methods)}},{"../LayerBase":13,"./Text":36}],39:[function(require,module,exports){"use strict";var KeyPathNode=require("../../key_path/KeyPathNode"),Property=require("../../property/Property");module.exports=function(props,parent){var state={properties:[{name:"Anchor Point",value:Property(props.a,parent)},{name:"Point of Interest",value:Property(props.a,parent)},{name:"Position",value:Property(props.p,parent)},{name:"Scale",value:Property(props.s,parent)},{name:"Rotation",value:Property(props.r,parent)},{name:"X Position",value:Property(props.px,parent)},{name:"Y Position",value:Property(props.py,parent)},{name:"Z Position",value:Property(props.pz,parent)},{name:"X Rotation",value:Property(props.rx,parent)},{name:"Y Rotation",value:Property(props.ry,parent)},{name:"Z Rotation",value:Property(props.rz,parent)},{name:"Opacity",value:Property(props.o,parent)}]},methods={getTargetTransform:function(){return props}};return Object.assign(methods,KeyPathNode(state))}},{"../../key_path/KeyPathNode":12,"../../property/Property":40}],40:[function(require,module,exports){"use strict";var KeyPathNode=require("../key_path/KeyPathNode"),ValueProperty=require("./ValueProperty");module.exports=function(property,parent){var state={property:property,parent:parent},methods={destroy:function(){state.property=null,state.parent=null}};return Object.assign({},methods,ValueProperty(state),KeyPathNode(state))}},{"../key_path/KeyPathNode":12,"./ValueProperty":41}],41:[function(require,module,exports){"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj};module.exports=function(state){return{setValue:function(value){var property=state.property;if(property&&property.addEffect)return"function"==typeof value?property.addEffect(value):"multidimensional"===property.propType&&"object"===(void 0===value?"undefined":_typeof(value))&&2===value.length?property.addEffect(function(){return value}):"unidimensional"===property.propType&&"number"==typeof value?property.addEffect(function(){return value}):void 0},getValue:function(){return state.property.v}}}},{}],42:[function(require,module,exports){"use strict";var LayerList=require("../layer/LayerList"),KeyPathList=require("../key_path/KeyPathList");module.exports=function(state){return state._type="renderer",Object.assign({getRendererType:function(){return state.animation.animType}},LayerList(state.elements),KeyPathList(state.elements,"renderer"))}},{"../key_path/KeyPathList":11,"../layer/LayerList":14}]},{},[10])(10)});




(function(){
    'use strict';
    const LONG_TAP_TIME = 600; 

    let waitForLongtap;
    let tapStarted;
    let currentElement;

    function cancelWaitForLongtap(e) {
        clearTimeout(waitForLongtap);
        currentElement.removeEventListener('touchend', cancelWaitForLongtap, true);
        currentElement.removeEventListener('touchend', cancelWaitForLongtap, false);
    }
    function cancelTouchMoveAfterLongtap(e) {
        e.preventDefault();
        e.stopPropagation();
    }
    function cancelOtherEvents(e) {
        cancelWaitForLongtap(e);
        if (tapStarted + LONG_TAP_TIME < Date.now()) {
            e.stopPropagation();
            e.preventDefault();
            e.stopImmediatePropagation();
        }
    }
    function cancelOtherEventsTouch(e) {
        cancelOtherEvents(e);
        document.body.removeEventListener('touchend', cancelOtherEventsTouch, true);
    }
    function cancelOtherEventsMouse(e) {
        cancelOtherEvents(e);
        document.body.removeEventListener('mouseup', cancelOtherEventsMouse, true);
    }
    function cancelOtherEventsClick(e) {
        cancelOtherEvents(e);
        document.body.removeEventListener('click', cancelOtherEventsClick, true);
    }


    function addEvent(el, event, callback, useCapture) {
        let i;
        switch (event) {
        case 'tap':
            el.addEventListener('touchstart', function (e) {
                tapStarted = Date.now();
                for (i = 0; i < e.changedTouches.length; i += 1) {
                    e.changedTouches[i].stopPropagation = e.stopPropagation && e.stopPropagation.bind(e);
                    e.changedTouches[i].preventDefault = e.preventDefault && e.preventDefault.bind(e);
                    callback(e.changedTouches[i]);
                }
                e.preventMouseFallback = true;
            }, useCapture);
            el.addEventListener('mousedown', function (e) {
                callback(e);
            }, useCapture);
            break;
        case 'long-touch':
            el.addEventListener('touchstart', function (e) {
                tapStarted = Date.now();
                currentElement = el;
                void 0;
                clearTimeout(waitForLongtap);
                waitForLongtap = setTimeout(function () {
                    cancelWaitForLongtap(e);
                    e.clientX = e.changedTouches[0].clientX;
                    e.clientY = e.changedTouches[0].clientY;
                    el.addEventListener('touchmove', cancelTouchMoveAfterLongtap, useCapture);
                    setTimeout(function () {
                        el.removeEventListener('touchmove', cancelTouchMoveAfterLongtap, useCapture);
                    }, LONG_TAP_TIME);
                    e.preventDefault();
                    e.stopPropagation();

                        callback(e);
                }, LONG_TAP_TIME);
                window.addEventListener('blur', cancelWaitForLongtap);
                el.addEventListener('touchend', cancelWaitForLongtap, useCapture);
                document.body.addEventListener('touchend', cancelOtherEventsTouch, true);
                document.body.addEventListener('click', cancelOtherEventsClick, true);
                document.body.addEventListener('mouseup', cancelOtherEventsMouse, true);
            }, useCapture);
            el.addEventListener('touchmove', function (e) {
                cancelWaitForLongtap(e);
            });
            break;
        default:
            el.addEventListener(event, callback, useCapture);
        }
    }
window.addEvent = addEvent;
})();

window.isDesktop = true;

const namespace = window;

namespace.config = {
    transferFiles: false,
    defaultSelfKind: 'mobile',
    pageSize: 100
};
Object.keys(namespace.config).forEach(function (key) {
    'use strict';
    if (namespace.config[key]) {
        document.body.classList.add(key);
    } else {
        document.body.classList.remove(key);
    }
});
window.namespace = namespace;


const isGX = document.querySelector('body').classList.contains('isGX');

function initThemes() {
    'use strict';
    function setIdle() {
        document.getElementById('button-send').classList.add('idle');
        document.getElementById('button-send').classList.remove('playing');
    }
    function loadSendButtonAnimation(theme) {
        if (!isGX) {
            let arrowAnimJson = `${FLOW_OPERA_CDN}img/arrow-all${FLOW_BUILD_ID}.json`;
            if (namespace.isDesktop) {
                arrowAnimJson = `${FLOW_OPERA_CDN}img/arrow-blue-all${FLOW_BUILD_ID}.json`;
            }
            if (theme === 'dark') {
                arrowAnimJson = `${FLOW_OPERA_CDN}img/arrow-all-dark${FLOW_BUILD_ID}.json`;
            }
            document.querySelector('.button-send-desktop').innerHTML = '';
            const sendButtonAnimation = lottie.loadAnimation({
                container: document.querySelector('.button-send-desktop'), 
                path: arrowAnimJson, 
                renderer: 'svg', 
                loop: false, 
                autoplay: false
            });

            sendButtonAnimation.addEventListener('complete', setIdle);

            namespace.sendButtonAnimation = sendButtonAnimation;
        } else {
            let arrowAnimJson = `${FLOW_OPERA_CDN}img/arrow-all-gx${FLOW_BUILD_ID}.json`;
            document.querySelector('.button-send-gx').innerHTML = '';
            const sendButtonAnimation = lottie.loadAnimation({
                container: document.querySelector('.button-send-gx'),
                path: arrowAnimJson,
                renderer: 'svg',
                loop: false,
                autoplay: false
            });

            sendButtonAnimation.addEventListener('complete', setIdle);

            namespace.sendButtonAnimation = sendButtonAnimation;
        }
    }
    window.loadSendButtonAnimation = loadSendButtonAnimation;

    function loadUploadButtonAnimation(theme) {
        if (!isGX) {
            let uploadAnimJson = `${FLOW_OPERA_CDN}img/icon-upload-APP${FLOW_BUILD_ID}.json`;
            if (namespace.isDesktop) {
                uploadAnimJson = `${FLOW_OPERA_CDN}img/icon-upload${FLOW_BUILD_ID}.json`;
            }
            if (theme === 'dark') {
                uploadAnimJson = `${FLOW_OPERA_CDN}img/icon-upload-dark-APP${FLOW_BUILD_ID}.json`;
            }
            const btnUploadDesktop = document.querySelector('.button-upload-desktop');
            btnUploadDesktop.innerHTML = ''
            const uploadButtonAnimation = lottie.loadAnimation({
                container: btnUploadDesktop, 
                path: uploadAnimJson, 
                renderer: 'svg', 
                loop: false, 
                autoplay: false
            });
            namespace.uploadButtonAnimation = uploadButtonAnimation;
        } else {
            return null;
        }
    }
    window.loadUploadButtonAnimation = loadUploadButtonAnimation;

    function loadOnboardingAnimation(theme) {
        let onboardingAnimJson = `${FLOW_OPERA_CDN}img/empty_flow${FLOW_BUILD_ID}.json`;
        if (theme === 'dark') {
            onboardingAnimJson = `${FLOW_OPERA_CDN}img/empty_flow_dark${FLOW_BUILD_ID}.json`;
        }
        if (namespace.onboardingAnimation) {
            namespace.onboardingAnimation.destroy();
        }
        document.getElementById('onboarding-anim').innerHTML = '';
        const onboardingAnimation = lottie.loadAnimation({
            container: document.getElementById('onboarding-anim'), 
            path: onboardingAnimJson, 
            renderer: 'svg', 
            loop: true, 
            autoplay: true
        });
        namespace.onboardingAnimation = onboardingAnimation;
    }
    window.loadOnboardingAnimation = loadOnboardingAnimation;

    function setTheme(themeName) {
        let className = 'light';
        switch (themeName) {

        case 'incognito':
          document.body.classList.add('incognito');
        case 'dark':
            className = 'dark';
            break;
        default:
            className = 'light';
            break;

        }

        if (window.theme === className) {
            return;
        }
        document.body.classList.remove('dark');
        document.body.classList.remove('light');
        document.body.classList.remove('incognito');

        document.body.classList.add(className);
        window.theme = className;
        loadSendButtonAnimation(className);
        loadUploadButtonAnimation(className);
        if (namespace.isIOS) {
            loadOnboardingAnimation(className);
        }
    }
    window.setTheme = setTheme;
    function onHashChange() {
        let theme = location.hash.substr(1);
        if (theme.substr(0, 6) === 'theme=') {
            theme = theme.substr(6);
        }
        setTheme(theme);
    }

    window.onhashchange = function () {
        onHashChange();
    };
    onHashChange();
    return {
        loadSendButtonAnimation,
        loadUploadButtonAnimation,
        setTheme
    };
}
namespace.themes = initThemes();

function initOneApiService(namespace) {
    'use strict';

    let apiType = 'desktop';
    let sendToBackgroundWorker = data => operaTouchBackground.port.postMessage(data);

    if (namespace.isAndroid) {
        apiType = 'android';
    }
    if (namespace.isIOS) {
        apiType = 'ios';
        sendToBackgroundWorker = data => oprt.messages.sendMessage(data, ()=>{});
    }
    let sendMessagesList = {};
    function sendTextMessage(messageText, messageId, onSuccess, onError) {
        void 0;
        if (messageId === undefined) {
            messageId = `local_text_${new Date().getTime()}_${Math.random()}`;
        }
        if (!messageText) {
            void 0;
            return;
        }
        switch (apiType) {
        case 'desktop':
            sendToBackgroundWorker({
                type: 'CREATE_MESSAGE',
                messageId: messageId,
                value: {
                    content: JSON.stringify({text: messageText}),
                    metadata: JSON.stringify({type: 'text', localMessageId: messageId})
                }
            });
            break;
        case 'ios':
            window.oprt.messages.sendMessage({
                type: 'CREATE_MESSAGE',
                messageId: messageId,
                value: {
                    content: JSON.stringify({text: messageText}),
                    metadata: JSON.stringify({type: 'text', localMessageId: messageId})
                }
            }, console.log);
            break;
        case 'android':
            Neon.sendMessage(JSON.stringify({type: 'text', localMessageId: messageId}), JSON.stringify({text: messageText}), messageId);
            break;
        default:
            void 0;
        }
        let message = {
            text: messageText
        };
        if (typeof onSuccess === 'function') {
            message.onSuccess = onSuccess;
        }
        if (typeof onError === 'function') {
            message.onError = onError;
        }
        sendMessagesList[messageId] = message;
    }
    function onSendMessageSuccess(messageId, serverMessageId) {
        if (sendMessagesList[messageId]) {
            if (typeof sendMessagesList[messageId].onSuccess === 'function') {
                sendMessagesList[messageId].onSuccess(messageId, serverMessageId);
                delete sendMessagesList[messageId];
            }
        }
    }

    function onSendMessageError(messageId) {
        if (sendMessagesList[messageId]) {
            if (typeof sendMessagesList[messageId].onError === 'function') {
                sendMessagesList[messageId].onError(messageId);
                delete sendMessagesList[messageId];
            }
        }
    }
    function onSendFileStarted(callbackValue, name, mimetype, size, preview) {
        namespace.chat.onSendFileStarted(callbackValue, name, mimetype, size, preview);
    }
    const retryCache = {};
    function desktopSendFile(file, i, onInit) {
        let whenThumbnailReady = thumbnail => {
            const reader = new FileReader();
            reader.onload = function (e) {
                i += 1;
                const base64content = base64js.fromByteArray(new Uint8Array(e.target.result));
                const fileMessageId = `${new Date().getTime()}_local_file_desktop_${Math.random()}_${i}`;
                const postMessage = {
                    type: "SEND_FILE",
                    preview: thumbnail,
                    size: file.size,
                    localMessageId: fileMessageId,
                    messageId: fileMessageId,
                    name: file.name,
                    content: base64content,
                    file_type: file.type
                };
		if (apiType === 'ios') { sendToBackgroundWorker({type:"ANALYTICS_EVENT", name: "FlowSendFile"}); }
                retryCache[fileMessageId] = postMessage;
                onInit(fileMessageId, postMessage, file);
                sendToBackgroundWorker(postMessage);

            };
            reader.readAsArrayBuffer(file);
        }
        generateThumbnail(file, whenThumbnailReady);
    }
    function retryUpload(messageId) {
        chat.setUploadStatus('sending');
        switch (apiType) {
        case 'ios':
            sendToBackgroundWorker({type:"ANALYTICS_EVENT", name: "FlowSendFileRetry"});
        case 'desktop':
            sendToBackgroundWorker(retryCache[messageId]);
            break;
        case 'android':
            Neon.retrySendFileMessage(messageId);
            break;
        default:
            void 0;
        }
    }
    function initSendFile(onInit) {
        function openFilePicker() {
            let i = 0;
            function sendFile(file) {
                desktopSendFile(file, i, onInit);
            }
            const input = document.body.appendChild(document.createElement('input'));
            input.type = 'file';
            input.style.display = 'none';
            input.multiple = true;
            input.onchange = function (evt) {
                Object.values(evt.target.files).forEach(sendFile);
            };
            input.click();
        }


        const androidFileMessageId = `${new Date().getTime()}_local_file_android_${Math.random()}`;
        switch (apiType) {
        case 'desktop':
        case 'ios':
            openFilePicker();
            break;
        case 'android':
            Neon.sendFileMessage(androidFileMessageId);
            break;
        default:
            void 0;
        }
    }

    function onSendFileProgress(messageId, loaded, size) {
        namespace.chat.onSendFileProgress(messageId, loaded, size);
    }

    function onSendFileSuccess(messageId, serverMessageId, response) {
        if (apiType === 'ios') { sendToBackgroundWorker({type:"ANALYTICS_EVENT", name: "FlowSendFileFinished"}); }
        namespace.chat.onSendFileSuccess(messageId, serverMessageId, response);
    }

    function onSendFileError(messageId, error) {
        if (apiType === 'ios' && !namespace.chat.getMessageEl(messageId).aborted) {
            sendToBackgroundWorker({type:"ANALYTICS_EVENT", name: "FlowSendFileFailed"});
        }
        removeUploadDownloadId(messageId);
        namespace.chat.onSendFileError(messageId, error);
    }

    function sendObjMessage(message, type, messageId) {
        if (!message) {
            throw new Error('endObjMessage param "message" empty');
        }
        if (!message) {
            throw new Error('endObjMessage param "type" empty');
        }
        void 0;
        if (!message) {
            void 0;
            return;
        }
        switch (apiType) {
        case 'desktop':
            sendToBackgroundWorker({
                type: 'CREATE_MESSAGE',
                messageId: messageId,
                value: {
                    content: JSON.stringify(message),
                    metadata: JSON.stringify({type: type})
                }
            });
            break;
        case 'ios':
            window.oprt.messages.sendMessage({
                type: 'CREATE_MESSAGE',
                messageId: messageId,
                value: {
                    content: JSON.stringify(message),
                    metadata: JSON.stringify({type: type})
                }
            }, console.log);
            break;
        case 'android':
            Neon.sendMessage(JSON.stringify({type: type}), JSON.stringify(message), messageId);
            break;
        default:
            void 0;
        }
    }
    function onDeleteMessageError(messageId) {
        namespace.chat.onDeleteMessageFail(messageId);
    }

    function deleteMessage(id) {
        void 0;
        id = parseInt(id, 10);
        if (!id) {
            void 0;
            return;
        }
        switch (apiType) {
        case 'desktop':
            sendToBackgroundWorker({
                messageId: id,
                type: 'DELETE_MESSAGE',
                value: id
            });
            break;
        case 'ios':
            window.oprt.messages.sendMessage({
                messageId: id,
                type: 'DELETE_MESSAGE',
                value: id
            }, console.log);
            break;
        case 'android':
            void 0;
            Neon.deleteMessage(id);
            break;
        default:
            void 0;
        }
    }

    function getMessagesNew(id, limit, messageId) {
        void 0;
        id = parseInt(id, 10);
        switch (apiType) {
        case 'desktop':
            sendToBackgroundWorker({
                type: 'GET_MESSAGES',
                messageId: messageId,
                value: {
                    order: 'asc',
                    from_id: id,
                    limit: limit
                }
            });
            break;
        case 'ios':
            window.oprt.messages.sendMessage({
                type: 'GET_MESSAGES',
                messageId: messageId,
                value: {
                    order: 'asc',
                    from_id: id,
                    limit: limit
                }
            }, console.log);
            break;
        case 'android':
            Neon.getMessagesAsc(id, limit, messageId);
            break;
        default:
            void 0;
        }
    }

    function getMessagesOld(id, limit, messageId) {
        void 0;
        id = parseInt(id, 10);
        switch (apiType) {
        case 'desktop':
            sendToBackgroundWorker({
                type: 'GET_MESSAGES',
                messageId: messageId,
                value: {
                    order: 'desc',
                    from_id: id,
                    limit: limit
                }
            });
            break;
        case 'ios':
            window.oprt.messages.sendMessage({
                type: 'GET_MESSAGES',
                messageId: messageId,
                value: {
                    order: 'desc',
                    from_id: id,
                    limit: limit
                }
            }, console.log);
            break;
        case 'android':
            Neon.getMessagesDesc(id, limit, messageId);
            break;
        default:
            void 0;
        }
    }

    const discoverLinkByteLimit = 500 * 1024;
    function discoverLink(url, targetMessageElDataId, i) {
        void 0;
        const richDescriptionObj = cyclicCache.getCache(`${targetMessageElDataId}.${i}`);
        if (richDescriptionObj) {
            void 0;
            setTimeout(function () {
                onRichDescriptionReady(`${targetMessageElDataId}.${i}`, richDescriptionObj);
            }, 0);
            return;
        }
        if (!url) {
            void 0;
            return;
        }
        switch (apiType) {
        case 'desktop':
            sendToBackgroundWorker({
                type: 'GET_PARTIAL_URL',
                messageId: parseFloat(`${targetMessageElDataId}.${i}`),
                value: {
                    url: url,
                    byteLimit: discoverLinkByteLimit
                }
            });
            break;
        case 'ios':
            window.oprt.messages.sendMessage({
                type: 'GET_PARTIAL_URL',
                messageId: parseFloat(`${targetMessageElDataId}.${i}`),
                value: {
                    url: url,
                    byteLimit: discoverLinkByteLimit
                }
            }, console.log);
            break;
        case 'android':
            getUrlLead(url, discoverLinkByteLimit, function onSuccess(ignore, result) {
                result.messageId = parseFloat(`${targetMessageElDataId}.${i}`);
                window.onLinkDiscovered(result);
            });
            break;
        default:
            void 0;
        }
    }
    function loadFileSync(path) {
        let result = false;
        function reqListener() {
            result = this.responseText;
        }
        let oReq = new XMLHttpRequest();
        oReq.onload = reqListener;
        oReq.open('get', path, false);
        oReq.send();
        return result;
    }
    function copyTextToClipboard(text) {

        if (apiType === 'ios') {
            window.oprt.messages.sendMessage({
                type: 'COPY_TO_CLIPBOARD',
                text: text
            }, function (e) {
                void 0;
            });
        } else if (window.Neon && Neon.copyTextToClipboard) {
            Neon.copyTextToClipboard(text);
        } else {
            let textFieldEl = document.createElement('textarea');
            textFieldEl.value = text;
            document.body.appendChild(textFieldEl);
            textFieldEl.select();
            document.execCommand('copy');
            textFieldEl.remove();
        }
    }
    function abortUpload(id) {
        namespace.chat.getMessageEl(id).aborted = true;
        removeUploadDownloadId(id);
        switch (apiType) {
        case 'ios':
            sendToBackgroundWorker({type:"ANALYTICS_EVENT", name: "FlowSendFileAbort"});
        case 'desktop':
            sendToBackgroundWorker({
                type: 'CANCEL_SEND_FILE',
                messageId: id
            });
            break;
        case 'android':
            Neon.abortUpload(id);
            break;
        default:
            void 0;
        }
    }

    function desktopSaveFileFromBase64(base64content, fileName) {
        const a = window.document.createElement('a');
        a.href = window.URL.createObjectURL(
            new Blob(
                [new Uint8Array(base64js.toByteArray(base64content))],
                {type: 'application/octet-stream'}
            )
        );
        a.download = fileName;
        a.click();
    }

    function onDownloadFileStarted(callbackValue) {
        if (apiType === 'ios') { sendToBackgroundWorker({type:"ANALYTICS_EVENT", name: "FlowDownloadFile"}); }
        namespace.chat.onDownloadFileStarted(callbackValue);
    }
    function onDownloadFileProgress(callbackValue, downloaded, knownSize) {
        namespace.chat.onDownloadFileProgress(callbackValue, downloaded, knownSize);
    }
    function onDownloadFileSuccess(callbackValue, localFileName, requestData) {
        if (apiType === 'ios') { sendToBackgroundWorker({type:"ANALYTICS_EVENT", name: "FlowDownloadFileFinished"}); }
        removeUploadDownloadId(callbackValue);
        namespace.chat.onDownloadFileSuccess(callbackValue, localFileName, requestData);
    }

    function download(messageId) {
        void 0;
        function desktopDownload(id, url, fileName, iv) {
            void 0;
            sendToBackgroundWorker({
                id: id,
                messageId: id,
                type: 'DOWNLOAD_FILE',
                url: url,
                name: fileName,
                iv: iv
            });
        }
        let messageEl;
        switch (apiType) {
        case 'desktop':
        case 'ios':
            messageEl = namespace.chat.getMessageEl(messageId);
            onDownloadFileStarted(messageId);
            desktopDownload(messageId, messageEl.dataset.content_url, messageEl.dataset.name, messageEl.dataset.iv);
            break;
        case 'android':
            void 0;
            Neon.downloadFileForMessage(parseInt(messageId, 10), messageId);
            break;
        default:
            void 0;
        }
    }
    function onDownloadFileError(callbackValue, error) {
        if (apiType === 'ios' && !namespace.chat.getMessageEl(callbackValue).aborted) {
            sendToBackgroundWorker({type:"ANALYTICS_EVENT", name: "FlowDownloadFileFailed"});
        }
        removeUploadDownloadId(callbackValue);
        namespace.chat.onDownloadFileError(callbackValue, error);
    }

    function open(messageId, fileName, mimetype) {
        void 0;
        switch (apiType) {
        case 'ios':
        case 'desktop':
            sendToBackgroundWorker({
                id: messageId,
                messageId: messageId,
                type: 'OPEN_FILE', 
                localFileName: fileName
            });
            break;
        case 'android':
            void 0;
            Neon.openFileMessage(parseInt(messageId, 10), messageId);
            break;
        default:
            void 0;
        }

    }

    function show(messageId, fileName, mimetype) {
        void 0;
        switch (apiType) {
        case 'desktop':
        case 'ios':
            sendToBackgroundWorker({
                id: messageId,
                messageId: messageId,
                type: 'SHOW_FILE', 
                localFileName: fileName
            });
            break;
        case 'android':
            void 0;
            Neon.openFileMessage(parseInt(messageId, 10), messageId);
            break;
        default:
            void 0;
        }

    }

    function isCurrentlyDownloading(messageId) {
        switch (apiType) {
        case 'desktop':
        case 'ios':
            sendToBackgroundWorker({
                id: messageId,
                messageId: messageId,
                type: 'IS_CURRENTLY_DOWNLOADING',
            });
            break;
        case 'android':
            Neon.isCurrentlyDownloading(messageId, `oneApiService.neonCallbackIdWrapperDownload("${messageId}")`);
            break;
        default:
            void 0;
        }
    }

    function neonCallbackIdWrapperDownload(id) {
        return function(value) {
            onIsCurrentlyDownloading(id, value === "true");
        }
    }

    function onIsCurrentlyDownloading(messageId, value) {
        if (value) {
            namespace.chat.addMessages(window.uploadDownloadCache[messageId]);
        } else {
            removeUploadDownloadId(messageId);
        }
    }

    function isCurrentlyUploading(messageId) {
        switch (apiType) {
        case 'desktop':
        case 'ios':
            sendToBackgroundWorker({
                id: messageId,
                messageId: messageId,
                type: 'IS_CURRENTLY_UPLOADING',
            });
            break;
        case 'android':
            Neon.isCurrentlyUploading(messageId, `oneApiService.neonCallbackIdWrapperUpload("${messageId}")`);
            break;
        default:
            void 0;
        }
    }

    function neonCallbackIdWrapperUpload(id) {
        return function(value) {
            onIsCurrentlyUploading(id, value === "true");
        }
    }

    function onIsCurrentlyUploading(messageId, value) {
        if (value) {
            namespace.chat.addMessages(window.uploadDownloadCache[messageId]);
        } else {
            removeUploadDownloadId(messageId);
        }
    }

    function removeUploadDownloadId(id) {
        if (window.uploadDownloadCache[id]) {
            delete window.uploadDownloadCache[id];
            localStorage.uploadDownloadCache = JSON.stringify(window.uploadDownloadCache);
        }
    }

    function onFileOpenFailed(callbackValue, id) {
        void 0;
    }

    function abortDownload(id) {
        namespace.chat.getMessageEl(id).aborted = true;
        removeUploadDownloadId(id);
        switch (apiType) {
        case 'ios':
            sendToBackgroundWorker({type:"ANALYTICS_EVENT", name: "FlowDownloadFileAbort"});
        case 'desktop':
            void 0;
            sendToBackgroundWorker({
                type: 'CANCEL_DOWNLOAD_FILE',
                messageId: id
            });
            break;
        case 'android':
            void 0;
            Neon.abortFileMessageDownload(id);
            break;
        default:
            void 0;
        }
    }

    const getFilePreviewCallbacks = {};
    function onFilePreviewResult(callbackValue, preview) {
        callbackValue = String(callbackValue);
        if (typeof getFilePreviewCallbacks[callbackValue] === 'function') {
            getFilePreviewCallbacks[callbackValue](preview);
        }
    }

    function getFilePreview(id, fileName, width, height, callback) {
        id = parseInt(id, 10);
        getFilePreviewCallbacks[id] = callback;
        switch (apiType) {
        case 'desktop':
        case 'ios':
            sendToBackgroundWorker({
                id: id,
                messageId: id,
                type: 'GET_THUMBNAIL_IMAGE',
                width: width,
                height: height,
                localFileName: fileName
            });
            break;
        case 'android':
            Neon.getFilePreview(id, width, height, String(id));
            break;
        default:
        }
    }
    let service = {
        sendObjMessage: sendObjMessage,
        sendTextMessage: sendTextMessage,
        initSendFile: initSendFile,
        abortUpload: abortUpload,
        abortDownload: abortDownload,
        getMessagesOld: getMessagesOld,
        getMessagesNew: getMessagesNew,
        deleteMessage: deleteMessage,
        download: download,
        open: open,
        show: show,
        isCurrentlyDownloading,
        isCurrentlyUploading,
        desktopSendFile: desktopSendFile,
        retryUpload: retryUpload,
        getFilePreview: getFilePreview,
        onFilePreviewResult: onFilePreviewResult,
        onSendFileStarted: onSendFileStarted,
        onSendMessageSuccess: onSendMessageSuccess,
        onSendMessageError: onSendMessageError,
        onSendFileProgress: onSendFileProgress,
        onSendFileSuccess: onSendFileSuccess,
        onSendFileError: onSendFileError,
        onIsCurrentlyDownloading,
        onIsCurrentlyUploading,
        neonCallbackIdWrapperDownload,
        neonCallbackIdWrapperUpload,
        onFileOpenFailed: onFileOpenFailed,
        onDeleteMessageError: onDeleteMessageError,

        onDownloadFileStarted: onDownloadFileStarted,
        onDownloadFileProgress: onDownloadFileProgress,
        onDownloadFileSuccess: onDownloadFileSuccess,
        onDownloadFileError: onDownloadFileError,

        desktopSaveFileFromBase64: desktopSaveFileFromBase64,
        discoverLink: discoverLink,
        showToast: namespace.showToast,
        loadFileSyn: loadFileSync,
        copyTextToClipboard: copyTextToClipboard
    };
    namespace.oneApiService = service;
    return service;
}
window.initOneApiService = initOneApiService;


function initTranslate(namespace, lang, onInit) {
    'use strict';
    function fetchLocal(url) {
        return new Promise(function (resolve, reject) {
            let xhr = new XMLHttpRequest();
            xhr.onload = function () {
                resolve(new Response(xhr.responseText, {status: xhr.status}));
            };
            xhr.onerror = function () {
                reject(new TypeError('Local request failed'));
            };
            xhr.open('GET', url);
            xhr.send(null);
        });
    }
    let fetchFile = fetch;
    if (namespace.isAndroid) {
        fetchFile = fetchLocal;
    }

    function translationsPromose(language) {
        return new Promise(function (resolve) {
            fetchFile(`${FLOW_OPERA_CDN}translations/${language}/strings${FLOW_BUILD_ID}.json`)
                .then((resp) => resp.json())
                .then(resolve)
                .catch(function () {
                    language = String(language).substring(0, 2);
                    fetchFile(`${FLOW_OPERA_CDN}translations/${language}/strings${FLOW_BUILD_ID}.json`)
                        .then((resp) => resp.json())
                        .then(resolve)
                        .catch(function () {
                            language = 'en';
                            fetchFile(`${FLOW_OPERA_CDN}translations/${language}/strings${FLOW_BUILD_ID}.json`)
                                .then((resp) => resp.json())
                                .then(resolve)
                                .catch(function () {
                                    resolve({strings: []});
                                });
                        });
                });
        });
    }
    translationsPromose(lang).then(function (translations) {
        const cleanTranslationsStrings = [];
        translations.strings.forEach(function (translation) {
            const decodeId = String(translation.id).match(/^([^_@]+)(@([^_]+))?(_(.+))?/);
            const cleanId = String(decodeId[1]);
            const cleanOs = String(decodeId[3]);
            const cleanVer = parseInt(decodeId[5], 10) || 0;
            const cleanTranslation = Object.assign({}, translation, {
                id: cleanId,
                ver: cleanVer,
                os: cleanOs
            });
            cleanTranslationsStrings.push(cleanTranslation);
        });
        const os = (window.navigator.platform === 'MacIntel')
            ? 'mac'
            : 'pc';
        window.document.body.classList.add(os);
        cleanTranslationsStrings.sort(function (a, b) {
            if (os === a.os && os !== b.os) {
                return -1;
            }
            if (os !== a.os && os === b.os) {
                return 1;
            }

            if (a.ver > b.ver) {
                return -1;
            }
            if (a.ver < b.ver) {
                return 1;
            }
        });

        translations.strings = cleanTranslationsStrings;

        function getTranslationStringByKey(key) {
            let translation = translations.strings.find(function (translation) {
                return translation.id === key;
            });
            return translation && translation.string;
        }
        function getAllTranslationStrings() {
            let translationStrings = {};
            translations.strings.map(function (translation) {
                translationStrings[translation.id] = translation.string;
            });
            return translationStrings;
        }

        function _T(key, magicDefault, ...extras) {
            const [extra1, extra2, extra3] = extras.map(html.escape);
            let translationString = getTranslationStringByKey(key);
            if (translationString) {
                return translationString.replace('$extra1', extra1)
                    .replace('$extra2', extra2)
                    .replace('$extra3', extra3);
            }
            if (typeof magicDefault === 'function') {
                return magicDefault(extra1, extra2, extra3);
            }
            if (magicDefault) {
                return magicDefault;
            }
            return key;
        }

        const days = [
            _T('date-dayoftheweek-0', 'Sunday'), _T('date-dayoftheweek-1', 'Monday'),
            _T('date-dayoftheweek-2', 'Tuesday'),
            _T('date-dayoftheweek-3', 'Wednesday'),
            _T('date-dayoftheweek-4', 'Thursday'), _T('date-dayoftheweek-5', 'Friday'),
            _T('date-dayoftheweek-6', 'Saturday')
        ];
        const months = [
            _T('date-month-1', 'January'), _T('date-month-2', 'February'),
            _T('date-month-3', 'March'), _T('date-month-4', 'April'),
            _T('date-month-5', 'May'), _T('date-month-6', 'June'),
            _T('date-month-7', 'July'), _T('date-month-8', 'August'),
            _T('date-month-9', 'September'), _T('date-month-10', 'October'),
            _T('date-month-11', 'November'), _T('date-month-12', 'December')
        ];

        function translateHtml(rootNode, translations) {
            Object.keys(translations).forEach(function (key) {
                Array.prototype.slice
                    .call(rootNode.querySelectorAll(`[data-translate-id='${key}']`))
                    .forEach(function (el) {
                        if (el.dataset.translateUnsafe) {
                            el.innerHTML = Sanitizer.escapeHTML`${_T(key)}`;
                        } else {
                            el.textContent = _T(key);
                        }
                    });
            });
        }
        translateHtml(document, getAllTranslationStrings());
        document.title = _T('app-title', 'My Flow');

        function humanFriendlyDatetime(timestampms) {
            let now = new Date();
            let date = new Date(parseInt(timestampms));
            let result = timestampms;
            if (now.toLocaleDateString() === date.toLocaleDateString()) {
                result = date.toLocaleTimeString(undefined, {
                    hour: 'numeric',
                    minute: '2-digit',
                    pattern: '{hour}:{minute}',
                    pattern12: '{hour}:{minute} {ampm}'
                });
            } else {
                if (now.getFullYear() === date.getFullYear()) {
                    result = date.toLocaleString(undefined, {
                        hour: 'numeric',
                        minute: '2-digit',
                        month: 'long',
                        day: 'numeric',
                        pattern: '{month}, {day} {hour}:{minute}',
                        pattern12: '{month}, {day} {hour}:{minute} {ampm}'
                    });
                } else {
                    result = date.toLocaleString(undefined, {
                        hour: 'numeric',
                        minute: '2-digit',
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                        pattern: '{year}, {month}, {day} {hour}:{minute}',
                        pattern12: '{year}, {month}, {day} {hour}:{minute} {ampm}'
                    });
                }
            }
            return result;
        }
        function userDatetime(date) {
            return `${days[date.getDay()]} , ${months[date.getMonth()]} ${date.getDate()}`;
        }
        function updateDatetimeTagForElement(element) {
            const now = Date.now();
	    let timestamp = element.dataset.timestamp;
	    let expires = element.dataset.expires;
	    if (timestamp) {
		if (element.classList.contains("expires")) {
		    if (now > +expires) {
			element.textContent = `${_T('file-expired', 'Expired:')} ${humanFriendlyDatetime(expires)}`;
		    } else {
			element.textContent = `${_T('file-expires', 'Expires:')} ${humanFriendlyDatetime(expires)}`;
		    }
		} else {
		    element.textContent = humanFriendlyDatetime(timestamp);
		}
	    }
	}
        function updateDatetimeTags(querySelector) {
            Array.prototype.slice.call(document.querySelectorAll(querySelector))
                .forEach(updateDatetimeTagForElement);
        }

        function getHours(date) {
            return String(`${date.getHours() % 12}`).slice(-2);
        }
        function getMinutes(date) {
            return String(`0${date.getMinutes()}`).slice(-2);
        }
        function temperatureCtoF(c) {
            return c * 9 / 5 + 32;
        }
        function getUsTime(date) {
            return date.getHours() >= 12
                ? 'pm'
                : 'am';
        }
        function userWather(weather, temperature, temperatureUnit) {
            if (String(temperatureUnit).toUpperCase() === 'C') {
                temperature = temperatureCtoF(temperature);
                temperatureUnit = 'F';
            }
            return `${weather} ${temperature} Â°${temperatureUnit}`;
        }

        function fileProgress(loaded, bytes) {
            let result = '';
            let sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
            let i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
            let complette = Math.round(loaded * 100 / Math.pow(1024, i)) / 100;
            let total = Math.round(bytes * 100 / Math.pow(1024, i)) / 100;

            result += `${(complette).toFixed(2)} / ${(total).toFixed(2)} ${sizes[i]}`;
            return result;
        }

        function bytesToSize(bytes, noSuffix) {
            let result = '';
            let sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
            if (!bytes) {
                bytes = '0';
            }
            let i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
            result = parseFloat(Math.round(bytes * 100 / Math.pow(1024, i)) / 100).toFixed(2);
            if (!noSuffix) {
                result += ` ${sizes[i]}`;
            }
            return result;
        }

        let translate = {
            translations,
            t: _T,
            bytesToSize,
            fileProgress,
            updateDatetimeTags,
            updateDatetimeTagForElement,
            getHours,
            getMinutes,
            getUsTime,
            userDatetime,
            humanFriendlyDatetime,
            userWather,
            translateHtml: function () {
                translateHtml(document, getAllTranslationStrings());
            }
        };
        namespace.translate = translate; 
        onInit(translate);
        return translate;
    });
}

namespace.initTranslate = initTranslate;

window.pair_new_device_mock = {
    authentication_string: null,
    created_at: null,
    group_id: 'init-group-id',
    id: 'pair-new-id',
    kind: (window.isMobile)
        ? 'init-mobile'
        : 'init-desktop',
    name: '',
    description: '&nbsp;',
    action: 'add-new-device',
    public_key: '-init-pk-'
};

window.init_device_mock = {
    authentication_string: null,
    created_at: null,
    group_id: 'init-group-id',
    id: 'init-id',
    kind: (window.isMobile)
        ? 'init-mobile'
        : 'init-desktop',
    name: 'INIT DEVICE',
    public_key: '-init-pk-'
};

window.clean_profile_message_mock = {
    type: 'divider',
    text: '--- Clean profile ---'
};

window.welcome_today_message_mock = {
    type: 'divider',
    text: `Welcome today ${new Date().toISOString().substring(0, 16).replace('T', ' ')} UTC`
};
window.device_connected_message_mock = {
    sender: 'desktop-script',
    type: 'status', 
    role: 'info',
    title: '',
    text: '',
    description: '',
    time: new Date().toISOString().substring(0, 16).replace('T', ' ')
};

window.device_disconnected_message_mock = {
    sender: 'desktop-script',
    type: 'status', 
    role: 'info',
    title: '',
    text: '',
    description: '',
    time: new Date().toISOString().substring(0, 16).replace('T', ' ')
};

var QRCode;!function(){function a(a){this.mode=c.MODE_8BIT_BYTE,this.data=a,this.parsedData=[];for(var b=[],d=0,e=this.data.length;e>d;d++){var f=this.data.charCodeAt(d);f>65536?(b[0]=240|(1835008&f)>>>18,b[1]=128|(258048&f)>>>12,b[2]=128|(4032&f)>>>6,b[3]=128|63&f):f>2048?(b[0]=224|(61440&f)>>>12,b[1]=128|(4032&f)>>>6,b[2]=128|63&f):f>128?(b[0]=192|(1984&f)>>>6,b[1]=128|63&f):b[0]=f,this.parsedData=this.parsedData.concat(b)}this.parsedData.length!=this.data.length&&(this.parsedData.unshift(191),this.parsedData.unshift(187),this.parsedData.unshift(239))}function b(a,b){this.typeNumber=a,this.errorCorrectLevel=b,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}function i(a,b){if(void 0==a.length)throw new Error(a.length+"/"+b);for(var c=0;c<a.length&&0==a[c];)c++;this.num=new Array(a.length-c+b);for(var d=0;d<a.length-c;d++)this.num[d]=a[d+c]}function j(a,b){this.totalCount=a,this.dataCount=b}function k(){this.buffer=[],this.length=0}function m(){return"undefined"!=typeof CanvasRenderingContext2D}function n(){var a=!1,b=navigator.userAgent;return/android/i.test(b)&&(a=!0,aMat=b.toString().match(/android ([0-9]\.[0-9])/i),aMat&&aMat[1]&&(a=parseFloat(aMat[1]))),a}function r(a,b){for(var c=1,e=s(a),f=0,g=l.length;g>=f;f++){var h=0;switch(b){case d.L:h=l[f][0];break;case d.M:h=l[f][1];break;case d.Q:h=l[f][2];break;case d.H:h=l[f][3]}if(h>=e)break;c++}if(c>l.length)throw new Error("Too long data");return c}function s(a){var b=encodeURI(a).toString().replace(/\%[0-9a-fA-F]{2}/g,"a");return b.length+(b.length!=a?3:0)}a.prototype={getLength:function(){return this.parsedData.length},write:function(a){for(var b=0,c=this.parsedData.length;c>b;b++)a.put(this.parsedData[b],8)}},b.prototype={addData:function(b){var c=new a(b);this.dataList.push(c),this.dataCache=null},isDark:function(a,b){if(0>a||this.moduleCount<=a||0>b||this.moduleCount<=b)throw new Error(a+","+b);return this.modules[a][b]},getModuleCount:function(){return this.moduleCount},make:function(){this.makeImpl(!1,this.getBestMaskPattern())},makeImpl:function(a,c){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var d=0;d<this.moduleCount;d++){this.modules[d]=new Array(this.moduleCount);for(var e=0;e<this.moduleCount;e++)this.modules[d][e]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(a,c),this.typeNumber>=7&&this.setupTypeNumber(a),null==this.dataCache&&(this.dataCache=b.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,c)},setupPositionProbePattern:function(a,b){for(var c=-1;7>=c;c++)if(!(-1>=a+c||this.moduleCount<=a+c))for(var d=-1;7>=d;d++)-1>=b+d||this.moduleCount<=b+d||(this.modules[a+c][b+d]=c>=0&&6>=c&&(0==d||6==d)||d>=0&&6>=d&&(0==c||6==c)||c>=2&&4>=c&&d>=2&&4>=d?!0:!1)},getBestMaskPattern:function(){for(var a=0,b=0,c=0;8>c;c++){this.makeImpl(!0,c);var d=f.getLostPoint(this);(0==c||a>d)&&(a=d,b=c)}return b},createMovieClip:function(a,b,c){var d=a.createEmptyMovieClip(b,c),e=1;this.make();for(var f=0;f<this.modules.length;f++)for(var g=f*e,h=0;h<this.modules[f].length;h++){var i=h*e,j=this.modules[f][h];j&&(d.beginFill(0,100),d.moveTo(i,g),d.lineTo(i+e,g),d.lineTo(i+e,g+e),d.lineTo(i,g+e),d.endFill())}return d},setupTimingPattern:function(){for(var a=8;a<this.moduleCount-8;a++)null==this.modules[a][6]&&(this.modules[a][6]=0==a%2);for(var b=8;b<this.moduleCount-8;b++)null==this.modules[6][b]&&(this.modules[6][b]=0==b%2)},setupPositionAdjustPattern:function(){for(var a=f.getPatternPosition(this.typeNumber),b=0;b<a.length;b++)for(var c=0;c<a.length;c++){var d=a[b],e=a[c];if(null==this.modules[d][e])for(var g=-2;2>=g;g++)for(var h=-2;2>=h;h++)this.modules[d+g][e+h]=-2==g||2==g||-2==h||2==h||0==g&&0==h?!0:!1}},setupTypeNumber:function(a){for(var b=f.getBCHTypeNumber(this.typeNumber),c=0;18>c;c++){var d=!a&&1==(1&b>>c);this.modules[Math.floor(c/3)][c%3+this.moduleCount-8-3]=d}for(var c=0;18>c;c++){var d=!a&&1==(1&b>>c);this.modules[c%3+this.moduleCount-8-3][Math.floor(c/3)]=d}},setupTypeInfo:function(a,b){for(var c=this.errorCorrectLevel<<3|b,d=f.getBCHTypeInfo(c),e=0;15>e;e++){var g=!a&&1==(1&d>>e);6>e?this.modules[e][8]=g:8>e?this.modules[e+1][8]=g:this.modules[this.moduleCount-15+e][8]=g}for(var e=0;15>e;e++){var g=!a&&1==(1&d>>e);8>e?this.modules[8][this.moduleCount-e-1]=g:9>e?this.modules[8][15-e-1+1]=g:this.modules[8][15-e-1]=g}this.modules[this.moduleCount-8][8]=!a},mapData:function(a,b){for(var c=-1,d=this.moduleCount-1,e=7,g=0,h=this.moduleCount-1;h>0;h-=2)for(6==h&&h--;;){for(var i=0;2>i;i++)if(null==this.modules[d][h-i]){var j=!1;g<a.length&&(j=1==(1&a[g]>>>e));var k=f.getMask(b,d,h-i);k&&(j=!j),this.modules[d][h-i]=j,e--,-1==e&&(g++,e=7)}if(d+=c,0>d||this.moduleCount<=d){d-=c,c=-c;break}}}},b.PAD0=236,b.PAD1=17,b.createData=function(a,c,d){for(var e=j.getRSBlocks(a,c),g=new k,h=0;h<d.length;h++){var i=d[h];g.put(i.mode,4),g.put(i.getLength(),f.getLengthInBits(i.mode,a)),i.write(g)}for(var l=0,h=0;h<e.length;h++)l+=e[h].dataCount;if(g.getLengthInBits()>8*l)throw new Error("code length overflow. ("+g.getLengthInBits()+">"+8*l+")");for(g.getLengthInBits()+4<=8*l&&g.put(0,4);0!=g.getLengthInBits()%8;)g.putBit(!1);for(;;){if(g.getLengthInBits()>=8*l)break;if(g.put(b.PAD0,8),g.getLengthInBits()>=8*l)break;g.put(b.PAD1,8)}return b.createBytes(g,e)},b.createBytes=function(a,b){for(var c=0,d=0,e=0,g=new Array(b.length),h=new Array(b.length),j=0;j<b.length;j++){var k=b[j].dataCount,l=b[j].totalCount-k;d=Math.max(d,k),e=Math.max(e,l),g[j]=new Array(k);for(var m=0;m<g[j].length;m++)g[j][m]=255&a.buffer[m+c];c+=k;var n=f.getErrorCorrectPolynomial(l),o=new i(g[j],n.getLength()-1),p=o.mod(n);h[j]=new Array(n.getLength()-1);for(var m=0;m<h[j].length;m++){var q=m+p.getLength()-h[j].length;h[j][m]=q>=0?p.get(q):0}}for(var r=0,m=0;m<b.length;m++)r+=b[m].totalCount;for(var s=new Array(r),t=0,m=0;d>m;m++)for(var j=0;j<b.length;j++)m<g[j].length&&(s[t++]=g[j][m]);for(var m=0;e>m;m++)for(var j=0;j<b.length;j++)m<h[j].length&&(s[t++]=h[j][m]);return s};for(var c={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},d={L:1,M:0,Q:3,H:2},e={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},f={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(a){for(var b=a<<10;f.getBCHDigit(b)-f.getBCHDigit(f.G15)>=0;)b^=f.G15<<f.getBCHDigit(b)-f.getBCHDigit(f.G15);return(a<<10|b)^f.G15_MASK},getBCHTypeNumber:function(a){for(var b=a<<12;f.getBCHDigit(b)-f.getBCHDigit(f.G18)>=0;)b^=f.G18<<f.getBCHDigit(b)-f.getBCHDigit(f.G18);return a<<12|b},getBCHDigit:function(a){for(var b=0;0!=a;)b++,a>>>=1;return b},getPatternPosition:function(a){return f.PATTERN_POSITION_TABLE[a-1]},getMask:function(a,b,c){switch(a){case e.PATTERN000:return 0==(b+c)%2;case e.PATTERN001:return 0==b%2;case e.PATTERN010:return 0==c%3;case e.PATTERN011:return 0==(b+c)%3;case e.PATTERN100:return 0==(Math.floor(b/2)+Math.floor(c/3))%2;case e.PATTERN101:return 0==b*c%2+b*c%3;case e.PATTERN110:return 0==(b*c%2+b*c%3)%2;case e.PATTERN111:return 0==(b*c%3+(b+c)%2)%2;default:throw new Error("bad maskPattern:"+a)}},getErrorCorrectPolynomial:function(a){for(var b=new i([1],0),c=0;a>c;c++)b=b.multiply(new i([1,g.gexp(c)],0));return b},getLengthInBits:function(a,b){if(b>=1&&10>b)switch(a){case c.MODE_NUMBER:return 10;case c.MODE_ALPHA_NUM:return 9;case c.MODE_8BIT_BYTE:return 8;case c.MODE_KANJI:return 8;default:throw new Error("mode:"+a)}else if(27>b)switch(a){case c.MODE_NUMBER:return 12;case c.MODE_ALPHA_NUM:return 11;case c.MODE_8BIT_BYTE:return 16;case c.MODE_KANJI:return 10;default:throw new Error("mode:"+a)}else{if(!(41>b))throw new Error("type:"+b);switch(a){case c.MODE_NUMBER:return 14;case c.MODE_ALPHA_NUM:return 13;case c.MODE_8BIT_BYTE:return 16;case c.MODE_KANJI:return 12;default:throw new Error("mode:"+a)}}},getLostPoint:function(a){for(var b=a.getModuleCount(),c=0,d=0;b>d;d++)for(var e=0;b>e;e++){for(var f=0,g=a.isDark(d,e),h=-1;1>=h;h++)if(!(0>d+h||d+h>=b))for(var i=-1;1>=i;i++)0>e+i||e+i>=b||(0!=h||0!=i)&&g==a.isDark(d+h,e+i)&&f++;f>5&&(c+=3+f-5)}for(var d=0;b-1>d;d++)for(var e=0;b-1>e;e++){var j=0;a.isDark(d,e)&&j++,a.isDark(d+1,e)&&j++,a.isDark(d,e+1)&&j++,a.isDark(d+1,e+1)&&j++,(0==j||4==j)&&(c+=3)}for(var d=0;b>d;d++)for(var e=0;b-6>e;e++)a.isDark(d,e)&&!a.isDark(d,e+1)&&a.isDark(d,e+2)&&a.isDark(d,e+3)&&a.isDark(d,e+4)&&!a.isDark(d,e+5)&&a.isDark(d,e+6)&&(c+=40);for(var e=0;b>e;e++)for(var d=0;b-6>d;d++)a.isDark(d,e)&&!a.isDark(d+1,e)&&a.isDark(d+2,e)&&a.isDark(d+3,e)&&a.isDark(d+4,e)&&!a.isDark(d+5,e)&&a.isDark(d+6,e)&&(c+=40);for(var k=0,e=0;b>e;e++)for(var d=0;b>d;d++)a.isDark(d,e)&&k++;var l=Math.abs(100*k/b/b-50)/5;return c+=10*l}},g={glog:function(a){if(1>a)throw new Error("glog("+a+")");return g.LOG_TABLE[a]},gexp:function(a){for(;0>a;)a+=255;for(;a>=256;)a-=255;return g.EXP_TABLE[a]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},h=0;8>h;h++)g.EXP_TABLE[h]=1<<h;for(var h=8;256>h;h++)g.EXP_TABLE[h]=g.EXP_TABLE[h-4]^g.EXP_TABLE[h-5]^g.EXP_TABLE[h-6]^g.EXP_TABLE[h-8];for(var h=0;255>h;h++)g.LOG_TABLE[g.EXP_TABLE[h]]=h;i.prototype={get:function(a){return this.num[a]},getLength:function(){return this.num.length},multiply:function(a){for(var b=new Array(this.getLength()+a.getLength()-1),c=0;c<this.getLength();c++)for(var d=0;d<a.getLength();d++)b[c+d]^=g.gexp(g.glog(this.get(c))+g.glog(a.get(d)));return new i(b,0)},mod:function(a){if(this.getLength()-a.getLength()<0)return this;for(var b=g.glog(this.get(0))-g.glog(a.get(0)),c=new Array(this.getLength()),d=0;d<this.getLength();d++)c[d]=this.get(d);for(var d=0;d<a.getLength();d++)c[d]^=g.gexp(g.glog(a.get(d))+b);return new i(c,0).mod(a)}},j.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],j.getRSBlocks=function(a,b){var c=j.getRsBlockTable(a,b);if(void 0==c)throw new Error("bad rs block @ typeNumber:"+a+"/errorCorrectLevel:"+b);for(var d=c.length/3,e=[],f=0;d>f;f++)for(var g=c[3*f+0],h=c[3*f+1],i=c[3*f+2],k=0;g>k;k++)e.push(new j(h,i));return e},j.getRsBlockTable=function(a,b){switch(b){case d.L:return j.RS_BLOCK_TABLE[4*(a-1)+0];case d.M:return j.RS_BLOCK_TABLE[4*(a-1)+1];case d.Q:return j.RS_BLOCK_TABLE[4*(a-1)+2];case d.H:return j.RS_BLOCK_TABLE[4*(a-1)+3];default:return void 0}},k.prototype={get:function(a){var b=Math.floor(a/8);return 1==(1&this.buffer[b]>>>7-a%8)},put:function(a,b){for(var c=0;b>c;c++)this.putBit(1==(1&a>>>b-c-1))},getLengthInBits:function(){return this.length},putBit:function(a){var b=Math.floor(this.length/8);this.buffer.length<=b&&this.buffer.push(0),a&&(this.buffer[b]|=128>>>this.length%8),this.length++}};var l=[[17,14,11,7],[32,26,20,14],[53,42,32,24],[78,62,46,34],[106,84,60,44],[134,106,74,58],[154,122,86,64],[192,152,108,84],[230,180,130,98],[271,213,151,119],[321,251,177,137],[367,287,203,155],[425,331,241,177],[458,362,258,194],[520,412,292,220],[586,450,322,250],[644,504,364,280],[718,560,394,310],[792,624,442,338],[858,666,482,382],[929,711,509,403],[1003,779,565,439],[1091,857,611,461],[1171,911,661,511],[1273,997,715,535],[1367,1059,751,593],[1465,1125,805,625],[1528,1190,868,658],[1628,1264,908,698],[1732,1370,982,742],[1840,1452,1030,790],[1952,1538,1112,842],[2068,1628,1168,898],[2188,1722,1228,958],[2303,1809,1283,983],[2431,1911,1351,1051],[2563,1989,1423,1093],[2699,2099,1499,1139],[2809,2213,1579,1219],[2953,2331,1663,1273]],o=function(){var a=function(a,b){this._el=a,this._htOption=b};return a.prototype.draw=function(a){function g(a,b){var c=document.createElementNS("http://www.w3.org/2000/svg",a);for(var d in b)b.hasOwnProperty(d)&&c.setAttribute(d,b[d]);return c}var b=this._htOption,c=this._el,d=a.getModuleCount();Math.floor(b.width/d),Math.floor(b.height/d),this.clear();var h=g("svg",{viewBox:"0 0 "+String(d)+" "+String(d),width:"100%",height:"100%",fill:b.colorLight});h.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:xlink","http://www.w3.org/1999/xlink"),c.appendChild(h),h.appendChild(g("rect",{fill:b.colorDark,width:"1",height:"1",id:"template"}));for(var i=0;d>i;i++)for(var j=0;d>j;j++)if(a.isDark(i,j)){var k=g("use",{x:String(i),y:String(j)});k.setAttributeNS("http://www.w3.org/1999/xlink","href","#template"),h.appendChild(k)}},a.prototype.clear=function(){for(;this._el.hasChildNodes();)this._el.removeChild(this._el.lastChild)},a}(),p="svg"===document.documentElement.tagName.toLowerCase(),q=p?o:m()?function(){function a(){this._elImage.src=this._elCanvas.toDataURL("image/png"),this._elImage.style.display="block",this._elCanvas.style.display="none"}function d(a,b){var c=this;if(c._fFail=b,c._fSuccess=a,null===c._bSupportDataURI){var d=document.createElement("img"),e=function(){c._bSupportDataURI=!1,c._fFail&&_fFail.call(c)},f=function(){c._bSupportDataURI=!0,c._fSuccess&&c._fSuccess.call(c)};return d.onabort=e,d.onerror=e,d.onload=f,d.src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==",void 0}c._bSupportDataURI===!0&&c._fSuccess?c._fSuccess.call(c):c._bSupportDataURI===!1&&c._fFail&&c._fFail.call(c)}if(this._android&&this._android<=2.1){var b=1/window.devicePixelRatio,c=CanvasRenderingContext2D.prototype.drawImage;CanvasRenderingContext2D.prototype.drawImage=function(a,d,e,f,g,h,i,j){if("nodeName"in a&&/img/i.test(a.nodeName))for(var l=arguments.length-1;l>=1;l--)arguments[l]=arguments[l]*b;else"undefined"==typeof j&&(arguments[1]*=b,arguments[2]*=b,arguments[3]*=b,arguments[4]*=b);c.apply(this,arguments)}}var e=function(a,b){this._bIsPainted=!1,this._android=n(),this._htOption=b,this._elCanvas=document.createElement("canvas"),this._elCanvas.width=b.width,this._elCanvas.height=b.height,a.appendChild(this._elCanvas),this._el=a,this._oContext=this._elCanvas.getContext("2d"),this._bIsPainted=!1,this._elImage=document.createElement("img"),this._elImage.style.display="none",this._el.appendChild(this._elImage),this._bSupportDataURI=null};return e.prototype.draw=function(a){var b=this._elImage,c=this._oContext,d=this._htOption,e=a.getModuleCount(),f=d.width/e,g=d.height/e,h=Math.round(f),i=Math.round(g);b.style.display="none",this.clear();for(var j=0;e>j;j++)for(var k=0;e>k;k++){var l=a.isDark(j,k),m=k*f,n=j*g;c.strokeStyle=l?d.colorDark:d.colorLight,c.lineWidth=1,c.fillStyle=l?d.colorDark:d.colorLight,c.fillRect(m,n,f,g),c.strokeRect(Math.floor(m)+.5,Math.floor(n)+.5,h,i),c.strokeRect(Math.ceil(m)-.5,Math.ceil(n)-.5,h,i)}this._bIsPainted=!0},e.prototype.makeImage=function(){this._bIsPainted&&d.call(this,a)},e.prototype.isPainted=function(){return this._bIsPainted},e.prototype.clear=function(){this._oContext.clearRect(0,0,this._elCanvas.width,this._elCanvas.height),this._bIsPainted=!1},e.prototype.round=function(a){return a?Math.floor(1e3*a)/1e3:a},e}():function(){var a=function(a,b){this._el=a,this._htOption=b};return a.prototype.draw=function(a){for(var b=this._htOption,c=this._el,d=a.getModuleCount(),e=Math.floor(b.width/d),f=Math.floor(b.height/d),g=['<table style="border:0;border-collapse:collapse;">'],h=0;d>h;h++){g.push("<tr>");for(var i=0;d>i;i++)g.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:'+e+"px;height:"+f+"px;background-color:"+(a.isDark(h,i)?b.colorDark:b.colorLight)+';"></td>');g.push("</tr>")}g.push("</table>"),c.innerHTML=g.join("");var j=c.childNodes[0],k=(b.width-j.offsetWidth)/2,l=(b.height-j.offsetHeight)/2;k>0&&l>0&&(j.style.margin=l+"px "+k+"px")},a.prototype.clear=function(){this._el.innerHTML=""},a}();QRCode=function(a,b){if(this._htOption={width:256,height:256,typeNumber:4,colorDark:"#000000",colorLight:"#ffffff",correctLevel:d.H},"string"==typeof b&&(b={text:b}),b)for(var c in b)this._htOption[c]=b[c];"string"==typeof a&&(a=document.getElementById(a)),this._android=n(),this._el=a,this._oQRCode=null,this._oDrawing=new q(this._el,this._htOption),this._htOption.text&&this.makeCode(this._htOption.text)},QRCode.prototype.makeCode=function(a){this._oQRCode=new b(r(a,this._htOption.correctLevel),this._htOption.correctLevel),this._oQRCode.addData(a),this._oQRCode.make(),this._el.title=a,this._oDrawing.draw(this._oQRCode),this.makeImage()},QRCode.prototype.makeImage=function(){"function"==typeof this._oDrawing.makeImage&&(!this._android||this._android>=3)&&this._oDrawing.makeImage()},QRCode.prototype.clear=function(){this._oDrawing.clear()},QRCode.CorrectLevel=d}();

function openUrl(url) {
    'use strict';
    if (namespace.isIOS) {
        window.oprt.messages.sendMessage({
            type: 'OPEN_URL',
            url: url
        }, console.debug);
    } else if (window.Neon) {
        window.Neon.openNewTab(url);
    } else {
        Object.assign(document.createElement('a'), {target: '_blank', href: url, rel: 'noopener'}).click();
    }
    return false;
}
window.openUrl = openUrl;

function linkify(text) {
    'use strict';
    text = String(text);
    let urlRegex = /(\b(https?|ftp):\/\/([^\s])+)/ig;
    function createLink(url) {
        let oUrl = false;
        try {
            oUrl = new URL(url);
        } catch (err) {
        }
        if (oUrl && ['http:', 'https:', 'ftp:'].includes(oUrl.protocol)) {
            const aEl = document.createElement("a");
            aEl.target = "_blank";
            aEl.href = url;
            aEl.onclick = 'return openUrl(this.href)';
            aEl.textContent = url;
            return aEl.outerHTML;
        } else {
            return url;
        }
    }
    return DOMPurify.sanitize(text.replace(urlRegex, createLink));
}
window.linkify = linkify;

function listLinks(text) {
    'use strict';
    text = String(text);
    let result = false;
    let urlRegex = /(\b(https?|ftp):\/\/[^\s]+)/ig;
    try {
        result = text.match(urlRegex);
    } catch (err) {
        void 0;
    }
    let resultUnique = false;
    if (result && result.length > 0) {
        resultUnique = [];
        result.forEach(function (link) {
            if (resultUnique.indexOf(link) === -1) {
                resultUnique.push(link);
            }
        });
    }

    return resultUnique;
}
window.listLinks = listLinks;
function relUrl2absulute(baseUrl, url) {
    'use strict';
    void 0;
    try {
        url = String(url);
        if (url.substring(0, 5) === 'data:') {
            return url;
        }
        if (url.substring(0, 7) === 'file://') {
            return url;
        }
        baseUrl = String(baseUrl);
        if (url.match(/^https?:\/\//)) {
            return url;
        }
        let urlObj = new URL(baseUrl);
        if (url.substring(0, 2) === '//') {
            return `${urlObj.protocol}${url}`;
        }
        if (url.substring(0, 1) === '/') {
            return `${urlObj.origin}${url}`;
        }
        return `${baseUrl.substring(0, baseUrl.lastIndexOf('/'))}/${url}`;
    } catch (e) {
        void 0;
        return url;
    }

}
window.relUrl2absulute = relUrl2absulute;
function biteHtmlStr2richDescriptionObj(url, htmlStr, contentType) {
    'use strict';
    function get_ytMobilePlayerResponse(url, htmlStr, docEl) {
        window.htmlStr = htmlStr;
        void 0;
        let result = false;
        try {
            result = JSON.parse(JSON.parse(`"${htmlStr.match(/bootstrap_data.*/gi)[1].slice(22, -2)}"`));
        } catch (err) {
            void 0;
        }
        void 0;
        return result;
    }
    window.get_ytMobilePlayerResponse = get_ytMobilePlayerResponse;

    function get_ytMobilePlayerResponse_nu(url, htmlStr, docEl) {
        window.htmlStr = htmlStr;
        void 0;
        let result = false;
        try {
            result = JSON.parse(JSON.parse(`"${htmlStr.match(/bootstrap_data.*/gi)[1].slice(22, -2)}"`).replace(/\\U.{8}/g, ''));
        } catch (err) {
            void 0;
        }
        void 0;
        return result;
    }
    window.get_ytMobilePlayerResponse_nu = get_ytMobilePlayerResponse_nu;

    function get_ytInitialPlayerResponse(url, htmlStr, docEl) {
        let result = false;
        try {
            result = JSON.parse("{" + htmlStr.match(/ytInitialPlayerResponse"\].=.[\s\S]?([^<]+[}]);/i)[1]);
        } catch (err) {
            void 0;
        }
        return result;
    }

    let parser = new DOMParser();
    contentType = contentType.split(';')[0];

    let docEl = document.createDocumentFragment();
    const urlObj = new URL(url);

    htmlStr = htmlStr.replace(/(href\w*=\w*['"](?!http))([^'"]+)/ig,
        (ignore, startPart, url) =>
            startPart +
            (url[0] === "/" ? urlObj.origin + url : urlObj.href.replace(/[^/]+$/,""))
            + url
        );
    try {
        docEl = parser.parseFromString(htmlStr, contentType);
    } catch (err) {
        void 0;
    }
    let domain = namespace.chat.getHumainFrendlyUrlDomain(url);
    let origin = url;
    let filename = url;
    try {

        filename = (urlObj.pathname.toString().match(/[^\/].*$/))[0];
        origin = urlObj.origin;
    } catch (err3) {
        filename = false;
        void 0;
    }


    window.docEl = docEl;
    let ytInitialPlayerResponse = get_ytInitialPlayerResponse(url, htmlStr, docEl);
    let ytMobilePlayerResponse = get_ytMobilePlayerResponse(url, htmlStr, docEl);
    let ytMobilePlayerResponse_nu = get_ytMobilePlayerResponse_nu(url, htmlStr, docEl);

    void 0;
    const queryRules = {
        openUrl: [
            {type: 'value', value: url}
        ],
        domain: [
            {type: 'value', value: domain}
        ],
        title: [
            {type: 'value', value: ytMobilePlayerResponse && ytMobilePlayerResponse.content && ytMobilePlayerResponse.content.video && ytMobilePlayerResponse.content.video.title},
            {type: 'value', value: ytInitialPlayerResponse && ytInitialPlayerResponse.videoDetails && ytInitialPlayerResponse.videoDetails.title},
            {type: 'value', value: ytMobilePlayerResponse_nu && ytMobilePlayerResponse_nu.content && ytMobilePlayerResponse_nu.content.video && ytMobilePlayerResponse_nu.content.video.title},
            {type: 'querySelector', value: 'meta[property="og:title"]'},
            {type: 'querySelector', value: 'meta[name="twitter:title"]'},
            {type: 'querySelector', value: 'meta[property="twitter:title"]'},
            {type: 'querySelector', value: 'meta[name="hdl"]'},
            {type: 'querySelector', value: 'meta[property="og:title" i]'},
            {type: 'querySelector', value: 'meta[name="twitter:title" i]'},
            {type: 'querySelector', value: 'meta[property="twitter:title" i]'},
            {type: 'querySelector', value: 'meta[name="hdl" i]'},
            {type: 'querySelector', value: 'title'},
            {type: 'value', value: filename || url}
        ],
        description: [
            {type: 'value', value: ytMobilePlayerResponse && ytMobilePlayerResponse.content && ytMobilePlayerResponse.content.video_main_content && ytMobilePlayerResponse.content.video_main_content.contents && ytMobilePlayerResponse.content.video_main_content.contents[0] && ytMobilePlayerResponse.content.video_main_content.contents[0].description && ytMobilePlayerResponse.content.video_main_content.contents[0].description.runs && ytMobilePlayerResponse.content.video_main_content.contents[0].description.runs[0] && ytMobilePlayerResponse.content.video_main_content.contents[0].description.runs[0].text},
            {type: 'value', value: ytInitialPlayerResponse && ytInitialPlayerResponse.videoDetails && ytInitialPlayerResponse.videoDetails.shortDescription},
            {type: 'value', value: ytMobilePlayerResponse_nu && ytMobilePlayerResponse_nu.content && ytMobilePlayerResponse_nu.content.video_main_content && ytMobilePlayerResponse_nu.content.video_main_content.contents && ytMobilePlayerResponse_nu.content.video_main_content.contents[0] && ytMobilePlayerResponse_nu.content.video_main_content.contents[0].description && ytMobilePlayerResponse_nu.content.video_main_content.contents[0].description.runs && ytMobilePlayerResponse_nu.content.video_main_content.contents[0].description.runs[0] && ytMobilePlayerResponse_nu.content.video_main_content.contents[0].description.runs[0].text},
            {type: 'querySelector', value: 'meta[property="og:description"]'},
            {type: 'querySelector', value: 'meta[name="description"]'},
            {type: 'querySelector', value: 'meta[property="og:description" i]'},
            {type: 'querySelector', value: 'meta[name="description" i]'}
        ],
        ytVideoId: [
            {type: 'value', value: ytMobilePlayerResponse && ytMobilePlayerResponse.content && ytMobilePlayerResponse.content.video_main_content && ytMobilePlayerResponse.content.video_main_content.contents && ytMobilePlayerResponse.content.video_main_content.contents[0] && ytMobilePlayerResponse.content.video_main_content.contents[0].video_id},
            {type: 'value', value: ytInitialPlayerResponse && ytInitialPlayerResponse.videoDetails && ytInitialPlayerResponse.videoDetails.videoId},
            {type: 'value', value: ytMobilePlayerResponse_nu && ytMobilePlayerResponse_nu.content && ytMobilePlayerResponse_nu.content.video_main_content && ytMobilePlayerResponse_nu.content.video_main_content.contents && ytMobilePlayerResponse_nu.content.video_main_content.contents[0] && ytMobilePlayerResponse_nu.content.video_main_content.contents[0].video_id}
        ],
        icon: [
            {type: 'querySelector', value: 'link[rel="apple-touch-icon"]', parse: 'toAbsoluteUrl'},
            {type: 'querySelector', value: 'link[rel="apple-touch-icon-precomposed"]', parse: 'toAbsoluteUrl'},
            {type: 'querySelector', value: 'link[rel="icon"]', parse: 'toAbsoluteUrl'},
            {type: 'querySelector', value: 'link[rel="fluid-icon"]', parse: 'toAbsoluteUrl'},
            {type: 'querySelector', value: 'link[rel="shortcut icon"]', parse: 'toAbsoluteUrl'},
            {type: 'querySelector', value: 'link[rel="mask-icon"]', parse: 'toAbsoluteUrl'},
            {type: 'querySelector', value: 'link[rel="apple-touch-icon" i]', parse: 'toAbsoluteUrl'},
            {type: 'querySelector', value: 'link[rel="apple-touch-icon-precomposed" i]', parse: 'toAbsoluteUrl'},
            {type: 'querySelector', value: 'link[rel="icon" i]', parse: 'toAbsoluteUrl'},
            {type: 'querySelector', value: 'link[rel="fluid-icon" i]', parse: 'toAbsoluteUrl'},
            {type: 'querySelector', value: 'link[rel="shortcut icon" i]', parse: 'toAbsoluteUrl'},
            {type: 'querySelector', value: 'link[rel="mask-icon" i]', parse: 'toAbsoluteUrl'},
            {type: 'value', value: origin + '/favicon.ico'}
        ],
        image: [
            {type: 'value', value: (contentType.substring(0, 5) === 'image') && url, parse: 'toAbsoluteUrl'},
            {type: 'querySelector', value: 'meta[property="og:image:secure_url"]', parse: 'toAbsoluteUrl'},
            {type: 'querySelector', value: 'meta[property="og:image:url"]', parse: 'toAbsoluteUrl'},
            {type: 'querySelector', value: 'meta[property="og:image"]', parse: 'toAbsoluteUrl'},
            {type: 'querySelector', value: 'meta[name="twitter:image"]', parse: 'toAbsoluteUrl'},
            {type: 'querySelector', value: 'meta[property="twitter:image"]', parse: 'toAbsoluteUrl'},
            {type: 'querySelector', value: 'meta[name="thumbnail"]', parse: 'toAbsoluteUrl'},
            {type: 'querySelector', value: 'meta[property="og:image:secure_url" i]', parse: 'toAbsoluteUrl'},
            {type: 'querySelector', value: 'meta[property="og:image:url" i]', parse: 'toAbsoluteUrl'},
            {type: 'querySelector', value: 'meta[property="og:image" i]', parse: 'toAbsoluteUrl'},
            {type: 'querySelector', value: 'meta[name="twitter:image" i]', parse: 'toAbsoluteUrl'},
            {type: 'querySelector', value: 'meta[property="twitter:image" i]', parse: 'toAbsoluteUrl'},
            {type: 'querySelector', value: 'meta[name="thumbnail" i]', parse: 'toAbsoluteUrl'}
        ],
        keywords: [
            {type: 'querySelector', value: 'meta[name="keywords"]'},
            {type: 'querySelector', value: 'meta[name="keywords" i]'}
        ],
        type: [
            {type: 'querySelector', value: 'meta[property="og:type"]'},
            {type: 'querySelector', value: 'meta[property="og:type" i]'}
        ],
        url: [
            {type: 'value', value: url},
            {type: 'querySelector', value: 'a.amp-canurl', parse: 'toAbsoluteUrl'},
            {type: 'querySelector', value: 'link[rel="canonical"]', parse: 'toAbsoluteUrl'},
            {type: 'querySelector', value: 'meta[property="og:url"]', parse: 'toAbsoluteUrl'},
            {type: 'querySelector', value: 'link[rel="canonical" i]', parse: 'toAbsoluteUrl'},
            {type: 'querySelector', value: 'meta[property="og:url" i]', parse: 'toAbsoluteUrl'}
        ],
        preview: [
            {type: 'cachedUrlProxy', value: 'cachedUrlProxy'}
        ],
        provider: [
            {type: 'querySelector', value: 'meta[property="og:site_name"]'},
            {type: 'querySelector', value: 'meta[property="og:site_name" i]'}
        ]
    };

    function execRule(url, ignore, docEl, runObj, field) {
        window.docEl = docEl;
        void 0;
        let result = false;
        switch (runObj.type) {
        case 'value':
            return runObj.value;
        case 'querySelector':
            try {
                if (docEl.querySelector(runObj.value)) {
                    result = docEl.querySelector(runObj.value).content ||
                            docEl.querySelector(runObj.value).textContent ||
                            docEl.querySelector(runObj.value).href ||
                            false;
                    switch (runObj.parse) {
                    case 'toAbsoluteUrl':
                        result = relUrl2absulute(url, result);
                        break;
                    }
                    return result;
                }
            } catch (err) {
                void 0;
                return false;
            }
            break;
        }
        return false;
    }
    function getRichDescription(url, htmlStr, docEl, rules) {
        let result = {};
        Object.keys(rules).forEach(function (field) {
            let i;
            for (i = 0; i < rules[field].length && !result[field]; i += 1) {
                result[field] = execRule(url, htmlStr, docEl, rules[field][i], field);
            }
        });
        return result;
    }
    let rez = getRichDescription(url, htmlStr, docEl, queryRules);
    void 0;
    return rez;
}
function expandRichDescription(messageEl, richDescription, partId, targetMessageEl) {
    'use strict';
    let chat = namespace.chat;
    let historyEl = document.getElementById('history');
    let expanded = false;
    let scrolledDown = ((historyEl.scrollTop + historyEl.offsetHeight) === historyEl.scrollHeight);
    let startScrollHeight = historyEl.scrollHeight;
    Object.keys(richDescription).forEach(function (richField) {
        let richValue = richDescription[richField];
        if (!richValue) {
            return;
        }
        expanded = true;
        let richContentEl = messageEl.querySelector('.rich-content');
        const previewEl= messageEl.querySelector('.preview');
        const previewRichEl= richContentEl.querySelector('.preview');
        richContentEl.style.display = '';

        function playYouTubeClick() {
            richValue = richValue.replace(/"/g, '\\"');
            previewRichEl.innerHTML = '<iframe width="100%" height="100%" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>';
            previewRichEl.firstChild.src = `https://www.youtube.com/embed/${richValue}?autoplay=1`;
        }
        function openUrlClick(e) {
            void 0;
            if (namespace.contextMenuOpened) {
                return false;
            }
            if (richDescription.openUrl) {
                e.stopPropagation();
                e.preventDefault();
                openUrl(richDescription.openUrl);
            }
        }

        switch (richField) {
        case 'image':
            richValue = richValue.replace(/"/g, '\\"');
            previewEl.innerHTML = '<img class="preview-image">';
            previewEl.firstChild.src = richValue;
            previewEl.onclick = openUrlClick;
            previewEl.style.display = '';
            break;
        case 'icon':
            if (richValue === '-hide-icon-') {
                messageEl.querySelector('.link .icon').style.display = 'none';
            } else {
                messageEl.querySelector('.link .icon').src = richValue;
                messageEl.querySelector('.link .icon').onerror = function () {
                    this.style.display = 'none';
                };
                messageEl.querySelector('.link .icon').onload = function () {
                    this.style.display = '';
                };
            }
            break;
        case 'openUrl':
            messageEl.querySelector('.link .url').href = richValue;
            break;
        case 'domain':
            messageEl.querySelector('.link .url').textContent = richValue;
            messageEl.querySelector('.link').style.display = '';
            break;
        case 'description':
            if (richValue.length > 200) {
                messageEl.querySelector('.description').innerHTML =
                    Sanitizer.escapeHTML`${chat.escapeHtml(richValue.substring(0, 200))}...`;
            } else {
                messageEl.querySelector('.description').innerHTML =
                    Sanitizer.escapeHTML`${chat.escapeHtml(richValue)}`;
            }
            messageEl.querySelector('.description').style.display = '';
            break;
        case 'ytVideoId':
            richValue = richValue.replace(/"/g, '\\"');
            messageEl.querySelector('.preview').innerHTML = '<div class="ytplayer"><img class="preview-image"><div class="playbutton"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="28" viewBox="0 0 24 28"><path fill="#FFF" fill-rule="nonzero" d="M0 0v28l24-14z" opacity=".9"/></svg></div></div>';
            previewEl.querySelector('.preview-image').src = `http://img.youtube.com/vi/${richValue}/mqdefault.jpg`;
            messageEl.querySelector('.preview').onclick = playYouTubeClick;
            messageEl.querySelector('.preview').style.display = '';
            break;
        case 'title':
            messageEl.querySelector('.title').textContent = richValue;
            messageEl.querySelector('.title').style.display = '';
            break;
        }
        messageEl.querySelector('.rich-content .content-limit').onclick = openUrlClick;
        messageEl.querySelector('.rich-content .content-limit').style.cursor = 'pointer';
        if (!richDescription.image) {
            messageEl.querySelector('.rich-content').classList.add('msg__no-preview');
        }

    });
    let endScrollHeight = historyEl.scrollHeight;
    let newContentHeight = endScrollHeight - startScrollHeight;
    let richContentPart = messageEl.querySelector('.rich-content');


    let existsPartEl = targetMessageEl.querySelector('.body').querySelector(`[data-rich-content-no='${partId}']`);
    if (existsPartEl) {
        targetMessageEl.querySelector('.body').replaceChild(richContentPart, existsPartEl);
        if (!isGX) { richContentPart.querySelector('.rich-content .options').style.display = '' }
    } else {
        if (targetMessageEl.querySelector('.time')) {
            targetMessageEl.querySelector('.body').insertBefore(richContentPart, targetMessageEl.querySelector('.time'));
        } else {
            targetMessageEl.querySelector('.body').appendChild(richContentPart);
        }
    }
    if (expanded && scrolledDown) {
        void 0;
        namespace.chat.scrollChatDown();
    }
}
function onRichDescriptionReady(messageId, richDescriptionObj) {
    'use strict';
    const dataMessageId = Math.floor(messageId);
    const partId = Math.floor((parseFloat(messageId) - Math.floor(messageId)) * 100);
    const targetMessageEl = document.getElementById('history').querySelector(`[data-message-id="${dataMessageId}"]`);
    if (!targetMessageEl) {
        void 0;
        throw new Error('onRichDescriptionReady - dom homeless');
    }
    let richEl = document.importNode(document.getElementById('template-message').content, true);
    richEl.querySelector('.rich-content .title').style.display = 'none';
    richEl.querySelector('.rich-content .description').style.display = 'none';
    richEl.querySelector('.rich-content .action').style.display = 'none';
    richEl.querySelector('.rich-content .link').style.display = 'none';
    if (!isGX) { richEl.querySelector('.rich-content .options').style.display = 'none' }
    richEl.querySelector('.rich-content .preview').style.display = 'none';
    expandRichDescription(richEl, richDescriptionObj, partId, targetMessageEl);
}
window.onRichDescriptionReady = onRichDescriptionReady;
function onLinkDiscovered(response) {
    'use strict';
    window.lastResponseData = response;
    const richDescriptionObj = biteHtmlStr2richDescriptionObj(response.value.url, response.value.data, response.value.type);
    if (response.value && response.value.url) {
        cyclicCache.setCache(response.messageId, richDescriptionObj);
    }
    onRichDescriptionReady(response.messageId, richDescriptionObj);
}
window.onLinkDiscovered = onLinkDiscovered;


function initChat(namespace) {
    'use strict';
    let translate = namespace.translate;
    window.uploadDownloadCache = JSON.parse(localStorage.uploadDownloadCache || "{}");

    if (!namespace.oneApiService) {
        throw new Error('namespace.oneApiService must exists');
    }
    let oneApiService = namespace.oneApiService;

    const loadPrevScrollThreshold = 1280;
    window.loadPrevScrollThreshold = loadPrevScrollThreshold;
    const chatContainerEl = document.getElementById('history');
    const loadingSpinnerEl = document.getElementById('load-prev');

    function getKindIconUrl(kind, color) {
        let colors = ['green', 'red', 'white'],
            kinds = ['disconnected', 'desktop', 'mobile'];
        if (kinds.indexOf(kind) === -1) {
            kind = kinds[0];
        }
        if (colors.indexOf(color) === -1) {
            color = colors[0];
        }
        return `img/${kind}_${color}.svg`;
    }
    function getKindAnimUrl(kind, color) {
        void 0;
        if (namespace.isMobile && (kind === 'desktop' || kind === 'mobile') && namespace.theme === 'dark') {
            return `${FLOW_OPERA_CDN}img/icon-chat-${kind}-nobg${FLOW_BUILD_ID}.json`;
        }
        if (namespace.isMobile && (kind === 'desktop' || kind === 'mobile')) {
            return `${FLOW_OPERA_CDN}img/icon-chat-${kind}-nobg${FLOW_BUILD_ID}.json`;
        }
        return `${FLOW_OPERA_CDN}img/icon-chat-${kind}${FLOW_BUILD_ID}.json`;
    }

    namespace.chatContainerEl = chatContainerEl;
    function isClassicRecord(record) {
        return (record.type);
    }

    function isServerRecord(record) {
        return (
            record.id &&
            record.content &&
            record.metadata &&
            record.created_by
        );
    }
    function escapeHtml(text) {
        return String(escapeHTML`${text}`).replace(/\n/g, '<br/>');
    }
    function isImageMimetype(mimetype) {
        return String(mimetype).substring(0, 5) === 'image';
    }
    function getHumainFrendlyUrlDomain(url) {
        url = escapeHTML`${url}`;
        let domain = url;
        try {
            if (url.match(/^https?:\/\//)) {
                domain = new URL(url).origin.toString().replace(/^https?:\/\//, '').replace(/^www./, '');
            }
        } catch (err2) {
            domain = url;
            void 0;
        }
        return domain;
    }
    function serverRecordToClassicRecord(serverRecord) {
        if (!isServerRecord(serverRecord)) {
            throw new Error('Error converting serverRecordToClassicRecord - is not ServerRecord!');
        }
        const device = getDevice(serverRecord.created_by);
        const metadata = JSON.parse(serverRecord.metadata);
        const content = JSON.parse(serverRecord.content);
        let record = Object.assign({}, serverRecord, metadata, content, {
            isOwn: window.clientId === serverRecord.created_by,
            device: device,
            deviceKind: (device && device.kind) || 'disconnected',
            clientId: serverRecord.created_by,
            time: namespace.translate.humanFriendlyDatetime(serverRecord.id) 
        });
	if (metadata.type === 'file2' && window.clientVersion >= 2) {
            record.type = metadata.type;
        }
        void 0;
        return record;
    }

    function onDeleteMessage(id) {
        let messageEl = document.querySelector(`[data-message-id='${id}']`);
        messageEl.style.transition = 'all 0.1s linear';
        messageEl.style.height = `${messageEl.clientHeight}px`;
        setTimeout(function () {
            messageEl.style.overflow = 'hidden';
            messageEl.style.opacity = 0;
            messageEl.style.height = '0px';
        }, 0);
        setTimeout(function () {
            messageEl.remove();
        }, 100);
    }
    function onDeleteMessageFail(id) {
        void 0;
        document.querySelector(`[data-message-id='${id}']`).style.opacity = 1;
        namespace.oneApiService.showToast(translate.t('chat-delete-message-fail', 'Failed to remove message from My Flow.'));
    }

    function deleteMessage(id) {
        void 0;
        if (String(id).substring(0, 5) === 'local') {
            return onDeleteMessage(id);
        }
        document.querySelector(`[data-message-id='${id}']`).style.opacity = 0.5;
        return oneApiService.deleteMessage(id);
    }


    function getMessageText(elMessageId) {
        let result = '';
        let linksStampArr = [];
        Array.prototype.slice.call(document.querySelectorAll(`[data-message-id='${elMessageId}'] .links`)).forEach(function (element) {
            if (linksStampArr.indexOf(element.textContent) === -1) {
                linksStampArr.push(element.textContent);
            }
        });
        let linksStampText = false;
        if (linksStampArr.length > 0) {
            linksStampText = String(`\n${linksStampArr.join('\n')}`).trim();
        }
        let selectionNodeEl = document.querySelector(`[data-message-id='${elMessageId}'] .text-content .text`);
        result = (selectionNodeEl && String(selectionNodeEl.innerText).trim()) || linksStampText;
        return String(result).trim();

    }
    window.getMessageText = getMessageText;
    function getMessageEl(dataMessageId) {
        return document.getElementById('history').querySelector(`[data-message-id="${dataMessageId}"]`);
    }

    function showContextMenuClick(e, messageEl, preferRight, isTouch) {
        e.stopPropagation();
        if (!messageEl) {
            throw new Error('showContextMenuClick requires messageEl param');
        }
        let messageId = messageEl.dataset.messageId;
        void 0;
        messageEl.classList.add('contextmenu-opened');
        function getContextMenuItems() {
            let items = [];
            if (!messageEl.classList.contains('file2')) {
                items.push({
                    type: 'element',
                    title: translate.t('chat-contextmenu-copy', 'Copy'),
                    id: 10
                });
            } else {
                if (messageEl.classList.contains('downloaded')) {
                    items.push({
                        type: 'element',
                        title: translate.t('file-show', 'Show File'),
                        id: 40
                    });
                }
            }
            items.push({
                type: 'element',
                title: translate.t('chat-contextmenu-delete', 'Delete'),
                id: 20
            });
            if (window.isMobile && !window.isIOS) {
                if (!messageEl.classList.contains('file')) {
                    items.push({
                        type: 'element',
                        title: translate.t('chat-contextmenu-share', 'Share...'),
                        id: 30
                    });
                }
            }
            return items;
        }
        function onContextMenuClick(e, item) {
            e.stopPropagation();
            e.preventDefault();
            window.hideContextMenu();
            switch (item.id) {
            case 10:
                try {
                    namespace.oneApiService.copyTextToClipboard(getMessageText(messageId));
                    namespace.oneApiService.showToast(translate.t('chat-contextmenu-copy-success', 'Message copied to clipboard successfully.'));
                } catch (err) {
                    namespace.oneApiService.showToast(translate.t('chat-contextmenu-copy-error', `Copy to clipboard failed. ${(err)
                        ? '[' + err + ']'
                        : ''}]`,
                            err));
                }
                break;
            case 20:
                deleteMessage(messageId);
                break;
            case 30:
                setTimeout(function () {
                    Neon.shareText(getMessageText(messageId));
                }, 100);
                break;
            case 40:
                oneApiService.show(messageEl.dataset.messageId, messageEl.dataset.localFileName);
                break;
            default:
                void 0;
            }
        }
        window.showContextMenu(e.clientX, e.clientY, getContextMenuItems(), onContextMenuClick, preferRight, isTouch);
    }

    function updateMessageProgressEl(messageEl, message) {
        const el = messageEl.querySelector('.progress');
        el.textContent = message;
    }
    function loadPreview(messageId, name) {
        void 0;
        const messageEl = getMessageEl(messageId);
        const previewWidth = messageEl.querySelector('.preview').clientWidth * (window.devicePixelRatio || 1);
        const previewHeight = messageEl.querySelector('.preview').clientHeight * (window.devicePixelRatio || 1);
        if (previewWidth < 1 || previewHeight < 1) {
            return;
        }
        oneApiService.getFilePreview(messageId, name || messageEl.dataset.localFileName, previewWidth, previewHeight, function onFinish(preview) {
            messageEl.querySelector('.preview').classList.remove('file-image-preview-blur');
            if (preview && preview !== 'null') {
                messageEl.querySelector('.preview img').src = preview;
                messageEl.querySelector('.preview img').style.display = 'block';
            }
        });
    }

    function updateMessageActionEl(messageEl, type, mimetype) {
        const el = messageEl.querySelector('.action');
        el.onclick = false;

        switch (type) {
        case 'file-downloading-too-big':
            el.style.display = 'none';
        break;
        case 'file-downloading-cancel':
            el.textContent = translate.t('file-cancel', 'Cancel');
            el.style.display = 'block';
            el.classList.remove('transitive');
            el.onclick = function (e) {
                el.classList.add('transitive');
                el.onclick = false;
                e.preventDefault();
                e.stopPropagation();
                oneApiService.abortDownload(messageEl.dataset.messageId);
            };
            break;
        case 'file-uploading-cancel':
            el.textContent = translate.t('file-cancel', 'Cancel');
            el.style.display = 'block';
            el.classList.remove('transitive');
            el.onclick = function (e) {
                el.classList.add('transitive');
                el.onclick = false;
                e.preventDefault();
                e.stopPropagation();
                oneApiService.abortUpload(messageEl.dataset.messageId);
            };
            break;
        case 'file-uploading-error':
            el.textContent = translate.t('file-retry', 'Retry');
            el.style.display = 'block';
            el.classList.remove('transitive');
            el.onclick = function (e) {
                el.classList.add('transitive');
                el.onclick = false;
                e.preventDefault();
                e.stopPropagation();
                oneApiService.retryUpload(messageEl.dataset.messageId);
            };
            break;
        case 'file-downloading-error':
            el.textContent = translate.t('file-error', 'Error');
            el.style.display = 'block';
            el.onclick = false;
            el.classList.add('transitive');
            break;
        case 'file-downloaded':
        case 'file-uploaded':
            if (messageEl.querySelector('.time') && messageEl.querySelector('.time').dataset && messageEl.querySelector('.time').dataset.timestamp) {
                messageEl.querySelector('.time').classList.remove('expires');
                messageEl.querySelector('.time').textContent = namespace.translate.humanFriendlyDatetime(messageEl.querySelector('.time').dataset.timestamp);
            }
            el.classList.remove('transitive');
            if (String(mimetype).substring(0, 5) === 'image' || !namespace.isDesktop) {
                el.textContent = translate.t('file-open', 'Open');
                el.style.display = 'block';
                el.onclick = function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    oneApiService.open(messageEl.dataset.messageId, messageEl.dataset.localFileName, mimetype);
                };
            } else {
                el.textContent = translate.t('file-show', 'Show');
                el.style.display = 'block';
                el.onclick = function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    oneApiService.show(messageEl.dataset.messageId, messageEl.dataset.localFileName, mimetype);
                };

            }
            break;

        default:
            el.textContent = translate.t('file-download', 'Download');
            el.style.display = 'block';
            el.classList.remove('transitive');
            el.onclick = function (e) {
                e.preventDefault();
                e.stopPropagation();
                el.classList.add('transitive');
                el.onclick = false;
                if (+messageEl.querySelector(".expires").dataset.expires > Date.now()) {
                    oneApiService.download(messageEl.dataset.messageId);
                }
            };
        }
    }
    function onDownloadFileStarted(callbackValue) {
        const messageEl = getMessageEl(callbackValue);
        updateMessageActionEl(messageEl, 'file-downloading-cancel', messageEl.dataset.mimetype);
        uploadDownloadCache[callbackValue] = Object.assign({}, messageEl.dataset);
        localStorage.uploadDownloadCache = JSON.stringify(uploadDownloadCache);
    }

    function getMessageDf(record) {
        if (isServerRecord(record)) {
            record = serverRecordToClassicRecord(record);
        }
        if (!isClassicRecord(record)) {
            throw new Error('getMessageDf: wrong record');
        }

        let template;

        record.links = listLinks(record.text) || [];
        if (record.links.length) {
            if (record.text === record.links[0]) {
                record.type = 'link';
                record.url = record.text;
                record.title = record.text;
                record.description = record.text;

            }
        }

        if (record.url) {
            if (record.links.indexOf(record.url) === -1) {
                record.links.push(record.url);
            }
        }
        record.timestamp = parseInt(record.id, 10) || new Date().getTime();
        if (!record.role) {
            record.role = 'default-role';
        }

        switch (record.type) {
        case 'divider':
        case 'loader-prev':
            template = document.getElementById('template-divider');
            break;
        default:
            template = document.getElementById('template-message');
            break;
        }

        const element = document.importNode(template.content, true);
        const messageEl = element.querySelector('.message');
        if (messageEl) {
            messageEl.dataset.messageId = record.id;
            messageEl.dataset.localMessageId = record.localMessageId;
            messageEl.dataset.content_url = record.content_url || '';
            messageEl.dataset.name = record.name || '';
            messageEl.dataset.size = record.size || '';
            messageEl.dataset.mimetype = record.mimetype || record.file_type || '';
            messageEl.dataset.localFileName = record.localFileName || '';
            messageEl.dataset.iv = record.iv || '';
        }

        switch (record.type) {
        case 'status':
            messageEl.classList.add(record.type);
            messageEl.classList.add(record.role);
            messageEl.classList.add('center');
            break;
        default:
            addEvent(messageEl, 'click', function (e) {
                if (e.target.classList.contains('options-click')) {
                    showContextMenuClick(e, this, e.target.classList.contains('left'));
                }
            });
            Array.prototype.slice.call(element.querySelectorAll('.message')).forEach(function (element) { 
                addEvent(element, 'long-touch', function (e) {
                    showContextMenuClick(e, element, e.target.classList.contains('left'), 'isTouch=true');
                });
            });
            messageEl.classList.add(record.type);
            messageEl.classList.add(record.role);
            if (record.isOwn) {
                messageEl.classList.add('right');
                Array.prototype.slice.call(element.querySelectorAll('.options-click')).forEach(function (element) {
                    element.classList.add('right');
                });
            } else {
                messageEl.classList.add('left');
                Array.prototype.slice.call(element.querySelectorAll('.options-click')).forEach(function (element) {
                    element.classList.add('left');
                });
            }
            element.querySelector('.sender').classList.add(record.deviceKind);
            lottie.loadAnimation({
                container: element.querySelector('.sender.sender-desktop .icon'), 
                path: getKindAnimUrl(record.deviceKind, 'white'), 
                renderer: 'svg', 
                loop: false, 
                autoplay: true
            });

            element.querySelector('.time').textContent = record.time;
            element.querySelector('.time').dataset.timestamp = record.timestamp;
            break;
        }
        let previewImage = false;
        previewImage = new Image();
        previewImage.className = 'preview-image';
        void 0;
        if (record.preview && record.preview !== 'null') {
            previewImage.src = record.preview;
        } else {
            element.querySelector('.content.rich-content').classList.add('msg__no-preview');
        }
        if (record.fileExists) {
            record.file_exists = record.fileExists;
        }
        switch (record.type) {
        case 'divider':
            element.querySelector('.divider').textContent = record.text;
            break;
        case 'status':
            element.querySelector('.text-content').style.display = 'none';
            element.querySelector('.description').innerHTML = escapeHTML`${record.description}`;
            element.querySelector('.title').remove();
            element.querySelector('.link').remove();
            element.querySelector('.action').remove();
            element.querySelector('.preview').remove();
            element.querySelector('.sender').remove();
            element.querySelector('.time').remove();
            break;
        case 'system-text':
            element.querySelector('.description').innerHTML = escapeHTML`${record.text}`;
            if (record.title) {
                element.querySelector('.title').innerHTML = escapeHTML`${record.title}`;
            } else {
                element.querySelector('.title').style.display = 'none';
            }
            element.querySelector('.link').style.display = 'none';
            element.querySelector('.action').style.display = 'none';
            element.querySelector('.preview').style.display = 'none';
            break;
        case 'text':
            element.querySelector('.text-content .text').innerHTML = Sanitizer.escapeHTML`${linkify(escapeHtml(record.text))}`;
            element.querySelector('.rich-content').style.display = 'none';
            element.querySelector('.description').style.display = 'none';
            element.querySelector('.title').style.display = 'none';
            element.querySelector('.link').style.display = 'none';
            element.querySelector('.action').style.display = 'none';
            element.querySelector('.preview').style.display = 'none';
            break;
        case 'youtube':
            element.querySelector('.title').textContent = record.title;
            element.querySelector('.description').textContent = record.description;
            element.querySelector('.preview').innerHTML = Sanitizer.escapeHTML`${record.previewHtml}`;
            element.querySelector('.link .icon').src = record.link.icon;
            element.querySelector('.link .url').textContent = record.link.url;
            element.querySelector('.link .url').href = record.link.url;
            element.querySelector('.action').remove();
            break;
        case 'link':
            element.querySelector('.text-content').remove();
            element.querySelector('.title').textContent = record.title;
            element.querySelector('.description').textContent = record.description;
            if (record.previewHtml) {
                element.querySelector('.preview').innerHTML = Sanitizer.escapeHTML`${record.previewHtml}`;
            } else {
                element.querySelector('.preview').style.display = 'none';
            }
            element.querySelector('.link .icon').src = record.favIconUrl || record.icon || 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaGVpZ2h0PSIxNzkyIiB2aWV3Qm94PSIwIDAgMTc5MiAxNzkyIiB3aWR0aD0iMTc5MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTQwOCA5Mjh2MzIwcTAgMTE5LTg0LjUgMjAzLjV0LTIwMy41IDg0LjVoLTgzMnEtMTE5IDAtMjAzLjUtODQuNXQtODQuNS0yMDMuNXYtODMycTAtMTE5IDg0LjUtMjAzLjV0MjAzLjUtODQuNWg3MDRxMTQgMCAyMyA5dDkgMjN2NjRxMCAxNC05IDIzdC0yMyA5aC03MDRxLTY2IDAtMTEzIDQ3dC00NyAxMTN2ODMycTAgNjYgNDcgMTEzdDExMyA0N2g4MzJxNjYgMCAxMTMtNDd0NDctMTEzdi0zMjBxMC0xNCA5LTIzdDIzLTloNjRxMTQgMCAyMyA5dDkgMjN6bTM4NC04NjR2NTEycTAgMjYtMTkgNDV0LTQ1IDE5LTQ1LTE5bC0xNzYtMTc2LTY1MiA2NTJxLTEwIDEwLTIzIDEwdC0yMy0xMGwtMTE0LTExNHEtMTAtMTAtMTAtMjN0MTAtMjNsNjUyLTY1Mi0xNzYtMTc2cS0xOS0xOS0xOS00NXQxOS00NSA0NS0xOWg1MTJxMjYgMCA0NSAxOXQxOSA0NXoiLz48L3N2Zz4=';
            element.querySelector('.link .url').href = record.url;
            element.querySelector('.link .url').textContent = getHumainFrendlyUrlDomain(record.url);
            element.querySelector('.action').remove();
            break;
        case 'phone':
            element.querySelector('.title').textContent = record.number;
            element.querySelector('.action').textContent = record.text;
            element.querySelector('.description').remove();
            element.querySelector('.link').remove();
            element.querySelector('.preview').remove();
            break;
        case 'file2':
            void 0;
            if (window.clientVersion < 2) {
                break;
            }
            element.querySelector('.text-content').remove();
            element.querySelector('.content-limit .title').textContent = record.name;
            if (record.size) {
                element.querySelector('.content-limit .description').innerHTML = Sanitizer.escapeHTML`<span class="progress">${translate.bytesToSize(record.size)}</span>`;
            } else {
                element.querySelector('.content-limit .description').innerHTML = '';
            }
            if (record.file_exists) {
                record.mode = 'file-downloaded';
                messageEl.classList.add('downloaded');
            }
            updateMessageActionEl(element.querySelector('.message'), record.mode, record.mimetype);
            element.querySelector('.link').remove();
            element.querySelector('.preview').classList.add('file-image-preview-blur');
            element.querySelector('.preview').appendChild(previewImage);
            messageEl.querySelector('.content .content-limit').style.cursor = 'default';
            messageEl.querySelector('.content .content-limit').onclick = function (e) {
                if (typeof messageEl.querySelector('.action').onclick === 'function') {
                    messageEl.querySelector('.action').onclick(e);
                }
            };

            if (!record.preview || record.preview === 'null') {
                element.querySelector('.preview').style.display = 'none';
            } else {
                let startTap;
                messageEl.querySelector('.preview').onmousedown = function (e) {
                    startTap = Date.now();
                }
                messageEl.querySelector('.preview').onmouseup = function (e) {
                    if (typeof messageEl.querySelector('.action').onclick === 'function' &&
                        (startTap + 600 > Date.now())) {
                        messageEl.querySelector('.action').onclick(e);
                    }
                };
            }
            if (!record.file_exists && record.expires) {
                const timeEl = messageEl.querySelector(".time");
                const now = Date.now();
                element.querySelector('.time').classList.add('expires');
                timeEl.dataset.expires = record.expires;
                translate.updateDatetimeTagForElement(timeEl);
                if (now > +record.expires) {
                    messageEl.classList.add('expired');
                }
            }
            break;
        }

        function tryToGetRichDescription(recordId, ignore, text) {
            let links = listLinks(text);
            if (links && links.length > 0) {
                links.forEach(function (link, i) {
                    oneApiService.discoverLink(link, recordId, i + 1);
                });
            }
        }
        if (element.querySelector('.message')) {
            element.querySelector('.message').dataset.messageId = record.id;
        }
        switch (record.type) {
        case 'text':
            tryToGetRichDescription(record.id, element, record.text);
            break;
        case 'link':
            tryToGetRichDescription(record.id, element, record.url);
            break;
        }
        if (record.links && element.querySelector('.links')) {
            element.querySelector('.links').textContent = ` ${record.links.join(' ')} `;
        }

        return element;
    }


    function scrollChatDown() {
        chatContainerEl.scrollTop = chatContainerEl.scrollHeight;
    }

    function loadPrev() {
        if (window.isLoadingChatMessages) {
            return;
        }

        window.isLoadingChatMessages = true;
        loadingSpinnerEl.style.display = 'block';
        oneApiService.getMessagesOld(operaTouchBackground.firstId, namespace.config.pageSize, 'add-begin');
    }

    function loadPrevIfNeeded() {
        if (chatContainerEl.scrollTop < loadPrevScrollThreshold && window.operaTouchBackground.prevRemaining) {
            loadPrev();
        }
    }
    window.chatContainerEl = chatContainerEl;

    let fixBrokenScrollViewTO = false;
    let fixBrokenScrollViewBlock = false;
    let fixBrokenScrollTimeout = 100;
    if (window.isDesktop) {
        fixBrokenScrollViewBlock = true;
    }

    function fixBrokenScrollView() {
        if (fixBrokenScrollViewBlock) {
            return;
        }
        fixBrokenScrollViewBlock = true;
        chatContainerEl.style.zIndex = 1;
        setTimeout(function () {
            chatContainerEl.style.zIndex = 0;
            fixBrokenScrollViewBlock = false;
        }, fixBrokenScrollTimeout);
    }
    chatContainerEl.addEventListener('scroll', function (e) {
        hideContextMenu();
        loadPrevIfNeeded(e);
        if (fixBrokenScrollViewBlock) {
            return;
        }
        if (fixBrokenScrollViewTO) {
            clearTimeout(fixBrokenScrollViewTO);
        }
        fixBrokenScrollViewTO = setTimeout(fixBrokenScrollView, fixBrokenScrollTimeout);
    });

    function confirmMessageDelivery(dataMessageId) {
        let messageEl = getMessageEl(dataMessageId);
        if (messageEl) {
            messageEl.classList.add('delivered');
        } else {
            void 0;
        }

    }
    function updateMessageId(localMessageId, serverMessageId) {
        if (!localMessageId || localMessageId === 'undefined') {
            return false;
        }
        if (!serverMessageId || serverMessageId === 'undefined') {
            return false;
        }
        let existsMessageEl = getMessageEl(serverMessageId) || getMessageEl(localMessageId);
        if (existsMessageEl) {
            existsMessageEl.dataset.messageId = serverMessageId;
            existsMessageEl.dataset.timestamp = serverMessageId;
            return true;
        }
        return false;
    }

    const addedMessages = {};
    function addOneMessage(record, addAtBegin) {
        if (isServerRecord(record)) {
            record = serverRecordToClassicRecord(record);
        }
        if (!isClassicRecord(record)) {
            throw new Error('addOneMessage: wrong record');
        }
        void 0;

        const existsMessageEl = getMessageEl(record.id) || getMessageEl(record.localMessageId);
        if (existsMessageEl) {
            confirmMessageDelivery(record.id);
            return;
        }

        let confirmed = false;
        if (!record.id) {
            record.id = record.localMessageId;
        } else {
            confirmed = true;
        }
        let messageDf = getMessageDf(record);
        function turnOffSenderAnimation(senderEl) {
            setTimeout(function () {
                senderEl.style.animation = 'none';
            }, 500);
        }
        turnOffSenderAnimation(messageDf.querySelector('.message .sender'));
        let addedMessageId = parseInt(messageDf.firstElementChild.dataset.messageId,10);
        let insertBeforeThisElement = Object.entries(addedMessages)
            .sort((a,b)=> parseInt(a[0],10) - parseInt(b[0],10))
            .find(([a,b])=> parseInt(a,10) > addedMessageId);

        if (addAtBegin) {
            messageDf.querySelector('.message').classList.add('old');
            messageDf.querySelector('.message').classList.add('delivered');
        }
        if (insertBeforeThisElement) {
            document.getElementById('history').insertBefore(messageDf, insertBeforeThisElement[1]);
            addedMessages[addedMessageId] = insertBeforeThisElement[1].previousElementSibling;
        } else {
            document.getElementById('history').appendChild(messageDf);
            addedMessages[addedMessageId] = document.getElementById('history').lastElementChild;
        }
        if (confirmed) {
            confirmMessageDelivery(record.id);
        }
        if (record.preview && record.preview !== 'null' && (record.file_exists || record.fileExists) ) {
            loadPreview(record.id);
        }

    }
    function addMessages(messages, addAtBegin) {
        let startHeight = document.getElementById('history').scrollHeight;
        let startTop = document.getElementById('history').scrollTop;
        if (!messages) {
            return;
        }
        let i = 0;
        if (messages instanceof Array) {
            if (addAtBegin) {
                for (i = messages.length - 1; i >= 0; i -= 1) {
                    addOneMessage(messages[i], addAtBegin);
                }
            } else {
                for (i = 0; i < messages.length; i += 1) {
                    addOneMessage(messages[i], addAtBegin);
                }
            }
        } else {
            addOneMessage(messages, addAtBegin);
        }
        let endHeight = document.getElementById('history').scrollHeight;
        if (!addAtBegin) {
            scrollChatDown();
        } else {
            let insertedDeltaHeight = endHeight - startHeight;
            chatContainerEl.scrollTop = startTop + insertedDeltaHeight;
        }
        if (isGX) {
            const setContextMenuListeners = () => {
                const className = 'msg-head-open';
                const eventName = 'closeheaders';
                const action = id => new CustomEvent(eventName, {detail: {id}});
                const messages = document.querySelectorAll('.history .message');
                let timeout;
                messages.forEach(msg => {
                    const msgId = msg.dataset.messageId;
                    msg.addEventListener('mouseenter', () => {
                        clearTimeout(timeout);
                        timeout = setTimeout(() => {
                            const currOpen = document.querySelector('.msg-head-open');
                            if (currOpen && currOpen.dataset.messageId !== msgId) {
                                namespace.hideContextMenu();
                            }
                            msg.classList.add(className);
                            document.dispatchEvent(action(msgId));
                        }, 700);
                    });

                    document.addEventListener(eventName, ({detail: {id}}) => {
                        if (id !== msgId) {
                            msg.classList.remove(className);
                        }
                    })
                })
            }
            setContextMenuListeners();
        }

    }

    function clearChat() {
        document.getElementById('history').innerHTML = '';
        showToast(translate.t('chat-all-messages-cleared'), 'All messages cleared');
        operaTouchBackground.lastId = 0;
        operaTouchBackground.firstId = 0;
    }
    let inputEl = document.getElementById('input');
    inputEl.placeholder = translate.t('chat-input-placeholder');
    const maxMessageInputLength = 2000;

    function countLines(text) {
        let nl = text.match(/\n/g);
        if (nl && nl.length) {
            return nl.length;
        }
        return 0;
    }

    const setButtonStatus = (selector, status) => {
        const button = document.querySelector(selector);

        switch (status) {
            case 'idle':
                button.classList.add('idle');
                button.classList.remove('playing');
                break;
            case 'playing':
                button.classList.remove('idle');
                button.classList.add('playing');
                break;
        }
    }

    function onInputChange() {
        if (inputEl.value.length) {
            document.getElementById('button-send').classList.add('active');
        } else {
            document.getElementById('button-send').classList.remove('active');
        }
        if (inputEl.value.length > maxMessageInputLength) {
            inputEl.value = String(inputEl.value).substring(0, maxMessageInputLength);
            showToast(translate.t('chat-input-error-toolong', 'Message too long.'));
        }
        let nl = countLines(inputEl.value);
        document.getElementById('page-chat').classList.remove('multiline');
        document.getElementById('page-chat').classList.remove('multiline-2');
        document.getElementById('page-chat').classList.remove('multiline-3');
        document.getElementById('page-chat').classList.remove('multiline-4');
        if (nl) {
            document.getElementById('page-chat').classList.add('multiline');
            switch (nl) {
            case 1:
                document.getElementById('page-chat').classList.add('multiline-2');
                break;
            case 2:
                document.getElementById('page-chat').classList.add('multiline-3');
                break;
            default:
                document.getElementById('page-chat').classList.add('multiline-4');
            }
        }
        scrollChatDown();
    }

    function setInput(value) {
        inputEl.value = value;
        onInputChange();

    }



    const isGX = document.querySelector('body').classList.contains('isGX');

    function setArrowStatus(arrowStatus) {
        const sendButtonAnimation = namespace.sendButtonAnimation;
        setButtonStatus('#button-send', 'playing');
        switch (arrowStatus) {
            case 'sending':
                sendButtonAnimation.playSegments([0, 17], true);
                sendButtonAnimation.loop = true;
                sendButtonAnimation.playSegments([18, 31]);
                break;
            case 'sending-success':
                sendButtonAnimation.loop = false;
                sendButtonAnimation.playSegments([132, 158]);
                break;
            case 'sending-fail':
                sendButtonAnimation.loop = false;
                sendButtonAnimation.playSegments([32, 131]);
                break;
        }
    }

    function setUploadStatus(uploadStatus) {
        const uploadButtonAnimation = namespace.uploadButtonAnimation;
        setButtonStatus('#button-upload', 'playing')
        if (isGX) {
            switch (uploadStatus) {
                case 'sending-success':
                    setTimeout(function () {
                        setButtonStatus('#button-upload', 'idle');
                    }, 1000);
                    break;
                case 'sending-fail':
                    setTimeout(function () {
                        setButtonStatus('#button-upload', 'idle');
                    }, 1000);
                    break;
                }
        } else {
            switch (uploadStatus) {
                case 'sending':
                    uploadButtonAnimation.playSegments([0, 1], true);
                    uploadButtonAnimation.loop = true;
                    uploadButtonAnimation.playSegments([2, 53]);
                    break;
                case 'sending-success':
                    uploadButtonAnimation.loop = false;
                    uploadButtonAnimation.playSegments([119, 180], true);
                    uploadButtonAnimation.playSegments([0, 1]);
                    setTimeout(function () {
                        setButtonStatus('#button-upload', 'idle');
                    }, 1000);
                    break;
                case 'sending-fail':
                    uploadButtonAnimation.loop = false;
                    uploadButtonAnimation.playSegments([54, 118], true);
                    uploadButtonAnimation.playSegments([0, 1]);
                    setTimeout(function () {
                        setButtonStatus('#button-upload', 'idle');
                    }, 1000);
                    break;
            }
        }
    }

    let inputBlocked = false;
    function sendInput(e) {
        void 0;
        e.preventDefault();
        e.stopPropagation();
        if (inputBlocked) {
            return;
        }
        const value = String(inputEl.value).trim();
        if (!value) {
            void 0;
            return;
        }
        setArrowStatus('sending');
        inputBlocked = true;
        oneApiService.sendTextMessage(value, undefined, function success(localMessageId, serverMessageId) {
            void 0;
            let localDevice = getDevice(namespace.clientId) || {};
            let record = {
                type: 'text',
                text: value,
                deviceKind: localDevice.kind || namespace.config.defaultSelfKind,
                id: serverMessageId || localMessageId,
                time: namespace.translate.humanFriendlyDatetime(new Date().getTime()),
                isOwn: true
            };
            void 0;
            addMessages(record);

            setArrowStatus('sending-success');
            document.getElementById('button-send').classList.remove('active');
            inputEl.value = '';
            inputEl.classList.remove('blocked');
            setTimeout(a => inputBlocked = false, 1000);
            onInputChange();
        }, function error() {
            setArrowStatus('sending-fail');
            inputEl.classList.remove('blocked');
            setTimeout(a => inputBlocked = false, 1000);
        });
        inputEl.blur();
        inputEl.focus();
        inputEl.classList.add('blocked');
    }

    function ifNotMobileFocusInput() {
        if (!window.isMobile) {
            inputEl.focus();
        }
    }
    ifNotMobileFocusInput();
    addEvent(document.getElementById('button-send'), 'tap', sendInput);

    function onSendFileStarted(callbackValue, name, mimetype, size, preview, smallPreview) {
        setUploadStatus('sending');
        let localDevice = getDevice(namespace.clientId) || {};
        const messageObj = {
            type: 'file2',
            deviceKind: localDevice.kind || namespace.config.defaultSelfKind,
            mode: 'file-uploading-cancel',
            localMessageId: callbackValue,
            messageId: callbackValue,
            time: namespace.translate.humanFriendlyDatetime(new Date().getTime()),
            isOwn: true,
            preview: preview,
            size: size,
            name: name,
            file_type: mimetype,
            mimetype: mimetype
        };
        void 0;
        addMessages(messageObj);
        uploadDownloadCache[callbackValue] = Object.assign({}, messageObj, {preview: smallPreview});
        localStorage.uploadDownloadCache = JSON.stringify(uploadDownloadCache);
    }
    function onSendFileProgress(messageId, uploaded, size) {
        const messageEl = getMessageEl(messageId);
        updateMessageProgressEl(messageEl, `Sending... ${translate.fileProgress(uploaded, size)}`);
        updateMessageActionEl(messageEl, 'file-uploading-cancel', messageEl.dataset.mimetype);
    }
    function onSendFileSuccess(localMessageId, serverMessageId, response) {
        const messageEl = getMessageEl(localMessageId);
        updateMessageId(localMessageId, serverMessageId);
        if (response) {
            messageEl.dataset.content_url = response.content_url;
            messageEl.dataset.name = response.name;
            messageEl.dataset.localFileName = response.localFileName || '';
            messageEl.dataset.iv = response.iv;
        }
        const size = messageEl.dataset.size;
        updateMessageProgressEl(messageEl, translate.bytesToSize(size));
        setUploadStatus('sending-success');
        messageEl.classList.add('downloaded');
        updateMessageActionEl(messageEl, 'file-uploaded', messageEl.dataset.mimetype);
        loadPreview(serverMessageId);
    }

    function onSendFileError(messageId, error) {
        void 0;
        const messageEl = getMessageEl(messageId);
        if (error.startsWith('File too big') || +error === 3) {
            updateMessageActionEl(messageEl, 'file-downloading-too-big');
            let maxSize = Math.floor(parseInt((error.match(/max: (\d+)/) || [0, 10000000])[1], 10) / 1000000);
            updateMessageProgressEl(messageEl, translate.t('upload-too-big', 'Selected file is too big. Max is %s').replace('%s', `${maxSize}MB`));
        } else {
            updateMessageActionEl(messageEl, 'file-uploading-error', messageEl.dataset.mimetype);
            if (messageEl.aborted) {
                updateMessageProgressEl(messageEl, translate.t('upload-error-1', 'Upload cancelled'));
            } else {
                updateMessageProgressEl(messageEl, translate.t('upload-error-6', 'Upload error'));
            }
        }
        messageEl.aborted = false;
        setUploadStatus('sending-fail');
    }

    function onSendFileInit(messageId, postMessage) {
        void 0;
        let preview = postMessage.preview;
        if (isImageMimetype(postMessage.file_type) && postMessage.content) {
            preview = `data:${postMessage.file_type};base64,${postMessage.content}`;
        }
        onSendFileStarted(messageId, postMessage.name, postMessage.file_type, postMessage.size, preview, postMessage.preview);
    }
    function uploadInput(e) {
        e.preventDefault();
        e.stopPropagation();
        oneApiService.initSendFile(onSendFileInit);
    }
    addEvent(document.getElementById('button-upload'), 'click', uploadInput);


    function onDownloadFileProgress(messageId, complete, total) {
        const messageEl = getMessageEl(messageId);
        updateMessageProgressEl(messageEl, `Downloading... ${translate.fileProgress(complete, total)}`);
    }

    function onDownloadFileSuccess(messageId, localFileName, requestData) { 
        const messageEl = getMessageEl(messageId);
        messageEl.classList.add('downloaded');
        if (requestData) {
            messageEl.dataset.content_url = requestData.url;
            messageEl.dataset.name = requestData.name;
            messageEl.dataset.localFileName = localFileName || '';
            messageEl.dataset.iv = requestData.iv;
        }
        const size = messageEl.dataset.size;
        updateMessageProgressEl(messageEl, translate.bytesToSize(size));
        loadPreview(messageId, name);
        updateMessageActionEl(messageEl, 'file-downloaded', messageEl.dataset.mimetype);
    }

    function onDownloadFileError(messageId, error) {
        const messageEl = getMessageEl(messageId);
        if (messageEl.aborted) {
            updateMessageProgressEl(messageEl, translate.t('download-error-1', 'Download cancelled'));
        } else {
            updateMessageProgressEl(messageEl, translate.t('download-error-6', 'Download error'));
        }
        messageEl.aborted = false;
        const size = messageEl.dataset.size;
        setTimeout(function () {
            updateMessageProgressEl(messageEl, translate.bytesToSize(size));
            updateMessageActionEl(messageEl, 'file-download', messageEl.dataset.mimetype);
        }, 2000);
    }


    inputEl.addEventListener('keydown', function (e) {
        if (inputEl.classList.contains('blocked')) {
            e.preventDefault();
            return false;
        }
        if (e.keyCode === 13 && (e.shiftKey || namespace.isMobile)) {
            setTimeout(function () {
                inputEl.scrollTop = inputEl.scrollHeight;
            }, 0);
            return;
        }

        if (e.keyCode === 13) {
            e.preventDefault();
            sendInput(e);
        }
    });

    let windowHeight = 0;
    inputEl.addEventListener('focus', function () {
        document.body.classList.add('keyboard-open');
        windowHeight = window.clientHeight;
    });
    inputEl.addEventListener('blur', function () {
        document.body.classList.remove('keyboard-open');
    });
    window.addEventListener('resize', function () {
        if (windowHeight < window.clientHeight) {
            document.body.classList.remove('keyboard-open');
        }
    });

    inputEl.addEventListener('input', onInputChange);
    if (namespace.isMobile) {
        inputEl.addEventListener('focus', function () {
            window.inputJustFocused = true;
        });
        window.addEventListener('resize', function () { 
            if (window.inputJustFocused) {
                scrollChatDown();
                window.inputJustFocused = false;
            }
        });
    }

    function setupUploadDownloadCache() {
        Object.entries(uploadDownloadCache).forEach(([key,value]) => {
            if (key.length > 14) { 
                oneApiService.isCurrentlyUploading(key);
            } else {
                oneApiService.isCurrentlyDownloading(key);
            }
        });
    }

    function setupFilesDragDrop() {
        document.addEventListener("paste", function (event) {
            const items = (event.clipboardData && event.clipboardData.items) || (event.originalEvent.clipboardData && event.originalEvent.clipboardData.items);
            Object.keys(items).forEach(function (index) {
                const item = items[index];
                if (item.kind === 'file') {
                    const file = item.getAsFile();
                    oneApiService.desktopSendFile(file, index, onSendFileInit);
                    event.preventDefault();
                    event.stopPropagation();
                }
            });
        });
        document.body.addEventListener("dragover", function (e) {
            e.preventDefault();
            e.stopPropagation();
        });
        document.body.addEventListener("dragenter", function (e) {
            e.preventDefault();
            e.stopPropagation();
            document.getElementById('dropzone').style.display = 'block';
            void 0;
        });
        document.getElementById('drophit').addEventListener('dragleave', function (e) {
            e.preventDefault();
            e.stopPropagation();
            document.getElementById('dropzone').style.display = 'none';
            void 0;
        });

        document.body.addEventListener("drop", function (e) {
            e.preventDefault();
            e.stopPropagation();
            document.getElementById('dropzone').style.display = 'none';
            const imageUrl = e.dataTransfer.getData('URL');
            if (imageUrl) {
                inputEl.value = imageUrl;
                return;
            }


            const files = e.dataTransfer.files;
            if (files.length > 0) {
                let i = 0;
                for (i = 0; i < files.length; i += 1) {
                    oneApiService.desktopSendFile(files[i], i, onSendFileInit);
                }
                e.preventDefault();
                return;
            }
            e.stopPropagation();
            e.preventDefault();
        });
    }

    if (namespace.transferFiles) {
        setupFilesDragDrop();
    }

    let chat = {
        getMessageEl: getMessageEl,
        getMessageText: getMessageText,
        getHumainFrendlyUrlDomain: getHumainFrendlyUrlDomain,
        escapeHtml: escapeHtml,
        getKindIconUrl: getKindIconUrl,
        ifNotMobileFocusInput: ifNotMobileFocusInput,
        deleteMessage: deleteMessage,
        onDeleteMessageFail: onDeleteMessageFail,
        onSendFileStarted: onSendFileStarted,
        onSendFileProgress: onSendFileProgress,
        onSendFileSuccess: onSendFileSuccess,
        onSendFileError: onSendFileError,
        onDeleteMessage: onDeleteMessage,
        onDownloadFileStarted: onDownloadFileStarted,
        onDownloadFileProgress: onDownloadFileProgress,
        onDownloadFileSuccess: onDownloadFileSuccess,
        onDownloadFileError: onDownloadFileError,
        setupFilesDragDrop: setupFilesDragDrop,
        setUploadStatus: setUploadStatus,
        setInput: setInput,
        clearChat: clearChat,
        addMessages: addMessages,
        loadPrevIfNeeded: loadPrevIfNeeded,
        setupUploadDownloadCache,
        scrollChatDown: scrollChatDown
    };
    namespace.chat = chat;
    setInterval(function () {
        const now = Date.now();
        namespace.translate.updateDatetimeTags('.time');
        Array.apply(null, document.querySelectorAll('.message:not(.expired)')).filter(el=>el.querySelector('.expires')).forEach(el=>{
            const expired = now > (+el.querySelector('.time').dataset.expires);
            if (expired) {
                el.classList.add("expired");
            }
        });
    }, 1000 * 60);
    window.addEventListener('blur', function () {
        if (namespace.isMobile) {
            inputEl.blur();
        }
    });

    return chat;

}
window.initChat = initChat;

function initPairing(namespace) {
    'use strict';
    let pairingTimeoutLimit = parseInt(60 * 1.5, 10);
    let pairingTimeoutCounter = 0;

    const isGX = document.querySelector('body').classList.contains('isGX');

    let textcodeValidTimeEl = document.getElementById('timeleft');
    namespace.pairingBackToPage = 'page-welcome-new';
    let updateTextTokenTicker = false;
    function refreshTextcodePage() {
        textcodeValidTimeEl.textContent = pairingTimeoutCounter;
    }
    function tickTextCodeTimeout() {
        pairingTimeoutCounter -= 1;
        if (pairingTimeoutCounter > 0) {
            refreshTextcodePage();
        } else {
            clearInterval(updateTextTokenTicker);
            if (namespace.currentPage === 'page-pairing-textcode') {
                showPage(namespace.pairingBackToPage);
            }
        }
    }
    updateTextTokenTicker = setInterval(tickTextCodeTimeout, 1000);

    const resolveSpinnerAnimUrl = (spinnerPart, isGX) => `${FLOW_OPERA_CDN}img/${isGX ? 'gx-' : ''}spinner-${spinnerPart}${FLOW_BUILD_ID}.json`;

    let animationPairingStart = lottie.loadAnimation({
        container: document.getElementById('page-pairing-progress-anim'),
        path: resolveSpinnerAnimUrl('loop', isGX),
        renderer: 'svg',
        loop: true,
        autoplay: false
    });
    namespace.animationPairingStart = animationPairingStart;
    let animationPairingSuccess = lottie.loadAnimation({
        container: document.getElementById('page-pairing-success-anim'),
        path: resolveSpinnerAnimUrl('ok', isGX),
        renderer: 'svg',
        loop: false,
        autoplay: false
    });
    namespace.animationPairingSuccess = animationPairingSuccess;
    let animationPairingFail = lottie.loadAnimation({
        container: document.getElementById('page-pairing-fail-anim'),
        path: resolveSpinnerAnimUrl('fail', isGX),
        renderer: 'svg',
        loop: false,
        autoplay: false
    });
    namespace.animationPairingFail = animationPairingFail;

    function pairingStart() {
        document.getElementById('page-pairing-progress-anim').style.display = 'block';
        document.getElementById('page-pairing-success-anim').style.display = 'none';
        document.getElementById('page-pairing-fail-anim').style.display = 'none';
        animationPairingStart.goToAndPlay(0, true);

    }
    function pairingFail() {
        document.getElementById('page-pairing-progress-anim').style.display = 'none';
        document.getElementById('page-pairing-success-anim').style.display = 'none';
        document.getElementById('page-pairing-fail-anim').style.display = 'block';
        animationPairingFail.goToAndPlay(0, true);

    }
    function pairingSuccess() {
        document.getElementById('page-pairing-progress-anim').style.display = 'none';
        document.getElementById('page-pairing-success-anim').style.display = 'block';
        document.getElementById('page-pairing-fail-anim').style.display = 'none';
        animationPairingSuccess.goToAndPlay(0, true);

    }
    function textcode2userfriendlyhtml(textCode) {
        if (!textCode) {
            return false;
        }
        let i,
            s,
            resultHtml = '';
        for (i = 0; i < textCode.length; i += 1) {
            s = textCode[i];
            if (String(s) === '\n') {
                resultHtml += '<br/>';
            } else if (String(s) === String(parseInt(s, 10))) {
                resultHtml += `<span class='number'>${s}</span>`;
            } else if (String(s) === String(s).toUpperCase()) {
                resultHtml += `<span class='upperCase'>${s}</span>`;
            } else {
                resultHtml += `<span class='letter'>${s}</span>`;
            }
        }
        return resultHtml;
    }
    function showTextcode(textcode, ttl) {
        ttl = parseInt(ttl, 10);
        if (ttl > 0) {
            pairingTimeoutLimit = ttl;
        }
        pairingTimeoutCounter = pairingTimeoutLimit;
        let textcodeInputEl = document.getElementById('textcode');
        let userTextcode = textcode.replace('$', '').replace('-', '').match(/.{5}/g).join('\n');
        userTextcode = textcode2userfriendlyhtml(userTextcode);
        textcodeInputEl.innerHTML = Sanitizer.escapeHTML`${userTextcode || '-ERROR-'}`;
        if (updateTextTokenTicker) {
            clearInterval(updateTextTokenTicker);
        }
        refreshTextcodePage();
        updateTextTokenTicker = setInterval(tickTextCodeTimeout, 1000);
    }
    function clearQrCode() {
        document.getElementById('qrcode').innerHTML = '<span class="inline-spinner"></span>';
    }
    namespace.pairing = {
        clearQrCode: clearQrCode,
        pairingStart: pairingStart,
        pairingSuccess: pairingSuccess,
        pairingFail: pairingFail,
        showTextcode: showTextcode
    };
}
initPairing(namespace);


function initSettings(namespace) {
    'use strict';
    let devices = [];
    function getDeviceEl(record) {
        let template;
        template = document.getElementById('template-device');
        const element = document.importNode(template.content, true);
        element.querySelector('.device-line').dataset.deviceId = record.id;
        element.querySelector('.device-line').classList.add(record.kind);
        element.querySelector('.device-name').textContent = record.name;
        element.querySelector('.button').textContent = translate.t('settings-connecteddevices-device-disconnect');
        if (record.id === namespace.clientId) {
            element.querySelector('.device-name').textContent += ' (' + translate.t('settings-connecteddevices-this-device') + ')';
        }
        switch (record.action) {
        case 'add-new-device':
            element.insertBefore(document.createElement('hr'), element.firstChild);
            element.querySelector('.button').classList.add('primary');
            element.querySelector('.button').innerHTML = Sanitizer.escapeHTML`${translate.t('settings-connecteddevices-device-add')}`;
            element.querySelector('.button').onclick = function () {
                namespace.pairingBackToPage = 'page-settings';
                namespace.pairing.clearQrCode();
                document.getElementById('page-pairing-back').href = 'javascript:showPage(\'page-settings\')';
                showPage('page-pairing');
            };
            break;
        default:
            element.querySelector('.button').onclick = function (e) {
                namespace.dialog.open(
                    translate.t('settings-connecteddevices-device-disconnect-confirm-title'),
                    translate.t('settings-connecteddevices-device-disconnect-confirm-description'),
                    [{
                        label: translate.t('settings-connecteddevices-device-disconnect-confirm-button-cancel'),
                        class: '',
                        onclick: namespace.dialog.close
                    }, {
                        label: translate.t('settings-connecteddevices-device-disconnect-confirm-button-confirm'),
                        class: 'primary',
                        onclick: function () {
                            e.target.disabled = true;
                            e.target.style.opacity = 0.5;
                            operaTouchBackground.port.postMessage({type: 'DELETE_DEVICE', value: record.id});
                            namespace.dialog.close();
                            const _lastPage = window.currentPage;
                            if (window.clientId === record.id) {
                                namespace.showPage('page-loading');
                                setTimeout(()=>namespace.showPage(_lastPage),10000);
                            }
                        }
                    }]
                );
            };
        }
        return element;
    }

    function addDevice(record) {
        devices[record.id] = record;
        document.getElementById('devices-list').appendChild(getDeviceEl(record));
    }
    namespace.addDevice = addDevice;
    function getDevice(deviceId) {
        return devices[deviceId];
    }
    namespace.getDevice = getDevice;


    document.getElementById('clear-all-data').onclick = function () {
        namespace.dialog.open(
            translate.t('settings-general-clear-confirm-title'),
            translate.t('settings-general-clear-confirm-description'),
            [{
                label: translate.t('settings-general-clear-confirm-button-cancel'),
                class: '',
                onclick: namespace.dialog.close
            }, {
                label: translate.t('settings-general-clear-confirm-button-confirm'),
                class: 'primary',
                onclick: function () {
                    operaTouchBackground.port.postMessage({type: 'DELETE_ALL_MESSAGES'});
                    document.getElementById('clear-all-data').disabled = true;
                    document.getElementById('clear-all-data').style.opacity = 0.5;
                    namespace.dialog.close();
                }
            }]
        );
    };
    document.getElementById('reset').onclick = function () {
        namespace.dialog.open(
            translate.t('settings-general-reset-confirm-title'),
            translate.t('settings-general-reset-confirm-description'),
            [{
                label: translate.t('settings-general-reset-confirm-button-cancel'),
                class: '',
                onclick: namespace.dialog.close
            }, {
                label: translate.t('settings-general-reset-confirm-button-confirm'),
                class: 'danger',
                onclick: function () {
                    operaTouchBackground.port.postMessage({type: 'RESET_EVERYTHING'});
                    document.getElementById('reset').disabled = true;
                    document.getElementById('reset').style.opacity = 0.5;
                    namespace.dialog.close();
                }
            }]
        );
    };
    function setDevices(devicesList) {
        document.getElementById('devices-list').innerHTML = '';
        devicesList.forEach(function (device) {
            devices[device.id] = device;
            addDevice(device);
        });
    }

    namespace.setDevices = setDevices;

    function deleteDevice(deviceId) {
        delete devices[deviceId];
        document.getElementById('devices-list').querySelector(`[data-device-id='${deviceId}']`).remove();
    }
    namespace.deleteDevice = deleteDevice;
    window.addEventListener('keydown', function (e) {
        if (e.keyCode === 27) {
            namespace.dialog.close();
        }
    });
    let settings = {
        addDevice: addDevice,
        getDevice: getDevice,
        setDevices: setDevices,
        deleteDevice: deleteDevice
    };
    namespace.settings = settings;

}
initSettings(namespace);

function initPages(namespace) {
    'use strict';
    const bodyNode = document.querySelector('body');
    function showPage(pageId) {
        namespace.currentPage = pageId;
        Array.prototype.slice.call(document.querySelectorAll('.page')).forEach(function (page) {
            if (page.id === pageId) {
                page.style.display = 'block';
                bodyNode.classList.add(page.id)
            } else {
                page.style.display = 'none';
                bodyNode.classList.remove(page.id);
            }
        });
        switch (pageId) {
        case 'page-pairing-textcode':
            operaTouchBackground.port.postMessage({type: 'GET_PAIRING_TOKEN', messageId: 'pairing-text', value: true});
            break;
        case 'page-pairing':
            namespace.pairing.clearQrCode();
            operaTouchBackground.port.postMessage({type: 'GET_PAIRING_TOKEN', messageId: 'pairing'});
            break;
        case 'page-chat':
            namespace.chat.scrollChatDown();
            namespace.chat.ifNotMobileFocusInput();
            break;
        }
    }
    namespace.showPage = showPage;
    showPage('page-loading');

    document.body.addEventListener('wheel', function (e) {
        if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
            e.preventDefault();
            e.stopPropagation();
        }
    });
}
initPages(namespace);

function prepareDialog(namespace) {
    'use strict';
    let dialogContainerEl = document.getElementById('dialog-container');
    let dialogButtonsBarEl = dialogContainerEl.querySelector('.button-bar');
    void 0;
    function open(title, text, buttons) {
        void 0;
        dialogContainerEl.querySelector('.title').textContent = title;
        dialogContainerEl.querySelector('.content').textContent = text;
        dialogButtonsBarEl.innerHTML = '';
        buttons.forEach(function (button) {
            let buttonEl = document.createElement('button');
            buttonEl.textContent = button.label;
            if (button.class) {
                buttonEl.classList.add(button.class);
            }
            buttonEl.onclick = button.onclick;
            dialogButtonsBarEl.appendChild(buttonEl);
        });
        dialogContainerEl.style.display = 'block';
    }
    function close() {
        dialogContainerEl.style.display = 'none';
    }

    let dialog = {
        open: open,
        close: close
    };
    namespace.dialog = dialog;
    return dialog;
}
prepareDialog(namespace);


function initContextmenu(namespace) {
    'use strict';
    let contextmenuEl = document.getElementById('message-contextmenu');
    let opened = false;
    namespace.contextMenuOpened = opened;
    function hideMenu() {
        opened = false;
        namespace.contextMenuOpened = opened;
        Array.prototype.slice.call(document.querySelectorAll('.contextmenu-opened')).forEach(function (element) {
            element.classList.remove('contextmenu-opened');
        });
        contextmenuEl.style.opacity = 0;
        setTimeout(function () {
            contextmenuEl.style.display = 'none';
        }, 300);
    }

    function showMenu(x, y, items, selectCallback, preferRight, isTouch) {
        void 0;
        contextmenuEl.innerHTML = '';
        let posOffsetX = 8,
            posOffsetY = 8;
        if (isTouch) {
            posOffsetX = 32;
            posOffsetY = 8;
        }
        items.forEach(function (item) {
            let itemEl = document.createElement('span');
            itemEl.className = 'item';
            itemEl.textContent = item.title;
            addEvent(itemEl, 'tap', function (e) {
                if (opened) {
                    selectCallback(e, item);
                }
            });
            contextmenuEl.appendChild(itemEl);
        });
        opened = true;
        namespace.contextMenuOpened = opened;
        contextmenuEl.style.display = 'block';
        contextmenuEl.style.opacity = 1;
        let top = y - contextmenuEl.clientHeight - posOffsetY;

        let left = x - contextmenuEl.clientWidth - posOffsetX;
        if (left < 0) {
            left = x + posOffsetX;
        }
        if (preferRight) {
            left = x + posOffsetX;
            if (left + contextmenuEl.clientWidth > window.innerWidth) {
                left = x - contextmenuEl.clientWidth - posOffsetX;
            }
        }

        if (left + contextmenuEl.clientWidth > window.innerWidth - 2) {
            left = window.innerWidth - contextmenuEl.clientWidth - 2;
            top -= posOffsetY;
        }

        if (left < 2) {
            left = 2;
            top -= posOffsetY;
        }

        contextmenuEl.style.left = `${left}px`;
        contextmenuEl.style.top = `${top}px`;

    }
    namespace.showContextMenu = showMenu;
    if (!window.isIOS) {
        window.addEventListener('click', hideMenu);
    }
    window.addEventListener('touchstart', hideMenu);
    window.addEventListener('resize', hideMenu);
    window.addEventListener('blur', hideMenu);
    namespace.hideContextMenu = hideMenu;
}

initContextmenu(namespace);

function initToastmessage(namespace) {
    'use strict';
    const hideToastTimeout = 1000 * 2;
    let toastEl = document.querySelector('#toastmessage');
    let toastTextEl = toastEl.querySelector('#toastmessage .text');
    let hideToastTo = false;
    function showToast(text) {
        if (namespace.Neon && namespace.Neon.showToast) {
            return namespace.Neon.showToast(text);
        }
        toastTextEl.textContent = text;
        toastEl.style.display = 'block';
        if (hideToastTo) {
            clearTimeout(hideToastTo);
        }
        hideToastTo = setTimeout(function () {
            toastEl.style.display = 'none';
        }, hideToastTimeout);
    }
    namespace.showToast = showToast;
}
initToastmessage(namespace);

this.createjs=this.createjs||{},createjs.extend=function(a,b){"use strict";function c(){this.constructor=a}return c.prototype=b.prototype,a.prototype=new c},this.createjs=this.createjs||{},createjs.promote=function(a,b){"use strict";var c=a.prototype,d=Object.getPrototypeOf&&Object.getPrototypeOf(c)||c.__proto__;if(d){c[(b+="_")+"constructor"]=d.constructor;for(var e in d)c.hasOwnProperty(e)&&"function"==typeof d[e]&&(c[b+e]=d[e])}return a},this.createjs=this.createjs||{},createjs.indexOf=function(a,b){"use strict";for(var c=0,d=a.length;d>c;c++)if(b===a[c])return c;return-1},this.createjs=this.createjs||{},function(){"use strict";function a(a,b,c){this.type=a,this.target=null,this.currentTarget=null,this.eventPhase=0,this.bubbles=!!b,this.cancelable=!!c,this.timeStamp=(new Date).getTime(),this.defaultPrevented=!1,this.propagationStopped=!1,this.immediatePropagationStopped=!1,this.removed=!1}var b=a.prototype;b.preventDefault=function(){this.defaultPrevented=this.cancelable&&!0},b.stopPropagation=function(){this.propagationStopped=!0},b.stopImmediatePropagation=function(){this.immediatePropagationStopped=this.propagationStopped=!0},b.remove=function(){this.removed=!0},b.clone=function(){return new a(this.type,this.bubbles,this.cancelable)},b.set=function(a){for(var b in a)this[b]=a[b];return this},b.toString=function(){return"[Event (type="+this.type+")]"},createjs.Event=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(){this._listeners=null,this._captureListeners=null}var b=a.prototype;a.initialize=function(a){a.addEventListener=b.addEventListener,a.on=b.on,a.removeEventListener=a.off=b.removeEventListener,a.removeAllEventListeners=b.removeAllEventListeners,a.hasEventListener=b.hasEventListener,a.dispatchEvent=b.dispatchEvent,a._dispatchEvent=b._dispatchEvent,a.willTrigger=b.willTrigger},b.addEventListener=function(a,b,c){var d;d=c?this._captureListeners=this._captureListeners||{}:this._listeners=this._listeners||{};var e=d[a];return e&&this.removeEventListener(a,b,c),e=d[a],e?e.push(b):d[a]=[b],b},b.on=function(a,b,c,d,e,f){return b.handleEvent&&(c=c||b,b=b.handleEvent),c=c||this,this.addEventListener(a,function(a){b.call(c,a,e),d&&a.remove()},f)},b.removeEventListener=function(a,b,c){var d=c?this._captureListeners:this._listeners;if(d){var e=d[a];if(e)for(var f=0,g=e.length;g>f;f++)if(e[f]==b){1==g?delete d[a]:e.splice(f,1);break}}},b.off=b.removeEventListener,b.removeAllEventListeners=function(a){a?(this._listeners&&delete this._listeners[a],this._captureListeners&&delete this._captureListeners[a]):this._listeners=this._captureListeners=null},b.dispatchEvent=function(a,b,c){if("string"==typeof a){var d=this._listeners;if(!(b||d&&d[a]))return!0;a=new createjs.Event(a,b,c)}else a.target&&a.clone&&(a=a.clone());try{a.target=this}catch(e){}if(a.bubbles&&this.parent){for(var f=this,g=[f];f.parent;)g.push(f=f.parent);var h,i=g.length;for(h=i-1;h>=0&&!a.propagationStopped;h--)g[h]._dispatchEvent(a,1+(0==h));for(h=1;i>h&&!a.propagationStopped;h++)g[h]._dispatchEvent(a,3)}else this._dispatchEvent(a,2);return!a.defaultPrevented},b.hasEventListener=function(a){var b=this._listeners,c=this._captureListeners;return!!(b&&b[a]||c&&c[a])},b.willTrigger=function(a){for(var b=this;b;){if(b.hasEventListener(a))return!0;b=b.parent}return!1},b.toString=function(){return"[EventDispatcher]"},b._dispatchEvent=function(a,b){var c,d=1==b?this._captureListeners:this._listeners;if(a&&d){var e=d[a.type];if(!e||!(c=e.length))return;try{a.currentTarget=this}catch(f){}try{a.eventPhase=b}catch(f){}a.removed=!1,e=e.slice();for(var g=0;c>g&&!a.immediatePropagationStopped;g++){var h=e[g];h.handleEvent?h.handleEvent(a):h(a),a.removed&&(this.off(a.type,h,1==b),a.removed=!1)}}},createjs.EventDispatcher=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(){throw"Ticker cannot be instantiated."}a.RAF_SYNCHED="synched",a.RAF="raf",a.TIMEOUT="timeout",a.useRAF=!1,a.timingMode=null,a.maxDelta=0,a.paused=!1,a.removeEventListener=null,a.removeAllEventListeners=null,a.dispatchEvent=null,a.hasEventListener=null,a._listeners=null,createjs.EventDispatcher.initialize(a),a._addEventListener=a.addEventListener,a.addEventListener=function(){return!a._inited&&a.init(),a._addEventListener.apply(a,arguments)},a._inited=!1,a._startTime=0,a._pausedTime=0,a._ticks=0,a._pausedTicks=0,a._interval=50,a._lastTime=0,a._times=null,a._tickTimes=null,a._timerId=null,a._raf=!0,a.setInterval=function(b){a._interval=b,a._inited&&a._setupTick()},a.getInterval=function(){return a._interval},a.setFPS=function(b){a.setInterval(1e3/b)},a.getFPS=function(){return 1e3/a._interval};try{Object.defineProperties(a,{interval:{get:a.getInterval,set:a.setInterval},framerate:{get:a.getFPS,set:a.setFPS}})}catch(b){void 0}a.init=function(){a._inited||(a._inited=!0,a._times=[],a._tickTimes=[],a._startTime=a._getTime(),a._times.push(a._lastTime=0),a.interval=a._interval)},a.reset=function(){if(a._raf){var b=window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.oCancelAnimationFrame||window.msCancelAnimationFrame;b&&b(a._timerId)}else clearTimeout(a._timerId);a.removeAllEventListeners("tick"),a._timerId=a._times=a._tickTimes=null,a._startTime=a._lastTime=a._ticks=0,a._inited=!1},a.getMeasuredTickTime=function(b){var c=0,d=a._tickTimes;if(!d||d.length<1)return-1;b=Math.min(d.length,b||0|a.getFPS());for(var e=0;b>e;e++)c+=d[e];return c/b},a.getMeasuredFPS=function(b){var c=a._times;return!c||c.length<2?-1:(b=Math.min(c.length-1,b||0|a.getFPS()),1e3/((c[0]-c[b])/b))},a.setPaused=function(b){a.paused=b},a.getPaused=function(){return a.paused},a.getTime=function(b){return a._startTime?a._getTime()-(b?a._pausedTime:0):-1},a.getEventTime=function(b){return a._startTime?(a._lastTime||a._startTime)-(b?a._pausedTime:0):-1},a.getTicks=function(b){return a._ticks-(b?a._pausedTicks:0)},a._handleSynch=function(){a._timerId=null,a._setupTick(),a._getTime()-a._lastTime>=.97*(a._interval-1)&&a._tick()},a._handleRAF=function(){a._timerId=null,a._setupTick(),a._tick()},a._handleTimeout=function(){a._timerId=null,a._setupTick(),a._tick()},a._setupTick=function(){if(null==a._timerId){var b=a.timingMode||a.useRAF&&a.RAF_SYNCHED;if(b==a.RAF_SYNCHED||b==a.RAF){var c=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame;if(c)return a._timerId=c(b==a.RAF?a._handleRAF:a._handleSynch),void(a._raf=!0)}a._raf=!1,a._timerId=setTimeout(a._handleTimeout,a._interval)}},a._tick=function(){var b=a.paused,c=a._getTime(),d=c-a._lastTime;if(a._lastTime=c,a._ticks++,b&&(a._pausedTicks++,a._pausedTime+=d),a.hasEventListener("tick")){var e=new createjs.Event("tick"),f=a.maxDelta;e.delta=f&&d>f?f:d,e.paused=b,e.time=c,e.runTime=c-a._pausedTime,a.dispatchEvent(e)}for(a._tickTimes.unshift(a._getTime()-c);a._tickTimes.length>100;)a._tickTimes.pop();for(a._times.unshift(c);a._times.length>100;)a._times.pop()};var c=window.performance&&(performance.now||performance.mozNow||performance.msNow||performance.oNow||performance.webkitNow);a._getTime=function(){return(c&&c.call(performance)||(new Date).getTime())-a._startTime},createjs.Ticker=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(){throw"UID cannot be instantiated"}a._nextID=0,a.get=function(){return a._nextID++},createjs.UID=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b,c,d,e,f,g,h,i,j,k){this.Event_constructor(a,b,c),this.stageX=d,this.stageY=e,this.rawX=null==i?d:i,this.rawY=null==j?e:j,this.nativeEvent=f,this.pointerID=g,this.primary=!!h,this.relatedTarget=k}var b=createjs.extend(a,createjs.Event);b._get_localX=function(){return this.currentTarget.globalToLocal(this.rawX,this.rawY).x},b._get_localY=function(){return this.currentTarget.globalToLocal(this.rawX,this.rawY).y},b._get_isTouch=function(){return-1!==this.pointerID};try{Object.defineProperties(b,{localX:{get:b._get_localX},localY:{get:b._get_localY},isTouch:{get:b._get_isTouch}})}catch(c){}b.clone=function(){return new a(this.type,this.bubbles,this.cancelable,this.stageX,this.stageY,this.nativeEvent,this.pointerID,this.primary,this.rawX,this.rawY)},b.toString=function(){return"[MouseEvent (type="+this.type+" stageX="+this.stageX+" stageY="+this.stageY+")]"},createjs.MouseEvent=createjs.promote(a,"Event")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b,c,d,e,f){this.setValues(a,b,c,d,e,f)}var b=a.prototype;a.DEG_TO_RAD=Math.PI/180,a.identity=null,b.setValues=function(a,b,c,d,e,f){return this.a=null==a?1:a,this.b=b||0,this.c=c||0,this.d=null==d?1:d,this.tx=e||0,this.ty=f||0,this},b.append=function(a,b,c,d,e,f){var g=this.a,h=this.b,i=this.c,j=this.d;return(1!=a||0!=b||0!=c||1!=d)&&(this.a=g*a+i*b,this.b=h*a+j*b,this.c=g*c+i*d,this.d=h*c+j*d),this.tx=g*e+i*f+this.tx,this.ty=h*e+j*f+this.ty,this},b.prepend=function(a,b,c,d,e,f){var g=this.a,h=this.c,i=this.tx;return this.a=a*g+c*this.b,this.b=b*g+d*this.b,this.c=a*h+c*this.d,this.d=b*h+d*this.d,this.tx=a*i+c*this.ty+e,this.ty=b*i+d*this.ty+f,this},b.appendMatrix=function(a){return this.append(a.a,a.b,a.c,a.d,a.tx,a.ty)},b.prependMatrix=function(a){return this.prepend(a.a,a.b,a.c,a.d,a.tx,a.ty)},b.appendTransform=function(b,c,d,e,f,g,h,i,j){if(f%360)var k=f*a.DEG_TO_RAD,l=Math.cos(k),m=Math.sin(k);else l=1,m=0;return g||h?(g*=a.DEG_TO_RAD,h*=a.DEG_TO_RAD,this.append(Math.cos(h),Math.sin(h),-Math.sin(g),Math.cos(g),b,c),this.append(l*d,m*d,-m*e,l*e,0,0)):this.append(l*d,m*d,-m*e,l*e,b,c),(i||j)&&(this.tx-=i*this.a+j*this.c,this.ty-=i*this.b+j*this.d),this},b.prependTransform=function(b,c,d,e,f,g,h,i,j){if(f%360)var k=f*a.DEG_TO_RAD,l=Math.cos(k),m=Math.sin(k);else l=1,m=0;return(i||j)&&(this.tx-=i,this.ty-=j),g||h?(g*=a.DEG_TO_RAD,h*=a.DEG_TO_RAD,this.prepend(l*d,m*d,-m*e,l*e,0,0),this.prepend(Math.cos(h),Math.sin(h),-Math.sin(g),Math.cos(g),b,c)):this.prepend(l*d,m*d,-m*e,l*e,b,c),this},b.rotate=function(b){b*=a.DEG_TO_RAD;var c=Math.cos(b),d=Math.sin(b),e=this.a,f=this.b;return this.a=e*c+this.c*d,this.b=f*c+this.d*d,this.c=-e*d+this.c*c,this.d=-f*d+this.d*c,this},b.skew=function(b,c){return b*=a.DEG_TO_RAD,c*=a.DEG_TO_RAD,this.append(Math.cos(c),Math.sin(c),-Math.sin(b),Math.cos(b),0,0),this},b.scale=function(a,b){return this.a*=a,this.b*=a,this.c*=b,this.d*=b,this},b.translate=function(a,b){return this.tx+=this.a*a+this.c*b,this.ty+=this.b*a+this.d*b,this},b.identity=function(){return this.a=this.d=1,this.b=this.c=this.tx=this.ty=0,this},b.invert=function(){var a=this.a,b=this.b,c=this.c,d=this.d,e=this.tx,f=a*d-b*c;return this.a=d/f,this.b=-b/f,this.c=-c/f,this.d=a/f,this.tx=(c*this.ty-d*e)/f,this.ty=-(a*this.ty-b*e)/f,this},b.isIdentity=function(){return 0===this.tx&&0===this.ty&&1===this.a&&0===this.b&&0===this.c&&1===this.d},b.equals=function(a){return this.tx===a.tx&&this.ty===a.ty&&this.a===a.a&&this.b===a.b&&this.c===a.c&&this.d===a.d},b.transformPoint=function(a,b,c){return c=c||{},c.x=a*this.a+b*this.c+this.tx,c.y=a*this.b+b*this.d+this.ty,c},b.decompose=function(b){null==b&&(b={}),b.x=this.tx,b.y=this.ty,b.scaleX=Math.sqrt(this.a*this.a+this.b*this.b),b.scaleY=Math.sqrt(this.c*this.c+this.d*this.d);var c=Math.atan2(-this.c,this.d),d=Math.atan2(this.b,this.a),e=Math.abs(1-c/d);return 1e-5>e?(b.rotation=d/a.DEG_TO_RAD,this.a<0&&this.d>=0&&(b.rotation+=b.rotation<=0?180:-180),b.skewX=b.skewY=0):(b.skewX=c/a.DEG_TO_RAD,b.skewY=d/a.DEG_TO_RAD),b},b.copy=function(a){return this.setValues(a.a,a.b,a.c,a.d,a.tx,a.ty)},b.clone=function(){return new a(this.a,this.b,this.c,this.d,this.tx,this.ty)},b.toString=function(){return"[Matrix2D (a="+this.a+" b="+this.b+" c="+this.c+" d="+this.d+" tx="+this.tx+" ty="+this.ty+")]"},a.identity=new a,createjs.Matrix2D=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b,c,d,e){this.setValues(a,b,c,d,e)}var b=a.prototype;b.setValues=function(a,b,c,d,e){return this.visible=null==a?!0:!!a,this.alpha=null==b?1:b,this.shadow=c,this.compositeOperation=d,this.matrix=e||this.matrix&&this.matrix.identity()||new createjs.Matrix2D,this},b.append=function(a,b,c,d,e){return this.alpha*=b,this.shadow=c||this.shadow,this.compositeOperation=d||this.compositeOperation,this.visible=this.visible&&a,e&&this.matrix.appendMatrix(e),this},b.prepend=function(a,b,c,d,e){return this.alpha*=b,this.shadow=this.shadow||c,this.compositeOperation=this.compositeOperation||d,this.visible=this.visible&&a,e&&this.matrix.prependMatrix(e),this},b.identity=function(){return this.visible=!0,this.alpha=1,this.shadow=this.compositeOperation=null,this.matrix.identity(),this},b.clone=function(){return new a(this.alpha,this.shadow,this.compositeOperation,this.visible,this.matrix.clone())},createjs.DisplayProps=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b){this.setValues(a,b)}var b=a.prototype;b.setValues=function(a,b){return this.x=a||0,this.y=b||0,this},b.copy=function(a){return this.x=a.x,this.y=a.y,this},b.clone=function(){return new a(this.x,this.y)},b.toString=function(){return"[Point (x="+this.x+" y="+this.y+")]"},createjs.Point=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b,c,d){this.setValues(a,b,c,d)}var b=a.prototype;b.setValues=function(a,b,c,d){return this.x=a||0,this.y=b||0,this.width=c||0,this.height=d||0,this},b.extend=function(a,b,c,d){return c=c||0,d=d||0,a+c>this.x+this.width&&(this.width=a+c-this.x),b+d>this.y+this.height&&(this.height=b+d-this.y),a<this.x&&(this.width+=this.x-a,this.x=a),b<this.y&&(this.height+=this.y-b,this.y=b),this},b.pad=function(a,b,c,d){return this.x-=b,this.y-=a,this.width+=b+d,this.height+=a+c,this},b.copy=function(a){return this.setValues(a.x,a.y,a.width,a.height)},b.contains=function(a,b,c,d){return c=c||0,d=d||0,a>=this.x&&a+c<=this.x+this.width&&b>=this.y&&b+d<=this.y+this.height},b.union=function(a){return this.clone().extend(a.x,a.y,a.width,a.height)},b.intersection=function(b){var c=b.x,d=b.y,e=c+b.width,f=d+b.height;return this.x>c&&(c=this.x),this.y>d&&(d=this.y),this.x+this.width<e&&(e=this.x+this.width),this.y+this.height<f&&(f=this.y+this.height),c>=e||d>=f?null:new a(c,d,e-c,f-d)},b.intersects=function(a){return a.x<=this.x+this.width&&this.x<=a.x+a.width&&a.y<=this.y+this.height&&this.y<=a.y+a.height},b.isEmpty=function(){return this.width<=0||this.height<=0},b.clone=function(){return new a(this.x,this.y,this.width,this.height)},b.toString=function(){return"[Rectangle (x="+this.x+" y="+this.y+" width="+this.width+" height="+this.height+")]"},createjs.Rectangle=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b,c,d,e,f,g){a.addEventListener&&(this.target=a,this.overLabel=null==c?"over":c,this.outLabel=null==b?"out":b,this.downLabel=null==d?"down":d,this.play=e,this._isPressed=!1,this._isOver=!1,this._enabled=!1,a.mouseChildren=!1,this.enabled=!0,this.handleEvent({}),f&&(g&&(f.actionsEnabled=!1,f.gotoAndStop&&f.gotoAndStop(g)),a.hitArea=f))}var b=a.prototype;b.setEnabled=function(a){if(a!=this._enabled){var b=this.target;this._enabled=a,a?(b.cursor="pointer",b.addEventListener("rollover",this),b.addEventListener("rollout",this),b.addEventListener("mousedown",this),b.addEventListener("pressup",this),b._reset&&(b.__reset=b._reset,b._reset=this._reset)):(b.cursor=null,b.removeEventListener("rollover",this),b.removeEventListener("rollout",this),b.removeEventListener("mousedown",this),b.removeEventListener("pressup",this),b.__reset&&(b._reset=b.__reset,delete b.__reset))}},b.getEnabled=function(){return this._enabled};try{Object.defineProperties(b,{enabled:{get:b.getEnabled,set:b.setEnabled}})}catch(c){}b.toString=function(){return"[ButtonHelper]"},b.handleEvent=function(a){var b,c=this.target,d=a.type;"mousedown"==d?(this._isPressed=!0,b=this.downLabel):"pressup"==d?(this._isPressed=!1,b=this._isOver?this.overLabel:this.outLabel):"rollover"==d?(this._isOver=!0,b=this._isPressed?this.downLabel:this.overLabel):(this._isOver=!1,b=this._isPressed?this.overLabel:this.outLabel),this.play?c.gotoAndPlay&&c.gotoAndPlay(b):c.gotoAndStop&&c.gotoAndStop(b)},b._reset=function(){var a=this.paused;this.__reset(),this.paused=a},createjs.ButtonHelper=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b,c,d){this.color=a||"black",this.offsetX=b||0,this.offsetY=c||0,this.blur=d||0}var b=a.prototype;a.identity=new a("transparent",0,0,0),b.toString=function(){return"[Shadow]"},b.clone=function(){return new a(this.color,this.offsetX,this.offsetY,this.blur)},createjs.Shadow=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(a){this.EventDispatcher_constructor(),this.complete=!0,this.framerate=0,this._animations=null,this._frames=null,this._images=null,this._data=null,this._loadCount=0,this._frameHeight=0,this._frameWidth=0,this._numFrames=0,this._regX=0,this._regY=0,this._spacing=0,this._margin=0,this._parseData(a)}var b=createjs.extend(a,createjs.EventDispatcher);b.getAnimations=function(){return this._animations.slice()};try{Object.defineProperties(b,{animations:{get:b.getAnimations}})}catch(c){}b.getNumFrames=function(a){if(null==a)return this._frames?this._frames.length:this._numFrames||0;var b=this._data[a];return null==b?0:b.frames.length},b.getAnimation=function(a){return this._data[a]},b.getFrame=function(a){var b;return this._frames&&(b=this._frames[a])?b:null},b.getFrameBounds=function(a,b){var c=this.getFrame(a);return c?(b||new createjs.Rectangle).setValues(-c.regX,-c.regY,c.rect.width,c.rect.height):null},b.toString=function(){return"[SpriteSheet]"},b.clone=function(){throw"SpriteSheet cannot be cloned."},b._parseData=function(a){var b,c,d,e;if(null!=a){if(this.framerate=a.framerate||0,a.images&&(c=a.images.length)>0)for(e=this._images=[],b=0;c>b;b++){var f=a.images[b];if("string"==typeof f){var g=f;f=document.createElement("img"),f.src=g}e.push(f),f.getContext||f.naturalWidth||(this._loadCount++,this.complete=!1,function(a,b){f.onload=function(){a._handleImageLoad(b)}}(this,g),function(a,b){f.onerror=function(){a._handleImageError(b)}}(this,g))}if(null==a.frames);else if(Array.isArray(a.frames))for(this._frames=[],e=a.frames,b=0,c=e.length;c>b;b++){var h=e[b];this._frames.push({image:this._images[h[4]?h[4]:0],rect:new createjs.Rectangle(h[0],h[1],h[2],h[3]),regX:h[5]||0,regY:h[6]||0})}else d=a.frames,this._frameWidth=d.width,this._frameHeight=d.height,this._regX=d.regX||0,this._regY=d.regY||0,this._spacing=d.spacing||0,this._margin=d.margin||0,this._numFrames=d.count,0==this._loadCount&&this._calculateFrames();if(this._animations=[],null!=(d=a.animations)){this._data={};var i;for(i in d){var j={name:i},k=d[i];if("number"==typeof k)e=j.frames=[k];else if(Array.isArray(k))if(1==k.length)j.frames=[k[0]];else for(j.speed=k[3],j.next=k[2],e=j.frames=[],b=k[0];b<=k[1];b++)e.push(b);else{j.speed=k.speed,j.next=k.next;var l=k.frames;e=j.frames="number"==typeof l?[l]:l.slice(0)}(j.next===!0||void 0===j.next)&&(j.next=i),(j.next===!1||e.length<2&&j.next==i)&&(j.next=null),j.speed||(j.speed=1),this._animations.push(i),this._data[i]=j}}}},b._handleImageLoad=function(a){0==--this._loadCount&&(this._calculateFrames(),this.complete=!0,this.dispatchEvent("complete"))},b._handleImageError=function(a){var b=new createjs.Event("error");b.src=a,this.dispatchEvent(b),0==--this._loadCount&&this.dispatchEvent("complete")},b._calculateFrames=function(){if(!this._frames&&0!=this._frameWidth){this._frames=[];var a=this._numFrames||1e5,b=0,c=this._frameWidth,d=this._frameHeight,e=this._spacing,f=this._margin;a:for(var g=0,h=this._images;g<h.length;g++)for(var i=h[g],j=i.width,k=i.height,l=f;k-f-d>=l;){for(var m=f;j-f-c>=m;){if(b>=a)break a;b++,this._frames.push({image:i,rect:new createjs.Rectangle(m,l,c,d),regX:this._regX,regY:this._regY}),m+=c+e}l+=d+e}this._numFrames=b}},createjs.SpriteSheet=createjs.promote(a,"EventDispatcher")}(),this.createjs=this.createjs||{},function(){"use strict";function a(){this.command=null,this._stroke=null,this._strokeStyle=null,this._oldStrokeStyle=null,this._strokeDash=null,this._oldStrokeDash=null,this._strokeIgnoreScale=!1,this._fill=null,this._instructions=[],this._commitIndex=0,this._activeInstructions=[],this._dirty=!1,this._storeIndex=0,this.clear()}var b=a.prototype,c=a;a.getRGB=function(a,b,c,d){return null!=a&&null==c&&(d=b,c=255&a,b=a>>8&255,a=a>>16&255),null==d?"rgb("+a+","+b+","+c+")":"rgba("+a+","+b+","+c+","+d+")"},a.getHSL=function(a,b,c,d){return null==d?"hsl("+a%360+","+b+"%,"+c+"%)":"hsla("+a%360+","+b+"%,"+c+"%,"+d+")"},a.BASE_64={A:0,B:1,C:2,D:3,E:4,F:5,G:6,H:7,I:8,J:9,K:10,L:11,M:12,N:13,O:14,P:15,Q:16,R:17,S:18,T:19,U:20,V:21,W:22,X:23,Y:24,Z:25,a:26,b:27,c:28,d:29,e:30,f:31,g:32,h:33,i:34,j:35,k:36,l:37,m:38,n:39,o:40,p:41,q:42,r:43,s:44,t:45,u:46,v:47,w:48,x:49,y:50,z:51,0:52,1:53,2:54,3:55,4:56,5:57,6:58,7:59,8:60,9:61,"+":62,"/":63},a.STROKE_CAPS_MAP=["butt","round","square"],a.STROKE_JOINTS_MAP=["miter","round","bevel"];var d=createjs.createCanvas?createjs.createCanvas():document.createElement("canvas");d.getContext&&(a._ctx=d.getContext("2d"),d.width=d.height=1),b.getInstructions=function(){return this._updateInstructions(),this._instructions};try{Object.defineProperties(b,{instructions:{get:b.getInstructions}})}catch(e){}b.isEmpty=function(){return!(this._instructions.length||this._activeInstructions.length)},b.draw=function(a,b){this._updateInstructions();for(var c=this._instructions,d=this._storeIndex,e=c.length;e>d;d++)c[d].exec(a,b)},b.drawAsPath=function(a){this._updateInstructions();for(var b,c=this._instructions,d=this._storeIndex,e=c.length;e>d;d++)(b=c[d]).path!==!1&&b.exec(a)},b.moveTo=function(a,b){return this.append(new c.MoveTo(a,b),!0)},b.lineTo=function(a,b){return this.append(new c.LineTo(a,b))},b.arcTo=function(a,b,d,e,f){return this.append(new c.ArcTo(a,b,d,e,f))},b.arc=function(a,b,d,e,f,g){return this.append(new c.Arc(a,b,d,e,f,g))},b.quadraticCurveTo=function(a,b,d,e){return this.append(new c.QuadraticCurveTo(a,b,d,e))},b.bezierCurveTo=function(a,b,d,e,f,g){return this.append(new c.BezierCurveTo(a,b,d,e,f,g))},b.rect=function(a,b,d,e){return this.append(new c.Rect(a,b,d,e))},b.closePath=function(){return this._activeInstructions.length?this.append(new c.ClosePath):this},b.clear=function(){return this._instructions.length=this._activeInstructions.length=this._commitIndex=0,this._strokeStyle=this._oldStrokeStyle=this._stroke=this._fill=this._strokeDash=this._oldStrokeDash=null,this._dirty=this._strokeIgnoreScale=!1,this},b.beginFill=function(a){return this._setFill(a?new c.Fill(a):null)},b.beginLinearGradientFill=function(a,b,d,e,f,g){return this._setFill((new c.Fill).linearGradient(a,b,d,e,f,g))},b.beginRadialGradientFill=function(a,b,d,e,f,g,h,i){return this._setFill((new c.Fill).radialGradient(a,b,d,e,f,g,h,i))},b.beginBitmapFill=function(a,b,d){return this._setFill(new c.Fill(null,d).bitmap(a,b))},b.endFill=function(){return this.beginFill()},b.setStrokeStyle=function(a,b,d,e,f){return this._updateInstructions(!0),this._strokeStyle=this.command=new c.StrokeStyle(a,b,d,e,f),this._stroke&&(this._stroke.ignoreScale=f),this._strokeIgnoreScale=f,this},b.setStrokeDash=function(a,b){return this._updateInstructions(!0),this._strokeDash=this.command=new c.StrokeDash(a,b),this},b.beginStroke=function(a){return this._setStroke(a?new c.Stroke(a):null)},b.beginLinearGradientStroke=function(a,b,d,e,f,g){return this._setStroke((new c.Stroke).linearGradient(a,b,d,e,f,g))},b.beginRadialGradientStroke=function(a,b,d,e,f,g,h,i){return this._setStroke((new c.Stroke).radialGradient(a,b,d,e,f,g,h,i))},b.beginBitmapStroke=function(a,b){return this._setStroke((new c.Stroke).bitmap(a,b))},b.endStroke=function(){return this.beginStroke()},b.curveTo=b.quadraticCurveTo,b.drawRect=b.rect,b.drawRoundRect=function(a,b,c,d,e){return this.drawRoundRectComplex(a,b,c,d,e,e,e,e)},b.drawRoundRectComplex=function(a,b,d,e,f,g,h,i){return this.append(new c.RoundRect(a,b,d,e,f,g,h,i))},b.drawCircle=function(a,b,d){return this.append(new c.Circle(a,b,d))},b.drawEllipse=function(a,b,d,e){return this.append(new c.Ellipse(a,b,d,e))},b.drawPolyStar=function(a,b,d,e,f,g){return this.append(new c.PolyStar(a,b,d,e,f,g))},b.append=function(a,b){return this._activeInstructions.push(a),this.command=a,b||(this._dirty=!0),this},b.decodePath=function(b){for(var c=[this.moveTo,this.lineTo,this.quadraticCurveTo,this.bezierCurveTo,this.closePath],d=[2,2,4,6,0],e=0,f=b.length,g=[],h=0,i=0,j=a.BASE_64;f>e;){var k=b.charAt(e),l=j[k],m=l>>3,n=c[m];if(!n||3&l)throw"bad path data (@"+e+"): "+k;var o=d[m];m||(h=i=0),g.length=0,e++;for(var p=(l>>2&1)+2,q=0;o>q;q++){var r=j[b.charAt(e)],s=r>>5?-1:1;r=(31&r)<<6|j[b.charAt(e+1)],3==p&&(r=r<<6|j[b.charAt(e+2)]),r=s*r/10,q%2?h=r+=h:i=r+=i,g[q]=r,e+=p}n.apply(this,g)}return this},b.store=function(){return this._updateInstructions(!0),this._storeIndex=this._instructions.length,this},b.unstore=function(){return this._storeIndex=0,this},b.clone=function(){var b=new a;return b.command=this.command,b._stroke=this._stroke,b._strokeStyle=this._strokeStyle,b._strokeDash=this._strokeDash,b._strokeIgnoreScale=this._strokeIgnoreScale,b._fill=this._fill,b._instructions=this._instructions.slice(),b._commitIndex=this._commitIndex,b._activeInstructions=this._activeInstructions.slice(),b._dirty=this._dirty,b._storeIndex=this._storeIndex,b},b.toString=function(){return"[Graphics]"},b.mt=b.moveTo,b.lt=b.lineTo,b.at=b.arcTo,b.bt=b.bezierCurveTo,b.qt=b.quadraticCurveTo,b.a=b.arc,b.r=b.rect,b.cp=b.closePath,b.c=b.clear,b.f=b.beginFill,b.lf=b.beginLinearGradientFill,b.rf=b.beginRadialGradientFill,b.bf=b.beginBitmapFill,b.ef=b.endFill,b.ss=b.setStrokeStyle,b.sd=b.setStrokeDash,b.s=b.beginStroke,b.ls=b.beginLinearGradientStroke,b.rs=b.beginRadialGradientStroke,b.bs=b.beginBitmapStroke,b.es=b.endStroke,b.dr=b.drawRect,b.rr=b.drawRoundRect,b.rc=b.drawRoundRectComplex,b.dc=b.drawCircle,b.de=b.drawEllipse,b.dp=b.drawPolyStar,b.p=b.decodePath,b._updateInstructions=function(b){var c=this._instructions,d=this._activeInstructions,e=this._commitIndex;if(this._dirty&&d.length){c.length=e,c.push(a.beginCmd);var f=d.length,g=c.length;c.length=g+f;for(var h=0;f>h;h++)c[h+g]=d[h];this._fill&&c.push(this._fill),this._stroke&&(this._strokeDash!==this._oldStrokeDash&&(this._oldStrokeDash=this._strokeDash,c.push(this._strokeDash)),this._strokeStyle!==this._oldStrokeStyle&&(this._oldStrokeStyle=this._strokeStyle,c.push(this._strokeStyle)),c.push(this._stroke)),this._dirty=!1}b&&(d.length=0,this._commitIndex=c.length)},b._setFill=function(a){return this._updateInstructions(!0),this.command=this._fill=a,this},b._setStroke=function(a){return this._updateInstructions(!0),(this.command=this._stroke=a)&&(a.ignoreScale=this._strokeIgnoreScale),this},(c.LineTo=function(a,b){this.x=a,this.y=b}).prototype.exec=function(a){a.lineTo(this.x,this.y)},(c.MoveTo=function(a,b){this.x=a,this.y=b}).prototype.exec=function(a){a.moveTo(this.x,this.y)},(c.ArcTo=function(a,b,c,d,e){this.x1=a,this.y1=b,this.x2=c,this.y2=d,this.radius=e}).prototype.exec=function(a){a.arcTo(this.x1,this.y1,this.x2,this.y2,this.radius)},(c.Arc=function(a,b,c,d,e,f){this.x=a,this.y=b,this.radius=c,this.startAngle=d,this.endAngle=e,this.anticlockwise=!!f}).prototype.exec=function(a){a.arc(this.x,this.y,this.radius,this.startAngle,this.endAngle,this.anticlockwise)},(c.QuadraticCurveTo=function(a,b,c,d){this.cpx=a,this.cpy=b,this.x=c,this.y=d}).prototype.exec=function(a){a.quadraticCurveTo(this.cpx,this.cpy,this.x,this.y)},(c.BezierCurveTo=function(a,b,c,d,e,f){this.cp1x=a,this.cp1y=b,this.cp2x=c,this.cp2y=d,this.x=e,this.y=f}).prototype.exec=function(a){a.bezierCurveTo(this.cp1x,this.cp1y,this.cp2x,this.cp2y,this.x,this.y)},(c.Rect=function(a,b,c,d){this.x=a,this.y=b,this.w=c,this.h=d}).prototype.exec=function(a){a.rect(this.x,this.y,this.w,this.h)},(c.ClosePath=function(){}).prototype.exec=function(a){a.closePath()},(c.BeginPath=function(){}).prototype.exec=function(a){a.beginPath()},b=(c.Fill=function(a,b){this.style=a,this.matrix=b}).prototype,b.exec=function(a){if(this.style){a.fillStyle=this.style;var b=this.matrix;b&&(a.save(),a.transform(b.a,b.b,b.c,b.d,b.tx,b.ty)),a.fill(),b&&a.restore()}},b.linearGradient=function(b,c,d,e,f,g){for(var h=this.style=a._ctx.createLinearGradient(d,e,f,g),i=0,j=b.length;j>i;i++)h.addColorStop(c[i],b[i]);return h.props={colors:b,ratios:c,x0:d,y0:e,x1:f,y1:g,type:"linear"},this},b.radialGradient=function(b,c,d,e,f,g,h,i){for(var j=this.style=a._ctx.createRadialGradient(d,e,f,g,h,i),k=0,l=b.length;l>k;k++)j.addColorStop(c[k],b[k]);return j.props={colors:b,ratios:c,x0:d,y0:e,r0:f,x1:g,y1:h,r1:i,type:"radial"},this},b.bitmap=function(b,c){if(b.naturalWidth||b.getContext||b.readyState>=2){var d=this.style=a._ctx.createPattern(b,c||"");d.props={image:b,repetition:c,type:"bitmap"}}return this},b.path=!1,b=(c.Stroke=function(a,b){this.style=a,this.ignoreScale=b}).prototype,b.exec=function(a){this.style&&(a.strokeStyle=this.style,this.ignoreScale&&(a.save(),a.setTransform(1,0,0,1,0,0)),a.stroke(),this.ignoreScale&&a.restore())},b.linearGradient=c.Fill.prototype.linearGradient,b.radialGradient=c.Fill.prototype.radialGradient,b.bitmap=c.Fill.prototype.bitmap,b.path=!1,b=(c.StrokeStyle=function(a,b,c,d,e){this.width=a,this.caps=b,this.joints=c,this.miterLimit=d,this.ignoreScale=e}).prototype,b.exec=function(b){b.lineWidth=null==this.width?"1":this.width,b.lineCap=null==this.caps?"butt":isNaN(this.caps)?this.caps:a.STROKE_CAPS_MAP[this.caps],b.lineJoin=null==this.joints?"miter":isNaN(this.joints)?this.joints:a.STROKE_JOINTS_MAP[this.joints],b.miterLimit=null==this.miterLimit?"10":this.miterLimit,b.ignoreScale=null==this.ignoreScale?!1:this.ignoreScale},b.path=!1,(c.StrokeDash=function(a,b){this.segments=a,this.offset=b||0}).prototype.exec=function(a){a.setLineDash&&(a.setLineDash(this.segments||c.StrokeDash.EMPTY_SEGMENTS),a.lineDashOffset=this.offset||0)},c.StrokeDash.EMPTY_SEGMENTS=[],(c.RoundRect=function(a,b,c,d,e,f,g,h){this.x=a,this.y=b,this.w=c,this.h=d,this.radiusTL=e,this.radiusTR=f,this.radiusBR=g,this.radiusBL=h}).prototype.exec=function(a){var b=(j>i?i:j)/2,c=0,d=0,e=0,f=0,g=this.x,h=this.y,i=this.w,j=this.h,k=this.radiusTL,l=this.radiusTR,m=this.radiusBR,n=this.radiusBL;0>k&&(k*=c=-1),k>b&&(k=b),0>l&&(l*=d=-1),l>b&&(l=b),0>m&&(m*=e=-1),m>b&&(m=b),0>n&&(n*=f=-1),n>b&&(n=b),a.moveTo(g+i-l,h),a.arcTo(g+i+l*d,h-l*d,g+i,h+l,l),a.lineTo(g+i,h+j-m),a.arcTo(g+i+m*e,h+j+m*e,g+i-m,h+j,m),a.lineTo(g+n,h+j),a.arcTo(g-n*f,h+j+n*f,g,h+j-n,n),a.lineTo(g,h+k),a.arcTo(g-k*c,h-k*c,g+k,h,k),a.closePath()},(c.Circle=function(a,b,c){this.x=a,this.y=b,this.radius=c}).prototype.exec=function(a){a.arc(this.x,this.y,this.radius,0,2*Math.PI)},(c.Ellipse=function(a,b,c,d){this.x=a,this.y=b,this.w=c,this.h=d}).prototype.exec=function(a){var b=this.x,c=this.y,d=this.w,e=this.h,f=.5522848,g=d/2*f,h=e/2*f,i=b+d,j=c+e,k=b+d/2,l=c+e/2;a.moveTo(b,l),a.bezierCurveTo(b,l-h,k-g,c,k,c),a.bezierCurveTo(k+g,c,i,l-h,i,l),a.bezierCurveTo(i,l+h,k+g,j,k,j),a.bezierCurveTo(k-g,j,b,l+h,b,l)},(c.PolyStar=function(a,b,c,d,e,f){this.x=a,this.y=b,this.radius=c,this.sides=d,this.pointSize=e,this.angle=f}).prototype.exec=function(a){var b=this.x,c=this.y,d=this.radius,e=(this.angle||0)/180*Math.PI,f=this.sides,g=1-(this.pointSize||0),h=Math.PI/f;a.moveTo(b+Math.cos(e)*d,c+Math.sin(e)*d);for(var i=0;f>i;i++)e+=h,1!=g&&a.lineTo(b+Math.cos(e)*d*g,c+Math.sin(e)*d*g),e+=h,a.lineTo(b+Math.cos(e)*d,c+Math.sin(e)*d);a.closePath()},a.beginCmd=new c.BeginPath,createjs.Graphics=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(){this.EventDispatcher_constructor(),this.alpha=1,this.cacheCanvas=null,this.cacheID=0,this.id=createjs.UID.get(),this.mouseEnabled=!0,this.tickEnabled=!0,this.name=null,this.parent=null,this.regX=0,this.regY=0,this.rotation=0,this.scaleX=1,this.scaleY=1,this.skewX=0,this.skewY=0,this.shadow=null,this.visible=!0,this.x=0,this.y=0,this.transformMatrix=null,this.compositeOperation=null,this.snapToPixel=!0,this.filters=null,
this.mask=null,this.hitArea=null,this.cursor=null,this._cacheOffsetX=0,this._cacheOffsetY=0,this._filterOffsetX=0,this._filterOffsetY=0,this._cacheScale=1,this._cacheDataURLID=0,this._cacheDataURL=null,this._props=new createjs.DisplayProps,this._rectangle=new createjs.Rectangle,this._bounds=null}var b=createjs.extend(a,createjs.EventDispatcher);a._MOUSE_EVENTS=["click","dblclick","mousedown","mouseout","mouseover","pressmove","pressup","rollout","rollover"],a.suppressCrossDomainErrors=!1,a._snapToPixelEnabled=!1;var c=createjs.createCanvas?createjs.createCanvas():document.createElement("canvas");c.getContext&&(a._hitTestCanvas=c,a._hitTestContext=c.getContext("2d"),c.width=c.height=1),a._nextCacheID=1,b.getStage=function(){for(var a=this,b=createjs.Stage;a.parent;)a=a.parent;return a instanceof b?a:null};try{Object.defineProperties(b,{stage:{get:b.getStage}})}catch(d){}b.isVisible=function(){return!!(this.visible&&this.alpha>0&&0!=this.scaleX&&0!=this.scaleY)},b.draw=function(a,b){var c=this.cacheCanvas;if(b||!c)return!1;var d=this._cacheScale;return a.drawImage(c,this._cacheOffsetX+this._filterOffsetX,this._cacheOffsetY+this._filterOffsetY,c.width/d,c.height/d),!0},b.updateContext=function(b){var c=this,d=c.mask,e=c._props.matrix;d&&d.graphics&&!d.graphics.isEmpty()&&(d.getMatrix(e),b.transform(e.a,e.b,e.c,e.d,e.tx,e.ty),d.graphics.drawAsPath(b),b.clip(),e.invert(),b.transform(e.a,e.b,e.c,e.d,e.tx,e.ty)),this.getMatrix(e);var f=e.tx,g=e.ty;a._snapToPixelEnabled&&c.snapToPixel&&(f=f+(0>f?-.5:.5)|0,g=g+(0>g?-.5:.5)|0),b.transform(e.a,e.b,e.c,e.d,f,g),b.globalAlpha*=c.alpha,c.compositeOperation&&(b.globalCompositeOperation=c.compositeOperation),c.shadow&&this._applyShadow(b,c.shadow)},b.cache=function(a,b,c,d,e){e=e||1,this.cacheCanvas||(this.cacheCanvas=createjs.createCanvas?createjs.createCanvas():document.createElement("canvas")),this._cacheWidth=c,this._cacheHeight=d,this._cacheOffsetX=a,this._cacheOffsetY=b,this._cacheScale=e,this.updateCache()},b.updateCache=function(b){var c=this.cacheCanvas;if(!c)throw"cache() must be called before updateCache()";var d=this._cacheScale,e=this._cacheOffsetX*d,f=this._cacheOffsetY*d,g=this._cacheWidth,h=this._cacheHeight,i=c.getContext("2d"),j=this._getFilterBounds();e+=this._filterOffsetX=j.x,f+=this._filterOffsetY=j.y,g=Math.ceil(g*d)+j.width,h=Math.ceil(h*d)+j.height,g!=c.width||h!=c.height?(c.width=g,c.height=h):b||i.clearRect(0,0,g+1,h+1),i.save(),i.globalCompositeOperation=b,i.setTransform(d,0,0,d,-e,-f),this.draw(i,!0),this._applyFilters(),i.restore(),this.cacheID=a._nextCacheID++},b.uncache=function(){this._cacheDataURL=this.cacheCanvas=null,this.cacheID=this._cacheOffsetX=this._cacheOffsetY=this._filterOffsetX=this._filterOffsetY=0,this._cacheScale=1},b.getCacheDataURL=function(){return this.cacheCanvas?(this.cacheID!=this._cacheDataURLID&&(this._cacheDataURL=this.cacheCanvas.toDataURL()),this._cacheDataURL):null},b.localToGlobal=function(a,b,c){return this.getConcatenatedMatrix(this._props.matrix).transformPoint(a,b,c||new createjs.Point)},b.globalToLocal=function(a,b,c){return this.getConcatenatedMatrix(this._props.matrix).invert().transformPoint(a,b,c||new createjs.Point)},b.localToLocal=function(a,b,c,d){return d=this.localToGlobal(a,b,d),c.globalToLocal(d.x,d.y,d)},b.setTransform=function(a,b,c,d,e,f,g,h,i){return this.x=a||0,this.y=b||0,this.scaleX=null==c?1:c,this.scaleY=null==d?1:d,this.rotation=e||0,this.skewX=f||0,this.skewY=g||0,this.regX=h||0,this.regY=i||0,this},b.getMatrix=function(a){var b=this,c=a&&a.identity()||new createjs.Matrix2D;return b.transformMatrix?c.copy(b.transformMatrix):c.appendTransform(b.x,b.y,b.scaleX,b.scaleY,b.rotation,b.skewX,b.skewY,b.regX,b.regY)},b.getConcatenatedMatrix=function(a){for(var b=this,c=this.getMatrix(a);b=b.parent;)c.prependMatrix(b.getMatrix(b._props.matrix));return c},b.getConcatenatedDisplayProps=function(a){a=a?a.identity():new createjs.DisplayProps;var b=this,c=b.getMatrix(a.matrix);do a.prepend(b.visible,b.alpha,b.shadow,b.compositeOperation),b!=this&&c.prependMatrix(b.getMatrix(b._props.matrix));while(b=b.parent);return a},b.hitTest=function(b,c){var d=a._hitTestContext;d.setTransform(1,0,0,1,-b,-c),this.draw(d);var e=this._testHit(d);return d.setTransform(1,0,0,1,0,0),d.clearRect(0,0,2,2),e},b.set=function(a){for(var b in a)this[b]=a[b];return this},b.getBounds=function(){if(this._bounds)return this._rectangle.copy(this._bounds);var a=this.cacheCanvas;if(a){var b=this._cacheScale;return this._rectangle.setValues(this._cacheOffsetX,this._cacheOffsetY,a.width/b,a.height/b)}return null},b.getTransformedBounds=function(){return this._getBounds()},b.setBounds=function(a,b,c,d){null==a&&(this._bounds=a),this._bounds=(this._bounds||new createjs.Rectangle).setValues(a,b,c,d)},b.clone=function(){return this._cloneProps(new a)},b.toString=function(){return"[DisplayObject (name="+this.name+")]"},b._cloneProps=function(a){return a.alpha=this.alpha,a.mouseEnabled=this.mouseEnabled,a.tickEnabled=this.tickEnabled,a.name=this.name,a.regX=this.regX,a.regY=this.regY,a.rotation=this.rotation,a.scaleX=this.scaleX,a.scaleY=this.scaleY,a.shadow=this.shadow,a.skewX=this.skewX,a.skewY=this.skewY,a.visible=this.visible,a.x=this.x,a.y=this.y,a.compositeOperation=this.compositeOperation,a.snapToPixel=this.snapToPixel,a.filters=null==this.filters?null:this.filters.slice(0),a.mask=this.mask,a.hitArea=this.hitArea,a.cursor=this.cursor,a._bounds=this._bounds,a},b._applyShadow=function(a,b){b=b||Shadow.identity,a.shadowColor=b.color,a.shadowOffsetX=b.offsetX,a.shadowOffsetY=b.offsetY,a.shadowBlur=b.blur},b._tick=function(a){var b=this._listeners;b&&b.tick&&(a.target=null,a.propagationStopped=a.immediatePropagationStopped=!1,this.dispatchEvent(a))},b._testHit=function(b){try{var c=b.getImageData(0,0,1,1).data[3]>1}catch(d){if(!a.suppressCrossDomainErrors)throw"An error has occurred. This is most likely due to security restrictions on reading canvas pixel data with local or cross-domain images."}return c},b._applyFilters=function(){if(this.filters&&0!=this.filters.length&&this.cacheCanvas)for(var a=this.filters.length,b=this.cacheCanvas.getContext("2d"),c=this.cacheCanvas.width,d=this.cacheCanvas.height,e=0;a>e;e++)this.filters[e].applyFilter(b,0,0,c,d)},b._getFilterBounds=function(a){var b,c=this.filters,d=this._rectangle.setValues(0,0,0,0);if(!c||!(b=c.length))return d;for(var e=0;b>e;e++){var f=this.filters[e];f.getBounds&&f.getBounds(d)}return d},b._getBounds=function(a,b){return this._transformBounds(this.getBounds(),a,b)},b._transformBounds=function(a,b,c){if(!a)return a;var d=a.x,e=a.y,f=a.width,g=a.height,h=this._props.matrix;h=c?h.identity():this.getMatrix(h),(d||e)&&h.appendTransform(0,0,1,1,0,0,0,-d,-e),b&&h.prependMatrix(b);var i=f*h.a,j=f*h.b,k=g*h.c,l=g*h.d,m=h.tx,n=h.ty,o=m,p=m,q=n,r=n;return(d=i+m)<o?o=d:d>p&&(p=d),(d=i+k+m)<o?o=d:d>p&&(p=d),(d=k+m)<o?o=d:d>p&&(p=d),(e=j+n)<q?q=e:e>r&&(r=e),(e=j+l+n)<q?q=e:e>r&&(r=e),(e=l+n)<q?q=e:e>r&&(r=e),a.setValues(o,q,p-o,r-q)},b._hasMouseEventListener=function(){for(var b=a._MOUSE_EVENTS,c=0,d=b.length;d>c;c++)if(this.hasEventListener(b[c]))return!0;return!!this.cursor},createjs.DisplayObject=createjs.promote(a,"EventDispatcher")}(),this.createjs=this.createjs||{},function(){"use strict";function a(){this.DisplayObject_constructor(),this.children=[],this.mouseChildren=!0,this.tickChildren=!0}var b=createjs.extend(a,createjs.DisplayObject);b.getNumChildren=function(){return this.children.length};try{Object.defineProperties(b,{numChildren:{get:b.getNumChildren}})}catch(c){}b.initialize=a,b.isVisible=function(){var a=this.cacheCanvas||this.children.length;return!!(this.visible&&this.alpha>0&&0!=this.scaleX&&0!=this.scaleY&&a)},b.draw=function(a,b){if(this.DisplayObject_draw(a,b))return!0;for(var c=this.children.slice(),d=0,e=c.length;e>d;d++){var f=c[d];f.isVisible()&&(a.save(),f.updateContext(a),f.draw(a),a.restore())}return!0},b.addChild=function(a){if(null==a)return a;var b=arguments.length;if(b>1){for(var c=0;b>c;c++)this.addChild(arguments[c]);return arguments[b-1]}return a.parent&&a.parent.removeChild(a),a.parent=this,this.children.push(a),a.dispatchEvent("added"),a},b.addChildAt=function(a,b){var c=arguments.length,d=arguments[c-1];if(0>d||d>this.children.length)return arguments[c-2];if(c>2){for(var e=0;c-1>e;e++)this.addChildAt(arguments[e],d+e);return arguments[c-2]}return a.parent&&a.parent.removeChild(a),a.parent=this,this.children.splice(b,0,a),a.dispatchEvent("added"),a},b.removeChild=function(a){var b=arguments.length;if(b>1){for(var c=!0,d=0;b>d;d++)c=c&&this.removeChild(arguments[d]);return c}return this.removeChildAt(createjs.indexOf(this.children,a))},b.removeChildAt=function(a){var b=arguments.length;if(b>1){for(var c=[],d=0;b>d;d++)c[d]=arguments[d];c.sort(function(a,b){return b-a});for(var e=!0,d=0;b>d;d++)e=e&&this.removeChildAt(c[d]);return e}if(0>a||a>this.children.length-1)return!1;var f=this.children[a];return f&&(f.parent=null),this.children.splice(a,1),f.dispatchEvent("removed"),!0},b.removeAllChildren=function(){for(var a=this.children;a.length;)this.removeChildAt(0)},b.getChildAt=function(a){return this.children[a]},b.getChildByName=function(a){for(var b=this.children,c=0,d=b.length;d>c;c++)if(b[c].name==a)return b[c];return null},b.sortChildren=function(a){this.children.sort(a)},b.getChildIndex=function(a){return createjs.indexOf(this.children,a)},b.swapChildrenAt=function(a,b){var c=this.children,d=c[a],e=c[b];d&&e&&(c[a]=e,c[b]=d)},b.swapChildren=function(a,b){for(var c,d,e=this.children,f=0,g=e.length;g>f&&(e[f]==a&&(c=f),e[f]==b&&(d=f),null==c||null==d);f++);f!=g&&(e[c]=b,e[d]=a)},b.setChildIndex=function(a,b){var c=this.children,d=c.length;if(!(a.parent!=this||0>b||b>=d)){for(var e=0;d>e&&c[e]!=a;e++);e!=d&&e!=b&&(c.splice(e,1),c.splice(b,0,a))}},b.contains=function(a){for(;a;){if(a==this)return!0;a=a.parent}return!1},b.hitTest=function(a,b){return null!=this.getObjectUnderPoint(a,b)},b.getObjectsUnderPoint=function(a,b,c){var d=[],e=this.localToGlobal(a,b);return this._getObjectsUnderPoint(e.x,e.y,d,c>0,1==c),d},b.getObjectUnderPoint=function(a,b,c){var d=this.localToGlobal(a,b);return this._getObjectsUnderPoint(d.x,d.y,null,c>0,1==c)},b.getBounds=function(){return this._getBounds(null,!0)},b.getTransformedBounds=function(){return this._getBounds()},b.clone=function(b){var c=this._cloneProps(new a);return b&&this._cloneChildren(c),c},b.toString=function(){return"[Container (name="+this.name+")]"},b._tick=function(a){if(this.tickChildren)for(var b=this.children.length-1;b>=0;b--){var c=this.children[b];c.tickEnabled&&c._tick&&c._tick(a)}this.DisplayObject__tick(a)},b._cloneChildren=function(a){a.children.length&&a.removeAllChildren();for(var b=a.children,c=0,d=this.children.length;d>c;c++){var e=this.children[c].clone(!0);e.parent=a,b.push(e)}},b._getObjectsUnderPoint=function(b,c,d,e,f,g){if(g=g||0,!g&&!this._testMask(this,b,c))return null;var h,i=createjs.DisplayObject._hitTestContext;f=f||e&&this._hasMouseEventListener();for(var j=this.children,k=j.length,l=k-1;l>=0;l--){var m=j[l],n=m.hitArea;if(m.visible&&(n||m.isVisible())&&(!e||m.mouseEnabled)&&(n||this._testMask(m,b,c)))if(!n&&m instanceof a){var o=m._getObjectsUnderPoint(b,c,d,e,f,g+1);if(!d&&o)return e&&!this.mouseChildren?this:o}else{if(e&&!f&&!m._hasMouseEventListener())continue;var p=m.getConcatenatedDisplayProps(m._props);if(h=p.matrix,n&&(h.appendMatrix(n.getMatrix(n._props.matrix)),p.alpha=n.alpha),i.globalAlpha=p.alpha,i.setTransform(h.a,h.b,h.c,h.d,h.tx-b,h.ty-c),(n||m).draw(i),!this._testHit(i))continue;if(i.setTransform(1,0,0,1,0,0),i.clearRect(0,0,2,2),!d)return e&&!this.mouseChildren?this:m;d.push(m)}}return null},b._testMask=function(a,b,c){var d=a.mask;if(!d||!d.graphics||d.graphics.isEmpty())return!0;var e=this._props.matrix,f=a.parent;e=f?f.getConcatenatedMatrix(e):e.identity(),e=d.getMatrix(d._props.matrix).prependMatrix(e);var g=createjs.DisplayObject._hitTestContext;return g.setTransform(e.a,e.b,e.c,e.d,e.tx-b,e.ty-c),d.graphics.drawAsPath(g),g.fillStyle="#000",g.fill(),this._testHit(g)?(g.setTransform(1,0,0,1,0,0),g.clearRect(0,0,2,2),!0):!1},b._getBounds=function(a,b){var c=this.DisplayObject_getBounds();if(c)return this._transformBounds(c,a,b);var d=this._props.matrix;d=b?d.identity():this.getMatrix(d),a&&d.prependMatrix(a);for(var e=this.children.length,f=null,g=0;e>g;g++){var h=this.children[g];h.visible&&(c=h._getBounds(d))&&(f?f.extend(c.x,c.y,c.width,c.height):f=c.clone())}return f},createjs.Container=createjs.promote(a,"DisplayObject")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a){this.Container_constructor(),this.autoClear=!0,this.canvas="string"==typeof a?document.getElementById(a):a,this.mouseX=0,this.mouseY=0,this.drawRect=null,this.snapToPixelEnabled=!1,this.mouseInBounds=!1,this.tickOnUpdate=!0,this.mouseMoveOutside=!1,this.preventSelection=!0,this._pointerData={},this._pointerCount=0,this._primaryPointerID=null,this._mouseOverIntervalID=null,this._nextStage=null,this._prevStage=null,this.enableDOMEvents(!0)}var b=createjs.extend(a,createjs.Container);b._get_nextStage=function(){return this._nextStage},b._set_nextStage=function(a){this._nextStage&&(this._nextStage._prevStage=null),a&&(a._prevStage=this),this._nextStage=a};try{Object.defineProperties(b,{nextStage:{get:b._get_nextStage,set:b._set_nextStage}})}catch(c){}b.update=function(a){if(this.canvas&&(this.tickOnUpdate&&this.tick(a),this.dispatchEvent("drawstart",!1,!0)!==!1)){createjs.DisplayObject._snapToPixelEnabled=this.snapToPixelEnabled;var b=this.drawRect,c=this.canvas.getContext("2d");c.setTransform(1,0,0,1,0,0),this.autoClear&&(b?c.clearRect(b.x,b.y,b.width,b.height):c.clearRect(0,0,this.canvas.width+1,this.canvas.height+1)),c.save(),this.drawRect&&(c.beginPath(),c.rect(b.x,b.y,b.width,b.height),c.clip()),this.updateContext(c),this.draw(c,!1),c.restore(),this.dispatchEvent("drawend")}},b.tick=function(a){if(this.tickEnabled&&this.dispatchEvent("tickstart",!1,!0)!==!1){var b=new createjs.Event("tick");if(a)for(var c in a)a.hasOwnProperty(c)&&(b[c]=a[c]);this._tick(b),this.dispatchEvent("tickend")}},b.handleEvent=function(a){"tick"==a.type&&this.update(a)},b.clear=function(){if(this.canvas){var a=this.canvas.getContext("2d");a.setTransform(1,0,0,1,0,0),a.clearRect(0,0,this.canvas.width+1,this.canvas.height+1)}},b.toDataURL=function(a,b){var c,d=this.canvas.getContext("2d"),e=this.canvas.width,f=this.canvas.height;if(a){c=d.getImageData(0,0,e,f);var g=d.globalCompositeOperation;d.globalCompositeOperation="destination-over",d.fillStyle=a,d.fillRect(0,0,e,f)}var h=this.canvas.toDataURL(b||"image/png");return a&&(d.putImageData(c,0,0),d.globalCompositeOperation=g),h},b.enableMouseOver=function(a){if(this._mouseOverIntervalID&&(clearInterval(this._mouseOverIntervalID),this._mouseOverIntervalID=null,0==a&&this._testMouseOver(!0)),null==a)a=20;else if(0>=a)return;var b=this;this._mouseOverIntervalID=setInterval(function(){b._testMouseOver()},1e3/Math.min(50,a))},b.enableDOMEvents=function(a){null==a&&(a=!0);var b,c,d=this._eventListeners;if(!a&&d){for(b in d)c=d[b],c.t.removeEventListener(b,c.f,!1);this._eventListeners=null}else if(a&&!d&&this.canvas){var e=window.addEventListener?window:document,f=this;d=this._eventListeners={},d.mouseup={t:e,f:function(a){f._handleMouseUp(a)}},d.mousemove={t:e,f:function(a){f._handleMouseMove(a)}},d.dblclick={t:this.canvas,f:function(a){f._handleDoubleClick(a)}},d.mousedown={t:this.canvas,f:function(a){f._handleMouseDown(a)}};for(b in d)c=d[b],c.t.addEventListener(b,c.f,!1)}},b.clone=function(){throw"Stage cannot be cloned."},b.toString=function(){return"[Stage (name="+this.name+")]"},b._getElementRect=function(a){var b;try{b=a.getBoundingClientRect()}catch(c){b={top:a.offsetTop,left:a.offsetLeft,width:a.offsetWidth,height:a.offsetHeight}}var d=(window.pageXOffset||document.scrollLeft||0)-(document.clientLeft||document.body.clientLeft||0),e=(window.pageYOffset||document.scrollTop||0)-(document.clientTop||document.body.clientTop||0),f=window.getComputedStyle?getComputedStyle(a,null):a.currentStyle,g=parseInt(f.paddingLeft)+parseInt(f.borderLeftWidth),h=parseInt(f.paddingTop)+parseInt(f.borderTopWidth),i=parseInt(f.paddingRight)+parseInt(f.borderRightWidth),j=parseInt(f.paddingBottom)+parseInt(f.borderBottomWidth);return{left:b.left+d+g,right:b.right+d-i,top:b.top+e+h,bottom:b.bottom+e-j}},b._getPointerData=function(a){var b=this._pointerData[a];return b||(b=this._pointerData[a]={x:0,y:0}),b},b._handleMouseMove=function(a){a||(a=window.event),this._handlePointerMove(-1,a,a.pageX,a.pageY)},b._handlePointerMove=function(a,b,c,d,e){if((!this._prevStage||void 0!==e)&&this.canvas){var f=this._nextStage,g=this._getPointerData(a),h=g.inBounds;this._updatePointerPosition(a,b,c,d),(h||g.inBounds||this.mouseMoveOutside)&&(-1===a&&g.inBounds==!h&&this._dispatchMouseEvent(this,h?"mouseleave":"mouseenter",!1,a,g,b),this._dispatchMouseEvent(this,"stagemousemove",!1,a,g,b),this._dispatchMouseEvent(g.target,"pressmove",!0,a,g,b)),f&&f._handlePointerMove(a,b,c,d,null)}},b._updatePointerPosition=function(a,b,c,d){var e=this._getElementRect(this.canvas);c-=e.left,d-=e.top;var f=this.canvas.width,g=this.canvas.height;c/=(e.right-e.left)/f,d/=(e.bottom-e.top)/g;var h=this._getPointerData(a);(h.inBounds=c>=0&&d>=0&&f-1>=c&&g-1>=d)?(h.x=c,h.y=d):this.mouseMoveOutside&&(h.x=0>c?0:c>f-1?f-1:c,h.y=0>d?0:d>g-1?g-1:d),h.posEvtObj=b,h.rawX=c,h.rawY=d,(a===this._primaryPointerID||-1===a)&&(this.mouseX=h.x,this.mouseY=h.y,this.mouseInBounds=h.inBounds)},b._handleMouseUp=function(a){this._handlePointerUp(-1,a,!1)},b._handlePointerUp=function(a,b,c,d){var e=this._nextStage,f=this._getPointerData(a);if(!this._prevStage||void 0!==d){var g=null,h=f.target;d||!h&&!e||(g=this._getObjectsUnderPoint(f.x,f.y,null,!0)),f.down&&(this._dispatchMouseEvent(this,"stagemouseup",!1,a,f,b,g),f.down=!1),g==h&&this._dispatchMouseEvent(h,"click",!0,a,f,b),this._dispatchMouseEvent(h,"pressup",!0,a,f,b),c?(a==this._primaryPointerID&&(this._primaryPointerID=null),delete this._pointerData[a]):f.target=null,e&&e._handlePointerUp(a,b,c,d||g&&this)}},b._handleMouseDown=function(a){this._handlePointerDown(-1,a,a.pageX,a.pageY)},b._handlePointerDown=function(a,b,c,d,e){this.preventSelection&&b.preventDefault(),(null==this._primaryPointerID||-1===a)&&(this._primaryPointerID=a),null!=d&&this._updatePointerPosition(a,b,c,d);var f=null,g=this._nextStage,h=this._getPointerData(a);e||(f=h.target=this._getObjectsUnderPoint(h.x,h.y,null,!0)),h.inBounds&&(this._dispatchMouseEvent(this,"stagemousedown",!1,a,h,b,f),h.down=!0),this._dispatchMouseEvent(f,"mousedown",!0,a,h,b),g&&g._handlePointerDown(a,b,c,d,e||f&&this)},b._testMouseOver=function(a,b,c){if(!this._prevStage||void 0!==b){var d=this._nextStage;if(!this._mouseOverIntervalID)return void(d&&d._testMouseOver(a,b,c));var e=this._getPointerData(-1);if(e&&(a||this.mouseX!=this._mouseOverX||this.mouseY!=this._mouseOverY||!this.mouseInBounds)){var f,g,h,i=e.posEvtObj,j=c||i&&i.target==this.canvas,k=null,l=-1,m="";!b&&(a||this.mouseInBounds&&j)&&(k=this._getObjectsUnderPoint(this.mouseX,this.mouseY,null,!0),this._mouseOverX=this.mouseX,this._mouseOverY=this.mouseY);var n=this._mouseOverTarget||[],o=n[n.length-1],p=this._mouseOverTarget=[];for(f=k;f;)p.unshift(f),m||(m=f.cursor),f=f.parent;for(this.canvas.style.cursor=m,!b&&c&&(c.canvas.style.cursor=m),g=0,h=p.length;h>g&&p[g]==n[g];g++)l=g;for(o!=k&&this._dispatchMouseEvent(o,"mouseout",!0,-1,e,i,k),g=n.length-1;g>l;g--)this._dispatchMouseEvent(n[g],"rollout",!1,-1,e,i,k);for(g=p.length-1;g>l;g--)this._dispatchMouseEvent(p[g],"rollover",!1,-1,e,i,o);o!=k&&this._dispatchMouseEvent(k,"mouseover",!0,-1,e,i,o),d&&d._testMouseOver(a,b||k&&this,c||j&&this)}}},b._handleDoubleClick=function(a,b){var c=null,d=this._nextStage,e=this._getPointerData(-1);b||(c=this._getObjectsUnderPoint(e.x,e.y,null,!0),this._dispatchMouseEvent(c,"dblclick",!0,-1,e,a)),d&&d._handleDoubleClick(a,b||c&&this)},b._dispatchMouseEvent=function(a,b,c,d,e,f,g){if(a&&(c||a.hasEventListener(b))){var h=new createjs.MouseEvent(b,c,!1,e.x,e.y,f,d,d===this._primaryPointerID||-1===d,e.rawX,e.rawY,g);a.dispatchEvent(h)}},createjs.Stage=createjs.promote(a,"Container")}(),this.createjs=this.createjs||{},function(){function a(a){this.DisplayObject_constructor(),"string"==typeof a?(this.image=document.createElement("img"),this.image.src=a):this.image=a,this.sourceRect=null}var b=createjs.extend(a,createjs.DisplayObject);b.initialize=a,b.isVisible=function(){var a=this.image,b=this.cacheCanvas||a&&(a.naturalWidth||a.getContext||a.readyState>=2);return!!(this.visible&&this.alpha>0&&0!=this.scaleX&&0!=this.scaleY&&b)},b.draw=function(a,b){if(this.DisplayObject_draw(a,b)||!this.image)return!0;var c=this.image,d=this.sourceRect;if(d){var e=d.x,f=d.y,g=e+d.width,h=f+d.height,i=0,j=0,k=c.width,l=c.height;0>e&&(i-=e,e=0),g>k&&(g=k),0>f&&(j-=f,f=0),h>l&&(h=l),a.drawImage(c,e,f,g-e,h-f,i,j,g-e,h-f)}else a.drawImage(c,0,0);return!0},b.getBounds=function(){var a=this.DisplayObject_getBounds();if(a)return a;var b=this.image,c=this.sourceRect||b,d=b&&(b.naturalWidth||b.getContext||b.readyState>=2);return d?this._rectangle.setValues(0,0,c.width,c.height):null},b.clone=function(){var b=new a(this.image);return this.sourceRect&&(b.sourceRect=this.sourceRect.clone()),this._cloneProps(b),b},b.toString=function(){return"[Bitmap (name="+this.name+")]"},createjs.Bitmap=createjs.promote(a,"DisplayObject")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b){this.DisplayObject_constructor(),this.currentFrame=0,this.currentAnimation=null,this.paused=!0,this.spriteSheet=a,this.currentAnimationFrame=0,this.framerate=0,this._animation=null,this._currentFrame=null,this._skipAdvance=!1,null!=b&&this.gotoAndPlay(b)}var b=createjs.extend(a,createjs.DisplayObject);b.initialize=a,b.isVisible=function(){var a=this.cacheCanvas||this.spriteSheet.complete;return!!(this.visible&&this.alpha>0&&0!=this.scaleX&&0!=this.scaleY&&a)},b.draw=function(a,b){if(this.DisplayObject_draw(a,b))return!0;this._normalizeFrame();var c=this.spriteSheet.getFrame(0|this._currentFrame);if(!c)return!1;var d=c.rect;return d.width&&d.height&&a.drawImage(c.image,d.x,d.y,d.width,d.height,-c.regX,-c.regY,d.width,d.height),!0},b.play=function(){this.paused=!1},b.stop=function(){this.paused=!0},b.gotoAndPlay=function(a){this.paused=!1,this._skipAdvance=!0,this._goto(a)},b.gotoAndStop=function(a){this.paused=!0,this._goto(a)},b.advance=function(a){var b=this.framerate||this.spriteSheet.framerate,c=b&&null!=a?a/(1e3/b):1;this._normalizeFrame(c)},b.getBounds=function(){return this.DisplayObject_getBounds()||this.spriteSheet.getFrameBounds(this.currentFrame,this._rectangle)},b.clone=function(){return this._cloneProps(new a(this.spriteSheet))},b.toString=function(){return"[Sprite (name="+this.name+")]"},b._cloneProps=function(a){return this.DisplayObject__cloneProps(a),a.currentFrame=this.currentFrame,a.currentAnimation=this.currentAnimation,a.paused=this.paused,a.currentAnimationFrame=this.currentAnimationFrame,a.framerate=this.framerate,a._animation=this._animation,a._currentFrame=this._currentFrame,a._skipAdvance=this._skipAdvance,a},b._tick=function(a){this.paused||(this._skipAdvance||this.advance(a&&a.delta),this._skipAdvance=!1),this.DisplayObject__tick(a)},b._normalizeFrame=function(a){a=a||0;var b,c=this._animation,d=this.paused,e=this._currentFrame;if(c){var f=c.speed||1,g=this.currentAnimationFrame;if(b=c.frames.length,g+a*f>=b){var h=c.next;if(this._dispatchAnimationEnd(c,e,d,h,b-1))return;if(h)return this._goto(h,a-(b-g)/f);this.paused=!0,g=c.frames.length-1}else g+=a*f;this.currentAnimationFrame=g,this._currentFrame=c.frames[0|g]}else if(e=this._currentFrame+=a,b=this.spriteSheet.getNumFrames(),e>=b&&b>0&&!this._dispatchAnimationEnd(c,e,d,b-1)&&(this._currentFrame-=b)>=b)return this._normalizeFrame();e=0|this._currentFrame,this.currentFrame!=e&&(this.currentFrame=e,this.dispatchEvent("change"))},b._dispatchAnimationEnd=function(a,b,c,d,e){var f=a?a.name:null;if(this.hasEventListener("animationend")){var g=new createjs.Event("animationend");g.name=f,g.next=d,this.dispatchEvent(g)}var h=this._animation!=a||this._currentFrame!=b;return h||c||!this.paused||(this.currentAnimationFrame=e,h=!0),h},b._goto=function(a,b){if(this.currentAnimationFrame=0,isNaN(a)){var c=this.spriteSheet.getAnimation(a);c&&(this._animation=c,this.currentAnimation=a,this._normalizeFrame(b))}else this.currentAnimation=this._animation=null,this._currentFrame=a,this._normalizeFrame()},createjs.Sprite=createjs.promote(a,"DisplayObject")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a){this.DisplayObject_constructor(),this.graphics=a?a:new createjs.Graphics}var b=createjs.extend(a,createjs.DisplayObject);b.isVisible=function(){var a=this.cacheCanvas||this.graphics&&!this.graphics.isEmpty();return!!(this.visible&&this.alpha>0&&0!=this.scaleX&&0!=this.scaleY&&a)},b.draw=function(a,b){return this.DisplayObject_draw(a,b)?!0:(this.graphics.draw(a,this),!0)},b.clone=function(b){var c=b&&this.graphics?this.graphics.clone():this.graphics;return this._cloneProps(new a(c))},b.toString=function(){return"[Shape (name="+this.name+")]"},createjs.Shape=createjs.promote(a,"DisplayObject")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b,c){this.DisplayObject_constructor(),this.text=a,this.font=b,this.color=c,this.textAlign="left",this.textBaseline="top",this.maxWidth=null,this.outline=0,this.lineHeight=0,this.lineWidth=null}var b=createjs.extend(a,createjs.DisplayObject),c=createjs.createCanvas?createjs.createCanvas():document.createElement("canvas");c.getContext&&(a._workingContext=c.getContext("2d"),c.width=c.height=1),a.H_OFFSETS={start:0,left:0,center:-.5,end:-1,right:-1},a.V_OFFSETS={top:0,hanging:-.01,middle:-.4,alphabetic:-.8,ideographic:-.85,bottom:-1},b.isVisible=function(){var a=this.cacheCanvas||null!=this.text&&""!==this.text;return!!(this.visible&&this.alpha>0&&0!=this.scaleX&&0!=this.scaleY&&a)},b.draw=function(a,b){if(this.DisplayObject_draw(a,b))return!0;var c=this.color||"#000";return this.outline?(a.strokeStyle=c,a.lineWidth=1*this.outline):a.fillStyle=c,this._drawText(this._prepContext(a)),!0},b.getMeasuredWidth=function(){return this._getMeasuredWidth(this.text)},b.getMeasuredLineHeight=function(){return 1.2*this._getMeasuredWidth("M")},b.getMeasuredHeight=function(){return this._drawText(null,{}).height},b.getBounds=function(){var b=this.DisplayObject_getBounds();if(b)return b;if(null==this.text||""===this.text)return null;var c=this._drawText(null,{}),d=this.maxWidth&&this.maxWidth<c.width?this.maxWidth:c.width,e=d*a.H_OFFSETS[this.textAlign||"left"],f=this.lineHeight||this.getMeasuredLineHeight(),g=f*a.V_OFFSETS[this.textBaseline||"top"];return this._rectangle.setValues(e,g,d,c.height)},b.getMetrics=function(){var b={lines:[]};return b.lineHeight=this.lineHeight||this.getMeasuredLineHeight(),b.vOffset=b.lineHeight*a.V_OFFSETS[this.textBaseline||"top"],this._drawText(null,b,b.lines)},b.clone=function(){return this._cloneProps(new a(this.text,this.font,this.color))},b.toString=function(){return"[Text (text="+(this.text.length>20?this.text.substr(0,17)+"...":this.text)+")]"},b._cloneProps=function(a){return this.DisplayObject__cloneProps(a),a.textAlign=this.textAlign,a.textBaseline=this.textBaseline,a.maxWidth=this.maxWidth,a.outline=this.outline,a.lineHeight=this.lineHeight,a.lineWidth=this.lineWidth,a},b._prepContext=function(a){return a.font=this.font||"10px sans-serif",a.textAlign=this.textAlign||"left",a.textBaseline=this.textBaseline||"top",a},b._drawText=function(b,c,d){var e=!!b;e||(b=a._workingContext,b.save(),this._prepContext(b));for(var f=this.lineHeight||this.getMeasuredLineHeight(),g=0,h=0,i=String(this.text).split(/(?:\r\n|\r|\n)/),j=0,k=i.length;k>j;j++){var l=i[j],m=null;if(null!=this.lineWidth&&(m=b.measureText(l).width)>this.lineWidth){var n=l.split(/(\s)/);l=n[0],m=b.measureText(l).width;for(var o=1,p=n.length;p>o;o+=2){var q=b.measureText(n[o]+n[o+1]).width;m+q>this.lineWidth?(e&&this._drawTextLine(b,l,h*f),d&&d.push(l),m>g&&(g=m),l=n[o+1],m=b.measureText(l).width,h++):(l+=n[o]+n[o+1],m+=q)}}e&&this._drawTextLine(b,l,h*f),d&&d.push(l),c&&null==m&&(m=b.measureText(l).width),m>g&&(g=m),h++}return c&&(c.width=g,c.height=h*f),e||b.restore(),c},b._drawTextLine=function(a,b,c){this.outline?a.strokeText(b,0,c,this.maxWidth||65535):a.fillText(b,0,c,this.maxWidth||65535)},b._getMeasuredWidth=function(b){var c=a._workingContext;c.save();var d=this._prepContext(c).measureText(b).width;return c.restore(),d},createjs.Text=createjs.promote(a,"DisplayObject")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b){this.Container_constructor(),this.text=a||"",this.spriteSheet=b,this.lineHeight=0,this.letterSpacing=0,this.spaceWidth=0,this._oldProps={text:0,spriteSheet:0,lineHeight:0,letterSpacing:0,spaceWidth:0}}var b=createjs.extend(a,createjs.Container);a.maxPoolSize=100,a._spritePool=[],b.draw=function(a,b){this.DisplayObject_draw(a,b)||(this._updateText(),this.Container_draw(a,b))},b.getBounds=function(){return this._updateText(),this.Container_getBounds()},b.isVisible=function(){var a=this.cacheCanvas||this.spriteSheet&&this.spriteSheet.complete&&this.text;return!!(this.visible&&this.alpha>0&&0!==this.scaleX&&0!==this.scaleY&&a)},b.clone=function(){return this._cloneProps(new a(this.text,this.spriteSheet))},b.addChild=b.addChildAt=b.removeChild=b.removeChildAt=b.removeAllChildren=function(){},b._cloneProps=function(a){return this.Container__cloneProps(a),a.lineHeight=this.lineHeight,a.letterSpacing=this.letterSpacing,a.spaceWidth=this.spaceWidth,a},b._getFrameIndex=function(a,b){var c,d=b.getAnimation(a);return d||(a!=(c=a.toUpperCase())||a!=(c=a.toLowerCase())||(c=null),c&&(d=b.getAnimation(c))),d&&d.frames[0]},b._getFrame=function(a,b){var c=this._getFrameIndex(a,b);return null==c?c:b.getFrame(c)},b._getLineHeight=function(a){var b=this._getFrame("1",a)||this._getFrame("T",a)||this._getFrame("L",a)||a.getFrame(0);return b?b.rect.height:1},b._getSpaceWidth=function(a){var b=this._getFrame("1",a)||this._getFrame("l",a)||this._getFrame("e",a)||this._getFrame("a",a)||a.getFrame(0);return b?b.rect.width:1},b._updateText=function(){var b,c=0,d=0,e=this._oldProps,f=!1,g=this.spaceWidth,h=this.lineHeight,i=this.spriteSheet,j=a._spritePool,k=this.children,l=0,m=k.length;for(var n in e)e[n]!=this[n]&&(e[n]=this[n],f=!0);if(f){var o=!!this._getFrame(" ",i);o||g||(g=this._getSpaceWidth(i)),h||(h=this._getLineHeight(i));for(var p=0,q=this.text.length;q>p;p++){var r=this.text.charAt(p);if(" "!=r||o)if("\n"!=r&&"\r"!=r){var s=this._getFrameIndex(r,i);null!=s&&(m>l?b=k[l]:(k.push(b=j.length?j.pop():new createjs.Sprite),b.parent=this,m++),b.spriteSheet=i,b.gotoAndStop(s),b.x=c,b.y=d,l++,c+=b.getBounds().width+this.letterSpacing)}else"\r"==r&&"\n"==this.text.charAt(p+1)&&p++,c=0,d+=h;else c+=g}for(;m>l;)j.push(b=k.pop()),b.parent=null,m--;j.length>a.maxPoolSize&&(j.length=a.maxPoolSize)}},createjs.BitmapText=createjs.promote(a,"Container")}(),this.createjs=this.createjs||{},function(){"use strict";function a(b,c,d,e){this.Container_constructor(),!a.inited&&a.init(),this.mode=b||a.INDEPENDENT,this.startPosition=c||0,this.loop=d,this.currentFrame=0,this.timeline=new createjs.Timeline(null,e,{paused:!0,position:c,useTicks:!0}),this.paused=!1,this.actionsEnabled=!0,this.autoReset=!0,this.frameBounds=this.frameBounds||null,this.framerate=null,this._synchOffset=0,this._prevPos=-1,this._prevPosition=0,this._t=0,this._managed={}}function b(){throw"MovieClipPlugin cannot be instantiated."}var c=createjs.extend(a,createjs.Container);a.INDEPENDENT="independent",a.SINGLE_FRAME="single",a.SYNCHED="synched",a.inited=!1,a.init=function(){a.inited||(b.install(),a.inited=!0)},c.getLabels=function(){return this.timeline.getLabels()},c.getCurrentLabel=function(){return this._updateTimeline(),this.timeline.getCurrentLabel()},c.getDuration=function(){return this.timeline.duration;
};try{Object.defineProperties(c,{labels:{get:c.getLabels},currentLabel:{get:c.getCurrentLabel},totalFrames:{get:c.getDuration},duration:{get:c.getDuration}})}catch(d){}c.initialize=a,c.isVisible=function(){return!!(this.visible&&this.alpha>0&&0!=this.scaleX&&0!=this.scaleY)},c.draw=function(a,b){return this.DisplayObject_draw(a,b)?!0:(this._updateTimeline(),this.Container_draw(a,b),!0)},c.play=function(){this.paused=!1},c.stop=function(){this.paused=!0},c.gotoAndPlay=function(a){this.paused=!1,this._goto(a)},c.gotoAndStop=function(a){this.paused=!0,this._goto(a)},c.advance=function(b){var c=a.INDEPENDENT;if(this.mode==c){for(var d=this,e=d.framerate;(d=d.parent)&&null==e;)d.mode==c&&(e=d._framerate);this._framerate=e;var f=null!=e&&-1!=e&&null!=b?b/(1e3/e)+this._t:1,g=0|f;for(this._t=f-g;!this.paused&&g--;)this._prevPosition=this._prevPos<0?0:this._prevPosition+1,this._updateTimeline()}},c.clone=function(){throw"MovieClip cannot be cloned."},c.toString=function(){return"[MovieClip (name="+this.name+")]"},c._tick=function(a){this.advance(a&&a.delta),this.Container__tick(a)},c._goto=function(a){var b=this.timeline.resolve(a);null!=b&&(-1==this._prevPos&&(this._prevPos=NaN),this._prevPosition=b,this._t=0,this._updateTimeline())},c._reset=function(){this._prevPos=-1,this._t=this.currentFrame=0,this.paused=!1},c._updateTimeline=function(){var b=this.timeline,c=this.mode!=a.INDEPENDENT;b.loop=null==this.loop?!0:this.loop;var d=c?this.startPosition+(this.mode==a.SINGLE_FRAME?0:this._synchOffset):this._prevPos<0?0:this._prevPosition,e=c||!this.actionsEnabled?createjs.Tween.NONE:null;if(this.currentFrame=b._calcPosition(d),b.setPosition(d,e),this._prevPosition=b._prevPosition,this._prevPos!=b._prevPos){this.currentFrame=this._prevPos=b._prevPos;for(var f in this._managed)this._managed[f]=1;for(var g=b._tweens,h=0,i=g.length;i>h;h++){var j=g[h],k=j._target;if(k!=this&&!j.passive){var l=j._stepPosition;k instanceof createjs.DisplayObject?this._addManagedChild(k,l):this._setState(k.state,l)}}var m=this.children;for(h=m.length-1;h>=0;h--){var n=m[h].id;1==this._managed[n]&&(this.removeChildAt(h),delete this._managed[n])}}},c._setState=function(a,b){if(a)for(var c=a.length-1;c>=0;c--){var d=a[c],e=d.t,f=d.p;for(var g in f)e[g]=f[g];this._addManagedChild(e,b)}},c._addManagedChild=function(b,c){b._off||(this.addChildAt(b,0),b instanceof a&&(b._synchOffset=c,b.mode==a.INDEPENDENT&&b.autoReset&&!this._managed[b.id]&&b._reset()),this._managed[b.id]=2)},c._getBounds=function(a,b){var c=this.DisplayObject_getBounds();return c||(this._updateTimeline(),this.frameBounds&&(c=this._rectangle.copy(this.frameBounds[this.currentFrame]))),c?this._transformBounds(c,a,b):this.Container__getBounds(a,b)},createjs.MovieClip=createjs.promote(a,"Container"),b.priority=100,b.install=function(){createjs.Tween.installPlugin(b,["startPosition"])},b.init=function(a,b,c){return c},b.step=function(){},b.tween=function(b,c,d,e,f,g,h,i){return b.target instanceof a?1==g?f[c]:e[c]:d}}(),this.createjs=this.createjs||{},function(){"use strict";function a(){throw"SpriteSheetUtils cannot be instantiated"}var b=createjs.createCanvas?createjs.createCanvas():document.createElement("canvas");b.getContext&&(a._workingCanvas=b,a._workingContext=b.getContext("2d"),b.width=b.height=1),a.addFlippedFrames=function(b,c,d,e){if(c||d||e){var f=0;c&&a._flip(b,++f,!0,!1),d&&a._flip(b,++f,!1,!0),e&&a._flip(b,++f,!0,!0)}},a.extractFrame=function(b,c){isNaN(c)&&(c=b.getAnimation(c).frames[0]);var d=b.getFrame(c);if(!d)return null;var e=d.rect,f=a._workingCanvas;f.width=e.width,f.height=e.height,a._workingContext.drawImage(d.image,e.x,e.y,e.width,e.height,0,0,e.width,e.height);var g=document.createElement("img");return g.src=f.toDataURL("image/png"),g},a.mergeAlpha=function(a,b,c){c||(c=createjs.createCanvas?createjs.createCanvas():document.createElement("canvas")),c.width=Math.max(b.width,a.width),c.height=Math.max(b.height,a.height);var d=c.getContext("2d");return d.save(),d.drawImage(a,0,0),d.globalCompositeOperation="destination-in",d.drawImage(b,0,0),d.restore(),c},a._flip=function(b,c,d,e){for(var f=b._images,g=a._workingCanvas,h=a._workingContext,i=f.length/c,j=0;i>j;j++){var k=f[j];k.__tmp=j,h.setTransform(1,0,0,1,0,0),h.clearRect(0,0,g.width+1,g.height+1),g.width=k.width,g.height=k.height,h.setTransform(d?-1:1,0,0,e?-1:1,d?k.width:0,e?k.height:0),h.drawImage(k,0,0);var l=document.createElement("img");l.src=g.toDataURL("image/png"),l.width=k.width,l.height=k.height,f.push(l)}var m=b._frames,n=m.length/c;for(j=0;n>j;j++){k=m[j];var o=k.rect.clone();l=f[k.image.__tmp+i*c];var p={image:l,rect:o,regX:k.regX,regY:k.regY};d&&(o.x=l.width-o.x-o.width,p.regX=o.width-k.regX),e&&(o.y=l.height-o.y-o.height,p.regY=o.height-k.regY),m.push(p)}var q="_"+(d?"h":"")+(e?"v":""),r=b._animations,s=b._data,t=r.length/c;for(j=0;t>j;j++){var u=r[j];k=s[u];var v={name:u+q,speed:k.speed,next:k.next,frames:[]};k.next&&(v.next+=q),m=k.frames;for(var w=0,x=m.length;x>w;w++)v.frames.push(m[w]+n*c);s[v.name]=v,r.push(v.name)}},createjs.SpriteSheetUtils=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(a){this.EventDispatcher_constructor(),this.maxWidth=2048,this.maxHeight=2048,this.spriteSheet=null,this.scale=1,this.padding=1,this.timeSlice=.3,this.progress=-1,this.framerate=a||0,this._frames=[],this._animations={},this._data=null,this._nextFrameIndex=0,this._index=0,this._timerID=null,this._scale=1}var b=createjs.extend(a,createjs.EventDispatcher);a.ERR_DIMENSIONS="frame dimensions exceed max spritesheet dimensions",a.ERR_RUNNING="a build is already running",b.addFrame=function(b,c,d,e,f){if(this._data)throw a.ERR_RUNNING;var g=c||b.bounds||b.nominalBounds;return!g&&b.getBounds&&(g=b.getBounds()),g?(d=d||1,this._frames.push({source:b,sourceRect:g,scale:d,funct:e,data:f,index:this._frames.length,height:g.height*d})-1):null},b.addAnimation=function(b,c,d,e){if(this._data)throw a.ERR_RUNNING;this._animations[b]={frames:c,next:d,speed:e}},b.addMovieClip=function(b,c,d,e,f,g){if(this._data)throw a.ERR_RUNNING;var h=b.frameBounds,i=c||b.bounds||b.nominalBounds;if(!i&&b.getBounds&&(i=b.getBounds()),i||h){var j,k,l=this._frames.length,m=b.timeline.duration;for(j=0;m>j;j++){var n=h&&h[j]?h[j]:i;this.addFrame(b,n,d,this._setupMovieClipFrame,{i:j,f:e,d:f})}var o=b.timeline._labels,p=[];for(var q in o)p.push({index:o[q],label:q});if(p.length)for(p.sort(function(a,b){return a.index-b.index}),j=0,k=p.length;k>j;j++){for(var r=p[j].label,s=l+p[j].index,t=l+(j==k-1?m:p[j+1].index),u=[],v=s;t>v;v++)u.push(v);(!g||(r=g(r,b,s,t)))&&this.addAnimation(r,u,!0)}}},b.build=function(){if(this._data)throw a.ERR_RUNNING;for(this._startBuild();this._drawNext(););return this._endBuild(),this.spriteSheet},b.buildAsync=function(b){if(this._data)throw a.ERR_RUNNING;this.timeSlice=b,this._startBuild();var c=this;this._timerID=setTimeout(function(){c._run()},50-50*Math.max(.01,Math.min(.99,this.timeSlice||.3)))},b.stopAsync=function(){clearTimeout(this._timerID),this._data=null},b.clone=function(){throw"SpriteSheetBuilder cannot be cloned."},b.toString=function(){return"[SpriteSheetBuilder]"},b._startBuild=function(){var b=this.padding||0;this.progress=0,this.spriteSheet=null,this._index=0,this._scale=this.scale;var c=[];this._data={images:[],frames:c,framerate:this.framerate,animations:this._animations};var d=this._frames.slice();if(d.sort(function(a,b){return a.height<=b.height?-1:1}),d[d.length-1].height+2*b>this.maxHeight)throw a.ERR_DIMENSIONS;for(var e=0,f=0,g=0;d.length;){var h=this._fillRow(d,e,g,c,b);if(h.w>f&&(f=h.w),e+=h.h,!h.h||!d.length){var i=createjs.createCanvas?createjs.createCanvas():document.createElement("canvas");i.width=this._getSize(f,this.maxWidth),i.height=this._getSize(e,this.maxHeight),this._data.images[g]=i,h.h||(f=e=0,g++)}}},b._setupMovieClipFrame=function(a,b){var c=a.actionsEnabled;a.actionsEnabled=!1,a.gotoAndStop(b.i),a.actionsEnabled=c,b.f&&b.f(a,b.d,b.i)},b._getSize=function(a,b){for(var c=4;Math.pow(2,++c)<a;);return Math.min(b,Math.pow(2,c))},b._fillRow=function(b,c,d,e,f){var g=this.maxWidth,h=this.maxHeight;c+=f;for(var i=h-c,j=f,k=0,l=b.length-1;l>=0;l--){var m=b[l],n=this._scale*m.scale,o=m.sourceRect,p=m.source,q=Math.floor(n*o.x-f),r=Math.floor(n*o.y-f),s=Math.ceil(n*o.height+2*f),t=Math.ceil(n*o.width+2*f);if(t>g)throw a.ERR_DIMENSIONS;s>i||j+t>g||(m.img=d,m.rect=new createjs.Rectangle(j,c,t,s),k=k||s,b.splice(l,1),e[m.index]=[j,c,t,s,d,Math.round(-q+n*p.regX-f),Math.round(-r+n*p.regY-f)],j+=t)}return{w:j,h:k}},b._endBuild=function(){this.spriteSheet=new createjs.SpriteSheet(this._data),this._data=null,this.progress=1,this.dispatchEvent("complete")},b._run=function(){for(var a=50*Math.max(.01,Math.min(.99,this.timeSlice||.3)),b=(new Date).getTime()+a,c=!1;b>(new Date).getTime();)if(!this._drawNext()){c=!0;break}if(c)this._endBuild();else{var d=this;this._timerID=setTimeout(function(){d._run()},50-a)}var e=this.progress=this._index/this._frames.length;if(this.hasEventListener("progress")){var f=new createjs.Event("progress");f.progress=e,this.dispatchEvent(f)}},b._drawNext=function(){var a=this._frames[this._index],b=a.scale*this._scale,c=a.rect,d=a.sourceRect,e=this._data.images[a.img],f=e.getContext("2d");return a.funct&&a.funct(a.source,a.data),f.save(),f.beginPath(),f.rect(c.x,c.y,c.width,c.height),f.clip(),f.translate(Math.ceil(c.x-d.x*b),Math.ceil(c.y-d.y*b)),f.scale(b,b),a.source.draw(f),f.restore(),++this._index<this._frames.length},createjs.SpriteSheetBuilder=createjs.promote(a,"EventDispatcher")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a){this.DisplayObject_constructor(),"string"==typeof a&&(a=document.getElementById(a)),this.mouseEnabled=!1;var b=a.style;b.position="absolute",b.transformOrigin=b.WebkitTransformOrigin=b.msTransformOrigin=b.MozTransformOrigin=b.OTransformOrigin="0% 0%",this.htmlElement=a,this._oldProps=null}var b=createjs.extend(a,createjs.DisplayObject);b.isVisible=function(){return null!=this.htmlElement},b.draw=function(a,b){return!0},b.cache=function(){},b.uncache=function(){},b.updateCache=function(){},b.hitTest=function(){},b.localToGlobal=function(){},b.globalToLocal=function(){},b.localToLocal=function(){},b.clone=function(){throw"DOMElement cannot be cloned."},b.toString=function(){return"[DOMElement (name="+this.name+")]"},b._tick=function(a){var b=this.getStage();b&&b.on("drawend",this._handleDrawEnd,this,!0),this.DisplayObject__tick(a)},b._handleDrawEnd=function(a){var b=this.htmlElement;if(b){var c=b.style,d=this.getConcatenatedDisplayProps(this._props),e=d.matrix,f=d.visible?"visible":"hidden";if(f!=c.visibility&&(c.visibility=f),d.visible){var g=this._oldProps,h=g&&g.matrix,i=1e4;if(!h||!h.equals(e)){var j="matrix("+(e.a*i|0)/i+","+(e.b*i|0)/i+","+(e.c*i|0)/i+","+(e.d*i|0)/i+","+(e.tx+.5|0);c.transform=c.WebkitTransform=c.OTransform=c.msTransform=j+","+(e.ty+.5|0)+")",c.MozTransform=j+"px,"+(e.ty+.5|0)+"px)",g||(g=this._oldProps=new createjs.DisplayProps(!0,NaN)),g.matrix.copy(e)}g.alpha!=d.alpha&&(c.opacity=""+(d.alpha*i|0)/i,g.alpha=d.alpha)}}},createjs.DOMElement=createjs.promote(a,"DisplayObject")}(),this.createjs=this.createjs||{},function(){"use strict";function a(){}var b=a.prototype;b.getBounds=function(a){return a},b.applyFilter=function(a,b,c,d,e,f,g,h){f=f||a,null==g&&(g=b),null==h&&(h=c);try{var i=a.getImageData(b,c,d,e)}catch(j){return!1}return this._applyFilter(i)?(f.putImageData(i,g,h),!0):!1},b.toString=function(){return"[Filter]"},b.clone=function(){return new a},b._applyFilter=function(a){return!0},createjs.Filter=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b,c){(isNaN(a)||0>a)&&(a=0),(isNaN(b)||0>b)&&(b=0),(isNaN(c)||1>c)&&(c=1),this.blurX=0|a,this.blurY=0|b,this.quality=0|c}var b=createjs.extend(a,createjs.Filter);a.MUL_TABLE=[1,171,205,293,57,373,79,137,241,27,391,357,41,19,283,265,497,469,443,421,25,191,365,349,335,161,155,149,9,278,269,261,505,245,475,231,449,437,213,415,405,395,193,377,369,361,353,345,169,331,325,319,313,307,301,37,145,285,281,69,271,267,263,259,509,501,493,243,479,118,465,459,113,446,55,435,429,423,209,413,51,403,199,393,97,3,379,375,371,367,363,359,355,351,347,43,85,337,333,165,327,323,5,317,157,311,77,305,303,75,297,294,73,289,287,71,141,279,277,275,68,135,67,133,33,262,260,129,511,507,503,499,495,491,61,121,481,477,237,235,467,232,115,457,227,451,7,445,221,439,218,433,215,427,425,211,419,417,207,411,409,203,202,401,399,396,197,49,389,387,385,383,95,189,47,187,93,185,23,183,91,181,45,179,89,177,11,175,87,173,345,343,341,339,337,21,167,83,331,329,327,163,81,323,321,319,159,79,315,313,39,155,309,307,153,305,303,151,75,299,149,37,295,147,73,291,145,289,287,143,285,71,141,281,35,279,139,69,275,137,273,17,271,135,269,267,133,265,33,263,131,261,130,259,129,257,1],a.SHG_TABLE=[0,9,10,11,9,12,10,11,12,9,13,13,10,9,13,13,14,14,14,14,10,13,14,14,14,13,13,13,9,14,14,14,15,14,15,14,15,15,14,15,15,15,14,15,15,15,15,15,14,15,15,15,15,15,15,12,14,15,15,13,15,15,15,15,16,16,16,15,16,14,16,16,14,16,13,16,16,16,15,16,13,16,15,16,14,9,16,16,16,16,16,16,16,16,16,13,14,16,16,15,16,16,10,16,15,16,14,16,16,14,16,16,14,16,16,14,15,16,16,16,14,15,14,15,13,16,16,15,17,17,17,17,17,17,14,15,17,17,16,16,17,16,15,17,16,17,11,17,16,17,16,17,16,17,17,16,17,17,16,17,17,16,16,17,17,17,16,14,17,17,17,17,15,16,14,16,15,16,13,16,15,16,14,16,15,16,12,16,15,16,17,17,17,17,17,13,16,15,17,17,17,16,15,17,17,17,16,15,17,17,14,16,17,17,16,17,17,16,15,17,16,14,17,16,15,17,16,17,17,16,17,15,16,17,14,17,16,15,17,16,17,13,17,16,17,17,16,17,14,17,16,17,16,17,16,17,9],b.getBounds=function(a){var b=0|this.blurX,c=0|this.blurY;if(0>=b&&0>=c)return a;var d=Math.pow(this.quality,.2);return(a||new createjs.Rectangle).pad(b*d+1,c*d+1,b*d+1,c*d+1)},b.clone=function(){return new a(this.blurX,this.blurY,this.quality)},b.toString=function(){return"[BlurFilter]"},b._applyFilter=function(b){var c=this.blurX>>1;if(isNaN(c)||0>c)return!1;var d=this.blurY>>1;if(isNaN(d)||0>d)return!1;if(0==c&&0==d)return!1;var e=this.quality;(isNaN(e)||1>e)&&(e=1),e|=0,e>3&&(e=3),1>e&&(e=1);var f=b.data,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=c+c+1|0,w=d+d+1|0,x=0|b.width,y=0|b.height,z=x-1|0,A=y-1|0,B=c+1|0,C=d+1|0,D={r:0,b:0,g:0,a:0},E=D;for(i=1;v>i;i++)E=E.n={r:0,b:0,g:0,a:0};E.n=D;var F={r:0,b:0,g:0,a:0},G=F;for(i=1;w>i;i++)G=G.n={r:0,b:0,g:0,a:0};G.n=F;for(var H=null,I=0|a.MUL_TABLE[c],J=0|a.SHG_TABLE[c],K=0|a.MUL_TABLE[d],L=0|a.SHG_TABLE[d];e-->0;){m=l=0;var M=I,N=J;for(h=y;--h>-1;){for(n=B*(r=f[0|l]),o=B*(s=f[l+1|0]),p=B*(t=f[l+2|0]),q=B*(u=f[l+3|0]),E=D,i=B;--i>-1;)E.r=r,E.g=s,E.b=t,E.a=u,E=E.n;for(i=1;B>i;i++)j=l+((i>z?z:i)<<2)|0,n+=E.r=f[j],o+=E.g=f[j+1],p+=E.b=f[j+2],q+=E.a=f[j+3],E=E.n;for(H=D,g=0;x>g;g++)f[l++]=n*M>>>N,f[l++]=o*M>>>N,f[l++]=p*M>>>N,f[l++]=q*M>>>N,j=m+((j=g+c+1)<z?j:z)<<2,n-=H.r-(H.r=f[j]),o-=H.g-(H.g=f[j+1]),p-=H.b-(H.b=f[j+2]),q-=H.a-(H.a=f[j+3]),H=H.n;m+=x}for(M=K,N=L,g=0;x>g;g++){for(l=g<<2|0,n=C*(r=f[l])|0,o=C*(s=f[l+1|0])|0,p=C*(t=f[l+2|0])|0,q=C*(u=f[l+3|0])|0,G=F,i=0;C>i;i++)G.r=r,G.g=s,G.b=t,G.a=u,G=G.n;for(k=x,i=1;d>=i;i++)l=k+g<<2,n+=G.r=f[l],o+=G.g=f[l+1],p+=G.b=f[l+2],q+=G.a=f[l+3],G=G.n,A>i&&(k+=x);if(l=g,H=F,e>0)for(h=0;y>h;h++)j=l<<2,f[j+3]=u=q*M>>>N,u>0?(f[j]=n*M>>>N,f[j+1]=o*M>>>N,f[j+2]=p*M>>>N):f[j]=f[j+1]=f[j+2]=0,j=g+((j=h+C)<A?j:A)*x<<2,n-=H.r-(H.r=f[j]),o-=H.g-(H.g=f[j+1]),p-=H.b-(H.b=f[j+2]),q-=H.a-(H.a=f[j+3]),H=H.n,l+=x;else for(h=0;y>h;h++)j=l<<2,f[j+3]=u=q*M>>>N,u>0?(u=255/u,f[j]=(n*M>>>N)*u,f[j+1]=(o*M>>>N)*u,f[j+2]=(p*M>>>N)*u):f[j]=f[j+1]=f[j+2]=0,j=g+((j=h+C)<A?j:A)*x<<2,n-=H.r-(H.r=f[j]),o-=H.g-(H.g=f[j+1]),p-=H.b-(H.b=f[j+2]),q-=H.a-(H.a=f[j+3]),H=H.n,l+=x}}return!0},createjs.BlurFilter=createjs.promote(a,"Filter")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a){this.alphaMap=a,this._alphaMap=null,this._mapData=null}var b=createjs.extend(a,createjs.Filter);b.clone=function(){var b=new a(this.alphaMap);return b._alphaMap=this._alphaMap,b._mapData=this._mapData,b},b.toString=function(){return"[AlphaMapFilter]"},b._applyFilter=function(a){if(!this.alphaMap)return!0;if(!this._prepAlphaMap())return!1;for(var b=a.data,c=this._mapData,d=0,e=b.length;e>d;d+=4)b[d+3]=c[d]||0;return!0},b._prepAlphaMap=function(){if(!this.alphaMap)return!1;if(this.alphaMap==this._alphaMap&&this._mapData)return!0;this._mapData=null;var a,b=this._alphaMap=this.alphaMap,c=b;b instanceof HTMLCanvasElement?a=c.getContext("2d"):(c=createjs.createCanvas?createjs.createCanvas():document.createElement("canvas"),c.width=b.width,c.height=b.height,a=c.getContext("2d"),a.drawImage(b,0,0));try{var d=a.getImageData(0,0,b.width,b.height)}catch(e){return!1}return this._mapData=d.data,!0},createjs.AlphaMapFilter=createjs.promote(a,"Filter")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a){this.mask=a}var b=createjs.extend(a,createjs.Filter);b.applyFilter=function(a,b,c,d,e,f,g,h){return this.mask?(f=f||a,null==g&&(g=b),null==h&&(h=c),f.save(),a!=f?!1:(f.globalCompositeOperation="destination-in",f.drawImage(this.mask,g,h),f.restore(),!0)):!0},b.clone=function(){return new a(this.mask)},b.toString=function(){return"[AlphaMaskFilter]"},createjs.AlphaMaskFilter=createjs.promote(a,"Filter")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b,c,d,e,f,g,h){this.redMultiplier=null!=a?a:1,this.greenMultiplier=null!=b?b:1,this.blueMultiplier=null!=c?c:1,this.alphaMultiplier=null!=d?d:1,this.redOffset=e||0,this.greenOffset=f||0,this.blueOffset=g||0,this.alphaOffset=h||0}var b=createjs.extend(a,createjs.Filter);b.toString=function(){return"[ColorFilter]"},b.clone=function(){return new a(this.redMultiplier,this.greenMultiplier,this.blueMultiplier,this.alphaMultiplier,this.redOffset,this.greenOffset,this.blueOffset,this.alphaOffset)},b._applyFilter=function(a){for(var b=a.data,c=b.length,d=0;c>d;d+=4)b[d]=b[d]*this.redMultiplier+this.redOffset,b[d+1]=b[d+1]*this.greenMultiplier+this.greenOffset,b[d+2]=b[d+2]*this.blueMultiplier+this.blueOffset,b[d+3]=b[d+3]*this.alphaMultiplier+this.alphaOffset;return!0},createjs.ColorFilter=createjs.promote(a,"Filter")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b,c,d){this.setColor(a,b,c,d)}var b=a.prototype;a.DELTA_INDEX=[0,.01,.02,.04,.05,.06,.07,.08,.1,.11,.12,.14,.15,.16,.17,.18,.2,.21,.22,.24,.25,.27,.28,.3,.32,.34,.36,.38,.4,.42,.44,.46,.48,.5,.53,.56,.59,.62,.65,.68,.71,.74,.77,.8,.83,.86,.89,.92,.95,.98,1,1.06,1.12,1.18,1.24,1.3,1.36,1.42,1.48,1.54,1.6,1.66,1.72,1.78,1.84,1.9,1.96,2,2.12,2.25,2.37,2.5,2.62,2.75,2.87,3,3.2,3.4,3.6,3.8,4,4.3,4.7,4.9,5,5.5,6,6.5,6.8,7,7.3,7.5,7.8,8,8.4,8.7,9,9.4,9.6,9.8,10],a.IDENTITY_MATRIX=[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1],a.LENGTH=a.IDENTITY_MATRIX.length,b.setColor=function(a,b,c,d){return this.reset().adjustColor(a,b,c,d)},b.reset=function(){return this.copy(a.IDENTITY_MATRIX)},b.adjustColor=function(a,b,c,d){return this.adjustHue(d),this.adjustContrast(b),this.adjustBrightness(a),this.adjustSaturation(c)},b.adjustBrightness=function(a){return 0==a||isNaN(a)?this:(a=this._cleanValue(a,255),this._multiplyMatrix([1,0,0,0,a,0,1,0,0,a,0,0,1,0,a,0,0,0,1,0,0,0,0,0,1]),this)},b.adjustContrast=function(b){if(0==b||isNaN(b))return this;b=this._cleanValue(b,100);var c;return 0>b?c=127+b/100*127:(c=b%1,c=0==c?a.DELTA_INDEX[b]:a.DELTA_INDEX[b<<0]*(1-c)+a.DELTA_INDEX[(b<<0)+1]*c,c=127*c+127),this._multiplyMatrix([c/127,0,0,0,.5*(127-c),0,c/127,0,0,.5*(127-c),0,0,c/127,0,.5*(127-c),0,0,0,1,0,0,0,0,0,1]),this},b.adjustSaturation=function(a){if(0==a||isNaN(a))return this;a=this._cleanValue(a,100);var b=1+(a>0?3*a/100:a/100),c=.3086,d=.6094,e=.082;return this._multiplyMatrix([c*(1-b)+b,d*(1-b),e*(1-b),0,0,c*(1-b),d*(1-b)+b,e*(1-b),0,0,c*(1-b),d*(1-b),e*(1-b)+b,0,0,0,0,0,1,0,0,0,0,0,1]),this},b.adjustHue=function(a){if(0==a||isNaN(a))return this;a=this._cleanValue(a,180)/180*Math.PI;var b=Math.cos(a),c=Math.sin(a),d=.213,e=.715,f=.072;return this._multiplyMatrix([d+b*(1-d)+c*-d,e+b*-e+c*-e,f+b*-f+c*(1-f),0,0,d+b*-d+.143*c,e+b*(1-e)+.14*c,f+b*-f+c*-.283,0,0,d+b*-d+c*-(1-d),e+b*-e+c*e,f+b*(1-f)+c*f,0,0,0,0,0,1,0,0,0,0,0,1]),this},b.concat=function(b){return b=this._fixMatrix(b),b.length!=a.LENGTH?this:(this._multiplyMatrix(b),this)},b.clone=function(){return(new a).copy(this)},b.toArray=function(){for(var b=[],c=0,d=a.LENGTH;d>c;c++)b[c]=this[c];return b},b.copy=function(b){for(var c=a.LENGTH,d=0;c>d;d++)this[d]=b[d];return this},b.toString=function(){return"[ColorMatrix]"},b._multiplyMatrix=function(a){var b,c,d,e=[];for(b=0;5>b;b++){for(c=0;5>c;c++)e[c]=this[c+5*b];for(c=0;5>c;c++){var f=0;for(d=0;5>d;d++)f+=a[c+5*d]*e[d];this[c+5*b]=f}}},b._cleanValue=function(a,b){return Math.min(b,Math.max(-b,a))},b._fixMatrix=function(b){return b instanceof a&&(b=b.toArray()),b.length<a.LENGTH?b=b.slice(0,b.length).concat(a.IDENTITY_MATRIX.slice(b.length,a.LENGTH)):b.length>a.LENGTH&&(b=b.slice(0,a.LENGTH)),b},createjs.ColorMatrix=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(a){this.matrix=a}var b=createjs.extend(a,createjs.Filter);b.toString=function(){return"[ColorMatrixFilter]"},b.clone=function(){return new a(this.matrix)},b._applyFilter=function(a){for(var b,c,d,e,f=a.data,g=f.length,h=this.matrix,i=h[0],j=h[1],k=h[2],l=h[3],m=h[4],n=h[5],o=h[6],p=h[7],q=h[8],r=h[9],s=h[10],t=h[11],u=h[12],v=h[13],w=h[14],x=h[15],y=h[16],z=h[17],A=h[18],B=h[19],C=0;g>C;C+=4)b=f[C],c=f[C+1],d=f[C+2],e=f[C+3],f[C]=b*i+c*j+d*k+e*l+m,f[C+1]=b*n+c*o+d*p+e*q+r,f[C+2]=b*s+c*t+d*u+e*v+w,f[C+3]=b*x+c*y+d*z+e*A+B;return!0},createjs.ColorMatrixFilter=createjs.promote(a,"Filter")}(),this.createjs=this.createjs||{},function(){"use strict";function a(){throw"Touch cannot be instantiated"}a.isSupported=function(){return!!("ontouchstart"in window||window.navigator.msPointerEnabled&&window.navigator.msMaxTouchPoints>0||window.navigator.pointerEnabled&&window.navigator.maxTouchPoints>0)},a.enable=function(b,c,d){return b&&b.canvas&&a.isSupported()?b.__touch?!0:(b.__touch={pointers:{},multitouch:!c,preventDefault:!d,count:0},"ontouchstart"in window?a._IOS_enable(b):(window.navigator.msPointerEnabled||window.navigator.pointerEnabled)&&a._IE_enable(b),!0):!1},a.disable=function(b){b&&("ontouchstart"in window?a._IOS_disable(b):(window.navigator.msPointerEnabled||window.navigator.pointerEnabled)&&a._IE_disable(b),delete b.__touch)},a._IOS_enable=function(b){var c=b.canvas,d=b.__touch.f=function(c){a._IOS_handleEvent(b,c)};c.addEventListener("touchstart",d,!1),c.addEventListener("touchmove",d,!1),c.addEventListener("touchend",d,!1),c.addEventListener("touchcancel",d,!1)},a._IOS_disable=function(a){var b=a.canvas;if(b){var c=a.__touch.f;b.removeEventListener("touchstart",c,!1),b.removeEventListener("touchmove",c,!1),b.removeEventListener("touchend",c,!1),b.removeEventListener("touchcancel",c,!1)}},a._IOS_handleEvent=function(a,b){if(a){a.__touch.preventDefault&&b.preventDefault&&b.preventDefault();for(var c=b.changedTouches,d=b.type,e=0,f=c.length;f>e;e++){var g=c[e],h=g.identifier;g.target==a.canvas&&("touchstart"==d?this._handleStart(a,h,b,g.pageX,g.pageY):"touchmove"==d?this._handleMove(a,h,b,g.pageX,g.pageY):("touchend"==d||"touchcancel"==d)&&this._handleEnd(a,h,b))}}},a._IE_enable=function(b){var c=b.canvas,d=b.__touch.f=function(c){a._IE_handleEvent(b,c)};void 0===window.navigator.pointerEnabled?(c.addEventListener("MSPointerDown",d,!1),window.addEventListener("MSPointerMove",d,!1),window.addEventListener("MSPointerUp",d,!1),window.addEventListener("MSPointerCancel",d,!1),b.__touch.preventDefault&&(c.style.msTouchAction="none")):(c.addEventListener("pointerdown",d,!1),window.addEventListener("pointermove",d,!1),window.addEventListener("pointerup",d,!1),window.addEventListener("pointercancel",d,!1),b.__touch.preventDefault&&(c.style.touchAction="none")),b.__touch.activeIDs={}},a._IE_disable=function(a){var b=a.__touch.f;void 0===window.navigator.pointerEnabled?(window.removeEventListener("MSPointerMove",b,!1),window.removeEventListener("MSPointerUp",b,!1),window.removeEventListener("MSPointerCancel",b,!1),a.canvas&&a.canvas.removeEventListener("MSPointerDown",b,!1)):(window.removeEventListener("pointermove",b,!1),window.removeEventListener("pointerup",b,!1),window.removeEventListener("pointercancel",b,!1),a.canvas&&a.canvas.removeEventListener("pointerdown",b,!1))},a._IE_handleEvent=function(a,b){if(a){a.__touch.preventDefault&&b.preventDefault&&b.preventDefault();var c=b.type,d=b.pointerId,e=a.__touch.activeIDs;if("MSPointerDown"==c||"pointerdown"==c){if(b.srcElement!=a.canvas)return;e[d]=!0,this._handleStart(a,d,b,b.pageX,b.pageY)}else e[d]&&("MSPointerMove"==c||"pointermove"==c?this._handleMove(a,d,b,b.pageX,b.pageY):("MSPointerUp"==c||"MSPointerCancel"==c||"pointerup"==c||"pointercancel"==c)&&(delete e[d],this._handleEnd(a,d,b)))}},a._handleStart=function(a,b,c,d,e){var f=a.__touch;if(f.multitouch||!f.count){var g=f.pointers;g[b]||(g[b]=!0,f.count++,a._handlePointerDown(b,c,d,e))}},a._handleMove=function(a,b,c,d,e){a.__touch.pointers[b]&&a._handlePointerMove(b,c,d,e)},a._handleEnd=function(a,b,c){var d=a.__touch,e=d.pointers;e[b]&&(d.count--,a._handlePointerUp(b,c,!0),delete e[b])},createjs.Touch=a}(),this.createjs=this.createjs||{},function(){"use strict";var a=createjs.EaselJS=createjs.EaselJS||{};a.version="0.8.2",a.buildDate="Thu, 26 Nov 2015 20:44:34 GMT"}(),this.createjs=this.createjs||{},function(){"use strict";var a=createjs.PreloadJS=createjs.PreloadJS||{};a.version="0.6.2",a.buildDate="Thu, 26 Nov 2015 20:44:31 GMT"}(),this.createjs=this.createjs||{},function(){"use strict";createjs.proxy=function(a,b){var c=Array.prototype.slice.call(arguments,2);return function(){return a.apply(b,Array.prototype.slice.call(arguments,0).concat(c))}}}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b,c){this.Event_constructor("error"),this.title=a,this.message=b,this.data=c}var b=createjs.extend(a,createjs.Event);b.clone=function(){return new createjs.ErrorEvent(this.title,this.message,this.data)},createjs.ErrorEvent=createjs.promote(a,"Event")}(),this.createjs=this.createjs||{},function(a){"use strict";function b(a,b){this.Event_constructor("progress"),this.loaded=a,this.total=null==b?1:b,this.progress=0==b?0:this.loaded/this.total}var c=createjs.extend(b,createjs.Event);c.clone=function(){return new createjs.ProgressEvent(this.loaded,this.total)},createjs.ProgressEvent=createjs.promote(b,"Event")}(window),function(){function a(b,d){function f(a){if(f[a]!==q)return f[a];var b;if("bug-string-char-index"==a)b="a"!="a"[0];else if("json"==a)b=f("json-stringify")&&f("json-parse");else{var c,e='{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';if("json-stringify"==a){var i=d.stringify,k="function"==typeof i&&t;if(k){(c=function(){return 1}).toJSON=c;try{k="0"===i(0)&&"0"===i(new g)&&'""'==i(new h)&&i(s)===q&&i(q)===q&&i()===q&&"1"===i(c)&&"[1]"==i([c])&&"[null]"==i([q])&&"null"==i(null)&&"[null,null,null]"==i([q,s,null])&&i({a:[c,!0,!1,null,"\x00\b\n\f\r	"]})==e&&"1"===i(null,c)&&"[\n 1,\n 2\n]"==i([1,2],null,1)&&'"-271821-04-20T00:00:00.000Z"'==i(new j(-864e13))&&'"+275760-09-13T00:00:00.000Z"'==i(new j(864e13))&&'"-000001-01-01T00:00:00.000Z"'==i(new j(-621987552e5))&&'"1969-12-31T23:59:59.999Z"'==i(new j(-1))}catch(l){k=!1}}b=k}if("json-parse"==a){var m=d.parse;if("function"==typeof m)try{if(0===m("0")&&!m(!1)){c=m(e);var n=5==c.a.length&&1===c.a[0];if(n){try{n=!m('"	"')}catch(l){}if(n)try{n=1!==m("01")}catch(l){}if(n)try{n=1!==m("1.")}catch(l){}}}}catch(l){n=!1}b=n}}return f[a]=!!b}b||(b=e.Object()),d||(d=e.Object());var g=b.Number||e.Number,h=b.String||e.String,i=b.Object||e.Object,j=b.Date||e.Date,k=b.SyntaxError||e.SyntaxError,l=b.TypeError||e.TypeError,m=b.Math||e.Math,n=b.JSON||e.JSON;"object"==typeof n&&n&&(d.stringify=n.stringify,d.parse=n.parse);var o,p,q,r=i.prototype,s=r.toString,t=new j(-0xc782b5b800cec);try{t=-109252==t.getUTCFullYear()&&0===t.getUTCMonth()&&1===t.getUTCDate()&&10==t.getUTCHours()&&37==t.getUTCMinutes()&&6==t.getUTCSeconds()&&708==t.getUTCMilliseconds()}catch(u){}if(!f("json")){var v="[object Function]",w="[object Date]",x="[object Number]",y="[object String]",z="[object Array]",A="[object Boolean]",B=f("bug-string-char-index");if(!t)var C=m.floor,D=[0,31,59,90,120,151,181,212,243,273,304,334],E=function(a,b){return D[b]+365*(a-1970)+C((a-1969+(b=+(b>1)))/4)-C((a-1901+b)/100)+C((a-1601+b)/400)};if((o=r.hasOwnProperty)||(o=function(a){var b,c={};return(c.__proto__=null,c.__proto__={toString:1},c).toString!=s?o=function(a){var b=this.__proto__,c=a in(this.__proto__=null,this);return this.__proto__=b,c}:(b=c.constructor,o=function(a){var c=(this.constructor||b).prototype;return a in this&&!(a in c&&this[a]===c[a])}),c=null,o.call(this,a)}),p=function(a,b){var d,e,f,g=0;(d=function(){this.valueOf=0}).prototype.valueOf=0,e=new d;for(f in e)o.call(e,f)&&g++;return d=e=null,g?p=2==g?function(a,b){var c,d={},e=s.call(a)==v;for(c in a)e&&"prototype"==c||o.call(d,c)||!(d[c]=1)||!o.call(a,c)||b(c)}:function(a,b){var c,d,e=s.call(a)==v;for(c in a)e&&"prototype"==c||!o.call(a,c)||(d="constructor"===c)||b(c);(d||o.call(a,c="constructor"))&&b(c)}:(e=["valueOf","toString","toLocaleString","propertyIsEnumerable","isPrototypeOf","hasOwnProperty","constructor"],p=function(a,b){var d,f,g=s.call(a)==v,h=!g&&"function"!=typeof a.constructor&&c[typeof a.hasOwnProperty]&&a.hasOwnProperty||o;for(d in a)g&&"prototype"==d||!h.call(a,d)||b(d);for(f=e.length;d=e[--f];h.call(a,d)&&b(d));}),p(a,b)},!f("json-stringify")){var F={92:"\\\\",34:'\\"',8:"\\b",12:"\\f",10:"\\n",13:"\\r",9:"\\t"},G="000000",H=function(a,b){return(G+(b||0)).slice(-a)},I="\\u00",J=function(a){for(var b='"',c=0,d=a.length,e=!B||d>10,f=e&&(B?a.split(""):a);d>c;c++){var g=a.charCodeAt(c);switch(g){case 8:case 9:case 10:case 12:case 13:case 34:case 92:b+=F[g];break;default:if(32>g){b+=I+H(2,g.toString(16));break}b+=e?f[c]:a.charAt(c)}}return b+'"'},K=function(a,b,c,d,e,f,g){var h,i,j,k,m,n,r,t,u,v,B,D,F,G,I,L;try{h=b[a]}catch(M){}if("object"==typeof h&&h)if(i=s.call(h),i!=w||o.call(h,"toJSON"))"function"==typeof h.toJSON&&(i!=x&&i!=y&&i!=z||o.call(h,"toJSON"))&&(h=h.toJSON(a));else if(h>-1/0&&1/0>h){if(E){for(m=C(h/864e5),j=C(m/365.2425)+1970-1;E(j+1,0)<=m;j++);for(k=C((m-E(j,0))/30.42);E(j,k+1)<=m;k++);m=1+m-E(j,k),n=(h%864e5+864e5)%864e5,r=C(n/36e5)%24,t=C(n/6e4)%60,u=C(n/1e3)%60,v=n%1e3}else j=h.getUTCFullYear(),k=h.getUTCMonth(),m=h.getUTCDate(),r=h.getUTCHours(),t=h.getUTCMinutes(),u=h.getUTCSeconds(),v=h.getUTCMilliseconds();h=(0>=j||j>=1e4?(0>j?"-":"+")+H(6,0>j?-j:j):H(4,j))+"-"+H(2,k+1)+"-"+H(2,m)+"T"+H(2,r)+":"+H(2,t)+":"+H(2,u)+"."+H(3,v)+"Z"}else h=null;if(c&&(h=c.call(b,a,h)),null===h)return"null";if(i=s.call(h),i==A)return""+h;if(i==x)return h>-1/0&&1/0>h?""+h:"null";if(i==y)return J(""+h);if("object"==typeof h){for(G=g.length;G--;)if(g[G]===h)throw l();if(g.push(h),B=[],I=f,f+=e,i==z){for(F=0,G=h.length;G>F;F++)D=K(F,h,c,d,e,f,g),B.push(D===q?"null":D);L=B.length?e?"[\n"+f+B.join(",\n"+f)+"\n"+I+"]":"["+B.join(",")+"]":"[]"}else p(d||h,function(a){var b=K(a,h,c,d,e,f,g);b!==q&&B.push(J(a)+":"+(e?" ":"")+b)}),L=B.length?e?"{\n"+f+B.join(",\n"+f)+"\n"+I+"}":"{"+B.join(",")+"}":"{}";return g.pop(),L}};d.stringify=function(a,b,d){var e,f,g,h;if(c[typeof b]&&b)if((h=s.call(b))==v)f=b;else if(h==z){g={};for(var i,j=0,k=b.length;k>j;i=b[j++],h=s.call(i),(h==y||h==x)&&(g[i]=1));}if(d)if((h=s.call(d))==x){if((d-=d%1)>0)for(e="",d>10&&(d=10);e.length<d;e+=" ");}else h==y&&(e=d.length<=10?d:d.slice(0,10));return K("",(i={},i[""]=a,i),f,g,e,"",[])}}if(!f("json-parse")){var L,M,N=h.fromCharCode,O={92:"\\",34:'"',47:"/",98:"\b",116:"	",110:"\n",102:"\f",114:"\r"},P=function(){throw L=M=null,k()},Q=function(){for(var a,b,c,d,e,f=M,g=f.length;g>L;)switch(e=f.charCodeAt(L)){case 9:case 10:case 13:case 32:L++;break;case 123:case 125:case 91:case 93:case 58:case 44:return a=B?f.charAt(L):f[L],L++,a;case 34:for(a="@",L++;g>L;)if(e=f.charCodeAt(L),32>e)P();else if(92==e)switch(e=f.charCodeAt(++L)){case 92:case 34:
case 47:case 98:case 116:case 110:case 102:case 114:a+=O[e],L++;break;case 117:for(b=++L,c=L+4;c>L;L++)e=f.charCodeAt(L),e>=48&&57>=e||e>=97&&102>=e||e>=65&&70>=e||P();a+=N("0x"+f.slice(b,L));break;default:P()}else{if(34==e)break;for(e=f.charCodeAt(L),b=L;e>=32&&92!=e&&34!=e;)e=f.charCodeAt(++L);a+=f.slice(b,L)}if(34==f.charCodeAt(L))return L++,a;P();default:if(b=L,45==e&&(d=!0,e=f.charCodeAt(++L)),e>=48&&57>=e){for(48==e&&(e=f.charCodeAt(L+1),e>=48&&57>=e)&&P(),d=!1;g>L&&(e=f.charCodeAt(L),e>=48&&57>=e);L++);if(46==f.charCodeAt(L)){for(c=++L;g>c&&(e=f.charCodeAt(c),e>=48&&57>=e);c++);c==L&&P(),L=c}if(e=f.charCodeAt(L),101==e||69==e){for(e=f.charCodeAt(++L),(43==e||45==e)&&L++,c=L;g>c&&(e=f.charCodeAt(c),e>=48&&57>=e);c++);c==L&&P(),L=c}return+f.slice(b,L)}if(d&&P(),"true"==f.slice(L,L+4))return L+=4,!0;if("false"==f.slice(L,L+5))return L+=5,!1;if("null"==f.slice(L,L+4))return L+=4,null;P()}return"$"},R=function(a){var b,c;if("$"==a&&P(),"string"==typeof a){if("@"==(B?a.charAt(0):a[0]))return a.slice(1);if("["==a){for(b=[];a=Q(),"]"!=a;c||(c=!0))c&&(","==a?(a=Q(),"]"==a&&P()):P()),","==a&&P(),b.push(R(a));return b}if("{"==a){for(b={};a=Q(),"}"!=a;c||(c=!0))c&&(","==a?(a=Q(),"}"==a&&P()):P()),(","==a||"string"!=typeof a||"@"!=(B?a.charAt(0):a[0])||":"!=Q())&&P(),b[a.slice(1)]=R(Q());return b}P()}return a},S=function(a,b,c){var d=T(a,b,c);d===q?delete a[b]:a[b]=d},T=function(a,b,c){var d,e=a[b];if("object"==typeof e&&e)if(s.call(e)==z)for(d=e.length;d--;)S(e,d,c);else p(e,function(a){S(e,a,c)});return c.call(a,b,e)};d.parse=function(a,b){var c,d;return L=0,M=""+a,c=R(Q()),"$"!=Q()&&P(),L=M=null,b&&s.call(b)==v?T((d={},d[""]=c,d),"",b):c}}}return d.runInContext=a,d}var b="function"==typeof define&&define.amd,c={"function":!0,object:!0},d=c[typeof exports]&&exports&&!exports.nodeType&&exports,e=c[typeof window]&&window||this,f=d&&c[typeof module]&&module&&!module.nodeType&&"object"==typeof global&&global;if(!f||f.global!==f&&f.window!==f&&f.self!==f||(e=f),d&&!b)a(e,d);else{var g=e.JSON,h=e.JSON3,i=!1,j=a(e,e.JSON3={noConflict:function(){return i||(i=!0,e.JSON=g,e.JSON3=h,g=h=null),j}});e.JSON={parse:j.parse,stringify:j.stringify}}b&&define(function(){return j})}.call(this),function(){var a={};a.appendToHead=function(b){a.getHead().appendChild(b)},a.getHead=function(){return document.head||document.getElementsByTagName("head")[0]},a.getBody=function(){return document.body||document.getElementsByTagName("body")[0]},createjs.DomUtils=a}(),function(){var a={};a.parseXML=function(a,b){var c=null;try{if(window.DOMParser){var d=new DOMParser;c=d.parseFromString(a,b)}}catch(e){}if(!c)try{c=new ActiveXObject("Microsoft.XMLDOM"),c.async=!1,c.loadXML(a)}catch(e){c=null}return c},a.parseJSON=function(a){if(null==a)return null;try{return JSON.parse(a)}catch(b){throw b}},createjs.DataUtils=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(){this.src=null,this.type=null,this.id=null,this.maintainOrder=!1,this.callback=null,this.data=null,this.method=createjs.LoadItem.GET,this.values=null,this.headers=null,this.withCredentials=!1,this.mimeType=null,this.crossOrigin=null,this.loadTimeout=c.LOAD_TIMEOUT_DEFAULT}var b=a.prototype={},c=a;c.LOAD_TIMEOUT_DEFAULT=8e3,c.create=function(b){if("string"==typeof b){var d=new a;return d.src=b,d}if(b instanceof c)return b;if(b instanceof Object&&b.src)return null==b.loadTimeout&&(b.loadTimeout=c.LOAD_TIMEOUT_DEFAULT),b;throw new Error("Type not recognized.")},b.set=function(a){for(var b in a)this[b]=a[b];return this},createjs.LoadItem=c}(),function(){var a={};a.ABSOLUTE_PATT=/^(?:\w+:)?\/{2}/i,a.RELATIVE_PATT=/^[.\/]*?\//i,a.EXTENSION_PATT=/\/?[^\/]+\.(\w{1,5})$/i,a.parseURI=function(b){var c={absolute:!1,relative:!1};if(null==b)return c;var d=b.indexOf("?");d>-1&&(b=b.substr(0,d));var e;return a.ABSOLUTE_PATT.test(b)?c.absolute=!0:a.RELATIVE_PATT.test(b)&&(c.relative=!0),(e=b.match(a.EXTENSION_PATT))&&(c.extension=e[1].toLowerCase()),c},a.formatQueryString=function(a,b){if(null==a)throw new Error("You must specify data.");var c=[];for(var d in a)c.push(d+"="+escape(a[d]));return b&&(c=c.concat(b)),c.join("&")},a.buildPath=function(a,b){if(null==b)return a;var c=[],d=a.indexOf("?");if(-1!=d){var e=a.slice(d+1);c=c.concat(e.split("&"))}return-1!=d?a.slice(0,d)+"?"+this.formatQueryString(b,c):a+"?"+this.formatQueryString(b,c)},a.isCrossDomain=function(a){var b=document.createElement("a");b.href=a.src;var c=document.createElement("a");c.href=location.href;var d=""!=b.hostname&&(b.port!=c.port||b.protocol!=c.protocol||b.hostname!=c.hostname);return d},a.isLocal=function(a){var b=document.createElement("a");return b.href=a.src,""==b.hostname&&"file:"==b.protocol},a.isBinary=function(a){switch(a){case createjs.AbstractLoader.IMAGE:case createjs.AbstractLoader.BINARY:return!0;default:return!1}},a.isImageTag=function(a){return a instanceof HTMLImageElement},a.isAudioTag=function(a){return window.HTMLAudioElement?a instanceof HTMLAudioElement:!1},a.isVideoTag=function(a){return window.HTMLVideoElement?a instanceof HTMLVideoElement:!1},a.isText=function(a){switch(a){case createjs.AbstractLoader.TEXT:case createjs.AbstractLoader.JSON:case createjs.AbstractLoader.MANIFEST:case createjs.AbstractLoader.XML:case createjs.AbstractLoader.CSS:case createjs.AbstractLoader.SVG:case createjs.AbstractLoader.JAVASCRIPT:case createjs.AbstractLoader.SPRITESHEET:return!0;default:return!1}},a.getTypeByExtension=function(a){if(null==a)return createjs.AbstractLoader.TEXT;switch(a.toLowerCase()){case"jpeg":case"jpg":case"gif":case"png":case"webp":case"bmp":return createjs.AbstractLoader.IMAGE;case"ogg":case"mp3":case"webm":return createjs.AbstractLoader.SOUND;case"mp4":case"webm":case"ts":return createjs.AbstractLoader.VIDEO;case"json":return createjs.AbstractLoader.JSON;case"xml":return createjs.AbstractLoader.XML;case"css":return createjs.AbstractLoader.CSS;case"js":return createjs.AbstractLoader.JAVASCRIPT;case"svg":return createjs.AbstractLoader.SVG;default:return createjs.AbstractLoader.TEXT}},createjs.RequestUtils=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b,c){this.EventDispatcher_constructor(),this.loaded=!1,this.canceled=!1,this.progress=0,this.type=c,this.resultFormatter=null,a?this._item=createjs.LoadItem.create(a):this._item=null,this._preferXHR=b,this._result=null,this._rawResult=null,this._loadedItems=null,this._tagSrcAttribute=null,this._tag=null}var b=createjs.extend(a,createjs.EventDispatcher),c=a;c.POST="POST",c.GET="GET",c.BINARY="binary",c.CSS="css",c.IMAGE="image",c.JAVASCRIPT="javascript",c.JSON="json",c.JSONP="jsonp",c.MANIFEST="manifest",c.SOUND="sound",c.VIDEO="video",c.SPRITESHEET="spritesheet",c.SVG="svg",c.TEXT="text",c.XML="xml",b.getItem=function(){return this._item},b.getResult=function(a){return a?this._rawResult:this._result},b.getTag=function(){return this._tag},b.setTag=function(a){this._tag=a},b.load=function(){this._createRequest(),this._request.on("complete",this,this),this._request.on("progress",this,this),this._request.on("loadStart",this,this),this._request.on("abort",this,this),this._request.on("timeout",this,this),this._request.on("error",this,this);var a=new createjs.Event("initialize");a.loader=this._request,this.dispatchEvent(a),this._request.load()},b.cancel=function(){this.canceled=!0,this.destroy()},b.destroy=function(){this._request&&(this._request.removeAllEventListeners(),this._request.destroy()),this._request=null,this._item=null,this._rawResult=null,this._result=null,this._loadItems=null,this.removeAllEventListeners()},b.getLoadedItems=function(){return this._loadedItems},b._createRequest=function(){this._preferXHR?this._request=new createjs.XHRRequest(this._item):this._request=new createjs.TagRequest(this._item,this._tag||this._createTag(),this._tagSrcAttribute)},b._createTag=function(a){return null},b._sendLoadStart=function(){this._isCanceled()||this.dispatchEvent("loadstart")},b._sendProgress=function(a){if(!this._isCanceled()){var b=null;"number"==typeof a?(this.progress=a,b=new createjs.ProgressEvent(this.progress)):(b=a,this.progress=a.loaded/a.total,b.progress=this.progress,(isNaN(this.progress)||this.progress==1/0)&&(this.progress=0)),this.hasEventListener("progress")&&this.dispatchEvent(b)}},b._sendComplete=function(){if(!this._isCanceled()){this.loaded=!0;var a=new createjs.Event("complete");a.rawResult=this._rawResult,null!=this._result&&(a.result=this._result),this.dispatchEvent(a)}},b._sendError=function(a){!this._isCanceled()&&this.hasEventListener("error")&&(null==a&&(a=new createjs.ErrorEvent("PRELOAD_ERROR_EMPTY")),this.dispatchEvent(a))},b._isCanceled=function(){return null==window.createjs||this.canceled?!0:!1},b.resultFormatter=null,b.handleEvent=function(a){switch(a.type){case"complete":this._rawResult=a.target._response;var b=this.resultFormatter&&this.resultFormatter(this);b instanceof Function?b.call(this,createjs.proxy(this._resultFormatSuccess,this),createjs.proxy(this._resultFormatFailed,this)):(this._result=b||this._rawResult,this._sendComplete());break;case"progress":this._sendProgress(a);break;case"error":this._sendError(a);break;case"loadstart":this._sendLoadStart();break;case"abort":case"timeout":this._isCanceled()||this.dispatchEvent(new createjs.ErrorEvent("PRELOAD_"+a.type.toUpperCase()+"_ERROR"))}},b._resultFormatSuccess=function(a){this._result=a,this._sendComplete()},b._resultFormatFailed=function(a){this._sendError(a)},b.buildPath=function(a,b){return createjs.RequestUtils.buildPath(a,b)},b.toString=function(){return"[PreloadJS AbstractLoader]"},createjs.AbstractLoader=createjs.promote(a,"EventDispatcher")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b,c){this.AbstractLoader_constructor(a,b,c),this.resultFormatter=this._formatResult,this._tagSrcAttribute="src",this.on("initialize",this._updateXHR,this)}var b=createjs.extend(a,createjs.AbstractLoader);b.load=function(){this._tag||(this._tag=this._createTag(this._item.src)),this._tag.preload="auto",this._tag.load(),this.AbstractLoader_load()},b._createTag=function(){},b._createRequest=function(){this._preferXHR?this._request=new createjs.XHRRequest(this._item):this._request=new createjs.MediaTagRequest(this._item,this._tag||this._createTag(),this._tagSrcAttribute)},b._updateXHR=function(a){a.loader.setResponseType&&a.loader.setResponseType("blob")},b._formatResult=function(a){if(this._tag.removeEventListener&&this._tag.removeEventListener("canplaythrough",this._loadedHandler),this._tag.onstalled=null,this._preferXHR){var b=window.URL||window.webkitURL,c=a.getResult(!0);a.getTag().src=b.createObjectURL(c)}return a.getTag()},createjs.AbstractMediaLoader=createjs.promote(a,"AbstractLoader")}(),this.createjs=this.createjs||{},function(){"use strict";var a=function(a){this._item=a},b=createjs.extend(a,createjs.EventDispatcher);b.load=function(){},b.destroy=function(){},b.cancel=function(){},createjs.AbstractRequest=createjs.promote(a,"EventDispatcher")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b,c){this.AbstractRequest_constructor(a),this._tag=b,this._tagSrcAttribute=c,this._loadedHandler=createjs.proxy(this._handleTagComplete,this),this._addedToDOM=!1,this._startTagVisibility=null}var b=createjs.extend(a,createjs.AbstractRequest);b.load=function(){this._tag.onload=createjs.proxy(this._handleTagComplete,this),this._tag.onreadystatechange=createjs.proxy(this._handleReadyStateChange,this),this._tag.onerror=createjs.proxy(this._handleError,this);var a=new createjs.Event("initialize");a.loader=this._tag,this.dispatchEvent(a),this._hideTag(),this._loadTimeout=setTimeout(createjs.proxy(this._handleTimeout,this),this._item.loadTimeout),this._tag[this._tagSrcAttribute]=this._item.src,null==this._tag.parentNode&&(window.document.body.appendChild(this._tag),this._addedToDOM=!0)},b.destroy=function(){this._clean(),this._tag=null,this.AbstractRequest_destroy()},b._handleReadyStateChange=function(){clearTimeout(this._loadTimeout);var a=this._tag;("loaded"==a.readyState||"complete"==a.readyState)&&this._handleTagComplete()},b._handleError=function(){this._clean(),this.dispatchEvent("error")},b._handleTagComplete=function(){this._rawResult=this._tag,this._result=this.resultFormatter&&this.resultFormatter(this)||this._rawResult,this._clean(),this._showTag(),this.dispatchEvent("complete")},b._handleTimeout=function(){this._clean(),this.dispatchEvent(new createjs.Event("timeout"))},b._clean=function(){this._tag.onload=null,this._tag.onreadystatechange=null,this._tag.onerror=null,this._addedToDOM&&null!=this._tag.parentNode&&this._tag.parentNode.removeChild(this._tag),clearTimeout(this._loadTimeout)},b._hideTag=function(){this._startTagVisibility=this._tag.style.visibility,this._tag.style.visibility="hidden"},b._showTag=function(){this._tag.style.visibility=this._startTagVisibility},b._handleStalled=function(){},createjs.TagRequest=createjs.promote(a,"AbstractRequest")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b,c){this.AbstractRequest_constructor(a),this._tag=b,this._tagSrcAttribute=c,this._loadedHandler=createjs.proxy(this._handleTagComplete,this)}var b=createjs.extend(a,createjs.TagRequest);b.load=function(){var a=createjs.proxy(this._handleStalled,this);this._stalledCallback=a;var b=createjs.proxy(this._handleProgress,this);this._handleProgress=b,this._tag.addEventListener("stalled",a),this._tag.addEventListener("progress",b),this._tag.addEventListener&&this._tag.addEventListener("canplaythrough",this._loadedHandler,!1),this.TagRequest_load()},b._handleReadyStateChange=function(){clearTimeout(this._loadTimeout);var a=this._tag;("loaded"==a.readyState||"complete"==a.readyState)&&this._handleTagComplete()},b._handleStalled=function(){},b._handleProgress=function(a){if(a&&!(a.loaded>0&&0==a.total)){var b=new createjs.ProgressEvent(a.loaded,a.total);this.dispatchEvent(b)}},b._clean=function(){this._tag.removeEventListener&&this._tag.removeEventListener("canplaythrough",this._loadedHandler),this._tag.removeEventListener("stalled",this._stalledCallback),this._tag.removeEventListener("progress",this._progressCallback),this.TagRequest__clean()},createjs.MediaTagRequest=createjs.promote(a,"TagRequest")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a){this.AbstractRequest_constructor(a),this._request=null,this._loadTimeout=null,this._xhrLevel=1,this._response=null,this._rawResponse=null,this._canceled=!1,this._handleLoadStartProxy=createjs.proxy(this._handleLoadStart,this),this._handleProgressProxy=createjs.proxy(this._handleProgress,this),this._handleAbortProxy=createjs.proxy(this._handleAbort,this),this._handleErrorProxy=createjs.proxy(this._handleError,this),this._handleTimeoutProxy=createjs.proxy(this._handleTimeout,this),this._handleLoadProxy=createjs.proxy(this._handleLoad,this),this._handleReadyStateChangeProxy=createjs.proxy(this._handleReadyStateChange,this),!this._createXHR(a)}var b=createjs.extend(a,createjs.AbstractRequest);a.ACTIVEX_VERSIONS=["Msxml2.XMLHTTP.6.0","Msxml2.XMLHTTP.5.0","Msxml2.XMLHTTP.4.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],b.getResult=function(a){return a&&this._rawResponse?this._rawResponse:this._response},b.cancel=function(){this.canceled=!0,this._clean(),this._request.abort()},b.load=function(){if(null==this._request)return void this._handleError();null!=this._request.addEventListener?(this._request.addEventListener("loadstart",this._handleLoadStartProxy,!1),this._request.addEventListener("progress",this._handleProgressProxy,!1),this._request.addEventListener("abort",this._handleAbortProxy,!1),this._request.addEventListener("error",this._handleErrorProxy,!1),this._request.addEventListener("timeout",this._handleTimeoutProxy,!1),this._request.addEventListener("load",this._handleLoadProxy,!1),this._request.addEventListener("readystatechange",this._handleReadyStateChangeProxy,!1)):(this._request.onloadstart=this._handleLoadStartProxy,this._request.onprogress=this._handleProgressProxy,this._request.onabort=this._handleAbortProxy,this._request.onerror=this._handleErrorProxy,this._request.ontimeout=this._handleTimeoutProxy,this._request.onload=this._handleLoadProxy,this._request.onreadystatechange=this._handleReadyStateChangeProxy),1==this._xhrLevel&&(this._loadTimeout=setTimeout(createjs.proxy(this._handleTimeout,this),this._item.loadTimeout));try{this._item.values&&this._item.method!=createjs.AbstractLoader.GET?this._item.method==createjs.AbstractLoader.POST&&this._request.send(createjs.RequestUtils.formatQueryString(this._item.values)):this._request.send()}catch(a){this.dispatchEvent(new createjs.ErrorEvent("XHR_SEND",null,a))}},b.setResponseType=function(a){"blob"===a&&(a=window.URL?"blob":"arraybuffer",this._responseType=a),this._request.responseType=a},b.getAllResponseHeaders=function(){return this._request.getAllResponseHeaders instanceof Function?this._request.getAllResponseHeaders():null},b.getResponseHeader=function(a){return this._request.getResponseHeader instanceof Function?this._request.getResponseHeader(a):null},b._handleProgress=function(a){if(a&&!(a.loaded>0&&0==a.total)){var b=new createjs.ProgressEvent(a.loaded,a.total);this.dispatchEvent(b)}},b._handleLoadStart=function(a){clearTimeout(this._loadTimeout),this.dispatchEvent("loadstart")},b._handleAbort=function(a){this._clean(),this.dispatchEvent(new createjs.ErrorEvent("XHR_ABORTED",null,a))},b._handleError=function(a){this._clean(),this.dispatchEvent(new createjs.ErrorEvent(a.message))},b._handleReadyStateChange=function(a){4==this._request.readyState&&this._handleLoad()},b._handleLoad=function(a){if(!this.loaded){this.loaded=!0;var b=this._checkError();if(b)return void this._handleError(b);if(this._response=this._getResponse(),"arraybuffer"===this._responseType)try{this._response=new Blob([this._response])}catch(c){if(window.BlobBuilder=window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder||window.MSBlobBuilder,"TypeError"===c.name&&window.BlobBuilder){var d=new BlobBuilder;d.append(this._response),this._response=d.getBlob()}}this._clean(),this.dispatchEvent(new createjs.Event("complete"))}},b._handleTimeout=function(a){this._clean(),this.dispatchEvent(new createjs.ErrorEvent("PRELOAD_TIMEOUT",null,a))},b._checkError=function(){var a=parseInt(this._request.status);switch(a){case 404:case 0:return new Error(a)}return null},b._getResponse=function(){if(null!=this._response)return this._response;if(null!=this._request.response)return this._request.response;try{if(null!=this._request.responseText)return this._request.responseText}catch(a){}try{if(null!=this._request.responseXML)return this._request.responseXML}catch(a){}return null},b._createXHR=function(a){var b=createjs.RequestUtils.isCrossDomain(a),c={},d=null;if(window.XMLHttpRequest)d=new XMLHttpRequest,b&&void 0===d.withCredentials&&window.XDomainRequest&&(d=new XDomainRequest);else{for(var e=0,f=s.ACTIVEX_VERSIONS.length;f>e;e++){var g=s.ACTIVEX_VERSIONS[e];try{d=new ActiveXObject(g);break}catch(h){}}if(null==d)return!1}null==a.mimeType&&createjs.RequestUtils.isText(a.type)&&(a.mimeType="text/plain; charset=utf-8"),a.mimeType&&d.overrideMimeType&&d.overrideMimeType(a.mimeType),this._xhrLevel="string"==typeof d.responseType?2:1;var i=null;if(i=a.method==createjs.AbstractLoader.GET?createjs.RequestUtils.buildPath(a.src,a.values):a.src,d.open(a.method||createjs.AbstractLoader.GET,i,!0),b&&d instanceof XMLHttpRequest&&1==this._xhrLevel&&(c.Origin=location.origin),a.values&&a.method==createjs.AbstractLoader.POST&&(c["Content-Type"]="application/x-www-form-urlencoded"),b||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest"),a.headers)for(var j in a.headers)c[j]=a.headers[j];for(j in c)d.setRequestHeader(j,c[j]);return d instanceof XMLHttpRequest&&void 0!==a.withCredentials&&(d.withCredentials=a.withCredentials),this._request=d,!0},b._clean=function(){clearTimeout(this._loadTimeout),null!=this._request.removeEventListener?(this._request.removeEventListener("loadstart",this._handleLoadStartProxy),this._request.removeEventListener("progress",this._handleProgressProxy),this._request.removeEventListener("abort",this._handleAbortProxy),this._request.removeEventListener("error",this._handleErrorProxy),this._request.removeEventListener("timeout",this._handleTimeoutProxy),this._request.removeEventListener("load",this._handleLoadProxy),this._request.removeEventListener("readystatechange",this._handleReadyStateChangeProxy)):(this._request.onloadstart=null,this._request.onprogress=null,this._request.onabort=null,this._request.onerror=null,this._request.ontimeout=null,this._request.onload=null,this._request.onreadystatechange=null)},b.toString=function(){return"[PreloadJS XHRRequest]"},createjs.XHRRequest=createjs.promote(a,"AbstractRequest")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b,c){this.AbstractLoader_constructor(),this._plugins=[],this._typeCallbacks={},this._extensionCallbacks={},this.next=null,this.maintainScriptOrder=!0,this.stopOnError=!1,this._maxConnections=1,this._availableLoaders=[createjs.ImageLoader,createjs.JavaScriptLoader,createjs.CSSLoader,createjs.JSONLoader,createjs.JSONPLoader,createjs.SoundLoader,createjs.ManifestLoader,createjs.SpriteSheetLoader,createjs.XMLLoader,createjs.SVGLoader,createjs.BinaryLoader,createjs.VideoLoader,createjs.TextLoader],this._defaultLoaderLength=this._availableLoaders.length,this.init(a,b,c)}var b=createjs.extend(a,createjs.AbstractLoader),c=a;b.init=function(a,b,c){this.useXHR=!0,this.preferXHR=!0,this._preferXHR=!0,this.setPreferXHR(a),this._paused=!1,this._basePath=b,this._crossOrigin=c,this._loadStartWasDispatched=!1,this._currentlyLoadingScript=null,this._currentLoads=[],this._loadQueue=[],this._loadQueueBackup=[],this._loadItemsById={},this._loadItemsBySrc={},this._loadedResults={},this._loadedRawResults={},this._numItems=0,this._numItemsLoaded=0,this._scriptOrder=[],this._loadedScripts=[],this._lastProgress=NaN},c.loadTimeout=8e3,c.LOAD_TIMEOUT=0,c.BINARY=createjs.AbstractLoader.BINARY,c.CSS=createjs.AbstractLoader.CSS,c.IMAGE=createjs.AbstractLoader.IMAGE,c.JAVASCRIPT=createjs.AbstractLoader.JAVASCRIPT,c.JSON=createjs.AbstractLoader.JSON,c.JSONP=createjs.AbstractLoader.JSONP,c.MANIFEST=createjs.AbstractLoader.MANIFEST,c.SOUND=createjs.AbstractLoader.SOUND,c.VIDEO=createjs.AbstractLoader.VIDEO,c.SVG=createjs.AbstractLoader.SVG,c.TEXT=createjs.AbstractLoader.TEXT,c.XML=createjs.AbstractLoader.XML,c.POST=createjs.AbstractLoader.POST,c.GET=createjs.AbstractLoader.GET,b.registerLoader=function(a){if(!a||!a.canLoadItem)throw new Error("loader is of an incorrect type.");if(-1!=this._availableLoaders.indexOf(a))throw new Error("loader already exists.");this._availableLoaders.unshift(a)},b.unregisterLoader=function(a){var b=this._availableLoaders.indexOf(a);-1!=b&&b<this._defaultLoaderLength-1&&this._availableLoaders.splice(b,1)},b.setUseXHR=function(a){return this.setPreferXHR(a)},b.setPreferXHR=function(a){return this.preferXHR=0!=a&&null!=window.XMLHttpRequest,this.preferXHR},b.removeAll=function(){this.remove()},b.remove=function(a){var b=null;if(a&&!Array.isArray(a))b=[a];else if(a)b=a;else if(arguments.length>0)return;var c=!1;if(b){for(;b.length;){var d=b.pop(),e=this.getResult(d);for(f=this._loadQueue.length-1;f>=0;f--)if(g=this._loadQueue[f].getItem(),g.id==d||g.src==d){this._loadQueue.splice(f,1)[0].cancel();break}for(f=this._loadQueueBackup.length-1;f>=0;f--)if(g=this._loadQueueBackup[f].getItem(),g.id==d||g.src==d){this._loadQueueBackup.splice(f,1)[0].cancel();break}if(e)this._disposeItem(this.getItem(d));else for(var f=this._currentLoads.length-1;f>=0;f--){var g=this._currentLoads[f].getItem();if(g.id==d||g.src==d){this._currentLoads.splice(f,1)[0].cancel(),c=!0;break}}}c&&this._loadNext()}else{this.close();for(var h in this._loadItemsById)this._disposeItem(this._loadItemsById[h]);this.init(this.preferXHR,this._basePath)}},b.reset=function(){this.close();for(var a in this._loadItemsById)this._disposeItem(this._loadItemsById[a]);for(var b=[],c=0,d=this._loadQueueBackup.length;d>c;c++)b.push(this._loadQueueBackup[c].getItem());this.loadManifest(b,!1)},b.installPlugin=function(a){if(null!=a&&null!=a.getPreloadHandlers){this._plugins.push(a);var b=a.getPreloadHandlers();if(b.scope=a,null!=b.types)for(var c=0,d=b.types.length;d>c;c++)this._typeCallbacks[b.types[c]]=b;if(null!=b.extensions)for(c=0,d=b.extensions.length;d>c;c++)this._extensionCallbacks[b.extensions[c]]=b}},b.setMaxConnections=function(a){this._maxConnections=a,!this._paused&&this._loadQueue.length>0&&this._loadNext()},b.loadFile=function(a,b,c){if(null==a){var d=new createjs.ErrorEvent("PRELOAD_NO_FILE");return void this._sendError(d)}this._addItem(a,null,c),b!==!1?this.setPaused(!1):this.setPaused(!0)},b.loadManifest=function(a,b,d){var e=null,f=null;if(Array.isArray(a)){if(0==a.length){var g=new createjs.ErrorEvent("PRELOAD_MANIFEST_EMPTY");return void this._sendError(g)}e=a}else if("string"==typeof a)e=[{src:a,type:c.MANIFEST}];else{if("object"!=typeof a){var g=new createjs.ErrorEvent("PRELOAD_MANIFEST_NULL");return void this._sendError(g)}if(void 0!==a.src){if(null==a.type)a.type=c.MANIFEST;else if(a.type!=c.MANIFEST){var g=new createjs.ErrorEvent("PRELOAD_MANIFEST_TYPE");this._sendError(g)}e=[a]}else void 0!==a.manifest&&(e=a.manifest,f=a.path)}for(var h=0,i=e.length;i>h;h++)this._addItem(e[h],f,d);b!==!1?this.setPaused(!1):this.setPaused(!0)},b.load=function(){this.setPaused(!1)},b.getItem=function(a){return this._loadItemsById[a]||this._loadItemsBySrc[a]},b.getResult=function(a,b){var c=this._loadItemsById[a]||this._loadItemsBySrc[a];if(null==c)return null;var d=c.id;return b&&this._loadedRawResults[d]?this._loadedRawResults[d]:this._loadedResults[d]},b.getItems=function(a){var b=[];for(var c in this._loadItemsById){var d=this._loadItemsById[c],e=this.getResult(c);(a!==!0||null!=e)&&b.push({item:d,result:e,rawResult:this.getResult(c,!0)})}return b},b.setPaused=function(a){this._paused=a,this._paused||this._loadNext()},b.close=function(){for(;this._currentLoads.length;)this._currentLoads.pop().cancel();this._scriptOrder.length=0,this._loadedScripts.length=0,this.loadStartWasDispatched=!1,this._itemCount=0,this._lastProgress=NaN},b._addItem=function(a,b,c){var d=this._createLoadItem(a,b,c);if(null!=d){var e=this._createLoader(d);null!=e&&("plugins"in e&&(e.plugins=this._plugins),d._loader=e,this._loadQueue.push(e),this._loadQueueBackup.push(e),this._numItems++,this._updateProgress(),(this.maintainScriptOrder&&d.type==createjs.LoadQueue.JAVASCRIPT||d.maintainOrder===!0)&&(this._scriptOrder.push(d),this._loadedScripts.push(null)))}},b._createLoadItem=function(a,b,c){var d=createjs.LoadItem.create(a);if(null==d)return null;var e="",f=c||this._basePath;if(d.src instanceof Object){if(!d.type)return null;if(b){e=b;var g=createjs.RequestUtils.parseURI(b);null==f||g.absolute||g.relative||(e=f+e)}else null!=f&&(e=f)}else{var h=createjs.RequestUtils.parseURI(d.src);h.extension&&(d.ext=h.extension),null==d.type&&(d.type=createjs.RequestUtils.getTypeByExtension(d.ext));var i=d.src;if(!h.absolute&&!h.relative)if(b){e=b;var g=createjs.RequestUtils.parseURI(b);i=b+i,null==f||g.absolute||g.relative||(e=f+e)}else null!=f&&(e=f);d.src=e+d.src}d.path=e,(void 0===d.id||null===d.id||""===d.id)&&(d.id=i);var j=this._typeCallbacks[d.type]||this._extensionCallbacks[d.ext];if(j){var k=j.callback.call(j.scope,d,this);if(k===!1)return null;k===!0||null!=k&&(d._loader=k),h=createjs.RequestUtils.parseURI(d.src),null!=h.extension&&(d.ext=h.extension)}return this._loadItemsById[d.id]=d,this._loadItemsBySrc[d.src]=d,null==d.crossOrigin&&(d.crossOrigin=this._crossOrigin),d},b._createLoader=function(a){if(null!=a._loader)return a._loader;for(var b=this.preferXHR,c=0;c<this._availableLoaders.length;c++){var d=this._availableLoaders[c];if(d&&d.canLoadItem(a))return new d(a,b)}return null},b._loadNext=function(){if(!this._paused){this._loadStartWasDispatched||(this._sendLoadStart(),this._loadStartWasDispatched=!0),this._numItems==this._numItemsLoaded?(this.loaded=!0,this._sendComplete(),this.next&&this.next.load&&this.next.load()):this.loaded=!1;for(var a=0;a<this._loadQueue.length&&!(this._currentLoads.length>=this._maxConnections);a++){var b=this._loadQueue[a];this._canStartLoad(b)&&(this._loadQueue.splice(a,1),a--,this._loadItem(b))}}},b._loadItem=function(a){a.on("fileload",this._handleFileLoad,this),a.on("progress",this._handleProgress,this),a.on("complete",this._handleFileComplete,this),a.on("error",this._handleError,this),a.on("fileerror",this._handleFileError,this),this._currentLoads.push(a),this._sendFileStart(a.getItem()),a.load()},b._handleFileLoad=function(a){a.target=null,this.dispatchEvent(a)},b._handleFileError=function(a){var b=new createjs.ErrorEvent("FILE_LOAD_ERROR",null,a.item);this._sendError(b)},b._handleError=function(a){var b=a.target;this._numItemsLoaded++,this._finishOrderedItem(b,!0),this._updateProgress();var c=new createjs.ErrorEvent("FILE_LOAD_ERROR",null,b.getItem());this._sendError(c),this.stopOnError?this.setPaused(!0):(this._removeLoadItem(b),this._cleanLoadItem(b),this._loadNext())},b._handleFileComplete=function(a){var b=a.target,c=b.getItem(),d=b.getResult();this._loadedResults[c.id]=d;var e=b.getResult(!0);null!=e&&e!==d&&(this._loadedRawResults[c.id]=e),this._saveLoadedItems(b),this._removeLoadItem(b),this._finishOrderedItem(b)||this._processFinishedLoad(c,b),this._cleanLoadItem(b)},b._saveLoadedItems=function(a){var b=a.getLoadedItems();if(null!==b)for(var c=0;c<b.length;c++){var d=b[c].item;this._loadItemsBySrc[d.src]=d,this._loadItemsById[d.id]=d,this._loadedResults[d.id]=b[c].result,this._loadedRawResults[d.id]=b[c].rawResult}},b._finishOrderedItem=function(a,b){var c=a.getItem();if(this.maintainScriptOrder&&c.type==createjs.LoadQueue.JAVASCRIPT||c.maintainOrder){a instanceof createjs.JavaScriptLoader&&(this._currentlyLoadingScript=!1);var d=createjs.indexOf(this._scriptOrder,c);return-1==d?!1:(this._loadedScripts[d]=b===!0?!0:c,this._checkScriptLoadOrder(),!0)}return!1},b._checkScriptLoadOrder=function(){for(var a=this._loadedScripts.length,b=0;a>b;b++){var c=this._loadedScripts[b];if(null===c)break;if(c!==!0){var d=this._loadedResults[c.id];c.type==createjs.LoadQueue.JAVASCRIPT&&createjs.DomUtils.appendToHead(d);var e=c._loader;this._processFinishedLoad(c,e),this._loadedScripts[b]=!0}}},b._processFinishedLoad=function(a,b){if(this._numItemsLoaded++,!this.maintainScriptOrder&&a.type==createjs.LoadQueue.JAVASCRIPT){var c=b.getTag();createjs.DomUtils.appendToHead(c)}this._updateProgress(),this._sendFileComplete(a,b),this._loadNext()},b._canStartLoad=function(a){if(!this.maintainScriptOrder||a.preferXHR)return!0;var b=a.getItem();if(b.type!=createjs.LoadQueue.JAVASCRIPT)return!0;if(this._currentlyLoadingScript)return!1;for(var c=this._scriptOrder.indexOf(b),d=0;c>d;){var e=this._loadedScripts[d];if(null==e)return!1;d++}return this._currentlyLoadingScript=!0,!0},b._removeLoadItem=function(a){for(var b=this._currentLoads.length,c=0;b>c;c++)if(this._currentLoads[c]==a){this._currentLoads.splice(c,1);break}},b._cleanLoadItem=function(a){var b=a.getItem();b&&delete b._loader},b._handleProgress=function(a){var b=a.target;this._sendFileProgress(b.getItem(),b.progress),this._updateProgress()},b._updateProgress=function(){var a=this._numItemsLoaded/this._numItems,b=this._numItems-this._numItemsLoaded;if(b>0){for(var c=0,d=0,e=this._currentLoads.length;e>d;d++)c+=this._currentLoads[d].progress;a+=c/b*(b/this._numItems)}this._lastProgress!=a&&(this._sendProgress(a),this._lastProgress=a)},b._disposeItem=function(a){delete this._loadedResults[a.id],delete this._loadedRawResults[a.id],delete this._loadItemsById[a.id],delete this._loadItemsBySrc[a.src]},b._sendFileProgress=function(a,b){if(!this._isCanceled()&&!this._paused&&this.hasEventListener("fileprogress")){var c=new createjs.Event("fileprogress");c.progress=b,c.loaded=b,c.total=1,c.item=a,this.dispatchEvent(c)}},b._sendFileComplete=function(a,b){
if(!this._isCanceled()&&!this._paused){var c=new createjs.Event("fileload");c.loader=b,c.item=a,c.result=this._loadedResults[a.id],c.rawResult=this._loadedRawResults[a.id],a.completeHandler&&a.completeHandler(c),this.hasEventListener("fileload")&&this.dispatchEvent(c)}},b._sendFileStart=function(a){var b=new createjs.Event("filestart");b.item=a,this.hasEventListener("filestart")&&this.dispatchEvent(b)},b.toString=function(){return"[PreloadJS LoadQueue]"},createjs.LoadQueue=createjs.promote(a,"AbstractLoader")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a){this.AbstractLoader_constructor(a,!0,createjs.AbstractLoader.TEXT)}var b=(createjs.extend(a,createjs.AbstractLoader),a);b.canLoadItem=function(a){return a.type==createjs.AbstractLoader.TEXT},createjs.TextLoader=createjs.promote(a,"AbstractLoader")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a){this.AbstractLoader_constructor(a,!0,createjs.AbstractLoader.BINARY),this.on("initialize",this._updateXHR,this)}var b=createjs.extend(a,createjs.AbstractLoader),c=a;c.canLoadItem=function(a){return a.type==createjs.AbstractLoader.BINARY},b._updateXHR=function(a){a.loader.setResponseType("arraybuffer")},createjs.BinaryLoader=createjs.promote(a,"AbstractLoader")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b){this.AbstractLoader_constructor(a,b,createjs.AbstractLoader.CSS),this.resultFormatter=this._formatResult,this._tagSrcAttribute="href",b?this._tag=document.createElement("style"):this._tag=document.createElement("link"),this._tag.rel="stylesheet",this._tag.type="text/css"}var b=createjs.extend(a,createjs.AbstractLoader),c=a;c.canLoadItem=function(a){return a.type==createjs.AbstractLoader.CSS},b._formatResult=function(a){if(this._preferXHR){var b=a.getTag();if(b.styleSheet)b.styleSheet.cssText=a.getResult(!0);else{var c=document.createTextNode(a.getResult(!0));b.appendChild(c)}}else b=this._tag;return createjs.DomUtils.appendToHead(b),b},createjs.CSSLoader=createjs.promote(a,"AbstractLoader")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b){this.AbstractLoader_constructor(a,b,createjs.AbstractLoader.IMAGE),this.resultFormatter=this._formatResult,this._tagSrcAttribute="src",createjs.RequestUtils.isImageTag(a)?this._tag=a:createjs.RequestUtils.isImageTag(a.src)?this._tag=a.src:createjs.RequestUtils.isImageTag(a.tag)&&(this._tag=a.tag),null!=this._tag?this._preferXHR=!1:this._tag=document.createElement("img"),this.on("initialize",this._updateXHR,this)}var b=createjs.extend(a,createjs.AbstractLoader),c=a;c.canLoadItem=function(a){return a.type==createjs.AbstractLoader.IMAGE},b.load=function(){if(""!=this._tag.src&&this._tag.complete)return void this._sendComplete();var a=this._item.crossOrigin;1==a&&(a="Anonymous"),null==a||createjs.RequestUtils.isLocal(this._item.src)||(this._tag.crossOrigin=a),this.AbstractLoader_load()},b._updateXHR=function(a){a.loader.mimeType="text/plain; charset=x-user-defined-binary",a.loader.setResponseType&&a.loader.setResponseType("blob")},b._formatResult=function(a){return this._formatImage},b._formatImage=function(a,b){var c=this._tag,d=window.URL||window.webkitURL;if(this._preferXHR)if(d){var e=d.createObjectURL(this.getResult(!0));c.src=e,c.addEventListener("load",this._cleanUpURL,!1),c.addEventListener("error",this._cleanUpURL,!1)}else c.src=this._item.src;else;c.complete?a(c):(c.onload=createjs.proxy(function(){a(this._tag)},this),c.onerror=createjs.proxy(function(){b(_this._tag)},this))},b._cleanUpURL=function(a){var b=window.URL||window.webkitURL;b.revokeObjectURL(a.target.src)},createjs.ImageLoader=createjs.promote(a,"AbstractLoader")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b){this.AbstractLoader_constructor(a,b,createjs.AbstractLoader.JAVASCRIPT),this.resultFormatter=this._formatResult,this._tagSrcAttribute="src",this.setTag(document.createElement("script"))}var b=createjs.extend(a,createjs.AbstractLoader),c=a;c.canLoadItem=function(a){return a.type==createjs.AbstractLoader.JAVASCRIPT},b._formatResult=function(a){var b=a.getTag();return this._preferXHR&&(b.text=a.getResult(!0)),b},createjs.JavaScriptLoader=createjs.promote(a,"AbstractLoader")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a){this.AbstractLoader_constructor(a,!0,createjs.AbstractLoader.JSON),this.resultFormatter=this._formatResult}var b=createjs.extend(a,createjs.AbstractLoader),c=a;c.canLoadItem=function(a){return a.type==createjs.AbstractLoader.JSON},b._formatResult=function(a){var b=null;try{b=createjs.DataUtils.parseJSON(a.getResult(!0))}catch(c){var d=new createjs.ErrorEvent("JSON_FORMAT",null,c);return this._sendError(d),c}return b},createjs.JSONLoader=createjs.promote(a,"AbstractLoader")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a){this.AbstractLoader_constructor(a,!1,createjs.AbstractLoader.JSONP),this.setTag(document.createElement("script")),this.getTag().type="text/javascript"}var b=createjs.extend(a,createjs.AbstractLoader),c=a;c.canLoadItem=function(a){return a.type==createjs.AbstractLoader.JSONP},b.cancel=function(){this.AbstractLoader_cancel(),this._dispose()},b.load=function(){if(null==this._item.callback)throw new Error("callback is required for loading JSONP requests.");if(null!=window[this._item.callback])throw new Error("JSONP callback '"+this._item.callback+"' already exists on window. You need to specify a different callback or re-name the current one.");window[this._item.callback]=createjs.proxy(this._handleLoad,this),window.document.body.appendChild(this._tag),this._loadTimeout=setTimeout(createjs.proxy(this._handleTimeout,this),this._item.loadTimeout),this._tag.src=this._item.src},b._handleLoad=function(a){this._result=this._rawResult=a,this._sendComplete(),this._dispose()},b._handleTimeout=function(){this._dispose(),this.dispatchEvent(new createjs.ErrorEvent("timeout"))},b._dispose=function(){window.document.body.removeChild(this._tag),delete window[this._item.callback],clearTimeout(this._loadTimeout)},createjs.JSONPLoader=createjs.promote(a,"AbstractLoader")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a){this.AbstractLoader_constructor(a,null,createjs.AbstractLoader.MANIFEST),this.plugins=null,this._manifestQueue=null}var b=createjs.extend(a,createjs.AbstractLoader),c=a;c.MANIFEST_PROGRESS=.25,c.canLoadItem=function(a){return a.type==createjs.AbstractLoader.MANIFEST},b.load=function(){this.AbstractLoader_load()},b._createRequest=function(){var a=this._item.callback;null!=a?this._request=new createjs.JSONPLoader(this._item):this._request=new createjs.JSONLoader(this._item)},b.handleEvent=function(a){switch(a.type){case"complete":return this._rawResult=a.target.getResult(!0),this._result=a.target.getResult(),this._sendProgress(c.MANIFEST_PROGRESS),void this._loadManifest(this._result);case"progress":return a.loaded*=c.MANIFEST_PROGRESS,this.progress=a.loaded/a.total,(isNaN(this.progress)||this.progress==1/0)&&(this.progress=0),void this._sendProgress(a)}this.AbstractLoader_handleEvent(a)},b.destroy=function(){this.AbstractLoader_destroy(),this._manifestQueue.close()},b._loadManifest=function(a){if(a&&a.manifest){var b=this._manifestQueue=new createjs.LoadQueue;b.on("fileload",this._handleManifestFileLoad,this),b.on("progress",this._handleManifestProgress,this),b.on("complete",this._handleManifestComplete,this,!0),b.on("error",this._handleManifestError,this,!0);for(var c=0,d=this.plugins.length;d>c;c++)b.installPlugin(this.plugins[c]);b.loadManifest(a)}else this._sendComplete()},b._handleManifestFileLoad=function(a){a.target=null,this.dispatchEvent(a)},b._handleManifestComplete=function(a){this._loadedItems=this._manifestQueue.getItems(!0),this._sendComplete()},b._handleManifestProgress=function(a){this.progress=a.progress*(1-c.MANIFEST_PROGRESS)+c.MANIFEST_PROGRESS,this._sendProgress(this.progress)},b._handleManifestError=function(a){var b=new createjs.Event("fileerror");b.item=a.data,this.dispatchEvent(b)},createjs.ManifestLoader=createjs.promote(a,"AbstractLoader")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b){this.AbstractMediaLoader_constructor(a,b,createjs.AbstractLoader.SOUND),createjs.RequestUtils.isAudioTag(a)?this._tag=a:createjs.RequestUtils.isAudioTag(a.src)?this._tag=a:createjs.RequestUtils.isAudioTag(a.tag)&&(this._tag=createjs.RequestUtils.isAudioTag(a)?a:a.src),null!=this._tag&&(this._preferXHR=!1)}var b=createjs.extend(a,createjs.AbstractMediaLoader),c=a;c.canLoadItem=function(a){return a.type==createjs.AbstractLoader.SOUND},b._createTag=function(a){var b=document.createElement("audio");return b.autoplay=!1,b.preload="none",b.src=a,b},createjs.SoundLoader=createjs.promote(a,"AbstractMediaLoader")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b){this.AbstractMediaLoader_constructor(a,b,createjs.AbstractLoader.VIDEO),createjs.RequestUtils.isVideoTag(a)||createjs.RequestUtils.isVideoTag(a.src)?(this.setTag(createjs.RequestUtils.isVideoTag(a)?a:a.src),this._preferXHR=!1):this.setTag(this._createTag())}var b=createjs.extend(a,createjs.AbstractMediaLoader),c=a;b._createTag=function(){return document.createElement("video")},c.canLoadItem=function(a){return a.type==createjs.AbstractLoader.VIDEO},createjs.VideoLoader=createjs.promote(a,"AbstractMediaLoader")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b){this.AbstractLoader_constructor(a,b,createjs.AbstractLoader.SPRITESHEET),this._manifestQueue=null}var b=createjs.extend(a,createjs.AbstractLoader),c=a;c.SPRITESHEET_PROGRESS=.25,c.canLoadItem=function(a){return a.type==createjs.AbstractLoader.SPRITESHEET},b.destroy=function(){this.AbstractLoader_destroy,this._manifestQueue.close()},b._createRequest=function(){var a=this._item.callback;null!=a?this._request=new createjs.JSONPLoader(this._item):this._request=new createjs.JSONLoader(this._item)},b.handleEvent=function(a){switch(a.type){case"complete":return this._rawResult=a.target.getResult(!0),this._result=a.target.getResult(),this._sendProgress(c.SPRITESHEET_PROGRESS),void this._loadManifest(this._result);case"progress":return a.loaded*=c.SPRITESHEET_PROGRESS,this.progress=a.loaded/a.total,(isNaN(this.progress)||this.progress==1/0)&&(this.progress=0),void this._sendProgress(a)}this.AbstractLoader_handleEvent(a)},b._loadManifest=function(a){if(a&&a.images){var b=this._manifestQueue=new createjs.LoadQueue(this._preferXHR,this._item.path,this._item.crossOrigin);b.on("complete",this._handleManifestComplete,this,!0),b.on("fileload",this._handleManifestFileLoad,this),b.on("progress",this._handleManifestProgress,this),b.on("error",this._handleManifestError,this,!0),b.loadManifest(a.images)}},b._handleManifestFileLoad=function(a){var b=a.result;if(null!=b){var c=this.getResult().images,d=c.indexOf(a.item.src);c[d]=b}},b._handleManifestComplete=function(a){this._result=new createjs.SpriteSheet(this._result),this._loadedItems=this._manifestQueue.getItems(!0),this._sendComplete()},b._handleManifestProgress=function(a){this.progress=a.progress*(1-c.SPRITESHEET_PROGRESS)+c.SPRITESHEET_PROGRESS,this._sendProgress(this.progress)},b._handleManifestError=function(a){var b=new createjs.Event("fileerror");b.item=a.data,this.dispatchEvent(b)},createjs.SpriteSheetLoader=createjs.promote(a,"AbstractLoader")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b){this.AbstractLoader_constructor(a,b,createjs.AbstractLoader.SVG),this.resultFormatter=this._formatResult,this._tagSrcAttribute="data",b?this.setTag(document.createElement("svg")):(this.setTag(document.createElement("object")),this.getTag().type="image/svg+xml")}var b=createjs.extend(a,createjs.AbstractLoader),c=a;c.canLoadItem=function(a){return a.type==createjs.AbstractLoader.SVG},b._formatResult=function(a){var b=createjs.DataUtils.parseXML(a.getResult(!0),"text/xml"),c=a.getTag();return!this._preferXHR&&document.body.contains(c)&&document.body.removeChild(c),null!=b.documentElement?(c.appendChild(b.documentElement),c.style.visibility="visible",c):b},createjs.SVGLoader=createjs.promote(a,"AbstractLoader")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a){this.AbstractLoader_constructor(a,!0,createjs.AbstractLoader.XML),this.resultFormatter=this._formatResult}var b=createjs.extend(a,createjs.AbstractLoader),c=a;c.canLoadItem=function(a){return a.type==createjs.AbstractLoader.XML},b._formatResult=function(a){return createjs.DataUtils.parseXML(a.getResult(!0),"text/xml")},createjs.XMLLoader=createjs.promote(a,"AbstractLoader")}(),this.createjs=this.createjs||{},function(){var a=createjs.SoundJS=createjs.SoundJS||{};a.version="0.6.2",a.buildDate="Thu, 26 Nov 2015 20:44:31 GMT"}(),this.createjs=this.createjs||{},createjs.indexOf=function(a,b){"use strict";for(var c=0,d=a.length;d>c;c++)if(b===a[c])return c;return-1},this.createjs=this.createjs||{},function(){"use strict";createjs.proxy=function(a,b){var c=Array.prototype.slice.call(arguments,2);return function(){return a.apply(b,Array.prototype.slice.call(arguments,0).concat(c))}}}(),this.createjs=this.createjs||{},function(){"use strict";function a(){throw"BrowserDetect cannot be instantiated"}var b=a.agent=window.navigator.userAgent;a.isWindowPhone=b.indexOf("IEMobile")>-1||b.indexOf("Windows Phone")>-1,a.isFirefox=b.indexOf("Firefox")>-1,a.isOpera=null!=window.opera,a.isChrome=b.indexOf("Chrome")>-1,a.isIOS=(b.indexOf("iPod")>-1||b.indexOf("iPhone")>-1||b.indexOf("iPad")>-1)&&!a.isWindowPhone,a.isAndroid=b.indexOf("Android")>-1&&!a.isWindowPhone,a.isBlackberry=b.indexOf("Blackberry")>-1,createjs.BrowserDetect=a}(),this.createjs=this.createjs||{},function(){"use strict";var a=function(){this.interrupt=null,this.delay=null,this.offset=null,this.loop=null,this.volume=null,this.pan=null,this.startTime=null,this.duration=null},b=a.prototype={},c=a;c.create=function(a){if(a instanceof c||a instanceof Object){var b=new createjs.PlayPropsConfig;return b.set(a),b}throw new Error("Type not recognized.")},b.set=function(a){for(var b in a)this[b]=a[b];return this},b.toString=function(){return"[PlayPropsConfig]"},createjs.PlayPropsConfig=c}(),this.createjs=this.createjs||{},function(){"use strict";function a(){throw"Sound cannot be instantiated"}function b(a,b){this.init(a,b)}var c=a;c.INTERRUPT_ANY="any",c.INTERRUPT_EARLY="early",c.INTERRUPT_LATE="late",c.INTERRUPT_NONE="none",c.PLAY_INITED="playInited",c.PLAY_SUCCEEDED="playSucceeded",c.PLAY_INTERRUPTED="playInterrupted",c.PLAY_FINISHED="playFinished",c.PLAY_FAILED="playFailed",c.SUPPORTED_EXTENSIONS=["mp3","ogg","opus","mpeg","wav","m4a","mp4","aiff","wma","mid"],c.EXTENSION_MAP={m4a:"mp4"},c.FILE_PATTERN=/^(?:(\w+:)\/{2}(\w+(?:\.\w+)*\/?))?([\/.]*?(?:[^?]+)?\/)?((?:[^\/?]+)\.(\w+))(?:\?(\S+)?)?$/,c.defaultInterruptBehavior=c.INTERRUPT_NONE,c.alternateExtensions=[],c.activePlugin=null,c._masterVolume=1,Object.defineProperty(c,"volume",{get:function(){return this._masterVolume},set:function(a){if(null==Number(a))return!1;if(a=Math.max(0,Math.min(1,a)),c._masterVolume=a,!this.activePlugin||!this.activePlugin.setVolume||!this.activePlugin.setVolume(a))for(var b=this._instances,d=0,e=b.length;e>d;d++)b[d].setMasterVolume(a)}}),c._masterMute=!1,Object.defineProperty(c,"muted",{get:function(){return this._masterMute},set:function(a){if(null==a)return!1;if(this._masterMute=a,!this.activePlugin||!this.activePlugin.setMute||!this.activePlugin.setMute(a))for(var b=this._instances,c=0,d=b.length;d>c;c++)b[c].setMasterMute(a);return!0}}),Object.defineProperty(c,"capabilities",{get:function(){return null==c.activePlugin?null:c.activePlugin._capabilities},set:function(a){return!1}}),c._pluginsRegistered=!1,c._lastID=0,c._instances=[],c._idHash={},c._preloadHash={},c._defaultPlayPropsHash={},c.addEventListener=null,c.removeEventListener=null,c.removeAllEventListeners=null,c.dispatchEvent=null,c.hasEventListener=null,c._listeners=null,createjs.EventDispatcher.initialize(c),c.getPreloadHandlers=function(){return{callback:createjs.proxy(c.initLoad,c),types:["sound"],extensions:c.SUPPORTED_EXTENSIONS}},c._handleLoadComplete=function(a){var b=a.target.getItem().src;if(c._preloadHash[b])for(var d=0,e=c._preloadHash[b].length;e>d;d++){var f=c._preloadHash[b][d];if(c._preloadHash[b][d]=!0,c.hasEventListener("fileload")){var a=new createjs.Event("fileload");a.src=f.src,a.id=f.id,a.data=f.data,a.sprite=f.sprite,c.dispatchEvent(a)}}},c._handleLoadError=function(a){var b=a.target.getItem().src;if(c._preloadHash[b])for(var d=0,e=c._preloadHash[b].length;e>d;d++){var f=c._preloadHash[b][d];if(c._preloadHash[b][d]=!1,c.hasEventListener("fileerror")){var a=new createjs.Event("fileerror");a.src=f.src,a.id=f.id,a.data=f.data,a.sprite=f.sprite,c.dispatchEvent(a)}}},c._registerPlugin=function(a){return a.isSupported()?(c.activePlugin=new a,!0):!1},c.registerPlugins=function(a){c._pluginsRegistered=!0;for(var b=0,d=a.length;d>b;b++)if(c._registerPlugin(a[b]))return!0;return!1},c.initializeDefaultPlugins=function(){return null!=c.activePlugin?!0:c._pluginsRegistered?!1:c.registerPlugins([createjs.WebAudioPlugin,createjs.HTMLAudioPlugin])?!0:!1},c.isReady=function(){return null!=c.activePlugin},c.getCapabilities=function(){return null==c.activePlugin?null:c.activePlugin._capabilities},c.getCapability=function(a){return null==c.activePlugin?null:c.activePlugin._capabilities[a]},c.initLoad=function(a){return c._registerSound(a)},c._registerSound=function(a){if(!c.initializeDefaultPlugins())return!1;var d;if(a.src instanceof Object?(d=c._parseSrc(a.src),d.src=a.path+d.src):d=c._parsePath(a.src),null==d)return!1;a.src=d.src,a.type="sound";var e=a.data,f=null;if(null!=e&&(isNaN(e.channels)?isNaN(e)||(f=parseInt(e)):f=parseInt(e.channels),e.audioSprite))for(var g,h=e.audioSprite.length;h--;)g=e.audioSprite[h],c._idHash[g.id]={src:a.src,startTime:parseInt(g.startTime),duration:parseInt(g.duration)},g.defaultPlayProps&&(c._defaultPlayPropsHash[g.id]=createjs.PlayPropsConfig.create(g.defaultPlayProps));null!=a.id&&(c._idHash[a.id]={src:a.src});var i=c.activePlugin.register(a);return b.create(a.src,f),null!=e&&isNaN(e)?a.data.channels=f||b.maxPerChannel():a.data=f||b.maxPerChannel(),i.type&&(a.type=i.type),a.defaultPlayProps&&(c._defaultPlayPropsHash[a.src]=createjs.PlayPropsConfig.create(a.defaultPlayProps)),i},c.registerSound=function(a,b,d,e,f){var g={src:a,id:b,data:d,defaultPlayProps:f};a instanceof Object&&a.src&&(e=b,g=a),g=createjs.LoadItem.create(g),g.path=e,null==e||g.src instanceof Object||(g.src=e+a);var h=c._registerSound(g);if(!h)return!1;if(c._preloadHash[g.src]||(c._preloadHash[g.src]=[]),c._preloadHash[g.src].push(g),1==c._preloadHash[g.src].length)h.on("complete",createjs.proxy(this._handleLoadComplete,this)),h.on("error",createjs.proxy(this._handleLoadError,this)),c.activePlugin.preload(h);else if(1==c._preloadHash[g.src][0])return!0;return g},c.registerSounds=function(a,b){var c=[];a.path&&(b?b+=a.path:b=a.path,a=a.manifest);for(var d=0,e=a.length;e>d;d++)c[d]=createjs.Sound.registerSound(a[d].src,a[d].id,a[d].data,b,a[d].defaultPlayProps);return c},c.removeSound=function(a,d){if(null==c.activePlugin)return!1;a instanceof Object&&a.src&&(a=a.src);var e;if(a instanceof Object?e=c._parseSrc(a):(a=c._getSrcById(a).src,e=c._parsePath(a)),null==e)return!1;a=e.src,null!=d&&(a=d+a);for(var f in c._idHash)c._idHash[f].src==a&&delete c._idHash[f];return b.removeSrc(a),delete c._preloadHash[a],c.activePlugin.removeSound(a),!0},c.removeSounds=function(a,b){var c=[];a.path&&(b?b+=a.path:b=a.path,a=a.manifest);for(var d=0,e=a.length;e>d;d++)c[d]=createjs.Sound.removeSound(a[d].src,b);return c},c.removeAllSounds=function(){c._idHash={},c._preloadHash={},b.removeAll(),c.activePlugin&&c.activePlugin.removeAllSounds()},c.loadComplete=function(a){if(!c.isReady())return!1;var b=c._parsePath(a);return a=b?c._getSrcById(b.src).src:c._getSrcById(a).src,void 0==c._preloadHash[a]?!1:1==c._preloadHash[a][0]},c._parsePath=function(a){"string"!=typeof a&&(a=a.toString());var b=a.match(c.FILE_PATTERN);if(null==b)return!1;for(var d=b[4],e=b[5],f=c.capabilities,g=0;!f[e];)if(e=c.alternateExtensions[g++],g>c.alternateExtensions.length)return null;a=a.replace("."+b[5],"."+e);var h={name:d,src:a,extension:e};return h},c._parseSrc=function(a){var b={name:void 0,src:void 0,extension:void 0},d=c.capabilities;for(var e in a)if(a.hasOwnProperty(e)&&d[e]){b.src=a[e],b.extension=e;break}if(!b.src)return!1;var f=b.src.lastIndexOf("/");return-1!=f?b.name=b.src.slice(f+1):b.name=b.src,b},c.play=function(a,b,d,e,f,g,h,i,j){var k;k=b instanceof Object||b instanceof createjs.PlayPropsConfig?createjs.PlayPropsConfig.create(b):createjs.PlayPropsConfig.create({interrupt:b,delay:d,offset:e,loop:f,volume:g,pan:h,startTime:i,duration:j});var l=c.createInstance(a,k.startTime,k.duration),m=c._playInstance(l,k);return m||l._playFailed(),l},c.createInstance=function(a,d,e){if(!c.initializeDefaultPlugins())return new createjs.DefaultSoundInstance(a,d,e);var f=c._defaultPlayPropsHash[a];a=c._getSrcById(a);var g=c._parsePath(a.src),h=null;return null!=g&&null!=g.src?(b.create(g.src),null==d&&(d=a.startTime),h=c.activePlugin.create(g.src,d,e||a.duration),f=f||c._defaultPlayPropsHash[g.src],f&&h.applyPlayProps(f)):h=new createjs.DefaultSoundInstance(a,d,e),h.uniqueId=c._lastID++,h},c.stop=function(){for(var a=this._instances,b=a.length;b--;)a[b].stop()},c.setVolume=function(a){if(null==Number(a))return!1;if(a=Math.max(0,Math.min(1,a)),c._masterVolume=a,!this.activePlugin||!this.activePlugin.setVolume||!this.activePlugin.setVolume(a))for(var b=this._instances,d=0,e=b.length;e>d;d++)b[d].setMasterVolume(a)},c.getVolume=function(){return this._masterVolume},c.setMute=function(a){if(null==a)return!1;if(this._masterMute=a,!this.activePlugin||!this.activePlugin.setMute||!this.activePlugin.setMute(a))for(var b=this._instances,c=0,d=b.length;d>c;c++)b[c].setMasterMute(a);return!0},c.getMute=function(){return this._masterMute},c.setDefaultPlayProps=function(a,b){a=c._getSrcById(a),c._defaultPlayPropsHash[c._parsePath(a.src).src]=createjs.PlayPropsConfig.create(b)},c.getDefaultPlayProps=function(a){return a=c._getSrcById(a),c._defaultPlayPropsHash[c._parsePath(a.src).src]},c._playInstance=function(a,b){var d=c._defaultPlayPropsHash[a.src]||{};if(null==b.interrupt&&(b.interrupt=d.interrupt||c.defaultInterruptBehavior),null==b.delay&&(b.delay=d.delay||0),null==b.offset&&(b.offset=a.getPosition()),null==b.loop&&(b.loop=a.loop),null==b.volume&&(b.volume=a.volume),null==b.pan&&(b.pan=a.pan),0==b.delay){var e=c._beginPlaying(a,b);if(!e)return!1}else{var f=setTimeout(function(){c._beginPlaying(a,b)},b.delay);a.delayTimeoutId=f}return this._instances.push(a),!0},c._beginPlaying=function(a,c){if(!b.add(a,c.interrupt))return!1;var d=a._beginPlaying(c);if(!d){var e=createjs.indexOf(this._instances,a);return e>-1&&this._instances.splice(e,1),!1}return!0},c._getSrcById=function(a){return c._idHash[a]||{src:a}},c._playFinished=function(a){b.remove(a);var c=createjs.indexOf(this._instances,a);c>-1&&this._instances.splice(c,1)},createjs.Sound=a,b.channels={},b.create=function(a,c){var d=b.get(a);return null==d?(b.channels[a]=new b(a,c),!0):!1},b.removeSrc=function(a){var c=b.get(a);return null==c?!1:(c._removeAll(),delete b.channels[a],!0)},b.removeAll=function(){for(var a in b.channels)b.channels[a]._removeAll();b.channels={}},b.add=function(a,c){var d=b.get(a.src);return null==d?!1:d._add(a,c)},b.remove=function(a){var c=b.get(a.src);return null==c?!1:(c._remove(a),!0)},b.maxPerChannel=function(){return d.maxDefault},b.get=function(a){return b.channels[a]};var d=b.prototype;d.constructor=b,d.src=null,d.max=null,d.maxDefault=100,d.length=0,d.init=function(a,b){this.src=a,this.max=b||this.maxDefault,-1==this.max&&(this.max=this.maxDefault),this._instances=[]},d._get=function(a){return this._instances[a]},d._add=function(a,b){return this._getSlot(b,a)?(this._instances.push(a),this.length++,!0):!1},d._remove=function(a){var b=createjs.indexOf(this._instances,a);return-1==b?!1:(this._instances.splice(b,1),this.length--,!0)},d._removeAll=function(){for(var a=this.length-1;a>=0;a--)this._instances[a].stop()},d._getSlot=function(b,c){var d,e;if(b!=a.INTERRUPT_NONE&&(e=this._get(0),null==e))return!0;for(var f=0,g=this.max;g>f;f++){if(d=this._get(f),null==d)return!0;if(d.playState==a.PLAY_FINISHED||d.playState==a.PLAY_INTERRUPTED||d.playState==a.PLAY_FAILED){e=d;break}b!=a.INTERRUPT_NONE&&(b==a.INTERRUPT_EARLY&&d.getPosition()<e.getPosition()||b==a.INTERRUPT_LATE&&d.getPosition()>e.getPosition())&&(e=d)}return null!=e?(e._interrupt(),this._remove(e),!0):!1},d.toString=function(){return"[Sound SoundChannel]"}}(),this.createjs=this.createjs||{},function(){"use strict";var a=function(a,b,c,d){this.EventDispatcher_constructor(),this.src=a,this.uniqueId=-1,this.playState=null,this.delayTimeoutId=null,this._volume=1,Object.defineProperty(this,"volume",{get:this.getVolume,set:this.setVolume}),this._pan=0,Object.defineProperty(this,"pan",{get:this.getPan,set:this.setPan}),this._startTime=Math.max(0,b||0),Object.defineProperty(this,"startTime",{get:this.getStartTime,set:this.setStartTime}),this._duration=Math.max(0,c||0),Object.defineProperty(this,"duration",{get:this.getDuration,set:this.setDuration}),this._playbackResource=null,Object.defineProperty(this,"playbackResource",{get:this.getPlaybackResource,set:this.setPlaybackResource}),d!==!1&&d!==!0&&this.setPlaybackResource(d),this._position=0,Object.defineProperty(this,"position",{get:this.getPosition,set:this.setPosition}),this._loop=0,Object.defineProperty(this,"loop",{get:this.getLoop,set:this.setLoop}),this._muted=!1,Object.defineProperty(this,"muted",{get:this.getMuted,set:this.setMuted}),this._paused=!1,Object.defineProperty(this,"paused",{get:this.getPaused,set:this.setPaused})},b=createjs.extend(a,createjs.EventDispatcher);b.play=function(a,b,c,d,e,f){var g;return g=a instanceof Object||a instanceof createjs.PlayPropsConfig?createjs.PlayPropsConfig.create(a):createjs.PlayPropsConfig.create({interrupt:a,delay:b,offset:c,loop:d,volume:e,pan:f}),this.playState==createjs.Sound.PLAY_SUCCEEDED?(this.applyPlayProps(g),void(this._paused&&this.setPaused(!1))):(this._cleanUp(),createjs.Sound._playInstance(this,g),this)},b.stop=function(){return this._position=0,this._paused=!1,this._handleStop(),this._cleanUp(),this.playState=createjs.Sound.PLAY_FINISHED,this},b.destroy=function(){this._cleanUp(),this.src=null,this.playbackResource=null,this.removeAllEventListeners()},b.applyPlayProps=function(a){return null!=a.offset&&this.setPosition(a.offset),null!=a.loop&&this.setLoop(a.loop),null!=a.volume&&this.setVolume(a.volume),null!=a.pan&&this.setPan(a.pan),null!=a.startTime&&(this.setStartTime(a.startTime),this.setDuration(a.duration)),this},b.toString=function(){return"[AbstractSoundInstance]"},b.getPaused=function(){return this._paused},b.setPaused=function(a){return a!==!0&&a!==!1||this._paused==a||1==a&&this.playState!=createjs.Sound.PLAY_SUCCEEDED?void 0:(this._paused=a,a?this._pause():this._resume(),clearTimeout(this.delayTimeoutId),this)},b.setVolume=function(a){return a==this._volume?this:(this._volume=Math.max(0,Math.min(1,a)),this._muted||this._updateVolume(),this)},b.getVolume=function(){return this._volume},b.setMuted=function(a){return a===!0||a===!1?(this._muted=a,this._updateVolume(),this):void 0},b.getMuted=function(){return this._muted},b.setPan=function(a){return a==this._pan?this:(this._pan=Math.max(-1,Math.min(1,a)),this._updatePan(),this)},b.getPan=function(){return this._pan},b.getPosition=function(){return this._paused||this.playState!=createjs.Sound.PLAY_SUCCEEDED||(this._position=this._calculateCurrentPosition()),this._position},b.setPosition=function(a){return this._position=Math.max(0,a),this.playState==createjs.Sound.PLAY_SUCCEEDED&&this._updatePosition(),this},b.getStartTime=function(){return this._startTime},b.setStartTime=function(a){return a==this._startTime?this:(this._startTime=Math.max(0,a||0),this._updateStartTime(),this)},b.getDuration=function(){return this._duration},b.setDuration=function(a){return a==this._duration?this:(this._duration=Math.max(0,a||0),this._updateDuration(),this)},b.setPlaybackResource=function(a){return this._playbackResource=a,0==this._duration&&this._setDurationFromSource(),this},b.getPlaybackResource=function(){return this._playbackResource},b.getLoop=function(){return this._loop},b.setLoop=function(a){null!=this._playbackResource&&(0!=this._loop&&0==a?this._removeLooping(a):0==this._loop&&0!=a&&this._addLooping(a)),this._loop=a},b._sendEvent=function(a){var b=new createjs.Event(a);this.dispatchEvent(b)},b._cleanUp=function(){clearTimeout(this.delayTimeoutId),this._handleCleanUp(),this._paused=!1,createjs.Sound._playFinished(this)},b._interrupt=function(){this._cleanUp(),this.playState=createjs.Sound.PLAY_INTERRUPTED,this._sendEvent("interrupted")},b._beginPlaying=function(a){return this.setPosition(a.offset),this.setLoop(a.loop),this.setVolume(a.volume),this.setPan(a.pan),null!=a.startTime&&(this.setStartTime(a.startTime),this.setDuration(a.duration)),null!=this._playbackResource&&this._position<this._duration?(this._paused=!1,this._handleSoundReady(),this.playState=createjs.Sound.PLAY_SUCCEEDED,this._sendEvent("succeeded"),!0):(this._playFailed(),!1)},b._playFailed=function(){this._cleanUp(),this.playState=createjs.Sound.PLAY_FAILED,this._sendEvent("failed")},b._handleSoundComplete=function(a){return this._position=0,0!=this._loop?(this._loop--,this._handleLoop(),void this._sendEvent("loop")):(this._cleanUp(),this.playState=createjs.Sound.PLAY_FINISHED,void this._sendEvent("complete"))},b._handleSoundReady=function(){},b._updateVolume=function(){},b._updatePan=function(){},b._updateStartTime=function(){},b._updateDuration=function(){},b._setDurationFromSource=function(){},b._calculateCurrentPosition=function(){},b._updatePosition=function(){},b._removeLooping=function(a){},b._addLooping=function(a){},b._pause=function(){},b._resume=function(){},b._handleStop=function(){},b._handleCleanUp=function(){},b._handleLoop=function(){},createjs.AbstractSoundInstance=createjs.promote(a,"EventDispatcher"),createjs.DefaultSoundInstance=createjs.AbstractSoundInstance}(),this.createjs=this.createjs||{},function(){"use strict";var a=function(){this._capabilities=null,this._loaders={},this._audioSources={},this._soundInstances={},this._volume=1,this._loaderClass,this._soundInstanceClass},b=a.prototype;a._capabilities=null,a.isSupported=function(){return!0},b.register=function(a){var b=this._loaders[a.src];return b&&!b.canceled?this._loaders[a.src]:(this._audioSources[a.src]=!0,this._soundInstances[a.src]=[],b=new this._loaderClass(a),b.on("complete",this._handlePreloadComplete,this),this._loaders[a.src]=b,b)},b.preload=function(a){a.on("error",this._handlePreloadError,this),a.load()},b.isPreloadStarted=function(a){return null!=this._audioSources[a]},b.isPreloadComplete=function(a){return!(null==this._audioSources[a]||1==this._audioSources[a])},b.removeSound=function(a){if(this._soundInstances[a]){for(var b=this._soundInstances[a].length;b--;){var c=this._soundInstances[a][b];c.destroy()}delete this._soundInstances[a],delete this._audioSources[a],this._loaders[a]&&this._loaders[a].destroy(),delete this._loaders[a]}},b.removeAllSounds=function(){for(var a in this._audioSources)this.removeSound(a)},b.create=function(a,b,c){this.isPreloadStarted(a)||this.preload(this.register(a));var d=new this._soundInstanceClass(a,b,c,this._audioSources[a]);return this._soundInstances[a].push(d),d},b.setVolume=function(a){return this._volume=a,this._updateVolume(),!0},b.getVolume=function(){return this._volume},b.setMute=function(a){return this._updateVolume(),!0},b.toString=function(){return"[AbstractPlugin]"},b._handlePreloadComplete=function(a){var b=a.target.getItem().src;this._audioSources[b]=a.result;for(var c=0,d=this._soundInstances[b].length;d>c;c++){var e=this._soundInstances[b][c];e.setPlaybackResource(this._audioSources[b]);
}},b._handlePreloadError=function(a){},b._updateVolume=function(){},createjs.AbstractPlugin=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(a){this.AbstractLoader_constructor(a,!0,createjs.AbstractLoader.SOUND)}var b=createjs.extend(a,createjs.AbstractLoader);a.context=null,b.toString=function(){return"[WebAudioLoader]"},b._createRequest=function(){this._request=new createjs.XHRRequest(this._item,!1),this._request.setResponseType("arraybuffer")},b._sendComplete=function(b){a.context.decodeAudioData(this._rawResult,createjs.proxy(this._handleAudioDecoded,this),createjs.proxy(this._sendError,this))},b._handleAudioDecoded=function(a){this._result=a,this.AbstractLoader__sendComplete()},createjs.WebAudioLoader=createjs.promote(a,"AbstractLoader")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b,d,e){this.AbstractSoundInstance_constructor(a,b,d,e),this.gainNode=c.context.createGain(),this.panNode=c.context.createPanner(),this.panNode.panningModel=c._panningModel,this.panNode.connect(this.gainNode),this._updatePan(),this.sourceNode=null,this._soundCompleteTimeout=null,this._sourceNodeNext=null,this._playbackStartTime=0,this._endedHandler=createjs.proxy(this._handleSoundComplete,this)}var b=createjs.extend(a,createjs.AbstractSoundInstance),c=a;c.context=null,c._scratchBuffer=null,c.destinationNode=null,c._panningModel="equalpower",b.destroy=function(){this.AbstractSoundInstance_destroy(),this.panNode.disconnect(0),this.panNode=null,this.gainNode.disconnect(0),this.gainNode=null},b.toString=function(){return"[WebAudioSoundInstance]"},b._updatePan=function(){this.panNode.setPosition(this._pan,0,-.5)},b._removeLooping=function(a){this._sourceNodeNext=this._cleanUpAudioNode(this._sourceNodeNext)},b._addLooping=function(a){this.playState==createjs.Sound.PLAY_SUCCEEDED&&(this._sourceNodeNext=this._createAndPlayAudioNode(this._playbackStartTime,0))},b._setDurationFromSource=function(){this._duration=1e3*this.playbackResource.duration},b._handleCleanUp=function(){this.sourceNode&&this.playState==createjs.Sound.PLAY_SUCCEEDED&&(this.sourceNode=this._cleanUpAudioNode(this.sourceNode),this._sourceNodeNext=this._cleanUpAudioNode(this._sourceNodeNext)),0!=this.gainNode.numberOfOutputs&&this.gainNode.disconnect(0),clearTimeout(this._soundCompleteTimeout),this._playbackStartTime=0},b._cleanUpAudioNode=function(a){if(a){a.stop(0),a.disconnect(0);try{a.buffer=c._scratchBuffer}catch(b){}a=null}return a},b._handleSoundReady=function(a){this.gainNode.connect(c.destinationNode);var b=.001*this._duration,d=.001*this._position;d>b&&(d=b),this.sourceNode=this._createAndPlayAudioNode(c.context.currentTime-b,d),this._playbackStartTime=this.sourceNode.startTime-d,this._soundCompleteTimeout=setTimeout(this._endedHandler,1e3*(b-d)),0!=this._loop&&(this._sourceNodeNext=this._createAndPlayAudioNode(this._playbackStartTime,0))},b._createAndPlayAudioNode=function(a,b){var d=c.context.createBufferSource();d.buffer=this.playbackResource,d.connect(this.panNode);var e=.001*this._duration;return d.startTime=a+e,d.start(d.startTime,b+.001*this._startTime,e-b),d},b._pause=function(){this._position=1e3*(c.context.currentTime-this._playbackStartTime),this.sourceNode=this._cleanUpAudioNode(this.sourceNode),this._sourceNodeNext=this._cleanUpAudioNode(this._sourceNodeNext),0!=this.gainNode.numberOfOutputs&&this.gainNode.disconnect(0),clearTimeout(this._soundCompleteTimeout)},b._resume=function(){this._handleSoundReady()},b._updateVolume=function(){var a=this._muted?0:this._volume;a!=this.gainNode.gain.value&&(this.gainNode.gain.value=a)},b._calculateCurrentPosition=function(){return 1e3*(c.context.currentTime-this._playbackStartTime)},b._updatePosition=function(){this.sourceNode=this._cleanUpAudioNode(this.sourceNode),this._sourceNodeNext=this._cleanUpAudioNode(this._sourceNodeNext),clearTimeout(this._soundCompleteTimeout),this._paused||this._handleSoundReady()},b._handleLoop=function(){this._cleanUpAudioNode(this.sourceNode),this.sourceNode=this._sourceNodeNext,this._playbackStartTime=this.sourceNode.startTime,this._sourceNodeNext=this._createAndPlayAudioNode(this._playbackStartTime,0),this._soundCompleteTimeout=setTimeout(this._endedHandler,this._duration)},b._updateDuration=function(){this.playState==createjs.Sound.PLAY_SUCCEEDED&&(this._pause(),this._resume())},createjs.WebAudioSoundInstance=createjs.promote(a,"AbstractSoundInstance")}(),this.createjs=this.createjs||{},function(){"use strict";function a(){this.AbstractPlugin_constructor(),this._panningModel=c._panningModel,this.context=c.context,this.dynamicsCompressorNode=this.context.createDynamicsCompressor(),this.dynamicsCompressorNode.connect(this.context.destination),this.gainNode=this.context.createGain(),this.gainNode.connect(this.dynamicsCompressorNode),createjs.WebAudioSoundInstance.destinationNode=this.gainNode,this._capabilities=c._capabilities,this._loaderClass=createjs.WebAudioLoader,this._soundInstanceClass=createjs.WebAudioSoundInstance,this._addPropsToClasses()}var b=createjs.extend(a,createjs.AbstractPlugin),c=a;c._capabilities=null,c._panningModel="equalpower",c.context=null,c._scratchBuffer=null,c._unlocked=!1,c.isSupported=function(){var a=createjs.BrowserDetect.isIOS||createjs.BrowserDetect.isAndroid||createjs.BrowserDetect.isBlackberry;return"file:"!=location.protocol||a||this._isFileXHRSupported()?(c._generateCapabilities(),null==c.context?!1:!0):!1},c.playEmptySound=function(){if(null!=c.context){var a=c.context.createBufferSource();a.buffer=c._scratchBuffer,a.connect(c.context.destination),a.start(0,0,0)}},c._isFileXHRSupported=function(){var a=!0,b=new XMLHttpRequest;try{b.open("GET","WebAudioPluginTest.fail",!1)}catch(c){return a=!1}b.onerror=function(){a=!1},b.onload=function(){a=404==this.status||200==this.status||0==this.status&&""!=this.response};try{b.send()}catch(c){a=!1}return a},c._generateCapabilities=function(){if(null==c._capabilities){var a=document.createElement("audio");if(null==a.canPlayType)return null;if(null==c.context)if(window.AudioContext)c.context=new AudioContext;else{if(!window.webkitAudioContext)return null;c.context=new webkitAudioContext}null==c._scratchBuffer&&(c._scratchBuffer=c.context.createBuffer(1,1,22050)),c._compatibilitySetUp(),"ontouchstart"in window&&"running"!=c.context.state&&(c._unlock(),document.addEventListener("mousedown",c._unlock,!0),document.addEventListener("touchend",c._unlock,!0)),c._capabilities={panning:!0,volume:!0,tracks:-1};for(var b=createjs.Sound.SUPPORTED_EXTENSIONS,d=createjs.Sound.EXTENSION_MAP,e=0,f=b.length;f>e;e++){var g=b[e],h=d[g]||g;c._capabilities[g]="no"!=a.canPlayType("audio/"+g)&&""!=a.canPlayType("audio/"+g)||"no"!=a.canPlayType("audio/"+h)&&""!=a.canPlayType("audio/"+h)}c.context.destination.numberOfChannels<2&&(c._capabilities.panning=!1)}},c._compatibilitySetUp=function(){if(c._panningModel="equalpower",!c.context.createGain){c.context.createGain=c.context.createGainNode;var a=c.context.createBufferSource();a.__proto__.start=a.__proto__.noteGrainOn,a.__proto__.stop=a.__proto__.noteOff,c._panningModel=0}},c._unlock=function(){c._unlocked||(c.playEmptySound(),"running"==c.context.state&&(document.removeEventListener("mousedown",c._unlock,!0),document.removeEventListener("touchend",c._unlock,!0),c._unlocked=!0))},b.toString=function(){return"[WebAudioPlugin]"},b._addPropsToClasses=function(){var a=this._soundInstanceClass;a.context=this.context,a._scratchBuffer=c._scratchBuffer,a.destinationNode=this.gainNode,a._panningModel=this._panningModel,this._loaderClass.context=this.context},b._updateVolume=function(){var a=createjs.Sound._masterMute?0:this._volume;a!=this.gainNode.gain.value&&(this.gainNode.gain.value=a)},createjs.WebAudioPlugin=createjs.promote(a,"AbstractPlugin")}(),this.createjs=this.createjs||{},function(){"use strict";function a(){throw"HTMLAudioTagPool cannot be instantiated"}function b(a){this._tags=[]}var c=a;c._tags={},c._tagPool=new b,c._tagUsed={},c.get=function(a){var b=c._tags[a];return null==b?(b=c._tags[a]=c._tagPool.get(),b.src=a):c._tagUsed[a]?(b=c._tagPool.get(),b.src=a):c._tagUsed[a]=!0,b},c.set=function(a,b){b==c._tags[a]?c._tagUsed[a]=!1:c._tagPool.set(b)},c.remove=function(a){var b=c._tags[a];return null==b?!1:(c._tagPool.set(b),delete c._tags[a],delete c._tagUsed[a],!0)},c.getDuration=function(a){var b=c._tags[a];return null!=b&&b.duration?1e3*b.duration:0},createjs.HTMLAudioTagPool=a;var d=b.prototype;d.constructor=b,d.get=function(){var a;return a=0==this._tags.length?this._createTag():this._tags.pop(),null==a.parentNode&&document.body.appendChild(a),a},d.set=function(a){var b=createjs.indexOf(this._tags,a);-1==b&&(this._tags.src=null,this._tags.push(a))},d.toString=function(){return"[TagPool]"},d._createTag=function(){var a=document.createElement("audio");return a.autoplay=!1,a.preload="none",a}}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b,c,d){this.AbstractSoundInstance_constructor(a,b,c,d),this._audioSpriteStopTime=null,this._delayTimeoutId=null,this._endedHandler=createjs.proxy(this._handleSoundComplete,this),this._readyHandler=createjs.proxy(this._handleTagReady,this),this._stalledHandler=createjs.proxy(this._playFailed,this),this._audioSpriteEndHandler=createjs.proxy(this._handleAudioSpriteLoop,this),this._loopHandler=createjs.proxy(this._handleSoundComplete,this),c?this._audioSpriteStopTime=.001*(b+c):this._duration=createjs.HTMLAudioTagPool.getDuration(this.src)}var b=createjs.extend(a,createjs.AbstractSoundInstance);b.setMasterVolume=function(a){this._updateVolume()},b.setMasterMute=function(a){this._updateVolume()},b.toString=function(){return"[HTMLAudioSoundInstance]"},b._removeLooping=function(){null!=this._playbackResource&&(this._playbackResource.loop=!1,this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED,this._loopHandler,!1))},b._addLooping=function(){null==this._playbackResource||this._audioSpriteStopTime||(this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED,this._loopHandler,!1),this._playbackResource.loop=!0)},b._handleCleanUp=function(){var a=this._playbackResource;if(null!=a){a.pause(),a.loop=!1,a.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_ENDED,this._endedHandler,!1),a.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_READY,this._readyHandler,!1),a.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_STALLED,this._stalledHandler,!1),a.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED,this._loopHandler,!1),a.removeEventListener(createjs.HTMLAudioPlugin._TIME_UPDATE,this._audioSpriteEndHandler,!1);try{a.currentTime=this._startTime}catch(b){}createjs.HTMLAudioTagPool.set(this.src,a),this._playbackResource=null}},b._beginPlaying=function(a){return this._playbackResource=createjs.HTMLAudioTagPool.get(this.src),this.AbstractSoundInstance__beginPlaying(a)},b._handleSoundReady=function(a){if(4!==this._playbackResource.readyState){var b=this._playbackResource;return b.addEventListener(createjs.HTMLAudioPlugin._AUDIO_READY,this._readyHandler,!1),b.addEventListener(createjs.HTMLAudioPlugin._AUDIO_STALLED,this._stalledHandler,!1),b.preload="auto",void b.load()}this._updateVolume(),this._playbackResource.currentTime=.001*(this._startTime+this._position),this._audioSpriteStopTime?this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._TIME_UPDATE,this._audioSpriteEndHandler,!1):(this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_ENDED,this._endedHandler,!1),0!=this._loop&&(this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED,this._loopHandler,!1),this._playbackResource.loop=!0)),this._playbackResource.play()},b._handleTagReady=function(a){this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_READY,this._readyHandler,!1),this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_STALLED,this._stalledHandler,!1),this._handleSoundReady()},b._pause=function(){this._playbackResource.pause()},b._resume=function(){this._playbackResource.play()},b._updateVolume=function(){if(null!=this._playbackResource){var a=this._muted||createjs.Sound._masterMute?0:this._volume*createjs.Sound._masterVolume;a!=this._playbackResource.volume&&(this._playbackResource.volume=a)}},b._calculateCurrentPosition=function(){return 1e3*this._playbackResource.currentTime-this._startTime},b._updatePosition=function(){this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED,this._loopHandler,!1),this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED,this._handleSetPositionSeek,!1);try{this._playbackResource.currentTime=.001*(this._position+this._startTime)}catch(a){this._handleSetPositionSeek(null)}},b._handleSetPositionSeek=function(a){null!=this._playbackResource&&(this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED,this._handleSetPositionSeek,!1),this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED,this._loopHandler,!1))},b._handleAudioSpriteLoop=function(a){this._playbackResource.currentTime<=this._audioSpriteStopTime||(this._playbackResource.pause(),0==this._loop?this._handleSoundComplete(null):(this._position=0,this._loop--,this._playbackResource.currentTime=.001*this._startTime,this._paused||this._playbackResource.play(),this._sendEvent("loop")))},b._handleLoop=function(a){0==this._loop&&(this._playbackResource.loop=!1,this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED,this._loopHandler,!1))},b._updateStartTime=function(){this._audioSpriteStopTime=.001*(this._startTime+this._duration),this.playState==createjs.Sound.PLAY_SUCCEEDED&&(this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_ENDED,this._endedHandler,!1),this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._TIME_UPDATE,this._audioSpriteEndHandler,!1))},b._updateDuration=function(){this._audioSpriteStopTime=.001*(this._startTime+this._duration),this.playState==createjs.Sound.PLAY_SUCCEEDED&&(this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_ENDED,this._endedHandler,!1),this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._TIME_UPDATE,this._audioSpriteEndHandler,!1))},b._setDurationFromSource=function(){this._duration=createjs.HTMLAudioTagPool.getDuration(this.src),this._playbackResource=null},createjs.HTMLAudioSoundInstance=createjs.promote(a,"AbstractSoundInstance")}(),this.createjs=this.createjs||{},function(){"use strict";function a(){this.AbstractPlugin_constructor(),this.defaultNumChannels=2,this._capabilities=c._capabilities,this._loaderClass=createjs.SoundLoader,this._soundInstanceClass=createjs.HTMLAudioSoundInstance}var b=createjs.extend(a,createjs.AbstractPlugin),c=a;c.MAX_INSTANCES=30,c._AUDIO_READY="canplaythrough",c._AUDIO_ENDED="ended",c._AUDIO_SEEKED="seeked",c._AUDIO_STALLED="stalled",c._TIME_UPDATE="timeupdate",c._capabilities=null,c.isSupported=function(){return c._generateCapabilities(),null!=c._capabilities},c._generateCapabilities=function(){if(null==c._capabilities){var a=document.createElement("audio");if(null==a.canPlayType)return null;c._capabilities={panning:!1,volume:!0,tracks:-1};for(var b=createjs.Sound.SUPPORTED_EXTENSIONS,d=createjs.Sound.EXTENSION_MAP,e=0,f=b.length;f>e;e++){var g=b[e],h=d[g]||g;c._capabilities[g]="no"!=a.canPlayType("audio/"+g)&&""!=a.canPlayType("audio/"+g)||"no"!=a.canPlayType("audio/"+h)&&""!=a.canPlayType("audio/"+h)}}},b.register=function(a){var b=createjs.HTMLAudioTagPool.get(a.src),c=this.AbstractPlugin_register(a);return c.setTag(b),c},b.removeSound=function(a){this.AbstractPlugin_removeSound(a),createjs.HTMLAudioTagPool.remove(a)},b.create=function(a,b,c){var d=this.AbstractPlugin_create(a,b,c);return d.setPlaybackResource(null),d},b.toString=function(){return"[HTMLAudioPlugin]"},b.setVolume=b.getVolume=b.setMute=null,createjs.HTMLAudioPlugin=createjs.promote(a,"AbstractPlugin")}(),this.createjs=this.createjs||{},function(){"use strict";function a(b,c,d){this.ignoreGlobalPause=!1,this.loop=!1,this.duration=0,this.pluginData=d||{},this.target=b,this.position=null,this.passive=!1,this._paused=!1,this._curQueueProps={},this._initQueueProps={},this._steps=[],this._actions=[],this._prevPosition=0,this._stepPosition=0,this._prevPos=-1,this._target=b,this._useTicks=!1,this._inited=!1,this._registered=!1,c&&(this._useTicks=c.useTicks,this.ignoreGlobalPause=c.ignoreGlobalPause,this.loop=c.loop,c.onChange&&this.addEventListener("change",c.onChange),c.override&&a.removeTweens(b)),c&&c.paused?this._paused=!0:createjs.Tween._register(this,!0),c&&null!=c.position&&this.setPosition(c.position,a.NONE)}var b=createjs.extend(a,createjs.EventDispatcher);a.NONE=0,a.LOOP=1,a.REVERSE=2,a.IGNORE={},a._tweens=[],a._plugins={},a.get=function(b,c,d,e){return e&&a.removeTweens(b),new a(b,c,d)},a.tick=function(b,c){for(var d=a._tweens.slice(),e=d.length-1;e>=0;e--){var f=d[e];c&&!f.ignoreGlobalPause||f._paused||f.tick(f._useTicks?1:b)}},a.handleEvent=function(a){"tick"==a.type&&this.tick(a.delta,a.paused)},a.removeTweens=function(b){if(b.tweenjs_count){for(var c=a._tweens,d=c.length-1;d>=0;d--){var e=c[d];e._target==b&&(e._paused=!0,c.splice(d,1))}b.tweenjs_count=0}},a.removeAllTweens=function(){for(var b=a._tweens,c=0,d=b.length;d>c;c++){var e=b[c];e._paused=!0,e.target&&(e.target.tweenjs_count=0)}b.length=0},a.hasActiveTweens=function(b){return b?null!=b.tweenjs_count&&!!b.tweenjs_count:a._tweens&&!!a._tweens.length},a.installPlugin=function(b,c){var d=b.priority;null==d&&(b.priority=d=0);for(var e=0,f=c.length,g=a._plugins;f>e;e++){var h=c[e];if(g[h]){for(var i=g[h],j=0,k=i.length;k>j&&!(d<i[j].priority);j++);g[h].splice(j,0,b)}else g[h]=[b]}},a._register=function(b,c){var d=b._target,e=a._tweens;if(c&&!b._registered)d&&(d.tweenjs_count=d.tweenjs_count?d.tweenjs_count+1:1),e.push(b),!a._inited&&createjs.Ticker&&(createjs.Ticker.addEventListener("tick",a),a._inited=!0);else if(!c&&b._registered){d&&d.tweenjs_count--;for(var f=e.length;f--;)if(e[f]==b){e.splice(f,1);break}}b._registered=c},b.wait=function(a,b){if(null==a||0>=a)return this;var c=this._cloneProps(this._curQueueProps);return this._addStep({d:a,p0:c,e:this._linearEase,p1:c,v:b})},b.to=function(a,b,c){return(isNaN(b)||0>b)&&(b=0),this._addStep({d:b||0,p0:this._cloneProps(this._curQueueProps),e:c,p1:this._cloneProps(this._appendQueueProps(a))})},b.call=function(a,b,c){return this._addAction({f:a,p:b?b:[this],o:c?c:this._target})},b.set=function(a,b){return this._addAction({f:this._set,o:this,p:[a,b?b:this._target]})},b.play=function(a){return a||(a=this),this.call(a.setPaused,[!1],a)},b.pause=function(a){return a||(a=this),this.call(a.setPaused,[!0],a)},b.setPosition=function(a,b){0>a&&(a=0),null==b&&(b=1);var c=a,d=!1;if(c>=this.duration&&(this.loop?c%=this.duration:(c=this.duration,d=!0)),c==this._prevPos)return d;var e=this._prevPos;if(this.position=this._prevPos=c,this._prevPosition=a,this._target)if(d)this._updateTargetProps(null,1);else if(this._steps.length>0){for(var f=0,g=this._steps.length;g>f&&!(this._steps[f].t>c);f++);var h=this._steps[f-1];this._updateTargetProps(h,(this._stepPosition=c-h.t)/h.d)}return 0!=b&&this._actions.length>0&&(this._useTicks?this._runActions(c,c):1==b&&e>c?(e!=this.duration&&this._runActions(e,this.duration),this._runActions(0,c,!0)):this._runActions(e,c)),d&&this.setPaused(!0),this.dispatchEvent("change"),d},b.tick=function(a){this._paused||this.setPosition(this._prevPosition+a)},b.setPaused=function(b){return this._paused===!!b?this:(this._paused=!!b,a._register(this,!b),this)},b.w=b.wait,b.t=b.to,b.c=b.call,b.s=b.set,b.toString=function(){return"[Tween]"},b.clone=function(){throw"Tween can not be cloned."},b._updateTargetProps=function(b,c){var d,e,f,g,h,i;if(b||1!=c){if(this.passive=!!b.v,this.passive)return;b.e&&(c=b.e(c,0,1,1)),d=b.p0,e=b.p1}else this.passive=!1,d=e=this._curQueueProps;for(var j in this._initQueueProps){null==(g=d[j])&&(d[j]=g=this._initQueueProps[j]),null==(h=e[j])&&(e[j]=h=g),f=g==h||0==c||1==c||"number"!=typeof g?1==c?h:g:g+(h-g)*c;var k=!1;if(i=a._plugins[j])for(var l=0,m=i.length;m>l;l++){var n=i[l].tween(this,j,f,d,e,c,!!b&&d==e,!b);n==a.IGNORE?k=!0:f=n}k||(this._target[j]=f)}},b._runActions=function(a,b,c){var d=a,e=b,f=-1,g=this._actions.length,h=1;for(a>b&&(d=b,e=a,f=g,g=h=-1);(f+=h)!=g;){var i=this._actions[f],j=i.t;(j==e||j>d&&e>j||c&&j==a)&&i.f.apply(i.o,i.p)}},b._appendQueueProps=function(b){var c,d,e,f,g;for(var h in b)if(void 0===this._initQueueProps[h]){if(d=this._target[h],c=a._plugins[h])for(e=0,f=c.length;f>e;e++)d=c[e].init(this,h,d);this._initQueueProps[h]=this._curQueueProps[h]=void 0===d?null:d}else d=this._curQueueProps[h];for(var h in b){if(d=this._curQueueProps[h],c=a._plugins[h])for(g=g||{},e=0,f=c.length;f>e;e++)c[e].step&&c[e].step(this,h,d,b[h],g);this._curQueueProps[h]=b[h]}return g&&this._appendQueueProps(g),this._curQueueProps},b._cloneProps=function(a){var b={};for(var c in a)b[c]=a[c];return b},b._addStep=function(a){return a.d>0&&(this._steps.push(a),a.t=this.duration,this.duration+=a.d),this},b._addAction=function(a){return a.t=this.duration,this._actions.push(a),this},b._set=function(a,b){for(var c in a)b[c]=a[c]},createjs.Tween=createjs.promote(a,"EventDispatcher")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b,c){this.EventDispatcher_constructor(),this.ignoreGlobalPause=!1,this.duration=0,this.loop=!1,this.position=null,this._paused=!1,this._tweens=[],this._labels=null,this._labelList=null,this._prevPosition=0,this._prevPos=-1,this._useTicks=!1,this._registered=!1,c&&(this._useTicks=c.useTicks,this.loop=c.loop,this.ignoreGlobalPause=c.ignoreGlobalPause,c.onChange&&this.addEventListener("change",c.onChange)),a&&this.addTween.apply(this,a),this.setLabels(b),c&&c.paused?this._paused=!0:createjs.Tween._register(this,!0),c&&null!=c.position&&this.setPosition(c.position,createjs.Tween.NONE)}var b=createjs.extend(a,createjs.EventDispatcher);b.addTween=function(a){var b=arguments.length;if(b>1){for(var c=0;b>c;c++)this.addTween(arguments[c]);return arguments[0]}return 0==b?null:(this.removeTween(a),this._tweens.push(a),a.setPaused(!0),a._paused=!1,a._useTicks=this._useTicks,a.duration>this.duration&&(this.duration=a.duration),this._prevPos>=0&&a.setPosition(this._prevPos,createjs.Tween.NONE),a)},b.removeTween=function(a){var b=arguments.length;if(b>1){for(var c=!0,d=0;b>d;d++)c=c&&this.removeTween(arguments[d]);return c}if(0==b)return!1;for(var e=this._tweens,d=e.length;d--;)if(e[d]==a)return e.splice(d,1),a.duration>=this.duration&&this.updateDuration(),!0;return!1},b.addLabel=function(a,b){this._labels[a]=b;var c=this._labelList;if(c){for(var d=0,e=c.length;e>d&&!(b<c[d].position);d++);c.splice(d,0,{label:a,position:b})}},b.setLabels=function(a){this._labels=a?a:{}},b.getLabels=function(){var a=this._labelList;if(!a){a=this._labelList=[];var b=this._labels;for(var c in b)a.push({label:c,position:b[c]});a.sort(function(a,b){return a.position-b.position})}return a},b.getCurrentLabel=function(){var a=this.getLabels(),b=this.position,c=a.length;if(c){for(var d=0;c>d&&!(b<a[d].position);d++);return 0==d?null:a[d-1].label}return null},b.gotoAndPlay=function(a){this.setPaused(!1),this._goto(a)},b.gotoAndStop=function(a){this.setPaused(!0),this._goto(a)},b.setPosition=function(a,b){var c=this._calcPosition(a),d=!this.loop&&a>=this.duration;if(c==this._prevPos)return d;this._prevPosition=a,this.position=this._prevPos=c;for(var e=0,f=this._tweens.length;f>e;e++)if(this._tweens[e].setPosition(c,b),c!=this._prevPos)return!1;return d&&this.setPaused(!0),this.dispatchEvent("change"),d},b.setPaused=function(a){this._paused=!!a,createjs.Tween._register(this,!a)},b.updateDuration=function(){this.duration=0;for(var a=0,b=this._tweens.length;b>a;a++){var c=this._tweens[a];c.duration>this.duration&&(this.duration=c.duration)}},b.tick=function(a){this.setPosition(this._prevPosition+a)},b.resolve=function(a){var b=Number(a);return isNaN(b)&&(b=this._labels[a]),b},b.toString=function(){return"[Timeline]"},b.clone=function(){throw"Timeline can not be cloned."},b._goto=function(a){var b=this.resolve(a);null!=b&&this.setPosition(b)},b._calcPosition=function(a){return 0>a?0:a<this.duration?a:this.loop?a%this.duration:this.duration},createjs.Timeline=createjs.promote(a,"EventDispatcher")}(),this.createjs=this.createjs||{},function(){"use strict";function a(){throw"Ease cannot be instantiated."}a.linear=function(a){return a},a.none=a.linear,a.get=function(a){return-1>a&&(a=-1),a>1&&(a=1),function(b){return 0==a?b:0>a?b*(b*-a+1+a):b*((2-b)*a+(1-a))}},a.getPowIn=function(a){return function(b){return Math.pow(b,a)}},a.getPowOut=function(a){return function(b){return 1-Math.pow(1-b,a)}},a.getPowInOut=function(a){return function(b){return(b*=2)<1?.5*Math.pow(b,a):1-.5*Math.abs(Math.pow(2-b,a))}},a.quadIn=a.getPowIn(2),a.quadOut=a.getPowOut(2),a.quadInOut=a.getPowInOut(2),a.cubicIn=a.getPowIn(3),a.cubicOut=a.getPowOut(3),a.cubicInOut=a.getPowInOut(3),a.quartIn=a.getPowIn(4),a.quartOut=a.getPowOut(4),a.quartInOut=a.getPowInOut(4),a.quintIn=a.getPowIn(5),a.quintOut=a.getPowOut(5),a.quintInOut=a.getPowInOut(5),a.sineIn=function(a){return 1-Math.cos(a*Math.PI/2)},a.sineOut=function(a){return Math.sin(a*Math.PI/2)},a.sineInOut=function(a){return-.5*(Math.cos(Math.PI*a)-1)},a.getBackIn=function(a){return function(b){return b*b*((a+1)*b-a)}},a.backIn=a.getBackIn(1.7),a.getBackOut=function(a){return function(b){return--b*b*((a+1)*b+a)+1}},a.backOut=a.getBackOut(1.7),a.getBackInOut=function(a){return a*=1.525,function(b){return(b*=2)<1?.5*(b*b*((a+1)*b-a)):.5*((b-=2)*b*((a+1)*b+a)+2)}},a.backInOut=a.getBackInOut(1.7),a.circIn=function(a){return-(Math.sqrt(1-a*a)-1)},a.circOut=function(a){return Math.sqrt(1- --a*a)},a.circInOut=function(a){return(a*=2)<1?-.5*(Math.sqrt(1-a*a)-1):.5*(Math.sqrt(1-(a-=2)*a)+1)},a.bounceIn=function(b){return 1-a.bounceOut(1-b)},a.bounceOut=function(a){return 1/2.75>a?7.5625*a*a:2/2.75>a?7.5625*(a-=1.5/2.75)*a+.75:2.5/2.75>a?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375},a.bounceInOut=function(b){return.5>b?.5*a.bounceIn(2*b):.5*a.bounceOut(2*b-1)+.5},a.getElasticIn=function(a,b){var c=2*Math.PI;return function(d){if(0==d||1==d)return d;var e=b/c*Math.asin(1/a);return-(a*Math.pow(2,10*(d-=1))*Math.sin((d-e)*c/b))}},a.elasticIn=a.getElasticIn(1,.3),a.getElasticOut=function(a,b){var c=2*Math.PI;return function(d){if(0==d||1==d)return d;var e=b/c*Math.asin(1/a);return a*Math.pow(2,-10*d)*Math.sin((d-e)*c/b)+1}},a.elasticOut=a.getElasticOut(1,.3),a.getElasticInOut=function(a,b){var c=2*Math.PI;return function(d){var e=b/c*Math.asin(1/a);return(d*=2)<1?-.5*(a*Math.pow(2,10*(d-=1))*Math.sin((d-e)*c/b)):a*Math.pow(2,-10*(d-=1))*Math.sin((d-e)*c/b)*.5+1}},a.elasticInOut=a.getElasticInOut(1,.3*1.5),createjs.Ease=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(){throw"MotionGuidePlugin cannot be instantiated."}a.priority=0,a._rotOffS,a._rotOffE,a._rotNormS,a._rotNormE,a.install=function(){return createjs.Tween.installPlugin(a,["guide","x","y","rotation"]),createjs.Tween.IGNORE},a.init=function(a,b,c){var d=a.target;return d.hasOwnProperty("x")||(d.x=0),d.hasOwnProperty("y")||(d.y=0),d.hasOwnProperty("rotation")||(d.rotation=0),"rotation"==b&&(a.__needsRot=!0),"guide"==b?null:c},a.step=function(b,c,d,e,f){if("rotation"==c&&(b.__rotGlobalS=d,b.__rotGlobalE=e,a.testRotData(b,f)),"guide"!=c)return e;var g,h=e;h.hasOwnProperty("path")||(h.path=[]);var i=h.path;if(h.hasOwnProperty("end")||(h.end=1),h.hasOwnProperty("start")||(h.start=d&&d.hasOwnProperty("end")&&d.path===i?d.end:0),h.hasOwnProperty("_segments")&&h._length)return e;var j=i.length,k=10;if(!(j>=6&&(j-2)%4==0))throw"invalid 'path' data, please see documentation for valid paths";h._segments=[],h._length=0;for(var l=2;j>l;l+=4){for(var m,n,o=i[l-2],p=i[l-1],q=i[l+0],r=i[l+1],s=i[l+2],t=i[l+3],u=o,v=p,w=0,x=[],y=1;k>=y;y++){var z=y/k,A=1-z;m=A*A*o+2*A*z*q+z*z*s,n=A*A*p+2*A*z*r+z*z*t,w+=x[x.push(Math.sqrt((g=m-u)*g+(g=n-v)*g))-1],u=m,v=n}h._segments.push(w),h._segments.push(x),h._length+=w}g=h.orient,h.orient=!0;var B={};return a.calc(h,h.start,B),b.__rotPathS=Number(B.rotation.toFixed(5)),a.calc(h,h.end,B),b.__rotPathE=Number(B.rotation.toFixed(5)),h.orient=!1,a.calc(h,h.end,f),h.orient=g,h.orient?(b.__guideData=h,a.testRotData(b,f),e):e},a.testRotData=function(a,b){if(void 0===a.__rotGlobalS||void 0===a.__rotGlobalE){if(a.__needsRot)return;void 0!==a._curQueueProps.rotation?a.__rotGlobalS=a.__rotGlobalE=a._curQueueProps.rotation:a.__rotGlobalS=a.__rotGlobalE=b.rotation=a.target.rotation||0}if(void 0!==a.__guideData){var c=a.__guideData,d=a.__rotGlobalE-a.__rotGlobalS,e=a.__rotPathE-a.__rotPathS,f=d-e;if("auto"==c.orient)f>180?f-=360:-180>f&&(f+=360);else if("cw"==c.orient){for(;0>f;)f+=360;0==f&&d>0&&180!=d&&(f+=360)}else if("ccw"==c.orient){for(f=d-(e>180?360-e:e);f>0;)f-=360;0==f&&0>d&&-180!=d&&(f-=360)}c.rotDelta=f,c.rotOffS=a.__rotGlobalS-a.__rotPathS,a.__rotGlobalS=a.__rotGlobalE=a.__guideData=a.__needsRot=void 0}},a.tween=function(b,c,d,e,f,g,h,i){var j=f.guide;if(void 0==j||j===e.guide)return d;if(j.lastRatio!=g){var k=(j.end-j.start)*(h?j.end:g)+j.start;switch(a.calc(j,k,b.target),j.orient){case"cw":case"ccw":case"auto":b.target.rotation+=j.rotOffS+j.rotDelta*g;break;case"fixed":default:b.target.rotation+=j.rotOffS}j.lastRatio=g}return"rotation"!=c||j.orient&&"false"!=j.orient?b.target[c]:d},a.calc=function(a,b,c){if(void 0==a._segments)throw"Missing critical pre-calculated information, please file a bug";void 0==c&&(c={x:0,y:0,rotation:0});for(var d=a._segments,e=a.path,f=a._length*b,g=d.length-2,h=0;f>d[h]&&g>h;)f-=d[h],h+=2;var i=d[h+1],j=0;for(g=i.length-1;f>i[j]&&g>j;)f-=i[j],j++;var k=j/++g+f/(g*i[j]);h=2*h+2;var l=1-k;return c.x=l*l*e[h-2]+2*l*k*e[h+0]+k*k*e[h+2],c.y=l*l*e[h-1]+2*l*k*e[h+1]+k*k*e[h+3],a.orient&&(c.rotation=57.2957795*Math.atan2((e[h+1]-e[h-1])*l+(e[h+3]-e[h+1])*k,(e[h+0]-e[h-2])*l+(e[h+2]-e[h+0])*k)),c},createjs.MotionGuidePlugin=a}(),this.createjs=this.createjs||{},function(){"use strict";var a=createjs.TweenJS=createjs.TweenJS||{};a.version="0.6.2",a.buildDate="Thu, 26 Nov 2015 20:44:31 GMT"}();


{
  const FPS = 30;

  function buildCanvasElement(animation) {
    const canvas = document.createElement('canvas');

    canvas.style.maxWidth = '100%';
    canvas.style.maxHeight = '100%';
    canvas.style.backgroundColor = animation.properties.color;

    return canvas;
  }

  function buildWrapperElement(animation) {
    const wrapper = document.createElement('div');
    wrapper.style.width = animation.properties.width + 'px';
    wrapper.style.height = animation.properties.height + 'px';
    return wrapper;
  }

  function buildStage(canvas, animation) {
    const stage = new createjs.Stage(canvas);
    stage.addChild(animation.create());
    stage.enableMouseOver();
    return stage;
  }

  function makeResizeStage(stage, animation) {
    var lastPixelRatio = -1;
    return function() {
      const pixelRatio = window.devicePixelRatio || 1;
      if (pixelRatio !== lastPixelRatio) {
        const widthPx = animation.properties.width;
        const heightPx = animation.properties.height;
        const canvas = stage.canvas;

        lastPixelRatio = pixelRatio;
        canvas.width = animation.properties.width * pixelRatio;
        canvas.height = animation.properties.height * pixelRatio;

        stage.scaleX = pixelRatio;
        stage.scaleY = pixelRatio;
      }
    };
  }

  function resumeAllAnimations(stages) {
    for (const i in stages)
      createjs.Ticker.addEventListener('tick', stages[i])
  }

  function pauseAllAnimations() {
    createjs.Ticker.reset();
  }

  function makeHiddenChangeHandler(stages) {
    return function() {
      if (document.hidden)
        pauseAllAnimations();
      else
        resumeAllAnimations(stages);
    };
  }

  class CreatejsAnimator {
    constructor() {
      this.stages = [];
      createjs.Ticker.setFPS(FPS);
      window.addEventListener(
          'visibilitychange', makeHiddenChangeHandler(this.stages));
    }

    createAnimationElement(animation, createWrapper = true) {
      const canvas = buildCanvasElement(animation);
      const stage = buildStage(canvas, animation);
      this.stages.push(stage);

      const resizeStage = makeResizeStage(stage, animation);
      resizeStage();
      window.addEventListener('resize', resizeStage);

      if (!document.hidden)
        createjs.Ticker.addEventListener('tick', stage);

      if (createWrapper) {
        const wrapper = buildWrapperElement(animation);
        wrapper.appendChild(canvas);
        return wrapper;
      }

      return canvas;
    }
  }

  window.createjsAnimator = new CreatejsAnimator();
}




const CREATEJS_ANIM_MESSENGER_ERROR = (function(createjs) {
(function (cjs, an) {

var p; 
var lib={};var ss={};var img={};
lib.ssMetadata = [];



function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FAFCFD").s().p("AgRARQgHgHAAgKQAAgKAHgHQAHgHAKAAQAKAAAHAHQAIAHAAAKQAAAKgIAHQgHAIgKAAQgKAAgHgIg");
	this.shape.setTransform(5.3,5.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1A1A1A").s().p("AgzA1QgPgPgFgSQgCgKAAgKQAAgJACgJQAFgTAPgOQAVgWAeAAQAfAAAWAWQAVAVAAAeQAAAfgVAWQgWAVgfAAQgeAAgVgVgAgRgRQgHAIAAAJQAAAKAHAIQAIAHAJAAQAKAAAIgHQAHgIAAgKQAAgJgHgIQgIgHgKAAQgJAAgIAHg");
	this.shape_1.setTransform(5.3,5.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-2.1,-2.1,14.9,14.9), null);


(lib.MCstartPurple = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#191D1E").s().p("AgJAJQgHgHgKgCQAKAAAIgIQAIgIAAgMQABAMAIAIQAIAIAKAAQgKABgIAIQgIAJgBALQAAgLgJgJg");
	this.shape.setTransform(2.9,2.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.MCstartPurple, new cjs.Rectangle(0.2,0,5.4,5.8), null);


(lib.MCshade = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#191D1E").s().p("AhBBCQgbgbgBgnQABglAbgcQAcgbAlgBQAnABAbAbQAbAcABAlQgBAngbAbQgbAbgnABQglgBgcgbg");
	this.shape.setTransform(9.4,9.4,1,1.754);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.MCshade, new cjs.Rectangle(0,-7,18.7,32.8), null);


(lib.MCdial2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#191D1E").ss(1,1,1).p("ACDACQgDAogpAaQgpAag1gEQgXgCgTgHIgrAcIAFgwQgGgEgEgEQglghAEgnQADgpApgaQApgZA1AEQA2AFAkAgQAlAggEAog");
	this.shape.setTransform(13.2,6.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FAFCFD").s().p("AhXA9IgKgIQglghAEgnQADgpApgaQApgZA1AEQA2AFAkAgQAlAggEAoQgDAogpAaQgpAag1gEQgXgCgTgHIgrAcg");
	this.shape_1.setTransform(13.2,6.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.MCdial2, new cjs.Rectangle(-4,-5.5,31.4,24.3), null);


(lib.MCdial1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#191D1E").ss(1,1,1).p("AiCACQADAoApAaQApAaA1gEQAXgCATgHIArAcIgFgwQAGgEAEgEQAlghgEgnQgDgpgpgaQgpgZg1AEQg2AFgkAgQglAgAEAog");
	this.shape.setTransform(13.2,6.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FAFCFD").s().p("AAyBRQgTAHgXACQg1AEgpgaQgpgagDgoQgEgoAlggQAkggA2gFQA1gEApAZQApAaADApQAEAnglAhIgKAIIAFAwg");
	this.shape_1.setTransform(13.2,6.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.MCdial1, new cjs.Rectangle(-6.8,-5.5,34.2,25.6), null);


(lib.MCcircle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#191D1E").s().p("AgWAXQgKgJAAgOQAAgNAKgJQAJgKANAAQAOAAAJAKQAKAJAAANQAAAOgKAJQgJAKgOAAQgNAAgJgKg");
	this.shape.setTransform(3.3,3.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.MCcircle, new cjs.Rectangle(0,0,6.6,6.6), null);


(lib.MCufo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlEB+QiGg0AAhKQAAhJCGg0QCGg1C+AAQC+AACGA1QCHA0AABJQAABKiHA0QiGA1i+AAQi+AAiGg1g");
	mask.setTransform(41.5,37);

	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(32.4,27.1,0.8,0.8,0,180,0,5.4,5.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:5.3,regY:5.3,x:41,y:26.3},3).to({regY:5.4,x:53.7,y:27.3},5).to({regY:5.3,x:66.5,y:29.4},5).to({x:79.9,y:34.2},5).to({x:88,y:40.2},3).to({x:90.2,y:45.8},2).to({_off:true},1).wait(35).to({_off:false,x:-7.8,y:45.1},0).to({regX:5.2,x:-4.5,y:40.3},2).to({x:-0.9,y:36.1},2).to({regX:5.3,x:12.1,y:29.8},5).to({regY:5.4,x:26.5,y:27.8},5).to({regX:5.4,regY:5.5,x:29.4,y:27.4},1).wait(1));

	this.instance_1 = new lib.Symbol1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(71.9,31.2,0.8,0.8,0,180,0,5.4,5.5);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:5.3,regY:5.3,x:79.9,y:34.2},3).to({x:88,y:40.2},3).to({x:90.2,y:45.8},2).to({_off:true},1).wait(35).to({_off:false,x:-7.8,y:45.1},0).to({regX:5.2,x:-4.5,y:40.3},2).to({x:-0.9,y:36.1},2).to({regX:5.3,x:12.1,y:29.8},5).to({regY:5.4,x:26.5,y:27.8},5).to({regY:5.3,x:41,y:26.3},5).to({regY:5.4,x:53.7,y:27.3},5).to({regY:5.3,x:66.5,y:29.4},5).to({regY:5.4,x:69.2,y:30.3},1).wait(1));

	this.instance_2 = new lib.Symbol1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-7.8,45.1,0.8,0.8,0,180,0,5.3,5.3);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(29).to({_off:false},0).to({regX:5.2,x:-4.5,y:40.3},2).to({x:-0.9,y:36.1},2).to({regX:5.3,x:12.1,y:29.8},5).to({regY:5.4,x:26.5,y:27.8},5).to({regY:5.3,x:41,y:26.3},5).to({regY:5.4,x:53.7,y:27.3},5).to({regY:5.3,x:66.5,y:29.4},5).to({x:79.9,y:34.2},5).to({x:88,y:40.2},3).to({x:90.2,y:45.8},2).to({_off:true},1).wait(6));

	this.instance_3 = new lib.Symbol1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-7.8,45.1,0.8,0.8,0,180,0,5.3,5.3);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({_off:false},0).to({regX:5.2,x:-4.5,y:40.3},2).to({x:-0.9,y:36.1},2).to({regX:5.3,x:12.1,y:29.8},5).to({regY:5.4,x:26.5,y:27.8},5).to({regY:5.3,x:41,y:26.3},5).to({regY:5.4,x:53.7,y:27.3},5).to({regY:5.3,x:66.5,y:29.4},5).to({x:79.9,y:34.2},5).to({x:88,y:40.2},3).to({x:90.2,y:45.8},2).to({_off:true},1).wait(21));

	this.instance_4 = new lib.Symbol1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-7.8,45.1,0.8,0.8,0,180,0,5.3,5.3);

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:5.2,x:-4.5,y:40.3},2).to({x:-0.9,y:36.1},2).to({regX:5.3,x:12.1,y:29.8},5).to({regY:5.4,x:26.5,y:27.8},5).to({regY:5.3,x:41,y:26.3},5).to({regY:5.4,x:53.7,y:27.3},5).to({regY:5.3,x:66.5,y:29.4},5).to({x:79.9,y:34.2},5).to({x:88,y:40.2},3).to({x:90.2,y:45.8},2).to({_off:true},1).wait(35));

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1A1A1A").ss(1,1,1).p("AHYBVQABgFAAgEQAAhCiLgvQiKgvjEAAQjDAAiKAvQiKAvAABCQAAAEAAAF");
	this.shape.setTransform(41.4,35.3);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(75));

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#191D1E").ss(1,1,1).p("AAAgXIAAAv");
	this.shape_1.setTransform(41.7,5.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(75));

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#191D1E").ss(1,1,1).p("AHLAAQAABKiGA0QiHA1i+AAQi9AAiHg1QiGg0AAhKQAAhJCGg0QCHg1C9AAQC+AACHA1QCGA0AABJg");
	this.shape_2.setTransform(41.5,37);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FAFCFD").s().p("AlEB+QiGg0AAhKQAAhJCGg0QCGg1C+AAQC+AACGA1QCHA0AABJQAABKiHA0QiGA1i+AAQi+AAiGg1g");
	this.shape_3.setTransform(41.5,37);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(75));

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#191D1E").ss(1,1,1).p("ADoARQAFAIAAAJQAAADAAADQgGAdhAAWQhFAYhiAAQhhAAhGgYQg/gWgFgdQABgMADgLQANguAzgkQBGgxBhAAQBiAABFAxQAzAkAOAuQADALACAMAjrAoQgBgDAAgDQAAgJAFgI");
	this.shape_4.setTransform(41.6,20.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FAFCFD").s().p("AinBbQg/gWgGgdQACgMADgLQANguAzgkQBFgxBiAAQBiAABFAxQAzAkAOAuQADALACAMQgGAdhAAWQhFAYhiAAQhiAAhFgYgADtAoIAAAAgADoARQAFAIAAAJIAAAGQgCgMgDgLgAjsAoIAAgGQAAgJAFgIQgDALgCAMIAAAAg");
	this.shape_5.setTransform(41.6,20.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).wait(75));

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#1A1A1A").ss(1,1,1).p("AAWgOIgFAFAASAMIAKAFAgSAPIgJAEAgTgSIAJAJ");
	this.shape_6.setTransform(41.3,2.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#1A1A1A").ss(1,1,1).p("AAXAWIATAKAgigXIALALAgXASIgSAJAAlgfIgOAO");
	this.shape_7.setTransform(41.9,2.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#1A1A1A").ss(1,1,1).p("AAdAYIAYANAgdAXIgXALAgpggIAMAMAAtgkIgQAQ");
	this.shape_8.setTransform(41.7,2.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#1A1A1A").ss(1,1,1).p("AgygpIALALAA0gpIgFAFAAvAhIAQAJAgnAdIgXAL");
	this.shape_9.setTransform(41.6,2.3);
	this.shape_9._off = true;

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#1A1A1A").ss(1,1,1).p("Ag2gtIAHAIAA2gtIgDAEABCAsIADACAg7AmIgKAF");
	this.shape_10.setTransform(41.7,2.4);
	this.shape_10._off = true;

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#1A1A1A").ss(1,1,1).p("Ag9gwIACACAA/gyIgFAFABKAyIADABAhIAuIgEAC");
	this.shape_11.setTransform(41.7,2.1);
	this.shape_11._off = true;

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#1A1A1A").ss(1,1,1).p("AASAMIAKAFAAWgOIgFAFAgTgSIAJAJAgSAPIgJAE");
	this.shape_12.setTransform(41.3,2.9);
	this.shape_12._off = true;

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#1A1A1A").ss(1,1,1).p("AAXAWIATAKAgXASIgSAJAgigXIALALAAlgfIgOAO");
	this.shape_13.setTransform(41.9,2.5);
	this.shape_13._off = true;

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#1A1A1A").ss(1,1,1).p("AAdAYIAYANAgdAXIgXALAAtgkIgQAQAgpggIAMAM");
	this.shape_14.setTransform(41.7,2.4);
	this.shape_14._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6}]}).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[]},1).to({state:[{t:this.shape_12}]},6).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[]},1).to({state:[{t:this.shape_12}]},6).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[]},1).to({state:[{t:this.shape_12}]},7).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[]},1).to({state:[{t:this.shape_12}]},6).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[]},1).to({state:[{t:this.shape_12}]},8).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[]},1).wait(6));
	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(3).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(13).to({_off:false},0).to({_off:true},1).wait(8));
	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(4).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(13).to({_off:false},0).to({_off:true},1).wait(7));
	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(5).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(13).to({_off:false},0).to({_off:true},1).wait(6));
	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(12).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(13).to({_off:false},0).to({_off:true},1).wait(11));
	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(13).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(13).to({_off:false},0).to({_off:true},1).wait(10));
	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(14).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(13).to({_off:false},0).to({_off:true},1).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.4,0,93.8,55.9);


(lib.MCufoAnim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnuJyIAAzjIPcAAIAATjg");
	mask.setTransform(70.9,69.8);

	this.MCdial2 = new lib.MCdial2();
	this.MCdial2.parent = this;
	this.MCdial2.setTransform(56.5,106,1,1,15,0,0,10.3,7.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#191D1E").ss(1,1,1).p("AhBBhQgHgCgKgCQgJgCgRgLQgQgKAAgTQAAgSADgQAhLg+QASgiAhgWQA3gmArAZQArAZAHA5QAHA4geAmQgeAmg1AOQgUAFgVABIgeAn");
	this.shape.setTransform(65.6,87.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#191D1E").ss(1,1,1).p("AhIhDQAVgdA3glQASgLAIgDQAPgHANAAAhzBEQgIgQACgYQADgSALgTAhWBdQALAGANgBABtiQQABAPAGAgQAEAfACARQADA5gTAjQgWAog+AgAg6CbQAZgjAogq");
	this.shape_1.setTransform(66.2,86.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#191D1E").ss(1,1,1).p("Ag2g0QAqgbAUgSQAhgbAQgeABVBsQAphEgGhNQgBgFgGg0QgFgjADgWAh3BEQACgUASgmAgbCbQAagZAHgJQARgVAJgSAg+BzQAXgFAUgP");
	this.shape_2.setTransform(66.6,81.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#191D1E").ss(1,1,1).p("ABtBJQAGgigFhKQgFhIAJglAgKgqQASgPASgUQALgLAGgMQAFgJAEgNQAEgQACgIAAUCQQAog4APhAAgeCUQAkgfAUgqAhxBLQAUgpAggb");
	this.shape_3.setTransform(67.2,76.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#191D1E").ss(1,1,1).p("AAHgnQAggwAEg7ABeAvQAAheAEhpAAkB6QAahJAFg/AgPCZQAbgwARg3AhhBDQAdghAmgY");
	this.shape_4.setTransform(69.2,72.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#191D1E").ss(1,1,1).p("AALgaQASgnACgwABQArQAEhfAAhTAAnByQAKgeAFgpQACgOAGg6AAACIQAVg1AKg/AhTBZIAagTQAIgGAEgDQAUgSALgT");
	this.shape_5.setTransform(70.9,67.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#191D1E").ss(1,1,1).p("AgEgeQAEgFACgNQAFgaABgPAhFBWQAfgaATglAgEBaQALgrAQhKAAjApQAKhAAFgfABGhTQgCAXAAAv");
	this.shape_6.setTransform(73.1,65.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#191D1E").ss(1,1,1).p("AgyBGQANgTALgcQAFgPALgjAgFArQAOgxAJg/AAZAjQAHgnAEgzAAzgTIAAgd");
	this.shape_7.setTransform(74.5,63);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#191D1E").ss(1,1,1).p("AglAzQATg6AEgrAgGAfQALgngCglAARAYQAGgngDgiAAmAFIAAgS");
	this.shape_8.setTransform(75.8,59.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#191D1E").ss(1,1,1).p("AgPAXQAGgXAJgWAALAJQAAgJAFgU");
	this.shape_9.setTransform(74.5,59.3);

	var maskedShapeInstanceList = [this.MCdial2,this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.MCdial2}]}).to({state:[{t:this.MCdial2}]},3).to({state:[{t:this.MCdial2}]},22).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[]},1).to({state:[{t:this.MCdial2}]},4).to({state:[{t:this.MCdial2}]},1).to({state:[{t:this.MCdial2}]},1).to({state:[{t:this.MCdial2}]},1).to({state:[{t:this.MCdial2}]},1).to({state:[{t:this.MCdial2}]},1).to({state:[{t:this.MCdial2}]},1).to({state:[{t:this.MCdial2}]},1).to({state:[{t:this.MCdial2}]},1).to({state:[{t:this.MCdial2}]},1).to({state:[{t:this.MCdial2}]},1).to({state:[{t:this.MCdial2}]},1).to({state:[{t:this.MCdial2}]},1).to({state:[{t:this.MCdial2}]},1).to({state:[{t:this.MCdial2}]},1).to({state:[{t:this.MCdial2}]},1).to({state:[{t:this.MCdial2}]},1).to({state:[{t:this.MCdial2}]},1).to({state:[{t:this.MCdial2}]},1).to({state:[{t:this.MCdial2}]},1).to({state:[{t:this.MCdial2}]},1).to({state:[{t:this.MCdial2}]},1).to({state:[{t:this.MCdial2}]},1).to({state:[{t:this.MCdial2}]},1).to({state:[{t:this.MCdial2}]},1).to({state:[{t:this.MCdial2}]},1).to({state:[{t:this.MCdial2}]},1).to({state:[{t:this.MCdial2}]},1).to({state:[{t:this.MCdial2}]},1).to({state:[{t:this.MCdial2}]},1).to({state:[{t:this.MCdial2}]},1).to({state:[{t:this.MCdial2}]},1).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.MCdial2).wait(3).to({scaleX:1,scaleY:1,rotation:-19.6,x:62,y:92.4},22,cjs.Ease.get(-1)).to({_off:true},1).wait(14).to({_off:false,scaleX:1,scaleY:1,rotation:-18.5,x:56.5,y:145.1},0).wait(1).to({regX:13.2,regY:6.3,rotation:-18.4,x:58.9,y:142.7},0).wait(1).to({rotation:-18.1,x:58.8,y:142.3},0).wait(1).to({rotation:-17.5,x:58.9,y:141.6},0).wait(1).to({rotation:-16.5,y:140.6},0).wait(1).to({rotation:-15.2,y:139.2},0).wait(1).to({rotation:-13.5,x:59,y:137.2},0).wait(1).to({rotation:-11.3,x:59.1,y:134.7},0).wait(1).to({rotation:-8.8,y:132},0).wait(1).to({rotation:-6.1,x:59.2,y:128.9},0).wait(1).to({rotation:-3.4,x:59.3,y:125.9},0).wait(1).to({rotation:-0.9,x:59.4,y:123.2},0).wait(1).to({rotation:1.3,y:120.6},0).wait(1).to({rotation:3.3,x:59.5,y:118.4},0).wait(1).to({rotation:5.1,y:116.5},0).wait(1).to({rotation:6.6,y:114.7},0).wait(1).to({rotation:7.9,y:113.3},0).wait(1).to({rotation:9.1,x:59.6,y:112},0).wait(1).to({rotation:10.1,y:110.8},0).wait(1).to({rotation:11,y:109.9},0).wait(1).to({rotation:11.8,x:59.5,y:109},0).wait(1).to({rotation:12.4,x:59.6,y:108.3},0).wait(1).to({rotation:13,y:107.7},0).wait(1).to({rotation:13.4,y:107.2},0).wait(1).to({rotation:13.8,y:106.7},0).wait(1).to({rotation:14.2,y:106.4},0).wait(1).to({rotation:14.4,y:106.1},0).wait(1).to({rotation:14.7,y:105.9},0).wait(1).to({rotation:14.8,y:105.6},0).wait(1).to({rotation:14.9},0).wait(1).to({rotation:15,y:105.5},0).wait(1).to({regX:10.3,regY:7.7,x:56.5,y:106},0).wait(4));

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag5CIQgIgEACgLQAEgMgBgFQgagCgWgQQgJgHgCgGQgCgEAAgHIABgMQgBgRAEgFIAKgHQADgEACgGQALgiARgJQgKgNAEgIIAGgHQADgDAGgKQAHgNASgPQAYgVAVgIQAdgLAYAJQAFABAPAJQANAIAFAFQAGAIAGATIAHAMIAFAMQADAIgBAQQgDAogOAXQgHAMgQAOQgtArgkAEQgRACgEACQgJAEgJAPIgIAJQgDADgEAAIgEgBg");
	this.shape_10.setTransform(65.8,87.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgtCOQgFgDABgGIAEgHQAHgKANgLIgEAAIgKABIgIgBIgOgBQgJgDgDgEIgEgGIgCgDIgDgDIgFgHIAAABQADAJgCADQgDAHgIgCQgHgCgCgIQgDgFAAgIIAAgZIACgUQACgIADgFQAGgHAGAAIAFABIAFgKIAEgIIgCgCQgDgEABgDQAAgDAEgFQAdgiAmgcQAjgbAjgMIAJgBIANgKQAJgHAGACQAGABABAGQAAAHgIAGQAGAAADAIQABACAAAKQgBAWABALIACASQADAdgEAUQgCAKgEAJIgEAIIgBAJQgCAVgKAPQgFAIgHAGQgPASgWARQgEADgEABQgFABgEgDQgEgCAAgGQABgEAKgIQAVgOANgSIAIgLIAGgMIAAAAQgLAPgTAPIgJAHIgIAFIAAABIgBAAIgGAEIgIAEIgLAJIgRASIgLAMIgIAIIgFABQgDAAgCgCg");
	this.shape_11.setTransform(65.6,84.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgSCcQgEgDAAgGQAAgCADgFIALgMIAIgLQAIgNADgHIADgGQgEABgDgCIgDgCQgEAAgCgDIgGAHIgaAVQgKAGgGgCQgFgCgBgFQgCgEAEgFIAJgFIADgCQgCgBgBgDQgCgEABgDQACgFAIgGQgHgEADgIQABgFAHgHQAOgPAMgXIACgDIgIAMIgEAFQgEAGgJgBQgDgBgCgEQgCgDABgEIADgFIAXgeIAIgMIABgDIgYAUQgHAGgEABQgJADgEgHQgCgEADgFQADgFAFgDIAfgYQAegZAPgTIAQgYIAKgSQAFgLAEgCQADgCADABQAEgFADgBQAHgBAEAHIABACIADAAQAEgBADADQAEAFgEANQgDAMAAATIgBBsQAAAZgBAOQgDAVgIAPQgGAMgPATQgHAHgEAAQgFAAgCgFQgCgFABgFQABgDALgMQAKgLAFgQIgEAFQgDAEgEAEQgFADgGgBQgHgDABgHQABgDAGgHQAMgNACgNIACgRIABgfIADgoIgLAuIgIAeQgGARgFALQgGAMgGAHQAGAEgCAJIgGANIgIARIgKAPIgQAVIgHAHQgCACgDAAQgCAAgDgCgAhmBlQgDgCgCgDQgCgDABgJQAHgeAQgVQAIgJAFACQAEAAACAFQABADgBAEQgBAFgHAJQgKAOgDAQQgDAQgFACIgEABIgDAAg");
	this.shape_12.setTransform(66.7,79.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgnCSQgDgBgCgDQgCgEABgDQABgCAEgFQALgOALgQIgKANIgIAFQgEAAgDgCQgDgCgBgEQgBgGAKgKQAEgEAJgOIAQgbQgEACgDgCQgGgBAAgHQgBgDAEgHIARgaQgDAAgDgCQgEgCAAgEQAAgGAHgIIAfgjQAPgRAHgKQALgQACgQIACgLQABgHACgEQACgEAEgCQAEgCAEACIACABIABgCQADgDAFAAQAFABACAEIABACIACACQACADAAAGIAGCkQAAAJgDADQgCADgEAAQgEAAgDgCQgEgEAAgMQABgMgEgvIgBgcIgCAbIgHApQgGAegRAcQgEAIgFACQgEABgEgDQgEgDAAgEQAAgEAFgJQAQgWAHgsIAFgmIgiBeQgYAugcAnQgIAKgHAAIgDAAgAhmBvQgEgDgBgFQgBgEAGgIIAXghIADgEIADgEIASgSQAGgFAEgBQAFgBADAEQADAEgBAFQgBAEgGAFIgVAWIgYAjQgEAGgDABIgEABIgEgBg");
	this.shape_13.setTransform(67.6,74.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgpCBQgGgDACgIQABgEAFgGIAegmIAXg9QgEABgEgDQgDgDAAgEQAAgDAEgGQAWgjADgWIACgJIADgIQACgGABgNQAAgGACgEQACgDAFgBQAFAAADADQACADAAAEIACABQAEABACAEIAAgOQAAgIADgEQADgDAEAAQAFAAACADQADADAAAIIgCA2QgEAYgMAdQgDAGgDACQgEAFgFgBIgBAAIgQBHQgCALgFAEQgCADgFABQgFAAgCgDQgEgDABgGIAEgKIACgHIgCAAIgEAGIgFAGIgFAOQgGASgGALQgFAIgFABQgEAAgEgDIgBgBIgDADQgDACgDAAIgEgBgAhRBfQgDgCgBgFQgBgEACgEIANgLQAMgIAMgOIAIgJQAHgEAEADQAGAEgDAIQgBADgGAHQgRAUgRAMQgHAEgEAAIgEAAg");
	this.shape_14.setTransform(69.8,71.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgrBsQgFgDAAgGIACgHIARgnQAIgUACgSIgBgBQgDgEABgEIAGgIIAFgLIAKgdQAHgcgBgPQgBgIACgDQACgEAFgBQAFAAADADQADADAAAGIAAgEQAAgIADgDQACgFAGABQAFAAACAFQACACAAAHIAAAPIAEAcQACASgCAXIgGAaQgBAGgCADQgDAEgGgBQgFgBgCgEIAAACQgEAXgGAKIgIALIgGAHQgFAEgGgBQgDgBgCgDIAAABIgJAUQgDAJgEACQgDACgDAAIgEgBg");
	this.shape_15.setTransform(74.2,65.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgfBVQgDAAgDgDQgCgDAAgEIADgGIALgSQAGgKAGgBQADAAADACQADADABADQAAAEgEAHIgJAPIgGAIQgEADgEAAIgBAAgAAIAPQgCgCAAgEIgBACQgFAEgDgCQgGgBgBgFQgBgEADgGIAHgRQAKgbAEgOIADgMIADgHQAEgFAGABQAGABACAFQACACgBAEIgDAFIgCAGQADADABAEQAKAogVAZIgIAGIgEABQgDAAgDgDg");
	this.shape_16.setTransform(73.9,63.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AADAvQgFgCgBgFIAAgGIADgJIACgHIAGgkIgGAYIgGATIgEAJQgDAGgCACQgEAEgFgCQgGgCgBgFQAAgFADgHQAIgOACgJIABgFIAFgSIABgGQgBgKACgFQAEgFAEABQAGAAACAFQACADAAAGIAAAEIABgMQADgFAFAAQAGgBADAFQACAFgBAHIgHAwIgCAHIgDAHIgFALQgDADgDAAIgDAAg");
	this.shape_17.setTransform(75.8,59.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgQAiQgFgBgCgEQgBgEAEgKQAFgNAAgPQgBgKADgEQADgEAEAAQAFAAACADQACACAAAEQAAgGADgEQADgCAEAAQAFAAACADQADAEAAAGQACATgDAJQgCAHgEACQgEACgEgCQgFgCgBgEIABgIIACgGIgBgNQABATgIAYIgFAHQgCACgDAAIgDgBg");
	this.shape_18.setTransform(75.9,58.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgJAMQgBgDAAgFIACgHIABgHQABgFAGgBQAFgBADAFIACAFIAAAHIgEAOQgDAEgEAAQgGgBgCgFg");
	this.shape_19.setTransform(75.6,55.6);

	var maskedShapeInstanceList = [this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_10}]},26).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[]},1).wait(39));

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#1A1A1A").ss(1,1,1).p("AASAPQgQgVgTgI");
	this.shape_20.setTransform(52.9,55.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#1A1A1A").ss(1,1,1).p("AgUgQQAZAIAQAZ");
	this.shape_21.setTransform(53.2,55.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#1A1A1A").ss(1,1,1).p("AgXgSQAfAHARAe");
	this.shape_22.setTransform(53.6,55.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#1A1A1A").ss(1,1,1).p("AgbgUQAmAGARAj");
	this.shape_23.setTransform(53.9,55.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#1A1A1A").ss(1,1,1).p("AgegXQAsAGARAp");
	this.shape_24.setTransform(54.2,56);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#1A1A1A").ss(1,1,1).p("AghgZQAxAGASAt");
	this.shape_25.setTransform(54.5,56.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#1A1A1A").ss(1,1,1).p("AgkgbQA3AGASAx");
	this.shape_26.setTransform(54.8,56.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#1A1A1A").ss(1,1,1).p("AgogdQA+AFASA2");
	this.shape_27.setTransform(55.2,56.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#1A1A1A").ss(1,1,1).p("AgrgfQBEAEASA7");
	this.shape_28.setTransform(55.5,56.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#1A1A1A").ss(1,1,1).p("AgughQBKAEATA/");
	this.shape_29.setTransform(55.8,57.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#1A1A1A").ss(1,1,1).p("AAyAlQgThFhQgD");
	this.shape_30.setTransform(56.1,57.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#1A1A1A").ss(1,1,1).p("AgtgeQBIACATA6");
	this.shape_31.setTransform(57,56.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#1A1A1A").ss(1,1,1).p("AgpgXQA/gBATAw");
	this.shape_32.setTransform(58,56.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#1A1A1A").ss(1,1,1).p("AglgRQA3gDAUAm");
	this.shape_33.setTransform(58.9,55.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#1A1A1A").ss(1,1,1).p("AgggLQAtgFAUAc");
	this.shape_34.setTransform(59.8,54.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#1A1A1A").ss(1,1,1).p("AgcgEQAlgHAUAS");
	this.shape_35.setTransform(60.7,54.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#1A1A1A").ss(1,1,1).p("AgXADQAcgJAUAI");
	this.shape_36.setTransform(61.6,53.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#1A1A1A").ss(1,1,1).p("AgTAHQATgLAUgC");
	this.shape_37.setTransform(62.5,53.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#1A1A1A").ss(1,1,1).p("AAQgMQgTAMgMAN");
	this.shape_38.setTransform(63.4,52.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_20}]},19).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[]},1).wait(37));

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#1A1A1A").ss(1,1,1).p("AgPASQANgdASgH");
	this.shape_39.setTransform(97.6,52.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#1A1A1A").ss(1,1,1).p("AgRAVQAMghAXgI");
	this.shape_40.setTransform(97.6,52.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#1A1A1A").ss(1,1,1).p("AgTAYQALglAcgK");
	this.shape_41.setTransform(97.6,52.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#1A1A1A").ss(1,1,1).p("AgWAbQALgpAigL");
	this.shape_42.setTransform(97.6,52.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#1A1A1A").ss(1,1,1).p("AgYAdQAKgrAngO");
	this.shape_43.setTransform(97.6,52.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#1A1A1A").ss(1,1,1).p("AgaAgQAJgwAsgO");
	this.shape_44.setTransform(97.6,52.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#1A1A1A").ss(1,1,1).p("AgcAiQAHgzAygQ");
	this.shape_45.setTransform(97.6,52.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#1A1A1A").ss(1,1,1).p("AgeAlQAGg3A3gS");
	this.shape_46.setTransform(97.6,53);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#1A1A1A").ss(1,1,1).p("AggAnQAFg6A9gU");
	this.shape_47.setTransform(97.6,53.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#1A1A1A").ss(1,1,1).p("AgiAqQAEg9BCgW");
	this.shape_48.setTransform(97.6,53.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#1A1A1A").ss(1,1,1).p("AglAtQADhCBIgX");
	this.shape_49.setTransform(97.6,53.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#1A1A1A").ss(1,1,1).p("AgiAmQAFg4BAgT");
	this.shape_50.setTransform(96.4,53.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#1A1A1A").ss(1,1,1).p("AggAfQAHgvA6gO");
	this.shape_51.setTransform(95.3,52.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#1A1A1A").ss(1,1,1).p("AgdAYQAJgmAygK");
	this.shape_52.setTransform(94.1,52.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#1A1A1A").ss(1,1,1).p("AgbASQAMgdArgG");
	this.shape_53.setTransform(92.9,52.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#1A1A1A").ss(1,1,1).p("AgYAKQANgTAkAA");
	this.shape_54.setTransform(91.7,51.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#1A1A1A").ss(1,1,1).p("AgWAEQAQgKAdAE");
	this.shape_55.setTransform(90.5,51.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#1A1A1A").ss(1,1,1).p("AgTgCQARgBAXAG");
	this.shape_56.setTransform(89.4,51.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#1A1A1A").ss(1,1,1).p("AgRgJQAUAIAPAL");
	this.shape_57.setTransform(88.2,50.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_39}]},19).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[]},1).wait(37));

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#1A1A1A").ss(1,1,1).p("AggAAQABgDAJgDQAKgCAMAAQANAAAKADQAKACAAADQAAADgKADQgJADgOgBQgNABgJgDQgKgDAAgDg");
	this.shape_58.setTransform(72.7,62.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#1A1A1A").s().p("AgVAGQgKgDAAgDQAAgDAJgDQAKgCAMAAQAOAAAJADQAKACAAADQAAADgKADQgJADgOgBIgDABQgLAAgHgDg");
	this.shape_59.setTransform(72.7,62.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#1A1A1A").ss(1,1,1).p("AgfAAQAAgDAJgDQAjgCAKACQAJADAAADQABADgKACQgJADgOAAQgMABgJgDQgKgDAAgDg");
	this.shape_60.setTransform(72.9,61.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#1A1A1A").s().p("AgVAGQgKgDAAgDQAAgDAJgDQAjgCAKACQAJADAAADQABADgKACQgJADgOAAIgDAAQgLAAgHgCg");
	this.shape_61.setTransform(72.9,61.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#1A1A1A").ss(1,1,1).p("AggAAQABgDAJgDQAkgCAJACQAKACAAAEQAAACgKADQgJADgOAAQgMAAgKgCQgKgDAAgDg");
	this.shape_62.setTransform(73.1,61.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#1A1A1A").s().p("AgVAGQgKgDAAgDQAAgDAJgDQAkgCAJACQAKACAAAEQAAACgKADQgJADgOAAIgDAAQgLAAgHgCg");
	this.shape_63.setTransform(73.1,61.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#1A1A1A").ss(1,1,1).p("AggAAQABgDAJgCQAjgDAKACQAKADAAADQAAADgKACQgJADgOAAQgMABgKgCQgKgEAAgDg");
	this.shape_64.setTransform(73.4,60.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#1A1A1A").s().p("AgVAHQgLgEAAgDQABgDAJgCQAjgDAKACQAKADAAADQAAADgKACQgJADgOAAIgEAAQgKAAgHgBg");
	this.shape_65.setTransform(73.4,60.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#1A1A1A").ss(1,1,1).p("AggAAQABgDAJgCQAjgDAKACQAKACAAAEQAAACgKADQgJADgOAAQgMABgKgDQgKgDAAgDg");
	this.shape_66.setTransform(73.6,59.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#1A1A1A").s().p("AgVAGQgKgDAAgDQAAgDAJgCQAjgDAKACQAKACAAAEQAAACgKADQgJADgOAAIgGAAQgJAAgGgCg");
	this.shape_67.setTransform(73.6,59.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#1A1A1A").ss(1,1,1).p("AggAAQABgCAJgDQAjgDAKACQAKACAAAEQAAACgKADQgJADgOAAQgMABgKgCQgKgDAAgEg");
	this.shape_68.setTransform(73.8,59.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#1A1A1A").s().p("AgWAHQgJgDgBgEQABgCAJgDQAkgDAJACQAKACAAAEQAAACgKADQgJADgOAAIgEAAQgKAAgIgBg");
	this.shape_69.setTransform(73.8,59.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#1A1A1A").s().p("AgVAHQgKgDAAgEQAAgCAJgDQAjgDAKACQAKACAAAEQAAACgKADQgJADgOAAIgEAAQgKAAgHgBg");
	this.shape_70.setTransform(74,58.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#1A1A1A").ss(1,1,1).p("AgfAAQAAgDAJgCQAjgEAKACQAJADAAADQABADgKACQgJAEgOAAQgMABgJgDQgKgDAAgDg");
	this.shape_71.setTransform(74.1,58.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#1A1A1A").s().p("AgVAGQgKgDAAgDQAAgDAJgCQAjgEAKACQAJADAAADQABADgKACQgJAEgOAAIgGAAQgJAAgGgCg");
	this.shape_72.setTransform(74.1,58.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#1A1A1A").ss(1,1,1).p("AgfAAQAAgCAJgDQAjgEAKADQAJACAAADQABADgKADQgJADgNAAQgNABgJgCQgKgDAAgEg");
	this.shape_73.setTransform(74.3,58);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#1A1A1A").s().p("AgVAHQgKgDAAgEQAAgCAJgDQAjgEAKADQAJACAAADQABADgKADQgJADgNAAIgFAAQgKAAgHgBg");
	this.shape_74.setTransform(74.3,58);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#1A1A1A").ss(1,1,1).p("AgfAAQAAgCAJgDQAjgEAKACQAJACAAAEQABACgKADQgJAEgOAAQgMABgJgDQgKgCAAgEg");
	this.shape_75.setTransform(74.5,57.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#1A1A1A").s().p("AgVAGQgKgCAAgEQAAgCAJgDQAjgEAKACQAJACAAAEQABACgKADQgJAEgOAAIgGAAQgJAAgGgCg");
	this.shape_76.setTransform(74.5,57.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#1A1A1A").ss(1,1,1).p("AggABQABgDAJgDQAjgEAKACQAKACAAAEQAAACgKADQgJAEgOAAQgMABgKgCQgKgDAAgDg");
	this.shape_77.setTransform(74.7,57);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#1A1A1A").s().p("AgWAHQgJgDgBgDQABgDAJgDQAjgEAKACQAKACAAAEQAAACgKADQgJAEgOAAIgHAAIgPgBg");
	this.shape_78.setTransform(74.7,57);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#1A1A1A").ss(1,1,1).p("AgfABQAAgDAJgCQAjgFAKACQAJADAAADQABADgKACQgJAEgNAAQgNABgJgCQgKgDAAgDg");
	this.shape_79.setTransform(74.8,56.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#1A1A1A").s().p("AgVAHQgKgDAAgDQAAgDAJgCQAjgFAKACQAJADAAADQABADgKACQgJAEgNAAIgIAAIgOgBg");
	this.shape_80.setTransform(74.8,56.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#1A1A1A").s().p("AgWAHQgJgDgBgDQABgDAJgDQAjgEAKACQAKACgBAEQABACgKADQgJAEgNAAIgIAAIgPgBg");
	this.shape_81.setTransform(75,56.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#1A1A1A").ss(1,1,1).p("AgfACQAAgDAJgDQAJgDANAAQANgBAKABQAJADAAADQABADgKADQgJADgNABQgNABgJgCQgKgDAAgDg");
	this.shape_82.setTransform(75.2,55.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#1A1A1A").s().p("AgVAIQgKgDAAgDQAAgDAJgDQAJgDANAAQANgBAKACQAJACAAADQABACgKADQgJAEgNABIgIAAIgOgBg");
	this.shape_83.setTransform(75.2,55.6);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#1A1A1A").ss(1,1,1).p("AhCAEQAAgHASgGQAUgGAcgCQAagBAVAEQAUAEAAAHQABAHgUAGQgTAHgcABQgbACgUgEQgUgFAAgHg");
	this.shape_84.setTransform(75.2,55.4);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#1A1A1A").s().p("AguAQQgUgFAAgHQAAgHASgGQAUgGAcgCQAagBAVAEQAUAEAAAHQABAHgUAGQgTAHgcABIgRAAQgQAAgOgCg");
	this.shape_85.setTransform(75.2,55.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#1A1A1A").ss(1,1,1).p("AhlAGQAAgKAdgKQAdgKAqgCQApgCAfAGQAfAGAAALQABAKgeAKQgdAKgqACQgqADgegGQgegHgBgLg");
	this.shape_86.setTransform(75.2,55.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#1A1A1A").s().p("AhGAXQgegGgBgMQAAgKAdgJQAdgKAqgCQApgDAfAHQAfAGAAALQABAKgeAKQgdAKgqACIgXABQgcAAgVgFg");
	this.shape_87.setTransform(75.2,55.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#1A1A1A").ss(1,1,1).p("AiIAIQAAgOAmgNQAogNA5gDQA3gDApAIQApAIABAPQABAOgoANQgnANg5ADQg4AEgogIQgpgJgBgPg");
	this.shape_88.setTransform(75.3,55.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#1A1A1A").s().p("AheAgQgpgJgBgPQAAgOAmgNQAogNA5gDQA3gDApAIQApAIABAPQABAOgoANQgnANg5ADIggABQgkAAgcgFg");
	this.shape_89.setTransform(75.3,55.2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#1A1A1A").ss(1,1,1).p("AiqAJQgBgRAxgQQAxgRBHgEQBGgEAzALQA0AKABATQABARgyARQgxAQhHAEQhHAEgygKQgzgLgBgTg");
	this.shape_90.setTransform(75.3,55.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#1A1A1A").s().p("Ah2AnQgzgLgCgTQAAgRAwgQQAygRBHgEQBGgEAzALQA0AKAAATQABARgxARQgxAQhIAEIgmACQguAAgkgIg");
	this.shape_91.setTransform(75.3,55.2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#1A1A1A").ss(1,1,1).p("AjNAMQgBgWA6gTQA8gUBVgFQBVgEA9AMQA+ANABAWQACAWg8AUQg8AThVAFQhVAFg8gMQg+gOgBgWg");
	this.shape_92.setTransform(75.3,55);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#1A1A1A").s().p("AiOAwQg+gOgBgWQgBgWA6gTQA8gUBVgFQBVgEA9AMQA+ANABAWQACAWg8AUQg8AThVAFIgvABQg4AAgqgIg");
	this.shape_93.setTransform(75.3,55);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#1A1A1A").ss(1,1,1).p("AjJAMQgBgVA5gTQA7gUBTgFQBTgEA8AMQA9AMABAWQABAVg6AUQg7AThUAFQhSAFg8gMQg8gNgBgWg");
	this.shape_94.setTransform(75.6,55.5);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#1A1A1A").s().p("AiMAvQg8gNgBgWQgBgVA5gTQA7gUBTgFQBTgEA8AMQA9AMABAWQABAVg6AUQg7AThUAFIguABQg2AAgqgIg");
	this.shape_95.setTransform(75.6,55.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#1A1A1A").ss(1,1,1).p("AjFAMQgBgVA4gSQA6gUBRgFQBRgEA7AMQA8AMABAVQABAVg5ATQg5AThTAFQhQAEg7gLQg7gNgBgVg");
	this.shape_96.setTransform(75.8,55.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#1A1A1A").s().p("AiJAuQg7gNgBgVQgBgVA4gSQA6gUBRgFQBRgEA7AMQA8AMABAVQABAVg5ATQg5AThTAFIgrABQg2AAgqgIg");
	this.shape_97.setTransform(75.8,55.9);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#1A1A1A").ss(1,1,1).p("AjBALQgBgTA3gTQA5gSBPgGQBQgEA5AMQA7ALAAAVQACAUg4ATQg4AThRAEQhOAFg5gLQg6gMgCgWg");
	this.shape_98.setTransform(76,56.4);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#1A1A1A").s().p("AiFAtQg6gMgCgWQgBgTA3gTQA5gSBPgGQBQgEA5AMQA7ALAAAVQACAUg4ATQg4AThRAEIguACQgyAAgngIg");
	this.shape_99.setTransform(76,56.4);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#1A1A1A").ss(1,1,1).p("Ai8ALQgBgTA1gSQA4gSBOgGQBNgEA5ALQA5ALAAAVQACAUg3ASQg3AThPAEQhMAFg4gLQg5gMgBgVg");
	this.shape_100.setTransform(76.2,56.8);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#1A1A1A").s().p("AiCAsQg5gMgBgVQgBgTA1gSQA4gSBOgGQBNgEA5ALQA5ALAAAVQACAUg3ASQg3AThPAEIgrACQgyAAgngIg");
	this.shape_101.setTransform(76.2,56.8);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#1A1A1A").ss(1,1,1).p("Ai4ALQgBgSA0gSQA2gSBMgFQBMgFA3ALQA4ALABAUQABAUg1ASQg2AShNAEQhLAFg3gLQg3gLgBgVg");
	this.shape_102.setTransform(76.4,57.3);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#1A1A1A").s().p("AiAArQg3gLgBgVQgBgSA0gSQA2gSBMgFQBMgFA3ALQA4ALABAUQABAUg1ASQg2AShNAEIgqACQgxAAgngIg");
	this.shape_103.setTransform(76.4,57.3);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#1A1A1A").ss(1,1,1).p("Ai0ALQgBgSAzgSQA1gRBKgFQBKgFA2ALQA3AKABAUQABATg0ASQg0ARhMAFQhJAFg2gLQg2gKgBgVg");
	this.shape_104.setTransform(76.6,57.7);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#1A1A1A").s().p("Ah9AqQg2gKgBgVQgBgSAzgSQA1gRBKgFQBKgFA2ALQA3AKABAUQABATg0ASQg0ARhMAFIgqACQgvAAgmgIg");
	this.shape_105.setTransform(76.6,57.7);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#1A1A1A").ss(1,1,1).p("AivALQgCgSAygRQA0gRBJgFQBIgFA1ALQA1AKABATQABATgzARQgzARhKAFQhHAEg1gKQg0gKgBgUg");
	this.shape_106.setTransform(76.8,58.2);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#1A1A1A").s().p("Ah6ApQg1gKAAgUQgCgSAygRQAzgRBKgFQBHgFA2ALQA1AKABATQABATg0ARQgyARhKAFIgnABQgvAAgmgHg");
	this.shape_107.setTransform(76.8,58.2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#1A1A1A").ss(1,1,1).p("AirALQgBgRAwgSQAzgQBHgFQBGgEA0AKQA0AJAAATQACASgyARQgyARhIAFQhFAEgzgJQg0gKgBgUg");
	this.shape_108.setTransform(77,58.6);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#1A1A1A").s().p("Ah2ApQg0gKgBgUQgBgRAwgSQAzgQBHgFQBGgEA0AKQA0AJAAATQACASgyARQgyARhIAFIgqABQgsAAgigGg");
	this.shape_109.setTransform(77,58.6);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#1A1A1A").ss(1,1,1).p("AinALQgBgRAwgRQAxgQBFgFQBFgEAyAJQAzAJAAATQACASgxAQQgwARhHAFQhDAEgygJQgzgKgBgTg");
	this.shape_110.setTransform(77.2,59.1);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#1A1A1A").s().p("AhzAoQgzgKgBgTQgBgRAvgRQAygQBFgFQBFgEAyAJQAzAJAAATQABASgwAQQgxARhGAFIgnABQgsAAgigGg");
	this.shape_111.setTransform(77.2,59.1);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#1A1A1A").ss(1,1,1).p("ACkgLQABARgvAQQgvARhFAFQhCAEgxgJQgxgJgBgTQgBgQAugRQAwgQBEgFQBDgEAxAJQAxAJABASg");
	this.shape_112.setTransform(77.5,59.5);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#1A1A1A").s().p("AhxAnQgxgJgBgTQgBgQAugRQAwgQBEgFQBDgEAxAJQAxAJABASQABARgvAQQgvARhFAFIgnABQgqAAgigGg");
	this.shape_113.setTransform(77.5,59.5);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#1A1A1A").ss(1,1,1).p("AicALQgCgQAtgQQAugPBBgFQBBgEAvAJQAvAIABASQABAQgtAQQguAQhCAEQg/AEgvgIQgvgJgBgSg");
	this.shape_114.setTransform(77.2,58.5);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#1A1A1A").s().p("AhsAmQgwgJgBgSQgBgQAtgQQAugPBBgFQBBgEAvAJQAvAIAAASQACAQguAQQgtAQhCAEIgnACQgoAAgfgGg");
	this.shape_115.setTransform(77.2,58.5);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#1A1A1A").ss(1,1,1).p("AiWAKQgCgPArgPQAtgPA+gFQA+gEAtAJQAuAIABARQABAQgsAPQgsAPg/AFQg9ADgtgIQgtgIgBgSg");
	this.shape_116.setTransform(77,57.6);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#1A1A1A").s().p("AhoAkQgtgIgBgSQgCgPArgPQAtgPA+gFQA+gEAtAJQAuAIABARQABAQgsAPQgsAPg/AFIgiABQgoAAgggGg");
	this.shape_117.setTransform(77,57.6);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#1A1A1A").ss(1,1,1).p("AiQAKQgCgOAqgPQAqgOA8gFQA7gEAsAJQAsAIAAAQQABAPgqAOQgqAPg8AEQg7AEgrgIQgsgIAAgRg");
	this.shape_118.setTransform(76.8,56.6);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#1A1A1A").s().p("AhkAjQgsgIAAgRQgCgOAqgPQAqgOA8gFQA7gEAsAJQAsAIAAAQQABAPgqAOQgqAPg8AEIgiABQgmAAgegFg");
	this.shape_119.setTransform(76.8,56.6);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#1A1A1A").ss(1,1,1).p("AiKAKQgCgOAogOQApgOA5gEQA5gEApAIQAqAIABAPQABAOgoAOQgoAOg7AEQg3AEgqgIQgqgIAAgPg");
	this.shape_120.setTransform(76.6,55.6);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#1A1A1A").s().p("AhgAhQgqgIAAgPQgCgOAogOQApgOA5gEQA5gEApAIQAqAIABAPQABAOgoAOQgoAOg7AEIghABQgjAAgdgFg");
	this.shape_121.setTransform(76.6,55.6);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#1A1A1A").ss(1,1,1).p("AiEAJQgBgNAmgNQAmgNA3gFQA3gDAnAIQAoAHABAPQABANgmANQgnAOg3AEQg2ADgngHQgogIgBgPg");
	this.shape_122.setTransform(76.4,54.6);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#1A1A1A").s().p("AhbAgQgogIgBgPQgBgNAmgNQAmgNA3gFQA3gDAnAIQAoAHABAPQABANgmANQgnAOg3AEIggABQgiAAgbgFg");
	this.shape_123.setTransform(76.4,54.6);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#1A1A1A").ss(1,1,1).p("Ah+AJQgBgNAkgNQAlgMA1gEQA0gDAlAHQAnAHAAAOQABANgkAMQglANg1AEQgzADgmgHQgmgHgBgOg");
	this.shape_124.setTransform(76.1,53.7);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#1A1A1A").s().p("AhXAeQgmgHgBgOQgBgNAkgNQAlgMA0gEQA0gDAmAHQAnAHAAAOQABANgkAMQglANg1AEIgdABQgiAAgagFg");
	this.shape_125.setTransform(76.1,53.7);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#1A1A1A").ss(1,1,1).p("Ah4AIQgBgMAjgMQAjgMAxgEQAygDAkAHQAkAHABANQABAMgjAMQgjAMgyAFQgxACgkgHQgkgGgBgOg");
	this.shape_126.setTransform(75.9,52.7);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#1A1A1A").s().p("AhTAcQgkgGgBgOQgBgMAjgMQAjgLAxgFQAygDAkAIQAkAGABANQABAMgjANQgjALgyAFIgcAAQggAAgZgFg");
	this.shape_127.setTransform(75.9,52.7);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#1A1A1A").ss(1,1,1).p("ABzgHQAAALghAMQghALgwAEQguADgigHQgigGgBgNQgBgMAhgLQAhgLAvgEQAvgDAiAHQAjAGABANg");
	this.shape_128.setTransform(75.7,51.7);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#1A1A1A").s().p("AhPAbQgigGgBgNQgBgMAhgLQAhgLAvgEQAvgDAiAHQAjAGABANQAAALghAMQghALgwAEIgbABQgdAAgYgFg");
	this.shape_129.setTransform(75.7,51.7);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#1A1A1A").ss(1,1,1).p("AhiAHQgBgKAcgKQAdgJApgDQAogDAdAGQAeAFABALQAAAKgcAKQgdAJgpADQgoADgdgGQgdgFgBgLg");
	this.shape_130.setTransform(75.7,51.7);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#1A1A1A").s().p("AhEAXQgdgFgBgLQgBgKAcgKQAdgJApgDQAogDAdAGQAeAFABALQAAAKgcAKQgdAJgpADIgZABQgYAAgUgEg");
	this.shape_131.setTransform(75.7,51.7);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#1A1A1A").ss(1,1,1).p("AhSAGQgBgIAYgIQAYgJAigCQAhgCAZAEQAZAFABAJQAAAIgYAJQgYAIgiACQghACgZgEQgZgFAAgJg");
	this.shape_132.setTransform(75.7,51.7);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#1A1A1A").s().p("Ag5AUQgZgFAAgJQgBgIAYgIQAYgJAigCQAhgCAZAEQAZAFABAJQAAAIgYAJQgYAIgiACIgTABQgWAAgRgDg");
	this.shape_133.setTransform(75.7,51.7);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#1A1A1A").ss(1,1,1).p("AhCAFQAAgHATgGQATgHAcgCQAagCAUAEQAUAEABAHQAAAHgTAGQgTAHgcACQgbACgTgEQgUgEgBgHg");
	this.shape_134.setTransform(75.7,51.7);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#1A1A1A").s().p("AgtAQQgUgEgBgHQAAgHATgGQATgHAcgCQAagCAUAEQAUAEABAHQAAAHgTAGQgTAHgcACIgRAAQgQAAgNgCg");
	this.shape_135.setTransform(75.7,51.7);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#1A1A1A").ss(1,1,1).p("AgyAEQAAgFAOgFQAPgFAVgCQAUgBAPADQAPADABAGQAAAEgPAFQgOAFgVACQgUABgPgDQgQgCAAgGg");
	this.shape_136.setTransform(75.7,51.7);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#1A1A1A").s().p("AgiAMQgQgCAAgGQAAgFAOgFQAPgFAVgCQAUgBAPADQAPADABAGQAAAEgPAFQgOAFgVACIgLAAQgOAAgKgCg");
	this.shape_137.setTransform(75.7,51.7);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#1A1A1A").ss(1,1,1).p("AAjgBQAAADgKADQgKADgPABQgNABgKgCQgLgBAAgEQAAgDAKgEQAKgDAOgBQANgBALACQAKACABAEg");
	this.shape_138.setTransform(75.7,51.7);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#1A1A1A").s().p("AgXAIQgLgBAAgEQAAgDAKgEQAKgDAOgBQANgBALACQAKACABAEQAAADgKADQgKADgPABIgIABQgJAAgGgCg");
	this.shape_139.setTransform(75.7,51.7);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#1A1A1A").ss(1,1,1).p("AgiACQAAgDAKgDQAlgGALACQAKACABAEQAAADgKAEQgKADgPABQgNABgKgCQgLgCAAgEg");
	this.shape_140.setTransform(75.7,51.8);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#1A1A1A").s().p("AgXAIQgLgCAAgEQAAgDAKgDQAlgGALACQAKACABAEQAAADgKAEQgKADgPABIgIAAQgJAAgGgBg");
	this.shape_141.setTransform(75.7,51.8);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#1A1A1A").ss(1,1,1).p("AghACQgBgDAKgDQAlgGALACQAKACABAEQAAADgKAEQgKADgPABQgNABgKgCQgKgCAAgEg");
	this.shape_142.setTransform(75.6,52.1);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#1A1A1A").s().p("AgXAIQgKgCAAgEQgBgDAKgDQAlgGALACQAKACABAEQAAADgKAEQgKADgPABIgIAAIgPgBg");
	this.shape_143.setTransform(75.6,52.1);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#1A1A1A").ss(1,1,1).p("AgiACQAAgDAKgDQAlgFALACQAKACABAEQAAADgKADQgKADgPABQgNABgKgCQgLgCAAgEg");
	this.shape_144.setTransform(75.5,52.3);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#1A1A1A").s().p("AgXAIQgLgCAAgEQAAgDAKgDQAlgFALACQAKACABAEQAAADgKADQgKADgPABIgIAAQgJAAgGgBg");
	this.shape_145.setTransform(75.5,52.3);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#1A1A1A").ss(1,1,1).p("AghACQgBgDAKgDQAlgGALACQAKADABADQAAADgKAEQgKADgPABQgNABgKgCQgKgCAAgEg");
	this.shape_146.setTransform(75.4,52.6);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#1A1A1A").s().p("AgXAIQgKgCAAgEQgBgDAKgDQAlgGALACQAKADABADQAAADgKAEQgKADgPABIgIAAQgJAAgGgBg");
	this.shape_147.setTransform(75.4,52.6);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#1A1A1A").ss(1,1,1).p("AgiACQAAgDAKgDQAmgFAKACQAKACABAEQAAADgKADQgKADgPABQgNABgKgCQgLgCAAgEg");
	this.shape_148.setTransform(75.3,53);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#1A1A1A").s().p("AgXAIQgLgCAAgEQAAgDAKgDQAmgFAKACQAKACABAEQAAADgKADQgKADgPABIgIAAQgIAAgHgBg");
	this.shape_149.setTransform(75.3,53);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#1A1A1A").ss(1,1,1).p("AghACQgBgDAKgEQAlgEALACQAKACAAAEQAAADgKADQgJADgPABQgNABgKgDQgKgBAAgEg");
	this.shape_150.setTransform(75.2,53.6);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#1A1A1A").s().p("AgXAHQgKgBAAgEQgBgDAKgEQAlgEALACQAKACAAAEQAAADgKADQgJADgPABIgHAAQgJAAgHgCg");
	this.shape_151.setTransform(75.2,53.6);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#1A1A1A").ss(1,1,1).p("AghACQAAgDAJgDQAlgFALACQAKACAAAEQAAADgKADQgJADgPABQgNABgKgCQgKgCAAgEg");
	this.shape_152.setTransform(75,54.2);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#1A1A1A").s().p("AgXAIQgKgCAAgEQAAgDAJgDQAlgFALACQAKACAAAEQAAADgKADQgJADgPABIgIAAIgPgBg");
	this.shape_153.setTransform(75,54.2);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#1A1A1A").ss(1,1,1).p("AghABQAAgDAKgDQAkgEALACQAKACAAAEQAAADgKADQgJADgPAAQgNABgKgCQgKgCAAgEg");
	this.shape_154.setTransform(74.8,54.9);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#1A1A1A").s().p("AgXAHQgKgCAAgEQAAgDAKgDQAkgEALACQAKACAAAEQAAADgKADQgJADgPAAIgHABQgJAAgHgCg");
	this.shape_155.setTransform(74.8,54.9);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#1A1A1A").ss(1,1,1).p("AghABQAAgDAKgDQAkgEAKACQALACAAAEQAAADgKADQgKADgOAAQgNABgKgCQgKgCAAgEg");
	this.shape_156.setTransform(74.6,55.7);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#1A1A1A").s().p("AgXAHQgKgCAAgEQAAgDAKgDQAkgEAKACQALACAAAEQAAADgKADQgKADgOAAIgIABQgIAAgHgCg");
	this.shape_157.setTransform(74.6,55.7);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("#1A1A1A").ss(1,1,1).p("AghABQAAgDAKgDQAkgEALACQAKADAAADQAAADgKADQgJADgPAAQgNABgJgCQgLgCAAgEg");
	this.shape_158.setTransform(74.3,56.5);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#1A1A1A").s().p("AgWAHQgLgCAAgEQAAgDAKgDQAkgEALACQAKADAAADQAAADgKADQgJADgPAAIgIABQgIAAgGgCg");
	this.shape_159.setTransform(74.3,56.5);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#1A1A1A").ss(1,1,1).p("AggABQAAgDAJgDQAlgEAKADQAKACAAAEQAAACgKADQgJADgPAAQgNABgJgCQgKgDAAgDg");
	this.shape_160.setTransform(74.1,57.3);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#1A1A1A").s().p("AgWAHQgLgDAAgDQAAgDAKgDQAkgEAKADQALACAAAEQAAACgKADQgKADgOAAIgHAAQgJAAgGgBg");
	this.shape_161.setTransform(74.1,57.3);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("#1A1A1A").ss(1,1,1).p("AghAAQAAgDAKgCQAkgEAKACQAKADAAADQAAADgKADQgJADgOAAQgNABgKgCQgKgDAAgEg");
	this.shape_162.setTransform(73.9,58.1);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#1A1A1A").s().p("AgXAHQgKgDABgEQAAgDAJgCQAkgEAKACQAKADAAADQAAADgKADQgJADgOAAIgEAAQgLAAgIgBg");
	this.shape_163.setTransform(73.9,58.1);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#1A1A1A").ss(1,1,1).p("AggAAQAAgDAJgCQAlgEAJADQAKACAAAEQAAACgJADQgKADgOAAQgNABgJgCQgKgDAAgEg");
	this.shape_164.setTransform(73.7,58.8);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#1A1A1A").s().p("AgWAHQgKgDAAgEQAAgDAJgCQAlgEAJADQAKACAAAEQAAACgJADQgKADgOAAIgEAAQgLAAgHgBg");
	this.shape_165.setTransform(73.7,58.8);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("#1A1A1A").ss(1,1,1).p("AggAAQAAgDAKgCQAjgDAKACQAKACAAAEQAAADgKACQgJADgOAAQgMABgKgCQgKgDAAgEg");
	this.shape_166.setTransform(73.5,59.4);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#1A1A1A").s().p("AgWAHQgKgDAAgEQAAgDAKgCQAkgDAJACQAKACAAAEQAAADgJACQgKADgOAAIgEAAQgKAAgIgBg");
	this.shape_167.setTransform(73.5,59.4);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#1A1A1A").ss(1,1,1).p("AggAAQAAgDAKgDQAkgDAJADQAKACAAAEQAAACgJADQgKADgOAAQgNABgJgDQgKgDAAgDg");
	this.shape_168.setTransform(73.4,60);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#1A1A1A").s().p("AgWAGQgKgDAAgDQAAgDAKgDQAkgDAJADQAKACAAAEQAAACgKADQgJADgOAAIgHAAQgJAAgGgCg");
	this.shape_169.setTransform(73.4,60);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("#1A1A1A").ss(1,1,1).p("AggAAQAAgDAJgDQAkgCAKACQAKADAAADQAAADgKADQgJADgOgBQgNABgJgDQgKgDAAgDg");
	this.shape_170.setTransform(73.2,60.5);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#1A1A1A").s().p("AgWAGQgKgDAAgDQABgDAIgDQAkgCAKACQAKADAAADQAAADgKADQgJADgOgBIgDAAQgLAAgIgCg");
	this.shape_171.setTransform(73.2,60.5);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("#1A1A1A").ss(1,1,1).p("AggAAQABgDAJgDQAkgCAJACQAKADAAADQAAADgKACQgJADgOAAQgNABgJgDQgKgDAAgDg");
	this.shape_172.setTransform(73.1,60.9);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#1A1A1A").s().p("AgWAGQgKgDAAgDQABgDAJgDQAkgCAJACQAKADAAADQAAADgKACQgJADgOAAIgGAAQgJAAgHgCg");
	this.shape_173.setTransform(73.1,60.9);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().s("#1A1A1A").ss(1,1,1).p("AggAAQABgDAJgDQAkgCAJACQAKADAAADQAAADgKACQgJADgOAAQgNAAgJgCQgKgDAAgDg");
	this.shape_174.setTransform(73,61.3);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#1A1A1A").s().p("AgWAGQgKgDAAgDQABgDAJgDQAkgCAJACQAKADAAADQAAADgKACQgJADgOAAIgEAAQgLAAgHgCg");
	this.shape_175.setTransform(73,61.3);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f().s("#1A1A1A").ss(1,1,1).p("AggAAQABgEAJgCQAjgCAKACQAKADAAADQAAADgKACQgJADgOAAQgNAAgJgCQgKgEAAgCg");
	this.shape_176.setTransform(72.9,61.6);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#1A1A1A").s().p("AgVAGQgLgEABgCQAAgEAJgCQAjgCAKACQAJADAAADQAAADgJACQgJADgOAAIgDAAQgLAAgHgCg");
	this.shape_177.setTransform(72.9,61.6);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f().s("#1A1A1A").ss(1,1,1).p("AggAAQABgDAJgDQAkgCAJACQAKADAAADQAAADgKADQgJADgOgBQgMABgJgDQgLgDAAgDg");
	this.shape_178.setTransform(72.8,61.8);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#1A1A1A").s().p("AgVAGQgLgDAAgDQABgDAJgDQAkgCAJACQAKADAAADQAAADgKADQgJADgOgBIgDAAQgLAAgHgCg");
	this.shape_179.setTransform(72.8,61.8);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f().s("#1A1A1A").ss(1,1,1).p("AggAAQAAgEAKgCQAkgCAJACQAKADAAADQAAADgKACQgJADgOAAQgMAAgKgCQgKgEAAgCg");
	this.shape_180.setTransform(72.8,62);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#1A1A1A").s().p("AgVAGQgLgEABgCQAAgEAJgCQAkgCAJACQAJADAAADQAAADgJACQgJADgOAAIgDAAQgLAAgHgCg");
	this.shape_181.setTransform(72.8,62);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f().s("#1A1A1A").ss(1,1,1).p("AggAAQABgEAJgCQAjgCAKACQAKADAAADQAAADgKACQgJADgOAAQgMAAgKgCQgKgEAAgCg");
	this.shape_182.setTransform(72.8,62.1);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#1A1A1A").s().p("AgWAGQgJgEgBgCQABgEAJgCQAjgCAKACQAKADgBADQABADgKACQgJADgOAAIgDAAQgLAAgIgCg");
	this.shape_183.setTransform(72.8,62.1);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#1A1A1A").s().p("AgVAGQgKgEAAgCQAAgEAJgCQAkgCAJACQAKADAAADQAAADgKACQgJADgOAAIgDAAQgLAAgHgCg");
	this.shape_184.setTransform(72.7,62.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_59},{t:this.shape_58}]}).to({state:[{t:this.shape_61,p:{x:72.9,y:61.8}},{t:this.shape_60,p:{x:72.9,y:61.8}}]},1).to({state:[{t:this.shape_63},{t:this.shape_62}]},1).to({state:[{t:this.shape_61,p:{x:73.2,y:60.8}},{t:this.shape_60,p:{x:73.2,y:60.8}}]},1).to({state:[{t:this.shape_65},{t:this.shape_64}]},1).to({state:[{t:this.shape_67},{t:this.shape_66}]},1).to({state:[{t:this.shape_69},{t:this.shape_68,p:{x:73.8,y:59.4}}]},1).to({state:[{t:this.shape_70},{t:this.shape_68,p:{x:74,y:58.9}}]},1).to({state:[{t:this.shape_72},{t:this.shape_71}]},1).to({state:[{t:this.shape_74},{t:this.shape_73}]},1).to({state:[{t:this.shape_76},{t:this.shape_75}]},1).to({state:[{t:this.shape_78},{t:this.shape_77,p:{x:74.7,y:57}}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_81},{t:this.shape_77,p:{x:75,y:56.1}}]},1).to({state:[{t:this.shape_83},{t:this.shape_82}]},1).to({state:[{t:this.shape_85},{t:this.shape_84}]},1).to({state:[{t:this.shape_87},{t:this.shape_86}]},1).to({state:[{t:this.shape_89},{t:this.shape_88}]},1).to({state:[{t:this.shape_91},{t:this.shape_90}]},1).to({state:[{t:this.shape_93},{t:this.shape_92}]},1).to({state:[{t:this.shape_95},{t:this.shape_94}]},1).to({state:[{t:this.shape_97},{t:this.shape_96}]},1).to({state:[{t:this.shape_99},{t:this.shape_98}]},1).to({state:[{t:this.shape_101},{t:this.shape_100}]},1).to({state:[{t:this.shape_103},{t:this.shape_102}]},1).to({state:[{t:this.shape_105},{t:this.shape_104}]},1).to({state:[{t:this.shape_107},{t:this.shape_106}]},1).to({state:[{t:this.shape_109},{t:this.shape_108}]},1).to({state:[{t:this.shape_111},{t:this.shape_110}]},1).to({state:[{t:this.shape_113},{t:this.shape_112}]},1).to({state:[{t:this.shape_115},{t:this.shape_114}]},1).to({state:[{t:this.shape_117},{t:this.shape_116}]},1).to({state:[{t:this.shape_119},{t:this.shape_118}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_123},{t:this.shape_122}]},1).to({state:[{t:this.shape_125},{t:this.shape_124}]},1).to({state:[{t:this.shape_127},{t:this.shape_126}]},1).to({state:[{t:this.shape_129},{t:this.shape_128}]},1).to({state:[{t:this.shape_131},{t:this.shape_130}]},1).to({state:[{t:this.shape_133},{t:this.shape_132}]},1).to({state:[{t:this.shape_135},{t:this.shape_134}]},1).to({state:[{t:this.shape_137},{t:this.shape_136}]},1).to({state:[{t:this.shape_139},{t:this.shape_138}]},1).to({state:[{t:this.shape_141,p:{x:75.7,y:51.8}},{t:this.shape_140,p:{x:75.7,y:51.8}}]},1).to({state:[{t:this.shape_141,p:{x:75.6,y:51.9}},{t:this.shape_140,p:{x:75.6,y:51.9}}]},1).to({state:[{t:this.shape_143},{t:this.shape_142}]},1).to({state:[{t:this.shape_145},{t:this.shape_144}]},1).to({state:[{t:this.shape_147},{t:this.shape_146}]},1).to({state:[{t:this.shape_149},{t:this.shape_148}]},1).to({state:[{t:this.shape_151},{t:this.shape_150}]},1).to({state:[{t:this.shape_153},{t:this.shape_152}]},1).to({state:[{t:this.shape_155},{t:this.shape_154}]},1).to({state:[{t:this.shape_157},{t:this.shape_156}]},1).to({state:[{t:this.shape_159},{t:this.shape_158}]},1).to({state:[{t:this.shape_161},{t:this.shape_160}]},1).to({state:[{t:this.shape_163},{t:this.shape_162}]},1).to({state:[{t:this.shape_165},{t:this.shape_164}]},1).to({state:[{t:this.shape_167},{t:this.shape_166}]},1).to({state:[{t:this.shape_169},{t:this.shape_168}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_173},{t:this.shape_172}]},1).to({state:[{t:this.shape_175},{t:this.shape_174}]},1).to({state:[{t:this.shape_177},{t:this.shape_176,p:{x:72.9,y:61.6}}]},1).to({state:[{t:this.shape_179},{t:this.shape_178}]},1).to({state:[{t:this.shape_181},{t:this.shape_180}]},1).to({state:[{t:this.shape_183},{t:this.shape_182}]},1).to({state:[{t:this.shape_184,p:{y:62.2}},{t:this.shape_176,p:{x:72.7,y:62.2}}]},1).to({state:[{t:this.shape_184,p:{y:62.3}},{t:this.shape_176,p:{x:72.7,y:62.3}}]},1).to({state:[{t:this.shape_59},{t:this.shape_58}]},1).wait(7));

	this.MCdial1 = new lib.MCdial1();
	this.MCdial1.parent = this;
	this.MCdial1.setTransform(88,125.2,1,1,-15,0,0,11.3,8.7);

	this.timeline.addTween(cjs.Tween.get(this.MCdial1).wait(5).to({regX:13.2,regY:6.3,rotation:-14.9,x:89.2,y:122.4},0).wait(1).to({rotation:-14.8,y:122.3},0).wait(1).to({rotation:-14.5,y:122.2},0).wait(1).to({rotation:-14,x:89.1,y:122},0).wait(1).to({rotation:-13.3,x:89.2,y:121.8},0).wait(1).to({rotation:-12.4,y:121.5},0).wait(1).to({rotation:-11.3,y:121.1},0).wait(1).to({rotation:-9.8,x:89.1,y:120.6},0).wait(1).to({rotation:-8,y:120},0).wait(1).to({rotation:-5.8,y:119.3},0).wait(1).to({rotation:-3.5,y:118.6},0).wait(1).to({rotation:-1,x:89,y:117.8},0).wait(1).to({rotation:1.5,x:88.9,y:117},0).wait(1).to({rotation:3.8,y:116.2},0).wait(1).to({rotation:5.9,x:88.8,y:115.5},0).wait(1).to({rotation:7.7,y:114.9},0).wait(1).to({rotation:9.4,y:114.4},0).wait(1).to({rotation:10.8,x:88.7,y:114},0).wait(1).to({rotation:12.1,y:113.5},0).wait(1).to({rotation:13.2,x:88.6,y:113.2},0).wait(1).to({rotation:14.2,y:112.9},0).wait(1).to({rotation:15.1,y:112.7},0).wait(1).to({rotation:15.9,y:112.4},0).wait(1).to({rotation:16.5,x:88.5,y:112.2},0).wait(1).to({rotation:17.1,y:112},0).wait(1).to({rotation:17.7,x:88.6,y:111.8},0).wait(1).to({rotation:18.1,x:88.5,y:111.7},0).wait(1).to({rotation:18.5,y:111.5},0).wait(1).to({rotation:18.9,y:111.4},0).wait(1).to({rotation:19.2},0).wait(1).to({rotation:19.4,y:111.3},0).wait(1).to({rotation:19.6,y:111.2},0).wait(1).to({rotation:19.8,x:88.4},0).wait(1).to({rotation:20,y:111.1},0).wait(1).to({rotation:20.1,x:88.5},0).wait(1).to({y:111},0).wait(1).to({rotation:20.2},0).wait(1).to({regX:11.2,regY:8.7,x:85.8,y:112.7},0).wait(2).to({regX:13.2,regY:6.3,rotation:20.1,x:88.5,y:111.2},0).wait(1).to({rotation:19.7,y:111.3},0).wait(1).to({rotation:19.1,y:111.4},0).wait(1).to({rotation:18.1,x:88.6,y:111.8},0).wait(1).to({rotation:16.8,x:88.7,y:112.2},0).wait(1).to({rotation:14.9,y:112.8},0).wait(1).to({rotation:12.6,x:88.8,y:113.5},0).wait(1).to({rotation:10,y:114.3},0).wait(1).to({rotation:7.2,x:88.9,y:115.2},0).wait(1).to({rotation:4.4,y:116.1},0).wait(1).to({rotation:1.7,x:89,y:116.9},0).wait(1).to({rotation:-0.6,x:89.1,y:117.7},0).wait(1).to({rotation:-2.7,y:118.3},0).wait(1).to({rotation:-4.6,y:119},0).wait(1).to({rotation:-6.2,x:89.2,y:119.5},0).wait(1).to({rotation:-7.6,y:119.9},0).wait(1).to({rotation:-8.8,y:120.4},0).wait(1).to({rotation:-9.9,y:120.7},0).wait(1).to({rotation:-10.8,y:121},0).wait(1).to({rotation:-11.6,x:89.3,y:121.2},0).wait(1).to({rotation:-12.3,y:121.5},0).wait(1).to({rotation:-12.9,x:89.2,y:121.7},0).wait(1).to({rotation:-13.4,x:89.3,y:121.9},0).wait(1).to({rotation:-13.8,y:122},0).wait(1).to({rotation:-14.1,y:122.1},0).wait(1).to({rotation:-14.4,y:122.2},0).wait(1).to({rotation:-14.6,y:122.3},0).wait(1).to({rotation:-14.8,y:122.4},0).wait(1).to({rotation:-14.9},0).wait(1).to({rotation:-15},0).wait(1).to({regX:11.3,regY:8.7,x:88,y:125.2},0).wait(1));

	this.instance = new lib.MCshade();
	this.instance.parent = this;
	this.instance.setTransform(56.8,130.7,1.549,0.248,0,0,0,9.3,8.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({regY:9.4,scaleX:1.55,y:130.8},0).wait(1).to({scaleX:1.55},0).wait(1).to({scaleX:1.54,scaleY:0.25,x:56.9},0).wait(1).to({scaleX:1.53,scaleY:0.25,x:57},0).wait(1).to({scaleX:1.52,scaleY:0.24,x:57.2,y:130.9},0).wait(1).to({scaleX:1.5,scaleY:0.24,x:57.4},0).wait(1).to({scaleX:1.48,scaleY:0.24,x:57.7,y:131},0).wait(1).to({scaleX:1.45,scaleY:0.23,x:58.1,y:131.2},0).wait(1).to({scaleX:1.41,scaleY:0.23,x:58.5},0).wait(1).to({scaleX:1.37,scaleY:0.22,x:59,y:131.4},0).wait(1).to({scaleX:1.33,scaleY:0.21,x:59.6,y:131.6},0).wait(1).to({scaleX:1.29,scaleY:0.21,x:60,y:131.7},0).wait(1).to({scaleX:1.25,scaleY:0.2,x:60.5,y:131.8},0).wait(1).to({scaleX:1.22,scaleY:0.2,x:60.9,y:131.9},0).wait(1).to({scaleX:1.19,scaleY:0.19,x:61.3,y:132},0).wait(1).to({scaleX:1.16,scaleY:0.19,x:61.6,y:132.1},0).wait(1).to({scaleX:1.14,scaleY:0.18,x:61.9,y:132.2},0).wait(1).to({scaleX:1.12,scaleY:0.18,x:62.1,y:132.3},0).wait(1).to({scaleX:1.11,scaleY:0.18,x:62.3},0).wait(1).to({scaleX:1.09,scaleY:0.18,x:62.5,y:132.4},0).wait(1).to({scaleX:1.08,scaleY:0.17,x:62.7},0).wait(1).to({regY:8.8,scaleX:1.07,scaleY:0.17,x:62.9},0).wait(1).to({regY:9.4,scaleX:0.91,scaleY:0.15,x:63.4,y:132.5},0).wait(1).to({scaleX:0.77,scaleY:0.12,x:63.9,y:132.6},0).wait(1).to({scaleX:0.65,scaleY:0.1,x:64.3,y:132.7},0).wait(1).to({scaleX:0.55,scaleY:0.09,x:64.7,y:132.8},0).wait(1).to({scaleX:0.47,scaleY:0.08,x:65},0).wait(1).to({scaleX:0.4,scaleY:0.06,x:65.2,y:132.9},0).wait(1).to({scaleX:0.34,scaleY:0.05,x:65.5},0).wait(1).to({regX:9.2,regY:8.5,scaleX:0.29,scaleY:0.05,x:65.6},0).to({regX:9.4,regY:9.3,scaleX:1.58,scaleY:0.08,x:60.5,y:133.5},7).wait(1).to({regX:9.3,regY:9.4,x:60.2,y:133.4},0).wait(1).to({scaleX:1.58,scaleY:0.08},0).wait(1).to({scaleY:0.08,x:60.1},0).wait(1).to({scaleX:1.58,scaleY:0.09,y:133.3},0).wait(1).to({scaleX:1.58,scaleY:0.09,x:59.9,y:133.2},0).wait(1).to({scaleX:1.57,scaleY:0.1,x:59.7,y:133},0).wait(1).to({scaleX:1.57,scaleY:0.11,x:59.5,y:132.9},0).wait(1).to({scaleX:1.57,scaleY:0.13,x:59.2,y:132.7},0).wait(1).to({scaleX:1.57,scaleY:0.14,x:58.9,y:132.4},0).wait(1).to({scaleX:1.57,scaleY:0.15,x:58.6,y:132.2},0).wait(1).to({scaleX:1.56,scaleY:0.17,x:58.4,y:132},0).wait(1).to({scaleX:1.56,scaleY:0.18,x:58.1,y:131.8},0).wait(1).to({scaleX:1.56,scaleY:0.19,x:57.9,y:131.6},0).wait(1).to({scaleX:1.56,scaleY:0.2,x:57.7,y:131.5},0).wait(1).to({scaleX:1.56,scaleY:0.21,x:57.5,y:131.4},0).wait(1).to({scaleX:1.56,scaleY:0.21,x:57.4,y:131.3},0).wait(1).to({scaleX:1.55,scaleY:0.22,x:57.2,y:131.2},0).wait(1).to({scaleX:1.55,scaleY:0.22,x:57.1,y:131.1},0).wait(1).to({scaleX:1.55,scaleY:0.23,y:131},0).wait(1).to({scaleY:0.23,x:57},0).wait(1).to({scaleX:1.55,scaleY:0.24,x:56.9,y:130.9},0).wait(1).to({scaleY:0.24,x:56.8},0).wait(1).to({scaleX:1.55,scaleY:0.24,y:130.8},0).wait(1).to({scaleY:0.24,x:56.7},0).wait(1).to({scaleX:1.55,scaleY:0.24},0).wait(1).to({scaleY:0.25,y:130.7},0).wait(1).to({scaleY:0.25,x:56.6},0).wait(2).to({scaleY:0.25},0).wait(2).to({regY:8.8,x:56.8},0).wait(4));

	this.instance_1 = new lib.MCshade();
	this.instance_1.parent = this;
	this.instance_1.setTransform(89,141,1.698,0.227,0,0,0,9.3,9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({regY:9.4,scaleX:1.7,y:141.1},0).wait(1).to({scaleX:1.7},0).wait(1).to({scaleX:1.7},0).wait(1).to({scaleX:1.69},0).wait(1).to({scaleX:1.69,scaleY:0.23,y:141},0).wait(1).to({scaleX:1.68,scaleY:0.23},0).wait(1).to({scaleX:1.68,scaleY:0.22},0).wait(1).to({scaleX:1.67,scaleY:0.22},0).wait(1).to({scaleX:1.66,scaleY:0.22},0).wait(1).to({scaleX:1.64,scaleY:0.22},0).wait(1).to({scaleX:1.63,scaleY:0.22},0).wait(1).to({scaleX:1.62,scaleY:0.22,x:88.9},0).wait(1).to({scaleX:1.6,scaleY:0.21,x:89},0).wait(1).to({scaleX:1.59,scaleY:0.21,x:88.9},0).wait(1).to({scaleX:1.58,scaleY:0.21},0).wait(1).to({scaleX:1.56,scaleY:0.21},0).wait(1).to({scaleX:1.55,scaleY:0.21},0).wait(1).to({scaleX:1.55,scaleY:0.21},0).wait(1).to({scaleX:1.54,scaleY:0.21},0).wait(1).to({scaleX:1.53,scaleY:0.21,y:141.1},0).wait(1).to({scaleX:1.53,scaleY:0.2,y:141},0).wait(1).to({scaleX:1.52},0).wait(1).to({scaleX:1.52,scaleY:0.2},0).wait(1).to({scaleX:1.51,scaleY:0.2},0).wait(1).to({scaleX:1.51},0).wait(1).to({scaleX:1.51},0).wait(1).to({scaleX:1.5,scaleY:0.2},0).wait(1).to({scaleX:1.5},0).wait(1).to({scaleX:1.5},0).wait(1).to({scaleX:1.5,scaleY:0.2},0).wait(1).to({scaleX:1.49},0).wait(1).to({scaleX:1.49},0).wait(1).to({scaleX:1.49},0).wait(1).to({scaleX:1.49},0).wait(2).to({scaleX:1.49},0).wait(1).to({y:141.1},0).wait(1).to({regY:8.8,x:89.1,y:141},0).wait(2).to({regY:9.4,scaleX:1.49,x:89,y:141.1},0).wait(1).to({scaleX:1.49,x:89.1},0).wait(1).to({scaleX:1.5,x:89},0).wait(1).to({scaleX:1.5,scaleY:0.2},0).wait(1).to({scaleX:1.51,scaleY:0.2,x:89.1},0).wait(1).to({scaleX:1.52,scaleY:0.2},0).wait(1).to({scaleX:1.54,scaleY:0.21},0).wait(1).to({scaleX:1.55,scaleY:0.21},0).wait(1).to({scaleX:1.57,scaleY:0.21},0).wait(1).to({scaleX:1.58,scaleY:0.21},0).wait(1).to({scaleX:1.6,scaleY:0.21},0).wait(1).to({scaleX:1.61,scaleY:0.22},0).wait(1).to({scaleX:1.63,scaleY:0.22},0).wait(1).to({scaleX:1.64,scaleY:0.22},0).wait(1).to({scaleX:1.65,scaleY:0.22},0).wait(1).to({scaleX:1.65,scaleY:0.22,x:89.2},0).wait(1).to({scaleX:1.66,x:89.1},0).wait(1).to({scaleX:1.67,scaleY:0.22},0).wait(1).to({scaleX:1.67,scaleY:0.22},0).wait(1).to({scaleX:1.68,scaleY:0.23},0).wait(1).to({scaleX:1.68,x:89.2},0).wait(1).to({scaleX:1.69,scaleY:0.23,x:89.1},0).wait(1).to({scaleX:1.69,x:89.2},0).wait(1).to({scaleX:1.69,x:89.1},0).wait(1).to({scaleX:1.69,scaleY:0.23,x:89.2},0).wait(1).to({scaleX:1.69},0).wait(1).to({scaleX:1.7,x:89.1},0).wait(1).to({scaleX:1.7,x:89.2},0).wait(1).to({scaleX:1.7},0).wait(1).to({scaleX:1.7},0).wait(1).to({regY:9,x:89,y:141},0).wait(1));

	this.instance_2 = new lib.MCufo("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(73.9,40.1,1,1,0,0,0,41.5,25.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:41.7,regY:25.7,rotation:-4.2,x:74.1,y:30.2,startPosition:26},26).wait(13).to({startPosition:39},0).wait(1).to({regX:41.4,regY:25.9,x:73.8,y:30.4,startPosition:40},0).wait(1).to({y:30.5,startPosition:41},0).wait(1).to({rotation:-4.1,y:30.7,startPosition:42},0).wait(1).to({rotation:-3.9,y:31,startPosition:43},0).wait(1).to({rotation:-3.7,y:31.5,startPosition:44},0).wait(1).to({rotation:-3.5,x:73.7,y:32.1,startPosition:45},0).wait(1).to({rotation:-3.2,x:73.8,y:32.8,startPosition:46},0).wait(1).to({rotation:-2.8,x:73.7,y:33.6,startPosition:47},0).wait(1).to({rotation:-2.4,y:34.5,startPosition:48},0).wait(1).to({rotation:-2.1,y:35.3,startPosition:49},0).wait(1).to({rotation:-1.8,y:36.1,startPosition:50},0).wait(1).to({rotation:-1.5,y:36.7,startPosition:51},0).wait(1).to({rotation:-1.3,x:73.6,y:37.3,startPosition:52},0).wait(1).to({rotation:-1.1,x:73.7,y:37.8,startPosition:53},0).wait(1).to({rotation:-0.9,x:73.6,y:38.2,startPosition:54},0).wait(1).to({rotation:-0.7,x:73.7,y:38.6,startPosition:55},0).wait(1).to({rotation:-0.6,x:73.6,y:38.8,startPosition:56},0).wait(1).to({rotation:-0.5,y:39.1,startPosition:57},0).wait(1).to({rotation:-0.4,y:39.3,startPosition:58},0).wait(1).to({rotation:-0.3,y:39.6,startPosition:59},0).wait(1).to({rotation:-0.2,y:39.7,startPosition:60},0).wait(1).to({y:39.9,startPosition:61},0).wait(1).to({rotation:-0.1,y:40,startPosition:62},0).wait(1).to({y:40.1,startPosition:63},0).wait(1).to({startPosition:64},0).wait(1).to({rotation:0,y:40.2,startPosition:65},0).wait(1).to({startPosition:66},0).wait(1).to({startPosition:67},0).wait(1).to({regX:41.5,regY:25.6,x:73.9,y:40.1,startPosition:68},0).wait(7));

	this.MCstartPurple = new lib.MCstartPurple();
	this.MCstartPurple.parent = this;
	this.MCstartPurple.setTransform(110.8,16.8,1,1,0,0,0,2.9,2.9);

	this.timeline.addTween(cjs.Tween.get(this.MCstartPurple).wait(75));

	this.MCstartPurple_1 = new lib.MCstartPurple();
	this.MCstartPurple_1.parent = this;
	this.MCstartPurple_1.setTransform(9.8,70.8,1,1,0,0,0,2.9,2.9);

	this.MCstartPurple_2 = new lib.MCstartPurple();
	this.MCstartPurple_2.parent = this;
	this.MCstartPurple_2.setTransform(126.7,94.6,1,1,0,0,0,2.9,2.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.MCstartPurple_2},{t:this.MCstartPurple_1}]}).wait(75));

	this.MCcirclev = new lib.MCcircle();
	this.MCcirclev.parent = this;
	this.MCcirclev.setTransform(135.3,83,0.541,0.541,0,0,0,3.5,3.5);

	this.timeline.addTween(cjs.Tween.get(this.MCcirclev).wait(75));

	this.MCcirclev_1 = new lib.MCcircle();
	this.MCcirclev_1.parent = this;
	this.MCcirclev_1.setTransform(21.6,89.6,0.541,0.541,0,0,0,3.5,3.5);

	this.timeline.addTween(cjs.Tween.get(this.MCcirclev_1).wait(75));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.1,150,151.2);


(lib.CANVASmessengererrorgrey19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.MCufoAnim200 = new lib.MCufoAnim();
	this.MCufoAnim200.parent = this;
	this.MCufoAnim200.setTransform(38.9,45.1,1,1,0,0,0,38.9,45.1);

	this.timeline.addTween(cjs.Tween.get(this.MCufoAnim200).wait(75));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(82,82.2,129.9,137.6);
lib.properties = {
	id: '802B57B260A3A942AA025A159804F52E',
	width: 150,
	height: 150,
	fps: 30,
	opacity: 1.00,
	manifest: [],
	preloads: []
};




(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['802B57B260A3A942AA025A159804F52E'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;

  var comp = AdobeAn.getComposition("802B57B260A3A942AA025A159804F52E");
  var lib = comp.getLibrary();
  return {
    create: function() { return new lib.CANVASmessengererrorgrey19; },
    properties: lib.properties
  };
})(createjs);

function initDesktop(namespace) {
    'use strict';
    const REDIRECT_IF_FEATURE_MISSING = 'https://opera.com';
    const ERROR_TIMEOUT = 15000;
    let operaTouchBackground = false;
    window.qrcodeTimeoutLimit = 2 * 60 * 1000;
    function updateQRCode() {
        if (document.visibilityState === 'visible' &&
                window.currentPage === 'page-pairing' &&
                (window.qrcodeGeneratedTimestamp + window.qrcodeTimeoutLimit) <= new Date().getTime()) {
            void 0;
            namespace.pairing.clearQrCode();
            window.operaTouchBackground.port.postMessage({type: 'GET_PAIRING_TOKEN'});
        }
    }
    window.updateQRCode = updateQRCode;
    document.addEventListener('visibilitychange', updateQRCode);

    document.body.classList.add('desktop');

    function showQrCode(url, ttl) {
        ttl = parseInt(ttl * 1000, 10);
        if (ttl > 0) {
            window.qrcodeTimeoutLimit = ttl;
        }
        window.qrcodeGeneratedTimestamp = new Date().getTime();
        const containers = ['qrcode'];

        containers.forEach(function (container) {
            document.getElementById(container).innerHTML = '';
            window.qrcode = new QRCode(container, {
                text: url,
                width: 360,
                height: 360,
                colorDark: '#000000',
                colorLight: '#ffffff',
                correctLevel: QRCode.CorrectLevel.H
            });
            window.qrcode['_' + 'el'].title = '';
        });
        setTimeout(updateQRCode, window.qrcodeTimeoutLimit);
    }
    function showTextCode(texttoken, ttl) {
        namespace.pairing.showTextcode(texttoken, ttl);
    }

    function resetEverything() {
        location.reload();
    }

    function redirectIfAPIMissing() {
        window.location = REDIRECT_IF_FEATURE_MISSING;
    }

    function setupWelcomePage() {
        const lang = navigator.language.replace(/-.*/, '');
        document.querySelector('#page-welcome-download-google').src =
                `https://play.google.com/intl/en_us/badges/images/generic/${lang}_badge_web_generic.png`;
        let operaTouchLink = document.querySelector('#page-welcome-step-1 a');
    }

    function showResetDialog() {
        namespace.dialog.open(
            translate.t('reset-device-title'),
            translate.t('reset-device-description'),
            [{
                label: translate.t('settings-connecteddevices-device-disconnect-confirm-button-cancel'),
                class: '',
                onclick: namespace.dialog.close
            }, {
                label: translate.t('error-reset'),
                class: 'primary',
                onclick: function (e) {
                    e.target.disabled = true;
                    e.target.style.opacity = 0.5;
                    operaTouchBackground.port.postMessage({type: 'RESET_EVERYTHING'});
                    namespace.dialog.close();
                    setTimeout(() => location.reload(), 1000);
                }
            }]
        );
    }

    function setupErrorPage() {
        document.querySelector('.error-page-secondary-button-light')
            .addEventListener('click', showResetDialog);
        document.querySelector('.error-page-primary-button-light')
            .addEventListener('click', () => location.reload());
        document.querySelector('.error-page-animation')
            .appendChild(createjsAnimator.createAnimationElement(CREATEJS_ANIM_MESSENGER_ERROR, false));
    }

    function OperaTouchBackground() {
        if (!window.chrome || !window.chrome.runtime ||
                !window.chrome.runtime.connect) {
            redirectIfAPIMissing();
        }

        setupWelcomePage();
        setupErrorPage();
        this.errorPageTimeout =
                setTimeout(() => showPage('error-page'), ERROR_TIMEOUT);
        this.port = chrome.runtime.connect('ebongfbmlegepmkkdjlnlmdcmckedlal');
        this.port.onMessage.addListener(this.handleMessage.bind(this));
        this.port.onDisconnect.addListener(redirectIfAPIMissing);
        this.firstId = 0;

        if (location.search.startsWith('?reset')) {
            this.port.postMessage({type: 'RESET_EVERYTHING'});
            window.location = location.toString().replace(location.search, '');
        }
        let that = this;
        function ignoreWhat() {
            that.port.postMessage({type: 'HOSTED_APP_SHOWN'});
        }

        window.addEventListener('focus', ignoreWhat);
        window.addEventListener('blur', ignoreWhat);
    }

    Object.assign(OperaTouchBackground.prototype, {
        getNewMessages: function () {
            if (window.isLoadingChatMessages) {
                this.retryGetNewMessages = true;
                return;
            }
            window.isLoadingChatMessages = true;
            this.port.postMessage({
                type: 'GET_MESSAGES',
                messageId: 'add-end',
                value: {order: 'asc', from_id: this.lastId, limit: 10}
            });
        },
        handleMessage: function (msg) {

            void 0;
            let deviceTmp;
            let oneApiService = namespace.oneApiService;
            let chat = namespace.chat;
            let that = this;
            switch (msg.type) {
            case 'INITIALIZATION_OK':
                this.port.postMessage({type: 'HOSTED_APP_SHOWN'});

                window.clientVersion = +msg.client_version;
                if (clientVersion >=2) {
                    document.body.classList.add('transferFiles');
                    chat.setupFilesDragDrop();
                }
                if (msg.value) {
                    window.clientId = msg.value;
                    this.clientId = window.clientId;  
                    this.port.postMessage({type: 'GET_DEVICES', messageId: 'init-devices'});
                } else {
                    clearTimeout(operaTouchBackground.errorPageTimeout);
                    showPage('page-welcome-new');
                }
                break;
            case 'GET_PAIRING_TOKEN_OK':
                void 0;
                window.clientId = msg.value.id;
                this.clientId = window.clientId;
                switch (msg.messageId) {
                case 'pairing-text':
                    showTextCode(msg.value.token, msg.value.ttl);
                    break;
                default:
                    const url = msg.value.type ?
                        msg.value.url : `neonid://${msg.value.token}`;
                    showQrCode(url, msg.value.ttl);
                    break;
                }
                break;
            case 'INITIALIZATION_ERROR':
            case 'GET_DEVICES_ERROR':
                showPage('error-page');
                break;
            case 'GET_DEVICES_OK':
                clearTimeout(operaTouchBackground.errorPageTimeout);
                if (msg.value && msg.value.devices && msg.value.devices.length > 0) {  
                    if (!msg.value.devices) {
                        msg.value.devices = [];
                    }
                    msg.value.devices.push(window.pair_new_device_mock);
                    namespace.settings.setDevices(msg.value.devices);
                    if (!this.lastId) {
                        window.isLoadingChatMessages = true;
                        this.port.postMessage({
                            type: 'GET_MESSAGES',
                            messageId: 'init',
                            value: {order: 'desc', limit: namespace.config.pageSize}
                        });  
                    }
                    if (msg.messageId === 'init-devices') {
                        showPage('page-chat');
                    }
                } else {
                    showPage('page-welcome-new');
                }
                break;
            case 'GET_MESSAGES_OK':
                void 0;
                window.isLoadingChatMessages = false;
                document.getElementById('load-prev').style.display = 'none';

                if (msg.value) {

                    switch (msg.messageId) {
                    case 'init':
                        this.prevRemaining = msg.value.changes_remaining;
                        break;
                    case 'add-begin':
                        this.prevRemaining = msg.value.changes_remaining;
                        break;
                    case 'add-end':
                        this.endRemaining = msg.value.changes_remaining;
                        break;
                    default:
                        void 0;
                        break;
                    }
                }

                if (msg.value) {
                    if (msg.value.messages && msg.value.messages.length > 0) {
                        msg.value.messages.sort(function (a, b) {
                            return a.id - b.id;
                        });
                        switch (msg.messageId) {
                        case 'init':
                            this.firstId = msg.value.messages[0].id;
                            this.lastId =
                                    msg.value.messages[msg.value.messages.length - 1].id;
                            break;
                        case 'add-begin':
                            this.firstId = msg.value.messages[0].id;
                            break;
                        case 'add-end':
                            this.lastId =
                                    msg.value.messages[msg.value.messages.length - 1].id;
                            break;
                        default:
                            void 0;
                            break;
                        }
                        chat.addMessages(msg.value.messages, 'add-begin' === msg.messageId || 'init' === msg.messageId);
                    }
                    this.changesRemaining = msg.value.changes_remaining;
                }



                chat.loadPrevIfNeeded();

                if (msg.messageId === 'add-end' && this.changesRemaining) {
                    this.retryGetNewMessages = true;
                }

                if (this.retryGetNewMessages) {
                    this.retryGetNewMessages = false;
                    this.getNewMessages();
                }
                break;

            case 'CREATE_MESSAGE_OK':
                if (msg.value && msg.value.id) {
                    void 0;
                    oneApiService.onSendMessageSuccess(msg.messageId, msg.value.id);
                } else {
                    void 0;
                    oneApiService.onSendMessageError(msg.messageId);
                }
                break;
            case 'CREATE_MESSAGE_ERROR':
                void 0;
                oneApiService.onSendMessageError(msg.messageId);
                break;
            case 'DELETE_MESSAGE_ERROR':
                oneApiService.onDeleteMessageError(msg.messageId);
                break;
            case 'NEW_MESSAGE_AVAILABLE':
                this.getNewMessages();
                break;
            case 'FCM_MESSAGE_DELETED':
                chat.onDeleteMessage(msg.value.id);
                break;
            case 'DEVICES_CONNECTING_STARTED':
                showPage('page-pairing-progress');
                namespace.pairing.pairingStart();
                this.pairingTimeout = setTimeout(function () {
                    namespace.pairing.pairingFail();
                    setTimeout(function () {
                        that.port.postMessage({type: 'GET_DEVICES', messageId: 'init-devices'});
                    }, 3000);
                }, 15 * 1000);
                window.newGroup = msg.newGroup;
                break;
            case 'DEVICES_CONNECTED':
                showPage('page-pairing-progress');
                deviceTmp = msg.value;
                window.device_connected_message_mock.deviceInfo = deviceTmp;
                window.device_connected_message_mock.description = `<img src='${namespace.chat.getKindIconUrl(deviceTmp.kind, 'green')}'> ${translate.t('chat-message-device-connected', 'Device $extra1 connected', deviceTmp.name)}`;
                window.device_connected_message_mock.deviceKind = deviceTmp.kind;
                window.device_connected_message_mock.role = 'default';

                clearTimeout(this.pairingTimeout);
                namespace.pairing.pairingSuccess();
                setTimeout(function () {
                    showPage('page-chat');
                }, 1000);
                this.port.postMessage({type: 'GET_DEVICES', messageId: 'rem-devices-connected'});

                break;
            case 'GET_PARTIAL_URL_OK':
                window.onLinkDiscovered(msg);
                void 0;
                break;
            case 'SEND_FILE_OK':
                if (msg.value && msg.value.id) {
                    void 0;
                    oneApiService.onSendFileSuccess(msg.messageId, msg.value.id, msg.value);
                } else {
                    void 0;
                    oneApiService.onSendFileError(msg.messageId);
                }
                break;
            case 'SEND_FILE_PROGRESS':
                oneApiService.onSendFileProgress(msg.messageId, msg.loaded, msg.total);
                break;
            case 'SEND_FILE_ERROR':
                void 0;
                oneApiService.onSendFileError(msg.messageId, msg.errorValue);
                break;
            case 'DOWNLOAD_FILE_PROGRESS':
                oneApiService.onDownloadFileProgress(msg.messageId, msg.loaded, msg.total);
                break;
            case 'DOWNLOAD_FILE_OK':
                oneApiService.onDownloadFileSuccess(msg.messageId, msg.value.localFileName, msg.requestData);
                break;
            case 'DOWNLOAD_FILE_ERROR':
                oneApiService.onDownloadFileError(msg.messageId, msg.errorValue);
                break;
            case 'IS_CURRENTLY_DOWNLOADING_OK':
                oneApiService.onIsCurrentlyDownloading(msg.messageId, msg.value);
                break;
            case 'IS_CURRENTLY_UPLOADING_OK':
                oneApiService.onIsCurrentlyUploading(msg.messageId, msg.value);
                break;
            case 'GET_THUMBNAIL_IMAGE_OK':
                oneApiService.onFilePreviewResult(msg.messageId, msg.value);
                break;
            case 'FCM_DELETED_ALL_MESSAGES':
                document.getElementById('clear-all-data').disabled = false;
                document.getElementById('clear-all-data').style.opacity = 1;
                namespace.chat.clearChat();
                break;
            case 'RESET_EVERYTHING_OK':
                localStorage.setItem('welcome-message-sent', 'false');
                resetEverything();
                break;
            case 'FCM_DEVICE_DELETED':
                void 0;
                deviceTmp = getDevice(msg.value.id);
                window.device_disconnected_message_mock.deviceInfo = deviceTmp;
                window.device_disconnected_message_mock.description = `<img src='${namespace.chat.getKindIconUrl(deviceTmp.kind, 'red')}'> ${translate.t('chat-message-device-disconnected', 'Device $extra1 disconnected', deviceTmp.name)}`;
                window.device_disconnected_message_mock.deviceKind = msg.value.kind;
                window.device_disconnected_message_mock.role = 'default';

                deleteDevice(msg.value.id);
                break;

            case 'IS_DARK_THEME_ENABLED_OK':
                darkThemeSwitch(msg.value)
                break;
            case 'PREF_CHANGED_OK':
                handleGXPrefChange(msg)
                break;
            case 'GET_PALETTE_OK':
                setGXPalette(msg.value)
                break;
        }
        }



    });

    lottie.loadAnimation({
        container: document.getElementById('lottie-welcome-container'),
        path: `${FLOW_OPERA_CDN}img/flow-lotties${FLOW_BUILD_ID}.json`, 
        renderer: 'svg',
        loop: true,
        autoplay: true
    });
    operaTouchBackground = new OperaTouchBackground();
    window.operaTouchBackground = operaTouchBackground;
}

function initNavigation() {
    const naviSettings = [
        {selector: '#welcome-header-connect', page: 'page-pairing'},
        {selector: '#page-welcome-reveal-code', page: 'page-pairing'},
        {selector: '#page-pairing-back', page: 'page-welcome-new'},
        {selector: '#page-pairing-alt-link', page: 'page-pairing-textcode'},
        {selector: '#page-pairing-textcode-back', page: 'page-pairing'},
        {selector: '#settings', page: 'page-settings'},
        {selector: '#go-to-page-chat', page: 'page-chat'}
    ];

    const setNaviListeners = () => {
        naviSettings.forEach(el => {
            document.querySelector(el.selector).addEventListener('click', () => {
                showPage(el.page)
            })
        })
    }

    if (document.readyState === ('complete' || 'interactive')) {
        setNaviListeners();
    } else {
        document.addEventListener('DOMContentLoaded', () => {
            setNaviListeners();
        });
    }
    setNaviListeners();
}


initOneApiService(namespace);
initTranslate(namespace, navigator.language, function () {
    'use strict';
    initChat(namespace);
    initDesktop(namespace);
    initNavigation();
    if (typeof initGXDesktop !== 'undefined') {
        initGXDesktop();
    }
    chat.setupUploadDownloadCache();

});