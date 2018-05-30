function initMap() {
    var uluru = {lat: 40.7291, lng: -73.9965};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 17,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
}