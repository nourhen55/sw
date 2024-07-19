
<template>
  <div id="app">
    <NavBar/>
    <router-view/>
    <ConTact/>
  </div>
</template>

<script>
import NavBar from '../views/Resum.vue';
import ConTact from './ContactUs.vue'; 

export default {
  name: 'App',
  components: {
    NavBar,
    ConTact,
  },
};
</script>

<style>
#app {
  font-family: "Poppins", sans-serif;
  padding-top: 0;
}
</style>
