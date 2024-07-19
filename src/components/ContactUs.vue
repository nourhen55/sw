<template>
    <div>
        <div id="con" class="con">
            <section>
                <div class="sec">
                    <div id="p1">
                        <router-link to="/">
                        <img src="../assets/cont/logo.png" width="64px">
                    </router-link>
                        <p>Sw consulting est une agence digitale 
                            qui crée des produits centrés sur l'utilisateur 
                            qui aident son client à évoluer.</p>
                    </div>
                    <div id="p2">
                        <h1>About</h1>
                        <router-link to=""><b>About Us</b> </router-link>
                        <br><br>
                        <a class="ba" href="/expor"><b>Blogs</b></a>
                        <br><br>
                        <router-link to="/equipe">
                        <a class="ba" href="ourteam.html"><b>Careers</b></a>
                        <br><br></router-link>
                    </div>
                    <div id="p3">
                        <h1>Social Media</h1>
                        <table>
    <tr>
        <td>
            <img src="../assets/cont/Vector.png">
        </td>
        <td>
            <a class="ba" href="https://fb.com/SwConsulting"><b>fb.com/SwConsulting</b></a>
        </td>
    </tr>
    <tr>
        <td>
            <img src="../assets/cont/Group.png">
        </td>
        <td>
            <a class="ba" href="https://twitter.com/SwConsulting"><b>@SwConsulting</b></a>
        </td>
    </tr>
    <tr>
        <td>
            <img src="../assets/cont/Vector (1).png">
        </td>
        <td>
            <a class="ba" href="https://instagram.com/SwConsulting"><b>@SwConsulting</b></a>
        </td>
    </tr>
    <tr>
        <td>
            <img src="../assets/cont/Group (1).png">
        </td>
        <td>
            <a class="ba" href="https://dribbble.com/SwConsulting"><b>Dribbble.com/SwConsulting</b></a>
        </td>
    </tr>
</table>

                    </div>
                    <div id="p4">
                        <h1>Get In Touch with Us</h1>
                        <p>Need Answers? Need help?</p> 
                        <p>Just email us</p>
                        <div class="imm">
                        <input id="email" class="input" type="email" placeholder="your email" />
                        <img src="../assets/fl.png" alt="email icon">
                    </div>
                    </div>
                </div>
            </section>
            <br>
        </div>
        <footer>
            <div class="fin">
                <center><b>Copyright Sw Consulting 2023.</b></center>
            </div>
        </footer>
    </div>
</template>

<style scoped>
    body {
        font-family: 'Poppins', sans-serif;
        line-height: 1.6;
    }
    .con {
        background-color: #214367;
        color: #FFFFFF;
        padding: 20px;
    }
    #p1,#p4{
        text-align: center;
    }
    .imm {
            position: relative;
            display: inline-block;
        }
    .imm img {
            position: absolute;
            right: 10px;
            top: 50%;
            transform: translateY(-30%);
            width: 16px;
            height: 16px;
    }
    .imm input {
            padding-right: 30px; }
    #p1, #p2, #p3, #p4 {
        width: 255px;
        height: auto;
        padding: 10px;
        background-color: #214367;
        border-radius: 10px;
        margin-bottom: 20px;
        font-family: 'Arial', sans-serif;
    }
    .ba {
        text-decoration: none;
        color: #FFFFFF;
        text-align: left;
    }
    .ba:hover {
        text-decoration: underline;
    }
    #p3 img {
        margin-right: 15px;
    }
    h1, b {
        color: #FFFFFF;
    }
    .sec {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    .sec > div {
        margin: 20px;
    }
    
    .input {
        padding: 10px;
        margin-top: 10px;
        border: none;
        border-radius: 5px;
        width: 90%;
    }
    footer .fin {
        background-color: black;
        padding: 20px;
        color: #FFFFFF;
        font-family: 'Arial', sans-serif;
        
    }
    @media (max-width: 700px) {
        .sec {
            flex-direction: column;
            align-items: center;
        }
        .sec > div {
            margin: 20px 0;
        }
        #p2{
            text-align: center;
        }
    }
</style>
