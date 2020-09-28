const workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/5.1.3/workbox-sw.js"),workbox.setConfig({modulePathPrefix:"https://storage.googleapis.com/workbox-cdn/releases/5.1.3/"}),workbox.core.setCacheNameDetails({prefix:"Flexiston's Blog"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"866ed043b8d67633de95d875b6df10a3",url:"./404.html"},{revision:"702086aad298a2006dafeb69a670df51",url:"./about/index.html"},{revision:"bf82780f58534bf41d9fe04f8a6e31b2",url:"./archives/2020/04/index.html"},{revision:"996494e6d7656b11269a953bd685b1c0",url:"./archives/2020/05/index.html"},{revision:"0d9951ef98c44473164ba133d9eb7b43",url:"./archives/2020/06/index.html"},{revision:"f07ca0358d14694c83dd487b2b354701",url:"./archives/2020/07/index.html"},{revision:"8199c6f63906b577d8100afe79ae85d3",url:"./archives/2020/08/index.html"},{revision:"82dcabdb6813da876fac9d8b0b29ff5e",url:"./archives/2020/09/index.html"},{revision:"dfc27b002aadd1032c01a36e6d06d93a",url:"./archives/2020/index.html"},{revision:"117486de321d2e8da5ce0a1fc5b92085",url:"./archives/2020/page/2/index.html"},{revision:"1ff90b6bfc3c7cfa03922592993f5c5e",url:"./archives/index.html"},{revision:"8239da0e2f2929ab8f131fe2b3fda9e0",url:"./archives/page/2/index.html"},{revision:"9fb351efc4b8a7db51d2d7325f60fb03",url:"./baidu_verify_spMQLbgc0m.html"},{revision:"6f79b93f3825b881f80a56b9c0fc6ff2",url:"./catch-cat.min.js"},{revision:"b5b086936518cf3a72110860535e674b",url:"./catch-cat/index.html"},{revision:"ba1de622975ac3fb846c31f6880673a3",url:"./categories/Bug/index.html"},{revision:"6536e3ce9fba5c2b96c3cadd9e8536f2",url:"./categories/Dev/GitHub/index.html"},{revision:"589ab05ccf4094cfc0c95cc59b3aaf57",url:"./categories/Dev/Hexo/index.html"},{revision:"c40adbb0b8a56f0168d862fe51d0dfd8",url:"./categories/Dev/index.html"},{revision:"a4ea3ac0acab75b70d193e8ca497bcdb",url:"./categories/Dev/page/2/index.html"},{revision:"540c58904108bf07c5064223c00ba784",url:"./categories/Dev/Vercel/index.html"},{revision:"3c5be520136dc5b990020ef57105316f",url:"./categories/Dev/Windows/index.html"},{revision:"25775c34ad246d4eaa3fe456ffbabb29",url:"./categories/Dev/工具/index.html"},{revision:"ebe9c25ab3cba04289259a0910352846",url:"./categories/Emoji/index.html"},{revision:"abe7b380de70506509b302e10763d9b0",url:"./categories/GitHub/index.html"},{revision:"76380bfb7f8bf4b746cccc22562d2d25",url:"./categories/index.html"},{revision:"3342599f8dc1950e4393aab007400acf",url:"./categories/文言文编程/index.html"},{revision:"f588af3458aca23101ce0ececd492a08",url:"./categories/白嫖/index.html"},{revision:"61eaf84c34e7301d1449eefc81fef0d5",url:"./changelog/index.html"},{revision:"8768d32cd6ea3215f8c1134ba91e1763",url:"./css/style/dark.css"},{revision:"2951d31969396c10edae1aa473ebbcfd",url:"./css/style/highlight/dark.css"},{revision:"69a3c6d40352bda11161e36707c3c8d8",url:"./css/style/highlight/index.css"},{revision:"177b25fa6a602b974b108e4132e7cf8d",url:"./css/style/index.lrx.css"},{revision:"ad92a9b3bbf67dc1f9649d065f1f1086",url:"./css/style/links.css"},{revision:"72622e54aac09aaa381730a70676a78f",url:"./favicon.ico"},{revision:"93dc95c4aef0effa4bf918aa886609a0",url:"./friends/index.html"},{revision:"1f6ce2a3e6be229e6d4eba67896c2c96",url:"./github-calendar.css"},{revision:"b7e7f9af145900e2024111c7bf1340b6",url:"./github-calendar.js"},{revision:"81cf45b88279a1e8a9b625e037e20ecb",url:"./index.html"},{revision:"9191e63d0d8eb49a50b567d154b997dc",url:"./js/galmenu.l.js"},{revision:"60805d5cd3ac4bc59aae651b65e92433",url:"./js/main.lr.js"},{revision:"d039905730b8d9db3649973f3c7cc28c",url:"./map/index.html"},{revision:"1b3819adb7fdc61d51e9784bcec93a0d",url:"./mikutap/css/mikutap.css"},{revision:"5279a09d7a75b44f3c35364ea2a8f08b",url:"./mikutap/data/main/main.json"},{revision:"d94b20e465ff7289142b647c1ac142ea",url:"./mikutap/data/track/track.json"},{revision:"4b63179db3c45dfd9078a252b2575cd1",url:"./mikutap/icon.png"},{revision:"56ba4222adad2322b0168981868bc934",url:"./mikutap/index.html"},{revision:"936ff3edd8373c243f56bf9c0fc66ec8",url:"./mikutap/js/mikutap.min.js"},{revision:"ee0a7ce469b3a15bd2c57ef76f38dbc6",url:"./mikutap/shared/css/common-1.css"},{revision:"a1aba3a1001e09230cbfdb18d522cdbc",url:"./mikutap/shared/css/index-1.css"},{revision:"43e49a61141c64bcf8d7981f7a6a26f5",url:"./mikutap/shared/js/common-2.min.js"},{revision:"b74c8c57d13ad72401b651f4128a2468",url:"./mikutap/shared/sp/css/common.css"},{revision:"fbe994054426fadb2dff69d824c5c67a",url:"./music/css/APlayer.min.css"},{revision:"269550530cc127b6aa5a35925a7de6ce",url:"./music/css/font-awesome.min.css"},{revision:"837f456b0d75c8dca741d4186444412a",url:"./music/css/justaddmusic.css"},{revision:"674f50d287a8c48dc19ba404d20fe713",url:"./music/fonts/fontawesome-webfont.eot"},{revision:"912ec66d7572ff821749319396470bde",url:"./music/fonts/fontawesome-webfont.svg"},{revision:"b06871f281fee6b241d60582ae9369b9",url:"./music/fonts/fontawesome-webfont.ttf"},{revision:"fee66e712a8a08eef5805a46892932ad",url:"./music/fonts/fontawesome-webfont.woff"},{revision:"af7ae505a9eed503f8b8e6982036873e",url:"./music/fonts/fontawesome-webfont.woff2"},{revision:"588ec2e5758a49878fcc1f4de7bc8262",url:"./music/index.html"},{revision:"f318fa1b12f6d5f475a863ee2bb728ee",url:"./music/js/APlayer.min.jam.js"},{revision:"c6acc06546a0d076942b0c81c4befbfd",url:"./music/js/jamsetting.js"},{revision:"12b69d0ae6c6f0c42942ae6da2896e84",url:"./music/js/jquery.js"},{revision:"16530b39ad7e6d012f7e840446fc18e6",url:"./music/js/JustAddMusic.js"},{revision:"f3a86e82ec5d2eb807eab601c30681ac",url:"./music/js/Meting.min.js"},{revision:"79cf2e3d4257162603bf8fc363433500",url:"./page/2/index.html"},{revision:"9035883af3643c3a7c73079660118cfc",url:"./play/index.html"},{revision:"9eb6c6fd82325b6fc5f0b45a748609d4",url:"./posts/17931.html"},{revision:"6c4b000ecde75c2cc62b171c4d09c0dc",url:"./posts/22938.html"},{revision:"94db15bd005d1b3830f6a82c5bb3a41f",url:"./posts/24179.html"},{revision:"6bdfef40355e4589d36ec30bca68ddd0",url:"./posts/24549.html"},{revision:"0b6cc9c2aa53a7daeaf3867d73676be8",url:"./posts/25909.html"},{revision:"ae19a9e1040fdc3552c8519aacbb06ba",url:"./posts/27708.html"},{revision:"9c4cddc1339b074284828e39dd94b936",url:"./posts/28146.html"},{revision:"4217a2c3063e975b5914883450242e6e",url:"./posts/32716.html"},{revision:"3560cc74ec1aad5b0b790c6064396e03",url:"./posts/39479.html"},{revision:"6886d27493c520bbfdb9280b4e478b7c",url:"./posts/4141.html"},{revision:"950d4733b2ecc626f8ef77c6efe52bcc",url:"./posts/43359.html"},{revision:"080ab5dd5bb582a532d37df8355fbedc",url:"./posts/47424.html"},{revision:"5b54c646b752b4a722e8a6fb01aa9c94",url:"./posts/49939.html"},{revision:"6e0d369074c4a761f008187ed998280c",url:"./posts/5913.html"},{revision:"328880ef7b1ff18a8f0a5cfa8ef3cb4f",url:"./posts/7578.html"},{revision:"be86e0afcdcbaf577b433107728e9dd5",url:"./runner/index.html"},{revision:"4bc3360de33b8d52435341ee9f1202b4",url:"./say/index.html"},{revision:"7f7ccc5ec75b8e5530069a18c20e7244",url:"./search.json"},{revision:"e00399460e02af7b87df2ebe96be3be5",url:"./search/index.html"},{revision:"935eb50b24d97a184ca9623a91c0f616",url:"./t-rex/assets/css/t-rex.css"},{revision:"01f2014886ea4de08147a231bebfd958",url:"./t-rex/assets/js/index.js"},{revision:"a10b0288b9d6b93b8b04de3351882514",url:"./t-rex/assets/js/t-rex.js"},{revision:"cad7798da0d84c8a6e55affb940bc76b",url:"./t-rex/index.html"},{revision:"a59710e89a12dc8084846a43bc75b757",url:"./tags/Bug/index.html"},{revision:"6baadd846a21dc231f6c722c94099e44",url:"./tags/Coding-Pages/index.html"},{revision:"7e9726ee4257831d86e826c4dfee91cd",url:"./tags/Commands/index.html"},{revision:"19df658e23ed2406007163ccac32d1a9",url:"./tags/Dev/index.html"},{revision:"6952141a8776394892afa8a3dacd39e6",url:"./tags/Dev/page/2/index.html"},{revision:"a366f0cb7cb5f3a7c9f220589dec0a10",url:"./tags/Emoji/index.html"},{revision:"1b925e31e87f74f6b708d325c8627843",url:"./tags/GitHub-Actions/index.html"},{revision:"061d292fd18601165057a2e38bff9774",url:"./tags/GitHub/index.html"},{revision:"4612a2f9650c9453f7959223c0be9fee",url:"./tags/Hexo/index.html"},{revision:"0fb9b8d518404c8c0ba993358c4eca55",url:"./tags/index.html"},{revision:"b2560ad6cf9f5f804f4547d7b36f122e",url:"./tags/issues/index.html"},{revision:"1d1552a2ff6fa47d22a86d3337000f89",url:"./tags/LeanCloud/index.html"},{revision:"5186b9b0ee60e4768eb981d0ded2c57d",url:"./tags/PicGo/index.html"},{revision:"7015b49235965d231b6d5271f8b05446",url:"./tags/UptimeRobot/index.html"},{revision:"7724fec87ac88f2e859dcf463c7742af",url:"./tags/URL/index.html"},{revision:"08ca96f75b5610023a1b2321f6a4c784",url:"./tags/Vercel/index.html"},{revision:"5f5e744afdaa31caf86ee81773c8fb09",url:"./tags/wenyan-lang/index.html"},{revision:"b2fec3f06b5510ca0ddc27fd73fc158a",url:"./tags/Windows/index.html"},{revision:"8e65b456534d2a374b505cc4ded6198f",url:"./tags/图床/index.html"},{revision:"41df6e61a90945283ec05f2a34bc68e3",url:"./tags/文言文编程/index.html"},{revision:"dd43b9430acce4c6b6a9b392e6a5fd42",url:"./tags/浏览器/index.html"},{revision:"ddd1128f80ea0c175a8948ce85417b19",url:"./tags/炫酷文字/index.html"},{revision:"00f23b93763e596544fa77faac60f2c9",url:"./tags/网站存活监控/index.html"},{revision:"fabf7271fcada1bc1f03c6f2aa92f982",url:"./vercel.json"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:86400}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();