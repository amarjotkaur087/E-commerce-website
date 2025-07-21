document.addEventListener('DOMContentLoaded', () => {
    const categories = [
        { id: "electronics", title: "Electronics", image: "Electronics.jfif", description: "Latest gadgets and electronic devices." },
        { id: "fashion", title: "Fashion", image: "Fashion.jfif", description: "Trendy and stylish clothing and accessories." },
        { id: "home-appliances", title: "Home Appliances", image: "HomeAppliances.jfif", description: "Essential appliances for your home." },
        { id: "books", title: "Books", image: "Books.jfif", description: "Wide range of books and literature." }
    ];

    const categoryList = document.getElementById('categoryList');
    const categoryFilter = document.getElementById('categoryFilter');

    function displayCategories(filter) {
        categoryList.innerHTML = '';
        const filteredCategories = filter === 'all' ? categories : categories.filter(cat => cat.id === filter);
        filteredCategories.forEach(category => {
            const categoryCard = document.createElement('div');
            categoryCard.className = 'category-card';

            const categoryLink = document.createElement('a');
            categoryLink.href = `products.html?category=${encodeURIComponent(category.id)}`;

            const imageFrame = document.createElement('div');
            imageFrame.className = 'category-image-frame';

            const categoryImage = document.createElement('img');
            categoryImage.src = `./${category.image}`;
            categoryImage.alt = category.title;

            const categoryTitle = document.createElement('h3');
            categoryTitle.textContent = category.title;

            const categoryDesc = document.createElement('p');
            categoryDesc.textContent = category.description;

            imageFrame.appendChild(categoryImage);
            categoryLink.appendChild(imageFrame);
            categoryLink.appendChild(categoryTitle);
            categoryLink.appendChild(categoryDesc);

            categoryCard.appendChild(categoryLink);
            categoryList.appendChild(categoryCard);
        });
    }

    categoryFilter.addEventListener('change', () => {
        displayCategories(categoryFilter.value);
    });

    // Initial display of all categories
    displayCategories('all');
});
