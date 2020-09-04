"use strict";var workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/workbox-sw.js")),workbox.setConfig({modulePathPrefix:"https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/")}),workbox.core.setCacheNameDetails({prefix:"Flexiston's Blog"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"03cd8ac3857740ebda66409e0d7c6849",url:"./404.html"},{revision:"7bf9cb69962b13032ad2c0ddead28e5f",url:"./about/index.html"},{revision:"d2ee48e381b9e19920a2f73a014c60e3",url:"./apply-link/index.html"},{revision:"a02cf82d1944fe8d9bf5f8fd29bc91cc",url:"./archives/2020/04/index.html"},{revision:"68f8121d93092d0c132e70d9cb9fb662",url:"./archives/2020/05/index.html"},{revision:"9cea15e77386fe9789b9cf4eb79e8a8a",url:"./archives/2020/06/index.html"},{revision:"87f6a4e8787a269244dc31d38e039819",url:"./archives/2020/07/index.html"},{revision:"07329cb8d055660185aa957d3761564d",url:"./archives/2020/08/index.html"},{revision:"2898c8f87b49f0e412003663bd5ba719",url:"./archives/2020/index.html"},{revision:"142156d33a571a668f7ee4cb8b5ccf62",url:"./archives/2020/page/2/index.html"},{revision:"8b0046be1665ebafc932c4d8d127d7a4",url:"./archives/index.html"},{revision:"3577c9db845f6731ea19a20d3a8285b4",url:"./archives/page/2/index.html"},{revision:"9fb351efc4b8a7db51d2d7325f60fb03",url:"./baidu_verify_spMQLbgc0m.html"},{revision:"493321397a4dfcce00d15d06cc0c6762",url:"./catch-cat.min.js"},{revision:"5f5a3c51d95de84b84d02c2f60cfc919",url:"./catch-cat/index.html"},{revision:"961936fec7d36850ce40490284e35005",url:"./categories/Bug/index.html"},{revision:"8ae258a48b084fd384e47daf0f5d7dfe",url:"./categories/Dev/GitHub/index.html"},{revision:"ec9380ad5f9ead14e186740229633f50",url:"./categories/Dev/Hexo/index.html"},{revision:"df8e6ea28c5e0fc80e56575430de3fba",url:"./categories/Dev/index.html"},{revision:"e47215df22e14de4e5c6a23d2ed65fa8",url:"./categories/Dev/page/2/index.html"},{revision:"058c61264c7d1a84a6df9a718513e73a",url:"./categories/Dev/Vercel/index.html"},{revision:"9fdb833eec7c4ca8cc4789098964c895",url:"./categories/Dev/Windows/index.html"},{revision:"c4831c4d81ab2352ff25063f6e574438",url:"./categories/Dev/工具/index.html"},{revision:"e89d0dbabd30059acfaffa3577c66275",url:"./categories/Emoji/index.html"},{revision:"1c8329ad3e0f2e65e0821d539870885c",url:"./categories/GitHub/index.html"},{revision:"462c3cad7b1e42c84e8653ee85eff209",url:"./categories/index.html"},{revision:"b02bed465a1ec3c5d26d73c4a8bb9ea7",url:"./categories/文言文编程/index.html"},{revision:"a6a240f4d4cb9f9b0114eb4c845c30b5",url:"./css/style/flesx.css"},{revision:"ddb82c3174916eb6f55357c44758be89",url:"./css/style/note.css"},{revision:"fc764d9a99cd208d780999d32b2c47da",url:"./css/style/timeline.l.css"},{revision:"432e1fde311abc4cb282ac6cc045a2ca",url:"./css/style/valine.l.css"},{revision:"b2e5f90d67fcd5bde63f51b16ba4d5f2",url:"./favicon.png"},{revision:"a7b1dbb499cd91ea8224cde1ac2d568d",url:"./friends/index.html"},{revision:"f47e84ad4758dc60194dae4823302033",url:"./index.html"},{revision:"3eaec3b0473d3042cc8dea3ea181aa41",url:"./js/app.js"},{revision:"f564bbb092181f20953084c3ed507461",url:"./manifest.json"},{revision:"217435fc814c6dade0c985f8445d557b",url:"./map/index.html"},{revision:"1b3819adb7fdc61d51e9784bcec93a0d",url:"./mikutap/css/mikutap.css"},{revision:"5279a09d7a75b44f3c35364ea2a8f08b",url:"./mikutap/data/main/main.json"},{revision:"d94b20e465ff7289142b647c1ac142ea",url:"./mikutap/data/track/track.json"},{revision:"4b63179db3c45dfd9078a252b2575cd1",url:"./mikutap/icon.png"},{revision:"56ba4222adad2322b0168981868bc934",url:"./mikutap/index.html"},{revision:"936ff3edd8373c243f56bf9c0fc66ec8",url:"./mikutap/js/mikutap.min.js"},{revision:"ee0a7ce469b3a15bd2c57ef76f38dbc6",url:"./mikutap/shared/css/common-1.css"},{revision:"a1aba3a1001e09230cbfdb18d522cdbc",url:"./mikutap/shared/css/index-1.css"},{revision:"43e49a61141c64bcf8d7981f7a6a26f5",url:"./mikutap/shared/js/common-2.min.js"},{revision:"b74c8c57d13ad72401b651f4128a2468",url:"./mikutap/shared/sp/css/common.css"},{revision:"b6449a780270e20221c35127df4aaf64",url:"./page/2/index.html"},{revision:"c7399b73933cd4da817df416962aea5f",url:"./play/index.html"},{revision:"b7c2575f98a6a1b15aeb3cba138cfd2e",url:"./posts/17931.html"},{revision:"aa89d011c28e15b556cbb5f69a5f8297",url:"./posts/22938.html"},{revision:"aa403ffe1b9c7249ae02a38d7738254f",url:"./posts/24179.html"},{revision:"39d6d6b5508359ffabc9b7faa269acbd",url:"./posts/24549.html"},{revision:"689b372e4548ca380776d7ac26e8af18",url:"./posts/25909.html"},{revision:"0706fae690ae6cabda28c9738430bcc8",url:"./posts/28146.html"},{revision:"91d46ff92eb73f2d3f3364271ea3b6c0",url:"./posts/32716.html"},{revision:"2e36ce796ef5c1a1ce1adb881da6a788",url:"./posts/39479.html"},{revision:"0ff8395080814e922578af7f52ac3038",url:"./posts/4141.html"},{revision:"2a5119a29808a1ff9058727e080c8818",url:"./posts/43359.html"},{revision:"760b774baf3a415036cb0fb693d65462",url:"./posts/47424.html"},{revision:"3d85a8317c6b12320b6611873df69e19",url:"./posts/49939.html"},{revision:"0b26ba7318045ee2e3a5ccfbfeb0054f",url:"./posts/5913.html"},{revision:"2983054fa5342db273eda931b35e2b54",url:"./posts/7578.html"},{revision:"a00887b818c8855869cccd6074c4bf2e",url:"./runner/index.html"},{revision:"60f2e8030d318a4ce6b895d0574f821e",url:"./say/index.html"},{revision:"b6764080fcaca4ec45e69e244a1a4662",url:"./search.json"},{revision:"c9339532efa4a2d0ab8e8ca7268f7d4b",url:"./search/index.html"},{revision:"935eb50b24d97a184ca9623a91c0f616",url:"./t-rex/assets/css/t-rex.css"},{revision:"01f2014886ea4de08147a231bebfd958",url:"./t-rex/assets/js/index.js"},{revision:"7bc8783256a189ab13556a4f89a9b96c",url:"./t-rex/assets/js/t-rex.js"},{revision:"cad7798da0d84c8a6e55affb940bc76b",url:"./t-rex/index.html"},{revision:"771cf82242bde6d8db20f322f7cdc385",url:"./tags/Bug/index.html"},{revision:"85699c5ce095ca298b1c08fe5135721a",url:"./tags/Coding-Pages/index.html"},{revision:"824453e30c296a62d92557d49eb3c3c3",url:"./tags/Commands/index.html"},{revision:"1c8e2f9c5d439e1c96312afd6c155942",url:"./tags/Dev/index.html"},{revision:"28da8bbd2f7e72e7dfcedcc9b6e1db1a",url:"./tags/Emoji/index.html"},{revision:"ed125ef0dd13fcea99adbae34fd7ae4c",url:"./tags/GitHub-Actions/index.html"},{revision:"ae99c55410cc303402b4de295de062d6",url:"./tags/GitHub/index.html"},{revision:"dc5518cb03887c3b145df583e4f672a2",url:"./tags/Hexo/index.html"},{revision:"eae006f52218734f4050324d28a927dd",url:"./tags/index.html"},{revision:"cd5dbe8c67aac3bb3405e9a00ea980d4",url:"./tags/issues/index.html"},{revision:"67a2b9589ee135c8e22a3b60e421eaaf",url:"./tags/LeanCloud/index.html"},{revision:"17f145c1d773b054740b9417b0da17ef",url:"./tags/UptimeRobot/index.html"},{revision:"f62bdc44ca9fc4c76066ded41430724a",url:"./tags/URL/index.html"},{revision:"1a30055e49b60dd0f1dd0f50b83ebcc5",url:"./tags/Vercel/index.html"},{revision:"f9acea020ab7e89ec4fe3a6a6f5fb42e",url:"./tags/wenyan-lang/index.html"},{revision:"ff143624add4fd7b33650c7f9349ed39",url:"./tags/Windows/index.html"},{revision:"103fd5a40b30ec5f83d1656923950362",url:"./tags/文言文编程/index.html"},{revision:"ab56d293e5841bc163781c56a577cb98",url:"./tags/浏览器/index.html"},{revision:"5a43bd72bee220b62d84096468ac448a",url:"./tags/炫酷文字/index.html"},{revision:"649967f4e085cfd3769d545b220899cd",url:"./tags/网站存活监控/index.html"},{revision:"9b931a79f855d5b7cc58d00a8f57ec12",url:"./timeline/index.html"},{revision:"fabf7271fcada1bc1f03c6f2aa92f982",url:"./vercel.json"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:259200}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();