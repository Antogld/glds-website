import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Edit, Trash2 } from 'lucide-react';

const BlogPost = () => {
  const [blog, setBlog] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchBlog();
  }, [slug]);

  const fetchBlog = async () => {
    try {
      const response = await fetch(`  https://glds-website-backend-1.onrender.com/api/blogs/${slug}`);
      const data = await response.json();
      setBlog(data);
    } catch (error) {
      console.error('Error fetching blog:', error);
    }
  };

  const handleEdit = () => {
    navigate(`/blog/edit/${slug}`);
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this blog post?')) {
      try {
        const response = await fetch(`  https://glds-website-backend-1.onrender.com/api/blogs/${slug}`, {
          method: 'DELETE',
        });
        if (response.ok) {
          navigate('/');
        }
      } catch (error) {
        console.error('Error deleting blog:', error);
      }
    }
  };

  if (!blog) return <div className="container mx-auto px-4 py-8">Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-32">
      <Card className="max-w-3xl mx-auto border-0">
        <CardHeader>
          <CardTitle className="text-3xl font-bold my-6">{blog.title}</CardTitle>
          {blog.image && (
            <img src={`  https://glds-website-backend-1.onrender.com${blog.image}`} alt={blog.title} className="w-full h-64 object-cover rounded-t-lg" />
          )}

          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">By {blog.author}</p>
          <div className="mt-4 flex space-x-2">
            <Button onClick={handleEdit} variant="outline">
              <Edit className="mr-2 h-4 w-4" /> Edit
            </Button>
            <Button onClick={handleDelete} variant="destructive">
              <Trash2 className="mr-2 h-4 w-4" /> Delete
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="prose dark:prose-invert max-w-none mt-6" dangerouslySetInnerHTML={{ __html: blog.content }} />
        </CardContent>
      </Card>
    </div>
  );
};

export default BlogPost;