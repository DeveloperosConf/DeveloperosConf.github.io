function initMap(){
    var map;
    var centerPosition = new google.maps.LatLng(40.3366526, -3.8748922);


    var style = [{
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "road",
            "stylers": [{
            "visibility": "on"
        }, {
            "color": "#ffffff"
        }]
    }, {
        "featureType": "road.arterial",
            "stylers": [{
            "visibility": "on"
        }, {
            "color": "#fee379"
        }]
    }, {
        "featureType": "road.highway",
            "stylers": [{
            "visibility": "on"
        }, {
            "color": "#fee379"
        }]
    }, {
        "featureType": "landscape",
            "stylers": [{
            "visibility": "on"
        }, {
            "color": "#f3f4f4"
        }]
    }, {
        "featureType": "water",
            "stylers": [{
            "visibility": "on"
        }, {
            "color": "#7fc8ed"
        }]
    }, {}, {
        "featureType": "road",
            "elementType": "labels",
            "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "poi.park",
            "elementType": "geometry.fill",
            "stylers": [{
            "visibility": "on"
        }, {
            "color": "#83cead"
        }]
    }, {
        "elementType": "labels",
            "stylers": [{
            "visibility": "on"
        }]
    }, {
        "featureType": "landscape.man_made",
            "elementType": "geometry",
            "stylers": [{
            "weight": 0.9
        }, {
            "visibility": "off"
        }]
    }]

    var options = {
        zoom: 16,
        center: centerPosition,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map($('#map')[0], options);
    map.setOptions({
        styles: style,
        scrollwheel: false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
        draggable: false
    });
    
    var image = {
        url: 'https://dl.dropboxusercontent.com/u/814783/fiddle/marker.png',
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(12, 59)
    };
    var shadow = {
        url: 'https://dl.dropboxusercontent.com/u/814783/fiddle/shadow.png',
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(-2, 36)
    };
    var marker = new google.maps.Marker({
        position: centerPosition,
        map: map,
        icon: image,
        shadow: shadow
    });
};

$( function() {
    $( "#accordion" ).accordion({
        heightStyle: "content",
        collapsible: true
    });
  } );