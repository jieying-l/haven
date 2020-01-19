function getGeofences() {
  return fetch('https://api.radar.io/v1/geofences', {
    method: 'GET',
    headers: {
      "Authorization": "prj_test_sk_b0d4a9a48ac4a77010652e7ef89dabc2a2655d3a";
    }
  })
    .then((response) => response.json())
    .then((responseJson) => {
      if ((responseJ))
      return responseJson.geofences;
    })
    .catch((error) => {
      console.error(error);
    });
}

function getCoordinates() {
  responses = getGeofences();
  polygons = [];
  // only circles allowed
  for (geofence of responses) {
    polygon = [];
    polygon.push(geofence.geometryCenter);
    polygon.push(geofence.geometryRadius);
    polygons.push(polygon);
  }
  return polygons;
}
