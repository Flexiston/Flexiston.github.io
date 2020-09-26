const workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/5.1.3/workbox-sw.js"),workbox.setConfig({modulePathPrefix:"https://storage.googleapis.com/workbox-cdn/releases/5.1.3/"}),workbox.core.setCacheNameDetails({prefix:"Flexiston's Blog"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"d46e4db738f27b5a4c9bacffcacb9427",url:"./404.html"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./about/index.html"},{revision:"356a7d5c7bfb35434e80c5443da0239b",url:"./archives/2020/04/index.html"},{revision:"7d69b38b5ae2575a7890ffbabe947943",url:"./archives/2020/05/index.html"},{revision:"55e61b373412cd4c6323b3345e093067",url:"./archives/2020/06/index.html"},{revision:"6965f28f0500327c03a58489da9563fc",url:"./archives/2020/07/index.html"},{revision:"2efd8c48eed39227b738346cac322775",url:"./archives/2020/08/index.html"},{revision:"c8c218fcbcabb8e152eb36f7f5e095c4",url:"./archives/2020/09/index.html"},{revision:"ecc7af92cf9dede0d4a64865bcb920cd",url:"./archives/2020/index.html"},{revision:"0fbccbd797203ffe9a0dee4839ccea72",url:"./archives/2020/page/2/index.html"},{revision:"c8762d2af0223d8b88c090daceedae59",url:"./archives/index.html"},{revision:"29beee94e3008aaf23487e989d12388c",url:"./archives/page/2/index.html"},{revision:"9fb351efc4b8a7db51d2d7325f60fb03",url:"./baidu_verify_spMQLbgc0m.html"},{revision:"6f79b93f3825b881f80a56b9c0fc6ff2",url:"./catch-cat.min.js"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./catch-cat/index.html"},{revision:"c3c4ff7076bd63aded27d340376bc3f8",url:"./categories/Bug/index.html"},{revision:"4db665afc3f90bf33f90e2320df4371e",url:"./categories/Dev/GitHub/index.html"},{revision:"b004850225cf26b1a852d85e48e2f756",url:"./categories/Dev/Hexo/index.html"},{revision:"d1c68127a32461ae5828ee5719ddc1c8",url:"./categories/Dev/index.html"},{revision:"efc2de377605a1cf3568709b128e091a",url:"./categories/Dev/page/2/index.html"},{revision:"da92fbd3c979f2f7642111881e6baac8",url:"./categories/Dev/Vercel/index.html"},{revision:"b0ddce6da98d4c538773bf148973037f",url:"./categories/Dev/Windows/index.html"},{revision:"e19d0049c2edd63769c796f519e91c55",url:"./categories/Dev/工具/index.html"},{revision:"79c7ce4fa9d66059f978dcacd638ed52",url:"./categories/Emoji/index.html"},{revision:"dca93c7f6bff2479ee602bf76f80c334",url:"./categories/GitHub/index.html"},{revision:"abea04296bef06b55971bf4792f3ec13",url:"./categories/index.html"},{revision:"e0c330e97a37463f31a67fa177b280d6",url:"./categories/文言文编程/index.html"},{revision:"ab7513783d318a3d57f32ba9c6444b50",url:"./categories/白嫖/index.html"},{revision:"39d9cfede7c369b0dfba7ca742e3f074",url:"./changelog/index.html"},{revision:"8768d32cd6ea3215f8c1134ba91e1763",url:"./css/style/dark.css"},{revision:"38dfe84753a79c51e18bb8d4aca7336c",url:"./css/style/iindex.css"},{revision:"ad92a9b3bbf67dc1f9649d065f1f1086",url:"./css/style/links.css"},{revision:"72622e54aac09aaa381730a70676a78f",url:"./favicon.ico"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./friends/index.html"},{revision:"1f6ce2a3e6be229e6d4eba67896c2c96",url:"./github-calendar.css"},{revision:"b7e7f9af145900e2024111c7bf1340b6",url:"./github-calendar.js"},{revision:"a83c7749d0a10f2202eb5008153cdcd9",url:"./index.html"},{revision:"d3af8f5e107c8db060699751eed64a0c",url:"./js/GalMenu.js"},{revision:"8ac6c130a83bc0c0640c67033f4f87c2",url:"./js/mmain.js"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./map/index.html"},{revision:"1b3819adb7fdc61d51e9784bcec93a0d",url:"./mikutap/css/mikutap.css"},{revision:"5279a09d7a75b44f3c35364ea2a8f08b",url:"./mikutap/data/main/main.json"},{revision:"d94b20e465ff7289142b647c1ac142ea",url:"./mikutap/data/track/track.json"},{revision:"4b63179db3c45dfd9078a252b2575cd1",url:"./mikutap/icon.png"},{revision:"56ba4222adad2322b0168981868bc934",url:"./mikutap/index.html"},{revision:"936ff3edd8373c243f56bf9c0fc66ec8",url:"./mikutap/js/mikutap.min.js"},{revision:"ee0a7ce469b3a15bd2c57ef76f38dbc6",url:"./mikutap/shared/css/common-1.css"},{revision:"a1aba3a1001e09230cbfdb18d522cdbc",url:"./mikutap/shared/css/index-1.css"},{revision:"43e49a61141c64bcf8d7981f7a6a26f5",url:"./mikutap/shared/js/common-2.min.js"},{revision:"b74c8c57d13ad72401b651f4128a2468",url:"./mikutap/shared/sp/css/common.css"},{revision:"fbe994054426fadb2dff69d824c5c67a",url:"./music/css/APlayer.min.css"},{revision:"269550530cc127b6aa5a35925a7de6ce",url:"./music/css/font-awesome.min.css"},{revision:"837f456b0d75c8dca741d4186444412a",url:"./music/css/justaddmusic.css"},{revision:"674f50d287a8c48dc19ba404d20fe713",url:"./music/fonts/fontawesome-webfont.eot"},{revision:"912ec66d7572ff821749319396470bde",url:"./music/fonts/fontawesome-webfont.svg"},{revision:"b06871f281fee6b241d60582ae9369b9",url:"./music/fonts/fontawesome-webfont.ttf"},{revision:"fee66e712a8a08eef5805a46892932ad",url:"./music/fonts/fontawesome-webfont.woff"},{revision:"af7ae505a9eed503f8b8e6982036873e",url:"./music/fonts/fontawesome-webfont.woff2"},{revision:"722a2363ffe9122940054716ad9722ee",url:"./music/index.html"},{revision:"f318fa1b12f6d5f475a863ee2bb728ee",url:"./music/js/APlayer.min.jam.js"},{revision:"c6acc06546a0d076942b0c81c4befbfd",url:"./music/js/jamsetting.js"},{revision:"12b69d0ae6c6f0c42942ae6da2896e84",url:"./music/js/jquery.js"},{revision:"16530b39ad7e6d012f7e840446fc18e6",url:"./music/js/JustAddMusic.js"},{revision:"f3a86e82ec5d2eb807eab601c30681ac",url:"./music/js/Meting.min.js"},{revision:"be5074c1fae4499ab2572b59f94117d8",url:"./page/2/index.html"},{revision:"55b8b1fc251881e26ff1316410712a7c",url:"./play/index.html"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./posts/17931.html"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./posts/22938.html"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./posts/24179.html"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./posts/24549.html"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./posts/25909.html"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./posts/27708.html"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./posts/28146.html"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./posts/32716.html"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./posts/39479.html"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./posts/4141.html"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./posts/43359.html"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./posts/47424.html"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./posts/49939.html"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./posts/5913.html"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./posts/7578.html"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./runner/index.html"},{revision:"700beafcd2f56672767576a96cfcee03",url:"./say/index.html"},{revision:"5b23b9c3f0ca28691c602268bb8d6127",url:"./search.json"},{revision:"42f24f80e78fc7fb23241ef64bd3a8bf",url:"./search/index.html"},{revision:"935eb50b24d97a184ca9623a91c0f616",url:"./t-rex/assets/css/t-rex.css"},{revision:"01f2014886ea4de08147a231bebfd958",url:"./t-rex/assets/js/index.js"},{revision:"a10b0288b9d6b93b8b04de3351882514",url:"./t-rex/assets/js/t-rex.js"},{revision:"cad7798da0d84c8a6e55affb940bc76b",url:"./t-rex/index.html"},{revision:"ca411b3d05dbb29c5bca6225e1a79489",url:"./tags/Bug/index.html"},{revision:"c94286379c2a5f6544f6b42c693be92a",url:"./tags/Coding-Pages/index.html"},{revision:"98627e6e16b42904abba701a3660bcb9",url:"./tags/Commands/index.html"},{revision:"67034fbae9863c542d2f9b310e3437fa",url:"./tags/Dev/index.html"},{revision:"c75a831f355023c4529cb456011c0229",url:"./tags/Dev/page/2/index.html"},{revision:"2850f9fa7c7750f07544a8a48c017e59",url:"./tags/Emoji/index.html"},{revision:"f3939cf77c3d706d4f859e512fcc91cd",url:"./tags/GitHub-Actions/index.html"},{revision:"ea1fd7b272dc1dca0ee0b7516b90bb1d",url:"./tags/GitHub/index.html"},{revision:"54d5e6e64a070560f3f83e4741373c3d",url:"./tags/Hexo/index.html"},{revision:"19dd30ebcc4eef41c4e1079874129d6f",url:"./tags/index.html"},{revision:"cde4062441366cb4d995cde48f0497bb",url:"./tags/issues/index.html"},{revision:"20b4bcd1b012900a732a0720ddbd7238",url:"./tags/LeanCloud/index.html"},{revision:"f0fa292769e2888de346cdd5b37b3558",url:"./tags/PicGo/index.html"},{revision:"7790230255afcfce92ff96e2635b68ef",url:"./tags/UptimeRobot/index.html"},{revision:"21de1d11a998d467ade5a1b0ae9ec940",url:"./tags/URL/index.html"},{revision:"22532f286031b154f7b30d930fc5159b",url:"./tags/Vercel/index.html"},{revision:"e00254756baa401b1a498872e1ec507b",url:"./tags/wenyan-lang/index.html"},{revision:"0afddeae2fd41d08d3e4138fabf5ecf7",url:"./tags/Windows/index.html"},{revision:"cde319e574b8747e0c38ecec7e169214",url:"./tags/图床/index.html"},{revision:"b0251f626c8b91a9c47b9cfc69013616",url:"./tags/文言文编程/index.html"},{revision:"09bc69ff2139b5259c0f7e56765064bb",url:"./tags/浏览器/index.html"},{revision:"b74fd21317a3ee23b3da110e24306ed8",url:"./tags/炫酷文字/index.html"},{revision:"a6b905c4c97f38e48905c9bcdd5383c9",url:"./tags/网站存活监控/index.html"},{revision:"fabf7271fcada1bc1f03c6f2aa92f982",url:"./vercel.json"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:86400}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();