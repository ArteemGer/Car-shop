import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/layout/layout';
import { Home } from './pages/HomePage/HomePage';
import { Shop } from './pages/ShopPage/ShopPage';
import { Cart } from './pages/CartPage/CartPage';
import './App.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: '/shop',
    element: (
      <Layout>
        <Shop />
      </Layout>
    ),
  },
  {
    path: '/cart',
    element: (
      <Layout>
        <Cart />
      </Layout>
    ),
  },
  // {
  //   path: `/shop/flower/:id`,
  //   element: (
  //     <Layout>
  //       <Flower />
  //     </Layout>
  //   ),
  // },
]);

const App: React.FC = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
