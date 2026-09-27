// sw.js - Service Worker للتطبيق
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  // تشغيل التطبيق في حالة عدم وجود اتصال بالإنترنت
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
