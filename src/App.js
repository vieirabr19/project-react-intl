import React, { Suspense, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Prompt } from 'react-router-dom';

import { addLocaleData, IntlProvider, FormattedMessage } from 'react-intl';
// import enLocaleData from 'react-intl/locale-data/en';
// import ptLocaleData from 'react-intl/locale-data/pt';

import './App.css';

import ProductListView from './views/ProductListView';
import NewProductView from './views/NewProductView';
// const ProductListView = React.lazy(() => import('./views/ProductListView'));
// const NewProductView = React.lazy(() => import('./views/NewProductView')) ;

// addLocaleData([...enLocaleData, ...ptLocaleData]);

import messages from './i18n';

function App() {
  const [currentLang, setCurrentLang] = useState(localStorage.getItem('lang') || 'PT');

  const setLanguage = (lang) => {
    localStorage.setItem('lang', lang);
    setCurrentLang(lang);
  };

  return (
    <div className="App">
      <IntlProvider
        messages={messages[currentLang]}
        locale={currentLang}
        defaultLocale={currentLang}
      >
        <Router>
            {/* <Prompt when={true} message={location => `Tem certeza que deseja sair para ${location.pathname}?`} /> */}
            <nav>
              <ul className='link-list'>
                <li>
                  <Link to="/">
                    <FormattedMessage defaultMessage='List teste' id='menu.list' />
                  </Link>
                </li>
                <li>
                  <Link to="/novo">
                    <FormattedMessage defaultMessage='New teste' id='menu.new' />
                  </Link>
                </li>
              </ul>

              <ul className='lang-list'>
                <li>
                  <button type="button" onClick={() => setLanguage('PT')}>Português</button>
                </li>
                <li>
                  <button type="button"  onClick={() => setLanguage('EN')}>English</button>
                </li>
              </ul>
            </nav>
          
            <Routes>
              <Route exact path="/" element={<ProductListView />} />
              <Route path="/novo" element={<NewProductView />} />
        
              {/* <Suspense fallback={<div>Loading...</div>}>
                <Route exact path="/" element={(props) => <ProductListView {...props} />} />
                <Route path="/novo" element={(props) => <NewProductView {...props} />} />
              </Suspense> */}
            </Routes>
        </Router>
      </IntlProvider>
    </div>
  );
}

export default App;
