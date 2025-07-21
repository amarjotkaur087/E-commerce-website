$(document).ready(function () {
    const products = [
        { id: 1, name: "Smartphone", price: 199, image: "4.jfif" },
        { id: 2, name: "Laptop", price: 499, image: "5.jfif" },
        { id: 3, name: "T-Shirt", price: 29, image: "https://via.placeholder.com/200?text=T-Shirt" },
        { id: 4, name: "Jeans", price: 59, image: "https://via.placeholder.com/200?text=Jeans" },
        { id: 5, name: "Microwave", price: 99, image: "https://via.placeholder.com/200?text=Microwave" },
        { id: 6, name: "Refrigerator", price: 299, image: "https://via.placeholder.com/200?text=Refrigerator" },
        { id: 7, name: "Novel Book", price: 19, image: "https://via.placeholder.com/200?text=Novel+Book" },
        { id: 8, name: "Cookbook", price: 25, image: "https://via.placeholder.com/200?text=Cookbook" }
    ];

    function displayResults(results) {
        const container = $('#searchResults');
        container.empty();
        if (results.length === 0) {
            container.append('<p>No products found.</p>');
            return;
        }
        results.forEach(product => {
            const productCard = `
                <div class="product-card">
                    <img src="${product.image}" alt="${product.name}" />
                    <h3>${product.name}</h3>
                    <p>$${product.price}</p>
                </div>
            `;
            container.append(productCard);
        });
    }

    $('#searchInput').on('input', function () {
        const query = $(this).val().toLowerCase();
        const filtered = products.filter(p => p.name.toLowerCase().includes(query));
        displayResults(filtered);
    });

    // Initial display of all products
    displayResults(products);
});
