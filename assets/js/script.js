var utilisateur = "";
var map;
var uneOeuvre = {"NUMINVENTAIRE": ["MNR 81"],
	"ANCIENNUMINVENTAIRE": ["D.952.1.2", "265 (Krefeld)", "471 (Central collecting point de Munich)"],
	"DOMAINE": ["peinture", "arts"],
	"DENOMINATION": ["tableau"],
	"TITRE": ["\u00a0Madame Ad\u00e9la\u00efde en Diane ou Madame Ad\u00e9la\u00efde sous la figure de Diane"],
	"APPELLATION": [],
	"APPELLATIONVERNAC": [],
	"NOMVERNACULAIRE": [],
	"TYPOLOGIE": [],
	"TAXONOMIE_ARBORESCENCE": [],
	"TAXONOMIE": [],
	"DATEDECOUVERTE": {
		"AFFIXE": [""],
		"DEBDATE": [""],
		"FINDATE": [""]
	},
	"PRECISIONDECOUVERTE": [],
	"TYPECOLLECTE": [],
	"MATIERE": ["toile (support)"],
	"TECHNIQUE": ["peinture \u00e0 l'huile"],
	"DIMENSIONSFORME": ["H. 123,9 ; L. 97,3 \/ H. 119.5; L. 151 (cadre)"],
	"TYPEINSCRIPTION": ["signature", "date"],
	"TRANSCRIPTIONINSCRIPTION": ["<\/p><p><em>Nattier 1745<\/em> (S.D.b.g.)"],
	"ONOMASTIQUE": ["Nattier Jean-Marc"],
	"DESCRIPTION": ["Portrait de caract\u00e8re en pied de Madame Ad\u00e9la\u00efde, assise adoss\u00e9e \u00e0 un arbre, les jambes allong\u00e9es et crois\u00e9es. Elle porte les attributs du personnage mythologique de Diane : un croissant dans les cheveux, un arc tenu de la main gauche et un carquois pos\u00e9 au sol pr\u00e8s de sa main droite. Elle est v\u00eatue d'une chemise blanche retenue par une peau de b\u00eate \u00e0 la ceinture et d'un drap\u00e9 de soie rose ; elle est chauss\u00e9e de sandales. Elle est figur\u00e9e de trois quarts face et s'ins\u00e8re dans un paysage bucolique. <br\/>Le portrait de Madame Henriette en Flore peint en 1742 pour la reine avait donn\u00e9 totale satisfaction aux membres de la famille royale. Aussi, trois ann\u00e9es apr\u00e8s, Nattier recevait-il une importante commande de sept nouveaux tableaux. parmi ceux-ci, on comptait une r\u00e9plique de la toile de 1742 et, en pendant, une autre effigie in\u00e9dite d\u00e9crivant Madame Ad\u00e9la\u00efde sous la figure de Diane. De format chantourn\u00e9, les deux toiles \u00e9taient destin\u00e9es \u00e0 orner en dessus-de-porte la chambre de Louis XV dans son appartement de l'aile droite du grand ch\u00e2teau \u00e0 Choisy. La composition comme le propos histori\u00e9 s'\u00e9taient impos\u00e9s puisqu'il avait fallu respecter le parti adopt\u00e9 d\u00e8s 1742. Madame Henriette paraissait en Flore. Elle \u00e9tait repr\u00e9sent\u00e9e en pied, allong\u00e9e dans un paysage. Madame Ad\u00e9la\u00efde, sa cadette, fut donc d\u00e9crite de la m\u00eame mani\u00e8re, mais avec les attributs de Diane, le croissant de lune dans les cheveux, l'arc et les fl\u00e8ches de la d\u00e9esse chasseresse, la peau de l\u00e9opard drap\u00e9e autour du torse. Le choix du travestissement pouvait s'expliquer de diff\u00e9rentes mani\u00e8res : il \u00e9tait alors particuli\u00e8rement \u00e0 la mode, plusieurs dames de la cour ou de la soci\u00e9t\u00e9 parisienne ayant d\u00e9j\u00e0 demand\u00e9 \u00e0 para\u00eetre de la sorte ; il mettait particuli\u00e8rement en valeur le corps de la jeune fille ; enfin, il pouvait souligner un caract\u00e8re plus entier que celui de son a\u00een\u00e9e, plus discr\u00e8te et d'un temp\u00e9rament plus doux. Tout au long des d\u00e9cennies suivantes, Nattier fut appel\u00e9 \u00e0 fixer les trait des Filles de France. Tour \u00e0 tour, elles parurent au naturel, \u00e0 l'exemple de leur m\u00e8re Marie Leszczynska qui avait demand\u00e9 en 1748 \u00e0 \u00eatre repr\u00e9sent\u00e9e en habit de ville, ou bien encore avec les artifices du travestissement mythologique ou all\u00e9gorique. En 1750-1751, le peintre livrait quatre portraits de Mesdames Infante, Henriette, Ad\u00e9la\u00efde et Victoire incarnant les Quatre \u00c9l\u00e9ments : le Terre, le Feu, l'Air et l'Eau. Le choix de l'all\u00e9gorie avait \u00e9t\u00e9 le fait de Nattier car le commanditaire, le dauphin Louis de France, fr\u00e8re des princesses, n'avait souhait\u00e9 pour orner les dessus-de-porte de son gand cabinet \u00e0 Versailles que des r\u00e9pliques d'oeuvres existantes."],
	"REPRESENTATIONDECOR": ["portrait", "Ad\u00e9la\u00efde", "femme", "assis", "de trois-quarts", "all\u00e9gorie", "Diane", "carquois", "fl\u00e8che", "paysage", "arc", "croissant", "chasse"],
	"GENREDEVELOPPEMENT": [],
	"STATUTSPECIMEN": [],
	"GENESE": ["<\/p><p>En septembre 1745, J.M. Nattier ach\u00e8ve une r\u00e9plique du portrait de <em>Madame Henriette en Flore<\/em> qu'il avait peint en 1742 ainsi qu'une composition in\u00e9dite d\u00e9crivant <em>Madame Ad\u00e9la\u00efde en Diane<\/em>. Ces deux toiles, con\u00e7ues comme des pendants, sont destin\u00e9es \u00e0 prendre place dans la chambre \u00e0 coucher du Roi Louis XV, au ch\u00e2teau de Choisy. Encastr\u00e9es en dessus de porte, elles demeur\u00e8rent en place tout au long du 18e si\u00e8cle.\u00a0Autres versions \u00e0 Florence (mus\u00e9e des Offices), Madrid (Palais-Royal). R\u00e9plique au ch\u00e2teau de Versailles (MV 3805)"],
	"DATEEXE": {
		"AFFIXE": [""],
		"DEBDATE": ["1745"],
		"FINDATE": [""]
	},
	"SIECLEMILLENAIRE": [],
	"EPOQUEETSTYLE": [],
	"PRECISIONDATATION": [],
	"SOURCEORALEECRITE": [],
	"DATEREPRES": {
		"AFFIXE": [""],
		"DEBDATE": [""],
		"FINDATE": [""]
	},
	"DATEORIGCOPIE": {
		"AFFIXE": [""],
		"DEBDATE": [""],
		"FINDATE": [""]
	},
	"PERSONNE_AUTEUR": [{
		"SYNONYMES": [""],
		"ETATCIVIL": ["Nattier Jean-Marc"],
		"NFICHE": ["21817"],
		"ROLE": ["peintre"],
		"NIVEAUVISA": ["20"]
	}],
	"DATATIONCONTEXTE": [""],
	"UTILISATION": [],
	"PRECISIONUTILISATION": ["Peint pour orner la chambre \u00e0 coucher de Louis XV \u00e0 Choisy."],
	"DATEUTILIS": {
		"AFFIXE": [""],
		"DEBDATE": [""],
		"FINDATE": [""]
	},
	"UTILISATIONSECONDE": ["En 1833, le portrait de Madame Ad\u00e9la\u00efde en Diane part pour Versailles par la volont\u00e9 de Louis Philippe et int\u00e8gre la collection `A toutes les gloires de France`. Il a donc remplac\u00e9 un autre tableau dans la chambre du Roi \u00e0 Versailles et a \u00e9t\u00e9 r\u00e9pertori\u00e9 sous inventaire du Roi Louis Philippe."],
	"PERIODEUTILISATION": [],
	"LIEU_LOCALISATION": [{
		"SITE": ["mus\u00e9e Bernard d'Agesci (Niort, b\u00e2t.)"]
	}],
	"ACQUISITION": ["mode d'acquisition particulier"],
	"DATEACQUISITION": {
		"AFFIXE": [""],
		"DEBDATE": ["1950"],
		"FINDATE": [""]
	},
	"PRECISIONADMIN": ["Le tableau est sans doute le tableau peint en 1745 pour la chambre du roi au ch\u00e2teau de Choisy (selon cat. exp. 1999) ; il figure au Salon de 1745. Un tableau attribu\u00e9 \u00e0 Nattier (m\u00eame sujet, m\u00eames dimensions) est adjug\u00e9 63 000 F le 23 juin 1941 (Me Ader) ; il est vendu 25 000 RM par M. Schmit le 20 janvier 1942 au Kaiser-Wilhelm Museum de Krefeld (inv. 265). Il est enregistr\u00e9 au Central Collecting Point de Marbourg sous le n\u00b0 471. Le tableau est attribu\u00e9 au mus\u00e9e du Louvre par l'Office des Biens et Int\u00e9r\u00eats Priv\u00e9s en 1950 et d\u00e9pos\u00e9 au mus\u00e9e des Beaux-Arts de Niort par arr\u00eat\u00e9 du minist\u00e8re de l'Education nationale du 29 mai 1952 (14-5-1952). En 1833, le portrait de Madame Ad\u00e9la\u00efde en Diane part pour Versailles par la volont\u00e9 de Louis Philippe et int\u00e8gre la collection A toutes les gloires de France. Il a donc remplac\u00e9 un autre tableau dans la chambre du Roi \u00e0 Versailles et a \u00e9t\u00e9 r\u00e9pertori\u00e9 sous inventaire du Roi Louis Philippe."],
	"PERSONNE_ANCIENNEAPPARTENANCE": [{
		"ETATCIVIL": ["Kaiser Wilhelm Museum de Krefeld"],
		"NFICHE": ["22535"],
		"DATEAPPARTENANCE": {
			"AFFIXE": [""],
			"DEBDATE": ["20.01.1942"],
			"FINDATE": [""]
		},
		"NUMEROCATALOGUE": ["265"],
		"NIVEAUVISA": ["20"]
	}, {
		"ETATCIVIL": ["Mus\u00e9e du Louvre"],
		"NFICHE": ["32011"],
		"DATEAPPARTENANCE": {
			"AFFIXE": [""],
			"DEBDATE": ["1950"],
			"FINDATE": [""]
		},
		"NUMEROCATALOGUE": [""],
		"NIVEAUVISA": ["20"]
	}],
	"PERSONNE_PROPRIETAIRE": [{
		"ETATCIVIL": ["\u00c9tat"],
		"NFICHE": ["31953"],
		"TYPEPROPRIETE": ["propri\u00e9t\u00e9 de l'\u00c9tat"],
		"NIVEAUVISA": ["20"]
	}],
	"PERSONNE_DEPOSITAIRE": [{
		"ETATCIVIL": ["conservation des mus\u00e9es de la Communaut\u00e9 d'Agglom\u00e9ration du Niortais"],
		"NFICHE": ["30122"],
		"NIVEAUVISA": ["40"]
	}],
	"DATEDEPOT": {
		"AFFIXE": [""],
		"DEBDATE": ["29.05.1952"],
		"FINDATE": [""]
	},
	"FINDATEDEPOT": {
		"AFFIXE": [""],
		"DEBDATE": [""],
		"FINDATE": [""]
	},
	"PERSONNE_SERVICEGESTIONNAIRE": [{
		"ETATCIVIL": ["Mus\u00e9e du Louvre"],
		"NFICHE": ["32011"],
		"NIVEAUVISA": ["20"]
	}],
	"REFACTEACQUISITION": [""],
	"PREMIEREPRESENCE": [],
	"MENTIONS_INVENTAIRE": [],
	"BIBLIO": [{
		"IDENTIFIANT": ["Versailles et l'Antique Paris 2012"],
		"NFICHE": ["171544"],
		"PARAMETRE": ["288-289"],
		"TYPEDOCUMENT": ["catalogue d'exposition"],
		"NIVEAUVISA": ["40"]
	}],
	"PHOTO": [{
		"IDENTIFIANT": ["M0841_952-1-2_p"],
		"NFICHE": ["85811"],
		"PARAMETRE": ["1"],
		"LEGENDE": [""],
		"COPYRIGHT": ["Mus\u00e9e Bernard d'Agesci - Communaut\u00e9 d'Agglom\u00e9ration du Niortais"],
		"TYPEDOCUMENT": ["photographie"],
        "NIVEAUVISA": ["40"],
        "URL": ['image/mnr81.jpg'],
		"URL_1000x1000": "https:\/\/bases.alienor.org\/bin\/image.dll?FI&NC|525235&ND|1&CR|1000&KP|awp&KR|e99796a521653a79630e06f85d9ef3a3",
		"URL_250x250": "https:\/\/bases.alienor.org\/bin\/image.dll?FI&NC|525235&ND|1&CR|250&KP|awp&KR|728fc38bfee706a9aaf1e7fe3e28f687",
		"URL_150x150": "https:\/\/bases.alienor.org\/bin\/image.dll?FI&NC|525235&ND|1&CR|150&KP|awp&KR|505e0d0362540d71d0ccb53ddf3c6bc5"
	}],
	"EXPOSITION": [{
		"IDENTIFIANT": ["Versailles et l'Antique Versailles 2012"],
		"NFICHE": ["171545"],
		"PARAMETRE": ["201"],
		"NIVEAUVISA": ["40"],
		"TYPEDOCUMENT": ["exposition"]
	}],
	"IDENTIFIANTNATIONAL": ["M0841000421"],
	"COPYRIGHT": ["\u00a9 Alienor.org, mus\u00e9es de la Communaut\u00e9 d'Agglom\u00e9ration du Niortais"],
	"DATE_CREATION": ["10.06.1998"],
	"DATE_MODIFICATION": ["22.04.2018 08:31:53"],
	"OPERATEUR_CREATION": ["Texier"],
	"MISEAJOUR": ["22.04.2018"],
	"DATEMISENLIGNE": ["26.12.2012"],
	"NFICHE": ["16682"],
	"CODEMUSEE": ["M0841"],
	"NIVEAUVISA": ["40"]
};
$(document).ready(function(){
    $('#seConnecter').submit(connexion);
    $("#scan").on('click', startScan);
    $('.uneOeuvre .switch').click(function(){retournerTableau();});
});
function validate(){
    $(".parcours img").removeClass("hidden");
    $(".parcours .trouve").removeClass("hidden");
  }
