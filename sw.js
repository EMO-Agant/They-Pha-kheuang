// Service Worker ພື້ນຖານ - ຊ່ວຍໃຫ້ browser ຮັບຮູ້ວ່ານີ້ແມ່ນ PWA ທີ່ຕິດຕັ້ງໄດ້
// (ຈຳເປັນສຳລັບ Android/Chrome "Install App"; iOS Safari ບໍ່ຈຳເປັນແຕ່ໃສ່ໄວ້ບໍ່ເສຍຫາຍ)

const CACHE_NAME = 'they-pha-kheuang-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// ບໍ່ cache ຫຍັງພິເສດ - ພຽງແຕ່ pass-through ໄປຫາ network
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
