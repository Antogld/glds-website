import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button"
import { PlusCircle } from 'lucide-react';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('https://glds-website-backend-1.onrender.com/api/blogs');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      if (!Array.isArray(data)) {
        throw new Error('Data is not an array');
      }
      setBlogs(data);
    } catch (error) {
      console.error('Error fetching blogs:', error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <div className="container mx-auto px-4 py-8">Loading...</div>;
  }

  if (error) {
    return <div className="container mx-auto px-4 py-8">Error: {error}</div>;
  }

  return (
    <div className="py-32">
      <div className="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="mb-12 space-y-2 text-center">
          <h2 className="text-3xl font-bold text-gray-800 md:text-4xl dark:text-white">Ultime notizie dal nostro blog</h2>
          <p className="lg:mx-auto lg:w-6/12 text-gray-600 dark:text-gray-300">
            Scopri le ultime novità, approfondimenti e consigli del settore attraverso il nostro blog: un'importante risorsa per rimanere al passo con le tendenze e le best practices.
          </p>
          <Button
            onClick={() => navigate('/blog/create')}
            className="mt-4"
          >
            <PlusCircle className="mr-2 h-4 w-4" /> Add New Blog
          </Button>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.length > 0 ? (
            blogs.map((blog) => (
              <div key={blog._id} className="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-gray-600/10">
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={blog.image ? `https://glds-website-backend-1.onrender.com${blog.image}` : '/api/placeholder/1000/667'}
                    alt={blog.title}
                    className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mt-6 relative">
                  <p className="mt-6 mb-8 text-gray-600 dark:text-gray-300">
                    {blog.author}
                  </p>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                    {blog.title}
                  </h3>
                  <Link to={`/blog/${blog.slug}`} className="mt-4 inline-block text-blue-500 hover:underline">
                    Read more
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p className="col-span-3 text-center">No blogs found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogList;