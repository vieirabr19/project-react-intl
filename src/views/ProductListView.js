import { useEffect, useState, createRef } from 'react';
import ProductList from '../components/productList';
import { Channel } from '../services/EventService';
import { ProductService } from '../services/ProductService';

import { FormattedMessage } from 'react-intl';

function ProductListView(){
  const [products, setProducts] = useState([]);

  useEffect(() => {
    startdata();
  }, []);

  useEffect(() => {
    Channel.on('product:remove', remove);

    return () => {
      Channel.removeListener('product:remove', remove);
    }
  });

  const startdata = async () => {
    const data = await ProductService.allList();
    const newData = data.map(item => {
      item.nodeRef = createRef(null);
      return item;
    });
    setProducts(newData);
  };

  const remove = async (id) => {
    const newProduct = products.filter(product => product.id !== id);
    await ProductService.removeProduct(id);
    setProducts(newProduct);

    // const productIndex = products.findIndex(product => product.id === id);
    // await ProductService.removeProduct(id);
    // products.splice(productIndex, 1);
    // setProducts(products);
    // console.log(products);
  }

  return (
    <div>
      <h1><FormattedMessage defaultMessage='list product' id='listProduct.title' /></h1>
      <ProductList products={products} />
    </div>
  );
}

export default ProductListView;