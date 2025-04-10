// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmw4cU8PJ_Fjl5-OueqW7j-NUrvuTDgck",
  authDomain: "book-haven-47eeb.firebaseapp.com",
  projectId: "book-haven-47eeb",
  storageBucket: "book-haven-47eeb.firebasestorage.app",
  messagingSenderId: "186873485955",
  appId: "1:186873485955:web:dcd46f0b2a893b5fc299b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)


signInForm.addEventListener("submit", logInUser)
async function logInUser(e) {
  e.preventDefault();
  errorP.textContent = ""; // Clear previous errors
  
  // Check for internet connection
  if (!navigator.onLine) {
      errorP.textContent = "No internet connection. Please check your connection and try again.";
      return; // Exit the function if no internet
  }

  try {
      const userDeatails = {
          email: signInForm.email.value.trim(),
          password: signInForm.password.value.trim(),
      };
      await signInWithEmailAndPassword(auth, userDeatails.email, userDeatails.password);
      const user = auth.currentUser
      showAlert();
      setTimeout(() => {
          location.href = `Dashboard.html?id=${user.uid}`;
      }, 2000);
  } catch (error) {
      console.log(error.message);
      if (error.message === "Firebase: Error (auth/invalid-credential).") {
          errorP.textContent = "*Invalid email/password.";
      } else {
          errorP.textContent = "An unexpected error occurred. Please try again later.";
      }
  }
}
onAuthStateChanged(auth, (user)=>{
  if (user) {
      console.log(user);
      
  }else{
      console.log("No one is signed In");
      
  }
})
submitBTN.addEventListener("submit", showAlert);
function showAlert() {
Swal.fire({
  title: "Sign In!",
  text: "Successfully registered",
  icon: "success",
  confirmButtonText: "OK"
  });
}
