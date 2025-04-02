// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";

// Firebase configuration
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
const colRef = collection(db, "Borrow book");

// Get form and button elements
const borrowForm = document.getElementById("borrowForm");
const submitBTN = document.getElementById("submitBTN");

// Handle form submission
borrowForm.addEventListener("submit", async function (e) {
  e.preventDefault();
  
  try {
    const borrowDetails = {
      name: borrowForm.name.value.trim(),
      email: borrowForm.email.value.trim(),
      book: borrowForm.book.value.trim(),
      borrowDate: borrowForm.borrowDate.value.trim(),
      returnDate: borrowForm.returnDate.value.trim(),
      timestamp: new Date(),
    };

    // Validate fields
    if (!borrowDetails.name || !borrowDetails.email || !borrowDetails.book || !borrowDetails.borrowDate || !borrowDetails.returnDate) {
      Swal.fire("Error", "All fields are required!", "error");
      return;
    }

    // Add data to Firestore
    await addDoc(colRef, borrowDetails);

    // Show success alert
    showAlert();

    // Redirect after 2 seconds
    setTimeout(() => {
      location.href = 'Dashboard.html';
    }, 2000);

    // Reset form
    borrowForm.reset();
  } catch (error) {
    console.error("Error borrowing book:", error);
    Swal.fire("Error", "Something went wrong!", "error");
  }
});

// Function to show alert
function showAlert() {
  Swal.fire({
    title: "Borrow Book!",
    text: "Book borrowed successfully",
    icon: "success",
    confirmButtonText: "OK"
  });
}
