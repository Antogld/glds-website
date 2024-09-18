import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Restruct from './screens/Restruct.jsx';
import Supporto from './screens/Support.jsx';
import Blogs from './screens/Blogs.jsx';
import AdminBlog from './screens/Manageblog.jsx';
import Sostenibilita from './screens/Sostenibilita.jsx';
import Eticaeconformita from './screens/Eticaeconformita.jsx';

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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      // Add other routes here as needed
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
        element: <Blogs />
      },
      {
        path: "/manageblog",
        element: <AdminBlog />
      },
      {
        path: "/sostenibilita",
        element: <Sostenibilita />
      },
      {
        path: "/eticaeconformita",
        element: <Eticaeconformita />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)