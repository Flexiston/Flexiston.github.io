const workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/5.1.3/workbox-sw.js"),workbox.setConfig({modulePathPrefix:"https://storage.googleapis.com/workbox-cdn/releases/5.1.3/"}),workbox.core.setCacheNameDetails({prefix:"Flexiston's Blog"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"804a7c42e99dea866702aa037e362e83",url:"./404.html"},{revision:"4725c35ecaa5762d04111ee7efa9a33f",url:"./about/index.html"},{revision:"47e8d50b6b3caf33bb76cdc6d96cfcb3",url:"./archives/2020/04/index.html"},{revision:"66c0efe90fa5b40f4020e3ec48149fc7",url:"./archives/2020/05/index.html"},{revision:"97b97d04e72852fb89ede8f10e2a12e3",url:"./archives/2020/06/index.html"},{revision:"06de25a1b562918fe8f108cb6e716fff",url:"./archives/2020/07/index.html"},{revision:"15d8509bf0f1b690f23c79a2760171e7",url:"./archives/2020/08/index.html"},{revision:"1a21ddf6741fcd43fb77c435d01722f6",url:"./archives/2020/09/index.html"},{revision:"cb132218d59b567b57a8316eefbfb45e",url:"./archives/2020/index.html"},{revision:"1461b96e6bd2b671d96ad6c9fffeb184",url:"./archives/2020/page/2/index.html"},{revision:"5ee6058f1a7a8d129cb93083dfa2ccae",url:"./archives/index.html"},{revision:"f3472c9348c5aee73682844450d6dc92",url:"./archives/page/2/index.html"},{revision:"9fb351efc4b8a7db51d2d7325f60fb03",url:"./baidu_verify_spMQLbgc0m.html"},{revision:"6f79b93f3825b881f80a56b9c0fc6ff2",url:"./catch-cat.min.js"},{revision:"427245201f329b0b658ae8540880b738",url:"./catch-cat/index.html"},{revision:"0bf2738b279d4ea16571a9484ecf6572",url:"./categories/Bug/index.html"},{revision:"7a15b397378ee68578f4291b1a7663f9",url:"./categories/Dev/GitHub/index.html"},{revision:"7910500d91cc1602bca9b616283949e6",url:"./categories/Dev/Hexo/index.html"},{revision:"d2e85a6663ac108a4449e6615f84aaac",url:"./categories/Dev/index.html"},{revision:"a2cf44753f46cca46ced14f6c1e7dc5f",url:"./categories/Dev/page/2/index.html"},{revision:"9bce87a51e534965d63cc209a24a6a45",url:"./categories/Dev/Vercel/index.html"},{revision:"4b6e8d6180914db389476c0a522a4839",url:"./categories/Dev/Windows/index.html"},{revision:"90a95661add5f87af198dcd702f6b667",url:"./categories/Dev/工具/index.html"},{revision:"1db5266172b6cd8ec5f0a4b5a2a5c70f",url:"./categories/Emoji/index.html"},{revision:"372ba24dc38a344d48bb313bbcf840bf",url:"./categories/GitHub/index.html"},{revision:"5ef4d06992dd22ec2bea916f35f04e62",url:"./categories/index.html"},{revision:"70f33301a0fd4bdd6cc10efff79516c2",url:"./categories/文言文编程/index.html"},{revision:"790c8fd10cfdb47a2c9e5faef1a466c7",url:"./categories/白嫖/index.html"},{revision:"a800196931ef413306a530c422a9c0f8",url:"./changelog/index.html"},{revision:"56a11a5f3b6a788133d1f6cb8a73af84",url:"./css/style/darkmode.css"},{revision:"ad92a9b3bbf67dc1f9649d065f1f1086",url:"./css/style/links.css"},{revision:"042a3ed910571ea9ba52c664954f8f11",url:"./css/style/styles.css"},{revision:"72622e54aac09aaa381730a70676a78f",url:"./favicon.ico"},{revision:"eb9fcfa3c76a548697eeb132d9e965de",url:"./friends/index.html"},{revision:"719f575a977e1cd4256fa13a852a5e32",url:"./index.html"},{revision:"05a107e94a1f191d6161800682ea33dc",url:"./js/bs2t.js"},{revision:"ae0be675f96610c4194a953de28b5c84",url:"./js/darkmod.js"},{revision:"a5a2b0e98b34ade09be7803c186a962a",url:"./map/index.html"},{revision:"1b3819adb7fdc61d51e9784bcec93a0d",url:"./mikutap/css/mikutap.css"},{revision:"5279a09d7a75b44f3c35364ea2a8f08b",url:"./mikutap/data/main/main.json"},{revision:"d94b20e465ff7289142b647c1ac142ea",url:"./mikutap/data/track/track.json"},{revision:"4b63179db3c45dfd9078a252b2575cd1",url:"./mikutap/icon.png"},{revision:"56ba4222adad2322b0168981868bc934",url:"./mikutap/index.html"},{revision:"936ff3edd8373c243f56bf9c0fc66ec8",url:"./mikutap/js/mikutap.min.js"},{revision:"ee0a7ce469b3a15bd2c57ef76f38dbc6",url:"./mikutap/shared/css/common-1.css"},{revision:"a1aba3a1001e09230cbfdb18d522cdbc",url:"./mikutap/shared/css/index-1.css"},{revision:"43e49a61141c64bcf8d7981f7a6a26f5",url:"./mikutap/shared/js/common-2.min.js"},{revision:"b74c8c57d13ad72401b651f4128a2468",url:"./mikutap/shared/sp/css/common.css"},{revision:"8bcba920aa4e94d58caa6ce921499861",url:"./page/2/index.html"},{revision:"7121833f8f92895048db12dae8553f0c",url:"./play/index.html"},{revision:"5b38d0cab184d32c0d2affc32281c6f6",url:"./posts/17931.html"},{revision:"7dd348b9e623ca639365f67743be9c20",url:"./posts/22938.html"},{revision:"c08cdf63a5085dd72b3da876f1f56fec",url:"./posts/24179.html"},{revision:"97b373f53f022ea42a091384115f749c",url:"./posts/24549.html"},{revision:"80bdccbd71e2a4902ed7e3e84c6f34c7",url:"./posts/25909.html"},{revision:"1030fe5edaeaf50f334f5a7f0a2b757e",url:"./posts/27708.html"},{revision:"913daa543671611cb1b59fe8c247885c",url:"./posts/28146.html"},{revision:"e4a59a6e7fbc9c4c3efaf3a1bc8a7deb",url:"./posts/32716.html"},{revision:"326e0ad067298f4d8ac5712876a45940",url:"./posts/39479.html"},{revision:"07097bad34c562d68161a336a38c03b7",url:"./posts/4141.html"},{revision:"978afc8d237e8a91241d36cc84e71589",url:"./posts/43359.html"},{revision:"6ae8ec02e206ed909c89a149ffe75ea2",url:"./posts/47424.html"},{revision:"c82a5f5422fa4f467861031e8327b706",url:"./posts/49939.html"},{revision:"dec134f4250136ff945d3732c625b53b",url:"./posts/5913.html"},{revision:"ee4be6cb32dcb96ed7333a218ddbff37",url:"./posts/7578.html"},{revision:"3b1cc0a762c6410185f5789fa9d3a6af",url:"./runner/index.html"},{revision:"2ec8692abc4896b0e0aa2216415bddc1",url:"./say/index.html"},{revision:"71b97e146e91a4ccc92644995e6d582d",url:"./search.json"},{revision:"f631c377114773f342b092ca9c0712ca",url:"./search/index.html"},{revision:"935eb50b24d97a184ca9623a91c0f616",url:"./t-rex/assets/css/t-rex.css"},{revision:"01f2014886ea4de08147a231bebfd958",url:"./t-rex/assets/js/index.js"},{revision:"a10b0288b9d6b93b8b04de3351882514",url:"./t-rex/assets/js/t-rex.js"},{revision:"cad7798da0d84c8a6e55affb940bc76b",url:"./t-rex/index.html"},{revision:"2cc80ceb40ab7d359c0e0918233a256e",url:"./tags/Bug/index.html"},{revision:"64da486de09013acff65b26df20f3e21",url:"./tags/Coding-Pages/index.html"},{revision:"f8aabde532772b8eaec62201435d84f7",url:"./tags/Commands/index.html"},{revision:"258f29c78bd08c27e7918b2ff6197406",url:"./tags/Dev/index.html"},{revision:"f32c90fbe2889c4c8b3845b143440f67",url:"./tags/Dev/page/2/index.html"},{revision:"c155030815dbde68611f46b13033500e",url:"./tags/Emoji/index.html"},{revision:"1ac8d4a593eef54950226cba790b9a93",url:"./tags/GitHub-Actions/index.html"},{revision:"3c8379fba7e030373737593c88188800",url:"./tags/GitHub/index.html"},{revision:"5729e030102ab02e258fe7afdb41f128",url:"./tags/Hexo/index.html"},{revision:"082f7fb352b13c5191f312baf1494634",url:"./tags/index.html"},{revision:"08f976f358f935bf03b6edd3732ef45f",url:"./tags/issues/index.html"},{revision:"a1fda1420e3440bc04ed21ebbccb2f36",url:"./tags/LeanCloud/index.html"},{revision:"5939d62a4162ba21661b120ec904cc80",url:"./tags/PicGo/index.html"},{revision:"1d595aa9df78e044680629a02e661343",url:"./tags/UptimeRobot/index.html"},{revision:"bbae005b9808f456154815b9b1976c71",url:"./tags/URL/index.html"},{revision:"2d3e334b2c4e6d1b057ef68aebe2c49e",url:"./tags/Vercel/index.html"},{revision:"f8dd8c738416bcaa4eb4f18292474066",url:"./tags/wenyan-lang/index.html"},{revision:"6c6fd365dc5c84118bb945c6e86f77bf",url:"./tags/Windows/index.html"},{revision:"f9c6d41da41ef587ec607f777056efff",url:"./tags/图床/index.html"},{revision:"1f98e233b3c9cefc0426c6dd67e66bc8",url:"./tags/文言文编程/index.html"},{revision:"414e354cadae2781f11c4e06935512bc",url:"./tags/浏览器/index.html"},{revision:"1cc32dbe4ad74daaaef8065ebceb4dc9",url:"./tags/炫酷文字/index.html"},{revision:"b2d8f4e3b21334e84080591bf75dc837",url:"./tags/网站存活监控/index.html"},{revision:"fabf7271fcada1bc1f03c6f2aa92f982",url:"./vercel.json"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:86400}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();