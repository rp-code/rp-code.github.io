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
    "revision": "29a4ec5876d80a67a7c7ef8839f82ff5"
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
    "url": "assets/css/0.styles.f9d8d314.css",
    "revision": "65574980548ff3ad5df944963e16b1ca"
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
    "url": "assets/js/6.a4aef529.js",
    "revision": "1ce96f4115820c32c5f59c4ab7a9f607"
  },
  {
    "url": "assets/js/7.ba22acb3.js",
    "revision": "bd538ea52e99562be28f25824175999c"
  },
  {
    "url": "assets/js/8.406f8927.js",
    "revision": "96e584c7b994a13aa55791c93c33f368"
  },
  {
    "url": "assets/js/app.7ee97522.js",
    "revision": "7a125f30e5577666f75c68425b469ebb"
  },
  {
    "url": "basis/index.html",
    "revision": "ab6ba6babf8ba5bb108d70c111357c48"
  },
  {
    "url": "basis/onderhands/index.html",
    "revision": "e1db0fb2c7aab79121e91ea5cc75e85f"
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
    "revision": "aff2d510b0036a3d3ffc666d3389cb46"
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
    "revision": "3990133cc4dd8d0da186aec933c343ac"
  },
  {
    "url": "votras/index.html",
    "revision": "6e703c06091a857bf667c0d9d6afe9fa"
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
