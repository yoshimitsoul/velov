var articlesElt = document.getElementById("articles");
var signPadElt = document.getElementById("signpad");
var stationElt = "";
var stations = [];

ajaxGet("https://api.jcdecaux.com/vls/v1/stations?contract=Lyon&apiKey=f977b0154d4a929303d31c50216b32b5b440291d", function(reponse){
	var articles = JSON.parse(reponse);

	articles.forEach(function(articles) {

		stations.push(articles);

		InitMap.initialisation();
	});
});

var initMap ={
function initialisation() {

	var map = new google.maps.Map(document.getElementById("EmplacementCarte"), { //variable fournie par Google
		center: {
			lat: 45.757703,
			lng: 4.852558
		},
		zoom: 12
	});
	 for (i=0;i<stations.length;i++){
            
            var marqueur = new google.maps.Marker(optionsMarqueur);

            var optionsMarqueur = {
                position: new google.maps.LatLng(stations[i].position.lat, stations[i].position.lng),
                map: maCarte,
                name: stations[i].name,
                address: stations[i].address,
                status: stations[i].status,
                available_bike_stands: stations[i].available_bike_stands,
                available_bikes: stations[i].available_bikes    
            };

}
}
}