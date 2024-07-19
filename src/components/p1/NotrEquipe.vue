<template>
    <div class="tot">
      <header>
        <div id="parti1">
          <div id="world"></div>
          <div class="bg"></div>
          <div class="cent">
            <p id="tit">Rejoignez Notre Équipe</p>
            <div id="content">
              <p id="text">Vous êtes passionné par le développement logiciel digital et souhaitez travailler
                dans un environnement stimulant et innovant ?<br>
                Chez Sw Consulting, nous recherchons des talents créatifs et motivés 
                pour rejoindre notre équipe en pleine croissance. Nous offrons des opportunités 
                de carrière enrichissantes, des projets passionnants, et un cadre de travail collaboratif. 
                Consultez nos offres d'emploi ci-dessous et découvrez comment vous pouvez 
                contribuer à façonner l'avenir de la technologie avec nous. Postulez dès aujourd'hui 
                et faites partie d'une équipe où vos compétences et vos idées seront valorisées.</p>
             
            </div>
          </div>
          <a href="#titre">
      <img src="../../assets/Frame 18.png" alt="flesh" id="flesh" >
      </a>              </div>
      </header>
      <div class="tt">
      <p id="titre">Rejoins notre équipe</p>
      <p id="tous">Tous (6)</p>
      <div id="totpage">
        <div id="p1">
          <p class="st">Départements</p>
          <p class="t1">Backend Team</p>
          <p class="t2">Développeur Laravel (1)</p>
          <p class="t2">Développeur Node.js (0)</p>
          <p class="t1">Frontend Team</p>
          <p class="t2">Développeur Vue.js (3)</p>
          <p class="t2">Développeur WordPress (0)</p>
          <p class="t2">Développeur Prestashop (0)</p>
          <p class="t1">DevOps Team</p>
          <p class="t2">DevOps (0)</p>
          <p class="t1">Autres</p>
          <p class="t2">Développeur Python/Django (1)</p>
          <p class="t2">Marketing Manager (1)</p>
        </div>
        <div id="p2">
          <p class="st">Tous les postes</p>
          <div class="tab1">
            <p class="t1">Développeur Laravel</p>
            <td>
            <p class="t2">Bouhjar, Tunisia / Backend / Full-time
            </p></td><td><router-link to="/Laravel">void</router-link></td> 
          </div>
          <div class="tab1">
            <p class="t1">Développeur Vue.js</p>
            <td><p class="t2">Bouhjar, Tunisia / Frontend / Full-time</p></td><td><router-link to="/your-route">void</router-link></td> 
            
          </div>
          <div class="tab1">
            <p class="t1">Développeur Vue.js</p>
            <td> <p class="t2">Bouhjar, Tunisia / Frontend / Full-time </p>
          </td><td><router-link to="/your-route">void</router-link></td> 
  
          </div>
          <div class="tab1">
            <p class="t1">Développeur Vue 3 / Tailwind</p>
            <td><p class="t2">Paris, France / Frontend / Full-time</p>
          </td><td><router-link to="/your-route">void</router-link></td> 
            
          </div>
          <div class="tab1">
            <p class="t1">Développeur Python / AI</p>
            <td> <p class="t2">Bouhjar, Tunisia / Autres / Full-time </p>
          </td><td><router-link to="/text">void</router-link></td> 
            
          </div>
          <div class="tab1">
            <p class="t1">Marketing Manager</p>
            <td> <p class="t2">Paris, France / Autres / Full-time </p>
          </td><td><router-link to="/your-route">void</router-link></td> 
            
          </div>
        </div>
      </div>
    </div>
    <div class="esp"></div>
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
  .tot{
    font-family: 'Poppins', sans-serif;
    background-color: #f0f0f0;
  }
  #titre {
    top: 729px;
    left: 55px;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 40px;
    line-height: 60px;
    color: #000000;
  }
  .tt{
    font-family: 'Poppins', sans-serif;
    background-color: #f0f0f0;
  }
  #tous {
    width: 137px;
    height: 48px;
    top: 942px;
    left: 55px;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 32px;
    line-height: 48px;
    color: #3D6289;
  }
  #p1{
    width: 50%;
  }
  #p2{
    width: 50%;
  }
  .st {
    width: 233px;
    height: 48px;
    top: 859px;
    left: 55px;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 32px;
    line-height: 48px;
    color: #8A8A8A;
  }
  .esp{
    height: 30px;
  }
  .tab1 {
    top: 934px;
    left: 631px;
    border-radius: 10px;
    box-shadow: 0 2px 3px 0 rgba(0, 0, 0.15, 0.15), 0 4px 4px 0 rgba(0, 0, 0, 0.15);
    grid-template-columns: 90% 10%;
  }
  
  #parti1 {
    height: 1000px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: 'Poppins', sans-serif;

  }
  
  span {
    color: red;
  }
  
  #numb {
    color: #214367;
    font-size: 20px;
    font-weight: 500;
  }
  
  header {
    width:100%;
  height: 650px;
  background-color: #214367;
  color: #FFFFFF;
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

#totpage {
  display: flex;
  padding: 10px;
  margin: 20px;
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
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
@media screen and (max-width: 900px) {

  header {
    width:100%;
  height: 800px;
  background-color: #214367;
  color: #FFFFFF;
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
  #text{
    text-align: center;
    margin-top: -120px;
    margin-left: 10px;
  }
  #tit {
    font-size: 27px;
    font-weight: 700;
    line-height: 40.5px;
    text-align: center;
    width: 371px;
    top: 134px;
    left: 10%;
  }
  header{
    height: 900px;
  }
}
router-link {
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  font-size: 22px;
  line-height: 36px;
  color: #8A8A8A;
  text-align: right; 
}

</style>

  