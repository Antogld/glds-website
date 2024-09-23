import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import newRequest from '@/utils/newRequest';

const CreateBlog = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const navigate = useNavigate();
  const [error, setError] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    if (image) formData.append('image', image);

    try {
      await newRequest.post('/api/blogs', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      navigate('/blog');
    } catch (error) {
      console.error('Error creating blog:', error);
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        setError(error.response.data.message || 'Error creating blog. Please try again.');
        if (error.response.status === 403) {
          setError('You are not authorized to create a blog. Please log in again.');
          // Optionally, you can redirect to the login page here
          // navigate('/login');
        }
      } else if (error.request) {
        // The request was made but no response was received
        setError('No response from server. Please check your connection.');
      } else {
        // Something happened in setting up the request that triggered an Error
        setError('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-32">
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Create New Blog Post</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Title</label>
              <Input
                id="title"
                placeholder="Title"
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
            <Button type="submit">Create Post</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreateBlog;