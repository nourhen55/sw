<template>
  <header>
    <div id="welcome">
      <div id="world"></div>
      <div class="bg"></div>
      <div class="cent">
        <p id="tit">Réalisons vos Ambitions Numériques</p>
        <p id="text">Transformez votre entreprise avec notre expertise fiable et innovante.<br><br>
          Nous simplifions et accélérons votre parcours de transformation numérique,<br>
          ce qui vous permet de relever plus facilement les défis de l'ère numérique.</p>
          <router-link to="/con">
        <input type="button" value="Contactez-nous" id="con">
          </router-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  
};

</script>

<style scoped>
#welcome{
  font-family: 'Poppins', sans-serif;
}
header {
  width: 100%;
  height: 674px;
  background-color: #214367;
  color: #FFFFFF;
}

#tit {
            width: 70%;
            height: 180px;
            position: absolute;
            top: 177px;
            left: 86px;
            opacity: 1;
            font-family: 'Poppins', sans-serif;
            font-weight: 700;
            font-size: 60px;
            line-height: 90px;
            color: #FFFFFF;
        }
        #text {
            width: 70%;
            height: 60px;
            position: absolute;
            top: 422px;
            left: 86px;
            font-family: 'Poppins', sans-serif;
            font-weight: 400;
            font-size: 20px;
            line-height: 30px;
            color: #FFFFFF;
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
  cursor: pointer;
}

#con:hover {
  background-color: #FFFFFF;
  color: #214367;
  border: transparent;
}

#world {
  background-image: url("../assets/bghoto.png");
  width: 25%;
  height: calc(27vw + 20%);
  position: absolute;
  right: 10px;
  bottom: 5%;
  animation: moveBackground 10s linear infinite;
}
.bg {
  background-image: url("../assets/world.png");
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
@media screen and (max-width:1050px){
  #tit {
            width: 70%;
            height: 180px;
            position: absolute;
            top: 177px;
            left: 86px;
            opacity: 1;
            font-family: 'Poppins', sans-serif;
            font-weight: 700;
            font-size: 50px;
            line-height: 90px;
            color: #ffffff;
        }
  #text {
      width: 60%;
      height: 60px;
      position: absolute;
      top: 422px;
      left: 86px;
      font-family: 'Poppins', sans-serif;
      font-weight: 400;
      font-size: 17px;
      line-height: 30px;
      color: #FFFFFF;
        }
  #con{
    margin-top: 90px;
  }
}
@media screen and (max-width: 798px){
  #tit {
            width: 70%;
            height: 180px;
            position: absolute;
            top: 110px;
            left: 86px;
            opacity: 1;
            font-family: 'Poppins', sans-serif;
            font-weight: 700;
            font-size: 50px;
            line-height: 90px;
            color: #ffffff;
        }
}
@media screen and (max-width: 667px) {
  #flesh,
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
  
  #tit {
            width: 371px;
            height: 82px;
            top: 0;
            position: absolute;
            font-family: 'Poppins', sans-serif;
            font-weight: 700;
            font-size: 27px;
            line-height: 40.5px;
            text-align: center;
            color: #FFFFFF;
        }
        #text {
            width: 60%;
            height: 60px;
            position: absolute;
            top: 110px;
            font-family: 'Poppins', sans-serif;
            font-weight: 400;
            font-size: 20px;
            line-height: 30px;
            text-align: center;
            color: #FFFFFF;
            margin-left: 35px;
        }
        #con {
            width: 213px;
            height: 54px;
            position: absolute;
            top: calc(190px + 160px + 20px);
            left: 50px;
            border-radius: 10px;
            border: 2px solid #AABDCF;
            display: flex;
            margin-left: 20%;
            justify-content: center;
            align-items: center;
            color: #FFFFFF;
            font-family: 'Poppins', sans-serif;
            font-size: 16px;
        }
  
}
</style>
