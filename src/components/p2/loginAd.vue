<template>
    <div id="login-page">
      <div id="f1"></div>
      <div id="f2"></div>
      <div id="f3"></div>
      <div id="f4"></div>
      <div id="login-container">
        <form id="login-form" @submit.prevent="handleSubmit">
          <h2>Veuillez remplir vos informations de connexion d'administrateur uniques ci-dessous</h2>
          <div class="form-group">
            <label for="username">Adresse email</label>
            <input type="text" v-model="email" id="username" required>
          </div>
          <div class="form-group">
            <label for="password">Mot de passe</label>
            <input type="password" v-model="password" id="password" required>
          </div>
          <div id="forget"><a href="">Mot de passe oublié ?</a></div>
          <button type="submit">Se connecter</button>
        </form>
        <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
        <div v-if="welcomeMessage" class="welcome-message">{{ welcomeMessage }}</div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { auth, db, signInWithEmailAndPassword, doc, getDoc } from '../../firebase/firebaseConfig.js';
  
  export default {
    
    setup() {
      const email = ref('');
      const password = ref('');
      const errorMessage = ref('');
      const welcomeMessage = ref('');
  
      const handleSubmit = async () => {
        errorMessage.value = '';
        welcomeMessage.value = '';
        try {
          console.log('Attempting to sign in with email:', email.value);
          await signInWithEmailAndPassword(auth, email.value, password.value);
          console.log('Signed in successfully');
          await checkIfAdmin(email.value);
        } catch (error) {
          console.error('Erreur de connexion:', error);
          errorMessage.value = 'Échec de l\'authentification. Veuillez vérifier votre email et votre mot de passe.';
        }
      };
  
      const checkIfAdmin = async (email) => {
        try {
          const adminDocRef = doc(db, 'admins', 'XreYUJqCMEeEYrotFeaMD6Z7ZJq1'); // Remplacez par votre ID d'administrateur
          const adminDoc = await getDoc(adminDocRef);
  
          console.log('adminDoc:', adminDoc); // Affiche les détails du document
          if (adminDoc.exists()) {
            console.log('adminDoc.data():', adminDoc.data()); // Affiche les données du document
            if (adminDoc.data().email === email) {
              welcomeMessage.value = 'Bienvenue Admin !';
            } else {
              errorMessage.value = 'Vous n\'êtes pas autorisé à vous connecter.';
            }
          } else {
            errorMessage.value = 'Le document administrateur n\'existe pas.';
          }
        } catch (error) {
          console.error('Erreur lors de la vérification de l\'administrateur:', error);
          errorMessage.value = 'Erreur lors de la vérification des droits d\'administrateur.';
        }
      };
  
      return { email, password, handleSubmit, errorMessage, welcomeMessage };
    }
  }
  </script>
  
  <style scoped>
  body, html {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: 'Inter', sans-serif;
  }
  
  #error-message, #welcome-message {
    margin-top: 10px;
    font-weight: bold;
    text-align: center;
    color: red; /* Vous pouvez changer la couleur selon vos préférences */
  }
  
  #welcome-message {
    color: green; /* Vous pouvez changer la couleur selon vos préférences */
  }
  
  #login-page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #214367;
    position: relative;
  }
  
  #login-container {
    background: #fff;
    padding: 40px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px; 
    z-index: 5;
  }
  
  #login-form {
    display: flex;
    flex-direction: column;
  }
  
  #login-form h2 {
    font-weight: 400;
    font-size: 20px;
    line-height: 29.05px;
    color: #666666;
    text-align: center;
    margin-bottom: 20px;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  .form-group label {
    display: block;
    margin-bottom: 5px;
    font-size: 16px;
    color: #666666;
  }
  
  .form-group input {
    width: 100%;
    padding: 10px;
    border:transparent;
    border-radius: 5px;
    background-color: #F5F5F5;
    box-sizing: border-box; 
  }
  
  .form-group input:focus {
    border-color: #214367;
    outline: none;
    box-shadow: 0 0 0 2px rgba(33, 67, 103, 0.2);
  }
  
  #forget {
    font-size: 14px;
    color: #999999;
    text-align: right;
    margin-bottom: 20px;
  }
  
  #forget a {
    text-decoration: none;
    color: inherit;
  }
  
  button[type="submit"] {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: #214367;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
  }
  
  button[type="submit"]:hover {
    background-color: #163147;
  }
  
  #welcome-message, .error-message {
    text-align: center;
    margin-top: 10px;
    font-weight: bold;
  }
  
  #f1, #f2, #f3, #f4 {
    position: absolute;
  }
  
  #f1 {
    width: 60%;
    height: 500px;
    right: 0;
    background-image: url('../../assets/login/cad.png');
    top: 10px;
    background-size: cover;
    background-repeat: no-repeat;
  }
  
  #f2 {
    background-size: contain;
    background-repeat: no-repeat;
    width: 25%;
    height: 30%;
    top: 27%;
    left: 0;
    background-image: url('../../assets/login/cerc.png');
    z-index: 2;
  }
  
  #f3 {
    background-size: contain;
    background-repeat: no-repeat;
    width: 30%;
    height: 95%;
    left: 0;
    background-image: url('C:/Users/ASUS/rout/src/assets/login/cer2.png');
    z-index: 0;
  }
  
  #f4 {
    background-size: contain;
    background-repeat: no-repeat;
    width: 23%;
    height: 70%;
    top: 20%;
    left: 0;
    background-image: url('../../assets/login/Ellipse (2).png');
    z-index: 1;
  }
  </style>
  