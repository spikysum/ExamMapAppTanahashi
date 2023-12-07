function initMap() {
  var opts = {
    zoom: 15,
    center: new google.maps.LatLng(35.68944, 139.69167)
  };
  var map = new google.maps.Map(document.getElementById("map"), opts);

  var latlng = new google.maps.LatLng(35.68944,139.69167);
  var marker = new google.maps.Marker({
    position: latlng,
    map: map,
  });
  
  
  const contentString =
  '<div><p><b>Shinjyuku Tocho</b></div>' +
  '<div>rating: 5.0</div>'

  const infowindow = new google.maps.InfoWindow({
  content: contentString,
  });
  marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
    });
  });
  
  var item = RESTAURANT_list[0];
  var lat = item["location"]["latitude"]
  var lng = item["location"]["longitude"]
  var latlng = new google.maps.LatLng(lat,lng);
  var marker = new google.maps.Marker({
    position: latlng,
    map: map,
  });
  
 add_marker(map)
}

function add_marker(map){
  for (var i = 0; i < RESTAURANT_list.length; i++) {
    var item = RESTAURANT_list[i];
    var lat = item["location"]["latitude"]
    var lng = item["location"]["longitude"]
    var latlng = new google.maps.LatLng(lat,lng);
    var marker = new google.maps.Marker({
        position: latlng,
        map: map
    });
    var ins = '<div class="map-window">';
        ins += '<p class="map-window_name">' + item['displayName']["text"] + '</p>';
        ins += '</div>';
    var infoWindow = new google.maps.InfoWindow({
            content: ins
    });
    marker.addListener("click", () => {
      infowindow.open({
        anchor: marker,
        map,
      });
    });
  }
}