import './App.css';
import { Appbar } from './Components/Appbar/Appbar';
import {createBrowserRouter, Outlet, RouterProvider} from 'react-router-dom'
import Home from './Pages/Home/Home';
import Footer from './Components/Footer/Footer';
import Contact from './Pages/Contact/Contact';
import About from './Pages/About/About';
import Volunteers from './Pages/Volunteers/Volunteers';
import Image from './Pages/Image/Image';
import Program from './Pages/Program/Program';
import PartnerShip from './Pages/PartnerShip/PartnerShip';
import Blog from './Pages/Blog/Blog';
import SingleBlog from './Pages/SingleBlog/SingleBlog';
import Donation from './Pages/Donation/Donation';

function App() {
  const Layout = () =>{
    return(
      <>
      <Appbar/>
      <Outlet/>
      <Footer/>
      </>
    )
  }
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Layout/>,
      children:[{
        path:'/',
        element:<Home/>
      }
    ]
    },
    {
      path:'/',
      element:<Layout/>,
      children:[{
        path:'/contact',
        element:<Contact/>
      }
    ]
    },
    {
      path:'/',
      element:<Layout/>,
      children:[{
        path:'/about',
        element:<About/>
      }
    ]
    },
    {
      path:'/',
      element:<Layout/>,
      children:[{
        path:'/volunteers',
        element:<Volunteers/>
      }
    ]
    },
    {
      path:'/',
      element:<Layout/>,
      children:[{
        path:'/images',
        element:<Image/>
      }
    ]
    },
    {
      path:'/',
      element:<Layout/>,
      children:[{
        path:'/program',
        element:<Program/>
      }
    ]
    },
    {
      path:'/',
      element:<Layout/>,
      children:[{
        path:'/partnership',
        element:<PartnerShip/>
      }
    ]
    },
    {
      path:'/',
      element:<Layout/>,
      children:[{
        path:'/blog',
        element:<Blog/>
      }
    ]
    },
    {
      path:'/',
      element:<Layout/>,
      children:[{
        path:'/blog/:id',
        element:<SingleBlog/>
      }
    ]
    },
    {
      path:'/',
      element:<Layout/>,
      children:[{
        path:'/donation',
        element:<Donation/>
      }
    ]
    },
    {
      path:'/',
      element:<Layout/>,
      children:[{
        path:'/gallery',
        element:<Image/>
      }
    ]
    },

  ])
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
