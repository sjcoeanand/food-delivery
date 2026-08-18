import React, {lazy, Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RestaurantMenu from './components/RestaurantMenu'
import About from './components/About'
import Error from './components/Error'
import BodyWrapper from './components/BodyWrapper';
const Grocery = lazy(()=> import('./components/Grocery'))
const route = createBrowserRouter([
  {
    path: '',
    element: <App/>,
    children: [
      {
        path: '',
        element: <BodyWrapper/>
      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path:'/restaurant/:resId',
        element: <RestaurantMenu/>
      },
      {
        path: '/grocery',
        element: <Suspense fallback={<h2>Loading...</h2>}><Grocery/></Suspense>
        // element: <Grocery/>
      }
    ],
    errorElement: <Error/>,
  },
  
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={route} />
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
