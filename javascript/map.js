function initMap(){
let uluru = {lat:44.7721800, lng:17.18856};
let map = new google.maps.Map(
    document.getElementsByClassName('Map'), {zoom: 8, center:uluru}
);
let marker = new google.maps.Marker({position:uluru, map:map});
}