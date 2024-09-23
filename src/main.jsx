import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate
} from "react-router-dom";
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Restruct from './screens/Restruct.jsx';
import Supporto from './screens/Support.jsx';
import Blogs from './screens/Blogs.jsx';
import AdminBlog from './screens/Manageblog.jsx';
import Sostenibilita from './screens/Sostenibilita.jsx';
import Eticaeconformita from './screens/Eticaeconformita.jsx';
import InnovationHeroSection from './screens/Chisiamo.jsx';
import BlogList from './components/BlogList.jsx';
import BlogPost from './components/BlogPost.jsx';
import CreateBlog from './components/CreateBlog.jsx';
import EditBlog from './components/EditBlog.jsx';
import AdminLogin from './components/admin/AdminLogin.jsx';
import AdminDashboard from './components/admin/AdminDashboard.jsx';
import Cookies from 'js-cookie';

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

const ProtectedRoute = ({ children }) => {
  const adminToken = Cookies.get('adminToken');
  return adminToken ? children : <Navigate to="/login" replace />;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/restruct",
        element: <Restruct />,
      },
      {
        path: "/support",
        element: <Supporto />
      },
      {
        path: "/blog",
        element: <BlogList />
      },
      {
        path: "/blog/:slug",
        element: <BlogPost />
      },
      {
        path: "/sostenibilita",
        element: <Sostenibilita />
      },
      {
        path: "/eticaeconformita",
        element: <Eticaeconformita />
      },
      {
        path: "/chisiamo",
        element: <InnovationHeroSection />
      },
      // Admin routes
      {
        path: "/login",
        element: <AdminLogin />
      },
      {
        path: "/admin",
        element: <ProtectedRoute><AdminDashboard /></ProtectedRoute>
      },
      {
        path: "/blog/create",
        element: <ProtectedRoute><CreateBlog /></ProtectedRoute>
      },
      {
        path: "/blog/edit/:slug",
        element: <ProtectedRoute><EditBlog /></ProtectedRoute>
      },
      {
        path: "/manageblog",
        element: <ProtectedRoute><AdminBlog /></ProtectedRoute>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)