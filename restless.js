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

function createGeofence(){
  let data = {
    method: 'POST',
    body: JSON.stringify({
      description: 'Test Geofence',
      tag: 'venue',
      externalID: 3,
      type: 'circle',
      coordinates: '[-73.975363,40.783826]',
      radius: '100',
    }),
    headers: {
      'Authorization':  'prj_live_sk_95ba8425a6e2354d531ebd749ba2313b8a48a04b',
    }
  }
  fetch('https://api.radar.io/v1/geofences', data)
    .then((response) => response.json())
      .then((responseJson) => {
        console_log(response);
      });
    }).catch((error) => {
      console.error(error);
});
