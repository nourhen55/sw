<template>
    <div id="pa">
      <div class="esp"></div>
      <div id="tit"><p>Le travail que nous avons réalisé</p></div>
      <div id="text"><p>Le travail que nous avons fait qui a rendu notre client heureux et satisfait</p></div>
      <div id="lis">
        <div class="process-step">
          <img src="../assets/travaille/ex1.png" alt="Example 1">
          <p class="p1">Web / app Development</p>
          <p class="p2">Batigo.fr</p>
        </div>
        <div class="process-step">
          <img src="../assets/travaille/ex2.png" alt="Example 2">
          <p class="p1">Web / app Development</p>
          <p class="p2">Batigo.fr</p>
        </div>
        <div class="process-step">
          <img src="../assets/travaille/ex3.png" alt="Example 3">
          <p class="p1">Web / app Development</p>
          <p class="p2">Batigo.fr</p>
        </div>
        <div id="plus" class="process-step">
          <img src="../assets/travaille/ex4.png" alt="Example 4">
          <p class="p1">Web / app Development</p>
          <p class="p2">Batigo.fr</p>
        </div>
      </div>
    <div class="esp"></div>
    </div>
  </template>
  
  <style scoped>
  .esp{
    width: 100%;
    height: 50px;
  }
  #pa{
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    margin-top: -22px;
  }
    #tit {
      font-weight: 700;
      font-size: 22px;
      line-height: 37.73px;
      color: #8294A5;
      margin-left: 10%;
    }
    input {
      display: none;
    }
    #text {
      font-weight: 700;
      font-size: 34px;
      line-height: 51px;
      color: #214367;
      margin-left: 10%;
      font-family: Arial, sans-serif;
    }
    #lis {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin-top: 20px;
    }
    .process-step {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 10px;
      padding: 10px;
      width: 350px;
      max-width: 100%;
    }
    .process-step img {
      width: 100%;
      height: auto;
      border-radius: 10px;
      margin-bottom: 10px;
    }
    .p1 {
      font-weight: 700;
      font-size: 14px;
      line-height: 21px;
      color: #214367;
      margin-bottom: 5px;
      font-family: Arial, sans-serif;
    }
    .p2 {
      font-weight: 400;
      font-size: 14px;
      line-height: 21px;
      color: #0E0E2CCC;
      font-family: Arial, sans-serif;
    }

    #but {
    display: block;
    margin: 20px auto; 
    padding: 10px 20px;
    color: #214367;
    background-color: transparent;
    border: 2px solid #214367; 
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
    line-height: 21px;
}
    #but:hover { 
    color: aliceblue;
    background-color: #214367;
  }
    @media (max-width: 700px) {
      #plus {
        display: none;
      }
      #tit,#text{
        align-items: center;
        text-align: center;
      }
    }
  </style>
  <script>
    export default {
      name: 'TraV',
    }
  </script>