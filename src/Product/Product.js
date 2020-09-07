import React from 'react';
import style from './Product.module.css';
import {Card} from 'antd';

const Product = ({image, name, price, chooseProduct}) => {
  return (
    <div
      className={style.wrap}
      onClick={() => chooseProduct(image, name, price)}
    >
      <Card
        hoverable
        cover={<img src={image} alt="phone" className={style.image}/>}
      >
        <h3>{name}</h3>
        <h1>{price} ₽</h1>
      </Card>
    </div>
  );
};

export default Product;
