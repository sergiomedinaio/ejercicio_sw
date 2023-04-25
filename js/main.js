if (navigator.serviceWorker) {
    console.log(`I can use Service Worker!`);
    navigator.serviceWorker.register('/sw.js');
} else {
    console.log(`I can't use Service Worker, please update me...`);
}