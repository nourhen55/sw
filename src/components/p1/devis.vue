<template>
  <div>
    <header>
      <div>
        <div id="world"></div>
        <div class="bg"></div>
        <div class="cent">
          <p id="tit">Obtenez Votre Devis Gratuit</p>
          <p id="text">Vous avez un projet de développement logiciel digital en tête ?<br>
            Nous sommes là pour transformer vos idées en réalité. Remplissez le 
            formulaire ci-dessous pour obtenir un devis gratuit et personnalisé. 
            Notre équipe vous répondra dans les plus brefs délais pour discuter de 
            vos besoins et vous proposer une solution sur mesure.
          </p>
        </div>
        <a href="#totpag">
          <img src="../../assets/Frame 18.png" alt="flesh" id="flesh" >
        </a>
      </div>
    </header>
    <div id="totpag">
      <div id="p1">
        <p>Obtenez votre devis gratuit instantané maintenant</p>
        <p>Vous pouvez nous appeler directement sur nos numéros de téléphone disponibles ici.</p>
        <div id="numb">
          <br> <img src="../../assets/image.png" width="30px">+216 52 298 514<br><br>
          <br> <img src="../../assets/image.png" width="30px">+216 52 298 514<br><br>
          <br> <img src="../../assets/image.png" width="30px">+216 52 298 514<br><br>
        </div>
        <p>Vous pouvez nous envoyer directement sur nos emails disponibles ici.</p>
        <img src="../../assets/message11.png" width="30px">ContactSWConsulting@gmail.com<br><br>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.268389978163!2d10.860789500000001!3d35.6703929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x130211a2bc90c5ed%3A0xab3e2f549428606b!2sSWConsulting!5e0!3m2!1sfr!2stn!4v1718291600067!5m2!1sfr!2stn" width="100%" height="400px" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div id="info">
        <!-- Form for collecting user information -->
        <div class="pren">
          <div class="input-wrapper">
            <label for="nom">Nom:<span>*</span></label>
            <input type="text" id="nom" v-model="nom" placeholder="Eg. william"><br>
          </div>
          <div class="input-wrapper">
            <label for="prenom">Prénom:<span>*</span></label>
            <input type="text" id="prenom" v-model="prenom" placeholder="Eg. william"><br>
          </div>
        </div>
        <div class="emanumb">
          <div class="input-wrapper">
            <label for="email">Email:<span>*</span></label>
            <input type="email" id="email" v-model="email" placeholder="Eg. william@exemple.com"><br>
          </div>
          <div class="input-wrapper">
            <label for="telephone">Téléphone:<span>*</span></label>
            <input type="tel" id="telephone" v-model="telephone" placeholder="+000 000 000 000 000"><br>
          </div>
        </div>
        <div class="pren">
          <div class="input-wrapper">
            <label for="entreprise">Nom de l'entreprise</label>
            <input type="text" id="entreprise" v-model="entreprise" placeholder="Eg. Sw Consulting"><br>
          </div>
          <div class="input-wrapper">
            <label for="secteur">Secteur d'activité</label>
            <input type="text" id="secteur" v-model="secteur" placeholder="Eg. Transport"><br>
          </div>
        </div>
        <div class="sujet">
          <label for="siteWeb">Site web de l'entreprise</label>
          <input type="text" id="siteWeb" v-model="siteWeb" placeholder="Eg. www.exemple.comt"><br>
        </div>
        <div class="message">
          <label for="description">Description du projet <span>*</span></label><br>
          <textarea id="description" v-model="description" rows="4" placeholder="Eg. william"></textarea>
        </div>
        <div class="fichier">
          <label for="fich">Documents ou fichiers joints:</label><br>
          <div class="ff"><br>
            <input type="file" id="file">
          </div>
          <label for="file" class="custom-file-upload">
            <img src="../../assets/devv.png" width="20px">
            <br>Glissez-déposez, ou cliquez ici
          </label>
        </div>
        <form @submit.prevent="envoyer"></form>
        <br><br>
        <button type="submit" @click="envoyer"> <img src="../../assets/box.png" id="box">Envoyer</button>
      </div>
    </div>
  </div>
</template>
<script>
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import app from '../../firebase/firebaseConfig.js'; // Import the Firebase instance

const db = getFirestore(app); // Initialize Firestore

