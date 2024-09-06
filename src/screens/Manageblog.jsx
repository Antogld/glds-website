import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const [formData, setFormData] = useState({ Title: '', Content: '', image: '' });
  const [editingBlog, setEditingBlog] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Fetch all blogs
    axios.get(import.meta.env.VITE_API_URL + '/blog/blogs')
      .then(res => setBlogs(res.data))
      .catch(err => console.error('Error fetching blogs:', err));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingBlog) {
      axios.put(import.meta.env.VITE_API_URL + `/blog/blogs/${editingBlog._id}`, formData)
        .then(res => {
          setBlogs(blogs.map(blog => (blog._id === editingBlog._id ? res.data : blog)));
          setEditingBlog(null);
          setFormData({ Title: '', Content: '', image: '' });
          setShowModal(false);
        });
    } else {
      axios.post(import.meta.env.VITE_API_URL + '/blog/blogs', formData)
        .then(res => {
          setBlogs([...blogs, res.data]);
          setFormData({ Title: '', Content: '', image: '' });
          setShowModal(false);
        });
    }
  };

  const handleDelete = (id) => {
    axios.delete(import.meta.env.VITE_API_URL + `/blog/blogs/${id}`)
      .then(() => setBlogs(blogs.filter(blog => blog._id !== id)));
  };

  const handleEdit = (blog) => {
    setEditingBlog(blog);
    setFormData({ Title: blog.Title, Content: blog.Content, image: blog.image });
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setEditingBlog(null);
    setFormData({ Title: '', Content: '', image: '' });
  };

  const handleAdd = () => {
    setShowModal(true);
    setEditingBlog(null);
  };

  return (
    <div className="container mt-20 mx-auto p-6 bg-white rounded-lg shadow-lg dark:bg-gray-900">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">Admin Blog Management</h1>
      <div className="overflow-x-auto py-2">
        <div className="flex justify-end">
          <button
            onClick={() => handleAdd()}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-300 dark:focus:ring-green-700"
          > 
            Add Blog
          </button>
        </div>  
      </div>
      
      {/* Form Section */}

      {/* Table Section */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white dark:bg-gray-800 shadow-md rounded-lg">
          <thead className="bg-gray-100 dark:bg-gray-700">
            <tr>
              <th className="py-3 px-6 text-left text-gray-700 dark:text-gray-300">Title</th>
              <th className="py-3 px-6 text-left text-gray-700 dark:text-gray-300">Content</th>
              <th className="py-3 px-6 text-left text-gray-700 dark:text-gray-300">Image</th>
              <th className="py-3 px-6 text-left text-gray-700 dark:text-gray-300">Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map(blog => (
              <tr key={blog._id} className="border-b dark:border-gray-600">
                <td className="py-3 px-6 text-gray-800 dark:text-white">{blog.Title}</td>
                <td className="py-3 px-6 text-gray-600 dark:text-gray-300">
                  {blog.Content.length > 50 ? `${blog.Content.substring(0, 50)}...` : blog.Content}
                </td>
                <td className="py-3 px-6">
                  <img src={blog.image} alt={blog.Title} className="w-24 h-16 object-cover rounded-lg shadow-lg" />
                </td>
                <td className="py-3 px-6">
                  <div className="flex space-x-4">
                    <button
                      onClick={() => handleEdit(blog)}
                      className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-300 dark:focus:ring-green-700"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(blog._id)}
                      className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-red-600 focus:outline-none focus:ring-4 focus:ring-red-300 dark:focus:ring-red-700"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Modal Section */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-lg">
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Edit Blog</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  type="text"
                  name="Title"
                  value={formData.Title}
                  onChange={handleChange}
                  placeholder="Title"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>

              <div className="mb-4">
                <textarea
                  name="Content"
                  value={formData.Content}
                  onChange={handleChange}
                  placeholder="Content"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>

              <div className="mb-4">
                <input
                  type="text"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  placeholder="Image URL"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>

              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={handleClose}
                  className="bg-gray-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className={`w-full py-2 px-4 bg-blue-500 text-white rounded-lg transition duration-300 ${
                    editingBlog ? 'bg-yellow-500 hover:bg-yellow-600' : 'hover:bg-blue-600'
                  } focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900`}
                >
                  {editingBlog ? 'Update' : 'Add'} Blog
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>

  );
};

export default AdminBlog;
