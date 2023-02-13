var map = L.map('mapa').setView([-31.428407, -64.184833], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([-31.428407, -64.184833]).addTo(map)
    .bindPopup('GDBL boletos disponibles')
    .openPopup()
    .bindTooltip('un tooltip')
    .openTooltip();

$('.cuenta-regresiva').countdown("2023/07/04 09:00:00",function(event) {
    $('#dias').html(event.strftime('%D'))
    $('#horas').html(event.strftime('%H'))
    $('#minutos').html(event.strftime('%M'))
    $('#segundos').html(event.strftime('%S'))
});


