import React from 'react';
import style from './Preloader.module.css';
import {Spin} from 'antd';

const Preloader = ({size}) => {
  return (
    <div className={style.preloader}>
      <Spin
        size={size}
      />
    </div>
  );
};

export default Preloader;
