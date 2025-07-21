
$(document).ready(function () {
    const products = [
        { id: 1, name: "Smartphone", category: "electronics", price: 199, image: "4.jfif", rating: 4 },
        { id: 2, name: "Laptop", category: "electronics", price: 499, image: "5.jfif", rating: 5 },
        { id: 3, name: "T-Shirt", category: "fashion", price: 29, image: "6.jfif", rating: 3 },
        { id: 4, name: "Jeans", category: "fashion", price: 59, image: "7.jfif", rating: 4 },
        { id: 5, name: "Microwave", category: "home-appliances", price: 99, image: "8.jfif", rating: 4 },
        { id: 6, name: "Refrigerator", category: "home-appliances", price: 299, image: "9.jfif", rating: 5 },
        { id: 7, name: "Novel Book", category: "books", price: 19, image: "10.jfif", rating: 3 },
        { id: 8, name: "Fiction Book", category: "books", price:30, image: "11.jfif", rating: 4 },
        { id: 9, name: "Tablet", category: "electronics", price:896, image: "12.jfif", rating: 5 },
        { id: 10, name: "Smartwatch", category: "electronics", price:1000, image: "13.jfif", rating: 4 },
        {id: 11, name: "Bagpack", category: "fashion", price:600, image:"14.jfif", rating:5},
        {id: 12, name: "Shoes", category: "fashion", price:960, image:"15.jfif",rating:5}
    ];

    function displayProducts(filteredProducts) {
        const productsList = $('#productsList');
        productsList.empty();
        if (filteredProducts.length === 0) {
            productsList.append('<p>No products found.</p>');
            return;
        }
        filteredProducts.forEach(product => {
            const stars = '★★★★★'.slice(0, product.rating) + '☆☆☆☆☆'.slice(product.rating);
            const productCard = `
                <div class="product-card" data-id="${product.id}">
                    <img src="${product.image}" alt="${product.name}" />
                    <h3>${product.name}</h3>
                    <p>₹${product.price}</p>
                    <div class="product-rating">${stars}</div>
                </div>
            `;
            productsList.append(productCard);
        });

        // Add click event handler to product cards
        $('.product-card').click(function () {
            const productId = parseInt($(this).data('id'), 10);
            const product = filteredProducts.find(p => p.id === productId);
            if (product) {
                showProductOptions(product);
            }
        });
    }

    function filterProducts() {
        const selectedCategory = $('#categoryFilter').val();
        const maxPrice = parseInt($('#priceRange').val(), 10);

        $('#priceValue').text(`₹0 - ₹${maxPrice}`);

        let filtered = products.filter(product => product.price <= maxPrice);
        if (selectedCategory !== 'all') {
            filtered = filtered.filter(product => product.category === selectedCategory);
        }
        displayProducts(filtered);
    }

    function showProductOptions(product) {
        const modal = $('#productOptionsModal');
        modal.find('.modal-product-name').text(product.name);
        modal.data('product', product);
        modal.show();
    }

    $('#addToCartBtn').click(function () {
        const modal = $('#productOptionsModal');
        const product = modal.data('product');
        if (product && window.addToCart) {
            window.addToCart(product);
            modal.hide();
            // Redirect to cart page after adding to cart
            window.location.href = './cart.html';
        } else {
            modal.hide();
        }
    });

    $('#buyNowBtn').click(function () {
        alert('Buy Now functionality is not implemented yet.');
        $('#productOptionsModal').hide();
    });

    $('#closeModalBtn').click(function () {
        $('#productOptionsModal').hide();
    });

    $('#categoryFilter').change(filterProducts);
    $('#priceRange').on('input', filterProducts);

    // Check for productId in URL to open modal on page load
    function getQueryParam(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }

    const productIdFromUrl = getQueryParam('productId');
    if (productIdFromUrl) {
        const productIdNum = parseInt(productIdFromUrl, 10);
        const productToShow = products.find(p => p.id === productIdNum);
        if (productToShow) {
            showProductOptions(productToShow);
        }
    }

    // Initial display
    displayProducts(products);

});
