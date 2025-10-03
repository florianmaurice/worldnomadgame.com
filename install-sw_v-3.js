window.addEventListener('load', function() {
    if (typeof navigator.serviceWorker !== 'undefined') {
        // caches.keys().then(function(cacheNames) {
        //     cacheNames.forEach(function(cacheName) {
        //         caches.delete(cacheName);
        //     });
        // });

        navigator.serviceWorker.register('/sw.js?v=2', { scope: '/' });
    }
});