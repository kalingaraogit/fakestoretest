import React, { useState } from 'react';
import './App.css';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState([]);

  const handleSearch = async () => {
    // This is where you would fetch data from Amazon's API or use a predefined list
    // For this example, we'll use a mock product list
    const mockProducts = [
      { id: 1, name: 'Product 1', url: 'https://www.amazon.com/dp/B08N5WRWNW' },
      { id: 2, name: 'Product 2', url: 'https://www.amazon.com/dp/B08N5T9W1S' },
      // Add more mock products as needed
    ];

    // Filter products based on search query
    const filteredProducts = mockProducts.filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setProducts(filteredProducts);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Amazon Affiliate Marketing</h1>
        <input
          type="text"
          id="search-box"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for products..."
        />
        <button onClick={handleSearch}>Search</button>
      </header>
      <main>
        <ul className="product-list">
          {products.map(product => (
            <li key={product.id} className="product-item">
              <a href={product.url} target="_blank" rel="noopener noreferrer">
                {product.name}
              </a>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
