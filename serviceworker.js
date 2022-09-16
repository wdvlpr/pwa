var staticCacheName = "pwa";
console.log('000');
self.addEventListener("install", function (e) {
  console.log('001');
  e.waitUntil(
   caches.open(staticCacheName).then(function (cache) {
    return cache.addAll(["/"]);
   })
  );
});

self.addEventListener("fetch", function (event) {
  console.log('002');
  console.log(event.request.url);
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});
