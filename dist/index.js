"use strict";var n=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var u=n(function(k,o){
function p(e,r,a,i){var t,s;if(e<=0)return!1;for(t=i,s=0;s<e;s++){if(r[t])return!0;t+=a}return!1}o.exports=p
});var q=n(function(w,f){
var l=require('@stdlib/strided-base-stride2offset/dist'),j=u();function m(e,r,a){var i=l(e,a);return j(e,r,a,i)}f.exports=m
});var x=n(function(z,c){
var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),y=q(),_=u();R(y,"ndarray",_);c.exports=y
});var E=require("path").join,O=require('@stdlib/utils-try-require/dist'),b=require('@stdlib/assert-is-error/dist'),g=x(),v,d=O(E(__dirname,"./native.js"));b(d)?v=g:v=d;module.exports=v;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
