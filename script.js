const search_content = document.getElementById("search_content");
const home = document.getElementById("home");
const big_content = document.getElementById("big_content");
let historique = [];
function BoutonContent(type){

// Reglage de l'application

if (type==="reglage"){
       home.innerHTML = `<div class="option">Paramètre</div>`;
       search_content.innerHTML = `<div class="js-search-content">

                                      <div class="reglage-option">
                                         <button class="btn-option" onclick="OpenOption('general')">
                                            <p  class="titre"><img class="logo-option-js" src="images/vue-frontale-ouverte-de-lordinateur-portable-avec-boutons-et-ecran-vide.png" alt="">Général</p>
                                            <p class="s-titre">Langue, taille de police</p>
                                         </button>
                                         <button class="btn-option" onclick="OpenOption('profil')">
                                            <p class="titre"><img class="logo-option-js" src="images/profil.png" alt="">Profil</p>
                                            <p class="s-titre">Nom ,prénom et photo de profil </p>
                                         </button>
                                         <button class="btn-option" onclick="OpenOption('perso')">
                                            <p class="titre"><img class="logo-option-js" src="images/personnalisation.png" alt="">Personnalisations</p>
                                            <p class="s-titre">Fond d'écran, couleur de fond....</p>
                                         </button>
                                         <button class=btn-option onclick="OpenOption('discussion')">
                                              <p class="titre"><img class="logo-option-js" src="images/chat-a-bulles.png" alt="">Discussions</p>
                                              <p class="s-titre">Thème de chat et personalisation du chat</p>
                                         </button>
                                         <button class="btn-option" onclick="OpenOption('notification')">
                                              <p class="titre"><img class="logo-option-js" src="images/notification.png" alt="">Notification</p>
                                              <p class="s-titre">Messages, groupes et sons</p>
                                         </button>
                                         
                                      </div>
                                      
                                   </div>`;


   }
}

// fonction pour ouvrir les options
function OpenOption(type){

    historique.push(search_content.innerHTML);

    if (type==="general"){
        home.innerHTML = `<div class="option">Général</div>`
        search_content.innerHTML = `
                                    <div class="js-search-content">
                                       <button onclick="Retour()" id="back">
                                         <img class="back-icon" src="images/fleche-gauche.png" alt="touche retour">
                                      </button><br>
                                    </div>
                                   `
    }

    else if (type==="profil"){
        home.innerHTML = `ceci est les reglage de profil`
    }

    else if (type==="perso"){
        home.innerHTML = `<div class="option">Personnalisations</div>`
        search_content.innerHTML = `
                                    <div class="js-search-content">
                                      <button onclick="Retour()" id="back">
                                         <img class="back-icon" src="images/fleche-gauche.png" alt="touche retour">
                                      </button><br>
                                      <div class="reglage-option">
                                        <button onclick="ThemeApp('theme')" class="btn-option">
                                            <p class="titre"><img class="logo-option-js" src="images/fond.png" alt="">Thème de l'application</p>
                                            <p class="s-titre">Couleur de fond de l'application</p>
                                        </button>
                                        <button onclick="ThemeApp('fond')" class="btn-option">
                                            <p class="titre"><img class="logo-option-js" src="images/fond-decran.png" alt="">Fonds d'écran</p>
                                            <p class="s-titre">Fond d'écran de discussion et de l'application</p>
                                        </button>
                                        <button onclick="ThemeApp('ecriture')" class="btn-option">
                                            <p class="titre"><img class="logo-option-js" src="images/police-de-caractere.png" alt="">Réglage des écritures</p>
                                            <p class="s-titre">Style, police et couleur des écriture</p>
                                        </button>
                                        <button>
                                        
                                        </button>
                                     </div>
                                    </div>
                                   `
    }

    else if (type==="discussion"){
            home.innerHTML = `ceci est les reglage de discussion`
    }

    else if (type==="notification"){
            home.innerHTML = `ceci est les reglage de notification`
    }
}

