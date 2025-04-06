// Book categories data with icons and descriptions
const categories = [
  { id: 1, name: "Fiction", icon: "📚", description: "Novels and short stories" },
  { id: 2, name: "Non-Fiction", icon: "🧠", description: "Educational and informative" },
  { id: 3, name: "Science Fiction", icon: "🚀", description: "Future and space adventures" },
  { id: 4, name: "Fantasy", icon: "🐉", description: "Magic and mythical worlds" },
  { id: 5, name: "Mystery", icon: "🔍", description: "Suspense and detective stories" },
  { id: 6, name: "Biography", icon: "👤", description: "Life stories of real people" },
  { id: 7, name: "History", icon: "⏳", description: "Events from the past" },
  { id: 8, name: "Self-Help", icon: "⭐", description: "Personal development" },
  { id: 9, name: "Romance", icon: "❤", description: "Love stories" },
  { id: 10, name: "Poetry", icon: "🎭", description: "Verse and lyrical works" },
  { id: 11, name: "Children's", icon: "🧸", description: "For young readers" },
  { id: 12, name: "Young Adult", icon: "🏫", description: "Teen and coming-of-age" }
];

// Function to populate the categories list with card-style elements
function displayCategories() {
  const categoriesList = document.getElementById('categoriesList');
  
  categories.forEach(category => {
      // Create card element
      const categoryCard = document.createElement('div');
      categoryCard.className = 'category';
      categoryCard.setAttribute('data-id', category.id);
      
      // Create icon element
      const iconElement = document.createElement('div');
      iconElement.className = 'category-icon';
      iconElement.textContent = category.icon;
      iconElement.style.fontSize = '2.5rem';
      iconElement.style.marginBottom = '10px';
      
      // Create heading element
      const categoryName = document.createElement('h3');
      categoryName.textContent = category.name;
      categoryName.style.marginBottom = '8px';
      
      // Create description element
      const categoryDesc = document.createElement('p');
      categoryDesc.textContent = category.description;
      categoryDesc.style.fontSize = '0.9rem';
      categoryDesc.style.color = '#666';
      categoryDesc.style.margin = '0';
      
      // Assemble card
      categoryCard.appendChild(iconElement);
      categoryCard.appendChild(categoryName);
      categoryCard.appendChild(categoryDesc);
      categoriesList.appendChild(categoryCard);
      
      // Add hover effect style
      categoryCard.style.display = 'flex';
      categoryCard.style.flexDirection = 'column';
      categoryCard.style.justifyContent = 'center';
      categoryCard.style.alignItems = 'center';
      categoryCard.style.height = '100%';
      categoryCard.style.transition = 'transform 0.3s, box-shadow 0.3s';
      
      // Add click event listener to each category
      categoryCard.addEventListener('click', () => {

      });
      
      // Add hover effects
      categoryCard.addEventListener('mouseenter', () => {
          categoryCard.style.transform = 'translateY(-5px)';
          categoryCard.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.15)';
      });
      
      categoryCard.addEventListener('mouseleave', () => {
          categoryCard.style.transform = 'translateY(0)';
          categoryCard.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
      });
  });
}

// Call the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', displayCategories);
