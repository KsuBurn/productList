import React from 'react';
import Product from '../Product/Product';
import style from './ProductList.module.css';

const ProductList = ({productList, chooseProduct}) => {
  return (
    <div className={style.wrap}>
      {productList.map((item, index) => {
        return (
          <div key={index}>
            <Product
              image={item.image}
              name={item.name}
              price={item.price}
              chooseProduct={chooseProduct}
            />
          </div>
        )
      })}
    </div>
  );
};

export default ProductList;
