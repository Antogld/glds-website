import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const EditBlog = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [image, setImage] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchBlog();
  }, [slug]);

  const fetchBlog = async () => {
    try {
      const response = await fetch(`  https://glds-website-backend-1.onrender.com/api/blogs/${slug}`);
      const data = await response.json();
      setTitle(data.title);
      setContent(data.content);
      setAuthor(data.author);
    } catch (error) {
      console.error('Error fetching blog:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('author', author);
    if (image) formData.append('image', image);

    try {
      const response = await fetch(`  https://glds-website-backend-1.onrender.com/api/blogs/${slug}`, {
        method: 'PATCH',
        body: formData,
      });
      if (response.ok) {
        navigate(`/blog/${slug}`);
      }
    } catch (error) {
      console.error('Error updating blog:', error);
    }
  };

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
              <label htmlFor="author" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Author</label>
              <Input
                id="author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
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
            <Button type="submit">Update Post</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default EditBlog;