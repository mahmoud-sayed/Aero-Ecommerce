import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

// pages
import Home from '../Pages/home/Home';
// import Products from './../Pages/products/Products';
// import SignIn from './../Pages/signin/SignIn';
// import Register from './../Pages/register/Register';
// import Cart from './../Pages/cart/cart';
// import CheckOut from './../Pages/checkOut/CheckOut';
// import Confirmation from './../Pages/confirmation/Confirmation';
// import Information from './../Pages/information/Information';
// import Payment from './../Pages/payment/Payment';
// import Shipping from './../Pages/shipping/Shipping';
// import WhishList from './../Pages/whishList/whishList';
// import SingleProduct from '../Pages/singleProduct/SingleProduct';

const LazyProducts = lazy(() => import('./../Pages/register/Register'));
const LazySignIn = lazy(() => import('./../Pages/signin/SignIn'));
const LazyRegister = lazy(() => import('./../Pages/register/Register'));
const LazyCart = lazy(() => import('./../Pages/cart/cart'));
const LazyCheckOut = lazy(() => import('./../Pages/checkOut/CheckOut'));
const LazyConfirmation = lazy(() => import('./../Pages/confirmation/Confirmation'));
const LazyInformation = lazy(() => import('./../Pages/information/Information'));
const LazyPayment = lazy(() => import('./../Pages/payment/Payment'));
const LazyShipping = lazy(() => import('./../Pages/shipping/Shipping'));
const LazyWhishList = lazy(() => import('./../Pages/whishList/whishList'));
const LazySingleProduct = lazy(() => import('./../Pages/singleProduct/SingleProduct'));



const PagesRoutes = () => {
  return (
    <Routes>
      <Route index path='/' element={<Suspense fallback='Loading...'><Home /></Suspense>} />
      <Route path='/login' element={<Suspense fallback='Loading...'><LazySignIn /></Suspense>} />
      <Route path='/register' element={<Suspense fallback='Loading...'><LazyRegister /></Suspense>} />
      <Route path='/products' element={<Suspense fallback='Loading...'><LazyProducts /></Suspense>} />
      <Route path='/products/:productId' element={<Suspense fallback='Loading...'><LazySingleProduct /></Suspense>} />
      <Route path='/cart' element={<Suspense fallback='Loading...'><LazyCart /></Suspense>} />
      <Route path='/checkOut' element={<Suspense fallback='Loading...'><LazyCheckOut /></Suspense>} />
      <Route path='/confirmation' element={<Suspense fallback='Loading...'><LazyConfirmation /></Suspense>} />
      <Route path='/information' element={<Suspense fallback='Loading...'><LazyInformation /></Suspense>} />
      <Route path='/Payment' element={<Suspense fallback='Loading...'><LazyPayment /></Suspense>} />
      <Route path='/shipping' element={<Suspense fallback='Loading...'><LazyShipping /></Suspense>} />
      <Route path='/Payment' element={<Suspense fallback='Loading...'><LazyWhishList /></Suspense>} />
    </Routes>
  );
};

export default PagesRoutes
  ;