// fonction du reglage du theme de l'appliction
function ThemeApp(theme){

    historique.push(search_content.innerHTML);

    if (theme==="theme"){
        search_content.innerHTML = `<div class="js-search-content">
                                       <button onclick="Retour()" id="back">
                                         <img class="back-icon" src="images/fleche-gauche.png" alt="touche retour">
                                      </button><br>
                                       <div class="reglage-option">
                                           <button onclick="OpenTheme('themeapk')" class="btn-option">
                                              <p class="titre"><img class="logo-option-js" src="images/theme3.png" alt="">Thème</p>
                                              <p class="s-titre">Claire, sombre</p>
                                           </button>
                                           <button onclick="OpenTheme('fondapk')" class="btn-option">
                                              <p class="titre"><img class="logo-option-js" src="images/theme-dechantillon-de-couleur.png" alt="">Couleur de fond de l'application</p>
                                              <p class="s-titre">Différentes couleurs</p>
                                           </button>
                                           <button onclick="OpenTheme('iconesapk')" class="btn-option">
                                              <p class="titre"><img class="logo-option-js" src="images/couleur.png" alt="">Couleur de fond d'icones</p>
                                              <p class="s-titre">Différents types d'icones</p>
                                           </button>
                                       </div>
                                    </div>`
    }

    else if (theme==="fond"){
        home.innerHTML = `<div class="js-search-content">
                             <div class="theme-apk">
                             <h1>Les fonds d'écran de l'application</h1>
                                <div class="reglage-option">
                                  <div class="box-btn-fonds-ecran">
                                     <button class="btn-fonds-ecran">
                                        Fonds d'écran vert
                                        <img id="vert-fond" class="btn-fonds" src="fonds/497175.png" alt="">
                                     </button>
                                     <label class="switch">
                                          <input type="checkbox" id="FondVert">
                                          <span class="slider"></span>
                                      </label>
                                  </div>
                                  <div class="box-btn-fonds-ecran">
                                     <button class="btn-fonds-ecran">
                                         Fond d'écran bleue 
                                         <img class="btn-fonds" src="fonds/354971.jpg" alt="">
                                     </button>
                                     <label class="switch">
                                          <input type="checkbox" id="activation">
                                          <span class="slider"></span>
                                      </label>
                                  </div>
                                  <div class="box-btn-fonds-ecran">
                                      <button class="btn-fonds-ecran">
                                         Fond d'écran rose 
                                         <img class="btn-fonds" src="fonds/669283.jpg" alt="">
                                      </button>
                                      <label class="switch">
                                          <input type="checkbox" id="activation">
                                          <span class="slider"></span>
                                      </label>
                                  </div>
                                  <div class="box-btn-fonds-ecran">
                                      <button class="btn-fonds-ecran">
                                         Fond d'écran rouge
                                         <img class="btn-fonds" src="fonds/118285.jpg" alt="">
                                      </button>
                                      <label class="switch">
                                          <input type="checkbox" id="activation">
                                          <span class="slider"></span>
                                      </label>
                                  </div>
                                  <div class="box-btn-fonds-ecran">
                                      <button class="btn-fonds-ecran">
                                         Fond d'écran violet
                                         <img class="btn-fonds" src="fonds/418894.jpg" alt="">
                                      </button>
                                      <label class="switch">
                                          <input type="checkbox" id="activation">
                                          <span class="slider"></span>
                                      </label>
                                  </div>
                                </div>
                             </div>
                          </div>`

        const FondVert = document.getElementById("FondVert")
        FondVert.addEventListener('change', () => {

            if (FondVert.checked) {
                big_content.classList.add('Fond-ecran-vert')
            }

            else{
                big_content.classList.remove('Fond-ecran-vert')
            }
        })

    }

    else if (theme==="ecriture"){
        home.innerHTML = `ceci est les reglage de ecriture`
    }
}

// fonction pour desactiver les boutons
function DesactiverAutres(boutonActif){

    const boutons = [
        document.getElementById("BleueColor"),
        document.getElementById("RoseColor"),
        document.getElementById("RougeColor"),
        document.getElementById("VioletColor")
    ];

    boutons.forEach(bouton => {

        if(bouton && bouton !== boutonActif){
            bouton.checked = false;
        }

    });

}

