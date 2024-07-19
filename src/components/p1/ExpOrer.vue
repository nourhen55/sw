<template>
    <div class="tot">
    <div id="body">
        <p id="tit">Nos Articles</p>
        <div class="slideshow">
            <img v-bind:src="images[currentIndex]" alt="Slideshow Image">
            <button @click="prevSlide" class="prev">&#10094;</button>
            <button @click="nextSlide" class="next">&#10095;</button>
            <div class="esp"></div>
        </div>
    </div>
    <div id="par2">
            <p id="exp">Explorer</p>
            <div id="but">
                <button class="b">All</button>
                <button class="b">Intelligence Artificielle</button>
                <button class="b">Design UX/UI</button>
                <button class="b">Automatisation et DevOps</button>
                <button class="b">Sécurité Informatique</button>
                <button class="b">Études de Cas</button>
                <button class="b">Actualités Technologiques</button>
            </div>
            <div id="tous">
            <div id="info">
                <router-link to="/text">
                <div class="sec1">
                    <img src="../../assets/info/Rectangle 69.png"><br>
                    <p class="t1">Sécurité Informatique</p>
                    <p class="t2">Sed ut perspiciatis unde omnis 
                        iste natus error sit voluptatem 
                        accusantium doloremque laudantium ....</p>
                    <p class="t2">Mai 04, 2024</p>
                </div></router-link>
                <div class="sec1">
                    <img src="../../assets/info/Rectangle 70.png"><br>
                    <p class="t1">Études de Cas</p>
                    <p class="t2">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium ....</p>
                    <p class="t2">Mai 04, 2024</p>
                </div>
                <div class="sec1">
                    <img src="../../assets/info/Rectangle 71.png"><br>
                    <p class="t1">Actualités Technologiques</p>
                    <p class="t2">Sed ut perspiciatis unde omnis 
                        iste natus error sit voluptatem 
                        accusantium doloremque laudantium ....</p>
                    <p class="t2">Mai 04, 2024</p>
                </div>
                <div class="sec1">
                    <img src="../../assets/info/Rectangle 72.png"><br>
                    <p class="t1">Automatisation et DevOps</p>
                    <p class="t2">Sed ut perspiciatis unde omnis 
                        iste natus error sit voluptatem 
                        accusantium doloremque laudantium ....</p>
                    <p class="t2">Mai 04, 2024</p>
                </div>
                <div class="sec1">
                    <img src="../../assets/info/Rectangle 73.png"><br>
                    <p class="t1">Design UX/UI</p>
                    <p class="t2">Sed ut perspiciatis unde omnis 
                        iste natus error sit voluptatem 
                        accusantium doloremque laudantium ....</p>
                    <p class="t2">Mai 04, 2024</p>
                </div>
                <div class="sec1">
                    <img src="../../assets/info/Rectangle 74.png"><br>
                    <p class="t1">Intelligence Artificielle</p>
                    <p class="t2">Sed ut perspiciatis unde omnis 
                        iste natus error sit voluptatem 
                        accusantium doloremque laudantium ....</p>
                    <p class="t2">Mai 04, 2024</p>
                </div>
            </div>
            <router-link to="/return">
            <div id="rec">
                <span>Rejoignez le digital Avec Nous.</span><br>
                <img src="../../assets/cont/logo.png" width="64px" id="logo">
            </div></router-link>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            currentIndex: 0,
            images: [
            require("../../assets/AI23.jpg"),
            require("../../assets/AI22.jpg"),
            require("../../assets/AI21.jpg"),
            require("../../assets/AI24.jpg"),
        ]
        };
    },
    methods: {
        nextSlide() {
            this.currentIndex = (this.currentIndex + 1) % this.images.length;
        },
        prevSlide() {
            this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
        }
    }
}
</script>

<style scoped>
/* parti1*/ 
.tot{
    font-family: 'Poppins', sans-serif;
    background-color: #f0f0f0;
}
#body{
    background-color:#214367 ;
    margin-top: -60px;
    
}
#tit {
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 60px;
    line-height: 90px;
    color: #FFFFFF;
    text-align: center;
}
.esp{
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    height: 40px;
    margin-top:-50px ;
}
.slideshow {
    position: relative;
    max-width: 100%;
    margin: auto;
}

.slideshow img {
    width: 80%;
    margin-left: 10%;
}

.prev, .next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 30px;
    padding: 15px;
    background: rgba(88, 88, 88, 0.5);
    color: #ffffff;
    border: none;
    cursor: pointer;
    z-index: 100;
}

.prev {
    left: 0;
}

.next {
    right: 0;
}
/*partiiiii 222222222 */
#exp {
    width: 253px;
    height: 90px;
    top: 824px;
    left: 60px;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 60px;
    line-height: 90px;
    color: #000000;
}
.b {
    min-width: 100px;
    height: 55px;
    top: 1037px;
    border-radius: 60px;
    background-color: #D9D9D9;
    border: none;
    cursor: pointer;
    padding: 20px;
    margin-right: 13px;
}
#but{
    padding: 30px;
}
img{
    border-radius: 15px;
}
.sec1 {
    width: 356px;
    max-width: 100%;
    height: auto;
    border-radius: 25px;
    margin-bottom: 20px; 
    margin-right: 20px; 
    display: inline-block; 
    vertical-align: top; 
}

.sec1 img {
    width: 356px;
    max-width: 100%;
    height: auto;
    margin-bottom: 10px;
}
.sec1 .t1 {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    color: #000000;
}
.sec1 .t2 {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    width: 356px;
    color: #8A8A8A;
}
#info{
    display: inline-block;
}
#rec{
    background-color: #214367;
    border-radius: 25px;
    width: 100%;
    height: 500px;
    text-decoration: none;
}
#tous{
    display: flex;
}
span{
    width: 348px;
    height: 276px;
    top: 75px;
    left: 17px;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 61px;
    line-height: 91.5px;
    color: #FFFFFF;
    text-decoration: none;
}
.b:hover{
    background-color: #8d8b8b;
}
#logo{
    width: 64px;
    height: 64px;
    top: 570px;
    left: 90px;
    margin-top: 20%;
    margin-left: 30%;
}
</style>