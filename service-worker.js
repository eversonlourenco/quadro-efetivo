const CACHE_NAME = 'avaliacao-cena-cbmerj-v1';
const ARQUIVOS_PARA_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

// Instala o Service Worker e guarda os arquivos do app no cache do aparelho
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ARQUIVOS_PARA_CACHE);
    })
  );
  self.skipWaiting();
});

// Remove caches antigos quando uma nova versão do app é instalada
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((nomes) => {
      return Promise.all(
        nomes
          .filter((nome) => nome !== CACHE_NAME)
          .map((nome) => caches.delete(nome))
      );
    })
  );
  self.clients.claim();
});

// Estratégia: tenta a rede primeiro (para pegar atualizações), 
// se não houver internet, usa o que está salvo no cache do aparelho
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    fetch(event.request)
      .then((respostaRede) => {
        const respostaClone = respostaRede.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, respostaClone);
        });
        return respostaRede;
      })
      .catch(() => {
        return caches.match(event.request).then((respostaCache) => {
          return respostaCache || caches.match('./index.html');
        });
      })
  );
});
