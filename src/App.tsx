import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './views/Home/Home';
import Product from './views/Product/Product';
import Contact from './views/Contact/Contact';
import Header from './containers/Header/Header'
import Footer from './containers/Footer/Footer';
import './App.css';

export default function App() {
  return (
    <div id="wrapper">
      {/* Header and Footer can be moved to views/template */}
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/product" component={Product} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  )
}