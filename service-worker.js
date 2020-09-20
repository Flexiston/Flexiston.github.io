"use strict";var workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/workbox-sw.js")),workbox.setConfig({modulePathPrefix:"https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/")}),workbox.core.setCacheNameDetails({prefix:"Flexiston's Blog"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"f56204b475e3673c336e8d07fce210e8",url:"./404.html"},{revision:"287d64281b9f5662becefec4cb6a2a2e",url:"./about/index.html"},{revision:"b6029eba9fcce3d1183dfac4a5030fe7",url:"./archives/2020/04/index.html"},{revision:"052ed0332b82dc3793e15454085ddf77",url:"./archives/2020/05/index.html"},{revision:"1feb0b1b6350db14b19a239b2a97a22d",url:"./archives/2020/06/index.html"},{revision:"6193ed9539aded9fa9848d44f390d3d1",url:"./archives/2020/07/index.html"},{revision:"b8071e938c8c04b7c209e6986aad82fc",url:"./archives/2020/08/index.html"},{revision:"72fa3e3a4df618c5a13ecab0219af9be",url:"./archives/2020/09/index.html"},{revision:"9c279c3d8ad70c05ec4a90896d75a8e0",url:"./archives/2020/index.html"},{revision:"c96f61f95a8d672c6b257350d4362ae4",url:"./archives/2020/page/2/index.html"},{revision:"e63e232094fc3d2e97117b228cd6bc6a",url:"./archives/index.html"},{revision:"a948caf7eaf7bb9229dc0ef56a688c4b",url:"./archives/page/2/index.html"},{revision:"9fb351efc4b8a7db51d2d7325f60fb03",url:"./baidu_verify_spMQLbgc0m.html"},{revision:"6f79b93f3825b881f80a56b9c0fc6ff2",url:"./catch-cat.min.js"},{revision:"3068b2ada49e9095ce9496d30211ecc8",url:"./catch-cat/index.html"},{revision:"214d21849565df4626880044fecbda3b",url:"./categories/Bug/index.html"},{revision:"0f145feea568ee0d5f2a1a2c5248d453",url:"./categories/Dev/GitHub/index.html"},{revision:"f2f32a62b2c5efd35204cb3bc2e568b8",url:"./categories/Dev/Hexo/index.html"},{revision:"8f0ce837b1922f84fc6bda24e0b4977f",url:"./categories/Dev/index.html"},{revision:"46a7602703adeb87045dc7cbde53ad6b",url:"./categories/Dev/page/2/index.html"},{revision:"e3834d764f919775465dfb39c856499c",url:"./categories/Dev/Vercel/index.html"},{revision:"93aba28bf51cfe16e8ec5eb5f26505eb",url:"./categories/Dev/Windows/index.html"},{revision:"7ad4cb417edcfd8c3b6b27b5c6ddfda7",url:"./categories/Dev/工具/index.html"},{revision:"eb4f5d018e9dbb214713ab5bbe7587b1",url:"./categories/Emoji/index.html"},{revision:"0c52325a940d64bdb36c4e5919af048e",url:"./categories/GitHub/index.html"},{revision:"19410717ca1c6689e4a4e8d6919b6551",url:"./categories/index.html"},{revision:"7a2023d5dcf8ba778ea0e9968538ce6b",url:"./categories/文言文编程/index.html"},{revision:"ad39b8e538d0ef10a5d27a29d4f40a42",url:"./categories/白嫖/index.html"},{revision:"196a4b417a87e41bf8c73396b769f793",url:"./changelog/index.html"},{revision:"58a06df8e136d259c4a4cbe580144bbd",url:"./css/style/app.css"},{revision:"716b176afc842df011f56933c1b16f32",url:"./css/style/artalk.css"},{revision:"065e2336df5c077dff1860817f7d9542",url:"./css/style/darkmode.css"},{revision:"ad92a9b3bbf67dc1f9649d065f1f1086",url:"./css/style/links.css"},{revision:"1407dc11577c56dde90dce10aa71bc50",url:"./css/style/note.css"},{revision:"fc764d9a99cd208d780999d32b2c47da",url:"./css/style/timeline.l.css"},{revision:"72622e54aac09aaa381730a70676a78f",url:"./favicon.ico"},{revision:"3da556df76b210a2b5a6d9ab7c01f954",url:"./friends/index.html"},{revision:"8e6bef14836013c9f0df75ef5c843d2d",url:"./index.html"},{revision:"e700c091adccb8f56c21ba8fb8d137e7",url:"./js/app.ooo.js"},{revision:"ae0be675f96610c4194a953de28b5c84",url:"./js/darkmod.js"},{revision:"f564bbb092181f20953084c3ed507461",url:"./manifest.json"},{revision:"32f5b5d273be4038668d5031542f5e35",url:"./map/index.html"},{revision:"1b3819adb7fdc61d51e9784bcec93a0d",url:"./mikutap/css/mikutap.css"},{revision:"5279a09d7a75b44f3c35364ea2a8f08b",url:"./mikutap/data/main/main.json"},{revision:"d94b20e465ff7289142b647c1ac142ea",url:"./mikutap/data/track/track.json"},{revision:"4b63179db3c45dfd9078a252b2575cd1",url:"./mikutap/icon.png"},{revision:"56ba4222adad2322b0168981868bc934",url:"./mikutap/index.html"},{revision:"936ff3edd8373c243f56bf9c0fc66ec8",url:"./mikutap/js/mikutap.min.js"},{revision:"ee0a7ce469b3a15bd2c57ef76f38dbc6",url:"./mikutap/shared/css/common-1.css"},{revision:"a1aba3a1001e09230cbfdb18d522cdbc",url:"./mikutap/shared/css/index-1.css"},{revision:"43e49a61141c64bcf8d7981f7a6a26f5",url:"./mikutap/shared/js/common-2.min.js"},{revision:"b74c8c57d13ad72401b651f4128a2468",url:"./mikutap/shared/sp/css/common.css"},{revision:"c9c2dc0946e6d2b1a3b658d16007882e",url:"./page/2/index.html"},{revision:"00ff8264a07132888fd4e84ba8f3e361",url:"./play/index.html"},{revision:"88b5e706234a8906f544bb5925ef8764",url:"./posts/17931.html"},{revision:"39fd7074519212a758d53a885ab0a723",url:"./posts/22938.html"},{revision:"0671e1708d282ea9b977f06dfdc1436f",url:"./posts/24179.html"},{revision:"d71509072b4c679668fd17a9c2d3e3e5",url:"./posts/24549.html"},{revision:"e064c45a0ca75b6d458f22c955acc23a",url:"./posts/25909.html"},{revision:"0354bd56662b4af610b2be67a5f544d6",url:"./posts/27708.html"},{revision:"61b7eedb1854a03299925b1c35da3967",url:"./posts/28146.html"},{revision:"f1343bad9ba648fb84e0dd858d91ff40",url:"./posts/32716.html"},{revision:"27199f38e5b5ec65728a53c073c06471",url:"./posts/39479.html"},{revision:"4fd3af93ce40f36ae1bff057903a90b8",url:"./posts/4141.html"},{revision:"16fc39e4af2c43af8d407067bc1bdd41",url:"./posts/43359.html"},{revision:"6e175afc95ace60a947c5196fe203d2b",url:"./posts/47424.html"},{revision:"e1ddd5ca0d651f7354f02c3f6b878ec8",url:"./posts/49939.html"},{revision:"617f7750ded105be88e3ca38e4208925",url:"./posts/5913.html"},{revision:"56b4301b4ac589307e3c10bea19889f2",url:"./posts/7578.html"},{revision:"fbd6217cfd1e7a0a86e3a3d633c474a3",url:"./runner/index.html"},{revision:"9091e995cd30cb7fbe2a420285789ddc",url:"./say/index.html"},{revision:"78c5932a6a390c57d75be53e7a8e9744",url:"./search.json"},{revision:"75dad549875fc381d6c61a2c202cd644",url:"./search/index.html"},{revision:"935eb50b24d97a184ca9623a91c0f616",url:"./t-rex/assets/css/t-rex.css"},{revision:"01f2014886ea4de08147a231bebfd958",url:"./t-rex/assets/js/index.js"},{revision:"a10b0288b9d6b93b8b04de3351882514",url:"./t-rex/assets/js/t-rex.js"},{revision:"cad7798da0d84c8a6e55affb940bc76b",url:"./t-rex/index.html"},{revision:"fc2504774ffa0471a96fdb9e543a33ea",url:"./tags/Bug/index.html"},{revision:"2d5d689fc055c83117e8e2a6166378a9",url:"./tags/Coding-Pages/index.html"},{revision:"dc78be8f5f52886fd8f45ef15fb3be6e",url:"./tags/Commands/index.html"},{revision:"14174be690423f0105b211197a8c53ba",url:"./tags/Dev/index.html"},{revision:"5ae495ae90c8b0def283d14214152a67",url:"./tags/Dev/page/2/index.html"},{revision:"92ccf7f2ecea2d9e44315d3421db2eb4",url:"./tags/Emoji/index.html"},{revision:"7904abd90cc79ac284e62f5ce29389e2",url:"./tags/GitHub-Actions/index.html"},{revision:"7ea0135bfa79eb86ce62e0899d6e4425",url:"./tags/GitHub/index.html"},{revision:"470cb660fb745418314cd334819a3ad8",url:"./tags/Hexo/index.html"},{revision:"629a203d576d4dd4a6d8c5b3f5ec5ac6",url:"./tags/index.html"},{revision:"65c1ff35acdfda52754f3a7ac694ed4e",url:"./tags/issues/index.html"},{revision:"3be3026825ec69e44ec8e8b893ba6a62",url:"./tags/LeanCloud/index.html"},{revision:"2ea57dfc48858451f651a72f817c6563",url:"./tags/PicGo/index.html"},{revision:"0b803886e3e49754eeef2f245f1c9956",url:"./tags/UptimeRobot/index.html"},{revision:"ff4c66b12ce931b5a5f6743d809bd5d2",url:"./tags/URL/index.html"},{revision:"6f6d996ce253f3240d019ec074cb56fe",url:"./tags/Vercel/index.html"},{revision:"bd85de8b3a5c1e5d441342c2acc2e3f0",url:"./tags/wenyan-lang/index.html"},{revision:"ff3b815ff2c7bcea77dce23a4b0fcacd",url:"./tags/Windows/index.html"},{revision:"156984d76ffbd39ac7f95f1048de8915",url:"./tags/图床/index.html"},{revision:"557a66673bc1ffedf97908fa16eb3d57",url:"./tags/文言文编程/index.html"},{revision:"cece580b062c7b6cffb0b1aaa7d18522",url:"./tags/浏览器/index.html"},{revision:"a119a21444db2f9d3b322e3220f7396f",url:"./tags/炫酷文字/index.html"},{revision:"f7699fdd97f795c5e0a6193d0d435fe6",url:"./tags/网站存活监控/index.html"},{revision:"fabf7271fcada1bc1f03c6f2aa92f982",url:"./vercel.json"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:86400}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();