export default {
  name: 'ConneCte',
  data() {
    return {
      nom: '',
      prenom: '',
      email: '',
      telephone: '',
      entreprise: '',
      secteur: '',
      siteWeb: '',
      description: ''
    };
  },
  methods: {
    async envoyer() {
      this.errorMessage = '';  
      try {
        await addDoc(collection(db, 'devis'), {
          nom: this.nom,
          prenom: this.prenom,
          email: this.email,
          telephone: this.telephone,
          entreprise: this.entreprise,
          secteur: this.secteur,
          siteWeb: this.siteWeb,
          description: this.description
        });
        alert('Les informations ont été envoyées avec succès');
        this.nom = '';
        this.prenom = '';
        this.email = '';
        this.telephone = '';
        this.entreprise = '';
        this.secteur = '';
        this.siteWeb = '';
        this.description = '';
      } catch (error) {
        console.error('Erreur lors de l\'envoi des informations:', error);
        this.errorMessage = 'Erreur lors de l\'envoi des informations';  
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
input[type="file"] {
  display: none;
}
.custom-file-upload {
  color: transparent;
  width: 100%;
  height: 129px;
  background-color: #E6EFF8;
  border: 5px dotted #3D6289;
  text-align: center;
  color: #3D6289;
  flex-direction: column;
  justify-content: center;
  padding-top: 60px;
}
.custom-file-upload:hover {
  background-color: #d3e7fc;
}
span{
  color: red;
}
#numb{
color: #214367 ;
size: 20px;
font-weight: 500;
}

header {
width: 100%;
height: 674px;
background-color: #214367;
color: #FFFFFF;
}
#p1{
width: 40%;
}
input[type="button"] {
width: 211px;
height: 38px;
border-radius: 10px;
background-color: #AABDCF;
color: white;
border: none;
cursor: pointer;
}
#tit {
width: 766px;
height: 180px;
position: absolute;
size: 40px;
top: 177px;
left: 86px;
opacity: 1;
font-size: 2.5em;
line-height: 40.5px;
font-family: 'Poppins', sans-serif;
}
#text {
width: 50%;
height: auto;
position: absolute;
top: 349px;
left: 87px;
opacity: 1;
font-size: 1.2em;
line-height: 1.5em;
font-family: 'Poppins', sans-serif;
}
#con {
width: 213px;
height: 54px;
position: absolute;
top: 590px;
left: 109px;
background-color: transparent;
border: 2px solid #AABDCF;
margin-top: 20px; 
border-radius: 10px;
color: #FFFFFF;
font-family: 'Poppins', sans-serif;
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
right: 10px;
bottom: 5%;
animation: moveBackground 10s linear infinite;
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
input, textarea{
background-color: transparent;
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
@media screen and (max-width: 900px){
#text {
top: 270px;
}
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
#con {
width: 213px;
height: 54px;
position: absolute;
top: 590px;
left: 170px;
background-color: transparent;
border: 2px solid #AABDCF;
margin-top: 20px; 
border-radius: 10px;
color: #FFFFFF;
font-family: 'Poppins', sans-serif;
}

#con:hover {
background-color: #FFFFFF;
color: #214367;
border: transparent;
}
#tit {
  size: 27px;
  font-weight: 700;
  line-height: 40.5px;
  text-align: center;
  width: 371px;
  top: 184px;
  left: 18%;
}
#text {
  text-align: center;
  width: 371px;
  height: 240px;
  left: 18%;
  margin-top: 50px;
}
}
#info {
      padding: 20px;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 50%;
  }
#sujet{
width: 200%;
}
  .pren, .emanumb {
      display: flex;
      justify-content: space-between;
      padding-bottom: 20px;
  }

  .input-wrapper {
      flex: 1;
      margin-right: 20px;
  }

  .input-wrapper:last-child {
      margin-right: 0;
  }

  .sujet, .message {
      padding-bottom: 20px;
  }

  label {
      display: block;
      color: #3D6289;
      font-size: 20px;
      line-height: 30px;
      font-weight: 500;
  }

  .sujet {
      width: 50%;
  }

  input, textarea {
      width: 100%;
      padding: 10px;
      border: 1px solid #AABDCF;
      border-radius: 3px;
      box-sizing: border-box;
  }

  textarea {
      width: 100%;
  }
  #totpag{
    display: flex;
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
  }
  #p1{
    padding: 30px;
  }
  button {
      width: 40%;
      padding: 10px;
      background-color: #AABDCF;
      color: #fff;
      border: none;
      border-radius: 5px;
      text-align: center;
      margin-left: 30%;
  }

  button:hover {
      background-color: #71808d;
  }
  #telech{
    width:100%;
  }
  .error-message {
  color: red;
  font-size: 16px;
  margin-top: 10px;
}
</style>