"use strict";var workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/workbox-sw.js")),workbox.setConfig({modulePathPrefix:"https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/")}),workbox.core.setCacheNameDetails({prefix:"Flexiston's Blog"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"a360d5effe6e415e404c5117549521db",url:"./404.html"},{revision:"d9077becbf97eaa5906efa44fc6afd2e",url:"./about/index.html"},{revision:"a1a65c1cfecb1f285456560e8cea3249",url:"./apply-link/index.html"},{revision:"855624aebe9c28e01278c035f563d15c",url:"./archives/2020/04/index.html"},{revision:"e6a205373f725403bec6c39b6b5f7075",url:"./archives/2020/05/index.html"},{revision:"8f60bb07aa452fdce7979133358b5c91",url:"./archives/2020/06/index.html"},{revision:"7fb5e14118931bf10b2ea2d6928ec2e4",url:"./archives/2020/07/index.html"},{revision:"2184a03367303b7d12377c9d72709a86",url:"./archives/2020/08/index.html"},{revision:"54005af443882b9598da16e644fd83a7",url:"./archives/2020/index.html"},{revision:"00d3ae82b43efe3a40dbcfd8b1dbe425",url:"./archives/2020/page/2/index.html"},{revision:"7f98afa5f0f5ea54c8fafa353a53b8cd",url:"./archives/index.html"},{revision:"8a62f6ab60ddeb4470f8b7e0d32655ed",url:"./archives/page/2/index.html"},{revision:"9fb351efc4b8a7db51d2d7325f60fb03",url:"./baidu_verify_spMQLbgc0m.html"},{revision:"493321397a4dfcce00d15d06cc0c6762",url:"./catch-cat.min.js"},{revision:"32afc3660490f51b90dc75402491ea02",url:"./catch-cat/index.html"},{revision:"bb526a9146de75114e5297d13a3d68ff",url:"./categories/Bug/index.html"},{revision:"e93e236758caf718437a74883fa6727f",url:"./categories/Dev/GitHub/index.html"},{revision:"3e2828311564e2da90a29fda45dbad51",url:"./categories/Dev/Hexo/index.html"},{revision:"c230e529da2faf93071476354161bbfc",url:"./categories/Dev/index.html"},{revision:"6c5d0129e6c651c146cd50d0c6e928c6",url:"./categories/Dev/page/2/index.html"},{revision:"3d32723ff5d35e2ba561317c48ce6435",url:"./categories/Dev/Vercel/index.html"},{revision:"8a4d28bf702afa96330cab94f1aef884",url:"./categories/Dev/Windows/index.html"},{revision:"a23b638a3b8e096f8d5f0b014712d1a6",url:"./categories/Dev/工具/index.html"},{revision:"d100ead7660c3daccd4fe0c490f727de",url:"./categories/Emoji/index.html"},{revision:"4d33a561db204e4d855b5ba2f9938974",url:"./categories/GitHub/index.html"},{revision:"bc0cc8d5613968df5b0a7815af941a46",url:"./categories/index.html"},{revision:"a7b7b98dfc69b2653ea9596fa6c4c97c",url:"./categories/文言文编程/index.html"},{revision:"564a57949097d9a51abae6ea2d3975cd",url:"./changelog/index.html"},{revision:"359a1e71674c135b6598b08037e962b9",url:"./css/style/dark.css"},{revision:"6c72e6ad026b035964e34b035dd22dcb",url:"./css/style/flesx.css"},{revision:"1407dc11577c56dde90dce10aa71bc50",url:"./css/style/note.css"},{revision:"fc764d9a99cd208d780999d32b2c47da",url:"./css/style/timeline.l.css"},{revision:"ad6908f251401b500ce180848dc739a3",url:"./css/style/valine.l.css"},{revision:"72622e54aac09aaa381730a70676a78f",url:"./favicon.ico"},{revision:"2e402e80148ae4fb471de2926dffe672",url:"./friends/index.html"},{revision:"a4aca0ae2edd605418c47f0951d80542",url:"./index.html"},{revision:"dcb28d9951db220481dd2c8d7b991a63",url:"./js/c.js"},{revision:"f564bbb092181f20953084c3ed507461",url:"./manifest.json"},{revision:"7fadc39c74baabae62d83916d97c744f",url:"./map/index.html"},{revision:"1b3819adb7fdc61d51e9784bcec93a0d",url:"./mikutap/css/mikutap.css"},{revision:"5279a09d7a75b44f3c35364ea2a8f08b",url:"./mikutap/data/main/main.json"},{revision:"d94b20e465ff7289142b647c1ac142ea",url:"./mikutap/data/track/track.json"},{revision:"4b63179db3c45dfd9078a252b2575cd1",url:"./mikutap/icon.png"},{revision:"56ba4222adad2322b0168981868bc934",url:"./mikutap/index.html"},{revision:"936ff3edd8373c243f56bf9c0fc66ec8",url:"./mikutap/js/mikutap.min.js"},{revision:"ee0a7ce469b3a15bd2c57ef76f38dbc6",url:"./mikutap/shared/css/common-1.css"},{revision:"a1aba3a1001e09230cbfdb18d522cdbc",url:"./mikutap/shared/css/index-1.css"},{revision:"43e49a61141c64bcf8d7981f7a6a26f5",url:"./mikutap/shared/js/common-2.min.js"},{revision:"b74c8c57d13ad72401b651f4128a2468",url:"./mikutap/shared/sp/css/common.css"},{revision:"3f04861a591e54f76d796c9396e420a4",url:"./page/2/index.html"},{revision:"ca2b188779e892c53da3354f758342d5",url:"./play/index.html"},{revision:"14185283a1e1532892ff76c3337b7e69",url:"./posts/17931.html"},{revision:"14966efab82adda93ad3548d583eceb8",url:"./posts/22938.html"},{revision:"3f67b3be8b2fdb0422aa8acbb929a209",url:"./posts/24179.html"},{revision:"c03c7b746014d40e9425f73f7a3ee583",url:"./posts/24549.html"},{revision:"9da276e448248ec4ac2a0645ac1128e7",url:"./posts/25909.html"},{revision:"bce0250dca884adca0cf42b389107fc2",url:"./posts/28146.html"},{revision:"ddfd4bf57dcb247929fb89c7ed77a8a7",url:"./posts/32716.html"},{revision:"f52cf0d4521064dbe8dc0c3a1573a2c4",url:"./posts/39479.html"},{revision:"e2a5711a0d0e521aca11b40235f1b8b3",url:"./posts/4141.html"},{revision:"00397ed68339949dce6a198ceb8f4ea8",url:"./posts/43359.html"},{revision:"4cedce5ccba22d836ca3a43444dde5ad",url:"./posts/47424.html"},{revision:"30ad480f8f78803d824178a35ba173b0",url:"./posts/49939.html"},{revision:"93db70cca7a35843d2b3930fdde1026b",url:"./posts/5913.html"},{revision:"5a86fd5af3784966b68247072b161cbc",url:"./posts/7578.html"},{revision:"dc125e38031c1934a7c33ff1dd597254",url:"./runner/index.html"},{revision:"1d0593aa73a9956558cf5307ee498c23",url:"./say/index.html"},{revision:"acc60a5d49d104296ff41b50959e8879",url:"./search.json"},{revision:"634e800766df0fd17721184b52aa2fa4",url:"./search/index.html"},{revision:"935eb50b24d97a184ca9623a91c0f616",url:"./t-rex/assets/css/t-rex.css"},{revision:"01f2014886ea4de08147a231bebfd958",url:"./t-rex/assets/js/index.js"},{revision:"7bc8783256a189ab13556a4f89a9b96c",url:"./t-rex/assets/js/t-rex.js"},{revision:"cad7798da0d84c8a6e55affb940bc76b",url:"./t-rex/index.html"},{revision:"765d45ed9a3397fc8b9e9c5fa73ff335",url:"./tags/Bug/index.html"},{revision:"a12f9ad89369f96f21a08fe78b31fc80",url:"./tags/Coding-Pages/index.html"},{revision:"a81954c0f2166c6d3f9097cca9d808af",url:"./tags/Commands/index.html"},{revision:"c5884dd6c5b9cba1f36ff6d7d9335f35",url:"./tags/Dev/index.html"},{revision:"2abc7a9306d050b473c6225e48aca1c6",url:"./tags/Emoji/index.html"},{revision:"e6db0c5d66bb1b9d92b5ffcc0fd8414b",url:"./tags/GitHub-Actions/index.html"},{revision:"ef5b1b28c594c2f0c048e3b5ab08f558",url:"./tags/GitHub/index.html"},{revision:"3eee6533c0e27396c88d17cebcdabee5",url:"./tags/Hexo/index.html"},{revision:"d500d4d33a8e347b0e85baeec59dc2e1",url:"./tags/index.html"},{revision:"a59af5b6cece615819b8bc95b4524f56",url:"./tags/issues/index.html"},{revision:"88a4ab90a6562b6c441972d002a3b58d",url:"./tags/LeanCloud/index.html"},{revision:"736518f9ee4dde2906e2bfd63e19c919",url:"./tags/UptimeRobot/index.html"},{revision:"db30f9fcf8c1301da27dfa98d8e594ad",url:"./tags/URL/index.html"},{revision:"ec1fc9aa4e5262392dd2f303c72e0ce0",url:"./tags/Vercel/index.html"},{revision:"8e8355d7c7696d3ce86d844c74ed1464",url:"./tags/wenyan-lang/index.html"},{revision:"0fc79e45cd6023a4e6109f74238fec74",url:"./tags/Windows/index.html"},{revision:"46aa5d97d4fcd5cf288b490f03395d60",url:"./tags/文言文编程/index.html"},{revision:"d938028b96db4816908ee9a34435f13e",url:"./tags/浏览器/index.html"},{revision:"aecb4be2533bf863c3ca3b1f7add7e97",url:"./tags/炫酷文字/index.html"},{revision:"559861c49caff49ff9e2a93d90f90f5f",url:"./tags/网站存活监控/index.html"},{revision:"fabf7271fcada1bc1f03c6f2aa92f982",url:"./vercel.json"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:259200}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();