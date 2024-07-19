<template>
    <div id="pa">
      <div id="tit"><p>Our Process</p></div>
      <div id="par1">
        <div id="p1">
          <b>Notre processus de travail vous aide à tirer le meilleur parti des compétences de notre équipe</b>
        </div>
        <div id="p2">
          <b>Avec la connaissance de notre équipe de différents processus, nous choisissons le processus parfait pour s'adapter au développement de votre produit</b>
        </div>
      </div>
      <div id="lis">
        <div class="process-step">
          <div><span class="numb">01</span><span class="name">Recherche</span></div>
          <div class="text">User research helps us find out exactly how our target customers feel when interacting with a product</div>
        </div>
        <div class="process-step">
          <div><span class="numb">02</span><span class="name">Designer</span></div>
          <div class="text">User research helps us find out exactly how our target customers feel when interacting with a product</div>
        </div>
        <div class="process-step">
          <div><span class="numb">03</span><span class="name">Développement</span></div>
          <div class="text">User research helps us find out exactly how our target customers feel when interacting with a product</div>
        </div>
        <div class="process-step">
          <div><span class="numb">04</span><span class="name">Test</span></div>
          <div class="text">User research helps us find out exactly how our target customers feel when interacting with a product</div>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
    #pa {
      margin-top: -22px;
      font-family: Arial, sans-serif;
      background-color: #f0f0f0;
      font-family: 'Poppins', sans-serif;
    }
  
    #tit {
      font-weight: 700;
      font-size: 22px;
      line-height: 37.37px;
      text-align: center;
      color: #8294A5;
    }
  
    #par1 {
    display: flex;
    justify-content: center;
    margin: 20px;
    flex-wrap: wrap;
  }

  #p1 ,#p2{
    font-weight: 700;
    font-size: 40px;
    line-height: 68.6px;
    color: #214367;
    margin: 20px;
    text-align: center;
    flex: 1;
  }

  #p2 {
    font-weight: 400;
    font-size: 22px;
    line-height: 37.73px;
    color: #8F8F8F;
  }
    #lis {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 20px;
    }
  
    .process-step {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 10px;
      padding: 20px;
      width: 100%;
      max-width: 250px; /* Modification apportée ici */
    }
  
    .numb {
      font-weight: 900;
      font-size: 50px;
      line-height: 51.45px;
      color: #8294A5;
    }
  
    .name {
      font-size: 22px;
      font-weight: 600;
      line-height: 37.73px;
      color: #0E0E2C;
    }
  
    .text {
      font-weight: 400;
      font-size: 16px;
      line-height: 27.44px;
      padding: 20px;
      color: #8F8F8F;
      text-align: center;
    }
  
    @media screen and (min-width: 801px) {
      #lis {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
      }
  
      }
     @media screen and (max-width: 801px) {
        #p1{
            font-weight: 700;
            size: 27px;
            line-height: 40.5px;

        }
      #par1 {
      flex-direction: column;
    }
    #p2{
        font-weight: 400;
        size: 22px;
    }
    #p1, #p2 {
      flex: 1 1 100%;
      margin: 10px 0;
    }
}
    
  </style>
<script>
export default {
  name:'OurProcess' ,

}
</script>
  