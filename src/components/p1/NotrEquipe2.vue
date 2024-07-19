<template>
  <div class="tot">
    <header>
      <div id="parti1">
        <div id="world"></div>
        <div class="bg"></div>
        <div class="cent">
          <p id="tit">Rejoignez Notre Équipe</p>
          <div id="content">
            <p id="text">
              Vous êtes passionné par le développement logiciel digital et
              souhaitez travailler dans un environnement stimulant et innovant
              ?<br> Chez Sw Consulting, nous recherchons des talents créatifs
              et motivés pour rejoindre notre équipe en pleine croissance. Nous
              offrons des opportunités de carrière enrichissantes, des projets
              passionnants, et un cadre de travail collaboratif. Consultez nos
              offres d'emploi ci-dessous et découvrez comment vous pouvez
              contribuer à façonner l'avenir de la technologie avec nous.
              Postulez dès aujourd'hui et faites partie d'une équipe où vos
              compétences et vos idées seront valorisées.
            </p>
          </div>
        </div>
        <a href="#par2">
      <img src="../../assets/Frame 18.png" alt="flesh" id="flesh" >
      </a>       </div>
    </header>
    <div id="par2">
      <p id="titre">Rejoins notre équipe</p>
      <div class="tab1">
        <span class="t1">Développeur Laravel</span>
        <tr>
          <td>
            <span class="t2">Bouhjar, Tunisia / Backend / Full-time</span>
          </td>
          <td>
            <a href="#bas">Postuler maintenant</a>
          </td>
        </tr>
      </div>
      <div>
        <p class="t1">Notre entreprise :</p>
        <p class="t2">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur.
        </p>
        <p class="t1">Votre rôle dans l'équipe :</p>
        <p class="t2">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit .
        </p>
        <p class="t1">Expérience :</p>
        <p class="t2">
          <ul>
            <li>
              <u>5+ ans d'expérience</u>en développement PHP avec une forte
              expertise en Laravel.
            </li>
            <li>
              Solide connaissance des concepts fondamentaux de Laravel, y
              compris Eloquent ORM, migrations, et services.
            </li>
            <li>
              <u>Expérience confirmée</u> en conception et développement
              d'applications web complexes et évolutives.
            </li>
            <li>
              <u>Maîtrise </u>des bases de données relationnelles, en particulier
              MySQL, ainsi que des bases de données NoSQL.
            </li>
            <li>
              <u>Excellente compréhension </u>des principes de conception
              orientée objet et des modèles de conception (Design Patterns).
            </li>
            <li>
              <u>Connaissance en développement frontend :</u> bonne connaissance
              de HTML, CSS, JavaScript, et des frameworks frontend comme Vue.js
              ou React.
            </li>
            <li>
              <u>Expérience avec les API RESTful :</u> conception, implémentation,
              et consommation.
            </li>
            <li>
              <u>Maîtrise </u>des outils de gestion de version tels que Git.
            </li>
            <li>
              <u>Expérience </u>avec les environnements de développement et de
              déploiement : Docker, CI/CD, etc.
            </li>
          </ul>
        </p>
        <div id="bas">
          <p id="tit2">Soumettez votre candidature.</p>
          <p class="t1">Attach your résume :</p>
          <button id="Choose">Choose a file</button><span class="t2">Résume required *</span><br>
          <div class="form-container">
            <label class="t1">Full Name</label><br>
            <input type="text" placeholder="Eg. William"><br>

            <label class="t1">Email:</label><br>
            <input type="email" placeholder="Eg. william@example.com"><br>

            <label class="t1">Téléphone :</label><br>
            <input type="tel" placeholder="Eg. +000 12345678"><br>

            <label class="t1">Current Company :</label><br>
            <input type="text" placeholder="Eg. Sw Consulting"><br>

            <label class="t1">LinkedIn Link :</label><br>
            <input type="url" placeholder="Eg. https://linkedin.com/"><br>

            <label class="t1">GitHub Link :</label><br>
            <input type="url" placeholder="Eg. https://github.com/"><br>

            <label class="t1">Additional Informations :</label><br>
            <textarea placeholder="Eg. Message" rows="4"></textarea><br>
            <button id="envo">Envoyer</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ConneCte',
  data() {
    return {
      isMenuVisible: false
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuVisible = !this.isMenuVisible;
      if (this.isMenuVisible) {
        this.$refs.menuIcon.classList.add("change");
      } else {
        this.$refs.menuIcon.classList.remove("change");
      }
    },
    hideMenuOnClickOutside(event) {
      const navv = this.$refs.navv;
      const menuIcon = this.$refs.menuIcon;
      if (navv && menuIcon && !navv.contains(event.target) && !menuIcon.contains(event.target)) {
        this.isMenuVisible = false;
        menuIcon.classList.remove("change");
      }
    }
  },
  mounted() {
    document.addEventListener('click', this.hideMenuOnClickOutside);
  },
  beforeDestroy() {
    document.removeEventListener('click', this.hideMenuOnClickOutside);
  }
};
</script>

  <style scoped>

