function initMap() {
  var opts = {
    zoom: 15,
    center: new google.maps.LatLng(35.68944, 139.69167)
  };
  var map = new google.maps.Map(document.getElementById("map"), opts);

  var restaurantTypes = document.getElementById("restaurantTypes");
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
        ins += '</div>';
        ins += '<h1 id="firstHeading" class="firstHeading">'+item['displayName']["text"] + '</h1>';
        ins += '<div id="bodyContent">';
        ins += item["formattedAddress"]
        ins += '</div>';
    var infoWindow = new google.maps.InfoWindow({
            content: ins
    });
    add_event_to_marker(marker,infoWindow,i)
  }
}


function add_event_to_marker(marker, infoWindow, index) {
    var item = RESTAURANT_list[index];
    var restaurantTypes = document.getElementById("restaurantTypes");
    var typesList = item['types'];
    var typesListStr = "";
    for (var j = 0; j < item['types'].length; j++){
        typesListStr += item['types'][j]
        typesListStr += "\n"
    }

    item['marker'] = marker;
    item['infoWindow'] = infoWindow;
 
    item['marker'].addListener('click', function(e) {
        infoWindows_hide();
        item['infoWindow'].open(map, item['marker']);
        restaurantTypes.innerHTML = "<span>"+typesListStr+"</span>";
    });
}

function infoWindows_hide() {
    for (var i = 0; i < RESTAURANT_list .length; i++) {
        RESTAURANT_list[i]['infoWindow'].close();
    }
}