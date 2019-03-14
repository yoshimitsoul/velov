// Parmétre du slider
var images = [
    "img/1.jpg",
    "img/2.jpg",
    "img/3.jpg",
];

var intervalId = 0;
var num = 0;

// Object d'utilisation des méthodes Next et Prev 
var NextPrev = {
    // Méthodes Interval
    intervalMeth: function() {
        intervalId = setInterval(NextPrev.next, 10000);
    },
    // Passage Ã  l'image suivante
    next: function() {
        var slider = document.getElementById("slider");
        num++;

        if (num >= images.length) {
            num = 0;
        }

        slider.src = images[num];

        //Reset et relance de la temporisation du Slider
        clearInterval(intervalId);
        NextPrev.intervalMeth();
    }
}