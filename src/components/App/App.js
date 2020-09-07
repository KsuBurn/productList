import React from 'react';
import 'antd/dist/antd.css';
import AppRoutes from '../../routes/AppRoutes';
import {BrowserRouter} from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes/>
    </BrowserRouter>
  )
};

export default App;
