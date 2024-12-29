"use client";
import React, { useEffect, useState } from "react";

import Image from "next/image";

// Define the type for each blog item
type BlogItem = {
  imageUrl: string;
  name: string;
  id: string;
};

// Sample block data (can be replaced with actual dynamic data from an API)
const block: BlogItem[] = [
  { imageUrl: "/image1.png", name: 'BEDROOM', id: "1" },
  { imageUrl: "/image2.jpg", name: 'DRAWING ROOM', id: "2" },
  { imageUrl: "/image3.jpg", name: 'DINING ROOM', id: "3" },
  { imageUrl: "/image4.jpg", name: 'STUDY ROOM', id: "4" },
  { imageUrl: "/image5.jpg", name: 'BATH ROOM', id: "5" },
  { imageUrl: "/image6.jpg", name: 'WARDROBE', id: "6" },
  { imageUrl: "/image7.jpg", name: 'GAMING ROOM', id: "7" },
  { imageUrl: "/image8.jpg", name: 'KITCHEN', id: "8" },
  { imageUrl: "/image9.jpg", name: 'PIZZA ROOM', id: "9" },
  { imageUrl: "/image10.jpg", name: 'MEETING ROOM', id: "10" },
  { imageUrl: "/image11.jpg", name: 'LIBRARY', id: "11" },
  { imageUrl: "/image12.jpg", name: 'WAITING ROOM', id: "12" },
];

// Define props for dynamic route
interface BlogProps {
  params: Promise<{
    id: string; // Dynamic ID passed in URL
  }>;
}

export default function Blog({ params }: BlogProps) {
  const [unwrappedParams, setUnwrappedParams] = useState<{ id: string } | null>(null);
  const [comments, setComments] = useState<{ name: string; comment: string }[]>([]);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  
  useEffect(() => {
    const fetchParams = async () => {
      const resolvedParams = await params; // Unwrap the Promise
      setUnwrappedParams(resolvedParams);
    };

    fetchParams();
  }, [params]);

  if (!unwrappedParams) {
    return <h2>Loading...</h2>; // Or a loading spinner while the params are being resolved
  }

  const { id } = unwrappedParams;

  // Find the blog post that matches the dynamic ID
  const blog = block.find((item) => item.id === id);

  if (!blog) {
    return <h2>Post not found</h2>;
  }

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && comment) {
      setComments((prevComments) => [
        ...prevComments,
        { name, comment },
      ]);
      setName("");
      setComment("");
    }
  };


  return (
    <div className="container mx-auto px-4 sm:px-12 md:px-32 py-8 md:py-[92px] bg-black">
  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-600 text-center md:text-left">
    {blog.name}
  </h1>
  
  <div className="flex justify-center md:justify-start mt-4">
    <Image 
      src={blog.imageUrl} 
      alt={blog.name} 
      width={200} 
      height={300} 
      className="w-[80%] sm:w-[400px] h-80 object-cover rounded-md"
    />
  </div>

  <p className="mt-4 text-lg leading-relaxed text-orange-500 text-center md:text-left">
    This is a detailed post about {blog.name}.
  </p>

  {/* Comment Form */}
  <div className="mt-8">
    <h2 className="text-2xl font-semibold mb-4 text-orange-500 text-center md:text-left">
      Leave a Comment
    </h2>
    <form onSubmit={handleCommentSubmit}>
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-white">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="comment" className="block text-sm font-medium text-gray-300">
          Your Comment
        </label>
        <textarea
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md"
          rows={4}
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-lime-500 text-white py-2 px-4 rounded-md"
      >
        Submit Comment
      </button>
    </form>
  </div>

  {/* Display Comments */}
  <div className="mt-8">
    <h3 className="text-xl font-semibold mb-4 text-orange-500 text-center md:text-left">
      Comments
    </h3>
    {comments.length === 0 ? (
      <p className="text-orange-500 text-center md:text-left">No comments yet. Be the first to comment!</p>
    ) : (
      <ul>
        {comments.map((comment, index) => (
          <li key={index} className="mb-4 text-white">
            <p className="font-semibold">{comment.name}</p>
            <p>{comment.comment}</p>
          </li>
        ))}
      </ul>
    )}
  </div>
</div>
  )
}