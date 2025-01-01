import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import ErrorPage from './components/ErrorPage.jsx'
import CategoryPage from './pages/CategoryPage.jsx'
import SearchPage from './pages/SearchPage.jsx'
import SingleProducts from './pages/SingleProducts.jsx'
import Recipes from './pages/Recipes.jsx'
import Resources from './pages/Resources.jsx'
import AboutPage from './pages/AboutPage.jsx'
import Contactpage from './pages/Contactpage.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/categories/:category',
        element: <CategoryPage />
      },
      {
        path: '/search',
        element: <SearchPage />
      },
      {
        path: '/items/:id',
        element: <SingleProducts />,
        loader: ({ params }) => fetch(`https://tasty-tales-backend-sable.vercel.app/api/items/${params.id}`)
      },
      {
        path: '/recipes',
        element: <Recipes />
      },
      {
        path: '/resources',
        element: <Resources />
      },
      {
        path:'/about',
        element:<AboutPage/>
      },
      {
        path:'/contacts',
        element:<Contactpage/>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
