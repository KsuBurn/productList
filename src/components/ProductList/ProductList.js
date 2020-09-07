import React from 'react';
import Product from '../Product/Product';
import style from './ProductList.module.css';
import classnames from 'classnames';

const ProductList = ({productList, chooseProduct, displayType}) => {
  return (
    <div
      className={classnames({
        [style.tileWrap]:displayType === 'tile',
        [style.listWrap]: displayType === 'list'
      })}
    >
      {productList.map((item, index) => {
        return (
          <div key={index}>
            <Product
              image={item.image}
              name={item.name}
              price={item.price}
              chooseProduct={chooseProduct}
              displayType={displayType}
            />
          </div>
        )
      })}
    </div>
  );
};

export default ProductList;
