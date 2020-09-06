import React, {useEffect, useState} from 'react';
import ProductList from '../ProductList/ProductList';
import InputField from '../InputField/InputField';
import CustomButton from '../CustomButton/CustomButton';
import 'antd/dist/antd.css';
import {LoadingOutlined} from '@ant-design/icons';
import style from './App.module.css';
import {Space} from 'antd';
import {ArrowDownOutlined, ArrowUpOutlined} from '@ant-design/icons/lib';

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [productList, setProductList] = useState();
  const [asc, setAsc] = useState(true);
  const [pressedButton, setPressedButton] = useState('name');

  const getProductList = () => {
    fetch(`https://www.lenvendo.ru/api/js-test-task/`, {method: 'GET'})
      .then(response => response.json())
      .then(result => {
        setProductList(result.products);
        setIsLoaded(true);
      })
  };

  const handleClick = (event) => {
    setAsc(asc => !asc);
    setPressedButton(event.currentTarget.name);
    sortProductList(event.currentTarget.name);
  };

  const sortProductList = (sortField) => {
    const sortDirection = asc ? 'asc' : 'desc';

    fetch(`https://www.lenvendo.ru/api/js-test-task/?sort_field=${sortField}&sort_direction=${sortDirection}`, {method: 'GET'})
      .then(response => response.json())
      .then(result => setProductList(result.products))
  };

  const changeButtonIcon = (buttonName) => {
    if (asc && pressedButton === buttonName) {
      return <ArrowUpOutlined/>;
    } else if (pressedButton !== buttonName) {
      return <ArrowUpOutlined/>;
    } else {
      return <ArrowDownOutlined/>;
    }
  };

  useEffect(() => {
    getProductList();
  }, [])

  return (
    <div>
      {
        isLoaded ? (
          <div>
            <div className={style.searchBar}>
              <InputField/>
              <Space>
                <CustomButton
                  name='name'
                  title='Name'
                  type='primary'
                  onClick={(e) => handleClick(e)}
                  icon={changeButtonIcon('name')}
                />
                <CustomButton
                  name='price'
                  title='Price'
                  type='primary'
                  onClick={(e) => handleClick(e)}
                  icon={changeButtonIcon('price')}
                />
              </Space>
            </div>
            <ProductList
              productList={productList}
            />
          </div>
        ) : (
          <LoadingOutlined style={{fontSize: 24}} spin/>
        )
      }
    </div>
  );
};

export default App;
