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
    "revision": "9229b710ba06b8efd16428b7677df8e8"
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
    "url": "assets/js/3.53a8a08e.js",
    "revision": "36ce6016ca3257f9075d01c3e866506c"
  },
  {
    "url": "assets/js/4.1b5f1eba.js",
    "revision": "1699498c69d92040e8c569866c809285"
  },
  {
    "url": "assets/js/5.ceb1e9be.js",
    "revision": "9c7756008c3858ae6aadcb1433fe4dde"
  },
  {
    "url": "assets/js/6.01144904.js",
    "revision": "dd2c59a9f62b4cedb9af827dce717ed6"
  },
  {
    "url": "assets/js/7.9da69374.js",
    "revision": "88bdf9974790814db583e9304a50f330"
  },
  {
    "url": "assets/js/app.8edc729f.js",
    "revision": "2dc20d1a4c69d685db41d8f540c38d62"
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
    "revision": "6bc29422c43b3130e2717986c9d144a8"
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
    "url": "niveaus/basis/index.html",
    "revision": "e3461abb71568120f83dcec209a261f8"
  },
  {
    "url": "niveaus/index.html",
    "revision": "f420569a8a15dbd5abc357b1fab767ae"
  },
  {
    "url": "niveaus/trainer/index.html",
    "revision": "bce1349c73e5fffdbbf2787af7653b37"
  },
  {
    "url": "safari-pinned-tab.svg",
    "revision": "6be93810739e488d29caee7a7839e168"
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
