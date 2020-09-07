import React from 'react';
import style from './Product.module.css';
import {Card} from 'antd';
import classnames from 'classnames';

const Product = ({image, name, price, chooseProduct, displayType}) => {
  return (
    <div
      className={style.wrap}
      onClick={() => chooseProduct(image, name, price)}
    >
      <Card
        hoverable
        cover={
          <img
            src={image.replace('http', 'https')}
            alt="phone"
            className={classnames({
              [style.image]: true,
              [style.tileImage]:displayType === 'tile',
              [style.listImage]: displayType === 'list'
            })}
          />
        }
      >
        <h3 className={style.productName}>{name}</h3>
        <h1 className={style.productPrice}>{price} ₽</h1>
      </Card>
    </div>
  );
};

export default Product;
