<template>
    <div class="tot">
        <header>
            <div id="welcome">
                
                <div id="world"></div>
                <div class="bg"></div>
                <div class="cent">
                    <p id="tit">L'Intelligence Artificielle : <br>
Un Atout pour Améliorer <br>
Notre Société</p>
<div id="da">Mai 04, 2024 - 2 min </div>
                </div>
                <a href="#texte">
      <img src="../../assets/Frame 18.png" alt="flesh" id="flesh" >
      </a>             </div>
        </header>
        <div id="texte">
          <div class="esp"></div>
            <p id="nnn">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur..<br><br>
Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.<br><br>

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.<br><br>


Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.<br><br>

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.<br><br>
            </p>
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
};
</script>

<style scoped>
.esp{
  height: 30px;
}
.tot{     
  font-family: 'Poppins', sans-serif;
  background-color: #f0f0f0;}
#da {
            width: 335px;
            height: 48px;
            position: absolute;
            top:350px;
            left: 30%;
            font-family: 'Poppins', sans-serif;
            font-weight: 400;
            font-size: 32px;
            line-height: 48px;
            color: #FFFFFF;
        }
    body {
        width: 100%;
        height: 100%;
        background-color: #F9F9F9;
    }
    #nnn{
      padding-left: 80px;
      margin-right: 80px;
    }
    #texte {
      font-weight: 400;
      size: 30px;
      line-height: 45px;
      color: #606060;
    }
    
    header {
  width: 100%;
  height: 500px;
  background-color: #214367;
  color: #FFFFFF;
}

#logo {
  width: 64px;
  height: 64px;
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
  top: 150px;
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
  width: 165px;
  height: 30px;
  position: absolute;
  top: 590px;
  left: 109px;
  background-color: transparent;
  color: white;
  border-radius: 5px;
  border: 2px solid white;
  margin-top: 20px;
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
  background-image: url("../../assets/A.png");
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
  top: 470px;
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
    width: 165px;
    height: 30px;
    margin-left: 20%;
    border-radius: 10px;
    border: 2px solid white;
    top: 579px;
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
    top: 50px;
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
