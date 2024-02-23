var map = L.map('map').setView([48.267549, 6.489711], 7.5);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Créer le cercle vert foncé de rayon 40 km
var darkGreenCircle = L.circle([48.267549, 6.489711], {
    color: 'lightgreen',
    fillColor: 'lightgreen',
    fillOpacity: 0.5,
    radius: 30000 // 40 km en mètres vol d'oiseau
}).addTo(map);

// Créer le cercle vert clair de rayon 80 km
var lightGreenCircle = L.circle([48.267549, 6.489711], {
    color: 'drakgreen',
    fillColor: 'darkgreen',
    fillOpacity: 0.5,
    radius: 60000 // 80 km en mètres vol d'oiseau
}).addTo(map);

// Ajouter des étiquettes aux cercles
darkGreenCircle.bindPopup('Rayon de 40 km');
lightGreenCircle.bindPopup('Rayon de 80 km');

// Ajouter le nom de la ville centrale
var centralCity = L.popup()
    .setLatLng([48.267549, 6.489711])
    .setContent("Bayecourt, 88150")
    .openOn(map);
