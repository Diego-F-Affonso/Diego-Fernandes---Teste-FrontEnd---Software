import React from 'react';
import { Link } from 'react-router-dom';
import Form from '../../components/forms/index';

const Forms = () => {
  return (
    <>
      <h1>Product addition form</h1>
      <Link to="/">Pagina Principal</Link>
      <Form />
    </>
  );
};

export default Forms;
