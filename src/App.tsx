import React from 'react';
import './styles/app.scss';

/** Router */
import { Routes, Route } from 'react-router-dom';

/** Routes */
import HomePage from './pages/home/HomePage';
import ListPage from './pages/list/ListPage';

const App = () => (<Routes>
  <Route path='/' element={<HomePage />}>
    <Route index element={<ListPage />} />
    {/* <Route path='some' element={<SomeElement />} />

    <Route path='*' element={<NoMatch />} /> */}
  </Route>
</Routes>);

export default App;
