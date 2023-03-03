'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "69af12ccf8a19b28421c9f7a9efba0d7",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/lib/assets/images/homepage/homepage_banner.png": "07cdda0fc3de799e4d3244eb927e6bae",
"assets/lib/assets/images/LTIs/Clickk/Clickk_logo_banner.png": "cff9560c2465d2876a3ad20dcdf8ee97",
"assets/lib/assets/images/LTIs/Clickk/front_final_structre.jpg": "ef1f306f85bc7ed2f5d40e856165cb39",
"assets/lib/assets/images/LTIs/Clickk/how_to_do.jpg": "bcf9c139683f700eab9634d1bd352c05",
"assets/lib/assets/images/LTIs/Clickk/me_working_on_website.png": "aeca5687c2f707df2b2e2e2c1b8186b2",
"assets/lib/assets/images/LTIs/Clickk/street_picture.PNG": "e5535f26ab637bbb177cdb92709c54ee",
"assets/lib/assets/images/LTIs/Saphi/Saphi_Enclosure_Design1.jpg": "d97bbcb8024fc98c48d4f1411b3a506a",
"assets/lib/assets/images/LTIs/Saphi/Saphi_First_Project.PNG": "1e5f4fbea32adf1f3e5c87b0925e5255",
"assets/lib/assets/images/LTIs/Saphi/Saphi_logo.png": "66f580def257db4ae25bb73c77a505f6",
"assets/lib/assets/images/LTIs/Saphi/saphi_photo.jpg": "0edbce150556dbb8e5254c5dfa0b3b7d",
"assets/lib/assets/images/LTIs/Saphi/Saphi_Three_D_Printing.jpg": "60d63b9c4aa842820828da690d7c6414",
"assets/lib/assets/images/projects/AAC_Project/AAC_Project_Flutter_logo.png": "9cc3c0596b7b95d12f1a38a013b75af4",
"assets/lib/assets/images/projects/AAC_Project/AAC_Project_Learning_Plan.PNG": "0ebf37a0f632eaeeb0565496a1477a0e",
"assets/lib/assets/images/projects/AAC_Project/AAC_Project_logo.png": "fc590c5c989fc6e8c964216d1842375b",
"assets/lib/assets/images/projects/AAC_Project/AAC_Project_Proposal.png": "596035a21b74a60168c12420dfae38fc",
"assets/lib/assets/images/projects/Energy_Release_rate/Energy_release_Rate_Logo.png": "f30a3bdb4c2da95524dacda5aafb2ca6",
"assets/lib/assets/images/projects/Glove_Project/Glove_project_learning_plan.PNG": "d707e7726504892c468b2cc32ac274bf",
"assets/lib/assets/images/projects/Glove_Project/Glove_Project_logo.png": "ef7d1764c2023ac6e51a3a1ca73c5ecd",
"assets/lib/assets/images/projects/Glove_Project/Glove_project_porposal.png": "40601ba84df4bdeb2f867954c6f9a6d2",
"assets/lib/assets/images/projects/Raspberry_Pi_project/Raspberry_pi_Learning_plan.PNG": "67a83a55f32a4cf639a55c0d3a9fc63e",
"assets/lib/assets/images/projects/Raspberry_Pi_project/Raspberry_Pi_Logo.png": "5e789e5573b262a3894781c6abb72dfa",
"assets/lib/assets/images/projects/Raspberry_Pi_project/Raspberry_Pi_Proposal_1.png": "a8cd8da1ca7c90418163f94531c7636a",
"assets/lib/assets/images/projects/Raspberry_Pi_project/RetroPi_Banner.png": "0ac10819492e5c6e1d8ffff0fc74bd87",
"assets/lib/assets/images/projects/Raspberry_Pi_project/Sense-hat.png": "a39eb83df1f736bc679a87e66758d6c8",
"assets/lib/assets/images/title_image.png": "4015eb0ae215627f4879480c87163ee2",
"assets/NOTICES": "d52b73bdd39abd0a5bb943db1274ac22",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "7d6a9688b2fa589ab6ee9f2dfa03aff8",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "27025031ea2baa1e0650f4f2156bb3c3",
"/": "27025031ea2baa1e0650f4f2156bb3c3",
"main.dart.js": "0e80efa2d8a964d2c57b8b3b76dc8c68",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
