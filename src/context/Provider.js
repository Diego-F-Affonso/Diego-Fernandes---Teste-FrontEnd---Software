import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ProductsContext from './productsContext';

// (_id, quantity, price, product (object), client (object), active)
const INITIAL_STATE_PRODUCT = {
  quantity: 0,
  price: 0,
  product: {
    nameProduct: '',
    category: '',
  },
  client: {
    name: '',
    company: '',
  },
  active: 'false',
};

function Provider({ children }) {
  const [newProduct, setNewProduct] = useState(INITIAL_STATE_PRODUCT);

  const valueProvider = { newProduct, setNewProduct };

  return (
    <ProductsContext.Provider value={valueProvider}>
      {children}
    </ProductsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
