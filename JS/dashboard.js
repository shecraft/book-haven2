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