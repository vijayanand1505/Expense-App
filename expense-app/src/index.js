// import React from 'react';
// import { configureStore } from '@reduxjs/toolkit';
import ReactDOM from 'react-dom/client';
// import Color from './Color';
// import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
// import Redux from './Redux/Redux';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import AppRoute from './Route';
// import App1 from './App1';
// import userReducer from './Redux/features/user';


// const store = configureStore({
//     reducer:{
//         user:userReducer
//     }
// })
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <App></App>
    // {/* <BrowserRouter> */}
   
    // {/*  <Color></Color> */}
    // {/* <App1></App1> */}
    // {/* <Provider store={store}>
    // <Redux></Redux> */}
    // {/* </Provider> */}
   
    // {/* <AppRoute></AppRoute> */}
      // </BrowserRouter> 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
