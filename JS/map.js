var map = L.map('map').setView([48.267549, 6.489711], 16);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
L.marker([48.267549, 6.489711]).addTo(map)
  .bindPopup('Bayecourt, 88150')
  .openPopup();