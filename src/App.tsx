import './scss/app.scss'
import React from 'react'
import { Route, Routes } from 'react-router-dom';

//Импорт страниц
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import Cart from './Pages/Cart';
import FullPizza from './Pages/FullPizza';

//Импорт layouts
import MainLayout from './layouts/MainLayout';

function App() {

  return (
    <Routes>
      <Route path='/' element={<MainLayout />} >
        <Route path='' element={<Home />} />
        <Route path='cart.html' element={<Cart />} />
        <Route path='*' element={<NotFound />} />
        <Route path='pizza/:id' element={<FullPizza />} />
      </Route>
    </Routes>
  );
}

export default App;
