import React, {Suspense} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import Preloader from '../components/Preloader/Preloader';

const ProductView =React.lazy(() => import('../components/ProductView/ProductView'));

const AppRoutes = () => {
  return (
    <Suspense fallback={<Preloader size='large'/>}>
      <Switch>
        <Route exact path='/products' component={ProductView} />
        <Route exact path='/products/page=:current_page' component={ProductView} />
        <Redirect from="/" to="/products" component={ProductView} />
      </Switch>
    </Suspense>
  );
};

export default AppRoutes;
