import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/layout/layout';
import { HomePage } from './pages/HomePage/HomePage';
import { ShopPage } from './pages/ShopPage/ShopPage';
import { CartPage } from './pages/CartPage/CartPage';
import { CarPage } from './pages/CarPage/CarPage';
import './App.css'


const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <HomePage />
      </Layout>
    ),
  },
  {
    path: '/shop',
    element: (
      <Layout>
        <ShopPage />
      </Layout>
    ),
  },
  {
    path: '/cart',
    element: (
      <Layout>
        <CartPage />
      </Layout>
    ),
  },
  {
    path: `/shop/car/:id`,
    element: (
      <Layout>
        <CarPage />
      </Layout>
    ),
  },
]);

const App: React.FC = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
