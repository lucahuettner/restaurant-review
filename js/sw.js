self.addEventListener('GET', function(event) {
  console.log(event.request);
});

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('staticCache').then(function(cache) {
        return cache.addAll([
        '/',
        '/css/styles.css',
        '/data/restaurants.json',
        '/img/1.jpg',
        '/img/2.jpg',
        '/img/3.jpg',
        '/img/4.jpg',
        '/img/5.jpg',
        '/img/6.jpg',
        '/img/7.jpg',
        '/img/8.jpg',
        '/img/9.jpg',
        '/img/10.jpg',
        'main.js',
        'dbhelper.js',
        'restaurant_info.js']);
      })
  );
});

self.addEventListener(fetch, function(event) {
  event.respondWith(
    cache.match(event.request).then(function(response) {
      if (response) return response;
      return fetch(event.request);
    }));
});
