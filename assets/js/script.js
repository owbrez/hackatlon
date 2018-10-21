var utilisateur = "";
var map;
$(document).ready(function () {
    $('#seConnecter').submit(connexion);
    $("#scan").on('click', startScan);
    readText('MNR-80');
});
function initMap() {
    var museeAgesci = { lat: 46.323, lng: -0.464 };
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 46.323, lng: -0.464 },
        zoom: 15,
        styles: [
            { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
            { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
            { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
            {
                featureType: 'administrative.locality',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#d59563' }]
            },
            {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#d59563' }]
            },
            {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [{ color: '#263c3f' }]
            },
            {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#6b9a76' }]
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{ color: '#38414e' }]
            },
            {
                featureType: 'road',
                elementType: 'geometry.stroke',
                stylers: [{ color: '#212a37' }]
            },
            {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#9ca5b3' }]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{ color: '#746855' }]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{ color: '#1f2835' }]
            },
            {
                featureType: 'road.highway',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#f3d19c' }]
            },
            {
                featureType: 'transit',
                elementType: 'geometry',
                stylers: [{ color: '#2f3948' }]
            },
            {
                featureType: 'transit.station',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#d59563' }]
            },
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{ color: '#17263c' }]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#515c6d' }]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.stroke',
                stylers: [{ color: '#17263c' }]
            }
        ],
        zoomControl: true,
        disableDefaultUI: true
    });
    var marker = new google.maps.Marker({ position: museeAgesci, map: map, label: "7" });
}

/** @description Connecte l'utilisateur
 * @param {e} évènement au clic  
 * @return {boolean}  true si connecté, false si mauvais identifiants
 */
function connexion(e) {
    e.preventDefault();
    class Utilisateur {
        constructor(id, nom, prenom, pseudo, adresse, email, password) {
            this.id = id,
                this.nom = nom,
                this.prenom = prenom,
                this.pseudo = pseudo,
                this.adresse = adresse,
                this.email = email,
                this.password = password
        }
        connect(pseudo, password) {
            //console.log(pseudo);
            ////console.log(password);
            if ((this.pseudo == pseudo) && (this.password == password)) {
                return true;
            } else {
                return false;
            }
        }
        getPseudo() {
            return this.pseudo;
        }
        getPrenom() {
            return this.prenom;
        }
        getNom() {
            return this.nom;
        }
    }
    var guillaume = new Utilisateur(1, 'CAPELLE', 'Guillaume', 'gmb', 'niort', 'gmb.capelle@gmail.com', 'mdp');
    let pseudo = $('.connexion input#pseudo').val();
    let mdp = $('.connexion input#password').val();
    if (guillaume.connect(pseudo, mdp)) {
        let prenom = guillaume.getPrenom();
        let nom = guillaume.getNom();
        $('#identite').append('Bienvenu ' + guillaume.getPrenom() + ' ' + guillaume.getNom());
        utilisateur = guillaume;
        //console.log(utilisateur);
        goToPage('.googleMap');
        showAlert('Vous êtes bien connecté.', '#70b7bd');
    } else {
        showAlert('Identifiants incorrects.', 'red');
    }
}

/** @description Déconnecte l'utilisateur actuel
 * @param {e} évènement au clic  
 * @return {boolean}  
 */
function deconnexion(e) {
    e.preventDefault();
    utilisateur = "";
    goToPage('choixUtilisateur');
}

/** @description Affiche la page entrée en parametre 
 * @param {string} page la classe de la page / ne pas oublier le . 
 * @return {nothing}  
 */
function goToPage(page) {
    $('.page').each(function () {
        $(this).removeClass('active');
        $(this).addClass('hidden');
    }),
        $(page).addClass('active');
    $(page).removeClass('hidden');
}

function showAlert(message, couleur) {
    $('.alert').text(message);
    $('.alert').css('background-color', couleur);
    $('.alert').css('top', '0px');
    setTimeout(function () { $('.alert').css('top', '-150px'); }, 2000);
}

function startScan() {
    $("code").html('scanning');
    $('#qr').html5_qrcode(function (data) {
        // do something when code is read
        console.log('Oeuvre scannée ' + data);
        $("#qr").html5_qrcode_stop();
        $("#qr").css('background', 'none');
        $("#qr").append('<button onclick="goToPage(' + data + ')">Voir l\'oeuvre</button>');
    },
        function (error) {
            //show read errors 
            console.log('Impossible de scanner le code: ' + error)
        }, function (videoError) {
            //the video stream could be opened
            console.log('Erreur vidéo');
        });

    $("#stop").on('click', function () {
        $("#qr").html5_qrcode_stop();
    });
    $("#change").on('click', function () {
        $("#qr").html5_qrcode_changeCamera();
    })
};

function loadOeuvre(id) {
    console.log(id);
}

function readText(url) {
    let oeuvre = $.getJSON('assets/donnees/alienor/'+url+'.txt', function (data) {
        console.log(oeuvre);
    });
}