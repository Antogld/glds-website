import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const UserGuide = () => {
  const [docs, setDocs] = useState([]);
  const [open, setOpen] = useState(false);
  const [currentBlog, setCurrentBlog] = useState(null);

  const fetchDocs=async()=>{

    const res = await fetch(import.meta.env.VITE_API_URL + '/userguide')
    
    const data = await res.json()
    
    const sortByCategories = (data) => {
      const categoryMap = new Map();
      
      data.forEach((docs) => {
      const categoryName = docs.category.name;
      if (!categoryMap.has(categoryName)) {
        categoryMap.set(categoryName, { category: categoryName, docs: [] });
      }
      categoryMap.get(categoryName).docs.push(docs);
    });
  
    return Array.from(categoryMap.values());
  };
  
  const result = sortByCategories(data);
  console.log(result)
  setDocs(result)
}
  useEffect(() => {
    fetchDocs()
  }, []);


    return (
      <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-10">
       
          <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900">
          Guida utente
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          Scopri le nostre guide per l'utente e tutorial di configurazione per applicazione. 
          </p>
        </div>
        <div className="grid md:grid-cols-5 grid-cols-2">
        {docs.map((item)=>(
          <div key={item.category} className=" px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
            {item.category}
            </h2>
           <ul>
            {item.docs.map((item)=>(
           <li key={item._id}>
            <Link to={`/docs/${item.url}`} className="text-[#2563EB] text-md hover:text-gray-800 cursor-pointer">{item.title}</Link>
          </li>
          ))}
           </ul>

          </div>
        ))}

          {/* <div className=" px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
            Finance
            </h2>
           <ul>
           <li>
            <a class="text-[#2563EB] text-md hover:text-gray-800 cursor-pointer">First Link</a>
          </li>
          <li>
            <a class="text-[#2563EB] text-md hover:text-gray-800 cursor-pointer">Second Link</a>
          </li>
          <li>
            <a class="text-[#2563EB] text-md hover:text-gray-800 cursor-pointer">Third Link</a>
          </li>
          <li>
            <a class="text-[#2563EB] text-md hover:text-gray-800 cursor-pointer">Fourth Link</a>
          </li>

           </ul>
          </div>
          <div className=" px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
            Finance
            </h2>
           <ul>
           <li>
            <a class="text-[#2563EB] text-md hover:text-gray-800 cursor-pointer">First Link</a>
          </li>
          <li>
            <a class="text-[#2563EB] text-md hover:text-gray-800 cursor-pointer">Second Link</a>
          </li>
          <li>
            <a class="text-[#2563EB] text-md hover:text-gray-800 cursor-pointer">Third Link</a>
          </li>
          <li>
            <a class="text-[#2563EB] text-md hover:text-gray-800 cursor-pointer">Fourth Link</a>
          </li>

           </ul>
          </div>
          <div className=" px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
            Finance
            </h2>
           <ul>
           <li>
            <a class="text-[#2563EB] text-md hover:text-gray-800 cursor-pointer">First Link</a>
          </li>
          <li>
            <a class="text-[#2563EB] text-md hover:text-gray-800 cursor-pointer">Second Link</a>
          </li>
          <li>
            <a class="text-[#2563EB] text-md hover:text-gray-800 cursor-pointer">Third Link</a>
          </li>
          <li>
            <a class="text-[#2563EB] text-md hover:text-gray-800 cursor-pointer">Fourth Link</a>
          </li>

           </ul>
          </div>
          <div className=" px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
            Finance
            </h2>
           <ul>
           <li>
            <a class="text-[#2563EB] text-md hover:text-gray-800 cursor-pointer">First Link</a>
          </li>
          <li>
            <a class="text-[#2563EB] text-md hover:text-gray-800 cursor-pointer">Second Link</a>
          </li>
          <li>
            <a class="text-[#2563EB] text-md hover:text-gray-800 cursor-pointer">Third Link</a>
          </li>
          <li>
            <a class="text-[#2563EB] text-md hover:text-gray-800 cursor-pointer">Fourth Link</a>
          </li>

           </ul>
          </div> */}
          
        </div>
      
      </div>
    </section>
  );
};

export default UserGuide;