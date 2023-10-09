'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.json": "ecff791552f13777f09d804013a74814",
"assets/AssetManifest.smcbin": "4f7ba93fc93f21462354a07fad1f9b6e",
"assets/FontManifest.json": "3b682c6ce060934215566cf294ba5731",
"assets/fonts/MaterialIcons-Regular.otf": "b502dae52a487783406d955cc8207229",
"assets/lib/assets/files/Autobiography.docx": "855345836caa0e2cc1ba6b02847cd123",
"assets/lib/assets/fonts/SourceCodePro-Medium.ttf": "818bd08e02b082f895e71061311eeced",
"assets/lib/assets/images/homepage/about_me_bannner.png": "5e6147fffd2c6a5a0f25a1b63e47d388",
"assets/lib/assets/images/homepage/homepage_banner.png": "21ccaafc788aa9a92e77821a1fad1e0b",
"assets/lib/assets/images/homepage/outlearning_banner.png": "a6acdbc58f3fb22c807e075f267ca96f",
"assets/lib/assets/images/homepage/projects_banner.png": "cda7b511b80698cb48e968f741b251db",
"assets/lib/assets/images/homepage/skills_banner.png": "9b5937a54e0d09591f8246440d160806",
"assets/lib/assets/images/logo.svg": "a59516e203818bace8f6f47fc88f2cb2",
"assets/lib/assets/images/project1/1.png": "ef449e1fffeb113386bb27432a558951",
"assets/lib/assets/images/project1/2.png": "484a4f2f6efd45bc2c40bdcba9463e9a",
"assets/lib/assets/images/project1/3.png": "2e0cc2611e03c4c757be931179a01201",
"assets/lib/assets/images/project1/4.png": "d50ec8fd04db64d9fd4491591ed5be8b",
"assets/lib/assets/images/project1/5.png": "4aede1fb4d2220ee33f42bb7c7d0c7a3",
"assets/lib/assets/images/project1/6.png": "6dfd88f936583a6933abb292e9242bc1",
"assets/lib/assets/images/project1/7.png": "ea1dd992ef7121d0b503dde3b13fab0e",
"assets/lib/assets/images/project1/8.png": "aae1f648de228a0d5f866282a9e984f9",
"assets/lib/assets/images/project1/9.png": "19bc9d86baa3ddd04526d3c5b08a70dc",
"assets/lib/assets/images/project2/1.png": "1bc223a7fa1809219e146e691fc10b72",
"assets/lib/assets/images/project2/2.png": "fd4c7d009cf28f7c9dd5f1336d5ee9ee",
"assets/lib/assets/images/project2/3.png": "08c374bea6ec3ec1af27c270a4338565",
"assets/lib/assets/images/project2/4.png": "0a7d1f227c545b7617537e549a17b79d",
"assets/lib/assets/images/project2/5.png": "34aa50060d8f7419dac2e771570550ba",
"assets/lib/assets/images/projects/mentors_banner.png": "cda7b511b80698cb48e968f741b251db",
"assets/lib/assets/images/projects/project_banner.png": "230a92c50e16c951538a1aefdb500cf5",
"assets/lib/assets/images/projects/resources_banner.png": "647bfba57735ae3f6f74ed9cf0ea9187",
"assets/lib/assets/images/projects/skills_banner.png": "dc65524c1bc536e1990885c6f805a43f",
"assets/lib/assets/images/replacement_image.png": "1b6ed699006bd72ec1da0681ff6b4b44",
"assets/lib/assets/images/skills/1.png": "a000a40f7aa3cdb4c20a8d0e63301328",
"assets/lib/assets/images/skills/10.png": "d167998066da9d0c8abb42af0b0b778c",
"assets/lib/assets/images/skills/11.png": "0c4ebd0b27c34ea73887b61bedde591c",
"assets/lib/assets/images/skills/12.png": "0627ef4e8def9637a863841be90ee812",
"assets/lib/assets/images/skills/2.png": "6d4cae84b5ec2faef928a8d7c6973776",
"assets/lib/assets/images/skills/3.png": "6d934d3667a9f4e4b4937d6532db4838",
"assets/lib/assets/images/skills/4.png": "39522842749bcd9cc9b47ee10467ab5b",
"assets/lib/assets/images/skills/5.png": "01a31c475fbd1c77df3304d09de8900a",
"assets/lib/assets/images/skills/6.png": "4e4afa614d14a78a9a323cbdb7367bcd",
"assets/lib/assets/images/skills/7.png": "6d02835a35abc4e40bf7975d53e9f317",
"assets/lib/assets/images/skills/8.png": "41c91abf94abd3f6a1f07a4d20c8d7b8",
"assets/lib/assets/images/skills/9.png": "96da7e7e89224f8c6d39d559ed6f7098",
"assets/NOTICES": "19d01ef54d7f9fbb3dd135e9fce1c982",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d7791ef376c159f302b8ad90a748d2ab",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5070443340d1d8cceb516d02c3d6dee7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "658b490c9da97710b01bd0f8825fce94",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "3c8e2befb6ecda83fd3fd03bcb5a95ce",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "bfaa13d0400d17a18fa7627236d49e76",
"icons/Icon-512.png": "2a12878ce266caac95210c5cba6efef8",
"icons/Icon-maskable-192.png": "bfaa13d0400d17a18fa7627236d49e76",
"icons/Icon-maskable-512.png": "2a12878ce266caac95210c5cba6efef8",
"index.html": "78ad7f7c9fa66f4ab6466966cbd4230b",
"/": "78ad7f7c9fa66f4ab6466966cbd4230b",
"main.dart.js": "39e3c077f2a38969d9bd368297e328ea",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "a243814a030ee1e61d407963a8595df7"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
