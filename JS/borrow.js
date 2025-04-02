
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
  import { getFirestore, collection,addDoc } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBmw4cU8PJ_Fjl5-OueqW7j-NUrvuTDgck",
    authDomain: "book-haven-47eeb.firebaseapp.com",
    projectId: "book-haven-47eeb",
    storageBucket: "book-haven-47eeb.appspot.com", 
    messagingSenderId: "186873485955",
    appId: "1:186873485955:web:dcd46f0b2a893b5fc299b6"
  };
 
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const colRef = collection(db, "Borrow book")


borrowForm.addEventListener("submit", createBorrowForm);
async function createBorrowForm(e) {
    e.preventDefault();
    try {
      spinner.classList.remove("d-none")
      submitBTN.disabled = true
        const borrowDetails ={
            name:borrowForm.name.value.trim(),
            email:borrowForm.email.value.trim(),
            book:borrowForm.book.value.trim(),
            borrowDate:borrowForm.borrowDate.value.trim(),
            returnDate:borrowForm.returnDate.value.trim(),
            timestamp: new Date() 
        }
     await addDoc(colRef, borrowDetails);
     showAlert()
     setTimeout(() => {
      location.href = 'Dashboard.html'
     }, 2000);
    //  alert("Borrowed successfully")
     borrowForm.reset()
    } catch (error) {
        console.log(error);
        
    }finally{
      spinner.classList.add("d-none")
      submitBTN.disabled = false
   }
}

submitBTN.addEventListener("submit", showAlert);
function showAlert() {
  Swal.fire({
    title: "Borrow Book!",
    text: "Book borrowed successfully",
    icon: "success",
    confirmButtonText: "OK"
  });
}