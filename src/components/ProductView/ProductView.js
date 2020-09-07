import React, {useEffect, useState} from 'react';
import {getProductData} from '../../utils/getProductData';
import style from './ProductView.module.css';
import {Modal, Pagination, Space} from 'antd';
import InputField from '../InputField/InputField';
import CustomButton from '../CustomButton/CustomButton';
import {SearchOutlined} from '@ant-design/icons';
import SortSelection from '../SortSelection/SortSelection';
import RadioButtons from '../RadioButtons/RadioButtons';
import displayTypeButtons from '../../mapping/displayTypeButtons.json';
import ProductList from '../ProductList/ProductList';
import {Link} from 'react-router-dom';
import Preloader from '../Preloader/Preloader';

const ProductView = ({match}) => {
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
  const [sortData, setSortData] = useState({
    sortField: 'name',
    sortDirection: 'asc'
  });
  const [displayType, setDisplayType] = useState('tile');

  const getProductList = async () => {
    const currentPage = match.params.current_page ? match.params.current_page : 1;
    const productData = await getProductData(`https://www.lenvendo.ru/api/js-test-task/?page=${currentPage}`, 'GET');

    setProductList(productData.products);
    setPages({
      total_count: productData.total_count,
      current_page: productData.current_page,
      previous_page_url: productData.previous_page_url,
      next_page_url: productData.next_page_url,
    });
    productData.products.length !== 0 ? setIsLoaded(true) : setIsLoaded(false);
  };

  const sortChange = async value => {
    const [sortField, sortDirection] = value.split('-');
    const url = `https://www.lenvendo.ru/api/js-test-task/?sort_field=${sortField}&sort_direction=${sortDirection}&page=1`;
    const productData = await getProductData(url, 'GET');

    setSortData({
      sortField: sortField,
      sortDirection: sortDirection
    });

    setProductList(productData.products);

    setPages({
      total_count: productData.total_count,
      current_page: productData.current_page,
      previous_page_url: productData.previous_page_url,
      next_page_url: productData.next_page_url,
    });
  };

  const inputSearchValue = (value) => {
    setSearchValue(value);
  };

  const searchProduct = async () => {
    let fetchUrl;
    if (searchValue) {
      fetchUrl = `https://www.lenvendo.ru/api/js-test-task/?search=${searchValue}`;
    } else {
      fetchUrl = `https://www.lenvendo.ru/api/js-test-task/`;
    }
    const productData = await getProductData(fetchUrl, 'GET');
    if (productData.products == undefined) {
      setProductList([]);
      setNotFound(true);
    } else {
      setProductList(productData.products);
      setNotFound(false)
    }

    setPages({
      total_count: productData.total_count,
      current_page: productData.current_page,
      previous_page_url: productData.previous_page_url,
      next_page_url: productData.next_page_url,
    });
  };

  const changePage = async (currentPage) => {
    let fetchUrl;
    if (currentPage - pages.current_page === 1) {
      fetchUrl = pages.next_page_url.replace('http', 'https');
    }

    if (currentPage - pages.current_page === -1) {
      fetchUrl = pages.previous_page_url.replace('http', 'https');
    }

    if (currentPage - pages.current_page > 1 || currentPage - pages.current_page < -1 || currentPage - pages.current_page === 0) {
      fetchUrl = `https://www.lenvendo.ru/api/js-test-task/?page=${currentPage}`;
    }

    if (searchValue) {
      fetchUrl = `${fetchUrl}&search=${searchValue}`;
    }

    const productData = await getProductData(`${fetchUrl}&sort_field=${sortData.sortField}&sort_direction=${sortData.sortDirection}`, 'GET');

    setProductList(productData.products);
    setPages({
      total_count: productData.total_count,
      current_page: productData.current_page,
      previous_page_url: productData.previous_page_url,
      next_page_url: productData.next_page_url,
    });

    setTimeout(() => {
      window.scrollTo(0, 0)
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

  const chooseDisplayType = (event) => {
    setDisplayType(event.target.value)
  };

  const NumberPagination = () => {
    return (
        <Pagination
          current={pages.current_page}
          responsive={true}
          defaultCurrent={pages.current_page}
          total={pages.total_count}
          onChange={(page) => changePage(page)}
          showSizeChanger={false}
          hideOnSinglePage={true}
          itemRender={(page, type, originalElement) => {
            return <Link to={`/products/page=${page}`}>{originalElement}</Link>
          }}
        />
      )
  }

  useEffect(() => {
    getProductList();
  }, []);

  return (
    <div className={style.wrap}>
      <div className={style.searchBar}>
        <Space className={style.searchForm}>
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
        </Space>
        <Space>
          <SortSelection
            sortChange={sortChange}
          />
          <RadioButtons
            buttonsArr={displayTypeButtons}
            activeButton={displayType}
            onChange={chooseDisplayType}
          />
        </Space>
      </div>
      {
        isLoaded ? (
          <div className={style.productListWrap}>
            {notFound ? (
              <h2 className={style.notFound}>По Вашему запросу ничего не найдено</h2>
            ) : (
              <div>
                <div className={style.pagination}>
                  {NumberPagination()}
                </div>
                <ProductList
                  productList={productList}
                  chooseProduct={chooseProduct}
                  displayType={displayType}
                />
                <Modal
                  visible={visibleModal}
                  onOk={handleOk}
                  onCancel={handleCancel}
                  okText='Add to cart'
                >
                  <img
                    src={showedProduct.image.replace('http', 'https')}
                    alt="phone"
                    className={style.image}
                  />
                  <h3>{showedProduct.name}</h3>
                  <h1>{showedProduct.price} ₽</h1>
                </Modal>
              </div>
            )}
          </div>
        ) : (
          <Preloader size='large'/>
        )
      }
      <div className={style.pagination}>
        {NumberPagination()}
      </div>
    </div>
  );
};

export default ProductView;
