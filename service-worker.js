"use strict";var workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/workbox-sw.js")),workbox.setConfig({modulePathPrefix:"https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/")}),workbox.core.setCacheNameDetails({prefix:"Flexiston's Blog"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"60bc1a51679622cfd145d64c32065d5c",url:"./404.html"},{revision:"c65c391539aff2ab97402117afae5c04",url:"./about/index.html"},{revision:"8534ca7da5374350de6bee61848758d9",url:"./archives/2020/04/index.html"},{revision:"7390982acb2dfb73df4dc74a5a3b4459",url:"./archives/2020/05/index.html"},{revision:"f79878a10eb75b776e7448e6758d7a45",url:"./archives/2020/06/index.html"},{revision:"c4ca4835becf72de02fdf45d837e9cdc",url:"./archives/2020/07/index.html"},{revision:"2eb7436f11dcb7c2e7a858a89cc3f0b0",url:"./archives/2020/08/index.html"},{revision:"b78c7a5683d28be4e930bda3206e6ceb",url:"./archives/2020/09/index.html"},{revision:"747f82aae8b4cadcd870bf1beb6ca7af",url:"./archives/2020/index.html"},{revision:"659a2c4486b2114839c8d32a3e257178",url:"./archives/2020/page/2/index.html"},{revision:"5d29342481ee5230a32072362d64c53d",url:"./archives/index.html"},{revision:"5e8aad5c90d74c9b7bc4ed4b3026cc5d",url:"./archives/page/2/index.html"},{revision:"9fb351efc4b8a7db51d2d7325f60fb03",url:"./baidu_verify_spMQLbgc0m.html"},{revision:"6f79b93f3825b881f80a56b9c0fc6ff2",url:"./catch-cat.min.js"},{revision:"c528430303438ddb6a3a194cd1bc67df",url:"./catch-cat/index.html"},{revision:"c84b211d7b89925ad1d205347cfb29ad",url:"./categories/Bug/index.html"},{revision:"65e24b6c8a2fd410fe11c178a58b1c36",url:"./categories/Dev/GitHub/index.html"},{revision:"001134874a8b6eead843f29ac16d5b69",url:"./categories/Dev/Hexo/index.html"},{revision:"91c46c94a8c28a178e06d22dcee5f384",url:"./categories/Dev/index.html"},{revision:"beda525f8837cdd9fa8e9e8be45e8a9e",url:"./categories/Dev/page/2/index.html"},{revision:"f04aea644252df5bc3f7a01fabd8f8ad",url:"./categories/Dev/Vercel/index.html"},{revision:"95f36ca95dfd5e287b91517ca3f9c1fa",url:"./categories/Dev/Windows/index.html"},{revision:"3c69314151add0731737ffced3c77e62",url:"./categories/Dev/工具/index.html"},{revision:"6524b7db0fed115bf8dd60ba73814283",url:"./categories/Emoji/index.html"},{revision:"0c87f5d6d7589f18105ac511ad525a6c",url:"./categories/GitHub/index.html"},{revision:"97fc39280997cf0d2b84ec2ed6100c25",url:"./categories/index.html"},{revision:"43bc3f0976ba3402fa16078199b2385d",url:"./categories/文言文编程/index.html"},{revision:"e18f246c7970391277e5317328533566",url:"./categories/白嫖/index.html"},{revision:"85f28ec50bae331e5336d8b0aef238b4",url:"./changelog/index.html"},{revision:"716b176afc842df011f56933c1b16f32",url:"./css/style/artalk.css"},{revision:"065e2336df5c077dff1860817f7d9542",url:"./css/style/darkmode.css"},{revision:"652c9942f25320a35daf42667210df39",url:"./css/style/flesx.css"},{revision:"d02e328349ed5d545e2c192642304d09",url:"./css/style/links.css"},{revision:"1407dc11577c56dde90dce10aa71bc50",url:"./css/style/note.css"},{revision:"fc764d9a99cd208d780999d32b2c47da",url:"./css/style/timeline.l.css"},{revision:"72622e54aac09aaa381730a70676a78f",url:"./favicon.ico"},{revision:"3c252d2b93ed1458bbff16946c56abcf",url:"./friends/index.html"},{revision:"3c656a0cd957634cf5e448ed38d8c04f",url:"./index.html"},{revision:"de47307c7e8466f3e9aa883486ad16f1",url:"./js/app.k.js"},{revision:"ae0be675f96610c4194a953de28b5c84",url:"./js/darkmode.js"},{revision:"f564bbb092181f20953084c3ed507461",url:"./manifest.json"},{revision:"43c6d0bdfa37534e6da1eb4f170d0769",url:"./map/index.html"},{revision:"1b3819adb7fdc61d51e9784bcec93a0d",url:"./mikutap/css/mikutap.css"},{revision:"5279a09d7a75b44f3c35364ea2a8f08b",url:"./mikutap/data/main/main.json"},{revision:"d94b20e465ff7289142b647c1ac142ea",url:"./mikutap/data/track/track.json"},{revision:"4b63179db3c45dfd9078a252b2575cd1",url:"./mikutap/icon.png"},{revision:"56ba4222adad2322b0168981868bc934",url:"./mikutap/index.html"},{revision:"936ff3edd8373c243f56bf9c0fc66ec8",url:"./mikutap/js/mikutap.min.js"},{revision:"ee0a7ce469b3a15bd2c57ef76f38dbc6",url:"./mikutap/shared/css/common-1.css"},{revision:"a1aba3a1001e09230cbfdb18d522cdbc",url:"./mikutap/shared/css/index-1.css"},{revision:"43e49a61141c64bcf8d7981f7a6a26f5",url:"./mikutap/shared/js/common-2.min.js"},{revision:"b74c8c57d13ad72401b651f4128a2468",url:"./mikutap/shared/sp/css/common.css"},{revision:"baa317304ef6ae191114f042d263533e",url:"./page/2/index.html"},{revision:"271f79a855b14b419e523dd0d7a535d7",url:"./play/index.html"},{revision:"ab6985d36759b467dd664d564b65b2c4",url:"./posts/17931.html"},{revision:"b18f5f156b7c49a351c39b2db526b6d9",url:"./posts/22938.html"},{revision:"03b2ca4f0913259a1d9d910bd749e1e1",url:"./posts/24179.html"},{revision:"35765716f366f8ddbe0d046ac7a2f17c",url:"./posts/24549.html"},{revision:"d3deb2749aeed1683e95ac16b1f13c5a",url:"./posts/25909.html"},{revision:"d35cd61c8f5520500dd329cdc1dee2cb",url:"./posts/27708.html"},{revision:"b05025245dbb8b03bdac68a9277b576b",url:"./posts/28146.html"},{revision:"aea0042769d15dd1cd5d4ceba838f3f7",url:"./posts/32716.html"},{revision:"9d1ee89a0b0df67a32680db46a497b38",url:"./posts/39479.html"},{revision:"fe9d2b947d253a7c6dd5c31a2e044ef4",url:"./posts/4141.html"},{revision:"2996abce7931a0a91ed263db3f8c9efd",url:"./posts/43359.html"},{revision:"802f89923c0af17daa7bdf7fb9d5e897",url:"./posts/47424.html"},{revision:"3cacbbcf96c9d7dc7555ef576e9fcf04",url:"./posts/49939.html"},{revision:"c894b73f65cd9dbcf188e76a0f813d01",url:"./posts/5913.html"},{revision:"fdaf3f0ef1d149974a2fab96a473866c",url:"./posts/7578.html"},{revision:"f6ccc330bf64c9df7f63a05fd58e4913",url:"./runner/index.html"},{revision:"a840882155320bfd91830d3bdc1478da",url:"./say/index.html"},{revision:"3d51ca482f26a73edc04a0250130ec76",url:"./search.json"},{revision:"6342a82659499f6abbd5d2830fdca0c1",url:"./search/index.html"},{revision:"935eb50b24d97a184ca9623a91c0f616",url:"./t-rex/assets/css/t-rex.css"},{revision:"01f2014886ea4de08147a231bebfd958",url:"./t-rex/assets/js/index.js"},{revision:"a10b0288b9d6b93b8b04de3351882514",url:"./t-rex/assets/js/t-rex.js"},{revision:"cad7798da0d84c8a6e55affb940bc76b",url:"./t-rex/index.html"},{revision:"4ad1187e56f312e73832fb69033531ff",url:"./tags/Bug/index.html"},{revision:"3854fc13e1a48015d017d837a5911c21",url:"./tags/Coding-Pages/index.html"},{revision:"46460109f4c39b6a3d3feac083c2b1b7",url:"./tags/Commands/index.html"},{revision:"7cb3efaa7802681d1389345ee523c9df",url:"./tags/Dev/index.html"},{revision:"9f30245ae69025cae4cbbffb8cda15a1",url:"./tags/Dev/page/2/index.html"},{revision:"d9ed6d355f97bf66971c6c16d46e1d1d",url:"./tags/Emoji/index.html"},{revision:"bc50b3a03cbbafb5627c72cf734daa33",url:"./tags/GitHub-Actions/index.html"},{revision:"b8717bfb5960e5a0876b2716e72b4a59",url:"./tags/GitHub/index.html"},{revision:"82a3a21ee98f587b08237bb0f23351d1",url:"./tags/Hexo/index.html"},{revision:"3eba14ce1012e4bc88d36335be4ef7bb",url:"./tags/index.html"},{revision:"458e7b9114649e76be3b8f7916f01bfe",url:"./tags/issues/index.html"},{revision:"f77b8f0a52d72748846d3d5cb2d0b9a1",url:"./tags/LeanCloud/index.html"},{revision:"4c4969f7359fcba1836b377d8b9e9e85",url:"./tags/PicGo/index.html"},{revision:"e089e4eab084036297bb173fb50e6af3",url:"./tags/UptimeRobot/index.html"},{revision:"e6066e48085449246d5812e679ea05ba",url:"./tags/URL/index.html"},{revision:"e07a09a571cd8b1b1a2f0d493dcf625e",url:"./tags/Vercel/index.html"},{revision:"4397c693422ff92eed4b84442faac573",url:"./tags/wenyan-lang/index.html"},{revision:"252320b0a7bfa55d6b9aa35fe9e43426",url:"./tags/Windows/index.html"},{revision:"1a4329ec8d7ab3589c96206fa1f821ba",url:"./tags/图床/index.html"},{revision:"924654eb21bde7adf99cddfb428bfd2f",url:"./tags/文言文编程/index.html"},{revision:"9a3bdde8cd14ebe6158d8a2f194e3f40",url:"./tags/浏览器/index.html"},{revision:"edde825545965515633a2046f6b83073",url:"./tags/炫酷文字/index.html"},{revision:"de605cfa0ae686e9d21f429bf3a7a647",url:"./tags/网站存活监控/index.html"},{revision:"fabf7271fcada1bc1f03c6f2aa92f982",url:"./vercel.json"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:86400}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();