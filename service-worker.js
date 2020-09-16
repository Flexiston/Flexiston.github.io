"use strict";var workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/workbox-sw.js")),workbox.setConfig({modulePathPrefix:"https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/")}),workbox.core.setCacheNameDetails({prefix:"Flexiston's Blog"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"fd1f3fe3812fcccb23ba827a70e6477b",url:"./1.js"},{revision:"c1445d2bdbb19fc68581c485651f5df1",url:"./404.html"},{revision:"863e7e43a6fd09e11c2991901dfcda34",url:"./about/index.html"},{revision:"35559c396a4b620067b9e0dca5e71ced",url:"./archives/2020/04/index.html"},{revision:"f29e06cee139df8b46645c09e15fd874",url:"./archives/2020/05/index.html"},{revision:"2860101817a5d949e4b6d6789696bc88",url:"./archives/2020/06/index.html"},{revision:"fb313e9961e75061c69dbdbe2aa6a921",url:"./archives/2020/07/index.html"},{revision:"7374273fc8c452e7fbb5809f72cf4752",url:"./archives/2020/08/index.html"},{revision:"8cb33f070f1df47e3c7bd794b5b73ecc",url:"./archives/2020/09/index.html"},{revision:"b8b70ad6c4ce34bce9e83e7af3d2df42",url:"./archives/2020/index.html"},{revision:"f98a23f2bd3c1e7b4584e0b39c29272d",url:"./archives/2020/page/2/index.html"},{revision:"96ac7a2a916440bc8aa5014c622eb903",url:"./archives/index.html"},{revision:"0db9cce699cc2d03b6f0e300d87354ae",url:"./archives/page/2/index.html"},{revision:"9fb351efc4b8a7db51d2d7325f60fb03",url:"./baidu_verify_spMQLbgc0m.html"},{revision:"493321397a4dfcce00d15d06cc0c6762",url:"./catch-cat.min.js"},{revision:"859e416e755420d52c230482f6b340ba",url:"./catch-cat/index.html"},{revision:"00a48b04425c096e0794ea86397a2eab",url:"./categories/Bug/index.html"},{revision:"d80ce2091badfc0803ee6b5c21d6d400",url:"./categories/Dev/GitHub/index.html"},{revision:"c4dac9456e9456ec3db2bf340676d1cd",url:"./categories/Dev/Hexo/index.html"},{revision:"e55c613e5e3f41624b101331a73411ad",url:"./categories/Dev/index.html"},{revision:"616f8a7d19e0e856b234bd459c3f452d",url:"./categories/Dev/page/2/index.html"},{revision:"d088614bff44604fba8db955d1e248a0",url:"./categories/Dev/Vercel/index.html"},{revision:"d8670eea196f0feef15bca2ea655ab0c",url:"./categories/Dev/Windows/index.html"},{revision:"3012f073c8dc73bbebcf95114f0fc903",url:"./categories/Dev/工具/index.html"},{revision:"6d000f2f30adfcb1f4262ae4a7f70d64",url:"./categories/Emoji/index.html"},{revision:"26480aca844bc0a0ccc09c0e35321e61",url:"./categories/GitHub/index.html"},{revision:"e17d25cc7bc4cfb6376556149d44b90e",url:"./categories/index.html"},{revision:"b5d9ceb307692219e379019c62002e2d",url:"./categories/文言文编程/index.html"},{revision:"12b0fc7250c30a9a7188fa52dbcf196b",url:"./categories/白嫖/index.html"},{revision:"a64f7da8631175b6b3ddf53a5d72c6ae",url:"./changelog/index.html"},{revision:"0e8194b8eca9d20985c7d5562b98a0c4",url:"./css/style/artalk.css"},{revision:"c5d3957efdccdda9beaf8c72103a8cb8",url:"./css/style/dark.css"},{revision:"9349e6538a8f1c393c2ea9d198534449",url:"./css/style/flesx.css"},{revision:"ec07076b1bc9799e0dab5989c7e1d1ee",url:"./css/style/links.css"},{revision:"1407dc11577c56dde90dce10aa71bc50",url:"./css/style/note.css"},{revision:"fc764d9a99cd208d780999d32b2c47da",url:"./css/style/timeline.l.css"},{revision:"72622e54aac09aaa381730a70676a78f",url:"./favicon.ico"},{revision:"f829b29490e1fc1f44180de280e669f5",url:"./friends/index.html"},{revision:"aca985c8e6ebb67cd237300e0279e48a",url:"./index.html"},{revision:"8565f7b8c2047909ed10bdc04cc257bc",url:"./js/app.m.js"},{revision:"ae0be675f96610c4194a953de28b5c84",url:"./js/darkmode.js"},{revision:"f564bbb092181f20953084c3ed507461",url:"./manifest.json"},{revision:"05b31ec78a2c1e41fcfe4e7b627c0969",url:"./map/index.html"},{revision:"1b3819adb7fdc61d51e9784bcec93a0d",url:"./mikutap/css/mikutap.css"},{revision:"5279a09d7a75b44f3c35364ea2a8f08b",url:"./mikutap/data/main/main.json"},{revision:"d94b20e465ff7289142b647c1ac142ea",url:"./mikutap/data/track/track.json"},{revision:"4b63179db3c45dfd9078a252b2575cd1",url:"./mikutap/icon.png"},{revision:"56ba4222adad2322b0168981868bc934",url:"./mikutap/index.html"},{revision:"936ff3edd8373c243f56bf9c0fc66ec8",url:"./mikutap/js/mikutap.min.js"},{revision:"ee0a7ce469b3a15bd2c57ef76f38dbc6",url:"./mikutap/shared/css/common-1.css"},{revision:"a1aba3a1001e09230cbfdb18d522cdbc",url:"./mikutap/shared/css/index-1.css"},{revision:"43e49a61141c64bcf8d7981f7a6a26f5",url:"./mikutap/shared/js/common-2.min.js"},{revision:"b74c8c57d13ad72401b651f4128a2468",url:"./mikutap/shared/sp/css/common.css"},{revision:"21aa129f2b5567c8c662a15e8083e3c7",url:"./page/2/index.html"},{revision:"baedcb1481c6f88b22c48f51df567f25",url:"./play/index.html"},{revision:"4a7010783a79cdecc29919962eded1ce",url:"./posts/17931.html"},{revision:"2b4f1a85dc3ca75038613b30f350369f",url:"./posts/22938.html"},{revision:"ade86686af6ead6d3918b89b610ddb4c",url:"./posts/24179.html"},{revision:"0c54c74fefd9bce149f2afdc854eea73",url:"./posts/24549.html"},{revision:"fa6a48e59f3c071d78a8da091b86ae94",url:"./posts/25909.html"},{revision:"8821e15b252c515dc88320145b79a5c6",url:"./posts/27708.html"},{revision:"e6f0524bd18bf870e3b2e96ae3da1cd3",url:"./posts/28146.html"},{revision:"63f48a0de4569f4e21658c9c3607d70f",url:"./posts/32716.html"},{revision:"a61a95205283cf9e74c6b34be43f15a7",url:"./posts/39479.html"},{revision:"c86f06034717ced527c314021d27c9a2",url:"./posts/4141.html"},{revision:"5d4fcb6dbaccf5de3b4b76c77d796ef6",url:"./posts/43359.html"},{revision:"22882a4adf512f3063b5e99e10f5d3fa",url:"./posts/47424.html"},{revision:"9c9427d88bec3d3d6ce6133f19c5e892",url:"./posts/49939.html"},{revision:"c098d3e5fb96b583850d4ff8332da5e7",url:"./posts/5913.html"},{revision:"e55230dd97b9292ca5393d292a70b9c9",url:"./posts/7578.html"},{revision:"c4cecd31d89484272cdb249b37a2720e",url:"./runner/index.html"},{revision:"0231882a2bd02fbba8827b1a5b6e1414",url:"./say/index.html"},{revision:"b36ad5413ed295a4141a8cbdb99ce0d8",url:"./search.json"},{revision:"e76d69fa547cdc222e0fd9f19c43553e",url:"./search/index.html"},{revision:"935eb50b24d97a184ca9623a91c0f616",url:"./t-rex/assets/css/t-rex.css"},{revision:"01f2014886ea4de08147a231bebfd958",url:"./t-rex/assets/js/index.js"},{revision:"7bc8783256a189ab13556a4f89a9b96c",url:"./t-rex/assets/js/t-rex.js"},{revision:"cad7798da0d84c8a6e55affb940bc76b",url:"./t-rex/index.html"},{revision:"9f1dc8603a10eef8218ddd97f1102808",url:"./tags/Bug/index.html"},{revision:"72dc09516aed10dc53277d9b34d084fa",url:"./tags/Coding-Pages/index.html"},{revision:"e2049de1b0a2c6711c4a5074cbc5aa11",url:"./tags/Commands/index.html"},{revision:"009f58016d55aa10f07058f279ed55ad",url:"./tags/Dev/index.html"},{revision:"4844542606a76d0dd93d37f09309bc5a",url:"./tags/Dev/page/2/index.html"},{revision:"915ad24fd5cdfb06a1189d644745be2a",url:"./tags/Emoji/index.html"},{revision:"1e32f451ccda4fa62ea74ae680d27858",url:"./tags/GitHub-Actions/index.html"},{revision:"1f14ef64620fff834537b892d72a9a55",url:"./tags/GitHub/index.html"},{revision:"1231b8fc60d08d766090c56ae0cf660b",url:"./tags/Hexo/index.html"},{revision:"e2a21df4c9d83490b29b89d738c383c9",url:"./tags/index.html"},{revision:"ec82d787f36b9a3c77de13f77431cceb",url:"./tags/issues/index.html"},{revision:"3231b517b288348fdeefdcedcb56543a",url:"./tags/LeanCloud/index.html"},{revision:"c1256d4d525a82c3febdb231efb966e2",url:"./tags/PicGo/index.html"},{revision:"4d450def6427928f322947c45af55dad",url:"./tags/UptimeRobot/index.html"},{revision:"faf88d497aac1fa94ba4597c9d1713ff",url:"./tags/URL/index.html"},{revision:"d5196df1ad5413edaf4da3189dffda41",url:"./tags/Vercel/index.html"},{revision:"98fbee10cd078cb3d42ef501bf7ce8ae",url:"./tags/wenyan-lang/index.html"},{revision:"c51f9134789870c67fabc658b0f09647",url:"./tags/Windows/index.html"},{revision:"b80381a881f97f9827b73cc7d2cdd128",url:"./tags/图床/index.html"},{revision:"421ebd0955626bbdc06267acc58d5841",url:"./tags/文言文编程/index.html"},{revision:"b86f14c8fbb0141b8a57bc9ad179d5b6",url:"./tags/浏览器/index.html"},{revision:"e7b26adc76d736bca7ec43e85f0d4749",url:"./tags/炫酷文字/index.html"},{revision:"5ad7d310198581f5bf53a430a711a2b3",url:"./tags/网站存活监控/index.html"},{revision:"fabf7271fcada1bc1f03c6f2aa92f982",url:"./vercel.json"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:86400}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();