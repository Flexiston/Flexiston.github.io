const workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/5.1.3/workbox-sw.js"),workbox.setConfig({modulePathPrefix:"https://storage.googleapis.com/workbox-cdn/releases/5.1.3/"}),workbox.core.setCacheNameDetails({prefix:"Flexiston's Blog"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"1ef94ba42b43858d897d4af054000bb6",url:"./404.html"},{revision:"33fb33bfdb168a45e5d92bee370ac2bc",url:"./about/index.html"},{revision:"d1bf090aaa0deb1090ab8cc0494a17e4",url:"./archives/2020/04/index.html"},{revision:"4aaa152a20c731746c18a4226342886e",url:"./archives/2020/05/index.html"},{revision:"17b24216394da592993b3aeccc41aeca",url:"./archives/2020/06/index.html"},{revision:"dd5b28d487a9ee3eed9cc4c3ae9de701",url:"./archives/2020/07/index.html"},{revision:"61b5e98b79603c5e1295aa4cd01d6ea0",url:"./archives/2020/08/index.html"},{revision:"66b8dcf8c49afc76c26727b093f0dca8",url:"./archives/2020/09/index.html"},{revision:"0c539de858e6eb896481abfd9fd70a25",url:"./archives/2020/index.html"},{revision:"72d860fd77f033cc556c351e7032559b",url:"./archives/2020/page/2/index.html"},{revision:"3975b78a7f4bd6770bd340b72953461d",url:"./archives/index.html"},{revision:"4284de6fe38ed5ee67886be2b320d302",url:"./archives/page/2/index.html"},{revision:"9fb351efc4b8a7db51d2d7325f60fb03",url:"./baidu_verify_spMQLbgc0m.html"},{revision:"6f79b93f3825b881f80a56b9c0fc6ff2",url:"./catch-cat.min.js"},{revision:"5e20fd178ca72d49b0e7239e745a28b3",url:"./catch-cat/index.html"},{revision:"06d665fc23569ee5c164b954a70eeea2",url:"./categories/Bug/index.html"},{revision:"5a0156015282f12d63ea6f0ea8257609",url:"./categories/Dev/GitHub/index.html"},{revision:"d43fe1801ef9e377fcec59cefeb064f3",url:"./categories/Dev/Hexo/index.html"},{revision:"29642155189c01f548ff3eb97e0d6706",url:"./categories/Dev/index.html"},{revision:"3c078d896ab0bc056bf2ae3250e3f5a7",url:"./categories/Dev/page/2/index.html"},{revision:"d371dc2fa9ece16b65cb97d18e5d6882",url:"./categories/Dev/Vercel/index.html"},{revision:"adb1719a8630686124d18c1eb5b88a81",url:"./categories/Dev/Windows/index.html"},{revision:"f67f3f130d293d71d8d3f2af4acd5843",url:"./categories/Dev/工具/index.html"},{revision:"a60772eb49f63365d4afa1bdb54cd9d0",url:"./categories/Emoji/index.html"},{revision:"60f906514194e212014ea9561fc8fc1e",url:"./categories/GitHub/index.html"},{revision:"451bacc20ba8830d43eaa4cd4e276b9f",url:"./categories/index.html"},{revision:"8174b8a101b6edb29226e2ea1d3c5ca1",url:"./categories/文言文编程/index.html"},{revision:"c73b3aed80f6f562d1faf5d62d45d233",url:"./categories/白嫖/index.html"},{revision:"e7efbf8ee5a9e522e82d29a4203c0622",url:"./changelog/index.html"},{revision:"ad5e1a03c1c670b788e8749a64648112",url:"./css/style/darkmode.css"},{revision:"151d82bf8b36f00049f360a30b87a4ae",url:"./css/style/ii.css"},{revision:"ad92a9b3bbf67dc1f9649d065f1f1086",url:"./css/style/links.css"},{revision:"72622e54aac09aaa381730a70676a78f",url:"./favicon.ico"},{revision:"25ab0303da4e574e031b3712e63ba5eb",url:"./friends/index.html"},{revision:"1f6ce2a3e6be229e6d4eba67896c2c96",url:"./github-calendar.css"},{revision:"b7e7f9af145900e2024111c7bf1340b6",url:"./github-calendar.js"},{revision:"e022e89a9d8a00b7a6ea9725fc2e7e8b",url:"./index.html"},{revision:"05a107e94a1f191d6161800682ea33dc",url:"./js/bs2t.js"},{revision:"ae0be675f96610c4194a953de28b5c84",url:"./js/darkmod.js"},{revision:"58f3fd4092ff4153f74e5bd984e987e6",url:"./map/index.html"},{revision:"1b3819adb7fdc61d51e9784bcec93a0d",url:"./mikutap/css/mikutap.css"},{revision:"5279a09d7a75b44f3c35364ea2a8f08b",url:"./mikutap/data/main/main.json"},{revision:"d94b20e465ff7289142b647c1ac142ea",url:"./mikutap/data/track/track.json"},{revision:"4b63179db3c45dfd9078a252b2575cd1",url:"./mikutap/icon.png"},{revision:"56ba4222adad2322b0168981868bc934",url:"./mikutap/index.html"},{revision:"936ff3edd8373c243f56bf9c0fc66ec8",url:"./mikutap/js/mikutap.min.js"},{revision:"ee0a7ce469b3a15bd2c57ef76f38dbc6",url:"./mikutap/shared/css/common-1.css"},{revision:"a1aba3a1001e09230cbfdb18d522cdbc",url:"./mikutap/shared/css/index-1.css"},{revision:"43e49a61141c64bcf8d7981f7a6a26f5",url:"./mikutap/shared/js/common-2.min.js"},{revision:"b74c8c57d13ad72401b651f4128a2468",url:"./mikutap/shared/sp/css/common.css"},{revision:"fbe994054426fadb2dff69d824c5c67a",url:"./music/css/APlayer.min.css"},{revision:"269550530cc127b6aa5a35925a7de6ce",url:"./music/css/font-awesome.min.css"},{revision:"6482d5a2cc7efeeadbd599bbe0ac51bd",url:"./music/css/justaddmusic.css"},{revision:"674f50d287a8c48dc19ba404d20fe713",url:"./music/fonts/fontawesome-webfont.eot"},{revision:"912ec66d7572ff821749319396470bde",url:"./music/fonts/fontawesome-webfont.svg"},{revision:"b06871f281fee6b241d60582ae9369b9",url:"./music/fonts/fontawesome-webfont.ttf"},{revision:"fee66e712a8a08eef5805a46892932ad",url:"./music/fonts/fontawesome-webfont.woff"},{revision:"af7ae505a9eed503f8b8e6982036873e",url:"./music/fonts/fontawesome-webfont.woff2"},{revision:"7bf1f9dbf7bb765cce90fd78f4c804a3",url:"./music/index.html"},{revision:"f318fa1b12f6d5f475a863ee2bb728ee",url:"./music/js/APlayer.min.jam.js"},{revision:"568b8d55a202d7460629b80b77e02b8a",url:"./music/js/jamsetting.js"},{revision:"12b69d0ae6c6f0c42942ae6da2896e84",url:"./music/js/jquery.js"},{revision:"16530b39ad7e6d012f7e840446fc18e6",url:"./music/js/JustAddMusic.js"},{revision:"f3a86e82ec5d2eb807eab601c30681ac",url:"./music/js/Meting.min.js"},{revision:"2ac31d77c92306b1d7c77396cac714ea",url:"./page/2/index.html"},{revision:"8cc3121c90da4d18ffaf9879d47c1641",url:"./play/index.html"},{revision:"a77322824240b67365a8ac70f99c0101",url:"./posts/17931.html"},{revision:"8627c81d1265993d1fd3f048a21dca0f",url:"./posts/22938.html"},{revision:"d4f48f944d23b87845e9a7798a4e796b",url:"./posts/24179.html"},{revision:"9c0cac7c96c9ebc3b873366588a1ea7b",url:"./posts/24549.html"},{revision:"8c92e423dbf79c45e5d1799a06ec17ad",url:"./posts/25909.html"},{revision:"67dc44427727e8ba547a6a74489c3b5b",url:"./posts/27708.html"},{revision:"c73438efb3a422466a20f970c80f440a",url:"./posts/28146.html"},{revision:"20476a1b125be38809422bdcf42d37c5",url:"./posts/32716.html"},{revision:"0f63ef6daad75618307f458d9fd1a579",url:"./posts/39479.html"},{revision:"e2c6e6af620149ba44abc48bf2cf0449",url:"./posts/4141.html"},{revision:"c4b293d6c371f0ec91581c699ac12748",url:"./posts/43359.html"},{revision:"cd4ac9b0769e50e33a5720b57a474ff7",url:"./posts/47424.html"},{revision:"549a9ae18fffc03fba19c81ef203d45f",url:"./posts/49939.html"},{revision:"474bd1766bb3730800f43f00015d5eea",url:"./posts/5913.html"},{revision:"0e4535aa0d66f0ef05020d771000e01a",url:"./posts/7578.html"},{revision:"862746bfd05c8447cb902b56854ae1ff",url:"./runner/index.html"},{revision:"1d0185cbaaa6c8a92cce1e59f64a039e",url:"./say/index.html"},{revision:"9990c1461c33d06ca0509efe8be416b6",url:"./search.json"},{revision:"a79d5fc15c57bf28d65894f03494b9b3",url:"./search/index.html"},{revision:"935eb50b24d97a184ca9623a91c0f616",url:"./t-rex/assets/css/t-rex.css"},{revision:"01f2014886ea4de08147a231bebfd958",url:"./t-rex/assets/js/index.js"},{revision:"a10b0288b9d6b93b8b04de3351882514",url:"./t-rex/assets/js/t-rex.js"},{revision:"cad7798da0d84c8a6e55affb940bc76b",url:"./t-rex/index.html"},{revision:"974d2cd2bc5580fdf34ba9513e987cd3",url:"./tags/Bug/index.html"},{revision:"ee5236dda4e65204141e746491401468",url:"./tags/Coding-Pages/index.html"},{revision:"046621db85678d995d8bb7011b327335",url:"./tags/Commands/index.html"},{revision:"c257e002a5e70c38bb2b32c9c8aa1ee8",url:"./tags/Dev/index.html"},{revision:"9ffe3a7b71a6a67d84443441f8806b28",url:"./tags/Dev/page/2/index.html"},{revision:"14d90c54ddbefd0f11e7b1805c5bb36e",url:"./tags/Emoji/index.html"},{revision:"62efeebbad0463ecbd5787b5b788de03",url:"./tags/GitHub-Actions/index.html"},{revision:"83b9bb6460eab027fa42f44fa2eaef20",url:"./tags/GitHub/index.html"},{revision:"d4f97a3b6161715aa6ad50d23bf68082",url:"./tags/Hexo/index.html"},{revision:"d61acc093efb33085a867e51eb1453ba",url:"./tags/index.html"},{revision:"2e1be0d5b702aeb12ec60e755c2f566c",url:"./tags/issues/index.html"},{revision:"8e21c3a909597fa475e4802b98678e7c",url:"./tags/LeanCloud/index.html"},{revision:"42f2a7659cc6c1e86b3f3b7e126f5efb",url:"./tags/PicGo/index.html"},{revision:"e3031b4876a424f9af251a70702b69c6",url:"./tags/UptimeRobot/index.html"},{revision:"d7ce41a86c22fed024fac732d23dec5d",url:"./tags/URL/index.html"},{revision:"220c712ae4978bb85c9420fb59a1fdac",url:"./tags/Vercel/index.html"},{revision:"4f54e02fe361bfbc6639a0d4ec42a571",url:"./tags/wenyan-lang/index.html"},{revision:"8a082cebaf54b5c647901ff2928bffc8",url:"./tags/Windows/index.html"},{revision:"4e1b070b6a7ff770b325274dba701375",url:"./tags/图床/index.html"},{revision:"1b29ad01e264a88c8ffdeed581ae3f05",url:"./tags/文言文编程/index.html"},{revision:"8ccb3d080e37e49abd37a28fdf5d01cb",url:"./tags/浏览器/index.html"},{revision:"0ceb6a10449b169d11ef418dcd33e0c4",url:"./tags/炫酷文字/index.html"},{revision:"58b6df2a751a6b2dc8ccd0d74f3842d6",url:"./tags/网站存活监控/index.html"},{revision:"fabf7271fcada1bc1f03c6f2aa92f982",url:"./vercel.json"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:86400}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();