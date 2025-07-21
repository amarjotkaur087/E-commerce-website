$(document).ready(function () {
    // Load cartProducts from localStorage or initialize empty
    let cartProducts = JSON.parse(localStorage.getItem('cartProducts')) || [];

    // Products data for price and image reference
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

    // Update cartProducts prices and images from products data
    cartProducts = cartProducts.map(cartItem => {
        const product = products.find(p => p.id === cartItem.id);
        if (product) {
            return { ...cartItem, price: product.price, image: product.image };
        }
        return cartItem;
    });

    function saveCart() {
        localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
    }

    function renderCart() {
        const cartList = $('#cartProductsList');
        cartList.empty();
        let total = 0;
        cartProducts.forEach(product => {
            const subtotal = product.price * product.quantity;
            total += subtotal;
            const row = `
                <tr data-id="${product.id}">
                    <td>${product.name}</td>
                    <td><img src="${product.image}" alt="${product.name}" width="50" /></td>
                    <td><input type="number" class="quantity-input" min="1" value="${product.quantity}" /></td>
                    <td>₹${product.price.toFixed(2)}</td>
                    <td class="subtotal">₹${subtotal.toFixed(2)}</td>
                </tr>
            `;
            cartList.append(row);
        });
        $('#totalAmount').text(`₹${total.toFixed(2)}`);
    }

    function updateQuantity(productId, newQuantity) {
        const product = cartProducts.find(p => p.id === productId);
        if (product) {
            product.quantity = newQuantity;
            saveCart();
            renderCart();
        }
    }

    function addToCart(product) {
        const existingProduct = cartProducts.find(p => p.id === product.id);
        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            cartProducts.push({ ...product, quantity: 1 });
        }
        saveCart();
        renderCart();
    }

    $('#cartProductsList').on('change', '.quantity-input', function () {
        const row = $(this).closest('tr');
        const productId = parseInt(row.data('id'), 10);
        let newQuantity = parseInt($(this).val(), 10);
        if (isNaN(newQuantity) || newQuantity < 1) {
            newQuantity = 1;
            $(this).val(newQuantity);
        }
        updateQuantity(productId, newQuantity);
    });

    renderCart();

    // Expose addToCart function globally for use in other scripts
    window.addToCart = addToCart;
});
