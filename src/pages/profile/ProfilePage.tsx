import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
/** Redux */
import { useSelector } from 'react-redux';
import { tokenSelectors } from 'src/redux/tokenReducer';
import { RootState } from 'src/store';

/** Components */
import Profile from '../../components/Profile';

const ProfilePage = () => {
  const token = useSelector<RootState, RootState['token']>(tokenSelectors.get);

  const navigate = useNavigate();
  const goToLogin = () => navigate('/login');

  useEffect(() => {
    if (!token) goToLogin();
  }, []);

  return <Profile />;
};

export default ProfilePage;
