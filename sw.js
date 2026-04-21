// //Install Service Worker

// self.addEventListener('install', (event) => {
//     console.log('Service Workeris installed');
// })

// const staticAssets = [ '/index.html', '/app.js' ]
// const staticCache =  ""
// const DynamicCache = ""
// const dynacmicCacheName = ""

// // Install Service Worker 
// self.addEventListener('activate', function (event) {
//     event.waitUntil(
//         caches.open('staticCache').then(function (cache) {
//             return cache.addAll(staticAssets)
//         })
//     )
// })

// // Fetch Event
// self.addEventListener('fetch',  (event) => {

//     // Kontroller svar på request
//     event.respondWith(
//         // Undersøger efter om fil matcher i cache
//         caches.match(event.request).then((cachesRes) => {
//             // Returner matcher fra cache - ellers hentes fil på serveren
//             return cachesRes || fetch(event.request).then(fetchRes) => {
//             // Tilføjer nye sider til cachen
//             return caches.open(dynacmicCacheName).then((cache) => {
//                 // Anvender put til at tilføje nye sider til cachen
//                 // Bemærk metoden clone
//                 cache.put(event.request.url, fetchRes.clone())
//                 // Returner fetch request
//                 return fetchRes
//             })
//         })
//     )

// })

// // Funktion til styring af antal cache filer i en given cache
// const limitCacheSize = (cancheName, numberOfAllowedFiles) => {
//     // Åbn den bestemt cache
//     caches.open(cacheName).then((cache) => {
//         // Henter array af cache keys
//         cache.keys().then(keys => {
//             // Hvis antal antal filer overstiger det tilladte antal
//             if (keys.length > numberOfAllowedFiles) {
//                 // Slet første index  (ældeste fil) og kører funktionen igen indtil antal filer er opnået
//                 cache.delete(keys[0]).then(limitCacheSize(cacheName, numberOfAllowedFiles))
//             }
//         })
//     })

//     // Kalder limit cache funktionen
//     limitCacheSize(dynamicCacheName, 20)