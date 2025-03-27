
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
  import { getFirestore, collection, setDoc, doc } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-firestore.js";
  import { getAuth, createUserWithEmailAndPassword,sendEmailVerification } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js";
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
  const auth = getAuth(app);
  const db = getFirestore(app)
  const userColRef = collection(db, "BOOK HAVEN");


signUpForm.addEventListener("submit", createSignUpAccount);
async function createSignUpAccount(e) {
   try {
     e.preventDefault();
     spinner.classList.remove("d-none")
     submitBTN.disabled = true
     errorP.textContent ="";
     const userDetails = {
        name:signUpForm.fullName.value.trim(),
        email:signUpForm.email.value.trim(),
        password:signUpForm.password.value.trim(),
     }
     const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
     if (!emailRegex.test((userDetails.email))) {
        throw new Error("*Invaild Email Address*");
        
     }
     if (userDetails.password.length < 6) {
        throw new Error("*Your password should be at least 6 characters*");
     }
     const {email,password, ...details} = userDetails;
     const res = await createUserWithEmailAndPassword(auth, email, password);
     await sendEmailVerification(res.user)
     const docRef = doc(userColRef, res.user.uid)
     const docRes = await setDoc(docRef, details);
     console.log(res); 
     showAlert()
     setTimeout(() => {
      location.href = 'html/sign in.html'
     }, 2000);
    } catch (error) {
      if (error.message === "Firebase: Error (auth/email-already-in-use).") {
        errorP.textContent = "Email already exist";
        return;
      }
     console.log(error);
     errorP.textContent += error.message;
    } finally{
      spinner.classList.add("d-none")
      submitBTN.disabled = false
   }
    
    
}
submitBTN.addEventListener("submit", showAlert);
function showAlert() {
  Swal.fire({
    title: "Hello!",
    text: "Signed Up successfully",
    icon: "success",
    confirmButtonText: "OK"
  });
}