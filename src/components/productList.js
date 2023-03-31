import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { FormattedMessage, FormattedNumber } from 'react-intl';

import { Channel } from '../services/EventService';

function ProductList({products}){

  const remove = (id) => {
    Channel.emit('product:remove', id);
  };

  return (
    <ul className="product-list">
      <TransitionGroup>
        {products.map(({id, name, description, image, price, nodeRef}) => (
          <CSSTransition key={id} timeout={300} classNames="product" nodeRef={nodeRef}>
            <li className="product-list-item" ref={nodeRef}>
              <button type="button" onClick={() => remove(id)}>X</button>
              <img src={image} alt={description} />
              <div>
                <span>{name}</span>
              </div>
              <div>
                <FormattedNumber 
                  defaultMessage='product price' 
                  id='listProduct.cardPrice' 
                  value={price} 
                  minimumFractionDigits={2}
                  maximumFractionDigits={2}
                  // style='currency'
                  // currencyDisplay='symbol'
                  // currency='BRL'
                />
              </div>
            </li>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  );
}

export default ProductList;