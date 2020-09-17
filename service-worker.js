"use strict";var workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/workbox-sw.js")),workbox.setConfig({modulePathPrefix:"https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/")}),workbox.core.setCacheNameDetails({prefix:"Flexiston's Blog"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"599288bcf910d66ce575dc2d03fa02e2",url:"./404.html"},{revision:"a1c9cf9563dfe5febafeea47a5ea6338",url:"./about/index.html"},{revision:"fea9dfb8e03c1a3503c101306b6c9769",url:"./archives/2020/04/index.html"},{revision:"022ac6505083e32e74b3ca1f5bece302",url:"./archives/2020/05/index.html"},{revision:"71ffebd02b535b3faa5979e2b72a7a89",url:"./archives/2020/06/index.html"},{revision:"c212f9e10dc67d8bdb1f938de075d7c9",url:"./archives/2020/07/index.html"},{revision:"e7bd381c245847b6db739064d80ccfcc",url:"./archives/2020/08/index.html"},{revision:"b89dc38dda96a8bad96953cffdd14c76",url:"./archives/2020/09/index.html"},{revision:"eaab5e961b1e50fc3730a30d27be124a",url:"./archives/2020/index.html"},{revision:"de503585943c960ee72158cde288a3a4",url:"./archives/2020/page/2/index.html"},{revision:"827a5bc9941de2f387956db869b5638b",url:"./archives/index.html"},{revision:"74c9d5c8e50b34bd5bcba926b8c72708",url:"./archives/page/2/index.html"},{revision:"9fb351efc4b8a7db51d2d7325f60fb03",url:"./baidu_verify_spMQLbgc0m.html"},{revision:"6f79b93f3825b881f80a56b9c0fc6ff2",url:"./catch-cat.min.js"},{revision:"086e944a0f9e6879fa02daea98b93ed3",url:"./catch-cat/index.html"},{revision:"5704e352d71dc2184ce4917f3372d5f4",url:"./categories/Bug/index.html"},{revision:"c721de5caa868c1f00bdc95afaf263db",url:"./categories/Dev/GitHub/index.html"},{revision:"027ca415942101612ba55ddea7311284",url:"./categories/Dev/Hexo/index.html"},{revision:"7cbfa69d2708bc2d7287ae4c91f69866",url:"./categories/Dev/index.html"},{revision:"f8ad544e96a4a8a05b796e0538341e6d",url:"./categories/Dev/page/2/index.html"},{revision:"e0b909f37d988d0b4fa21032413de449",url:"./categories/Dev/Vercel/index.html"},{revision:"13379ebad89640522d82ac73943cc911",url:"./categories/Dev/Windows/index.html"},{revision:"0821bb0968eeb1224ed7f5bcfcf4daa4",url:"./categories/Dev/工具/index.html"},{revision:"dff9d6721f49d162e70ae08324c25a08",url:"./categories/Emoji/index.html"},{revision:"b527386290faf0bdc879f554fcf4954c",url:"./categories/GitHub/index.html"},{revision:"f8306224dbb7488f6cde4c4fd6d43ac9",url:"./categories/index.html"},{revision:"753a6b31750a81b61a3afeb2210c781f",url:"./categories/文言文编程/index.html"},{revision:"cb8c303d2d873ba36f7146226ab2b550",url:"./categories/白嫖/index.html"},{revision:"7694701c0b062ece93b628d57b02f869",url:"./changelog/index.html"},{revision:"716b176afc842df011f56933c1b16f32",url:"./css/style/artalk.css"},{revision:"16c3b49884e7db1e57274f5e2fd6fae7",url:"./css/style/darkmode.css"},{revision:"5e6f9ce9e3cabb85ad7c60148853ccbf",url:"./css/style/flesx.css"},{revision:"ec07076b1bc9799e0dab5989c7e1d1ee",url:"./css/style/links.css"},{revision:"1407dc11577c56dde90dce10aa71bc50",url:"./css/style/note.css"},{revision:"fc764d9a99cd208d780999d32b2c47da",url:"./css/style/timeline.l.css"},{revision:"72622e54aac09aaa381730a70676a78f",url:"./favicon.ico"},{revision:"3d0f6c95e01589b8c3067833ab634469",url:"./friends/index.html"},{revision:"e2cf06aa664ba19ab28bf0b3a1bae1e7",url:"./index.html"},{revision:"de47307c7e8466f3e9aa883486ad16f1",url:"./js/app.k.js"},{revision:"ae0be675f96610c4194a953de28b5c84",url:"./js/darkmode.js"},{revision:"f564bbb092181f20953084c3ed507461",url:"./manifest.json"},{revision:"a9389ff9c40e11ae1a2e112411490a6e",url:"./map/index.html"},{revision:"1b3819adb7fdc61d51e9784bcec93a0d",url:"./mikutap/css/mikutap.css"},{revision:"5279a09d7a75b44f3c35364ea2a8f08b",url:"./mikutap/data/main/main.json"},{revision:"d94b20e465ff7289142b647c1ac142ea",url:"./mikutap/data/track/track.json"},{revision:"4b63179db3c45dfd9078a252b2575cd1",url:"./mikutap/icon.png"},{revision:"56ba4222adad2322b0168981868bc934",url:"./mikutap/index.html"},{revision:"936ff3edd8373c243f56bf9c0fc66ec8",url:"./mikutap/js/mikutap.min.js"},{revision:"ee0a7ce469b3a15bd2c57ef76f38dbc6",url:"./mikutap/shared/css/common-1.css"},{revision:"a1aba3a1001e09230cbfdb18d522cdbc",url:"./mikutap/shared/css/index-1.css"},{revision:"43e49a61141c64bcf8d7981f7a6a26f5",url:"./mikutap/shared/js/common-2.min.js"},{revision:"b74c8c57d13ad72401b651f4128a2468",url:"./mikutap/shared/sp/css/common.css"},{revision:"1317474612f5112c6391033ec8949a1c",url:"./page/2/index.html"},{revision:"19bad1da85c89359a6d737c867198599",url:"./play/index.html"},{revision:"52d29daf900e56ed1d2e26bc854bc865",url:"./posts/17931.html"},{revision:"bccfff4ba59ff4b2983a903905421c19",url:"./posts/22938.html"},{revision:"799bdfb7e594cf3f72bc5e6d1130c4b2",url:"./posts/24179.html"},{revision:"3ac38b0de38ecd4416047612f94c308e",url:"./posts/24549.html"},{revision:"72e368035c7a13d098f6433952f92eab",url:"./posts/25909.html"},{revision:"0180e0cc57c3ed234b575bb67c9966fd",url:"./posts/27708.html"},{revision:"3a874e2ea6af7f17ae031082c81ef385",url:"./posts/28146.html"},{revision:"7ca4446e235af9f661a0d842c9086b42",url:"./posts/32716.html"},{revision:"77e3ddfd3bfc8ac7bc47718dc2afb007",url:"./posts/39479.html"},{revision:"6c4594b5cc2968f07d4f499de3d0f13b",url:"./posts/4141.html"},{revision:"fcc6ebfd272f0385f368dc2f2f44f024",url:"./posts/43359.html"},{revision:"31b378f200c6cb6c36320ced860743ea",url:"./posts/47424.html"},{revision:"89cea2b75cbf1b58ef8b02b1e5d89df4",url:"./posts/49939.html"},{revision:"e8a429659afd71d428e1a4e6aa0bb758",url:"./posts/5913.html"},{revision:"7cfb4f9324e47c1474ea781512e37a81",url:"./posts/7578.html"},{revision:"4586ca8f66d3f0b16e1e18f6a3fbe652",url:"./runner/index.html"},{revision:"4126da5520edba6512f37288ddf35b9a",url:"./say/index.html"},{revision:"2f1523a4b3ee7e60a8174615948c1d9e",url:"./search.json"},{revision:"94a2aa7d77eccab7cc10e697e71b6921",url:"./search/index.html"},{revision:"935eb50b24d97a184ca9623a91c0f616",url:"./t-rex/assets/css/t-rex.css"},{revision:"01f2014886ea4de08147a231bebfd958",url:"./t-rex/assets/js/index.js"},{revision:"a10b0288b9d6b93b8b04de3351882514",url:"./t-rex/assets/js/t-rex.js"},{revision:"cad7798da0d84c8a6e55affb940bc76b",url:"./t-rex/index.html"},{revision:"027fb8984f08552bf935a208471c1d4b",url:"./tags/Bug/index.html"},{revision:"2e4776f1dbd97766f82cf208ff56125f",url:"./tags/Coding-Pages/index.html"},{revision:"02eb0e314b1ab115c70fe7c117d86b0e",url:"./tags/Commands/index.html"},{revision:"c51f660bc3dfb36804567af60be0964f",url:"./tags/Dev/index.html"},{revision:"67ef8d04d83b88c1203c7803ef813f6c",url:"./tags/Dev/page/2/index.html"},{revision:"7acc2b2be9610d284f39db5ca620d308",url:"./tags/Emoji/index.html"},{revision:"346fa34c18f0196a50abbc86fa7490a4",url:"./tags/GitHub-Actions/index.html"},{revision:"b039d73e56eb156bfe92a8de49f774b5",url:"./tags/GitHub/index.html"},{revision:"f360d8e86216f6acc8f10ebaec5f3094",url:"./tags/Hexo/index.html"},{revision:"7334e3d40ab19290edfba7d8c55f13fb",url:"./tags/index.html"},{revision:"7d85f3ccf0a75f88827fe0c19b3a9730",url:"./tags/issues/index.html"},{revision:"eae3078ec9b717b12b737ac057ee2423",url:"./tags/LeanCloud/index.html"},{revision:"8c10c426d33678fe3ef3b2fb4b4d989c",url:"./tags/PicGo/index.html"},{revision:"0ac3433c7a6b0fcc4a20832816a05d66",url:"./tags/UptimeRobot/index.html"},{revision:"afea1a1e87cf7fdf1bc267a6d0a6ec4d",url:"./tags/URL/index.html"},{revision:"f2bfc2cb81571ee6a025e70120b69864",url:"./tags/Vercel/index.html"},{revision:"825d9caf22a60e0605f60f480631ec64",url:"./tags/wenyan-lang/index.html"},{revision:"bf8013d8d40a58688c06fb7e6b6981f1",url:"./tags/Windows/index.html"},{revision:"8069c0149c5d7b003a21099629c1a3e3",url:"./tags/图床/index.html"},{revision:"35b5d905a87786c97ddbcd22ac7997eb",url:"./tags/文言文编程/index.html"},{revision:"67098c7fbea4ffeaf7ac10a660b3f200",url:"./tags/浏览器/index.html"},{revision:"b65bc9ee9adc3fd3f2e327a80185c113",url:"./tags/炫酷文字/index.html"},{revision:"d2642d15a6106bf612e164da5a17e174",url:"./tags/网站存活监控/index.html"},{revision:"fabf7271fcada1bc1f03c6f2aa92f982",url:"./vercel.json"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:86400}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();