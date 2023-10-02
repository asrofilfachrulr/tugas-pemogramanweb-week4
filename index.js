// Initialize and add the map
let map;

async function initMap() {
  // -7.989285835868417, 112.6260257
  const position = { lat: -7.989285835868417, lng: 112.6260257 };
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  map = new Map(document.getElementById("map"), {
    zoom: 18,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "SMAN 5 Malang",
  });
}

initMap();