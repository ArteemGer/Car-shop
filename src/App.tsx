import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './assets/components/layout/layout';
import { Home } from './assets/pages/home/home';
import { Shop } from './assets/pages/shop/shop';
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
