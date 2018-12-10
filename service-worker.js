/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "0eeaf7c61926ffd403366bc0e9f82f59"
  },
  {
    "url": "android-chrome-192x192.png",
    "revision": "a378121476646a19df8f67d99788733e"
  },
  {
    "url": "android-chrome-512x512.png",
    "revision": "b7ac5a7bf78d9e8b7a03deaef03a00ef"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "41618ba5d3e62f44bc3f49b7893ec2e3"
  },
  {
    "url": "assets/css/0.styles.06496b41.css",
    "revision": "a06c86a17896e7ef41e5d895257e2b4a"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.6bc3e691.js",
    "revision": "0b7493d8144c07952658f7b1aed2dfa2"
  },
  {
    "url": "assets/js/3.d55494c9.js",
    "revision": "72717b9cbd741f1bd34939b14cdddb91"
  },
  {
    "url": "assets/js/4.010eaf59.js",
    "revision": "5152fe50c9ee0220529492169614d45e"
  },
  {
    "url": "assets/js/5.04e90a67.js",
    "revision": "090722b26bf1be86f6ac6fbe90c14724"
  },
  {
    "url": "assets/js/6.5c84d570.js",
    "revision": "dd2c59a9f62b4cedb9af827dce717ed6"
  },
  {
    "url": "assets/js/7.bb62e796.js",
    "revision": "7d36c0abd2c4b7b623648adb28d89abe"
  },
  {
    "url": "assets/js/8.406f8927.js",
    "revision": "96e584c7b994a13aa55791c93c33f368"
  },
  {
    "url": "assets/js/app.b1105699.js",
    "revision": "ac53688582f3ccee14d8ff3e1c9a91be"
  },
  {
    "url": "basis/index.html",
    "revision": "8d14fcc877f69c0e67c74dd761fcacfd"
  },
  {
    "url": "basis/onderhands/index.html",
    "revision": "b71e57c4d992fbe6ba21119e21994a47"
  },
  {
    "url": "favicon-16x16.png",
    "revision": "d690debce75db41f21f800fea4ca1611"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "c376d6ae3a8ecf94e0198fcd72fe2cb6"
  },
  {
    "url": "img/votras-logo-filled.svg",
    "revision": "e2940bdc0b80c3fed6f4f2df2ea0fe88"
  },
  {
    "url": "img/votras-logo-outline.svg",
    "revision": "89e41e5bd856e130e62af36029d96311"
  },
  {
    "url": "index.html",
    "revision": "abb2d2fdc800a6b0fa65c40e3ed7fbc0"
  },
  {
    "url": "mstile-144x144.png",
    "revision": "28e48bfbca3ee6e328f72f3ad1a841af"
  },
  {
    "url": "mstile-150x150.png",
    "revision": "687f0ef08b8f69987eb83ea791564a0a"
  },
  {
    "url": "mstile-310x150.png",
    "revision": "6b015a9c4fbd760ebf91285630daaaad"
  },
  {
    "url": "mstile-310x310.png",
    "revision": "6d9d5e58dbaf0136a2810e464a85be83"
  },
  {
    "url": "mstile-70x70.png",
    "revision": "b8e565b6eff20d787804ec654f43cdec"
  },
  {
    "url": "safari-pinned-tab.svg",
    "revision": "6be93810739e488d29caee7a7839e168"
  },
  {
    "url": "trainer/index.html",
    "revision": "b9adb5e9eae84067eaf927da8eb26a84"
  },
  {
    "url": "votras/index.html",
    "revision": "ed5ea2a686095938c97b399dc11b34ec"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
