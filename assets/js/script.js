var utilisateur = "";
$(document).ready(function(){
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
            if((this.pseudo == pseudo)&&(this.password = password)){
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
    $('#connection').click(connexion);
    var guillaume = new Utilisateur(1,'CAPELLE','Guillaume','gmb','niort','gmb.capelle@gmail.com','mdp');
});

/** @description Connecte l'utilisateur
 * @param {e} évènement au clic  
 * @return {boolean}  true si connecté, false si mauvais identifiants
 */  

function connexion(e){
    e.preventDefault();
    let pseudo = $('form#connexion input#pseudo').val();
    let mdp = $('form#connexion input#mdp').val();
    if(guillaume.connect(pseudo,mdp)){
        let prenom = guillaume.getPrenom();
        let nom = guillaume.getNom();
        $('#identite').append('Bienvenu '+guillaume.getPrenom()+' '+guillaume.getNom());
        utilisateur = guillaume;
        console.log(utilisateur);
        goToPage('home');
    }else{
        showAlert('Vos identifiants ne correspondent à aucun compte.')
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
    }),
    $(page).addClass('active');
}

function showAlert(message,couleur){
    $('.alert').text(message);
    $('.alert').css('color',color);
    $('.alert').css('top','-999px');
    setTimeout(function(){ $('.alert').css('top','-999px'); }, 3000);
}

