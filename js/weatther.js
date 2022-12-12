function onGeoOK() {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
}

function onGeoError() {}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
