import React from 'react';
import { Link } from 'react-router-dom';

const ProductsList = () => {
  return (
    <>
      <h1>ProductsList</h1>
      <Link to="/">Select</Link>
      <Link to="/">Delete</Link>
    </>
  );
};

export default ProductsList;
