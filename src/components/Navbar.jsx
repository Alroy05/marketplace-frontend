import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineShoppingCart, AiOutlineAppstoreAdd } from 'react-icons/ai';
import { MdOutlineExplore } from "react-icons/md";
import { RiProductHuntLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: 'Explore', link: '/', icon: <MdOutlineExplore size={20} /> },
    { id: 2, text: 'Create', link: '/add-product', icon: <AiOutlineAppstoreAdd size={20} /> },
    { id: 3, text: 'Cart', link: '/view-cart', icon: <AiOutlineShoppingCart size={20} /> },
  ];

  return (
    <div className="sticky top-0 z-50 bg-[#1b0f07]/30 backdrop-blur-md  shadow-lg font-tenorSans">
      <div className="relative flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black">
        {/* Logo */}
        <h1 className="hidden md:flex w-full text-3xl font-bold text-[#9f5f2d]">Al Pereira's</h1>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex">
          {navItems.map((item) => (
            <Link to={item.link} key={item.id}>
              <li className="flex items-center font-bold p-4 text-[#b89785] rounded-xl m-2 cursor-pointer duration-300 hover:text-[#9f5f2d]">
                {item.icon}
                <span className="ml-2">{item.text}</span>
              </li>
            </Link>
          ))}
        </ul>

        {/* Mobile Navigation Menu */}
        <h1 className="w-full text-2xl font-bold text-[#9f5f2d] md:hidden">Al Pereira's</h1>

        <ul className="flex md:hidden">
          {navItems.map((item) => (
            <Link to={item.link} key={item.id}>
              <li className="flex items-center p-4 text-[#b89785] rounded-xl m-2 cursor-pointer duration-300 hover:text-[#9f5f2d]">
                {item.icon}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