#Choose {
    width: 286px;
    height: 69px;
    border-radius: 5px;
    background-color: #214367;
    color: #FFFFFF;
    font-size: 16px;
    border: none;
    cursor: pointer;
    position: absolute;
}
.tot{
  font-family: 'Poppins', sans-serif;
    background-color: #f0f0f0;
}
tr {
    display: grid;
    grid-template-columns: auto auto;
    column-gap: 20px; 
  }
#envo{
    width: 286px;
    height: 69px;
    border-radius: 5px;
    background-color: #214367;
    color: #FFFFFF;
    font-size: 16px;
    border: none;
    margin-left: 30%;
}
#Choose:hover {
    background-color: #1a3753;
}
#envo:hover{
    background-color: #1a3753;
}
input[type="text"],
input[type="email"],
input[type="tel"],
input[type="url"],
textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
}

textarea {
    resize: vertical;
}
#tit2{
    top: 729px;
    left: 55px;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 40px;
    line-height: 60px;
    color: #000000;}
  #titre {
    top: 729px;
    left: 55px;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 40px;
    line-height: 60px;
    color: #000000;
  }
 .tab1 {
    top: 934px;
    left: 631px;
    border-radius: 10px;
    box-shadow: 0 2px 3px 0 rgba(0, 0, 0.15, 1), 0 4px 4px 0 rgba(0, 0, 0.5, 1);
    grid-template-columns: 90% 10%;
    padding: 2px;
  }
 
  router-link {
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  font-size: 22px;
  line-height: 36px;
  color: #8A8A8A;
  margin-right: 100px;
}
  header {
    width:100%;
  height: 650px;
  background-color: #214367;
  color: #FFFFFF;
}
#par2{
    width: 90%; /* Ajustez la largeur du conteneur principal selon vos besoins */
    margin: 0 auto; /* Pour centrer le contenu horizontalement */
    padding: 20px;
    font-family: 'Poppins', sans-serif;
    background-color: #f0f0f0;
}
input[type="button"] {
  width: 211px;
  height: 38px;
  border-radius: 10px;
  background-color: #AABDCF;
  color: white;
  border: none;
  cursor: pointer;
  margin-top: 20px;
}

input[type="button"]:hover {
  background-color: #849bb1;
}

#tit {
  width: 766px;
  height: 180px;
  position: absolute;
  font-size: 2.5em;
  top: 177px;
  left: 86px;
  opacity: 1;
  line-height: 40.5px;
}

#content {
  width: 50%;
  position: absolute;
  top: 349px;
  left: 87px;
  font-size: 1.2em;
  line-height: 1.5em;
}

#con {
  background-color: transparent;
  color: white;
  border-radius: 5px;
  border: 2px solid white;
}

#con:hover {
  background-color: #FFFFFF;
  color: #214367;
  border: transparent;
}

#world {
  background-image: url("../../assets/bghoto.png");
  width: 25%;
  height: calc(27vw + 20%);
  position: absolute;
  right: 0;
  bottom: 5%;
  animation: moveBackground 10s linear infinite;
}
#text{
  width: 120%;
      height: 180px;
      top:-100px;
      position: absolute;
      font-family: 'Poppins', sans-serif;
      font-weight: 400;
      font-size: 20px;
      line-height: 30px;
      color: #FFFFFF;
      padding: 20px; 
      box-sizing: border-box;
  }
.bg {
  background-image: url("../../assets/Frame 16 (3).png");
  width: 25%;
  height: calc(25.5vw + 20%);
  position: absolute;
  background-size: contain;
  background-repeat: no-repeat;
  margin-right: 40px;
  bottom: 5%;
  right: 0;
}

#flesh {
  height: calc(5.5vw + 5%);
  position: absolute;
  transform: translateX(-50%);
  left: 75%;
  top: 540px;
  transition: transform 0.3s ease-in-out;
}

#flesh:hover {
  transform: translateX(-50%) scale(1.1);
}

@keyframes moveBackground {
  0% {
    background-position: 100% 0;
  }
  100% {
    background-position: 0 0;
  }
}

.t1 {
  top: 1030px;
  left: 86px;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 24px;
  line-height: 43.5px;
  color: #000000;
}
.t2 {
  top: 989px;
  left: 649px;
  font-family: 'Poppins', sans-serif;  
  font-weight: 300;
  font-size: 22px;
  line-height: 36px;
  color: #8A8A8A;
  width: 100%;
}
td .t2{
  width: 80%;
}
td .t1{
  width: 20%;
  margin-right: 100px;
}
@media screen and (max-width: 880px) {
 header{ height: 730px;}
}
@media screen and (max-width: 667px) {
  #flesh,
  #navv,
  .bg,
  #world {
    display: none;
    background-color: #214367;
  }
  #welcome {
    width: 100%;
    height: auto;
    position: relative;
  }
  #dem {
    display: none;
  }
  #text{
    text-align: center;
    top: 100px;
  }
  #tit {
    font-size: 27px;
    font-weight: 700;
    line-height: 40.5px;
    text-align: center;
    width: 371px;
    top: 120px;
    left: 12%;
  }
  #content{
    top: 200px;
    margin-left: 30px;
  }
  header{
    height: 800px;
  }
}


</style>

  