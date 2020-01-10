// function initMap() {
//     var map;
//     var bounds = new google.maps.LatLngBounds();
//     var mapOptions = {
//         mapTypeId: 'roadmap'
//     };
//
//     // Display a map on the web page
//     map = new google.maps.Map(document.getElementById("mapCanvas"), mapOptions);
//     map.setTilt(50);
//
//     // Multiple markers location, latitude, and longitude
//     var markers = [
//         ['Brooklyn Museum, NY', 40.671531, -73.963588],
//         ['Brooklyn Public Library, NY', 40.672587, -73.968146],
//         ['Prospect Park Zoo, NY', 40.665588, -73.965336]
//     ];
//
//     // Info window content
//     var infoWindowContent = [
//         ['<div class="info_content">' +
//         '<h3>Brooklyn Museum</h3>' +
//         '<p>The Brooklyn Museum is an art museum located in the New York City borough of Brooklyn.</p>' + '</div>'],
//         ['<div class="info_content">' +
//         '<h3>Brooklyn Public Library</h3>' +
//         '<p>The Brooklyn Public Library (BPL) is the public library system of the borough of Brooklyn, in New York City.</p>' +
//         '</div>'],
//         ['<div class="info_content">' +
//         '<h3>Prospect Park Zoo</h3>' +
//         '<p>The Prospect Park Zoo is a 12-acre (4.9 ha) zoo located off Flatbush Avenue on the eastern side of Prospect Park, Brooklyn, New York City.</p>' +
//         '</div>']
//     ];
//
//     // Add multiple markers to map
//     var infoWindow = new google.maps.InfoWindow(), marker, i;
//
//     // Place each marker on the map
//     for( i = 0; i < markers.length; i++ ) {
//         var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
//         bounds.extend(position);
//         marker = new google.maps.Marker({
//             position: position,
//             map: map,
//             title: markers[i][0]
//         });
//
//         // Add info window to marker
//         google.maps.event.addListener(marker, 'click', (function(marker, i) {
//             return function() {
//                 infoWindow.setContent(infoWindowContent[i][0]);
//                 infoWindow.open(map, marker);
//             }
//         })(marker, i));
//
//         // Center the map to fit all markers on the screen
//         map.fitBounds(bounds);
//     }
//
//     // Set zoom level
//     var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
//         this.setZoom(14);
//         google.maps.event.removeListener(boundsListener);
//     });
//
// }
// // Load initialize function
// google.maps.event.addDomListener(window, 'load', initMap);
// var infowindow = null;
// var arrMarkers = {};
// var gmarkers = [];
// var map;
// // these are location
// var sites = [
//     ['Miyapur', 17.493336, 78.346531, 4, 'Plot 160, Mytri Nagar,<br> Madinaguda, Miyapur,<br> Hyderabad.<br><br>Phone:<br> 040 65081334, 040 65081335'],
//     ['Irving Homestead', 17.402064, 78.484005, 2, 'Saboo R.K. Plaza,<br> Beside HDFC Bank,<br> Himayath Nagar,<br> Hyderabad <br><br>Phone:<br> 040 65355123, 040 65356123'],
//     ['Boduppal', 17.419148, 78.584124, 1, 'Plot 160, ColonyBoduppal,<br> Hyderabad.<br><br>Phone:<br> 040 65081334, 040 65081335'],
//     ['Habsiguda', 17.363610, 78.554393, 3, '3-73, Street No 6, Habsiguda,<br> Hyderabad. <br><br>Phone:<br> 040 65700233, 040 65700234'],
//     ['Banjara Hills', 17.447863, 78.355354, 5, 'Plot 282, Ground Floor,<br> Road 12, Old MLA Colony, Banjara Hills,<br> Hyderabad. <br><br>Phone:<br> 040 65700222, 040 65700333'],
//     ['Somajiguda', 17.428951, 78.456014, 6, 'Shop no 23, 6-3-1110, Ground Floor,<br> Amrutha Mall, Somajiguda,<br> Hyderabad. <br><br>Phone:<br> 040 65700233, 040 65700234'],
//     ['Kondapur', 17.457073, 78.371499, 7, 'SMR Vinay Technopolis<br> P.NO. 89, Survey<br> No.13, Opposite- S& P Global, Kondapur,<br> Hyderabad. <br><br>Phone:<br> 040 33165120']
// ];
//
//
// function initMap() {
//     var centerMap = new google.maps.LatLng(17.493336, 78.346531);
//     var bounds = new google.maps.LatLngBounds();
//     var myOptions = {
//         zoom: 11,
//         center: centerMap,
//         // mapTypeId: google.maps.MapTypeId.ROADMAP
//     }
//
//     // Info window content
//     var infoWindowContent = [
//         ['<div class="info_content">' +
//         '<h3>Brooklyn Museum</h3>' +
//         '<p>The Brooklyn Museum is an art museum located in the New York City borough of Brooklyn.</p>' + '</div>'],
//         ['<div class="info_content">' +
//         '<h3>Brooklyn Public Library</h3>' +
//         '<p>The Brooklyn Public Library (BPL) is the public library system of the borough of Brooklyn, in New York City.</p>' +
//         '</div>'],
//         ['<div class="info_content">' +
//         '<h3>Prospect Park Zoo</h3>' +
//         '<p>The Prospect Park Zoo is a 12-acre (4.9 ha) zoo located off Flatbush Avenue on the eastern side of Prospect Park, Brooklyn, New York City.</p>' +
//         '</div>']
//     ];
//     map = new google.maps.Map(document.getElementById("mapCanvas"), myOptions);
//     var markers = [
//         ['Brooklyn Museum, NY', 40.671531, -73.963588],
//         ['Brooklyn Public Library, NY', 40.672587, -73.968146],
//         ['Prospect Park Zoo, NY', 40.665588, -73.965336]
//     ];
//
//     //     // Add multiple markers to map
//     var infoWindow = new google.maps.InfoWindow(), marker, i;
//
//     // Place each marker on the map
//     for( i = 0; i < markers.length; i++ ) {
//         var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
//         bounds.extend(position);
//         marker = new google.maps.Marker({
//             position: position,
//             map: map,
//             title: markers[i][0]
//         });
//
//         // Add info window to marker
//         google.maps.event.addListener(marker, 'click', (function(marker, i) {
//             return function() {
//                 infoWindow.setContent(infoWindowContent[i][0]);
//                 infoWindow.open(map, marker);
//             }
//         })(marker, i));
//
//         // Center the map to fit all markers on the screen
//         map.fitBounds(bounds);
//     }
//     setMarkers(map, sites,'');
//     infowindow = new google.maps.InfoWindow({
//         content: "loading..."
//     });
//     //var bikeLayer = new google.maps.BicyclingLayer();
//     //bikeLayer.setMap(map);
// }
//
// function showmarker(id) {
//     setVisibility(id)
//     google.maps.event.trigger(gmarkers[id],'click')
//     map.panTo(gmarkers[id].getPosition())
// }
//
// function setMarkers(map, markers,id) {
//     for (var i = 0; i < markers.length; i++) {
//         var sites = markers[i];
//         var siteLatLng = new google.maps.LatLng(sites[1], sites[2]);
//         var marker = new google.maps.Marker({
//             position: siteLatLng,
//             map: map,
//             title: sites[0],
//             zIndex: sites[3],
//             html: sites[4]
//         });
//         var contentString = "Some content";
//         google.maps.event.addListener(marker, "click", function () {
//             console.log('info open');
//             infowindow.setContent(this.html);
//             infowindow.open(map, this);
//             console.log('info end');
//         });
//         gmarkers.push(marker);
//     }
//     setVisibility(0);
// }
//
// function setVisibility(id){
//     // initial show first marker and hide all
//     for(var i=0;i<gmarkers.length;i++){
//         gmarkers[i].setVisible(false);
//     }
//     gmarkers[id].setVisible(true);
// }
//
// google.maps.event.addDomListener(window, 'load', initMap);
$(document).ready(function() {
    $("#state").change(function () {
        alert('hello');
    })
})
