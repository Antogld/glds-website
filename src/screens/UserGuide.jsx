import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

const UserGuide = () => {
  const [docs, setDocs] = useState([]);

  const fetchDocs = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/userguide`);
      const data = await res.json();
      
      const sortByCategories = (data) => {
        const categoryMap = new Map();
        
        data.forEach((doc) => {
          const categoryName = doc.category.name;
          if (!categoryMap.has(categoryName)) {
            categoryMap.set(categoryName, { category: categoryName, docs: [] });
          }
          categoryMap.get(categoryName).docs.push(doc);
        });
      
        return Array.from(categoryMap.values());
      };
      
      const result = sortByCategories(data);
      setDocs(result);
    } catch (error) {
      console.error('Error fetching docs:', error);
    }
  };

  useEffect(() => {
    fetchDocs();
  }, []);

  return (
    <ScrollArea className="h-screen">
      <section className="container mx-auto px-4 py-16">
        <Card className="my-8 border-0">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center">Guida utente</CardTitle>
            <CardDescription className="text-center">
              Scopri le nostre guide per l'utente e tutorial di configurazione per applicazione.
            </CardDescription>
          </CardHeader>
        </Card>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {docs.map((item) => (
            <Card key={item.category} className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-lg">{item.category}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2">
                  {item.docs.map((doc) => (
                    <li key={doc._id}>
                      <Link 
                        to={`/docs/${doc.url}`}
                        className="text-blue-600 hover:underline"
                      >
                        {doc.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </ScrollArea>
  );
};

export default UserGuide;

