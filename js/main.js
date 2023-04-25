if (navigator.serviceWorker) {
    console.log(`I can use Service Worker!`);
    navigator.serviceWorker.register('/sw.js');
} else {
    console.log(`I can't use Service Worker, please update me...`);
}

fetch('https://reqres.in/api/users')
    .then(response => response.json())
    .then(json => console.log(json));