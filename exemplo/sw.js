let cacheName = 'primeiro-sw';
let filesToCache = [
    '/',
    'index.html',
    'style.css'
];

self.addEventListener('install', function(e){

    console.log('Service Worker installer');
    
    e.waitUntil(
        caches.open(cacheName).then(function(cache){
            console.log('SW cache APP shell');
            return cache.addAll(filesToCache);
        })
    );

});

self.addEventListener('activate', function(e){
    console.log('Service Worker activate')
});

self.addEventListener('fetch', function(e){
    console.log('Service Worker fetch');
    e.waitUntil(
        caches.match(e.request).then(function(response){
            return response || fetch(e.request);
        })
    );
});