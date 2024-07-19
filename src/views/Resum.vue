<template>
    <div id="res">
      <AppHeader />
      <a href="#bas">
      <img src="../assets/Frame 18.png" alt="flesh" id="flesh" >
      </a>
      <div id="bas"></div>
      <SecondComponent/>
      <EquipeTeam/>
      <NosServe/>
      <OurProcess/>
      <TraV/>
    </div>
  </template>
  
  <script>
  import AppHeader from '../views/First.vue';
  import SecondComponent from '../components/prop.vue';
  import EquipeTeam from '../components/EquipeTeam.vue';
  import NosServe from '../components/NosServices.vue';
  import OurProcess from '../components/OurProcess.vue';
  import TraV from '../components/TraVaille.vue';

  export default {
    name: 'ResUm',
    components: {
      AppHeader,
      SecondComponent, 
      EquipeTeam,
      NosServe,
      OurProcess,
      TraV,
    },
    data() {
    return {
      dynamicComponent: null // Initialiser la variable pour le composant dynamique
    };
  },
  created() {
    // Charger dynamiquement le composant OurProcess
    import('../components/OurProcess.vue').then(module => {
      this.dynamicComponent = module.default || module;
    }).catch(error => {
      console.error('Erreur lors du chargement du composant OurProcess', error);
    });
  }
  };
  </script>
  <style scoped>
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
#res{
  padding: 0;
}
@media screen and (max-width: 667px){
  #flesh{
    display: none;
  }
}
  </style>
