/*1410023376,,JIT Construction: v1401835,en_US*/

/**
 * Copyright Facebook Inc.
 *
 * Licensed under the Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 */
try {
(function(a,b,c,d){var e=a._fbq||(a._fbq=[]);if(e.push!==Array.prototype.push)return;var f={},g=[],h=/^\d+$/,i=c.href,j=b.referrer,k='https://www.facebook.com/';function l(w){var x=[];for(var y=0,z=w.length;y<z;y++)x.push(w[y][0]+'='+encodeURIComponent(w[y][1]));return x.join('&');}function m(w,x){var y=function(){if(w.detachEvent){w.detachEvent('onload',y);}else w.onload=null;x();};if(w.attachEvent){w.attachEvent('onload',y);}else w.onload=y;}function n(w,x){var y='fb'+Math.random().toString().replace('.',''),z=b.createElement('form');z.method='post';z.action=w;z.target=y;z.acceptCharset='utf-8';z.style.display='none';var aa=!!(a.attachEvent&&!a.addEventListener),ba=aa?'<iframe name="'+y+'">':'iframe',ca=b.createElement(ba);ca.src='javascript:false';ca.id=y;ca.name=y;z.appendChild(ca);m(ca,function(){for(var da=0,ea=x.length;da<ea;da++){var fa=b.createElement('input');fa.name=x[da][0];fa.value=x[da][1];z.appendChild(fa);}m(ca,function(){z.parentNode.removeChild(z);});z.submit();});b.body.appendChild(z);}f.addPixelId=function(w){g.push(w);};f.track=function(w,x){var y=typeof w;if(y!=='string'&&y!=='number')return false;if(h.test(w)){q(null,w,x);return true;}for(var z=0,aa=g.length;z<aa;z++)q(g[z],w,x);return g.length>0;};f.sendAppEvent=function(w,x,y,z){if(!w||!x)return false;var aa=p(w,x,z);if(y)aa.push(['vts',y]);o('ae/',aa);return true;};function o(w,x){var y=l(x),z=k+w;if(1024>(z+'?'+y).length){var aa=new Image();aa.src=z+'?'+y;}else n(z,x);}function p(w,x,y){var z=[];z.push(['id',w]);z.push(['ev',x]);z.push(['ts',new Date().valueOf()]);if(y&&typeof y==='object')for(var aa in y)if(y.hasOwnProperty(aa)){var ba=y[aa],ca=(ba===null)?'null':typeof ba;if(ca in {number:1,string:1,boolean:1}){z.push(['cd['+encodeURIComponent(aa)+']',ba]);}else if(ca==='object'){ba=(typeof JSON==='undefined')?String(ba):JSON.stringify(ba);z.push(['cd['+encodeURIComponent(aa)+']',ba]);}}return z;}function q(w,x,y){var z=p(w,x,y);z.push(['dl',i]);z.push(['rl',j]);o('tr/',z);}var r=function(w){if(Object.prototype.toString.call(w)!=='[object Array]')return false;var x=w.shift();if(!x)return false;var y=f[x];if(typeof y!=='function')return false;if(a._fbds){var z=a._fbds.pixelId;if(h.test(z)){g.push(z);delete a._fbds.pixelId;}}return y.apply(f,w);};for(var s=0,t=e.length;s<t;++s)r(e[s]);e.push=r;if(e.disablePushState===true)return;if(!d.pushState||!d.replaceState)return;var u=function(){j=i;i=c.href;e.push(['track','PixelInitialized']);},v=function(w,x,y){var z=w[x];w[x]=function(){var aa=z.apply(this,arguments);y.apply(this,arguments);return aa;};};v(d,'pushState',u);v(d,'replaceState',u);a.addEventListener('popstate',u,false);})(window,document,location,history);} catch (e) {new Image().src="http:\/\/www.facebook.com\/" + 'common/scribe_endpoint.php?c=jssdk_error&m='+encodeURIComponent('{"error":"LOAD", "extra": {"name":"'+e.name+'","line":"'+(e.lineNumber||e.line)+'","script":"'+(e.fileName||e.sourceURL||e.script)+'","stack":"'+(e.stackTrace||e.stack)+'","revision":"1401835","message":"'+e.message+'"}}');}