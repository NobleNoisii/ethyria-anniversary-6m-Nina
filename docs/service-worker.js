if(!self.define){let i,n={};const e=(e,o)=>(e=new URL(e+".js",o).href,n[e]||new Promise((n=>{if("document"in self){const i=document.createElement("script");i.src=e,i.onload=n,document.head.appendChild(i)}else i=e,importScripts(e),n()})).then((()=>{let i=n[e];if(!i)throw new Error(`Module ${e} didn’t register its module`);return i})));self.define=(o,r)=>{const c=i||("document"in self?document.currentScript.src:"")||location.href;if(n[c])return;let s={};const l=i=>e(i,c),a={module:{uri:c},exports:s,require:l};n[c]=Promise.all(o.map((i=>a[i]||l(i)))).then((i=>(r(...i),s)))}}define(["./workbox-29b31176"],(function(i){"use strict";i.setCacheNameDetails({prefix:"ethyria-anniversary-6m"}),self.skipWaiting(),i.precacheAndRoute([{url:"/css/app.07185464.css",revision:null},{url:"/css/chunk-vendors.88b2bdb4.css",revision:null},{url:"/favicon.ico",revision:"6219ab293c604154aaf0bc817050066c"},{url:"/img/6months-01-colesparks318.fdd8e0d3.jpg",revision:null},{url:"/img/6months-02-seviradi.8a08e674.png",revision:null},{url:"/img/6months-03-voldox.8a1b527c.jpg",revision:null},{url:"/img/6months-04-voldox.d6a2aa26.png",revision:null},{url:"/img/6months-05-soya.c8ad6639.png",revision:null},{url:"/img/6months-06-leef.6ba8cea5.png",revision:null},{url:"/img/6months-07-komet.dd1531e0.png",revision:null},{url:"/img/6months-08-soya.753c94a2.png",revision:null},{url:"/img/6months-09-komet.0e58df6c.png",revision:null},{url:"/img/background.db5d2521.png",revision:null},{url:"/img/header.d929779d.png",revision:null},{url:"/img/icons/android-chrome-192x192.png",revision:"4853eb48e3f153ca05d5d3df3cd44bc3"},{url:"/img/icons/android-chrome-512x512.png",revision:"2b6e6e037f9e13224a30828c7a94ffce"},{url:"/img/icons/android-chrome-maskable-192x192.png",revision:"4853eb48e3f153ca05d5d3df3cd44bc3"},{url:"/img/icons/android-chrome-maskable-512x512.png",revision:"2b6e6e037f9e13224a30828c7a94ffce"},{url:"/img/icons/apple-touch-icon-120x120.png",revision:"f4c72ad6eba42925eda138f641905cca"},{url:"/img/icons/apple-touch-icon-152x152.png",revision:"e096bd1d7d6536840f826a68a12fa55d"},{url:"/img/icons/apple-touch-icon-180x180.png",revision:"797ba5f0f0427baece8644af8e15f0ec"},{url:"/img/icons/apple-touch-icon-60x60.png",revision:"705cac1f2c8d982f38128aaa820378f7"},{url:"/img/icons/apple-touch-icon-76x76.png",revision:"5250b45b241f70a50cd4f6356c46f8fd"},{url:"/img/icons/apple-touch-icon.png",revision:"797ba5f0f0427baece8644af8e15f0ec"},{url:"/img/icons/favicon-16x16.png",revision:"6e358d626ddb522129e398d43e47c141"},{url:"/img/icons/favicon-32x32.png",revision:"eb36aeb55b0e8ebe78dc7ee297808914"},{url:"/img/icons/msapplication-icon-144x144.png",revision:"3ec467a533d899e294b6936df463624f"},{url:"/img/icons/mstile-150x150.png",revision:"10845735b647dbcd137293fba73c7f38"},{url:"/img/icons/safari-pinned-tab.svg",revision:"955a81d44b39b90e296918a46d1a7747"},{url:"/img/mural.520657c4.jpg",revision:null},{url:"/index.html",revision:"7a4b7932b25a2629cc2fb4fd29c7a7ce"},{url:"/js/app.86bdff6c.js",revision:null},{url:"/js/chunk-vendors.bc960764.js",revision:null},{url:"/manifest.json",revision:"856a594890a62060e383cf4093c53ff8"},{url:"/ogimage.png",revision:"57a39fb2bf3bbccef88ce8ac0fa28fd3"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
