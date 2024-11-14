import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from '@/components/ui/card';
import { format } from 'date-fns';
import { it } from 'date-fns/locale';
import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Skeleton } from "@/components/ui/skeleton";
import DOMPurify from 'dompurify';

const ReleaseNotesSkeleton = () => (
  <div className="space-y-4">
    {[1, 2, 3].map((i) => (
      <Card key={i} className="p-6">
        <Skeleton className="h-8 w-1/4 mb-2" />
        <Skeleton className="h-4 w-1/3 mb-4" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-4/6" />
        </div>
      </Card>
    ))}
  </div>
);

const ReleaseNotes = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReleaseNotes = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/release-notes`);
        setNotes(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching release notes:', error);
        setError(error.response?.data?.message || 'Errore nel caricamento delle note di rilascio');
        setLoading(false);
      }
    };

    fetchReleaseNotes();
  }, []);

  if (error) {
    return (
      <div className="container py-8 pt-20">
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
      <div className="container py-8 pt-20 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-center">Note di Rilascio</h1>
        <ReleaseNotesSkeleton />
      </div>
    );
  }

  return (
    <div className="container py-8 mt-20 max-w-4xl">
      <div className="mb-12 space-y-2 text-center">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
          Note di Rilascio
        </h1>
        <p className="text-muted-foreground lg:mx-auto lg:w-6/12">
          Scopri gli ultimi aggiornamenti e miglioramenti apportati alla piattaforma.
        </p>
      </div>

      {notes.length > 0 ? (
        <div className="space-y-6">
          {notes.map((note) => (
            <Card key={note._id} className="p-6 relative overflow-hidden">
              {/* Version badge */}
              <div className="absolute top-4 right-4 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                v{note.version}
              </div>

              {/* Content */}
              <div className="pr-24"> {/* Make space for the version badge */}
                <h2 className="text-2xl font-bold mb-2 text-foreground">
                  Versione {note.version}
                </h2>
                <p className="text-sm text-muted-foreground mb-4">
                  Rilasciato il {format(new Date(note.releaseDate), 'dd MMMM yyyy', { locale: it })}
                </p>
                <div 
                  className="prose prose-gray dark:prose-invert max-w-none"
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(note.content)
                  }}
                />
              </div>

              {/* Timeline connector */}
              {notes.indexOf(note) !== notes.length - 1 && (
                <div className="absolute left-8 bottom-0 w-px h-6 bg-border" />
              )}
            </Card>
          ))}
        </div>
      ) : (
        <Card className="p-6 text-center text-muted-foreground">
          Nessuna nota di rilascio disponibile.
        </Card>
      )}
    </div>
  );
};

export default ReleaseNotes;