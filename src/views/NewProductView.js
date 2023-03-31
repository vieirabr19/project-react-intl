import { useState } from 'react';

import { FormattedMessage } from 'react-intl';

import { ProductService } from '../services/ProductService';

function NewProductView() {
  const [product, setProduct] = useState({});

  const handleChange = (event) => {
    setProduct({
      ...product,
      [event.target.name]: event.target.value
    });
  };

  const submit = (event) => {
    event.preventDefault();
    if(product.name && product.image && product.price){
      product.price = Number(product.price);
      ProductService.createProduct(product);
    }else{
      alert('Prencha os campos nome, imagem e preço!');
    }
  }

  return (
    <div>
      <h1><FormattedMessage defaultMessage='new product' id='form.title' /></h1>
      <form className="product-form" onSubmit={submit}>
        <label>
          <span>
            <FormattedMessage defaultMessage='name' id='form.name' />
          </span>
          <input type="text" name="name" value={product.name} onChange={handleChange} />
        </label>
        <label>
          <span>
            <FormattedMessage defaultMessage='image' id='form.image' />
          </span>
          <input type="text" name="image" value={product.image} onChange={handleChange} />
        </label>
        <label>
          <span>
            <FormattedMessage defaultMessage='description' id='form.description' />
          </span>
          <input type="text" name="description" value={product.description} onChange={handleChange} />
        </label>
        <label>
          <span>
            <FormattedMessage defaultMessage='price' id='form.price' />
          </span>
          <input type="text" name="price" value={product.price} onChange={handleChange} />
        </label>
        <button type="submit">
          <FormattedMessage defaultMessage='create product' id='form.createProduct' />
        </button>
      </form>
    </div>
  )
}

export default NewProductView;