<template>
    <div id="body">
        <nav>
          <router-link to="/">
        <img src="../assets/sw11.png" alt="Logo" id="logo">
      </router-link>
        <div id="navv" :class="{ show: isMenuVisible }" ref="navv"> 
          <a href="#page">à propos de nous</a> 
          <a href="#toteee">nos services</a> 
          <a href="#pa">nos projets</a> 
        </div>
        <router-link to="/devis">
        <input type="button" value="Demande devis" id="dem">
      </router-link>
      </nav>
      <div class="menu-icon" @click="toggleMenu" ref="menuIcon">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
      </div>
    </div>
</template>
<script>
export default {
    name:'NavBar',
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
#body{
background-color: #214367;
top: -20px;
}
nav {
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: 'Poppins', sans-serif;
  padding: 20px 54px;
  background-color: #214367;
}
#dem{
    width: 120%;
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
  font-family: 'Poppins', sans-serif;
  color: white;
  border: none;
  cursor: pointer;
}

input[type="button"]:hover {
  background-color: #849bb1;
}
span{
    color:#FFFFFF;
}
@media screen and (max-width: 900px) {
    
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
}
@media screen and (max-width: 667px) {
  #navv{
    display: none;
    background-color: #214367;
  }
  #dem {
    display: none;
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