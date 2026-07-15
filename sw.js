const CACHE_NAME = 'toonlore-v1';
const ASSETS = [
  '/ToonLoreTVApp/',
  '/ToonLoreTVApp/index.html',
  '/ToonLoreTVApp/manifest.json'
];

// Install Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Fetch Assets
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});
