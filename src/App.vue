<template>
  <div id="app">
    <NavBar/>
    <router-view/>
    <ConTact/>
  </div>
</template>

<script>
import NavBar from './views/NavBar.vue' ;
import ConTact from './components/ContactUs.vue';
export default {
  name: 'App',
  components: {
    ConTact,
    NavBar,
  },
};
</script>
<style scoped>
#app{
  padding: 0;
}
</style>
