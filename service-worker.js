if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return a[e]||(i=new Promise((async i=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},i=(i,a)=>{Promise.all(i.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(i)};self.define=(i,c,d)=>{a[i]||(a[i]=Promise.resolve().then((()=>{let a={};const r={uri:location.origin+i.slice(1)};return Promise.all(c.map((i=>{switch(i){case"exports":return a;case"module":return r;default:return e(i)}}))).then((e=>{const i=d(...e);return a.default||(a.default=i),a}))})))}}define("./service-worker.js",["./workbox-21410b98"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"bbd358ef00231fc32d099be1b911a49c"},{url:"about/index.html",revision:"2ba900fe9c0afb86161cc9d4ab7bce95"},{url:"archives/2020/09/index.html",revision:"e07031ca41d9b14cd796d116564f2350"},{url:"archives/2020/index.html",revision:"04398c44143646b00e5c81dbbeb66833"},{url:"archives/2021/03/index.html",revision:"7f88fcf4bdf9d4119ac7c93a0ba78eda"},{url:"archives/2021/07/index.html",revision:"a7e4992b710d31b04df448639ccadcca"},{url:"archives/2021/index.html",revision:"0d1ee57f70a44e1c1baf8c58201ba013"},{url:"archives/index.html",revision:"92aee56d2a3f62ef5bc61459188ef167"},{url:"categories/index.html",revision:"f24ad8924964312c2219e9dc047dc6e6"},{url:"categories/技术/index.html",revision:"dbdf47b46fb9221ce5d2fd79eb41e644"},{url:"css/csdn/demo_index.html",revision:"a4ee09cd93a32e515b1d302c2ae963bd"},{url:"css/csdn/demo.css",revision:"31103ad158e19b978f7e730ff5ac959b"},{url:"css/csdn/iconfont.css",revision:"229b8ffdc69566b6f1afcf05e56042bc"},{url:"css/csdn/iconfont.js",revision:"92d820a1eb8a07924c42e38c7a4ab936"},{url:"css/csdn/iconfont.ttf",revision:"1ec063aafc0c76ffd19560461f9e607e"},{url:"css/index.css",revision:"97a2ec9824c8f89dab34ac1b43caadc1"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"image/avatar.jpg",revision:"69a8feae90172eaa9e53075943b22bf9"},{url:"image/bg-蕾姆.jpg",revision:"b7c08c072819363b84121ef94c836252"},{url:"image/bg10.jpg",revision:"78aa95b47f470cadc1433ee6cb3021ff"},{url:"image/bg11.jpg",revision:"c74dd186fb223002d21fffe238f9d640"},{url:"image/bg2.jpg",revision:"b3f1356e94baece84de5eb84750f120f"},{url:"image/bg3.jpg",revision:"b7749ed8a421ec1bf1d4aaf3cf035ab6"},{url:"image/bg4.jpg",revision:"e860616e279add2919f258c7ff0a8bc3"},{url:"image/bg5.jpg",revision:"ee63514b36c99b3227cf82600706c3d7"},{url:"image/bg6.jpg",revision:"81a0db35656a2f92d2f308e309ca4aa7"},{url:"image/bg7.jpg",revision:"4eb0bd12b78b3a1022646dce938ae959"},{url:"image/bg8.jpg",revision:"7e7c3c26e14b63d28d43d2a5e1a33687"},{url:"image/bg9.jpg",revision:"214e202296a5b3eff308a7a7ef323ac9"},{url:"image/icon/Bilibili.png",revision:"c8459ad01d9b88bcdf8ee9e4927cf338"},{url:"image/icon/Bilibili(2).png",revision:"241624003b66ee9b2557b5195bcc6ad7"},{url:"image/icon/csdn.png",revision:"e4d8f47094c3035da236765d0739e8cd"},{url:"image/icon/csdn/demo_index.html",revision:"ff75544d4d7dee78dab8323bf84f4c8b"},{url:"image/icon/csdn/demo.css",revision:"31103ad158e19b978f7e730ff5ac959b"},{url:"image/icon/csdn/iconfont.css",revision:"3c6dfc538c394f6d7473568aaf143acb"},{url:"image/icon/csdn/iconfont.js",revision:"92d820a1eb8a07924c42e38c7a4ab936"},{url:"image/icon/csdn/iconfont.ttf",revision:"1ec063aafc0c76ffd19560461f9e607e"},{url:"image/icon/Twitter.png",revision:"e2c34cebc1ebc721507e0eeeb9272525"},{url:"image/icon/Weibo.png",revision:"1529dc9ea9900b25d424e79be55c8351"},{url:"image/icon/Youtube.png",revision:"15b57193a354a9b1628b5ac3219b407d"},{url:"image/index.html",revision:"b9f0f6fe89ac59d1aae79b5190799000"},{url:"image/loading.webp",revision:"0cd929f90f8d917618bf7eaebb27db9b"},{url:"image/关于.jpg",revision:"1522bdf06a11e07ca1001a9e2bc448fe"},{url:"image/分类.jpg",revision:"05f78937b8d02776e59b3e1a589c2a2e"},{url:"image/时间轴.jpg",revision:"02f384c6218d1bec127b88a9b32b5384"},{url:"image/标签.jpg",revision:"1700b3bc4c753fb8f80530d9d000b6a2"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/alipay.jpg",revision:"1b6193e5904c6d2e6dfa35b2864728f7"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/wechat.jpg",revision:"fe979cd4faccb39797fdce13186c909b"},{url:"index.html",revision:"1f2212dec755e9ea3315c0f5d91a3bfb"},{url:"js/main.js",revision:"01f62452fd05335569c6341d3ac0f52b"},{url:"js/search/algolia.js",revision:"533d980c0d50a0d0d7fe34c41a3e2100"},{url:"js/search/local-search.js",revision:"acb62dcdf7e90930da3f6bf07349fc21"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"12cef07c2e9bc8841a5380df4fd342f5"},{url:"link/index.html",revision:"e7314a7eb5254bea4afb11ba3c3eced3"},{url:"tags/C/index.html",revision:"5d6a08d4b28e9484fcfde8092a45d284"},{url:"tags/Hadoop/index.html",revision:"90f5d50576d676c9e90f88b562d3dba4"},{url:"tags/index.html",revision:"be700a1f78569f03ec78473690f73240"},{url:"tags/JS/index.html",revision:"cd1e8ee4eabe4d1272fcb435dae3d481"},{url:"tags/Linux/index.html",revision:"b00b36c6799df0a297600684d569a02f"},{url:"tags/ROS/index.html",revision:"654aea126c5fd111ae0568b8ca3a4046"},{url:"tags/TCP/index.html",revision:"8f09dcb17fce6e94dc89f823256f11c1"},{url:"tags/异步/index.html",revision:"bb40fc4d8b3b92cdf369dbf688f006ab"},{url:"tags/笔记/index.html",revision:"fa088d1d281e93a4bc7a3baadeb82b35"},{url:"tags/网络编程/index.html",revision:"9f130971fd8d8f28839a7e21be1d9c72"},{url:"tags/虚拟机/index.html",revision:"8493b23757b399e548fa34b67b7721f0"},{url:"技术/C语言实现TCPIP连接/index.html",revision:"057e03aba3154e294826052400134ee5"},{url:"技术/JS闭包异步问题/image-20210713003026939.png",revision:"bfa162abb9e1a38c8d78b6f9a8b64f68"},{url:"技术/JS闭包异步问题/image-20210713003317016.png",revision:"2eddc53823aa5b50f1b0a8484bad7834"},{url:"技术/JS闭包异步问题/image-20210713004030715.png",revision:"7440afdd98fe14f4fe3d04c0c1344570"},{url:"技术/JS闭包异步问题/image-20210713010648477.png",revision:"00cb438b8b53e0feb94cdf028b8e3c9d"},{url:"技术/JS闭包异步问题/image-20210713011331809.png",revision:"03cf04e42cfa1795d786a078edc862f3"},{url:"技术/JS闭包异步问题/image-20210713011353347.png",revision:"aa71344cc9b0155b39893377e672561b"},{url:"技术/JS闭包异步问题/index.html",revision:"f79ca6da3dc76802f8ff31a27c2caecf"},{url:"技术/VirtualBox安装Ubuntu16.04/index.html",revision:"5e1e23bd4de4c8a2cd723cb07028f065"},{url:"技术/虚拟机+Ubuntu，搭建hadoop集群/index.html",revision:"66b745c62329d7396dfae3897ead3b7d"},{url:"技术/虚拟机上安装Ubuntu16.04及ROS/index.html",revision:"feefab84edf18565aec853360b3dc4bb"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
