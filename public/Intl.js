(function(){function sa(a){for(var b=0;b<Y.length;b+=1)if(a.hasOwnProperty(Y[b]))return!1;return!0}function ta(a){for(var b=0;b<Z.length;b+=1)if(a.hasOwnProperty(Z[b]))return!1;return!0}function N(a){if(!ua.test(a)){var b={};b.pattern=a.replace(va,function(a){switch(a.charAt(0)){case "E":case "e":case "c":return b.weekday=T.weekday[a.length-1],"{weekday}";case "G":return b.era=T.era[a.length-1],"{era}";case "y":case "Y":case "u":case "U":return b.year=2===a.length?"2-digit":"numeric","{year}";case "M":case "L":return b.month=
    T.month[a.length-1],"{month}";case "d":return b.day=2===a.length?"2-digit":"numeric","{day}";case "a":return"{ampm}";case "h":case "H":case "k":case "K":return b.hour=2===a.length?"2-digit":"numeric","{hour}";case "m":return b.minute=2===a.length?"2-digit":"numeric","{minute}";case "s":return b.second=2===a.length?"2-digit":"numeric","{second}";case "z":return b.timeZoneName=4>a.length?"short":"long","{timeZoneName}"}});b.pattern=b.pattern.replace(/'([^']*)'/g,function(a,b){return b?b:"'"});-1<b.pattern.indexOf("{ampm}")&&
(b.hour12=!0,b.pattern12=b.pattern,b.pattern=b.pattern.replace("{ampm}","").replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""));return b}}function wa(a){function b(a,b){var c=Array((a.match(/M/g)||[]).length+1),d=Array((a.match(/E/g)||[]).length+1);2<c.length&&(b=b.replace(/(M|L)+/,c.join("$1")));2<d.length&&(b=b.replace(/([Eec])+/,d.join("$1")));return b}var c=a.availableFormats,d=a.timeFormats,g=a.dateFormats;a=a.medium;var f=[],h,e,k,x,q=[],n=[];for(h in c)c.hasOwnProperty(h)&&(e=b(h,c[h]),k=N(e))&&
(f.push(k),sa(k)?n.push(e):ta(k)&&q.push(e));for(c=0;c<q.length;c+=1)for(x=0;x<n.length;x+=1)e=a.replace("{0}",q[c]).replace("{1}",n[x]).replace(/^[,\s]+|[,\s]+$/gi,""),(k=N(e))&&f.push(k);for(h in d)d.hasOwnProperty(h)&&(e=b(h,d[h]),(k=N(e))&&f.push(k));for(h in g)g.hasOwnProperty(h)&&(e=b(h,g[h]),(k=N(e))&&f.push(k));return f}function aa(a){return!xa.test(a)||ya.test(a)||za.test(a)?!1:!0}function Aa(a){a=ba(String(a));return!1===Ba.test(a)?!1:!0}function U(a){if(void 0===a)return new v;var b=new v;
    a="string"===typeof a?[a]:a;a=G(a);for(var c=a.length,d=0;d<c;){var g=String(d);if(g in a){g=a[g];if(null==g||"string"!==typeof g&&"object"!==typeof g)throw new TypeError("String or Object type expected");g=String(g);if(!aa(g))throw new RangeError("'"+g+"' is not a structurally valid language tag");for(var f=g,h=g=void 0,f=f.toLowerCase(),h=f.split("-"),f=1,e=h.length;f<e;f++)if(2===h[f].length)h[f]=h[f].toUpperCase();else if(4===h[f].length)h[f]=h[f].charAt(0).toUpperCase()+h[f].slice(1);else if(1===
        h[f].length&&"x"!==h[f])break;f=u.call(h,"-");(g=f.match(ca))&&1<g.length&&(g.sort(),f=f.replace(RegExp("(?:"+ca.source+")+","i"),u.call(g,"")));t.call(E.tags,f)&&(f=E.tags[f]);h=f.split("-");f=1;for(e=h.length;f<e;f++)t.call(E.subtags,h[f])?h[f]=E.subtags[h[f]]:t.call(E.extLang,h[f])&&(h[f]=E.extLang[h[f]][0],1===f&&E.extLang[h[1]][1]===h[0]&&(h=H.call(h,f++),--e));g=u.call(h,"-");-1===I.call(b,g)&&z.call(b,g)}d++}return b}function da(a,b){for(var c=b;;){if(-1<I.call(a,c))return c;var d=c.lastIndexOf("-");
    if(0>d)break;2<=d&&"-"===c.charAt(d-2)&&(d-=2);c=c.substring(0,d)}}function ea(a,b,c,d,g){if(0===a.length)throw new ReferenceError("No locale data has been provided for this object yet.");for(var f=0,h=b.length,e;f<h&&!e;){var k=b[f],x=String(k).replace(V,"");e=da(a,x);f++}a=new y;void 0!==e?(a["[[locale]]"]=e,String(k)!==String(x)&&(e=k.match(V)[0],k=k.indexOf("-u-"),a["[[extension]]"]=e,a["[[extensionIndex]]"]=k)):a["[[locale]]"]=W;k=a["[[locale]]"];if(t.call(a,"[[extension]]"))var q=a["[[extensionIndex]]"],
    n=String.prototype.split.call(a["[[extension]]"],"-"),m=n.length;e=new y;e["[[dataLocale]]"]=k;x="-u";a=0;for(b=d.length;a<b;){var f=d[a],h=g[k][f],p=h["0"],l="",w=I;if(void 0!==n){var r=w.call(n,f);if(-1!==r)if(r+1<m&&2<n[r+1].length){var r=n[r+1],u=w.call(h,r);-1!==u&&(p=r,l="-"+f+"-"+p)}else u=w(h,"true"),-1!==u&&(p="true")}t.call(c,"[["+f+"]]")&&(r=c["[["+f+"]]"],-1!==w.call(h,r)&&r!==p&&(p=r,l=""));e["[["+f+"]]"]=p;x+=l;a++}2<x.length&&(c=k.substring(0,q),q=k.substring(q),k=c+x+q);e["[[locale]]"]=
    k;return e}function A(a,b,c,d,g){a=a[b];if(void 0!==a){a="boolean"===c?Boolean(a):"string"===c?String(a):a;if(void 0!==d&&-1===I.call(d,a))throw new RangeError("'"+a+"' is not an allowed value for `"+b+"`");return a}return g}function K(a,b,c,d,g){a=a[b];if(void 0!==a){a=Number(a);if(isNaN(a)||a<c||a>d)throw new RangeError("Value is not a number or outside accepted range");return Math.floor(a)}return g}function fa(a,b){return this&&this!==l?ga(G(this),a,b):new l.NumberFormat(a,b)}function ga(a,b,c){var d=
    F(a),g=L();if(!0===d["[[initializedIntlObject]]"])throw new TypeError("`this` object has already been initialized as an Intl object");m(a,"__getInternalProperties",{value:function(a){if(a===O)return d}});d["[[initializedIntlObject]]"]=!0;var f=U(b);c=void 0===c?{}:G(c);var h=new y;b=A(c,"localeMatcher","string",new v("lookup","best fit"),"best fit");h["[[localeMatcher]]"]=b;b=r.NumberFormat["[[localeData]]"];f=ea(r.NumberFormat["[[availableLocales]]"],f,h,r.NumberFormat["[[relevantExtensionKeys]]"],
    b);d["[[locale]]"]=f["[[locale]]"];d["[[numberingSystem]]"]=f["[[nu]]"];d["[[dataLocale]]"]=f["[[dataLocale]]"];f=f["[[dataLocale]]"];h=A(c,"style","string",new v("decimal","percent","currency"),"decimal");d["[[style]]"]=h;var e=A(c,"currency","string");if(void 0!==e&&!Aa(e))throw new RangeError("'"+e+"' is not a valid currency code");if("currency"===h&&void 0===e)throw new TypeError("Currency code is required when style is currency");if("currency"===h){e=e.toUpperCase();d["[[currency]]"]=e;var k=
    void 0!==ha[e]?ha[e]:2}e=A(c,"currencyDisplay","string",new v("code","symbol","name"),"symbol");"currency"===h&&(d["[[currencyDisplay]]"]=e);e=K(c,"minimumIntegerDigits",1,21,1);d["[[minimumIntegerDigits]]"]=e;e=K(c,"minimumFractionDigits",0,20,"currency"===h?k:0);d["[[minimumFractionDigits]]"]=e;k=K(c,"maximumFractionDigits",e,20,"currency"===h?Math.max(e,k):"percent"===h?Math.max(e,0):Math.max(e,3));d["[[maximumFractionDigits]]"]=k;k=c.minimumSignificantDigits;e=c.maximumSignificantDigits;if(void 0!==
    k||void 0!==e)k=K(c,"minimumSignificantDigits",1,21,1),e=K(c,"maximumSignificantDigits",k,21,21),d["[[minimumSignificantDigits]]"]=k,d["[[maximumSignificantDigits]]"]=e;c=A(c,"useGrouping","boolean",void 0,!0);d["[[useGrouping]]"]=c;c=b[f].patterns[h];d["[[positivePattern]]"]=c.positivePattern;d["[[negativePattern]]"]=c.negativePattern;d["[[boundFormat]]"]=void 0;d["[[initializedNumberFormat]]"]=!0;ia&&(a.format=ja.call(a));g.exp.test(g.input);return a}function ja(){var a=null!=this&&"object"===typeof this&&
    F(this);if(!a||!a["[[initializedNumberFormat]]"])throw new TypeError("`this` value for format() is not an initialized Intl.NumberFormat object.");if(void 0===a["[[boundFormat]]"]){var b=P.call(function(a){return Q(this,Number(a))},this);a["[[boundFormat]]"]=b}return a["[[boundFormat]]"]}function Q(a,b){var c,d=L(),g=F(a),f=g["[[numberingSystem]]"],h=r.NumberFormat["[[localeData]]"][g["[[dataLocale]]"]],e=h.symbols[f]||h.symbols.latn,k=!1;if(!1===isFinite(b))isNaN(b)?c=e.nan:(c=e.infinity,0>b&&(k=
        !0));else{0>b&&(k=!0,b=-b);"percent"===g["[[style]]"]&&(b*=100);c=t.call(g,"[[minimumSignificantDigits]]")&&t.call(g,"[[maximumSignificantDigits]]")?Ca(b,g["[[minimumSignificantDigits]]"],g["[[maximumSignificantDigits]]"]):Da(b,g["[[minimumIntegerDigits]]"],g["[[minimumFractionDigits]]"],g["[[maximumFractionDigits]]"]);if(ka[f]){var x=ka[g["[[numberingSystem]]"]];c=String(c).replace(/\d/g,function(a){return x[a]})}else c=String(c);c=c.replace(/\./g,e.decimal);if(!0===g["[[useGrouping]]"]){c=c.split(e.decimal);
    var f=c[0],q=h.patterns.primaryGroupSize||3,n=h.patterns.secondaryGroupSize||q;if(f.length>q){var l=new v,q=f.length-q,p=q%n,m=f.slice(0,p);for(m.length&&z.call(l,m);p<q;)z.call(l,f.slice(p,p+n)),p+=n;z.call(l,f.slice(q));c[0]=u.call(l,e.group)}c=u.call(c,e.decimal)}}e=g[!0===k?"[[negativePattern]]":"[[positivePattern]]"];e=e.replace("{number}",c);if("currency"===g["[[style]]"]){k=g["[[currency]]"];h=h.currencies[k];switch(g["[[currencyDisplay]]"]){case "symbol":g=h||k;break;default:case "code":case "name":g=
    k}e=e.replace("{currency}",g)}d.exp.test(d.input);return e}function Ca(a,b,c){if(0===a){a=u.call(Array(c+1),"0");var d=0}else{d=Math.abs(a);if("function"===typeof Math.log10)d=Math.floor(Math.log10(d));else var g=Math.round(Math.log(d)*Math.LOG10E),d=g-(Number("1e"+g)>d);g=Math.round(Math.exp(Math.abs(d-c+1)*Math.LN10));a=String(Math.round(0>d-c+1?a*g:a/g))}if(d>=c)return a+u.call(Array(d-c+2),"0");if(d===c-1)return a;0<=d?a=a.slice(0,d+1)+"."+a.slice(d+1):0>d&&(a="0."+u.call(Array(-(d+1)+1),"0")+
        a);if(0<=a.indexOf(".")&&c>b){for(b=c-b;0<b&&"0"===a.charAt(a.length-1);)a=a.slice(0,-1),b--;"."===a.charAt(a.length-1)&&(a=a.slice(0,-1))}return a}function Da(a,b,c,d){var g;a=Number.prototype.toFixed.call(a,d);var f=a.split(".")[0].length;c=d-c;var h=-1<(g=a.indexOf("e"))?a.slice(g+1):0;h&&(a=a.slice(0,g).replace(".",""),a+=u.call(Array(h-(a.length-1)+1),"0")+"."+u.call(Array(d+1),"0"),f=a.length);for(;0<c&&"0"===a.slice(-1);)a=a.slice(0,-1),c--;"."===a.slice(-1)&&(a=a.slice(0,-1));if(f<b)var e=
    u.call(Array(b-f+1),"0");return(e?e:"")+a}function M(a,b){return this&&this!==l?la(G(this),a,b):new l.DateTimeFormat(a,b)}function la(a,b,c){var d=F(a),g=L();if(!0===d["[[initializedIntlObject]]"])throw new TypeError("`this` object has already been initialized as an Intl object");m(a,"__getInternalProperties",{value:function(a){if(a===O)return d}});d["[[initializedIntlObject]]"]=!0;var f=U(b);c=R(c,"any","date");b=new y;h=A(c,"localeMatcher","string",new v("lookup","best fit"),"best fit");b["[[localeMatcher]]"]=
    h;var h=r.DateTimeFormat,e=h["[[localeData]]"];b=ea(h["[[availableLocales]]"],f,b,h["[[relevantExtensionKeys]]"],e);d["[[locale]]"]=b["[[locale]]"];d["[[calendar]]"]=b["[[ca]]"];d["[[numberingSystem]]"]=b["[[nu]]"];d["[[dataLocale]]"]=b["[[dataLocale]]"];f=b["[[dataLocale]]"];b=c.timeZone;if(void 0!==b&&(b=ba(b),"UTC"!==b))throw new RangeError("timeZone is not supported.");d["[[timeZone]]"]=b;b=new y;for(var k in C)t.call(C,k)&&(h=A(c,k,"string",C[k]),b["[["+k+"]]"]=h);var e=e[f],f=Ea(e.formats),
    h=A(c,"formatMatcher","string",new v("basic","best fit"),"best fit");e.formats=f;b="basic"===h?ma(b,f):ma(b,f,!0);for(k in C)t.call(C,k)&&t.call(b,k)&&(d["[["+k+"]]"]=b[k]);c=A(c,"hour12","boolean");d["[[hour]]"]?(c=void 0===c?e.hour12:c,d["[[hour12]]"]=c,!0===c?(d["[[hourNo0]]"]=e.hourNo0,c=b.pattern12):c=b.pattern):c=b.pattern;d["[[pattern]]"]=c;d["[[boundFormat]]"]=void 0;d["[[initializedDateTimeFormat]]"]=!0;ia&&(a.format=na.call(a));g.exp.test(g.input);return a}function Ea(a){return"[object Array]"===
Object.prototype.toString.call(a)?a:wa(a)}function R(a,b,c){if(void 0===a)a=null;else{var d=G(a);a=new y;for(var g in d)a[g]=d[g]}a=D(a);d=!0;if("date"===b||"any"===b)if(void 0!==a.weekday||void 0!==a.year||void 0!==a.month||void 0!==a.day)d=!1;if("time"===b||"any"===b)if(void 0!==a.hour||void 0!==a.minute||void 0!==a.second)d=!1;!d||"date"!==c&&"all"!==c||(a.year=a.month=a.day="numeric");!d||"time"!==c&&"all"!==c||(a.hour=a.minute=a.second="numeric");return a}function ma(a,b,c){for(var d=-Infinity,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            g,f=0,h=b.length;f<h;){var e=b[f],k=0,l;for(l in C)if(t.call(C,l)){var q=a["[["+l+"]]"],n=t.call(e,l)?e[l]:void 0;if(void 0===q&&void 0!==n)k-=20;else if(void 0!==q&&void 0===n)k-=120;else{var m=["2-digit","numeric","narrow","short","long"],p=I.call(m,q),m=I.call(m,n),p=Math.max(Math.min(m-p,2),-2);!c||("numeric"!==q&&"2-digit"!==q||"numeric"===n||"2-digit"===n)&&("numeric"===q||"2-digit"===q||"2-digit"!==n&&"numeric"!==n)||(k-=8);2===p?k-=6:1===p?k-=3:-1===p?k-=6:-2===p&&(k-=8)}}k>d&&(d=k,g=e);f++}return g}
    function na(){var a=null!=this&&"object"===typeof this&&F(this);if(!a||!a["[[initializedDateTimeFormat]]"])throw new TypeError("`this` value for format() is not an initialized Intl.DateTimeFormat object.");if(void 0===a["[[boundFormat]]"]){var b=P.call(function(){var a=Number(0===arguments.length?Date.now():arguments[0]);return S(this,a)},this);a["[[boundFormat]]"]=b}return a["[[boundFormat]]"]}function S(a,b){if(!isFinite(b))throw new RangeError("Invalid valid date passed to format");var c=a.__getInternalProperties(O),
        d=L(),g=c["[[locale]]"],f=new l.NumberFormat([g],{useGrouping:!1}),h=new l.NumberFormat([g],{minimumIntegerDigits:2,useGrouping:!1}),e;e=new Date(b);var k="get"+(c["[[timeZone]]"]||"");e=new y({"[[weekday]]":e[k+"Day"](),"[[era]]":+(0<=e[k+"FullYear"]()),"[[year]]":e[k+"FullYear"](),"[[month]]":e[k+"Month"](),"[[day]]":e[k+"Date"](),"[[hour]]":e[k+"Hours"](),"[[minute]]":e[k+"Minutes"](),"[[second]]":e[k+"Seconds"](),"[[inDST]]":!1});var k=c["[[pattern]]"],m=r.DateTimeFormat["[[localeData]]"][c["[[dataLocale]]"]].calendars,
        q=c["[[calendar]]"],n;for(n in C)if(t.call(c,"[["+n+"]]")){var u,p,v=c["[["+n+"]]"],w=e["[["+n+"]]"];"year"===n&&0>=w?w=1-w:"month"===n?w++:"hour"===n&&!0===c["[[hour12]]"]&&(w%=12,u=w!==e["[["+n+"]]"],0===w&&!0===c["[[hourNo0]]"]&&(w=12));if("numeric"===v)p=Q(f,w);else if("2-digit"===v)p=Q(h,w),2<p.length&&(p=p.slice(-2));else if(v in Fa)switch(n){case "month":p=X(m,q,"months",v,e["[["+n+"]]"]);break;case "weekday":try{p=X(m,q,"days",v,e["[["+n+"]]"])}catch(z){throw Error("Could not find weekday data for locale "+
        g);}break;case "timeZoneName":p="";break;default:p=e["[["+n+"]]"]}k=k.replace("{"+n+"}",p)}!0===c["[[hour12]]"]&&(p=X(m,q,"dayPeriods",u?"pm":"am"),k=k.replace("{ampm}",p));d.exp.test(d.input);return k}function oa(a,b){if(!t.call(this,"[[availableLocales]]"))throw new TypeError("supportedLocalesOf() is not a constructor");var c=L(),d=this["[[availableLocales]]"],g=U(a);c.exp.test(c.input);c=b;if(void 0!==c&&(c=new y(G(c)),c=c.localeMatcher,void 0!==c&&(c=String(c),"lookup"!==c&&"best fit"!==c)))throw new RangeError('matcher should be "lookup" or "best fit"');
        for(var c=g.length,f=new v,h=0;h<c;){var e=g[h],k=String(e).replace(V,"");void 0!==da(d,k)&&z.call(f,e);h++}var d=H.call(f),l;for(l in d)t.call(d,l)&&m(d,l,{writable:!1,configurable:!1,value:d[l]});m(d,"length",{writable:!1});return d}function X(a,b,c,d,g){a=a[b]&&a[b][c]?a[b][c]:a.gregory[c];b={narrow:["short","long"],short:["long","narrow"],long:["short","narrow"]};d=t.call(a,d)?a[d]:t.call(a,b[d][0])?a[b[d][0]]:a[b[d][1]];return null!=g?d[g]:d}function y(a){for(var b in a)(a instanceof y||t.call(a,
        b))&&m(this,b,{value:a[b],enumerable:!0,writable:!0,configurable:!0})}function v(){m(this,"length",{writable:!0,value:0});arguments.length&&z.apply(this,H.call(arguments))}function L(){for(var a=/[.?*+^$[\]\\(){}|-]/g,b=RegExp.lastMatch||"",c=RegExp.multiline?"m":"",d={input:RegExp.input},g=new v,f=!1,h={},e=1;9>=e;e++)f=(h["$"+e]=RegExp["$"+e])||f;b=b.replace(a,"\\$&");if(f)for(e=1;9>=e;e++)(f=h["$"+e])?(f=f.replace(a,"\\$&"),b=b.replace(f,"("+f+")")):b="()"+b,z.call(g,b.slice(0,b.indexOf("(")+1)),
        b=b.slice(b.indexOf("(")+1);d.exp=new RegExp(u.call(g,"")+b,c);return d}function ba(a){for(var b=a.length;b--;){var c=a.charAt(b);"a"<=c&&"z">=c&&(a=a.slice(0,b)+c.toUpperCase()+a.slice(b+1))}return a}function G(a){if(null==a)throw new TypeError("Cannot convert null or undefined to object");return Object(a)}function F(a){return t.call(a,"__getInternalProperties")?a.__getInternalProperties(O):D(null)}var xa=/^(?:(?:[a-z]{2,3}(?:-[a-z]{3}(?:-[a-z]{3}){0,2})?|[a-z]{4}|[a-z]{5,8})(?:-[a-z]{4})?(?:-(?:[a-z]{2}|\d{3}))?(?:-(?:[a-z0-9]{5,8}|\d[a-z0-9]{3}))*(?:-[0-9a-wy-z](?:-[a-z0-9]{2,8})+)*(?:-x(?:-[a-z0-9]{1,8})+)?|x(?:-[a-z0-9]{1,8})+|(?:(?:en-GB-oed|i-(?:ami|bnn|default|enochian|hak|klingon|lux|mingo|navajo|pwn|tao|tay|tsu)|sgn-(?:BE-FR|BE-NL|CH-DE))|(?:art-lojban|cel-gaulish|no-bok|no-nyn|zh-(?:guoyu|hakka|min|min-nan|xiang))))$/i,
        ya=/^(?!x).*?-((?:[a-z0-9]{5,8}|\d[a-z0-9]{3}))-(?:\w{4,8}-(?!x-))*\1\b/i,za=/^(?!x).*?-([0-9a-wy-z])-(?:\w+-(?!x-))*\1\b/i,ca=/-[0-9a-wy-z](?:-[a-z0-9]{2,8})+/ig,va=/(?:[Eec]{1,6}|G{1,5}|(?:[yYu]+|U{1,5})|[ML]{1,5}|d{1,2}|a|[hkHK]{1,2}|m{1,2}|s{1,2}|z{1,4})(?=([^']*'[^']*')*[^']*$)/g,ua=/[QxXVOvZASjgFDwWIQqH]/,T={month:["numeric","2-digit","short","long","narrow"],weekday:["short","short","short","long","narrow"],era:["short","short","short","long","narrow"]},Z=["weekday","era","year","month","day"],
        Y=["hour","minute","second","timeZoneName"],l={},J=function(){var a={};try{return Object.defineProperty(a,"a",{}),"a"in a}catch(b){return!1}}(),ia=!J&&!Object.prototype.__defineGetter__,t=Object.prototype.hasOwnProperty,m=J?Object.defineProperty:function(a,b,c){if("get"in c&&a.__defineGetter__)a.__defineGetter__(b,c.get);else if(!t.call(a,b)||"value"in c)a[b]=c.value},I=Array.prototype.indexOf||function(a,b){if(!this.length)return-1;for(var c=b||0,d=this.length;c<d;c++)if(this[c]===a)return c;return-1},
        D=Object.create||function(a,b){function c(){}var d;c.prototype=a;d=new c;for(var g in b)t.call(b,g)&&m(d,g,b[g]);return d},H=Array.prototype.slice,pa=Array.prototype.concat,z=Array.prototype.push,u=Array.prototype.join,Ga=Array.prototype.shift,P=Function.prototype.bind||function(a){var b=this,c=H.call(arguments,1);return 1===b.length?function(d){return b.apply(a,pa.call(c,H.call(arguments)))}:function(){return b.apply(a,pa.call(c,H.call(arguments)))}},W,r=D(null),O=Math.random(),Fa=D(null,{narrow:{},
            short:{},long:{}}),qa=!1,ra=!1,Ba=/^[A-Z]{3}$/,V=/-u(?:-[0-9a-z]{2,8})+/gi,E={tags:{"art-lojban":"jbo","i-ami":"ami","i-bnn":"bnn","i-hak":"hak","i-klingon":"tlh","i-lux":"lb","i-navajo":"nv","i-pwn":"pwn","i-tao":"tao","i-tay":"tay","i-tsu":"tsu","no-bok":"nb","no-nyn":"nn","sgn-BE-FR":"sfb","sgn-BE-NL":"vgt","sgn-CH-DE":"sgg","zh-guoyu":"cmn","zh-hakka":"hak","zh-min-nan":"nan","zh-xiang":"hsn","sgn-BR":"bzs","sgn-CO":"csn","sgn-DE":"gsg","sgn-DK":"dsl","sgn-ES":"ssp","sgn-FR":"fsl","sgn-GB":"bfi",
            "sgn-GR":"gss","sgn-IE":"isg","sgn-IT":"ise","sgn-JP":"jsl","sgn-MX":"mfs","sgn-NI":"ncs","sgn-NL":"dse","sgn-NO":"nsl","sgn-PT":"psr","sgn-SE":"swl","sgn-US":"ase","sgn-ZA":"sfs","zh-cmn":"cmn","zh-cmn-Hans":"cmn-Hans","zh-cmn-Hant":"cmn-Hant","zh-gan":"gan","zh-wuu":"wuu","zh-yue":"yue"},subtags:{BU:"MM",DD:"DE",FX:"FR",TP:"TL",YD:"YE",ZR:"CD",heploc:"alalc97","in":"id",iw:"he",ji:"yi",jw:"jv",mo:"ro",ayx:"nun",bjd:"drl",ccq:"rki",cjr:"mom",cka:"cmr",cmk:"xch",drh:"khk",drw:"prs",gav:"dev",hrr:"jal",
            ibi:"opa",kgh:"kml",lcq:"ppr",mst:"mry",myt:"mry",sca:"hle",tie:"ras",tkk:"twm",tlw:"weo",tnf:"prs",ybd:"rki",yma:"lrr"},extLang:{aao:["aao","ar"],abh:["abh","ar"],abv:["abv","ar"],acm:["acm","ar"],acq:["acq","ar"],acw:["acw","ar"],acx:["acx","ar"],acy:["acy","ar"],adf:["adf","ar"],ads:["ads","sgn"],aeb:["aeb","ar"],aec:["aec","ar"],aed:["aed","sgn"],aen:["aen","sgn"],afb:["afb","ar"],afg:["afg","sgn"],ajp:["ajp","ar"],apc:["apc","ar"],apd:["apd","ar"],arb:["arb","ar"],arq:["arq","ar"],ars:["ars",
            "ar"],ary:["ary","ar"],arz:["arz","ar"],ase:["ase","sgn"],asf:["asf","sgn"],asp:["asp","sgn"],asq:["asq","sgn"],asw:["asw","sgn"],auz:["auz","ar"],avl:["avl","ar"],ayh:["ayh","ar"],ayl:["ayl","ar"],ayn:["ayn","ar"],ayp:["ayp","ar"],bbz:["bbz","ar"],bfi:["bfi","sgn"],bfk:["bfk","sgn"],bjn:["bjn","ms"],bog:["bog","sgn"],bqn:["bqn","sgn"],bqy:["bqy","sgn"],btj:["btj","ms"],bve:["bve","ms"],bvl:["bvl","sgn"],bvu:["bvu","ms"],bzs:["bzs","sgn"],cdo:["cdo","zh"],cds:["cds","sgn"],cjy:["cjy","zh"],cmn:["cmn",
            "zh"],coa:["coa","ms"],cpx:["cpx","zh"],csc:["csc","sgn"],csd:["csd","sgn"],cse:["cse","sgn"],csf:["csf","sgn"],csg:["csg","sgn"],csl:["csl","sgn"],csn:["csn","sgn"],csq:["csq","sgn"],csr:["csr","sgn"],czh:["czh","zh"],czo:["czo","zh"],doq:["doq","sgn"],dse:["dse","sgn"],dsl:["dsl","sgn"],dup:["dup","ms"],ecs:["ecs","sgn"],esl:["esl","sgn"],esn:["esn","sgn"],eso:["eso","sgn"],eth:["eth","sgn"],fcs:["fcs","sgn"],fse:["fse","sgn"],fsl:["fsl","sgn"],fss:["fss","sgn"],gan:["gan","zh"],gds:["gds","sgn"],
            gom:["gom","kok"],gse:["gse","sgn"],gsg:["gsg","sgn"],gsm:["gsm","sgn"],gss:["gss","sgn"],gus:["gus","sgn"],hab:["hab","sgn"],haf:["haf","sgn"],hak:["hak","zh"],hds:["hds","sgn"],hji:["hji","ms"],hks:["hks","sgn"],hos:["hos","sgn"],hps:["hps","sgn"],hsh:["hsh","sgn"],hsl:["hsl","sgn"],hsn:["hsn","zh"],icl:["icl","sgn"],ils:["ils","sgn"],inl:["inl","sgn"],ins:["ins","sgn"],ise:["ise","sgn"],isg:["isg","sgn"],isr:["isr","sgn"],jak:["jak","ms"],jax:["jax","ms"],jcs:["jcs","sgn"],jhs:["jhs","sgn"],jls:["jls",
                "sgn"],jos:["jos","sgn"],jsl:["jsl","sgn"],jus:["jus","sgn"],kgi:["kgi","sgn"],knn:["knn","kok"],kvb:["kvb","ms"],kvk:["kvk","sgn"],kvr:["kvr","ms"],kxd:["kxd","ms"],lbs:["lbs","sgn"],lce:["lce","ms"],lcf:["lcf","ms"],liw:["liw","ms"],lls:["lls","sgn"],lsg:["lsg","sgn"],lsl:["lsl","sgn"],lso:["lso","sgn"],lsp:["lsp","sgn"],lst:["lst","sgn"],lsy:["lsy","sgn"],ltg:["ltg","lv"],lvs:["lvs","lv"],lzh:["lzh","zh"],max:["max","ms"],mdl:["mdl","sgn"],meo:["meo","ms"],mfa:["mfa","ms"],mfb:["mfb","ms"],mfs:["mfs",
                "sgn"],min:["min","ms"],mnp:["mnp","zh"],mqg:["mqg","ms"],mre:["mre","sgn"],msd:["msd","sgn"],msi:["msi","ms"],msr:["msr","sgn"],mui:["mui","ms"],mzc:["mzc","sgn"],mzg:["mzg","sgn"],mzy:["mzy","sgn"],nan:["nan","zh"],nbs:["nbs","sgn"],ncs:["ncs","sgn"],nsi:["nsi","sgn"],nsl:["nsl","sgn"],nsp:["nsp","sgn"],nsr:["nsr","sgn"],nzs:["nzs","sgn"],okl:["okl","sgn"],orn:["orn","ms"],ors:["ors","ms"],pel:["pel","ms"],pga:["pga","ar"],pks:["pks","sgn"],prl:["prl","sgn"],prz:["prz","sgn"],psc:["psc","sgn"],
            psd:["psd","sgn"],pse:["pse","ms"],psg:["psg","sgn"],psl:["psl","sgn"],pso:["pso","sgn"],psp:["psp","sgn"],psr:["psr","sgn"],pys:["pys","sgn"],rms:["rms","sgn"],rsi:["rsi","sgn"],rsl:["rsl","sgn"],sdl:["sdl","sgn"],sfb:["sfb","sgn"],sfs:["sfs","sgn"],sgg:["sgg","sgn"],sgx:["sgx","sgn"],shu:["shu","ar"],slf:["slf","sgn"],sls:["sls","sgn"],sqk:["sqk","sgn"],sqs:["sqs","sgn"],ssh:["ssh","ar"],ssp:["ssp","sgn"],ssr:["ssr","sgn"],svk:["svk","sgn"],swc:["swc","sw"],swh:["swh","sw"],swl:["swl","sgn"],syy:["syy",
                "sgn"],tmw:["tmw","ms"],tse:["tse","sgn"],tsm:["tsm","sgn"],tsq:["tsq","sgn"],tss:["tss","sgn"],tsy:["tsy","sgn"],tza:["tza","sgn"],ugn:["ugn","sgn"],ugy:["ugy","sgn"],ukl:["ukl","sgn"],uks:["uks","sgn"],urk:["urk","ms"],uzn:["uzn","uz"],uzs:["uzs","uz"],vgt:["vgt","sgn"],vkk:["vkk","ms"],vkt:["vkt","ms"],vsi:["vsi","sgn"],vsl:["vsl","sgn"],vsv:["vsv","sgn"],wuu:["wuu","zh"],xki:["xki","sgn"],xml:["xml","sgn"],xmm:["xmm","ms"],xms:["xms","sgn"],yds:["yds","sgn"],ysl:["ysl","sgn"],yue:["yue","zh"],
            zib:["zib","sgn"],zlm:["zlm","ms"],zmi:["zmi","ms"],zsl:["zsl","sgn"],zsm:["zsm","ms"]}},ha={BHD:3,BYR:0,XOF:0,BIF:0,XAF:0,CLF:4,CLP:0,KMF:0,DJF:0,XPF:0,GNF:0,ISK:0,IQD:3,JPY:0,JOD:3,KRW:0,KWD:3,LYD:3,OMR:3,PYG:0,RWF:0,TND:3,UGX:0,UYI:0,VUV:0,VND:0};m(l,"NumberFormat",{configurable:!0,writable:!0,value:fa});m(l.NumberFormat,"prototype",{writable:!1});r.NumberFormat={"[[availableLocales]]":[],"[[relevantExtensionKeys]]":["nu"],"[[localeData]]":{}};m(l.NumberFormat,"supportedLocalesOf",{configurable:!0,
        writable:!0,value:P.call(oa,r.NumberFormat)});m(l.NumberFormat.prototype,"format",{configurable:!0,get:ja});var ka={arab:"\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669".split(""),arabext:"\u06f0\u06f1\u06f2\u06f3\u06f4\u06f5\u06f6\u06f7\u06f8\u06f9".split(""),bali:"\u1b50\u1b51\u1b52\u1b53\u1b54\u1b55\u1b56\u1b57\u1b58\u1b59".split(""),beng:"\u09e6\u09e7\u09e8\u09e9\u09ea\u09eb\u09ec\u09ed\u09ee\u09ef".split(""),deva:"\u0966\u0967\u0968\u0969\u096a\u096b\u096c\u096d\u096e\u096f".split(""),
        fullwide:"\uff10\uff11\uff12\uff13\uff14\uff15\uff16\uff17\uff18\uff19".split(""),gujr:"\u0ae6\u0ae7\u0ae8\u0ae9\u0aea\u0aeb\u0aec\u0aed\u0aee\u0aef".split(""),guru:"\u0a66\u0a67\u0a68\u0a69\u0a6a\u0a6b\u0a6c\u0a6d\u0a6e\u0a6f".split(""),hanidec:"\u3007\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u4e03\u516b\u4e5d".split(""),khmr:"\u17e0\u17e1\u17e2\u17e3\u17e4\u17e5\u17e6\u17e7\u17e8\u17e9".split(""),knda:"\u0ce6\u0ce7\u0ce8\u0ce9\u0cea\u0ceb\u0cec\u0ced\u0cee\u0cef".split(""),laoo:"\u0ed0\u0ed1\u0ed2\u0ed3\u0ed4\u0ed5\u0ed6\u0ed7\u0ed8\u0ed9".split(""),
        latn:"0123456789".split(""),limb:"\u1946\u1947\u1948\u1949\u194a\u194b\u194c\u194d\u194e\u194f".split(""),mlym:"\u0d66\u0d67\u0d68\u0d69\u0d6a\u0d6b\u0d6c\u0d6d\u0d6e\u0d6f".split(""),mong:"\u1810\u1811\u1812\u1813\u1814\u1815\u1816\u1817\u1818\u1819".split(""),mymr:"\u1040\u1041\u1042\u1043\u1044\u1045\u1046\u1047\u1048\u1049".split(""),orya:"\u0b66\u0b67\u0b68\u0b69\u0b6a\u0b6b\u0b6c\u0b6d\u0b6e\u0b6f".split(""),tamldec:"\u0be6\u0be7\u0be8\u0be9\u0bea\u0beb\u0bec\u0bed\u0bee\u0bef".split(""),telu:"\u0c66\u0c67\u0c68\u0c69\u0c6a\u0c6b\u0c6c\u0c6d\u0c6e\u0c6f".split(""),
        thai:"\u0e50\u0e51\u0e52\u0e53\u0e54\u0e55\u0e56\u0e57\u0e58\u0e59".split(""),tibt:"\u0f20\u0f21\u0f22\u0f23\u0f24\u0f25\u0f26\u0f27\u0f28\u0f29".split("")};m(l.NumberFormat.prototype,"resolvedOptions",{configurable:!0,writable:!0,value:function(){var a,b=new y,c="locale numberingSystem style currency currencyDisplay minimumIntegerDigits minimumFractionDigits maximumFractionDigits minimumSignificantDigits maximumSignificantDigits useGrouping".split(" "),d=null!=this&&"object"===typeof this&&F(this);
        if(!d||!d["[[initializedNumberFormat]]"])throw new TypeError("`this` value for resolvedOptions() is not an initialized Intl.NumberFormat object.");for(var g=0,f=c.length;g<f;g++)t.call(d,a="[["+c[g]+"]]")&&(b[c[g]]={value:d[a],writable:!0,configurable:!0,enumerable:!0});return D({},b)}});m(l,"DateTimeFormat",{configurable:!0,writable:!0,value:M});m(M,"prototype",{writable:!1});var C={weekday:["narrow","short","long"],era:["narrow","short","long"],year:["2-digit","numeric"],month:["2-digit","numeric",
        "narrow","short","long"],day:["2-digit","numeric"],hour:["2-digit","numeric"],minute:["2-digit","numeric"],second:["2-digit","numeric"],timeZoneName:["short","long"]};r.DateTimeFormat={"[[availableLocales]]":[],"[[relevantExtensionKeys]]":["ca","nu"],"[[localeData]]":{}};m(l.DateTimeFormat,"supportedLocalesOf",{configurable:!0,writable:!0,value:P.call(oa,r.DateTimeFormat)});m(l.DateTimeFormat.prototype,"format",{configurable:!0,get:na});m(l.DateTimeFormat.prototype,"resolvedOptions",{writable:!0,
        configurable:!0,value:function(){var a,b=new y,c="locale calendar numberingSystem timeZone hour12 weekday era year month day hour minute second timeZoneName".split(" "),d=null!=this&&"object"===typeof this&&F(this);if(!d||!d["[[initializedDateTimeFormat]]"])throw new TypeError("`this` value for resolvedOptions() is not an initialized Intl.DateTimeFormat object.");for(var g=0,f=c.length;g<f;g++)t.call(d,a="[["+c[g]+"]]")&&(b[c[g]]={value:d[a],writable:!0,configurable:!0,enumerable:!0});return D({},
            b)}});var B=l.__localeSensitiveProtos={Number:{},Date:{}};B.Number.toLocaleString=function(a,b){if("[object Number]"!==Object.prototype.toString.call(this))throw new TypeError("`this` value must be a number for Number.prototype.toLocaleString()");return Q(new fa(a,b),this)};B.Date.toLocaleString=function(a,b){if("[object Date]"!==Object.prototype.toString.call(this))throw new TypeError("`this` value must be a Date instance for Date.prototype.toLocaleString()");var c=+this;if(isNaN(c))return"Invalid Date";
        var d;d=R(b,"any","all");d=new M(a,d);return S(d,c)};B.Date.toLocaleDateString=function(a,b){if("[object Date]"!==Object.prototype.toString.call(this))throw new TypeError("`this` value must be a Date instance for Date.prototype.toLocaleDateString()");var c=+this;if(isNaN(c))return"Invalid Date";var d;d=R(b,"date","date");d=new M(a,d);return S(d,c)};B.Date.toLocaleTimeString=function(a,b){if("[object Date]"!==Object.prototype.toString.call(this))throw new TypeError("`this` value must be a Date instance for Date.prototype.toLocaleTimeString()");
        var c=+this;if(isNaN(c))return"Invalid Date";var d;d=R(b,"time","time");d=new M(a,d);return S(d,c)};m(l,"__applyLocaleSensitivePrototypes",{writable:!0,configurable:!0,value:function(){m(Number.prototype,"toLocaleString",{writable:!0,configurable:!0,value:B.Number.toLocaleString});m(Date.prototype,"toLocaleString",{writable:!0,configurable:!0,value:B.Date.toLocaleString});for(var a in B.Date)t.call(B.Date,a)&&m(Date.prototype,a,{writable:!0,configurable:!0,value:B.Date[a]})}});m(l,"__addLocaleData",
        {value:function(a){if(!aa(a.locale))throw Error("Object passed doesn't identify itself with a valid language tag");var b=a.locale;if(!a.number)throw Error("Object passed doesn't contain locale data for Intl.NumberFormat");var c,d=[b];c=b.split("-");for(2<c.length&&4===c[1].length&&z.call(d,c[0]+"-"+c[2]);c=Ga.call(d);)z.call(r.NumberFormat["[[availableLocales]]"],c),r.NumberFormat["[[localeData]]"][c]=a.number,a.date&&(a.date.nu=a.number.nu,z.call(r.DateTimeFormat["[[availableLocales]]"],c),r.DateTimeFormat["[[localeData]]"][c]=
            a.date);void 0===W&&(W=b);qa||(ga(l.NumberFormat.prototype),qa=!0);a.date&&!ra&&(la(l.DateTimeFormat.prototype),ra=!0)}});y.prototype=D(null);v.prototype=D(null);J=l;this.Intl||(this.Intl=J,J.__applyLocaleSensitivePrototypes());this.IntlPolyfill=J}).call(this);