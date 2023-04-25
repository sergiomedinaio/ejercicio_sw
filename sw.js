console.log("SW: I'm a Service Worker!");

self.addEventListener('install', event => {
    console.log("SW: ", event);
    const install = new Promise((resolve, reject) => {
        // el timeout simula espera de recursos
        setTimeout(() => {
            console.log("SW: Install complete!");
            self.skipWaiting();
            resolve();
        }, 500);
    });
    event.waitUntil(install);
});

self.addEventListener('fetch', event => {
    console.log("SW: ", event.request.url);
    console.log(event);
    if(event.request.url.includes('https://reqres.in')){ // si la url incluye el dominio de la API
        const response = new Response(`{ 
            "ok": false, 
            "data": [],
            "message": "No se puede acceder a la API" 
        }`, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        event.respondWith(response);
    }
});