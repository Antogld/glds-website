import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import newRequest from '@/utils/newRequest';

const EditBlog = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchBlog();
  }, [slug]);

  const fetchBlog = async () => {
    try {
      setLoading(true);
      const response = await newRequest.get(`/api/blogs/${slug}`);
      const data = response.data;
      if (data) {
        setTitle(data.title || '');
        setContent(data.content || '');
      } else {
        setError('Blog post not found');
      }
    } catch (error) {
      console.error('Error fetching blog:', error);
      setError('Failed to fetch blog post. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    if (image) formData.append('image', image);

    try {
      const response = await newRequest.patch(`/api/blogs/${slug}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      if (response.data && response.data.slug) {
        navigate(`/blog/${response.data.slug}`);
      } else {
        setError('Failed to update blog post. Please try again.');
      }
    } catch (error) {
      console.error('Error updating blog:', error);
      setError(error.response?.data?.message || 'Failed to update blog post. Please try again.');
    }
  };

  if (loading) return <div className="container mx-auto px-4 py-8">Loading...</div>;
  if (error) return <div className="container mx-auto px-4 py-8">Error: {error}</div>;

  return (
    <div className="container mx-auto px-4 py-32">
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Edit Blog Post</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Title</label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="mt-1"
              />
            </div>
            <div>
              <label htmlFor="content" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Content</label>
              <ReactQuill
                value={content}
                onChange={setContent}
                className="mt-1 bg-white dark:bg-gray-800"
              />
            </div>
            <div>
              <label htmlFor="image" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Image</label>
              <Input
                id="image"
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
                className="mt-1"
              />
            </div>
            {error && <p className="text-red-500">{error}</p>}
            <Button type="submit">Update Post</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default EditBlog;