import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import newRequest from '@/utils/newRequest';

const BlogPost = () => {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    fetchBlog();
  }, [slug]);

  const fetchBlog = async () => {
    try {
      setLoading(true);
      const response = await newRequest.get(`/api/blogs/${slug}`);
      setBlog(response.data);
    } catch (error) {
      console.error('Error fetching blog:', error);
      setError('Failed to fetch blog post. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="container mx-auto px-4 py-8">Loading...</div>;
  if (error) return <div className="container mx-auto px-4 py-8">Error: {error}</div>;
  if (!blog) return <div className="container mx-auto px-4 py-8">Blog post not found.</div>;

  return (
    <div className="container mx-auto px-4 py-32">
      <Card className="max-w-3xl mx-auto border-0">
        <CardHeader>
          <CardTitle className="text-3xl font-bold my-6">{blog.title}</CardTitle>
          {blog.image && (
            <img 
              src={`${import.meta.env.VITE_API_URL}${blog.image}`} 
              alt={blog.title} 
              className="w-full h-64 object-cover rounded-t-lg" 
            />
          )}
        </CardHeader>
        <CardContent>
          <div 
            className="prose dark:prose-invert max-w-none mt-6" 
            dangerouslySetInnerHTML={{ __html: blog.content }} 
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default BlogPost;