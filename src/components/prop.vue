<template >
  <div id="page" >
    <div class="esp"></div>
    <div id="propos">À propos de nous</div>
    <div id="titre">Au cœur de notre succès se trouve notre équipe pluridisciplinaire</div>
    <div id="text">Sw consulting, créée en 2016, est une entreprise tunisienne dédiée à concevoir des produits axés sur l'expérience utilisateur pour catalyser l'évolution de nos clients. Notre essence repose sur la recherche de l'excellence, guidés par l'ambition de développer des produits à la fois pertinents et conviviaux, tout en accompagnant nos clients dans l'essor de leurs entreprises</div>
    <div id="buttons">
      <button id="parlons" class="button-with-icon">
        Parlons<img src="../assets/messagee.png" alt="Message icon"> 
      </button>
      <button id="check" class="button-with-icon">
        Check our services<img src="../assets/flesh1.png" alt="Flesh icon" width="18px"> 
      </button>
    </div>
    <div class="esp"></div>
  </div>
</template>

<script>
export default {
  name: 'SecondComponent',
  data() {
    return {
      isMenuVisible: false
    };
  }
}
</script>

<style scoped>
  .esp{
    width: 100%;
    height: 70px;
  }
#page {
  background-color: #f0f0f0;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  font-family: 'Poppins', sans-serif;
}

#propos {
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  margin-top: 20px;
  color: #8294A5;
}
#titre {
  font-weight: 700;
  font-size: 40px;
  line-height: 68.6px;
  font-family: 'Poppins', sans-serif;
  color: #214367;
}
#text {
  font-weight: 400;
  font-size: 22px;
  line-height: 37.73px;
  font-family: 'Poppins', sans-serif;
  color: #8F8F8F;
  width: 100%;
  max-width: 800px; 
}
#buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 20px; 
  font-family: 'Poppins', sans-serif;
}
button {
  margin-top: 10px; 
  width: 200px; 
  height: 40px; 
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Poppins', sans-serif;
}

img {
    width: 18px;
}

#parlons {
  background-color: #214367;
  color: white;
  padding: 16px 24px; 
  border-radius: 4px;
  gap: 10px;
  width: 136px;
  height: 56px;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
}
#parlons:hover{
  background-color: #536d8a;
  width: 138px;
  height: 58px;

}
#check {
  width: 260px;
  height: 51px;
  padding: 8px;
  gap: 8px;
  border: transparent;
  color: #0E0E2C;
  font-weight: 500;
  font-size: 22px; 
  line-height: 33px;
  font-family: 'Poppins', sans-serif;
  background-color: transparent;}
  #check:hover {
      text-decoration:underline;
      background-color: #f8f8f8;
  }
@media (max-width: 667px) {
  #buttons {
    flex-direction: column;
    align-items: center;
  }

  button {
    width: 100%;
    margin-top: 10px;
  }
}

</style>
