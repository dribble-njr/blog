import{t as y}from"./array-2ff2c7a6-ffeda358.js";import{E as l,C as v}from"./constant-2fe7eae5-45b4460e.js";import{d as b,P as d,V as h,W as j}from"./mermaid.esm.min-c5908c4b.js";function O(t){return t[0]}function P(t){return t[1]}function F(t,o){var r=l(!0),f=null,i=b,u=null;t=typeof t=="function"?t:t===void 0?O:l(t),o=typeof o=="function"?o:o===void 0?P:l(o);function e(n){var c,g=(n=y(n)).length,p,a=!1,s;for(f==null&&(u=i(s=v())),c=0;c<=g;++c)!(c<g&&r(p=n[c],c,n))===a&&((a=!a)?u.lineStart():u.lineEnd()),a&&u.point(+t(p,c,n),+o(p,c,n));if(s)return u=null,s+""||null}return e.x=function(n){return arguments.length?(t=typeof n=="function"?n:l(+n),e):t},e.y=function(n){return arguments.length?(o=typeof n=="function"?n:l(+n),e):o},e.defined=function(n){return arguments.length?(r=typeof n=="function"?n:l(!!n),e):r},e.curve=function(n){return arguments.length?(i=n,f!=null&&(u=i(f)),e):i},e.context=function(n){return arguments.length?(n==null?f=u=null:u=i(f=n),e):f},e}var x=j(Object.getPrototypeOf,Object);const C=x;var S="[object Object]",w=Function.prototype,B=Object.prototype,m=w.toString,E=B.hasOwnProperty,T=m.call(Object);function L(t){if(!d(t)||h(t)!=S)return!1;var o=C(t);if(o===null)return!0;var r=E.call(o,"constructor")&&o.constructor;return typeof r=="function"&&r instanceof r&&m.call(r)==T}export{L as B,C as T,F as z};
