import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import DOMPurify from 'dompurify';
import { Card } from '@/components/ui/card';
import { format } from 'date-fns';
import { it } from 'date-fns/locale';
import { ChevronLeft, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const getImageUrl = (imagePath) => {
  if (!imagePath) return null;
  if (imagePath.startsWith('http')) return imagePath;
  return `${import.meta.env.VITE_API_URL}/uploads/${imagePath.replace(/^\/uploads\//, '')}`;
};

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/blog-posts/${id}`);
        console.log('Blog Response:', response.data); // Debug log
        if (response.data) {
          setBlog(response.data);
        } else {
          setError('Blog non trovato');
        }
      } catch (error) {
        console.error('Error fetching blog:', error);
        setError(error.response?.data?.message || 'Errore nel caricamento del blog');
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) {
    return (
      <div className="container py-8 max-w-4xl">
        <Skeleton className="h-8 w-32 mb-6" />
        <Skeleton className="w-full h-64 rounded-lg mb-6" />
        <Skeleton className="h-12 w-3/4 mb-4" />
        <Skeleton className="h-6 w-48 mb-8" />
        <div className="space-y-4">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="container py-8">
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Errore</AlertTitle>
          <AlertDescription>
            {error || 'Blog post non trovato'}
          </AlertDescription>
        </Alert>
        <Button
          variant="ghost"
          onClick={() => navigate('/blog')}
          className="mt-4"
        >
          Torna alla lista dei blog
        </Button>
      </div>
    );
  }

  return (
    <div className="mx-auto py-8 pt-20 max-w-4xl">
      <Button
        variant="link"
        onClick={() => navigate(-1)}
        className="flex items-center mb-6 hover:bg-accent"
      >
        <ChevronLeft className="w-5 h-5 mr-1" />
        Torna indietro
      </Button>

      <Card className="p-6 border-0">
        {blog.coverImage && (
          <div className="relative w-full h-auto mb-6 overflow-hidden rounded-lg">
            <img
              src={getImageUrl(blog.coverImage)}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <h1 className="text-4xl font-bold mb-4 text-foreground">{blog.title}</h1>

        <div className="flex items-center text-muted-foreground mb-8">
          {blog.author && <span className="mr-4">Di {blog.author}</span>}
          <span>
            {format(new Date(blog.publishDate || blog.createdAt || new Date()), 'dd MMMM yyyy', { locale: it })}
          </span>
        </div>

        <div
          className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-foreground prose-p:text-muted-foreground"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(blog.content || '')
          }}
        />

        {blog.tags && blog.tags.length > 0 && (
          <div className="mt-8 flex flex-wrap gap-2">
            {blog.tags.map((tag, index) => (
              <span
                key={index}
                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-secondary text-secondary-foreground"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </Card>
    </div>
  );
};

export default BlogPost;