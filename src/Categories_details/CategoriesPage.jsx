import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CategoriesPage.css';

const CategoriesPage = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('/cat.json')
      .then(response => {
        if (Array.isArray(response.data.products)) {
          setCategories(response.data.products);
        } else {
          console.error('Unexpected response format:', response.data);
        }
      })
      .catch(error => console.error('Error fetching categories:', error));
  }, []);

  return (
    <div className="categories-page">
      <h2>Categories</h2>
      <div id="categories-container">
        {Array.isArray(categories) && categories.map(category => (
          <div key={category.id} className="category">
            <img src={category.thumbnail} alt={category.title} />
            {category.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;