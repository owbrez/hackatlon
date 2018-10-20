var utilisateur = "";
$(document).ready(function(){
    $('#seConnecter').submit(connexion);
    $("#camera").click(function(){
        const video = document.querySelector('#affichageQRcode');
        navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => { video.srcObject = stream });
    });
});

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
        goToPage('home');
        showAlert('Vous êtes bien connecté.','green');
    }else{
        showAlert('Une erreur est survenue dans vos identifiants.','red');
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
        $(this).css('transform','scale(O.8)');
        $(this).addClass('hidden');
        $(this).removeClass('active');
    }),
        $(page).removeClass('hidden');
        $(page).addClass('active');
}

function showAlert(message,couleur){
    $('.alert').text(message);
    $('.alert').css('background-color',couleur);
    $('.alert').css('top','0px');
    setTimeout(function(){ $('.alert').css('top','-150px'); }, 2000);
}

