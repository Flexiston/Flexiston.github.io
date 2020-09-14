"use strict";var workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/workbox-sw.js")),workbox.setConfig({modulePathPrefix:"https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/")}),workbox.core.setCacheNameDetails({prefix:"Flexiston's Blog"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"5b478e1b3f662fdb63e276d77edfbeee",url:"./404.html"},{revision:"774048bd462ec69750a4bbe3d8b17614",url:"./about/index.html"},{revision:"3750ef5bad1cef7234e745a84cdab3a2",url:"./archives/2020/04/index.html"},{revision:"0cc7314eb3c4a48b074e1d71e210b5c5",url:"./archives/2020/05/index.html"},{revision:"21b10fccb448b7802de289ca8ecfb90b",url:"./archives/2020/06/index.html"},{revision:"183723bdb5b3ed0dcd7d3d5a0197b06e",url:"./archives/2020/07/index.html"},{revision:"90e1198a128a1224bedaf0a9d9aee28f",url:"./archives/2020/08/index.html"},{revision:"77b27b1a5fdc5655432d36a545da3046",url:"./archives/2020/09/index.html"},{revision:"1ba7de81f02ec8605b024e72db107621",url:"./archives/2020/index.html"},{revision:"d51f9e8a078a6b233a3903927c00af15",url:"./archives/2020/page/2/index.html"},{revision:"307ba97a9e72d67dd80d591e3caebbbb",url:"./archives/index.html"},{revision:"4a6f375c5e6c13ef291385682281658e",url:"./archives/page/2/index.html"},{revision:"9fb351efc4b8a7db51d2d7325f60fb03",url:"./baidu_verify_spMQLbgc0m.html"},{revision:"493321397a4dfcce00d15d06cc0c6762",url:"./catch-cat.min.js"},{revision:"e54ac5a46d6559746224f3ac68a9d81a",url:"./catch-cat/index.html"},{revision:"d0345b3246fb73ce4c58922a98740596",url:"./categories/Bug/index.html"},{revision:"b6982e282356c9812dbf76812381ff55",url:"./categories/Dev/GitHub/index.html"},{revision:"bc393692d4d648d94253a460cdb88e70",url:"./categories/Dev/Hexo/index.html"},{revision:"8da3c1a80df8afe8eb241dcd3ce02686",url:"./categories/Dev/index.html"},{revision:"01b17720ee231e57c6e13c905d281afa",url:"./categories/Dev/page/2/index.html"},{revision:"547b6501b0a787cf93ce2c4debace43f",url:"./categories/Dev/Vercel/index.html"},{revision:"f86afb907f84c13dedcf77c9f5789c01",url:"./categories/Dev/Windows/index.html"},{revision:"ae22e101b84770a9a48077648ef982c3",url:"./categories/Dev/工具/index.html"},{revision:"1bb4c0af03a76fde448ea5df67768e0b",url:"./categories/Emoji/index.html"},{revision:"e8211dce5b6b612af4e6c7673870bedd",url:"./categories/GitHub/index.html"},{revision:"3655f4710f97c2aa98f587ab751369fc",url:"./categories/index.html"},{revision:"3ef95f0fcef2c0d76cc7dab701cd254e",url:"./categories/文言文编程/index.html"},{revision:"f7a4627d826fb443d5d81074cdb4f6d0",url:"./categories/白嫖/index.html"},{revision:"28f5d0d6c41a859c12499eb592cdd460",url:"./changelog/index.html"},{revision:"359a1e71674c135b6598b08037e962b9",url:"./css/style/dark.css"},{revision:"d7314b112b60b2cc61f2e1f92669d808",url:"./css/style/flesx.css"},{revision:"ec07076b1bc9799e0dab5989c7e1d1ee",url:"./css/style/links.css"},{revision:"1407dc11577c56dde90dce10aa71bc50",url:"./css/style/note.css"},{revision:"fc764d9a99cd208d780999d32b2c47da",url:"./css/style/timeline.l.css"},{revision:"9945aa19aa1ff39ac5c6b9a14688131f",url:"./css/style/valine.l.css"},{revision:"72622e54aac09aaa381730a70676a78f",url:"./favicon.ico"},{revision:"fa6032822db8d3e4f66f0baba2c6c9b9",url:"./friends/index.html"},{revision:"397337e75a08c32afe05482ee6d81fe2",url:"./index.html"},{revision:"e653c627aa9cf950eebdb9dfb3c77882",url:"./js/app.r.js"},{revision:"f564bbb092181f20953084c3ed507461",url:"./manifest.json"},{revision:"7b689511d1a70b9d6e46425c330f6360",url:"./map/index.html"},{revision:"1b3819adb7fdc61d51e9784bcec93a0d",url:"./mikutap/css/mikutap.css"},{revision:"5279a09d7a75b44f3c35364ea2a8f08b",url:"./mikutap/data/main/main.json"},{revision:"d94b20e465ff7289142b647c1ac142ea",url:"./mikutap/data/track/track.json"},{revision:"4b63179db3c45dfd9078a252b2575cd1",url:"./mikutap/icon.png"},{revision:"56ba4222adad2322b0168981868bc934",url:"./mikutap/index.html"},{revision:"936ff3edd8373c243f56bf9c0fc66ec8",url:"./mikutap/js/mikutap.min.js"},{revision:"ee0a7ce469b3a15bd2c57ef76f38dbc6",url:"./mikutap/shared/css/common-1.css"},{revision:"a1aba3a1001e09230cbfdb18d522cdbc",url:"./mikutap/shared/css/index-1.css"},{revision:"43e49a61141c64bcf8d7981f7a6a26f5",url:"./mikutap/shared/js/common-2.min.js"},{revision:"b74c8c57d13ad72401b651f4128a2468",url:"./mikutap/shared/sp/css/common.css"},{revision:"802a64f766a5e274844b86a0df5c2f61",url:"./page/2/index.html"},{revision:"631529a19057220ec8b2141752628d07",url:"./play/index.html"},{revision:"2cbfd433a61a8e0dc5e5d71d2ebbd984",url:"./posts/17931.html"},{revision:"3b8d42e7cb6716669dfc3f5c92d3f687",url:"./posts/22938.html"},{revision:"b8d9e2acf4b1809fa63a62fb5ec46941",url:"./posts/24179.html"},{revision:"ecf3c3a680599c942128bf5115d44632",url:"./posts/24549.html"},{revision:"df01399702c4cd19ddafa25457a559e6",url:"./posts/25909.html"},{revision:"c07494bf2c982d08147fe5d0f1010ea7",url:"./posts/27708.html"},{revision:"c2c6a462d30034a884ff66cb57ac61e7",url:"./posts/28146.html"},{revision:"9437e09b4255454c20d5b232373bac1f",url:"./posts/32716.html"},{revision:"60d708ad4bfecf0b234ff0debfcdd410",url:"./posts/39479.html"},{revision:"db27e010bd278cc10e25cd1161bb6cda",url:"./posts/4141.html"},{revision:"eb02cd0c21c41335706afe749072a2c7",url:"./posts/43359.html"},{revision:"5f73925129d12b550c526e2a6ed71c3a",url:"./posts/47424.html"},{revision:"3bde543dee4e06991210dd8535d134c8",url:"./posts/49939.html"},{revision:"0c0d15088457768b6744f45ab718cdd0",url:"./posts/5913.html"},{revision:"9d7596655a69a2dd3d1daaa3e6d51118",url:"./posts/7578.html"},{revision:"13437711116d7cbae5fd43c7e3323302",url:"./runner/index.html"},{revision:"226c4164f05ef7e50464b055998eb84c",url:"./say/index.html"},{revision:"3d4c507e07c45b2518ceeec2cbb44f4b",url:"./search.json"},{revision:"1f1cda831190aabf15ba78cb32b8826f",url:"./search/index.html"},{revision:"935eb50b24d97a184ca9623a91c0f616",url:"./t-rex/assets/css/t-rex.css"},{revision:"01f2014886ea4de08147a231bebfd958",url:"./t-rex/assets/js/index.js"},{revision:"7bc8783256a189ab13556a4f89a9b96c",url:"./t-rex/assets/js/t-rex.js"},{revision:"cad7798da0d84c8a6e55affb940bc76b",url:"./t-rex/index.html"},{revision:"16243b8c34b59fe0acbeeb79ef2ad2ee",url:"./tags/Bug/index.html"},{revision:"5c6d65fc8bede96c36b5da78e841febd",url:"./tags/Coding-Pages/index.html"},{revision:"1e3d5653c719893bfee69309c675641c",url:"./tags/Commands/index.html"},{revision:"af523abc9011ea80748f4edaff2f0334",url:"./tags/Dev/index.html"},{revision:"58b47f5d040dbabcff2e15b561c58378",url:"./tags/Dev/page/2/index.html"},{revision:"4a556cca4a0223239c642900d0a04d51",url:"./tags/Emoji/index.html"},{revision:"9504f9bc61538348a5a2df4a65a3d282",url:"./tags/GitHub-Actions/index.html"},{revision:"22c9a2a0f42f68f42758cbc15d7e8e69",url:"./tags/GitHub/index.html"},{revision:"2c3508e2c50db65ab21f7cdcfeb36293",url:"./tags/Hexo/index.html"},{revision:"1d378231a7ba24f1236753ba5fecfe40",url:"./tags/index.html"},{revision:"989bd548351ba711b4b0ba090901fb55",url:"./tags/issues/index.html"},{revision:"fcc1f18c12a127561f80edc9179c60b6",url:"./tags/LeanCloud/index.html"},{revision:"f30dbbb77362f452c01fab8b9be779f4",url:"./tags/PicGo/index.html"},{revision:"43b2bda6d253e248b5569bc8aff790f3",url:"./tags/UptimeRobot/index.html"},{revision:"3b84b1d927d50161e34295d6cd83a228",url:"./tags/URL/index.html"},{revision:"f66521783047680ef0dd76c6035b21fb",url:"./tags/Vercel/index.html"},{revision:"82c9dc2567e9559cf258fa766bc030d5",url:"./tags/wenyan-lang/index.html"},{revision:"7d47accf1f8b539d9be7cbb2819b1be4",url:"./tags/Windows/index.html"},{revision:"59d9af9ce09462641675335e93ce2149",url:"./tags/图床/index.html"},{revision:"29d58dc14d0feb5175118351a11364ef",url:"./tags/文言文编程/index.html"},{revision:"6c778994fb5e4a8b07ad685edaad776a",url:"./tags/浏览器/index.html"},{revision:"7da730e02bd9a575c1c2fac4be0b953f",url:"./tags/炫酷文字/index.html"},{revision:"9acbc1e7787f7dbae9a38b440854a59c",url:"./tags/网站存活监控/index.html"},{revision:"fabf7271fcada1bc1f03c6f2aa92f982",url:"./vercel.json"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:86400}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();