<template>
  <div class="container">
    <div class="sidebar">
      <ul>
        <li><router-link to="/">Dashboard</router-link></li>
        <li><router-link to="/team">Équipe</router-link></li>
        <li><router-link to="/messages">Messages</router-link></li>
        <li><router-link to="/quotes">Demandes Devis</router-link></li>
        <li><router-link to="/settings">Paramètres</router-link></li>
        <li><router-link to="/logout">Se Déconnecter</router-link></li>
      </ul>
    </div>
    <main class="content">
      <input id="rech"
              type="text"
              v-model="searchQuery"
              placeholder="Rechercher..."
              @input="search"
            />
            <button>nouveau blog<img src="../../assets/offece/Group (2).png"></button>
      <div id="page">
        <div id="left">
          <div class="search-bar">
            
          </div>
          <div id="main-content">
            <div id="mess">
        <div id="text">
            <p>Bon retour, Admin !</p>
            <p>Nous sommes le <strong>8 juillet 2024</strong>. Vous disposez de <strong>3 messages</strong> en attente de votre réponse, ainsi que <strong>4 demande de devis</strong> en attente.</p>
        </div>
        <img src="../../assets/offece/Flat-Journalist.png" alt="Journalist Image">
    </div>
            <div id="parti1">
            <div id="meteo">
              <div class="header">
            <h3>Météo</h3>
            <img src="../../assets/offece/Weather-Icon.png" id="emb" alt="Weather Icon">
        </div>              <img src="../../assets/offece/cloud-rain.png" id="rain">
              <p>32°C (Soleil)</p>
              <div id="bou">Bouhjar, Monastir (TN) <img src="../../assets/offece/Reload-Icon.png" id="cer">
              </div>
            </div>
            <table id="cadre">
              <tr>
                <td>
                  <div class="card" id="c1">
                    <h3>Customers</h3>
                    <p>3,781</p>
                  </div>
                </td>
                <td>
                  <div class="card" id="c2">
                    <h3>Revenue</h3>
                    <p>$695</p>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="card" id="c3">
                    <h3>Orders</h3>
                    <p>1,219</p>
                  </div>
                </td>
                <td>
                  <div class="card" id="c4">
                    <h3>Growth</h3>
                    <p>30.1%</p>
                  </div>
                </td>
              </tr>
            </table>
            </div>
          </div>
        </div>
        <div id="right">
  <div class="image-frame">
    <p>aaa bbb</p>
    <img src="../../assets/AI21.jpg" >
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque nemo blanditiis id quis alias rem unde accusantium fuga, excepturi doloremque maxime nostrum, nobis consequatur ad assumenda dicta ut voluptate quia.</p>
  </div>
  <div class="image-frame">
    <img src="../../assets/AI21.jpg">
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque nemo blanditiis id quis alias rem unde accusantium fuga, excepturi doloremque maxime nostrum, nobis consequatur ad assumenda dicta ut voluptate quia.</p>
  </div>
  <div class="image-frame">
    <img src="../../assets/AI21.jpg" >
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque nemo blanditiis id quis alias rem unde accusantium fuga, excepturi doloremque maxime nostrum, nobis consequatur ad assumenda dicta ut voluptate quia.</p>
  </div>
</div>

      </div>
      <div id="parti2">
        <img src="../../assets/AI21.jpg" width="150px">
        <div class="p2"></div>
        <div class="p2"></div>
      </div>
    </main>
  </div> 
</template>


<script>
export default {
  data() {
    return {
      searchQuery: '', // La requête de recherche saisie par l'utilisateur
      items: [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
        // Ajoutez d'autres éléments ici
      ],
    };
  },
  computed: {
    filteredItems() {
      return this.items.filter(item =>
        item.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  methods: {
    search() {
      // Vous pouvez ajouter une logique supplémentaire ici si nécessaire
      console.log('Recherche en cours pour:', this.searchQuery);
    },
  },
};
</script>
<style scoped>
#parti1{
  display: flex;
  padding: 20px;
  
}
#rech {
  padding: 10px;
  width: 80%;
  box-sizing: border-box;
  margin-bottom: 20px;
  border-radius: 10px;
}

button {
  width: 20%;
  background-color: #214367;
  color: white;
  height: 48px;
  padding: 10px;
  margin-bottom: 20px;
  border: none;
  border-radius: 10px;
}
#mess {
            width: 100%;
            height: 100px;
            max-width: 600px;
            background-color: hsl(211, 48%, 23%); /* couleur de fond bleu foncé */
            color: #FFFFFF; /* couleur de texte blanche */
            border-radius: 20px;
            padding: 20px;
            box-shadow: 0 4px 4px rgba(163, 161, 255, 1);
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        #mess img {
            max-height: 184px;
            border-radius: 20px;
            width: 245px;
            margin-bottom: 50px;
        }
        #text {
            max-width: 450px;
        }

