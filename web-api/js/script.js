function fetchData() {
    const url = 'https://dummyjson.com/products/1';

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            // Handle the data and display it in HTML
            displayProductDetails(data);
        })
        .catch(error => {
            // Handle errors here
            console.error('Fetch error:', error);
        });
}

function displayProductDetails(product) {
    const productDetailsContainer = document.getElementById('product-details');

    const html = `
      <h2>${product.title}</h2>
      <p>${product.description}</p>
      <p><strong>Price:</strong> $${product.price}</p>
      <p><strong>Discount:</strong> ${product.discountPercentage}%</p>
      <p><strong>Rating:</strong> ${product.rating}</p>
      <p><strong>Stock:</strong> ${product.stock}</p>
      <p><strong>Brand:</strong> ${product.brand}</p>
      <p><strong>Category:</strong> ${product.category}</p>
      <img src="${product.thumbnail}" alt="${product.title} Thumbnail">

      <h3>Additional Images</h3>
      <ul>
        ${product.images.map(image => `<li><img src="${image}" alt="${product.title} Image"></li>`).join('')}
      </ul>
    `;

    productDetailsContainer.innerHTML = html;
}

// Call the fetchData function to retrieve and display product details
fetchData();