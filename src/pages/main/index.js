import React from 'react';
import { Link } from 'react-router-dom';
import ProductsList from '../../components/ProductsList';

const Main = () => {
  return (
    <div>
      <nav>
        <h3>Lorem Ipsum STOCK</h3>
        <Link to="forms">Add Product</Link>
      </nav>
      <ProductsList />
    </div>
  );
};

export default Main;