/************************************************ */
#meteo {
  width: 240px;
  height: 251px;
  position: absolute;
  left: 20%;
  border-radius: 20px;
  background-color: #FFFFFF;
  box-shadow: 0 4px 4px 0 rgba(163, 161, 255, 1);
  padding: 20px;
}


.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
}

.header h3 {
    margin: 0;
    font-size: 1.5em;
    color: #333;
}
.weather-icon {
    width: 50px;
    height: auto;
    left: 20px;
}
#emb{
  float: top;
}
#meteo p {
    font-size: 1.2em;
    margin: 10px 0;
    color: #333;
}
#rain{
  margin-left:28% ;
  padding:20px;
}
#bou {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1em;
    color: #555;
    margin-top: 10px;
    background-color:#DFEEFD ; 
}

#cer {
    width: 18px;
    height: 18px;
    margin-left: 5px;
    background-color: #3D6289;
    border-radius: 50px; 
    padding: 5px;
}
/************************************ */
#cadre {
  border-collapse: collapse; 
  width: 454px; 
  margin-top: 20px;
  margin-left: 240px;
}

#cadre td {
  padding: 0; /* Enlève le padding par défaut des cellules */
  vertical-align: top; /* Aligne le contenu en haut des cellules */
}

.card {
  background-color: #fff;
  color: #214367;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 100%; /* Assure que la carte prend toute la largeur de la cellule */
  box-sizing: border-box; /* Inclut le padding dans la largeur */
}

.card h3 {
  margin-bottom: 10px;
}

.card p {
  font-size: 24px;
  font-weight: bold;
}

table {
  width: 100%;
  background-color: #fff;
  border-radius: 20px;
  
}

.container {
  display: flex;
  height: 2000px; 
  background-color: #c0ddfc;
}

.sidebar {
  width: 170px;
  color: #214367;
  background-color: white;
  padding: 20px;
  height: 100%; 
}

.sidebar ul {
  list-style: none;
  padding: 0;
}

.sidebar li {
  margin: 20px 0;
}

.sidebar a {
  color: #214367;
  text-decoration: none;
}

.content {
  padding: 20px;
  flex: 1;
}

#left {
  width: 70%; /* Ajuste la largeur de la partie gauche à 70% */
  padding-right: 20px; /* Ajoute un espace entre les sections gauche et droite */
}


#page {
  display: flex;
}
#right {
  width: 30%; 
  background-color: #fff;
  padding: 20px;
}

.image-frame {
  border: 1px solid #ccc; /* Ajoute une bordure grise autour de chaque cadre */
  border-radius: 10px; /* Ajoute des coins arrondis */
  padding: 15px; /* Ajoute du padding à l'intérieur de chaque cadre */
  margin-bottom: 20px; /* Ajoute un espace entre chaque cadre */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Ajoute une ombre pour un effet de profondeur */
  background-color: #f9f9f9; /* Couleur de fond légèrement grise */
}

.image-frame img {
  width: 100%; /* L'image prend toute la largeur disponible */
  border-radius: 5px; /* Coins arrondis pour les images */
  margin-top: 10px; /* Espacement au-dessus de l'image */
}

.image-frame p {
  margin: 0; /* Supprime les marges par défaut des paragraphes */
  padding-top: 10px; /* Ajoute du padding au-dessus des paragraphes */
  color: #333; /* Couleur de texte */
  font-size: 14px; /* Taille de police */
  line-height: 1.5; /* Hauteur de ligne pour une meilleure lisibilité */
}
@media (max-width: 800px) {
  .image-frame p {
    display: none;
  }
  .image-frame img{
    width: 100px;
  }
}
#c1{
  background-color: #dfdfdf;
}
#c4{
  background-color: #bba2ff;
}
#parti2{display: flex;
padding: 20px;}
.p2{
  width: 50px;
  height: 100px;
  background-color: #214367;
  padding: 20px;
  margin-right: 20px;
  margin-left: 20px;
}
</style>