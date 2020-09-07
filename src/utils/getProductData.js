export const getProductData = async (url, method) => {
  let productData = {
    total_count: '',
    current_page: '',
    previous_page_url: '',
    next_page_url: '',
    pages_count: '',
    products: [],
  };

  await fetch(url, {method: method})
    .then(response => response.json())
    .then(result =>  productData = result)
    .catch(err => {
      alert(`Произошла ошибка при загрузке страницы: ${err}`)
    })

  return productData;
};
