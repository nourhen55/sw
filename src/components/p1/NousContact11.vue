<template>
    <div>
        <header>
            <div>
                <div id="world"></div>
                <div class="bg"></div>
                <div class="cent">
                    <p id="tit">Obtenez Votre Devis Gratuit</p>
                    <p id="text">Nous sommes là pour transformer vos idées en réalité. Remplissez le 
formulaire ci-dessous pour obtenir un devis gratuit et personnalisé. 
Notre équipe vous répondra dans les plus brefs délais pour discuter de 
vos besoins et vous proposer une solution sur mesure.</p>
                    
                </div>
                <a href="#login">
      <img src="../../assets/Frame 18.png" alt="flesh" id="flesh" >
      </a>                     </div>
        </header>
        <div class="esp"></div>
        <div id="login">
          
            <img src="../../assets/Rectangle.png" id="rec">
            <div id="info">
                <div class="pren">
                    <div class="input-wrapper">
                        <label for="nom">Nom:</label>
                        <input type="text" id="nom" placeholder="Eg. william"><br>
                    </div>
                    <div class="input-wrapper">
                        <label for="prenom">Prénom:</label>
                        <input type="text" id="prenom" placeholder="Eg. william"><br>
                    </div>
                </div>
                <div class="emanumb">
                    <div class="input-wrapper">
                        <label for="email">Email:</label>
                        <input type="email" id="email" placeholder="Eg. william@exemple.com"><br>
                    </div>
                    <div class="input-wrapper">
                        <label for="telephone">Téléphone:</label>
                        <input type="tel" id="telephone" placeholder="+000 000 000 000 000"><br>
                    </div>
                </div>
                <div class="sujet">
                    <label for="sujet">Sujet:</label>
                    <input type="text" id="sujet" placeholder="Eg. contacter support"><br>
                </div>
                <div class="message">
                    <label for="message">Message:</label><br>
                    <textarea id="message" rows="4" placeholder="Eg. message"></textarea>
                </div>
                <button type="submit"> <img src="../../assets/box.png" id="box">Envoyer</button>
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
 /* beforeDestroy() {
    document.removeEventListener('click', this.hideMenuOnClickOutside);
  }*/
};
</script>

<style scoped>
.esp{
  height: 50px;
  background-color: #f0f0f0;
}    body {
        width: 100%;
        height: 100%;
        background-color: #F9F9F9;
    }

    #rec {
        width: 30%;
        border-radius: 5px 0 0 5px;
        object-fit: cover; /* To ensure the image covers the available height */
    }
    #box{
        width: 20px;
    }
    #login {
        display: flex;
        align-items: stretch; /* Ensures the image and info section align vertically */
        display: flex;
        font-family: Arial, sans-serif;
        background-color: #f0f0f0;
    }
    input,textarea{background-color: transparent;}
    #info {
        padding: 20px;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
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
    header {
  width: 100%;
  height: 674px;
  background-color: #214367;
  color: #FFFFFF;
}

nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 54px;
  background-color: #214367;
}

#logo {
  width: 64px;
  height: 64px;
}

nav span {
  font-size: 20px;
  line-height: 30px;
  font-weight: 700;
  margin-left: 20px;
  width: 147px;
  height: 30px;
}

#navv {
  display: flex;
  align-items: center;
  flex-grow: 1;
  justify-content: center;
}

#navv a {
  margin-left: 20px;
  text-decoration: none;
  color: #FFFFFF;
  font-weight: 700;
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

input[type="button"]:hover {
  background-color: #849bb1;
}

#tit {
  width: 766px;
  height: 180px;
  position: absolute;
  top: 177px;
  left: 86px;
  opacity: 1;
  font-size: 2.5em;
  line-height: 40.5px;
}

@media screen and (max-width: 900px) {
  #tit {
    width: 70%;
  }
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
  right: 0;
  bottom: 5%;
  animation: moveBackground 10s linear infinite;
}
.bg {
  background-image: url("../../assets/teleph.png");
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

.menu-icon {
  display: none;
  font-size: 30px;
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
}

.menu-icon div {
  width: 35px;
  height: 5px;
  background-color: white;
  margin: 6px 0;
  transition: 0.4s;
}

.change .bar1 {
  -webkit-transform: rotate(-45deg) translate(-9px, 6px);
  transform: rotate(-45deg) translate(-9px, 6px);
}

.change .bar2 {
  opacity: 0;
}

.change .bar3 {
  -webkit-transform: rotate(45deg) translate(-8px, -8px);
  transform: rotate(45deg) translate(-8px, -8px);
}
#navv a:hover {
    color: #030508;
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
  left: 150px;
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
  #logo {
    width: 63px;
    height: 63px;
    margin-top: 13px;
    margin-left: 14px;
  }
  span {
    size: 20px;
    line-height: 30px;
    margin-right: 300px;
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
    margin-top: 20px;
  }
  .menu-icon {
    display: block;
  }

  #navv {
    display: none;
  }

  #navv.show {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
    background-color: #bdbdbd; /* Couleur de fond lorsque le menu est affiché */
    width: 45%;
    height: auto;
    position: absolute;
    right: 0;
    top: 0;
    transform: translate(0, 0);
    direction: rtl;
  }
  #navv a {
    margin-top: 20%;
    color: #FFFFFF;
    font-weight: 700;
    margin-right: 10%;
    padding-bottom: 20px;
  }

  #navv a:hover {
    color: #030508;
  }
}
</style>
