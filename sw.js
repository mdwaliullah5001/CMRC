/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-afac4cd2'], (function (workbox) { 'use strict';

  self.skipWaiting();
  workbox.clientsClaim();
  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */
  workbox.precacheAndRoute([{
    "url": "screenshot-wide.png",
    "revision": "5caaa0aace978f6cd4d6841410c5fd2c"
  }, {
    "url": "screenshot-mobile.png",
    "revision": "16c68510702493861aba5a587ff81adb"
  }, {
    "url": "pwa-maskable-512x512.png",
    "revision": "956b8ad8212604207febb3003894a213"
  }, {
    "url": "pwa-512x512.png",
    "revision": "956b8ad8212604207febb3003894a213"
  }, {
    "url": "pwa-192x192.png",
    "revision": "944fdee999594d355a04f87c5f5baeb8"
  }, {
    "url": "moderator.jpg",
    "revision": "f6c216ad24b441a84e618a0d1428f85e"
  }, {
    "url": "manifest.webmanifest",
    "revision": "d98713705993d2b66568ce1bfb36cf81"
  }, {
    "url": "manifest.json",
    "revision": "1cc49a6fd44a5a725383b7b913749518"
  }, {
    "url": "index.html",
    "revision": "bd8a5594e0d4246a62777fd7febe6107"
  }, {
    "url": "icon.svg",
    "revision": "70b75854f2520c847bb07ff4e0627911"
  }, {
    "url": "apple-touch-icon.png",
    "revision": "a3be8c4143910aa9508029443f9e6b9e"
  }, {
    "url": "admin.jpg",
    "revision": "f6c216ad24b441a84e618a0d1428f85e"
  }, {
    "url": "404.html",
    "revision": "bd8a5594e0d4246a62777fd7febe6107"
  }, {
    "url": "assets/yellow-bangla.js",
    "revision": null
  }, {
    "url": "assets/yellow-bangla.css",
    "revision": null
  }, {
    "url": "assets/aistudio/image_f7a4a705.png",
    "revision": null
  }, {
    "url": "assets/aistudio/image_d57a3d15.png",
    "revision": null
  }, {
    "url": "assets/aistudio/image_c5c27fc6.png",
    "revision": null
  }, {
    "url": "assets/aistudio/image_c5aa4ff4.png",
    "revision": null
  }, {
    "url": "assets/aistudio/image_9d982899.png",
    "revision": null
  }, {
    "url": "assets/aistudio/image_98cab67e.png",
    "revision": null
  }, {
    "url": "assets/aistudio/image_57813554.png",
    "revision": null
  }, {
    "url": "assets/aistudio/image_4d657324.png",
    "revision": null
  }, {
    "url": "assets/aistudio/image_45a7bc54.png",
    "revision": null
  }, {
    "url": "assets/aistudio/image_44e948f1.png",
    "revision": null
  }, {
    "url": "assets/aistudio/image_101735c4.png",
    "revision": null
  }, {
    "url": "assets/aistudio/image_0b9d4a7d.png",
    "revision": null
  }, {
    "url": "assets/aistudio/Screenshot_20261104_143826_Chrome_2731fce5.jpg",
    "revision": null
  }, {
    "url": "admin.jpg",
    "revision": "f6c216ad24b441a84e618a0d1428f85e"
  }, {
    "url": "apple-touch-icon.png",
    "revision": "a3be8c4143910aa9508029443f9e6b9e"
  }, {
    "url": "icon.svg",
    "revision": "70b75854f2520c847bb07ff4e0627911"
  }, {
    "url": "moderator.jpg",
    "revision": "f6c216ad24b441a84e618a0d1428f85e"
  }, {
    "url": "pwa-192x192.png",
    "revision": "944fdee999594d355a04f87c5f5baeb8"
  }, {
    "url": "pwa-512x512.png",
    "revision": "956b8ad8212604207febb3003894a213"
  }, {
    "url": "pwa-maskable-512x512.png",
    "revision": "956b8ad8212604207febb3003894a213"
  }, {
    "url": "screenshot-mobile.png",
    "revision": "16c68510702493861aba5a587ff81adb"
  }, {
    "url": "screenshot-wide.png",
    "revision": "5caaa0aace978f6cd4d6841410c5fd2c"
  }, {
    "url": "manifest.webmanifest",
    "revision": "d98713705993d2b66568ce1bfb36cf81"
  }], {});
  workbox.cleanupOutdatedCaches();
  workbox.registerRoute(new workbox.NavigationRoute(workbox.createHandlerBoundToURL("index.html")));
  workbox.registerRoute(({
    request
  }) => request.destination === "document" || request.destination === "script" || request.destination === "style" || request.destination === "image" || request.destination === "font", new workbox.CacheFirst({
    "cacheName": "cmrc-app-cache-v2",
    plugins: [new workbox.ExpirationPlugin({
      maxEntries: 500,
      maxAgeSeconds: 31536000
    }), new workbox.CacheableResponsePlugin({
      statuses: [0, 200]
    })]
  }), 'GET');
  workbox.registerRoute(/^https:\/\/fonts\.googleapis\.com\/.*/i, new workbox.CacheFirst({
    "cacheName": "google-fonts-cache",
    plugins: [new workbox.ExpirationPlugin({
      maxEntries: 30,
      maxAgeSeconds: 31536000
    }), new workbox.CacheableResponsePlugin({
      statuses: [0, 200]
    })]
  }), 'GET');
  workbox.registerRoute(/^https:\/\/fonts\.gstatic\.com\/.*/i, new workbox.CacheFirst({
    "cacheName": "gstatic-fonts-cache",
    plugins: [new workbox.ExpirationPlugin({
      maxEntries: 30,
      maxAgeSeconds: 31536000
    }), new workbox.CacheableResponsePlugin({
      statuses: [0, 200]
    })]
  }), 'GET');

}));
