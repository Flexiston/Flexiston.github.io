const workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/5.1.3/workbox-sw.js"),workbox.setConfig({modulePathPrefix:"https://storage.googleapis.com/workbox-cdn/releases/5.1.3/"}),workbox.core.setCacheNameDetails({prefix:"Flexiston's Blog"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"dd0999c9b6a2ac4317bd66d096c881a4",url:"./404.html"},{revision:"62aa8c4c918570744f0e23c7141acf53",url:"./about/index.html"},{revision:"8e296b856eaa27cc5ef914176f424ef5",url:"./archives/2020/04/index.html"},{revision:"77154d05a5ca0ac3ec2ee2a5f20a3d1e",url:"./archives/2020/05/index.html"},{revision:"feb82179173a8494b8a233c858fd3f84",url:"./archives/2020/06/index.html"},{revision:"84a68fe6e3baf8ea97527424ca16ffea",url:"./archives/2020/07/index.html"},{revision:"daa224631ba99f306c6d68b18039decb",url:"./archives/2020/08/index.html"},{revision:"6dd110199708c7af9c3419986a06262a",url:"./archives/2020/09/index.html"},{revision:"e363abdea7dbe7249b79dc65b69352f7",url:"./archives/2020/index.html"},{revision:"a0a780e460ccd67a428c6ca4e361f052",url:"./archives/2020/page/2/index.html"},{revision:"d00d42fbf1cc92fa3dd13014bc00edb9",url:"./archives/index.html"},{revision:"6b1e3671a88312fa485baf3fcb0dda74",url:"./archives/page/2/index.html"},{revision:"9fb351efc4b8a7db51d2d7325f60fb03",url:"./baidu_verify_spMQLbgc0m.html"},{revision:"6f79b93f3825b881f80a56b9c0fc6ff2",url:"./catch-cat.min.js"},{revision:"35a0980a92afef51d64f5479ae812a0b",url:"./catch-cat/index.html"},{revision:"b1842a0ec48eeb895c229b7f1fc00ce8",url:"./categories/Bug/index.html"},{revision:"4c833f96e742775e96e0e4bc1a3072f5",url:"./categories/Dev/GitHub/index.html"},{revision:"94eac92d2deffa0d1194804a052fa2f7",url:"./categories/Dev/Hexo/index.html"},{revision:"de4da1d1760667a7f6b5314aa07be0d9",url:"./categories/Dev/index.html"},{revision:"73f685ac6bdeedcee891b7df7bf41f56",url:"./categories/Dev/page/2/index.html"},{revision:"dfa0dc03623ac4cf0b2fdc100b973275",url:"./categories/Dev/Vercel/index.html"},{revision:"9bea7d0cb7fa80a48bf6e0611f5db78e",url:"./categories/Dev/Windows/index.html"},{revision:"adfe9e33bcc7e273704b200a2bf4edcd",url:"./categories/Dev/工具/index.html"},{revision:"ace71b668a4b4141590afe11523ff696",url:"./categories/Emoji/index.html"},{revision:"1ab4909d079e1197cf7d495971ea6fee",url:"./categories/GitHub/index.html"},{revision:"cc1fd14425e029a9c86a4b41e4de171a",url:"./categories/index.html"},{revision:"4933edc6ab72f1c775ecb5cdce754dcd",url:"./categories/文言文编程/index.html"},{revision:"b23961725b9c639e87ac1eb7c3ff07fb",url:"./categories/白嫖/index.html"},{revision:"8799cbfa2ee95cae64ae68073e53bfe6",url:"./changelog/index.html"},{revision:"ad5e1a03c1c670b788e8749a64648112",url:"./css/style/darkmode.css"},{revision:"ad92a9b3bbf67dc1f9649d065f1f1086",url:"./css/style/links.css"},{revision:"20b0ced9b3c09228f874231b4683174f",url:"./css/style/ss.css"},{revision:"72622e54aac09aaa381730a70676a78f",url:"./favicon.ico"},{revision:"064dad4d5cd3a528688b5dc16433af57",url:"./friends/index.html"},{revision:"4152051d230a8c81ef4cc93287542c16",url:"./index.html"},{revision:"05a107e94a1f191d6161800682ea33dc",url:"./js/bs2t.js"},{revision:"ae0be675f96610c4194a953de28b5c84",url:"./js/darkmod.js"},{revision:"59bba255b33cb6f539befb10505e81a4",url:"./map/index.html"},{revision:"1b3819adb7fdc61d51e9784bcec93a0d",url:"./mikutap/css/mikutap.css"},{revision:"5279a09d7a75b44f3c35364ea2a8f08b",url:"./mikutap/data/main/main.json"},{revision:"d94b20e465ff7289142b647c1ac142ea",url:"./mikutap/data/track/track.json"},{revision:"4b63179db3c45dfd9078a252b2575cd1",url:"./mikutap/icon.png"},{revision:"56ba4222adad2322b0168981868bc934",url:"./mikutap/index.html"},{revision:"936ff3edd8373c243f56bf9c0fc66ec8",url:"./mikutap/js/mikutap.min.js"},{revision:"ee0a7ce469b3a15bd2c57ef76f38dbc6",url:"./mikutap/shared/css/common-1.css"},{revision:"a1aba3a1001e09230cbfdb18d522cdbc",url:"./mikutap/shared/css/index-1.css"},{revision:"43e49a61141c64bcf8d7981f7a6a26f5",url:"./mikutap/shared/js/common-2.min.js"},{revision:"b74c8c57d13ad72401b651f4128a2468",url:"./mikutap/shared/sp/css/common.css"},{revision:"fbe994054426fadb2dff69d824c5c67a",url:"./music/css/APlayer.min.css"},{revision:"269550530cc127b6aa5a35925a7de6ce",url:"./music/css/font-awesome.min.css"},{revision:"bbce0b54669f42607b1fbee040f0da01",url:"./music/css/justaddmusic.css"},{revision:"674f50d287a8c48dc19ba404d20fe713",url:"./music/fonts/fontawesome-webfont.eot"},{revision:"912ec66d7572ff821749319396470bde",url:"./music/fonts/fontawesome-webfont.svg"},{revision:"b06871f281fee6b241d60582ae9369b9",url:"./music/fonts/fontawesome-webfont.ttf"},{revision:"fee66e712a8a08eef5805a46892932ad",url:"./music/fonts/fontawesome-webfont.woff"},{revision:"af7ae505a9eed503f8b8e6982036873e",url:"./music/fonts/fontawesome-webfont.woff2"},{revision:"b2060cbc0f41a591385294b2552f9481",url:"./music/index.html"},{revision:"f318fa1b12f6d5f475a863ee2bb728ee",url:"./music/js/APlayer.min.jam.js"},{revision:"0010e8339c278b421f543658b3c806ba",url:"./music/js/jamsetting.js"},{revision:"12b69d0ae6c6f0c42942ae6da2896e84",url:"./music/js/jquary.js"},{revision:"9b9ebccf0d2ca0c343e8d65684ecfbbb",url:"./music/js/JustAddMusic.js"},{revision:"f3a86e82ec5d2eb807eab601c30681ac",url:"./music/js/Meting.min.js"},{revision:"008158789098b65c9de642c3a36b69a3",url:"./music/js/visualchanger.js"},{revision:"0860af9159a82bae8cee547ddab46490",url:"./music/js/visualupper.js"},{revision:"e699b996a6dcbcb5abc39ba636c24c48",url:"./page/2/index.html"},{revision:"1d66c03d42ba00a14e97367522e119ab",url:"./play/index.html"},{revision:"29ff0523071ade17b159478f4d1d129a",url:"./posts/17931.html"},{revision:"722671c24782ce704c12bdc9d2f474c7",url:"./posts/22938.html"},{revision:"6b4d7388184269e007a2622d114d8939",url:"./posts/24179.html"},{revision:"21231798e32c94720510431b4f362320",url:"./posts/24549.html"},{revision:"059ccd6e19e5a510463aa3ecd0b141f5",url:"./posts/25909.html"},{revision:"d98c15c6f392fa5bccb1f4026abab5fe",url:"./posts/27708.html"},{revision:"8cd82532f4485d165e571d1a1597fbab",url:"./posts/28146.html"},{revision:"2e1a7d6e9942d2d0e7e40da3a9f12349",url:"./posts/32716.html"},{revision:"b0561c3221e97c09597d36f5b7075475",url:"./posts/39479.html"},{revision:"f807f24972e676869ae82ced25e2a254",url:"./posts/4141.html"},{revision:"e774c79cfce8248ec9c2720ff4528f80",url:"./posts/43359.html"},{revision:"f6c3b7a539423815d99fb56f77419715",url:"./posts/47424.html"},{revision:"3d02cf5e87d82eb3cfffccf6e4e8db78",url:"./posts/49939.html"},{revision:"bf1b38f3427ed4727c80ea3c39ef6fa8",url:"./posts/5913.html"},{revision:"6ac3848fb91afcf5882ceab594bad417",url:"./posts/7578.html"},{revision:"4892d0bd829ee717c7cc79816b83f578",url:"./runner/index.html"},{revision:"a67526c9afce7b89fa0e8f80fc6f896c",url:"./say/index.html"},{revision:"a74cbc6fe919b8acc4dc1ff1707c1cd0",url:"./search.json"},{revision:"771924e8b7c5397fbacbc19b3daa7983",url:"./search/index.html"},{revision:"935eb50b24d97a184ca9623a91c0f616",url:"./t-rex/assets/css/t-rex.css"},{revision:"01f2014886ea4de08147a231bebfd958",url:"./t-rex/assets/js/index.js"},{revision:"a10b0288b9d6b93b8b04de3351882514",url:"./t-rex/assets/js/t-rex.js"},{revision:"cad7798da0d84c8a6e55affb940bc76b",url:"./t-rex/index.html"},{revision:"da41048f015b3cff807009e782008cfb",url:"./tags/Bug/index.html"},{revision:"83557019a3827007c9c29784f91ba843",url:"./tags/Coding-Pages/index.html"},{revision:"5e493c806a6977c0e7c4871e71394dc0",url:"./tags/Commands/index.html"},{revision:"8558312f88df1b37f572dd4c6f2ab399",url:"./tags/Dev/index.html"},{revision:"516443a52bcdbcd51c3aeaa02c5a9130",url:"./tags/Dev/page/2/index.html"},{revision:"3150a4bc6e0cb42111300efdcb7f8a0e",url:"./tags/Emoji/index.html"},{revision:"536a617290765339b8941235e20272b9",url:"./tags/GitHub-Actions/index.html"},{revision:"4f0a5ce09adb5b901b00a2f9dbe4e472",url:"./tags/GitHub/index.html"},{revision:"d57226e1c22a11712baba541a67d35ac",url:"./tags/Hexo/index.html"},{revision:"a085393b53716900135ae470f2d095ea",url:"./tags/index.html"},{revision:"310299a6829ec10633b723fdc479f2f7",url:"./tags/issues/index.html"},{revision:"577714a3b88276c73348fa8443b5cd7c",url:"./tags/LeanCloud/index.html"},{revision:"b255f88879e2cbbfab890a111a094090",url:"./tags/PicGo/index.html"},{revision:"8d56c97852bf8f9086cea632263b0a1d",url:"./tags/UptimeRobot/index.html"},{revision:"6d3ed4dfa7fd2e98d320592898b88fa3",url:"./tags/URL/index.html"},{revision:"cb541679415f2f9df7a52e9024adc1c9",url:"./tags/Vercel/index.html"},{revision:"c9894b3ae6aab0f0d9435f8702ffcda2",url:"./tags/wenyan-lang/index.html"},{revision:"84d0e002ccd57d771844ac71df6fd245",url:"./tags/Windows/index.html"},{revision:"b41b99c7a43de156d6fc80ad83bc12e5",url:"./tags/图床/index.html"},{revision:"95261a399c1b18891e0c5a6b754660c7",url:"./tags/文言文编程/index.html"},{revision:"e8b680386a2b4a35f41f6c09ca80ca63",url:"./tags/浏览器/index.html"},{revision:"ee311f403fbbc840206f5c2dbc6aff72",url:"./tags/炫酷文字/index.html"},{revision:"9cc8e430ff9a78bcc3670828e098ad19",url:"./tags/网站存活监控/index.html"},{revision:"fabf7271fcada1bc1f03c6f2aa92f982",url:"./vercel.json"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:86400}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();