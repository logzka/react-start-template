import React, { useEffect } from 'react';
import './styles/app.scss';
import { useSelector } from 'react-redux';
import { RootState, useTypedDispatch } from './store';
import { tokenSelectors } from './redux/tokenReducer';

/** Router */
import { Routes, Route } from 'react-router-dom';

/** Routes */
import HomePage from './pages/home/HomePage';
import ListPage from './pages/list/ListPage';
import CartPage from './pages/cart/CartPage';
import ProfilePage from './pages/profile/ProfilePage';
import LoginPage from './pages/auth/LoginPage';

/** Redux */
import { profileAdd } from './redux/profileReducer';

const App = () => {
  const dispatch = useTypedDispatch();
  const token = useSelector<RootState, RootState['token']>(tokenSelectors.get);

  useEffect(() => {
    if (token) {
      /** Set fake user data */
      dispatch(
        profileAdd({
          firstName: 'Administrator',
          lastName: '',
          gender: 'male',
          age: 30,
          phone: '79609999999',
          email: token,
          role: 'admin',
        })
      );
    }
  }, []);

  return (
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
};

export default App;
