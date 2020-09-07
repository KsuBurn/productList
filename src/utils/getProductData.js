export const getProductData = async (url, method) => {
  let productData = {
    total_count: '',
    current_page: '',
    previous_page_url: '',
    next_page_url: '',
    pages_count: '',
    products: [],
  };

  const request = await fetch(url, {method: method});
  const response = await request.json();

  if (response != undefined) {
    productData = response;
  }

  return productData;
};
