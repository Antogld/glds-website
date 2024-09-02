import React, { useState } from 'react';
import aboutImg from '../assets/about-img.jpeg'
import { Dialog, DialogContent, DialogTitle } from './ui/dialog';
import { Button } from './ui/button'

const Blog = () => {
  	const blogData = [
	    {
		    image: "../assets/blogs/blog1.jpg",
		    Title: "About Galdiero Systems: Pioneering Innovation in Software Development",
		    Content: "Galdiero Systems is a leading company in the field of software development, specializing in creating innovative solutions that are tailored to meet the unique needs of businesses. With a strong focus on designing and implementing advanced software, we aim to optimize business operations and drive sustainable growth. Our team of experts is dedicated to understanding the specific challenges faced by companies today, and we work tirelessly to develop powerful, customized tools that streamline processes, improve efficiency, and foster long-term success."
		},
		{
		    image: "../assets/blogs/blog2.jpg",
		    Title: "Unveiling the Advantages of Galdiero Systems' Software Solutions",
		    Content: "Our software solutions offer a range of distinct benefits that set us apart in the industry. One of the key advantages is enhanced operational efficiency—our tools are designed to optimize business processes, reducing time and effort while significantly boosting productivity. Additionally, our software is built with precision and reliability at its core, ensuring that users have access to accurate data, which is essential for making informed decisions. We are committed to continuous innovation, integrating the latest technologies to keep our products at the forefront of the industry. Our dedication to customer support is unmatched, as we provide timely and comprehensive assistance to ensure a positive user experience. Furthermore, we prioritize data security, implementing robust measures to protect sensitive business information. At Galdiero Systems, we strive to exceed expectations by delivering software solutions that enhance overall business performance."
		},
		{
		    image: "../assets/blogs/blog3.jpg",
		    Title: "Expanding Our Software Portfolio: What’s Available and What’s Coming",
		    Content: "As of now, our flagship software offering is Restruct, a powerful tool designed to address various business needs. Restruct has been well-received for its ability to streamline operations and improve productivity across different sectors. However, our commitment to innovation doesn’t stop there. We are actively developing new software solutions that will further expand our portfolio and offer even more advanced features to meet the evolving demands of businesses. These upcoming products are being crafted with the same attention to detail and dedication to quality that Galdiero Systems is known for. Stay tuned as we prepare to launch these exciting new tools, which will provide even greater support for businesses looking to enhance their operations and achieve sustained growth."
		},
		{
		    image: "../assets/blogs/blog4.jpg",
		    Title: "Why Security is a Top Priority for Galdiero Systems' Software",
		    Content: "At Galdiero Systems, we understand that the security of your business data is of utmost importance. That’s why we have made it our mission to incorporate stringent security measures into every aspect of our software development process. Our solutions are designed to safeguard the confidentiality, integrity, and availability of your information, providing you with peace of mind that your data is protected at all times. We implement advanced encryption technologies and follow best practices in cybersecurity to ensure that our software is resilient against threats. Moreover, we continually update our security protocols to stay ahead of potential risks and vulnerabilities. Our unwavering commitment to security is a testament to our dedication to building trust with our clients and delivering software solutions that they can rely on. By choosing Galdiero Systems, you are not only investing in cutting-edge software but also in the security and protection of your business’s most valuable assets."
		}
  	];

  	const [open, setOpen] = useState(false);
	const [currentBlog, setCurrentBlog] = useState(null);

	const handleReadMore = (blog) => {
	    setCurrentBlog(blog);
	    setOpen(true);
	};

	const handleClose = () => {
	    setOpen(false);
	    setCurrentBlog(null);
	};

  	return (
    <div className="bg-white dark:bg-gray-900 py-16">
      	<div className="container mx-auto px-4 ">
	        <div className="mb-8">
	          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white ">Blogs</h2>
	          <p className=' text-center mx-auto w-full'>Qui trovi le risposte alle domande più frequenti.
	            Se non trovi quello che cerchi puoi sempre contattarci e otterrai una risposta il prima possibile.</p>
	        </div>
	        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
	          	{blogData.map((blog, index) => (
	            	<div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
	            		<img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
	              		<h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{blog.Title}</h3>
	              		<p className="text-gray-600 dark:text-gray-300">
	                		{blog.Content.length > 100 ? `${blog.Content.substring(0, 100)}...` : blog.Content}
	              		</p>
	              		<Button className="mt-4" onClick={() => handleReadMore(blog)}>
	                		Read More
	              		</Button>
	            	</div>
	          	))}
	        </div>
      	</div>
      	{currentBlog && (
	        <Dialog open={open} onClose={handleClose}>
	          	<DialogTitle>{currentBlog.Title}</DialogTitle>
	          	<DialogContent>
	            	<p>{currentBlog.Content}</p>
	            	<Button className="mt-4" onClick={handleClose}>
	              		Close
	            	</Button>
	          	</DialogContent>
	        </Dialog>
	    )}
    </div>
  );
};

export default Blog;