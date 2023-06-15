// Initialize and add the map

$(document).ready(function () {
  initMap();
});

function initMap() {
  // The location of Aquamar
  const location = { lat: 42.06478957042226, lng: 3.0439175258089177 };
  // The map, centered at Aquamar
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: location,
  });
  // The marker, positioned at location
  const marker = new google.maps.Marker({
    position: location,
    map: map,
  });
}
