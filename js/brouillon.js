Aide memo

var seconde = 0;
var minute = 20;
var eltcompteur = document.getElementById("afficherCompteur");


function decrementation(){
  seconde = seconde -1;
  if(seconde == -1){ 
    seconde =5;
    minute -=1;
  }

  if()
        
  eltcompteur.innerHTML = "La réservation expire dans " + minute + ":" + seconde;
}

setInterval(decrementation,1000);



//methode deux 


function decrementationMinute (){
minute = minute -1;
  if(minute = seconde/60){ 
    seconde = 0;
  }
setInterval(decrementationMinute,10000);
}

// decompte des secondes 
function decrementationSeconde(){
  seconde = seconde -1;
  if(seconde >59){ 
    seconde =5;
    minute * 60;
  }

  if (seconde <= 9){;
  secondeZeroElt + seconde;
}

setInterval(decrementationSeconde,1000);
}

 afficherCompteurElt.innerHTML = "La réservation expire dans " + minute + ":" + seconde;




var markerP = new google.maps.Marker({position:{lat: 48.866667, lng: 2.333333}, map: map});
var markerV = new google.maps.Marker({position:{lat: 48.801408, lng: 2.130122}, map: map});

 les api

 API JCDECAUX: aa93294438bc2c9a12f789ac30068a07cf973182
ajaxGet ("https://api.jcdecaux.com/vls/v1/stations?contract=Lyon&apiKey=aa93294438bc2c9a12f789ac30068a07cf973182"

Google API: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAwNei1jWprid1N_WKkliIS11WeY81HBpk&callback=initialisation"