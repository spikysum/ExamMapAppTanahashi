var ready = { api: false, ajax: false };
var map;
var mapData;
var mapOptions = {
    center: { // 地図の緯度経度
        lat: 35.68944,
        lng: 139.69167
    },
    zoom: 13, // 地図の拡大率
}
 
$(function() {
    ready['api'] = true;
    ready['ajax'] = true;
    var $script = $('<script>').attr({
        'type': 'text/javascript',
        'src': './data.js'
      });
      $script.on('load', function(){
        var data = window.RESTAURANT;
        ready['ajax'] = true;
        /// 読み込みデータをゴニョゴニョ...
      });
      $('body')[0].appendChild($script[0]);
      generate_map();
});
 
/**
 * Google Maps APIの準備完了後の処理
 */
function api_ready() {
    ready['api'] = true;
    generate_map();
}
 
/**
 * 地図を生成する
 */
function generate_map() {
    if(ready['api'] && ready['ajax']) {
        map = new google.maps.Map(document.getElementById('map'), mapOptions);
        add_marker();
    }
}
 
/**
 * 地図にマーカーを追加する
 */
function add_marker() {
    for (var i = 0; i < mapData.length; i++) {
        var item = mapData[i];
         
        // マーカーの設置
        var marker = new google.maps.Marker({
            position: item['latlng'],
            map: map
        });
 
        // 吹き出しの生成
        var ins = '<div class="map-window">';
            ins += '<p class="map-window_name">' + item['name'] + '</p>';
        ins += '</div>';
        var infoWindow = new google.maps.InfoWindow({
            content: ins
        });
 
        // マーカーのイベント設定
        add_event_to_marker(marker, infoWindow, i);
    }
}
 
/**
 * マーカーにイベントを追加する
 * @param {object} marker     (required) マーカーの情報
 * @param {object} infoWindow (required) 吹き出しの情報
 * @param {number} index      (required) 地図情報のインデックス番号
 */
function add_event_to_marker(marker, infoWindow, index) {
    var item = mapData[index];
    item['marker'] = marker;
    item['infoWindow'] = infoWindow;
 
    // マーカークリック時に吹き出しを表示する
    item['marker'].addListener('click', function(e) {
        infoWindows_hide();
        item['infoWindow'].open(map, item['marker']);
    });
}
 
/**
 * 吹き出しを非表示にする
 */
function infoWindows_hide() {
    for (var i = 0; i < mapData.length; i++) {
        mapData[i]['infoWindow'].close();
    }
}