self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('ardsan-cache-v1').then(cache => cache.addAll([
      './', './index.html', './styles.css', './app.js', './manifest.json'
    ]))
  );
  self.skipWaiting();
});
self.addEventListener('activate', event => { event.waitUntil(clients.claim()); });
self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request).then(resp => resp || fetch(event.request)));
});