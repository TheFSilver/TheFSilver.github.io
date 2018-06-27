function Hey() { // Fonction d'affichage du "porn popup"
	alert("Hey le site xxxvidsxxx est trop bien. Viens dessus stp please");
}

var set = 0;
function change() { // Fonction du bouton du mode psychedelique
	
	// Déclenchement du mode psychedelique
	
	if ( set == 0){
		set++;
		document.body.style.backgroundColor = "magenta"; // Changement du background

		var px = document.getElementsByClassName("para"); // Changement des style paragraphes
		for (var i = 0; i < px.length; i++) {
		px[i].style.color="blue";
		px[i].style.fontFamily = "papyrus";
		}
    
		var hx = document.getElementsByClassName("headers"); // Changement des style headings
		for (var j = 0; j < hx.length; j++) {
		hx[j].style.color="green";
		hx[j].style.fontFamily = "Comic Sans MS";
		}
	}
	
	// Retour au style CSS par défaut
	
	 else if (set == 1){
		set--;
		document.body.style.backgroundColor = "transparent"; // Reset du background

		var px = document.getElementsByClassName("para"); // Reset des style paragraphes
		for (var i = 0; i < px.length; i++) {
		px[i].style.color="inherit";
		px[i].style.fontFamily = "inherit";
		}
    
		var hx = document.getElementsByClassName("headers"); // Reset des style headings
		for (var j = 0; j < hx.length; j++) {
		hx[j].style.color="inherit";
		hx[j].style.fontFamily = "inherit";
		}
	}
}