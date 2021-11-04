import React, { useContext, useEffect } from 'react';
import ProductsContext from '../../context/productsContext';
import { registerProduct } from '../../service/index';

const Form = () => {
  const { newProduct, setNewProduct } = useContext(ProductsContext);
  useEffect(() => {}, [newProduct]);
  return (
    <form>
      <label htmlFor="quantity">
        Quantity:
        <input
          type="number"
          name="quantity"
          placeholder="00"
          onChange={({ target }) => {
            setNewProduct({ ...newProduct, quantity: target.value });
          }}
          required
        />
      </label>
      <label htmlFor="price">
        Price:
        <input
          type="number"
          name="price"
          placeholder="0,00"
          onChange={({ target }) => {
            setNewProduct({ ...newProduct, price: target.value });
          }}
          required
        />
      </label>
      <label htmlFor="product">
        <p>Produto</p>
        Name:
        <input
          type="text"
          name="product"
          placeholder="Xadrez"
          id="name"
          onChange={({ target }) => {
            setNewProduct({
              ...newProduct,
              product: { ...newProduct.product, nameProduct: target.value },
            });
          }}
          required
        />
        Category:
        <input
          type="text"
          name="product"
          placeholder="Tabuleiro"
          id="Category"
          onChange={({ target }) => {
            setNewProduct({
              ...newProduct,
              product: { ...newProduct.product, category: target.value },
            });
          }}
          required
        />
      </label>
      <label htmlFor="client">
        <p>Client</p>
        Name:
        <input
          type="text"
          name="client"
          placeholder="Maria Joaquina"
          onChange={({ target }) => {
            setNewProduct({
              ...newProduct,
              client: { ...newProduct.client, name: target.value },
            });
          }}
          required
        />
        Company:
        <input
          type="text"
          name="client"
          placeholder="Brinquedos SA"
          onChange={({ target }) => {
            setNewProduct({
              ...newProduct,
              client: { ...newProduct.client, company: target.value },
            });
          }}
          required
        />
      </label>
      <label htmlFor="active">
        Active:
        <input
          type="radio"
          name="active"
          value="true"
          id="true"
          onChange={({ target }) => {
            setNewProduct({ ...newProduct, active: target.value });
          }}
          required
        />{' '}
        True
        <input
          type="radio"
          name="active"
          value="false"
          id="false"
          onChange={({ target }) => {
            setNewProduct({ ...newProduct, active: target.value });
          }}
          required
        />{' '}
        False
      </label>
      <input
        type="submit"
        value="Enviar"
        onSubmit={() => {
          registerProduct(newProduct);
        }}
      />
    </form>
  );
};

export default Form;
