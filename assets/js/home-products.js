// Load featured products and trending products for home page

$(document).ready(function () {
  // Load featured products for banner

  // Load trending products for card section
  function loadTrendingProducts() {
    const trendingProductsList = $('#trendingProductsList');
    trendingProductsList.empty();
    // Example trending products data
      const trendingProducts = [
        { id: 3, name: 'Smartphone', image: '4.jfif', price: '₹879' },
        { id: 4, name: 'Laptop', image: '5.jfif', price: '₹159' },
        { id: 5, name: 'T-shirt', image: '6.jfif', price: '₹809' },
      ];
    trendingProducts.forEach(product => {
      const productCard = $(`
        <div class="product-card" data-id="${product.id}">
          <a href="products.html?productId=${product.id}">
            <img src="${product.image}" alt="${product.name}" />
            <h3>${product.name}</h3>
            <p>${product.price}</p>
          </a>
        </div>
      `);
      trendingProductsList.append(productCard);
    });

    // Remove click event handler to open modal on home page trending products
    // $('.product-card').click(function () {
    //   const productId = parseInt($(this).data('id'), 10);
    //   const product = trendingProducts.find(p => p.id === productId);
    //   if (product) {
    //     // Show product options modal
    //     const modal = $('#productOptionsModal');
    //     modal.find('.modal-product-name').text(product.name);
    //     modal.data('product', product);
    //     modal.show();
    //   }
    // });
  }


  loadTrendingProducts();
});
