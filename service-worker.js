"use strict";var workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/workbox-sw.js")),workbox.setConfig({modulePathPrefix:"https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/")}),workbox.core.setCacheNameDetails({prefix:"Flexiston's Blog"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"4fc1739af9834ed69cf4d0b331d96eee",url:"./404.html"},{revision:"091ac4f2d3db960cd031a62bcc5e5ddf",url:"./about/index.html"},{revision:"f881568c8b5d3889bb92ec962b6ce1b9",url:"./apply-link/index.html"},{revision:"12e442b5ac5e34870a3eb7773e302bf8",url:"./archives/2020/04/index.html"},{revision:"da17a306164ab5d0e903a71472ef0020",url:"./archives/2020/05/index.html"},{revision:"3b12cb0dd5b3bb5f0e63c2786364c45e",url:"./archives/2020/06/index.html"},{revision:"4df880216df7c41055d612166de7ee7f",url:"./archives/2020/07/index.html"},{revision:"adb897bceab8c1089cf69fd63c77f35f",url:"./archives/2020/08/index.html"},{revision:"7ba5f0e54809ac4ebae9326620909628",url:"./archives/2020/index.html"},{revision:"7ce6c5e7b87549fc889c917d026843f2",url:"./archives/2020/page/2/index.html"},{revision:"a995194cee8696e5a60e0f3e9a0528b5",url:"./archives/index.html"},{revision:"0b573e0e887df58aa8dfe46e21766ee6",url:"./archives/page/2/index.html"},{revision:"493321397a4dfcce00d15d06cc0c6762",url:"./catch-cat.min.js"},{revision:"0244ad0153076428a6c6eaaa576b6067",url:"./catch-cat/index.html"},{revision:"a4ae4412752496113b3de99a8ae4c539",url:"./categories/Bug/index.html"},{revision:"6576f5f1a7184a440f1c45b9c1247913",url:"./categories/Dev/GitHub/index.html"},{revision:"f4fd63c86ae656af314fb495eb345318",url:"./categories/Dev/Hexo/index.html"},{revision:"12dc7a3e240cb3671aadc9657059e007",url:"./categories/Dev/index.html"},{revision:"53671ae9f23305b15295b5fd052954c3",url:"./categories/Dev/page/2/index.html"},{revision:"845c39328a3bd0f5acaa5b457d0257bb",url:"./categories/Dev/Vercel/index.html"},{revision:"0f314effa6e330fd221aa9ab33e1f40d",url:"./categories/Dev/Windows/index.html"},{revision:"8c44a5bea98b6e38ca300f94dc4e21c9",url:"./categories/Dev/工具/index.html"},{revision:"aa12a9d040ac7f760974bdc6aaf3c800",url:"./categories/Emoji/index.html"},{revision:"0d31936539c71b2e02437e375560e8c1",url:"./categories/GitHub/index.html"},{revision:"62033977b6f161d1df64c29c71e199cb",url:"./categories/index.html"},{revision:"841127a22be57399abe1a5ce2da8dde3",url:"./categories/文言文编程/index.html"},{revision:"6899b48ae264747142ddec2cd18f20e6",url:"./css/style/main.css"},{revision:"ddb82c3174916eb6f55357c44758be89",url:"./css/style/note.css"},{revision:"6195028e0fc1e71cdc78abed6afdb8e3",url:"./css/style/timeline.l.css"},{revision:"432e1fde311abc4cb282ac6cc045a2ca",url:"./css/style/valine.l.css"},{revision:"8aeb37ac9cb6259a707a250a928e8d1c",url:"./friends/index.html"},{revision:"b2e5f90d67fcd5bde63f51b16ba4d5f2",url:"./images/favicon.png"},{revision:"4090ef43e7791f9d1bd3dde7e0b66e09",url:"./images/post/ga-devsettings.png"},{revision:"bc79d6bba003bd712df582233874370f",url:"./images/post/ga-newrepo.png"},{revision:"c6fd104e557634e6d0d568ec7fdf9a89",url:"./images/post/ga-push.png"},{revision:"e0541aa77e810b81de49d60dc6dfb17d",url:"./images/post/ga-reposuccess.png"},{revision:"7d7e52eff8253cec9c3b53b1be8ae4ad",url:"./images/post/ga-settings.png"},{revision:"fdebd8ae01245e34454663aeeff43b13",url:"./images/post/ga-token.png"},{revision:"f310d88c6608e01a281544d66dacde90",url:"./images/post/ga-tokensuccess.png"},{revision:"85c92d15c572a2a7fec111d64a5462d2",url:"./images/post/ga-workflows.png"},{revision:"5dff02adac8d9c3ec56e0b1f57430542",url:"./images/post/ver-accessaccount.png"},{revision:"94c41cc3888a8f3f2d9670268da24c7c",url:"./images/post/ver-arecord.png"},{revision:"8c34adfc93d7dbebb16d8a7848df3f6b",url:"./images/post/ver-cloning.png"},{revision:"51a42809f63bf935add68fd416430602",url:"./images/post/ver-config.png"},{revision:"f3fe0e5d3934ca41178143a6b73006d4",url:"./images/post/ver-domain.png"},{revision:"278d04202a9241fa688d8b0b56fc1af5",url:"./images/post/ver-domains.png"},{revision:"8cf86e36b1a6cd280e7082d16ec211a8",url:"./images/post/ver-import.png"},{revision:"3a6ba51c9ae8f4887cff5f647c22c7a1",url:"./images/post/ver-importrepo.png"},{revision:"b638932ceb036e24f3bf65560a22821c",url:"./images/post/ver-importroot.png"},{revision:"11a7b323675bc4c642c434266605d0ac",url:"./images/post/ver-install.png"},{revision:"3078732e532df65f8a8bbd1285a2a694",url:"./images/post/ver-signup.png"},{revision:"c51c1dde60874403992360df8ea1c61c",url:"./images/post/ver-success.png"},{revision:"777fca36827a4052e4ae5cd7f5677ab9",url:"./index.html"},{revision:"42a6d753fbc76e071c3c878617d78053",url:"./js/app.js"},{revision:"f564bbb092181f20953084c3ed507461",url:"./manifest.json"},{revision:"1c8b3f4a45a4157981136dd7ec9c863b",url:"./map/index.html"},{revision:"1b3819adb7fdc61d51e9784bcec93a0d",url:"./mikutap/css/mikutap.css"},{revision:"5279a09d7a75b44f3c35364ea2a8f08b",url:"./mikutap/data/main/main.json"},{revision:"d94b20e465ff7289142b647c1ac142ea",url:"./mikutap/data/track/track.json"},{revision:"4b63179db3c45dfd9078a252b2575cd1",url:"./mikutap/icon.png"},{revision:"7215914e2364de945c6b88cf2e97b8ab",url:"./mikutap/index.html"},{revision:"c9c9e57bcfff0719038403667fff9694",url:"./mikutap/js/mikutap.min.js"},{revision:"ee0a7ce469b3a15bd2c57ef76f38dbc6",url:"./mikutap/shared/css/common-1.css"},{revision:"a1aba3a1001e09230cbfdb18d522cdbc",url:"./mikutap/shared/css/index-1.css"},{revision:"43e49a61141c64bcf8d7981f7a6a26f5",url:"./mikutap/shared/js/common-2.min.js"},{revision:"b74c8c57d13ad72401b651f4128a2468",url:"./mikutap/shared/sp/css/common.css"},{revision:"066f0561d0d5314846722399cfbbdb03",url:"./page/2/index.html"},{revision:"abc92b35a11dfbb5032120f4bb40cc40",url:"./play/index.html"},{revision:"40f74cc2adca9605148bcbff658b1954",url:"./posts/17931.html"},{revision:"1af061d3c77e007835bcd49d3f140f2f",url:"./posts/22938.html"},{revision:"c76ff9a846e602225f01c45f4e06bb74",url:"./posts/24179.html"},{revision:"5aa4c9667bc2aa32b605d50cca46464d",url:"./posts/24549.html"},{revision:"3f63c32dbef7b4efed1287d7cba5c7cd",url:"./posts/25909.html"},{revision:"54a7aeb34f2e15d5e44e1672fef4d8ec",url:"./posts/28146.html"},{revision:"952ea4615d11c2771aa47b0fbb0060fc",url:"./posts/32716.html"},{revision:"af80d9df5ee55459ca320ad1a1b46bc6",url:"./posts/39479.html"},{revision:"530486b0bb24bb0a4a6e6e79806a2a61",url:"./posts/4141.html"},{revision:"5fded59f7026f611574ace4285fd0736",url:"./posts/43359.html"},{revision:"77856bb6a41034275fda2b3a4e6d2852",url:"./posts/47424.html"},{revision:"5905e89e9ab7a590f80e47bb79fc5947",url:"./posts/49939.html"},{revision:"b879841c9c735de732be4bac0a3444ce",url:"./posts/57807.html"},{revision:"bc327a829d20f4aa2cdfd1ba86688686",url:"./posts/5913.html"},{revision:"8af4d65c39efc41b6bb34f6cad488339",url:"./posts/7578.html"},{revision:"ede689c586f751793f4f31e11591900a",url:"./runner/index.html"},{revision:"0d390247b1bc2363f11c6ff11591b7fd",url:"./say/index.html"},{revision:"c5e4582e5f4ce17dc46b3040352033d3",url:"./search.json"},{revision:"1a10882572f403e0ca01c5902dbadd28",url:"./search/index.html"},{revision:"935eb50b24d97a184ca9623a91c0f616",url:"./t-rex/assets/css/t-rex.css"},{revision:"01f2014886ea4de08147a231bebfd958",url:"./t-rex/assets/js/index.js"},{revision:"7bc8783256a189ab13556a4f89a9b96c",url:"./t-rex/assets/js/t-rex.js"},{revision:"b23d0321aaa779beece14c072e74e60f",url:"./t-rex/index.html"},{revision:"270aeddc8a11e4fd52011b79ce610b61",url:"./tags/Bug/index.html"},{revision:"70b4e14b4709724d0896980c6b942aa2",url:"./tags/Coding-Pages/index.html"},{revision:"96a254e9af5e4058e4eb42fa8d129412",url:"./tags/Commands/index.html"},{revision:"d72fa7761cd985b87d00588a84d7e88b",url:"./tags/Dev/index.html"},{revision:"77e2e6092ee9e6bb11c104b4a945832c",url:"./tags/Dev/page/2/index.html"},{revision:"6272fc0a83a8c34b1647f10fa20ccb89",url:"./tags/Emoji/index.html"},{revision:"da662b65fa92de9265c8fd3a4b96ba81",url:"./tags/GitHub-Actions/index.html"},{revision:"e9475da2c45cb64872bb0f1ead62cd2b",url:"./tags/GitHub/index.html"},{revision:"bf338a7e422803677c5e126fc52b956f",url:"./tags/Hexo/index.html"},{revision:"c461b1a5b4b381828763b43b266ccdf3",url:"./tags/index.html"},{revision:"d84d22d5b20129b0c32d628aa619a1ce",url:"./tags/issues/index.html"},{revision:"10acdbfcc2bf3b2180ff242a98756daf",url:"./tags/LeanCloud/index.html"},{revision:"d0156bff49158bed98be3f0c972391f5",url:"./tags/UptimeRobot/index.html"},{revision:"13796690c43404f6809626e63fb7a71b",url:"./tags/URL/index.html"},{revision:"fe09d981bc36e7093b61698a2d713889",url:"./tags/Vercel/index.html"},{revision:"739058dda4eca91344f833bcf1431b0a",url:"./tags/wenyan-lang/index.html"},{revision:"1c568d6860bd6fea8cf5a8ca8eb69b7e",url:"./tags/Windows/index.html"},{revision:"e21e89d98b3ec400a2cba3198ef489e3",url:"./tags/文言文编程/index.html"},{revision:"a89af8ea379bc521e451b5eb43e8ce47",url:"./tags/浏览器/index.html"},{revision:"0279bfe0c984607d4a0e0b73604ea1e6",url:"./tags/炫酷文字/index.html"},{revision:"d40f2c05cd3afb9413d1891c5431083e",url:"./tags/网站存活监控/index.html"},{revision:"ff7e11658c67567ecac9e35ffefda677",url:"./timeline/index.html"},{revision:"fabf7271fcada1bc1f03c6f2aa92f982",url:"./vercel.json"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:259200}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();