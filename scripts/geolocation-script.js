
const text = document.getElementById('text-geolocation');
const geolocationToast = document.getElementById('geolocationToast');

const toast = new bootstrap.Toast(geolocationToast);
toast.show();
getLocation();

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        text.innerHTML = "Não foi possível recuperar sua localização.";
    }
};

function showPosition(position) {
    text.innerHTML = "<strong>LAT:</strong> " + position.coords.latitude +
        ",  <strong>LON:</strong> " + position.coords.longitude;
};


