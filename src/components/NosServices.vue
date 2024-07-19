<template>
  <div id="toteee">
    <div class="esp"></div>
    <div id="nos">Nos services</div>
    <div class="container" v-if="screenWidth > 669">
      <div class="left-column">
        <p v-for="title in Object.keys(contents)" :key="title"
           @click="selectTitle(title)"
           :style="{ color: selectedTitle === title ? '#214367' : '#7F7F7F' }">
          {{ title }}
        </p>
      </div>
      <div class="right-column">
        <div v-if="selectedTitle" v-html="selectedContent"></div>
      </div>
    </div>
    <div v-else class="buttons-container">
      <div v-for="title in Object.keys(contents)" :key="title">
        <p @click="toggleCollapsible(title)" @dblclick="toggleCollapsible(title)"
           :style="{ color: selectedTitle === title ? '#214367' : '#7F7F7F' }">
          {{ title }}
        </p>
        <div v-if="selectedTitle === title" v-html="contents[title]" class="content"></div>
      </div>
    </div>
    <div class="esp"></div>
  </div>
</template>

<script>
import { ref, computed, watch } from 'vue';

export default {
  setup() {
    const selectedTitle = ref('Développement d Applications Web et Mobiles');
    const screenWidth = ref(window.innerWidth);

    const contents = {
      "Développement d Applications Web et Mobiles": `<img src="${require('@/assets/servise/im1.jpg')}" width=auto height="222px"><br>Lorem ipsum dolor sit amet consectetur. Felis id magna mauris ut pellentesque eu risus viverra purus. Commodo turpis nunc ultrices et aliquam scelerisque orci massa. Eget aliquam aliquet auctor scelerisque ultricies. Venenatis nibh faucibus fermentum id vestibulum ac eu.`,
      "Conception et Mise en Place de CRM": `<img src="${require('@/assets/servise/im2.jpg')}" width=auto height="222px"><br> Lorem ipsum dolor sit amet consectetur. Felis id magna mauris ut pellentesque eu risus viverra purus. Commodo turpis nunc ultrices et aliquam scelerisque orci massa. Eget aliquam aliquet auctor scelerisque ultricies. Venenatis nibh faucibus fermentum id vestibulum ac eu.`,
      "Optimisation du Référencement Naturel (SEO)": `<img src="${require('@/assets/servise/im3.jpg')}" width=auto height="222px"><br> Lorem ipsum dolor sit amet consectetur. Felis id magna mauris ut pellentesque eu risus viverra purus. Commodo turpis nunc ultrices et aliquam scelerisque orci massa. Eget aliquam aliquet auctor scelerisque ultricies. Venenatis nibh faucibus fermentum id vestibulum ac eu.`,
      "Services Informatiques Complet": `<img src="${require('@/assets/servise/im4.jpg')}" width=auto height="222px"><br> Lorem ipsum dolor sit amet consectetur. Felis id magna mauris ut pellentesque eu risus viverra purus. Commodo turpis nunc ultrices et aliquam scelerisque orci massa. Eget aliquam aliquet auctor scelerisque ultricies. Venenatis nibh faucibus fermentum id vestibulum ac eu.`
    };

    const selectTitle = (title) => {
      selectedTitle.value = title;
    };

    const toggleCollapsible = (title) => {
      selectedTitle.value = selectedTitle.value === title ? null : title;
    };

    const selectedContent = computed(() => {
      return contents[selectedTitle.value] || '';
    });

    const updateScreenWidth = () => {
      screenWidth.value = window.innerWidth;
    };

    window.addEventListener('resize', updateScreenWidth);

    watch(() => {
      return () => {
        window.removeEventListener('resize', updateScreenWidth);
      };
    });

    return {
      selectedTitle,
      selectTitle,
      selectedContent,
      screenWidth,
      toggleCollapsible,
      contents,
    };
  },
};
</script>



<style scoped>
#toteee {
  background-color: #f0f0f0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
}

.esp {
  height: 50px;
}
.container {
  display: flex;
  background-color: #f0f0f0;
}
.left-column {
  float: left;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  background-color: #f1f1f1;
  width: 390.45px;
  height: 500px;
  color: #7F7F7F;
}

.right-column {
  width: 60%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
#nos{
  font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    color: #8294A5;
}
.left-column p {
  display: block;
  background-color: inherit;
  padding: 22px 16px;
  border: none;
  outline: none;
  text-align: left;
  cursor: pointer;
  transition: 0.3s;
  font-size: 17px;
  color: #7F7F7F;
}

.left-column p:hover {
  background-color: #ddd;
  color: #3d3d3d;
}

.right-column img {
  max-width: 555px;
  height: 233px;
}

.right-column div {
  text-align: center;
  font-size: 18px;
  color: #777;
}

.buttons-container {
  text-align: center;
}

.buttons-container p {
  background-color: #EAEAEA;
  color: #7F7F7F;
  cursor: pointer;
  padding: 18px;
  border: none;
  text-align: left;
  font-weight: 900;
  outline: none;
  size: 15px;
  margin-bottom: 10px;
  transition: 0.3s;
  font-family: 'Poppins', sans-serif;
  
}

.buttons-container p:hover {
  background-color: #ddd;
  color: #3d3d3d;
}

.content {
  padding: 0 18px;
  overflow: hidden;
  background-color: #C8C8C8;
  transition: max-height 0.2s ease-out;
}
.content {
  top: 326px; 
  left: 18px; 
  width: 100%;
  height: 400px;
  padding: 0 18px; 
  overflow: hidden;
  background-color: #C8C8C8;
  font-family: 'Poppins', sans-serif; 
  font-weight: 400; 
  font-size: 16px;
  line-height: 27.44px; 
  text-align: center;
  color: #214367; }
@media screen and (max-width: 669px) {
  .container {
    flex-direction: column;
    align-items: center;
  }

  .left-column {
    width: 100%;
    background-color: #000000; 
    color: #C8C8C8; 
  }

  .left-column p {
    color: #C8C8C8;
  }

  .left-column p:hover {
    background-color: #555555; 
    color: #ffffff;
  }

  .right-column {
    width: 100%;
    padding: 10px;
  }

  .right-column img {
    height: 153px;
    border-radius: 10px;
  }

  .right-column div {
    color: #C8C8C8; 
  }
}
</style>

