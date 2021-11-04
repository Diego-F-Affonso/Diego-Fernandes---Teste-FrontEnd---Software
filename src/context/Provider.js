import React from 'react';
import PropTypes from 'prop-types';
import ProductsContext from './productsContext';

function Provider({ children }) {
  const valueProvider = {};

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
