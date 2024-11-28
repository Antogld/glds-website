import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import DOMPurify from 'dompurify';

const SingleUserDoc = () => {
  const [content, setContent] = useState(null)
  const { url } = useParams()

  const fetchData = async () => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/userguide/${url}`)
    const data = await res.json()
    console.log(data)
    setContent(data)
  }

  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div className="mt-6 bg-gray-50">
      <div className=" px-10 py-6 mx-auto">


        <div className="md:max-w-6xl md:px-10 py-6 mx-auto bg-gray-50">

          <div className="flex items-center justify-start mt-4 mb-4">
            <p className="px-2 py-1 font-bold bg-red-400 text-white rounded-lg hover:bg-gray-500 mr-4">{content?.category?.name}</p>

          </div>
          <div className="mt-2">
            <a href="#"
              className="sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-black  hover:underline">{content?.title}</a>




          </div>


          <div className=" mx-auto mt-4">

            <div
              className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-foreground prose-p:text-muted-foreground"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(content?.content || '')
              }}
            />



          </div>
        </div>

      </div>
    </div>
  )
}

export default SingleUserDoc