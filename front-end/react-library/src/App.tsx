import React from 'react';
import './App.css';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';
import { Footer } from './layouts/NavbarAndFooter/Footer';
import { HomePage } from './layouts/HomePage/HomePage';
import { SearchBooksPage } from './layouts/SearchBooksPage/SearchBooksPage';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { BookCheckoutPage } from './layouts/BookCheckoutPage/BookCheckoutPage';
export const App=()=> {
  return (
    <div className='d-flex flex-column min-vh-100'>
      <Router>
      <Navbar />
      <div className='flex-grow-1'>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/search' component={SearchBooksPage}/>
          <Route path='/home' component={HomePage}/>
          <Route path='/checkout/:bookId' component={BookCheckoutPage}/>
          </Switch>
          </div>
        <Footer/>
   </Router>
   </div>

  );
}

