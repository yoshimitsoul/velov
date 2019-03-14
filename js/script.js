var secondeZeroElt = "0"; // va servir à rajouter un 0 de type chaine à coté de seconde
var afficherCompteurElt = document.getElementById("afficherCompteur"); //appel de la variable 
var compteurNomElt = document.getElementById("compteurNom"); //idem

class Compteur { //création d'une classe 

  //constructeur et paramétres du compteur
  constructor(minute, seconde) {

      this.minute = minute;
      this.seconde = seconde;
    }

    decrementSeconde() {
      if (this.seconde > 0) {
        this.seconde -= 1;
      } else if (this.seconde == 0) {
        if (this.minute > 0) {
          this.seconde = 59; //remplacer 59
          this.minute -= 1;
        } else if (this.minute == 0) {
          this.seconde = 0;
        }
      }
    }
  }
  var compteur = new Compteur(20, 0);

  function decrementCompteur() {
    compteur.decrementSeconde();
    //console.log(compteur); //observation du compteur dans la console
    var secondeZeroElt = compteur.seconde < 10 ? "0" : ""; //inclure un 0 si le compteur des seconde est inférieur à 10
    afficherCompteurElt.innerHTML = "La réservation expire dans " + compteur.minute + ":" + secondeZeroElt + compteur.seconde;
  }

  setInterval(decrementCompteur, 1000);