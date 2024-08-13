"use client"

import React, { useState } from 'react';
import { RxCrossCircled } from "react-icons/rx";
import { IoMenu } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import { FaHome, FaCogs, FaBlog, FaPhone, FaLock, FaUser, FaEnvelope } from 'react-icons/fa';
import ShiptCard from "./Shipt-card"


const Navbar = () => {

  const [sidebar, setSidebar] = useState(false);

  const handleSidebar = () => {
      setSidebar(!sidebar);
  };


  return (
  
     

  <header className="relative bg-white">
    <p className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">Get free delivery on orders over $100</p>

    <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="border-b border-gray-200">
        <div className="flex h-16 items-center">
       <button onClick={handleSidebar} type="button" className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden">
            <span className="absolute -inset-0.5"></span>
            <span className="sr-only">Open menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>

          <div className="ml-4 flex lg:ml-0">
            <Link href="#">
              <span className="sr-only">Your Company</span>
              <img className="h-8 w-auto" src="/image/logo.png" alt=""/>
            </Link>
          </div>

          <div className="hidden lg:ml-8 lg:block lg:self-stretch">
            <div className="flex h-full space-x-8">
              <div className="flex">
                <div className="relative flex">
                <Link href={"/"} className="relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800" aria-expanded="false">Home</Link>
                </div>

               
              </div>
              <div className="flex">
                <div className="relative flex">
                  <Link href={"/about"} className="relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800" aria-expanded="false">About</Link>
                </div>

               
               
              </div>

              <Link href="/product" className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">Products</Link>
              <Link href="/contact" className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">Contact</Link>
            </div>
          </div>

          <div className="ml-auto flex items-center">
            <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
              <Link href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">Sign in</Link>
              <span className="h-6 w-px bg-gray-200" aria-hidden="true"></span>
              <Link href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">Create account</Link>
            </div>

            <div className="hidden lg:ml-8 lg:flex">
              <Link href="#" className="flex items-center text-gray-700 hover:text-gray-800">
                <img src="https://tailwindui.com/img/flags/flag-canada.svg" alt="" className="block h-auto w-5 flex-shrink-0"/>
                <span className="ml-3 block text-sm font-medium">CAD</span>
                <span className="sr-only">, change currency</span>
              </Link>
            </div>

            <div className="flex lg:ml-6">
              <Link href="#" className="p-2 text-gray-400 hover:text-gray-500">
                <span className="sr-only">Search</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </Link>
            </div>

            <div className="ml-4 flow-root lg:ml-6">
            <ShiptCard />
              <Link href="#" className="group  -m-7 flex items-center p-2">
                <svg className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path  strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
                <div className="ml-0 text-sm font-medium text-gray-700 group-hover:text-gray-800"></div>
                <span className="sr-only">items in cart, view bag</span>
              </Link>
             
            </div>
          </div>
          </div>
          </div>
        
    </nav>


{/* Mobile Sidebar */}
<nav className={`fixed z-40 top-0 left-0 w-full text-2xl font-semibold text-black h-full bg-white bg-opacity-30 backdrop-blur-sm rounded-lg shadow-lg flex flex-col px-10 pt-10   transform ${sidebar ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
    <div className='flex justify-end w-full p-4'>
        <RxCrossCircled onClick={handleSidebar} className='text-3xl text-black -pr-5 cursor-pointer hover:text-gray-300 transition-colors duration-200' />
    </div>
    <ul className='flex flex-col gap-6 text-gray-600'>
        <li className='flex items-center gap-2'>
            <FaHome className='text-xl' />
            <Link className='text-lg font-semibold hover:text-gray-800 transition-colors duration-200' href="/">Home</Link>
        </li>
        <li className='flex items-center gap-2'>
            <FaCogs className='text-xl' />
            <Link className='text-lg font-semibold hover:text-gray-800 transition-colors duration-200' href="/product">Products</Link>
        </li>
        <li className='flex items-center gap-2'>
            <FaBlog className='text-xl' />
            <Link className='text-lg font-semibold hover:text-gray-800 transition-colors duration-200' href="/about">About</Link>
        </li>
        <li className='flex items-center gap-2'>
            <FaPhone className='text-xl' />
            <Link className='text-lg font-semibold hover:text-gray-800 transition-colors duration-200' href="/contact">Contact</Link>
        </li>
        <li className='flex items-center gap-2'>
            <FaLock className='text-xl' />
            <Link className='text-lg font-semibold hover:text-gray-800 transition-colors duration-200' href="/privacy">Privacy</Link>
        </li>
        <li className='flex items-center gap-2'>
            <FaEnvelope className='text-xl' />
            <Link className='text-lg font-semibold hover:text-gray-800 transition-colors duration-200' href="/messages">Messages</Link>
        </li>
        <li className='flex items-center gap-2'>
            <FaUser className='text-xl' />
            <Link className='text-lg font-semibold hover:text-gray-800 transition-colors duration-200' href="/profile">Profile</Link>
        </li>
    </ul>
    <div className='absolute bottom-10 w-full ml-0 flex items-center justify-center'>
        <Link href="/profile" className='flex justify-center -ml-9 items-center gap-2 text-gray-600 text-lg font-semibold hover:text-gray-300 transition-colors duration-200'>
            <FaUser className='text-xl' />
            Profile
        </Link>
    </div>
</nav>


  </header>


  );
};

export default Navbar;
