'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.json": "a1e7fdcb3996f44151bd9a9845b11984",
"assets/AssetManifest.smcbin": "ba4a86ce15a2b3ef03ba8e5baea2c4e6",
"assets/FontManifest.json": "3b682c6ce060934215566cf294ba5731",
"assets/fonts/MaterialIcons-Regular.otf": "e7c5f04ecac3877e3c85a7146a741d26",
"assets/lib/assets/fonts/SourceCodePro-Medium.ttf": "818bd08e02b082f895e71061311eeced",
"assets/lib/assets/images/homepage/about_me_bannner.png": "e21d4c97faf4ab938a7f75f4e2a95c51",
"assets/lib/assets/images/homepage/homepage_banner.png": "07cdda0fc3de799e4d3244eb927e6bae",
"assets/lib/assets/images/homepage/outlearning_banner.png": "a6acdbc58f3fb22c807e075f267ca96f",
"assets/lib/assets/images/homepage/projects_banner.png": "cda7b511b80698cb48e968f741b251db",
"assets/lib/assets/images/homepage/skills_banner.png": "9b5937a54e0d09591f8246440d160806",
"assets/lib/assets/images/logo.svg": "a59516e203818bace8f6f47fc88f2cb2",
"assets/lib/assets/images/project1/1.png": "f53d50d2860de677bfe7e0d1de87f8a2",
"assets/lib/assets/images/project1/2.png": "32769f9d13d6491d2f782281600dd430",
"assets/lib/assets/images/project1/3.png": "d1d5792cf971a43e3a11cf58bb721121",
"assets/lib/assets/images/project1/4.png": "b036b729d2466f6e8ebebb943e352e37",
"assets/lib/assets/images/project1/5.png": "35df26b076700fa6028d587590e8d36d",
"assets/lib/assets/images/project1/6.png": "c878d16f117ca0f377f3070ad7cf937a",
"assets/lib/assets/images/project1/7.png": "c29e4ab9cb037416074b24f05ac7584a",
"assets/lib/assets/images/project1/8.png": "16f5cc4ce3b2683e8c452aeb20770804",
"assets/lib/assets/images/project1/9.png": "fb3f34ce18fe8d260e0174041128692d",
"assets/lib/assets/images/project2/1.png": "340ae781b82e4c7da67bdc60960d6383",
"assets/lib/assets/images/project2/2.png": "6d648eb6c22dcd73ead84b842d0181df",
"assets/lib/assets/images/project2/3.png": "8196853848ce08af037c2eb6ea29a151",
"assets/lib/assets/images/project2/4.png": "8baf9a282fc3ef7617e901c85337228e",
"assets/lib/assets/images/project2/5.png": "be55215150ac8c098ec8a4b30212e19d",
"assets/lib/assets/images/projects/mentors_banner.png": "cda7b511b80698cb48e968f741b251db",
"assets/lib/assets/images/projects/project_banner.png": "230a92c50e16c951538a1aefdb500cf5",
"assets/lib/assets/images/projects/resources_banner.png": "647bfba57735ae3f6f74ed9cf0ea9187",
"assets/lib/assets/images/projects/skills_banner.png": "dc65524c1bc536e1990885c6f805a43f",
"assets/lib/assets/images/replacement_image.png": "1b6ed699006bd72ec1da0681ff6b4b44",
"assets/lib/assets/images/skills/1.png": "55dce0b677723103ad38ed8bb8a18940",
"assets/lib/assets/images/skills/10.png": "df496f3b61f3adb1568a3b5dd6446923",
"assets/lib/assets/images/skills/11.png": "6623c80064f3b8ea6a538cf72166098d",
"assets/lib/assets/images/skills/12.png": "89ae67270ad7251642f4a2cb47fb65ef",
"assets/lib/assets/images/skills/2.png": "f2624075f15902c2ba54e76d2bacaf11",
"assets/lib/assets/images/skills/3.png": "92c488a396a3ffee79fef4003659eb5e",
"assets/lib/assets/images/skills/4.png": "e85f4a399a536b241053deeaf7025b63",
"assets/lib/assets/images/skills/5.png": "e948df7b5b452303dd8d358cecb42539",
"assets/lib/assets/images/skills/6.png": "e90daceb94ef8472f0ada1cb18410a22",
"assets/lib/assets/images/skills/7.png": "49c1a4d21a8d611f3ad8b359d2f6c1a3",
"assets/lib/assets/images/skills/8.png": "c4f25fc9c4519bb829175d3dbd318c90",
"assets/lib/assets/images/skills/9.png": "7bc13f2a77740aeacd3c6f0e91b0cc57",
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
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "94f6356c18ab2d6180606f264d957ae1",
"/": "94f6356c18ab2d6180606f264d957ae1",
"main.dart.js": "86ffa09e98b09f611cde1fb51cee5d6a",
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
