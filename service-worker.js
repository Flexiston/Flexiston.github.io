const workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/5.1.3/workbox-sw.js"),workbox.setConfig({modulePathPrefix:"https://storage.googleapis.com/workbox-cdn/releases/5.1.3/"}),workbox.core.setCacheNameDetails({prefix:"Flexiston's Blog"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"7cf2de0f8204e982a62b1506fc18ea11",url:"./404.html"},{revision:"007c240fc3c3521598c373b4840fd8a5",url:"./about/index.html"},{revision:"b1d107f1a3b3b3524fb1f4b3bf298acf",url:"./archives/2020/04/index.html"},{revision:"79c98768470071633ef140df45c963b9",url:"./archives/2020/05/index.html"},{revision:"4f73ecad96e196d789dfddac67c11bb7",url:"./archives/2020/06/index.html"},{revision:"5cd705d3c08c6015b0e78e7da416f322",url:"./archives/2020/07/index.html"},{revision:"5926d2a73e93bbf1b1d3213593e2963c",url:"./archives/2020/08/index.html"},{revision:"a35b0efbb838db41b6c754d0028f4ac2",url:"./archives/2020/09/index.html"},{revision:"ea77bc52e9d99b4b8bb38c083a4827b4",url:"./archives/2020/index.html"},{revision:"0ac8d0c6670053716225fbbc2d910fca",url:"./archives/2020/page/2/index.html"},{revision:"68ec6805e1daf69d15e0a020874e85b8",url:"./archives/index.html"},{revision:"3cd82be7e27b52866d23fc06d9fc36a2",url:"./archives/page/2/index.html"},{revision:"7f10acf9ad025b87772e286cb23879c2",url:"./badapple/index.html"},{revision:"988bd2fa6851927329da1f55f0d1ee5d",url:"./badapple/js/badapple.js"},{revision:"628072e7212db1e8cdacb22b21752cda",url:"./badapple/js/jquery-min.js"},{revision:"9fb351efc4b8a7db51d2d7325f60fb03",url:"./baidu_verify_spMQLbgc0m.html"},{revision:"94ddba695d282825fcd8b1eb4187f3d1",url:"./baidu/css/style.css"},{revision:"587c37488cb060f2dffa18bc0cc9a684",url:"./baidu/favicon.ico"},{revision:"3827ccd99125adc9eb7624fb423e71cb",url:"./baidu/img/arrow.png"},{revision:"d9c8750bed0b3c7d089fa7d55720d6cf",url:"./baidu/img/baidu_logo.png"},{revision:"0b2e66002f135da2499c4d10bcf39421",url:"./baidu/img/hand.png"},{revision:"4d7dee44d5413d5ad6adcf2df46ba407",url:"./baidu/index.html"},{revision:"27d2a8f719fb69c08dba85b6ddb36b11",url:"./baidu/js/base64.min.js"},{revision:"af8ab36589315582ccdd82f22e84bffb",url:"./baidu/js/clipboard.min.js"},{revision:"1d35678c5edbb639ab7aa5cce0856f57",url:"./baidu/js/jquery.min.js"},{revision:"02c6da5f65b5b4e3a7f815bee5a7d14e",url:"./baidu/js/script.js"},{revision:"a605119348ae6efcc2137868584713da",url:"./baidu/README.html"},{revision:"6f79b93f3825b881f80a56b9c0fc6ff2",url:"./catch-cat.min.js"},{revision:"bad1f8fe254e6ccc2c1af67fdfe0f345",url:"./catchcat/index.html"},{revision:"83086222db4b19a7a8a150b30aa8b98f",url:"./categories/Bug/index.html"},{revision:"a5f16dc3134a23969136ff94ce63cd79",url:"./categories/Dev/GitHub/index.html"},{revision:"30e097987395c89898e70aeebf66ee16",url:"./categories/Dev/Hexo/index.html"},{revision:"4001029f854e8361af8faf7791658ade",url:"./categories/Dev/index.html"},{revision:"f26887b4c34f7028705ec8e2ce70265f",url:"./categories/Dev/page/2/index.html"},{revision:"0a9055abf228b3a3530d005ab0249c8d",url:"./categories/Dev/Vercel/index.html"},{revision:"3c8d41b8ee00b8fb0d49a7a7f85bf41d",url:"./categories/Dev/Windows/index.html"},{revision:"1f0e7aefff0f15dfddd960d4221aca47",url:"./categories/Dev/工具/index.html"},{revision:"428b0fd08668a367a51d33fe46a3375c",url:"./categories/Emoji/index.html"},{revision:"d1e331930fabf06f22a5b6a152a604db",url:"./categories/GitHub/index.html"},{revision:"d8a37dd9138677428f3c67c833e917c2",url:"./categories/index.html"},{revision:"b1bf31b4c1abc7b33965ca562163d1c1",url:"./categories/文言文编程/index.html"},{revision:"698e02ce8d89a35981fafd9cbafac6fd",url:"./categories/白嫖/index.html"},{revision:"73c1df28e62f080a22d60be6aa4d6a96",url:"./changelog/index.html"},{revision:"cd5c067692c2566e20a4c5538c5d4895",url:"./css/style/dark.l.css"},{revision:"2951d31969396c10edae1aa473ebbcfd",url:"./css/style/highlight/dark.css"},{revision:"69a3c6d40352bda11161e36707c3c8d8",url:"./css/style/highlight/index.css"},{revision:"5058aed5cc27ddcb5e482c73cd59fb75",url:"./css/style/index.rxl.css"},{revision:"f9f74b96518a31f3eb556c857447fefb",url:"./css/style/links.css"},{revision:"72622e54aac09aaa381730a70676a78f",url:"./favicon.ico"},{revision:"7849a44842892448dda85717a0e51b27",url:"./friends/index.html"},{revision:"1f6ce2a3e6be229e6d4eba67896c2c96",url:"./github-calendar.css"},{revision:"b7e7f9af145900e2024111c7bf1340b6",url:"./github-calendar.js"},{revision:"4f197ac147953e17dbfcf9a328e97118",url:"./hack/index.html"},{revision:"d3c7303314c654867fb60a2c4fa85a69",url:"./index.html"},{revision:"9191e63d0d8eb49a50b567d154b997dc",url:"./js/galmenu.l.js"},{revision:"60805d5cd3ac4bc59aae651b65e92433",url:"./js/main.lr.js"},{revision:"20451006daade4ce1657e8097b1f65ca",url:"./lab/index.html"},{revision:"f564bbb092181f20953084c3ed507461",url:"./manifest.json"},{revision:"61692c5bb61508bf3d915be6e6c060b3",url:"./map/index.html"},{revision:"1b3819adb7fdc61d51e9784bcec93a0d",url:"./mikutap/css/mikutap.css"},{revision:"5279a09d7a75b44f3c35364ea2a8f08b",url:"./mikutap/data/main/main.json"},{revision:"d94b20e465ff7289142b647c1ac142ea",url:"./mikutap/data/track/track.json"},{revision:"4b63179db3c45dfd9078a252b2575cd1",url:"./mikutap/icon.png"},{revision:"56ba4222adad2322b0168981868bc934",url:"./mikutap/index.html"},{revision:"936ff3edd8373c243f56bf9c0fc66ec8",url:"./mikutap/js/mikutap.min.js"},{revision:"ee0a7ce469b3a15bd2c57ef76f38dbc6",url:"./mikutap/shared/css/common-1.css"},{revision:"a1aba3a1001e09230cbfdb18d522cdbc",url:"./mikutap/shared/css/index-1.css"},{revision:"43e49a61141c64bcf8d7981f7a6a26f5",url:"./mikutap/shared/js/common-2.min.js"},{revision:"b74c8c57d13ad72401b651f4128a2468",url:"./mikutap/shared/sp/css/common.css"},{revision:"fbe994054426fadb2dff69d824c5c67a",url:"./music/css/APlayer.min.css"},{revision:"269550530cc127b6aa5a35925a7de6ce",url:"./music/css/font-awesome.min.css"},{revision:"837f456b0d75c8dca741d4186444412a",url:"./music/css/justaddmusic.css"},{revision:"674f50d287a8c48dc19ba404d20fe713",url:"./music/fonts/fontawesome-webfont.eot"},{revision:"912ec66d7572ff821749319396470bde",url:"./music/fonts/fontawesome-webfont.svg"},{revision:"b06871f281fee6b241d60582ae9369b9",url:"./music/fonts/fontawesome-webfont.ttf"},{revision:"fee66e712a8a08eef5805a46892932ad",url:"./music/fonts/fontawesome-webfont.woff"},{revision:"af7ae505a9eed503f8b8e6982036873e",url:"./music/fonts/fontawesome-webfont.woff2"},{revision:"128b5913f2f7b043fe92a8a9794c674d",url:"./music/index.html"},{revision:"f318fa1b12f6d5f475a863ee2bb728ee",url:"./music/js/APlayer.min.jam.js"},{revision:"c6acc06546a0d076942b0c81c4befbfd",url:"./music/js/jamsetting.js"},{revision:"12b69d0ae6c6f0c42942ae6da2896e84",url:"./music/js/jquery.js"},{revision:"16530b39ad7e6d012f7e840446fc18e6",url:"./music/js/JustAddMusic.js"},{revision:"f3a86e82ec5d2eb807eab601c30681ac",url:"./music/js/Meting.min.js"},{revision:"72008b8c47e08cec32b3575fce9d5579",url:"./page/2/index.html"},{revision:"e2a0777e3d3f79900fea646e08d09f8e",url:"./posts/17931.html"},{revision:"3fb69b1f7e7b6cc0cef9bad4a43aaade",url:"./posts/22938.html"},{revision:"ac5e85cce287b5fbfdbf4496033e92d1",url:"./posts/24179.html"},{revision:"2b49c7de07b6dce4cedecf25cb1d0835",url:"./posts/24549.html"},{revision:"f26c4fa00eed156ce2828e19002dcb67",url:"./posts/25909.html"},{revision:"ce1399b74d9e2445159e394947d0e4d9",url:"./posts/27708.html"},{revision:"e733782a95e7b0882a1d61141493db47",url:"./posts/28146.html"},{revision:"6533d2c1e2c9a1fa7d0401760cafa7f0",url:"./posts/32716.html"},{revision:"be4d2a5b8150c02519caa264085bc0df",url:"./posts/39479.html"},{revision:"616834557e8242a8dcd177f66ec7da0d",url:"./posts/4141.html"},{revision:"51d3ffe3b65571dd7f54fbd3b6df9ff1",url:"./posts/43359.html"},{revision:"59aec36bd2c947d67dd24eef57868da2",url:"./posts/47424.html"},{revision:"edbec7d4731d0966ffcabf359457f3eb",url:"./posts/49939.html"},{revision:"1789a4381d56d45c787d4146d71629d4",url:"./posts/5913.html"},{revision:"eb33dd4692d00fafeb2ce0442c5801b2",url:"./posts/7578.html"},{revision:"ed5f6cd443ba4b9e09b89a697cf02988",url:"./runner/index.html"},{revision:"3da1396c2baf7c683636fc79a9bae660",url:"./say/index.html"},{revision:"8c2e98dd59d0e8de36d76fb7f1c4cad1",url:"./scare/huaji.png"},{revision:"512f2623d9690adb2ec4eaff840150d3",url:"./scare/index.html"},{revision:"8b1d8d486f869bf870ae4fd7141e94d2",url:"./scare/shine.png"},{revision:"91c2a2331d94b40aa412f1104e9172db",url:"./search.json"},{revision:"64dc58d85f6e52165424d3dad177b766",url:"./search/index.html"},{revision:"67dadc38ebc1ecca32ab23070502fd35",url:"./sys/css/styles.css"},{revision:"b382eae68fd603290ecee365ce363df4",url:"./sys/index.html"},{revision:"1c9b92d63ce48c3386ce98a9f3e13939",url:"./sys/js/prefixfree.min.js"},{revision:"f701ddfb0e63e14747ef0c7502429d27",url:"./sys/js/scripts.min.js"},{revision:"935eb50b24d97a184ca9623a91c0f616",url:"./t-rex/assets/css/t-rex.css"},{revision:"01f2014886ea4de08147a231bebfd958",url:"./t-rex/assets/js/index.js"},{revision:"a10b0288b9d6b93b8b04de3351882514",url:"./t-rex/assets/js/t-rex.js"},{revision:"f55d41497434e5bf31b86a9c10cac4f2",url:"./t-rex/index.html"},{revision:"73c89164d0a84fac61bc75a26338abee",url:"./tags/Bug/index.html"},{revision:"04b733588f0e48a80614c8c8fc7a52b2",url:"./tags/Coding-Pages/index.html"},{revision:"e10020b8ffac7ab5c8de9c03b946faf0",url:"./tags/Commands/index.html"},{revision:"68fcf2e781cf822a06fd8ea0c90e3d31",url:"./tags/Dev/index.html"},{revision:"d7ad55ac5aaabb17c0afbfed95536a30",url:"./tags/Dev/page/2/index.html"},{revision:"27987e36553718a8a02871fc1b76eccc",url:"./tags/Emoji/index.html"},{revision:"c1136a2881fa18011dde9b8af1441c00",url:"./tags/GitHub-Actions/index.html"},{revision:"e4be5da86054b76d6eb0c55d759235ef",url:"./tags/GitHub/index.html"},{revision:"a92b442558a46f8e4efe1212ae5da141",url:"./tags/Hexo/index.html"},{revision:"2e0e97e61e2e21347007049058fe8a8f",url:"./tags/index.html"},{revision:"6d4d044b70f91bb493c234da3b872d46",url:"./tags/issues/index.html"},{revision:"34a9a2af9e649ab75d681a7620d59f00",url:"./tags/LeanCloud/index.html"},{revision:"54136ba9d727abf4fbeff003c4cdc462",url:"./tags/PicGo/index.html"},{revision:"93e82accea44bea0dea2ea8259ceb689",url:"./tags/UptimeRobot/index.html"},{revision:"4ee10622d1deaf839f9216b55f354209",url:"./tags/URL/index.html"},{revision:"7a5bd5c2bb28b69c629d9e7d189785ef",url:"./tags/Vercel/index.html"},{revision:"2a5fe66b0af4199e588826e1c3134bcb",url:"./tags/wenyan-lang/index.html"},{revision:"af93efe9df04b6cb86b434318112f8d0",url:"./tags/Windows/index.html"},{revision:"17027aee46e785c5bbf89a6c9a80b4b8",url:"./tags/图床/index.html"},{revision:"75d2a086caa6e2459b172483aafadab8",url:"./tags/文言文编程/index.html"},{revision:"6e22475824e95084900eb383735efc36",url:"./tags/浏览器/index.html"},{revision:"7860855db8db27aaf19813493e9cdbdc",url:"./tags/炫酷文字/index.html"},{revision:"4e88c4a358842c66d39ad123c99cd42f",url:"./tags/网站存活监控/index.html"},{revision:"95c2e48082b5cf097a30c4f0073a574f",url:"./td/index.html"},{revision:"9099512cadb64a12db8e4c9c253bb7af",url:"./td/td-pkg-en-min.js"},{revision:"847db3c5f462b42ca2f6fe64022fbbcc",url:"./td/td-pkg-zh-min.js"},{revision:"c0826d3f33ebd3651e0cae7346f052d3",url:"./td/td-pkg.js"},{revision:"fabf7271fcada1bc1f03c6f2aa92f982",url:"./vercel.json"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:86400}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();