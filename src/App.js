import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Main from './pages/main';
import Forms from './pages/forms/index';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="forms" element={<Forms />} />
    </Routes>
  );
}

export default App;
