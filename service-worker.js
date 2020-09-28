const workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/5.1.3/workbox-sw.js"),workbox.setConfig({modulePathPrefix:"https://storage.googleapis.com/workbox-cdn/releases/5.1.3/"}),workbox.core.setCacheNameDetails({prefix:"Flexiston's Blog"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"311bc88167da8130c03634c7cf07e598",url:"./404.html"},{revision:"702086aad298a2006dafeb69a670df51",url:"./about/index.html"},{revision:"4bcae07d696ebe94379ba724ac48e43d",url:"./archives/2020/04/index.html"},{revision:"f4ad6c1fafceb1c34b609b7768eb7183",url:"./archives/2020/05/index.html"},{revision:"a2a4ccfeaff825e5d62aea7d5337f5c3",url:"./archives/2020/06/index.html"},{revision:"004e6003db3df1f162275345f336e495",url:"./archives/2020/07/index.html"},{revision:"a0c98344851045b9df143ad01d8c06b9",url:"./archives/2020/08/index.html"},{revision:"b6e0462f0f1f0a928b1a64b9b123b066",url:"./archives/2020/09/index.html"},{revision:"4a7e4375d87d16a32e94f9274693f958",url:"./archives/2020/index.html"},{revision:"641f5cac4a587e1ea65d9ace19e7d2c1",url:"./archives/2020/page/2/index.html"},{revision:"9f1336a6058b5bf205cac2b9fe0fa76a",url:"./archives/index.html"},{revision:"a40cf2c143ecc2553bfe0e56f787b0f2",url:"./archives/page/2/index.html"},{revision:"9fb351efc4b8a7db51d2d7325f60fb03",url:"./baidu_verify_spMQLbgc0m.html"},{revision:"6f79b93f3825b881f80a56b9c0fc6ff2",url:"./catch-cat.min.js"},{revision:"b5b086936518cf3a72110860535e674b",url:"./catch-cat/index.html"},{revision:"d155368da8a32d4aab78898ae0a340f1",url:"./categories/Bug/index.html"},{revision:"52566cea3f5130d17d12ac0142fbd2c8",url:"./categories/Dev/GitHub/index.html"},{revision:"c065e7f2c74443fc3bf7e02386d0173c",url:"./categories/Dev/Hexo/index.html"},{revision:"a0155e3ce53687c41c7e60bc26d7dc4f",url:"./categories/Dev/index.html"},{revision:"50f588c396f139503ea798e1030b9186",url:"./categories/Dev/page/2/index.html"},{revision:"a3c93d4d4d55f38b5901e06e1036e624",url:"./categories/Dev/Vercel/index.html"},{revision:"2e7ce1761e8d9f7422bc58a0d8dabb98",url:"./categories/Dev/Windows/index.html"},{revision:"340407def9ae528ccd3e0e3fb5af4454",url:"./categories/Dev/工具/index.html"},{revision:"f766d254671be72d8337467fa6b6ba4d",url:"./categories/Emoji/index.html"},{revision:"ec3c437ce505c00df307887390f48ca3",url:"./categories/GitHub/index.html"},{revision:"6ab40dfec2e26d04946c3082a119346b",url:"./categories/index.html"},{revision:"defc4f39ffe4b456d18bce7c7bbfad63",url:"./categories/文言文编程/index.html"},{revision:"c67d3445656f07150a9bd57397944bf1",url:"./categories/白嫖/index.html"},{revision:"61eaf84c34e7301d1449eefc81fef0d5",url:"./changelog/index.html"},{revision:"8768d32cd6ea3215f8c1134ba91e1763",url:"./css/style/dark.css"},{revision:"2951d31969396c10edae1aa473ebbcfd",url:"./css/style/highlight/dark.css"},{revision:"69a3c6d40352bda11161e36707c3c8d8",url:"./css/style/highlight/index.css"},{revision:"177b25fa6a602b974b108e4132e7cf8d",url:"./css/style/index.lrx.css"},{revision:"ad92a9b3bbf67dc1f9649d065f1f1086",url:"./css/style/links.css"},{revision:"72622e54aac09aaa381730a70676a78f",url:"./favicon.ico"},{revision:"93dc95c4aef0effa4bf918aa886609a0",url:"./friends/index.html"},{revision:"1f6ce2a3e6be229e6d4eba67896c2c96",url:"./github-calendar.css"},{revision:"b7e7f9af145900e2024111c7bf1340b6",url:"./github-calendar.js"},{revision:"8be0681c01626dcc57bab2ee46cfb6d5",url:"./index.html"},{revision:"9191e63d0d8eb49a50b567d154b997dc",url:"./js/galmenu.l.js"},{revision:"60805d5cd3ac4bc59aae651b65e92433",url:"./js/main.lr.js"},{revision:"d039905730b8d9db3649973f3c7cc28c",url:"./map/index.html"},{revision:"1b3819adb7fdc61d51e9784bcec93a0d",url:"./mikutap/css/mikutap.css"},{revision:"5279a09d7a75b44f3c35364ea2a8f08b",url:"./mikutap/data/main/main.json"},{revision:"d94b20e465ff7289142b647c1ac142ea",url:"./mikutap/data/track/track.json"},{revision:"4b63179db3c45dfd9078a252b2575cd1",url:"./mikutap/icon.png"},{revision:"56ba4222adad2322b0168981868bc934",url:"./mikutap/index.html"},{revision:"936ff3edd8373c243f56bf9c0fc66ec8",url:"./mikutap/js/mikutap.min.js"},{revision:"ee0a7ce469b3a15bd2c57ef76f38dbc6",url:"./mikutap/shared/css/common-1.css"},{revision:"a1aba3a1001e09230cbfdb18d522cdbc",url:"./mikutap/shared/css/index-1.css"},{revision:"43e49a61141c64bcf8d7981f7a6a26f5",url:"./mikutap/shared/js/common-2.min.js"},{revision:"b74c8c57d13ad72401b651f4128a2468",url:"./mikutap/shared/sp/css/common.css"},{revision:"fbe994054426fadb2dff69d824c5c67a",url:"./music/css/APlayer.min.css"},{revision:"269550530cc127b6aa5a35925a7de6ce",url:"./music/css/font-awesome.min.css"},{revision:"837f456b0d75c8dca741d4186444412a",url:"./music/css/justaddmusic.css"},{revision:"674f50d287a8c48dc19ba404d20fe713",url:"./music/fonts/fontawesome-webfont.eot"},{revision:"912ec66d7572ff821749319396470bde",url:"./music/fonts/fontawesome-webfont.svg"},{revision:"b06871f281fee6b241d60582ae9369b9",url:"./music/fonts/fontawesome-webfont.ttf"},{revision:"fee66e712a8a08eef5805a46892932ad",url:"./music/fonts/fontawesome-webfont.woff"},{revision:"af7ae505a9eed503f8b8e6982036873e",url:"./music/fonts/fontawesome-webfont.woff2"},{revision:"467c759ee6d19147e1257ccbd7405f5a",url:"./music/index.html"},{revision:"f318fa1b12f6d5f475a863ee2bb728ee",url:"./music/js/APlayer.min.jam.js"},{revision:"c6acc06546a0d076942b0c81c4befbfd",url:"./music/js/jamsetting.js"},{revision:"12b69d0ae6c6f0c42942ae6da2896e84",url:"./music/js/jquery.js"},{revision:"16530b39ad7e6d012f7e840446fc18e6",url:"./music/js/JustAddMusic.js"},{revision:"f3a86e82ec5d2eb807eab601c30681ac",url:"./music/js/Meting.min.js"},{revision:"2ea2180ebc07691547085eefda6c7684",url:"./page/2/index.html"},{revision:"18ba7dcf4de347af8cab70f2bc2acf79",url:"./play/index.html"},{revision:"9eb6c6fd82325b6fc5f0b45a748609d4",url:"./posts/17931.html"},{revision:"6c4b000ecde75c2cc62b171c4d09c0dc",url:"./posts/22938.html"},{revision:"94db15bd005d1b3830f6a82c5bb3a41f",url:"./posts/24179.html"},{revision:"6bdfef40355e4589d36ec30bca68ddd0",url:"./posts/24549.html"},{revision:"0b6cc9c2aa53a7daeaf3867d73676be8",url:"./posts/25909.html"},{revision:"ae19a9e1040fdc3552c8519aacbb06ba",url:"./posts/27708.html"},{revision:"9c4cddc1339b074284828e39dd94b936",url:"./posts/28146.html"},{revision:"4217a2c3063e975b5914883450242e6e",url:"./posts/32716.html"},{revision:"3560cc74ec1aad5b0b790c6064396e03",url:"./posts/39479.html"},{revision:"6886d27493c520bbfdb9280b4e478b7c",url:"./posts/4141.html"},{revision:"950d4733b2ecc626f8ef77c6efe52bcc",url:"./posts/43359.html"},{revision:"080ab5dd5bb582a532d37df8355fbedc",url:"./posts/47424.html"},{revision:"5b54c646b752b4a722e8a6fb01aa9c94",url:"./posts/49939.html"},{revision:"6e0d369074c4a761f008187ed998280c",url:"./posts/5913.html"},{revision:"328880ef7b1ff18a8f0a5cfa8ef3cb4f",url:"./posts/7578.html"},{revision:"be86e0afcdcbaf577b433107728e9dd5",url:"./runner/index.html"},{revision:"4c0026efd11a878b3105e8f03680d306",url:"./say/index.html"},{revision:"b0f0603989ad26d795532d377de2b5fc",url:"./search.json"},{revision:"245607dbaed936251525397fa032f8a9",url:"./search/index.html"},{revision:"935eb50b24d97a184ca9623a91c0f616",url:"./t-rex/assets/css/t-rex.css"},{revision:"01f2014886ea4de08147a231bebfd958",url:"./t-rex/assets/js/index.js"},{revision:"a10b0288b9d6b93b8b04de3351882514",url:"./t-rex/assets/js/t-rex.js"},{revision:"cad7798da0d84c8a6e55affb940bc76b",url:"./t-rex/index.html"},{revision:"77df258b5a94692b62206c82f888b183",url:"./tags/Bug/index.html"},{revision:"0b01f37119aba30dd7523120978cfbc6",url:"./tags/Coding-Pages/index.html"},{revision:"d862f9bb7bccaa0b9102ff2e79172d67",url:"./tags/Commands/index.html"},{revision:"3f6c85d3c2ebfa00c749008a5fb96d98",url:"./tags/Dev/index.html"},{revision:"bede8c79a3e88141efbb472b4f38fb06",url:"./tags/Dev/page/2/index.html"},{revision:"494038036aaa1e10b5b93cb35fa29bc8",url:"./tags/Emoji/index.html"},{revision:"7658b6160ac8348bbeecc9ba213c026b",url:"./tags/GitHub-Actions/index.html"},{revision:"4a3b786d518f47647b971c92eee5f3bd",url:"./tags/GitHub/index.html"},{revision:"a1e0a0c857842d8b44db661bb7c7c34e",url:"./tags/Hexo/index.html"},{revision:"becdc751b4439455c7cd251c2878945e",url:"./tags/index.html"},{revision:"d2548dd74a84bedb1655a91b365dcc79",url:"./tags/issues/index.html"},{revision:"4d00219618f596a9e3851d9208f28917",url:"./tags/LeanCloud/index.html"},{revision:"22d1b556b9384a6373b5aaf371871a9e",url:"./tags/PicGo/index.html"},{revision:"4e000f8c14ecf622facba8642c031d06",url:"./tags/UptimeRobot/index.html"},{revision:"16e29edbd4e00fd4b5792785e312d168",url:"./tags/URL/index.html"},{revision:"6b969de189751b9f7989e590008e0d0f",url:"./tags/Vercel/index.html"},{revision:"1fcbcbe07e7ce0239bdb485684dba901",url:"./tags/wenyan-lang/index.html"},{revision:"63f958d16cb71239d4e0045ef926323a",url:"./tags/Windows/index.html"},{revision:"b1fdd4c9fe08253a989388f94ca41fa1",url:"./tags/图床/index.html"},{revision:"e1c324c86184658669530c41dde812cc",url:"./tags/文言文编程/index.html"},{revision:"4fc4148ff8e92ae5bbce907843c5721d",url:"./tags/浏览器/index.html"},{revision:"f96ceff8f4d9edcd0252084d1d9e7350",url:"./tags/炫酷文字/index.html"},{revision:"b84f13fc610ea86f6f8e5c4d282b57cf",url:"./tags/网站存活监控/index.html"},{revision:"fabf7271fcada1bc1f03c6f2aa92f982",url:"./vercel.json"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:86400}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();