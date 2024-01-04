import React from 'react';
import './styles/app.scss';

/** Router */
import { Routes, Route } from 'react-router-dom';

/** Routes */
import HomePage from './pages/home/HomePage';
import ListPage from './pages/list/ListPage';
import CartPage from './pages/cart/CartPage';
import ProfilePage from './pages/profile/ProfilePage';
import LoginPage from './pages/auth/LoginPage';

const App = () => (
  <Routes>
    <Route path="/" element={<HomePage />}>
      <Route index element={<ListPage />} />
      <Route path="profile" element={<ProfilePage />} />
      <Route path="cart" element={<CartPage />} />
      <Route path="login" element={<LoginPage />} />
      {/* <Route path='*' element={<NoMatch />} /> */}
    </Route>
  </Routes>
);

export default App;
