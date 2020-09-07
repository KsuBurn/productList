import React, {Suspense} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {Spin} from 'antd';

const ProductView =React.lazy(() => import('../components/ProductView/ProductView'));
const ProductList =React.lazy(() => import('../components/ProductList/ProductList'));


const AppRoutes = () => {
  return (
    <Suspense fallback={<Spin size='large'/>}>
      <Switch>
        <Route exact path='/product_list' component={ProductView}/>
        <Route exact path='/product_list/page=:current_page' component={ProductView}/>
        <Redirect from="/" to="/product_list/" component={ProductView}/>
      </Switch>
    </Suspense>
  );
};

export default AppRoutes;
