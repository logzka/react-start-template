import React, { useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import './styles/app.scss';

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
import { useSelector } from 'react-redux';
import { RootState, useTypedDispatch } from './store';
import { tokenSelectors } from './redux/tokenReducer';

/** GQL */
import { GET_PROFILE } from './graphql/schemes/GET_PROFILE';

const App = () => {
  const dispatch = useTypedDispatch();
  const token = useSelector<RootState, RootState['token']>(tokenSelectors.get);
  const [getProfile] = useLazyQuery(GET_PROFILE);

  useEffect(() => {
    if (token) {
      getProfile()
        .then((res) => {
          const { data } = res;
          const { profile } = data || {};

          console.log(profile);
          /** Set user data */
          dispatch(
            profileAdd({
              ...profile,
              firstName: profile?.firstName || profile?.role || '',
              lastName: profile?.lastName || profile?.role || '',
            })
          );
        })
        .catch(console.error);
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
