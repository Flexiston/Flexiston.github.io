"use strict";var workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/workbox-sw.js")),workbox.setConfig({modulePathPrefix:"https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/")}),workbox.core.setCacheNameDetails({prefix:"Flexiston's Blog"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"71f2c512be813c5da4adfa6aabdbad93",url:"./404.html"},{revision:"8db4246aa8d0efc2af3cb518f683f133",url:"./about/index.html"},{revision:"0d91803514f5763327394f24ff424df2",url:"./archives/2020/04/index.html"},{revision:"2ff14465db8848dc30eafe08c0acecf4",url:"./archives/2020/05/index.html"},{revision:"bb73a0e703dd9c27a7834db3911c19e9",url:"./archives/2020/06/index.html"},{revision:"e2750385acc2f70898a2e3a1de9bf82b",url:"./archives/2020/07/index.html"},{revision:"246c4780bb03be0f1fe4030c5a9ab7f5",url:"./archives/2020/08/index.html"},{revision:"f9d719044d8aadf2f1152c71f4f529cb",url:"./archives/2020/09/index.html"},{revision:"e198b7baf25d5b6115f63a9e45e1f943",url:"./archives/2020/index.html"},{revision:"b132fd60c1330163faef986ffa3558bc",url:"./archives/2020/page/2/index.html"},{revision:"21bbbedcd089d76025d632304d9cd5b7",url:"./archives/index.html"},{revision:"360f2af50a4b7f8c88ccde9efc82e2dd",url:"./archives/page/2/index.html"},{revision:"9fb351efc4b8a7db51d2d7325f60fb03",url:"./baidu_verify_spMQLbgc0m.html"},{revision:"493321397a4dfcce00d15d06cc0c6762",url:"./catch-cat.min.js"},{revision:"7c5f2d809c6774802c30f68863f08065",url:"./catch-cat/index.html"},{revision:"29f5a35fca8cb5548441acc0ff317ba2",url:"./categories/Bug/index.html"},{revision:"473d54b6d1607290f19b42458152eff1",url:"./categories/Dev/GitHub/index.html"},{revision:"c12edc21dfc1ba4588533884c2c71609",url:"./categories/Dev/Hexo/index.html"},{revision:"a01993620f1e287faba6c4f96449f6e3",url:"./categories/Dev/index.html"},{revision:"89d23d385ee27e0d0eb74d065e80e4a6",url:"./categories/Dev/page/2/index.html"},{revision:"d161e8ba6fcc36043cacb4f4f3f47088",url:"./categories/Dev/Vercel/index.html"},{revision:"8b6a0304776bea381981443031f8ed87",url:"./categories/Dev/Windows/index.html"},{revision:"1f7e2cfdd7e11cb080d7a1f75cb02066",url:"./categories/Dev/工具/index.html"},{revision:"058b7eebfba56730d5c2b17e51cc4bc8",url:"./categories/Emoji/index.html"},{revision:"11daec4ee893c0c1b49d8e2d9735c224",url:"./categories/GitHub/index.html"},{revision:"cea514cbf7b3180102228872acd99016",url:"./categories/index.html"},{revision:"5b67889561a05d17e34dacbeb25171f2",url:"./categories/文言文编程/index.html"},{revision:"971f4b6c4157e5431fd53369807d841e",url:"./categories/白嫖/index.html"},{revision:"0491c77b757cc8293aa6ced08dd43af8",url:"./changelog/index.html"},{revision:"716b176afc842df011f56933c1b16f32",url:"./css/style/artalk.css"},{revision:"16c3b49884e7db1e57274f5e2fd6fae7",url:"./css/style/darkmode.css"},{revision:"d116f64aa02da892d141dea9b9744d84",url:"./css/style/flesx.css"},{revision:"ec07076b1bc9799e0dab5989c7e1d1ee",url:"./css/style/links.css"},{revision:"1407dc11577c56dde90dce10aa71bc50",url:"./css/style/note.css"},{revision:"fc764d9a99cd208d780999d32b2c47da",url:"./css/style/timeline.l.css"},{revision:"72622e54aac09aaa381730a70676a78f",url:"./favicon.ico"},{revision:"66765266c2b588acd62b49eff6ce9315",url:"./friends/index.html"},{revision:"5ac07773e44a81d042249c48841eafd5",url:"./index.html"},{revision:"8565f7b8c2047909ed10bdc04cc257bc",url:"./js/app.m.js"},{revision:"ae0be675f96610c4194a953de28b5c84",url:"./js/darkmode.js"},{revision:"f564bbb092181f20953084c3ed507461",url:"./manifest.json"},{revision:"a16bcc073a785f21aa79a94aba8a17d2",url:"./map/index.html"},{revision:"1b3819adb7fdc61d51e9784bcec93a0d",url:"./mikutap/css/mikutap.css"},{revision:"5279a09d7a75b44f3c35364ea2a8f08b",url:"./mikutap/data/main/main.json"},{revision:"d94b20e465ff7289142b647c1ac142ea",url:"./mikutap/data/track/track.json"},{revision:"4b63179db3c45dfd9078a252b2575cd1",url:"./mikutap/icon.png"},{revision:"56ba4222adad2322b0168981868bc934",url:"./mikutap/index.html"},{revision:"936ff3edd8373c243f56bf9c0fc66ec8",url:"./mikutap/js/mikutap.min.js"},{revision:"ee0a7ce469b3a15bd2c57ef76f38dbc6",url:"./mikutap/shared/css/common-1.css"},{revision:"a1aba3a1001e09230cbfdb18d522cdbc",url:"./mikutap/shared/css/index-1.css"},{revision:"43e49a61141c64bcf8d7981f7a6a26f5",url:"./mikutap/shared/js/common-2.min.js"},{revision:"b74c8c57d13ad72401b651f4128a2468",url:"./mikutap/shared/sp/css/common.css"},{revision:"a9d3034364628ea6b74cfc07c349f4f9",url:"./page/2/index.html"},{revision:"2548f7f983093d8db065bbeb768859e1",url:"./play/index.html"},{revision:"e5d2ba6c79f72852165b553f3249fdcb",url:"./posts/17931.html"},{revision:"bb5cc4b5e8ac1812edf5b7507694a37d",url:"./posts/22938.html"},{revision:"2c9e3e22c101b6f4bfa35736b53fdbcc",url:"./posts/24179.html"},{revision:"9dfb6549b2a9a54fa87a27c216860c0a",url:"./posts/24549.html"},{revision:"213f2543dbd810ecaff1403c17b17c06",url:"./posts/25909.html"},{revision:"97ee51f0fbd8d14f83082429ebe7e1e1",url:"./posts/27708.html"},{revision:"9862b6c14e96fd7e2fac0c1d16de6994",url:"./posts/28146.html"},{revision:"b75088af312e9a5fd5ff65609d002e78",url:"./posts/32716.html"},{revision:"68b1726c7f4070860f1151e4c458a6ef",url:"./posts/39479.html"},{revision:"151c1f253ffaded4366b86b7345c79ca",url:"./posts/4141.html"},{revision:"592be0cc1d921dfe5c2e4821469c5719",url:"./posts/43359.html"},{revision:"65bf14853fc1745d4649adcce2ea15cc",url:"./posts/47424.html"},{revision:"352b79e8731ea43987c1c4e9141da17f",url:"./posts/49939.html"},{revision:"92312ca28d5086278b543b0f16185fc6",url:"./posts/5913.html"},{revision:"ef894f990a409cdf3ae40bfd15ae4d49",url:"./posts/7578.html"},{revision:"570b6c92e364c819566c83b5f42ea9cc",url:"./runner/index.html"},{revision:"6f97da0710edab7fbe196afce7c63c74",url:"./say/index.html"},{revision:"e52838d7304c6b5262c47b4a9b209d09",url:"./search.json"},{revision:"be91c0639b5cc521e26fe355604beb1b",url:"./search/index.html"},{revision:"935eb50b24d97a184ca9623a91c0f616",url:"./t-rex/assets/css/t-rex.css"},{revision:"01f2014886ea4de08147a231bebfd958",url:"./t-rex/assets/js/index.js"},{revision:"7bc8783256a189ab13556a4f89a9b96c",url:"./t-rex/assets/js/t-rex.js"},{revision:"cad7798da0d84c8a6e55affb940bc76b",url:"./t-rex/index.html"},{revision:"d3589aa301b9d586008a0e2a3cc20230",url:"./tags/Bug/index.html"},{revision:"5831591bdfde8eb21df75fde7c638ea6",url:"./tags/Coding-Pages/index.html"},{revision:"d6d433c64f5996d9c555788bdcf3fa66",url:"./tags/Commands/index.html"},{revision:"5d6dd0136825c35f17bca80ba03217d4",url:"./tags/Dev/index.html"},{revision:"86d18722504a5e4768c823f73697f2db",url:"./tags/Dev/page/2/index.html"},{revision:"55f9e9e35f07b9ca1913acaa9043d1f9",url:"./tags/Emoji/index.html"},{revision:"5f01da096e166a8eacb8a349bbcb717d",url:"./tags/GitHub-Actions/index.html"},{revision:"790c98f2d85990eeabb5747648141f7f",url:"./tags/GitHub/index.html"},{revision:"83157daffa5a5adba6f7d8ba67f3b9bb",url:"./tags/Hexo/index.html"},{revision:"0a9090f880f421d7cfd7d4a638c90af0",url:"./tags/index.html"},{revision:"9450feeaf23c67b5b17ed297664416c8",url:"./tags/issues/index.html"},{revision:"a9b4ffec182548af94c7654b79655b0f",url:"./tags/LeanCloud/index.html"},{revision:"cc1bca6c8f16e13c08ddd87def5f627b",url:"./tags/PicGo/index.html"},{revision:"c8bdb7f3f61cd916c6a01387b26646ba",url:"./tags/UptimeRobot/index.html"},{revision:"b8876c097ca6b7b878893edecbc83f55",url:"./tags/URL/index.html"},{revision:"6e76209da1a831171394109e6ebc76df",url:"./tags/Vercel/index.html"},{revision:"c77fa8f9ec50a651329d581d23514a01",url:"./tags/wenyan-lang/index.html"},{revision:"112d5c99af53e90fdd53f8b978083b56",url:"./tags/Windows/index.html"},{revision:"3a567a6bbdafcb5c259a3e9c6014280b",url:"./tags/图床/index.html"},{revision:"23d690781206803d967a3d574a49bbd1",url:"./tags/文言文编程/index.html"},{revision:"651c14ba478f8e2dbd699966f687c1e5",url:"./tags/浏览器/index.html"},{revision:"5e31d821d33e297462e81039072598c5",url:"./tags/炫酷文字/index.html"},{revision:"8b7292fa16efd6afa1ccb11483242926",url:"./tags/网站存活监控/index.html"},{revision:"fabf7271fcada1bc1f03c6f2aa92f982",url:"./vercel.json"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:86400}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();