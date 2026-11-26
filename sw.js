const CACHE='bela-vista-shell-v3';
const ASSETS=['./','./index.html','./styles.css','./app.js','./manifest.webmanifest'];
self.addEventListener('install',event=>event.waitUntil((async()=>{const cache=await caches.open(CACHE);await cache.addAll(ASSETS);await self.skipWaiting()})()));
self.addEventListener('activate',event=>event.waitUntil((async()=>{const keys=await caches.keys();await Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key)));await self.clients.claim()})()));
self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET')return;
  event.respondWith((async()=>{
    try{
      const response=await fetch(event.request);
      if(response.ok && new URL(event.request.url).origin===self.location.origin){const cache=await caches.open(CACHE);cache.put(event.request,response.clone())}
      return response;
    }catch(error){const cached=await caches.match(event.request);if(cached)return cached;throw error}
  })());
});
