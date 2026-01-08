const CACHE_NAME = 'vantage-terminal-v1';
const ASSETS = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './icon.jpeg',
  './contact.html',
  './privacy.html',
  './terms.html',
  './sources.html'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});