import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { format } from 'date-fns';
import { it } from 'date-fns/locale';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const BlogCardSkeleton = () => (
  <Card className="h-full">
    <Skeleton className="w-full h-48 rounded-t-lg" />
    <CardHeader>
      <Skeleton className="h-6 w-3/4" />
      <Skeleton className="h-4 w-1/4 mt-2" />
    </CardHeader>
    <CardContent>
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-3/4" />
    </CardContent>
  </Card>
);

const getImageUrl = (imagePath) => {
  if (!imagePath) return null;
  if (imagePath.startsWith('http')) return imagePath;
  return `${import.meta.env.VITE_API_URL}/uploads/${imagePath.replace(/^\/uploads\//, '')}`;
};

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/blog-posts`);
        console.log('API Response:', response.data); // Debug log
        if (Array.isArray(response.data)) {
          setBlogs(response.data);
        } else {
          setError('Formato dati non valido');
        }
      } catch (error) {
        console.error('Error fetching blogs:', error);
        setError(error.response?.data?.message || 'Errore nel caricamento dei blog');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (error) {
    return (
      <div className="container py-8">
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Errore</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="container py-8 mt-20">
        <div className="mb-12 space-y-2 text-center">
          <h2 className="text-3xl font-bold text-gray-800 md:text-4xl dark:text-white">Ultime notizie dal nostro blog</h2>
          <p className="lg:mx-auto lg:w-6/12 text-gray-600 dark:text-gray-300">
            Scopri le ultime novità, approfondimenti e consigli del settore attraverso il nostro blog: un'importante risorsa per rimanere al passo con le tendenze e le best practices.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array(3).fill(0).map((_, index) => (
            <BlogCardSkeleton key={index} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="container py-8 pt-20">
      <div className="mb-12 space-y-2 text-center">
        <h2 className="text-3xl font-bold text-gray-800 md:text-4xl dark:text-white">Ultime notizie dal nostro blog</h2>
        <p className="lg:mx-auto lg:w-6/12 text-gray-600 dark:text-gray-300">
          Scopri le ultime novità, approfondimenti e consigli del settore attraverso il nostro blog: un'importante risorsa per rimanere al passo con le tendenze e le best practices.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs && blogs.length > 0 ? (
          blogs.map((blog) => (
            <Link to={`/blog/${blog._id}`} key={blog._id}>
              <Card className="h-full hover:shadow-lg transition-all duration-300 bg-card text-card-foreground hover:bg-accent/10">
                {blog.coverImage && (
                  <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
                    <img
                      src={getImageUrl(blog.coverImage)}
                      alt={blog.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-xl font-semibold line-clamp-2">{blog.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {format(new Date(blog.publishDate || blog.createdAt || new Date()), 'dd MMMM yyyy', { locale: it })}
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground line-clamp-3">
                    {blog.content?.replace(/<[^>]+>/g, '') || ''}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="hover:bg-accent hover:text-accent-foreground">
                    Leggi di più
                  </Button>
                </CardFooter>
              </Card>
            </Link>
          ))
        ) : (
          <div className="col-span-full text-center text-muted-foreground">
            Nessun blog disponibile al momento.
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogList;