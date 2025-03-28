
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
    try {
        e.preventDefault()
        errorP.textContent = ""
        const userDeatails = {
            email: signInForm.email.value.trim(),
            password: signInForm.password.value.trim(),
        }
        await signInWithEmailAndPassword(auth, userDeatails.email, userDeatails.password)
        showAlert()
        setTimeout(() => {
            location.href = 'Dashboard.html'
        }, 2000);
    } catch (error) {
        console.log(error.message);
        if (error.message === "Firebase: Error (auth/invalid-credential).") {
            errorP.textContent = "*Invalid email/password."  
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
    confirmButtonText: "OK"
  });
}