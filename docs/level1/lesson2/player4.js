// Author : Agnes Simonet 
// Thanks to Stan Bogdanov (http://ewbooks.info/hotpot/)
// Created (player.js) in March 2016 - revision in July 2020 for JMatch add-ons version 2.1.


var unicode_play='&#9658;';
//var unicode_pause='|&nbsp;|';
	// for pause button : uncomment the line above and comment the line below
var unicode_pause='&#9658;';

var mediaPlayer = document.getElementById('audioHP');
var HPfilename='';// le fichier dans le hiddenplayer


function fillHiddenPlayer(soundfilename) {

	HPfilename=soundfilename;
	content = '<audio id="audioHP" controls>';// don't use preload on touch devices
	
	// accorder le type à  l'extension
	var extension=findext(soundfilename);
console.log("extension : "+extension)
	switch (extension) {
  		case 'mp3': 
  			content += '<source src="' + soundfilename + '" type="audio/mpeg">';
  			break;
  		case 'ogg': 
  			content += '<source src="' + soundfilename + '" type="audio/ogg">';
  			break;
  		case 'wav': 
  			content += '<source src="' + soundfilename + '" type="audio/wav">';
  			break;
  	}

	content += '</audio>';
	document.getElementById('hiddenPlayer').innerHTML = content;
	return HPfilename;
}

function findext(soundfilename) {
	var n = soundfilename.lastIndexOf(".");//repérer le séparateur
	var ext="";
	
	ext = soundfilename.substr(n+1, 3);
	return ext;
}

function initialiseMediaPlayer(soundfilename) {

	// Récupérer le player
	mediaPlayer = document.getElementById('audioHP');
	
	// Ne pas afficher la barre de controles
	mediaPlayer.controls = false;
	
	// Ajoute un listener pour savoir si la lecture est en cours
	mediaPlayer.addEventListener('play', function() {
		// afficher le bouton pause
		switch_unicode_play_pause(soundfilename, unicode_pause);
	}, false);
	
	// Ajoute un listener pour savoir si la lecture est en pause
	mediaPlayer.addEventListener('pause', function() {
		// afficher le bouton play
		switch_unicode_play_pause(soundfilename, unicode_play);
	}, false);
	
	// Ajoute un listener pour savoir si la lecture est terminée
	mediaPlayer.addEventListener('ended', function() {
		// afficher le bouton play
		switch_unicode_play_pause(soundfilename, unicode_play);
	}, false);
	
	
}	

function switch_unicode_play_pause(soundfilename, button) {
	
	// savoir sur quel element du htm on a cliqué
	var els = document.getElementsByTagName("a");//récupérer les liens
	for (var i = 0, l = els.length; i < l; i++) {
    	var el = els[i];
    	// lire tous les <a href="javascript:void(0);" 
		// chercher les onclick appelant la fonction play
		// et faire le boulot
		if ( el.hasAttribute('href')) {
    		if (el.href == 'javascript:void(0);') {
    			if ( el.hasAttribute('onclick')) {
    				var attr_onclick=el.getAttribute('onclick');
    				// supprimer les espaces inutiles dans la partie onclick
    				var attr_onclick1=attr_onclick.replace(/ /g,"");
					// vérifier que onclick appelle la fonction play
					var isplay=attr_onclick1.substr(0,4);	
					if (isplay=='play') {
    					// récupérer le nom du fichier de onclick
						var fin=attr_onclick1.indexOf(";",6) ;
						var SFN_OneOfAll = attr_onclick1.substr(6,fin-8);	
						// comparer à  filename
						if (SFN_OneOfAll==soundfilename) { // si on tient l'élément à  modifier			
							// on peut switcher
							el.innerHTML = button;
						}
					}	
				}
			}
		}
	}
}

function play(soundfilename) {
	
	if ( soundfilename != HPfilename ) { // si pas encore chargé dans le HiddenPlayer ou changement de fichier son
		if ( mediaPlayer != null ) {mediaPlayer.pause()}
		fillHiddenPlayer(soundfilename);
		initialiseMediaPlayer(soundfilename);
	}
 
	if (mediaPlayer.paused || mediaPlayer.ended) {
		switch_unicode_play_pause(soundfilename, unicode_pause);
		mediaPlayer.play(); // quand on clique
	}
	else {
		switch_unicode_play_pause(soundfilename, unicode_play);
		mediaPlayer.pause();
	}
}



