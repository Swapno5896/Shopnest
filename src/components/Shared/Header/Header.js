import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';

const Header = () => {
  return (
    <header className="body-font bg-red-600 text-white">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className="ml-3 text-yellow-100">
            Get upto 70% Discount Everyday
          </span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <div className="mr-2 text-black">
            <button className="inline-flex items-center bg-red-400 border-0  py-1 px-3 focus:outline-none hover:bg-red-200 rounded ml-2 text-base mt-4 md:mt-0">
              Wish List
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>

          <div className="mr-2 border-l-2 border-white">
            <button className="inline-flex items-center bg-red-600 border-0 py-1 px-3 focus:outline-none hover:bg-red-200 hover:text-black rounded ml-2 text-base mt-4 md:mt-0">
              Currency
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>

          <div className="mr-2 border-l-2 border-white">
            <button className="inline-flex items-center bg-red-600 border-0 py-1 px-3 focus:outline-none hover:bg-red-200 hover:text-black rounded ml-2 text-base mt-4 md:mt-0">
              Language
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>

          <div className="mr-2 border-l-2 border-white">
            <button className="inline-flex items-center bg-red-600 border-0 py-1 px-3 focus:outline-none hover:bg-red-200 hover:text-black rounded ml-2 text-base mt-4 md:mt-0">
              My Account
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </nav>
      </div>

      {/* here is the start of  search bar nav */}

      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" to="/">
          <span className="ml-3 text-xl">ShopNest</span>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <div className="relative text-gray-600">
            <input
              type="search"
              name="search"
              placeholder="Search"
              style={{ minWidth: '25rem' }}
              className="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"
            />
            <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
              🔍
            </button>
          </div>
        </nav>
        <button className="inline-flex items-center bg-red-600 border-0 py-1 px-3 focus:outline-none hover:bg-yellow-100 hover:text-black rounded text-base mt-4 md:mt-0">
          0 Items / $0.00
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>

      {/* here is the start of  search bar nav */}

      <div className="container mx-auto flex flex-wrap text-black p-5 flex-col bg-red-200 md:flex-row items-center">
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
