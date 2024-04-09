import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from './assets/components/layout/layout';
import { Home } from './assets/pages/home/home';
import { Shop } from './assets/pages/shop/shop';
import './App.css'

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:
      <Layout>
        <Home />
      </Layout>
    },
    {
      path:'/shop',
      element:
      <Layout>
        <Shop />
      </Layout>
    }
    // {
    //   path:`/shop/flower/${}`,
    //   element:
    //   <Layout>
    //     <Flower />
    //   </Layout>
    // }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
