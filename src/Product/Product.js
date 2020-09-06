import React from 'react';
import style from './Product.module.css';

const Product = ({image, name, price}) => {
  return (
    <div className={style.wrap}>
      <img src={image} alt="phone" className={style.image}/>
      <p>{name}</p>
      <p>{price}</p>
    </div>
  );
};

export default Product;
