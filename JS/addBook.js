// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBmw4cU8PJ_Fjl5-OueqW7j-NUrvuTDgck",
    authDomain: "book-haven-47eeb.firebaseapp.com",
    projectId: "book-haven-47eeb",
    storageBucket: "book-haven-47eeb.firebasestorage.app",
    messagingSenderId: "186873485955",
    appId: "1:186873485955:web:0c1820dddf6a524ac299b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const colRef = collection(db, "Add book");


const addBookForm = document.getElementById('addBookForm');
const stars = document.querySelectorAll('.star');
const ratingInput = document.getElementById('rating');




addBookForm.addEventListener("submit", createAddBookForm);

async function createAddBookForm(e) {
    e.preventDefault();
    try {
        const userNewBook = {
            title: addBookForm.title.value.trim(),
            author: addBookForm.author.value.trim(),
            year: addBookForm.year.value.trim(),
            genre: addBookForm.genre.value.trim(),
            rating: addBookForm.rating.value.trim(),
            notes: addBookForm.notes.value.trim()
        };
        await addDoc(colRef, userNewBook);
        Swal.fire({
            icon: 'success',
            title: 'Book Added!',
            text: 'Your book has been added to the library.',
            confirmButtonText: 'OK'
        }).then((result) => {
            if (result.isConfirmed) {
                addBookForm.reset();
                ratingStars.forEach(s => s.classList.remove('active'));
                ratingInput.value = 0;
                document.getElementById('cover-preview').style.display = 'none';
            }
        });
        // alert("add book successfully")
        showAlert()
    } catch (error) {
        console.log(" error addind book", error);
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'There was an error adding the book. Please try again.',
        });

    }

}

// Star rating functionality


stars.forEach(star => {
    star.addEventListener('click', () => {
        const value = parseInt(star.getAttribute('data-value'));
        ratingInput.value = value;

        // Update star display
        stars.forEach(s => {
            if (parseInt(s.getAttribute('data-value')) <= value) {
                s.classList.add('active');
            } else {
                s.classList.remove('active');
            }
        });
    });
});

// Image preview functionality
function previewImage(event) {
    const preview = document.getElementById('cover-preview');
    const file = event.target.files[0];

    if (file) {
        preview.style.display = 'block';
        const reader = new FileReader();

        reader.onload = function (e) {
            preview.src = e.target.result;
        }

        reader.readAsDataURL(file);
    } else {
        preview.style.display = 'none';
    }
}

// Form submission
document.getElementById('addBookForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // In a real application, you would handle the form data here
    // For example, send it to a server using fetch or XMLHttpRequest

    // Show success message for demo purposes
    const successMessage = document.getElementById('success-message');
    successMessage.style.display = 'block';

    // Reset form after successful submission
    setTimeout(() => {
        this.reset();
        document.getElementById('cover-preview').style.display = 'none';
        stars.forEach(s => s.classList.remove('active'));
        ratingInput.value = 0;
        successMessage.style.display = 'none';
    }, 3000);
});

// Function to go back to dashboard
function goToDashboard() {
    // In a real application, you would redirect to your dashboard page
    // For now, just show an alert
    alert('Redirecting to dashboard...');
    // window.location.href = 'dashboard.html';
}
