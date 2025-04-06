
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
  import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "AIzaSyBmw4cU8PJ_Fjl5-OueqW7j-NUrvuTDgck",
    authDomain: "book-haven-47eeb.firebaseapp.com",
    projectId: "book-haven-47eeb",
    storageBucket: "book-haven-47eeb.firebasestorage.app",
    messagingSenderId: "186873485955",
    appId: "1:186873485955:web:0c1820dddf6a524ac299b6"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  // const colRef = collection(db, "Add book")

  window.firebaseDB = db;


document.addEventListener("DOMContentLoaded", async () => {
    const db = window.firebaseDB;
    const bookList = document.getElementById("book-list");
  
    try {
      const snapshot = await getDocs(collection(db, "Add book"));
  
      if (snapshot.empty) {
        bookList.innerHTML = "<p>No books found in your library.</p>";
        return;
      }
  
      snapshot.forEach((doc) => {
        const book = doc.data();
  
        const bookCard = document.createElement("div");
        bookCard.classList.add("book-card");
  
        bookCard.innerHTML = `
          <div class="book-cover">
            <img src="${book.coverURL || 'default.jpg'}" alt="${book.title}">
          </div>
          <div class="book-details">
            <h3>${book.title}</h3>
            <p><strong>Author:</strong> ${book.author}</p>
            ${book.genre ? `<p><strong>Genre:</strong> ${book.genre}</p>` : ""}
            ${book.year ? `<p><strong>Year:</strong> ${book.year}</p>` : ""}
            ${book.rating ? `<p><strong>Rating:</strong> ${"⭐".repeat(book.rating)}</p>` : ""}
            ${book.notes ? `<p><strong>Notes:</strong> ${book.notes}</p>` : ""}
          </div>
        `;
  
        bookList.appendChild(bookCard);
      });
  
    } catch (err) {
      console.error("Error loading books: ", err);
      bookList.innerHTML = "<p>Failed to load books. Try again later.</p>";
    }
  });
  

document.getElementById("search-input").addEventListener("input", function () {
    let searchQuery = this.value.toLowerCase();
    let books = document.querySelectorAll(".book-card");

    books.forEach(book => {
        let title = book.querySelector("h3").textContent.toLowerCase();
        let author = book.querySelector("p").textContent.toLowerCase();

        if (title.includes(searchQuery) || author.includes(searchQuery)) {
            book.style.display = "block"; // Show matching books
        } else {
            book.style.display = "none"; // Hide non-matching books
        }
    });
});
document.addEventListener("DOMContentLoaded", function(){
    const sideBar = document.querySelector(".sidebar");
    const bar = document.querySelector(".fa-bars");
    function closeSideBar() {
        
    }
});