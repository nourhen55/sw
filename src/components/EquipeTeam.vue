<template>
  <div class="container">
    <div>
      <div id="eq">équipe</div>
      <div id="text">
        Rencontrez les membres géniaux et créatifs de notre équipe
      </div>
    </div>
    <div class="carousel-container">
      <button @click="prevImage" class="carousel-button left-button">⮜</button>
      <div class="person-container" ref="personContainer">
        <div
          v-for="(person, index) in visiblePeople"
          :key="index"
          class="person"
          :style="{ transform: 'translateX(' + (index * 100) + '%)' }"
        >
          <img
            :src="require('@/assets/equipe/' + person.image)"
            :alt="'Membre ' + (index + 1)"
            class="person-image"
          />
          <div class="person-info">
            <p class="person-name">{{ person.name }}</p>
            <p class="person-job">{{ person.job }}</p>
          </div>
        </div>
      </div>
      <button @click="nextImage" class="carousel-button right-button">⮞</button>
    </div>
  </div>
</template>

  
  <script>
  export default {
    name: 'EquipeTeam',
    data() {
      return {
        currentImageIndex: 0,
        people: [
          { name: 'John Doe', job: 'Développeur', image: 'per1.jpg' },
          { name: 'Jane Smith', job: 'Designer', image: 'per2.jpg' },
          { name: 'Alice Johnson', job: 'Chef de projet', image: 'per3.jpg' },
          { name: 'Bob Brown', job: 'Analyste', image: 'per4.jpg' },
          { name: 'Eva Martinez', job: 'Testeur', image: 'per5.jpg' },
          { name: 'Michael Lee', job: 'Architecte', image: 'per6.jpg' },
          { name: 'Sophie Wang', job: 'Développeur', image: 'per7.jpg' },
          { name: 'David Kim', job: 'Designer', image: 'per8.jpg' },
        ],
        visibleCount: 4,
        isTransitioning: false,
      };
    },
    computed: {
      visiblePeople() {
        return this.people.slice(
          this.currentImageIndex,
          this.currentImageIndex + this.visibleCount
        );
      },
    },
    methods: {
      nextImage() {
        if (this.currentImageIndex < this.people.length - this.visibleCount) {
          this.currentImageIndex++;
        } else {
          this.currentImageIndex = 0;
        }
      },
      prevImage() {
        if (this.currentImageIndex > 0) {
          this.currentImageIndex--;
        } else {
          this.currentImageIndex = this.people.length - this.visibleCount;
        }
      },
      updateVisibleCount() {
  if (window.innerWidth > 950) {
    this.visibleCount = 4;
  } else if (window.innerWidth > 667) {
    this.visibleCount = 2; 
  } else {
    this.visibleCount = 1;
  }
},

    },
    mounted() {
      this.updateVisibleCount();
      window.addEventListener('resize', this.updateVisibleCount);
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.updateVisibleCount);
    },
  };
  </script>
  
  <style scoped>
.container {
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: -10px;
}

#eq {
  margin-top: 20px;
  font-weight: 700;
  font-size: 22px;
  line-height: 37.73px;
  margin-left: 10%;
  color: #8294a5;
  font-family: 'Poppins', sans-serif;
}

#text {
  font-weight: 700;
  font-size: 40px;
  line-height: 68.6px;
  color: #214367;
  margin-left: 10%;
  width: 407px;
  font-family: 'Poppins', sans-serif;
}

.carousel-button {
  background-color: transparent;
  border: none;
  font-size: 2em;
  cursor: pointer;
  color: #214367;
}

.carousel-container {
  display: flex;
  align-items: center;
  width: 70%;
}

.person-container {
  display: flex;
  overflow: hidden;
  width: calc(100% - 100px);
  transition: transform 0.5s ease;
}

.person {
  display: flex;
  flex-direction: column;
}

.person-image {
  margin-top: 40px;
  width: 160px;
  height: 235px;
  border-radius: 4px;
  padding: 15px;
  margin-right: -90px;
}

.person-info {
  text-align: center;
  font-family: 'Poppins', sans-serif;
}

.person-name {
  font-weight: bold;
  margin-bottom: 5px;
  color: #214367;
}

.person-job {
  color: #777;
}

.carousel-button.left-button:hover,
.carousel-button.right-button:hover {
  transform: scale(1.2);
}

@media screen and (max-width: 667px) {
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  #eq {
    text-align: center;
    margin-top: 20px;
  }

  #text {
    text-align: center;
    margin-top: 20px;
  }
  .person-container {
    justify-content: center;
  }

  .person-image {
    width: 160px;
    height:235px;
    border-radius: 4px;
    margin-right: 5px;
  }
}
</style>