//fonction pour desactiver les theme
function EnleverThemes(){

    big_content.classList.remove("theme-bleue");
    big_content.classList.remove("theme-rose");
    big_content.classList.remove("theme-rouge");
    big_content.classList.remove("theme-violet");

}

function OpenTheme(theme){
    if (theme==="themeapk"){
        home.innerHTML = `
                          <div class="js-search-content">
                            <div class="theme-apk">
                              <h1 class="titre-option">Thème de l'application</h1>
                              <h2 class="s-titre-option">Thème sombre et thème claire</h2>
                              <label class="switch">
                                 <input type="checkbox" id="activation">
                                 <span class="slider"></span>
                              </label>
                            </div>
                          </div>
                         `
        const activation = document.getElementById("activation");

        activation.addEventListener("change", () => {

            if (activation.checked) {

                EnleverThemes();
                big_content.classList.add("theme-light");
                home.style.border = "none";
                console.log("Thème clair activé");

            } else {

                big_content.classList.remove("theme-light");
                console.log("Thème sombre activé");

            }

        });
    }

    else if (theme==="fondapk"){
        home.innerHTML = `
                            <div class="js-search-content">
                               <div class="theme-apk">
                                 <h1>Les couleurs de fonds</h1>
                                    <button class="bouton-color">
                                       Couleur de fond bleue
                                        <label class="switch">
                                          <input type="checkbox" id="BleueColor">
                                          <span class="slider"></span>
                                        </label>
                                    </button>
                                    <button class="bouton-color">
                                       Couleur de fond rose
                                       <label class="switch">
                                          <input type="checkbox" id="RoseColor">
                                          <span class="slider"></span>
                                        </label>
                                    </button>
                                    <button class="bouton-color">
                                       Couleur de fond rouge
                                       <label class="switch">
                                          <input type="checkbox" id="RougeColor">
                                          <span class="slider"></span>
                                        </label>
                                    </button>
                                    <button class="bouton-color">
                                       Couleur de fond violet
                                       <label class="switch">
                                          <input type="checkbox" id="VioletColor">
                                          <span class="slider"></span>
                                        </label>
                                    </button>
                               </div>
                            </div>
<!-- fonction pour couleur de fond bleue-->                     `

       const BleueColor = document.getElementById("BleueColor");
        BleueColor.addEventListener("change", () => {

            if (BleueColor.checked) {

                DesactiverAutres(BleueColor);
                EnleverThemes();

                big_content.classList.add("theme-bleue");
            }

            else {
                big_content.classList.remove("theme-bleue");
            }
        })

        // fonction pour couleur de fond rose

        const RoseColor = document.getElementById("RoseColor");
        RoseColor.addEventListener("change", () => {
            if (RoseColor.checked) {

                DesactiverAutres(RoseColor);
                EnleverThemes();

                big_content.classList.add("theme-rose");

            }
            else {
                big_content.classList.remove("theme-rose");
            }
        })

        //fonction pour couleur de fond rouge

        const RougeColor = document.getElementById("RougeColor");
        RougeColor.addEventListener("change", () => {

            if (RougeColor.checked) {

                DesactiverAutres(RougeColor);
                EnleverThemes();
                big_content.classList.add("theme-rouge");
            }

            else{
                big_content.classList.remove("theme-rouge");
            }
        })

    // fonction pour couleur de fonds violet
        const VioletColor = document.getElementById("VioletColor");
        VioletColor.addEventListener("change", () => {
            if (VioletColor.checked) {

                DesactiverAutres(VioletColor);
                EnleverThemes();
                big_content.classList.add("theme-violet");
            }

            else {
                big_content.classList.remove("theme-violet");
            }
        })
    }
}

function ButtonContent(type){
    if (type==="acceuil"){
        search_content.innerHTML = `ceci est l'acceuil`
        home.innerHTML = `ceci est l'acceuil`;
    }
}

function Retour(){

    if(historique.length > 0){

        search_content.innerHTML = historique.pop();

    }

}



