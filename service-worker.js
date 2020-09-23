const workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/5.1.3/workbox-sw.js"),workbox.setConfig({modulePathPrefix:"https://storage.googleapis.com/workbox-cdn/releases/5.1.3/"}),workbox.core.setCacheNameDetails({prefix:"Flexiston's Blog"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"2a9e2e78c5d33016a591dde69f2bc37c",url:"./404.html"},{revision:"a196a1f483bb0a3dd4ee4fd8d96deda5",url:"./about/index.html"},{revision:"2b63f763cfc11919053a154004f11c7d",url:"./archives/2020/04/index.html"},{revision:"4fc906ad503ef77458d82bfa12253aa7",url:"./archives/2020/05/index.html"},{revision:"716718c20cc601803fafbaa24e753de2",url:"./archives/2020/06/index.html"},{revision:"ec24f2a38cce0b8a890ca911c27c0ef9",url:"./archives/2020/07/index.html"},{revision:"787d1255a7c7bf32c570db4c3a8d0fdd",url:"./archives/2020/08/index.html"},{revision:"2f0965c8196b304cf220e42e4b3798c4",url:"./archives/2020/09/index.html"},{revision:"94c5c1ad2927dd7e43b1820deddcd1a9",url:"./archives/2020/index.html"},{revision:"0953f412062d762f85fce7f05f59adf0",url:"./archives/2020/page/2/index.html"},{revision:"b86340abc6fe2fcd96b3bd11a2b61f8c",url:"./archives/index.html"},{revision:"4e7d1464b553b2c055ef53645233ae1b",url:"./archives/page/2/index.html"},{revision:"9fb351efc4b8a7db51d2d7325f60fb03",url:"./baidu_verify_spMQLbgc0m.html"},{revision:"6f79b93f3825b881f80a56b9c0fc6ff2",url:"./catch-cat.min.js"},{revision:"4e2a6ed6a48518dd4a184ecc7de398ce",url:"./catch-cat/index.html"},{revision:"e570243ddfba0c169edd71c40bbcff9a",url:"./categories/Bug/index.html"},{revision:"9880e4d6092ed56ce4c01ede3f81be17",url:"./categories/Dev/GitHub/index.html"},{revision:"9eab04aa234cad583a1ebabd09827586",url:"./categories/Dev/Hexo/index.html"},{revision:"314521532d78528f87bc67c2473a4a89",url:"./categories/Dev/index.html"},{revision:"234fb0ee71e162d4e0a340e73ab1a46d",url:"./categories/Dev/page/2/index.html"},{revision:"bf05f4c4d163a4802b2a03362be4132c",url:"./categories/Dev/Vercel/index.html"},{revision:"c7dd4c30e6a7ecfb5c4635e93e6d6238",url:"./categories/Dev/Windows/index.html"},{revision:"04666e6638e5f800beb8a45983e4b0a2",url:"./categories/Dev/工具/index.html"},{revision:"8eaf505849ee4fe6c8f1138fe3f53413",url:"./categories/Emoji/index.html"},{revision:"986ea88afe6ccd428223d5f5e6a15b7a",url:"./categories/GitHub/index.html"},{revision:"0ee0818e2454d13657d8faec6a296686",url:"./categories/index.html"},{revision:"50dbe07827c1f58dfbcd8d1cc169279d",url:"./categories/文言文编程/index.html"},{revision:"b90b4c1f3ba1da3b98850808836ebceb",url:"./categories/白嫖/index.html"},{revision:"78c09b90b2f9565f32c26550a6cee811",url:"./changelog/index.html"},{revision:"56a11a5f3b6a788133d1f6cb8a73af84",url:"./css/style/darkmode.css"},{revision:"ad92a9b3bbf67dc1f9649d065f1f1086",url:"./css/style/links.css"},{revision:"1c995a5b0c7eabb74fa78b47fbb1dea8",url:"./css/style/style.css"},{revision:"72622e54aac09aaa381730a70676a78f",url:"./favicon.ico"},{revision:"8dd932e2928cbbaf9373ac334e16d722",url:"./friends/index.html"},{revision:"92b5fb90edb1c9d86553246c0a8bf75e",url:"./index.html"},{revision:"05a107e94a1f191d6161800682ea33dc",url:"./js/bs2t.js"},{revision:"ae0be675f96610c4194a953de28b5c84",url:"./js/darkmod.js"},{revision:"75c92f1ae77f07cec031a3dc2edc1271",url:"./map/index.html"},{revision:"1b3819adb7fdc61d51e9784bcec93a0d",url:"./mikutap/css/mikutap.css"},{revision:"5279a09d7a75b44f3c35364ea2a8f08b",url:"./mikutap/data/main/main.json"},{revision:"d94b20e465ff7289142b647c1ac142ea",url:"./mikutap/data/track/track.json"},{revision:"4b63179db3c45dfd9078a252b2575cd1",url:"./mikutap/icon.png"},{revision:"56ba4222adad2322b0168981868bc934",url:"./mikutap/index.html"},{revision:"936ff3edd8373c243f56bf9c0fc66ec8",url:"./mikutap/js/mikutap.min.js"},{revision:"ee0a7ce469b3a15bd2c57ef76f38dbc6",url:"./mikutap/shared/css/common-1.css"},{revision:"a1aba3a1001e09230cbfdb18d522cdbc",url:"./mikutap/shared/css/index-1.css"},{revision:"43e49a61141c64bcf8d7981f7a6a26f5",url:"./mikutap/shared/js/common-2.min.js"},{revision:"b74c8c57d13ad72401b651f4128a2468",url:"./mikutap/shared/sp/css/common.css"},{revision:"c40d802b4054352dee4567efc3848a98",url:"./page/2/index.html"},{revision:"68dcf85b0b78003111a1699d806464d3",url:"./play/index.html"},{revision:"9d77574bcab20a417dd4709e10e1a5a2",url:"./posts/17931.html"},{revision:"946f605e9449c27ddf8b02522dc43598",url:"./posts/22938.html"},{revision:"3abcb0761d27da531cc9ad8b1adcb51d",url:"./posts/24179.html"},{revision:"fa1051d36d53699f4bed2db8fa9cda76",url:"./posts/24549.html"},{revision:"dfe1528487d48d3f977578984b9e2dc8",url:"./posts/25909.html"},{revision:"1753c89d98080a2d1e826906bceaa01b",url:"./posts/27708.html"},{revision:"ba0ffb5bca8e4b4260488a52394ad5e1",url:"./posts/28146.html"},{revision:"5e1d405ce6cf18e1e39f74fa1f3945f2",url:"./posts/32716.html"},{revision:"2933be2c13518ad81fcdf85c990b8fc1",url:"./posts/39479.html"},{revision:"ba9ec749c13c66ac3e1e70ed3a9da3d7",url:"./posts/4141.html"},{revision:"de90568cb766bd2bab28fed48924944f",url:"./posts/43359.html"},{revision:"4ce4fc36674e4ff91a501b8e5802eec1",url:"./posts/47424.html"},{revision:"93f2496626e49b78b295a738426388c8",url:"./posts/49939.html"},{revision:"065eb72d6fff48b50ac5bfad2d317003",url:"./posts/5913.html"},{revision:"572cbac2e7ced8fc9666323416642e61",url:"./posts/7578.html"},{revision:"0becce40f24a8092f93e87843ed657fa",url:"./runner/index.html"},{revision:"506545231c55dad449f36d206a64ffa8",url:"./say/index.html"},{revision:"edf0a066b64912baea3f2a79d5a28f8d",url:"./search.json"},{revision:"e6f4e6d9cc0b1a0493dff1ace7ceb39d",url:"./search/index.html"},{revision:"935eb50b24d97a184ca9623a91c0f616",url:"./t-rex/assets/css/t-rex.css"},{revision:"01f2014886ea4de08147a231bebfd958",url:"./t-rex/assets/js/index.js"},{revision:"a10b0288b9d6b93b8b04de3351882514",url:"./t-rex/assets/js/t-rex.js"},{revision:"cad7798da0d84c8a6e55affb940bc76b",url:"./t-rex/index.html"},{revision:"8fff1d33114c83d87d3090e7a601db87",url:"./tags/Bug/index.html"},{revision:"e4a4b71b500d99ed6fbe47530079b25e",url:"./tags/Coding-Pages/index.html"},{revision:"3685d973f38af66a60c4e7dfb607ce73",url:"./tags/Commands/index.html"},{revision:"a5b66c0b997368df5724453cd4e896ed",url:"./tags/Dev/index.html"},{revision:"4645ff9e15e34489a85677b4eb769886",url:"./tags/Dev/page/2/index.html"},{revision:"1233d0e15b8af6206e5b7cbf0c338692",url:"./tags/Emoji/index.html"},{revision:"97136e0ca75245e4db243276f1b48493",url:"./tags/GitHub-Actions/index.html"},{revision:"0d39d5e04f209863eb0a13b29e24089a",url:"./tags/GitHub/index.html"},{revision:"4fae4fd4e19c697016acb178d58bc5c6",url:"./tags/Hexo/index.html"},{revision:"b4bf27a1b6711108985001ce0aaa13ba",url:"./tags/index.html"},{revision:"22902e3ddb823d71b1571db2cf837aaa",url:"./tags/issues/index.html"},{revision:"aa8c0d8b537bc9e5d58f3fb2805e77d1",url:"./tags/LeanCloud/index.html"},{revision:"1aa2c016e9619747fe5a2fcfc3be9945",url:"./tags/PicGo/index.html"},{revision:"6820b73dee7864f691bf1ed1bdb39a23",url:"./tags/UptimeRobot/index.html"},{revision:"849768d61822680300a11d145d63c30b",url:"./tags/URL/index.html"},{revision:"12c5daf062867eb904a2c12cf9f988f2",url:"./tags/Vercel/index.html"},{revision:"6827a64003225811a7db04160ba6018e",url:"./tags/wenyan-lang/index.html"},{revision:"c57f024e857df1a92100e7d0a42fad71",url:"./tags/Windows/index.html"},{revision:"88808cecc06dc8b83933a168324c1a41",url:"./tags/图床/index.html"},{revision:"c9df9058066e593abc096bccdaf227e3",url:"./tags/文言文编程/index.html"},{revision:"d2a698f613b71b12206213badcb35cca",url:"./tags/浏览器/index.html"},{revision:"f20b63c835d5594c67a250f6ee0ae8d9",url:"./tags/炫酷文字/index.html"},{revision:"31d14aff0b9a2eb123c5ccf7a9c350fa",url:"./tags/网站存活监控/index.html"},{revision:"fabf7271fcada1bc1f03c6f2aa92f982",url:"./vercel.json"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:86400}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();