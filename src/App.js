import './App.css';
import { Appbar } from './Components/Appbar/Appbar';
import {createBrowserRouter, Outlet, RouterProvider, useLocation} from 'react-router-dom'
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
import ImageTemp from './Pages/Image/ImageTemp';
import { useContext, useEffect } from 'react';
import SignIn from './Pages/SignIn/SignIn';
import AdminHome from './Pages/Admin/AdminHome/AdminHome';
import AdminUser from './Pages/Admin/AdminUser/AdminUser';
import AdminProgram from './Pages/Admin/AdminProgram/AdminProgram';
import AdminBlog from './Pages/Admin/AdminBlog/AdminBlog';
import GalleryCat from './Pages/Admin/GalleryCat/GalleryCat';
import AdminGallery from './Pages/Admin/AdminGallery/AdminGallery';
import { AuthContext } from './Pages/Context/UserContext';
import { Navigate } from "react-router-dom";




const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  return null;
};
const ProtectedRoute = ({ element, allowedRoles, userRole }) => {
  // Check if userRole is in the allowedRoles array
  return allowedRoles.includes(userRole) ? element : <Navigate to="/login" />;
};

function App() {
  const { dispatch} = useContext(AuthContext)
  const user = JSON.parse(localStorage.getItem('user'))
  useEffect(()=>{
    
    if(user){
      dispatch({type:'LOGIN_SUCCESS', payload:user})
    }
  },[])
  const Layout = () =>{
    return(
      <>
      <Appbar/>
      <ScrollToTop/>
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
    {
      path:'/',
      element:<Layout/>,
      children:[{
        path:'/gallery/:name',
        element:<ImageTemp/>
      }
    ]
    },
    {
      path:'/login',
      element:<SignIn/>,
    },
    {
      path:'/admin',
      element:<AdminHome/>,
    },
    {
      path:'/admin/user',
      element:<ProtectedRoute element={<AdminUser />} allowedRoles={[process.env.REACT_APP_ARC]} userRole={user.role} />,
    },
    {
      path:'/admin/program',
      element:<AdminProgram/>,
    },
    {
      path:'/admin/blog',
      element:<AdminBlog/>,
    },
    {
      path:'/admin/gallery-category',
      element:<GalleryCat/>,
    },
    {
      path:'/admin/gallery',
      element:<AdminGallery/>,
    },
    
  ])
  return (
    
    <RouterProvider router={router}/>
  );
}

export default App;
