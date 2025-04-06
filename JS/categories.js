const bookCategories = [
    { name: "Fiction" },
    { name: "Science Fiction" },
    { name: "Mystery" },
    { name: "Thriller" },
    { name: "Romance" },
    { name: "Historical Fiction" },
    { name: "Fantasy" },
    { name: "Biography" },
    { name: "Self-Help" },
    { name: "Cookbooks" },
    { name: "Science" },
    { name: "Technology" },
];

const categoriesList = document.getElementById("categoriesList");

function displayCategories(categories) {
  categories.forEach((category) => {
    const listItem = document.createElement("li");
    listItem.textContent = category.name;
    categoriesList.appendChild(listItem);
  });
}

displayCategories(bookCategories);
