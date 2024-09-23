import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { PlusCircle, Edit, Trash2 } from 'lucide-react';
import newRequest from '../../utils/newRequest';
import Cookies from 'js-cookie';

const AdminDashboard = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const response = await newRequest.get('/api/blogs');
      setBlogs(response.data);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching blogs:', err);
      setError('Failed to fetch blogs. Please try again.');
      setLoading(false);
    }
  };

  const handleLogout = () => {
    Cookies.remove('adminToken');
    navigate('/login');
  };

  const handleDelete = async (slug) => {
    if (window.confirm('Are you sure you want to delete this blog?')) {
      try {
        await newRequest.delete(`/api/blogs/${slug}`);
        fetchBlogs(); // Refresh the blog list
      } catch (err) {
        console.error('Error deleting blog:', err);
        setError('Failed to delete blog. Please try again.');
      }
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mx-auto px-4 py-32">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <div>
          <Button onClick={() => navigate('/blog/create')}>
            Create New Blog
          </Button>
          <Button onClick={handleLogout} variant="outline" className="ml-4">Logout</Button>
        </div>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {blogs.map((blog) => (
            <TableRow key={blog._id}>
              <TableCell>{blog.title}</TableCell>
              <TableCell>
                <Button onClick={() => navigate(`/blog/edit/${blog.slug}`)} variant="outline" size="sm" className="mr-2">
                  <Edit className="mr-2 h-4 w-4" /> Edit
                </Button>
                <Button onClick={() => handleDelete(blog.slug)} variant="destructive" size="sm">
                  <Trash2 className="mr-2 h-4 w-4" /> Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AdminDashboard;