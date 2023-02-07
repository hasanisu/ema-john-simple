import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layouts/Main';
import Shop from './component/Shop/Shop'
import Orders from './component/Orders/Orders';
import Inventories from './component/Inventories/Inventories';
import About from './component/About/About';
import { addToCartProduct } from './loader/addTocartProduct';


function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: ()=> fetch("products.json"),
          element: <Shop></Shop>
        },
        {
          path: '/orders',
          loader: addToCartProduct,
          element: <Orders></Orders>
        },
        {
          path: '/inventories',
          element: <Inventories></Inventories>
        },
        {
          path: '/about',
          element: <About></About>
        }
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
