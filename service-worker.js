"use strict";var workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/workbox-sw.js")),workbox.setConfig({modulePathPrefix:"https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/")}),workbox.core.setCacheNameDetails({prefix:"Flexiston's Blog"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"31785983449431c35aac30d1fdde14e4",url:"./404.html"},{revision:"0b8ea1b82c13f9f27a522c5dc5c6758b",url:"./about/index.html"},{revision:"5791464c1e54755a59bb5f7017764f1b",url:"./apply-link/index.html"},{revision:"7a4f4fac6d5b132ee60ba1e2f42fdebc",url:"./archives/2020/04/index.html"},{revision:"8408243d8cee29464991cfd2669ac297",url:"./archives/2020/05/index.html"},{revision:"124bdc4d6e33a1972a01cafd379a78e6",url:"./archives/2020/06/index.html"},{revision:"52da71a8136dc237b31bde07f35c5c7e",url:"./archives/2020/07/index.html"},{revision:"e2927f12fe2fa0b5d9ed8dab2c12c492",url:"./archives/2020/08/index.html"},{revision:"afa9fa67b4f78392e397d1d8cfe0b84e",url:"./archives/2020/index.html"},{revision:"dbc73a3378e2ab804cb3856ad1b5215e",url:"./archives/2020/page/2/index.html"},{revision:"50a3d505a27a9c6ceff051faab683569",url:"./archives/index.html"},{revision:"b3f630a15bf5a7ab18206c76a7f5e901",url:"./archives/page/2/index.html"},{revision:"9fb351efc4b8a7db51d2d7325f60fb03",url:"./baidu_verify_spMQLbgc0m.html"},{revision:"493321397a4dfcce00d15d06cc0c6762",url:"./catch-cat.min.js"},{revision:"8f9892f4436949a3aab9e3127676fdd6",url:"./catch-cat/index.html"},{revision:"372267ac85734a5c339c589c21f4c823",url:"./categories/Bug/index.html"},{revision:"e73b8a6e5ac688c76cede5a9724319a9",url:"./categories/Dev/GitHub/index.html"},{revision:"bbc9de111bd0dd44db30c433ac6e2f2a",url:"./categories/Dev/Hexo/index.html"},{revision:"a40fa51dd456565780bb485c15365342",url:"./categories/Dev/index.html"},{revision:"1e0747277b3f3986a46f57bff81d4b70",url:"./categories/Dev/page/2/index.html"},{revision:"c50ed7e7936383695010aeea5636ab58",url:"./categories/Dev/Vercel/index.html"},{revision:"e78e4be64cf6a5284463845e41728e69",url:"./categories/Dev/Windows/index.html"},{revision:"53da33f33f70f9cf17a1353ba98817b3",url:"./categories/Dev/工具/index.html"},{revision:"2c142a9a18218729f0e4f73dbde4648c",url:"./categories/Emoji/index.html"},{revision:"524116d336c4653353ca32d89c61370e",url:"./categories/GitHub/index.html"},{revision:"3dfe996be8c8debf4e26e86d43c9bae2",url:"./categories/index.html"},{revision:"bd64d73041672abfda7566a92dc67746",url:"./categories/文言文编程/index.html"},{revision:"6f7f6f5152578468f0684f8c9c1f9d0f",url:"./css/style/flesx.css"},{revision:"1407dc11577c56dde90dce10aa71bc50",url:"./css/style/note.css"},{revision:"fc764d9a99cd208d780999d32b2c47da",url:"./css/style/timeline.l.css"},{revision:"41aa862d91540c18bb47fb4ecbb38e4a",url:"./css/style/valine.l.css"},{revision:"b2e5f90d67fcd5bde63f51b16ba4d5f2",url:"./favicon.png"},{revision:"7506c4193bd3b33b2a086cf73099ffa4",url:"./friends/index.html"},{revision:"f74f77d1148b318e21cca62deb2df2c2",url:"./index.html"},{revision:"cca672e63dfc0f467e27a7da912d00d4",url:"./js/app.js"},{revision:"f564bbb092181f20953084c3ed507461",url:"./manifest.json"},{revision:"e93fd6e6bea12099d2111fca9f2ea309",url:"./map/index.html"},{revision:"1b3819adb7fdc61d51e9784bcec93a0d",url:"./mikutap/css/mikutap.css"},{revision:"5279a09d7a75b44f3c35364ea2a8f08b",url:"./mikutap/data/main/main.json"},{revision:"d94b20e465ff7289142b647c1ac142ea",url:"./mikutap/data/track/track.json"},{revision:"4b63179db3c45dfd9078a252b2575cd1",url:"./mikutap/icon.png"},{revision:"56ba4222adad2322b0168981868bc934",url:"./mikutap/index.html"},{revision:"936ff3edd8373c243f56bf9c0fc66ec8",url:"./mikutap/js/mikutap.min.js"},{revision:"ee0a7ce469b3a15bd2c57ef76f38dbc6",url:"./mikutap/shared/css/common-1.css"},{revision:"a1aba3a1001e09230cbfdb18d522cdbc",url:"./mikutap/shared/css/index-1.css"},{revision:"43e49a61141c64bcf8d7981f7a6a26f5",url:"./mikutap/shared/js/common-2.min.js"},{revision:"b74c8c57d13ad72401b651f4128a2468",url:"./mikutap/shared/sp/css/common.css"},{revision:"c4208c75307f7d34991238482477b67b",url:"./page/2/index.html"},{revision:"d2afb2ca0972bb9ad0caff1171a695c4",url:"./play/index.html"},{revision:"ef93df49d1230d7fc0a04bcef1675624",url:"./posts/17931.html"},{revision:"3ef0bfe035dfe829a87e4f862167cb0c",url:"./posts/22938.html"},{revision:"9c2585384775cd1a466d8a79f1ee3c61",url:"./posts/24179.html"},{revision:"368212608e62b39073fbb3e62a48bfc2",url:"./posts/24549.html"},{revision:"6e0761ccf0467620556e67b7e2429fe3",url:"./posts/25909.html"},{revision:"d2883bb7e319bfcc5987f4d7bc986308",url:"./posts/28146.html"},{revision:"fc3c1442c22f363eb081f39710ea788e",url:"./posts/32716.html"},{revision:"2b490411774458152238de093b7b975d",url:"./posts/39479.html"},{revision:"8ec2bbcba76fdca271fb48a199fe745c",url:"./posts/4141.html"},{revision:"4f81e6d28a52929c7b29f40880dfc9ed",url:"./posts/43359.html"},{revision:"cf6eb34a6996b8f5af393da8be370e5c",url:"./posts/47424.html"},{revision:"bd28abb8c367aa5a937842d52bcca50a",url:"./posts/49939.html"},{revision:"2db640d59313be266b78a206b77a3691",url:"./posts/5913.html"},{revision:"3439cb15845bd903edf686df793b6f80",url:"./posts/7578.html"},{revision:"d4376063acada739eca115d7a4f4d447",url:"./runner/index.html"},{revision:"332680a6c5df3406531a41110437cce0",url:"./say/index.html"},{revision:"543060a63af79530f4e53b0b72106e87",url:"./search.json"},{revision:"1fb8b402dc8c80750793bbf573034585",url:"./search/index.html"},{revision:"548a3a4b7d996e7785c040d2283e9e5e",url:"./shuoshuo/index.html"},{revision:"935eb50b24d97a184ca9623a91c0f616",url:"./t-rex/assets/css/t-rex.css"},{revision:"01f2014886ea4de08147a231bebfd958",url:"./t-rex/assets/js/index.js"},{revision:"7bc8783256a189ab13556a4f89a9b96c",url:"./t-rex/assets/js/t-rex.js"},{revision:"cad7798da0d84c8a6e55affb940bc76b",url:"./t-rex/index.html"},{revision:"1bdf90320fffc698c56e13d3a5b9163a",url:"./tags/Bug/index.html"},{revision:"81f9b75c2a922fe62eace9d243c4d20b",url:"./tags/Coding-Pages/index.html"},{revision:"c5954f089928d72f8c6f965e2558c1d4",url:"./tags/Commands/index.html"},{revision:"b90182393f5c61aa96952919ae61d0c6",url:"./tags/Dev/index.html"},{revision:"a635f2b73bf889908530fb53272b1794",url:"./tags/Emoji/index.html"},{revision:"2450bbdf30c38fb3dde54615cb572c4e",url:"./tags/GitHub-Actions/index.html"},{revision:"0261347bc223595bd3cacbc2d5a81833",url:"./tags/GitHub/index.html"},{revision:"d02282e81e291516779de9021138e7a9",url:"./tags/Hexo/index.html"},{revision:"81f90ca40d03d0d924a783d5f9a0c948",url:"./tags/index.html"},{revision:"9f9854e6d106d5010acd65de955ddf97",url:"./tags/issues/index.html"},{revision:"0ddba753871a477bd0bb9e9f9d2ee29b",url:"./tags/LeanCloud/index.html"},{revision:"1046b7029a7ea21e7f1301c7aa88d832",url:"./tags/UptimeRobot/index.html"},{revision:"50cf538d480faba9a15e2bf07dbf0dc8",url:"./tags/URL/index.html"},{revision:"a29ab5b148ffb8fa6079f3ce72348c9f",url:"./tags/Vercel/index.html"},{revision:"5841980828dae42b70515d0ae59c23c9",url:"./tags/wenyan-lang/index.html"},{revision:"3ea395e7e6b68c547ce73321a123f148",url:"./tags/Windows/index.html"},{revision:"371051383ee259777938b15737defaee",url:"./tags/文言文编程/index.html"},{revision:"0d6f4ac3f464575bf916bb3e8f58cab1",url:"./tags/浏览器/index.html"},{revision:"0ef88e3044c77709256d7e6e67043004",url:"./tags/炫酷文字/index.html"},{revision:"e22183641bc3e627414318dccd783441",url:"./tags/网站存活监控/index.html"},{revision:"ccf5661028e89db21c12fdc13d715b02",url:"./timeline/index.html"},{revision:"fabf7271fcada1bc1f03c6f2aa92f982",url:"./vercel.json"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:259200}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();