function initMap() {
    var museeAgesci = {lat: 46.323, lng: -0.464};
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 46.323, lng: -0.464},
    zoom: 15,
    styles: [
        {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
        {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
        {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
        {
          featureType: 'administrative.locality',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'poi',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'poi.park',
          elementType: 'geometry',
          stylers: [{color: '#263c3f'}]
        },
        {
          featureType: 'poi.park',
          elementType: 'labels.text.fill',
          stylers: [{color: '#6b9a76'}]
        },
        {
          featureType: 'road',
          elementType: 'geometry',
          stylers: [{color: '#38414e'}]
        },
        {
          featureType: 'road',
          elementType: 'geometry.stroke',
          stylers: [{color: '#212a37'}]
        },
        {
          featureType: 'road',
          elementType: 'labels.text.fill',
          stylers: [{color: '#9ca5b3'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry',
          stylers: [{color: '#746855'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.stroke',
          stylers: [{color: '#1f2835'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'labels.text.fill',
          stylers: [{color: '#f3d19c'}]
        },
        {
          featureType: 'transit',
          elementType: 'geometry',
          stylers: [{color: '#2f3948'}]
        },
        {
          featureType: 'transit.station',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [{color: '#17263c'}]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.fill',
          stylers: [{color: '#515c6d'}]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.stroke',
          stylers: [{color: '#17263c'}]
        }
      ],
      zoomControl: true,
      disableDefaultUI: true
  });
  var marker = new google.maps.Marker({position: museeAgesci, map: map,label:"7"});
}

/** @description Connecte l'utilisateur
 * @param {e} évènement au clic
 * @return {boolean}  true si connecté, false si mauvais identifiants
 */
function connexion(e){
    e.preventDefault();
    class Utilisateur{
        constructor(id,nom,prenom,pseudo,adresse,email,password){
            this.id = id,
            this.nom = nom,
            this.prenom = prenom,
            this.pseudo = pseudo,
            this.adresse = adresse,
            this.email = email,
            this.password = password
        }
        connect(pseudo,password){
            //console.log(pseudo);
            ////console.log(password);
            if((this.pseudo == pseudo)&&(this.password == password)){
                return true;
            }else{
                return false;
            }
        }
        getPseudo(){
            return this.pseudo;
        }
        getPrenom(){
            return this.prenom;
        }
        getNom(){
            return this.nom;
        }
    }
    var guillaume = new Utilisateur(1,'CAPELLE','Guillaume','gmb','niort','gmb.capelle@gmail.com','mdp');
    let pseudo = $('.connexion input#pseudo').val();
    let mdp = $('.connexion input#password').val();
    if(guillaume.connect(pseudo,mdp)){
        let prenom = guillaume.getPrenom();
        let nom = guillaume.getNom();
        $('#identite').append('Bienvenu '+guillaume.getPrenom()+' '+guillaume.getNom());
        utilisateur = guillaume;
        //console.log(utilisateur);
        goToPage('.googleMap');
        showAlert('Vous êtes bien connecté.','#70b7bd');
    }else{
        showAlert('Identifiants incorrects.','red');
    }
}

/** @description Déconnecte l'utilisateur actuel
 * @param {e} évènement au clic
 * @return {boolean}
 */
function deconnexion(e){
    e.preventDefault();
    utilisateur = "";
    goToPage('choixUtilisateur');
}

/** @description Affiche la page entrée en parametre
 * @param {string} page la classe de la page / ne pas oublier le .
 * @return {nothing}
 */
function goToPage(page){
    $('.page').each(function(){
        $(this).removeClass('active');
        $(this).addClass('hidden');
    }),
        $(page).addClass('active');
        $(page).removeClass('hidden');
}

function showAlert(message,couleur){
    $('.alert').text(message);
    $('.alert').css('background-color',couleur);
    $('.alert').css('top','0px');
    setTimeout(function(){ $('.alert').css('top','-150px'); }, 2000);
}

function startScan() {
		$("code").html('scanning');
		$('#qr').html5_qrcode(function(data){
		         // do something when code is read
		         console.log('Oeuvre scannée ' +data);
                 $("#qr").html5_qrcode_stop();
                 $("#qr").css('background','none');
                 $("#qr").append('<button onclick="goToPage('+data+')">Voir l\'oeuvre</button>');
		    },
		    function(error){
		        //show read errors
		        console.log('Impossible de scanner le code: ' +error)
		    }, function(videoError){
		        //the video stream could be opened
		        console.log('Erreur vidéo');
            });

	$("#stop").on('click', function() {
		$("#qr").html5_qrcode_stop();
	});
	$("#change").on('click', function() {
		$("#qr").html5_qrcode_changeCamera();
	})
};

function loadOeuvre(id){
    console.log(id);
}

function readText(that){
        let test = 'assets/donnees/alienor/'+that+'.txt';
        console.log(test.files);
        if(test.files && test.files[0]){
            var reader = new FileReader();
            reader.onload = function (e) {
                var output=e.target.result;

                document.getElementById('container').innerHTML= output;
            };
            reader.readAsText(test.files[0]);
        }
    }

function retournerTableau(){
    if($('.uneOeuvre img.dos').hasClass('hidden')){
        $('.uneOeuvre img.front').addClass('hidden');
        $('.uneOeuvre img.dos').removeClass('hidden');
        $('.uneOeuvre .descriptionsPrecises').removeClass('hidden');
        $('.uneOeuvre .descriptionsGenerales').addClass('hidden');
    }else{
        $('.uneOeuvre img.front').removeClass('hidden');
        $('.uneOeuvre img.dos').addClass('hidden');
        $('.uneOeuvre .descriptionsPrecises').addClass('hidden');
        $('.uneOeuvre .descriptionsGenerales').removeClass('hidden');
    }
} 

function clicked(){
    $('i.checker').removeClass('fa-square');
    $('i.checker').addClass('fa-check-square');
}