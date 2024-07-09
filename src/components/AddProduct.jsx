import React, { useState } from 'react';
import { FiSend } from 'react-icons/fi';
import toast from 'react-hot-toast';

const AddProduct = ({ setProducts }) => {
  const [title, setTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      id: Date.now(), // Generate a unique ID for the new product
      title,
      image: imageUrl,
      description: description,
      price: parseFloat(price), // Ensure the price is a number
    };
    setProducts(prevProducts => [...prevProducts, newProduct]);
    setTitle('');
    setImageUrl('');
    setDescription('');
    setPrice('');

    toast.success('Artwork Added Successfully.');
  };

  return (
    <div className="min-h-screen flex items-start pt-10 justify-center bg-gradient-to-tr from-[#3a210e] via-[#131111] to-[#3a210e] font-tenorSans">
      <div className="w-full max-w-md p-8 rounded-xl bg-[#131111] shadow-lg">
        <h1 className="text-3xl font-bold text-[#9f5f2d] mb-6">Add Artwork</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Title"
              className="w-full p-3 rounded-lg bg-[#131111] text-[#b89785] focus:outline-none focus:ring-2 focus:ring-[#9f5f2d]"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Image URL"
              className="w-full p-3 rounded-lg bg-[#131111] text-[#b89785] focus:outline-none focus:ring-2 focus:ring-[#9f5f2d]"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Price"
              className="w-full p-3 rounded-lg bg-[#131111] text-[#b89785] focus:outline-none focus:ring-2 focus:ring-[#9f5f2d]"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Artist"
              className="w-full p-3 rounded-lg bg-[#131111] text-[#b89785] focus:outline-none focus:ring-2 focus:ring-[#9f5f2d]"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full flex items-center justify-center bg-transparent border border-[#9f5f2d] rounded-full hover:bg-[#9f5f2d] text-[#9f5f2d] hover:text-black font-bold py-3 px-6 focus:outline-none focus:ring-2"
          >
            Add Art <FiSend className="ml-2" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
