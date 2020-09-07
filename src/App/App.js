import React, {useEffect, useState} from 'react';
import 'antd/dist/antd.css';
import ProductList from '../ProductList/ProductList';
import InputField from '../InputField/InputField';
import style from './App.module.css';
import SortSelection from '../SortSelection/SortSelection';
import {Modal, Pagination, Spin} from 'antd';
import {SearchOutlined} from '@ant-design/icons';
import CustomButton from '../CustomButton/CustomButton';

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [productList, setProductList] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [pages, setPages] = useState({
    total_count: '',
    current_page: '',
    previous_page_url: '',
    next_page_url: '',
    pages_count: ''
  });
  const [notFound, setNotFound] = useState(false);
  const [visibleModal, setVisibleModal] = useState(false);
  const [showedProduct, setShowedProduct] = useState({
    image: '',
    name: '',
    price: ''
  });

  const getProductList = () => {
    fetch(`https://www.lenvendo.ru/api/js-test-task/`, {method: 'GET'})
      .then(response => response.json())
      .then(result => {
        setProductList(result.products);
        result.products.length !== 0 ? setIsLoaded(true) : setIsLoaded(false);
        setPages({
          total_count: result.total_count,
          current_page: result.current_page,
          previous_page_url: result.previous_page_url,
          next_page_url: result.next_page_url,
        })
      })
      .catch(err => console.log(err));
  };

  const sortChange = value => {
    const [sortField, sortDirection] = value.split('-');

    fetch(`https://www.lenvendo.ru/api/js-test-task/?sort_field=${sortField}&sort_direction=${sortDirection}`, {method: 'GET'})
      .then(response => response.json())
      .then(result => setProductList(result.products))
      .catch(err => console.log(err));
  };

  const inputSearchValue = (value) => {
    setSearchValue(value);
  };

  const searchProduct = () => {
    let fetchUrl;
    if (searchValue) {
      fetchUrl = `https://www.lenvendo.ru/api/js-test-task/?search=${searchValue}`;
    } else {
      fetchUrl = `https://www.lenvendo.ru/api/js-test-task/`;
    }

    fetch(fetchUrl, {method: 'GET'})
      .then(response => response.json())
      .then(result => {
        if (result.products == undefined) {
          setProductList([]);
          setNotFound(true);
        } else {
          setProductList(result.products);
        }
        setPages({
          total_count: result.total_count,
          current_page: result.current_page,
          previous_page_url: result.previous_page_url,
          next_page_url: result.next_page_url,
        });
      })
      .catch(err => {
        setNotFound(true);
      });
  };

  const changePage = (currentPage) => {
    let fetchUrl;
    if (currentPage - pages.current_page === 1) {
      fetchUrl = pages.next_page_url;
    }

    if (currentPage - pages.current_page === -1) {
      fetchUrl = pages.previous_page_url;
    }

    if (currentPage - pages.current_page > 1 || currentPage - pages.current_page < -1) {
      fetchUrl = `https://www.lenvendo.ru/api/js-test-task/?page=${currentPage}`;
    }

    if (searchValue) {
      fetchUrl = `${fetchUrl}&search=${searchValue}`;
    }

    fetch(fetchUrl)
      .then(response => response.json())
      .then(result => {
        setProductList(result.products);
        setPages({
          total_count: result.total_count,
          current_page: result.current_page,
          previous_page_url: result.previous_page_url,
          next_page_url: result.next_page_url,
        });
      })
    setTimeout(() =>{
      window.scrollTo(0,0)
    }, 100)
  };

  const chooseProduct = (image, name, price) => {
    setShowedProduct({
      name: name,
      price: price,
      image: image
    });
    setVisibleModal(true)
  };

  const handleOk = () => {
    setVisibleModal(false);
  };

  const handleCancel = () => {
    setVisibleModal(false);
  };

  useEffect(() => {
    getProductList();
  }, []);

  return (
    <div className={style.wrap}>
      <div className={style.searchBar}>
        <div className={style.inputWrap}>
          <InputField
            inputSearchValue={inputSearchValue}
            inputValue={searchValue}
          />
          <CustomButton
            name='Search'
            title='Search'
            onClick={searchProduct}
            icon={<SearchOutlined/>}
          />
        </div>
        <div>
          <SortSelection
            sortChange={sortChange}
          />
        </div>
      </div>
      {
        isLoaded ? (
          <div className={style.productListWrap}>
            {notFound ? (
              <p> Ничего не найдено</p>
            ) : (
              <div>
                <ProductList
                  productList={productList}
                  chooseProduct={chooseProduct}
                />
                <Modal
                  visible={visibleModal}
                  onOk={handleOk}
                  onCancel={handleCancel}
                  okText='Add to cart'
                >
                  <img src={showedProduct.image} alt="phone" className={style.image}/>
                  <h3>{showedProduct.name}</h3>
                  <h1>{showedProduct.price} ₽</h1>
                </Modal>
              </div>
            )}
          </div>
        ) : (
          <div className={style.preloader}>
            <Spin
              size='large'
            />
          </div>
        )
      }
      <div className={style.pagination}>
        <Pagination
          defaultCurrent={1}
          total={pages.total_count}
          onChange={(page) => changePage(page)}
        />
      </div>
    </div>
  );
};

export default App;
