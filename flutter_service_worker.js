'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.json": "3948d7c7720281af02b0ab61a3ddfbc6",
"assets/AssetManifest.smcbin": "0ff2ec5d98c51d20edbcc4b451f6b968",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "aa86c796d8bd180961e0031d09569d63",
"assets/lib/assets/images/homepage/homepage_banner.png": "07cdda0fc3de799e4d3244eb927e6bae",
"assets/lib/assets/images/logo.png": "6e5b653c691d1c11af2dce9cb1aacead",
"assets/lib/assets/images/LTIs/Clickk/Clickk_logo_banner.png": "cff9560c2465d2876a3ad20dcdf8ee97",
"assets/lib/assets/images/LTIs/Clickk/clickk_small_icon.png": "1749613e9c9a6cdbb13627a4e4d391f6",
"assets/lib/assets/images/LTIs/Clickk/front_final_structre.jpg": "ef1f306f85bc7ed2f5d40e856165cb39",
"assets/lib/assets/images/LTIs/Clickk/how_to_do.jpg": "bcf9c139683f700eab9634d1bd352c05",
"assets/lib/assets/images/LTIs/Clickk/me_working_on_website.png": "aeca5687c2f707df2b2e2e2c1b8186b2",
"assets/lib/assets/images/LTIs/Clickk/street_picture.PNG": "e5535f26ab637bbb177cdb92709c54ee",
"assets/lib/assets/images/LTIs/Saphi/Saphi_Enclosure_Design1.jpg": "d97bbcb8024fc98c48d4f1411b3a506a",
"assets/lib/assets/images/LTIs/Saphi/Saphi_First_Project.PNG": "1e5f4fbea32adf1f3e5c87b0925e5255",
"assets/lib/assets/images/LTIs/Saphi/Saphi_logo.png": "66f580def257db4ae25bb73c77a505f6",
"assets/lib/assets/images/LTIs/Saphi/saphi_photo.jpg": "0edbce150556dbb8e5254c5dfa0b3b7d",
"assets/lib/assets/images/LTIs/Saphi/saphi_small_icon.png": "5ff344b9cca9157bbc2a11a64adaed20",
"assets/lib/assets/images/LTIs/Saphi/Saphi_Three_D_Printing.jpg": "60d63b9c4aa842820828da690d7c6414",
"assets/lib/assets/images/profile_picture.png": "0ca4379330bada73778845f0d32b6894",
"assets/lib/assets/images/projects/aac/AAC_Project_Flutter_logo.png": "9cc3c0596b7b95d12f1a38a013b75af4",
"assets/lib/assets/images/projects/aac/AAC_Project_Learning_Plan.PNG": "0ebf37a0f632eaeeb0565496a1477a0e",
"assets/lib/assets/images/projects/aac/AAC_Project_logo.png": "fc590c5c989fc6e8c964216d1842375b",
"assets/lib/assets/images/projects/aac/AAC_Project_Proposal.png": "596035a21b74a60168c12420dfae38fc",
"assets/lib/assets/images/projects/aac/aac_small_icon.png": "9eddd2cbc62c4ecc5349e734bae2ed45",
"assets/lib/assets/images/projects/energy_released/energy_released_small_icon.png": "e067e53f2fef82a999a3facfc206926e",
"assets/lib/assets/images/projects/energy_released/Energy_release_Rate_Logo.png": "f30a3bdb4c2da95524dacda5aafb2ca6",
"assets/lib/assets/images/projects/Glove_Project/Glove_project_learning_plan.PNG": "d707e7726504892c468b2cc32ac274bf",
"assets/lib/assets/images/projects/Glove_Project/Glove_Project_logo.png": "ef7d1764c2023ac6e51a3a1ca73c5ecd",
"assets/lib/assets/images/projects/Glove_Project/Glove_project_porposal.png": "40601ba84df4bdeb2f867954c6f9a6d2",
"assets/lib/assets/images/projects/Glove_Project/glove_project_small_icon.png": "7e64040bcc9b8eb086390d3a58e76c29",
"assets/lib/assets/images/projects/python/portfolio%2520banners.png": "b43193b0a62d942b0ff9ce1394cc7817",
"assets/lib/assets/images/projects/python/python_small_icon.png": "e5bbebfedc194e9eac7838958ecf39f7",
"assets/lib/assets/images/projects/raspberry_pi/Raspberry_pi_Learning_plan.PNG": "67a83a55f32a4cf639a55c0d3a9fc63e",
"assets/lib/assets/images/projects/raspberry_pi/Raspberry_Pi_Logo.png": "5e789e5573b262a3894781c6abb72dfa",
"assets/lib/assets/images/projects/raspberry_pi/Raspberry_Pi_Proposal_1.png": "a8cd8da1ca7c90418163f94531c7636a",
"assets/lib/assets/images/projects/raspberry_pi/raspberry_pi_small_icon.png": "85307f51819e2b84e6ab615a2c08a798",
"assets/lib/assets/images/projects/raspberry_pi/RetroPi_Banner.png": "0ac10819492e5c6e1d8ffff0fc74bd87",
"assets/lib/assets/images/projects/raspberry_pi/Sense-hat.png": "a39eb83df1f736bc679a87e66758d6c8",
"assets/lib/assets/images/skills/alternative_communcation_icon.png": "4201688c50474af10e3d2ae499e9d92c",
"assets/lib/assets/images/skills/arduino_logo.png": "4e9beaa6c1eea560a18dcac9e7dced07",
"assets/lib/assets/images/skills/blender_logo.png": "1a674ca60d5bbb12aebe0fb1441b7c4b",
"assets/lib/assets/images/skills/communication_logo.png": "90ad4f3f066f2f990a5a76faa5d5c311",
"assets/lib/assets/images/skills/css_logo.png": "c26a73b45b9a801864f13edeb0aa2cfb",
"assets/lib/assets/images/skills/dart_logo.png": "a675cb93b75d5f1656c920dceecdcb38",
"assets/lib/assets/images/skills/eagle_cad_logo.png": "f01941ad7a59eb50d3481a6f94e79b2f",
"assets/lib/assets/images/skills/empirical_reasoning_logo.png": "939abde16d21ff4fb255a4e39a36200d",
"assets/lib/assets/images/skills/entreprenurial_skills_logo.png": "17616eaccf70c26aa7b7da0cad4d4a25",
"assets/lib/assets/images/skills/flutter_logo.png": "79ccb6c05e3f588ee2585dc8dba24bce",
"assets/lib/assets/images/skills/fusion_360_logo.png": "e30bcaa555a76acd302cd3e93c1906cd",
"assets/lib/assets/images/skills/html_logo.png": "9599b99636762b42df9554d4f15ffc0b",
"assets/lib/assets/images/skills/ict_support_logo.png": "82c350b060ef4009858eb441778a7348",
"assets/lib/assets/images/skills/javascript_icon.png": "857efb96d4d513bec30171e91cf6273c",
"assets/lib/assets/images/skills/personal_qualities.png": "7afef812094ac2d90322641e011fe908",
"assets/lib/assets/images/skills/python_logo.png": "162ee83dbba7afc24d8f2009c7a22dc5",
"assets/lib/assets/images/skills/quantativ_reasoning_logo.png": "b3a8e54b5de43466ce9e4008689da91c",
"assets/lib/assets/images/skills/raspberry_pi_logo.png": "04a1111c17d069e04d89ac3b4a48d0b6",
"assets/lib/assets/images/skills/social_reasoning_logo.png": "9a217c2a5892c73d7f87df1bab068fc5",
"assets/lib/assets/images/skills/trouble_shooting_logo.png": "e059c102081eac85c3ae317f3d47c65b",
"assets/lib/assets/images/title_image.png": "594c3f79b5806c6a8fbc7a8d46a72035",
"assets/NOTICES": "036786dbe6fe608bfff4bca84ad50c73",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "3c8e2befb6ecda83fd3fd03bcb5a95ce",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "4eba892383b7203ad61633b6ebb80807",
"/": "4eba892383b7203ad61633b6ebb80807",
"main.dart.js": "5e940220fc3a679060227d229a0729f0",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"};
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
