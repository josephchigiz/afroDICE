const staticAfroDice = 'afro-dice-v1';
const assets = [
  '/',
  '/index.html',
  '/js/script.js',
  '/css/style.css',
  '/assets/background2.jpg',
  '/assets/diceDown.png',
  '/assets/diceUp.png',
  '/assets/diceSpin-fast.gif',
  '/assets/roll.png',
  '/assets/1.png',
  '/assets/2.png',
  '/assets/3.png',
  '/assets/4.png',
  '/assets/5.png',
  '/assets/6.png',
  '/assets/favicon.ico',
  '/assets/android-chrome-192x192.png',
  '/assets/android-chrome-512x512.png',
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticAfroDice).then(cache => {
      cache.addAll(assets);
    })
  )
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
});