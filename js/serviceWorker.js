var CACHE_NAME = 'tj-cache-v1.0';
var urlsToCache = [
    '/',
    '/css/global.css',
    '/js/global.js',
    '/images/logo.png',
    '/images/social/facebook.png',
    '/images/social/instagram.png',
    '/images/social/mail.png',
    '/images/index/logo.png',
    '/team.html',
    '/js/team.js',
    '/images/team/github.png',
    '/images/team/linkedin.png',
    '/events.html',
    '/gallery.html',
    '/images/gallery/close.png',
    '/images/gallery/next.png',
    '/events.html'
];
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(function(cache) {
            return cache.addAll(urlsToCache);
        })
    );
});
self.addEventListener('activate', function (event) {
    event.waitUntil(
        caches.keys().then(function (cacheNames) {
        return Promise.all(
            cacheNames.filter(function (cacheName) {
                return cacheName != CACHE_NAME;
            }).map(function (cacheName) {
                return caches.delete(cacheName);
            })
        );
        })
    );
});

self.addEventListener('fetch', function(event) {
    try {
        event.respondWith(
            caches.match(event.request)
            .then(function(response) {
                if (response) {
                    return response;
                } else {
                    return fetch(event.request);
                }
            })
        );
    } catch (err) {}
});
